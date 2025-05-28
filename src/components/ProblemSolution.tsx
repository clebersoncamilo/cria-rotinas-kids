
export const ProblemSolution = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-blue-50 px-4 py-16">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
          VOCÊ QUER TRANSFORMAR A ROTINA DO SEU FILHO?
        </h2>

        {/* Problem description */}
        <div className="mb-12 rounded-2xl bg-red-50 border-l-4 border-red-500 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            😰 Os desafios que você enfrenta todos os dias:
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Pais que lidam com crianças desorganizadas, irritadas e que fazem birras, 
            que têm dificuldades para dormir bem e que resistem a fazer seus deveres 
            de casa entre outros problemas por <strong>falta de rotina</strong>.
          </p>
        </div>

        {/* Solution description */}
        <div className="mb-12 rounded-2xl bg-green-50 border-l-4 border-green-500 p-8">
          <h3 className="mb-4 text-2xl font-bold text-green-700">
            ✨ A solução que você estava procurando:
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Com <strong>estratégias eficazes e comprovadas</strong>, este método oferece 
            soluções práticas e gentis que ajudam os pais a entender melhor seus filhos 
            e a estabelecerem limites claros e coerentes. Ao aplicar os princípios da 
            disciplina positiva, os pais podem transformar a dinâmica familiar e construir 
            relacionamentos mais fortes e saudáveis em casa.
          </p>
          
          <div className="rounded-xl bg-white p-6 shadow-md">
            <p className="text-xl font-bold text-green-800">
              🏡 Se você quer criar um ambiente mais harmonioso e amoroso em sua casa, 
              este material é indispensável para você!
            </p>
          </div>
        </div>

        {/* Target audience */}
        <div className="mb-12">
          <h3 className="mb-8 text-3xl font-bold text-gray-900">
            O Método é indicado pra quem?
          </h3>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl">👩‍👧‍👦</div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">Mães Sobrecarregadas</h4>
              <p className="text-gray-700">
                Que buscam organizar a rotina familiar de forma lúdica e eficaz
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl">👨‍👩‍👧‍👦</div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">Pais Ocupados</h4>
              <p className="text-gray-700">
                Que querem métodos práticos para educar com disciplina positiva
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="mb-4 text-4xl">🧒</div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">Crianças 2-12 anos</h4>
              <p className="text-gray-700">
                Material adaptável para diferentes idades e necessidades
              </p>
            </div>
          </div>
        </div>

        {/* Visual support placeholder */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 p-8">
          <div className="text-6xl mb-4">📚✨</div>
          <p className="text-lg text-gray-700">
            Material completo e prático para transformar a rotina da sua família
          </p>
        </div>
      </div>
    </section>
  );
};
