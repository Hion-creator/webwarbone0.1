import logoSunthers from '../assets/sunthers-logo.png'

interface GuildLogoProps {
  size?: 'small' | 'medium' | 'large' | 'hero'
  animated?: boolean
}

const GuildLogo = ({ size = 'medium', animated = true }: GuildLogoProps) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
    hero: 'w-64 h-64 md:w-80 md:h-80'
  }

  return (
    <div className="relative inline-block group">
      {/* Glow effect background */}
      <div className={`absolute inset-0 bg-warborne-orange/30 rounded-full blur-3xl ${animated ? 'animate-pulse-slow' : ''} group-hover:bg-warborne-orange/50 transition-all duration-500`}></div>
      
      {/* Lightning Rays */}
      {animated && (
        <>
          {/* Rayo 1 - Superior */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-warborne-orange to-transparent opacity-60 animate-pulse-slow"></div>
          
          {/* Rayo 2 - Superior Derecha */}
          <div className="absolute top-4 right-4 w-1 h-16 bg-gradient-to-tr from-warborne-red to-transparent opacity-50 rotate-45 origin-bottom animate-pulse-slow delay-100"></div>
          
          {/* Rayo 3 - Derecha */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-warborne-orange to-transparent opacity-60 animate-pulse-slow delay-200"></div>
          
          {/* Rayo 4 - Inferior Derecha */}
          <div className="absolute bottom-4 right-4 w-1 h-16 bg-gradient-to-br from-warborne-red to-transparent opacity-50 -rotate-45 origin-top animate-pulse-slow delay-300"></div>
          
          {/* Rayo 5 - Inferior */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-warborne-orange to-transparent opacity-60 animate-pulse-slow"></div>
          
          {/* Rayo 6 - Inferior Izquierda */}
          <div className="absolute bottom-4 left-4 w-1 h-16 bg-gradient-to-bl from-warborne-red to-transparent opacity-50 rotate-45 origin-top animate-pulse-slow delay-100"></div>
          
          {/* Rayo 7 - Izquierda */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-1 bg-gradient-to-l from-warborne-orange to-transparent opacity-60 animate-pulse-slow delay-200"></div>
          
          {/* Rayo 8 - Superior Izquierda */}
          <div className="absolute top-4 left-4 w-1 h-16 bg-gradient-to-tl from-warborne-red to-transparent opacity-50 -rotate-45 origin-bottom animate-pulse-slow delay-300"></div>
        </>
      )}
      
      {/* Logo image */}
      <div className={`relative ${sizeClasses[size]} ${animated ? 'animate-float' : ''} group-hover:scale-110 transition-transform duration-500`}>
        <img 
          src={logoSunthers} 
          alt="SUNTHERS Guild Logo" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
        
        {/* Particle effects on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-1 h-1 bg-warborne-orange rounded-full animate-ping"></div>
          <div className="absolute top-0 right-0 w-1 h-1 bg-warborne-red rounded-full animate-ping delay-100"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-warborne-red rounded-full animate-ping delay-200"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-warborne-orange rounded-full animate-ping delay-300"></div>
        </div>
      </div>
    </div>
  )
}

export default GuildLogo
