import { useState } from 'react'

interface Member {
  nick: string
  faction: string
  guild: string
  role: string
  avatar: string
  level: number
  kills: number
  assists: number
  isLeader?: boolean  // 👑 Indica si es el líder del gremio
  isWebmaster?: boolean  // 💻 Indica si es el webmaster
}

interface MemberCardProps {
  member: Member
}

const MemberCard = ({ member }: MemberCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const getRoleColor = (role: string) => {
    switch (role.toUpperCase()) {
      case 'DPS':
        return 'text-red-500'
      case 'TANK':
        return 'text-blue-500'
      case 'SUPPORT':
        return 'text-green-500'
      default:
        return 'text-warborne-orange'
    }
  }

  const getRoleBg = (role: string) => {
    switch (role.toUpperCase()) {
      case 'DPS':
        return 'bg-red-500/20 border-red-500'
      case 'TANK':
        return 'bg-blue-500/20 border-blue-500'
      case 'SUPPORT':
        return 'bg-green-500/20 border-green-500'
      default:
        return 'bg-warborne-orange/20 border-warborne-orange'
    }
  }

  return (
    <>
      <div className="card-warborne group hover:scale-105 transform transition-all duration-300">
        {/* Corona de Líder - FUERA de la foto, arriba de la tarjeta */}
        {member.isLeader && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 animate-pulse-slow">
            <div className="relative">
              {/* Resplandor dorado */}
              <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-60 animate-pulse-slow"></div>
              {/* Corona */}
              <div className="relative text-5xl drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.9))' }}>
                👑
              </div>
            </div>
          </div>
        )}
        
        {/* Avatar */}
        <div className="relative mb-4 overflow-hidden rounded-lg h-48">
          <img 
            src={member.avatar} 
            alt={member.nick}
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warborne-dark via-transparent to-transparent"></div>
          
          {/* Level Badge */}
          <div className="absolute top-4 right-4 bg-warborne-orange text-white px-3 py-1 rounded-full font-bold">
            Lvl {member.level}
          </div>

          {/* Role Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full font-bold border ${getRoleBg(member.role)}`}>
            <span className={getRoleColor(member.role)}>{member.role}</span>
          </div>

          {/* Badge de Webmaster */}
          {member.isWebmaster && (
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider border-2 border-purple-400 shadow-lg animate-pulse-slow">
              💻 Webmaster
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-3">
          {/* Name */}
          <h3 className="font-display font-bold text-2xl text-glow">{member.nick}</h3>
          
          {/* Faction & Guild */}
          <div className="flex items-center justify-between text-sm">
            <div>
              <span className="text-gray-500">Facción:</span>
              <span className="ml-2 text-warborne-orange font-semibold">{member.faction}</span>
            </div>
            <div>
              <span className="text-gray-500">Gremio:</span>
              <span className="ml-2 text-warborne-orange font-semibold uppercase">{member.guild}</span>
            </div>
          </div>

          {/* Stats - Kills y Asistencias destacadas */}
          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-warborne-orange/30">
            <div className="text-center p-3 bg-warborne-red/10 rounded-lg border border-warborne-red/30">
              <div className="text-2xl font-bold text-warborne-red">{member.kills.toLocaleString()}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">⚔️ Bajas</div>
            </div>
            <div className="text-center p-3 bg-warborne-orange/10 rounded-lg border border-warborne-orange/30">
              <div className="text-2xl font-bold text-warborne-orange">{member.assists.toLocaleString()}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">🤝 Asistencias</div>
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-4 px-4 py-2 bg-transparent border border-warborne-orange/50 text-warborne-orange rounded hover:bg-warborne-orange hover:text-white transition-all duration-300 font-semibold uppercase text-sm"
          >
            Ver Perfil
          </button>
        </div>
      </div>

      {/* Modal para imagen completa */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full">
            {/* Botón cerrar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-warborne-orange transition-colors duration-300 text-4xl font-bold"
            >
              ×
            </button>
            
            {/* Imagen completa */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={member.avatar}
                alt={member.nick}
                className="w-full h-auto max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warborne-dark via-warborne-dark/90 to-transparent p-6">
                <div className="flex items-center gap-3 mb-3">
                  {/* Corona de líder si aplica */}
                  {member.isLeader && (
                    <div className="text-4xl animate-pulse-slow" style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.8))' }}>
                      👑
                    </div>
                  )}
                  <h2 className="font-display font-bold text-4xl text-glow">{member.nick}</h2>
                  {member.isLeader && (
                    <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/40">
                      Líder
                    </span>
                  )}
                </div>
                
                {/* Info básica */}
                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="text-gray-400">Facción:</span>
                  <span className="text-warborne-orange font-semibold">{member.faction}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Level:</span>
                  <span className="text-warborne-orange font-semibold">{member.level}</span>
                  <span className="text-gray-400">•</span>
                  <span className={`font-semibold ${getRoleColor(member.role)}`}>{member.role}</span>
                </div>
                
                {/* Stats destacadas */}
                <div className="flex gap-4">
                  <div className="bg-warborne-red/20 border border-warborne-red/40 rounded px-4 py-2 flex items-center gap-2">
                    <span className="text-2xl">⚔️</span>
                    <div>
                      <div className="text-xl font-bold text-warborne-red">{member.kills.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">BAJAS</div>
                    </div>
                  </div>
                  <div className="bg-warborne-orange/20 border border-warborne-orange/40 rounded px-4 py-2 flex items-center gap-2">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <div className="text-xl font-bold text-warborne-orange">{member.assists.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">ASISTENCIAS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-500 mt-4 text-sm">
              Clic fuera de la imagen para cerrar
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default MemberCard
