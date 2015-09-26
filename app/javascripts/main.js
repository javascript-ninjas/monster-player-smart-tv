'use strict';

require('./vendor/jquery');
window.jQuery = window.$ = require('./vendor/jquery');
require('./vendor/bootstrap');

require ('./vendor/angular.min');
require('./vendor/angular-ui-router');

let appModule = require('./MonsterModule');

let config = {
    strictDi: true
};

angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule], config);
});




