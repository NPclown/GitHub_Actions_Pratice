const ProductService = require('../product_service');
const ProductClient = require('./stub_product_client');

describe('ProductService - Stub', () => {
    let productService;

    beforeEach(() => {
        productService = new ProductService(new ProductClient());
    })

    it('should filter out only available items', async() => {
        const items = await productService.fetctAvailableItems();

        expect(items.length).toBe(1);
        expect(items).toEqual([{item : "Milk", available : true}]);    
    })
})