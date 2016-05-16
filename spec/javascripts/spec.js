define(['script', 'jquery'], function(App, $) {
  describe('some test that needs a fixture', function(){
    var app;

    beforeEach(function(){
      jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
      loadFixtures('test1.html');
      window.test.init();
    });

    it('should verify if "#ha" element is in DOM', function(){
      expect($('#ha')).toBeInDOM();
    });

    it('should verify if "#ha" element has class paragraph', function(){
      expect($('#ha')).toHaveClass('paragraph');
    });

  }); 

});