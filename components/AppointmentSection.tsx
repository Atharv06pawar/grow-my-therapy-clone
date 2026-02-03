"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function AppointmentSection() {

  const titleAnim = useInViewAnimation<HTMLDivElement>()
  const textAnim = useInViewAnimation<HTMLDivElement>()
  const widgetAnim = useInViewAnimation<HTMLDivElement>()
  const poweredAnim = useInViewAnimation<HTMLDivElement>()

  return (
    <section className="py-24 bg-[#F3EFE8]">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-8 text-[#2C2C2C]">

        <h2
          ref={titleAnim.ref}
          className={`text-4xl font-medium ${
            titleAnim.isVisible ? "slide-up delay-1" : "animate-hidden"
          }`}
        >
          Book an appointment.
        </h2>

        <p
          ref={textAnim.ref}
          className={`text-lg ${
            textAnim.isVisible ? "slide-up delay-2" : "animate-hidden"
          }`}
        >
          Schedule your first session or connect through a secure client portal.
        </p>

        {/* WIDGET / EMBED READY CONTAINER */}
        <div
          ref={widgetAnim.ref}
          className={`bg-white rounded-2xl p-12 text-sm shadow-sm ${
            widgetAnim.isVisible ? "slide-up delay-3" : "animate-hidden"
          }`}
        >
          Scheduling widget placeholder
          <br /><br />
          Connect Acuity / Client Portal here
        </div>

        <div
          ref={poweredAnim.ref}
          className={`text-xs opacity-60 ${
            poweredAnim.isVisible ? "slide-up delay-4" : "animate-hidden"
          }`}
        >
          Powered by Acuity Scheduling
        </div>

      </div>
    </section>
  );
}
