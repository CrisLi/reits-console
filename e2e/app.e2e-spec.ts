import { ReitsConsolePage } from './app.po';

describe('reits-console App', function() {
  let page: ReitsConsolePage;

  beforeEach(() => {
    page = new ReitsConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
