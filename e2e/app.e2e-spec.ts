import { LearnDirectivesPage } from './app.po';

describe('learn-directives App', () => {
  let page: LearnDirectivesPage;

  beforeEach(() => {
    page = new LearnDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
