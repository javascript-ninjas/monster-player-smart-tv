class LoginController {
    /*@ngInject*/
    constructor($scope, $state) {
        $scope.items = [
            {
                type: 'text',
                label: 'Login'
            },
            {
                type: 'password',
                label: 'Password'
            }
        ];
    }
}

export default LoginController;
