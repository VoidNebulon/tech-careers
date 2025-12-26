import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#8a4bbb]/40 to-transparent m-0" />
      <section className="relative bg-[#080808] text-white text-center p-0 m-0 overflow-hidden">
        {/* Footer Background */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Image
            src="/images/footer-bg.png"
            alt="Footer Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-20 m-4">
          <p className="text-lg font-medium leading-6 tracking-[-0.5px] bg-linear-to-t from-[#ae5feb] via-[#b79bcd] to-[#e6bcf6] bg-clip-text text-transparent">
            &copy; 2025. All rights reserved by Ali.
          </p>
        </div>
      </section>
    </>
  );
}
