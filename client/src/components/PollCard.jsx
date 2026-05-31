export default function PollCard({
    option,
    percentage,
    handleVote,
}) {
    return (
        <div className="bg-zinc-800 p-6 rounded-2xl">

            {/* TOP SECTION */}
            <div className="flex justify-between items-center mb-4">

                <div>

                    <h3 className="text-2xl font-semibold">
                        {option.name}
                    </h3>

                    <p className="text-zinc-400">
                        Votes: {option.votes}
                    </p>

                </div>

                <button
                    onClick={() => handleVote(option.id)}
                    className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-zinc-200"
                >
                    Vote
                </button>

            </div>

            {/* PROGRESS BAR */}
            <div className="h-4 bg-zinc-700 rounded-full overflow-hidden">

                <div
                    className={`h-full ${option.color} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                ></div>

            </div>

            {/* PERCENTAGE */}
            <p className="text-right text-zinc-400 mt-2">
                {percentage}%
            </p>

        </div>
    );
}