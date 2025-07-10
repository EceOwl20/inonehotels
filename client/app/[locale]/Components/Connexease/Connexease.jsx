"use client";
import Script from "next/script";

function Connexease() {
  return (
    <Script
      id="connexease-script"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
        var APP_UUID = "28b8be8e-72e5-4876-b8da-1be2f5d1a3ed";
        var BASE_COLOR = "transparent";
        var CONTAINER_ELEMENT = "iframe";
        var process = void 0;
        var _typeofThat =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  "function" == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? "symbol"
                  : typeof o;
              };
            
              function initializeChatbox() {
                if (typeof window.LiveChat === "object") {
                  window.LiveChat.boot({
                    uuid: APP_UUID,
                    baseColor: BASE_COLOR,
                    containerElement: CONTAINER_ELEMENT,
                  });
                }
              } 
            
        function activateChatbox() {
          function insertLivechatJS() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            (e.src = "/assets/js/bundle/livechat.js");
          
            // Use the 'onload' event to ensure the script is fully loaded before initialization
            e.onload = function () {
              initializeChatbox();
            };
          
            var t = document.createElement("link");
            t.rel = "stylesheet";
            (t.href = ((process && process.env && process.env.DOMAIN || "https://livechat.connexease.com") + "/l/embed-css/livechat_embed.css"));
          
            var n = document.getElementsByTagName("script")[0];
            document.head.appendChild(t);
            n.parentNode.insertBefore(e, n);
          }
        
          insertLivechatJS();

        }
        activateChatbox();
        `,
      }}
    />
  );
}

export default Connexease;