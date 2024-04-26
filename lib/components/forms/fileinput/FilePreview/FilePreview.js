import { jsxs as x, jsx as O } from "react/jsx-runtime";
import { useRef as P, useState as s, useEffect as R } from "react";
import { c as E } from "../../../../index-DIxK0V-G.js";
import { SPACER_GIF as u } from "../../../../utils/constants.js";
const L = ({
  imageId: f,
  file: n,
  ...l
}) => {
  const r = P(new FileReader()), [p, m] = s(!0), [w, t] = s(u), [i, v] = s(!1);
  R(() => (r.current.onloadend = () => {
    m(!1), t(r.current.result);
  }, r.current.readAsDataURL(n), () => {
    r.current.onloadend = null;
  }), []);
  const { name: e } = n, g = () => {
    t(u), v(!0);
  }, a = e.indexOf(".pdf") > 0, o = e.indexOf(".doc") > 0 || e.indexOf(".pages") > 0, c = e.indexOf(".mov") > 0 || e.indexOf(".mp4") > 0, d = e.indexOf(".xls") > 0 || e.indexOf(".numbers") > 0, _ = E("usa-file-input__preview-image", {
    "is-loading": p,
    "usa-file-input__preview-image--pdf": i && a,
    "usa-file-input__preview-image--word": i && o,
    "usa-file-input__preview-image--video": i && c,
    "usa-file-input__preview-image--excel": i && d,
    "usa-file-input__preview-image--generic": i && (!a && !o && !c && !d)
  });
  return /* @__PURE__ */ x(
    "div",
    {
      "data-testid": "file-input-preview",
      className: "usa-file-input__preview",
      "aria-hidden": "true",
      ...l,
      children: [
        /* @__PURE__ */ O(
          "img",
          {
            id: f,
            "data-testid": "file-input-preview-image",
            src: w,
            alt: "",
            className: _,
            onError: g
          }
        ),
        e
      ]
    }
  );
};
export {
  L as default
};
//# sourceMappingURL=FilePreview.js.map
