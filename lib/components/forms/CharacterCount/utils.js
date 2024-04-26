const s = (e) => Array.from(e).length, i = (e, t) => {
  const a = `${t} characters allowed`, c = "$0 characters left", n = "$0 character left", o = "$0 character over limit", l = "$0 characters over limit", r = t - e;
  switch (r) {
    case t:
      return a;
    case 1:
      return n.replace("$0", "1");
    case -1:
      return o.replace("$0", "1");
    default:
      return r >= 0 ? c.replace("$0", r.toString()) : l.replace("$0", Math.abs(r).toString());
  }
};
export {
  s as defaultCharacterCount,
  i as defaultMessage
};
//# sourceMappingURL=utils.js.map
