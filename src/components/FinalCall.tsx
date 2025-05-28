
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Star } from "lucide-react";

export const FinalCall = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-yellow-50 px-4 py-16">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Final call text */}
        <div className="mb-12">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            🚀 Não espere mais!
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Não espere mais para tornar a vida dos seus filhos mais organizada e tranquila. 
            Adquira agora a <strong>Rotina de Disciplina Positiva</strong> e comece a 
            experimentar a diferença na rotina de sua família!
          </p>
        </div>

        {/* Tertiary CTA */}
        <div className="mb-12">
          <Button className="w-full max-w-md bg-gradient-to-r from-green-500 to-green-600 py-4 text-xl font-bold hover:from-green-600 hover:to-green-700 md:py-6">
            SIM, QUERO ADQUIRIR! 🚀
          </Button>
        </div>

        {/* Bonus section */}
        <div className="rounded-2xl bg-yellow-100 border-2 border-yellow-300 p-8">
          <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 text-lg text-white">
            <Gift className="mr-2 h-5 w-5" />
            BÔNUS EXCLUSIVOS
          </Badge>
          
          <h3 className="mb-6 text-3xl font-bold text-yellow-800">
            HOJE VOCÊ AINDA VAI RECEBER ALGUNS BÔNUS EXCLUSIVOS, ENTRE ELES...
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 text-4xl">📋</div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Checklist de Rotinas
              </h4>
              <p className="text-gray-700">
                Lista completa para acompanhar o progresso
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 text-4xl">🎨</div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Atividades Criativas
              </h4>
              <p className="text-gray-700">
                Jogos e brincadeiras educativas extras
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 text-4xl">💡</div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Guia de Implementação
              </h4>
              <p className="text-gray-700">
                Passo a passo para aplicar as rotinas
              </p>
            </div>
          </div>
        </div>

        {/* Final urgency reminder */}
        <div className="mt-12 rounded-xl bg-red-100 border-2 border-red-300 p-6">
          <div className="flex items-center justify-center gap-2 text-red-700">
            <Clock className="h-6 w-6" />
            <span className="text-lg font-bold">
              Oferta válida apenas por tempo limitado!
            </span>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-8 rounded-xl bg-green-100 border-2 border-green-300 p-6">
          <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
            <Star className="h-6 w-6" />
            <span className="text-lg font-bold">
              Garantia de Satisfação 100%
            </span>
          </div>
          <p className="text-green-700">
            Se não ficar satisfeita, devolvemos seu dinheiro em até 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};
