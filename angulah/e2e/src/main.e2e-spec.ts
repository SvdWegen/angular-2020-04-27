import { MainPO } from './main.po';

describe('Main page', () => {
    let main: MainPO;

    beforeEach(() => {
        main = new MainPO();
        main.navigateTo();
    });

    afterEach(async () => {
        let log = await main.getBrowserLog();
        expect(log.length).toBe(0);
    });

    it('should add a product to the list', async () => {
        let countBefore = await main.countProducts();
        main.enterProduct('Computermuis');
        main.enterPrijs(5.90);
        main.enterPhoto('https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/4/2/1/4/9200000092164124.jpg');
        main.submitForm();

        expect(main.countProducts()).toBe(countBefore + 1);
    });
});