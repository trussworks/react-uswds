import { jsx as s } from "react/jsx-runtime";
import { c as t } from "../../../index-DIxK0V-G.js";
import o from "../../grid/Grid/Grid.js";
const p = ({
  className: a,
  links: r
}) => {
  const c = t("usa-footer__social-links", a);
  return /* @__PURE__ */ s(o, { row: !0, gap: 1, className: c, children: r.map((i, l) => /* @__PURE__ */ s(o, { col: "auto", children: i }, `socialLink${l}`)) });
};
export {
  p as default
};
//# sourceMappingURL=SocialLinks.js.map
