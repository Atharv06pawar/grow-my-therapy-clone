export default function Hero() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#FBF8F3]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-[#2C2C2C]">

        {/* LEFT IMAGE */}
        <div className="reveal-container">
          <img
            src="/images/hero.png"
            alt="Therapy hero visual"
            className="flash-reveal h-[520px] w-full object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h1 className="slide-up delay-1 text-5xl font-medium leading-tight mb-6">
            Live your life in full bloom
          </h1>

          <p className="slide-up delay-2 text-lg mb-8">
            Therapy for Adults in Santa Monica, CA.
          </p>

          <button className="slide-up delay-3 border border-black px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition">
            Connect with me →
          </button>

        </div>

      </div>
    </section>
  );
}
