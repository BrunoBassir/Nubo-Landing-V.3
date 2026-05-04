import React from 'react';

export function GlobalTopNavBar() {
  const user = {
    photoURL: "https://i.pravatar.cc/150?img=33",
    displayName: "Marcos"
  };
  
  return (
    <header className="absolute top-0 left-0 right-0 w-full z-[60] flex items-center justify-between px-4 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(25,204,240,0.1)]">
      <div className="flex items-center gap-3 cursor-pointer relative z-10 w-1/3">
        <div className="w-8 h-8 rounded-full border-[1.5px] border-primary overflow-hidden flex items-center justify-center bg-primary/20 text-primary shrink-0">
          {user?.photoURL ? (
            <img 
              alt={user.displayName || "User"} 
              className="w-full h-full object-cover" 
              src={user.photoURL} 
            />
          ) : (
            <span className="material-symbols-outlined text-sm">person</span>
          )}
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-[8px] text-slate-500 font-bold uppercase leading-none mb-0.5">Nivel 14</span>
          <span className="text-xs font-bold text-white leading-none truncate w-full">
            {user?.displayName ? user.displayName.split(' ')[0] : 'Explorador'}
          </span>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center">
        <img alt="NUBO" className="h-12 w-auto brightness-125 drop-shadow-[0_0_12px_rgba(67,221,226,0.6)]" src="/logo.png" />
      </div>
      
      <div className="flex items-center justify-end gap-3 relative z-10 w-1/3">
        <button className="material-symbols-outlined text-primary cursor-pointer hover:text-cyan-300 transition-colors flex items-center justify-center text-[18px]">notifications</button>
      </div>
    </header>
  );
}
