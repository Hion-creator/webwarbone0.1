import { useEffect, useState, useRef } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  type: 'ash' | 'ember' | 'smoke'
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Crear partículas
    const particles: Particle[] = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      const type = Math.random() < 0.7 ? 'ash' : Math.random() < 0.85 ? 'ember' : 'smoke'
      particles.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: type === 'smoke' ? 20 + Math.random() * 40 : 1 + Math.random() * 3,
        speedY: type === 'ember' ? -0.5 - Math.random() * 1.5 : 0.2 + Math.random() * 0.8,
        speedX: (Math.random() - 0.5) * 0.5,
        opacity: type === 'smoke' ? 0.1 + Math.random() * 0.2 : 0.3 + Math.random() * 0.7,
        type
      })
    }

    // Variables para relámpagos
    let lightningTimer = 0
    const lightningInterval = 5000 + Math.random() * 10000
    let lightningActive = false
    let lightningOpacity = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Efecto de niebla base
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, 'rgba(10, 10, 10, 0.3)')
      gradient.addColorStop(0.5, 'rgba(26, 26, 26, 0.2)')
      gradient.addColorStop(1, 'rgba(10, 10, 10, 0.4)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        // Actualizar posición
        particle.y += particle.speedY
        particle.x += particle.speedX

        // Reset si sale de la pantalla
        if (particle.type === 'ember' && particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
        } else if (particle.y > canvas.height + 10) {
          particle.y = -10
          particle.x = Math.random() * canvas.width
        }

        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10

        // Dibujar según tipo
        if (particle.type === 'smoke') {
          // Humo difuso
          const smokeGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          )
          smokeGradient.addColorStop(0, `rgba(100, 100, 100, ${particle.opacity})`)
          smokeGradient.addColorStop(1, 'rgba(100, 100, 100, 0)')
          ctx.fillStyle = smokeGradient
          ctx.fillRect(
            particle.x - particle.size,
            particle.y - particle.size,
            particle.size * 2,
            particle.size * 2
          )
        } else if (particle.type === 'ember') {
          // Brasas brillantes
          ctx.shadowBlur = 10
          ctx.shadowColor = `rgba(255, 107, 53, ${particle.opacity})`
          ctx.fillStyle = `rgba(255, 107, 53, ${particle.opacity})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        } else {
          // Ceniza
          ctx.fillStyle = `rgba(200, 200, 200, ${particle.opacity})`
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size)
        }
      })

      // Sistema de relámpagos
      lightningTimer += 16
      if (lightningTimer > lightningInterval && !lightningActive) {
        lightningActive = true
        lightningOpacity = 0.3 + Math.random() * 0.3
        lightningTimer = 0
      }

      if (lightningActive) {
        // Destello de relámpago
        ctx.fillStyle = `rgba(255, 200, 100, ${lightningOpacity})`
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        lightningOpacity -= 0.02
        if (lightningOpacity <= 0) {
          lightningActive = false
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [dimensions])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Canvas animado */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-warborne-darker via-transparent to-warborne-darker"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-warborne-darker"></div>
      
      {/* Resplandores de fuego lejano */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warborne-orange/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warborne-red/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-warborne-yellow/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]"></div>
    </div>
  )
}

export default ParticleBackground
