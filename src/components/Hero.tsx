import { heroStats, config } from '../data/guildData'
import GuildLogo from './GuildLogo'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-7xl text-center relative z-10">
        {/* Guild Logo */}
        <div className="mb-8 mt-12 flex justify-center">
          <GuildLogo size="hero" animated={true} />
        </div>

        {/* Main Title */}
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl mb-4 animate-float">
          <span className="text-glow">{config.guildName}</span>
        </h1>

        {/* Badge - Gremio de Elite */}
        <div className="inline-block mb-6">
          <div className="px-6 py-2 bg-warborne-orange/20 border border-warborne-orange rounded-full">
            <span className="text-warborne-orange font-bold uppercase tracking-wider text-sm">
              Gremio de Elite
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-2xl md:text-4xl text-gray-300 mb-4 font-light">
          Maestros del Campo de Batalla
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          {config.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="card-warborne group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-display font-bold text-glow mb-2">{heroStats.members}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Guerreros</div>
            <div className="flex items-center justify-center mt-3 gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-green-400 font-semibold">{heroStats.membersOnline} Online</span>
            </div>
          </div>
          <div className="card-warborne group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-display font-bold text-glow mb-2">{heroStats.victories}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Victorias</div>
            <div className="text-xs text-green-400 mt-3 font-semibold">↑ +{heroStats.victoriesThisWeek} esta semana</div>
          </div>
          <div className="card-warborne group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-display font-bold text-glow mb-2">{heroStats.territories}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Territorios</div>
            <div className="mt-3 px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold inline-block">
              {heroStats.territoriesControl} Control
            </div>
          </div>
          <div className="card-warborne group hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full blur-2xl"></div>
            <div className="text-4xl font-display font-bold text-glow mb-2">#{heroStats.ranking}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Ranking {config.faction}</div>
            <div className="mt-3 px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold inline-block">
              🏆 Top Guild
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary text-lg px-8 py-4">
            Únete Ahora
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Ver Conquistas
          </button>
        </div>

        {/* Motto */}
        <div className="mt-16">
          <p className="text-xl md:text-2xl font-display font-bold text-gray-500 uppercase tracking-widest">
            {config.motto}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-warborne-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
