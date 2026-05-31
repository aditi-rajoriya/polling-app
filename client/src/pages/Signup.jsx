import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">

            <Navbar />

            <div className="flex items-center justify-center px-6 py-20">

                <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    {/* HEADER */}
                    <div className="text-center mb-10">

                        <h1 className="text-4xl font-bold">
                            Create Account
                        </h1>

                        <p className="text-zinc-400 mt-3">
                            Join Pollify and start creating live polls.
                        </p>

                    </div>

                    {/* FORM */}
                    <form className="space-y-6">

                        {/* NAME */}
                        <div>

                            <label className="block mb-2 text-zinc-300">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />

                        </div>

                        {/* EMAIL */}
                        <div>

                            <label className="block mb-2 text-zinc-300">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />

                        </div>

                        {/* PASSWORD */}
                        <div>

                            <label className="block mb-2 text-zinc-300">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Create password"
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />

                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div>

                            <label className="block mb-2 text-zinc-300">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />

                        </div>

                        {/* BUTTON */}
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
                        >
                            Sign Up
                        </button>

                    </form>

                    {/* FOOTER */}
                    <p className="text-zinc-500 text-center mt-8">

                        Already have an account?
                        <Link 
                            to="/login"
                       className="text-blue-500 cursor-pointer ml-2">
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}