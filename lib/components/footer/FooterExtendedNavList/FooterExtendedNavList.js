import { jsx as i } from "react/jsx-runtime";
import m, { useState as g, useEffect as b } from "react";
import h from "./FooterExtendedNavListSection.js";
import c from "../../grid/Grid/Grid.js";
const O = ({
  isMobile: o,
  nestedLinks: n,
  ...d
}) => {
  const r = window && typeof window == "object", [s, f] = m.useState(
    r && window.innerWidth < 480
  ), [p, u] = g(
    Array(n.length).fill(!1)
  ), l = o || o === void 0 && s;
  b(() => {
    if (o)
      return;
    function t() {
      const e = r && window.innerWidth < 480;
      e !== s && f(e);
    }
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []);
  const w = (t) => {
    u((e) => {
      const a = Array(n.length).fill(!1);
      return a[t] = !e[t], a;
    });
  };
  return /* @__PURE__ */ i(c, { row: !0, gap: 4, ...d, children: n.map((t, e) => /* @__PURE__ */ i(
    c,
    {
      mobileLg: { col: 6 },
      desktop: { col: 3 },
      children: /* @__PURE__ */ i(
        h,
        {
          onToggle: l ? () => w(e) : void 0,
          isOpen: l ? p[e] : !0,
          links: t
        }
      )
    },
    `linkSection-${e}`
  )) });
};
export {
  O as default
};
//# sourceMappingURL=FooterExtendedNavList.js.map
