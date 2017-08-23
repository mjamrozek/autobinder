/**
 * Autobinder main function
 */
module.exports = function(target, key, descriptor) {
  return descriptor.value.bind(this);
}