import { useState } from 'react'
import GuildLogo from './GuildLogo'
import { config } from '../data/guildData'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Estadísticas', href: '#stats' },
    { name: 'Miembros', href: '#members' },
    { name: 'Conquistas', href: '#conquests' },
    { name: 'Reclutamiento', href: '#recruit' },
    { name: 'Contacto', href: '#contact' },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offsetTop = element.offsetTop - 80 // 80px para compensar el nav fijo
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setIsOpen(false) // Cerrar menú móvil después de click
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warborne-dark/80 backdrop-blur-md border-b border-warborne-orange/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <GuildLogo size="small" animated={false} />
            <div>
              <h1 className="font-display font-bold text-2xl text-glow">{config.guildName}</h1>
              <p className="text-xs text-gray-400">Facción {config.faction}</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-gray-300 hover:text-warborne-orange transition-colors duration-300 font-semibold uppercase tracking-wider text-sm cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-warborne-orange focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="block py-3 text-gray-300 hover:text-warborne-orange transition-colors duration-300 font-semibold uppercase tracking-wider border-t border-warborne-orange/20 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
