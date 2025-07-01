
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Ticket, Calendar, Zap } from "lucide-react";

interface TourDatesProps {
  language: string;
}

const TourDates = ({ language }: TourDatesProps) => {
  const content = {
    es: {
      title: "Fechas del Enfrentamiento",
      subtitle: "¡El Sultán del Norte vs El Rayo de Texas en vivo!",
      getTickets: "Conseguir Boletos",
      soldOut: "Agotado",
      vip: "VIP Disponible"
    },
    en: {
      title: "Showdown Dates",
      subtitle: "Sultán del Norte vs El Rayo de Texas Live!",
      getTickets: "Get Tickets",
      soldOut: "Sold Out",
      vip: "VIP Available"
    }
  };

  const tourDates = [
    {
      date: "Jul 2-4, 2025",
      venue: "Austin Music Hall",
      city: "Austin, TX",
      time: "8:00 PM",
      status: "available",
      vip: true,
      isMultiDay: true
    },
    {
      date: "Jul 6, 2025", 
      venue: "Majestic Theatre",
      city: "San Antonio, TX",
      time: "8:30 PM",
      status: "available",
      vip: true,
      isMultiDay: false
    },
    {
      date: "Jul 9, 2025",
      venue: "House of Blues",
      city: "Houston, TX", 
      time: "9:00 PM",
      status: "available",
      vip: false,
      isMultiDay: false
    },
    {
      date: "Jul 9-12, 2025",
      venue: "The Bomb Factory",
      city: "Dallas, TX",
      time: "8:00 PM", 
      status: "available",
      vip: true,
      isMultiDay: true
    }
  ];

  return (
    <section id="tour" className="py-20 px-4 relative overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-vintage-texture opacity-30"></div>
      <div className="absolute inset-0 bg-paper-texture opacity-20"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title Section - Enhanced */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="bg-poster-yellow/95 border-8 border-poster-navy p-8 transform -rotate-1 shadow-poster hover:shadow-poster-hover transition-all duration-300 mb-8 inline-block backdrop-blur-sm">
            <h2 className="font-poster text-4xl md:text-6xl font-black text-poster-red mb-4 leading-none">
              {content[language].title.toUpperCase()}
            </h2>
            <div className="bg-poster-red text-poster-yellow font-poster text-lg md:text-2xl py-2 px-4 transform rotate-2 shadow-vintage">
              {content[language].subtitle}
            </div>
          </div>
        </div>

        {/* Tour Dates - Card-based layout */}
        <div className="grid gap-8 animate-slide-up">
          {tourDates.map((show, index) => (
            <Card 
              key={index}
              className="group bg-gradient-to-r from-poster-cream/95 to-poster-yellow/70 border-4 border-poster-navy hover:border-poster-red transition-all duration-300 shadow-poster hover:shadow-poster-hover transform hover:scale-[1.02] hover:-rotate-1 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Mask icon overlay */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Zap className="w-16 h-16 text-poster-red group-hover:animate-lightning" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center text-poster-red bg-poster-yellow/90 border-2 border-poster-navy px-4 py-2 transform rotate-1 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
                        <Calendar className="w-6 h-6 mr-2 group-hover:animate-shake" />
                        <span className="font-poster font-bold text-xl">{show.date}</span>
                      </div>
                      <span className="text-poster-navy font-bold text-lg bg-poster-cream/60 px-3 py-1 rounded-full">{show.time}</span>
                      {show.isMultiDay && (
                        <Zap className="w-5 h-5 text-poster-red animate-lightning group-hover:animate-shake" />
                      )}
                    </div>
                    
                    <h3 className="font-poster text-2xl font-bold text-poster-navy mb-2 group-hover:text-poster-red transition-colors duration-300">{show.venue}</h3>
                    
                    <div className="flex items-center text-poster-red mb-4 group-hover:text-poster-navy transition-colors duration-300">
                      <MapPin className="w-5 h-5 mr-2 group-hover:animate-shake" />
                      <span className="font-bold text-lg">{show.city}</span>
                    </div>

                    <div className="flex gap-3">
                      {show.vip && (
                        <Badge className="bg-gradient-to-r from-poster-yellow to-poster-red text-poster-navy font-poster font-bold border-2 border-poster-navy shadow-lg hover:shadow-glow transition-shadow duration-300">
                          {content[language].vip}
                        </Badge>
                      )}
                      {show.status === 'soldout' && (
                        <Badge className="bg-poster-red text-poster-yellow font-poster font-bold border-2 border-poster-navy shadow-lg">
                          {content[language].soldOut}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {show.status === 'available' ? (
                      <Button 
                        className="relative overflow-hidden bg-poster-red hover:bg-poster-red/80 text-poster-yellow font-poster font-bold px-8 py-4 text-lg border-4 border-poster-navy transform hover:scale-105 transition-all duration-300 shadow-poster hover:shadow-poster-hover group/btn"
                      >
                        <div className="absolute inset-0 bg-poster-yellow/20 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-ripple"></div>
                        <Ticket className="w-5 h-5 mr-2 group-hover/btn:animate-shake" />
                        {content[language].getTickets}
                      </Button>
                    ) : (
                      <Button 
                        disabled
                        className="bg-gray-600 text-gray-400 cursor-not-allowed px-8 py-4 font-poster font-bold border-4 border-gray-500 shadow-lg"
                      >
                        {content[language].soldOut}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Texas Map Teaser - Enhanced */}
        <div className="mt-16 text-center animate-slide-up">
          <Card className="bg-gradient-to-r from-poster-navy/95 to-poster-red/85 border-4 border-poster-yellow max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-all duration-300 shadow-vintage hover:shadow-glow backdrop-blur-sm group">
            <CardContent className="p-6">
              <MapPin className="w-10 h-10 text-poster-yellow mx-auto mb-3 group-hover:animate-shake" />
              <h3 className="font-poster text-xl font-bold text-poster-yellow mb-2">
                {language === 'es' ? 'MAPA DE TEXAS' : 'TEXAS MAP'}
              </h3>
              <p className="text-poster-cream text-sm font-bold">
                {language === 'es' 
                  ? 'Explora todas las ciudades del enfrentamiento' 
                  : 'Explore all showdown cities'
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TourDates;
