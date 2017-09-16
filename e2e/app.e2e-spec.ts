import { CaipiHomeA2Page } from './app.po';

describe('caipi-home-a2 App', function() {
  let page: CaipiHomeA2Page;

  beforeEach(() => {
    page = new CaipiHomeA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
