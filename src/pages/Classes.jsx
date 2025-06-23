import { useState } from 'react'
import ClassCard from '../components/ClassCard'
import ClassSearch from '../components/ClassSearch'
import { classesData } from '../data/classDict.jsx'

function Classes() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredClasses = classesData.filter((classInfo) => {
    const searchLower = searchTerm.toLowerCase()

    const nameMatches = classInfo.classTakenName
      .toLowerCase()
      .includes(searchLower)
    const tagMatches = classInfo.tags.some((tag) =>
      tag.toLowerCase().includes(searchLower)
    )

    return nameMatches || tagMatches
  })

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-normal text-white mb-4">Classes</h2>
          <p className="text-base text-gray-300">Courses Taken</p>
        </div>
        <div className="justify-left pb-4 pt-4">
          <ClassSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {filteredClasses.length === 0 && searchTerm ? (
          <div className="text-center py-12 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl text-gray-400 mb-4">
              Oops! We couldn't find that class
            </h3>
            <p className="text-gray-500">
              Try searching for a different class name or tag like
              "Mathematics", "Computer Science", or "Calculus"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((classInfo, index) => (
              <div
                key={classInfo.id}
                className="animate-fadeIn"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <ClassCard {...classInfo} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Classes
