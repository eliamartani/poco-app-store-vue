const filterArray = (item, opt) => {
  const matchCategory = (!opt.category || item.categories.indexOf(opt.category) > -1)
  const matchTerm = (!opt.term || item.name.toLowerCase().includes(opt.term.toLowerCase()))

  return matchCategory && matchTerm
}

const sortByTotalPrice = (item1, item2) => sumPrice(item1) - sumPrice(item2)

const sortByName = (item1, item2) => item1.name.localeCompare(item2.name)

const sumPrice = (app) => app.subscriptions.reduce((total, item) => total + (item.price || 0), 0)

export const getApplications = (responseData, options) => {
  const filteredList = responseData
    .filter(item => filterArray(item, options))
    .sort(sortByName)
    .sort(sortByTotalPrice)

  const pagedList = filteredList.slice(options.pageIndex * options.pageSize, (options.pageIndex + 1) * options.pageSize)

  return {
    list: pagedList,
    total: filteredList.length
  }
}
