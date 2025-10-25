const FactionFlag = () => {
  return (
    <div className="fixed top-16 right-8 z-40 hidden lg:block">
      <div className="relative group transform transition-transform duration-300 hover:scale-105">
        {/* Gancho metálico */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-3">
          <div className="w-12 h-2 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-900 rounded-sm shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>

        {/* Banner */}
        <div className="relative mt-0 animate-sway">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-purple-900/40 blur-xl transform translate-y-3 translate-x-2"></div>
          <div className="relative w-24 h-64 rounded-sm overflow-hidden shadow-2xl bg-gradient-to-b from-indigo-950 via-purple-900 to-violet-950">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/5 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/5 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full animate-pulse-slow"></div>
              <div className="relative text-6xl font-display font-black text-amber-400 drop-shadow-2xl">M</div>
            </div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
              <div className="font-display font-black text-amber-400 text-sm tracking-widest drop-shadow-lg">MORTAJA</div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>
              <div className="font-military text-purple-300 text-xs tracking-wider opacity-80">EST. 2025</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent animate-wave-slow pointer-events-none"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 bg-purple-600/20 blur-3xl rounded-full animate-pulse-slow -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default FactionFlag;
