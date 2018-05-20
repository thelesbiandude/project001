// Jquery
$(document).ready(() => {
    $('.sidenav').sidenav();
});

// Angular
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.mLists = [];
    $scope.images = [];
    
});