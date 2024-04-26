import { jsx as o } from "react/jsx-runtime";
import e from "../../Icon/Icons.js";
const i = ({
  name: s,
  ...c
}) => {
  let a;
  switch (s) {
    case "Facebook":
      a = e.Facebook;
      break;
    case "Twitter":
      a = e.Twitter;
      break;
    case "YouTube":
      a = e.Youtube;
      break;
    case "Instagram":
      a = e.Instagram;
      break;
    case "RSS":
      a = e.RssFeed;
      break;
  }
  return /* @__PURE__ */ o("a", { className: "usa-social-link", ...c, title: s, children: a && /* @__PURE__ */ o(a, { className: "usa-social-link__icon", name: s }) });
};
export {
  i as default
};
//# sourceMappingURL=SocialLink.js.map
