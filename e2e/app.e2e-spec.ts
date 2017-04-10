import { HowMuchPizzaPage } from './app.po';

describe('how-much-pizza App', () => {
  let page: HowMuchPizzaPage;

  beforeEach(() => {
    page = new HowMuchPizzaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
