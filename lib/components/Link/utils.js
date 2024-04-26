import { c as t } from "../../index-DIxK0V-G.js";
function o(n) {
  return "asCustom" in n;
}
const r = (n) => {
  n.key === " " && n.target && (n.preventDefault(), n.target.click());
};
function u(n, s) {
  return n === "unstyled" ? s : t(
    "usa-link",
    { "usa-link--external": n === "external", "usa-nav__link": n === "nav" },
    s
  );
}
export {
  r as handleKeyDown,
  o as isCustomProps,
  u as linkClasses
};
//# sourceMappingURL=utils.js.map
