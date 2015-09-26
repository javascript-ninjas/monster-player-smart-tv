'use strict';
// importy
import MainController from  './controllers/MainController';
import RoutesModule from './routes/RoutesModule';

// deklaracja modułów i dependancy
let moduleName = 'MonsterModule';
let deps = [ 'ui.router', RoutesModule ];

angular.module(moduleName, deps)
    .controller('MainController', MainController)
;//Register end

export default moduleName;
