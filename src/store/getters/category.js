export default state => {
  const extractedCategories = Array.prototype.concat.apply(
    [],
    state.apps.map(item => item.categories)
  )

  return [...new Set(extractedCategories)].sort()
}
