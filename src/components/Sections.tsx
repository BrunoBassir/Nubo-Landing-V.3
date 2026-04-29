import React from 'react';
import { MapPin, ArrowRight, PlayCircle, Coins, Flame, Footprints, QrCode, Gift, Zap, Lock } from 'lucide-react';
import { HeroMockup } from './HeroMockup';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'motion/react';

export function Hero({ onCTA }: any) {
  return (
    <section data-screen-label="01 Hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 radial-cyan pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" style={{maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'}}></div>
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.18, 0.25, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none" 
        style={{background: 'radial-gradient(circle, rgba(25,204,240,0.18) 0%, transparent 60%)'}}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 relative w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 tag-pill px-4 py-2 rounded-full mb-8">
              <MapPin className="text-primary w-4 h-4 animate-bounce" />
              <span className="text-[12px] font-medium text-primary tracking-wide">Próxima recompensa a 200 m</span>
              <span className="w-1 h-1 rounded-full bg-primary/50 mx-1"></span>
              <span className="text-[12px] font-medium text-cyan-200/70">Fase MVP Activa</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="font-display font-bold tracking-tight leading-[1.02]" style={{fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)', textWrap: 'balance'}}>
              Explorar la ciudad <br className="hidden md:block"/>
              ahora tiene <span className="gradient-text glow-text">recompensa</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-base md:text-xl text-onSurfaceVariant max-w-xl leading-relaxed">
              Nubo convierte tus salidas en una experiencia de juego. Descubrí lugares únicos, completá retos exclusivos y ganá <span className="text-primary font-semibold">premios reales</span> mientras caminás.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCTA} 
                className="btn-primary px-7 h-14 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">Empezar a explorar</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('[data-screen-label="02 Cómo funciona"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
                className="glass-card cyber-border px-7 h-14 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-primary/20 transition-all group"
              >
                <PlayCircle className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Ver cómo funciona</span>
              </motion.button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: '+20', l: 'Lugares (Rosario)' },
                { v: '+200', l: 'Premios canjeables' },
                { v: 'MVP', l: 'Fase Beta' },
              ].map(s => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-bold text-primary glow-text">{s.v}</div>
                  <div className="label-caps text-onSurfaceVariant mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 relative z-10 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative animate-float"
          >
            <div className="absolute -inset-12 bg-primary/20 blur-[80px] rounded-full"></div>
            <div className="relative w-[300px] xl:w-[320px]">
              <HeroMockup />
            </div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-20 top-1/2 -translate-y-24 glass-card cyber-border rounded-2xl p-3 backdrop-blur-md animate-float hidden xl:block hover:scale-105 transition-transform" 
              style={{animationDelay: '1s'}}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
                  <Coins className="text-primary w-4 h-4 relative z-10" />
                </div>
                <div>
                  <div className="text-[10px] label-caps text-primary">+50 NP</div>
                  <div className="text-[10px] text-onSurfaceVariant">Bookish Cafe</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute -right-16 bottom-24 glass-card rounded-2xl p-3 border border-orange-500/30 animate-float hidden xl:block hover:scale-105 transition-transform" 
              style={{animationDelay: '2s', boxShadow:'0 0 18px rgba(249,115,22,0.18)'}}
            >
              <div className="flex items-center gap-2">
                <Flame className="text-orange-400 w-5 h-5 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" fill="currentColor" />
                <div>
                  <div className="text-[10px] label-caps text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.4)]">Racha · 3</div>
                  <div className="text-[10px] text-onSurfaceVariant">¡seguí así!</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-y border-white/5 bg-bgDeep/60 backdrop-blur-md py-3 overflow-hidden">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {Array.from({length: 2}).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {['CAFETERÍAS · BARES · ARTE URBANO · MUSEOS · LIBRERÍAS · PARQUES · NIGHTLIFE · GASTRONOMÍA · CULTURA · COWORKING · TIENDAS LOCALES · MUSICA EN VIVO'].join(' · ').split(' · ').map((w, j) => (
                <span key={j} className="label-caps text-onSurfaceVariant flex items-center gap-12 hover:text-primary transition-colors cursor-pointer">
                  {w}
                  <span className="w-1 h-1 rounded-full bg-primary/60 shadow-[0_0_8px_rgba(25,204,240,0.8)]"></span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: '01', title: 'Caminá y descubrí', icon: Footprints, desc: 'Explorá lugares cerca tuyo. El radar te muestra cafeterías, bares, arte urbano y misiones secretas en cada esquina.', color: '#19ccf0' },
    { n: '02', title: 'Escaneá el QR', icon: QrCode, desc: 'Llegaste al lugar — escaneá el código Nubo o subí tu prueba de visita. Validamos tu experiencia al instante.', color: '#19ccf0' },
    { n: '03', title: 'Ganá premios reales', icon: Gift, desc: 'Sumá NP y XP. Canjealos por vouchers, productos exclusivos y subí en el ranking semanal de tu ciudad.', color: '#f0a219' },
  ];

  return (
    <section data-screen-label="02 Cómo funciona" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="label-caps text-primary mb-3">CÓMO FUNCIONA</div>
          <h2 className="font-bold tracking-tight" style={{fontSize: 'clamp(2rem, 5vw, 3.6rem)'}}>
            Tres pasos. <span className="gradient-text">Cero fricción.</span>
          </h2>
          <p className="text-onSurfaceVariant mt-4 max-w-xl mx-auto">
            Diseñamos Nubo para que jugar la ciudad sea tan natural como salir a caminar.
          </p>
        </ScrollReveal>

        <StaggerContainer className="relative grid md:grid-cols-3 gap-6 pt-4">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px divider-glow"></div>
          {steps.map((s, i) => (
            <StaggerItem key={s.n} className="flex flex-col h-full">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative glass-card rounded-3xl p-7 border border-white/5 h-full transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                <div className="absolute -top-4 left-7 px-3 py-1 rounded-full bg-bgDark border border-primary/30 group-hover:border-primary/80 transition-colors shadow-[0_0_10px_rgba(25,204,240,0.1)] group-hover:shadow-[0_0_15px_rgba(25,204,240,0.3)] z-10">
                  <span className="label-caps text-primary">PASO {s.n}</span>
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300" style={{
                  background: `linear-gradient(135deg, ${s.color}33, ${s.color}11)`,
                  border: `1px solid ${s.color}55`,
                  boxShadow: `0 0 20px ${s.color}25`
                }}>
                  <s.icon className="w-8 h-8 relative z-10" style={{color: s.color}} />
                  <div className="absolute inset-0 rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{backgroundColor: s.color}}></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-onSurfaceVariant text-[15px] leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">{s.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function PointSystem() {
  return (
    <section data-screen-label="03 NP + XP" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" style={{maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)'}}></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <div className="label-caps text-primary mb-3">DOMINÁ EL SISTEMA</div>
              <h2 className="font-bold tracking-tight leading-[1.05]" style={{fontSize: 'clamp(2rem, 5vw, 3.6rem)'}}>
                Dos monedas. <br/>
                <span className="gradient-text">Un solo objetivo:</span> jugar la ciudad.
              </h2>
              <p className="text-onSurfaceVariant mt-5 text-lg leading-relaxed max-w-lg">
                Cada visita validada te suma puntos. Algunos los gastás, otros te elevan de nivel para desbloquear beneficios reales.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 space-y-5">
              <StaggerItem>
                <motion.div whileHover={{ x: 5 }} className="relative group">
                  <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-60 group-hover:opacity-100 group-hover:bg-primary/40 transition-all duration-300"></div>
                  <div className="relative flex items-center gap-5 rounded-2xl glass-card py-5 px-6 ring-1 ring-primary/20 group-hover:ring-primary/50 transition-all bg-bgDeep/80">
                    <div className="w-16 h-16 shrink-0 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center relative" style={{boxShadow: '0 0 20px rgba(25,204,240,0.3)'}}>
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Coins className="text-primary w-8 h-8 relative z-10" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">Nubo Points</h3>
                        <span className="text-primary font-black text-lg bg-primary/10 px-2 py-0.5 rounded-md">NP</span>
                      </div>
                      <p className="text-onSurfaceVariant text-sm mt-1.5 leading-snug">La moneda canjeable. Usalos para vouchers, subastas y mystery boxes en comercios asociados.</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ x: 5 }} className="relative group">
                  <div className="absolute -inset-0.5 bg-secondary/20 rounded-2xl blur opacity-60 group-hover:opacity-100 group-hover:bg-secondary/40 transition-all duration-300"></div>
                  <div className="relative flex items-center gap-5 rounded-2xl glass-card py-5 px-6 ring-1 ring-secondary/20 group-hover:ring-secondary/50 transition-all bg-bgDeep/80">
                    <div className="w-16 h-16 shrink-0 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center relative" style={{boxShadow: '0 0 20px rgba(255,198,64,0.3)'}}>
                      <div className="absolute inset-0 rounded-full bg-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Zap className="text-secondary w-8 h-8 relative z-10" fill="currentColor" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">Experience Points</h3>
                        <span className="text-secondary font-black text-lg bg-secondary/10 px-2 py-0.5 rounded-md">XP</span>
                      </div>
                      <p className="text-onSurfaceVariant text-sm mt-1.5 leading-snug">Sumalos para subir de nivel — Aventurero, Héroe, Leyenda — y desbloquear desafíos exclusivos.</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>


          <div className="relative">
            <div className="glass-card rounded-3xl p-8 cyber-border relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/15 rounded-full blur-3xl"></div>

              <div className="flex items-center justify-between mb-6">
                <div className="label-caps text-primary">RUTA DE NIVELES</div>
                <div className="text-[11px] text-onSurfaceVariant">+12 desbloqueables</div>
              </div>

              {[
                { lvl: 5, name: 'NÓMADA', xp: '500 XP', perk: 'Acceso a misiones diarias', unlocked: true, color: '#19ccf0' },
                { lvl: 14, name: 'AVENTURERO', xp: '2,500 XP', perk: 'Subastas en vivo · Vos estás acá', unlocked: true, color: '#19ccf0', current: true },
                { lvl: 25, name: 'HÉROE', xp: '7,000 XP', perk: 'Mystery boxes premium · 2x NP', unlocked: false, color: '#f0a219' },
                { lvl: 40, name: 'LEYENDA', xp: '20,000 XP', perk: 'Eventos secretos · Trading market', unlocked: false, color: '#ffc640' },
              ].map((n, i) => (
                <div key={i} className="relative">
                  <div className={`flex items-center gap-4 py-3 ${n.current ? 'pl-3 -mx-3 rounded-xl bg-primary/8 border border-primary/30' : ''}`}>
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-base" style={{
                        background: n.unlocked ? `linear-gradient(135deg, ${n.color}, ${n.color}88)` : 'rgba(30,40,42,0.6)',
                        color: n.unlocked ? '#0a1618' : '#3c494d',
                        boxShadow: n.current ? `0 0 18px ${n.color}66` : 'none'
                      }}>
                        {n.lvl}
                      </div>
                      {!n.unlocked && (
                        <Lock className="absolute -top-1 -right-1 w-3.5 h-3.5 text-slate-400 bg-bgDark rounded-full p-0.5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-black tracking-wider text-sm ${n.unlocked ? '' : 'text-slate-600'}`} style={{color: n.unlocked && !n.current ? '#dde3e6' : (n.current ? n.color : '')}}>{n.name}</span>
                        <span className={`text-[10px] label-caps ${n.unlocked ? 'text-onSurfaceVariant' : 'text-slate-700'}`}>{n.xp}</span>
                      </div>
                      <div className={`text-[12px] leading-tight mt-0.5 ${n.unlocked ? 'text-onSurfaceVariant' : 'text-slate-700'}`}>{n.perk}</div>
                    </div>
                    {n.current && (
                      <span className="label-caps text-primary animate-pulse-soft" style={{fontSize:'9px'}}>VOS</span>
                    )}
                  </div>
                  {i < 3 && <div className="ml-6 h-3 w-px bg-gradient-to-b from-white/10 to-transparent"></div>}
                </div>
              ))}

              <div className="mt-5 pt-5 border-t border-white/5">
                <div className="flex justify-between text-[11px] mb-2">
                  <span className="text-onSurfaceVariant">Progreso al siguiente nivel</span>
                  <span className="text-primary font-bold">2,450 / 3,000 XP</span>
                </div>
                <div className="h-2 bg-slate-900/80 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full w-[82%] bg-gradient-to-r from-cyan-500 to-primary rounded-full glow-cyan relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
