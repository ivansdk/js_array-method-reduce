'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (!accumulator && arguments.length < 2) {
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      const index = i;

      accumulator = callback(accumulator, this[i], index, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
