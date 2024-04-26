import { jsx as a, jsxs as g } from "react/jsx-runtime";
import { useState as p } from "react";
import d from "../../header/Menu/Menu.js";
import f from "../LanguageSelectorButton/LanguageSelectorButton.js";
import { c as N } from "../../../index-DIxK0V-G.js";
import { generateMenuItems as S } from "../utils.js";
const y = ({
  label: n,
  langs: e,
  small: l,
  className: m,
  displayLang: i,
  ...u
}) => {
  const [o, c] = p(!1), r = N(
    "usa-language-container",
    {
      "usa-language--small": l !== void 0
    },
    m
  ), s = e.find((t) => t.attr === i);
  return /* @__PURE__ */ a("div", { className: r, "data-testid": "languageSelector", ...u, children: /* @__PURE__ */ a("ul", { className: "usa-language__primary usa-accordion", children: /* @__PURE__ */ g("li", { className: "usa-language__primary-item", children: [
    /* @__PURE__ */ a(
      f,
      {
        className: r,
        label: (s == null ? void 0 : s.label) || n || e[0].label,
        isOpen: o,
        onToggle: () => c((t) => !t)
      }
    ),
    /* @__PURE__ */ a(
      d,
      {
        items: S(e),
        isOpen: o,
        id: "language-options",
        type: "language"
      }
    )
  ] }) }) });
};
export {
  y as default
};
//# sourceMappingURL=LanguageSelectorDropdown.js.map
