function t(t2, e2) {
  (null == e2 || e2 > t2.length) && (e2 = t2.length);
  for (var i2 = 0, r2 = Array(e2); i2 < e2; i2++) r2[i2] = t2[i2];
  return r2;
}
function e(t2, e2, i2) {
  return e2 = a(e2), u(t2, o() ? Reflect.construct(e2, i2 || [], a(t2).constructor) : e2.apply(t2, i2));
}
function i(t2, e2) {
  if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
}
function r(t2, e2) {
  for (var i2 = 0; i2 < e2.length; i2++) {
    var r2 = e2[i2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, d(r2.key), r2);
  }
}
function n(t2, e2, i2) {
  return e2 && r(t2.prototype, e2), i2 && r(t2, i2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
}
function s() {
  return s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t2, e2, i2) {
    var r2 = function(t3, e3) {
      for (; !{}.hasOwnProperty.call(t3, e3) && null !== (t3 = a(t3)); ) ;
      return t3;
    }(t2, e2);
    if (r2) {
      var n2 = Object.getOwnPropertyDescriptor(r2, e2);
      return n2.get ? n2.get.call(arguments.length < 3 ? t2 : i2) : n2.value;
    }
  }, s.apply(null, arguments);
}
function a(t2) {
  return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, a(t2);
}
function h(t2, e2) {
  if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
  t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), Object.defineProperty(t2, "prototype", { writable: false }), e2 && l(t2, e2);
}
function o() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (o = function() {
    return !!t2;
  })();
}
function u(t2, e2) {
  if (e2 && ("object" == typeof e2 || "function" == typeof e2)) return e2;
  if (void 0 !== e2) throw new TypeError("Derived constructors may only return object or undefined");
  return function(t3) {
    if (void 0 === t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t3;
  }(t2);
}
function l(t2, e2) {
  return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, l(t2, e2);
}
function c(e2) {
  return function(e3) {
    if (Array.isArray(e3)) return t(e3);
  }(e2) || function(t2) {
    if ("undefined" != typeof Symbol && null != t2[Symbol.iterator] || null != t2["@@iterator"]) return Array.from(t2);
  }(e2) || g(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function d(t2) {
  var e2 = function(t3, e3) {
    if ("object" != typeof t3 || !t3) return t3;
    var i2 = t3[Symbol.toPrimitive];
    if (void 0 !== i2) {
      var r2 = i2.call(t3, e3);
      if ("object" != typeof r2) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t3);
  }(t2, "string");
  return "symbol" == typeof e2 ? e2 : e2 + "";
}
function f(t2) {
  return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  }, f(t2);
}
function g(e2, i2) {
  if (e2) {
    if ("string" == typeof e2) return t(e2, i2);
    var r2 = {}.toString.call(e2).slice(8, -1);
    return "Object" === r2 && e2.constructor && (r2 = e2.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(e2) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? t(e2, i2) : void 0;
  }
}
function v(t2) {
  var e2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return v = function(t3) {
    if (null === t3 || !function(t4) {
      try {
        return -1 !== Function.toString.call(t4).indexOf("[native code]");
      } catch (e3) {
        return "function" == typeof t4;
      }
    }(t3)) return t3;
    if ("function" != typeof t3) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== e2) {
      if (e2.has(t3)) return e2.get(t3);
      e2.set(t3, i2);
    }
    function i2() {
      return function(t4, e3, i3) {
        if (o()) return Reflect.construct.apply(null, arguments);
        var r2 = [null];
        r2.push.apply(r2, e3);
        var n2 = new (t4.bind.apply(t4, r2))();
        return i3 && l(n2, i3.prototype), n2;
      }(t3, arguments, a(this).constructor);
    }
    return i2.prototype = Object.create(t3.prototype, { constructor: { value: i2, enumerable: false, writable: true, configurable: true } }), l(i2, t3);
  }, v(t2);
}
function p(t2) {
  var e2 = t2[0], i2 = t2[1], r2 = t2[2];
  return Math.sqrt(e2 * e2 + i2 * i2 + r2 * r2);
}
function m(t2, e2) {
  return t2[0] = e2[0], t2[1] = e2[1], t2[2] = e2[2], t2;
}
function y(t2, e2, i2) {
  return t2[0] = e2[0] + i2[0], t2[1] = e2[1] + i2[1], t2[2] = e2[2] + i2[2], t2;
}
function _(t2, e2, i2) {
  return t2[0] = e2[0] - i2[0], t2[1] = e2[1] - i2[1], t2[2] = e2[2] - i2[2], t2;
}
function b(t2, e2, i2) {
  return t2[0] = e2[0] * i2, t2[1] = e2[1] * i2, t2[2] = e2[2] * i2, t2;
}
function x(t2) {
  var e2 = t2[0], i2 = t2[1], r2 = t2[2];
  return e2 * e2 + i2 * i2 + r2 * r2;
}
function E(t2, e2) {
  var i2 = e2[0], r2 = e2[1], n2 = e2[2], s2 = i2 * i2 + r2 * r2 + n2 * n2;
  return s2 > 0 && (s2 = 1 / Math.sqrt(s2)), t2[0] = e2[0] * s2, t2[1] = e2[1] * s2, t2[2] = e2[2] * s2, t2;
}
function w(t2, e2) {
  return t2[0] * e2[0] + t2[1] * e2[1] + t2[2] * e2[2];
}
function M(t2, e2, i2) {
  var r2 = e2[0], n2 = e2[1], s2 = e2[2], a2 = i2[0], h2 = i2[1], o2 = i2[2];
  return t2[0] = n2 * o2 - s2 * h2, t2[1] = s2 * a2 - r2 * o2, t2[2] = r2 * h2 - n2 * a2, t2;
}
var A, k, T = (A = [0, 0, 0], k = [0, 0, 0], function(t2, e2) {
  m(A, t2), m(k, e2), E(A, A), E(k, k);
  var i2 = w(A, k);
  return i2 > 1 ? 0 : i2 < -1 ? Math.PI : Math.acos(i2);
});
var R = function(t2) {
  function r2() {
    var t3, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n2, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n2;
    return i(this, r2), u(t3 = e(this, r2, [n2, s2, a2]), t3);
  }
  return h(r2, v(Array)), n(r2, [{ key: "x", get: function() {
    return this[0];
  }, set: function(t3) {
    this[0] = t3;
  } }, { key: "y", get: function() {
    return this[1];
  }, set: function(t3) {
    this[1] = t3;
  } }, { key: "z", get: function() {
    return this[2];
  }, set: function(t3) {
    this[2] = t3;
  } }, { key: "set", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t3;
    return t3.length ? this.copy(t3) : (function(t4, e3, i3, r3) {
      t4[0] = e3, t4[1] = i3, t4[2] = r3;
    }(this, t3, e2, i2), this);
  } }, { key: "copy", value: function(t3) {
    return m(this, t3), this;
  } }, { key: "add", value: function(t3, e2) {
    return e2 ? y(this, t3, e2) : y(this, this, t3), this;
  } }, { key: "sub", value: function(t3, e2) {
    return e2 ? _(this, t3, e2) : _(this, this, t3), this;
  } }, { key: "multiply", value: function(t3) {
    var e2, i2, r3;
    return t3.length ? (i2 = this, r3 = t3, (e2 = this)[0] = i2[0] * r3[0], e2[1] = i2[1] * r3[1], e2[2] = i2[2] * r3[2]) : b(this, this, t3), this;
  } }, { key: "divide", value: function(t3) {
    var e2, i2, r3;
    return t3.length ? (i2 = this, r3 = t3, (e2 = this)[0] = i2[0] / r3[0], e2[1] = i2[1] / r3[1], e2[2] = i2[2] / r3[2]) : b(this, this, 1 / t3), this;
  } }, { key: "inverse", value: function() {
    var t3, e2;
    return e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this, (t3 = this)[0] = 1 / e2[0], t3[1] = 1 / e2[1], t3[2] = 1 / e2[2], this;
  } }, { key: "len", value: function() {
    return p(this);
  } }, { key: "distance", value: function(t3) {
    return t3 ? (e2 = this, r3 = (i2 = t3)[0] - e2[0], n2 = i2[1] - e2[1], s2 = i2[2] - e2[2], Math.sqrt(r3 * r3 + n2 * n2 + s2 * s2)) : p(this);
    var e2, i2, r3, n2, s2;
  } }, { key: "squaredLen", value: function() {
    return x(this);
  } }, { key: "squaredDistance", value: function(t3) {
    return t3 ? (e2 = this, r3 = (i2 = t3)[0] - e2[0], n2 = i2[1] - e2[1], s2 = i2[2] - e2[2], r3 * r3 + n2 * n2 + s2 * s2) : x(this);
    var e2, i2, r3, n2, s2;
  } }, { key: "negate", value: function() {
    var t3, e2;
    return e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this, (t3 = this)[0] = -e2[0], t3[1] = -e2[1], t3[2] = -e2[2], this;
  } }, { key: "cross", value: function(t3, e2) {
    return e2 ? M(this, t3, e2) : M(this, this, t3), this;
  } }, { key: "scale", value: function(t3) {
    return b(this, this, t3), this;
  } }, { key: "normalize", value: function() {
    return E(this, this), this;
  } }, { key: "dot", value: function(t3) {
    return w(this, t3);
  } }, { key: "equals", value: function(t3) {
    return i2 = t3, (e2 = this)[0] === i2[0] && e2[1] === i2[1] && e2[2] === i2[2];
    var e2, i2;
  } }, { key: "applyMatrix3", value: function(t3) {
    var e2, i2, r3, n2, s2, a2;
    return e2 = this, r3 = t3, n2 = (i2 = this)[0], s2 = i2[1], a2 = i2[2], e2[0] = n2 * r3[0] + s2 * r3[3] + a2 * r3[6], e2[1] = n2 * r3[1] + s2 * r3[4] + a2 * r3[7], e2[2] = n2 * r3[2] + s2 * r3[5] + a2 * r3[8], this;
  } }, { key: "applyMatrix4", value: function(t3) {
    var e2, i2, r3, n2, s2, a2, h2;
    return e2 = this, r3 = t3, n2 = (i2 = this)[0], s2 = i2[1], a2 = i2[2], h2 = (h2 = r3[3] * n2 + r3[7] * s2 + r3[11] * a2 + r3[15]) || 1, e2[0] = (r3[0] * n2 + r3[4] * s2 + r3[8] * a2 + r3[12]) / h2, e2[1] = (r3[1] * n2 + r3[5] * s2 + r3[9] * a2 + r3[13]) / h2, e2[2] = (r3[2] * n2 + r3[6] * s2 + r3[10] * a2 + r3[14]) / h2, this;
  } }, { key: "scaleRotateMatrix4", value: function(t3) {
    var e2, i2, r3, n2, s2, a2, h2;
    return e2 = this, r3 = t3, n2 = (i2 = this)[0], s2 = i2[1], a2 = i2[2], h2 = (h2 = r3[3] * n2 + r3[7] * s2 + r3[11] * a2 + r3[15]) || 1, e2[0] = (r3[0] * n2 + r3[4] * s2 + r3[8] * a2) / h2, e2[1] = (r3[1] * n2 + r3[5] * s2 + r3[9] * a2) / h2, e2[2] = (r3[2] * n2 + r3[6] * s2 + r3[10] * a2) / h2, this;
  } }, { key: "applyQuaternion", value: function(t3) {
    return function(t4, e2, i2) {
      var r3 = e2[0], n2 = e2[1], s2 = e2[2], a2 = i2[0], h2 = i2[1], o2 = i2[2], u2 = h2 * s2 - o2 * n2, l2 = o2 * r3 - a2 * s2, c2 = a2 * n2 - h2 * r3, d2 = h2 * c2 - o2 * l2, f2 = o2 * u2 - a2 * c2, g2 = a2 * l2 - h2 * u2, v2 = 2 * i2[3];
      u2 *= v2, l2 *= v2, c2 *= v2, d2 *= 2, f2 *= 2, g2 *= 2, t4[0] = r3 + u2 + d2, t4[1] = n2 + l2 + f2, t4[2] = s2 + c2 + g2;
    }(this, this, t3), this;
  } }, { key: "angle", value: function(t3) {
    return T(this, t3);
  } }, { key: "lerp", value: function(t3, e2) {
    return function(t4, e3, i2, r3) {
      var n2 = e3[0], s2 = e3[1], a2 = e3[2];
      t4[0] = n2 + r3 * (i2[0] - n2), t4[1] = s2 + r3 * (i2[1] - s2), t4[2] = a2 + r3 * (i2[2] - a2);
    }(this, this, t3, e2), this;
  } }, { key: "clone", value: function() {
    return new r2(this[0], this[1], this[2]);
  } }, { key: "fromArray", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this[0] = t3[e2], this[1] = t3[e2 + 1], this[2] = t3[e2 + 2], this;
  } }, { key: "toArray", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return t3[e2] = this[0], t3[e2 + 1] = this[1], t3[e2 + 2] = this[2], t3;
  } }, { key: "transformDirection", value: function(t3) {
    var e2 = this[0], i2 = this[1], r3 = this[2];
    return this[0] = t3[0] * e2 + t3[4] * i2 + t3[8] * r3, this[1] = t3[1] * e2 + t3[5] * i2 + t3[9] * r3, this[2] = t3[2] * e2 + t3[6] * i2 + t3[10] * r3, this.normalize();
  } }]);
}(), F = new R(), S = 1, C = 1, P = false, D = function() {
  return n(function t2(e2) {
    var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    for (var n2 in i(this, t2), e2.canvas, this.gl = e2, this.attributes = r2, this.id = S++, this.VAOs = {}, this.drawRange = { start: 0, count: 0 }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state, r2) this.addAttribute(n2, r2[n2]);
  }, [{ key: "addAttribute", value: function(t2, e2) {
    this.attributes[t2] = e2;
    var i2 = this;
    if (e2.id = C++, e2.size = e2.size || 1, e2.type = e2.type || (e2.data.constructor === Float32Array ? this.gl.FLOAT : e2.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e2.target = "index" === t2 ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e2.normalized = e2.normalized || false, e2.stride = e2.stride || 0, e2.offset = e2.offset || 0, e2.count = e2.count || (e2.stride ? e2.data.byteLength / e2.stride : e2.data.length / e2.size), e2.divisor = e2.instanced || 0, e2.needsUpdate = false, e2.usage = e2.usage || this.gl.STATIC_DRAW, e2.getX = function(t3) {
      return this.data[t3 * this.size];
    }, e2.getY = function(t3) {
      return this.data[t3 * this.size + 1];
    }, e2.getZ = function(t3) {
      return this.data[t3 * this.size + 2];
    }, e2.setXYZ = function(t3, r2, n2, s2) {
      t3 *= this.size, this.data[t3 + 0] = r2, this.data[t3 + 1] = n2, this.data[t3 + 2] = s2, i2.updateAttribute(e2);
    }, e2.buffer || this.updateAttribute(e2), e2.divisor) {
      if (this.isInstanced = true, this.instancedCount && this.instancedCount !== e2.count * e2.divisor) return this.instancedCount = Math.min(this.instancedCount, e2.count * e2.divisor);
      this.instancedCount = e2.count * e2.divisor;
    } else "index" === t2 ? this.drawRange.count = e2.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e2.count));
  } }, { key: "updateAttribute", value: function(t2) {
    var e2 = !t2.buffer;
    e2 && (t2.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== t2.buffer && (this.gl.bindBuffer(t2.target, t2.buffer), this.glState.boundBuffer = t2.buffer), e2 ? this.gl.bufferData(t2.target, t2.data, t2.usage) : this.gl.bufferSubData(t2.target, 0, t2.data), t2.needsUpdate = false;
  } }, { key: "setIndex", value: function(t2) {
    this.addAttribute("index", t2);
  } }, { key: "setDrawRange", value: function(t2, e2) {
    this.drawRange.start = t2, this.drawRange.count = e2;
  } }, { key: "setInstancedCount", value: function(t2) {
    this.instancedCount = t2;
  } }, { key: "createVAO", value: function(t2) {
    this.VAOs[t2.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t2.attributeOrder]), this.bindAttributes(t2);
  } }, { key: "bindAttributes", value: function(t2) {
    var e2 = this;
    t2.attributeLocations.forEach(function(t3, i2) {
      var r2 = i2.name, n2 = i2.type;
      if (e2.attributes[r2]) {
        var s2 = e2.attributes[r2];
        e2.gl.bindBuffer(s2.target, s2.buffer), e2.glState.boundBuffer = s2.buffer;
        var a2 = 1;
        35674 === n2 && (a2 = 2), 35675 === n2 && (a2 = 3), 35676 === n2 && (a2 = 4);
        for (var h2 = s2.size / a2, o2 = 1 === a2 ? 0 : a2 * a2 * 4, u2 = 1 === a2 ? 0 : 4 * a2, l2 = 0; l2 < a2; l2++) e2.gl.vertexAttribPointer(t3 + l2, h2, s2.type, s2.normalized, s2.stride + o2, s2.offset + l2 * u2), e2.gl.enableVertexAttribArray(t3 + l2), e2.gl.renderer.vertexAttribDivisor(t3 + l2, s2.divisor);
      }
    }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  } }, { key: "draw", value: function(t2) {
    var e2, i2 = this, r2 = t2.program, n2 = t2.mode, s2 = void 0 === n2 ? this.gl.TRIANGLES : n2;
    this.gl.renderer.currentGeometry !== "".concat(this.id, "_").concat(r2.attributeOrder) && (this.VAOs[r2.attributeOrder] || this.createVAO(r2), this.gl.renderer.bindVertexArray(this.VAOs[r2.attributeOrder]), this.gl.renderer.currentGeometry = "".concat(this.id, "_").concat(r2.attributeOrder)), r2.attributeLocations.forEach(function(t3, e3) {
      var r3 = e3.name, n3 = i2.attributes[r3];
      n3.needsUpdate && i2.updateAttribute(n3);
    });
    var a2 = 2;
    (null === (e2 = this.attributes.index) || void 0 === e2 ? void 0 : e2.type) === this.gl.UNSIGNED_INT && (a2 = 4), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(s2, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * a2, this.instancedCount) : this.gl.renderer.drawArraysInstanced(s2, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(s2, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * a2) : this.gl.drawArrays(s2, this.drawRange.start, this.drawRange.count);
  } }, { key: "getPosition", value: function() {
    var t2 = this.attributes.position;
    return t2.data ? t2 : P ? void 0 : P = true;
  } }, { key: "computeBoundingBox", value: function(t2) {
    t2 || (t2 = this.getPosition());
    var e2 = t2.data, i2 = t2.size;
    this.bounds || (this.bounds = { min: new R(), max: new R(), center: new R(), scale: new R(), radius: 1 / 0 });
    var r2 = this.bounds.min, n2 = this.bounds.max, s2 = this.bounds.center, a2 = this.bounds.scale;
    r2.set(1 / 0), n2.set(-1 / 0);
    for (var h2 = 0, o2 = e2.length; h2 < o2; h2 += i2) {
      var u2 = e2[h2], l2 = e2[h2 + 1], c2 = e2[h2 + 2];
      r2.x = Math.min(u2, r2.x), r2.y = Math.min(l2, r2.y), r2.z = Math.min(c2, r2.z), n2.x = Math.max(u2, n2.x), n2.y = Math.max(l2, n2.y), n2.z = Math.max(c2, n2.z);
    }
    a2.sub(n2, r2), s2.add(r2, n2).divide(2);
  } }, { key: "computeBoundingSphere", value: function(t2) {
    t2 || (t2 = this.getPosition());
    var e2 = t2.data, i2 = t2.size;
    this.bounds || this.computeBoundingBox(t2);
    for (var r2 = 0, n2 = 0, s2 = e2.length; n2 < s2; n2 += i2) F.fromArray(e2, n2), r2 = Math.max(r2, this.bounds.center.squaredDistance(F));
    this.bounds.radius = Math.sqrt(r2);
  } }, { key: "remove", value: function() {
    for (var t2 in this.VAOs) this.gl.renderer.deleteVertexArray(this.VAOs[t2]), delete this.VAOs[t2];
    for (var e2 in this.attributes) this.gl.deleteBuffer(this.attributes[e2].buffer), delete this.attributes[e2];
  } }]);
}(), O = 1, B = {}, N = function() {
  return n(function t2(e2) {
    var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = r2.vertex, s2 = r2.fragment, a2 = r2.uniforms, h2 = void 0 === a2 ? {} : a2, o2 = r2.transparent, u2 = void 0 !== o2 && o2, l2 = r2.cullFace, c2 = void 0 === l2 ? e2.BACK : l2, d2 = r2.frontFace, f2 = void 0 === d2 ? e2.CCW : d2, g2 = r2.depthTest, v2 = void 0 === g2 || g2, p2 = r2.depthWrite, m2 = void 0 === p2 || p2, y2 = r2.depthFunc, _2 = void 0 === y2 ? e2.LEQUAL : y2;
    i(this, t2), e2.canvas, this.gl = e2, this.uniforms = h2, this.id = O++, this.transparent = u2, this.cullFace = c2, this.frontFace = f2, this.depthTest = v2, this.depthWrite = m2, this.depthFunc = _2, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)), this.vertexShader = e2.createShader(e2.VERTEX_SHADER), this.fragmentShader = e2.createShader(e2.FRAGMENT_SHADER), this.program = e2.createProgram(), e2.attachShader(this.program, this.vertexShader), e2.attachShader(this.program, this.fragmentShader), this.setShaders({ vertex: n2, fragment: s2 });
  }, [{ key: "setShaders", value: function(t2) {
    var e2 = t2.vertex, i2 = t2.fragment;
    if (e2 && (this.gl.shaderSource(this.vertexShader, e2), this.gl.compileShader(this.vertexShader), this.gl.getShaderInfoLog(this.vertexShader)), i2 && (this.gl.shaderSource(this.fragmentShader, i2), this.gl.compileShader(this.fragmentShader), this.gl.getShaderInfoLog(this.fragmentShader)), this.gl.linkProgram(this.program), this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      this.uniformLocations = /* @__PURE__ */ new Map();
      for (var r2 = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS), n2 = 0; n2 < r2; n2++) {
        var s2 = this.gl.getActiveUniform(this.program, n2);
        this.uniformLocations.set(s2, this.gl.getUniformLocation(this.program, s2.name));
        var a2 = s2.name.match(/(\w+)/g);
        s2.uniformName = a2[0], s2.nameComponents = a2.slice(1);
      }
      this.attributeLocations = /* @__PURE__ */ new Map();
      for (var h2 = [], o2 = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES), u2 = 0; u2 < o2; u2++) {
        var l2 = this.gl.getActiveAttrib(this.program, u2), c2 = this.gl.getAttribLocation(this.program, l2.name);
        -1 !== c2 && (h2[c2] = l2.name, this.attributeLocations.set(l2, c2));
      }
      this.attributeOrder = h2.join("");
    }
  } }, { key: "setBlendFunc", value: function(t2, e2, i2, r2) {
    this.blendFunc.src = t2, this.blendFunc.dst = e2, this.blendFunc.srcAlpha = i2, this.blendFunc.dstAlpha = r2, t2 && (this.transparent = true);
  } }, { key: "setBlendEquation", value: function(t2, e2) {
    this.blendEquation.modeRGB = t2, this.blendEquation.modeAlpha = e2;
  } }, { key: "applyState", value: function() {
    this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
  } }, { key: "use", value: function() {
    var t2 = this, e2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).flipFaces, i2 = void 0 !== e2 && e2, r2 = -1;
    this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach(function(e3, i3) {
      var n2, s2 = t2.uniforms[i3.uniformName], a2 = function(t3, e4) {
        var i4 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
        if (!i4) {
          if (Array.isArray(t3) || (i4 = g(t3)) || e4) {
            i4 && (t3 = i4);
            var r3 = 0, n3 = function() {
            };
            return { s: n3, n: function() {
              return r3 >= t3.length ? { done: true } : { done: false, value: t3[r3++] };
            }, e: function(t4) {
              throw t4;
            }, f: n3 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var s3, a3 = true, h3 = false;
        return { s: function() {
          i4 = i4.call(t3);
        }, n: function() {
          var t4 = i4.next();
          return a3 = t4.done, t4;
        }, e: function(t4) {
          h3 = true, s3 = t4;
        }, f: function() {
          try {
            a3 || null == i4.return || i4.return();
          } finally {
            if (h3) throw s3;
          }
        } };
      }(i3.nameComponents);
      try {
        for (a2.s(); !(n2 = a2.n()).done; ) {
          var h2 = n2.value;
          if (!s2) break;
          if (!(h2 in s2)) {
            if (Array.isArray(s2.value)) break;
            s2 = void 0;
            break;
          }
          s2 = s2[h2];
        }
      } catch (t3) {
        a2.e(t3);
      } finally {
        a2.f();
      }
      if (!s2) return L("Active uniform ".concat(i3.name, " has not been supplied"));
      if (s2 && void 0 === s2.value) return L("".concat(i3.name, " uniform is missing a value parameter"));
      if (s2.value.texture) return r2 += 1, s2.value.update(r2), U(t2.gl, i3.type, e3, r2);
      if (s2.value.length && s2.value[0].texture) {
        var o2 = [];
        return s2.value.forEach(function(t3) {
          r2 += 1, t3.update(r2), o2.push(r2);
        }), U(t2.gl, i3.type, e3, o2);
      }
      U(t2.gl, i3.type, e3, s2.value);
    }), this.applyState(), i2 && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  } }, { key: "remove", value: function() {
    this.gl.deleteProgram(this.program);
  } }]);
}();
function U(t2, e2, i2, r2) {
  r2 = r2.length ? function(t3) {
    var e3 = t3.length, i3 = t3[0].length;
    if (void 0 === i3) return t3;
    var r3 = e3 * i3, n3 = B[r3];
    n3 || (B[r3] = n3 = new Float32Array(r3));
    for (var s2 = 0; s2 < e3; s2++) n3.set(t3[s2], s2 * i3);
    return n3;
  }(r2) : r2;
  var n2 = t2.renderer.state.uniformLocations.get(i2);
  if (r2.length) if (void 0 === n2 || n2.length !== r2.length) t2.renderer.state.uniformLocations.set(i2, r2.slice(0));
  else {
    if (function(t3, e3) {
      if (t3.length !== e3.length) return false;
      for (var i3 = 0, r3 = t3.length; i3 < r3; i3++) if (t3[i3] !== e3[i3]) return false;
      return true;
    }(n2, r2)) return;
    n2.set ? n2.set(r2) : function(t3, e3) {
      for (var i3 = 0, r3 = t3.length; i3 < r3; i3++) t3[i3] = e3[i3];
    }(n2, r2), t2.renderer.state.uniformLocations.set(i2, n2);
  }
  else {
    if (n2 === r2) return;
    t2.renderer.state.uniformLocations.set(i2, r2);
  }
  switch (e2) {
    case 5126:
      return r2.length ? t2.uniform1fv(i2, r2) : t2.uniform1f(i2, r2);
    case 35664:
      return t2.uniform2fv(i2, r2);
    case 35665:
      return t2.uniform3fv(i2, r2);
    case 35666:
      return t2.uniform4fv(i2, r2);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
      return r2.length ? t2.uniform1iv(i2, r2) : t2.uniform1i(i2, r2);
    case 35671:
    case 35667:
      return t2.uniform2iv(i2, r2);
    case 35672:
    case 35668:
      return t2.uniform3iv(i2, r2);
    case 35673:
    case 35669:
      return t2.uniform4iv(i2, r2);
    case 35674:
      return t2.uniformMatrix2fv(i2, false, r2);
    case 35675:
      return t2.uniformMatrix3fv(i2, false, r2);
    case 35676:
      return t2.uniformMatrix4fv(i2, false, r2);
  }
}
function L(t2) {
}
var z = new R(), X = 1, j = function() {
  return n(function t2() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = e2.canvas, n2 = void 0 === r2 ? document.createElement("canvas") : r2, s2 = e2.width, a2 = void 0 === s2 ? 300 : s2, h2 = e2.height, o2 = void 0 === h2 ? 150 : h2, u2 = e2.dpr, l2 = void 0 === u2 ? 1 : u2, c2 = e2.alpha, d2 = void 0 !== c2 && c2, f2 = e2.depth, g2 = void 0 === f2 || f2, v2 = e2.stencil, p2 = void 0 !== v2 && v2, m2 = e2.antialias, y2 = void 0 === m2 || m2, _2 = e2.premultipliedAlpha, b2 = void 0 !== _2 && _2, x2 = e2.preserveDrawingBuffer, E2 = void 0 === x2 || x2, w2 = e2.powerPreference, M2 = void 0 === w2 ? "default" : w2, A2 = e2.autoClear, k2 = void 0 === A2 || A2, T2 = e2.webgl, R2 = void 0 === T2 ? 2 : T2;
    i(this, t2);
    var F2 = { alpha: d2, depth: g2, stencil: p2, antialias: y2, premultipliedAlpha: b2, preserveDrawingBuffer: E2, powerPreference: M2 };
    this.dpr = l2, this.alpha = d2, this.color = true, this.depth = g2, this.stencil = p2, this.premultipliedAlpha = b2, this.autoClear = k2, this.id = X++, 2 === R2 && (this.gl = n2.getContext("webgl2", F2)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = n2.getContext("webgl", F2)), this.gl, this.gl.renderer = this, this.setSize(a2, o2), this.state = {}, this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }, this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }, this.state.cullFace = false, this.state.frontFace = this.gl.CCW, this.state.depthMask = true, this.state.depthFunc = this.gl.LEQUAL, this.state.premultiplyAlpha = false, this.state.flipY = false, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = { x: 0, y: 0, width: null, height: null }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = /* @__PURE__ */ new Map(), this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }, [{ key: "setSize", value: function(t2, e2) {
    this.width = t2, this.height = e2, this.gl.canvas.width = t2 * this.dpr, this.gl.canvas.height = e2 * this.dpr, this.gl.canvas.style && Object.assign(this.gl.canvas.style, { width: t2 + "px", height: e2 + "px" });
  } }, { key: "setViewport", value: function(t2, e2) {
    var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    this.state.viewport.width === t2 && this.state.viewport.height === e2 || (this.state.viewport.width = t2, this.state.viewport.height = e2, this.state.viewport.x = i2, this.state.viewport.y = r2, this.gl.viewport(i2, r2, t2, e2));
  } }, { key: "setScissor", value: function(t2, e2) {
    var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    this.gl.scissor(i2, r2, t2, e2);
  } }, { key: "enable", value: function(t2) {
    true !== this.state[t2] && (this.gl.enable(t2), this.state[t2] = true);
  } }, { key: "disable", value: function(t2) {
    false !== this.state[t2] && (this.gl.disable(t2), this.state[t2] = false);
  } }, { key: "setBlendFunc", value: function(t2, e2, i2, r2) {
    this.state.blendFunc.src === t2 && this.state.blendFunc.dst === e2 && this.state.blendFunc.srcAlpha === i2 && this.state.blendFunc.dstAlpha === r2 || (this.state.blendFunc.src = t2, this.state.blendFunc.dst = e2, this.state.blendFunc.srcAlpha = i2, this.state.blendFunc.dstAlpha = r2, void 0 !== i2 ? this.gl.blendFuncSeparate(t2, e2, i2, r2) : this.gl.blendFunc(t2, e2));
  } }, { key: "setBlendEquation", value: function(t2, e2) {
    t2 = t2 || this.gl.FUNC_ADD, this.state.blendEquation.modeRGB === t2 && this.state.blendEquation.modeAlpha === e2 || (this.state.blendEquation.modeRGB = t2, this.state.blendEquation.modeAlpha = e2, void 0 !== e2 ? this.gl.blendEquationSeparate(t2, e2) : this.gl.blendEquation(t2));
  } }, { key: "setCullFace", value: function(t2) {
    this.state.cullFace !== t2 && (this.state.cullFace = t2, this.gl.cullFace(t2));
  } }, { key: "setFrontFace", value: function(t2) {
    this.state.frontFace !== t2 && (this.state.frontFace = t2, this.gl.frontFace(t2));
  } }, { key: "setDepthMask", value: function(t2) {
    this.state.depthMask !== t2 && (this.state.depthMask = t2, this.gl.depthMask(t2));
  } }, { key: "setDepthFunc", value: function(t2) {
    this.state.depthFunc !== t2 && (this.state.depthFunc = t2, this.gl.depthFunc(t2));
  } }, { key: "activeTexture", value: function(t2) {
    this.state.activeTextureUnit !== t2 && (this.state.activeTextureUnit = t2, this.gl.activeTexture(this.gl.TEXTURE0 + t2));
  } }, { key: "bindFramebuffer", value: function() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e2 = t2.target, i2 = void 0 === e2 ? this.gl.FRAMEBUFFER : e2, r2 = t2.buffer, n2 = void 0 === r2 ? null : r2;
    this.state.framebuffer !== n2 && (this.state.framebuffer = n2, this.gl.bindFramebuffer(i2, n2));
  } }, { key: "getExtension", value: function(t2, e2, i2) {
    return e2 && this.gl[e2] ? this.gl[e2].bind(this.gl) : (this.extensions[t2] || (this.extensions[t2] = this.gl.getExtension(t2)), e2 ? this.extensions[t2] ? this.extensions[t2][i2].bind(this.extensions[t2]) : null : this.extensions[t2]);
  } }, { key: "sortOpaque", value: function(t2, e2) {
    return t2.renderOrder !== e2.renderOrder ? t2.renderOrder - e2.renderOrder : t2.program.id !== e2.program.id ? t2.program.id - e2.program.id : t2.zDepth !== e2.zDepth ? t2.zDepth - e2.zDepth : e2.id - t2.id;
  } }, { key: "sortTransparent", value: function(t2, e2) {
    return t2.renderOrder !== e2.renderOrder ? t2.renderOrder - e2.renderOrder : t2.zDepth !== e2.zDepth ? e2.zDepth - t2.zDepth : e2.id - t2.id;
  } }, { key: "sortUI", value: function(t2, e2) {
    return t2.renderOrder !== e2.renderOrder ? t2.renderOrder - e2.renderOrder : t2.program.id !== e2.program.id ? t2.program.id - e2.program.id : e2.id - t2.id;
  } }, { key: "getRenderList", value: function(t2) {
    var e2 = t2.scene, i2 = t2.camera, r2 = t2.frustumCull, n2 = t2.sort, s2 = [];
    if (i2 && r2 && i2.updateFrustum(), e2.traverse(function(t3) {
      if (!t3.visible) return true;
      t3.draw && (r2 && t3.frustumCulled && i2 && !i2.frustumIntersectsMesh(t3) || s2.push(t3));
    }), n2) {
      var a2 = [], h2 = [], o2 = [];
      s2.forEach(function(t3) {
        t3.program.transparent ? t3.program.depthTest ? h2.push(t3) : o2.push(t3) : a2.push(t3), t3.zDepth = 0, 0 === t3.renderOrder && t3.program.depthTest && i2 && (t3.worldMatrix.getTranslation(z), z.applyMatrix4(i2.projectionViewMatrix), t3.zDepth = z.z);
      }), a2.sort(this.sortOpaque), h2.sort(this.sortTransparent), o2.sort(this.sortUI), s2 = a2.concat(h2, o2);
    }
    return s2;
  } }, { key: "render", value: function(t2) {
    var e2 = t2.scene, i2 = t2.camera, r2 = t2.target, n2 = void 0 === r2 ? null : r2, s2 = t2.update, a2 = void 0 === s2 || s2, h2 = t2.sort, o2 = void 0 === h2 || h2, u2 = t2.frustumCull, l2 = void 0 === u2 || u2, c2 = t2.clear;
    null === n2 ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(n2), this.setViewport(n2.width, n2.height)), (c2 || this.autoClear && false !== c2) && (!this.depth || n2 && !n2.depth || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(true)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), a2 && e2.updateMatrixWorld(), i2 && i2.updateMatrixWorld(), this.getRenderList({ scene: e2, camera: i2, frustumCull: l2, sort: o2 }).forEach(function(t3) {
      t3.draw({ camera: i2 });
    });
  } }]);
}();
function G(t2, e2) {
  return t2[0] = e2[0], t2[1] = e2[1], t2[2] = e2[2], t2[3] = e2[3], t2;
}
function q(t2, e2, i2, r2, n2) {
  return t2[0] = e2, t2[1] = i2, t2[2] = r2, t2[3] = n2, t2;
}
function W(t2, e2) {
  var i2 = e2[0], r2 = e2[1], n2 = e2[2], s2 = e2[3], a2 = i2 * i2 + r2 * r2 + n2 * n2 + s2 * s2;
  return a2 > 0 && (a2 = 1 / Math.sqrt(a2)), t2[0] = i2 * a2, t2[1] = r2 * a2, t2[2] = n2 * a2, t2[3] = s2 * a2, t2;
}
function V(t2, e2) {
  return t2[0] * e2[0] + t2[1] * e2[1] + t2[2] * e2[2] + t2[3] * e2[3];
}
function Y(t2, e2, i2) {
  var r2 = e2[0], n2 = e2[1], s2 = e2[2], a2 = e2[3], h2 = i2[0], o2 = i2[1], u2 = i2[2], l2 = i2[3];
  return t2[0] = r2 * l2 + a2 * h2 + n2 * u2 - s2 * o2, t2[1] = n2 * l2 + a2 * o2 + s2 * h2 - r2 * u2, t2[2] = s2 * l2 + a2 * u2 + r2 * o2 - n2 * h2, t2[3] = a2 * l2 - r2 * h2 - n2 * o2 - s2 * u2, t2;
}
var H = G, Z = q, Q = V, K = W, $ = function(t2) {
  function r2() {
    var t3, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, h2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    i(this, r2), (t3 = e(this, r2, [n2, s2, a2, h2])).onChange = function() {
    }, t3._target = t3;
    var o2 = ["0", "1", "2", "3"];
    return u(t3, new Proxy(t3, { set: function(t4, e2) {
      var i2 = Reflect.set.apply(Reflect, arguments);
      return i2 && o2.includes(e2) && t4.onChange(), i2;
    } }));
  }
  return h(r2, v(Array)), n(r2, [{ key: "x", get: function() {
    return this[0];
  }, set: function(t3) {
    this._target[0] = t3, this.onChange();
  } }, { key: "y", get: function() {
    return this[1];
  }, set: function(t3) {
    this._target[1] = t3, this.onChange();
  } }, { key: "z", get: function() {
    return this[2];
  }, set: function(t3) {
    this._target[2] = t3, this.onChange();
  } }, { key: "w", get: function() {
    return this[3];
  }, set: function(t3) {
    this._target[3] = t3, this.onChange();
  } }, { key: "identity", value: function() {
    var t3;
    return (t3 = this._target)[0] = 0, t3[1] = 0, t3[2] = 0, t3[3] = 1, this.onChange(), this;
  } }, { key: "set", value: function(t3, e2, i2, r3) {
    return t3.length ? this.copy(t3) : (Z(this._target, t3, e2, i2, r3), this.onChange(), this);
  } }, { key: "rotateX", value: function(t3) {
    return function(t4, e2, i2) {
      i2 *= 0.5;
      var r3 = e2[0], n2 = e2[1], s2 = e2[2], a2 = e2[3], h2 = Math.sin(i2), o2 = Math.cos(i2);
      t4[0] = r3 * o2 + a2 * h2, t4[1] = n2 * o2 + s2 * h2, t4[2] = s2 * o2 - n2 * h2, t4[3] = a2 * o2 - r3 * h2;
    }(this._target, this._target, t3), this.onChange(), this;
  } }, { key: "rotateY", value: function(t3) {
    return function(t4, e2, i2) {
      i2 *= 0.5;
      var r3 = e2[0], n2 = e2[1], s2 = e2[2], a2 = e2[3], h2 = Math.sin(i2), o2 = Math.cos(i2);
      t4[0] = r3 * o2 - s2 * h2, t4[1] = n2 * o2 + a2 * h2, t4[2] = s2 * o2 + r3 * h2, t4[3] = a2 * o2 - n2 * h2;
    }(this._target, this._target, t3), this.onChange(), this;
  } }, { key: "rotateZ", value: function(t3) {
    return function(t4, e2, i2) {
      i2 *= 0.5;
      var r3 = e2[0], n2 = e2[1], s2 = e2[2], a2 = e2[3], h2 = Math.sin(i2), o2 = Math.cos(i2);
      t4[0] = r3 * o2 + n2 * h2, t4[1] = n2 * o2 - r3 * h2, t4[2] = s2 * o2 + a2 * h2, t4[3] = a2 * o2 - s2 * h2;
    }(this._target, this._target, t3), this.onChange(), this;
  } }, { key: "inverse", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._target;
    return function(t4, e2) {
      var i2 = e2[0], r3 = e2[1], n2 = e2[2], s2 = e2[3], a2 = i2 * i2 + r3 * r3 + n2 * n2 + s2 * s2, h2 = a2 ? 1 / a2 : 0;
      t4[0] = -i2 * h2, t4[1] = -r3 * h2, t4[2] = -n2 * h2, t4[3] = s2 * h2;
    }(this._target, t3), this.onChange(), this;
  } }, { key: "conjugate", value: function() {
    var t3, e2, i2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._target;
    return t3 = this._target, e2 = i2, t3[0] = -e2[0], t3[1] = -e2[1], t3[2] = -e2[2], t3[3] = e2[3], this.onChange(), this;
  } }, { key: "copy", value: function(t3) {
    return H(this._target, t3), this.onChange(), this;
  } }, { key: "normalize", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._target;
    return K(this._target, t3), this.onChange(), this;
  } }, { key: "multiply", value: function(t3, e2) {
    return e2 ? Y(this._target, t3, e2) : Y(this._target, this._target, t3), this.onChange(), this;
  } }, { key: "dot", value: function(t3) {
    return Q(this._target, t3);
  } }, { key: "fromMatrix3", value: function(t3) {
    return function(t4, e2) {
      var i2, r3 = e2[0] + e2[4] + e2[8];
      if (r3 > 0) i2 = Math.sqrt(r3 + 1), t4[3] = 0.5 * i2, i2 = 0.5 / i2, t4[0] = (e2[5] - e2[7]) * i2, t4[1] = (e2[6] - e2[2]) * i2, t4[2] = (e2[1] - e2[3]) * i2;
      else {
        var n2 = 0;
        e2[4] > e2[0] && (n2 = 1), e2[8] > e2[3 * n2 + n2] && (n2 = 2);
        var s2 = (n2 + 1) % 3, a2 = (n2 + 2) % 3;
        i2 = Math.sqrt(e2[3 * n2 + n2] - e2[3 * s2 + s2] - e2[3 * a2 + a2] + 1), t4[n2] = 0.5 * i2, i2 = 0.5 / i2, t4[3] = (e2[3 * s2 + a2] - e2[3 * a2 + s2]) * i2, t4[s2] = (e2[3 * s2 + n2] + e2[3 * n2 + s2]) * i2, t4[a2] = (e2[3 * a2 + n2] + e2[3 * n2 + a2]) * i2;
      }
    }(this._target, t3), this.onChange(), this;
  } }, { key: "fromEuler", value: function(t3, e2) {
    return function(t4, e3) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "YXZ", r3 = Math.sin(0.5 * e3[0]), n2 = Math.cos(0.5 * e3[0]), s2 = Math.sin(0.5 * e3[1]), a2 = Math.cos(0.5 * e3[1]), h2 = Math.sin(0.5 * e3[2]), o2 = Math.cos(0.5 * e3[2]);
      "XYZ" === i2 ? (t4[0] = r3 * a2 * o2 + n2 * s2 * h2, t4[1] = n2 * s2 * o2 - r3 * a2 * h2, t4[2] = n2 * a2 * h2 + r3 * s2 * o2, t4[3] = n2 * a2 * o2 - r3 * s2 * h2) : "YXZ" === i2 ? (t4[0] = r3 * a2 * o2 + n2 * s2 * h2, t4[1] = n2 * s2 * o2 - r3 * a2 * h2, t4[2] = n2 * a2 * h2 - r3 * s2 * o2, t4[3] = n2 * a2 * o2 + r3 * s2 * h2) : "ZXY" === i2 ? (t4[0] = r3 * a2 * o2 - n2 * s2 * h2, t4[1] = n2 * s2 * o2 + r3 * a2 * h2, t4[2] = n2 * a2 * h2 + r3 * s2 * o2, t4[3] = n2 * a2 * o2 - r3 * s2 * h2) : "ZYX" === i2 ? (t4[0] = r3 * a2 * o2 - n2 * s2 * h2, t4[1] = n2 * s2 * o2 + r3 * a2 * h2, t4[2] = n2 * a2 * h2 - r3 * s2 * o2, t4[3] = n2 * a2 * o2 + r3 * s2 * h2) : "YZX" === i2 ? (t4[0] = r3 * a2 * o2 + n2 * s2 * h2, t4[1] = n2 * s2 * o2 + r3 * a2 * h2, t4[2] = n2 * a2 * h2 - r3 * s2 * o2, t4[3] = n2 * a2 * o2 - r3 * s2 * h2) : "XZY" === i2 && (t4[0] = r3 * a2 * o2 - n2 * s2 * h2, t4[1] = n2 * s2 * o2 - r3 * a2 * h2, t4[2] = n2 * a2 * h2 + r3 * s2 * o2, t4[3] = n2 * a2 * o2 + r3 * s2 * h2);
    }(this._target, t3, t3.order), e2 || this.onChange(), this;
  } }, { key: "fromAxisAngle", value: function(t3, e2) {
    return function(t4, e3, i2) {
      i2 *= 0.5;
      var r3 = Math.sin(i2);
      t4[0] = r3 * e3[0], t4[1] = r3 * e3[1], t4[2] = r3 * e3[2], t4[3] = Math.cos(i2);
    }(this._target, t3, e2), this.onChange(), this;
  } }, { key: "slerp", value: function(t3, e2) {
    return function(t4, e3, i2, r3) {
      var n2, s2, a2, h2, o2, u2 = e3[0], l2 = e3[1], c2 = e3[2], d2 = e3[3], f2 = i2[0], g2 = i2[1], v2 = i2[2], p2 = i2[3];
      (s2 = u2 * f2 + l2 * g2 + c2 * v2 + d2 * p2) < 0 && (s2 = -s2, f2 = -f2, g2 = -g2, v2 = -v2, p2 = -p2), 1 - s2 > 1e-6 ? (n2 = Math.acos(s2), a2 = Math.sin(n2), h2 = Math.sin((1 - r3) * n2) / a2, o2 = Math.sin(r3 * n2) / a2) : (h2 = 1 - r3, o2 = r3), t4[0] = h2 * u2 + o2 * f2, t4[1] = h2 * l2 + o2 * g2, t4[2] = h2 * c2 + o2 * v2, t4[3] = h2 * d2 + o2 * p2;
    }(this._target, this._target, t3, e2), this.onChange(), this;
  } }, { key: "fromArray", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this._target[0] = t3[e2], this._target[1] = t3[e2 + 1], this._target[2] = t3[e2 + 2], this._target[3] = t3[e2 + 3], this.onChange(), this;
  } }, { key: "toArray", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return t3[e2] = this[0], t3[e2 + 1] = this[1], t3[e2 + 2] = this[2], t3[e2 + 3] = this[3], t3;
  } }]);
}();
function J(t2) {
  var e2 = t2[0], i2 = t2[1], r2 = t2[2], n2 = t2[3], s2 = t2[4], a2 = t2[5], h2 = t2[6], o2 = t2[7], u2 = t2[8], l2 = t2[9], c2 = t2[10], d2 = t2[11], f2 = t2[12], g2 = t2[13], v2 = t2[14], p2 = t2[15];
  return (e2 * a2 - i2 * s2) * (c2 * p2 - d2 * v2) - (e2 * h2 - r2 * s2) * (l2 * p2 - d2 * g2) + (e2 * o2 - n2 * s2) * (l2 * v2 - c2 * g2) + (i2 * h2 - r2 * a2) * (u2 * p2 - d2 * f2) - (i2 * o2 - n2 * a2) * (u2 * v2 - c2 * f2) + (r2 * o2 - n2 * h2) * (u2 * g2 - l2 * f2);
}
function tt(t2, e2, i2) {
  var r2 = e2[0], n2 = e2[1], s2 = e2[2], a2 = e2[3], h2 = e2[4], o2 = e2[5], u2 = e2[6], l2 = e2[7], c2 = e2[8], d2 = e2[9], f2 = e2[10], g2 = e2[11], v2 = e2[12], p2 = e2[13], m2 = e2[14], y2 = e2[15], _2 = i2[0], b2 = i2[1], x2 = i2[2], E2 = i2[3];
  return t2[0] = _2 * r2 + b2 * h2 + x2 * c2 + E2 * v2, t2[1] = _2 * n2 + b2 * o2 + x2 * d2 + E2 * p2, t2[2] = _2 * s2 + b2 * u2 + x2 * f2 + E2 * m2, t2[3] = _2 * a2 + b2 * l2 + x2 * g2 + E2 * y2, _2 = i2[4], b2 = i2[5], x2 = i2[6], E2 = i2[7], t2[4] = _2 * r2 + b2 * h2 + x2 * c2 + E2 * v2, t2[5] = _2 * n2 + b2 * o2 + x2 * d2 + E2 * p2, t2[6] = _2 * s2 + b2 * u2 + x2 * f2 + E2 * m2, t2[7] = _2 * a2 + b2 * l2 + x2 * g2 + E2 * y2, _2 = i2[8], b2 = i2[9], x2 = i2[10], E2 = i2[11], t2[8] = _2 * r2 + b2 * h2 + x2 * c2 + E2 * v2, t2[9] = _2 * n2 + b2 * o2 + x2 * d2 + E2 * p2, t2[10] = _2 * s2 + b2 * u2 + x2 * f2 + E2 * m2, t2[11] = _2 * a2 + b2 * l2 + x2 * g2 + E2 * y2, _2 = i2[12], b2 = i2[13], x2 = i2[14], E2 = i2[15], t2[12] = _2 * r2 + b2 * h2 + x2 * c2 + E2 * v2, t2[13] = _2 * n2 + b2 * o2 + x2 * d2 + E2 * p2, t2[14] = _2 * s2 + b2 * u2 + x2 * f2 + E2 * m2, t2[15] = _2 * a2 + b2 * l2 + x2 * g2 + E2 * y2, t2;
}
function et(t2, e2) {
  var i2 = e2[0], r2 = e2[1], n2 = e2[2], s2 = e2[4], a2 = e2[5], h2 = e2[6], o2 = e2[8], u2 = e2[9], l2 = e2[10];
  return t2[0] = Math.hypot(i2, r2, n2), t2[1] = Math.hypot(s2, a2, h2), t2[2] = Math.hypot(o2, u2, l2), t2;
}
var it, rt = (it = [1, 1, 1], function(t2, e2) {
  var i2 = it;
  et(i2, e2);
  var r2 = 1 / i2[0], n2 = 1 / i2[1], s2 = 1 / i2[2], a2 = e2[0] * r2, h2 = e2[1] * n2, o2 = e2[2] * s2, u2 = e2[4] * r2, l2 = e2[5] * n2, c2 = e2[6] * s2, d2 = e2[8] * r2, f2 = e2[9] * n2, g2 = e2[10] * s2, v2 = a2 + l2 + g2, p2 = 0;
  return v2 > 0 ? (p2 = 2 * Math.sqrt(v2 + 1), t2[3] = 0.25 * p2, t2[0] = (c2 - f2) / p2, t2[1] = (d2 - o2) / p2, t2[2] = (h2 - u2) / p2) : a2 > l2 && a2 > g2 ? (p2 = 2 * Math.sqrt(1 + a2 - l2 - g2), t2[3] = (c2 - f2) / p2, t2[0] = 0.25 * p2, t2[1] = (h2 + u2) / p2, t2[2] = (d2 + o2) / p2) : l2 > g2 ? (p2 = 2 * Math.sqrt(1 + l2 - a2 - g2), t2[3] = (d2 - o2) / p2, t2[0] = (h2 + u2) / p2, t2[1] = 0.25 * p2, t2[2] = (c2 + f2) / p2) : (p2 = 2 * Math.sqrt(1 + g2 - a2 - l2), t2[3] = (h2 - u2) / p2, t2[0] = (d2 + o2) / p2, t2[1] = (c2 + f2) / p2, t2[2] = 0.25 * p2), t2;
});
function nt(t2, e2, i2) {
  return t2[0] = e2[0] + i2[0], t2[1] = e2[1] + i2[1], t2[2] = e2[2] + i2[2], t2[3] = e2[3] + i2[3], t2[4] = e2[4] + i2[4], t2[5] = e2[5] + i2[5], t2[6] = e2[6] + i2[6], t2[7] = e2[7] + i2[7], t2[8] = e2[8] + i2[8], t2[9] = e2[9] + i2[9], t2[10] = e2[10] + i2[10], t2[11] = e2[11] + i2[11], t2[12] = e2[12] + i2[12], t2[13] = e2[13] + i2[13], t2[14] = e2[14] + i2[14], t2[15] = e2[15] + i2[15], t2;
}
function st(t2, e2, i2) {
  return t2[0] = e2[0] - i2[0], t2[1] = e2[1] - i2[1], t2[2] = e2[2] - i2[2], t2[3] = e2[3] - i2[3], t2[4] = e2[4] - i2[4], t2[5] = e2[5] - i2[5], t2[6] = e2[6] - i2[6], t2[7] = e2[7] - i2[7], t2[8] = e2[8] - i2[8], t2[9] = e2[9] - i2[9], t2[10] = e2[10] - i2[10], t2[11] = e2[11] - i2[11], t2[12] = e2[12] - i2[12], t2[13] = e2[13] - i2[13], t2[14] = e2[14] - i2[14], t2[15] = e2[15] - i2[15], t2;
}
var at = function(t2) {
  function r2() {
    var t3, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, h2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, l2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1, c2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, d2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, f2 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, g2 = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, v2 = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, p2 = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0, m2 = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0, y2 = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : 0, _2 = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 0, b2 = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : 1;
    return i(this, r2), u(t3 = e(this, r2, [n2, s2, a2, h2, o2, l2, c2, d2, f2, g2, v2, p2, m2, y2, _2, b2]), t3);
  }
  return h(r2, v(Array)), n(r2, [{ key: "x", get: function() {
    return this[12];
  }, set: function(t3) {
    this[12] = t3;
  } }, { key: "y", get: function() {
    return this[13];
  }, set: function(t3) {
    this[13] = t3;
  } }, { key: "z", get: function() {
    return this[14];
  }, set: function(t3) {
    this[14] = t3;
  } }, { key: "w", get: function() {
    return this[15];
  }, set: function(t3) {
    this[15] = t3;
  } }, { key: "set", value: function(t3, e2, i2, r3, n2, s2, a2, h2, o2, u2, l2, c2, d2, f2, g2, v2) {
    return t3.length ? this.copy(t3) : (function(t4, e3, i3, r4, n3, s3, a3, h3, o3, u3, l3, c3, d3, f3, g3, v3, p2) {
      t4[0] = e3, t4[1] = i3, t4[2] = r4, t4[3] = n3, t4[4] = s3, t4[5] = a3, t4[6] = h3, t4[7] = o3, t4[8] = u3, t4[9] = l3, t4[10] = c3, t4[11] = d3, t4[12] = f3, t4[13] = g3, t4[14] = v3, t4[15] = p2;
    }(this, t3, e2, i2, r3, n2, s2, a2, h2, o2, u2, l2, c2, d2, f2, g2, v2), this);
  } }, { key: "translate", value: function(t3) {
    return function(t4, e2, i2) {
      var r3, n2, s2, a2, h2, o2, u2, l2, c2, d2, f2, g2, v2 = i2[0], p2 = i2[1], m2 = i2[2];
      e2 === t4 ? (t4[12] = e2[0] * v2 + e2[4] * p2 + e2[8] * m2 + e2[12], t4[13] = e2[1] * v2 + e2[5] * p2 + e2[9] * m2 + e2[13], t4[14] = e2[2] * v2 + e2[6] * p2 + e2[10] * m2 + e2[14], t4[15] = e2[3] * v2 + e2[7] * p2 + e2[11] * m2 + e2[15]) : (r3 = e2[0], n2 = e2[1], s2 = e2[2], a2 = e2[3], h2 = e2[4], o2 = e2[5], u2 = e2[6], l2 = e2[7], c2 = e2[8], d2 = e2[9], f2 = e2[10], g2 = e2[11], t4[0] = r3, t4[1] = n2, t4[2] = s2, t4[3] = a2, t4[4] = h2, t4[5] = o2, t4[6] = u2, t4[7] = l2, t4[8] = c2, t4[9] = d2, t4[10] = f2, t4[11] = g2, t4[12] = r3 * v2 + h2 * p2 + c2 * m2 + e2[12], t4[13] = n2 * v2 + o2 * p2 + d2 * m2 + e2[13], t4[14] = s2 * v2 + u2 * p2 + f2 * m2 + e2[14], t4[15] = a2 * v2 + l2 * p2 + g2 * m2 + e2[15]);
    }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t3), this;
  } }, { key: "rotate", value: function(t3, e2) {
    return function(t4, e3, i2, r3) {
      var n2, s2, a2, h2, o2, u2, l2, c2, d2, f2, g2, v2, p2, m2, y2, _2, b2, x2, E2, w2, M2, A2, k2, T2, R2 = r3[0], F2 = r3[1], S2 = r3[2], C2 = Math.hypot(R2, F2, S2);
      Math.abs(C2) < 1e-6 || (R2 *= C2 = 1 / C2, F2 *= C2, S2 *= C2, n2 = Math.sin(i2), a2 = 1 - (s2 = Math.cos(i2)), h2 = e3[0], o2 = e3[1], u2 = e3[2], l2 = e3[3], c2 = e3[4], d2 = e3[5], f2 = e3[6], g2 = e3[7], v2 = e3[8], p2 = e3[9], m2 = e3[10], y2 = e3[11], _2 = R2 * R2 * a2 + s2, b2 = F2 * R2 * a2 + S2 * n2, x2 = S2 * R2 * a2 - F2 * n2, E2 = R2 * F2 * a2 - S2 * n2, w2 = F2 * F2 * a2 + s2, M2 = S2 * F2 * a2 + R2 * n2, A2 = R2 * S2 * a2 + F2 * n2, k2 = F2 * S2 * a2 - R2 * n2, T2 = S2 * S2 * a2 + s2, t4[0] = h2 * _2 + c2 * b2 + v2 * x2, t4[1] = o2 * _2 + d2 * b2 + p2 * x2, t4[2] = u2 * _2 + f2 * b2 + m2 * x2, t4[3] = l2 * _2 + g2 * b2 + y2 * x2, t4[4] = h2 * E2 + c2 * w2 + v2 * M2, t4[5] = o2 * E2 + d2 * w2 + p2 * M2, t4[6] = u2 * E2 + f2 * w2 + m2 * M2, t4[7] = l2 * E2 + g2 * w2 + y2 * M2, t4[8] = h2 * A2 + c2 * k2 + v2 * T2, t4[9] = o2 * A2 + d2 * k2 + p2 * T2, t4[10] = u2 * A2 + f2 * k2 + m2 * T2, t4[11] = l2 * A2 + g2 * k2 + y2 * T2, e3 !== t4 && (t4[12] = e3[12], t4[13] = e3[13], t4[14] = e3[14], t4[15] = e3[15]));
    }(this, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this, t3, e2), this;
  } }, { key: "scale", value: function(t3) {
    return function(t4, e2, i2) {
      var r3 = i2[0], n2 = i2[1], s2 = i2[2];
      t4[0] = e2[0] * r3, t4[1] = e2[1] * r3, t4[2] = e2[2] * r3, t4[3] = e2[3] * r3, t4[4] = e2[4] * n2, t4[5] = e2[5] * n2, t4[6] = e2[6] * n2, t4[7] = e2[7] * n2, t4[8] = e2[8] * s2, t4[9] = e2[9] * s2, t4[10] = e2[10] * s2, t4[11] = e2[11] * s2, t4[12] = e2[12], t4[13] = e2[13], t4[14] = e2[14], t4[15] = e2[15];
    }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, "number" == typeof t3 ? [t3, t3, t3] : t3), this;
  } }, { key: "add", value: function(t3, e2) {
    return e2 ? nt(this, t3, e2) : nt(this, this, t3), this;
  } }, { key: "sub", value: function(t3, e2) {
    return e2 ? st(this, t3, e2) : st(this, this, t3), this;
  } }, { key: "multiply", value: function(t3, e2) {
    var i2, r3, n2;
    return t3.length ? e2 ? tt(this, t3, e2) : tt(this, this, t3) : (r3 = this, n2 = t3, (i2 = this)[0] = r3[0] * n2, i2[1] = r3[1] * n2, i2[2] = r3[2] * n2, i2[3] = r3[3] * n2, i2[4] = r3[4] * n2, i2[5] = r3[5] * n2, i2[6] = r3[6] * n2, i2[7] = r3[7] * n2, i2[8] = r3[8] * n2, i2[9] = r3[9] * n2, i2[10] = r3[10] * n2, i2[11] = r3[11] * n2, i2[12] = r3[12] * n2, i2[13] = r3[13] * n2, i2[14] = r3[14] * n2, i2[15] = r3[15] * n2), this;
  } }, { key: "identity", value: function() {
    var t3;
    return (t3 = this)[0] = 1, t3[1] = 0, t3[2] = 0, t3[3] = 0, t3[4] = 0, t3[5] = 1, t3[6] = 0, t3[7] = 0, t3[8] = 0, t3[9] = 0, t3[10] = 1, t3[11] = 0, t3[12] = 0, t3[13] = 0, t3[14] = 0, t3[15] = 1, this;
  } }, { key: "copy", value: function(t3) {
    var e2, i2;
    return i2 = t3, (e2 = this)[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[3], e2[4] = i2[4], e2[5] = i2[5], e2[6] = i2[6], e2[7] = i2[7], e2[8] = i2[8], e2[9] = i2[9], e2[10] = i2[10], e2[11] = i2[11], e2[12] = i2[12], e2[13] = i2[13], e2[14] = i2[14], e2[15] = i2[15], this;
  } }, { key: "fromPerspective", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return function(t4, e2, i2, r3, n2) {
      var s2 = 1 / Math.tan(e2 / 2), a2 = 1 / (r3 - n2);
      t4[0] = s2 / i2, t4[1] = 0, t4[2] = 0, t4[3] = 0, t4[4] = 0, t4[5] = s2, t4[6] = 0, t4[7] = 0, t4[8] = 0, t4[9] = 0, t4[10] = (n2 + r3) * a2, t4[11] = -1, t4[12] = 0, t4[13] = 0, t4[14] = 2 * n2 * r3 * a2, t4[15] = 0;
    }(this, t3.fov, t3.aspect, t3.near, t3.far), this;
  } }, { key: "fromOrthogonal", value: function(t3) {
    return function(t4, e2, i2, r3, n2, s2, a2) {
      var h2 = 1 / (e2 - i2), o2 = 1 / (r3 - n2), u2 = 1 / (s2 - a2);
      t4[0] = -2 * h2, t4[1] = 0, t4[2] = 0, t4[3] = 0, t4[4] = 0, t4[5] = -2 * o2, t4[6] = 0, t4[7] = 0, t4[8] = 0, t4[9] = 0, t4[10] = 2 * u2, t4[11] = 0, t4[12] = (e2 + i2) * h2, t4[13] = (n2 + r3) * o2, t4[14] = (a2 + s2) * u2, t4[15] = 1;
    }(this, t3.left, t3.right, t3.bottom, t3.top, t3.near, t3.far), this;
  } }, { key: "fromQuaternion", value: function(t3) {
    return function(t4, e2) {
      var i2 = e2[0], r3 = e2[1], n2 = e2[2], s2 = e2[3], a2 = i2 + i2, h2 = r3 + r3, o2 = n2 + n2, u2 = i2 * a2, l2 = r3 * a2, c2 = r3 * h2, d2 = n2 * a2, f2 = n2 * h2, g2 = n2 * o2, v2 = s2 * a2, p2 = s2 * h2, m2 = s2 * o2;
      t4[0] = 1 - c2 - g2, t4[1] = l2 + m2, t4[2] = d2 - p2, t4[3] = 0, t4[4] = l2 - m2, t4[5] = 1 - u2 - g2, t4[6] = f2 + v2, t4[7] = 0, t4[8] = d2 + p2, t4[9] = f2 - v2, t4[10] = 1 - u2 - c2, t4[11] = 0, t4[12] = 0, t4[13] = 0, t4[14] = 0, t4[15] = 1;
    }(this, t3), this;
  } }, { key: "setPosition", value: function(t3) {
    return this.x = t3[0], this.y = t3[1], this.z = t3[2], this;
  } }, { key: "inverse", value: function() {
    var t3, e2, i2, r3, n2, s2, a2, h2, o2, u2, l2, c2, d2, f2, g2, v2, p2, m2, y2, _2, b2, x2, E2, w2, M2, A2, k2, T2, R2, F2, S2;
    return t3 = this, i2 = (e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this)[0], r3 = e2[1], n2 = e2[2], s2 = e2[3], a2 = e2[4], h2 = e2[5], o2 = e2[6], u2 = e2[7], l2 = e2[8], c2 = e2[9], d2 = e2[10], f2 = e2[11], g2 = e2[12], v2 = e2[13], p2 = e2[14], m2 = e2[15], (S2 = (y2 = i2 * h2 - r3 * a2) * (F2 = d2 * m2 - f2 * p2) - (_2 = i2 * o2 - n2 * a2) * (R2 = c2 * m2 - f2 * v2) + (b2 = i2 * u2 - s2 * a2) * (T2 = c2 * p2 - d2 * v2) + (x2 = r3 * o2 - n2 * h2) * (k2 = l2 * m2 - f2 * g2) - (E2 = r3 * u2 - s2 * h2) * (A2 = l2 * p2 - d2 * g2) + (w2 = n2 * u2 - s2 * o2) * (M2 = l2 * v2 - c2 * g2)) && (S2 = 1 / S2, t3[0] = (h2 * F2 - o2 * R2 + u2 * T2) * S2, t3[1] = (n2 * R2 - r3 * F2 - s2 * T2) * S2, t3[2] = (v2 * w2 - p2 * E2 + m2 * x2) * S2, t3[3] = (d2 * E2 - c2 * w2 - f2 * x2) * S2, t3[4] = (o2 * k2 - a2 * F2 - u2 * A2) * S2, t3[5] = (i2 * F2 - n2 * k2 + s2 * A2) * S2, t3[6] = (p2 * b2 - g2 * w2 - m2 * _2) * S2, t3[7] = (l2 * w2 - d2 * b2 + f2 * _2) * S2, t3[8] = (a2 * R2 - h2 * k2 + u2 * M2) * S2, t3[9] = (r3 * k2 - i2 * R2 - s2 * M2) * S2, t3[10] = (g2 * E2 - v2 * b2 + m2 * y2) * S2, t3[11] = (c2 * b2 - l2 * E2 - f2 * y2) * S2, t3[12] = (h2 * A2 - a2 * T2 - o2 * M2) * S2, t3[13] = (i2 * T2 - r3 * A2 + n2 * M2) * S2, t3[14] = (v2 * _2 - g2 * x2 - p2 * y2) * S2, t3[15] = (l2 * x2 - c2 * _2 + d2 * y2) * S2), this;
  } }, { key: "compose", value: function(t3, e2, i2) {
    var r3, n2, s2, a2, h2, o2, u2, l2, c2, d2, f2, g2, v2, p2, m2, y2, _2, b2, x2, E2, w2, M2, A2;
    return n2 = e2, s2 = i2, a2 = this, h2 = (r3 = t3)[0], o2 = r3[1], u2 = r3[2], l2 = r3[3], g2 = h2 * (c2 = h2 + h2), v2 = h2 * (d2 = o2 + o2), p2 = h2 * (f2 = u2 + u2), m2 = o2 * d2, y2 = o2 * f2, _2 = u2 * f2, b2 = l2 * c2, x2 = l2 * d2, E2 = l2 * f2, w2 = s2[0], M2 = s2[1], A2 = s2[2], a2[0] = (1 - (m2 + _2)) * w2, a2[1] = (v2 + E2) * w2, a2[2] = (p2 - x2) * w2, a2[3] = 0, a2[4] = (v2 - E2) * M2, a2[5] = (1 - (g2 + _2)) * M2, a2[6] = (y2 + b2) * M2, a2[7] = 0, a2[8] = (p2 + x2) * A2, a2[9] = (y2 - b2) * A2, a2[10] = (1 - (g2 + m2)) * A2, a2[11] = 0, a2[12] = n2[0], a2[13] = n2[1], a2[14] = n2[2], a2[15] = 1, this;
  } }, { key: "decompose", value: function(t3, e2, i2) {
    return function(t4, e3, i3, r3) {
      var n2 = p([t4[0], t4[1], t4[2]]), s2 = p([t4[4], t4[5], t4[6]]), a2 = p([t4[8], t4[9], t4[10]]);
      J(t4) < 0 && (n2 = -n2), i3[0] = t4[12], i3[1] = t4[13], i3[2] = t4[14];
      var h2 = t4.slice(), o2 = 1 / n2, u2 = 1 / s2, l2 = 1 / a2;
      h2[0] *= o2, h2[1] *= o2, h2[2] *= o2, h2[4] *= u2, h2[5] *= u2, h2[6] *= u2, h2[8] *= l2, h2[9] *= l2, h2[10] *= l2, rt(e3, h2), r3[0] = n2, r3[1] = s2, r3[2] = a2;
    }(this, t3, e2, i2), this;
  } }, { key: "getRotation", value: function(t3) {
    return rt(t3, this), this;
  } }, { key: "getTranslation", value: function(t3) {
    var e2, i2;
    return i2 = this, (e2 = t3)[0] = i2[12], e2[1] = i2[13], e2[2] = i2[14], this;
  } }, { key: "getScaling", value: function(t3) {
    return et(t3, this), this;
  } }, { key: "getMaxScaleOnAxis", value: function() {
    return e2 = (t3 = this)[0], i2 = t3[1], r3 = t3[2], n2 = t3[4], s2 = t3[5], a2 = t3[6], h2 = t3[8], o2 = t3[9], u2 = t3[10], l2 = e2 * e2 + i2 * i2 + r3 * r3, c2 = n2 * n2 + s2 * s2 + a2 * a2, d2 = h2 * h2 + o2 * o2 + u2 * u2, Math.sqrt(Math.max(l2, c2, d2));
    var t3, e2, i2, r3, n2, s2, a2, h2, o2, u2, l2, c2, d2;
  } }, { key: "lookAt", value: function(t3, e2, i2) {
    return function(t4, e3, i3, r3) {
      var n2 = e3[0], s2 = e3[1], a2 = e3[2], h2 = r3[0], o2 = r3[1], u2 = r3[2], l2 = n2 - i3[0], c2 = s2 - i3[1], d2 = a2 - i3[2], f2 = l2 * l2 + c2 * c2 + d2 * d2;
      0 === f2 ? d2 = 1 : (l2 *= f2 = 1 / Math.sqrt(f2), c2 *= f2, d2 *= f2);
      var g2 = o2 * d2 - u2 * c2, v2 = u2 * l2 - h2 * d2, p2 = h2 * c2 - o2 * l2;
      0 == (f2 = g2 * g2 + v2 * v2 + p2 * p2) && (u2 ? h2 += 1e-6 : o2 ? u2 += 1e-6 : o2 += 1e-6, f2 = (g2 = o2 * d2 - u2 * c2) * g2 + (v2 = u2 * l2 - h2 * d2) * v2 + (p2 = h2 * c2 - o2 * l2) * p2), g2 *= f2 = 1 / Math.sqrt(f2), v2 *= f2, p2 *= f2, t4[0] = g2, t4[1] = v2, t4[2] = p2, t4[3] = 0, t4[4] = c2 * p2 - d2 * v2, t4[5] = d2 * g2 - l2 * p2, t4[6] = l2 * v2 - c2 * g2, t4[7] = 0, t4[8] = l2, t4[9] = c2, t4[10] = d2, t4[11] = 0, t4[12] = n2, t4[13] = s2, t4[14] = a2, t4[15] = 1;
    }(this, t3, e2, i2), this;
  } }, { key: "determinant", value: function() {
    return J(this);
  } }, { key: "fromArray", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this[0] = t3[e2], this[1] = t3[e2 + 1], this[2] = t3[e2 + 2], this[3] = t3[e2 + 3], this[4] = t3[e2 + 4], this[5] = t3[e2 + 5], this[6] = t3[e2 + 6], this[7] = t3[e2 + 7], this[8] = t3[e2 + 8], this[9] = t3[e2 + 9], this[10] = t3[e2 + 10], this[11] = t3[e2 + 11], this[12] = t3[e2 + 12], this[13] = t3[e2 + 13], this[14] = t3[e2 + 14], this[15] = t3[e2 + 15], this;
  } }, { key: "toArray", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return t3[e2] = this[0], t3[e2 + 1] = this[1], t3[e2 + 2] = this[2], t3[e2 + 3] = this[3], t3[e2 + 4] = this[4], t3[e2 + 5] = this[5], t3[e2 + 6] = this[6], t3[e2 + 7] = this[7], t3[e2 + 8] = this[8], t3[e2 + 9] = this[9], t3[e2 + 10] = this[10], t3[e2 + 11] = this[11], t3[e2 + 12] = this[12], t3[e2 + 13] = this[13], t3[e2 + 14] = this[14], t3[e2 + 15] = this[15], t3;
  } }]);
}();
var ht = new at(), ot = function(t2) {
  function r2() {
    var t3, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n2, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n2, h2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "YXZ";
    i(this, r2), (t3 = e(this, r2, [n2, s2, a2])).order = h2, t3.onChange = function() {
    }, t3._target = t3;
    var o2 = ["0", "1", "2"];
    return u(t3, new Proxy(t3, { set: function(t4, e2) {
      var i2 = Reflect.set.apply(Reflect, arguments);
      return i2 && o2.includes(e2) && t4.onChange(), i2;
    } }));
  }
  return h(r2, v(Array)), n(r2, [{ key: "x", get: function() {
    return this[0];
  }, set: function(t3) {
    this._target[0] = t3, this.onChange();
  } }, { key: "y", get: function() {
    return this[1];
  }, set: function(t3) {
    this._target[1] = t3, this.onChange();
  } }, { key: "z", get: function() {
    return this[2];
  }, set: function(t3) {
    this._target[2] = t3, this.onChange();
  } }, { key: "set", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t3;
    return t3.length ? this.copy(t3) : (this._target[0] = t3, this._target[1] = e2, this._target[2] = i2, this.onChange(), this);
  } }, { key: "copy", value: function(t3) {
    return this._target[0] = t3[0], this._target[1] = t3[1], this._target[2] = t3[2], this.onChange(), this;
  } }, { key: "reorder", value: function(t3) {
    return this._target.order = t3, this.onChange(), this;
  } }, { key: "fromRotationMatrix", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.order;
    return function(t4, e3) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "YXZ";
      "XYZ" === i2 ? (t4[1] = Math.asin(Math.min(Math.max(e3[8], -1), 1)), Math.abs(e3[8]) < 0.99999 ? (t4[0] = Math.atan2(-e3[9], e3[10]), t4[2] = Math.atan2(-e3[4], e3[0])) : (t4[0] = Math.atan2(e3[6], e3[5]), t4[2] = 0)) : "YXZ" === i2 ? (t4[0] = Math.asin(-Math.min(Math.max(e3[9], -1), 1)), Math.abs(e3[9]) < 0.99999 ? (t4[1] = Math.atan2(e3[8], e3[10]), t4[2] = Math.atan2(e3[1], e3[5])) : (t4[1] = Math.atan2(-e3[2], e3[0]), t4[2] = 0)) : "ZXY" === i2 ? (t4[0] = Math.asin(Math.min(Math.max(e3[6], -1), 1)), Math.abs(e3[6]) < 0.99999 ? (t4[1] = Math.atan2(-e3[2], e3[10]), t4[2] = Math.atan2(-e3[4], e3[5])) : (t4[1] = 0, t4[2] = Math.atan2(e3[1], e3[0]))) : "ZYX" === i2 ? (t4[1] = Math.asin(-Math.min(Math.max(e3[2], -1), 1)), Math.abs(e3[2]) < 0.99999 ? (t4[0] = Math.atan2(e3[6], e3[10]), t4[2] = Math.atan2(e3[1], e3[0])) : (t4[0] = 0, t4[2] = Math.atan2(-e3[4], e3[5]))) : "YZX" === i2 ? (t4[2] = Math.asin(Math.min(Math.max(e3[1], -1), 1)), Math.abs(e3[1]) < 0.99999 ? (t4[0] = Math.atan2(-e3[9], e3[5]), t4[1] = Math.atan2(-e3[2], e3[0])) : (t4[0] = 0, t4[1] = Math.atan2(e3[8], e3[10]))) : "XZY" === i2 && (t4[2] = Math.asin(-Math.min(Math.max(e3[4], -1), 1)), Math.abs(e3[4]) < 0.99999 ? (t4[0] = Math.atan2(e3[6], e3[5]), t4[1] = Math.atan2(e3[8], e3[0])) : (t4[0] = Math.atan2(-e3[9], e3[10]), t4[1] = 0));
    }(this._target, t3, e2), this.onChange(), this;
  } }, { key: "fromQuaternion", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.order, i2 = arguments.length > 2 ? arguments[2] : void 0;
    return ht.fromQuaternion(t3), this._target.fromRotationMatrix(ht, e2), i2 || this.onChange(), this;
  } }, { key: "fromArray", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this._target[0] = t3[e2], this._target[1] = t3[e2 + 1], this._target[2] = t3[e2 + 2], this;
  } }, { key: "toArray", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return t3[e2] = this[0], t3[e2 + 1] = this[1], t3[e2 + 2] = this[2], t3;
  } }]);
}(), ut = function() {
  return n(function t2() {
    var e2 = this;
    i(this, t2), this.parent = null, this.children = [], this.visible = true, this.matrix = new at(), this.worldMatrix = new at(), this.matrixAutoUpdate = true, this.worldMatrixNeedsUpdate = false, this.position = new R(), this.quaternion = new $(), this.scale = new R(1), this.rotation = new ot(), this.up = new R(0, 1, 0), this.rotation._target.onChange = function() {
      return e2.quaternion.fromEuler(e2.rotation, true);
    }, this.quaternion._target.onChange = function() {
      return e2.rotation.fromQuaternion(e2.quaternion, void 0, true);
    };
  }, [{ key: "setParent", value: function(t2) {
    var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this.parent && t2 !== this.parent && this.parent.removeChild(this, false), this.parent = t2, e2 && t2 && t2.addChild(this, false);
  } }, { key: "addChild", value: function(t2) {
    var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    ~this.children.indexOf(t2) || this.children.push(t2), e2 && t2.setParent(this, false);
  } }, { key: "removeChild", value: function(t2) {
    var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    ~this.children.indexOf(t2) && this.children.splice(this.children.indexOf(t2), 1), e2 && t2.setParent(null, false);
  } }, { key: "updateMatrixWorld", value: function(t2) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t2) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = false, t2 = true);
    for (var e2 = 0, i2 = this.children.length; e2 < i2; e2++) this.children[e2].updateMatrixWorld(t2);
  } }, { key: "updateMatrix", value: function() {
    this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = true;
  } }, { key: "traverse", value: function(t2) {
    if (!t2(this)) for (var e2 = 0, i2 = this.children.length; e2 < i2; e2++) this.children[e2].traverse(t2);
  } }, { key: "decompose", value: function() {
    this.matrix.decompose(this.quaternion._target, this.position, this.scale), this.rotation.fromQuaternion(this.quaternion);
  } }, { key: "lookAt", value: function(t2) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? this.matrix.lookAt(this.position, t2, this.up) : this.matrix.lookAt(t2, this.position, this.up), this.matrix.getRotation(this.quaternion._target), this.rotation.fromQuaternion(this.quaternion);
  } }]);
}(), lt = new at(), ct = new R(), dt = new R(), ft = function(t2) {
  function r2(t3) {
    var n2, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a2 = s2.near, h2 = void 0 === a2 ? 0.1 : a2, o2 = s2.far, u2 = void 0 === o2 ? 100 : o2, l2 = s2.fov, c2 = void 0 === l2 ? 45 : l2, d2 = s2.aspect, f2 = void 0 === d2 ? 1 : d2, g2 = s2.left, v2 = s2.right, p2 = s2.bottom, m2 = s2.top, y2 = s2.zoom, _2 = void 0 === y2 ? 1 : y2;
    return i(this, r2), n2 = e(this, r2), Object.assign(n2, { near: h2, far: u2, fov: c2, aspect: f2, left: g2, right: v2, bottom: p2, top: m2, zoom: _2 }), n2.projectionMatrix = new at(), n2.viewMatrix = new at(), n2.projectionViewMatrix = new at(), n2.worldPosition = new R(), n2.type = g2 || v2 ? "orthographic" : "perspective", "orthographic" === n2.type ? n2.orthographic() : n2.perspective(), n2;
  }
  return h(r2, ut), n(r2, [{ key: "perspective", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e2 = t3.near, i2 = void 0 === e2 ? this.near : e2, r3 = t3.far, n2 = void 0 === r3 ? this.far : r3, s2 = t3.fov, a2 = void 0 === s2 ? this.fov : s2, h2 = t3.aspect, o2 = void 0 === h2 ? this.aspect : h2;
    return Object.assign(this, { near: i2, far: n2, fov: a2, aspect: o2 }), this.projectionMatrix.fromPerspective({ fov: a2 * (Math.PI / 180), aspect: o2, near: i2, far: n2 }), this.type = "perspective", this;
  } }, { key: "orthographic", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e2 = t3.near, i2 = void 0 === e2 ? this.near : e2, r3 = t3.far, n2 = void 0 === r3 ? this.far : r3, s2 = t3.left, a2 = void 0 === s2 ? this.left || -1 : s2, h2 = t3.right, o2 = void 0 === h2 ? this.right || 1 : h2, u2 = t3.bottom, l2 = void 0 === u2 ? this.bottom || -1 : u2, c2 = t3.top, d2 = void 0 === c2 ? this.top || 1 : c2, f2 = t3.zoom, g2 = void 0 === f2 ? this.zoom : f2;
    return Object.assign(this, { near: i2, far: n2, left: a2, right: o2, bottom: l2, top: d2, zoom: g2 }), a2 /= g2, o2 /= g2, l2 /= g2, d2 /= g2, this.projectionMatrix.fromOrthogonal({ left: a2, right: o2, bottom: l2, top: d2, near: i2, far: n2 }), this.type = "orthographic", this;
  } }, { key: "updateMatrixWorld", value: function() {
    return s(a(r2.prototype), "updateMatrixWorld", this).call(this), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this;
  } }, { key: "lookAt", value: function(t3) {
    return s(a(r2.prototype), "lookAt", this).call(this, t3, true), this;
  } }, { key: "project", value: function(t3) {
    return t3.applyMatrix4(this.viewMatrix), t3.applyMatrix4(this.projectionMatrix), this;
  } }, { key: "unproject", value: function(t3) {
    return t3.applyMatrix4(lt.inverse(this.projectionMatrix)), t3.applyMatrix4(this.worldMatrix), this;
  } }, { key: "updateFrustum", value: function() {
    this.frustum || (this.frustum = [new R(), new R(), new R(), new R(), new R(), new R()]);
    var t3 = this.projectionViewMatrix;
    this.frustum[0].set(t3[3] - t3[0], t3[7] - t3[4], t3[11] - t3[8]).constant = t3[15] - t3[12], this.frustum[1].set(t3[3] + t3[0], t3[7] + t3[4], t3[11] + t3[8]).constant = t3[15] + t3[12], this.frustum[2].set(t3[3] + t3[1], t3[7] + t3[5], t3[11] + t3[9]).constant = t3[15] + t3[13], this.frustum[3].set(t3[3] - t3[1], t3[7] - t3[5], t3[11] - t3[9]).constant = t3[15] - t3[13], this.frustum[4].set(t3[3] - t3[2], t3[7] - t3[6], t3[11] - t3[10]).constant = t3[15] - t3[14], this.frustum[5].set(t3[3] + t3[2], t3[7] + t3[6], t3[11] + t3[10]).constant = t3[15] + t3[14];
    for (var e2 = 0; e2 < 6; e2++) {
      var i2 = 1 / this.frustum[e2].distance();
      this.frustum[e2].multiply(i2), this.frustum[e2].constant *= i2;
    }
  } }, { key: "frustumIntersectsMesh", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3.worldMatrix;
    if (!t3.geometry.attributes.position) return true;
    if (t3.geometry.bounds && t3.geometry.bounds.radius !== 1 / 0 || t3.geometry.computeBoundingSphere(), !t3.geometry.bounds) return true;
    var i2 = ct;
    i2.copy(t3.geometry.bounds.center), i2.applyMatrix4(e2);
    var r3 = t3.geometry.bounds.radius * e2.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(i2, r3);
  } }, { key: "frustumIntersectsSphere", value: function(t3, e2) {
    for (var i2 = dt, r3 = 0; r3 < 6; r3++) {
      var n2 = this.frustum[r3];
      if (i2.copy(n2).dot(t3) + n2.constant < -e2) return false;
    }
    return true;
  } }]);
}();
function gt(t2, e2, i2) {
  var r2 = e2[0], n2 = e2[1], s2 = e2[2], a2 = e2[3], h2 = e2[4], o2 = e2[5], u2 = e2[6], l2 = e2[7], c2 = e2[8], d2 = i2[0], f2 = i2[1], g2 = i2[2], v2 = i2[3], p2 = i2[4], m2 = i2[5], y2 = i2[6], _2 = i2[7], b2 = i2[8];
  return t2[0] = d2 * r2 + f2 * a2 + g2 * u2, t2[1] = d2 * n2 + f2 * h2 + g2 * l2, t2[2] = d2 * s2 + f2 * o2 + g2 * c2, t2[3] = v2 * r2 + p2 * a2 + m2 * u2, t2[4] = v2 * n2 + p2 * h2 + m2 * l2, t2[5] = v2 * s2 + p2 * o2 + m2 * c2, t2[6] = y2 * r2 + _2 * a2 + b2 * u2, t2[7] = y2 * n2 + _2 * h2 + b2 * l2, t2[8] = y2 * s2 + _2 * o2 + b2 * c2, t2;
}
var vt = function(t2) {
  function r2() {
    var t3, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, h2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, l2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, c2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, d2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, f2 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1;
    return i(this, r2), u(t3 = e(this, r2, [n2, s2, a2, h2, o2, l2, c2, d2, f2]), t3);
  }
  return h(r2, v(Array)), n(r2, [{ key: "set", value: function(t3, e2, i2, r3, n2, s2, a2, h2, o2) {
    return t3.length ? this.copy(t3) : (function(t4, e3, i3, r4, n3, s3, a3, h3, o3, u2) {
      t4[0] = e3, t4[1] = i3, t4[2] = r4, t4[3] = n3, t4[4] = s3, t4[5] = a3, t4[6] = h3, t4[7] = o3, t4[8] = u2;
    }(this, t3, e2, i2, r3, n2, s2, a2, h2, o2), this);
  } }, { key: "translate", value: function(t3) {
    return function(t4, e2, i2) {
      var r3 = e2[0], n2 = e2[1], s2 = e2[2], a2 = e2[3], h2 = e2[4], o2 = e2[5], u2 = e2[6], l2 = e2[7], c2 = e2[8], d2 = i2[0], f2 = i2[1];
      t4[0] = r3, t4[1] = n2, t4[2] = s2, t4[3] = a2, t4[4] = h2, t4[5] = o2, t4[6] = d2 * r3 + f2 * a2 + u2, t4[7] = d2 * n2 + f2 * h2 + l2, t4[8] = d2 * s2 + f2 * o2 + c2;
    }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t3), this;
  } }, { key: "rotate", value: function(t3) {
    var e2, i2, r3, n2, s2, a2, h2, o2, u2, l2, c2, d2, f2, g2;
    return e2 = this, r3 = t3, n2 = (i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)[0], s2 = i2[1], a2 = i2[2], h2 = i2[3], o2 = i2[4], u2 = i2[5], l2 = i2[6], c2 = i2[7], d2 = i2[8], f2 = Math.sin(r3), g2 = Math.cos(r3), e2[0] = g2 * n2 + f2 * h2, e2[1] = g2 * s2 + f2 * o2, e2[2] = g2 * a2 + f2 * u2, e2[3] = g2 * h2 - f2 * n2, e2[4] = g2 * o2 - f2 * s2, e2[5] = g2 * u2 - f2 * a2, e2[6] = l2, e2[7] = c2, e2[8] = d2, this;
  } }, { key: "scale", value: function(t3) {
    return function(t4, e2, i2) {
      var r3 = i2[0], n2 = i2[1];
      t4[0] = r3 * e2[0], t4[1] = r3 * e2[1], t4[2] = r3 * e2[2], t4[3] = n2 * e2[3], t4[4] = n2 * e2[4], t4[5] = n2 * e2[5], t4[6] = e2[6], t4[7] = e2[7], t4[8] = e2[8];
    }(this, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, t3), this;
  } }, { key: "multiply", value: function(t3, e2) {
    return e2 ? gt(this, t3, e2) : gt(this, this, t3), this;
  } }, { key: "identity", value: function() {
    var t3;
    return (t3 = this)[0] = 1, t3[1] = 0, t3[2] = 0, t3[3] = 0, t3[4] = 1, t3[5] = 0, t3[6] = 0, t3[7] = 0, t3[8] = 1, this;
  } }, { key: "copy", value: function(t3) {
    var e2, i2;
    return i2 = t3, (e2 = this)[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[3], e2[4] = i2[4], e2[5] = i2[5], e2[6] = i2[6], e2[7] = i2[7], e2[8] = i2[8], this;
  } }, { key: "fromMatrix4", value: function(t3) {
    var e2, i2;
    return i2 = t3, (e2 = this)[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[4], e2[4] = i2[5], e2[5] = i2[6], e2[6] = i2[8], e2[7] = i2[9], e2[8] = i2[10], this;
  } }, { key: "fromQuaternion", value: function(t3) {
    return function(t4, e2) {
      var i2 = e2[0], r3 = e2[1], n2 = e2[2], s2 = e2[3], a2 = i2 + i2, h2 = r3 + r3, o2 = n2 + n2, u2 = i2 * a2, l2 = r3 * a2, c2 = r3 * h2, d2 = n2 * a2, f2 = n2 * h2, g2 = n2 * o2, v2 = s2 * a2, p2 = s2 * h2, m2 = s2 * o2;
      t4[0] = 1 - c2 - g2, t4[3] = l2 - m2, t4[6] = d2 + p2, t4[1] = l2 + m2, t4[4] = 1 - u2 - g2, t4[7] = f2 - v2, t4[2] = d2 - p2, t4[5] = f2 + v2, t4[8] = 1 - u2 - c2;
    }(this, t3), this;
  } }, { key: "fromBasis", value: function(t3, e2, i2) {
    return this.set(t3[0], t3[1], t3[2], e2[0], e2[1], e2[2], i2[0], i2[1], i2[2]), this;
  } }, { key: "inverse", value: function() {
    var t3, e2, i2, r3, n2, s2, a2, h2, o2, u2, l2, c2, d2, f2, g2;
    return t3 = this, i2 = (e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this)[0], r3 = e2[1], n2 = e2[2], s2 = e2[3], a2 = e2[4], h2 = e2[5], o2 = e2[6], u2 = e2[7], l2 = e2[8], (g2 = i2 * (c2 = l2 * a2 - h2 * u2) + r3 * (d2 = -l2 * s2 + h2 * o2) + n2 * (f2 = u2 * s2 - a2 * o2)) && (g2 = 1 / g2, t3[0] = c2 * g2, t3[1] = (-l2 * r3 + n2 * u2) * g2, t3[2] = (h2 * r3 - n2 * a2) * g2, t3[3] = d2 * g2, t3[4] = (l2 * i2 - n2 * o2) * g2, t3[5] = (-h2 * i2 + n2 * s2) * g2, t3[6] = f2 * g2, t3[7] = (-u2 * i2 + r3 * o2) * g2, t3[8] = (a2 * i2 - r3 * s2) * g2), this;
  } }, { key: "getNormalMatrix", value: function(t3) {
    var e2, i2, r3, n2, s2, a2, h2, o2, u2, l2, c2, d2, f2, g2, v2, p2, m2, y2, _2, b2, x2, E2, w2, M2, A2, k2, T2, R2, F2, S2, C2;
    return e2 = this, r3 = (i2 = t3)[0], n2 = i2[1], s2 = i2[2], a2 = i2[3], h2 = i2[4], o2 = i2[5], u2 = i2[6], l2 = i2[7], c2 = i2[8], d2 = i2[9], f2 = i2[10], g2 = i2[11], v2 = i2[12], p2 = i2[13], m2 = i2[14], y2 = i2[15], (C2 = (_2 = r3 * o2 - n2 * h2) * (S2 = f2 * y2 - g2 * m2) - (b2 = r3 * u2 - s2 * h2) * (F2 = d2 * y2 - g2 * p2) + (x2 = r3 * l2 - a2 * h2) * (R2 = d2 * m2 - f2 * p2) + (E2 = n2 * u2 - s2 * o2) * (T2 = c2 * y2 - g2 * v2) - (w2 = n2 * l2 - a2 * o2) * (k2 = c2 * m2 - f2 * v2) + (M2 = s2 * l2 - a2 * u2) * (A2 = c2 * p2 - d2 * v2)) && (C2 = 1 / C2, e2[0] = (o2 * S2 - u2 * F2 + l2 * R2) * C2, e2[1] = (u2 * T2 - h2 * S2 - l2 * k2) * C2, e2[2] = (h2 * F2 - o2 * T2 + l2 * A2) * C2, e2[3] = (s2 * F2 - n2 * S2 - a2 * R2) * C2, e2[4] = (r3 * S2 - s2 * T2 + a2 * k2) * C2, e2[5] = (n2 * T2 - r3 * F2 - a2 * A2) * C2, e2[6] = (p2 * M2 - m2 * w2 + y2 * E2) * C2, e2[7] = (m2 * x2 - v2 * M2 - y2 * b2) * C2, e2[8] = (v2 * w2 - p2 * x2 + y2 * _2) * C2), this;
  } }]);
}(), pt = 0, mt = function(t2) {
  function r2(t3) {
    var n2, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a2 = s2.geometry, h2 = s2.program, o2 = s2.mode, u2 = void 0 === o2 ? t3.TRIANGLES : o2, l2 = s2.frustumCulled, c2 = void 0 === l2 || l2, d2 = s2.renderOrder, f2 = void 0 === d2 ? 0 : d2;
    return i(this, r2), n2 = e(this, r2), t3.canvas, n2.gl = t3, n2.id = pt++, n2.geometry = a2, n2.program = h2, n2.mode = u2, n2.frustumCulled = c2, n2.renderOrder = f2, n2.modelViewMatrix = new at(), n2.normalMatrix = new vt(), n2.beforeRenderCallbacks = [], n2.afterRenderCallbacks = [], n2;
  }
  return h(r2, ut), n(r2, [{ key: "onBeforeRender", value: function(t3) {
    return this.beforeRenderCallbacks.push(t3), this;
  } }, { key: "onAfterRender", value: function(t3) {
    return this.afterRenderCallbacks.push(t3), this;
  } }, { key: "draw", value: function() {
    var t3 = this, e2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).camera;
    e2 && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, { modelMatrix: { value: null }, viewMatrix: { value: null }, modelViewMatrix: { value: null }, normalMatrix: { value: null }, projectionMatrix: { value: null }, cameraPosition: { value: null } }), this.program.uniforms.projectionMatrix.value = e2.projectionMatrix, this.program.uniforms.cameraPosition.value = e2.worldPosition, this.program.uniforms.viewMatrix.value = e2.viewMatrix, this.modelViewMatrix.multiply(e2.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix), this.beforeRenderCallbacks.forEach(function(i3) {
      return i3 && i3({ mesh: t3, camera: e2 });
    });
    var i2 = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({ flipFaces: i2 }), this.geometry.draw({ mode: this.mode, program: this.program }), this.afterRenderCallbacks.forEach(function(i3) {
      return i3 && i3({ mesh: t3, camera: e2 });
    });
  } }]);
}(), yt = new Uint8Array(4);
function _t(t2) {
  return !(t2 & t2 - 1);
}
var bt = 1, xt = function() {
  return n(function t2(e2) {
    var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = r2.image, s2 = r2.target, a2 = void 0 === s2 ? e2.TEXTURE_2D : s2, h2 = r2.type, o2 = void 0 === h2 ? e2.UNSIGNED_BYTE : h2, u2 = r2.format, l2 = void 0 === u2 ? e2.RGBA : u2, c2 = r2.internalFormat, d2 = void 0 === c2 ? l2 : c2, f2 = r2.wrapS, g2 = void 0 === f2 ? e2.CLAMP_TO_EDGE : f2, v2 = r2.wrapT, p2 = void 0 === v2 ? e2.CLAMP_TO_EDGE : v2, m2 = r2.generateMipmaps, y2 = void 0 === m2 || m2, _2 = r2.minFilter, b2 = void 0 === _2 ? y2 ? e2.NEAREST_MIPMAP_LINEAR : e2.LINEAR : _2, x2 = r2.magFilter, E2 = void 0 === x2 ? e2.LINEAR : x2, w2 = r2.premultiplyAlpha, M2 = void 0 !== w2 && w2, A2 = r2.unpackAlignment, k2 = void 0 === A2 ? 4 : A2, T2 = r2.flipY, R2 = void 0 === T2 ? a2 == e2.TEXTURE_2D : T2, F2 = r2.anisotropy, S2 = void 0 === F2 ? 0 : F2, C2 = r2.level, P2 = void 0 === C2 ? 0 : C2, D2 = r2.width, O2 = r2.height, B2 = void 0 === O2 ? D2 : O2;
    i(this, t2), this.gl = e2, this.id = bt++, this.image = n2, this.target = a2, this.type = o2, this.format = l2, this.internalFormat = d2, this.minFilter = b2, this.magFilter = E2, this.wrapS = g2, this.wrapT = p2, this.generateMipmaps = y2, this.premultiplyAlpha = M2, this.unpackAlignment = k2, this.flipY = R2, this.anisotropy = Math.min(S2, this.gl.renderer.parameters.maxAnisotropy), this.level = P2, this.width = D2, this.height = B2, this.texture = this.gl.createTexture(), this.store = { image: null }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0;
  }, [{ key: "bind", value: function() {
    this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id);
  } }, { key: "update", value: function() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e2 = !(this.image === this.store.image && !this.needsUpdate);
    if ((e2 || this.glState.textureUnits[t2] !== this.id) && (this.gl.renderer.activeTexture(t2), this.bind()), e2) {
      if (this.needsUpdate = false, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
        if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP) for (var i2 = 0; i2 < 6; i2++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i2, this.level, this.internalFormat, this.format, this.type, this.image[i2]);
        else if (ArrayBuffer.isView(this.image)) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
        else if (this.image.isCompressedTexture) for (var r2 = 0; r2 < this.image.length; r2++) this.gl.compressedTexImage2D(this.target, r2, this.internalFormat, this.image[r2].width, this.image[r2].height, 0, this.image[r2].data);
        else this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
        this.generateMipmaps && (this.gl.renderer.isWebgl2 || _t(this.image.width) && _t(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = false, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR)), this.onUpdate && this.onUpdate();
      } else if (this.target === this.gl.TEXTURE_CUBE_MAP) for (var n2 = 0; n2 < 6; n2++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + n2, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, yt);
      else this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, yt);
      this.store.image = this.image;
    }
  } }]);
}(), Et = function() {
  return n(function t2(e2) {
    var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = r2.width, s2 = void 0 === n2 ? e2.canvas.width : n2, a2 = r2.height, h2 = void 0 === a2 ? e2.canvas.height : a2, o2 = r2.target, u2 = void 0 === o2 ? e2.FRAMEBUFFER : o2, l2 = r2.color, c2 = void 0 === l2 ? 1 : l2, d2 = r2.depth, f2 = void 0 === d2 || d2, g2 = r2.stencil, v2 = void 0 !== g2 && g2, p2 = r2.depthTexture, m2 = void 0 !== p2 && p2, y2 = r2.wrapS, _2 = void 0 === y2 ? e2.CLAMP_TO_EDGE : y2, b2 = r2.wrapT, x2 = void 0 === b2 ? e2.CLAMP_TO_EDGE : b2, E2 = r2.minFilter, w2 = void 0 === E2 ? e2.LINEAR : E2, M2 = r2.magFilter, A2 = void 0 === M2 ? w2 : M2, k2 = r2.type, T2 = void 0 === k2 ? e2.UNSIGNED_BYTE : k2, R2 = r2.format, F2 = void 0 === R2 ? e2.RGBA : R2, S2 = r2.internalFormat, C2 = void 0 === S2 ? F2 : S2, P2 = r2.unpackAlignment, D2 = r2.premultiplyAlpha;
    i(this, t2), this.gl = e2, this.width = s2, this.height = h2, this.depth = f2, this.buffer = this.gl.createFramebuffer(), this.target = u2, this.gl.renderer.bindFramebuffer(this), this.textures = [];
    for (var O2 = [], B2 = 0; B2 < c2; B2++) this.textures.push(new xt(e2, { width: s2, height: h2, wrapS: _2, wrapT: x2, minFilter: w2, magFilter: A2, type: T2, format: F2, internalFormat: C2, unpackAlignment: P2, premultiplyAlpha: D2, flipY: false, generateMipmaps: false })), this.textures[B2].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + B2, this.gl.TEXTURE_2D, this.textures[B2].texture, 0), O2.push(this.gl.COLOR_ATTACHMENT0 + B2);
    O2.length > 1 && this.gl.renderer.drawBuffers(O2), this.texture = this.textures[0], m2 && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new xt(e2, { width: s2, height: h2, minFilter: this.gl.NEAREST, magFilter: this.gl.NEAREST, format: this.gl.DEPTH_COMPONENT, internalFormat: e2.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT, type: this.gl.UNSIGNED_INT }), this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (f2 && !v2 && (this.depthBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, s2, h2), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)), v2 && !f2 && (this.stencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, s2, h2), this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)), f2 && v2 && (this.depthStencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, s2, h2), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))), this.gl.renderer.bindFramebuffer({ target: this.target });
  }, [{ key: "setSize", value: function(t2, e2) {
    if (this.width !== t2 || this.height !== e2) {
      this.width = t2, this.height = e2, this.gl.renderer.bindFramebuffer(this);
      for (var i2 = 0; i2 < this.textures.length; i2++) this.textures[i2].width = t2, this.textures[i2].height = e2, this.textures[i2].needsUpdate = true, this.textures[i2].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i2, this.gl.TEXTURE_2D, this.textures[i2].texture, 0);
      this.depthTexture ? (this.depthTexture.width = t2, this.depthTexture.height = e2, this.depthTexture.needsUpdate = true, this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (this.depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, t2, e2)), this.stencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, t2, e2)), this.depthStencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, t2, e2))), this.gl.renderer.bindFramebuffer({ target: this.target });
    }
  } }]);
}(), wt = { black: "#000000", white: "#ffffff", red: "#ff0000", green: "#00ff00", blue: "#0000ff", fuchsia: "#ff00ff", cyan: "#00ffff", yellow: "#ffff00", orange: "#ff8000" };
function Mt(t2) {
  4 === t2.length && (t2 = t2[0] + t2[1] + t2[1] + t2[2] + t2[2] + t2[3] + t2[3]);
  var e2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t2);
  return [parseInt(e2[1], 16) / 255, parseInt(e2[2], 16) / 255, parseInt(e2[3], 16) / 255];
}
function At(t2) {
  return [((t2 = parseInt(t2)) >> 16 & 255) / 255, (t2 >> 8 & 255) / 255, (255 & t2) / 255];
}
function kt(t2) {
  return void 0 === t2 ? [0, 0, 0] : 3 === arguments.length ? arguments : isNaN(t2) ? "#" === t2[0] ? Mt(t2) : wt[t2.toLowerCase()] ? Mt(wt[t2.toLowerCase()]) : [0, 0, 0] : At(t2);
}
var Tt = Object.freeze({ __proto__: null, hexToRGB: Mt, numberToRGB: At, parseColor: kt }), Rt = function(t2) {
  function r2(t3) {
    var n2;
    return i(this, r2), Array.isArray(t3) ? u(n2, n2 = e(this, r2, c(t3))) : u(n2, n2 = e(this, r2, c(kt.apply(Tt, arguments))));
  }
  return h(r2, v(Array)), n(r2, [{ key: "r", get: function() {
    return this[0];
  }, set: function(t3) {
    this[0] = t3;
  } }, { key: "g", get: function() {
    return this[1];
  }, set: function(t3) {
    this[1] = t3;
  } }, { key: "b", get: function() {
    return this[2];
  }, set: function(t3) {
    this[2] = t3;
  } }, { key: "set", value: function(t3) {
    return Array.isArray(t3) ? this.copy(t3) : this.copy(kt.apply(Tt, arguments));
  } }, { key: "copy", value: function(t3) {
    return this[0] = t3[0], this[1] = t3[1], this[2] = t3[2], this;
  } }]);
}();
function Ft(t2, e2, i2) {
  return t2[0] = e2[0] + i2[0], t2[1] = e2[1] + i2[1], t2;
}
function St(t2, e2, i2) {
  return t2[0] = e2[0] - i2[0], t2[1] = e2[1] - i2[1], t2;
}
function Ct(t2, e2, i2) {
  return t2[0] = e2[0] * i2, t2[1] = e2[1] * i2, t2;
}
function Pt(t2) {
  var e2 = t2[0], i2 = t2[1];
  return Math.sqrt(e2 * e2 + i2 * i2);
}
function Dt(t2, e2) {
  return t2[0] * e2[1] - t2[1] * e2[0];
}
var Ot = function(t2) {
  function r2() {
    var t3, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n2;
    return i(this, r2), u(t3 = e(this, r2, [n2, s2]), t3);
  }
  return h(r2, v(Array)), n(r2, [{ key: "x", get: function() {
    return this[0];
  }, set: function(t3) {
    this[0] = t3;
  } }, { key: "y", get: function() {
    return this[1];
  }, set: function(t3) {
    this[1] = t3;
  } }, { key: "set", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3;
    return t3.length ? this.copy(t3) : (function(t4, e3, i2) {
      t4[0] = e3, t4[1] = i2;
    }(this, t3, e2), this);
  } }, { key: "copy", value: function(t3) {
    var e2, i2;
    return i2 = t3, (e2 = this)[0] = i2[0], e2[1] = i2[1], this;
  } }, { key: "add", value: function(t3, e2) {
    return e2 ? Ft(this, t3, e2) : Ft(this, this, t3), this;
  } }, { key: "sub", value: function(t3, e2) {
    return e2 ? St(this, t3, e2) : St(this, this, t3), this;
  } }, { key: "multiply", value: function(t3) {
    var e2, i2, r3;
    return t3.length ? (i2 = this, r3 = t3, (e2 = this)[0] = i2[0] * r3[0], e2[1] = i2[1] * r3[1]) : Ct(this, this, t3), this;
  } }, { key: "divide", value: function(t3) {
    var e2, i2, r3;
    return t3.length ? (i2 = this, r3 = t3, (e2 = this)[0] = i2[0] / r3[0], e2[1] = i2[1] / r3[1]) : Ct(this, this, 1 / t3), this;
  } }, { key: "inverse", value: function() {
    var t3, e2;
    return e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this, (t3 = this)[0] = 1 / e2[0], t3[1] = 1 / e2[1], this;
  } }, { key: "len", value: function() {
    return Pt(this);
  } }, { key: "distance", value: function(t3) {
    return t3 ? (e2 = this, r3 = (i2 = t3)[0] - e2[0], n2 = i2[1] - e2[1], Math.sqrt(r3 * r3 + n2 * n2)) : Pt(this);
    var e2, i2, r3, n2;
  } }, { key: "squaredLen", value: function() {
    return this.squaredDistance();
  } }, { key: "squaredDistance", value: function(t3) {
    return t3 ? (e2 = this, r3 = (i2 = t3)[0] - e2[0], n2 = i2[1] - e2[1], r3 * r3 + n2 * n2) : function(t4) {
      var e3 = t4[0], i3 = t4[1];
      return e3 * e3 + i3 * i3;
    }(this);
    var e2, i2, r3, n2;
  } }, { key: "negate", value: function() {
    var t3, e2;
    return e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this, (t3 = this)[0] = -e2[0], t3[1] = -e2[1], this;
  } }, { key: "cross", value: function(t3, e2) {
    return e2 ? Dt(t3, e2) : Dt(this, t3);
  } }, { key: "scale", value: function(t3) {
    return Ct(this, this, t3), this;
  } }, { key: "normalize", value: function() {
    var t3, e2, i2, r3, n2;
    return t3 = this, i2 = (e2 = this)[0], r3 = e2[1], (n2 = i2 * i2 + r3 * r3) > 0 && (n2 = 1 / Math.sqrt(n2)), t3[0] = e2[0] * n2, t3[1] = e2[1] * n2, this;
  } }, { key: "dot", value: function(t3) {
    return i2 = t3, (e2 = this)[0] * i2[0] + e2[1] * i2[1];
    var e2, i2;
  } }, { key: "equals", value: function(t3) {
    return i2 = t3, (e2 = this)[0] === i2[0] && e2[1] === i2[1];
    var e2, i2;
  } }, { key: "applyMatrix3", value: function(t3) {
    var e2, i2, r3, n2, s2;
    return e2 = this, r3 = t3, n2 = (i2 = this)[0], s2 = i2[1], e2[0] = r3[0] * n2 + r3[3] * s2 + r3[6], e2[1] = r3[1] * n2 + r3[4] * s2 + r3[7], this;
  } }, { key: "applyMatrix4", value: function(t3) {
    var e2, i2, r3, n2, s2;
    return e2 = this, r3 = t3, n2 = (i2 = this)[0], s2 = i2[1], e2[0] = r3[0] * n2 + r3[4] * s2 + r3[12], e2[1] = r3[1] * n2 + r3[5] * s2 + r3[13], this;
  } }, { key: "lerp", value: function(t3, e2) {
    return function(t4, e3, i2, r3) {
      var n2 = e3[0], s2 = e3[1];
      t4[0] = n2 + r3 * (i2[0] - n2), t4[1] = s2 + r3 * (i2[1] - s2);
    }(this, this, t3, e2), this;
  } }, { key: "clone", value: function() {
    return new r2(this[0], this[1]);
  } }, { key: "fromArray", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this[0] = t3[e2], this[1] = t3[e2 + 1], this;
  } }, { key: "toArray", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return t3[e2] = this[0], t3[e2 + 1] = this[1], t3;
  } }]);
}(), Bt = function(t2) {
  function r2() {
    var t3, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n2, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n2, h2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n2;
    return i(this, r2), u(t3 = e(this, r2, [n2, s2, a2, h2]), t3);
  }
  return h(r2, v(Array)), n(r2, [{ key: "x", get: function() {
    return this[0];
  }, set: function(t3) {
    this[0] = t3;
  } }, { key: "y", get: function() {
    return this[1];
  }, set: function(t3) {
    this[1] = t3;
  } }, { key: "z", get: function() {
    return this[2];
  }, set: function(t3) {
    this[2] = t3;
  } }, { key: "w", get: function() {
    return this[3];
  }, set: function(t3) {
    this[3] = t3;
  } }, { key: "set", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t3, r3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t3;
    return t3.length ? this.copy(t3) : (q(this, t3, e2, i2, r3), this);
  } }, { key: "copy", value: function(t3) {
    return G(this, t3), this;
  } }, { key: "normalize", value: function() {
    return W(this, this), this;
  } }, { key: "multiply", value: function(t3) {
    var e2, i2, r3;
    return i2 = this, r3 = t3, (e2 = this)[0] = i2[0] * r3, e2[1] = i2[1] * r3, e2[2] = i2[2] * r3, e2[3] = i2[3] * r3, this;
  } }, { key: "dot", value: function(t3) {
    return V(this, t3);
  } }, { key: "fromArray", value: function(t3) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return this[0] = t3[e2], this[1] = t3[e2 + 1], this[2] = t3[e2 + 2], this[3] = t3[e2 + 3], this;
  } }, { key: "toArray", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return t3[e2] = this[0], t3[e2 + 1] = this[1], t3[e2 + 2] = this[2], t3[e2 + 3] = this[3], t3;
  } }]);
}(), Nt = function(t2) {
  function r2(t3) {
    var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s2 = n2.width, a2 = void 0 === s2 ? 1 : s2, h2 = n2.height, o2 = void 0 === h2 ? 1 : h2, u2 = n2.widthSegments, l2 = void 0 === u2 ? 1 : u2, c2 = n2.heightSegments, d2 = void 0 === c2 ? 1 : c2, f2 = n2.attributes, g2 = void 0 === f2 ? {} : f2;
    i(this, r2);
    var v2 = l2, p2 = d2, m2 = (v2 + 1) * (p2 + 1), y2 = v2 * p2 * 6, _2 = new Float32Array(3 * m2), b2 = new Float32Array(3 * m2), x2 = new Float32Array(2 * m2), E2 = y2 > 65536 ? new Uint32Array(y2) : new Uint16Array(y2);
    return r2.buildPlane(_2, b2, x2, E2, a2, o2, 0, v2, p2), Object.assign(g2, { position: { size: 3, data: _2 }, normal: { size: 3, data: b2 }, uv: { size: 2, data: x2 }, index: { data: E2 } }), e(this, r2, [t3, g2]);
  }
  return h(r2, D), n(r2, null, [{ key: "buildPlane", value: function(t3, e2, i2, r3, n2, s2, a2, h2, o2) {
    for (var u2 = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, l2 = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, c2 = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 2, d2 = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1, f2 = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : -1, g2 = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 0, v2 = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : 0, p2 = g2, m2 = n2 / h2, y2 = s2 / o2, _2 = 0; _2 <= o2; _2++) for (var b2 = _2 * y2 - s2 / 2, x2 = 0; x2 <= h2; x2++, g2++) {
      var E2 = x2 * m2 - n2 / 2;
      if (t3[3 * g2 + u2] = E2 * d2, t3[3 * g2 + l2] = b2 * f2, t3[3 * g2 + c2] = a2 / 2, e2[3 * g2 + u2] = 0, e2[3 * g2 + l2] = 0, e2[3 * g2 + c2] = a2 >= 0 ? 1 : -1, i2[2 * g2] = x2 / h2, i2[2 * g2 + 1] = 1 - _2 / o2, _2 !== o2 && x2 !== h2) {
        var w2 = p2 + x2 + _2 * (h2 + 1), M2 = p2 + x2 + (_2 + 1) * (h2 + 1), A2 = p2 + x2 + (_2 + 1) * (h2 + 1) + 1, k2 = p2 + x2 + _2 * (h2 + 1) + 1;
        r3[6 * v2] = w2, r3[6 * v2 + 1] = M2, r3[6 * v2 + 2] = k2, r3[6 * v2 + 3] = M2, r3[6 * v2 + 4] = A2, r3[6 * v2 + 5] = k2, v2++;
      }
    }
  } }]);
}();
!function() {
  !function(t2, e2, i2) {
    var r2, n2 = 256, s2 = "random", a2 = i2.pow(n2, 6), h2 = i2.pow(2, 52), o2 = 2 * h2, u2 = n2 - 1;
    function l2(u3, l3, f2) {
      var m2 = [], y2 = v2(g2((l3 = 1 == l3 ? { entropy: true } : l3 || {}).entropy ? [u3, p2(e2)] : null == u3 ? function() {
        try {
          var i3;
          return r2 && (i3 = r2.randomBytes) ? i3 = i3(n2) : (i3 = new Uint8Array(n2), (t2.crypto || t2.msCrypto).getRandomValues(i3)), p2(i3);
        } catch (i4) {
          var s3 = t2.navigator, a3 = s3 && s3.plugins;
          return [+/* @__PURE__ */ new Date(), t2, a3, t2.screen, p2(e2)];
        }
      }() : u3, 3), m2), _2 = new c2(m2), b2 = function() {
        for (var t3 = _2.g(6), e3 = a2, i3 = 0; t3 < h2; ) t3 = (t3 + i3) * n2, e3 *= n2, i3 = _2.g(1);
        for (; t3 >= o2; ) t3 /= 2, e3 /= 2, i3 >>>= 1;
        return (t3 + i3) / e3;
      };
      return b2.int32 = function() {
        return 0 | _2.g(4);
      }, b2.quick = function() {
        return _2.g(4) / 4294967296;
      }, b2.double = b2, v2(p2(_2.S), e2), (l3.pass || f2 || function(t3, e3, r3, n3) {
        return n3 && (n3.S && d2(n3, _2), t3.state = function() {
          return d2(_2, {});
        }), r3 ? (i2[s2] = t3, e3) : t3;
      })(b2, y2, "global" in l3 ? l3.global : this == i2, l3.state);
    }
    function c2(t3) {
      var e3, i3 = t3.length, r3 = this, s3 = 0, a3 = r3.i = r3.j = 0, h3 = r3.S = [];
      for (i3 || (t3 = [i3++]); s3 < n2; ) h3[s3] = s3++;
      for (s3 = 0; s3 < n2; s3++) h3[s3] = h3[a3 = u2 & a3 + t3[s3 % i3] + (e3 = h3[s3])], h3[a3] = e3;
      (r3.g = function(t4) {
        for (var e4, i4 = 0, s4 = r3.i, a4 = r3.j, h4 = r3.S; t4--; ) e4 = h4[s4 = u2 & s4 + 1], i4 = i4 * n2 + h4[u2 & (h4[s4] = h4[a4 = u2 & a4 + e4]) + (h4[a4] = e4)];
        return r3.i = s4, r3.j = a4, i4;
      })(n2);
    }
    function d2(t3, e3) {
      return e3.i = t3.i, e3.j = t3.j, e3.S = t3.S.slice(), e3;
    }
    function g2(t3, e3) {
      var i3, r3 = [], n3 = f(t3);
      if (e3 && "object" == n3) for (i3 in t3) try {
        r3.push(g2(t3[i3], e3 - 1));
      } catch (t4) {
      }
      return r3.length ? r3 : "string" == n3 ? t3 : t3 + "\0";
    }
    function v2(t3, e3) {
      for (var i3, r3 = t3 + "", n3 = 0; n3 < r3.length; ) e3[u2 & n3] = u2 & (i3 ^= 19 * e3[u2 & n3]) + r3.charCodeAt(n3++);
      return p2(e3);
    }
    function p2(t3) {
      return String.fromCharCode.apply(0, t3);
    }
    if (v2(i2.random(), e2), "object" == ("undefined" == typeof module ? "undefined" : f(module)) && module.exports) {
      module.exports = l2;
      try {
        r2 = require("crypto");
      } catch (t3) {
      }
    } else "function" == typeof define && define.amd ? define(function() {
      return l2;
    }) : i2["seed" + s2] = l2;
  }("undefined" != typeof self ? self : this, [], Math);
}();
var Ut = function() {
  return n(function t2() {
    var e2, r2, n2, s2 = this, a2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, h2 = arguments.length > 1 ? arguments[1] : void 0;
    i(this, t2), e2 = this, n2 = function() {
      requestAnimationFrame(s2._update), s2.loop && (s2.frame++, s2._animate()), s2.gl.clearColor(0, 0, 0, 1), s2.renderer.render({ scene: s2.scene, camera: s2.camera }), s2.isRenderTarget && (s2.gl.clearColor(0, 0, 0, 1), s2.renderer.render({ scene: s2.rttPlane, camera: s2.rttCamera, target: s2.rtt }));
    }, (r2 = d(r2 = "_update")) in e2 ? Object.defineProperty(e2, r2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[r2] = n2, this.params = a2, this.options = {}, this.loop = a2.loop || false, this.colors_num = h2, this.colors_init = a2.colors || [], this.palette = [], this.colors(this.colors_init), this.seed = a2.seed || 1e3, this.rng = new Math.seedrandom(this.seed), this.frame = 0, this.parentDom = a2.dom ? document.getElementById(a2.dom) : document.body, "static" === window.getComputedStyle(this.parentDom).position && (this.parentDom.style.position = "relative");
    var o2 = this._getParentRect(this.parentDom);
    this.canvasW = this.originW = o2.w, this.canvasH = this.originH = o2.h, this.originRatio = this.originW / this.originH, this.resize_mode = a2.resize_mode, this.renderer = new j(), this.renderer.setSize(this.canvasW, this.canvasH), this.gl = this.renderer.gl, this.gl.canvas.id = "colorbgcanvas", this.gl.canvas.style.position = "absolute", this.gl.canvas.style.top = 0, this.gl.canvas.style.left = 0, this.gl.canvas.style.zIndex = 0, this.parentDom.appendChild(this.gl.canvas), this.camera = new ft(this.gl, { near: 0.1, far: 10001, left: -this.canvasW / 2, right: this.canvasW / 2, bottom: -this.canvasH / 2, top: this.canvasH / 2, zoom: 1 }), this.camera.position.z = 8e3, this.isRenderTarget = false, this.scene = new ut(), window.addEventListener("resize", function() {
      s2.resize();
    });
  }, [{ key: "_getParentRect", value: function(t2) {
    var e2 = t2;
    return { w: e2.getBoundingClientRect().width, h: e2.getBoundingClientRect().height };
  } }, { key: "colors", value: function(t2) {
    var e2 = !!this.palette.length;
    if (this.palette = [], 0 == t2.length) this.palette = ["#F00911", "#F3AA00", "#F6EE0B", "#39E90D", "#195ED2", "#F00911"];
    else if (t2.length < this.colors_num) {
      for (var i2 = c(t2), r2 = i2.length; r2 < 6; r2++) {
        var n2 = r2 % i2.length;
        t2.push(i2[n2]);
      }
      this.palette = t2;
    } else for (var s2 = 0; s2 < this.colors_num; s2++) this.palette.push(t2[s2]);
    e2 && this._resetColors();
  } }, { key: "start", value: function() {
    this._size(), this._initRtt(), this._resetSeed(), this._makeMaterial(), this._make(), requestAnimationFrame(this._update);
  } }, { key: "resize", value: function() {
    var t2 = this._getParentRect(this.parentDom);
    this.canvasW = t2.w, this.canvasH = t2.h, this.canvasRatio = this.canvasW / this.canvasH, this.renderer.setSize(this.canvasW, this.canvasH);
    var e2 = 1, i2 = this.canvasW / this.canvasH;
    i2 > this.originRatio ? this.canvasW > this.originW && (e2 = this.canvasW / this.originW) : i2 < this.originRatio && this.canvasH > this.originH && (e2 = this.canvasH / this.originH), this.camera.orthographic({ near: 0.1, far: 10001, left: -this.canvasW / 2, right: this.canvasW / 2, bottom: -this.canvasH / 2, top: this.canvasH / 2, zoom: e2 });
  } }, { key: "reset", value: function(t2) {
    this.seed = t2 || this.seed, this.rng = new Math.seedrandom(this.seed), this._delete(), this._resetSeed(), this._make();
  } }, { key: "_delete", value: function() {
    for (var t2 = this.scene.children.length - 1; t2 >= 0; t2--) this.scene.removeChild(this.scene.children[t2]);
  } }, { key: "_size", value: function() {
  } }, { key: "_initRtt", value: function() {
  } }, { key: "_resetSeed", value: function() {
  } }, { key: "_animate", value: function() {
  } }, { key: "destroy", value: function() {
    this._delete(), this.parentDom.removeChild(this.gl.canvas);
  } }]);
}();
function It(t2, e2, i2, r2) {
  this.anchor = new R(t2, e2, i2), this.effectradius = r2, this.map = /* @__PURE__ */ new Map(), this.posAttribute = null, this.surround = function(t3) {
    var e3;
    this.posAttribute = t3.getPosition();
    for (var i3 = 0, r3 = this.posAttribute.count; i3 < r3; i3++) {
      var n2 = i3 % 100;
      if (!(0 == n2 || 99 == n2 || i3 < 100 || i3 > 9900 && i3 < 1e4)) {
        var s2 = new R(this.posAttribute.getX(i3), this.posAttribute.getY(i3), this.posAttribute.getZ(i3));
        if ((e3 = s2.distance(this.anchor)) < this.effectradius) {
          var a2 = new R(this.posAttribute.getX(n2), this.posAttribute.getY(n2), this.posAttribute.getZ(n2)), h2 = new R(this.posAttribute.getX(n2 + 9900), this.posAttribute.getY(n2 + 9900), this.posAttribute.getZ(n2 + 9900)), o2 = s2.distance(a2), u2 = s2.distance(h2), l2 = 5 / Math.min(o2, u2), c2 = e3 / this.effectradius, d2 = 1 / (0.25 * Math.sqrt(6.28)) * Math.exp(-c2 * c2 / 0.125) / 1.6;
          d2 -= l2, this.map.set(i3, d2);
        }
      }
    }
  }, this.moveTo = function(t3, e3, i3) {
    var r3 = this.posAttribute;
    if (this.anchor.x !== t3 || this.anchor.y !== e3 || this.anchor.z !== i3) {
      var n2 = t3 - this.anchor.x, s2 = e3 - this.anchor.y, a2 = i3 - this.anchor.z;
      this.map.forEach(function(t4, e4, i4) {
        var h2 = r3.getX(e4), o2 = r3.getY(e4), u2 = r3.getZ(e4);
        t4 > 1e-3 && r3.setXYZ(e4, h2 + n2 * t4, o2 + s2 * t4, u2 + a2 * t4);
      }), this.anchor.set(t3, e3, i3);
    }
  };
}
var Lt = function(t2) {
  function r2() {
    var t3, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return i(this, r2), (t3 = e(this, r2, [n2, 6])).name = "aesthetic-fluid", t3.options.radius_inner = n2.radius_inner || 0.1, t3.options.radius_outer = n2.radius_outer || 0.3, t3.morphdata = { 1: { anchorX: 240, anchorY: -200, anchorZ: 0, anchorRadius: 900, moveToX: 260, moveToY: 160, moveToZ: 400 }, 2: { anchorX: -240, anchorY: 200, anchorZ: 0, anchorRadius: 900, moveToX: -260, moveToY: -160, moveToZ: 400 } }, t3.start(), t3;
  }
  return h(r2, Ut), n(r2, [{ key: "_size", value: function() {
    this.size = this.canvasW > this.canvasH ? this.canvasW : this.canvasH;
  } }, { key: "_initRtt", value: function() {
    this.rtt = new Et(this.gl, { width: 512, height: 512 }), this.rttCamera = new ft(this.gl, { left: -0.5, right: 0.5, bottom: -0.5, top: 0.5, zoom: 1 }), this.rttCamera.position.z = 1, this.rttPlaneGeo = new Nt(this.gl, {}), this.rttProgram = new N(this.gl, { vertex: "\n				attribute vec3 position;\n				attribute vec2 uv;\n				uniform mat4 modelViewMatrix;\n				uniform mat4 projectionMatrix;\n				varying vec2 vUv;\n				void main() {\n					vUv = uv;\n					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n				}\n			", fragment: "\n				#ifdef GL_ES\n				precision mediump float;\n				#endif\n\n				#define TWO_PI 6.28318530718\n\n				uniform vec2 u_resolution;\n				uniform float u_time;\n\n				uniform vec3 u_color_0;\n				uniform vec3 u_color_1;\n				uniform vec3 u_color_2;\n				uniform vec3 u_color_3;\n				uniform vec3 u_color_4;\n				uniform vec3 u_color_5;\n				uniform vec4 u_dye_0;\n				uniform vec4 u_dye_1;\n				uniform vec4 u_dye_2;\n				uniform vec4 u_dye_3;\n				uniform vec4 u_dye_4;\n				uniform vec4 u_dye_5;\n\n				vec4 blurDot ( vec3 color, vec2 st, vec2 pos, float inner, float outer ) {\n					float pct = distance( st, pos );   \n					vec2 dist = st - pos;\n					float alpha = 1. - smoothstep( inner, outer, pct );\n						\n					return vec4( color.rgb, alpha );\n				}\n\n				void main(){\n					vec2 st = gl_FragCoord.xy/u_resolution;\n					vec3 color = vec3(1.0);        \n\n					vec4 dot_0 = blurDot( u_color_0, st, u_dye_0.xy, u_dye_0[2], u_dye_0[3] );\n					vec4 dot_1 = blurDot( u_color_1, st, u_dye_1.xy, u_dye_1[2], u_dye_1[3] );\n					vec4 dot_2 = blurDot( u_color_2, st, u_dye_2.xy, u_dye_2[2], u_dye_2[3] );\n					vec4 dot_3 = blurDot( u_color_3, st, u_dye_3.xy, u_dye_3[2], u_dye_3[3] );\n					vec4 dot_4 = blurDot( u_color_4, st, u_dye_4.xy, u_dye_4[2], u_dye_4[3] );\n					vec4 dot_5 = blurDot( u_color_5, st, u_dye_5.xy, u_dye_5[2], u_dye_5[3] );\n					\n\n					color = mix( u_color_0, u_color_1, st.x );    \n					color = mix( color, u_color_2, st.x*st.x + -0.040 );\n\n					color = mix( color, dot_0.rgb, dot_0.a );\n					color = mix( color, dot_1.rgb, dot_1.a );\n					color = mix( color, dot_2.rgb, dot_2.a );\n					color = mix( color, dot_3.rgb, dot_3.a );\n					color = mix( color, dot_4.rgb, dot_4.a );\n					color = mix( color, dot_5.rgb, dot_5.a );\n\n					gl_FragColor = vec4(color,1.0);\n				}\n			", uniforms: { u_time: { value: 0 }, u_resolution: { value: new Ot(512, 512) }, u_color_0: { value: new Rt(this.palette[0]) }, u_color_1: { value: new Rt(this.palette[1]) }, u_color_2: { value: new Rt(this.palette[2]) }, u_color_3: { value: new Rt(this.palette[3]) }, u_color_4: { value: new Rt(this.palette[4]) }, u_color_5: { value: new Rt(this.palette[5]) }, u_dye_0: { value: new Bt(0.3, 0.8, 0.1, 0.7) }, u_dye_1: { value: new Bt(0.7, 0.8, 0.1, 0.7) }, u_dye_2: { value: new Bt(0.7, 0.2, 0.1, 0.7) }, u_dye_3: { value: new Bt(0.3, 0.2, 0.1, 0.7) }, u_dye_4: { value: new Bt(0.1, 0.5, 0.1, 0.45) }, u_dye_5: { value: new Bt(0.9, 0.5, 0.1, 0.45) } } }), this.rttPlane = new mt(this.gl, { geometry: this.rttPlaneGeo, program: this.rttProgram }), this.isRenderTarget = true;
  } }, { key: "_resetSeed", value: function() {
    for (var t3 = 0; t3 < 6; t3++) {
      var e2 = this.rng(), i2 = this.rng(), r3 = this.rng() * this.options.radius_inner + this.options.radius_inner, n2 = this.rng() * this.options.radius_outer + this.options.radius_outer, s2 = new Bt(e2, i2, r3, n2);
      this.rttProgram.uniforms["u_dye_" + t3] = { value: s2 };
    }
  } }, { key: "_makeMaterial", value: function() {
    this.planeShader = new N(this.gl, { vertex: "\n                attribute vec3 position;\n                attribute vec2 uv;\n\n                uniform mat4 modelViewMatrix;\n                uniform mat4 projectionMatrix;\n                varying vec2 vUv;\n\n                void main() {\n                    vUv = uv;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                }\n            ", fragment: "\n				precision highp float;\n				uniform sampler2D tMap;\n				uniform float uTime;\n				uniform float uMagnitude;\n\n				varying vec2 vUv;\n				\n				const float speed = 15.0;\n				\n				void main() {\n					vec2 wavyCoord;\n					wavyCoord.s = vUv.s + (sin(uTime+vUv.t*speed) * uMagnitude);\n					wavyCoord.t = vUv.t + (cos(uTime+vUv.s*speed) * uMagnitude);\n					vec4 frameColor = texture2D(tMap, wavyCoord);\n					gl_FragColor = frameColor;\n				}\n            ", uniforms: { tMap: { value: this.rtt.texture }, uTime: { value: 0 }, uMagnitude: { value: 0.15 } } });
  } }, { key: "_make", value: function() {
    var t3 = new Nt(this.gl, { width: this.size, height: this.size, widthSegments: 99, heightSegments: 99 });
    new mt(this.gl, { geometry: t3, program: this.planeShader }).setParent(this.scene);
    var e2 = this.morphdata;
    for (var i2 in e2) {
      var r3 = e2[i2], n2 = r3.anchorX, s2 = r3.anchorY, a2 = r3.anchorRadius, h2 = r3.moveToX, o2 = r3.moveToY, u2 = new It(n2, s2, 0, a2);
      u2.surround(t3), u2.moveTo(h2, o2, 400);
    }
  } }, { key: "_resetColors", value: function() {
    this.rttProgram.uniforms.u_color_0.value = new Rt(this.palette[0]), this.rttProgram.uniforms.u_color_1.value = new Rt(this.palette[1]), this.rttProgram.uniforms.u_color_2.value = new Rt(this.palette[2]), this.rttProgram.uniforms.u_color_3.value = new Rt(this.palette[3]), this.rttProgram.uniforms.u_color_4.value = new Rt(this.palette[4]), this.rttProgram.uniforms.u_color_5.value = new Rt(this.palette[5]);
  } }, { key: "_animate", value: function() {
    this.planeShader.uniforms.uTime.value = this.frame / 50;
  } }, { key: "update", value: function(t3, e2) {
    if ("scale" === t3) this.planeShader.uniforms.uMagnitude.value = parseFloat(e2);
  } }]);
}();
export {
  Lt as L
};
