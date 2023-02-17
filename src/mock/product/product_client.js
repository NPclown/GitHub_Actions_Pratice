class ProductClient{
    fetchItems() {
        return fetch('').then((response) => response.json());
    }
}

module.exports = ProductClient