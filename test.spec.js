const sum = (a,b) => a + b
describe('Sum', () => {
    it ('should add numbers' , () => {
        expect (sum(3,4)).toEqual(7)
    })
})