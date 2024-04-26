import { jsx as f } from "react/jsx-runtime";
import { c } from "../../../index-DIxK0V-G.js";
const u = ({
  onSubmit: s,
  children: a,
  className: r,
  large: o,
  search: m,
  ...t
}) => {
  const e = c(
    {
      "usa-form": !m,
      "usa-form--large": o
    },
    r
  );
  return /* @__PURE__ */ f(
    "form",
    {
      "data-testid": "form",
      className: e,
      onSubmit: s,
      ...t,
      children: a
    }
  );
};
export {
  u as default
};
//# sourceMappingURL=Form.js.map
