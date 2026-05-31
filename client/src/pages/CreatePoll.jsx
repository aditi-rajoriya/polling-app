import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreatePollForm from "../components/CreatePollForm";

export default function CreatePoll() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">

            <Navbar />

            {/* PAGE HEADER */}
            <section className="text-center py-16 px-6">

                <h1 className="text-5xl font-bold">

                    Create Your Poll

                </h1>

                <p className="text-zinc-400 mt-4 text-lg">

                    Build interactive polls with dynamic voting.

                </p>

            </section>

            {/* FORM */}
            <CreatePollForm />

            <Footer />

        </div>
    );
}