import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
export default function Login() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">

            <Navbar />

            <div className="flex items-center justify-center px-6 py-20">

                <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    {/* HEADER */}
                    <div className="text-center mb-10">

                        <h1 className="text-4xl font-bold">
                            Welcome Back
                        </h1>

                        <p className="text-zinc-400 mt-3">
                            Login to manage your polls.
                        </p>

                    </div>

                    {/* FORM */}
                    <form className="space-y-6">

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
                                placeholder="Enter your password"
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                            />

                        </div>

                        {/* BUTTON */}
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
                        >
                            Login
                        </button>

                    </form>

                    {/* FOOTER */}
                    <p className="text-zinc-500 text-center mt-8">

                        Don’t have an account?
                        <Link 
                            to="/signup"
                            className="text-blue-500 ml-2"
                        >
                        Sign Up</Link>
                       

                    </p>

                </div>

            </div>

        </div>
    );
}