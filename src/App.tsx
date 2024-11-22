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
    <div className="min-h-screen bg-zinc-900">
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
              description="Making strings vibrate and eardrums question their life choices."
              Icon={Guitar}
              color="bg-emerald-400"
            />
            <PassionCard
              title="Gatos"
              description="Professional cat herder and expert in feline negotiations."
              Icon={Cat}
              color="bg-pink-400"
            />
            <PassionCard
              title="Filosofia"
              description="Asking 'why' until everyone leaves the room."
              Icon={BookOpen}
              color="bg-purple-400"
            />
            <PassionCard
              title="Pepinos"
              description="Turning cucumbers into time capsules of flavor."
              Icon={Bean}
              color="bg-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section id="content" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Contenido reciente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
              <img 
                src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&q=80"
                alt="Guitar Tutorial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Ultimate Guitar Tutorial</h3>
                <p className="text-zinc-400">How to make your neighbors regret their housing choices.</p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
                alt="Philosophy Discussion"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Philosophy & Music</h3>
                <p className="text-zinc-400">If a tree falls in the forest, does it make a sick guitar riff?</p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80"
                alt="Cat Care Guide"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Cat Care 101</h3>
                <p className="text-zinc-400">How to serve your feline overlords with dignity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion about */}
      <section id="about" className="py-20 bg-zinc-800 relative">
      <LluviaDePepinos />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-container">
          <h2 className="text-4xl font-bold mb-8 text-white">Sobre Dot Dagger</h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            When I'm not crafting beautiful code or debugging with a smile, I'm probably telling dad jokes to my cats
            while strumming power chords. I believe in the philosophy that life is better with a soundtrack and a side of pickles.
            Warning: My code may contain traces of humor.
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