var assert = require('assert')
var inspect = require('util').inspect
var debug = require('debug')('ref')

exports = module.exports = require('bindings')('binding')

/**
 * A `Buffer` that references the C NULL pointer. That is, its memory address
 * points to 0. Its `length` is 0 because accessing any data from this buffer
 * would cause a _segmentation fault_.
 *
 * ```
 * console.log(ref.NULL);
 * <Buffer@0x0 >
 * ```
 *
 * @name NULL
 * @type Buffer
 */

/**
 * A string that represents the native endianness of the machine's processor.
 * The possible values are either `"LE"` or `"BE"`.
 *
 * ```
 * console.log(ref.endianness);
 * 'LE'
 * ```
 *
 * @name endianness
 * @type String
 */

/**
 * Accepts a `Buffer` instance and returns the memory address of the buffer
 * instance. Returns a JavaScript Number, which can't hold 64-bit integers,
 * so this function is unsafe on 64-bit systems.
 * ```
 * console.log(ref.address(Buffer.alloc(1)));
 * 4320233616
 *
 * console.log(ref.address(ref.NULL)));
 * 0
 * ```
 *
 * @param {Buffer} buffer The buffer to get the memory address of.
 * @return {Number} The memory address the buffer instance.
 * @name address
 * @type method
 */

/**
 * Accepts a `Buffer` instance and returns _true_ if the buffer represents the
 * NULL pointer, _false_ otherwise.
 *
 * ```
 * console.log(ref.isNull(Buffer.alloc(1)));
 * false
 *
 * console.log(ref.isNull(ref.NULL));
 * true
 * ```
 *
 * @param {Buffer} buffer The buffer to check for NULL.
 * @return {Boolean} true or false.
 * @name isNull
 * @type method
 */

/**
 * Returns a big-endian signed 64-bit int read from _buffer_ at the given
 * _offset_.
 *
 * If the returned value will fit inside a JavaScript Number without losing
 * precision, then a Number is returned, otherwise a String is returned.
 *
 * ```
 * var buf = Buffer.alloc(ref.sizeof.int64);
 * ref.writeInt64BE(buf, 0, '9223372036854775807');
 *
 * var val = ref.readInt64BE(buf, 0)
 * console.log(val)
 * '9223372036854775807'
 * ```
 *
 * @param {Buffer} buffer The buffer to read a Buffer from.
 * @param {Number} offset The offset to begin reading from.
 * @return {Number|String} The Number or String that was read from _buffer_.
 * @name readInt64BE
 * @type method
 */

/**
 * Returns a little-endian signed 64-bit int read from _buffer_ at the given
 * _offset_.
 *
 * If the returned value will fit inside a JavaScript Number without losing
 * precision, then a Number is returned, otherwise a String is returned.
 *
 * ```
 * var buf = Buffer.alloc(ref.sizeof.int64);
 * ref.writeInt64LE(buf, 0, '9223372036854775807');
 *
 * var val = ref.readInt64LE(buf, 0)
 * console.log(val)
 * '9223372036854775807'
 * ```
 *
 * @param {Buffer} buffer The buffer to read a Buffer from.
 * @param {Number} offset The offset to begin reading from.
 * @return {Number|String} The Number or String that was read from _buffer_.
 * @name readInt64LE
 * @type method
 */

/**
 * Returns a big-endian unsigned 64-bit int read from _buffer_ at the given
 * _offset_.
 *
 * If the returned value will fit inside a JavaScript Number without losing
 * precision, then a Number is returned, otherwise a String is returned.
 *
 * ```
 * var buf = Buffer.alloc(ref.sizeof.uint64);
 * ref.writeUInt64BE(buf, 0, '18446744073709551615');
 *
 * var val = ref.readUInt64BE(buf, 0)
 * console.log(val)
 * '18446744073709551615'
 * ```
 *
 * @param {Buffer} buffer The buffer to read a Buffer from.
 * @param {Number} offset The offset to begin reading from.
 * @return {Number|String} The Number or String that was read from _buffer_.
 * @name readUInt64BE
 * @type method
 */

/**
 * Returns a little-endian unsigned 64-bit int read from _buffer_ at the given
 * _offset_.
 *
 * If the returned value will fit inside a JavaScript Number without losing
 * precision, then a Number is returned, otherwise a String is returned.
 *
 * ```
 * var buf = Buffer.alloc(ref.sizeof.uint64);
 * ref.writeUInt64LE(buf, 0, '18446744073709551615');
 *
 * var val = ref.readUInt64LE(buf, 0)
 * console.log(val)
 * '18446744073709551615'
 * ```
 *
 * @param {Buffer} buffer The buffer to read a Buffer from.
 * @param {Number} offset The offset to begin reading from.
 * @return {Number|String} The Number or String that was read from _buffer_.
 * @name readUInt64LE
 * @type method
 */

/**
 * Writes the _input_ Number or String as a big-endian signed 64-bit int into
 * _buffer_ at the given _offset_.
 *
 * ```
 * var buf = Buffer.alloc(ref.sizeof.int64);
 * ref.writeInt64BE(buf, 0, '9223372036854775807');
 * ```
 *
 * @param {Buffer} buffer The buffer to write to.
 * @param {Number} offset The offset to begin writing from.
 * @param {Number|String} input This String or Number which gets written.
 * @name writeInt64BE
 * @type method
 */

/**
 * Writes the _input_ Number or String as a little-endian signed 64-bit int into
 * _buffer_ at the given _offset_.
 *
 * ```
 * var buf = Buffer.alloc(ref.sizeof.int64);
 * ref.writeInt64LE(buf, 0, '9223372036854775807');
 * ```
 *
 * @param {Buffer} buffer The buffer to write to.
 * @param {Number} offset The offset to begin writing from.
 * @param {Number|String} input This String or Number which gets written.
 * @name writeInt64LE
 * @type method
 */

/**
 * Writes the _input_ Number or String as a big-endian unsigned 64-bit int into
 * _buffer_ at the given _offset_.
 *
 * ```
 * var buf = Buffer.alloc(ref.sizeof.uint64);
 * ref.writeUInt64BE(buf, 0, '18446744073709551615');
 * ```
 *
 * @param {Buffer} buffer The buffer to write to.
 * @param {Number} offset The offset to begin writing from.
 * @param {Number|String} input This String or Number which gets written.
 * @name writeUInt64BE
 * @type method
 */

/**
 * Writes the _input_ Number or String as a little-endian unsigned 64-bit int
 * into _buffer_ at the given _offset_.
 *
 * ```
 * var buf = Buffer.alloc(ref.sizeof.uint64);
 * ref.writeUInt64LE(buf, 0, '18446744073709551615');
 * ```
 *
 * @param {Buffer} buffer The buffer to write to.
 * @param {Number} offset The offset to begin writing from.
 * @param {Number|String} input This String or Number which gets written.
 * @name writeUInt64LE
 * @type method
 */

exports['readInt64' + exports.endianness] = exports.readInt64
exports['readUInt64' + exports.endianness] = exports.readUInt64
exports['writeInt64' + exports.endianness] = exports.writeInt64
exports['writeUInt64' + exports.endianness] = exports.writeUInt64

var opposite = exports.endianness == 'LE' ? 'BE' : 'LE'
var int64temp = Buffer.alloc(exports.sizeof.int64)
var uint64temp = Buffer.alloc(exports.sizeof.uint64)

exports['readInt64' + opposite] = function (buffer, offset) {
  for (var i = 0; i < exports.sizeof.int64; i++) {
    int64temp[i] = buffer[offset + exports.sizeof.int64 - i - 1]
  }
  return exports.readInt64(int64temp, 0)
}
exports['readUInt64' + opposite] = function (buffer, offset) {
  for (var i = 0; i < exports.sizeof.uint64; i++) {
    uint64temp[i] = buffer[offset + exports.sizeof.uint64 - i - 1]
  }
  return exports.readUInt64(uint64temp, 0)
}
exports['writeInt64' + opposite] = function (buffer, offset, value) {
  exports.writeInt64(int64temp, 0, value)
  for (var i = 0; i < exports.sizeof.int64; i++) {
    buffer[offset + i] = int64temp[exports.sizeof.int64 - i - 1]
  }
}
exports['writeUInt64' + opposite] = function (buffer, offset, value) {
  exports.writeUInt64(uint64temp, 0, value)
  for (var i = 0; i < exports.sizeof.uint64; i++) {
    buffer[offset + i] = uint64temp[exports.sizeof.uint64 - i - 1]
  }
}

// the built-in "types"
var types = exports.types = {}

/**
 * The `void` type.
 *
 * @section types
 */

types.void = {
  size: 0
  , indirection: 1
  , get: function get(buf, offset) {
    debug('getting `void` type (returns `null`)')
    return null
  }
  , set: function set(buf, offset, val) {
    debug('setting `void` type (no-op)')
  }
}

/**
 * The `int8` type.
 */

types.int8 = {
  size: exports.sizeof.int8
  , indirection: 1
  , get: function get(buf, offset) {
    return buf.readInt8(offset || 0)
  }
  , set: function set(buf, offset, val) {
    if (typeof val === 'string') {
      val = val.charCodeAt(0)
    }
    return buf.writeInt8(val, offset || 0)
  }
}

/**
 * The `uint8` type.
 */

types.uint8 = {
  size: exports.sizeof.uint8
  , indirection: 1
  , get: function get(buf, offset) {
    return buf.readUInt8(offset || 0)
  }
  , set: function set(buf, offset, val) {
    if (typeof val === 'string') {
      val = val.charCodeAt(0)
    }
    return buf.writeUInt8(val, offset || 0)
  }
}

/**
 * The `int16` type.
 */

types.int16 = {
  size: exports.sizeof.int16
  , indirection: 1
  , get: function get(buf, offset) {
    return buf['readInt16' + exports.endianness](offset || 0)
  }
  , set: function set(buf, offset, val) {
    return buf['writeInt16' + exports.endianness](val, offset || 0)
  }
}

/**
 * The `uint16` type.
 */

types.uint16 = {
  size: exports.sizeof.uint16
  , indirection: 1
  , get: function get(buf, offset) {
    return buf['readUInt16' + exports.endianness](offset || 0)
  }
  , set: function set(buf, offset, val) {
    return buf['writeUInt16' + exports.endianness](val, offset || 0)
  }
}

/**
 * The `int32` type.
 */

types.int32 = {
  size: exports.sizeof.int32
  , indirection: 1
  , get: function get(buf, offset) {
    return buf['readInt32' + exports.endianness](offset || 0)
  }
  , set: function set(buf, offset, val) {
    return buf['writeInt32' + exports.endianness](val, offset || 0)
  }
}

/**
 * The `uint32` type.
 */

types.uint32 = {
  size: exports.sizeof.uint32
  , indirection: 1
  , get: function get(buf, offset) {
    return buf['readUInt32' + exports.endianness](offset || 0)
  }
  , set: function set(buf, offset, val) {
    return buf['writeUInt32' + exports.endianness](val, offset || 0)
  }
}

/**
 * The `int64` type.
 */

types.int64 = {
  size: exports.sizeof.int64
  , indirection: 1
  , get: function get(buf, offset) {
    return buf['readInt64' + exports.endianness](offset || 0)
  }
  , set: function set(buf, offset, val) {
    return buf['writeInt64' + exports.endianness](val, offset || 0)
  }
}

/**
 * The `uint64` type.
 */

types.uint64 = {
  size: exports.sizeof.uint64
  , indirection: 1
  , get: function get(buf, offset) {
    return buf['readUInt64' + exports.endianness](offset || 0)
  }
  , set: function set(buf, offset, val) {
    return buf['writeUInt64' + exports.endianness](val, offset || 0)
  }
}

/**
 * The `float` type.
 */

types.float = {
  size: exports.sizeof.float
  , indirection: 1
  , get: function get(buf, offset) {
    return buf['readFloat' + exports.endianness](offset || 0)
  }
  , set: function set(buf, offset, val) {
    return buf['writeFloat' + exports.endianness](val, offset || 0)
  }
}

/**
 * The `double` type.
 */

types.double = {
  size: exports.sizeof.double
  , indirection: 1
  , get: function get(buf, offset) {
    return buf['readDouble' + exports.endianness](offset || 0)
  }
  , set: function set(buf, offset, val) {
    return buf['writeDouble' + exports.endianness](val, offset || 0)
  }
}
  /**
   * The `bool` type.
   *
   * Wrapper type around `types.uint8` that accepts/returns `true` or
   * `false` Boolean JavaScript values.
   *
   * @name bool
   *
   */

  /**
   * The `byte` type.
   *
   * @name byte
   */

  /**
   * The `char` type.
   *
   * @name char
   */

  /**
   * The `uchar` type.
   *
   * @name uchar
   */

  /**
   * The `short` type.
   *
   * @name short
   */

  /**
   * The `ushort` type.
   *
   * @name ushort
   */

  /**
   * The `int` type.
   *
   * @name int
   */

  /**
   * The `uint` type.
   *
   * @name uint
   */

  /**
   * The `long` type.
   *
   * @name long
   */

  /**
   * The `ulong` type.
   *
   * @name ulong
   */

  /**
   * The `longlong` type.
   *
   * @name longlong
   */

  /**
   * The `ulonglong` type.
   *
   * @name ulonglong
   */

  /**
   * The `size_t` type.
   *
   * @name size_t
   */

  /**
   * The `wchar_t` type.
   *
   * @name wchar_t
   */

  // "typedef"s for the variable-sized types
  ;['bool', 'byte', 'char', 'uchar', 'short', 'ushort', 'int', 'uint', 'long'
    , 'ulong', 'longlong', 'ulonglong', 'size_t', 'wchar_t'].forEach(function (name) {
      var unsigned = name === 'bool'
        || name === 'byte'
        || name === 'size_t'
        || name[0] === 'u'
      var size = exports.sizeof[name]
      assert(size >= 1 && size <= 8)
      var typeName = 'int' + (size * 8)
      if (unsigned) {
        typeName = 'u' + typeName
      }
      var type = exports.types[typeName]
      assert(type)
      exports.types[name] = Object.create(type)
    })

// set the "alignment" property on the built-in types
Object.keys(exports.alignof).forEach(function (name) {
  if (name === 'pointer') return
  exports.types[name].alignment = exports.alignof[name]
  assert(exports.types[name].alignment > 0)
})

// make the `bool` type work with JS true/false values
exports.types.bool.get = (function (_get) {
  return function get(buf, offset) {
    return _get(buf, offset) ? true : false
  }
})(exports.types.bool.get)
exports.types.bool.set = (function (_set) {
  return function set(buf, offset, val) {
    if (typeof val !== 'number') {
      val = val ? 1 : 0
    }
    return _set(buf, offset, val)
  }
})(exports.types.bool.set)

/*!
 * Set the `name` property of the types. Used for debugging...
 */

Object.keys(exports.types).forEach(function (name) {
  exports.types[name].name = name
})

/*!
 * Set the `type` property of the `NULL` pointer Buffer object.
 */

exports.NULL.type = exports.types.void

/**
 * All these '...' comment blocks below are for the documentation generator.
 *
 * @section buffer
 */

Buffer.prototype.address = function address() {
  return exports.address(this, 0)
}

/**
 * ...
 */

Buffer.prototype.hexAddress = function hexAddress() {
  return exports.hexAddress(this, 0)
}

/**
 * ...
 */

Buffer.prototype.isNull = function isNull() {
  return exports.isNull(this, 0)
}

Buffer.prototype.readInt64BE = function readInt64BE(offset) {
  return exports.readInt64BE(this, offset)
}

/**
 * ...
 */

Buffer.prototype.writeInt64BE = function writeInt64BE(val, offset) {
  return exports.writeInt64BE(this, offset, val)
}

/**
 * ...
 */

Buffer.prototype.readUInt64BE = function readUInt64BE(offset) {
  return exports.readUInt64BE(this, offset)
}

/**
 * ...
 */

Buffer.prototype.writeUInt64BE = function writeUInt64BE(val, offset) {
  return exports.writeUInt64BE(this, offset, val)
}

/**
 * ...
 */

Buffer.prototype.readInt64LE = function readInt64LE(offset) {
  return exports.readInt64LE(this, offset)
}

/**
 * ...
 */

Buffer.prototype.writeInt64LE = function writeInt64LE(val, offset) {
  return exports.writeInt64LE(this, offset, val)
}

/**
 * ...
 */

Buffer.prototype.readUInt64LE = function readUInt64LE(offset) {
  return exports.readUInt64LE(this, offset)
}

/**
 * ...
 */

Buffer.prototype.writeUInt64LE = function writeUInt64LE(val, offset) {
  return exports.writeUInt64LE(this, offset, val)
}

/**
 * `ref` overwrites the default `Buffer#inspect()` function to include the
 * hex-encoded memory address of the Buffer instance when invoked.
 *
 * This is simply a nice-to-have.
 *
 * **Before**:
 *
 * ``` js
 * console.log(Buffer.from('ref'));
 * <Buffer 72 65 66>
 * ```
 *
 * **After**:
 *
 * ``` js
 * console.log(Buffer.from('ref'));
 * <Buffer@0x103015490 72 65 66>
 * ```
 */

var inspectSym = inspect.custom || 'inspect'
/**
 * in node 6.91, inspect.custom does not give a correct value; so in this case, don't torch the whole process.
 * fixed in >6.9.2
 */
if (Buffer.prototype[inspectSym]) {
  Buffer.prototype[inspectSym] = overwriteInspect(Buffer.prototype[inspectSym])
}

function overwriteInspect(inspect) {
  if (inspect.name === 'refinspect') {
    return inspect
  } else {
    return function refinspect() {
      var v = inspect.apply(this, arguments)
      return v.replace('Buffer', 'Buffer@0x' + this.hexAddress())
    }
  }
}
