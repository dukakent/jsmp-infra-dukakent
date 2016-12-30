import update from './arrayUpdater';
import assert from 'assert';


let res;

res = update([1, 2, 3], 'push', 4);
assert(res[3] === 4, 'adds fourth element');

res = update([1, 2, 3], 'change', 1, 10);
assert(res[1] === 10, 'changes second element from 2 to 10');

res = update([1, 2, 3], 'delete', 0);
assert(
    res.length === 2 &&
    res[0] === 2 &&
    res[1] === 3,
    'removes first element'
);
