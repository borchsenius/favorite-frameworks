import { VanillaAppPage } from './app.po';

describe('vanilla-app App', () => {
  let page: VanillaAppPage;

  beforeEach(() => {
    page = new VanillaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
