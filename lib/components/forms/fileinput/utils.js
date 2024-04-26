const o = (t) => t.replace(/[^a-z0-9]/g, function(r) {
  const e = r.charCodeAt(0);
  return e === 32 ? "-" : e >= 65 && e <= 90 ? `img_${r.toLowerCase()}` : `__${e.toString(16).slice(-4)}`;
});
export {
  o as makeSafeForID
};
//# sourceMappingURL=utils.js.map
