'use strict';
// importy
import LoginController from './controllers/LoginController';
import Router from './Router';

// deklaracja modułów i dependancy
let moduleName = 'RoutesModule';
let deps =['ui.router'];


angular.module(moduleName, deps)
    .controller('LoginController', LoginController)
    .config(Router)

;//Register end

export default moduleName;
