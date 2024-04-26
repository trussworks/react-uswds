import { jsxs as i, Fragment as n, jsx as o } from "react/jsx-runtime";
import t from "../../Icon/Icons.js";
const c = (s, e) => {
  switch (s) {
    case "english":
      return {
        header: "An official website of the United States government",
        ariaLabel: "Official website of the United States government",
        headerAction: "Here’s how you know",
        tldSectionHeader: `Official websites use ${e}`,
        tldSectionContent: (() => {
          switch (e) {
            case ".gov":
              return /* @__PURE__ */ i(n, { children: [
                "A ",
                /* @__PURE__ */ o("strong", { children: ".gov" }),
                " website belongs to an official government organization in the United States."
              ] });
            case ".mil":
              return /* @__PURE__ */ i(n, { children: [
                "A ",
                /* @__PURE__ */ o("strong", { children: ".mil" }),
                " website belongs to an official U.S. Department of Defense organization."
              ] });
          }
        })(),
        httpsSectionHeader: `Secure ${e} websites use HTTPS`,
        httpsSectionContent: /* @__PURE__ */ i(n, { children: [
          "A",
          " ",
          /* @__PURE__ */ i("strong", { children: [
            "lock (",
            /* @__PURE__ */ o(t.Lock, { "aria-label": "Locked padlock icon" }),
            ")"
          ] }),
          " ",
          "or ",
          /* @__PURE__ */ o("strong", { children: "https://" }),
          " means you’ve safely connected to the",
          " ",
          e,
          " website. Share sensitive information only on official, secure websites."
        ] })
      };
    case "spanish":
      return {
        header: "Un sitio oficial del Gobierno de Estados Unidos",
        ariaLabel: "Un sitio oficial del Gobierno de Estados Unidos",
        headerAction: "Así es como usted puede verificarlo",
        tldSectionHeader: `Los sitios web oficiales usan ${e}`,
        tldSectionContent: (() => {
          switch (e) {
            case ".gov":
              return /* @__PURE__ */ i(n, { children: [
                "Un sitio web ",
                /* @__PURE__ */ o("strong", { children: ".gov" }),
                " pertenece a una organización oficial del Gobierno de Estados Unidos."
              ] });
            case ".mil":
              return /* @__PURE__ */ i(n, { children: [
                "Un sitio web ",
                /* @__PURE__ */ o("strong", { children: ".mil" }),
                " pertenece a una organización oficial del Departamento de Defensa de EE. UU."
              ] });
          }
        })(),
        httpsSectionHeader: `Los sitios web seguros ${e} usan HTTPS`,
        httpsSectionContent: /* @__PURE__ */ i(n, { children: [
          "Un",
          " ",
          /* @__PURE__ */ i("strong", { children: [
            "candado (",
            /* @__PURE__ */ o(t.Lock, { "aria-label": "Icono de candado cerrado" }),
            ")"
          ] }),
          " ",
          "o ",
          /* @__PURE__ */ o("strong", { children: "https://" }),
          " significa que usted se conectó de forma segura a un sitio web ",
          e,
          ". Comparta información sensible sólo en sitios web oficiales y seguros."
        ] })
      };
  }
};
export {
  c as getCopy
};
//# sourceMappingURL=utils.js.map
