import { useState, useEffect, useRef } from 'react'
import PaperEntry from '../components/PaperEntry'
import ClassSearch from '../components/ClassSearch'
import { papersData, parseDateRead } from '../data/readingList.jsx'

const BATCH_SIZE = 5

function ReadingList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const sentinelRef = useRef(null)

  const filteredPapers = papersData
    .filter((paper) => {
      const q = searchTerm.toLowerCase()
      const titleMatches = paper.title.toLowerCase().includes(q)
      const tagMatches = paper.tags.some((tag) => tag.toLowerCase().includes(q))
      return titleMatches || tagMatches
    })
    .sort((a, b) => parseDateRead(b.dateRead) - parseDateRead(a.dateRead))

  // Reset scroll position when search changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE)
  }, [searchTerm])

  // Infinite scroll: load more when sentinel enters view
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + BATCH_SIZE)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [filteredPapers.length])

  const visiblePapers = filteredPapers.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPapers.length

  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-normal text-white mb-4">Reading List</h2>
          <p className="text-base text-gray-300">Research papers I've read</p>
          <p className="text-sm text-gray-500 mt-2 italic">I only started keeping track in Spring 2026</p>
        </div>

        <div className="pb-4 pt-4">
          <ClassSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="Search by title or tag..."
          />
        </div>

        {filteredPapers.length === 0 && searchTerm ? (
          <div className="text-center py-12">
            <h3 className="text-2xl text-gray-400 mb-4">No papers found</h3>
            <p className="text-gray-500">
              Try searching for a different title or tag like "NLP", "Transformers", or "AI
              Agents"
            </p>
          </div>
        ) : (
          <ul className="p-0 m-0">
            {visiblePapers.map((paper, index) => (
              <div
                key={paper.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PaperEntry {...paper} />
              </div>
            ))}
          </ul>
        )}

        {hasMore && <div ref={sentinelRef} className="h-8" />}
      </div>
    </div>
  )
}

export default ReadingList
