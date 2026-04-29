/* app.jsx — root render */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#19ccf0",
  "accentSecondary": "#f0a219",
  "heroHeadline": "Explorar la ciudad ahora tiene recompensa",
  "heroCTA": "Empezar a explorar",
  "showFloatingStickers": true,
  "animateBackground": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent live
  React.useEffect(() => {
    document.documentElement.style.setProperty('--tweak-primary', tweaks.accentColor);
  }, [tweaks.accentColor]);

  const handleCTA = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bgDark text-onSurface relative overflow-x-hidden">
      <Nav onCTA={handleCTA} />
      <Hero onCTA={handleCTA} />
      <HowItWorks />
      <PointSystem />
      <PrizesShowcase />
      <CommunityRanking />
      <PassportSection />
      <MerchantsSection />
      <FAQ />
      <FinalCTA onCTA={handleCTA} />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero">
          <TweakText label="Headline" value={tweaks.heroHeadline} onChange={v => setTweak('heroHeadline', v)} />
          <TweakText label="CTA" value={tweaks.heroCTA} onChange={v => setTweak('heroCTA', v)} />
          <TweakToggle label="Mostrar stickers flotantes" value={tweaks.showFloatingStickers} onChange={v => setTweak('showFloatingStickers', v)} />
        </TweakSection>
        <TweakSection title="Estilo">
          <TweakColor label="Accent primario" value={tweaks.accentColor} onChange={v => setTweak('accentColor', v)} />
          <TweakColor label="Accent secundario" value={tweaks.accentSecondary} onChange={v => setTweak('accentSecondary', v)} />
          <TweakToggle label="Animar fondo" value={tweaks.animateBackground} onChange={v => setTweak('animateBackground', v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
