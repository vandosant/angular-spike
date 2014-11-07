describe('angularjs homepage todo list', function() {
  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });
  it('should add Hello to the name', function () {
    expect(element(by.binding("{{ 'World' | greet }}")).getText()).toEqual('Hello, World!');
  });
});