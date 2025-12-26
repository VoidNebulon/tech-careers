import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-5 py-2.5 overflow-hidden pt-15 md:pt-2.5">
      {/* Background Image */}
      <div>
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Logo */}
      <div className="relative z-10 text-center mt-2 mb-8">
        <Image
          src="/images/pgc-logo.png"
          alt="PGC Logo"
          width={200}
          height={60}
          className="w-full max-w-50 h-auto"
        />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center mb-16 w-[90%] max-w-225">
        <div className="mb-8">
          <h1
            className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em] m-0 text-balance drop-shadow-[0_4px_15px_rgba(0,0,0,0.2)] bg-[linear-gradient(0deg,#ffffff_40%,#0c0c0c8d_100%)] bg-clip-text text-transparent"
          >
            Explore the Road to Your Dream Career in Tech
          </h1>
        </div>
        <div className="mt-8 px-6">
          <p className="text-[clamp(1.1rem,2.5vw,1.4rem)] font-normal leading-[1.6] tracking-[0.01em] text-white/80 text-shadow-[0_2px_10px_rgba(0,0,0,0.4)] max-w-175 mx-auto">
            From tools to course resources, uncover everything you need to
            succeed at building a future-ready tech career!
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center items-stretch gap-14 w-full max-w-250 mb-16">
        <GlassCard
          title="Resources List"
          text="Get all the essential resources to aid your learning."
        />
        <GlassCard
          title="Universities List"
          text="Apply to universities offering top-notch programs."
        />
      </div>
    </section>
  );
}

function GlassCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex-1 min-w-70 max-w-74 p-6 bg-white/3 backdrop-blur-xl border border-white/10 rounded-[20px] flex flex-col transition-all duration-300 hover:bg-white/6 hover:-translate-y-1.25 m-[4%] md:m-0">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-base font-light leading-normal text-white/70 mb-8 grow">
        {text}
      </p>
      <div className="mt-auto flex justify-end">
        <GradientButton />
      </div>
    </div>
  );
}

function GradientButton() {
  return (
    <div className="group relative inline-block p-[1.5px] bg-linear-to-br from-[#a855f7] to-[#6366f1] rounded-xl cursor-none transition-transform duration-300 shadow-none hover:-translate-y-0.5 hover:scale-102 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)] active:scale-98">
      {/* Blur effect */}
      <div className="absolute -inset-0.5 bg-linear-to-br from-[#a855f7] to-[#6366f1] rounded-[14px] -z-10 opacity-0 blur-xl transition-opacity duration-400 group-hover:opacity-60" />

      <button className="text-[15px] font-semibold py-2.5 px-6 rounded-[11px] border-none bg-[#0c0c0c] text-white cursor-none flex items-center gap-2 transition-colors duration-300 relative z-10 group-hover:bg-transparent">
        Download
      </button>
    </div>
  );
}
