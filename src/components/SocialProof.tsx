
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Keiti Inês",
      group: "Turma A",
      source: "Publicado em 100 - Metáforas...",
      text: "Material incrível! Minha filha agora tem uma rotina estruturada e ela adora seguir as atividades. Menos brigas e mais diversão em casa!",
      rating: 5
    },
    {
      name: "Elisabete Nolasco",
      group: "Turma A", 
      source: "Publicado em 100 - Metáforas...",
      text: "Transformou completamente nossa dinâmica familiar. As crianças ficaram mais organizadas e independentes. Recomendo muito!",
      rating: 5
    },
    {
      name: "Cátia Nogueira",
      group: "Turma A",
      source: "Publicado em 100 - Metáforas...", 
      text: "Método prático e eficaz! Em poucos dias já vimos mudanças no comportamento dos pequenos. Vale cada centavo!",
      rating: 5
    },
    {
      name: "Cássia Dall'Igna",
      group: "Turma A",
      source: "Publicado em 100 - Metáforas...",
      text: "Finalmente uma solução que funciona de verdade! As rotinas são divertidas e educativas. Meus filhos amaram!",
      rating: 5
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-green-50 px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Primary CTA */}
        <div className="mb-12 text-center">
          <Button className="w-full max-w-md bg-gradient-to-r from-green-500 to-green-600 py-4 text-xl font-bold hover:from-green-600 hover:to-green-700 md:py-6">
            SIM, QUERO ADQUIRIR! 🚀
          </Button>
        </div>

        {/* Social proof counter */}
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-lg text-white">
            <Users className="mr-2 h-5 w-5" />
            + 17.872 Mil Mamães Adquiriram
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            O que estão dizendo sobre esse material:
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="mb-4 text-gray-700 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.group}</p>
                      <p className="text-xs text-gray-500">{testimonial.source}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
