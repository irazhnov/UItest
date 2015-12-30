angular
    .module(AppConfig.name)
    .controller('MedicalHystoryCtrl', function ($scope, $location, uiService) {
        $scope.goCurrProblemContinued = function () {
            $location.path('/main/currproblemcont');
        };
        $scope.goUploadScreen = function () {
            $location.path('/main/uploadinfo');
        };
        $scope.cbModelMedications = {
            label: '',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
        $scope.cbModelAllergies = {
            label: '',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
        $scope.cbModelSurgeries = {
            label: '',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
        uiService.setHeaderTitle('Medical Hystory');
    });