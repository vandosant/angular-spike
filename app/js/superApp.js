var superApp = angular.module("superApp", []);

superApp.controller("AppCtrl", function ($scope) {
  $scope.loadMoreTweets = function () {
    alert("Loading");
  };

  $scope.deleteTweets = function () {
    alert("Deleting");
  }
});

superApp.directive("superhero", function () {
  return {
    restrict: "E",
    scope: {},
    controller: function ($scope) {
      $scope.abilities = [];

      this.addStrength = function () {
        $scope.abilities.push("strength")
      };

      this.addSpeed = function () {
        $scope.abilities.push("speed")
      };
      this.addFlight = function () {
        $scope.abilities.push("flight")
      };
    },
    link: function (scope, element) {
      element.addClass("button");
      element.bind("mouseenter", function () {
        console.log(scope.abilities)
      })
    }
  }
});

superApp.directive("strength", function () {
  return {
    require: "superhero",
    link: function (scope, elements, attrs, superheroCtrl) {
      superheroCtrl.addStrength();
    }
  }
});

superApp.directive("speed", function () {
  return {
    require: "superhero",
    link: function (scope, elements, attrs, superheroCtrl) {
      superheroCtrl.addSpeed();
    }
  }
});

superApp.directive("flight", function () {
  return {
    require: "superhero",
    link: function (scope, elements, attrs, superheroCtrl) {
      superheroCtrl.addFlight();
    }
  }
});


superApp.controller("abilityCtrl", function ($scope) {
  $scope.logAbility = function (ability) {
    alert(ability + " is added");
  }
});


// & sign call a function in the controller
superApp.directive("hero", function () {
  return {
    restrict: "E",
    scope: {
      added: "&"
    },
    template: '<input type="text" ng-model="value">' + ' {{value}}' +
      '<div class="button" ng-click="added({ability:value})">Add</div>'
  }
});

// @ sign reads in an attribute
superApp.directive("villain", function () {
  return {
    scope: {
      phrase: "@"
    },
    template: '<div>{{phrase}}</div>'
  }
});


// use the =
superApp.controller("parentExpandCtrl", function ($scope) {
  $scope.title = 'Click me passed in from parent scope!';
  $scope.text = 'Hello, I am content'
    + ' that was hidden';
});

superApp.directive('parentExpander', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    scope: { title: '=expanderTitle'},
    template: '<div>' +
      '<div ng-click="toggle()">{{title}}</div>' +
      '<div ng-show="showMe" ng-transclude></div>' +
      '</div>',
    link: function(scope,element,attrs) {
      scope.showMe = false;
      scope.toggle = function toggle() {
        scope.showMe = !scope.showMe;
      }
    }
  }
});

// use the @
superApp.controller("passedExpandCtrl", function ($scope) {
  $scope.title = 'Click me passed in using interpolation!';
  $scope.text = 'Hello, I am content'
    + ' that was hidden';
});

superApp.directive('passedExpander', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    scope: { title: '@expanderTitle'},
    template: '<div>' +
      '<div ng-click="toggle()">{{title}}</div>' +
      '<div ng-show="showMe" ng-transclude></div>' +
      '</div>',
    link: function(scope,element,attrs) {
      scope.showMe = false;
      scope.toggle = function toggle() {
        scope.showMe = !scope.showMe;
      }
    }
  }
});