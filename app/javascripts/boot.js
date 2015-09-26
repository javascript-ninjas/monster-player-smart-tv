var launchWidget = window.curWidget || {};

window.onload = function () {
    if (typeof launchWidget.setPreference === 'function') {
        launchWidget.setPreference('ready', 'true');
    }
};

