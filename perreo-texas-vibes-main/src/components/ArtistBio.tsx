
import { Card, CardContent } from "@/components/ui/card";
import { Music, Award, Users, Zap, Crown, Target } from "lucide-react";

interface ArtistBioProps {
  language: string;
}

const ArtistBio = ({ language }: ArtistBioProps) => {
  const content = {
    es: {
      title: "Los Luchadores del Perreo",
      subtitle: "Sultán del Norte vs El Rayo de Texas",
      sultan: {
        name: "Sultán del Norte",
        realName: "Tavo Páez",
        bio: "Desde las tierras del norte, el Sultán domina el ring del reggaetón con beats que conquistan corazones. Su máscara dorada y roja simboliza el poder y la pasión del perreo más auténtico.",
        signature: "\"Soy el rey del norte, y mi reino es el perreo\""
      },
      rayo: {
        name: "El Rayo de Texas",
        realName: "Tavo Rayo", 
        bio: "Veloz como el rayo, este luchador texano electrifica cada escenario con su energía indomable. Su máscara plateada y azul representa la velocidad y fuerza del reggaetón moderno.",
        signature: "\"Rápido como el rayo, fuerte como Texas\""
      },
      stats: {
        streams: "50M+ Streams",
        shows: "200+ Enfrentamientos",
        fans: "1M+ Fanáticos"
      }
    },
    en: {
      title: "The Perreo Fighters", 
      subtitle: "Sultán del Norte vs El Rayo de Texas",
      sultan: {
        name: "Sultán del Norte",
        realName: "Tavo Páez",
        bio: "From the northern lands, the Sultan dominates the reggaetón ring with beats that conquer hearts. His golden and red mask symbolizes the power and passion of the most authentic perreo.",
        signature: "\"I am the king of the north, and my kingdom is perreo\""
      },
      rayo: {
        name: "El Rayo de Texas",
        realName: "Tavo Rayo",
        bio: "Fast as lightning, this Texan fighter electrifies every stage with his indomitable energy. His silver and blue mask represents the speed and strength of modern reggaetón.",
        signature: "\"Fast as lightning, strong as Texas\""
      },
      stats: {
        streams: "50M+ Streams",
        shows: "200+ Showdowns", 
        fans: "1M+ Fans"
      }
    }
  };

  return (
    <section id="bio" className="py-20 px-4 relative overflow-hidden">
      {/* Background with enhanced texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-poster-red/20 via-poster-yellow/10 to-poster-navy/20"></div>
      <div className="absolute inset-0 bg-paper-texture opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title Section - Enhanced */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="bg-poster-navy/95 border-8 border-poster-yellow p-8 transform rotate-1 shadow-vintage hover:shadow-glow transition-all duration-300 mb-8 inline-block backdrop-blur-sm">
            <h2 className="font-poster text-4xl md:text-6xl font-black text-poster-yellow mb-4 leading-none">
              {content[language].title.toUpperCase()}
            </h2>
            <div className="bg-poster-yellow text-poster-navy font-poster text-lg md:text-2xl py-2 px-4 transform -rotate-2 shadow-poster">
              {content[language].subtitle}
            </div>
          </div>
        </div>

        {/* Fighters Grid - Enhanced with spotlight effects */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 animate-slide-up">
          {/* Sultán del Norte */}
          <Card className="group relative bg-gradient-to-br from-poster-yellow/95 to-poster-red/70 border-4 border-poster-navy transform -rotate-1 hover:rotate-0 transition-all duration-500 shadow-poster hover:shadow-poster-hover backdrop-blur-sm overflow-hidden">
            {/* Spotlight effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-poster-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-6">
                <Crown className="w-16 h-16 text-poster-red mx-auto mb-4 group-hover:animate-shake group-hover:drop-shadow-glow transition-all duration-300" />
                <h3 className="font-poster text-3xl font-black text-poster-navy mb-2 group-hover:text-poster-red transition-colors duration-300">
                  {content[language].sultan.name.toUpperCase()}
                </h3>
                <p className="text-poster-red font-bold text-xl bg-poster-cream/60 px-3 py-1 rounded-full inline-block">
                  {content[language].sultan.realName}
                </p>
              </div>
              
              <p className="text-poster-navy text-lg leading-relaxed mb-6 font-medium group-hover:text-poster-navy/90 transition-colors duration-300">
                {content[language].sultan.bio}
              </p>

              <blockquote className="border-l-4 border-poster-red pl-6 bg-poster-navy/20 p-4 rounded-r-lg group-hover:bg-poster-navy/30 transition-colors duration-300">
                <p className="text-poster-red text-lg italic font-bold">
                  {content[language].sultan.signature}
                </p>
              </blockquote>
            </CardContent>
          </Card>

          {/* El Rayo de Texas */}
          <Card className="group relative bg-gradient-to-br from-poster-navy/95 to-poster-yellow/70 border-4 border-poster-red transform rotate-1 hover:rotate-0 transition-all duration-500 shadow-poster hover:shadow-poster-hover backdrop-blur-sm overflow-hidden">
            {/* Spotlight effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-poster-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-6">
                <Zap className="w-16 h-16 text-poster-yellow mx-auto mb-4 animate-lightning group-hover:animate-shake group-hover:drop-shadow-glow transition-all duration-300" />
                <h3 className="font-poster text-3xl font-black text-poster-yellow mb-2 group-hover:text-poster-cream transition-colors duration-300">
                  {content[language].rayo.name.toUpperCase()}
                </h3>
                <p className="text-poster-red font-bold text-xl bg-poster-cream/60 px-3 py-1 rounded-full inline-block">
                  {content[language].rayo.realName}
                </p>
              </div>
              
              <p className="text-poster-cream text-lg leading-relaxed mb-6 font-medium group-hover:text-poster-cream/90 transition-colors duration-300">
                {content[language].rayo.bio}
              </p>

              <blockquote className="border-l-4 border-poster-yellow pl-6 bg-poster-yellow/20 p-4 rounded-r-lg group-hover:bg-poster-yellow/30 transition-colors duration-300">
                <p className="text-poster-yellow text-lg italic font-bold">
                  {content[language].rayo.signature}
                </p>
              </blockquote>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section - Enhanced with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="group bg-gradient-to-r from-poster-red/85 to-poster-yellow/85 border-4 border-poster-navy transform rotate-1 hover:rotate-0 transition-all duration-300 shadow-poster hover:shadow-poster-hover backdrop-blur-sm animate-slide-up">
            <CardContent className="p-6 text-center">
              <Music className="w-8 h-8 text-poster-navy mx-auto mb-3 group-hover:animate-shake transition-all duration-300" />
              <div className="text-poster-navy font-poster font-bold text-xl">
                {content[language].stats.streams}
              </div>
            </CardContent>
          </Card>
          
          <Card className="group bg-gradient-to-r from-poster-navy/85 to-poster-red/85 border-4 border-poster-yellow hover:border-poster-cream transition-all duration-300 shadow-poster hover:shadow-glow backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-poster-yellow mx-auto mb-3 group-hover:animate-shake transition-all duration-300" />
              <div className="text-poster-yellow font-poster font-bold text-xl">
                {content[language].stats.shows}
              </div>
            </CardContent>
          </Card>
          
          <Card className="group bg-gradient-to-r from-poster-yellow/85 to-poster-navy/85 border-4 border-poster-red transform -rotate-1 hover:rotate-0 transition-all duration-300 shadow-poster hover:shadow-red-glow backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-poster-red mx-auto mb-3 group-hover:animate-shake transition-all duration-300" />
              <div className="text-poster-red font-poster font-bold text-xl">
                {content[language].stats.fans}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;
