/**
 * Created by movsessaponjyan on 4/14/18.
 */


angular
    .module("app",['ngAnimate'])
    .controller("mainCtrl",function ($scope,$timeout) {
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

                $scope.selectAnswer = null;
                $scope.answers = [{
                    id: 1,
                    label: 'QUEST 2'
                }, {
                    id: 2,
                    label: 'Quest 2'
                }];
            } else {
                alert("Choose");
            }


        };
        
        $scope.votePageAction = function () {
            $scope.changePages();

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


        };

        // $scope.votePageAction(); //tmp



    });