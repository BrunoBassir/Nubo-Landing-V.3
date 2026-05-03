import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QrCode, Ticket, Percent, LogOut, CheckCircle2, Circle, Store, Download, FileText, ChevronRight, LayoutDashboard, Settings, HelpCircle, Menu, X, Activity, FolderDown, User, MapPin, Clock, Phone, Instagram, Printer, ScanLine, Trophy, TrendingUp, Users, Target, Megaphone, BellRing, Rocket, Key, Shield, Mail, MessageSquare, Video, ExternalLink, Globe, Lightbulb } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface MerchantDashboardProps {
  onLogout: () => void;
}

export function MerchantDashboard({ onLogout }: MerchantDashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);
  const [campaignMessage, setCampaignMessage] = useState('');
  const [campaignTemplate, setCampaignTemplate] = useState('template');
  const [scanStatus, setScanStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [scanCode, setScanCode] = useState('');

  const handleValidateScan = () => {
    if (!scanCode.trim()) return;
    
    // Simulate validation logic
    if (scanCode.toLowerCase() === 'error') {
      setScanStatus('error');
    } else {
      setScanStatus('success');
    }
    
    // Reset after 3 seconds
    setTimeout(() => {
      setScanStatus('idle');
      setScanCode('');
    }, 3000);
  };
  
  const [profileTasks] = useState([
    { id: 1, label: 'Completar información básica (Horarios, Dirección)', done: true },
    { id: 2, label: 'Subir logo y fotos del local', done: true },
    { id: 3, label: 'Cargar menú o enlace a carta digital', done: false },
    { id: 4, label: 'Verificar amenidades (Wifi, Mascotas, etc.)', done: false },
    { id: 5, label: 'Vincular redes sociales (Instagram, TikTok)', done: false },
  ]);

  const metrics = [
    { title: 'Validaciones Totales', value: '250', subtitle: 'Registros correctos', icon: QrCode, color: 'text-primary' },
    { title: 'Premios Activados', value: '25', subtitle: '1 premio cada 10 valid.', icon: Ticket, color: 'text-secondary' },
    { title: 'Canjes Realizados', value: '18', subtitle: 'Premios reclamados', icon: CheckCircle2, color: 'text-emerald-400' },
    { title: 'Tasa de Canje', value: '72%', subtitle: 'Canjes vs Activados en mes', icon: Percent, color: 'text-amber-400' },
  ];

  const chartData = [
    { day: 'Lun', validaciones: 12 },
    { day: 'Mar', validaciones: 19 },
    { day: 'Mié', validaciones: 15 },
    { day: 'Jue', validaciones: 25 },
    { day: 'Vie', validaciones: 45 },
    { day: 'Sáb', validaciones: 60 },
    { day: 'Dom', validaciones: 55 },
  ];

  const demographicData = [
    { name: '18-24', value: 30, color: '#43dde2' },
    { name: '25-34', value: 45, color: '#f97316' },
    { name: '35-44', value: 15, color: '#34d399' },
    { name: '45+', value: 10, color: '#fbbf24' },
  ];

  const recentActivities = [
    { id: 1, type: 'validation', user: 'Martín S.', action: 'Validó visita', time: 'Hace 10 min', icon: QrCode, color: 'text-primary' },
    { id: 2, type: 'redeem', user: 'Laura M.', action: 'Canjeó "Café + Medialunas"', time: 'Hace 45 min', icon: Ticket, color: 'text-emerald-400' },
    { id: 3, type: 'validation', user: 'Diego G.', action: 'Validó visita', time: 'Hace 2 horas', icon: QrCode, color: 'text-primary' },
    { id: 4, type: 'validation', user: 'Ana P.', action: 'Validó visita', time: 'Ayer', icon: QrCode, color: 'text-primary' },
    { id: 5, type: 'redeem', user: 'Carlos R.', action: 'Canjeó "Descuento 15%"', time: 'Ayer', icon: Ticket, color: 'text-emerald-400' },
  ];

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'scanner', label: 'Escáner Web', icon: ScanLine },
    { id: 'campaigns', label: 'Campañas', icon: Megaphone },
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'resources', label: 'Recursos Nubo', icon: FolderDown },
    { id: 'settings', label: 'Configuración', icon: Settings },
    { id: 'help', label: 'Ayuda', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-bgDark text-onSurface flex overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed inset-y-0 left-0 z-[70] w-64 glass-panel border-r border-white/5 flex flex-col transition-transform duration-300 lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/5 shrink-0">
          <img alt="NUBO" className="h-8 w-auto brightness-125 drop-shadow-[0_0_8px_rgba(67,221,226,0.5)]" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-2 flex-1 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setIsSidebarOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm w-full text-left ${
                activeTab === link.id 
                  ? 'bg-primary/10 text-primary border border-primary/20' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'
              }`}
            >
              <link.icon className={`w-5 h-5 ${activeTab === link.id ? 'text-primary' : 'text-slate-500'}`} />
              {link.label}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-white/5 shrink-0">
          <button 
            onClick={onLogout}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-slate-400 hover:bg-red-500/10 hover:text-red-400 border border-transparent hover:border-red-500/20"
          >
            <LogOut className="w-5 h-5 opacity-70" />
            Cerrar Sesión
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Dynamic BG */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none blur-3xl z-0" />
        
        {/* Top Navbar specifically for Dashboard */}
        <nav className="h-16 glass-panel border-b border-white/5 px-6 flex items-center justify-between shrink-0 relative z-50">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
            <span className="font-display font-medium text-[15px] sm:hidden lg:block text-slate-300 tracking-tight">Portal de Comercios</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:bg-white/10 cursor-pointer transition-colors">
              <Globe className="w-3.5 h-3.5 text-primary" />
              <select className="bg-transparent border-none outline-none cursor-pointer appearance-none outline-none">
                <option value="es" className="bg-bgDark text-white">ES</option>
                <option value="en" className="bg-bgDark text-white">EN</option>
                <option value="pt" className="bg-bgDark text-white">PT</option>
              </select>
            </div>
            <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Store className="w-4 h-4 text-primary" />
               </div>
               <span className="text-sm font-bold hidden sm:block">Café Nubo</span>
            </div>
          </div>
        </nav>

        <div className="flex-1 overflow-y-auto w-full p-6 relative z-10">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {activeTab === 'dashboard' && (
              <>
                {/* Header Section */}
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    Resumen del <span className="gradient-text glow-text">Mes</span>
                  </h1>
                  <p className="text-onSurfaceVariant text-base max-w-2xl">
                    Revisá el rendimiento mensual de tu comercio y gestioná tus premios.
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {metrics.map((m, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all group overflow-hidden relative"
                    >
                      <div className={`absolute top-0 right-0 w-24 h-24 ${m.color.replace('text', 'bg')} opacity-0 group-hover:opacity-10 blur-[40px] transition-opacity duration-500 rounded-full`} />
                      
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-2.5 rounded-xl bg-bgDeep ${m.color} bg-opacity-10 border border-current/20`}>
                          <m.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-display font-bold text-white mb-1">{m.value}</h3>
                      <p className="font-bold text-slate-200 text-sm">{m.title}</p>
                      <p className="text-xs text-slate-400 mt-1 truncate">{m.subtitle}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Chart Section */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-2 glass-card rounded-2xl p-6 border border-white/10 flex flex-col"
                  >
                    <div className="mb-6 flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-display font-bold text-white">Flujo de Validaciones</h3>
                        <p className="text-sm text-slate-400">Últimos 7 días</p>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                        <TrendingUp className="w-4 h-4" />
                        +15%
                      </div>
                    </div>
                    <div className="flex-1 min-h-[250px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                          <XAxis 
                            dataKey="day" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            dy={10}
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                          />
                          <Tooltip 
                            cursor={{ fill: '#ffffff05' }}
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff10', borderRadius: '12px', color: '#fff' }}
                            itemStyle={{ color: '#43dde2' }}
                          />
                          <Bar dataKey="validaciones" fill="#43dde2" radius={[4, 4, 0, 0]} maxBarSize={40} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>

                  {/* Gamification Tracker */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[40px] rounded-full pointer-events-none" />
                    
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Nivel Actual</h3>
                        <p className="text-xl font-display font-bold text-white leading-none mt-1">Súper Anfitrión</p>
                      </div>
                    </div>

                    <div className="space-y-4 relative z-10 flex-1">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-300 font-medium">Validaciones Mes</span>
                          <span className="text-white font-bold">250 / 300</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-[83%] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                        </div>
                        <p className="text-xs text-slate-400 mt-2">¡A 50 validaciones del nivel Leyenda Local!</p>
                      </div>

                      <div className="pt-4 border-t border-white/10 mt-auto">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm font-bold text-emerald-400">Beneficio Activo</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">+25% de visibilidad en el mapa y notificaciones push a exploradores cercanos.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                  {/* Recent Activity */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="lg:col-span-2 glass-card rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-display font-bold text-white mb-1">Actividad Reciente</h3>
                        <p className="text-sm text-slate-400">Validaciones y canjes de los exploradores.</p>
                      </div>
                      <button className="text-sm font-bold text-primary hover:text-white transition-colors">Ver todas</button>
                    </div>

                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                          <div className={`p-3 rounded-xl bg-bgDeep ${activity.color} bg-opacity-10 border border-current/20 shrink-0`}>
                            <activity.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-base font-bold text-slate-200 truncate">{activity.action}</p>
                            <p className="text-sm text-slate-400 truncate">por {activity.user}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xs font-medium text-slate-500 whitespace-nowrap">{activity.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Demographic Analytics */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Público
                      </h3>
                      <p className="text-sm text-slate-400">Edades de tus visitantes</p>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={demographicData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {demographicData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff10', borderRadius: '12px', color: '#fff' }}
                              itemStyle={{ color: '#fff' }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        {demographicData.map((d, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></div>
                            <span className="text-xs text-slate-300">{d.name} <span className="text-slate-500 block">{d.value}%</span></span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Educational Metrics / Nubo Insights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="lg:col-span-3 glass-card rounded-2xl border-2 border-primary/20 overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[60px] pointer-events-none rounded-full" />
                    
                    <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center md:items-stretch relative z-10">
                      {/* Left: Summary */}
                      <div className="flex-1 space-y-4 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider mb-2">
                          <Lightbulb className="w-4 h-4" />
                          Nubo Insights
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white">¿Sabías que tus validaciones aumentan los Viernes por la tarde?</h3>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                          Tus datos muestran que el <span className="font-bold text-emerald-400">45% de tus exploradores</span> (mayormente de 25-34 años) te visitan para hacer <span className="text-white">after office</span>. ¡Aprovechá esta tendencia!
                        </p>
                      </div>

                      {/* Right: Actions/Tips */}
                      <div className="w-full md:w-80 shrink-0 space-y-3 flex flex-col justify-center">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                           <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                             <Target className="w-4 h-4" />
                           </div>
                           <div>
                             <p className="text-sm font-bold text-white mb-1">Optimizá tu Menú</p>
                             <p className="text-xs text-slate-400">Agregá más opciones de tapeo o "Happy Hour" entre las 18 y las 20hs.</p>
                           </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                           <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                             <Megaphone className="w-4 h-4" />
                           </div>
                           <div>
                             <p className="text-sm font-bold text-white mb-1">Campaña Nubo Ads</p>
                             <p className="text-xs text-slate-400">Destacá tu perfil los Jueves y Viernes por la tarde para atraer más oficinistas.</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </>
            )}

            {activeTab === 'resources' && (
              <>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    Recursos <span className="gradient-text glow-text">Nubo</span>
                  </h1>
                  <p className="text-onSurfaceVariant text-base max-w-2xl">
                    Descargá el material oficial para tu comercio y encontrá ayuda sobre cómo operar.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {/* Recurso 1 */}
                  <motion.a 
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all group flex flex-col items-start gap-4"
                  >
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Download className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 group-hover:text-primary transition-colors mb-2">Kit de Marca (Logos)</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Formatos en alta resolución para usar en tus piezas de redes sociales, web y material promocional.</p>
                    </div>
                  </motion.a>

                   {/* Recurso 2 */}
                  <motion.a 
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-all group flex flex-col items-start gap-4"
                  >
                    <div className="p-4 rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 group-hover:text-secondary transition-colors mb-2">Manual de Instrucciones</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Guía paso a paso sobre cómo validar un canje en la app, gestionar tu perfil y acceder a tus métricas.</p>
                    </div>
                  </motion.a>

                  {/* Recurso 3 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-start gap-4"
                  >
                    <div className="p-4 rounded-2xl bg-emerald-400/10 text-emerald-400 shrink-0">
                      <QrCode className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-slate-100 mb-2">Display QR Físico</h4>
                      <p className="text-sm text-slate-400 mb-4 leading-relaxed">Solicitá el identificador oficial de Nubo con tu QR para colocar en la mesa o el mostrador de tu local.</p>
                      <button className="w-full text-sm font-bold text-bgDark bg-emerald-400 hover:bg-emerald-300 transition-colors py-3 rounded-xl shadow-lg shadow-emerald-500/20">Solicitar nuevo display</button>
                    </div>
                  </motion.div>
                </div>
              </>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    Mi <span className="gradient-text glow-text">Local</span>
                  </h1>
                  <p className="text-onSurfaceVariant text-base max-w-2xl">
                    Gestioná la información pública de tu comercio que verán los exploradores en la app.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column: Form / Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="glass-card rounded-3xl p-6 md:p-8 border border-white/10"
                    >
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="relative group shrink-0">
                          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=200&h=200" alt="Café Nubo" className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl object-cover border border-white/10" />
                          <button className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center text-sm font-bold text-white">
                            Cambiar
                          </button>
                        </div>
                        <div className="flex-1 space-y-4 w-full">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-xs text-slate-400 font-medium">Nombre del Local</label>
                              <input type="text" defaultValue="Café Nubo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs text-slate-400 font-medium">Rubro y Subrubro</label>
                              <select className="w-full bg-bgDeep border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 appearance-none">
                                <optgroup label="Gastronomía">
                                  <option>Gastronomía - Cafetería</option>
                                  <option>Gastronomía - Restaurante</option>
                                  <option>Gastronomía - Heladería</option>
                                </optgroup>
                                <optgroup label="Alojamiento">
                                  <option>Alojamiento - Hotel 4*</option>
                                  <option>Alojamiento - Hostel</option>
                                </optgroup>
                                <optgroup label="Atractivo">
                                  <option>Atractivo - Museo</option>
                                  <option>Atractivo - Parque</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className="border-white/5 my-8" />

                      <div className="space-y-6">
                        <h3 className="text-lg font-display font-bold text-white">Información Pública</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-xs text-slate-400 font-medium flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Dirección</label>
                            <input type="text" defaultValue="Av. San Martín 1500" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs text-slate-400 font-medium flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Teléfono</label>
                            <input type="text" defaultValue="+54 9 11 1234-5678" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                          </div>
                          <div className="space-y-1 sm:col-span-2">
                            <label className="text-xs text-slate-400 font-medium flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Horarios de Atención</label>
                            <div className="flex gap-2">
                              <input type="text" defaultValue="Lunes a Sábado" className="w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                              <input type="text" defaultValue="08:00 a 20:00" className="w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                            </div>
                          </div>
                          <div className="space-y-1 sm:col-span-2">
                            <label className="text-xs text-slate-400 font-medium flex items-center gap-1.5"><Instagram className="w-3.5 h-3.5" /> Instagram</label>
                            <input type="text" defaultValue="@cafenubo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                          </div>
                        </div>

                        <div className="flex justify-end mt-6">
                           <button className="btn-primary py-3 px-8 rounded-xl font-bold text-sm tracking-wide">
                             Guardar Cambios
                           </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column: QR Code */}
                  <div className="space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 text-center flex flex-col items-center"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <QrCode className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-white mb-2">QR del Local</h3>
                      <p className="text-sm text-slate-400 mb-6">Este es el código que los exploradores deben escanear para validar su visita en tu local.</p>
                      
                      <div className="bg-white p-4 rounded-3xl mb-6 shadow-xl shadow-primary/10 border-4 border-slate-100">
                        <img 
                          className="w-48 h-48 sm:w-56 sm:h-56 filter contrast-125" 
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=nubo-app://merchant/cafenubo123&margin=0&bgcolor=ffffff&color=0a1618`} 
                          alt="QR Code" 
                        />
                      </div>

                      <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-xl transition-colors font-bold text-sm text-white">
                         <Printer className="w-4 h-4" />
                         Descargar e Imprimir
                      </button>
                    </motion.div>
                  </div>

                </div>
              </div>
            )}

            {activeTab === 'scanner' && (
              <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto py-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    Escáner de <span className="gradient-text glow-text">Validación</span>
                  </h1>
                  <p className="text-onSurfaceVariant text-base">
                    Escaneá el código QR del explorador para validar su visita o autorizar un canje.
                  </p>
                </div>

                <div className="w-full relative">
                  {/* Validation Feedback Overlay */}
                  <AnimatePresence>
                    {scanStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-emerald-500/20 backdrop-blur-xl rounded-3xl border-2 border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                      >
                        <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/50">
                          <CheckCircle2 className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-white mb-2">¡Validación Exitosa!</h2>
                        <p className="text-emerald-100 font-medium">Se ha registrado el escaneo correctamente.</p>
                      </motion.div>
                    )}
                    {scanStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-red-500/20 backdrop-blur-xl rounded-3xl border-2 border-red-500/50 shadow-[0_0_50px_rgba(239,68,68,0.3)]"
                      >
                        <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-red-500/50 text-white font-bold text-4xl">
                          <X className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-white mb-2">Código Inválido</h2>
                        <p className="text-red-100 font-medium">El código no existe o ya fue utilizado.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Scanner Frame */}
                  <div className="aspect-square sm:aspect-[4/3] w-full max-w-md mx-auto relative rounded-3xl overflow-hidden bg-black/50 border border-white/10 shadow-[0_0_50px_rgba(25,204,240,0.1)] flex items-center justify-center backdrop-blur-xl">
                    <ScanLine className="w-20 h-20 text-white/20 absolute" />
                    
                    {/* Scanning Animation */}
                    <motion.div 
                      className="absolute inset-x-0 h-1 bg-primary shadow-[0_0_20px_rgba(67,221,226,1)]"
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                    
                    {/* Frame corners */}
                    <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-xl" />
                    <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-xl" />
                    <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-xl" />
                    <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-xl" />
                  </div>

                  <div className="mt-8 text-center space-y-4">
                    <p className="text-slate-400 text-sm">Esperando código QR...</p>
                    <div className="flex items-center my-6 gap-4">
                      <div className="h-px bg-white/10 flex-1"></div>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">o ingreso manual</span>
                      <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                    
                    <div className="flex gap-2 max-w-sm mx-auto">
                      <input 
                        type="text" 
                        value={scanCode}
                        onChange={(e) => setScanCode(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleValidateScan()}
                        placeholder="Ej: NUBO-12345" 
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 text-center font-mono tracking-widest uppercase"
                      />
                      <button 
                        onClick={handleValidateScan}
                        disabled={scanStatus !== 'idle'}
                        className="bg-primary text-bgDark font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Validar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'campaigns' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    Nubo <span className="gradient-text glow-text">Ads</span>
                  </h1>
                  <p className="text-onSurfaceVariant text-base max-w-2xl">
                    Destacá tu comercio comprando campañas promocionales. Los cupos son limitados mensualmente para cuidar a nuestra comunidad de exploradores.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Campaign 1: Push */}
                  <div className="glass-card rounded-3xl p-6 border border-white/10 flex flex-col relative overflow-hidden group">
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className="p-3 rounded-xl bg-primary/20 text-primary border border-primary/30">
                        <BellRing className="w-6 h-6" />
                      </div>
                      <div className="bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-full text-xs font-bold">
                        Cupos: 3/5
                      </div>
                    </div>
                    <div className="relative z-10 flex-1">
                      <h3 className="text-xl font-display font-bold text-white mb-2">Notificación Push Localizada</h3>
                      <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        Enviamos una notificación push a todos los exploradores que se encuentren a menos de 5km de tu local durante el horario que elijas.
                      </p>
                    </div>
                    <div className="relative z-10 border-t border-white/5 pt-4 mt-auto">
                       <div className="flex items-end justify-between mb-4">
                         <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Inversión</div>
                         <div className="text-2xl font-bold text-white">$25.000</div>
                       </div>
                       <button onClick={() => setSelectedCampaign('push')} className="w-full bg-primary text-bgDark font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(67,221,226,0.3)]">
                         Solicitar Campaña
                       </button>
                    </div>
                  </div>

                  {/* Campaign 2: Challenge Sponsor */}
                  <div className="glass-card rounded-3xl p-6 border border-secondary/20 flex flex-col relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[40px] rounded-full pointer-events-none" />
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className="p-3 rounded-xl bg-secondary/20 text-secondary border border-secondary/30">
                        <Target className="w-6 h-6" />
                      </div>
                      <div className="bg-secondary/20 border border-secondary/30 text-secondary px-3 py-1 rounded-full text-xs font-bold">
                        Cupos: 1/2
                      </div>
                    </div>
                    <div className="relative z-10 flex-1">
                      <h3 className="text-xl font-display font-bold text-white mb-2">Sponsor de Desafío Semanal</h3>
                      <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        Tu marca será la imagen oficial de uno de nuestros desafíos, dándole visibilidad exclusiva en el mapa y la sección de misiones.
                      </p>
                    </div>
                    <div className="relative z-10 border-t border-white/5 pt-4 mt-auto">
                       <div className="flex items-end justify-between mb-4">
                         <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Inversión</div>
                         <div className="text-2xl font-bold text-white">$80.000</div>
                       </div>
                       <button onClick={() => setSelectedCampaign('sponsor')} className="w-full bg-secondary text-bgDark font-bold py-3 rounded-xl hover:bg-secondary/90 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                         Solicitar Campaña
                       </button>
                    </div>
                  </div>

                  {/* Campaign 3: Integral */}
                  <div className="glass-card rounded-3xl p-6 border border-white/5 flex flex-col relative overflow-hidden group opacity-75 grayscale-[0.5]">
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className="p-3 rounded-xl bg-slate-800 text-slate-400 border border-white/10">
                        <Rocket className="w-6 h-6" />
                      </div>
                      <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-3 py-1 rounded-full text-xs font-bold">
                        Agotado
                      </div>
                    </div>
                    <div className="relative z-10 flex-1">
                      <h3 className="text-xl font-display font-bold text-white mb-2">Campaña Integral "Partner"</h3>
                      <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        Máxima visibilidad. Incluye banner destacado en la home, 2 notificaciones push y un desafío personalizado durante todo el mes.
                      </p>
                    </div>
                    <div className="relative z-10 border-t border-white/5 pt-4 mt-auto">
                       <div className="flex items-end justify-between mb-4">
                         <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Inversión</div>
                         <div className="text-2xl font-bold text-slate-400 line-through">$250.000</div>
                       </div>
                       <button disabled className="w-full bg-white/5 text-slate-500 border border-white/10 font-bold py-3 rounded-xl cursor-not-allowed">
                         Sin cupos este mes
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6 max-w-5xl">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    Configuración
                  </h1>
                  <p className="text-onSurfaceVariant text-base max-w-2xl">
                    Administrá la seguridad de tu cuenta, notificaciones y accesos de tu equipo.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Content */}
                  <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Security */}
                    <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-6">
                        <Key className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">Seguridad y Acceso</h3>
                      <p className="text-sm text-slate-400 mb-6 leading-relaxed">Actualizá tu contraseña y configurá la autenticación en dos pasos para mayor seguridad.</p>
                      
                      <div className="space-y-4 mt-auto">
                         <div className="space-y-1.5">
                           <label className="text-xs text-slate-400 font-medium">Contraseña Actual</label>
                           <input type="password" placeholder="••••••••" className="w-full bg-bgDeep border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                         </div>
                         <div className="space-y-1.5">
                           <label className="text-xs text-slate-400 font-medium">Nueva Contraseña</label>
                           <input type="password" placeholder="••••••••" className="w-full bg-bgDeep border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                         </div>
                         <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-2.5 rounded-xl transition-colors text-sm mt-2">
                           Actualizar Contraseña
                         </button>
                      </div>
                    </div>

                    {/* Team */}
                    <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-6">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">Equipo de Trabajo</h3>
                      <p className="text-sm text-slate-400 mb-6 leading-relaxed">Invitá a tus empleados para que puedan usar el escáner de validación con sus propias cuentas.</p>
                      
                      <div className="space-y-3 mt-auto">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs border border-primary/30">JS</div>
                            <div>
                              <p className="text-sm font-bold text-slate-200">Juan Sur</p>
                              <p className="text-xs text-slate-400">Dueño / Admin</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-xs border border-white/10">MM</div>
                            <div>
                              <p className="text-sm font-bold text-slate-200">María Mozo</p>
                              <p className="text-xs text-slate-400">Rol: Escáner</p>
                            </div>
                          </div>
                          <button className="text-xs text-red-400 hover:text-red-300 font-medium px-2">Remover</button>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 bg-emerald-400 text-bgDark hover:bg-emerald-300 font-bold py-2.5 rounded-xl transition-colors text-sm mt-2 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                          <User className="w-4 h-4" />
                          Invitar Miembro
                        </button>
                      </div>
                    </div>
                    
                    {/* Notifications */}
                    <div className="lg:col-span-2 glass-card rounded-3xl p-6 md:p-8 border border-white/10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                            <BellRing className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-display font-bold text-white mb-1">Preferencias de Notificación</h3>
                            <p className="text-sm text-slate-400">Controlá cómo y cuándo querés que te avisemos.</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 max-w-xl">
                        <label className="flex items-center justify-between cursor-pointer p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                          <div>
                            <p className="text-sm font-bold text-slate-200">Resumen Diario de Validaciones</p>
                            <p className="text-xs text-slate-400">Recibí un email con la actividad del día.</p>
                          </div>
                          <div className="relative inline-block w-11 h-6 rounded-full bg-emerald-500/30 border border-emerald-500/50">
                            <span className="absolute left-6 top-1 w-4 h-4 rounded-full bg-emerald-400 transition-all shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                          </div>
                        </label>
                        
                        <label className="flex items-center justify-between cursor-pointer p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                          <div>
                            <p className="text-sm font-bold text-slate-200">Alerta de Campañas (Nubo Ads)</p>
                            <p className="text-xs text-slate-400">Avisos sobre cupos disponibles y reportes de rendimiento.</p>
                          </div>
                          <div className="relative inline-block w-11 h-6 rounded-full bg-emerald-500/30 border border-emerald-500/50">
                            <span className="absolute left-6 top-1 w-4 h-4 rounded-full bg-emerald-400 transition-all shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                          </div>
                        </label>

                        <label className="flex items-center justify-between cursor-pointer p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors opacity-75">
                          <div>
                            <p className="text-sm font-bold text-slate-200">Alertas al instante (Push)</p>
                            <p className="text-xs text-slate-400">Recibí una alerta rápida por cada canje realizado. (No recomendado)</p>
                          </div>
                          <div className="relative inline-block w-11 h-6 rounded-full bg-slate-800 border border-white/10">
                            <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-slate-500 transition-all"></span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'help' && (
              <div className="space-y-6 max-w-5xl">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    Ayuda y <span className="gradient-text glow-text">Soporte</span>
                  </h1>
                  <p className="text-onSurfaceVariant text-base max-w-2xl">
                    Encontrá respuestas rápidas o comunicate con el equipo de soporte de Nubo.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column (FAQ & Docs) */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10">
                      <h3 className="text-xl font-display font-bold text-white mb-6">Preguntas Frecuentes</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <h4 className="text-sm font-bold text-slate-200 mb-2">¿Cómo valido un canje desde la app?</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            Podés usar la sección "Escáner Web" en esta plataforma desde tu celular, tablet o computadora conectada a una cámara, y escanear el QR que el explorador te muestre en su pantalla. También podés ingresar el código alfanumérico manualmente.
                          </p>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <h4 className="text-sm font-bold text-slate-200 mb-2">¿Qué pasa si me quedo sin cupos en Nubo Ads?</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            Los cupos se renuevan el día 1 de cada mes. Mantenemos límites estrictos para asegurar que la experiencia de los exploradores sea orgánica y no se llene de promociones, manteniendo un alto valor para tu inversión.
                          </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <h4 className="text-sm font-bold text-slate-200 mb-2">¿Cuándo se actualizan las métricas del dashboard?</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            Las métricas de validación y demografía se actualizan en tiempo real. Los reportes consolidados (semanal y mensual) se generan los días lunes y el 1er día del mes respectivamente.
                          </p>
                        </div>
                      </div>
                    </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <a href="#" className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all group flex flex-col items-center text-center">
                         <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform flex items-center justify-center mb-4">
                           <Video className="w-6 h-6" />
                         </div>
                         <h4 className="text-base font-bold text-slate-100 mb-2">Tutoriales en Video</h4>
                         <p className="text-sm text-slate-400 mb-4">Aprende a sacarle el máximo jugo a tu perfil.</p>
                         <span className="text-xs font-bold text-primary flex items-center gap-1 mt-auto">Ver en YouTube <ExternalLink className="w-3 h-3" /></span>
                       </a>

                       <a href="#" className="glass-card rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-all group flex flex-col items-center text-center">
                         <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform flex items-center justify-center mb-4">
                           <FileText className="w-6 h-6" />
                         </div>
                         <h4 className="text-base font-bold text-slate-100 mb-2">Base de Conocimiento</h4>
                         <p className="text-sm text-slate-400 mb-4">Manual de marca, uso y mejores prácticas.</p>
                         <span className="text-xs font-bold text-secondary flex items-center gap-1 mt-auto">Ir al portal <ExternalLink className="w-3 h-3" /></span>
                       </a>
                     </div>
                  </div>

                  {/* Right Column (Contact) */}
                  <div>
                    <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 sticky top-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center mb-6">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2">¿Necesitás más ayuda?</h3>
                      <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        Nuestro equipo de soporte para comercios asociados atiende de Lunes a Viernes de 9 a 18 hs.
                      </p>

                      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Mensaje enviado"); }}>
                        <div className="space-y-1.5">
                          <label className="text-xs text-slate-400 font-medium">Motivo</label>
                          <select className="w-full bg-bgDeep border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 appearance-none">
                            <option>Dudas sobre la plataforma</option>
                            <option>Problema técnico / Bug</option>
                            <option>Facturación / Pagos</option>
                            <option>Sugerencias</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs text-slate-400 font-medium">Mensaje</label>
                          <textarea 
                            rows={4} 
                            placeholder="Describinos el inconveniente..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 resize-none"
                          ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-bgDark font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(67,221,226,0.3)] mt-2">
                          Enviar Mensaje
                        </button>
                      </form>
                      
                      <div className="mt-8 border-t border-white/10 pt-6">
                        <a href="mailto:comercios@nubo.travel" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                           <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                             <Mail className="w-4 h-4" />
                           </div>
                           comercios@nubo.travel
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {activeTab !== 'dashboard' && activeTab !== 'resources' && activeTab !== 'profile' && activeTab !== 'scanner' && activeTab !== 'campaigns' && activeTab !== 'settings' && activeTab !== 'help' && (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center border-2 border-dashed border-white/10 rounded-3xl p-8">
                <Store className="w-16 h-16 text-slate-600 mb-4" />
                <h2 className="text-2xl font-display font-bold text-white mb-2">Próximamente</h2>
                <p className="text-slate-400 max-w-md">La sección de {sidebarLinks.find(l => l.id === activeTab)?.label} estará disponible muy pronto para todos nuestros comercios asociados.</p>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Campaign Request Modal */}
      <AnimatePresence>
        {selectedCampaign && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCampaign(null)}
              className="absolute inset-0 bg-bgDark/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl glass-card border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={() => setSelectedCampaign(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6 shrink-0 pr-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {selectedCampaign === 'push' ? 'Configurar Notificación Push' : 'Sponsorear Desafío'}
                </h3>
                <p className="text-sm text-slate-400">
                  {selectedCampaign === 'push' 
                    ? 'Completá los detalles para enviar una alerta a los exploradores cercanos.' 
                    : 'Seleccioná la semana y el premio para destacar tu marca.'}
                </p>
              </div>

              <div className="overflow-y-auto pr-2 pb-4 space-y-6 flex-1 custom-scrollbar">
                {selectedCampaign === 'push' ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-400 font-medium">Fecha de envío</label>
                        <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-400 font-medium">Horario</label>
                        <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs text-slate-400 font-medium">Mensaje</label>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setCampaignTemplate('template')}
                          className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-colors ${campaignTemplate === 'template' ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'}`}
                        >
                          Usar Plantilla
                        </button>
                        <button 
                          onClick={() => setCampaignTemplate('custom')}
                          className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-colors ${campaignTemplate === 'custom' ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'}`}
                        >
                          Personalizado
                        </button>
                      </div>

                      {campaignTemplate === 'template' ? (
                        <div className="space-y-2">
                          <select className="w-full bg-bgDeep border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 appearance-none">
                            <option>¡Te extrañamos! Tenés un 20% OFF hoy en [Tu Local].</option>
                            <option>¡Hora feliz en [Tu Local]! Vení y validá puntos dobles.</option>
                            <option>Nuevo menú disponible en [Tu Local]. ¡Vení a probarlo!</option>
                          </select>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <textarea 
                            rows={3} 
                            placeholder="Escribí tu mensaje aquí (máximo 60 caracteres)..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 resize-none"
                            maxLength={60}
                          ></textarea>
                          <p className="text-[10px] text-amber-400 flex items-center gap-1">
                            <HelpCircle className="w-3 h-3" /> 
                            Los mensajes personalizados requieren aprobación de Nubo (hasta 24hs).
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-400 font-medium">Audiencia objetivo</label>
                      <select className="w-full bg-bgDeep border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 appearance-none">
                        <option>Todos los exploradores (a 5km)</option>
                        <option>Solo "Súper Anfitriones" (a 5km)</option>
                        <option>Exploradores que ya visitaron el local</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-400 font-medium">Semana a Sponsorear</label>
                      <select className="w-full bg-bgDeep border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 appearance-none">
                        <option>Semana del 10 al 16 de Junio</option>
                        <option>Semana del 17 al 23 de Junio</option>
                        <option>Semana del 24 al 30 de Junio</option>
                      </select>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-400 font-medium">Premio a entregar (obligatorio)</label>
                      <input type="text" placeholder="Ej: Cena para 2 personas / 2 Noches de estadía" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-400 font-medium">Temática (opcional)</label>
                      <textarea 
                        rows={2} 
                        placeholder="Ej: Desafío de buscar cosas dulces por la ciudad..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary/50 resize-none"
                      ></textarea>
                    </div>
                  </>
                )}
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 shrink-0 flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-slate-400">Total a abonar: </span>
                  <span className="text-white font-bold">{selectedCampaign === 'push' ? '$25.000' : '$80.000'}</span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setSelectedCampaign(null)} className="px-5 py-2.5 rounded-xl font-bold text-sm text-slate-300 hover:bg-white/5 transition-colors">
                    Cancelar
                  </button>
                  <button onClick={() => {
                    alert('Solicitud enviada con éxito');
                    setSelectedCampaign(null);
                  }} className="btn-primary px-6 py-2.5 rounded-xl font-bold text-sm text-bgDark flex items-center gap-2">
                    Enviar Solicitud
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
