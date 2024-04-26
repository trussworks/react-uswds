import { jsx as n } from "react/jsx-runtime";
import { c as x } from "../../../index-DIxK0V-G.js";
const f = ({
  id: a,
  name: s,
  className: t,
  error: e,
  success: r,
  children: c,
  inputRef: o,
  ...u
}) => {
  const m = x(
    "usa-textarea",
    {
      "usa-input--error": e,
      "usa-input--success": r
    },
    t
  );
  return /* @__PURE__ */ n(
    "textarea",
    {
      "data-testid": "textarea",
      className: m,
      id: a,
      name: s,
      ref: o,
      ...u,
      children: c
    }
  );
};
export {
  f as default
};
//# sourceMappingURL=Textarea.js.map
