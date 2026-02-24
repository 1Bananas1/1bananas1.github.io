import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function PaperEntry({ title, authors, dateRead, url, tags = [], notes }) {
  return (
    <li className="py-6 border-b border-white/10 list-none">
      <div className="flex justify-between items-start gap-4 mb-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-white hover:text-swash-4 no-underline leading-snug"
        >
          {title}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="ml-2 text-sm text-gray-400"
            aria-hidden="true"
          />
        </a>
        <span className="text-sm text-gray-400 whitespace-nowrap shrink-0">{dateRead}</span>
      </div>

      <p className="text-base text-gray-300 mb-3">{authors}</p>

      {notes && (
        <p className="text-base text-gray-200 leading-relaxed mb-3">{notes}</p>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
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
    </li>
  )
}

export default PaperEntry
