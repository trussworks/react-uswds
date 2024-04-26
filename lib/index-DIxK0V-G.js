function u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var i = {}.hasOwnProperty;
    function s() {
      for (var t = "", r = 0; r < arguments.length; r++) {
        var n = arguments[r];
        n && (t = o(t, a(n)));
      }
      return t;
    }
    function a(t) {
      if (typeof t == "string" || typeof t == "number")
        return t;
      if (typeof t != "object")
        return "";
      if (Array.isArray(t))
        return s.apply(null, t);
      if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
        return t.toString();
      var r = "";
      for (var n in t)
        i.call(t, n) && t[n] && (r = o(r, n));
      return r;
    }
    function o(t, r) {
      return r ? t ? t + " " + r : t + r : t;
    }
    e.exports ? (s.default = s, e.exports = s) : window.classNames = s;
  })();
})(f);
var c = f.exports;
const p = /* @__PURE__ */ u(c);
export {
  p as c
};
//# sourceMappingURL=index-DIxK0V-G.js.map
