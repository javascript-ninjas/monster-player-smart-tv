'use strict';

import LoginTemplate from './templates/login.html';
import LoginController from './controllers/LoginController';

let Router = /*@ngInject*/ ($urlRouterProvider, $stateProvider) => {
    $stateProvider
        .state('intro', {
            views: {
                'monster': {
                    template: IntroTemplate,
                    controller: IntroController
                }
            }
        })
        .state('login', {
            views: {
                'monster': {
                    template: LoginTemplate,
                    controller: LoginController
                }
            }
        })
    ;// End of states.
}

export default Router;
