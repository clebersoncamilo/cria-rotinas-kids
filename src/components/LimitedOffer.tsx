
export const LimitedOffer = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-purple-50 px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Limited time offer headline */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-red-600 md:text-5xl animate-pulse">
            ⏰ Oferta Por tempo limitado!
          </h2>
        </div>

        {/* Before/After comparison */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-red-50 border-2 border-red-200 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-red-700">
              😫 SEM ROTINA CRIATIVA
            </h3>
            <div className="mb-6 text-6xl">😰</div>
            <ul className="space-y-3 text-left text-gray-700">
              <li>❌ Crianças grudadas nas telas</li>
              <li>❌ Birras constantes</li>
              <li>❌ Mãe estressada e sobrecarregada</li>
              <li>❌ Casa desorganizada</li>
              <li>❌ Resistência às tarefas</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-green-50 border-2 border-green-200 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-green-700">
              ✨ COM ROTINA CRIATIVA
            </h3>
            <div className="mb-6 text-6xl">😊</div>
            <ul className="space-y-3 text-left text-gray-700">
              <li>✅ Crianças engajadas em atividades positivas</li>
              <li>✅ Menos birras e mais cooperação</li>
              <li>✅ Mãe calma e confiante</li>
              <li>✅ Ambiente organizado e harmonioso</li>
              <li>✅ Filhos independentes e responsáveis</li>
            </ul>
          </div>
        </div>

        {/* Emotional connection text */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              💕 Olá, MAMÃE!
            </h3>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Criar filhos nunca foi uma tarefa fácil, especialmente em uma era em que 
              as crianças parecem estar constantemente grudadas às telas e resistem às 
              suas obrigações diárias.
            </p>
            <p className="text-xl font-semibold text-green-700">
              Mas, e se eu lhe dissesse que há uma maneira de criar uma rotina eficaz 
              para seus filhos, <strong>sem brigas e sem castigos?</strong>
            </p>
          </div>

          {/* Creator authority */}
          <div className="rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 p-8">
            <h4 className="mb-4 text-2xl font-bold text-purple-800">
              👩‍🏫 Experiência Comprovada
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Depois de estudar e praticar o método de disciplina positiva por anos, 
              me senti motivada a compartilhar minha experiência e conhecimento com 
              outros pais que estão lutando para criar filhos responsáveis e independentes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
