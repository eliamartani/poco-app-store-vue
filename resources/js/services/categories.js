export const getCategories = (responseData) => {
  const appList = responseData
  const extractedCategories = Array.prototype.concat.apply([], appList.map(item => item.categories))

  return [...new Set(extractedCategories)].sort()
}
