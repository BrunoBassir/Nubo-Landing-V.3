/* Mockups que recrean pantallas reales de la app Nubo dentro de los frames de iPhone */

const MIcon = ({ name, className = '', fill = false, style = {} }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{ fontVariationSettings: fill ? "'FILL' 1" : "'FILL' 0", ...style }}
  >{name}</span>
);

// ----- Home Screen Mockup (replica HomeScreen.tsx) -----
function HomeMockup() {
  return (
    <div className="w-full h-full bg-bgDark text-white overflow-hidden flex flex-col">
      {/* Top nav */}
      <div className="flex items-center justify-between px-5 pt-14 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center glow-cyan">
            <MIcon name="explore" className="text-bgDark text-[18px]" fill />
          </div>
          <span className="font-bold text-base tracking-tight">Nubo</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <MIcon name="notifications" className="text-onSurfaceVariant text-[22px]" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full glow-cyan"></span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden ring-1 ring-primary/40">
            <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-cyan-800"></div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-2">
        <h1 className="text-xl font-bold tracking-tight">Hola, Explorador</h1>
        <p className="text-slate-500 text-xs">¿Qué vamos a descubrir hoy?</p>
      </div>

      <div className="px-5 mt-2">
        {/* Streak */}
        <div className="bg-slate-900 border border-orange-500/30 rounded-2xl p-3 flex items-center justify-between" style={{boxShadow: '0 0 15px rgba(249, 115, 22, 0.1)'}}>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center">
              <MIcon name="local_fire_department" className="text-orange-500 text-[20px]" fill />
            </div>
            <div>
              <div className="text-[12px] font-bold leading-tight">Racha Activa</div>
              <div className="text-orange-400 font-black text-[10px] uppercase tracking-wider">3 Días Seguidos</div>
            </div>
          </div>
          <div className="flex gap-0.5">
            {['L','M','X','J','V','S','D'].map((d, i) => (
              <div key={d} className="flex flex-col items-center gap-0.5">
                <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${i < 3 ? 'bg-orange-500' : 'bg-slate-800'}`}>
                  {i < 3 && <MIcon name="check" className="text-[8px] text-white" fill />}
                </div>
                <span className="text-[7px] text-slate-500 font-bold">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* XP card */}
      <div className="px-5 mt-3">
        <div className="glass-card rounded-2xl p-3.5 relative overflow-hidden" style={{boxShadow: '0 0 20px rgba(25,204,240,0.07)'}}>
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-700 flex items-center justify-center glow-cyan">
              <MIcon name="military_tech" className="text-bgDark text-[20px]" fill />
            </div>
            <div className="flex-1">
              <div className="label-caps text-primary opacity-80 mb-1" style={{fontSize:'9px'}}>NIVEL ACTUAL</div>
              <div className="flex justify-between items-end">
                <div className="text-base font-bold leading-none">Aventurero <span className="text-cyan-400">14</span></div>
                <div className="flex items-end gap-1">
                  <span className="text-primary text-sm font-bold leading-none">2,450</span>
                  <span className="text-onSurfaceVariant text-[8px] pb-[1px]">/ 3,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-2 bg-slate-900/80 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div className="h-full w-[82%] bg-gradient-to-r from-cyan-500 to-primary rounded-full glow-cyan relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 animate-shimmer"></div>
            </div>
          </div>
          <p className="text-right text-[8px] text-cyan-400 mt-1.5 label-caps" style={{fontSize:'8px'}}>550 XP PARA HÉROE</p>
        </div>
      </div>

      {/* Daily challenge */}
      <div className="px-5 mt-3">
        <div className="label-caps text-cyan-400 mb-2" style={{fontSize:'9px'}}>DESAFÍO DIARIO</div>
        <div className="glass-card rounded-xl p-3 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/10 blur-2xl rounded-full"></div>
          <div className="flex gap-2.5 items-start relative z-10">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center">
              <MIcon name="local_cafe" className="text-primary text-[22px]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold leading-tight">Explorador de Cafeína</div>
              <div className="text-onSurfaceVariant text-[10px] leading-tight mt-0.5">Visita una cafetería local y escaneá el QR.</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="flex items-center gap-1 text-primary text-[11px] font-bold">
                  <MIcon name="bolt" className="text-[12px]" /> +150 XP
                </span>
                <button className="bg-primary text-bgDark px-2.5 py-1 rounded-full label-caps" style={{fontSize:'8px'}}>IR AHORA</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended places */}
      <div className="px-5 mt-3 flex-1 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="label-caps text-cyan-400" style={{fontSize:'9px'}}>LUGARES RECOMENDADOS</div>
          <MIcon name="arrow_forward" className="text-onSurfaceVariant text-[14px]" />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {[
            { name: 'Bookish Cafe', cat: 'CAFETERÍA', dist: '320 m', hue: '180' },
            { name: 'Atlas Cocktails', cat: 'BAR', dist: '450 m', hue: '200' },
            { name: 'Mural Plaza', cat: 'ARTE URBANO', dist: '600 m', hue: '160' },
          ].map((p, i) => (
            <div key={i} className="w-[160px] min-w-[160px] glass-card rounded-xl overflow-hidden flex-shrink-0">
              <div className="w-full h-16 relative" style={{background: `linear-gradient(135deg, hsl(${p.hue}, 60%, 25%), hsl(${p.hue}, 30%, 15%))`}}>
                <div className="absolute inset-0 dot-bg opacity-30"></div>
              </div>
              <div className="p-2">
                <div className="text-[11px] font-bold leading-tight">{p.name}</div>
                <div className="text-[9px] text-onSurfaceVariant flex items-center gap-1 mt-0.5">
                  <MIcon name="location_on" className="text-[10px]" /> {p.dist}
                </div>
                <div className="text-[8px] text-primary/80 font-bold uppercase tracking-tight mt-0.5">{p.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="mt-auto px-2 pb-5 pt-2 relative">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-slate-900/85 rounded-t-3xl border-t border-white/15 -z-0" style={{backdropFilter: 'blur(16px)'}}></div>
        <div className="relative flex justify-around items-end h-12 z-10">
          {[
            { i: 'home', l: 'Inicio', active: true },
            { i: 'explore', l: 'Explorar' },
          ].map(t => (
            <button key={t.i} className={`flex flex-col items-center gap-0.5 ${t.active ? 'text-primary' : 'text-slate-500'}`}>
              <MIcon name={t.i} className="text-[20px]" fill={t.active} />
              <span className="text-[8px] font-bold uppercase tracking-tight">{t.l}</span>
            </button>
          ))}
          <div className="relative -top-5">
            <button className="w-12 h-12 rounded-full bg-primary glow-cyan-strong flex items-center justify-center ring-4 ring-bgDark">
              <MIcon name="qr_code_scanner" className="text-bgDark text-[24px]" />
            </button>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">Scan QR</span>
          </div>
          {[
            { i: 'workspace_premium', l: 'Premios' },
            { i: 'leaderboard', l: 'Ranking' },
          ].map(t => (
            <button key={t.i} className="flex flex-col items-center gap-0.5 text-slate-500">
              <MIcon name={t.i} className="text-[20px]" />
              <span className="text-[8px] font-bold uppercase tracking-tight">{t.l}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----- Scan QR Mockup -----
function ScanMockup() {
  return (
    <div className="w-full h-full bg-bgDark text-white relative overflow-hidden flex flex-col">
      {/* Top */}
      <div className="px-5 pt-14 pb-2 flex items-center justify-between z-20 relative">
        <div className="text-sm font-bold tracking-tight">Escanear</div>
        <div className="tag-pill px-2 py-1 rounded-full flex items-center gap-1">
          <MIcon name="bolt" className="text-primary text-[12px]" />
          <span className="text-[10px] font-bold text-primary">+50 XP</span>
        </div>
      </div>

      {/* Camera viewport */}
      <div className="relative flex-1 mx-5 my-3 rounded-2xl overflow-hidden" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(25,204,240,0.1), rgba(7,15,17,0.95))'
      }}>
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        {/* Frame corners */}
        <div className="absolute inset-8 flex items-center justify-center">
          <div className="relative w-44 h-44">
            {[
              'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
              'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
              'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
              'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl',
            ].map((c, i) => (
              <div key={i} className={`absolute w-8 h-8 border-primary ${c}`} style={{boxShadow: '0 0 12px rgba(25,204,240,0.5)'}}></div>
            ))}
            <div className="scanner-line animate-scan"></div>
            {/* QR placeholder */}
            <div className="absolute inset-6 grid grid-cols-7 gap-0.5 opacity-50">
              {Array.from({length: 49}).map((_, i) => (
                <div key={i} className={`aspect-square ${[0,1,5,6,7,8,12,13,35,36,40,41,42,43,47,48].includes(i) || Math.random() > 0.6 ? 'bg-primary/70' : ''}`}></div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <div className="text-[11px] text-primary font-bold tracking-widest uppercase">Apuntá al código Nubo</div>
        </div>
      </div>

      {/* Manual code button */}
      <div className="px-5 pb-4">
        <button className="w-full glass-card py-3 rounded-xl text-[12px] font-bold flex items-center justify-center gap-2">
          <MIcon name="dialpad" className="text-primary text-[16px]" />
          Ingresar código manual
        </button>
      </div>
    </div>
  );
}

// ----- Prizes Mockup -----
function PrizesMockup() {
  return (
    <div className="w-full h-full bg-bgDark text-white overflow-hidden flex flex-col">
      <div className="px-5 pt-14 pb-2 flex items-center justify-between">
        <div className="text-sm font-bold tracking-tight">Premios</div>
        <div className="tag-pill px-2 py-1 rounded-full flex items-center gap-1">
          <MIcon name="token" className="text-primary text-[12px]" />
          <span className="text-[10px] font-bold text-primary">1,240 NP</span>
        </div>
      </div>

      <div className="px-5 mt-3">
        <div className="relative rounded-2xl overflow-hidden p-4 border border-primary/30" style={{
          background: 'linear-gradient(135deg, rgba(25,204,240,0.18), rgba(25,204,240,0.04))',
          boxShadow: '0 0 30px rgba(25,204,240,0.18)'
        }}>
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-700 flex items-center justify-center animate-pulse-soft">
              <MIcon name="diamond" className="text-bgDark text-[24px]" fill />
            </div>
            <div>
              <div className="label-caps text-primary mb-1" style={{fontSize:'9px'}}>SUBASTA EN VIVO</div>
              <div className="text-[14px] font-bold leading-tight">AirPods Pro</div>
              <div className="text-onSurfaceVariant text-[10px]">Termina en 04:23:18</div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-[9px] text-onSurfaceVariant uppercase tracking-wider">Puja actual</div>
              <div className="text-primary font-bold text-base">820 NP</div>
            </div>
            <button className="btn-primary px-3 py-1.5 rounded-full label-caps" style={{fontSize:'9px'}}>PUJAR</button>
          </div>
        </div>
      </div>

      <div className="px-5 mt-4">
        <div className="label-caps text-cyan-400 mb-2" style={{fontSize:'9px'}}>CANJEÁ TUS NP</div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: '2x1 Café', cost: '120 NP', icon: 'local_cafe', hue: 200 },
            { name: 'Cine Gratis', cost: '450 NP', icon: 'movie', hue: 280 },
            { name: 'Pizza 30%', cost: '280 NP', icon: 'local_pizza', hue: 30 },
            { name: 'Mystery Box', cost: '500 NP', icon: 'redeem', hue: 320 },
          ].map((p, i) => (
            <div key={i} className="glass-card rounded-xl p-2.5">
              <div className="w-full h-14 rounded-lg mb-2 flex items-center justify-center" style={{background: `linear-gradient(135deg, hsl(${p.hue}, 50%, 22%), hsl(${p.hue}, 30%, 15%))`}}>
                <MIcon name={p.icon} className="text-primary text-[26px]" />
              </div>
              <div className="text-[11px] font-bold leading-tight">{p.name}</div>
              <div className="text-[10px] text-primary font-bold mt-0.5">{p.cost}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto px-2 pb-5 pt-2 relative">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-slate-900/85 rounded-t-3xl border-t border-white/15 -z-0" style={{backdropFilter:'blur(16px)'}}></div>
        <div className="relative flex justify-around items-end h-12 z-10">
          <button className="flex flex-col items-center gap-0.5 text-slate-500"><MIcon name="home" className="text-[20px]"/><span className="text-[8px] font-bold uppercase">Inicio</span></button>
          <button className="flex flex-col items-center gap-0.5 text-slate-500"><MIcon name="explore" className="text-[20px]"/><span className="text-[8px] font-bold uppercase">Explorar</span></button>
          <div className="relative -top-5"><div className="w-12 h-12 rounded-full bg-primary glow-cyan-strong flex items-center justify-center ring-4 ring-bgDark"><MIcon name="qr_code_scanner" className="text-bgDark text-[24px]"/></div></div>
          <button className="flex flex-col items-center gap-0.5 text-primary"><MIcon name="workspace_premium" className="text-[20px]" fill/><span className="text-[8px] font-bold uppercase">Premios</span></button>
          <button className="flex flex-col items-center gap-0.5 text-slate-500"><MIcon name="leaderboard" className="text-[20px]"/><span className="text-[8px] font-bold uppercase">Ranking</span></button>
        </div>
      </div>
    </div>
  );
}

// ----- Ranking Mockup -----
function RankingMockup() {
  return (
    <div className="w-full h-full bg-bgDark text-white overflow-hidden flex flex-col">
      <div className="px-5 pt-14 pb-2 text-sm font-bold tracking-tight">Ranking Semanal</div>

      {/* Podium */}
      <div className="relative mx-5 mt-3 rounded-2xl p-4 overflow-hidden" style={{background: 'radial-gradient(circle at 50% 0%, rgba(25,204,240,0.2), transparent 70%)'}}>
        <div className="flex items-end justify-center gap-3 h-32">
          {/* 2nd */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center text-bgDark font-bold text-xs ring-2 ring-slate-300">2</div>
            <div className="text-[9px] mt-1 font-bold">@ana_b</div>
            <div className="w-14 h-14 mt-1 rounded-t-lg bg-slate-800/60 border-x border-t border-white/10 flex items-end justify-center pb-1">
              <span className="text-[9px] text-slate-400 font-bold">5,820</span>
            </div>
          </div>
          {/* 1st */}
          <div className="flex flex-col items-center">
            <MIcon name="emoji_events" className="text-yellow-400 text-[20px] mb-0.5" fill />
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-700 flex items-center justify-center text-bgDark font-black text-sm glow-cyan-strong">1</div>
            <div className="text-[9px] mt-1 font-bold text-primary">@bruno_b</div>
            <div className="w-14 h-20 mt-1 rounded-t-lg bg-primary/20 border-x border-t border-primary/40 flex items-end justify-center pb-1">
              <span className="text-[10px] text-primary font-black">8,450</span>
            </div>
          </div>
          {/* 3rd */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center text-bgDark font-bold text-xs ring-2 ring-orange-400">3</div>
            <div className="text-[9px] mt-1 font-bold">@valen</div>
            <div className="w-14 h-10 mt-1 rounded-t-lg bg-slate-800/60 border-x border-t border-white/10 flex items-end justify-center pb-1">
              <span className="text-[9px] text-slate-400 font-bold">4,210</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of leaderboard */}
      <div className="px-5 mt-3 space-y-1.5">
        {[
          { rank: 4, name: '@maru.dev', xp: '3,890' },
          { rank: 5, name: '@nico_p', xp: '3,420' },
          { rank: 6, name: '@vos', xp: '2,450', you: true },
          { rank: 7, name: '@lara_g', xp: '2,180' },
        ].map(u => (
          <div key={u.rank} className={`flex items-center gap-3 p-2 rounded-lg ${u.you ? 'bg-primary/10 border border-primary/30' : 'glass-card'}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black ${u.you ? 'bg-primary text-bgDark' : 'bg-slate-800 text-slate-400'}`}>{u.rank}</div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-600 to-slate-800"></div>
            <div className="flex-1 text-[12px] font-semibold">{u.name} {u.you && <span className="text-[8px] text-primary uppercase tracking-wider ml-1">tú</span>}</div>
            <div className={`text-[11px] font-bold ${u.you ? 'text-primary' : 'text-slate-400'}`}>{u.xp} XP</div>
          </div>
        ))}
      </div>

      <div className="px-5 mt-3">
        <div className="rounded-xl p-3 border border-yellow-500/30" style={{background:'linear-gradient(135deg, rgba(255,198,64,0.12), rgba(255,198,64,0.02))'}}>
          <div className="flex items-center gap-2.5">
            <MIcon name="redeem" className="text-secondary text-[22px]" fill />
            <div className="flex-1">
              <div className="text-[11px] font-bold leading-tight">Premio top 3 esta semana</div>
              <div className="text-[10px] text-onSurfaceVariant">Nintendo Switch + 2,000 NP</div>
            </div>
            <MIcon name="chevron_right" className="text-secondary" />
          </div>
        </div>
      </div>

      <div className="mt-auto h-1 bg-slate-700 mx-auto w-24 rounded-full mb-1.5"></div>
    </div>
  );
}

// ----- Profile/Passport Mockup -----
function PassportMockup() {
  return (
    <div className="w-full h-full bg-bgDark text-white overflow-hidden flex flex-col">
      <div className="px-5 pt-14 pb-2 flex items-center justify-between">
        <div className="text-sm font-bold tracking-tight">Pasaporte</div>
        <MIcon name="settings" className="text-onSurfaceVariant text-[20px]" />
      </div>

      {/* Hero card */}
      <div className="mx-5 mt-2 relative rounded-2xl overflow-hidden" style={{
        background: 'linear-gradient(135deg, #19ccf0 0%, #0a1618 65%)',
        minHeight: 130
      }}>
        <div className="absolute inset-0 dot-bg opacity-30"></div>
        <div className="relative p-4 flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-700 ring-2 ring-primary/50"></div>
          <div className="flex-1">
            <div className="label-caps text-primary opacity-80" style={{fontSize:'8px'}}>EXPLORADOR</div>
            <div className="text-base font-bold tracking-tight">Bruno Bassir</div>
            <div className="flex items-center gap-1 mt-0.5">
              <MIcon name="verified" className="text-primary text-[12px]" fill />
              <span className="text-[10px] text-primary font-bold">Aventurero · Nivel 14</span>
            </div>
          </div>
        </div>
        <div className="px-4 pb-3 flex justify-between text-center">
          <div><div className="text-base font-black text-primary">38</div><div className="text-[9px] uppercase tracking-wider text-onSurfaceVariant">Lugares</div></div>
          <div className="w-px bg-white/10"></div>
          <div><div className="text-base font-black text-primary">12</div><div className="text-[9px] uppercase tracking-wider text-onSurfaceVariant">Logros</div></div>
          <div className="w-px bg-white/10"></div>
          <div><div className="text-base font-black text-primary">7</div><div className="text-[9px] uppercase tracking-wider text-onSurfaceVariant">Rutas</div></div>
        </div>
      </div>

      {/* Achievements grid */}
      <div className="px-5 mt-3">
        <div className="label-caps text-cyan-400 mb-2" style={{fontSize:'9px'}}>LOGROS DESBLOQUEADOS</div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: 'local_cafe', name: 'Café', unlocked: true },
            { icon: 'directions_walk', name: 'Walk', unlocked: true },
            { icon: 'nightlife', name: 'Night', unlocked: true },
            { icon: 'palette', name: 'Arte', unlocked: false },
            { icon: 'restaurant', name: 'Food', unlocked: true },
            { icon: 'park', name: 'Verde', unlocked: false },
            { icon: 'museum', name: 'Culto', unlocked: false },
            { icon: 'flight', name: 'Viaje', unlocked: false },
          ].map((a, i) => (
            <div key={i} className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 ${a.unlocked ? 'glass-card cyber-border' : 'bg-slate-900/40 border border-white/5'}`}>
              <MIcon name={a.icon} className={`text-[20px] ${a.unlocked ? 'text-primary' : 'text-slate-700'}`} />
              <span className={`text-[8px] font-bold uppercase ${a.unlocked ? 'text-onSurfaceVariant' : 'text-slate-700'}`}>{a.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Explorer DNA */}
      <div className="px-5 mt-3">
        <div className="glass-card rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <MIcon name="science" className="text-primary text-[16px]" />
            <span className="label-caps text-primary" style={{fontSize:'9px'}}>EXPLORER DNA</span>
          </div>
          {[
            { l: 'Café', v: 80, c: '#19ccf0' },
            { l: 'Bar', v: 55, c: '#f0a219' },
            { l: 'Arte', v: 30, c: '#ffc640' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 mt-1.5">
              <span className="text-[10px] w-10 text-onSurfaceVariant">{b.l}</span>
              <div className="flex-1 h-1.5 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{width: b.v + '%', background: b.c, boxShadow: `0 0 8px ${b.c}`}}></div>
              </div>
              <span className="text-[10px] font-bold w-7 text-right" style={{color: b.c}}>{b.v}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto h-1 bg-slate-700 mx-auto w-24 rounded-full mb-1.5"></div>
    </div>
  );
}

Object.assign(window, { HomeMockup, ScanMockup, PrizesMockup, RankingMockup, PassportMockup, MIcon });
