import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { useState as w } from "react";
import x from "../Banner/Banner.js";
import z from "../BannerHeader/BannerHeader.js";
import j from "../BannerFlag/BannerFlag.js";
import C from "../BannerButton/BannerButton.js";
import E from "../BannerContent/BannerContent.js";
import o from "../BannerGuidance/BannerGuidance.js";
import c from "../BannerIcon/BannerIcon.js";
import i from "../../mediablock/MediaBlockBody/MediaBlockBody.js";
import { getCopy as I } from "./utils.js";
import b from "../../grid/Grid/Grid.js";
const u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAsBAMAAAAncaPMAAAAAXNSR0IArs4c6QAAABtQTFRF////4EAg2z8g2z8f2z4f2j4fHjSyHjOxHTOxQEYPwgAAAIdJREFUeNrNkUENxDAMBEOhFJaCKZiCKZhCKBj2ebV3rdR71+pIq+Qxj1GyqjJ3U8VlHkc07hFm0awBYe91juq6MSI0yhSAEgkzJ4TMKiXyzFw3pgR9lmIBJlqj2AmBedf+IycExmlKZVzvZEJ4A0oBrjBl/m6PCy95B3fFAN6YuQPxhbcB4QMkEj04wQXD5wAAAABJRU5ErkJggg==", F = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3ctitle%3eicon-dot-gov%3c/title%3e%3cpath%20fill='%232378C3'%20fill-rule='evenodd'%20d='m32%200c17.7%200%2032%2014.3%2032%2032s-14.3%2032-32%2032-32-14.3-32-32%2014.3-32%2032-32zm0%201.2c-17%200-30.8%2013.8-30.8%2030.8s13.8%2030.8%2030.8%2030.8%2030.8-13.8%2030.8-30.8-13.8-30.8-30.8-30.8zm11.4%2038.9c.5%200%20.9.4.9.8v1.6h-24.6v-1.6c0-.5.4-.8.9-.8zm-17.1-12.3v9.8h1.6v-9.8h3.3v9.8h1.6v-9.8h3.3v9.8h1.6v-9.8h3.3v9.8h.8c.5%200%20.9.4.9.8v.8h-21.4v-.8c0-.5.4-.8.9-.8h.8v-9.8zm5.7-8.2%2012.3%204.9v1.6h-1.6c0%20.5-.4.8-.9.8h-19.6c-.5%200-.9-.4-.9-.8h-1.6v-1.6s12.3-4.9%2012.3-4.9z'/%3e%3c/svg%3e", S = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3ctitle%3eicon-https%3c/title%3e%3cpath%20fill='%23719F2A'%20fill-rule='evenodd'%20d='M32%200c17.673%200%2032%2014.327%2032%2032%200%2017.673-14.327%2032-32%2032C14.327%2064%200%2049.673%200%2032%200%2014.327%2014.327%200%2032%200zm0%201.208C14.994%201.208%201.208%2014.994%201.208%2032S14.994%2062.792%2032%2062.792%2062.792%2049.006%2062.792%2032%2049.006%201.208%2032%201.208zm0%2018.886a7.245%207.245%200%200%201%207.245%207.245v3.103h.52c.86%200%201.557.698%201.557%201.558v9.322c0%20.86-.697%201.558-1.557%201.558h-15.53c-.86%200-1.557-.697-1.557-1.558V32c0-.86.697-1.558%201.557-1.558h.52V27.34A7.245%207.245%200%200%201%2032%2020.094zm0%203.103a4.142%204.142%200%200%200-4.142%204.142v3.103h8.284V27.34A4.142%204.142%200%200%200%2032%2023.197z'/%3e%3c/svg%3e", K = ({
  tld: a = ".gov",
  language: l = "english",
  className: h,
  ...d
}) => {
  const [r, m] = w(!1), {
    header: s,
    ariaLabel: g,
    headerAction: n,
    httpsSectionHeader: A,
    httpsSectionContent: v,
    tldSectionHeader: p,
    tldSectionContent: B
  } = I(l, a);
  return /* @__PURE__ */ t(
    x,
    {
      className: h,
      "data-testid": "govBanner",
      "aria-label": g,
      ...d,
      children: [
        /* @__PURE__ */ e(
          z,
          {
            isOpen: r,
            flagImg: /* @__PURE__ */ e(j, { src: u, "aria-hidden": !0, alt: "" }),
            headerText: s,
            headerActionText: n,
            children: /* @__PURE__ */ e(
              C,
              {
                isOpen: r,
                "aria-controls": "gov-banner",
                onClick: () => {
                  m((f) => !f);
                },
                children: n
              }
            )
          }
        ),
        /* @__PURE__ */ e(E, { id: "gov-banner", isOpen: r, children: /* @__PURE__ */ t(b, { row: !0, gap: "lg", children: [
          /* @__PURE__ */ t(o, { className: "tablet:grid-col-6", children: [
            /* @__PURE__ */ e(c, { src: F, alt: "" }),
            /* @__PURE__ */ e(i, { children: /* @__PURE__ */ t("p", { children: [
              /* @__PURE__ */ e("strong", { children: p }),
              /* @__PURE__ */ e("br", {}),
              B
            ] }) })
          ] }),
          /* @__PURE__ */ t(o, { className: "tablet:grid-col-6", children: [
            /* @__PURE__ */ e(c, { src: S, alt: "" }),
            /* @__PURE__ */ e(i, { children: /* @__PURE__ */ t("p", { children: [
              /* @__PURE__ */ e("strong", { children: A }),
              /* @__PURE__ */ e("br", {}),
              v
            ] }) })
          ] })
        ] }) })
      ]
    }
  );
};
export {
  K as default
};
//# sourceMappingURL=GovBanner.js.map
