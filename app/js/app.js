var app = angular.module("app", []);


app.controller('LocationController', ['$scope', function ($scope) {
  var locations = [
    {city: "Denver", population: 1000000, income: 50000},
    {city: "Atlanta", population: 5000000, income: 60000}
  ];

  $scope.greeting = { text: 'Hello'};
  $scope.locations = locations;

  $scope.remove = function (index) {
    $scope.locations.splice(index, 1);
  };

  $scope.update = function (location, index) {
    $scope.locations[index] = angular.copy(location);
  };

  $scope.reset = function () {
    $scope.locations = angular.copy(locations);
  };

  $scope.reset();
}]);

app.factory('Data', function () {
  return { message: "I'm data from a factory service" }
});

app.filter('reverse', function (Data) {
  return function (text) {
    return text.split("").reverse().join("") + Data.message;
  }
});

function FirstCtrl($scope, Data) {
  $scope.data = Data;
}

function SecondCtrl($scope, Data) {
  $scope.data = Data;
//  $scope.reversedMessage = function(message) {
//    return message.split("").reverse().join("");
//  }
}

app.factory('Avengers', function () {
  var Avengers = {};
  Avengers.cast = [
    {
      name: 'Dean Koontz',
      character: 'Nighthawk'
    },
    {
      name: 'Some dude',
      character: 'Captain America'
    },
    {
      name: 'Karl Witherspoon',
      character: 'Stoneman'
    }
  ];
  return Avengers
});

function AvengersCtrl($scope, Avengers) {
  $scope.avengers = Avengers;
}

app.directive('spike', function factory() {
  var directiveObject = {
    restrict: 'E',
    templateUrl: 'spikeTemplate.html',
    replace: true
  };
  return directiveObject;
});


app.directive("superman", function () {
  return {
    restrict: "A",
    link: function () {
      alert("I'm working")
    }
  }
});

var controllers = {};
controllers.AlternativeCtrl = function ($scope) {
  this.sayHi = function () {
    alert('hi')
  };

  return $scope.AlternativeCtrl = this;
};

app.controller(controllers);