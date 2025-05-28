
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ProblemSolution } from "@/components/ProblemSolution";
import { LimitedOffer } from "@/components/LimitedOffer";
import { FinalCall } from "@/components/FinalCall";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <LimitedOffer />
      <FinalCall />
    </div>
  );
};

export default Index;
