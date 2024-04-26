const m = ".*{{query}}.*", E = (e, t = "", p = {}) => {
  const n = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  let r = e.replace(/{{(.*?)}}/g, (s, g) => {
    const c = g.trim(), u = p[c];
    if (c !== "query" && u) {
      const o = new RegExp(u, "i"), a = t.match(o);
      return a ? n(a[1]) : "";
    }
    return n(t);
  });
  return r = "^(?:" + r + ")$", new RegExp(r, "i");
};
var x = /* @__PURE__ */ ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(x || {});
export {
  m as DEFAULT_FILTER,
  x as Direction,
  E as generateDynamicRegExp
};
//# sourceMappingURL=utils.js.map
