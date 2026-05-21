// app/page.tsx
import { Shield, Target, Mountain, Lock } from 'lucide-react';

export default function SummitVault() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative">
      {/* Background Image + Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://picsum.photos/id/1015/2000/1200')`,
          filter: 'brightness(0.65)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Logo + Shield */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/50">
            <Shield className="w-12 h-12 text-black" strokeWidth={2.5} />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-2 bg-gradient-to-r from-amber-300 via-white to-amber-300 bg-clip-text text-transparent">
          SUMMIT VAULT
        </h1>
        
        <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-6 tracking-widest">
          $SUMIT
        </div>

        <p className="text-amber-400 text-xl md:text-2xl font-medium mb-8 tracking-wider">
          THE APEX OF ELEVATED FINANCE
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/30 text-amber-400 px-8 py-3 rounded-full text-lg font-semibold tracking-[4px] mb-10">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
          COMING SOON
        </div>

        <p className="max-w-md mx-auto text-lg md:text-xl text-gray-300 mb-12">
          Secure. Elevate. Transcend.<br />
          The ultimate protocol reaching new heights.
        </p>

        {/* Elevation Stat */}
        <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-4 mb-12">
          <span className="text-sm uppercase tracking-widest text-gray-400">ELEVATION</span>
          <span className="text-4xl font-bold text-amber-400">8848M</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => alert('🚀 Summit Vault is launching soon. Join the ascent!')}
          className="group relative px-12 py-5 text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/40"
        >
          JOIN THE SUMMIT
        </button>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          <div className="flex flex-col items-center">
            <div className="text-amber-400 text-3xl font-bold mb-1">100.00%</div>
            <div className="text-gray-400">PROTOCOL INTEGRITY</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-emerald-400 text-3xl font-bold mb-1">OPERATIONAL</div>
            <div className="text-gray-400">NETWORK STATUS</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-amber-400 text-3xl font-bold mb-1">
              <Lock className="w-7 h-7" /> SUMMIT LOCKED
            </div>
            <div className="text-gray-400">SECURE • TRANSCEND</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 text-center text-gray-500 text-sm">
        © 2026 Summit Vault • All Rights Reserved • Elevate Protocols
      </footer>
    </main>
  );
}