import React from 'react';
import { motion } from 'motion/react';
import { Store, TrendingUp, Users, Target, ArrowRight, ChevronLeft, LayoutDashboard, QrCode, Megaphone, Activity, BarChart, Smartphone, Award, Star, CheckCircle2, XCircle } from 'lucide-react';

interface MerchantLandingProps {
  onAccessDashboard: () => void;
  onBack: () => void;
}

export function MerchantLanding({ onAccessDashboard, onBack }: MerchantLandingProps) {
  return (
    <div className="min-h-screen bg-bgDark text-onSurface relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] sm:top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#f0a219]/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-bgDark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium hover:-translate-x-1 duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Volver a Nubo</span>
            </button>
            <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
                <Store className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">Nubo <span style={{color: '#f0a219'}}>Comercios</span></span>
            </div>
          </div>
          <button 
            onClick={onAccessDashboard}
            className="btn-primary px-5 sm:px-6 py-2.5 rounded-full font-bold text-sm text-bgDark flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <LayoutDashboard className="w-4 h-4 hidden sm:block" />
            Acceder al Dashboard
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold shadow-[0_0_20px_rgba(67,221,226,0.2)]">
              <TrendingUp className="w-4 h-4" />
              Impulsá tu comercio local
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Llevá más clientes <span className="gradient-text glow-text" style={{backgroundImage: 'linear-gradient(to right, #43dde2, #f0a219)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>reales</span> a tu puerta.
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Unite a la red de Nubo. Convertí a los exploradores de la ciudad en clientes frecuentes usando gamificación, recompensas y herramientas de marketing precisas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={onAccessDashboard} style={{boxShadow: '0 0 30px rgba(240,162,25,0.3)'}} className="px-8 py-4 rounded-xl font-bold text-base text-bgDark bg-[#f0a219] hover:bg-[#e09117] flex items-center justify-center gap-2 transition-colors">
                Ingresar al Portal
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={onBack} className="px-8 py-4 rounded-xl font-bold text-base text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                Conocer la App
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-6 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Micro-Marketing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Users className="w-4 h-4 text-[#f0a219]" />
                <span>+ Engagement</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <BarChart className="w-4 h-4 text-primary" />
                <span>Data clara</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative lg:ml-10 z-10"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden glass-card border border-white/10 p-2 shadow-2xl shadow-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200&h=900" 
                alt="Cafetería" 
                className="w-full h-full object-cover rounded-2xl grayscale-[20%] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark/80 via-transparent to-transparent rounded-[2rem]"></div>
            </div>
              
            {/* Floating Element 1 - Scan */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-10 left-6 sm:-left-6"
              >
                <div className="glass-card bg-bgDark/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between shadow-[0_0_30px_rgba(16,185,129,0.15)] min-w-[220px]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Visita validada</p>
                      <p className="text-xs text-slate-400">Hace 2 minutos</p>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-lg font-bold text-emerald-400">+50</p>
                    <p className="text-[10px] uppercase text-emerald-400/70 font-black">Pts</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 - Level Up */}
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-10 right-6 sm:-right-6"
              >
                <div className="glass-card bg-bgDark/90 backdrop-blur-xl border border-[#f0a219]/20 p-4 rounded-2xl flex items-center gap-3 shadow-[0_0_30px_rgba(240,162,25,0.15)]">
                  <div className="w-10 h-10 rounded-full bg-[#f0a219]/20 text-[#f0a219] flex items-center justify-center">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#f0a219] uppercase tracking-wider">Nivel Actual</p>
                    <p className="text-sm font-display font-bold text-white">Súper Anfitrión</p>
                  </div>
                </div>
              </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Feature Section: Data & Analytics */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative glass-card border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                 <div className="flex items-center justify-between mb-8">
                   <h3 className="text-lg font-display font-bold text-white">Tráfico Semanal</h3>
                   <div className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">+15% vs mes ant.</div>
                 </div>
                 {/* Fake Chart */}
                 <div className="flex items-end gap-3 h-48 mb-4">
                   {[30, 50, 40, 70, 90, 100, 60].map((h, i) => (
                     <div key={i} className="flex-1 h-full flex flex-col justify-end gap-2 group">
                       <div className="w-full mt-auto bg-primary/20 rounded-t-sm transition-all duration-500 group-hover:bg-primary border-t border-primary/30" style={{height: `${h}%`}}></div>
                       <div className="text-center text-[10px] text-slate-500 font-medium shrink-0">
                         {['Lun','Mar','Mie','Jue','Vie','Sab','Dom'][i]}
                       </div>
                     </div>
                   ))}
                 </div>
                 
                 <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10 flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                     <Target className="w-4 h-4 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-white mb-1">Insight Nubo</p>
                     <p className="text-xs text-slate-400">El pico de tus validaciones se da los <span className="text-primary font-bold">Viernes de 18 a 21hs</span>. Ideal para lanzar una "Hora Feliz".</p>
                   </div>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
                El dashboard que tu <span className="gradient-text">comercio merece.</span>
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Olvidate de las conjeturas. Nubo Comercios te da información demográfica y de tráfico en tiempo real sobre los exploradores que te visitan.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  'Gráficos de flujo de visitas y canjes',
                  'Datos demográficos para ajustar tu propuesta',
                  'Insights automáticos para vender más en horas valle'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section: Nubo Ads */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f0a219]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f0a219]/10 text-[#f0a219] border border-[#f0a219]/20 flex items-center justify-center mb-6">
                <Megaphone className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
                Anuncios que traen <span style={{color: '#f0a219'}}>personas reales.</span>
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Nubo Ads no es sobre "Impresiones" ni "Clics". Es sobre atraer gente a tu puerta usando notificaciones push geolocalizadas y cupos de campañas exclusivos.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  'Manda alertas a exploradores en un radio de 5km',
                  'Sponsoreá desafíos semanales interactivos',
                  'Límite estricto de publicidades (cuidamos a la comunidad)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#f0a219]/20 flex items-center justify-center text-[#f0a219] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <button onClick={onAccessDashboard} className="text-sm font-bold text-[#f0a219] hover:text-[#e09117] flex items-center gap-2 transition-colors">
                  Ver ejemplos de campaña <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
               {/* Phone Mockups for Notifications */}
               <div className="relative h-[480px] w-full flex items-center justify-center">
                  <div className="w-[300px] h-[550px] bg-black border-[8px] border-slate-800 rounded-[3rem] relative shadow-2xl overflow-hidden flex flex-col z-10 rotate-3">
                     <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-32 mx-auto z-20"></div>
                     {/* Lock screen bg */}
                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-black"></div>
                     
                     {/* Time */}
                     <div className="relative pt-16 pb-8 text-center z-10">
                       <p className="text-5xl font-display font-medium text-white/90">19:42</p>
                       <p className="text-xs text-white/60 mt-1">Viernes, 24 de Mayo</p>
                     </div>

                     {/* Notification */}
                     <div className="relative px-4 space-y-3 z-10">
                       <motion.div 
                         initial={{ opacity: 0, y: -20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.5 }}
                         className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg"
                       >
                         <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                              <span className="text-[10px] text-bgDark font-bold">N</span>
                            </div>
                            <span className="text-xs text-white/60 uppercase font-bold tracking-wider">Nubo</span>
                            <span className="text-xs text-white/40 ml-auto">Ahora</span>
                         </div>
                         <h4 className="text-sm font-bold text-white mb-1">¡Estás muy cerca de Café Nubo! ☕️</h4>
                         <p className="text-xs text-white/80 leading-relaxed">Mostrá esta notificación en los próximos 30 min y llevate un 2x1 en pastelería. A 3 cuadras.</p>
                       </motion.div>
                       
                       <motion.div 
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: 1 }}
                         className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg opacity-50"
                       >
                         <div className="flex items-center gap-2 mb-2">
                            <div className="w-5 h-5 rounded bg-[#f0a219] flex items-center justify-center">
                              <span className="text-[10px] text-bgDark font-bold">N</span>
                            </div>
                            <span className="text-xs text-white/60 uppercase font-bold tracking-wider">Desafío</span>
                            <span className="text-xs text-white/40 ml-auto">Hace 2h</span>
                         </div>
                         <h4 className="text-sm font-bold text-white mb-1">Reto Patrocinado</h4>
                         <p className="text-xs text-white/80 leading-relaxed">Conseguí 3 sellos este finde. Premio: Menú ejecutivo gratis en "Burger Master".</p>
                       </motion.div>
                     </div>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mini CTA Grid */}
      <section className="relative z-10 py-16 px-6 bg-white/[0.02] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">1. Registro Gratis</h3>
            <p className="text-sm text-slate-400">Sin costos fijos de entrada. Comenzás a usar el escáner y el perfil de inmediato.</p>
          </div>
          <div className="p-6 md:border-l border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">2. Validá y Crecé</h3>
            <p className="text-sm text-slate-400">Escaneá QRs desde tu navegador para sumar tráfico registrado y escalar de nivel.</p>
          </div>
          <div className="p-6 md:border-l border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">3. Fidelizá</h3>
            <p className="text-sm text-slate-400">Canjeá recompensas automáticas en la app a los usuarios frecuentes.</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-bgDeep">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-[0%] right-[0%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">¿Por qué elegir Nubo?</h2>
            <p className="text-slate-400">Compará nuestra plataforma con las alternativas tradicionales de marketing y fidelización.</p>
          </div>

          <div className="overflow-x-auto pb-6">
            <div className="min-w-[700px] glass-card cyber-border rounded-3xl overflow-hidden p-1 shadow-[0_0_30px_rgba(25,204,240,0.05)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-6 px-6 font-bold text-sm text-onSurfaceVariant tracking-wider uppercase border-b border-white/10 w-1/3">Características</th>
                    <th className="py-6 px-6 text-center border-b border-white/10 relative">
                       <div className="absolute inset-0 bg-primary/10 blur-xl rounded-t-3xl"></div>
                       <img alt="NUBO" className="h-16 mx-auto object-contain drop-shadow-[0_0_15px_rgba(67,221,226,0.5)] brightness-125 relative z-10" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
                    </th>
                    <th className="py-6 px-6 font-bold text-sm text-center text-onSurfaceVariant tracking-wider uppercase border-b border-white/10">Redes/Ads Tradicionales</th>
                    <th className="py-6 px-6 font-bold text-sm text-center text-onSurfaceVariant tracking-wider uppercase border-b border-white/10">Loyalty Propio (Tarjetas/App)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: 'Garantiza tráfico físico', nubo: 'Sí', ads: 'No', loyalty: 'No' },
                    { feature: 'Atrae clientes nuevos', nubo: 'Sí', ads: 'Depende la pauta', loyalty: 'No' },
                    { feature: 'Fideliza actuales', nubo: 'Sí', ads: 'No', loyalty: 'Sí' },
                    { feature: 'Métricas de visitantes', nubo: 'Sí', ads: 'Online solamente', loyalty: 'A veces' },
                    { feature: 'Impulso de horas valle', nubo: 'Sí', ads: 'Difícil', loyalty: 'No' },
                  ].map((row, i) => (
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
                          {row.ads === 'Sí' ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                          ) : row.ads === 'No' ? (
                            <XCircle className="w-5 h-5 text-red-500/80 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                          ) : (
                            <span>{row.ads}</span>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Comercios que ya están creciendo</h2>
            <p className="text-slate-400">Transformá el tráfico casual en clientes recurrentes, como ya lo hacen decenas de locales.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative hover:border-primary/30 transition-colors">
              <div className="flex text-[#f0a219] mb-4">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">"Nubo nos solucionó el problema de las horas valle. Usamos la plataforma para lanzar campañas exclusivas los martes y jueves por la tarde, y el volumen de gente joven aumentó muchísimo."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary">C</div>
                <div>
                  <h4 className="font-bold text-white">Café Registrado</h4>
                  <p className="text-xs text-slate-400">Gastronomía de Especialidad</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative hover:border-secondary/30 transition-colors">
              <div className="flex text-[#f0a219] mb-4">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">"Lo mejor es que no tuvimos que comprar hardware. Los mozos usan sus teléfonos para escanear a los exploradores, y yo miro las estadísticas desde mi casa."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center font-bold text-secondary">EP</div>
                <div>
                  <h4 className="font-bold text-white">El Punto Bar</h4>
                  <p className="text-xs text-slate-400">Entretenimiento & Tapas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Preguntas Frecuentes</h2>
            <p className="text-slate-400">Todo lo que necesitás saber antes de sumarte a Nubo.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: '¿Necesito algún equipo especial para escanear?', a: 'No, el escáner funciona mediante tecnología web. Podés usar la cámara de cualquier celular, tablet o computadora con conexión a internet.' },
              { q: '¿Tiene algún costo mensual mantener mi perfil?', a: 'Crear tu perfil y validar visitas es completamente gratuito. Solo pagás si decidís pautar campañas push a través de Nubo Ads.' },
              { q: '¿Quiénes pueden validar a los clientes?', a: 'Podés invitar a todos tus empleados desde la pestaña "Equipo". Cada uno tendrá un acceso para escanear sin necesidad de ver tus métricas ni reportes.' },
              { q: '¿Por qué limitan los Nubo Ads?', a: 'Cuidamos la experiencia de nuestros usuarios evitando el spam. Esto asegura que, cuando promocionás tu comercio, tu anuncio brille y tenga una altísima tasa de conversión.' }
            ].map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <h4 className="text-base font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative z-10 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-display font-bold text-white lg:text-5xl tracking-tight">Convertite en el punto de encuentro de tu ciudad.</h2>
          <p className="text-lg text-slate-400">Accedé a la plataforma ahora y descubrí las herramientas que potencian tu negocio.</p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
             <button onClick={onAccessDashboard} style={{boxShadow: '0 0 30px rgba(67,221,226,0.3)'}} className="btn-primary px-10 py-4 rounded-xl font-bold text-base text-bgDark flex items-center justify-center gap-2">
               Entrar al Dashboard
               <ArrowRight className="w-5 h-5" />
             </button>
             <button onClick={onBack} className="px-8 py-4 rounded-xl font-bold text-base text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                Volver a la App Nubo
             </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

