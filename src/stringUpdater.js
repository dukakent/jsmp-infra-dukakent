let push = (string, value) => {
    string += value;
    return string;
};

let change = (string, place, value) => {
    let arr = string.split('');
    arr[place] = value;
    return arr.join('');
};

let del = (string, place) => {
    var arr = string.split('');
    arr.splice(place, 1);
    return arr.join('');
};

export default (array, ...params) => {
    let result;

    switch(params[0]) {
        case 'push':
            result = push(array, params[1]);
            break;
        case 'change':
            result = change(array, params[1], params[2]);
            break;
        case 'delete':
            result = del(array, params[1]);
            break;
        default:
            result = array;
            break;
    }

    return result;
};