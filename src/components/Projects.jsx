function Projects() {
  return (
    <div className="bg-dark-blue">
      <section id="projects" className="py-16">
        {/* Title with full width */}
        <h2 className="text-5xl mb-16 font-normal text-white px-4">
          Projects I'm Proud Of
        </h2>

        {/* FlavorAI Project - Full width container */}
        <article className="mb-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-10 items-start">
            {/* Image spans from left edge */}
            <div className="md:col-span-5 md:col-start-1 md:row-start-1">
              <img
                className="w-full mt-8 mb-16 p-4 border-l border-t border-swash-4 rounded-[25px] md:mt-0"
                src="img\flavorAI.webp"
                alt="FlavorAI screenshot"
              />
            </div>

            {/* Text content overlaps image - extends to right edge */}
            <div className="md:col-span-6 md:col-start-5 md:row-start-1 md:relative md:z-10 pr-4 md:pr-8 text-right">
              <h4 className="text-base font-mono mb-4 text-white">
                Latest Projects
              </h4>
              <h4 className="text-white">
                🏆{" "}
                <span class="italic">
                  <a
                    href="https://gdg.community.dev/events/details/google-gdg-on-campus-washington-university-in-st-louis-st-louis-united-states-presents-devfest-washu-2025/"
                    target="_blank"
                  >
                    WashU Google DevFest Hackathon Finalist
                  </a>
                </span>
              </h4>
              <h3 className="text-3xl mb-6 text-white font-normal">FlavorAI</h3>
              <div className="bg-swash-2 p-4 rounded-[10px] mb-6 shadow-lg">
                <p className="text-base leading-relaxed text-white">
                  Utilizing the help from LLMs, I created an app to help pick
                  foods FOR you so that you don't have to spend another second
                  thinking what you should have to eat.
                </p>
              </div>
              <h4 className="text-base font-mono mb-4 text-white">
                Things I learned along the way
              </h4>
              <ul className="list-none p-0 m-0 flex flex-wrap justify-end gap-4 text-base">
                <li className="text-white">React.js</li>
                <li className="text-white">Expo</li>
                <li className="text-white">Vertex API</li>
                <li className="text-white">MongoDB</li>
              </ul>
            </div>
          </div>
        </article>

        {/* pyTracker Project - Full width container, reversed */}
        <article className="mb-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-10 items-start">
            {/* Text content */}
            <div className="md:col-span-7 md:col-start-1 md:row-start-1 md:relative md:z-10 px-4 text-left order-2 md:order-1">
              <h3 className="text-3xl mb-6 text-white font-normal">
                pyTracker
              </h3>
              <div className="bg-swash-2 p-4 rounded-[10px] mb-6 shadow-lg">
                <p className="text-base leading-relaxed text-white">
                  When applying to internships, I found out my friend applied to
                  over 300 internships. Out of all of those internships, the
                  only one he got was Google. While I'm pretty sure he just had
                  a bad resume, many students still have to submit many
                  applications. I created pyTracker to help applicants to keep
                  track of the status of each of their jobs automatically using
                  NLP technology.
                </p>
              </div>
              <h4 className="text-base font-mono mb-4 text-white">
                Things I learned along the way
              </h4>
              <ul className="list-none p-0 m-0 flex flex-wrap justify-start gap-4 text-base">
                <li className="text-white">Ollama</li>
                <li className="text-white">Rest APIs</li>
                <li className="text-white">Google APIs</li>
                <li className="text-white">NLP</li>
              </ul>
            </div>

            {/* Image spans to edge */}
            <div className="md:col-span-6 md:col-start-6 md:row-start-1 order-1 md:order-2">
              <img
                className="w-full mt-8 mb-16 p-4 border-l border-t border-swash-4 rounded-[25px] md:mt-0"
                src="img\pytracker.webp"
                alt="pyTracker thumbnail"
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Projects;
