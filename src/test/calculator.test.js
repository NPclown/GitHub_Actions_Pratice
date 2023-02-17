const Calculator = require('../calculator.js');

// 하나의 묶음으로 사용하고 싶을때,
describe('Calculator', () => {
    let calc;
    // 테스트가 시작하기 전에 공통적으로 적용해야 할때
    beforeEach(() => {
        calc = new Calculator();
    })

    // 각각의 테스트는 독립적이여야 한다.
    it('inits with 0', () => {
        expect(calc.value).toBe(0);
    });

    it('sets', () => {        
        const num = 10;
        calc.set(num);
        expect(calc.value).toBe(num);
    });

    it('clear', () => {
        const num = 10;
        calc.set(num);
        calc.clear();
        expect(calc.value).toBe(0);
    });

    it('add', () => {
        calc.set(10);
        calc.add(20);
        expect(calc.value).toBe(10+20);
    })

    it('add should throw an error if value is greater than 100', () => {
        expect(() => {
            calc.add(101);
        }).toThrow('Value can not be greater than 100');
    })
    
    it('subtract', () => {
        calc.set(10);
        calc.subtract(20);
        expect(calc.value).toBe(10-20);
    })
    
    it('multiply', () => {
        calc.set(10);
        calc.multiply(20);
        expect(calc.value).toBe(10*20);
    })

    describe('divides', () => {
        it('0/0 === NaN', () => {
            calc.divide(0);
            expect(calc.value).toBe(NaN);
        })

        it('1/0 === Infinity', () => {
            calc.set(1);
            calc.divide(0);
            expect(calc.value).toBe(Infinity);
        })

        it('4/8 === 0.5', () => {
            calc.set(4);
            calc.divide(8);
            expect(calc.value).toBe(4/8);
        })
    })
})
