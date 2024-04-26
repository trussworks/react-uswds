import { jsxs as f, jsx as e } from "react/jsx-runtime";
import v from "../FooterExtendedNavList/FooterExtendedNavList.js";
import { c as a } from "../../../index-DIxK0V-G.js";
import { isExtendedNavLinks as i } from "./utils.js";
const b = ({
  className: r,
  size: o,
  isMobile: m,
  links: s,
  ...n
}) => {
  const t = o === "big", l = o === "medium", c = o === "slim", d = a("usa-footer__nav", r), g = a(
    "desktop:grid-col-auto usa-footer__primary-content",
    {
      "mobile-lg:grid-col-4": t || l,
      "mobile-lg:grid-col-6": c
    }
  );
  return /* @__PURE__ */ f("nav", { className: d, ...n, children: [
    t && i(s) && /* @__PURE__ */ e(v, { isMobile: m, nestedLinks: s }),
    !i(s) && /* @__PURE__ */ e("ul", { className: "grid-row grid-gap", children: s.map((p, u) => /* @__PURE__ */ e("li", { className: g, children: p }, `navLink-${u}`)) })
  ] });
};
export {
  b as default
};
//# sourceMappingURL=FooterNav.js.map
