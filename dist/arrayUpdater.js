'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var push = function push(array, value) {
    array.push(value);
    return array;
};

var change = function change(array, place, value) {
    array[place] = value;
    return array;
};

var del = function del(array, place) {
    array.splice(place, 1);
    return array;
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