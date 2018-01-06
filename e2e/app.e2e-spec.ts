import { QlikPage } from './app.po';

describe('qlik App', function() {
  let page: QlikPage;

  beforeEach(() => {
    page = new QlikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
