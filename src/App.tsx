import Hero from './components/Hero'
import MemberCard from './components/MemberCard'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'
import StatsSection from './components/StatsSection'
import FactionFlag from './components/FactionFlag'
import { featuredMembers, conquests, conquestStats, recruitmentRequirements, raidSchedule, contactInfo, config, memberStats } from './data/guildData'

function App() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navigation />
      <FactionFlag />
      
      {/* Sección Inicio */}
      <Hero />
      
      {/* Dashboard de Estadísticas */}
      <StatsSection />
      
      {/* Sección de Miembros */}
      <section id="members" className="relative z-10 py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h2 className="section-title text-center md:text-left mb-0">
                Guerreros de Elite
              </h2>
            </div>
            <div className="card-warborne px-6 py-3 border-2 border-warborne-orange">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-white font-bold text-lg">{memberStats.online} / {memberStats.total} Online</span>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
            Los mejores combatientes de {config.faction}. Unidos bajo la bandera de {config.guildName}, 
            somos implacables en la batalla y leales hasta la muerte.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMembers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Conquistas */}
      <section id="conquests" className="relative z-10 py-20 px-4 bg-warborne-dark/30 scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="section-title text-center">
            Territorios Conquistados
          </h2>
          <p className="text-center text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
            Nuestra huella de victoria se extiende por todo Warborne. Cada territorio es un testimonio de nuestro poder.
          </p>
          
          {/* Stats Resumen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card-warborne text-center group hover:scale-105 transition-all duration-300 border-2 border-warborne-orange/50">
              <div className="text-5xl font-display font-bold text-glow mb-2">{conquestStats.totalTerritories}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Territorios Controlados</div>
              <div className="w-full bg-warborne-dark rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-warborne-orange to-warborne-red h-2 rounded-full animate-pulse-slow" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="card-warborne text-center group hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-display font-bold text-green-400 mb-2">{conquestStats.victoryRate}%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Tasa de Victoria</div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Invictos</span>
              </div>
            </div>
            <div className="card-warborne text-center group hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-display font-bold text-warborne-orange mb-2">{conquestStats.totalKills.toLocaleString()}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Bajas Totales</div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold">
                <span>🔥</span>
                <span>Dominio Total</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conquests.map((conquest, index) => (
              <div key={index} className="card-warborne">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-warborne-orange">{conquest.name}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold border border-green-500">
                    {conquest.status}
                  </span>
                </div>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Fecha de conquista:</span>
                    <span className="text-white font-semibold">{conquest.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bajas enemigas:</span>
                    <span className="text-warborne-orange font-bold">{conquest.kills}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-warborne-orange/30">
                  <div className="w-full bg-warborne-dark rounded-full h-2">
                    <div className="bg-gradient-to-r from-warborne-orange to-warborne-red h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">Control Total</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Reclutamiento */}
      <section id="recruit" className="relative z-10 py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="section-title text-center">
            Únete a las Filas
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {config.guildName} busca guerreros valientes. Si tienes lo necesario para 
            enfrentar las batallas más brutales, únete a nosotros.
          </p>
          
          <div className="card-warborne text-left mb-8">
            <h3 className="text-2xl font-display font-bold text-warborne-orange mb-6">Requisitos</h3>
            <ul className="space-y-3 text-gray-300">
              {recruitmentRequirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-warborne-orange mr-3 text-xl">{req.icon}</span>
                  <span><strong className="text-white">{req.title}</strong> {req.description}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Solicitar Ingreso
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Discord del Gremio
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className="relative z-10 py-20 px-4 bg-warborne-dark/50 scroll-mt-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="section-title text-center">
            Contacto
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            ¿Tienes preguntas? Contacta con nuestros comandantes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="card-warborne">
              <h3 className="text-xl font-display font-bold text-warborne-orange mb-3">Discord</h3>
              <p className="text-gray-400 mb-4">Únete a nuestro servidor de Discord para comunicarte con el gremio</p>
              <a href={contactInfo.discordUrl} target="_blank" rel="noopener noreferrer">
                <button className="btn-secondary w-full">{contactInfo.discordText}</button>
              </a>
            </div>
            <div className="card-warborne">
              <h3 className="text-xl font-display font-bold text-warborne-orange mb-3">En el Juego</h3>
              <p className="text-gray-400 mb-4">Busca a nuestros líderes directamente en Warborne</p>
              <p className="text-white font-semibold">Líder: <span className="text-warborne-orange">{contactInfo.leaderName}</span></p>
            </div>
          </div>
          
          <div className="card-warborne">
            <h3 className="text-2xl font-display font-bold text-warborne-orange mb-4">Horarios de Raids</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {raidSchedule.map((schedule, index) => (
                <div key={index}>
                  <p className="text-gray-500 text-sm uppercase">{schedule.days}</p>
                  <p className="text-white font-bold">{schedule.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-warborne-orange/30">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-gray-500">
            © {config.year} {config.guildName} - Gremio de Elite | Facción {config.faction} | Warborne
          </p>
          <p className="text-gray-600 text-sm mt-2">
            {config.motto}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

