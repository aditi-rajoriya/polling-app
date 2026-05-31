import Button from "./Button";
export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-6 py-28">

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Create Live Polls <br />
                <span className="text-blue-500">
                    In Real Time
                </span>
            </h1>

            <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
                Engage audiences instantly with interactive real-time polling.
            </p>

            <div className="flex gap-4 mt-10">

                <Button text="Create Poll" />
                

                <Button text="
                    Join Poll"/>


            </div>

        </section>);
}
