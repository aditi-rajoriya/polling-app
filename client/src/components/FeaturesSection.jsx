export default function FeaturesSection() {
  const features = [
    {
      title: "Real-Time Updates",
      description: "Votes update instantly using live socket connections",
    },

    {
      title: "Secure Voting",
      description: "Prevent duplicate voting with authentication systems.",
    },

    {
      title: "Analytics",
      description: "View live poll analytics and engagement insights.",
      },
      {
          title: "Fast Performance",
          description: "Optimized backend APIs."
      },
  ];

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-14">Why Use Pollify?</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
          >
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>

            <p className="text-zinc-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
