import { useState } from "react";
import { createPoll } from "../api/pollApi";

export default function CreatePollForm() {
  // QUESTION STATE
  const [question, setQuestion] = useState("");

  // OPTIONS STATE
  const [options, setOptions] = useState(["", ""]);

  // HANDLE QUESTION CHANGE
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  // HANDLE OPTION CHANGE
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];

    updatedOptions[index] = value;

    setOptions(updatedOptions);
  };

  // ADD NEW OPTION
  const addOption = () => {
    setOptions([...options, ""]);
  };

  // HANDLE SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const filteredOptions = options.filter((option) => option.trim() !== "");

      await createPoll({
        question,
        options: filteredOptions,
      });

      alert("Poll Created Successfully");

      setQuestion("");
      setOptions(["", ""]);
    } catch (error) {
      console.error(error);

      alert("Failed To Create Poll");
    }
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
        <h2 className="text-4xl font-bold mb-10 text-center">Create Poll</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* QUESTION */}
          <div>
            <label className="block mb-2 text-lg">Poll Question</label>

            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
              placeholder="Enter your question"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* OPTIONS */}
          <div>
            <label className="block mb-4 text-lg">Poll Options</label>

            <div className="space-y-4">
              {options.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  value={option}
                  onChange={(event) =>
                    handleOptionChange(index, event.target.value)
                  }
                  placeholder={`Option ${index + 1}`}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={addOption}
              className="bg-zinc-700 hover:bg-zinc-600 px-5 py-3 rounded-xl"
            >
              Add Option
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold"
            >
              Create Poll
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
