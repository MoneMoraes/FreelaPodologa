import minhaImagem from "./assets/foto-principal.png";
import avaliation from "./assets/check.png";
import whatsapp from "./assets/wpp.png";
import maps from "./assets/maps.png";
import wpp from "./assets/wpp-2.png";
import imagemFundo from "./assets/imagem-fundo.jpeg";

function App() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen py-4">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src={imagemFundo}
        alt="imagem-fundo"
      />
      <img
        className="rounded-full w-48 h-48 mt-10 border-2 border-rose-500"
        src={minhaImagem}
        alt="foto-podologa"
      />
      <h1 className="text-3xl font-bold text-rose-500 md:text-4xl mt-12 text-center">
        Podóloga Grazielle Castro
      </h1>
      <p className="text-rose-500 mb-5 mt-3 text-center">
        Quero transformar sua dor em sorriso
      </p>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {[
          {
            src: whatsapp,
            text: "Agende sua consulta",
            url: "https://api.whatsapp.com/send?phone=5531997789257&text=Ol%C3%A1,%20desejo%20agendar%20uma%20consulta!!%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es?",
          },
          {
            src: avaliation,
            text: "Faça uma avaliação",
            url: "https://api.whatsapp.com/send?phone=5531997789257&text=Ol%C3%A1,%20desejo%20fazer%20uma%20avalia%C3%A7%C3%A3o!!%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es?",
          },
          {
            src: maps,
            text: "Me encontre aqui",
            url: "https://www.google.com.br/maps/place/R.+Rubi,+25a+-+Prado,+Belo+Horizonte+-+MG,+30411-125/@-19.9231384,-43.9642276,17z/data=!3m1!4b1!4m6!3m5!1s0xa6976abdd5eee5:0x461a03793d62e591!8m2!3d-19.9231384!4d-43.9616527!16s%2Fg%2F11c241x6nl?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D",
          },
        ].map((item, index) => (
          <section
            key={index}
            className="bg-white mb-4 w-full py-3 rounded-lg transition-transform hover:scale-105 cursor-pointer border-2 border-rose-300 flex items-center justify-start relative"
          >
            <img className="w-8 h-8 ml-2" src={item.src} alt={item.text} />
            <a href={item.url}>
              <p className="text-rose-300 font-mono text-base md:text-lg font-bold pl-3">
                {item.text}
              </p>
            </a>
          </section>
        ))}

        <footer className="flex justify-center gap-3 my-20">
          <p className="text-white drop-shadow">
            &copy; 2024 podologagraziellecastro. Todos os direitos reservados.
          </p>
        </footer>
        <a
          className="flex justify-center drop-shadow"
          href="https://api.whatsapp.com/send?phone=5532991561723"
        >
          <p className="text-white font-bold text-shadow">
            Desenvolvido por RAMON MORAES
          </p>
          <img className="w-6 h-6 ml-2 rounded" src={wpp} alt="imagem-wpp" />
        </a>
      </main>
    </div>
  );
}

export default App;
