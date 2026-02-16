import { projects } from './data';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-green-100">
      
      {/* 1. HERO SECTION - WITH PROFILE PIC */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 lg:px-12 bg-gradient-to-b from-green-200 to-white pt-20 pb-12">
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-bold tracking-widest uppercase text-green-800 mb-3">
              Environmental Technician
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-green-950">
              Tyra Parks.
            </h1>
            <p className="text-xl md:text-2xl text-green-900/60 max-w-xl leading-relaxed mx-auto md:mx-0">
              Specializing in field data collection, restoration ecology, and volunteer leadership. 
              Based in Alberta, Canada.
            </p>
            
            <div className="mt-8 flex gap-6 justify-center md:justify-start">
              <a href="#work" className="border-b-2 border-transparent pb-1 text-sm font-bold uppercase tracking-widest text-green-900 hover:border-green-900">
                View Field Work
              </a>
              <a href="#contact" className="border-b-2 border-transparent pb-1 text-sm font-bold uppercase tracking-widest text-green-900 hover:border-green-900">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-green-200 blur-2xl opacity-40 animate-pulse"></div>
              
              <img 
                src="/images/tyra-profile.webp"
                alt="Tyra Parks" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. ZIG-ZAG PROJECT LIST */}
      <main id="work" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          
          {projects.map((project, index) => (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`flex flex-col gap-8 md:gap-12 md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
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

                <div className="flex-1">
                  <div className="relative aspect-square overflow-hidden bg-zinc-100 rounded-lg shadow-sm">
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

      {/* 3. ABOUT / OFF DUTY SECTION */}
      <section className="bg-green-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/collage-me.webp"
                  alt="our cats" 
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-green-950">
                Beyond the Field
              </h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  When I'm not in chest waders sampling water quality, I'm usually exploring the Alberta backcountry or trying to identify local fungi species.
                </p>
                <p>
                  I'm a proud cat mom to <strong>Max and Ellie</strong>, and I believe the best way to understand an ecosystem is to spend as much time as possible living in it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer id="contact" className="bg-zinc-50 py-16 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to work together?</h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            
            <a 
              href="https://ca.linkedin.com/in/tyra-lee-parks-15a869248"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0077b5] text-white w-72 px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#005885] transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.542V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
              CONNECT ON LINKEDIN
            </a>

            <a
              href="mailto:tyraparks98@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 w-72 px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:border-zinc-800 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              EMAIL ME
            </a>

          </div>

          <p className="mt-12 text-xs text-zinc-400 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Tyra Parks
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App