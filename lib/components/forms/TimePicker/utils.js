const c = (t) => {
  let n;
  if (t) {
    const [e, o] = t.split(":").map((s) => {
      let r;
      const u = parseInt(s, 10);
      return Number.isNaN(u) || (r = u), r;
    });
    e != null && o != null && (n = e * 60 + o);
  }
  return n;
}, a = (t) => {
  const n = t % 60, e = Math.floor(t / 60), o = e % 12 || 12, s = e < 12 ? "am" : "pm";
  return {
    minute: n,
    hour24: e,
    hour12: o,
    ampm: s
  };
}, i = (t, n) => `0000${t}`.slice(-n), p = (t, n, e) => {
  const o = [];
  for (let s = t; s <= n; s += e) {
    const { minute: r, hour24: u, hour12: m, ampm: l } = a(s);
    o.push({
      value: `${i(u, 2)}:${i(r, 2)}`,
      label: `${m}:${i(r, 2)}${l}`
    });
  }
  return o;
};
export {
  a as getTimeContext,
  p as getTimeOptions,
  i as padZeros,
  c as parseTimeString
};
//# sourceMappingURL=utils.js.map
