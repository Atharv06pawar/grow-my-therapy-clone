"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function AddressSection() {

  const officeAnim = useInViewAnimation();
  const hoursAnim = useInViewAnimation();
  const mapAnim = useInViewAnimation();

  return (
    <section className="py-24 bg-[#F7F3EC]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-[#2C2C2C]">

        {/* LEFT INFO */}
        <div className="space-y-10">

          <div
            ref={officeAnim.ref}
            className={officeAnim.isVisible ? "slide-up delay-1" : "animate-hidden"}
          >
            <h3 className="text-2xl font-medium mb-3">
              My Office
            </h3>
            <p className="text-lg">
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>
          </div>

          <div
            ref={hoursAnim.ref}
            className={hoursAnim.isVisible ? "slide-up delay-2" : "animate-hidden"}
          >
            <h3 className="text-2xl font-medium mb-3">
              Hours
            </h3>
            <p className="text-lg">
              Monday – Friday<br />
              10am – 6pm
            </p>
          </div>

        </div>

        {/* RIGHT GOOGLE MAP */}
        <div
          ref={mapAnim.ref}
          className={`h-[420px] rounded-xl overflow-hidden shadow-sm ${
            mapAnim.isVisible ? "slide-up delay-3" : "animate-hidden"
          }`}
        >
          <iframe
            src="https://www.google.com/maps?q=Santa+Monica+CA+90401&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
