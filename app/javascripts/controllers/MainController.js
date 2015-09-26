class MainController {
    /*@ngInject*/
    constructor($scope, $state) {
        console.log('Start');
        console.log($state);
        $state.go('login');
    }
}

export default MainController;
