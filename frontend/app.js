'use strict';

// import login from './login';
let moduleName = location.pathname.slice(1);
console.log(location, moduleName);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton')
        .addEventListener('click', logIn, false);

    document.getElementById('logoutButton')
        .addEventListener('click', logOut, false);
});

function logIn() {
    require.ensure([], function() {
        let login = require('./login');

        login();
    }, 'auth');
}

function logOut() {
    require.ensure([], function() {
        let logout = require('./logout');

        logout();
    }, 'auth');
}