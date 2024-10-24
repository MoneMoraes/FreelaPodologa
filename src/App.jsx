import minhaImagem from "./assets/foto-principal.png";
import avaliation from "./assets/check.png";
import whatsapp from "./assets/wpp.png";
import maps from "./assets/maps.png";
import wpp from "./assets/wpp-2.png";
import imagemFundo from "./assets/imagem-fundo.jpeg"

function App() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <img
        className="h-full w-full -z-10 absolute inset-0 object-cover opacity-50 overflow-auto"
        src={imagemFundo}
        alt="imagem-fundo"
      />
      <img
        className="rounded-full w-48 mt-10 border-solid border-2 border-rose-500 "
        src={minhaImagem}
        alt="foto-podologa"
      />
      <h1 className="md:text-4xl font-mono text-3xl font-bold text-rose-500 mt-12">
        Podóloga
      </h1>
      <h1 className="md:text-4xl font-mono text-3xl font-bold text-rose-500 mt-2">
        Grazielle Castro
      </h1>
      <p className="text-rose-500 mb-5 mt-3">
        Quero transformar sua dor em sorriso
      </p>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white gap-3 mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer border-solid border-2 border-rose-300 ">
          <img className="size-6 absolute ml-2" src={whatsapp} alt="" />
          <a href="https://api.whatsapp.com/send?phone=5531997789257&text=Ol%C3%A1,%20desejo%20agendar%20uma%20consulta!!%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es?">
            <p className="text-rose-300 font-mono text-base md:text-lg font-bold">
              Agende sua consulta
            </p>
          </a>
        </section>

        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer border-solid border-2 border-rose-300 ">
          <img className="size-8 absolute ml-2" src={avaliation} alt="" />
          <a href="https://api.whatsapp.com/send?phone=5531997789257&text=Ol%C3%A1,%20desejo%20fazer%20uma%20avalia%C3%A7%C3%A3o!!%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es?">
            <p className="text-rose-300 font-mono text-base md:text-lg font-bold">
              Faça uma avaliação
            </p>
          </a>
        </section>

        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer border-solid border-2 border-rose-300 ">
          <img className="size-8 absolute ml-2" src={maps} alt="imagem-map" />
          <a href="https://www.google.com.br/maps/place/R.+Rubi,+25a+-+Prado,+Belo+Horizonte+-+MG,+30411-125/@-19.9231384,-43.9642276,17z/data=!3m1!4b1!4m6!3m5!1s0xa6976abdd5eee5:0x461a03793d62e591!8m2!3d-19.9231384!4d-43.9616527!16s%2Fg%2F11c241x6nl?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">
            <p className="text-rose-300 font-mono text-base md:text-lg font-bold">
              Me encontre aqui
            </p>
          </a>
        </section>

        <footer className="flex justify-center gap-3 my-20">
          <p className="text-white drop-shadow">
            &copy;2024 podologagraziellecastro. Todos os direitos reservados.
          </p>
        </footer>
        <a
          className="flex justify-center drop-shadow"
          href="https://api.whatsapp.com/send?phone=5532991561723"
        >
          <p className="text-white font-bold">Desenvolvido por RAMON MORAES</p>
          <img className="size-6 ml-2 rounded" src={wpp} alt="imagem-wpp" />
        </a>
      </main>
    </div>
  );
}

export default App;
