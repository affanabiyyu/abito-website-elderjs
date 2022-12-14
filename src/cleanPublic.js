const path = require('path');
const del = require('del');
const { getConfig } = require('@elderjs/elderjs');

const { distDir } = getConfig();

const direction = (path.join(distDir, '*'));
const directionException = "!".concat(path.join(distDir, 'admin'));
console.log(' Clearing out public folder.');
del.sync([direction, directionException]);

// console.log(' Clearing out public folder.');
// del.sync(path.join(distDir, '*'));

// this file is optional, but is included in the template
// to prevent inconsistencies and hard to debug problems.