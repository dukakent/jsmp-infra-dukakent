'use strict';

var _arrayUpdater = require('./arrayUpdater');

var _arrayUpdater2 = _interopRequireDefault(_arrayUpdater);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var res = void 0;

res = (0, _arrayUpdater2.default)([1, 2, 3], 'push', 4);
(0, _assert2.default)(res[3] === 4, 'adds fourth element');

res = (0, _arrayUpdater2.default)([1, 2, 3], 'change', 1, 10);
(0, _assert2.default)(res[1] === 10, 'changes second element from 2 to 10');

res = (0, _arrayUpdater2.default)([1, 2, 3], 'delete', 0);
(0, _assert2.default)(res.length === 2 && res[0] === 2 && res[1] === 3, 'removes first element');