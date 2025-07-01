
import { Button } from "@/components/ui/button";
import { Ticket, Play, Zap } from "lucide-react";

interface HeroProps {
  language: string;
  content: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
}

const Hero = ({ language, content }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed poster gradient background */}
      <div className="absolute inset-0 bg-poster-gradient"></div>
      
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-40"></div>
      
      {/* Vintage texture overlay */}
      <div className="absolute inset-0 bg-vintage-texture opacity-20"></div>
      
      {/* Content overlay with parallax effect */}
      <div className="absolute inset-0 bg-hero-gradient"></div>

      {/* Floating VS Lightning Effects with parallax */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
        <Zap className="w-16 h-16 text-poster-yellow animate-lightning opacity-60 drop-shadow-lg" />
      </div>
      <div className="absolute top-3/4 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
        <Zap className="w-12 h-12 text-poster-yellow animate-lightning opacity-40 drop-shadow-lg" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-8 h-8 text-poster-yellow animate-lightning opacity-50 drop-shadow-lg" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in">
        {/* Main Title - Enhanced Poster Style */}
        <div className="mb-8 border-8 border-poster-navy bg-poster-yellow/95 p-8 transform rotate-1 shadow-poster hover:shadow-poster-hover transition-all duration-300 backdrop-blur-sm">
          <h1 className="font-poster text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-poster-red transform -rotate-1 leading-none tracking-wider drop-shadow-lg">
            NENES DEL PERREO
          </h1>
          <div className="bg-poster-navy text-poster-yellow font-poster text-xl md:text-3xl py-2 px-4 mx-4 transform rotate-1 shadow-vintage">
            PRESENTAN
          </div>
        </div>

        {/* VS Section - Enhanced with depth */}
        <div className="bg-poster-red/95 border-4 border-poster-navy p-6 mb-8 transform -rotate-1 shadow-vintage hover:shadow-red-glow transition-all duration-300 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Sultan del Norte */}
            <div className="text-center flex-1 group">
              <h2 className="font-poster text-3xl md:text-5xl text-poster-yellow mb-2 leading-none group-hover:animate-shake transition-all duration-300">
                SULTÁN
              </h2>
              <h2 className="font-poster text-2xl md:text-4xl text-poster-yellow mb-2 leading-none group-hover:animate-shake transition-all duration-300">
                DEL NORTE
              </h2>
              <p className="text-poster-navy font-bold text-lg bg-poster-yellow/20 px-2 py-1 rounded">TAVO PÁEZ</p>
            </div>

            {/* VS - Enhanced with hover effects */}
            <div className="bg-poster-yellow text-poster-red font-poster text-4xl md:text-6xl px-6 py-3 transform rotate-12 border-4 border-poster-navy shadow-lg hover:shadow-glow hover:scale-110 transition-all duration-300 cursor-pointer">
              VS
            </div>

            {/* El Rayo de Texas */}
            <div className="text-center flex-1 group">
              <h2 className="font-poster text-3xl md:text-5xl text-poster-yellow mb-2 leading-none group-hover:animate-shake transition-all duration-300">
                EL RAYO
              </h2>
              <h2 className="font-poster text-2xl md:text-4xl text-poster-yellow mb-2 leading-none group-hover:animate-shake transition-all duration-300">
                DE TEXAS
              </h2>
              <p className="text-poster-navy font-bold text-lg bg-poster-yellow/20 px-2 py-1 rounded">TAVO RAYO</p>
            </div>
          </div>
        </div>

        {/* Tour Banner - Enhanced */}
        <div className="bg-poster-navy/95 text-poster-yellow font-poster text-2xl md:text-4xl py-4 px-8 mb-8 border-4 border-poster-yellow transform rotate-1 shadow-vintage backdrop-blur-sm hover:shadow-glow transition-all duration-300">
          TOUR 2025
        </div>

        {/* CTA Buttons - Enhanced with ripple effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            size="lg" 
            className="relative overflow-hidden bg-poster-red hover:bg-poster-red/80 border-4 border-poster-navy text-poster-yellow font-poster text-xl py-6 px-8 transform hover:scale-105 transition-all duration-300 shadow-poster hover:shadow-poster-hover group"
          >
            <div className="absolute inset-0 bg-poster-yellow/20 opacity-0 group-hover:opacity-100 group-hover:animate-ripple"></div>
            <Ticket className="w-6 h-6 mr-3 group-hover:animate-shake" />
            {language === 'es' ? '¡CONSEGUIR BOLETOS!' : 'GET TICKETS!'}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="relative overflow-hidden border-4 border-poster-yellow bg-poster-yellow/95 text-poster-navy hover:bg-poster-yellow/80 font-poster text-xl py-6 px-8 transform hover:scale-105 transition-all duration-300 shadow-poster hover:shadow-poster-hover group backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-poster-red/20 opacity-0 group-hover:opacity-100 group-hover:animate-ripple"></div>
            <Play className="w-6 h-6 mr-3 group-hover:animate-shake" />
            {language === 'es' ? '¡ESCUCHAR MÚSICA!' : 'LISTEN TO MUSIC!'}
          </Button>
        </div>

        {/* Decorative Elements - Enhanced with floating animation */}
        <div className="absolute top-10 left-10 w-6 h-6 bg-poster-yellow border-2 border-poster-navy transform rotate-45 animate-float shadow-lg"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-poster-red border-2 border-poster-navy rounded-full animate-float shadow-lg" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-32 right-20 w-8 h-8 bg-poster-navy border-2 border-poster-yellow transform rotate-12 animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-4 border-poster-yellow bg-poster-red/90 rounded-full flex justify-center shadow-vintage backdrop-blur-sm">
          <div className="w-2 h-4 bg-poster-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
