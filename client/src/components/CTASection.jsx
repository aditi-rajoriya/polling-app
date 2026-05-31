import Button from "./Button";

export default function CTASection() {
    return (
        <section className="px-6 py-24 text-center">

            <h2 className="text-5xl font-bold">
                Start Polling Today
            </h2>

            <p className="text-zinc-400 mt-5">
                Create engaging live polls in seconds.
            </p>

            <div className="mt-8 flex justify-center">
                <Button text="Get Started" />
            </div>

        </section>
    );
}