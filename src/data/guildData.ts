/**
 * 🎮 PANEL DE CONTROL - SUNTHERS GUILD
 * 
 * Actualiza aquí todos los datos de la página del gremio.
 * Después de hacer cambios, ejecuta: npm run deploy
 */

import avatar01 from '../assets/avatar01.png'
import avatar02 from '../assets/avatar02.png'

// ============================================
// 📊 ESTADÍSTICAS GENERALES DEL GREMIO
// ============================================
export const guildStats = {
  // Ranking en la Facción Sirio
  ranking: 10,                    // Tu posición en el ranking
  rankingBadge: "Top Guild",     // Texto del badge
  
  // Bajas enemigas
  totalKills: 12450,             // Total histórico de bajas
  killsThisWeek: 230,            // Bajas de esta semana
  
  // Última conquista
  lastConquest: {
    name: "Fortaleza Norte",     // Nombre del territorio
    time: "Hace 2 horas"         // Tiempo transcurrido
  },
  
  // Racha de victorias
  winStreak: 3,                 // Victorias consecutivas actuales
  streakStatus: "Imparable"      // Estado de la racha
}

// ============================================
// 👥 ESTADÍSTICAS DE MIEMBROS
// ============================================
export const memberStats = {
  total: 50,           // Total de miembros en el gremio
  online: 23,          // Miembros online ahora
  totalVictories: 3 // Victorias totales del gremio
}

// ============================================
// 🏆 STATS DEL HERO (Pantalla Principal)
// ============================================
export const heroStats = {
  members: memberStats.total,
  membersOnline: memberStats.online,
  victories: `${Math.floor(memberStats.totalVictories / 100) * 100}+`, // Se redondea automáticamente
  territories: 3,
  ranking: guildStats.ranking,
  territoriesControl: "100%",
  victoriesThisWeek: 89
}

// ============================================
// 👤 MIEMBROS DESTACADOS
// ============================================
export const featuredMembers = [
  {
    nick: "Hion",
    faction: "Sirio",
    guild: "sunthers",
    role: "DPS",                    // DPS, TANK, SUPPORT
    avatar: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&h=400&fit=crop",
    level: 36,
    kills: 1247,
    assists: 89
  },
  {
    nick: "By_Ayone",
    faction: "Morada",
    guild: "sunthers",
    role: "OffTank",
    avatar: avatar01,
    level: 36,
    kills: 126,
    assists: 1020
  },
  {
    nick:   "Ready" ,
    faction: "Mortaja",
    guild: "Sunthers",
    role: "DPS",
    avatar: avatar02,
    level: 36,
    kills: 114,
    assists: 873
  },
  // Agrega más miembros aquí copiando el formato:
  /*
  {
    nick: "NombreJugador",
    faction: "Sirio",
    guild: "sunthers",
    role: "TANK",
    avatar: "URL_DE_IMAGEN",
    level: 40,
    kills: 500,
    assists: 50
  },
  */
]

// ============================================
// 🗺️ TERRITORIOS CONQUISTADOS
// ============================================
export const conquests = [
  {
    name: "Fortaleza del Norte",
    date: "15 Oct 2025",
    kills: 423,
    status: "Dominado"              // Dominado, En Disputa, Perdido
  },
  {
    name: "Valle Sombrío",
    date: "08 Oct 2025",
    kills: 312,
    status: "Dominado"
  },
  {
    name: "Campos de Ceniza",
    date: "01 Oct 2025",
    kills: 567,
    status: "Dominado"
  },
  // Agrega más conquistas aquí
]

// Stats resumen de conquistas
export const conquestStats = {
  totalTerritories: conquests.filter(c => c.status === "Dominado").length,
  victoryRate: 100,  // Porcentaje de victoria
  totalKills: conquests.reduce((sum, c) => sum + c.kills, 0), // Suma automática de todas las bajas
  conquestsToday: 3
}

// ============================================
// 📋 REQUISITOS DE RECLUTAMIENTO
// ============================================
export const recruitmentRequirements = [
  {
    icon: "⚔️",
    title: "Nivel mínimo:",
    description: "35+"
  },
  {
    icon: "🎯",
    title: "Actividad:",
    description: "Mínimo 4 días a la semana"
  },
  {
    icon: "🗣️",
    title: "Comunicación:",
    description: "Discord obligatorio"
  },
  {
    icon: "🤝",
    title: "Trabajo en equipo:",
    description: "Esencial para raids y conquistas"
  },
  {
    icon: "💪",
    title: "Compromiso:",
    description: "Participación en eventos del gremio"
  }
]

// ============================================
// 📅 HORARIOS DE RAIDS
// ============================================
export const raidSchedule = [
  {
    days: "Lunes - Miércoles",
    time: "20:00 - 23:00 GMT"
  },
  {
    days: "Viernes - Domingo",
    time: "19:00 - 01:00 GMT"
  },
  {
    days: "Eventos Especiales",
    time: "Anunciado en Discord"
  }
]

// ============================================
// 📞 INFORMACIÓN DE CONTACTO
// ============================================
export const contactInfo = {
  leaderName: "Lnanoz",                  // Nombre del líder principal
  discordUrl: "https://discord.gg/rDahNYZSBq",                      // URL del servidor de Discord
  discordText: "Únete al Discord"       // Texto del botón
}

// ============================================
// ⚙️ CONFIGURACIÓN GENERAL
// ============================================
export const config = {
  guildName: "SUNTHERS",
  faction: "Sirio",
  motto: "Boundless • Relentless • Fearless",
  description: "Somos los guerreros más temidos de Warborne. Montamos behemoths, comandamos máquinas de guerra y conquistamos cada territorio que pisamos.",
  year: new Date().getFullYear()
}
