import { guildStats, config } from '../data/guildData'

const StatsSection = () => {
  return (
    <section id="stats" className="relative z-10 py-20 px-4 bg-warborne-dark/50 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title text-center mb-4">
          Estado del Gremio
        </h2>
        <p className="text-center text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
          Seguimiento del dominio de {config.guildName} en el campo de batalla
        </p>
        
        {/* Grid de estadísticas principales - Simplificado */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Ranking en Sirio */}
          <div className="card-warborne text-center relative overflow-hidden group hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all"></div>
            <div className="relative">
              <div className="text-6xl md:text-7xl font-display font-black text-glow mb-2">#{guildStats.ranking}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-3">Ranking {config.faction}</div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold border border-yellow-500/50">
                <span>🏆</span>
                <span>{guildStats.rankingBadge}</span>
              </div>
            </div>
          </div>
          
          {/* Total Bajas */}
          <div className="card-warborne text-center group hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-display font-bold text-warborne-orange mb-2">{guildStats.totalKills.toLocaleString()}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-3">Total Bajas</div>
            <div className="inline-flex items-center gap-1 text-xs text-green-400 font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+{guildStats.killsThisWeek} esta semana</span>
            </div>
          </div>
          
          {/* Última Conquista */}
          <div className="card-warborne text-center group hover:scale-105 transition-all duration-300">
            <div className="text-lg md:text-xl font-display font-bold text-white mb-2">{guildStats.lastConquest.name}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-3">Última Conquista</div>
            <div className="inline-flex items-center gap-2 text-xs text-warborne-orange font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{guildStats.lastConquest.time}</span>
            </div>
          </div>
          
          {/* Racha de Victorias */}
          <div className="card-warborne text-center group hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all"></div>
            <div className="relative">
              <div className="text-6xl md:text-7xl font-display font-black text-glow mb-2">{guildStats.winStreak}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-3">Racha Actual</div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-xs font-bold border border-red-500/50">
                <span>🔥</span>
                <span>{guildStats.streakStatus}</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default StatsSection
