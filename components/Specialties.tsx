export default function Specialties() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-medium mb-12">
          My Specialties
        </h2>

        {/* CARD GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-8 border rounded-xl">
            <h3 className="text-xl font-medium mb-4">
              Anxiety & Panic
            </h3>
            <p className="text-sm leading-relaxed">
              Support for constant worry, overthinking, and nervous system overwhelm.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-8 border rounded-xl">
            <h3 className="text-xl font-medium mb-4">
              Trauma & Past Experiences
            </h3>
            <p className="text-sm leading-relaxed">
              Gentle, paced trauma work focused on safety and regulation.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-8 border rounded-xl">
            <h3 className="text-xl font-medium mb-4">
              Burnout & High Pressure Living
            </h3>
            <p className="text-sm leading-relaxed">
              Therapy for professionals and creatives feeling exhausted or disconnected.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
