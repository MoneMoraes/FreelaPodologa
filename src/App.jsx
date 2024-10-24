import minhaImagem from "./assets/foto-principal.png";
import avaliation from "./assets/check.png";
import whatsapp from "./assets/wpp.png";
import maps from "./assets/maps.png";
import imagemFundo from "./assets/imagem-fundo.jpeg";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50 -z-10"
        src={imagemFundo}
        alt="imagem-fundo"
      />
      <img
        className="rounded-full w-24 sm:w-32 md:w-48 mt-10 border-4 border-rose-500"
        src={minhaImagem}
        alt="foto-podologa"
      />
      <h1 className="text-xl sm:text-2xl md:text-4xl font-mono font-bold text-rose-500 mt-4 md:mt-6">
        Podóloga
      </h1>
      <h1 className="text-xl sm:text-2xl md:text-4xl font-mono font-bold text-rose-500 mt-2">
        Grazielle Castro
      </h1>
      <p className="text-rose-500 mt-3 mb-5 text-center text-sm md:text-base">
        Quero transformar sua dor em sorriso
      </p>

      <main className="flex flex-col w-11/12 max-w-lg text-center space-y-4">
        <section className="bg-white py-4 px-6 rounded-lg border-2 border-rose-300 flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer">
          <img className="w-6" src={whatsapp} alt="whatsapp" />
          <a
            href="https://api.whatsapp.com/send?phone=5531997789257&text=Ol%C3%A1,%20desejo%20agendar%20uma%20consulta!!%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es?"
            className="text-rose-300 font-mono text-base md:text-lg font-bold"
          >
            Agende sua consulta
          </a>
        </section>

        <section className="bg-white py-4 px-6 rounded-lg border-2 border-rose-300 flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer">
          <img className="w-6" src={avaliation} alt="avaliation" />
          <a
            href="https://api.whatsapp.com/send?phone=5531997789257&text=Ol%C3%A1,%20desejo%20fazer%20uma%20avalia%C3%A7%C3%A3o!!%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es?"
            className="text-rose-300 font-mono text-base md:text-lg font-bold"
          >
            Faça uma avaliação
          </a>
        </section>

        <section className="bg-white py-4 px-6 rounded-lg border-2 border-rose-300 flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer">
          <img className="w-6" src={maps} alt="maps" />
          <a
            href="https://www.google.com.br/maps/place/R.+Rubi,+25a+-+Prado,+Belo+Horizonte+-+MG,+30411-125/@-19.9231384,-43.9642276,17z/data=!3m1!4b1!4m6!3m5!1s0xa6976abdd5eee5:0x461a03793d62e591!8m2!3d-19.9231384!4d-43.9616527!16s%2Fg%2F11c241x6nl?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
            className="text-rose-300 font-mono text-base md:text-lg font-bold"
          >
            Me encontre aqui
          </a>
        </section>

        <footer className="flex flex-col items-center gap-3 my-8 md:my-12">
          <p className="text-white text-xs md:text-sm drop-shadow">
            &copy;2024 podologagraziellecastro. Todos os direitos reservados.
          </p>
          
        </footer>
      </main>
    </div>
  );
}

export default App;
