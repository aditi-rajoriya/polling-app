import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import LivePollPreview from "../components/LivePollPreview";
import CTASection from "../components/CTASection";    
import Footer from "../components/Footer";
import PollVoting from "../components/PollVoting";
import CreatePollForm from "../components/CreatePollForm";


export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
<Navbar />
            <HeroSection />
            <FeaturesSection />
            <PollVoting />
            <CreatePollForm/>
            <LivePollPreview />
            <CTASection />
            <Footer/>
     

        </div>
    );
}