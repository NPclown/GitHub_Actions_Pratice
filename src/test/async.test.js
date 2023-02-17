const fetchProduct = require('../async.js');

describe('async test', () => {
    it('fetchProduct Success - done', (done) => {
        fetchProduct().then(data => {
            expect(data).toEqual({item: "Milk", price: 200})
            done();
        })
    });

    it('fetchProduct Success - return', () => {
        return fetchProduct().then(data => {
            expect(data).toEqual({item: "Milk", price: 200})
        })
    });

    it('fetchProduct Success - await', async() => {
        const product = await fetchProduct()
        expect(product).toEqual({item: "Milk", price: 200})
    });

    it('fetchProduct Success - resolves', async() => {
        expect(fetchProduct()).resolves.toEqual({item: "Milk", price: 200})
    });

    it('fetchProduct Success - rejects', async() => {
        expect(fetchProduct('error')).rejects.toEqual('network error')
    });

    it('fetchProduct Error', () => {
        fetchProduct("error").catch(error => {
            expect(error).toBe('network error')
        })
    });
})