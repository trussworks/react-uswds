import { jsx as u } from "react/jsx-runtime";
import { useRef as f, useEffect as r } from "react";
const p = ({
  focused: o,
  ...e
}) => {
  const t = f(null);
  return r(() => {
    o && t.current && t.current.focus();
  }), /* @__PURE__ */ u(
    "input",
    {
      type: "text",
      className: "usa-combo-box__input",
      "data-testid": "combo-box-input",
      autoCapitalize: "off",
      autoComplete: "off",
      ref: t,
      ...e
    }
  );
};
export {
  p as default
};
//# sourceMappingURL=ComboBoxInput.js.map
