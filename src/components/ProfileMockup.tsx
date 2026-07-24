import React from 'react';
import { Settings, Share, User, Ticket, Trophy, Fingerprint, Sparkles, Moon, Coffee, TreePine, Building2, UserPlus, Home, Compass, QrCode, Gift, MapPin } from 'lucide-react';
import { GlobalTopNavBar } from './GlobalTopNavBar';

export function ProfileMockup() {
  const activeUser = {
    displayName: 'Marcos Urrestarazu',
    photoURL: 'https://i.pravatar.cc/150?img=33',
    email: 'explorador@nuboapp.xyz',
    level: 14,
    points: '12.4k',
    visits: 48,
    referrals: 12
  };

  return (
    <div className="w-full aspect-[9/19.5] bg-[#0a1618] text-slate-100 flex flex-col overflow-hidden relative rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl scale-[1] sm:scale-100 origin-top">
      <GlobalTopNavBar />

      <main className="flex-1 overflow-y-auto pt-[80px] pb-24 hide-scrollbar">
        {/* Profile Hero Section */}
        <section className="flex flex-col items-center px-4 pt-0 pb-6">
          <div className="relative flex items-center justify-center w-28 h-28">
            {/* Circular Progress Ring */}
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <circle className="text-slate-800" cx="50" cy="50" fill="transparent" r="44" stroke="currentColor" strokeWidth="4"></circle>
              <circle className="text-primary" cx="50" cy="50" fill="transparent" r="44" stroke="currentColor" strokeDasharray="276.46" strokeDashoffset="69.11" strokeLinecap="round" strokeWidth="4"></circle>
            </svg>
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#0a1618] shadow-xl bg-slate-800 flex items-center justify-center relative z-10">
              <img alt="Avatar de usuario" className="w-full h-full object-cover" src={activeUser.photoURL}/>
            </div>
            {/* Badge Overlay */}
            <div className="absolute -bottom-1 bg-primary text-[#0a1618] px-2 py-0.5 rounded-full text-[8px] font-bold tracking-wider uppercase shadow-lg shadow-primary/20 z-20">
              Trotamundos
            </div>
          </div>
          <div className="mt-3 text-center">
            <h2 className="text-[13px] font-bold tracking-tight">{activeUser.displayName}</h2>
            <p className="text-primary font-medium text-[8px] mt-0.5">Próximo Nivel: Leyenda Urbana</p>
            <div className="mt-3 flex gap-2 justify-center">
              <div className="bg-primary text-[#0a1618] px-3 py-1.5 rounded-full font-bold text-[8px] shadow-lg shadow-primary/30">
                Editar Perfil
              </div>
              <div className="bg-slate-800 text-slate-100 px-3 py-1.5 rounded-full font-bold text-[8px] border border-slate-700">
                Invitar Amigos
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Grid */}
        <section className="px-3 grid grid-cols-2 gap-2 mt-2">
          <div className="bg-[#162529]/80 border border-white/5 p-2 rounded-xl flex flex-col items-center justify-center text-center">
            <Ticket className="w-5 h-5 text-primary mb-1" />
            <span className="text-[9px] font-bold tracking-tight text-white">Mi Pasaporte</span>
          </div>
          <div className="bg-secondary/5 border border-secondary/20 p-2 rounded-xl flex flex-col items-center justify-center text-center">
            <Trophy className="w-5 h-5 text-secondary mb-1" />
            <span className="text-[9px] font-bold tracking-tight text-white">Mis Logros</span>
          </div>
        </section>
        
        {/* DNA Banner */}
        <section className="px-3 mt-3">
          <div className="w-full relative rounded-xl overflow-hidden shadow-lg mb-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-fuchsia-600/80 -z-10"></div>
            
            <div className="p-3 flex items-center justify-between z-10 relative">
              <div className="flex flex-col">
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/80 mb-0.5">Descubrí tu</span>
                <span className="font-display font-black text-[13px] text-white drop-shadow-md leading-none mt-0.5">ADN Nubo</span>
                <span className="text-[7px] font-semibold text-white/90 mt-1">¿Qué tipo de explorador sos?</span>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-md">
                <Fingerprint className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          {/* Holographic Companion Banner */}
          <div className="w-full relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-cyan-900 to-[#050B14] border border-cyan-500/30">
            <div className="p-3 flex items-center justify-between z-10 relative">
              <div className="flex flex-col">
                <span className="text-[6px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-0.5 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> Sistema IA Activo
                </span>
                <span className="font-display font-black text-[13px] text-white drop-shadow-md leading-none mt-0.5">NEXUS v1.2</span>
                <span className="text-[7px] font-semibold text-cyan-100/70 mt-1">Tu compañero de exploración</span>
              </div>
              
              <div className="w-8 h-8 relative flex items-center justify-center">
                <div className="absolute inset-0 border border-cyan-400/50 rounded-md rotate-45 shadow-[0_0_10px_rgba(25,204,240,0.4)]"></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_#fff,0_0_15px_#22d3ee] animate-pulse relative z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Summary Panel */}
        <section className="px-3 mt-3">
          <div className="bg-[#162529]/80 border border-white/5 p-2 rounded-xl grid grid-cols-3 divide-x divide-white/10">
            <div className="flex flex-col items-center text-center px-1">
              <span className="text-[12px] font-bold tracking-tight">12.4k</span>
              <span className="text-[6px] uppercase tracking-widest text-slate-500 mt-1 font-semibold leading-none">Puntos Totales</span>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <span className="text-[12px] font-bold tracking-tight text-primary drop-shadow-[0_0_5px_rgba(25,204,240,0.5)]">48</span>
              <span className="text-[6px] uppercase tracking-widest text-primary mt-1 font-bold leading-none">Visitas</span>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <span className="text-[12px] font-bold tracking-tight">12</span>
              <span className="text-[6px] uppercase tracking-widest text-slate-500 mt-1 font-semibold leading-none">Referidos</span>
            </div>
          </div>
        </section>
        
        {/* Achievements Horizontal Rail */}
        <section className="mt-4">
          <div className="px-3 flex justify-between items-end mb-2">
            <h3 className="text-[10px] font-bold tracking-tight">Logros Recientes</h3>
            <span className="text-primary text-[7px] font-medium">Ver todos</span>
          </div>
          <div className="flex gap-2 overflow-x-auto px-3 pb-2 hide-scrollbar">
            <div className="flex-none w-20 h-20 bg-[#162529]/80 border border-white/5 rounded-xl flex flex-col items-center justify-center p-2 text-center border-t-primary/40 border-t-2">
              <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-1.5">
                <Moon className="text-primary w-3 h-3" />
              </div>
              <p className="text-[7px] font-bold leading-tight">Explorador Nocturno</p>
            </div>
            <div className="flex-none w-20 h-20 bg-[#162529]/80 border border-white/5 rounded-xl flex flex-col items-center justify-center p-2 text-center border-t-amber-400/40 border-t-2">
              <div className="w-7 h-7 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-1.5">
                <Coffee className="text-amber-400 w-3 h-3" />
              </div>
              <p className="text-[7px] font-bold leading-tight">Café Lover</p>
            </div>
            <div className="flex-none w-20 h-20 bg-[#162529]/80 border border-white/5 rounded-xl flex flex-col items-center justify-center p-2 text-center border-t-emerald-400/40 border-t-2">
              <div className="w-7 h-7 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-1.5">
                <TreePine className="text-emerald-400 w-3 h-3" />
              </div>
              <p className="text-[7px] font-bold leading-tight">Fanático Urbano</p>
            </div>
          </div>
        </section>
        
        {/* Activity Feed */}
        <section className="mt-4 px-3">
          <h3 className="text-[10px] font-bold tracking-tight mb-2">Actividad Reciente</h3>
          <div className="space-y-1.5">
            <div className="bg-[#162529]/80 border border-white/5 p-2 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                  <Coffee className="text-primary w-3 h-3" />
                </div>
                <div>
                  <p className="font-bold text-[8px]">Visitaste Café Central</p>
                  <p className="text-[6px] text-slate-500">Hace 2 horas • Palermo</p>
                </div>
              </div>
              <span className="text-primary font-bold text-[8px]">+50 pts</span>
            </div>
            <div className="bg-[#162529]/80 border border-white/5 p-2 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                  <Building2 className="text-primary w-3 h-3" />
                </div>
                <div>
                  <p className="font-bold text-[8px]">Museo de Arte Moderno</p>
                  <p className="text-[6px] text-slate-500">Ayer • San Telmo</p>
                </div>
              </div>
              <span className="text-primary font-bold text-[8px]">+120 pts</span>
            </div>
          </div>
        </section>
      </main>

      <nav className="absolute bottom-0 left-0 right-0 z-50 h-[76px]">
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-t-[2rem] border-t border-white/20 shadow-[0_-4px_24px_rgba(0,0,0,0.5)] -z-10"></div>
        <div className="flex items-center justify-around h-full px-2 pb-2">
          <div className="flex flex-col items-center justify-center text-slate-500 w-12 mt-1">
            <Home className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Inicio</span>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-500 w-12 mt-1">
            <Compass className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Explorar</span>
          </div>
          <div className="relative w-14 flex justify-center -mt-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary shadow-[0_0_20px_rgba(25,204,240,0.5)] flex items-center justify-center text-[#101f22] ring-[4px] ring-slate-900 mb-1 relative z-10">
                <QrCode className="w-6 h-6 font-bold" />
              </div>
              <span className="font-display text-[8px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Scan QR</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-500 w-12 mt-1">
            <Gift className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Premios</span>
          </div>
          <div className="flex flex-col items-center justify-center text-primary brightness-125 w-12 mt-1">
            <User className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Perfil</span>
          </div>
        </div>
      </nav>
      
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[35%] h-[4px] bg-slate-500/80 rounded-full z-[60]"></div>
    </div>
  );
}
