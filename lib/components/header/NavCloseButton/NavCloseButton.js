import { jsx as t } from "react/jsx-runtime";
import { c as n } from "../../../index-DIxK0V-G.js";
import r from "../../Icon/Icons.js";
const u = ({
  onClick: a,
  className: s,
  ...o
}) => {
  const e = n("usa-nav__close", s);
  return /* @__PURE__ */ t(
    "button",
    {
      className: e,
      onClick: a,
      "data-testid": "navCloseButton",
      "aria-label": "Close Navigation Menu",
      ...o,
      type: "button",
      children: /* @__PURE__ */ t(r.Close, { size: 3, "aria-hidden": "true" })
    }
  );
};
export {
  u as default
};
//# sourceMappingURL=NavCloseButton.js.map
