export const parseDateString = (dateStr) => {
  if (dateStr === 'Current') return Date.now() + 1000

  const [season, year] = dateStr.split(' ')
  const yearNum = parseInt(year)

  const seasonOrder = { Spring: 1, Summer: 2, Fall: 3 }
  return yearNum * 10 + (seasonOrder[season] || 0)
}