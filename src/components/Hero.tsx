import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-primary/10 mix-blend-multiply filter blur-xl" />
        <div className="absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-300 mix-blend-multiply filter blur-xl animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 mix-blend-multiply filter blur-xl animation-delay-4000" />
      </div>

      <div className="relative w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Remove Image Backgrounds
            <span className="mt-2 block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              In Seconds with AI
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            Professional background removal powered by AI. No signup required, 
            100% free for basic use.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              asChild 
              size="lg"
              className="w-full bg-primary text-lg shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl sm:w-auto"
            >
              <Link to="/try-now" className="flex items-center gap-2">
                Start Removing Backgrounds
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="w-full text-lg transition-all hover:bg-gray-50 sm:w-auto"
            >
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-col items-center space-y-3">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-500">
                <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"/>
              </svg>
              <span className="text-sm text-gray-600">100% Free for Basic Use</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>• No Sign Up Required</span>
              <span>• Instant Processing</span>
              <span>• HD Quality Output</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};