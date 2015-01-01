/**
 * Created by BobrD on 29.12.2014.
 */

app.controller('AuthorizationController', ['$scope', '$rootScope', '$http',  function($scope, $rootScope,  $http) {

    $scope.authorization = {
        login : null,
        password : null
    };

    $scope.post = {};

    $scope.authorization.submit = function() {
        $http({
            url: '//social.loc/app_dev.php/oauth/v2/token',
            method: "GET",
            params: {
                client_id : '8_p6ducjotcsg0ko8w44ggwcws44skkw0s088c4ccswgc0sg40g',
                client_secret : '5bf60d53phs8kcgsw0o8g40okskog40skwsg4cko804c084gco',
                grant_type : 'password',
                username: $scope.authorization.login,
                password: $scope.authorization.password
            }
        }).success(function(data) {
            $rootScope.access_token = data.access_token;
        })
    };

    $scope.getPosts = function() {
        $http({
            'url' : '//social.loc/app_dev.php/api/article',
            method: "GET",
            params: {
                access_token: $rootScope.access_token
            }
        }).success(function(data) {
            $scope.post = data;
        }).error(function() {
            $scope.post = ["error"];
        });
    };
}]);