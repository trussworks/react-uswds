import { jsx as t } from "react/jsx-runtime";
import n from "react";
import { c as m } from "../../index-DIxK0V-G.js";
const d = ({
  className: e,
  children: s,
  type: r = "default",
  ...a
}) => {
  const o = m(
    "usa-button-group",
    {
      "usa-button-group--segmented": r == "segmented"
    },
    e
  );
  return /* @__PURE__ */ t("ul", { className: o, ...a, children: n.Children.map(s, (u) => /* @__PURE__ */ t("li", { className: "usa-button-group__item", children: u })) });
};
export {
  d as default
};
//# sourceMappingURL=ButtonGroup.js.map
