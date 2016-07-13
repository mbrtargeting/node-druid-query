'use strict'

var FieldError = require('../errors').FieldError

/**
 * Add interval
 *
 * @type {interval}
 */
module.exports = descending




/**
 * If true results will be in descending order
 * If no argument is given it will sort in descending order
 *
 * @param {boolean} descending Sort results in descending order if true
 * @returns {boolean}
 */
function descending(descending) {
  if (!arguments.length) {
    return true
  }

  if (typeof descending !== 'boolean') {
    throw new FieldError('descending is not a boolean')
  }
  return descending
}