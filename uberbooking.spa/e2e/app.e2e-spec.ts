import { NodebookingFrontPage } from './app.po';

describe('nodebooking-front App', () => {
  let page: NodebookingFrontPage;

  beforeEach(() => {
    page = new NodebookingFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
