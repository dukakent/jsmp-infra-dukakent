let push = (array, value) => {
    array.push(value)
    return array;
};

let change = (array, place, value) => {
    array[place] = value;
    return array;
};

let del = (array, place) => {
    array.splice(place, 1);
    return array;
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