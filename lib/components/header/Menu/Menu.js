import { jsx as s } from "react/jsx-runtime";
import a from "../NavList/NavList.js";
const u = ({
  className: t,
  items: o,
  isOpen: e,
  type: r,
  ...n
}) => /* @__PURE__ */ s(
  a,
  {
    className: t,
    items: o,
    type: r || "subnav",
    hidden: !e,
    ...n
  }
);
export {
  u as default
};
//# sourceMappingURL=Menu.js.map
