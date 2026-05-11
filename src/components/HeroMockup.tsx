import { logoDataUrl } from '../logoData';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { User, Zap, Store, Medal, Sparkles, Star, Home, Compass, QrCode, Gift, Trophy, ArrowRight, Check, CheckCircle2, Flame, MapPin } from 'lucide-react';
import { GlobalTopNavBar } from './GlobalTopNavBar';

export function HeroMockup() {
  const [showSplash, setShowSplash] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full aspect-[9/19.5] bg-[#0a1618] text-slate-100 flex flex-col overflow-hidden relative rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl scale-[1] sm:scale-100 origin-top">
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-[100] flex items-center justify-center bg-[#0a1618]"
          >
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={logoDataUrl} 
              alt="NUBO" 
              className="w-[85%] max-w-[320px] h-auto drop-shadow-[0_0_30px_rgba(67,221,226,0.8)] brightness-125"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <GlobalTopNavBar />
      <main className="flex-1 overflow-y-auto hide-scrollbar px-3 pt-[80px] pb-24 space-y-4">
        
        {/* Welcome Header */}
        <div className="flex justify-between items-end mb-1">
          <div>
            <h1 className="text-[17px] font-bold tracking-tight leading-tight">Hola, Explorador</h1>
            <p className="text-slate-500 text-[9px]">¿Qué vamos a descubrir hoy?</p>
          </div>
          <div className="flex -space-x-1.5 pb-1">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-5 h-5 rounded-full border border-[#0a1618] bg-slate-800 flex items-center justify-center overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Amigo" className="w-full h-full object-cover opacity-60" />
              </div>
            ))}
            <div className="w-5 h-5 rounded-full border border-[#0a1618] bg-primary/20 flex items-center justify-center text-[6px] font-bold text-primary backdrop-blur-sm">
              +12
            </div>
          </div>
        </div>

        {/* Daily Streak */}
        <section className="bg-slate-900/80 border border-orange-500/30 rounded-xl p-2 shadow-[0_0_10px_rgba(249,115,22,0.1)] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
             <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Flame className="text-orange-500 w-3 h-3 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" fill="currentColor" />
             </div>
             <div>
                <h3 className="text-white font-bold text-[9px] tracking-tight leading-tight">Racha Activa</h3>
                <p className="text-orange-400 font-black text-[6px] uppercase tracking-wider">3 Días Seguidos</p>
             </div>
          </div>
          <div className="flex gap-0.5">
             {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, i) => (
                <div key={day} className="flex flex-col items-center gap-0.5">
                   <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[5px] font-bold ${i < 3 ? 'bg-orange-500 text-white shadow-[0_0_5px_rgba(249,115,22,0.5)]' : 'bg-slate-800 text-slate-500'}`}>
                      {i < 3 ? <Check className="w-2 h-2" strokeWidth={4} /> : ''}
                   </div>
                   <span className="text-[5px] text-slate-500 font-bold uppercase">{day}</span>
                </div>
             ))}
          </div>
        </section>

        {/* XP Progress Bar */}
        <section className="bg-[#162529]/80 backdrop-blur-md p-3 rounded-xl relative overflow-hidden border border-white/5 shadow-[0_0_15px_rgba(25,204,240,0.05)]">
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
          
          <div className="flex items-center gap-2 mb-2 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-600 flex items-center justify-center shadow-md shadow-primary/20 shrink-0">
              <Medal className="text-[#0a1618] w-4 h-4 fill-current" />
            </div>
            <div className="flex-1">
              <h2 className="text-primary tracking-widest text-[6px] font-bold mb-0.5 opacity-80 uppercase">NIVEL ACTUAL</h2>
              <div className="flex justify-between items-end">
                <span className="text-[13px] font-bold text-white leading-none">Aventurero <span className="text-cyan-400">14</span></span>
                <div className="flex items-end gap-0.5 text-right">
                  <span className="text-primary text-[10px] font-bold leading-none">2,450</span>
                  <span className="text-slate-400 text-[6px] uppercase font-bold pb-px">/ 3,000 XP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-2.5">
            <div className="h-1.5 w-full bg-slate-900/80 rounded-full overflow-hidden p-[1px] border border-white/10">
              <div className="h-full w-[82%] bg-gradient-to-r from-cyan-500 to-primary rounded-full shadow-[0_0_8px_rgba(25,204,240,0.6)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] w-[200%]"></div>
              </div>
            </div>
            <p className="text-right text-[6px] text-cyan-400 mt-1 font-bold uppercase tracking-wider">550 XP PARA HEROE</p>
          </div>
        </section>

        {/* Featured Mission Card */}
        <section className="space-y-1.5">
          <h2 className="text-cyan-400 text-[7px] font-bold uppercase tracking-widest">DESAFÍO DIARIO</h2>
          <div className="bg-[#162529]/80 backdrop-blur-md p-2.5 rounded-xl border border-white/5 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/10 blur-xl rounded-full"></div>
            <div className="flex gap-2 items-start relative z-10">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
               <Store className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-[11px] font-bold truncate">Explorador de Cafeína</h3>
                <p className="text-slate-400 text-[8px] leading-tight line-clamp-2 mt-0.5">Visita cualquier cafetería local en el centro y escanea el QR.</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="flex items-center text-primary font-bold text-[9px] gap-0.5">
                    <Zap className="w-2.5 h-2.5" fill="currentColor" />
                    +150 XP
                  </span>
                  <button className="bg-primary text-[#0a1618] px-2 py-1 rounded-full font-bold text-[6px] uppercase">
                    IR AHORA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Places Carousel */}
        <section className="space-y-1.5 pb-2">
          <div className="flex justify-between items-center">
            <h2 className="text-cyan-400 text-[7px] font-bold uppercase tracking-widest">LUGARES RECOMENDADOS</h2>
            <ArrowRight className="w-2.5 h-2.5 text-slate-400" />
          </div>
          <div className="flex gap-2">
            <div className="w-[140px] shrink-0 bg-[#162529]/80 rounded-xl overflow-hidden flex h-[55px] border border-white/5">
              <div className="w-[55px] h-full shrink-0">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Artisan Roast" referrerPolicy="no-referrer" />
              </div>
              <div className="p-1.5 flex-1 flex flex-col justify-center min-w-0">
                <h4 className="text-[9px] font-bold text-white line-clamp-2 leading-tight">Artisan Roast</h4>
                <p className="text-[7px] text-slate-400 flex items-center mt-0.5 truncate gap-0.5">
                  <MapPin className="w-2 h-2" /> 150m
                </p>
                <p className="text-[6px] text-primary/80 font-bold uppercase tracking-tight mt-0.5">Cafetería</p>
              </div>
            </div>
            <div className="w-[140px] shrink-0 bg-[#162529]/80 rounded-xl overflow-hidden flex h-[55px] border border-white/5">
              <div className="w-[55px] h-full shrink-0">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Neon Lights Bar" referrerPolicy="no-referrer" />
              </div>
              <div className="p-1.5 flex-1 flex flex-col justify-center min-w-0">
                <h4 className="text-[9px] font-bold text-white line-clamp-2 leading-tight">Neon Lights Bar</h4>
                <p className="text-[7px] text-slate-400 flex items-center mt-0.5 truncate gap-0.5">
                  <MapPin className="w-2 h-2" /> 350m
                </p>
                <p className="text-[6px] text-primary/80 font-bold uppercase tracking-tight mt-0.5">Bar</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <nav className="absolute bottom-0 left-0 right-0 z-50 h-[76px]">
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-t-[2rem] border-t border-white/20 shadow-[0_-4px_24px_rgba(0,0,0,0.5)] -z-10"></div>
        <div className="flex items-center justify-around h-full px-2 pb-2">
          <div className="flex flex-col items-center justify-center text-primary brightness-125 w-12 cursor-pointer transition-all">
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

