import React from 'react';
import { Home, Compass, QrCode, Gift, Trophy, Globe, Calendar, Users, UserPlus, ArrowUp, ArrowDown, Medal } from 'lucide-react';
import { GlobalTopNavBar } from './GlobalTopNavBar';

export function RankingMockup() {
  return (
    <div className="w-full aspect-[9/19.5] bg-[#0a1618] text-slate-100 flex flex-col overflow-hidden relative rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl scale-[1] sm:scale-100 origin-top">
      <GlobalTopNavBar />

      <main className="flex-1 overflow-y-auto px-3 pb-24 hide-scrollbar pt-[80px]">
        <div className="flex bg-slate-800/80 p-1 rounded-full w-full border border-white/10 overflow-x-auto hide-scrollbar gap-0.5 mb-2">
          <div className="flex-1 px-1.5 py-1.5 rounded-full text-[8px] bg-primary text-[#0a1618] font-bold shadow-md flex items-center justify-center gap-1">
            <Globe className="w-2.5 h-2.5" /> Global
          </div>
          <div className="flex-1 px-1.5 py-1.5 rounded-full text-[8px] text-slate-400 font-medium flex items-center justify-center gap-1">
            <Calendar className="w-2.5 h-2.5" /> Semanal
          </div>
          <div className="flex-1 px-1.5 py-1.5 rounded-full text-[8px] text-slate-400 font-medium flex items-center justify-center gap-1">
            <Users className="w-2.5 h-2.5" /> Clubes
          </div>
        </div>

        {/* Top 3 Podium Section */}
        <section className="relative py-4 flex items-end justify-center gap-2 mb-4">
          {/* Rank 2 */}
          <div className="flex flex-col items-center gap-1.5 mb-2">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-slate-400 overflow-hidden bg-slate-800 shadow-md">
                <img className="w-full h-full object-cover" alt="User 2" src="https://i.pravatar.cc/150?img=32"/>
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-slate-400 text-white font-bold rounded-full w-4 h-4 flex items-center justify-center text-[8px]">2</div>
            </div>
            <div className="text-center">
              <p className="font-bold text-[9px] truncate w-14">@alex_nubo</p>
              <p className="text-primary font-bold text-[7px] uppercase tracking-wider">2.5k pts</p>
            </div>
          </div>
          
          {/* Rank 1 */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-primary rounded-full blur-sm opacity-30 animate-pulse"></div>
              <div className="relative w-16 h-16 rounded-full border-[3px] border-primary overflow-hidden bg-slate-800 shadow-lg">
                <img className="w-full h-full object-cover" alt="User 1" src="https://i.pravatar.cc/150?img=68"/>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-[#0a1618] font-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] shadow-sm">1</div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-primary drop-shadow-md">
                <Medal className="w-5 h-5 fill-current" />
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold text-[11px]">@crypto_king</p>
              <p className="text-primary font-black text-[9px] uppercase tracking-widest">3.8k pts</p>
            </div>
          </div>
          
          {/* Rank 3 */}
          <div className="flex flex-col items-center gap-1.5 mb-2">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-orange-600/60 overflow-hidden bg-slate-800 shadow-md">
                <img className="w-full h-full object-cover" alt="User 3" src="https://i.pravatar.cc/150?img=12"/>
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white font-bold rounded-full w-4 h-4 flex items-center justify-center text-[8px]">3</div>
            </div>
            <div className="text-center">
              <p className="font-bold text-[9px] truncate w-14">@urban_exp</p>
              <p className="text-primary font-bold text-[7px] uppercase tracking-wider">1.9k pts</p>
            </div>
          </div>
        </section>
        
        {/* Ranking List */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="font-bold text-slate-400 w-3 text-[9px] text-center">4</span>
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
              <img className="w-full h-full object-cover" alt="User" src="https://i.pravatar.cc/150?img=47"/>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[10px] truncate">@meta_marcos</p>
              <p className="text-[7px] uppercase font-bold text-slate-500 tracking-wider">Visitó 42 lugares</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8px] text-green-400 flex items-center font-black">
                <ArrowUp className="w-2 h-2" /> 2
              </span>
              <p className="font-bold text-primary text-[11px]">1,740</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="font-bold text-slate-400 w-3 text-[9px] text-center">5</span>
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
              <img className="w-full h-full object-cover" alt="User" src="https://i.pravatar.cc/150?img=5"/>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[10px] truncate">@sofia_explorer</p>
              <p className="text-[7px] uppercase font-bold text-slate-500 tracking-wider">Visitó 38 lugares</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8px] text-slate-500 font-black h-3 flex items-center">-</span>
              <p className="font-bold text-primary text-[11px]">1,620</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="font-bold text-slate-400 w-3 text-[9px] text-center">6</span>
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
              <img className="w-full h-full object-cover" alt="User" src="https://i.pravatar.cc/150?img=11"/>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[10px] truncate">@javi_walks</p>
              <p className="text-[7px] uppercase font-bold text-slate-500 tracking-wider">Visitó 35 lugares</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8px] text-red-400 flex items-center font-black">
                <ArrowDown className="w-2 h-2" /> 1
              </span>
              <p className="font-bold text-primary text-[11px]">1,580</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 opacity-60">
            <div className="w-3 text-center">
              <span className="text-slate-500 font-bold text-[9px]">...</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 bg-primary/10 border border-primary/30 rounded-xl mt-2">
            <div className="w-3 text-center">
              <span className="text-primary font-bold text-[9px]">142</span>
            </div>
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-primary/50">
              <img alt="your avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=60"/>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[10px] text-white">Tú</p>
              <p className="text-[7px] text-slate-400 font-medium">Faltan 70 pts para subir</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8px] text-green-400 flex items-center font-black">
                <ArrowUp className="w-2 h-2" /> 5
              </span>
              <p className="font-bold text-primary text-[11px]">1,250</p>
            </div>
          </div>
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
          <div className="flex flex-col items-center justify-center text-slate-500 w-12 cursor-pointer transition-all mt-1">
            <Gift className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Premios</span>
          </div>
          <div className="flex flex-col items-center justify-center text-primary brightness-125 w-12 cursor-pointer transition-all">
            <Trophy className="w-5 h-5 mb-0.5" />
            <span className="font-display text-[8px] font-bold uppercase tracking-wider">Ranking</span>
          </div>
        </div>
      </nav>
      
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[35%] h-[4px] bg-slate-500/80 rounded-full z-[60]"></div>
    </div>
  );
}
