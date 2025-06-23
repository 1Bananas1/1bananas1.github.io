function ClassSearch({ searchTerm, setSearchTerm }) {
  const handleInputChange = (e) => {
    const searchValue = e.target.value
    setSearchTerm(searchValue)
  }

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Search by class name or tag..."
      className="w-full p-2 rounded-2xl border"
    />
  )
}

export default ClassSearch
