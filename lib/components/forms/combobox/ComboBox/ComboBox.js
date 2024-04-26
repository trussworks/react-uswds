import { jsxs as v, jsx as i } from "react/jsx-runtime";
import { forwardRef as ee, useRef as x, useEffect as b, useImperativeHandle as oe } from "react";
import { c as U } from "../../../../index-DIxK0V-G.js";
import te from "../useComboBox.js";
import se from "../ComboBoxInput/ComboBoxInput.js";
import { Direction as k, DEFAULT_FILTER as ne } from "./utils.js";
import { FocusMode as p } from "../../../../utils/constants.js";
import ie from "../../Select/Select.js";
import { ActionTypes as s } from "../constants.js";
const le = ({
  id: _,
  name: R,
  className: B,
  options: u,
  defaultValue: h,
  disabled: F,
  onChange: C,
  assistiveHint: M,
  noResults: A,
  selectProps: H,
  inputProps: d,
  ulProps: K,
  customFilter: w,
  disableFiltering: N = !1,
  ...P
}, $) => {
  var D;
  const m = !!F;
  let f;
  h && (f = u.find((e) => e.value === h));
  const V = w || { filter: ne }, j = {
    isOpen: !1,
    selectedOption: f || void 0,
    focusedOption: void 0,
    focusMode: p.None,
    filteredOptions: u,
    inputValue: f ? f.label : "",
    statusText: ""
  }, [o, n] = te(
    j,
    u,
    N,
    V
  ), y = x(null), a = x(null), c = x(null);
  b(() => {
    o.filteredOptions = u;
  }, [u]), b(() => {
    var e;
    C && C(((e = o.selectedOption) == null ? void 0 : e.value) || void 0);
  }, [o.selectedOption]), b(() => {
    o.focusMode === p.Item && o.focusedOption && c.current && c.current.focus();
  }, [o.focusMode, o.focusedOption]), b(() => {
    if (o.isOpen && o.focusedOption && c.current && a.current && o.focusMode === p.Input) {
      const e = c.current.offsetTop + c.current.offsetHeight, t = a.current.scrollTop + a.current.offsetHeight;
      e > t && (a.current.scrollTop = e - a.current.offsetHeight), c.current.offsetTop < a.current.scrollTop && (a.current.scrollTop = c.current.offsetTop);
    }
  }, [o.isOpen, o.focusedOption]), b(() => {
    var e;
    o.focusMode !== p.None && ((e = y.current) != null && e.contains(window.document.activeElement) || n({
      type: s.BLUR
    }));
  }, [o.focusMode]), oe(
    $,
    () => ({
      focus: () => n({ type: s.FOCUS_INPUT }),
      clearSelection: () => n({ type: s.CLEAR_SELECTION })
    }),
    []
  );
  const z = (e) => {
    if (e.key === "Escape")
      n({ type: s.CLOSE_LIST });
    else if (e.key === "ArrowDown" || e.key == "Down")
      e.preventDefault(), n({
        type: s.FOCUS_OPTION,
        option: o.selectedOption || o.focusedOption || o.filteredOptions[0]
      });
    else if (e.key === "Tab") {
      if (o.isOpen && !o.selectedOption) {
        const t = N ? o.focusedOption : o.selectedOption || o.focusedOption;
        t ? (e.preventDefault(), n({
          type: s.FOCUS_OPTION,
          option: t
        })) : n({
          type: s.BLUR
        });
      }
      !o.isOpen && o.selectedOption && n({
        type: s.BLUR
      });
    } else if (e.key === "Enter" && o.isOpen) {
      e.preventDefault();
      const t = o.filteredOptions.find(
        (l) => l.label.toLowerCase() === o.inputValue.toLowerCase()
      );
      t ? n({
        type: s.SELECT_OPTION,
        option: t
      }) : o.selectedOption ? n({
        type: s.CLOSE_LIST
      }) : n({ type: s.CLEAR });
    }
  }, W = (e) => {
    var r;
    const { relatedTarget: t } = e;
    (!t || t instanceof Node && !((r = y.current) != null && r.contains(t))) && o.focusMode !== p.None && n({ type: s.BLUR });
  }, q = (e) => {
    e.key === "Tab" && o.isOpen && o.selectedOption && (e.preventDefault(), n({
      type: s.FOCUS_OPTION,
      option: o.selectedOption
    }));
  }, L = (e, t, l) => {
    const r = t.focusedOption ? t.filteredOptions.indexOf(t.focusedOption) : -1, I = t.filteredOptions[0], Y = t.filteredOptions[t.filteredOptions.length - 1];
    if (r === -1)
      e({ type: s.FOCUS_OPTION, option: I });
    else {
      const T = r + l;
      if (T < 0)
        e({ type: s.CLOSE_LIST });
      else if (T >= t.filteredOptions.length)
        e({ type: s.FOCUS_OPTION, option: Y });
      else {
        const Z = t.filteredOptions[T];
        e({ type: s.FOCUS_OPTION, option: Z });
      }
    }
  }, G = (e) => {
    var l;
    const { relatedTarget: t } = e;
    (!t || t instanceof Node && !((l = y.current) != null && l.contains(t))) && n({ type: s.BLUR });
  }, J = (e) => {
    e.key === "Escape" ? n({ type: s.CLOSE_LIST }) : e.key === "Tab" || e.key === "Enter" ? (e.preventDefault(), o.focusedOption && n({
      type: s.SELECT_OPTION,
      option: o.focusedOption
    })) : e.key === "ArrowDown" || e.key === "Down" ? (e.preventDefault(), L(n, o, k.Next)) : (e.key === "ArrowUp" || e.key === "Up") && (e.preventDefault(), L(n, o, k.Previous));
  }, E = o.selectedOption && o.selectedOption.label === o.inputValue, Q = U("usa-combo-box", B, {
    "usa-combo-box--pristine": E
  }), O = `${_}--list`, S = `${_}--assistiveHint`, g = o.focusedOption ? o.filteredOptions.findIndex((e) => e === o.focusedOption) : -1, X = g > -1 && `${O}--option-${g}`;
  return /* @__PURE__ */ v(
    "div",
    {
      "data-testid": "combo-box",
      "data-enhanced": "true",
      className: Q,
      ref: y,
      ...P,
      children: [
        /* @__PURE__ */ i(
          ie,
          {
            className: "usa-sr-only usa-combo-box__select",
            name: R,
            "aria-hidden": !0,
            tabIndex: -1,
            defaultValue: (D = o.selectedOption) == null ? void 0 : D.value,
            "data-testid": "combo-box-select",
            ...H,
            children: u.map((e) => /* @__PURE__ */ i("option", { value: e.value, children: e.label }, e.value))
          }
        ),
        /* @__PURE__ */ i(
          se,
          {
            role: "combobox",
            onChange: (e) => {
              d != null && d.onChange && (d == null || d.onChange(e)), n({ type: s.UPDATE_FILTER, value: e.target.value });
            },
            onClick: () => n({ type: s.OPEN_LIST }),
            onBlur: W,
            onKeyDown: z,
            value: o.inputValue,
            focused: o.focusMode === p.Input,
            "aria-owns": O,
            "aria-controls": O,
            "aria-autocomplete": "list",
            "aria-describedby": S,
            "aria-expanded": o.isOpen,
            "aria-activedescendant": o.isOpen && X || "",
            id: _,
            disabled: m,
            ...d
          }
        ),
        /* @__PURE__ */ i("span", { className: "usa-combo-box__clear-input__wrapper", tabIndex: -1, children: /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "usa-combo-box__clear-input",
            "aria-label": "Clear the select contents",
            onClick: () => n({ type: s.CLEAR }),
            "data-testid": "combo-box-clear-button",
            onKeyDown: q,
            hidden: !E || m,
            disabled: m,
            children: " "
          }
        ) }),
        /* @__PURE__ */ i("span", { className: "usa-combo-box__input-button-separator", children: " " }),
        /* @__PURE__ */ i("span", { className: "usa-combo-box__toggle-list__wrapper", tabIndex: -1, children: /* @__PURE__ */ i(
          "button",
          {
            "data-testid": "combo-box-toggle",
            type: "button",
            className: "usa-combo-box__toggle-list",
            tabIndex: -1,
            "aria-label": "Toggle the dropdown list",
            onClick: () => n({
              type: o.isOpen ? s.CLOSE_LIST : s.OPEN_LIST
            }),
            disabled: m,
            children: " "
          }
        ) }),
        /* @__PURE__ */ v(
          "ul",
          {
            "data-testid": "combo-box-option-list",
            tabIndex: -1,
            id: O,
            className: "usa-combo-box__list",
            role: "listbox",
            ref: a,
            hidden: !o.isOpen,
            ...K,
            children: [
              o.filteredOptions.map((e, t) => {
                const l = e === o.focusedOption, r = e === o.selectedOption, I = U("usa-combo-box__list-option", {
                  "usa-combo-box__list-option--focused": l,
                  "usa-combo-box__list-option--selected": r
                });
                return /* @__PURE__ */ i(
                  "li",
                  {
                    ref: l ? c : null,
                    value: e.value,
                    className: I,
                    tabIndex: l ? 0 : -1,
                    role: "option",
                    "aria-selected": r,
                    "aria-setsize": o.filteredOptions.length,
                    "aria-posinset": t + 1,
                    id: O + `--option-${t}`,
                    onKeyDown: J,
                    onBlur: G,
                    "data-testid": `combo-box-option-${e.value}`,
                    "data-value": e.value,
                    onMouseEnter: () => n({ type: s.FOCUS_OPTION, option: e }),
                    onClick: () => {
                      n({ type: s.SELECT_OPTION, option: e });
                    },
                    children: e.label
                  },
                  e.value
                );
              }),
              o.filteredOptions.length === 0 ? /* @__PURE__ */ i("li", { className: "usa-combo-box__list-option--no-results", children: A || "No results found" }) : null
            ]
          }
        ),
        /* @__PURE__ */ i("div", { className: "usa-combo-box__status usa-sr-only", role: "status", children: o.statusText }),
        /* @__PURE__ */ i(
          "span",
          {
            id: S,
            className: "usa-sr-only",
            "data-testid": "combo-box-assistive-hint",
            children: M || `When autocomplete results are available use up and down arrows to review
           and enter to select. Touch device users, explore by touch or with swipe
           gestures.`
          }
        )
      ]
    }
  );
}, me = ee(le);
export {
  le as ComboBoxForwardRef,
  me as default
};
//# sourceMappingURL=ComboBox.js.map
