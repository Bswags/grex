var inherits = require('util').inherits;

var GremlinMethod = require('./method');

module.exports = (function() {
  function CollectionAccessor() {
    GremlinMethod.call(this, null, arguments[0]);
  }

  inherits(CollectionAccessor, GremlinMethod);

  CollectionAccessor.prototype.toGroovy = function() {
    var str = '['+ this.args.rawArgs[0].toString() + ']';

    return str;e
  };

  return CollectionAccessor;
})();