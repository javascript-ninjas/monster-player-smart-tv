import template from './LoginDirective.html';

class Controller {
    /*@ngInject*/
    constructor($scope, $element) {
        this.$scope = $scope;
    }
}

let LoginDirective = /*@ngInject*/ () => {
    return {
        template,
        restrict: 'E',
        scope: {
            items: '='
        },
        controller:Controller
    }
}

export default LoginDirective;
