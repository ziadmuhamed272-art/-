import React from "react";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#020617] to-[#000000] animate-gradient-slow opacity-60"></div>
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,140,255,0.45)_0%,rgba(0,0,0,0)_70%)] blur-3xl animate-pulse-slow"></div>

      {/* Landing */}
      <header className="relative z-10 flex flex-col items-center justify-center text-center p-10">
        <img src="/logo.png" alt="ECHO Logo" className="w-32 mb-6"/>
        <h1 className="text-5xl font-bold mb-4">ECHO - Digital Excellence</h1>
        <p className="text-lg max-w-2xl opacity-80">
          We craft premium digital experiences powered by modern design, creativity, and high-end brand presence.
        </p>
      </header>

      {/* About */}
      <section className="relative z-10 mt-24 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto opacity-80">
          ECHO is your trusted partner for digital excellence. We specialize in creating content, UI/UX design, and managing top-tier digital marketing campaigns.
        </p>
      </section>

      {/* Services */}
      <section className="relative z-10 mt-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Content Creation", "UI/UX Design", "Ads & Marketing"].map((service) => (
          <div key={service} className="group relative bg-[#0a0a0a] p-8 rounded-2xl shadow-xl border border-[#0f0f0f] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(0,150,255,0.4)]">
            <h3 className="text-xl font-semibold mb-3">{service}</h3>
            <p className="text-sm opacity-70">High-end execution for brands aiming for premium positioning.</p>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="relative z-10 mt-24 text-center px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6 opacity-80">Send us a message directly via WhatsApp:</p>
        <a
          href="https://wa.me/201095327128"
          target="_blank"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-24 text-center py-6 border-t border-gray-800 opacity-60">
        © 2025 ECHO. All rights reserved.
      </footer>
    </div>
  );
}
