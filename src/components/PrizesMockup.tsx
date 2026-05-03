import React from 'react';
import { Store, Ticket, UtensilsCrossed, Flame, Gavel, Lock, Home, Compass, QrCode, Gift, Trophy } from 'lucide-react';
import { GlobalTopNavBar } from './GlobalTopNavBar';

export function PrizesMockup() {
  return (
    <div className="w-full aspect-[9/19.5] bg-[#101f22] text-slate-100 flex flex-col overflow-hidden relative rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl scale-[1] sm:scale-100 origin-top">
      <GlobalTopNavBar />

      <main className="flex-1 overflow-y-auto hide-scrollbar pb-6 pt-[80px] relative">
        <div className="px-4 py-1 flex items-center justify-between mt-2 mb-3">
          <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">Nubo Rewards</span>
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 gap-0.5 relative z-10 w-2/3">
            <div className="flex-1 py-1 rounded-full text-[8px] bg-primary text-[#101f22] font-bold shadow-[0_0_15px_rgba(25,204,240,0.3)] flex items-center justify-center gap-1">
              <Store className="w-3 h-3" /> Mercado
            </div>
            <div className="flex-1 py-1 rounded-full text-[8px] text-slate-400 font-medium flex items-center justify-center gap-1">
              <Ticket className="w-3 h-3" /> Mis Canjes
            </div>
          </div>
        </div>

        <div className="px-4 py-1 flex gap-1.5 overflow-x-auto hide-scrollbar">
          <div className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-tight bg-primary/10 border border-primary text-primary shadow-[0_0_10px_rgba(25,204,240,0.3)] shrink-0">
            Todo
          </div>
          <div className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-tight bg-[#162529] border border-white/10 text-slate-400 shrink-0">
            Gastronomía
          </div>
          <div className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-tight bg-[#162529] border border-white/10 text-slate-400 shrink-0">
            Atractivo
          </div>
        </div>

        <div className="px-4 pt-4 space-y-5 relative">
          <section>
            <div className="flex items-center justify-between mb-2.5 px-0.5">
              <h2 className="text-[11px] font-bold flex items-center gap-1.5 uppercase tracking-widest text-slate-300">
                <UtensilsCrossed className="text-primary w-3.5 h-3.5" /> Gastronomía
              </h2>
              <span className="text-primary text-[8px] font-bold uppercase">Ver todo</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl overflow-hidden relative group border border-transparent shadow-[0_0_15px_rgba(25,204,240,0.15)] ring-1 ring-primary/30">
                <div className="h-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162529] via-[#162529]/40 to-transparent"></div>
                  <div className="absolute top-1.5 right-1.5 bg-primary text-[#101f22] text-[6px] font-black px-1.5 py-0.5 rounded shadow-lg">DISPONIBLE</div>
                </div>
                <div className="p-2 bg-[#162529] relative z-10">
                  <h3 className="text-[9px] font-bold line-clamp-1 mb-0.5 text-primary">Café de Especialidad</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-primary text-[9px] font-black">450 Pts</span>
                    <span className="text-slate-500 text-[6px] uppercase font-bold">Nivel 1</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden relative group border border-slate-600/50">
                <div className="h-20 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400')" }}>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Lock className="text-white w-4 h-4" />
                  </div>
                </div>
                <div className="p-2 bg-[#162529]/50 relative z-10">
                  <h3 className="text-[9px] font-bold line-clamp-1 mb-0.5 text-slate-400">Burger + Pinta</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-[9px] font-black">3.5k Pts</span>
                    <span className="text-slate-600 text-[6px] uppercase font-bold">Nivel 4</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-[20px] rounded-full -mr-8 -mt-8"></div>
              <div className="p-3.5 flex items-center justify-between z-10 relative">
                <div className="flex flex-col">
                  <span className="text-[7px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1">Premios Sorpresa</span>
                  <span className="font-display font-black text-[15px] text-white leading-none mb-1 shadow-sm">Cofre Misterioso</span>
                  <span className="text-[8px] font-semibold text-slate-300 mt-1 flex items-center gap-1">
                    <Flame className="w-2.5 h-2.5 text-indigo-400" />
                    Quemá 500 NP y probá suerte
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 backdrop-blur-md flex items-center justify-center border border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.3)]">
                  <span className="text-xl drop-shadow-md">🎁</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-[20px] rounded-full -mr-8 -mt-8"></div>
              <div className="p-3.5 flex items-center justify-between z-10 relative">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-red-400">En Vivo Ahora</span>
                  </div>
                  <span className="font-display font-black text-[15px] text-white leading-none shadow-sm">Subastas VIP</span>
                  <span className="text-[8px] font-semibold text-slate-300 mt-1.5 flex items-center gap-1">
                    <Gavel className="w-2.5 h-2.5 text-red-400" />
                    Pujá con tus NP
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-500/20 backdrop-blur-md flex items-center justify-center border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                  <Gavel className="text-red-100 w-4 h-4" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <nav className="absolute bottom-0 left-0 right-0 z-50 h-[76px]">
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-t-[2rem] border-t border-white/20 shadow-[0_-4px_24px_rgba(0,0,0,0.5)] -z-10"></div>
        <div className="flex items-center justify-around h-full px-2 pb-2">
          <div className="flex flex-col items-center justify-center text-slate-500 w-12 cursor-pointer transition-all mt-1">
            <Home className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Inicio</span>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-500 w-12 cursor-pointer transition-all mt-1">
            <Compass className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Explorar</span>
          </div>
          <div className="relative w-14 flex justify-center -mt-6">
            <div className="flex flex-col items-center">
              <button className="w-14 h-14 rounded-full bg-primary shadow-[0_0_20px_rgba(25,204,240,0.5)] flex items-center justify-center text-[#101f22] ring-[4px] ring-slate-900 mb-1 relative z-10">
                <QrCode className="w-6 h-6 font-bold" />
              </button>
              <span className="font-display text-[8px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Scan QR</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-primary brightness-125 w-12 cursor-pointer transition-all">
            <Gift className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Premios</span>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-500 w-12 cursor-pointer transition-all mt-1">
            <Trophy className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Ranking</span>
          </div>
        </div>
      </nav>
      
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[35%] h-[4px] bg-slate-500/80 rounded-full z-[60]"></div>
    </div>
  );
}
