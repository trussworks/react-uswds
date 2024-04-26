import { jsx as c } from "react/jsx-runtime";
import { useState as u } from "react";
import { c as x } from "../../../index-DIxK0V-G.js";
import g from "../AccordionItem/AccordionItem.js";
const w = ({
  bordered: d,
  items: t,
  className: i,
  multiselectable: a = !1,
  ...r
}) => {
  const [s, l] = u(
    t.filter((e) => !!e.expanded).map((e) => e.id)
  ), p = x(
    "usa-accordion",
    {
      "usa-accordion--bordered": d
    },
    i
  ), m = (e) => {
    const o = [...s], n = s.indexOf(e), f = a;
    n > -1 ? o.splice(n, 1) : (f || o.splice(0, o.length), o.push(e)), l(o);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: p,
      "data-testid": "accordion",
      "data-allow-multiple": a || void 0,
      ...r,
      children: t.map((e, o) => /* @__PURE__ */ c(
        g,
        {
          ...e,
          expanded: s.indexOf(e.id) > -1,
          handleToggle: () => {
            m(e.id);
          }
        },
        `accordionItem_${o}`
      ))
    }
  );
};
export {
  w as default
};
//# sourceMappingURL=Accordion.js.map
