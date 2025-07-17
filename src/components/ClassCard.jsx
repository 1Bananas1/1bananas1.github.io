import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ClassCard({
  school,
  classTakenName,
  date,
  description,
  bgColor = '#031ca6',
  tags = [],
  hasGitHub = false,
  hasExternal = false,
  githubURL = '',
  externalURL = '',
}) {
  const isHexColor = bgColor.startsWith('#')

  return (
    <div
      className={`p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl h-full flex flex-col ${!isHexColor ? bgColor : ''}`}
      style={isHexColor ? { backgroundColor: bgColor } : {}}
    >
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-semibold text-white">
            {classTakenName}
          </h3>
          {githubURL && (
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white hover:text-gray-300 transition-colors text-xl"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <p className="text-lg text-gray-200">{school}</p>
          <p className="text-sm text-gray-300">{date}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <p className="text-white leading-relaxed flex-1">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/20">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(hasGitHub || hasExternal) && (
          <div className="flex gap-3 mt-4 pt-4 border-t border-white/20">
            {hasGitHub && githubURL && (
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-white/20 text-white text-sm rounded hover:bg-white/30 transition-colors"
              >
                GitHub
              </a>
            )}
            {hasExternal && externalURL && (
              <a
                href={externalURL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-white/20 text-white text-sm rounded hover:bg-white/30 transition-colors"
              >
                External
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ClassCard
