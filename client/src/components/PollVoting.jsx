import { useEffect, useState } from "react";
import { getAllPolls, votePoll } from "../api/pollApi";

export default function PollVoting() {
  const [polls, setPolls] = useState([]);

  // FETCH POLLS
  const fetchPolls = async () => {
    try {
      const response = await getAllPolls();

      setPolls(response.data.polls);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  // HANDLE VOTE
  const handleVote = async (pollId, optionId) => {
    try {
      await votePoll(pollId, optionId);

      fetchPolls();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Live Polls</h2>

        <div className="space-y-8">
          {polls.map((poll) => (
            <div
              key={poll._id}
              className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800"
            >
              <h3 className="text-2xl font-bold mb-6">{poll.question}</h3>

              <div className="space-y-4">
                {poll.options.map((option) => (
                  <div
                    key={option._id}
                    className="flex justify-between items-center bg-zinc-800 p-4 rounded-xl"
                  >
                    <div>
                      <p className="font-medium">{option.text}</p>

                      <p className="text-zinc-400">Votes: {option.votes}</p>
                    </div>

                    <button
                      onClick={() => handleVote(poll._id, option._id)}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
                    >
                      Vote
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
