import { jsx as t, jsxs as U } from "react/jsx-runtime";
import { useRef as Y, useState as N, useEffect as T } from "react";
import { c as E } from "../../../../index-DIxK0V-G.js";
import { YEAR_CHUNK as s } from "../constants.js";
import { isDatesYearOutsideMinOrMax as x, setYear as i, listToTable as q, handleTabKey as H, keepDateBetweenMinAndMax as M, isSameYear as L, isIosDevice as O } from "../utils.js";
const V = ({
  date: n,
  minDate: d,
  maxDate: k,
  handleSelectYear: C,
  setStatuses: S
}) => {
  const p = Y(null), _ = Y(null), b = Y(null), l = Y(null), D = n.getFullYear(), [o, y] = N(D), [A, w] = N([null, null]);
  let c = o;
  c -= c % s, c = Math.max(0, c);
  const I = x(
    i(n, c - 1),
    d,
    k
  ), P = x(
    i(n, c + s),
    d,
    k
  );
  T(() => {
    const e = `Showing years ${c} to ${c + s - 1}. Select a year.`;
    S([e]);
    const [a, u] = A;
    if (a && u)
      a.disabled ? u.focus() : a.focus(), w([null, null]);
    else {
      const r = l.current && l.current.querySelector(
        ".usa-date-picker__calendar__year--focused"
      );
      r && r.focus();
    }
  }, [o]), T(() => {
    const e = l.current && l.current.querySelector(
      `[data-value="${o}"]`
    );
    e && e.focus();
  }, []);
  const K = (e) => {
    H(e, [
      p == null ? void 0 : p.current,
      b == null ? void 0 : b.current,
      _ == null ? void 0 : _.current
    ]);
  }, $ = (e) => {
    var f;
    let a;
    const u = e.target, r = parseInt(((f = u.dataset) == null ? void 0 : f.value) || "", 10), g = i(n, r);
    switch (e.key) {
      case "ArrowUp":
      case "Up":
        a = r - 3;
        break;
      case "ArrowDown":
      case "Down":
        a = r + 3;
        break;
      case "ArrowLeft":
      case "Left":
        a = r - 1;
        break;
      case "ArrowRight":
      case "Right":
        a = r + 1;
        break;
      case "Home":
        a = r - r % 3;
        break;
      case "End":
        a = r + 2 - r % 3;
        break;
      case "PageDown":
        a = r + s;
        break;
      case "PageUp":
        a = r - s;
        break;
      default:
        return;
    }
    if (a !== void 0) {
      a = Math.max(0, a);
      const v = i(n, a), h = M(v, d, k);
      L(g, h) || y(h.getFullYear());
    }
    e.preventDefault();
  }, m = [];
  let F = c;
  for (; m.length < s; ) {
    const e = F, a = x(
      i(n, e),
      d,
      k
    ), u = e === D, r = e === o, g = r ? 0 : -1, f = E("usa-date-picker__calendar__year", {
      "usa-date-picker__calendar__year--selected": u,
      "usa-date-picker__calendar__year--focused": r
    }), v = () => {
      C(e);
    }, h = () => {
      a || O() || e !== o && y(e);
    };
    m.push(
      // Ignoring error: "The attribute aria-selected is not supported by the role button. This role is implicit on the element button."
      // Ignoring because this attribute is present in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1447)
      // eslint-disable-next-line jsx-a11y/role-supports-aria-props
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          tabIndex: g,
          ref: r ? b : null,
          className: f,
          "data-value": e,
          "aria-selected": u,
          disabled: a,
          onClick: v,
          onKeyDown: $,
          onMouseMove: h,
          children: e
        }
      )
    ), F += 1;
  }
  const j = () => {
    let e = o - s;
    e = Math.max(0, e);
    let a = i(n, e);
    a = M(a, d, k), w([p.current, l.current]), y(a.getFullYear());
  }, R = () => {
    let e = o + s;
    e = Math.max(0, e);
    let a = i(n, e);
    a = M(a, d, k), w([_.current, l.current]), y(a.getFullYear());
  };
  return (
    // Ignoring error: "Static HTML elements with event handlers require a role."
    // Ignoring because this element does not have a role in the USWDS implementation (https://github.com/uswds/uswds/blob/develop/src/js/components/date-picker.js#L1457)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ t(
      "div",
      {
        tabIndex: -1,
        className: "usa-date-picker__calendar__year-picker",
        "data-testid": "calendar-year-picker",
        ref: l,
        onKeyDown: K,
        children: /* @__PURE__ */ t("table", { className: "usa-date-picker__calendar__table", role: "presentation", children: /* @__PURE__ */ t("tbody", { children: /* @__PURE__ */ U("tr", { children: [
          /* @__PURE__ */ t("td", { children: /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              "data-testid": "previous-year-chunk",
              className: "usa-date-picker__calendar__previous-year-chunk",
              "aria-label": `Navigate back ${s} years`,
              disabled: I,
              onClick: j,
              ref: p
            }
          ) }),
          /* @__PURE__ */ t("td", { colSpan: 3, children: /* @__PURE__ */ t(
            "table",
            {
              className: "usa-date-picker__calendar__table",
              role: "presentation",
              children: /* @__PURE__ */ t("tbody", { children: q(m, 3) })
            }
          ) }),
          /* @__PURE__ */ t("td", { children: /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              "data-testid": "next-year-chunk",
              className: "usa-date-picker__calendar__next-year-chunk",
              "aria-label": `Navigate forward ${s} years`,
              disabled: P,
              onClick: R,
              ref: _
            }
          ) })
        ] }) }) })
      }
    )
  );
};
export {
  V as default
};
//# sourceMappingURL=YearPicker.js.map
