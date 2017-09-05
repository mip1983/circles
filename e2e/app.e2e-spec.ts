import { PlaypenPage } from './app.po';

describe('playpen App', () => {
  let page: PlaypenPage;

  beforeEach(() => {
    page = new PlaypenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
