import { Ng2DemoPage } from './app.po';

describe('ng2-demo App', () => {
  let page: Ng2DemoPage;

  beforeEach(() => {
    page = new Ng2DemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
