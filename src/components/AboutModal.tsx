import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Map, Store, User } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bgDark/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-lg glass-card cyber-border rounded-3xl p-8 overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"
            />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-bgDeep border border-primary/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(25,204,240,0.3)]">
                  <img alt="NUBO" className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-[0_0_8px_rgba(67,221,226,0.6)] brightness-125" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 text-secondary"
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 tag-pill px-3 py-1 rounded-full mb-4 bg-bgDark border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft"></span>
                <span className="text-[10px] font-bold text-primary tracking-wider uppercase">Nuestra Misión</span>
              </div>

              <h3 className="text-3xl font-display font-bold mb-4 tracking-tight text-center">
                Jugá la <span className="gradient-text glow-text">ciudad</span>
              </h3>
              
              <div className="text-onSurfaceVariant text-[15px] leading-relaxed mb-6 space-y-4 text-center">
                <p>
                  Nubo es la primera plataforma que convierte la exploración urbana en una experiencia inmersiva. Buscamos transformar cada salida en una aventura donde descubrís lugares únicos, completás retos y acumulás puntos que podés canjear por premios reales.
                </p>
                <p>
                  Estamos construyendo esta visión junto a <strong>early adopters, marcas y comercios locales</strong> que quieran sumarse a esta nueva forma de vivir y re-descubrir la ciudad.
                </p>
              </div>

              <div className="flex gap-3 justify-center w-full mb-8">
                <div className="flex flex-col items-center gap-1 glass-card rounded-xl px-3 py-2 border border-white/5 flex-1 text-center">
                  <Map className="w-5 h-5 text-primary mb-1" />
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Exploradores</span>
                </div>
                <div className="flex flex-col items-center gap-1 glass-card rounded-xl px-3 py-2 border border-white/5 flex-1 text-center">
                  <Store className="w-5 h-5 text-secondary mb-1" />
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Comercios</span>
                </div>
                <div className="flex flex-col items-center gap-1 glass-card rounded-xl px-3 py-2 border border-white/5 flex-1 text-center">
                  <User className="w-5 h-5 text-emerald-400 mb-1" />
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Creadores</span>
                </div>
              </div>

              <button onClick={() => {
                  window.location.href = "mailto:hola@nubo.travel?subject=Hola%20Nubo";
                  onClose();
                }} 
                className="w-full btn-primary py-4 rounded-xl font-bold tracking-wide flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Escribinos</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
