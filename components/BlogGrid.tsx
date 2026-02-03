"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function BlogGrid() {

  const posts = [
    {
      title: "Finding Calm in a Constantly Busy Mind",
      date: "January 2024",
      image: "/images/bg1.jpg",
    },
    {
      title: "What Burnout Can Look Like Beneath the Surface",
      date: "December 2023",
      image: "/images/bg2.jpg",
    },
    {
      title: "When Anxiety Feels Physical, Not Just Mental",
      date: "November 2023",
      image: "/images/bg3.jpg",
    },
    {
      title: "Creating Space to Slow Down and Reflect",
      date: "October 2023",
      image: "/images/bg4.jpg",
    },
  ];

  const sectionAnim = useInViewAnimation();

  return (
    <section
      ref={sectionAnim.ref}
      className="py-24 bg-[#FFF4EC]"
    >
      <div className="max-w-6xl mx-auto px-6 text-[#3A4D39]">

        <div className="grid md:grid-cols-2 gap-10">

          {posts.map((post, index) => {

            const delayClass =
              index === 0 ? "delay-1" :
              index === 1 ? "delay-2" :
              index === 2 ? "delay-3" :
              "delay-4";

            return (
              <div
                key={index}
                className={`space-y-4 ${
                  sectionAnim.isVisible
                    ? `slide-up ${delayClass}`
                    : "animate-hidden"
                }`}
              >

                {/* IMAGE */}
                <div className="reveal-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="flash-reveal h-[260px] w-full object-cover rounded-xl"
                  />
                </div>

                {/* DATE */}
                <p className="text-xs opacity-70">
                  {post.date}
                </p>

                {/* TITLE */}
                <h3 className="text-lg font-medium">
                  {post.title}
                </h3>

                {/* LINK */}
                <a className="text-sm underline underline-offset-4 hover:opacity-70 transition">
                  Read more →
                </a>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
