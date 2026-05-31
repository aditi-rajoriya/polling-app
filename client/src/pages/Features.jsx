import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Features() {

    const features = [
        {
            title: "Real-Time Voting",
            description:
                "Votes update instantly using WebSocket-based communication.",
        },

        {
            title: "Live Analytics",
            description:
                "Track voting trends and engagement with dynamic statistics.",
        },

        {
            title: "Secure Authentication",
            description:
                "Prevent duplicate voting with secure user authentication.",
        },

        {
            title: "Responsive Design",
            description:
                "Optimized for desktop, tablet, and mobile devices.",
        },

        {
            title: "Dynamic Poll Creation",
            description:
                "Create custom polls with multiple options dynamically.",
        },

        {
            title: "Fast Backend APIs",
            description:
                "Built with optimized Node.js and Express architecture.",
        },
    ];

    const steps = [
        {
            id: 1,
            title: "Create Poll",
            description:
                "Create a custom poll with multiple options in seconds.",
        },

        {
            id: 2,
            title: "Share Link",
            description:
                "Share your poll instantly with friends or audience.",
        },

        {
            id: 3,
            title: "Watch Live Results",
            description:
                "View votes and analytics update in real time.",
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white">

            <Navbar />

            {/* HERO SECTION */}
            <section className="text-center px-6 py-24">

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">

                    Powerful Features For <br />

                    <span className="text-blue-500">
                        Real-Time Polling
                    </span>

                </h1>

                <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">

                    Pollify helps you create interactive live polls with
                    instant updates, analytics, and modern user experience.

                </p>

            </section>

            {/* FEATURES GRID */}
            <section className="px-6 py-10 max-w-7xl mx-auto">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((feature, index) => (

                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition"
                        >

                            <h2 className="text-2xl font-bold mb-4">
                                {feature.title}
                            </h2>

                            <p className="text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* HOW IT WORKS */}
            <section className="px-6 py-24 max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-16">

                    How It Works

                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {steps.map((step) => (

                        <div
                            key={step.id}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
                        >

                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">

                                {step.id}

                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                {step.title}
                            </h3>

                            <p className="text-zinc-400">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* LIVE STATS */}
            <section className="px-6 py-20">

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                    <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 text-center">

                        <h2 className="text-5xl font-bold text-blue-500">
                            10K+
                        </h2>

                        <p className="text-zinc-400 mt-4 text-lg">
                            Polls Created
                        </p>

                    </div>

                    <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 text-center">

                        <h2 className="text-5xl font-bold text-green-500">
                            1M+
                        </h2>

                        <p className="text-zinc-400 mt-4 text-lg">
                            Votes Collected
                        </p>

                    </div>

                    <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 text-center">

                        <h2 className="text-5xl font-bold text-pink-500">
                            99%
                        </h2>

                        <p className="text-zinc-400 mt-4 text-lg">
                            Uptime Reliability
                        </p>

                    </div>

                </div>

            </section>

            {/* CTA SECTION */}
            <section className="px-6 py-24 text-center">

                <h2 className="text-5xl font-bold">

                    Start Creating Polls Today

                </h2>

                <p className="text-zinc-400 mt-6 text-lg">

                    Build interactive real-time polls in minutes.

                </p>

                <div className="flex justify-center mt-10">

                    <Button text="Create Poll Now" />

                </div>

            </section>

            <Footer />

        </div>
    );
}