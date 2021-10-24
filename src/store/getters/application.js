const filterArray = ({ categories = [], name = "" }, term = undefined, category = undefined) => {
  const matchCategory = !category || categories.includes(category);
  const matchTerm = !term || name.toLowerCase().includes(term.toLowerCase());

  return matchCategory && matchTerm;
};
const sortByTotalPrice = (item1, item2) => sumPrice(item1) - sumPrice(item2);
const sortByName = ({ name: name1 }, { name: name2 }) => name1.localeCompare(name2);
const sumPrice = ({ subscriptions = [] }) => subscriptions.reduce((total, item) => total + (item.price || 0), 0);

export default (state) => {
  const { apps = [], category, pageIndex, pageSize, term } = state;
  const filteredList = apps
    .filter((item) => filterArray(item, term, category))
    .sort(sortByName)
    .sort(sortByTotalPrice);
  const pagedList = filteredList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  return {
    list: pagedList,
    total: filteredList.length,
    totalPages: Math.ceil(filteredList.length / pageSize),
  };
};
