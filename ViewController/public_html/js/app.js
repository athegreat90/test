var app = angular.module('btaApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider)
{
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $routeProvider.when('/',
    {
        templateUrl: 'login.jsp'
    })
    .when('/dashboard', 
    {
         resolve:
            {
                "check": function($location, $rootScope)
                {
                console.log('Value rootScope = ' +  $rootScope.loggedIn);
                    if (!$rootScope.loggedIn)
                    {
                        $location.path('/');
                    }
                } 
            },
        templateUrl: 'dashboard.jsp'
    })
    .when('/registeruser', 
    {
        resolve:
                {
                    "check": function($location, $rootScope)
                    {
                    console.log('Value rootScope = ' +  $rootScope.loggedIn);
                        if (!$rootScope.loggedIn)
                        {
                            $location.path('/');
                        }
                    } 
                },
        templateUrl: 'registeruser.jsp'
    })
    .when('/showuser', 
    {
        resolve:
                {
                    "check": function($location, $rootScope)
                    {
                    console.log('Value rootScope = ' +  $rootScope.loggedIn);
                        if (!$rootScope.loggedIn)
                        {
                            $location.path('/');
                        }
                    } 
                },
        templateUrl: 'showuser.jsp'
    })
    .otherwise(
    {
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope, $location, $rootScope, $http)
{
    $scope.submit = function()
    {  //Ajax to server
        var data = {Username: $scope.username, Password: $scope.password, Group: '', Country: ''};
        var urlA = 'http://localhost:58705/api/Jwt';
        $http.post(urlA, data, {headers: {'Content-Type' : 'application/json'}}).then(function(result)
        {
            alert(result.data);
        }).then(function(e){alert(e)});
        
    };
});

app.controller('dashboardCtrl', function($scope, $location, $rootScope)
{
    $scope.registerU = function()
    {
        $scope.name = $rootScope.user;
        $rootScope.loggedIn1 = true;
        console.log('Value user = ' +  $scope.name);
        $location.path('/registeruser');
    }
    $scope.showU = function()
    {
        $scope.name = $rootScope.user;
        $rootScope.loggedIn1 = true;
        console.log('Value user = ' +  $scope.name);
        $location.path('/showuser');
    }
    $scope.logout = function()
    {
        $scope.name = $rootScope.user;
        $rootScope.loggedIn1 = true;
        console.log('Value user = ' +  $scope.name);
        $location.path('/');
    }
});

app.controller('regUserCtrl', function($scope, $location, $rootScope, $http)
{
    $scope.submit = function()
    {
        $rootScope.loggedIn1 = true;
        console.log('Value user = ' +  $scope.name);
        $location.path('/dashboard');
    }
});

app.controller('showUserCtrl', function($scope, $location, $rootScope, $http)
{
    $scope.submit = function()
    {
        $rootScope.loggedIn1 = true;
        console.log('Value user = ' +  $scope.name);
        
    };
    $scope.returnDash = function()
    {
        $rootScope.loggedIn1 = true;
        console.log('Value user = ' +  $scope.name);
        $location.path('/dashboard');
    };
});