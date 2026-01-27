import { projects } from './data';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-green-100">
      
      {/* 1. HERO SECTION - COMPACT GRADIENT */}
      {/* Changed min-h-[85vh] to min-h-[60vh] to pull content up */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 lg:px-12 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-3xl mx-auto w-full">
          <p className="text-sm font-bold tracking-widest uppercase text-green-800 mb-3">
            Environmental Technician
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-green-950">
            Tyra Parks.
          </h1>
          <p className="text-xl md:text-2xl text-green-900/60 max-w-xl leading-relaxed">
            Environmental Science graduate and Environmental Technology student with hands-on-experience in environmental sampling and monitoring.
            <br></br>Based in Alberta, Canada.
          </p>
          
          <div className="mt-8 flex gap-6">
            <a href="#work" className="border-b-2 border-green-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-green-600 hover:border-green-600 transition-colors text-green-950">
              View Field Work
            </a>
            <a href="mailto:tyraparks98@gmail.com" className="border-b-2 border-transparent pb-1 text-sm font-bold uppercase tracking-widest text-green-800/50 hover:text-green-900 hover:border-green-900 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* 2. ZIG-ZAG PROJECT LIST */}
      <main id="work" className="py-20">
        {/* Changed max-w-7xl to max-w-5xl to pull text/images closer together */}
        <div className="max-w-5xl mx-auto px-6">
          
          {projects.map((project, index) => (
            // Reduced mb-32 (excessive) to mb-20 (cleaner)
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`flex flex-col gap-8 md:gap-12 md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                {/* TEXT SIDE */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-green-600"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                      {project.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 text-black">
                    {project.title}
                  </h2>
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {project.location}
                  </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="flex-1">
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 rounded-lg shadow-sm">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="bg-zinc-50 py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to work together?</h3>
          <a href="mailto:tyra@example.com" className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-green-800 transition-colors">
            DOWNLOAD RESUME
          </a>
          <p className="mt-12 text-xs text-zinc-400 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Tyra Parks
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App