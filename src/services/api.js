export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await request.json();
  return categories;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}}`);
  const productsFromCategory = await request.json();
  return productsFromCategory;
}

export async function getProductById(id) {
  const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const response = await request.json();
  return response;
}
