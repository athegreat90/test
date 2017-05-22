 resolve:
        {
            "check": function($location, $rootScope)
            {
            console.log('Value rootScope = ' +  $rootScope.loggedIn);
                if (!$rootScope.loggedIn)
                {
                    $location.path('/');
                }
                else 
                {
                    templateUrl: 'dashboard.jsp'
                }
            } 
        }
        
                if ($scope.username == 'admin' && $scope.password == 'admin') 
        {
            
        }
        else
        {
            alert('Invalid Credentials');
        }
        
        
        $rootScope.user = $scope.username;
                $rootScope.loggedIn = true;
                console.log('Value rootScope = ' +  $rootScope.loggedIn);
                $location.path('/dashboard');
                $scope.PostDataResponse = data;
                console.log('Value PostDataResponse = ' +  $scope.PostDataResponse);