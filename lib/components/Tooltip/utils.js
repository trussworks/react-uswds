const i = (t, e = window, n = document.documentElement) => {
  const o = t.getBoundingClientRect();
  return o.top >= 0 && o.left >= 0 && o.bottom <= (e.innerHeight || n.clientHeight) && o.right <= (e.innerWidth || n.clientWidth);
}, r = (t, e) => parseInt(window.getComputedStyle(t).getPropertyValue(e), 10), s = (t, e, n) => r(n, `margin-${t}`) > 0 ? e - r(n, `margin-${t}`) : e;
function c(t) {
  return "asCustom" in t;
}
export {
  s as calculateMarginOffset,
  c as isCustomProps,
  i as isElementInViewport
};
//# sourceMappingURL=utils.js.map
