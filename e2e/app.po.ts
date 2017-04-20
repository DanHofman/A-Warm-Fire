import { browser, element, by } from 'protractor';

export class AWarmFirePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('AWF-root h1')).getText();
  }
}
