import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, HelpCircle } from 'lucide-react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FAQModal({ isOpen, onClose }: FAQModalProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const items = [
    { q: '¿Cuánto cuesta usar Nubo?', a: 'Es 100% gratis para exploradores. No hay suscripciones, ni in-app purchases obligatorias. Los premios se pagan con NP que ganás caminando.' },
    { q: '¿Cómo gano Nubo Points?', a: 'Visitá un lugar asociado, escaneá su QR o subí una foto como prueba. Cada validación te suma NP y XP — los montos varían según el lugar y los desafíos activos.' },
    { q: '¿En qué ciudades funciona?', a: 'Por ahora estamos operativos principalmente en Rosario durante nuestra fase MVP, pero pronto nos vamos a expandir a CABA, Córdoba y Santa Fe city. ¡Sumate a la lista para enterarte!' },
    { q: '¿Mis datos de ubicación son privados?', a: 'Sí. Nubo solo usa tu ubicación cuando estás escaneando un QR o validando una visita. No vendemos ni compartimos datos personales — punto.' },
    { q: '¿Puedo sumar mi comercio?', a: 'Por supuesto. Solo pagás por visitas reales validadas. Hacé click en "Acceso Comercios" o contactanos por correo y te abrimos el portal en menos de 24hs.' },
  ];

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
            className="relative w-full max-w-2xl bg-bgDark/95 border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden shadow-[0_0_40px_rgba(25,204,240,0.15)] max-h-[85vh] flex flex-col"
          >
            {/* Background Glows */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-[60px] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Preguntas Frequentes</h3>
                  <p className="text-[12px] text-onSurfaceVariant">Todo lo que querés saber sobre Nubo</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Questions list */}
            <div className="overflow-y-auto pr-1 flex-1 space-y-4 max-h-none z-10 custom-scrollbar">
              {items.map((it, i) => (
                <div key={i} className="w-full">
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                    className={`w-full text-left glass-card rounded-2xl p-4 md:p-5 border transition-all ${
                      openIndex === i ? 'border-primary/50 bg-white/5 shadow-[0_0_15px_rgba(25,204,240,0.1)]' : 'border-white/5 hover:border-primary/30 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className={`font-bold text-sm md:text-base transition-colors ${openIndex === i ? 'text-primary' : 'text-white'}`}>
                        {it.q}
                      </h4>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        openIndex === i ? 'bg-primary/20 text-primary' : 'bg-white/5 text-slate-400'
                      }`}>
                        <Plus className="w-4 h-4 transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }} />
                      </div>
                    </div>
                    <div 
                      style={{ 
                        maxHeight: openIndex === i ? '200px' : '0', 
                        overflow: 'hidden', 
                        transition: 'max-height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), margin 0.3s ease', 
                        marginTop: openIndex === i ? '12px' : '0' 
                      }}
                    >
                      <p className="text-onSurfaceVariant text-xs md:text-sm leading-relaxed pr-6 opacity-90">
                        {it.a}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer inside modal */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left z-10">
              <span className="text-xs text-onSurfaceVariant">¿Tenés otra duda? Estamos listos para responderte</span>
              <button 
                onClick={() => {
                  window.location.href = "mailto:hola@nubo.travel?subject=Duda%20sobre%20Nubo";
                  onClose();
                }}
                className="w-full sm:w-auto btn-primary px-5 py-2.5 rounded-xl font-bold text-xs"
              >
                Escribinos
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
