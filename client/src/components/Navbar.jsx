import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-5 border-b border-zinc-800">

            {/* LOGO */}
            <Link
                to="/"
                className="text-2xl font-bold text-blue-500"
            >
                Pollify
            </Link>

            {/* NAV LINKS */}
            <div className="flex items-center gap-6 text-zinc-300">

                <Link
                    to="/"
                    className="hover:text-white transition"
                >
                    Home
                </Link>

                <Link
                    to="/create-poll"
                    className="hover:text-white transition"
                >
                    Create Poll
                </Link>

                <Link
                    to="/dashboard"
                    className="hover:text-white transition"
                >
                    Dashboard
                </Link>

                <Link
                    to="/features"
                    className="hover:text-white transition"
                >
                    Features
                </Link>

        

            </div>

            {/* LOGIN BUTTON */}
            <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl font-semibold transition"
            >
                Login
            </Link>
            <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl font-semibold transition"
            >
                Sign Up
            </Link>
        </nav>
    );
}