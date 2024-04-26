import { jsx as c } from "react/jsx-runtime";
import { c as l } from "../../index-DIxK0V-G.js";
const f = ({
  children: t,
  background: s,
  className: e,
  ...o
}) => {
  const a = {};
  s && (a.background = s);
  const r = l("usa-tag", e);
  return /* @__PURE__ */ c(
    "span",
    {
      "data-testid": "tag",
      className: r,
      style: { ...a },
      ...o,
      children: t
    }
  );
};
export {
  f as default
};
//# sourceMappingURL=Tag.js.map
