import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { c as f } from "../../../index-DIxK0V-G.js";
import { useState as I } from "react";
import { DEFAULT_EXTERNAL_DATE_FORMAT as G } from "../datepicker/constants.js";
import _ from "../datepicker/DatePicker/DatePicker.js";
import { parseDateString as d, formatDate as n } from "../datepicker/utils.js";
import p from "../FormGroup/FormGroup.js";
import S from "../label/Label/Label.js";
const K = ({
  startDateLabel: c,
  startDateHint: l,
  startDatePickerProps: t,
  endDateLabel: m,
  endDateHint: o,
  endDatePickerProps: s,
  className: v,
  ...x
}) => {
  const [u, M] = I(t.defaultValue), [g, A] = I(s.defaultValue), V = () => {
    const { maxDate: i } = t, a = i && d(i), e = g && d(g);
    return e && a ? e.getTime() < a.getTime() ? n(e) : n(a) : e && n(e) || a && n(a) || void 0;
  }, $ = () => {
    const { minDate: i } = s, a = i && d(i), e = u && d(u);
    return e && a ? e.getTime() > a.getTime() ? n(e) : n(a) : e && n(e) || a && n(a) || void 0;
  }, D = (i, a) => (e) => {
    const T = e && d(e, G);
    if (T) {
      const k = n(T);
      a(k);
    } else
      a(e);
    i && i(e);
  }, O = D(
    t.onChange,
    M
  ), R = D(
    s.onChange,
    A
  ), j = f(v, "usa-date-range-picker"), y = f(
    t.className,
    "usa-date-range-picker__range-start"
  ), F = f(
    s.className,
    "usa-date-range-picker__range-end"
  ), C = `${t.id}-label`, b = `${t.id}-hint`, E = `${s.id}-label`, N = `${s.id}-hint`;
  return /* @__PURE__ */ h("div", { className: j, "data-testid": "date-range-picker", ...x, children: [
    /* @__PURE__ */ h(p, { children: [
      c && /* @__PURE__ */ r(S, { id: C, htmlFor: t.id, children: c }),
      l && /* @__PURE__ */ r("div", { className: "usa-hint", id: b, children: l }),
      /* @__PURE__ */ r(
        _,
        {
          className: y,
          rangeDate: g,
          ...t,
          "aria-labelledby": c && C,
          "aria-describedby": l && b,
          onChange: O,
          maxDate: V()
        }
      )
    ] }),
    /* @__PURE__ */ h(p, { children: [
      m && /* @__PURE__ */ r(S, { id: E, htmlFor: s.id, children: m }),
      o && /* @__PURE__ */ r("div", { className: "usa-hint", id: N, children: o }),
      /* @__PURE__ */ r(
        _,
        {
          className: F,
          rangeDate: u,
          ...s,
          "aria-labelledby": m && E,
          "aria-describedby": o && N,
          onChange: R,
          minDate: $()
        }
      )
    ] })
  ] });
};
export {
  K as default
};
//# sourceMappingURL=DateRangePicker.js.map
