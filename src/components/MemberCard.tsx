interface Member {
  nick: string
  faction: string
  guild: string
  role: string
  avatar: string
  level: number
  kills: number
  victories: number
}

interface MemberCardProps {
  member: Member
}

const MemberCard = ({ member }: MemberCardProps) => {
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
    <div className="card-warborne group hover:scale-105 transform transition-all duration-300">
      {/* Avatar */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={member.avatar} 
          alt={member.nick}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-warborne-orange/30">
          <div className="text-center">
            <div className="text-xl font-bold text-warborne-orange">{member.kills.toLocaleString()}</div>
            <div className="text-xs text-gray-500 uppercase">Bajas</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-warborne-orange">{member.victories}</div>
            <div className="text-xs text-gray-500 uppercase">Victorias</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-warborne-orange">A+</div>
            <div className="text-xs text-gray-500 uppercase">Rango</div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-4 px-4 py-2 bg-transparent border border-warborne-orange/50 text-warborne-orange rounded hover:bg-warborne-orange hover:text-white transition-all duration-300 font-semibold uppercase text-sm">
          Ver Perfil
        </button>
      </div>
    </div>
  )
}

export default MemberCard
