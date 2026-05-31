export default function LivePollPreview() {
        return (
            <section className="px-6 py-20">

                <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <h2 className="text-3xl font-bold mb-8">
                        Live Poll Preview
                    </h2>

                    <div className="space-y-5">

                        {/* React */}
                        <div>

                            <div className="flex justify-between mb-2">
                                <span>React</span>
                                <span>65%</span>
                            </div>

                            <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">

                                <div className="h-full w-[65%] bg-blue-500"></div>

                            </div>

                        </div>

                        {/* Vue */}
                        <div>

                            <div className="flex justify-between mb-2">
                                <span>Vue</span>
                                <span>20%</span>
                            </div>

                            <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">

                                <div className="h-full w-[20%] bg-green-500"></div>

                            </div>

                        </div>

                        {/* Angular */}
                        <div>

                            <div className="flex justify-between mb-2">
                                <span>Angular</span>
                                <span>15%</span>
                            </div>

                            <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">

                                <div className="h-full w-[15%] bg-pink-500"></div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        );
}