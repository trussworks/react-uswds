import { jsxs as A, jsx as s } from "react/jsx-runtime";
import { useMemo as L } from "react";
import { c as N } from "../../../index-DIxK0V-G.js";
import S from "../FormGroup/FormGroup.js";
import h from "../label/Label/Label.js";
import b from "../combobox/ComboBox/ComboBox.js";
import { parseTimeString as c, getTimeOptions as D } from "./utils.js";
import { DEFAULT_MIN_TIME_MINUTES as x, DEFAULT_MAX_TIME_MINUTES as P, TIME_PICKER_CUSTOM_FILTER as g, DEFAULT_MIN_TIME as C, DEFAULT_MAX_TIME as O, DEFAULT_STEP as j, MIN_STEP as T } from "./constants.js";
const q = ({
  id: t,
  name: o,
  onChange: a,
  label: l,
  defaultValue: n,
  disabled: p,
  minTime: i = C,
  maxTime: e = O,
  step: r = j,
  hint: m,
  className: E,
  ...M
}) => {
  const _ = N("usa-time-picker", E), I = c(i) || x, d = c(e) || P, F = r < T ? T : r, f = L(
    () => D(I, d, F),
    [i, e, r]
  ), u = `${o}-label`, U = `${o}-hint`;
  return /* @__PURE__ */ A(S, { children: [
    /* @__PURE__ */ s(h, { id: u, htmlFor: t, children: l }),
    m && /* @__PURE__ */ s("div", { className: "usa-hint", id: U, children: m }),
    /* @__PURE__ */ s(
      b,
      {
        id: t,
        name: o,
        className: _,
        onChange: a,
        defaultValue: n,
        options: f,
        disabled: p,
        customFilter: g,
        disableFiltering: !0,
        ...M
      }
    )
  ] });
};
export {
  q as default
};
//# sourceMappingURL=TimePicker.js.map
