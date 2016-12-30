import update from './stringUpdater';
import assert from 'assert';

let res;

res = update('1234', 'push', 4);
assert(res === '12344', 'adds fourth character');

res = update('1234', 'change', 1, 'z');
assert(res === '1z34', 'changes second character');

res = update('abcd', 'delete', 2);
assert(
    res === 'abd',
    'removes third character'
);
