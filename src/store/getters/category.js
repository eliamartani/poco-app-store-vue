export default (state) => {
  const categories = state.apps?.map((item) => item.categories) ?? [];
  const extractedCategories = Array.prototype.concat.apply([], categories);

  return [...new Set(extractedCategories)].sort();
};
