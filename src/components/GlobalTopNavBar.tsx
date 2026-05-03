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
        <img alt="NUBO" className="h-12 w-auto brightness-125 drop-shadow-[0_0_12px_rgba(67,221,226,0.6)]" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
      </div>
      
      <div className="flex items-center justify-end gap-3 relative z-10 w-1/3">
        <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:bg-white/10 cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-[14px]">language</span>
          <select className="bg-transparent border-none outline-none cursor-pointer appearance-none outline-none text-[10px]">
             <option value="es" className="bg-bgDark text-white">ES</option>
             <option value="en" className="bg-bgDark text-white">EN</option>
             <option value="pt" className="bg-bgDark text-white">PT</option>
          </select>
        </div>
        <button className="material-symbols-outlined text-primary cursor-pointer hover:text-cyan-300 transition-colors flex items-center justify-center text-[18px]">notifications</button>
      </div>
    </header>
  );
}
