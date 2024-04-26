const e = new File(["Test File Contents"], "testFile.txt", {
  type: "text/plain"
}), t = new File(["Test PDF File"], "testFile.pdf", {
  type: "application/pdf"
}), i = new File(["Test doc File"], "testFile.doc", {
  type: "application/msword"
}), F = new File(["Test xls File"], "testFile.xls", {
  type: "application/vnd.ms-excel"
}), l = new File(["Test video File"], "testFile.mp4", {
  type: "video/mp4"
}), s = new File(["Test PNG Image"], "testFile.png", {
  type: "image/png"
});
export {
  i as TEST_DOC_FILE,
  t as TEST_PDF_FILE,
  s as TEST_PNG_FILE,
  e as TEST_TEXT_FILE,
  l as TEST_VIDEO_FILE,
  F as TEST_XLS_FILE
};
//# sourceMappingURL=fixtures.js.map
