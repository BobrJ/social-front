/**
 * Created by BobrD on 30.12.2014.
 */

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/post', {
                templateUrl: 'view/post/list.html',
                controller: 'FeedController'
            }).
            when('/post/:postId', {
                templateUrl: 'view/post/post.html',
                controller: 'FeedController'
            })
    }]);