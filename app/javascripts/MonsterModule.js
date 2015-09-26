'use strict';
// importy
import MainController from  './controllers/MainController';
import RoutesModule from './routes/RoutesModule';
import LoginDirective from './directives/LoginDirective';
import IntroDirective from './directives/IntroDirective';
import Keycodes from './constants/Keycodes';

// deklaracja modułów i dependancy
let moduleName = 'MonsterModule';
let deps = [ 'ui.router', RoutesModule ];

angular.module(moduleName, deps)
    .controller('MainController', MainController)
    .directive('mpLogin', LoginDirective)
    .directive('mpIntro', IntroDirective)
    .constant('KEYCODES', Keycodes)
;//Register end

export default moduleName;
