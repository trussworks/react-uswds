import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { c } from "../../../index-DIxK0V-G.js";
import m from "../../header/NavList/NavList.js";
const f = ({
  isOpen: r = !1,
  links: o,
  onToggle: s
}) => {
  const [t, ...a] = o, n = c(
    "usa-footer__primary-content usa-footer__primary-content--collapsible",
    { hidden: !r }
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ i("section", { className: n, onClick: s, onKeyPress: s, children: [
      /* @__PURE__ */ e("h4", { className: "usa-footer__primary-link", children: t }),
      /* @__PURE__ */ e(m, { type: "footerSecondary", items: a })
    ] })
  );
};
export {
  f as default
};
//# sourceMappingURL=FooterExtendedNavListSection.js.map
