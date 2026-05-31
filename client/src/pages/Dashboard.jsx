import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {

    // GET POLLS FROM LOCAL STORAGE
    const recentPolls =
        JSON.parse(localStorage.getItem("polls")) || [];

    return (
        <div className="min-h-screen bg-zinc-950 text-white">

            <Navbar />

            {/* HEADER */}
            <section className="px-6 py-16 max-w-7xl mx-auto">

                <h1 className="text-5xl font-bold">
                    Dashboard
                </h1>

                <p className="text-zinc-400 mt-4 text-lg">
                    Manage your created polls.
                </p>

            </section>

            {/* POLLS SECTION */}
            <section className="px-6 pb-20 max-w-7xl mx-auto">

                <h2 className="text-4xl font-bold mb-10">
                    Your Polls
                </h2>

                {/* EMPTY STATE */}
                {recentPolls.length === 0 ? (

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center text-zinc-500 text-xl">

                        No polls created yet.

                    </div>

                ) : (

                    <div className="space-y-6">

                        {recentPolls.map((poll) => (

                            <div
                                key={poll.id}
                                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex justify-between items-center"
                            >

                                <div>

                                    <h3 className="text-2xl font-semibold">
                                        {poll.question}
                                    </h3>

                                    <p className="text-zinc-400 mt-2">
                                        Options: {poll.options.length}
                                    </p>

                                </div>

                                <div>

                                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-semibold">

                                        Active

                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>

            <Footer />

        </div>
    );
}