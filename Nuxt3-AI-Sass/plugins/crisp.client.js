export default defineNuxtPlugin(() => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "03a598c9-b460-4c69-b179-83e3c92f3a8f";

  (function () {
    var d = document;
    var s = d.createElement("script");

    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
});
