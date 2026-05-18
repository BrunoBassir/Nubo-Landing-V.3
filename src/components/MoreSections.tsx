import { logoDataUrl } from '../logoData';
import React, { useState } from 'react';
import { Gift, Gavel, RefreshCw, PawPrint, FlaskConical, Sparkles, Store, Plus, Rocket, Star, Compass, AtSign, ArrowRight, Camera, Music, MapPin, Search, CheckCircle2, X, XCircle, TrendingUp, Users, QrCode, Award, ArrowUpRight } from 'lucide-react';
import { PrizesMockup } from './PrizesMockup';
import { RankingMockup } from './RankingMockup';
import { ProfileMockup } from './ProfileMockup';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';

export function PrizesShowcase() {
  return (
    <section data-screen-label="04 Premios" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 lg:order-2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-[300px] xl:w-[320px] animate-float"
            >
              <div className="absolute -inset-12 bg-primary/20 blur-[80px] rounded-full"></div>
              <div className="relative z-10">
                <PrizesMockup />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <ScrollReveal>
              <div className="label-caps text-primary mb-3">PREMIOS REALES</div>
              <h2 className="font-bold tracking-tight leading-[1.05]" style={{fontSize: 'clamp(2rem, 5vw, 3.6rem)'}}>
                Cuatro maneras <br/>de <span className="gradient-text">canjear lo que ganaste</span>
              </h2>
              <p className="text-onSurfaceVariant mt-4 text-lg max-w-xl">
                Tus NP no se quedan en una pantalla. Salí con vouchers, ganá en subastas o probá suerte con un cofre misterioso.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 grid sm:grid-cols-2 gap-3">
              {[
                { i: Gift, t: 'Vouchers', d: 'Canjeá NP por descuentos directos en cafeterías, bares y tiendas asociadas.', c: '#19ccf0' },
                { i: Gavel, t: 'Subastas en vivo', d: 'Pujá por gadgets, experiencias premium y productos limitados con tus NP.', c: '#19ccf0' },
                { i: Gift, t: 'Mystery Chest', d: 'Abrí cofres semanales con premios al azar — desde NP extra hasta drops únicos.', c: '#f0a219' },
                { i: RefreshCw, t: 'Trading Market', d: 'Intercambiá fragments de premios con otros exploradores. Coleccioná y completá sets.', c: '#ffc640' },
              ].map((p, i) => (
                <StaggerItem key={i}>
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card rounded-2xl p-5 border border-white/5 h-full relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <p.i className="w-16 h-16" style={{color: p.c}} />
                    </div>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 relative group-hover:scale-110 transition-transform duration-300" style={{background: `${p.c}1a`, border: `1px solid ${p.c}55`}}>
                      <div className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{backgroundColor: p.c}}></div>
                      <p.i className="w-6 h-6 relative z-10" style={{color: p.c}} />
                    </div>
                    <h3 className="font-bold text-base mb-1 group-hover:text-white transition-colors relative z-10">{p.t}</h3>
                    <p className="text-onSurfaceVariant text-[13px] leading-snug relative z-10 group-hover:text-slate-300 transition-colors">{p.d}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommunityRanking() {
  return (
    <section data-screen-label="05 Comunidad" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" style={{maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'}}></div>
      <motion.div 
        animate={{ opacity: [0.12, 0.2, 0.12], scale: [1, 1.1, 1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" 
        style={{background: 'radial-gradient(circle, rgba(25,204,240,0.12), transparent 60%)'}}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="label-caps text-primary mb-3">COMUNIDAD · RANKING SEMANAL</div>
              <h2 className="font-bold tracking-tight leading-[1.05]" style={{fontSize: 'clamp(2rem, 5vw, 3.6rem)'}}>
                Competí, sumá amigos<br/>
                <span className="gradient-text">conquistá tu ciudad.</span>
              </h2>
              <p className="text-onSurfaceVariant mt-4 text-lg max-w-xl">
                Cada semana se reinicia el podio. Top 3 se llevan premios reales. Invitá a tu crew y formá un club exploradores.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { v: 'Top 3', l: 'Premios semanales' },
                { v: 'Clubes', l: 'Equipos de hasta 8' },
                { v: '∞', l: 'Misiones secretas' },
              ].map((s, i) => (
                <StaggerItem key={s.l}>
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-card rounded-2xl p-4 border border-white/5 relative group overflow-hidden h-full"
                  >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="text-2xl font-black text-primary glow-text relative z-10">{s.v}</div>
                    <div className="label-caps text-onSurfaceVariant mt-1 relative z-10">{s.l}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-2">
                {['#cafeterías', '#cocktails', '#arte-urbano', '#brunch', '#nightlife', '#libros', '#cultura', '#parques'].map((t, i) => (
                  <motion.span 
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(25,204,240,0.15)' }}
                    key={t} 
                    className="px-3 py-1.5 rounded-full glass-card cyber-border text-[12px] text-cyan-200/80 cursor-pointer transition-colors"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative animate-float"
            >
              <div className="absolute -inset-10 bg-primary/15 blur-[80px] rounded-full"></div>
              <div className="w-[300px] xl:w-[320px] relative z-10 drop-shadow-2xl">
                <RankingMockup />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const data = [
    { feature: 'Acumular en múltiples comercios', nubo: 'Sí', loyalty: 'No', cc: 'Sí' },
    { feature: 'Multi-destino con un solo perfil', nubo: 'Sí', loyalty: 'No', cc: 'Sí' },
    { feature: 'Validación simple sin integrar POS', nubo: 'Sí', loyalty: 'Depende la marca', cc: 'No' },
    { feature: 'Gamificación (Niveles, Logros)', nubo: 'Sí', loyalty: 'Limitado', cc: 'Promos puntuales' },
    { feature: 'Canjes en experiencias variadas', nubo: 'Sí', loyalty: 'No', cc: 'Catálogos/Millas' },
    { feature: 'Data útil para comercios', nubo: 'Sí', loyalty: 'Solo interno', cc: 'Solo pagando extras' },
    { feature: 'Portabilidad de recompensas', nubo: 'Sí', loyalty: 'No', cc: 'No' },
  ];

  return (
    <section data-screen-label="06 Comparativa" className="section-pad relative overflow-hidden bg-bgDeep">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
      
      <div className="absolute top-[0%] right-[0%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6 uppercase">
              REVOLUCIONANDO <br/> LA <span className="text-primary italic">FIDELIZACIÓN</span>
            </h2>
            <p className="text-lg text-onSurfaceVariant max-w-2xl mx-auto">
              Descubrí por qué Nubo es la alternativa inteligente a los programas de recompensas tradicionales.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto pb-6">
            <div className="min-w-[700px] glass-card cyber-border rounded-3xl overflow-hidden p-1 shadow-[0_0_30px_rgba(25,204,240,0.05)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-6 px-6 font-bold text-sm text-onSurfaceVariant tracking-wider uppercase border-b border-white/10 w-1/3">Características</th>
                    <th className="py-6 px-6 text-center border-b border-white/10 relative">
                       <div className="absolute inset-0 bg-primary/10 blur-xl rounded-t-3xl"></div>
                       <img alt="NUBO" className="h-16 mx-auto object-contain drop-shadow-[0_0_15px_rgba(67,221,226,0.5)] brightness-125 relative z-10" src={logoDataUrl} />
                    </th>
                    <th className="py-6 px-6 font-bold text-sm text-center text-onSurfaceVariant tracking-wider uppercase border-b border-white/10">Loyalty Tradicional</th>
                    <th className="py-6 px-6 font-bold text-sm text-center text-onSurfaceVariant tracking-wider uppercase border-b border-white/10">Tarjetas de Crédito</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {data.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 font-medium text-white/90">{row.feature}</td>
                      <td className="py-5 px-6 text-center relative font-medium group">
                        <div className="absolute inset-x-0 inset-y-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex items-center justify-center">
                          {row.nubo === 'Sí' ? (
                            <CheckCircle2 className="w-6 h-6 text-primary drop-shadow-[0_0_12px_rgba(67,221,226,0.8)]" />
                          ) : row.nubo === 'No' ? (
                            <XCircle className="w-6 h-6 text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                          ) : (
                            <span className="text-primary font-bold text-[15px]">{row.nubo}</span>
                          )}
                        </div>
                      </td>
                      <td className="py-5 px-6 text-center text-slate-400 text-sm font-medium">
                        <div className="flex items-center justify-center">
                          {row.loyalty === 'Sí' ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                          ) : row.loyalty === 'No' ? (
                            <XCircle className="w-5 h-5 text-red-500/80 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                          ) : (
                            <span>{row.loyalty}</span>
                          )}
                        </div>
                      </td>
                      <td className="py-5 px-6 text-center text-slate-400 text-sm font-medium">
                        <div className="flex items-center justify-center">
                          {row.cc === 'Sí' ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                          ) : row.cc === 'No' ? (
                            <XCircle className="w-5 h-5 text-red-500/80 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                          ) : (
                            <span>{row.cc}</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function PassportSection() {
  return (
    <section data-screen-label="06 Pasaporte" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative animate-float" 
            style={{ animationDelay: '1s' }}
          >
            <div className="absolute -inset-10 bg-primary/15 blur-[80px] rounded-full"></div>
            <div className="w-[300px] xl:w-[320px] relative z-10 drop-shadow-2xl">
              <ProfileMockup />
            </div>
          </motion.div>
        </div>
        <div className="lg:col-span-7">
          <ScrollReveal>
            <div className="label-caps text-primary mb-3">TU IDENTIDAD EXPLORADORA</div>
            <h2 className="font-bold tracking-tight leading-[1.05]" style={{fontSize: 'clamp(2rem, 5vw, 3.6rem)'}}>
              Un pasaporte<br/>de la <span className="gradient-text">vida real.</span>
            </h2>
            <p className="text-onSurfaceVariant mt-4 text-lg max-w-xl">
              Cada lugar que visitás se queda con vos. Tu Explorer DNA refleja qué tipo de aventurero sos — y cambia con cada salida.
            </p>
          </ScrollReveal>

          <StaggerContainer className="mt-8 space-y-3">
            {[
              { i: PawPrint, t: 'Logros desbloqueables', d: '+30 medallas por categoría — café, nightlife, arte, gastronomía.' },
              { i: FlaskConical, t: 'Explorer DNA', d: 'Visualizá tu perfil de explorador en gráficos en tiempo real.' },
              { i: Sparkles, t: 'Compañero holográfico', d: 'Tu IA recomienda lugares según tu DNA y los premios que perseguís.' },
            ].map((f, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(25,204,240,0.3)] transition-all">
                    <f.i className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base group-hover:text-primary transition-colors">{f.t}</h4>
                    <p className="text-onSurfaceVariant text-[14px] leading-snug">{f.d}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

export function MerchantsSection({ onAccessDashboard, onMerchantLanding }: { onAccessDashboard: () => void, onMerchantLanding: () => void }) {

  return (
    <section data-screen-label="07 Comercios" className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <motion.div 
            whileHover={{ boxShadow: '0 0 30px rgba(25,204,240,0.1)' }}
            className="relative rounded-[32px] glass-card cyber-border overflow-hidden p-10 md:p-16 transition-shadow"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-50"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50"
            ></motion.div>

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="label-caps text-accent mb-3">PORTAL COMERCIOS</div>
                <h2 className="font-bold tracking-tight leading-[1.05]" style={{fontSize: 'clamp(1.8rem, 4.5vw, 3rem)'}}>
                  ¿Tenés un local? <br/>
                  <span style={{color:'#f0a219'}} className="glow-text" >Llená tu negocio</span> con exploradores.
                </h2>
                <p className="text-onSurfaceVariant mt-4 text-lg max-w-lg">
                  Generá QRs, ofrecé recompensas y atraé tráfico real. Pagás solo por visitas validadas.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { v: '+82%', l: 'Tráfico medio' },
                    { v: '4.2x', l: 'Retorno' },
                    { v: '0$', l: 'Setup' },
                  ].map(s => (
                    <motion.div whileHover={{ y: -5 }} key={s.l} className="text-center cursor-default">
                      <div className="text-3xl font-black" style={{color:'#f0a219', textShadow: '0 0 10px rgba(240,162,25,0.4)'}}>{s.v}</div>
                      <div className="label-caps text-onSurfaceVariant mt-1" style={{fontSize:'9px'}}>{s.l}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <motion.button 
                    onClick={onMerchantLanding}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(240,162,25,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 h-13 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2" style={{background:'#f0a219', color:'#0a1618', boxShadow:'0 0 25px rgba(240,162,25,0.35)'}}
                  >
                    Sumar mi comercio
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button 
                    onClick={onAccessDashboard}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full glass-card font-bold text-sm border-white/10 hover:border-white/20 transition-colors"
                  >
                    Ver portal demo
                  </motion.button>
                </div>
              </div>

              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="glass-panel rounded-2xl p-5 border border-white/10 shadow-2xl"
                  style={{ transformPerspective: 1000 }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-[11px] label-caps text-accent" style={{fontSize:'10px'}}>PORTAL COMERCIO</div>
                      <div className="text-base font-bold">Bookish Cafe</div>
                    </div>
                    <motion.div 
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center cursor-pointer"
                    >
                      <Store className="text-accent w-6 h-6" />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { v: '124', l: 'Scans hoy', c:'#19ccf0' },
                      { v: '+38%', l: 'vs ayer', c:'#19ccf0' },
                      { v: '4.9', l: 'Rating', c:'#f0a219' },
                    ].map((k, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i*0.1 }}
                        key={k.l} className="bg-bgDeep/60 rounded-lg p-2.5 border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="text-base font-black" style={{color:k.c}}>{k.v}</div>
                        <div className="text-[9px] label-caps text-onSurfaceVariant" style={{fontSize:'8px'}}>{k.l}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="bg-bgDeep/60 rounded-lg p-3 border border-white/5 mb-4"
                  >
                    <div className="text-[10px] label-caps text-onSurfaceVariant mb-2">VISITAS · ÚLTIMOS 7 DÍAS</div>
                    <div className="flex items-end gap-1.5 h-16 group">
                      {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t transition-all duration-300 relative group-hover:opacity-50 hover:!opacity-100 cursor-crosshair" style={{
                          height: h+'%',
                          background: i===6 ? 'linear-gradient(to top, #19ccf0, #afecff)' : 'rgba(25,204,240,0.3)',
                          boxShadow: i===6 ? '0 0 12px rgba(25,204,240,0.5)' : 'none'
                        }}></div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="bg-bgDeep/60 rounded-lg p-3 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] label-caps text-onSurfaceVariant">QR ACTIVO</div>
                        <div className="text-[12px] font-bold text-primary">+50 NP por visita</div>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg p-1 grid grid-cols-5 gap-px">
                        {Array.from({length:25}).map((_,i)=>(
                          <div key={i} className={Math.random()>0.5 ? 'bg-bgDark' : ''}></div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>


    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: '¿Cuánto cuesta usar Nubo?', a: 'Es 100% gratis para exploradores. No hay suscripciones, ni in-app purchases obligatorias. Los premios se pagan con NP que ganás caminando.' },
    { q: '¿Cómo gano Nubo Points?', a: 'Visitá un lugar asociado, escaneá su QR o subí una foto como prueba. Cada validación te suma NP y XP — los montos varían según el lugar y los desafíos activos.' },
    { q: '¿En qué ciudades funciona?', a: 'Por ahora estamos operativos principalmente en Rosario durante nuestra fase MVP, pero pronto nos vamos a expandir a CABA, Córdoba y Santa Fe city. ¡Sumate a la lista para enterarte!' },
    { q: '¿Mis datos de ubicación son privados?', a: 'Sí. Nubo solo usa tu ubicación cuando estás escaneando un QR o validando una visita. No vendemos ni compartimos datos personales — punto.' },
    { q: '¿Puedo sumar mi comercio?', a: 'Por supuesto. Solo pagás por visitas reales validadas. Hacé click en "Sumar mi comercio" y te abrimos el portal en menos de 24hs.' },
  ];

  return (
    <section data-screen-label="08 FAQ" className="section-pad relative">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <div className="label-caps text-primary mb-3">PREGUNTAS FRECUENTES</div>
          <h2 className="font-bold tracking-tight" style={{fontSize: 'clamp(2rem, 5vw, 3.4rem)'}}>
            Lo que <span className="gradient-text">querés saber.</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="space-y-3">
          {items.map((it, i) => (
            <StaggerItem key={i}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className={`w-full text-left glass-card rounded-2xl p-5 border transition-all ${open === i ? 'border-primary/50 shadow-[0_0_20px_rgba(25,204,240,0.15)] bg-white/5' : 'border-white/5 hover:border-primary/30 hover:bg-white/[0.02]'}`}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`font-bold text-base md:text-lg transition-colors ${open === i ? 'text-primary' : ''}`}>{it.q}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? 'bg-primary/20 text-primary' : 'bg-white/5 text-slate-400'}`}>
                    <Plus className="w-5 h-5 transition-transform duration-300" style={{transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)'}} />
                  </div>
                </div>
                <div style={{maxHeight: open === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), margin 0.4s ease', marginTop: open === i ? '12px' : '0'}}>
                  <p className="text-onSurfaceVariant text-[14px] leading-relaxed pr-8 opacity-90">{it.a}</p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function LeadCaptureSection() {
  return (
    <section id="waitlist" data-screen-label="Captación de leads" className="section-pad relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="relative rounded-[32px] glass-card cyber-border overflow-hidden p-8 md:p-14 text-center">
            <motion.div 
              animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"
            ></motion.div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 tag-pill px-4 py-2 rounded-full mb-6 bg-bgDeep">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-[12px] font-bold text-primary tracking-wide uppercase">ACCESO ANTICIPADO</span>
              </div>
              
              <h2 className="font-bold tracking-tight mb-4" style={{fontSize: 'clamp(1.8rem, 4vw, 2.8rem)'}}>
                Convertite en un Explorador Fundador de <span className="gradient-text glow-text">Nubo</span>
              </h2>
              <p className="text-onSurfaceVariant text-lg max-w-lg mx-auto mb-8">
                Estamos preparando el primer grupo de Exploradores Fundadores de Nubo. Van a ser los primeros en probar la app, sumar puntos, desbloquear niveles y acceder a beneficios antes que nadie.
              </p>
              
              <div className="flex justify-center mt-2 mb-4 px-4">
                <motion.a 
                  href="https://forms.gle/Xxja7HyzqEw98uxr6"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-10 flex items-center justify-center rounded-xl font-bold text-lg h-14 shadow-[0_0_20px_rgba(25,204,240,0.2)] hover:shadow-[0_0_30px_rgba(25,204,240,0.4)] transition-shadow whitespace-nowrap inline-flex w-full sm:w-auto"
                >
                  Unirme a la lista
                </motion.a>
              </div>
              <p className="text-[11px] text-onSurfaceVariant mt-4">
                No hacemos spam. Prometemos solo escribirte cuando lleguemos a tu ciudad.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function FinalCTA({ onCTA }: any) {
  return (
    <section data-screen-label="09 Final CTA" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 radial-cyan pointer-events-none opacity-50"></div>
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" style={{maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'}}></div>
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
      ></motion.div>

      <ScrollReveal className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 tag-pill px-4 py-2 rounded-full mb-8 bg-bgDark/80 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary glow-cyan animate-pulse-soft"></span>
          <span className="text-[12px] font-medium text-primary tracking-wide">Disponible iOS · Android</span>
        </div>

        <h2 className="font-bold tracking-tight leading-[1.02]" style={{fontSize: 'clamp(2.2rem, 6vw, 5rem)'}}>
          Tu próxima salida<br/>
          puede valer <span className="gradient-text glow-text">premios reales.</span>
        </h2>
        <p className="text-onSurfaceVariant mt-6 text-lg max-w-xl mx-auto">
          Bajá Nubo gratis, escaneá tu primer QR y empezá a sumar. Te toma menos de 60 segundos.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCTA} className="btn-primary px-8 h-16 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(25,204,240,0.3)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Rocket className="w-6 h-6 relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <span className="relative z-10">Empezar a explorar</span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(25,204,240,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onCTA}
            className="glass-card cyber-border px-7 h-16 rounded-full font-bold text-base flex items-center justify-center gap-3 transition-all group"
          >
            <svg viewBox="0 0 24 24" className="text-primary w-6 h-6 fill-current group-hover:scale-110 transition-transform">
              <path d="M15.42 16.58c-.14.28-.27.53-.41.77h.01c-.13.23-.27.46-.42.69-.97 1.48-1.92 2.94-3.56 2.96-1.63 0-2.14-1-4-1-1.85 0-2.39 1-4.04 1-1.68-.02-2.73-1.6-3.76-3.1-2.12-3.07-3.61-7.25-2.07-10.23.75-1.46 2.05-2.43 3.51-2.45 1.57-.03 3.03 1.05 3.99 1.05.9 0 2.58-1.27 4.38-1.09 1.87.18 3.39.96 4.34 2.37-3.9 2.19-2.82 7.7.99 9.03z M12.16 4.96c.72-.88 1.15-2.06 1-3.23-1.02.05-2.26.7-2.98 1.58-.65.79-1.18 1.99-1.01 3.16 1.12.09 2.27-.63 2.99-1.51z"/>
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[10px] label-caps text-onSurfaceVariant">Bajar para</div>
              <div>iOS · Android</div>
            </div>
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-bgDark" style={{background: `linear-gradient(135deg, hsl(${180+i*20}, 60%, 35%), hsl(${180+i*20}, 30%, 20%))`}}></div>
            ))}
          </div>
          <div className="text-left">
            <div className="text-sm font-bold">+10,400 exploradores activos</div>
            <div className="flex items-center gap-1 text-[11px] text-onSurfaceVariant">
              <Star className="text-secondary w-4 h-4" fill="currentColor" />
              <span>4.8 · 1.2k reseñas</span>
            </div>
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}

export function Footer({ onOpenAbout }: { onOpenAbout?: () => void }) {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10 bg-bgDeep relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center justify-center mb-6 group cursor-pointer">
              <img alt="NUBO" className="h-40 md:h-64 w-auto object-contain drop-shadow-[0_0_30px_rgba(67,221,226,0.8)] brightness-125 hover:scale-105 transition-transform duration-500" src={logoDataUrl} />
            </div>
            <p className="text-onSurfaceVariant text-lg max-w-lg leading-relaxed">
              Convertí cada salida en una experiencia de juego. Descubrí, validá y ganá premios reales.
            </p>

            <div className="mt-8 p-4 rounded-2xl bg-bgDark/50 border border-white/5 backdrop-blur-sm inline-block text-left">
              <div className="label-caps text-onSurfaceVariant mb-2 text-center">CONTACTO</div>
              <a href="mailto:hola@nubo.travel?subject=Hola%20Nubo" className="flex items-center justify-center gap-3 group mb-2">
                <AtSign className="text-primary w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="text-base font-bold text-onSurface group-hover:text-primary transition-colors">hola@nubo.travel</span>
              </a>
              <form onSubmit={(e: any) => {
                e.preventDefault();
                const email = e.target.elements.email.value.trim();
                if (!email) return;
                window.location.href = `mailto:hola@nubo.travel?subject=Sumarme%20a%20Nubo&body=Hola%2C%20mi%20mail%20es%20${encodeURIComponent(email)}`;
              }} className="flex gap-2 w-[350px] max-w-full mx-auto mt-3 focus-within:ring-2 ring-primary/20 rounded-xl transition-shadow">
                <input name="email" type="email" placeholder="tu@email.com" className="flex-1 px-4 py-3 rounded-xl bg-bgDeep border border-white/10 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" className="btn-primary px-4 rounded-xl font-bold text-sm"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center border-t border-white/5 pt-12">
            {[
              { t: 'Producto', l: [
                { text: 'Cómo funciona', label: '02 Cómo funciona' }, 
                { text: 'Premios', label: '04 Premios' }, 
                { text: 'Ranking', label: '05 Comunidad' }, 
                { text: 'Comparativa', label: '06 Comparativa' }, 
                { text: 'Pasaporte', label: '06 Pasaporte' }, 
                { text: 'Comercios', label: '07 Comercios' }
              ] },
              { t: 'Compañía', l: [
                { text: 'Sobre Nubo', action: 'about', link: '#' }, 
                { text: 'Trabajá con nosotros', link: 'mailto:hola@nubo.travel' }, 
                { text: 'Press kit', link: 'mailto:hola@nubo.travel' }, 
                { text: 'Contacto', link: 'mailto:hola@nubo.travel' }
              ] },
              { t: 'Legal', l: [
                { text: 'Términos', link: '#' }, 
                { text: 'Privacidad', link: '#' }, 
                { text: 'Cookies', link: '#' }, 
                { text: 'Seguridad', link: '#' }
              ] },
            ].map((g, i) => (
              <div key={g.t} className="flex flex-col items-center">
                <div className="label-caps text-primary mb-4">{g.t}</div>
                <ul className="space-y-3">
                  {g.l.map(it => (
                    <li key={it.text}>
                      <a 
                        href={it.link || '#'} 
                        onClick={(e) => {
                          if (it.action === 'about') {
                            e.preventDefault();
                            onOpenAbout?.();
                            return;
                          }
                          if (it.label) {
                            e.preventDefault();
                            document.querySelector(`[data-screen-label="${it.label}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className="text-sm text-onSurfaceVariant hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center group"
                      >
                        <span className="w-0 h-px bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                        {it.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-onSurfaceVariant">© 2026 Nubo. Hecho con cariño en Buenos Aires.</p>
            <div className="flex items-center gap-4">
              {[
                { i: Camera, href: 'https://instagram.com' },
                { i: AtSign, href: 'mailto:hola@nubo.travel' },
                { i: Music, href: 'https://tiktok.com' },
              ].map(s => (
                <motion.a 
                  whileHover={{ y: -3, backgroundColor: 'rgba(25,204,240,0.1)' }}
                  key={s.href} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center border-white/5 hover:border-primary/30 transition-colors"
                >
                  <s.i className="text-primary w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

export function Nav({ onCTA, onMerchantLogin }: any) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel border-b border-white/5 py-2' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img alt="NUBO" className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(67,221,226,0.5)] brightness-125 group-hover:scale-105 transition-transform" src={logoDataUrl} />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { l: 'Cómo funciona', target: '02 Cómo funciona' },
            { l: 'Premios', target: '04 Premios' },
            { l: 'Comunidad', target: '05 Comunidad' },
            { l: 'Comparativa', target: '06 Comparativa' },
            { l: 'Comercios', target: '07 Comercios' },
            { l: 'FAQ', target: '08 FAQ' },
          ].map(({l, target}) => (
            <a key={l} href={`#${target}`} onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector(`[data-screen-label="${target}"]`);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }} className="text-sm text-onSurfaceVariant hover:text-primary transition-colors cursor-pointer">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onMerchantLogin} className="hidden sm:flex text-sm font-bold text-onSurfaceVariant hover:text-primary transition-colors border border-white/10 hover:border-primary/30 px-5 h-10 rounded-full items-center justify-center bg-white/5">
            Acceso Comercios
          </button>
          <button onClick={onCTA} className="btn-primary px-5 h-10 rounded-full font-bold text-sm flex items-center gap-2 transition-all">
            <span>Bajar app</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
