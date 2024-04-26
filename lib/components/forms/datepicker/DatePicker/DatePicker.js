import { jsxs as R, jsx as l } from "react/jsx-runtime";
import { useRef as U, useState as n, useEffect as M } from "react";
import { c as j } from "../../../../index-DIxK0V-G.js";
import { DEFAULT_MIN_DATE as Y, VALIDATION_MESSAGE as E, DEFAULT_EXTERNAL_DATE_FORMAT as w } from "../constants.js";
import { EN_US as De } from "../i18n.js";
import { parseDateString as c, formatDate as A, isDateInvalid as q, keepDateBetweenMinAndMax as I, today as me, isSameDay as ye, addDays as ke } from "../utils.js";
import _e from "../Calendar/Calendar.js";
import { FocusMode as T } from "../../../../utils/constants.js";
const Ce = ({
  id: z,
  name: G,
  className: H,
  validationStatus: g,
  defaultValue: D,
  disabled: K,
  required: X,
  minDate: S = Y,
  maxDate: v,
  rangeDate: V,
  onChange: m,
  onBlur: y,
  i18n: k = De,
  ...b
}) => {
  const d = U(null), t = U(null), $ = g === "error", B = g === "success", [_, F] = n(""), [C, x] = n(""), [o, h] = n(!1), [N, L] = n(void 0), [J, Q] = n(0), [W, u] = n([]), [Z, O] = n(T.None), [ee, te] = n(
    void 0
  ), p = c(S), f = v ? c(v) : void 0, ae = V ? c(V) : void 0, se = () => {
    var a, s, i, r;
    const e = q(C, p, f);
    e && !((a = t == null ? void 0 : t.current) != null && a.validationMessage) && ((s = t == null ? void 0 : t.current) == null || s.setCustomValidity(E)), !e && ((i = t == null ? void 0 : t.current) == null ? void 0 : i.validationMessage) === E && ((r = t == null ? void 0 : t.current) == null || r.setCustomValidity(""));
  }, P = (e, a = !0) => {
    var r;
    const s = c(e), i = s && A(s, w);
    s && F(e), i && x(i), m && m(i), a && (h(!1), u([]), (r = t == null ? void 0 : t.current) == null || r.focus());
  }, ie = (e) => {
    const a = e.target.value;
    x(a), m && m(a);
    const s = c(a, w, !0);
    let i = "";
    if (s && !q(a, p, f) && (i = A(s)), _ !== i && F(i), s && o) {
      const r = I(
        s,
        p,
        f
      );
      L(r);
    }
  };
  M(() => {
    D && P(D, !1);
  }, []), M(() => {
    if (o) {
      const e = d.current && d.current.querySelector(
        ".usa-date-picker__calendar__date--focused"
      );
      e && e.focus();
    }
  }, [o]), M(() => {
    se();
  }, [C, S, v]);
  const oe = () => {
    var e;
    if (o)
      u([]);
    else {
      const a = c(
        C,
        w,
        !0
      ), s = I(
        a || D && c(D) || me(),
        p,
        f
      );
      L(s), Q((e = d == null ? void 0 : d.current) == null ? void 0 : e.offsetHeight);
      const i = k.statuses, r = c(_);
      if (r && ye(r, ke(s, 0))) {
        const fe = k.selectedDate;
        i.unshift(fe);
      }
      u(i);
    }
    h(!o);
  }, re = (e) => {
    var a;
    (a = d.current) != null && a.contains(e == null ? void 0 : e.relatedTarget) || (o && (h(!1), u([])), y && y(e));
  }, ce = (e) => {
    var a;
    e.key === "Escape" && (o && (h(!1), u([]), (a = t == null ? void 0 : t.current) == null || a.focus()), e.preventDefault());
  }, ne = (e) => {
    te(e.keyCode);
  }, de = (e) => {
    e.keyCode !== ee && e.preventDefault();
  }, ue = j(
    "usa-date-picker",
    "usa-date-picker--initialized",
    {
      "usa-date-picker--active": o
    },
    H
  ), le = j(
    "usa-input",
    "usa-date-picker__external-input",
    {
      "usa-input--error": $,
      "usa-input--success": B
    }
  ), pe = k.toggleCalendar;
  return (
    // Ignoring error: "Static HTML elements with event handlers require a role."
    // Ignoring because this element does not have a role in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L828)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ R(
      "div",
      {
        "data-testid": "date-picker",
        className: ue,
        ref: d,
        onBlur: re,
        onKeyDown: ce,
        children: [
          /* @__PURE__ */ l(
            "input",
            {
              ...b,
              name: G,
              "data-testid": "date-picker-internal-input",
              className: "usa-input usa-sr-only usa-date-picker__internal-input",
              type: "text",
              "aria-hidden": !0,
              tabIndex: -1,
              required: !1,
              disabled: !1,
              value: _,
              readOnly: !0
            }
          ),
          /* @__PURE__ */ R("div", { className: "usa-date-picker__wrapper", tabIndex: -1, children: [
            /* @__PURE__ */ l(
              "input",
              {
                ...b,
                id: z,
                "data-testid": "date-picker-external-input",
                className: le,
                type: "text",
                disabled: K,
                required: X,
                value: C,
                ref: t,
                onInput: ie,
                onFocus: () => {
                  O(T.Input);
                },
                onBlur: (e) => {
                  O(T.None), y && y(e);
                }
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                "data-testid": "date-picker-button",
                type: "button",
                className: "usa-date-picker__button",
                "aria-haspopup": !0,
                "aria-label": pe,
                disabled: K,
                onClick: oe
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                "data-testid": "date-picker-calendar",
                className: "usa-date-picker__calendar",
                role: "application",
                hidden: !o,
                "data-value": N && A(N),
                style: { top: `${J}px` },
                onKeyDown: ne,
                onKeyUp: de,
                children: o && /* @__PURE__ */ l(
                  _e,
                  {
                    date: N,
                    handleSelectDate: P,
                    minDate: p,
                    maxDate: f,
                    rangeDate: ae,
                    selectedDate: c(_),
                    setStatuses: u,
                    focusMode: Z,
                    i18n: k
                  }
                )
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                "data-testid": "date-picker-status",
                className: "usa-sr-only usa-date-picker__status",
                role: "status",
                "aria-live": "polite",
                children: W.join(". ")
              }
            )
          ] })
        ]
      }
    )
  );
};
Ce.defaultProps = {
  minDate: Y
};
export {
  Ce as default
};
//# sourceMappingURL=DatePicker.js.map
