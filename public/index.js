/**
 * Created by movsessaponjyan on 4/14/18.
 */


angular
    .module("app",['ngAnimate','ngResource','ngCookies','ngMaterial','ngMessages'])
    .factory('question', function ($resource) {
        return $resource("/v1/api/questions",{},{
            getAll: {method: 'GET',isArray:true},
            setAnswer: {method: 'POST'}
        });
    })
    .factory('user', function ($resource) {
        return $resource("/v1/api/:type",{},{
            getUserInfo: {method: 'GET',params:{type:'user'}},
            getAllUser: {method: 'GET',params:{type:'users'},isArray:true}
        });
    })
    .factory('hero', function ($resource) {
        return $resource("/v1/api/:type",{},{
            getHeroInfo: {method: 'GET',params:{type:"hero"}},
            getHeroLeaderInfo: {method: 'GET',params:{type:"heros"},isArray:true}
        });
    })
    .controller("mainCtrl",function ($scope,$timeout,question,user,hero,$cookies) {

        $scope.selectAnswer = null;

        $scope.changePages = function () {
            $scope.homePage = false;
            $scope.rulesPage = false;
            $scope.votePage = false;
            $scope.leaderboardPage = false;
        };
        $scope.changePages($scope.homePage);

        $scope.homePage = true;

        $scope.guessPageAction = function () {
            $scope.changePages();
            $timeout(function () {
                $scope.rulesPage = true;


                $timeout(function () {
                    jQuery( document ).ready(function( $ ) {
                        $(function () {
                            $('.write-text').typewriter({
                                sound: true,
                                cursorVisible: false,
                                cursorColor: "#551A8B",
                                randomTypeSpeed: true
                            });
                        });
                    });
                },400);

            },1000);
        };

        $timeout(function () {
            $scope.guessPageAction();
        },2500);

        $scope.setAnswer = function (answer) {
            $scope.selectAnswer = answer;
        };

        $scope.approveAnswer = function () {

            if ($scope.selectAnswer != null){
                console.log($scope.selectAnswer);

                question.setAnswer({},{_id:$scope.questions[$scope.questionKey][0]._id,option:$scope.selectAnswer},function (response) {
                    $scope.selectAnswer = null;
                    $scope.questionKey++;
                    if ($scope.questionKey > 4){
                        $scope.leaderboardPageAction();
                    }
                });
            } else {
                console.log("Choose");
            }


        };
        
        $scope.votePageAction = function () {


            hero.getHeroInfo({},{},function (response) {
                $scope.hero = response;
                user.getUserInfo({},{},function (response) {
                    $cookies.put("_id", response._id);

                    $scope.changePages();
                    $scope.questionKey = 0;

                    question.getAll({},{},function (response) {
                        console.log(response);
                        $scope.questions = response;
                    });

                    $timeout(function () {
                        $scope.votePage = true;
                    },1000);

                });
            });
        };

        $scope.leaderboardPageAction = function () {
            $scope.changePages();

            user.getAllUser({},{},function (response) {
                console.log(response);
                $scope.userList = response;
            });

            $timeout(function () {
                $scope.leaderboardPage = true;
            },1000);

        };

        $scope.leaderboardHeroPageAction = function () {
            $scope.changePages();

            hero.getHeroLeaderInfo({},{},function (response) {
                $scope.userList = response;

                angular.forEach($scope.userList,function (data) {
                    data.score = data.heroScore;
                });

            });

            $timeout(function () {
                $scope.leaderboardPage = true;
            },1000);
        };

        // $scope.votePageAction(); //tmp



    });