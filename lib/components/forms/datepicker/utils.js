import { jsx as D, Fragment as I } from "react/jsx-runtime";
import { DEFAULT_EXTERNAL_DATE_FORMAT as p, INTERNAL_DATE_FORMAT as y } from "./constants.js";
const M = (t, e) => (e !== t.getMonth() && t.setDate(0), t), h = (t, e, n) => {
  const s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(t, e, n), s;
}, E = () => {
  const t = /* @__PURE__ */ new Date(), e = t.getDate(), n = t.getMonth(), s = t.getFullYear();
  return h(s, n, e);
}, T = (t) => {
  const e = /* @__PURE__ */ new Date(0);
  return e.setFullYear(t.getFullYear(), t.getMonth(), 1), e;
}, Y = (t) => {
  const e = /* @__PURE__ */ new Date(0);
  return e.setFullYear(t.getFullYear(), t.getMonth() + 1, 0), e;
}, m = (t, e) => {
  const n = new Date(t.getTime());
  return n.setDate(n.getDate() + e), n;
}, F = (t, e) => m(t, -e), N = (t, e) => m(t, e * 7), x = (t, e) => N(t, -e), A = (t) => {
  const e = t.getDay();
  return F(t, e);
}, k = (t) => {
  const e = t.getDay();
  return m(t, 6 - e);
}, d = (t, e) => {
  const n = new Date(t.getTime()), s = (n.getMonth() + 12 + e) % 12;
  return n.setMonth(n.getMonth() + e), M(n, s), n;
}, K = (t, e) => d(t, -e), b = (t, e) => d(t, e * 12), W = (t, e) => b(t, -e), w = (t, e) => {
  const n = new Date(t.getTime());
  return n.setMonth(e), M(n, e), n;
}, S = (t, e) => {
  const n = new Date(t.getTime()), s = n.getMonth();
  return n.setFullYear(e), M(n, s), n;
}, $ = (t, e) => {
  let n = t;
  return e < t && (n = e), new Date(n.getTime());
}, C = (t, e) => {
  let n = t;
  return e > t && (n = e), new Date(n.getTime());
}, O = (t, e) => t && e && t.getFullYear() === e.getFullYear(), _ = (t, e) => O(t, e) && t.getMonth() === e.getMonth(), L = (t, e) => _(t, e) && t.getDate() === e.getDate(), H = (t, e, n) => {
  let s = t;
  return t < e ? s = e : n && t > n && (s = n), new Date(s.getTime());
}, R = (t, e, n) => t >= e && (!n || t <= n), j = (t, e, n) => Y(t) < e || !!n && T(t) > n, U = (t, e, n) => Y(w(t, 11)) < e || !!n && T(w(t, 0)) > n, X = (t, e = y, n = !1) => {
  let s, r, a, i, o;
  if (t) {
    let c, u, l;
    if (e === p ? [c, u, l] = t.split("/") : [l, c, u] = t.split("-"), l && (o = parseInt(l, 10), !Number.isNaN(o) && (i = o, n && (i = Math.max(0, i), l.length < 3)))) {
      const f = E().getFullYear();
      i = f - f % 10 ** l.length + o;
    }
    if (c && (o = parseInt(c, 10), Number.isNaN(o) || (r = o, n && (r = Math.max(1, r), r = Math.min(12, r)))), r && u && i != null && (o = parseInt(u, 10), !Number.isNaN(o) && (a = o, n))) {
      const f = h(i, r, 0).getDate();
      a = Math.max(1, a), a = Math.min(f, a);
    }
    r && a && i != null && (s = h(i, r - 1, a));
  }
  return s;
}, Z = (t, e = y) => {
  const n = (i, o) => `0000${i}`.slice(-o), s = t.getMonth() + 1, r = t.getDate(), a = t.getFullYear();
  return e === p ? [n(s, 2), n(r, 2), n(a, 4)].join("/") : [n(a, 4), n(s, 2), n(r, 2)].join("-");
}, q = (t, e, n) => {
  let s = !1;
  if (t) {
    s = !0;
    const r = t.split("/"), [a, i, o] = r.map((c) => {
      let u;
      const l = parseInt(c, 10);
      return Number.isNaN(l) || (u = l), u;
    });
    if (a && i && o != null) {
      const c = h(o, a - 1, i);
      c.getMonth() === a - 1 && c.getDate() === i && c.getFullYear() === o && r[2].length === 4 && R(c, e, n) && (s = !1);
    }
  }
  return s;
}, z = (t, e) => {
  const n = [];
  let s = 0;
  for (; s < t.length; ) {
    const r = [];
    for (; s < t.length && r.length < e; )
      r.push(t[parseInt(`${s}`)]), s += 1;
    n.push(r);
  }
  return /* @__PURE__ */ D(I, { children: n.map((r, a) => /* @__PURE__ */ D("tr", { children: r.map((i, o) => /* @__PURE__ */ D("td", { children: i }, `row_${a}_cell_${o}`)) }, `row_${a}`)) });
}, G = (t, e) => {
  if (t.key === "Tab") {
    const n = e.filter((g) => g && !g.disabled), s = document == null ? void 0 : document.activeElement, r = 0, a = n.length - 1, i = n[parseInt(`${r}`)], o = n[parseInt(`${a}`)], c = s instanceof HTMLButtonElement ? n.indexOf(s) : -1, u = c === a, l = c === r, f = c === -1;
    t.shiftKey ? (l || f) && (t.preventDefault(), o == null || o.focus()) : (u || f) && (t.preventDefault(), i == null || i.focus());
  }
}, J = () => typeof navigator < "u" && (navigator.userAgent.match(/(iPod|iPhone|iPad)/g) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream, Q = {
  DATE_PICKER: "DATE_PICKER",
  MONTH_PICKER: "MONTH_PICKER",
  YEAR_PICKER: "YEAR_PICKER"
};
export {
  Q as CalendarModes,
  m as addDays,
  d as addMonths,
  N as addWeeks,
  b as addYears,
  k as endOfWeek,
  Z as formatDate,
  G as handleTabKey,
  q as isDateInvalid,
  R as isDateWithinMinAndMax,
  j as isDatesMonthOutsideMinOrMax,
  U as isDatesYearOutsideMinOrMax,
  J as isIosDevice,
  L as isSameDay,
  _ as isSameMonth,
  O as isSameYear,
  H as keepDateBetweenMinAndMax,
  M as keepDateWithinMonth,
  Y as lastDayOfMonth,
  z as listToTable,
  C as max,
  $ as min,
  X as parseDateString,
  h as setDate,
  w as setMonth,
  S as setYear,
  T as startOfMonth,
  A as startOfWeek,
  F as subDays,
  K as subMonths,
  x as subWeeks,
  W as subYears,
  E as today
};
//# sourceMappingURL=utils.js.map
