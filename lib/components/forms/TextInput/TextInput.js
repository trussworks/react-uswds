import { jsx as i } from "react/jsx-runtime";
import { c as a } from "../../../index-DIxK0V-G.js";
const f = ({
  className: u,
  validationStatus: s,
  inputSize: t,
  inputRef: r,
  ...e
}) => {
  const c = a(
    "usa-input",
    {
      "usa-input--error": s === "error",
      "usa-input--success": s === "success",
      "usa-input--small": t === "small",
      "usa-input--medium": t === "medium"
    },
    u
  );
  return /* @__PURE__ */ i(
    "input",
    {
      "data-testid": "textInput",
      className: c,
      ref: r,
      ...e
    }
  );
};
export {
  f as default
};
//# sourceMappingURL=TextInput.js.map
