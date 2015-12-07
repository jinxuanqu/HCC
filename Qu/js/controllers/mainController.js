app.controller('MainController', ['$scope', function($scope) {
    $scope.backgroundImg = '../imgs/Main Page.png';
    $scope.isLogin = false;
    $scope.id = 'jinxuan';
    $scope.pwd = '123';
    $scope.isHidden = false;

    //Check password
    $scope.checkPwd = function(userId, password){
        if($scope.id == userId && $scope.pwd == password){
            window.location.href="views/appPage.html";
            return;
        }
        $scope.isHidden = true;
    };

    //Check which background image you are using
    $scope.isMain = function(){
        if($scope.backgroundImg == '../imgs/Main Page.png')
            return true;
        return false;
    };

    $scope.isReport = function(){
        if($scope.backgroundImg == '../imgs/ReportCrime.png')
            return true;
        return false;
    };

    $scope.isCrimeType = function(){
        if($scope.backgroundImg == '../imgs/CrimeType.png')
            return true;
        return false;
    };

    $scope.isNews = function(){
        if($scope.backgroundImg == '../imgs/News.png')
            return true;
        return false;
    };

    $scope.isCrimeNews = function(){
        if($scope.backgroundImg == '../imgs/crimeNews.png')
            return true;
        return false;
    };

    $scope.isMap = function(){
        if($scope.backgroundImg == '../imgs/crimeMap.png')
            return true;
        return false;
    };

    $scope.isCp = function(){
        if($scope.backgroundImg == '../imgs/cp.png')
            return true;
        return false;
    };

    $scope.isFollowMe = function(){
        if($scope.backgroundImg == '../imgs/followMe.png')
            return true;
        return false;
    };

    $scope.isSettings = function(){
        if($scope.backgroundImg == '../imgs/settings.png')
            return true;
        return false;
    };

    $scope.report = function(){
        $scope.backgroundImg = '../imgs/ReportCrime.png';
    };
    $scope.crimeType = function(){
        $scope.backgroundImg = '../imgs/CrimeType.png';
    };
    //Change background img by click different area
    $scope.readNews = function(){
        $scope.backgroundImg = '../imgs/News.png';
    }

    $scope.backToMain = function(){
        $scope.backgroundImg = '../imgs/Main Page.png';
    };

    $scope.crimeNews = function(){
        $scope.backgroundImg = '../imgs/crimeNews.png';
    };

    $scope.backToLogIn = function(){
        window.location.href="../index.html";
            return;
        $scope.isHidden = false;
    };
    $scope.map = function(){
        $scope.backgroundImg = '../imgs/crimeMap.png';
    };

    $scope.cp = function(){
        $scope.backgroundImg = '../imgs/cp.png';
    };

    $scope.followMe = function(){
        $scope.backgroundImg = '../imgs/followMe.png';
    };

    $scope.settings = function(){
        $scope.backgroundImg = '../imgs/settings.png';
    };

    

}]);