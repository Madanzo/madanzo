
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Ticket, Music, Instagram, Clock, Zap, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Hero from "@/components/Hero";
import TourDates from "@/components/TourDates";
import ArtistBio from "@/components/ArtistBio";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  const [language, setLanguage] = useState('es');
  const [nextShow, setNextShow] = useState({ date: '2025-07-02', venue: 'Austin Music Hall', city: 'Austin, TX' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const content = {
    es: {
      hero: {
        title: "¡Vive el Perreo y la Lucha en Texas!",
        subtitle: "Sultán del Norte vs El Rayo de Texas - El enfrentamiento más épico del reggaetón",
        cta: "Consigue tus Boletos"
      },
      nav: {
        tour: "Fechas",
        bio: "Luchadores",
        tickets: "Boletos",
        merch: "Tienda"
      },
      nextShow: "Próximo Enfrentamiento",
      days: "días"
    },
    en: {
      hero: {
        title: "Live the Perreo and Lucha in Texas!",
        subtitle: "Sultán del Norte vs El Rayo de Texas - The most epic reggaetón showdown",
        cta: "Get Your Tickets"
      },
      nav: {
        tour: "Tour",
        bio: "Fighters", 
        tickets: "Tickets",
        merch: "Store"
      },
      nextShow: "Next Showdown",
      days: "days"
    }
  };

  const calculateDaysUntil = (date: string) => {
    const showDate = new Date(date);
    const today = new Date();
    const diffTime = showDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-poster-cream via-poster-yellow/20 to-poster-red/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-poster-navy/90 backdrop-blur-md border-b-4 border-poster-yellow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-poster font-bold text-poster-yellow">
            Los Nenes del Perreo
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#tour" className="text-poster-yellow hover:text-poster-cream transition-colors font-bold">{content[language].nav.tour}</a>
            <a href="#bio" className="text-poster-yellow hover:text-poster-cream transition-colors font-bold">{content[language].nav.bio}</a>
            <a href="#tickets" className="text-poster-yellow hover:text-poster-cream transition-colors font-bold">{content[language].nav.tickets}</a>
            <a href="#merch" className="text-poster-yellow hover:text-poster-cream transition-colors font-bold">{content[language].nav.merch}</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="text-poster-yellow hover:bg-poster-yellow/20 border-2 border-poster-yellow font-bold"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-poster-yellow hover:bg-poster-yellow/20 border-2 border-poster-yellow"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-poster-navy/95 border-t-2 border-poster-yellow">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a 
                href="#tour" 
                className="block text-poster-yellow hover:text-poster-cream transition-colors font-bold text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content[language].nav.tour}
              </a>
              <a 
                href="#bio" 
                className="block text-poster-yellow hover:text-poster-cream transition-colors font-bold text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content[language].nav.bio}
              </a>
              <a 
                href="#tickets" 
                className="block text-poster-yellow hover:text-poster-cream transition-colors font-bold text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content[language].nav.tickets}
              </a>
              <a 
                href="#merch" 
                className="block text-poster-yellow hover:text-poster-cream transition-colors font-bold text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content[language].nav.merch}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero language={language} content={content[language]} />

      {/* Countdown to Next Show */}
      <section className="py-12 px-4 bg-poster-red/10">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-to-r from-poster-yellow/90 to-poster-red/90 border-4 border-poster-navy max-w-md mx-auto transform rotate-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-poster-navy mr-2 animate-lightning" />
                <span className="text-poster-navy font-poster font-bold text-lg">{content[language].nextShow}</span>
              </div>
              <div className="text-5xl font-poster font-black text-poster-navy mb-2">
                {calculateDaysUntil(nextShow.date)}
              </div>
              <div className="text-poster-navy font-bold text-lg mb-2">{content[language].days}</div>
              <div className="text-sm text-poster-navy/80 font-bold">
                {nextShow.venue} - {nextShow.city}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tour Dates Section */}
      <TourDates language={language} />

      {/* Artist Bio Section */}
      <ArtistBio language={language} />

      {/* Newsletter Section */}
      <Newsletter language={language} />

      {/* Footer */}
      <footer className="bg-poster-navy py-12 px-4 border-t-4 border-poster-yellow">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-poster-yellow hover:text-poster-cream transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-poster-yellow hover:text-poster-cream transition-colors">
              <Music className="w-8 h-8" />
            </a>
          </div>
          <div className="text-poster-yellow/80 text-sm font-bold">
            © 2025 Los Nenes del Perreo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
