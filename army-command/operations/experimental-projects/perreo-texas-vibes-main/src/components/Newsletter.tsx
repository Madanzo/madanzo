
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterProps {
  language: string;
}

const Newsletter = ({ language }: NewsletterProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const content = {
    es: {
      title: "¡Únete al Perreo VIP!",
      subtitle: "Recibe acceso exclusivo a boletos, contenido behind-the-scenes y sorpresas especiales",
      placeholder: "tu@email.com",
      cta: "Unirse al VIP",
      benefits: [
        "Acceso temprano a boletos",
        "Contenido exclusivo",
        "Descuentos especiales",
        "Meet & Greets VIP"
      ],
      success: "¡Bienvenido al Perreo VIP! 🎉",
      error: "Error al suscribirse. Intenta de nuevo."
    },
    en: {
      title: "Join the VIP Perreo!",
      subtitle: "Get exclusive access to tickets, behind-the-scenes content and special surprises",
      placeholder: "your@email.com", 
      cta: "Join VIP",
      benefits: [
        "Early ticket access",
        "Exclusive content", 
        "Special discounts",
        "VIP Meet & Greets"
      ],
      success: "Welcome to VIP Perreo! 🎉",
      error: "Subscription error. Please try again."
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: content[language].success,
        description: language === 'es' 
          ? "Te enviaremos las mejores noticias del perreo" 
          : "We'll send you the best perreo news",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-to-r from-pink-900/20 via-purple-900/20 to-blue-900/20 border border-pink-500/30 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                {content[language].title}
              </h2>
              
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {content[language].subtitle}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {content[language].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <Gift className="w-4 h-4 text-pink-400 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder={content[language].placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-pink-500/30 text-white placeholder-gray-400 focus:border-pink-500"
                  required
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-6 py-2 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {isLoading ? '...' : content[language].cta}
                </Button>
              </div>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              {language === 'es' 
                ? 'Te respetamos. Sin spam, solo perreo puro.' 
                : 'We respect you. No spam, just pure perreo.'
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
