import { jsx as a } from "react/jsx-runtime";
import { c as n } from "../../index-DIxK0V-G.js";
const o = ({
  items: e,
  isSubnav: s = !1,
  className: i,
  ...t
}) => {
  const d = n(
    {
      "usa-sidenav": !s,
      "usa-sidenav__sublist": s
    },
    i
  );
  return /* @__PURE__ */ a("ul", { className: d, "data-testid": "sidenav", ...t, children: e.map((l, m) => /* @__PURE__ */ a("li", { className: "usa-sidenav__item", children: l }, `sidenav_item_${m}`)) });
};
export {
  o as default
};
//# sourceMappingURL=SideNav.js.map
