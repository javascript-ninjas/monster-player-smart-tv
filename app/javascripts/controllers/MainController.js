class MainController {
    /*@ngInject*/
    constructor($scope, $state) {
        //Jedziem!
        $state.go('intro');
    }
}

export default MainController;
