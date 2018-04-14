/**
 * Created by movsessaponjyan on 4/14/18.
 */


angular
    .module("app",['ngAnimate','ngResource','ngCookies'])
    .factory('question', function ($resource) {
        return $resource("/v1/api/questions",{},{
            // create: {method: 'POST',params:{garageTypeId:'by-organization'},headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
            getAll: {method: 'GET',isArray:true},
            setAnswer: {method: 'POST'}
        });
    })
    .factory('user', function ($resource) {
        return $resource("/v1/api/user",{},{
            // create: {method: 'POST',params:{garageTypeId:'by-organization'},headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
            getUserInfo: {method: 'GET'}
        });
    })
    .controller("mainCtrl",function ($scope,$timeout,question,user,$cookies) {
        $scope.test = "Hello";

        $scope.selectAnswer = null;

        $scope.changePages = function () {
            $scope.homePage = false;
            $scope.rulesPage = false;
            $scope.votePage = false;
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
        },2000);

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
                        alert("done");
                    }
                });
            } else {
                alert("Choose");
            }


        };
        
        $scope.votePageAction = function () {

            user.getUserInfo({},{},function (response) {
                $cookies.put("_id", response._id);

                $scope.changePages();
                $scope.questionKey = 0;

                question.getAll({},{},function (response) {
                    console.log(response);
                    $scope.questions = response;
                });

                $scope.answers = [{
                    id: 1,
                    label: 'aLabel'
                }, {
                    id: 2,
                    label: 'bLabel'
                }];

                $timeout(function () {
                    $scope.votePage = true;
                },1000);


            });




        };

        // $scope.votePageAction(); //tmp



    });