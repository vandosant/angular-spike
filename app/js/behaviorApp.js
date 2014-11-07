var app = angular.module("behaviorApp", []);

app.controller("AppCtrl", function ($scope) {
  $scope.loadMoreTweets = function () {
    alert("Loading");
  };

  $scope.deleteTweets = function () {
    alert("Deleting");
  }
});

app.directive("enter", function () {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function () {
      scope.$apply(attrs.enter)
    })
  }
});