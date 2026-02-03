"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function SocialSection() {

  const titleAnim = useInViewAnimation();
  const gridAnim = useInViewAnimation();

  return (
    <section className="py-24 bg-[#FFF6EE]">
      <div className="max-w-6xl mx-auto px-6 space-y-10 text-[#3A4D39]">

        {/* HEADING */}
        <h2
          ref={titleAnim.ref}
          className={`text-3xl font-medium ${
            titleAnim.isVisible ? "slide-up delay-1" : "animate-hidden"
          }`}
        >
          Find me on social.
        </h2>

        {/* SOCIAL BOX GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* BOX 1 */}
  <a
    href="#"
    className="aspect-square rounded-xl overflow-hidden shadow-sm transition hover:scale-[1.02]"
  >
    <img
      src="/images/bg1.jpg"
      alt="Social platform 1"
      className="w-full h-full object-cover"
    />
  </a>

  {/* BOX 2 */}
  <a
    href="#"
    className="aspect-square rounded-xl overflow-hidden shadow-sm transition hover:scale-[1.02]"
  >
    <img
      src="/images/bg2.jpg"
      alt="Social platform 2"
      className="w-full h-full object-cover"
    />
  </a>

  {/* BOX 3 */}
  <a
    href="#"
    className="aspect-square rounded-xl overflow-hidden shadow-sm transition hover:scale-[1.02]"
  >
    <img
      src="/images/bg3.jpg"
      alt="Social platform 3"
      className="w-full h-full object-cover"
    />
  </a>

  {/* BOX 4 */}
  <a
    href="#"
    className="aspect-square rounded-xl overflow-hidden shadow-sm transition hover:scale-[1.02]"
  >
    <img
      src="/images/bg4.jpg"
      alt="Social platform 4"
      className="w-full h-full object-cover"
    />
  </a>

</div>


      </div>
    </section>
  );
}
