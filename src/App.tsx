import React from 'react';
import { Guitar, Cat, BookOpen, Bean } from 'lucide-react';
import { FaGithub, FaYoutube, FaDiscord, FaTwitch } from 'react-icons/fa';
import Header from './components/Header';
import PassionCard from './components/PassionCard';
import AnimatedSubtitle from './components/AnimatedSubtitle';
import CustomCursor from './components/CustomCursor';
import LluviaDePepinos from './components/LluviaDePepinos';

function App() {
  return (
    <div id="Inicio" className="min-h-screen bg-zinc-900">
      <Header />
      <CustomCursor />
      {/* Seccion principal */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-6xl font-bold leading-tight text-white mb-4">
              Dot <span className="text-emerald-400">Dager</span>
            </h1>
            <AnimatedSubtitle 
              text="Full Stack senior & Contador serial de chistes malos"
              className="text-xl text-emerald-400 font-medium mb-6 h-8"
            />
            <p className="text-xl text-zinc-400">
              Donde el codigo y la comedia se encuentran, a menos que tengas una duda...
            </p>
          </div>
          
          <div className="flex-1 flex justify-center ">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-emerald-400">
                <img 
                  src="https://yt3.googleusercontent.com/KPVok_m-JqxKG5wD7HaXc5RyYDPPHHZpQP4KquV8fD9er0mGEkZ_9UuQojBehXz6aCxUt0RI=s900-c-k-c0x00ffffff-no-rj"
                  alt="Dot Dagger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-zinc-800 px-6 py-2 rounded-full border border-emerald-400">
                <span className="text-emerald-400 font-bold">Sudomasoquista</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pasiones */}
      <section id="passions" className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Mis pasiones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PassionCard
              title="Guitarra"
              description="Toco la guitarra como depuro código, a veces bien, a veces... un poco desafinado."
              Icon={Guitar}
              color="bg-emerald-400"
            />
            <PassionCard
              title="Gatos"
              description="Mi código es como un gato: elegante, independiente y siempre me ignora cuando más lo necesito."
              Icon={Cat}
              color="bg-pink-400"
            />
            <PassionCard
              title="Filosofia"
              description="Me gusta preguntar 'por qué' hasta que todos se vayan de la habitación."
              Icon={BookOpen}
              color="bg-purple-400"
            />
            <PassionCard
              title="Pepinos"
              description="Cuando empieza la lluvia de pepinos, no sabes si refrescarte o preparar el terreno..."
              Icon={Bean}
              color="bg-yellow-400"
            />
          </div>
        </div>
      </section>

      <section id="content" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Contenido reciente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Video Card */}
            <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700 glow-on-hover">
              <div className="aspect-video">
              <iframe
                className='w-full h-full'
                src="https://www.youtube.com/embed/YQfRVo5UwOM?si=JID2cEAv4OHLbRys" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Como estudiar (pero bien).</h3>
                <p className="text-zinc-400">Recomendaciones falopa mientras procrastina en reddit.</p>
              </div>
            </div>

            {/* Featured Video Card */}
            <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700 glow-on-hover">
              <div className="aspect-video">
              <iframe
                className='w-full h-full'
                src="https://www.youtube.com/embed/FMfLfYus6Yc?si=qCXF2vKYQATMhDCr" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">No seas tan programador.</h3>
                <p className="text-zinc-400">Ser "demasiado programador" a veces te vuelve peor programador.</p>
              </div>
            </div>

            {/* Featured Video Card */}
            <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700 glow-on-hover">
              <div className="aspect-video">
                <iframe
                className='w-full h-full'
                src="https://www.youtube.com/embed/ixwR9EyvRjs?si=nPqDHif5PBLiTkrq" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">El mercado IT está controlado por IA</h3>
                <p className="text-zinc-400">El mercado esta controlado por bots intentando destacar frente a otros bots por lo que... Feliz navidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="lumber" className="game-container" style={{ position: 'relative', width: '100%', height: '250px' }}>
        <iframe
          src="https://tbot.xyz/lumber/"  // Reemplaza con la URL del juego
          width="100%"  // Ajusta al tamaño del contenedor
          height="100%" // Ajusta al tamaño del contenedor
         title="Lumberjack Game"
          style={{ position: 'absolute', top: 0, left: 0 }}
        ></iframe>
      </div>


      {/* Seccion about */}
      <section id="about" className="py-20 bg-zinc-800 relative">
      <LluviaDePepinos />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-container">
          <h2 className="text-4xl font-bold mb-8 text-white">Sobre Dot Dagger</h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            Mi nombre es Mariano Villa y soy desarrollador Full Stack, soy programador por pasión y guitarra por hobby. Mis gatos son mis compañeros de depuración (aunque a veces prefieren dormir sobre el teclado). Me encanta la filosofía, especialmente cuando me pregunto "¿por qué funciona este código?". Y, por supuesto, creo firmemente que la vida es mejor con pepinos.
          </p>
          {/* Aquí colocamos los iconos de las redes sociales */}
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/MarianoVilla" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-500">
              <FaGithub size={32} />
            </a>
            <a href="https://www.youtube.com/@DotDager" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-500">
              <FaYoutube size={32} />
            </a>
            <a href="https://discord.com/invite/4NFk6TamAB" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-500">
              <FaDiscord size={32} />
            </a>
            <a href="https://www.twitch.tv/dagerxiv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-500">
              <FaTwitch size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Dot Dagger. Todos los derechos reservados. Ningun pepino fue herido durante la creacion de esta web.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;