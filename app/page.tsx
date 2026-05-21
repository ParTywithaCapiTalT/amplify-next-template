// app/page.tsx
import summitData from '@/data/summit.json';

export default function SummitVaultPage() {
  const { hero, cta, stats, footer } = summitData;

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black/95" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Shield Logo */}
        <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-amber-500/60">
          <span className="text-5xl drop-shadow-lg">{hero.shieldIcon}</span>
        </div>

        <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter mb-2 bg-gradient-to-r from-amber-300 via-white to-amber-300 bg-clip-text text-transparent">
          {hero.mainTitle}
        </h1>

        <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-6 tracking-[4px]">
          {hero.token}
        </div>

        <p className="text-amber-400 text-2xl font-medium tracking-widest mb-8">
          {hero.tagline}
        </p>

        {/* Coming Soon */}
        <div className="inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/30 rounded-full px-8 py-3.5 text-lg font-semibold mb-10">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
          {hero.comingSoonText}
        </div>

        <p className="max-w-md mx-auto text-lg text-gray-300 whitespace-pre-line mb-12">
          {hero.subtitle}
        </p>

        {/* Elevation */}
        <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-10 py-5 mb-12">
          <span className="uppercase tracking-[3px] text-sm text-gray-400">ELEVATION</span>
          <span className="text-4xl font-bold text-amber-400">{hero.elevation}</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => alert(cta.alertMessage)}
          className="px-14 py-6 text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/50"
        >
          {cta.text}
        </button>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-2xl">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 left-0 right-0 text-center text-gray-500 text-sm">
        {footer.text}
      </footer>
    </main>
  );
}