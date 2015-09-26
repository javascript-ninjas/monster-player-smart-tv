import template from './IntroDirective.html';

class Controller {
    /*@ngInject*/
    constructor($scope, $state, KEYCODES) {
        $scope.$on('keyDown', ($evt) => {
            let keyCode = $evt.keyCode;
            //$evt.keyCode;
            if (keyCode === KEYCODES.RED || keyCode === KEYCODES.BLUE) {
                let desiredState = (keyCode === KEYCODES.RED) ? 'login' : 'signup';
                $state.go(desiredState);
            }
        });
    }
}

let IntroDirective = /*@ngInject*/ () => {
    return {
        template,
        restrict: 'E',
        controller: Controller
    }
}

export default IntroDirective;
