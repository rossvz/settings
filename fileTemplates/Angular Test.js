describe('Controller: core.addProductCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));
  beforeEach(module('core'));
  // disable template caching
  beforeEach(module(function ($provide, $urlRouterProvider) {
    $provide.value('$ionicTemplateCache', function () {});
    $urlRouterProvider.deferIntercept();
  }));
  
  // Declare dependencies globally
  var ctrl,
    scope,
    $httpBackend;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, _$httpBackend_) {
    $httpBackend = _$httpBackend_
    scope = $rootScope.$new();
    ctrl = $controller('<CTRL NAME HERE>', {
      $scope: scope,
      categories: categories,
      category: category
    });
  }));

  it('should be defined', function () {
    expect(ctrl).toBeDefined();
  });

});
