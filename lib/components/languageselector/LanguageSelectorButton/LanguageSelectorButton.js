import { jsx as o } from "react/jsx-runtime";
import { c as u } from "../../../index-DIxK0V-G.js";
import i from "../../Button/Button.js";
const d = ({
  label: t,
  labelAttr: n,
  isOpen: a,
  onToggle: s,
  className: e,
  ...r
}) => {
  const c = u("usa-language__link", e);
  return /* @__PURE__ */ o(
    i,
    {
      "data-testid": "languageSelectorButton",
      className: c,
      "aria-expanded": a,
      "aria-controls": "language-options",
      onClick: () => s(),
      type: "button",
      ...r,
      children: n ? /* @__PURE__ */ o("span", { lang: n, children: t }) : t
    }
  );
};
export {
  d as default
};
//# sourceMappingURL=LanguageSelectorButton.js.map
