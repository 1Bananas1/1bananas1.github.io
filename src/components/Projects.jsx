import { projectsData, getProjectAlignment } from '../data/projectDict'

function Projects() {
  return (
    <div className="bg-dark-blue">
      <section id="projects" className="py-16">
        {/* Title with full width */}
        <h2 className="text-5xl mb-16 font-normal text-white px-4">
          Projects I'm Proud Of
        </h2>
        <h4 className="text-base font-mono mb-4 ml-4 text-white">
          Latest Projects
        </h4>

        {projectsData.map((project, index) => {
          const alignment = getProjectAlignment(index)
          const isLeftAligned = alignment === 'left'

          return (
            <article key={project.id} className="mb-16 relative">
              <div className="grid grid-cols-1 md:grid-cols-10 items-start">
                {/* Text content */}
                <div
                  className={`md:col-span-7 md:row-start-1 md:relative md:z-10 ${
                    isLeftAligned
                      ? 'md:col-start-1 px-4 text-left order-2 md:order-1'
                      : 'md:col-start-4 pr-4 md:pr-8 text-right order-2'
                  }`}
                >
                  {project.hasAward && (
                    <h4 className="text-white">
                      🏆{' '}
                      <span className="italic">
                        <a
                          href={project.awardURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.awardTitle}
                        </a>
                      </span>
                    </h4>
                  )}
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-3xl mb-6 text-white font-normal">
                      {project.title}
                    </h3>
                  </a>

                  <div className="bg-swash-2 p-4 rounded-[10px] mb-6 shadow-lg">
                    <p className="text-base leading-relaxed text-white">
                      {project.description}
                    </p>
                  </div>
                  <h4 className="text-base font-mono mb-4 text-white">
                    Things I learned along the way
                  </h4>
                  <ul
                    className={`list-none p-0 m-0 flex flex-wrap gap-4 text-base ${
                      isLeftAligned ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag} className="text-white">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image spans to edge */}
                <div
                  className={`md:row-start-1 ${
                    isLeftAligned
                      ? 'md:col-span-6 md:col-start-6 order-1 md:order-2'
                      : 'md:col-span-5 md:col-start-1 order-1'
                  }`}
                >
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-full mt-8 mb-16 p-4 border-l border-t border-swash-4 rounded-[25px] md:mt-0"
                      src={project.imageURL}
                      alt={`${project.title} thumbnail`}
                    />
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Projects
