import { browser, element, by } from 'protractor';

export class MainPO {
  navigateTo() {
    browser.get('http://localhost:4200');
  }

  getBrowserLog() {
    return browser.manage().logs().get('browser');
  }

  countProducts() {
    let trs = element.all(by.css('table tbody tr'));
    return trs.count();
  }

  enterProduct(product: string) {
    element(by.id('input-product-template')).sendKeys(product);
  }

  enterPrijs(prijs: number) {
    element(by.id('input-prijs-template')).sendKeys(prijs);
  }

  enterPhoto(photo: string) {
    element(by.id('input-photo-template')).sendKeys(photo);
  }

  submitForm() {
    element(by.css('#add-product-form-template button')).click();
  }
}
