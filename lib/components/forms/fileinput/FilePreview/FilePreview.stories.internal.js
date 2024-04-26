import { jsx as e } from "react/jsx-runtime";
import i from "./FilePreview.js";
import { TEST_PDF_FILE as r, TEST_DOC_FILE as t, TEST_XLS_FILE as E, TEST_VIDEO_FILE as T, TEST_PNG_FILE as _, TEST_TEXT_FILE as s } from "../fixtures.js";
const o = {
  imageId: "testImageId_12345",
  file: s
}, l = () => /* @__PURE__ */ e(i, { ...o }), m = () => /* @__PURE__ */ e(i, { ...o, file: r }), c = () => /* @__PURE__ */ e(i, { ...o, file: t }), n = () => /* @__PURE__ */ e(i, { ...o, file: E }), v = () => /* @__PURE__ */ e(i, { ...o, file: T }), F = () => /* @__PURE__ */ e(i, { ...o, file: _ });
export {
  c as docPreview,
  F as imagePreview,
  l as loadingPreview,
  m as pdfPreview,
  v as videoPreview,
  n as xlsPreview
};
//# sourceMappingURL=FilePreview.stories.internal.js.map
