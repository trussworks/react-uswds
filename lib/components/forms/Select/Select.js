import { jsx as i } from "react/jsx-runtime";
import { c as l } from "../../../index-DIxK0V-G.js";
const S = ({
  id: e,
  name: c,
  className: r,
  inputRef: t,
  children: o,
  validationStatus: s,
  ...a
}) => {
  const u = l(
    "usa-select",
    {
      "usa-input--error": s === "error",
      "usa-input--success": s === "success"
    },
    r
  );
  return /* @__PURE__ */ i(
    "select",
    {
      "data-testid": "Select",
      className: u,
      id: e,
      name: c,
      ref: t,
      ...a,
      children: o
    }
  );
};
export {
  S as default
};
//# sourceMappingURL=Select.js.map
