import { jsx as n, jsxs as d } from "react/jsx-runtime";
import { forwardRef as U, useRef as V, useState as u, useEffect as W, useImperativeHandle as X } from "react";
import { c as _ } from "../../../../index-DIxK0V-G.js";
import Y from "../FilePreview/FilePreview.js";
import { makeSafeForID as Z } from "../utils.js";
const ee = ({
  name: y,
  id: F,
  dragText: C,
  chooseText: $,
  errorText: E,
  disabled: c,
  multiple: D,
  className: b,
  accept: p,
  onChange: x,
  onDrop: I,
  ...k
}, A) => {
  const T = V(null), [P, g] = u(!1), [w, h] = u(!1), [i, m] = u([]), [R, S] = u(!1);
  W(() => {
    if (typeof navigator > "u")
      return;
    const e = /rv:11.0/i.test(navigator == null ? void 0 : navigator.userAgent) || /Edge\/\d./i.test(navigator == null ? void 0 : navigator.userAgent);
    S(e);
  }, [typeof navigator]), X(
    A,
    () => ({
      input: T.current,
      clearFiles: () => m([]),
      files: i
    }),
    [i]
  );
  const j = _(
    "usa-file-input",
    {
      "usa-file-input--disabled": c
    },
    b
  ), H = _("usa-file-input__target", {
    "usa-file-input--drag": P,
    "has-invalid-file": w
  }), L = D ? "Drag files here or " : "Drag file here or ", O = "choose from folder", q = "This is not a valid file type.", a = [];
  if (i)
    for (let e = 0; e < (i == null ? void 0 : i.length); e++) {
      const s = Z(i[parseInt(`${e}`)].name), t = `filePreview_${s}`;
      a.push(
        /* @__PURE__ */ n(
          Y,
          {
            imageId: s,
            file: i[parseInt(`${e}`)]
          },
          t
        )
      );
    }
  const z = _("usa-file-input__instructions", {
    "display-none": a.length > 0
  }), B = a.length > 1 ? `${a.length} files selected` : "Selected file", G = (e) => {
    if (h(!1), p) {
      const s = p.split(",");
      let t = !0;
      for (let l = 0; l < e.dataTransfer.files.length; l += 1) {
        const f = e.dataTransfer.files[parseInt(`${l}`)];
        if (t)
          for (let r = 0; r < s.length; r += 1) {
            const o = s[parseInt(`${r}`)];
            if (t = f.name.indexOf(o) > 0 || f.type.includes(o.replace(/\*/g, "")), t)
              break;
          }
        else
          break;
      }
      t || (m([]), h(!0), e.preventDefault(), e.stopPropagation());
    }
  }, J = () => g(!0), K = () => g(!1), M = (e) => {
    G(e), g(!1), I && I(e);
  }, Q = (e) => {
    var t, l, f, r;
    h(!1);
    const s = [];
    if ((l = (t = e.target) == null ? void 0 : t.files) != null && l.length) {
      const o = ((r = (f = e.target) == null ? void 0 : f.files) == null ? void 0 : r.length) || 0;
      for (let v = 0; v < o; v++) {
        const N = e.target.files.item(v);
        N && s.push(N);
      }
    }
    m(s), x && x(e);
  };
  return /* @__PURE__ */ n(
    "div",
    {
      "data-testid": "file-input",
      className: j,
      "aria-disabled": c,
      children: /* @__PURE__ */ d(
        "div",
        {
          "data-testid": "file-input-droptarget",
          className: H,
          onDragOver: J,
          onDragLeave: K,
          onDrop: M,
          children: [
            a.length > 0 && /* @__PURE__ */ d(
              "div",
              {
                "data-testid": "file-input-preview-heading",
                className: "usa-file-input__preview-heading",
                children: [
                  B,
                  " ",
                  /* @__PURE__ */ d("span", { className: "usa-file-input__choose", children: [
                    "Change file",
                    a.length > 1 && "s"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ d(
              "div",
              {
                "data-testid": "file-input-instructions",
                className: z,
                "aria-hidden": "true",
                children: [
                  !R && /* @__PURE__ */ n("span", { className: "usa-file-input__drag-text", children: C || L }),
                  /* @__PURE__ */ n("span", { className: "usa-file-input__choose", children: $ || O })
                ]
              }
            ),
            a,
            /* @__PURE__ */ n("div", { "data-testid": "file-input-box", className: "usa-file-input__box" }),
            w && /* @__PURE__ */ n(
              "div",
              {
                "data-testid": "file-input-error",
                className: "usa-file-input__accepted-files-message",
                children: E || q
              }
            ),
            /* @__PURE__ */ n(
              "input",
              {
                ...k,
                ref: T,
                type: "file",
                "data-testid": "file-input-input",
                name: y,
                id: F,
                className: "usa-file-input__input",
                disabled: c,
                onChange: Q,
                multiple: D,
                accept: p
              }
            )
          ]
        }
      )
    }
  );
}, le = U(ee);
export {
  ee as FileInputForwardRef,
  le as default
};
//# sourceMappingURL=FileInput.js.map
