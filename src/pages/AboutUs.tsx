
const AboutUs = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Vestibulados é uma plataforma para treinar questões com seus amigos. De maneira gamificada.
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="src/assets/estudantes.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
          O Vestibulados é uma plataforma inovadora de estudos voltada para estudantes que querem se preparar 
          para o vestibular de maneira mais dinâmica e motivadora. Combinando a prática de questões com um 
          sistema de gamificação, o projeto permite que os alunos treinem em um ambiente competitivo e 
          interativo. Através da plataforma, os usuários podem resolver questões de provas anteriores, 
          desafiar amigos e acumular pontos, proporcionando um estudo leve e envolvente. Essa abordagem torna o
          aprendizado mais eficiente, já que incentiva os alunos a praticarem com frequência e a se prepararem 
          com mais confiança para as provas.
          </p>

          <p>
          Além disso, o Vestibulados oferece um sistema de estatísticas e rankings, onde cada aluno pode 
          acompanhar seu progresso e ver seu desempenho comparado ao dos amigos. O projeto foi pensado para 
          criar um ambiente colaborativo, onde os estudantes podem competir de forma saudável e compartilhar 
          estratégias de estudo. Com essa mistura de aprendizado e entretenimento, a plataforma busca 
          transformar o estudo para vestibulares em uma experiência mais agradável e eficaz, ajudando os 
          alunos a alcançarem melhores resultados.

          </p>
        </article>
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutUs