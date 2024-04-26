import { jsx as i } from "react/jsx-runtime";
import { useState as v, useRef as b, useEffect as T } from "react";
import { c as N } from "../../../../index-DIxK0V-G.js";
import { setMonth as m, isDatesMonthOutsideMinOrMax as A, listToTable as F, handleTabKey as P, keepDateBetweenMinAndMax as S, isSameMonth as I, isIosDevice as K } from "../utils.js";
import { EN_US as U } from "../i18n.js";
const B = ({
  date: s,
  minDate: p,
  maxDate: M,
  handleSelectMonth: f,
  i18n: D = U
}) => {
  const k = s.getMonth(), [n, _] = v(k), h = b(null), c = b(null);
  T(() => {
    const t = h.current && h.current.querySelector(
      `[data-value="${n}"]`
    );
    t && t.focus();
  }, [n]);
  const w = (t) => {
    P(t, [c == null ? void 0 : c.current]);
  }, y = (t) => {
    var o;
    let e;
    const d = t.target, a = parseInt(((o = d.dataset) == null ? void 0 : o.value) || "", 10), r = m(s, a);
    switch (t.key) {
      case "ArrowUp":
      case "Up":
        e = a - 3;
        break;
      case "ArrowDown":
      case "Down":
        e = a + 3;
        break;
      case "ArrowLeft":
      case "Left":
        e = a - 1;
        break;
      case "ArrowRight":
      case "Right":
        e = a + 1;
        break;
      case "Home":
        e = a - a % 3;
        break;
      case "End":
        e = a + 2 - a % 3;
        break;
      case "PageDown":
        e = 11;
        break;
      case "PageUp":
        e = 0;
        break;
      default:
        return;
    }
    if (e !== void 0) {
      e = Math.max(0, Math.min(11, e));
      const u = m(s, e), l = S(u, p, M);
      I(r, l) || _(l.getMonth());
    }
    t.preventDefault();
  }, g = D.months.map((t, e) => {
    const d = m(s, e), a = A(
      d,
      p,
      M
    ), r = e === k, o = e === n, u = o ? 0 : -1, l = N("usa-date-picker__calendar__month", {
      "usa-date-picker__calendar__month--selected": r,
      "usa-date-picker__calendar__month--focused": o
    });
    return (
      // Ignoring error: "The attribute aria-selected is not supported by the role button. This role is implicit on the element button."
      // Ignoring because this attribute is present in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1340)
      // eslint-disable-next-line jsx-a11y/role-supports-aria-props
      /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          ref: o ? c : null,
          tabIndex: u,
          className: l,
          "data-value": e,
          "data-label": t,
          "aria-selected": r,
          disabled: a,
          onClick: () => {
            f(e);
          },
          onKeyDown: y,
          onMouseMove: () => {
            a || K() || e !== n && _(e);
          },
          children: t
        },
        `selectMonth_${t}`
      )
    );
  });
  return (
    // Ignoring error: "Static HTML elements with event handlers require a role."
    // Ignoring because this element does not have a role in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1345)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ i(
      "div",
      {
        tabIndex: -1,
        "data-testid": "calendar-month-picker",
        className: "usa-date-picker__calendar__month-picker",
        ref: h,
        onKeyDown: w,
        children: /* @__PURE__ */ i("table", { className: "usa-date-picker__calendar__table", role: "presentation", children: /* @__PURE__ */ i("tbody", { children: F(g, 3) }) })
      }
    )
  );
};
export {
  B as default
};
//# sourceMappingURL=MonthPicker.js.map
