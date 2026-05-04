import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Rocket, Smartphone, Gamepad2, Sparkles } from 'lucide-react';
import { NuboLogo } from './NuboLogo';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
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
            className="relative w-full max-w-md glass-card cyber-border rounded-3xl p-8 overflow-hidden"
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

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-bgDeep border border-primary/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(25,204,240,0.3)]">
                  <NuboLogo className="w-24 h-24 md:w-28 md:h-28 drop-shadow-[0_0_8px_rgba(67,221,226,0.6)]" />
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
                <span className="text-[10px] font-bold text-primary tracking-wider uppercase">En desarrollo activo</span>
              </div>

              <h3 className="text-3xl font-display font-bold mb-3 tracking-tight">
                Próximamente en <br/>
                <span className="gradient-text glow-text">iOS y Android</span>
              </h3>
              
              <p className="text-onSurfaceVariant text-[15px] leading-relaxed mb-8">
                Estamos puliendo los últimos detalles de la beta. Sumate a la lista de acceso anticipado para no quedarte afuera.
              </p>

              <div className="flex gap-4 justify-center w-full">
                <div className="flex flex-col items-center gap-2 glass-card rounded-xl px-4 py-3 border border-white/5 flex-1">
                  <Smartphone className="w-6 h-6 text-slate-300" />
                  <span className="text-xs font-bold text-slate-300">App Store</span>
                </div>
                <div className="flex flex-col items-center gap-2 glass-card rounded-xl px-4 py-3 border border-white/5 flex-1">
                  <Gamepad2 className="w-6 h-6 text-slate-300" />
                  <span className="text-xs font-bold text-slate-300">Google Play</span>
                </div>
              </div>

              <button onClick={() => {
                onClose();
                document.querySelector('[data-screen-label="Captación de leads"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }} className="mt-8 w-full btn-primary h-12 rounded-xl font-bold flex items-center justify-center gap-2 group">
                <span>Unirme a la espera</span>
                <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
