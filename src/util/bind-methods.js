/**
 * @file Auto-binds class methods to an object
 * @module utilBindMethods
 */


const isMethod = (obj, name) => typeof obj[name] === 'function';

function walkProtoMethods(object, ctor) {
  const proto = Object.getPrototypeOf(object);
  if (!proto) {
    return [];
  }
  if (proto === ctor.prototype) {
    return Object.getOwnPropertyNames(proto).filter(isMethod.bind(null, proto));
  }
  return Object.getOwnPropertyNames(proto)
    .filter(isMethod.bind(null, proto))
    .concat(walkProtoMethods(proto, ctor));
}
/**
 * Auto-bind methods to the passed-in object
 * @alias bindMethods
 * @param {object} thisValue - The object to bind as method context
 * @param {array} [methodNames] - The list of methods to bind, or a parent constructor
 *                              function. Will walk from thisValue to the parent
 *                              constructor and retreive all methods.
 * @returns {void}
 */
export default function bindMethods(thisValue, methodNames) {

  let methods = methodNames;

  if (typeof methods === 'function') {
    methods = walkProtoMethods(thisValue, methods);
  }

  // If we don't pass in an array of methods, set it to all own methods
  if (!methods) {
    methods = walkProtoMethods(thisValue, Object);
  }

  // Bind the methods in the list
  methods
    .filter(isMethod.bind(null, thisValue))
    .forEach(name => {
      // skip methods that already have been bound
      if (!thisValue.hasOwnProperty(name)) {
        thisValue[name] = thisValue[name].bind(thisValue);
      }
    });
}
