import { AWarmFirePage } from './app.po';

describe('awarm-fire App', () => {
  let page: AWarmFirePage;

  beforeEach(() => {
    page = new AWarmFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('AWF works!');
  });
});
