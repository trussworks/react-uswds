import { jsx as a } from "react/jsx-runtime";
import { useState as m } from "react";
import { c as p } from "../../../index-DIxK0V-G.js";
import w from "../LanguageSelectorButton/LanguageSelectorButton.js";
import S from "../LanguageSelectorDropdown/LanguageSelectorDropdown.js";
const h = ({
  label: r,
  langs: e,
  small: c,
  className: l,
  displayLang: n,
  ...i
}) => {
  const s = p(
    "usa-language-container",
    {
      "usa-language--small": c !== void 0
    },
    l
  ), [g, u] = m(!1);
  if (e.length > 2)
    return /* @__PURE__ */ a(S, { ...{ label: r, langs: e, small: c, displayLang: n }, className: l });
  {
    r && console.warn(
      "LanguageSelector's label is not used when only two languages are available."
    );
    const o = e.find((t) => t.attr === n) || e[Number(g)], d = typeof o.on_click == "string" ? o.on_click : "", f = typeof o.on_click == "string" ? () => {
      window.location.assign(d);
    } : o.on_click;
    return /* @__PURE__ */ a("div", { className: s, "data-testid": "languageSelector", ...i, children: /* @__PURE__ */ a(
      w,
      {
        className: s,
        label: o.label,
        labelAttr: o.attr,
        onToggle: () => {
          f(), n || u((t) => !t);
        }
      }
    ) });
  }
};
export {
  h as default
};
//# sourceMappingURL=LanguageSelector.js.map
