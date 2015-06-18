var app = angular.module('birchUrl', ['ngRoute', 'ngResource']);

app.factory('UrlService', function($resource) {
	return $resource(birchcfg.birchUrl + 'url')
});

app.controller('urlController', ['$scope','UrlService', function($scope, UrlService) {
	$scope.urls = UrlService.query();
}]);