define(['script', 'jquery'], function(App, $) {
  describe('some test that needs a fixture', function(){
    var app;

    beforeEach(function(){
      jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
      loadFixtures('test1.html');
      window.test.init();
    });

    it('plays with the html fixture', function(){
      expect($('#ha')).toBeInDOM();
    });

  }); 

});