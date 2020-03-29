const filterArray = (item, term, category) => {
  const matchCategory = !category || item.categories.indexOf(category) > -1
  const matchTerm = !term || item.name.toLowerCase().includes(term.toLowerCase())

  return matchCategory && matchTerm
}

const sortByTotalPrice = (item1, item2) => sumPrice(item1) - sumPrice(item2)

const sortByName = (item1, item2) => item1.name.localeCompare(item2.name)

const sumPrice = app => app.subscriptions.reduce((total, item) => total + (item.price || 0), 0)

export default state => {
  const { apps, category, pageIndex, pageSize, term } = state
  const filteredList = apps
    ? apps
        .filter(item => filterArray(item, term, category))
        .sort(sortByName)
        .sort(sortByTotalPrice)
    : []
  const pagedList = filteredList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)

  return {
    list: pagedList,
    total: filteredList.length,
    totalPages: Math.ceil(filteredList.length / pageSize)
  }
}
