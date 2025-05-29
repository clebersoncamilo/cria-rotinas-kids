
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Shield, Lock, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-green-50 to-blue-50 px-4 py-8 lg:py-16">
      {/* Geo-targeted social proof banner */}
      <div className="container mx-auto mb-6">
        <Badge className="mx-auto flex w-fit items-center gap-2 bg-green-600 text-white hover:bg-green-700">
          <MapPin className="h-4 w-4" />
          234 pessoas próximas estão aproveitando a oferta!
        </Badge>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Espaço para foto manual acima da palavra "Transforme" */}
            <div className="mb-6 rounded-2xl bg-white/70 border-2 border-dashed border-gray-300 p-8 text-center">
              <div className="text-gray-500 mb-2">
                📸 Adicione sua foto aqui
              </div>
              <p className="text-sm text-gray-400">
                Clique para adicionar uma imagem atrativa para a sua landing page
              </p>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Transforme{" "}
              <span className="rounded-lg bg-red-500 px-3 py-1 text-white">
                ROTINAS CHATAS
              </span>{" "}
              dos seus filhos usando o{" "}
              <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                pack de rotinas criativas!
              </span>
            </h1>
            
            <p className="mb-8 text-xl text-gray-700 md:text-2xl">
              Método incrível para desenvolver atenção e organização dos pequenos.
            </p>

            <div className="mb-8 rounded-2xl bg-white p-6 shadow-xl">
              <p className="mb-4 text-lg font-semibold text-gray-800">
                ✨ O método é prático e rápido de montar
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>📂 Divididos em categorias com rotinas definidas</li>
                <li>🎯 Mais de 87 rotinas educativas sem perder a diversão</li>
                <li>🧠 Estimula organização e criatividade</li>
                <li>👶 Pode ser usado por crianças até 12 anos</li>
              </ul>
            </div>

            {/* Price Section */}
            <div className="mb-8 text-center">
              <p className="mb-2 text-xl text-gray-600">
                de <span className="line-through">R$ 67,00</span> por somente...
              </p>
              <div className="text-5xl font-bold text-green-600 md:text-6xl">
                R$ 14,90
              </div>
              <p className="mt-2 text-red-600 font-semibold">
                ⏰ Oferta por tempo limitado!
              </p>
            </div>

            <a href="https://lastlink.com/p/CC146052E/checkout-payment" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 py-4 text-xl font-bold hover:from-green-600 hover:to-green-700 md:py-6">
                SIM, QUERO ADQUIRIR! 🚀
              </Button>
            </a>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-green-600" />
                Checkout Seguro
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                Satisfação Garantida
              </div>
              <div className="flex items-center gap-1">
                <Lock className="h-4 w-4 text-blue-600" />
                Privacidade Protegida
              </div>
            </div>
          </div>

          {/* Right Content - Product Mockups */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="aspect-[3/4] rounded-lg bg-white p-3 shadow-md">
                    <div className="h-full bg-gradient-to-b from-pink-200 to-pink-300 rounded-md flex items-center justify-center">
                      <span className="text-sm font-bold text-pink-800">
                        Rotina da Noite 🌙
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="aspect-[3/4] rounded-lg bg-white p-3 shadow-md">
                    <div className="h-full bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-md flex items-center justify-center">
                      <span className="text-sm font-bold text-yellow-800">
                        Rotina da Manhã ☀️
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl bg-gradient-to-br from-green-100 to-green-200 p-4 shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="aspect-[3/4] rounded-lg bg-white p-3 shadow-md">
                    <div className="h-full bg-gradient-to-b from-green-200 to-green-300 rounded-md flex items-center justify-center">
                      <span className="text-sm font-bold text-green-800">
                        Rotina do Pet 🐕
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 p-4 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="aspect-[3/4] rounded-lg bg-white p-3 shadow-md">
                    <div className="h-full bg-gradient-to-b from-blue-200 to-blue-300 rounded-md flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-800">
                        Arrumar Quarto 🏠
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Happy parent illustration placeholder */}
              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
                <span className="text-2xl">👩‍👧‍👦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
