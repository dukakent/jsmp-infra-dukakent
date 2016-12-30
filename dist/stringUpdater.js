'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var push = function push(string, value) {
    string += value;
    return string;
};

var change = function change(string, place, value) {
    var arr = string.split('');
    arr[place] = value;
    return arr.join('');
};

var del = function del(string, place) {
    var arr = string.split('');
    arr.splice(place, 1);
    return arr.join('');
};

exports.default = function (array) {
    var result = void 0;

    switch (arguments.length <= 1 ? undefined : arguments[1]) {
        case 'push':
            result = push(array, arguments.length <= 2 ? undefined : arguments[2]);
            break;
        case 'change':
            result = change(array, arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]);
            break;
        case 'delete':
            result = del(array, arguments.length <= 2 ? undefined : arguments[2]);
            break;
        default:
            result = array;
            break;
    }

    return result;
};