export async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const allProducts=await res.json();
    return allProducts;
    
}

export async function getProductById(productId) {
    const res = await fetch(`https://dummyjson.com/${productId}`);
    const Product=await res.json();
    return Product;
    
}