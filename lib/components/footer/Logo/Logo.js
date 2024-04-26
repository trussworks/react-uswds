import { jsxs as g, jsx as e } from "react/jsx-runtime";
import { c as p } from "../../../index-DIxK0V-G.js";
import s from "../../grid/Grid/Grid.js";
const b = ({
  size: o,
  heading: i,
  image: l,
  className: m,
  ...n
}) => {
  const r = o === "big", t = o === "medium", c = o === "slim", d = p("usa-footer__logo", m), u = {
    row: !0,
    mobileLg: r || t ? { col: 6, gap: 2 } : void 0,
    gap: c ? 2 : void 0
  }, a = {
    mobileLg: r || t ? { col: "auto" } : void 0,
    col: c ? "auto" : void 0
  };
  return /* @__PURE__ */ g(
    s,
    {
      className: d,
      "data-testid": "footerLogo",
      ...u,
      ...n,
      children: [
        /* @__PURE__ */ e(s, { ...a, children: l }),
        i && /* @__PURE__ */ e(s, { ...a, children: i })
      ]
    }
  );
};
export {
  b as default
};
//# sourceMappingURL=Logo.js.map
