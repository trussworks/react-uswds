function k(i, d, t) {
  const s = t || d, n = t ? i.replace(/\W/g, "") : i.replace(/\D/g, ""), f = (e) => !Number.isNaN(parseInt(e, 10)), p = (e) => e ? e.match(/[A-Z]/i) : !1, u = "_#dDmMyY9", g = "A";
  let a = "";
  for (let e = 0, r = 0; e < s.length; e++) {
    const m = f(n[r]), c = p(n[r]), o = u.indexOf(s[e]) >= 0, l = g.indexOf(s[e]) >= 0;
    if (o && m || t && l && c)
      a += n[r++];
    else {
      if (n[r] === void 0 || // if no characters left and the pattern is non-special character
      !t && !m && o || t && (l && !c || o && !c))
        break;
      a += s[e];
    }
  }
  return a;
}
export {
  k as maskString
};
//# sourceMappingURL=utils.js.map
