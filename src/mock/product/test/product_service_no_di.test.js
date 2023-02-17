const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');
jest.mock("../product_client");

describe('ProductService - Mock', () => {
    const fetchItems = jest.fn(async() => [{item : "Milk", available : true}, {item : "Banna", available : false}])
    let productService;

    ProductClient.mockImplementation(() => {
        return {
            fetchItems
        }
    });

    beforeEach(() => {
        productService = new ProductService();

        // jest.config.js  clearMocks: false 시 수동으로 초기화를 시켜줘야한다
        fetchItems.mockClear();
        ProductClient.mockClear();
    })

    it('should filter out only available items', async() => {
        const items = await productService.fetctAvailableItems();

        expect(items.length).toBe(1);
        expect(items).toEqual([{item : "Milk", available : true}]);    
    })

    it('test', async() => {
        const items = await productService.fetctAvailableItems();
        expect(fetchItems).toHaveBeenCalledTimes(1);
    })
})