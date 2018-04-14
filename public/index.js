/**
 * Created by movsessaponjyan on 4/14/18.
 */


angular
    .module("app",[])
    .controller("mainCtrl",function ($scope) {
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
            $scope.rulesPage = true;
        };

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
            $scope.votePage = true;


            $scope.answers = [{
                id: 1,
                label: 'aLabel'
            }, {
                id: 2,
                label: 'bLabel'
            }];

        };

        // $scope.votePageAction(); //tmp



    });

