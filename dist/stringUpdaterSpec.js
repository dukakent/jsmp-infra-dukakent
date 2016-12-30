'use strict';

var _stringUpdater = require('./stringUpdater');

var _stringUpdater2 = _interopRequireDefault(_stringUpdater);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var res = void 0;

res = (0, _stringUpdater2.default)('1234', 'push', 4);
(0, _assert2.default)(res === '12344', 'adds fourth character');

res = (0, _stringUpdater2.default)('1234', 'change', 1, 'z');
(0, _assert2.default)(res === '1z34', 'changes second character');

res = (0, _stringUpdater2.default)('abcd', 'delete', 2);
(0, _assert2.default)(res === 'abd', 'removes third character');