function VCInjector() {
  function a(a) {
    var c = b(),
      d = c.parentNode;
    if (a.toLowerCase().indexOf("<script") > -1) injector = new VCInjector, injector.insertScript(d, a);
    else {
      var e = document.createElement("div");
      for (e.innerHTML = a; e.childNodes.length;) d.insertBefore(e.childNodes[0], c)
    }
  }

  function b() {
    return document.getElementById(VCInjector.prototype.writesQueue[0].scriptsMap[0].placeholder)
  }

  function c(a) {
    var b = document.getElementById(a);
    b && b.parentNode.removeChild(b)
  }

  function d() {
    c(VCInjector.prototype.writesQueue[0].scriptsMap[0].placeholder)
  }

  function e(a, b, c) {
    var d = [],
      e = document.createElement("div");
    e.innerHTML = b;
    for (var h = e.getElementsByTagName("script"), i = 0; i < h.length; i++) {
      var j = h[i];
      if (j.src) {
        var k = document.createElement("span");
        k.id = "vc-injector-placeholder-" + i, j.parentNode.insertBefore(k, j)
      }
      d.push(j)
    }
    for (; h.length;) h[0].parentNode.removeChild(h[0]);
    for (var l = e.childNodes; l.length;) a.appendChild(l[0]);
    for (var i = 0; i < d.length; i++) {
      var j = d[i];
      j.src ? f(j.src, "vc-injector-placeholder-" + i, c) : j.innerHTML && g(j.innerHTML)
    }
  }

  function f(a, b, c) {
    VCInjector.prototype.writesQueue[0].scriptsMap.push({
      scriptSrc: a,
      placeholder: b
    });
    var d = document.createElement("script");
    d.src = a;
    var e = document.getElementsByTagName("script")[0];
    h(d, c), e.parentNode.insertBefore(d, e)
  }

  function g(a) {
    try {
      eval.call(window, a)
    } catch (a) {}
  }

  function h(a, b) {
    if (a.addEventListener) a.addEventListener("error", b, !0), a.addEventListener("load", b, !0);
    else {
      if (!a.attachEvent) throw Error("Failed to attach listeners to script.");
      a.attachEvent("onerror", b, !0), a.attachEvent("onload", b, !0), a.attachEvent("onreadystatechange", function() {
        "complete" != a.readyState && "loaded" != a.readyState || b()
      })
    }
  }
  this.doInject = function() {
    var b = document.write;
    document.write = a;
    var c = this;
    e(this.writesQueue[0].container, this.writesQueue[0].html, function(a) {
      c.onInjectComplete(b)
    })
  }, this.onInjectComplete = function(a) {
    d(), this.writesQueue[0].scriptsMap.shift(), 0 === this.writesQueue[0].scriptsMap.length && (this.writesQueue.shift(), this.writesQueue.length > 0 ? this.doInject() : document.write = a)
  }, this.insertScript = function(a, b) {
    this.writesQueue.push({
      container: a,
      html: b,
      scriptsMap: []
    }), 1 === this.writesQueue.length && this.doInject()
  }
}

function uuidv4() {
  var a = (new Date).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(b) {
    var c = (a + 16 * Math.random()) % 16 | 0;
    return a = Math.floor(a / 16), ("x" == b ? c : 3 & c | 8).toString(16)
  })
}

function getUrlParameter(a) {
  var b = document.getElementsByTagName("script");
  a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  for (var c = new RegExp("[\\?&]" + a + "=([^&#]*)"), d = c.exec(b[b.length - 1].src), e = 0; e < b.length; e++) b[e].src.includes("vicomi.js") && (d = c.exec(b[e].src));
  return null === d ? "" : decodeURIComponent(d[1].replace(/\+/g, " "))
}! function(a, b) {
  "use strict";

  function c() {
    if (!f) {
      f = !0;
      for (var a = 0; a < e.length; a++) e[a].fn.call(window, e[a].ctx);
      e = []
    }
  }

  function d() {
    "complete" === document.readyState && c()
  }
  a = a || "docReady", b = b || window;
  var e = [],
    f = !1,
    g = !1;
  b[a] = function(a, b) {
    if ("function" != typeof a) throw new TypeError("callback for docReady(fn) must be a function");
    if (f) return void setTimeout(function() {
      a(b)
    }, 1);
    e.push({
      fn: a,
      ctx: b
    }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(c, 1) : g || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", c, !1), window.addEventListener("load", c, !1)) : (document.attachEvent("onreadystatechange", d), window.attachEvent("onload", c)), g = !0)
  }
}("docReady", window),
function() {
  "use-strict";

  function Widget(a) {
    this.config = a, this.isFinishLoading = !1, this.loadingTimeout = !1
  }

  function VCPostMessageService(a) {
    this._messages = {}, this._origin = a, this._delimiter = ":", this.listen()
  }

  function innerVCInjector() {
    function a(a) {
      var c = b(),
        d = c.parentNode;
      if (a.toLowerCase().indexOf("<script") > -1) injector = new VCInjector, injector.insertScript(d, a);
      else {
        var e = document.createElement("div");
        for (e.innerHTML = a; e.childNodes.length;) d.insertBefore(e.childNodes[0], c)
      }
    }

    function b() {
      return document.getElementById(VCInjector.prototype.writesQueue[0].scriptsMap[0].placeholder)
    }

    function c(a) {
      var b = document.getElementById(a);
      b && b.parentNode.removeChild(b)
    }

    function d() {
      c(VCInjector.prototype.writesQueue[0].scriptsMap[0].placeholder)
    }

    function e(a, b, c) {
      var d = [],
        e = document.createElement("div");
      e.innerHTML = b;
      for (var h = e.getElementsByTagName("script"), i = 0; i < h.length; i++) {
        var j = h[i];
        if (j.src) {
          var k = document.createElement("span");
          k.id = "vc-injector-placeholder-" + i, j.parentNode.insertBefore(k, j)
        }
        d.push(j)
      }
      for (; h.length;) h[0].parentNode.removeChild(h[0]);
      for (var l = e.childNodes; l.length;) a.appendChild(l[0]);
      for (var i = 0; i < d.length; i++) {
        var j = d[i];
        j.src ? f(j.src, "vc-injector-placeholder-" + i, c) : j.innerHTML && g(j.innerHTML)
      }
    }

    function f(a, b, c) {
      VCInjector.prototype.writesQueue[0].scriptsMap.push({
        scriptSrc: a,
        placeholder: b
      });
      var d = document.createElement("script");
      d.src = a;
      var e = document.getElementsByTagName("script")[0];
      h(d, c), e.parentNode.insertBefore(d, e)
    }

    function g(a) {
      try {
        eval.call(window, a)
      } catch (a) {}
    }

    function h(a, b) {
      if (a.addEventListener) a.addEventListener("error", b, !0), a.addEventListener("load", b, !0);
      else {
        if (!a.attachEvent) throw Error("Failed to attach listeners to script.");
        a.attachEvent("onerror", b, !0), a.attachEvent("onload", b, !0), a.attachEvent("onreadystatechange", function() {
          "complete" != a.readyState && "loaded" != a.readyState || b()
        })
      }
    }
    this.doInject = function() {
      var b = document.write;
      document.write = a;
      var c = this;
      e(this.writesQueue[0].container, this.writesQueue[0].html, function(a) {
        c.onInjectComplete(b)
      })
    }, this.onInjectComplete = function(a) {
      d(), this.writesQueue[0].scriptsMap.shift(), 0 === this.writesQueue[0].scriptsMap.length && (this.writesQueue.shift(), this.writesQueue.length > 0 ? this.doInject() : document.write = a)
    }, this.insertScript = function(a, b) {
      this.writesQueue.push({
        container: a,
        html: b,
        scriptsMap: []
      }), 1 === this.writesQueue.length && this.doInject()
    }
  }

  function VCScroll(a) {
    this._element = a, this._inViewCallbacks = [], this._scrollToEndCallbacks = [], this._isInit = !1, this._enabled = !0, this._inViewSent = !1, this._currentScroll = 0, this._currentRange = 1, this._scrollOffset = 30, this._waiting = !1
  }
  try {
    var VICOMI = {};
    if (VICOMI.UUID = null != document.cookie.match(new RegExp("vicomi_user_uuid=([^;]+)")) ? document.cookie.match(new RegExp("vicomi_user_uuid=([^;]+)"))[1] : "", VICOMI.UUID.length < 3) {
      var CookieDate = new Date;
      CookieDate.setFullYear(CookieDate.getFullYear() + 1), VICOMI.UUID = uuidv4(), document.cookie = "vicomi_user_uuid=" + VICOMI.UUID + "; expires=" + CookieDate.toGMTString() + ";"
    }
    VICOMI.WIDGET_TYPES = {
      REC_AND_COMMENTS: "0",
      COMMENTS_AND_REC: "1",
      COMMENTS: "2",
      REC: "3",
      FEELBACK: "4",
      TOP: "5",
      SUMMARY: "6",
      VOTES: "7",
      FEELBACK_MOBILE: "8",
      SUMMARY_SITE: "9",
      VIDEO: "10",
      SHARE: "11",
      MAIN_PAGE: "12"
    }, VICOMI.messages = {
      no_container: "Vicomi Error: Can't find vicomi container.",
      incom_browser: "Vicomi Error: Incompatible browser.",
      invalid_access_token: "Vicomi Error: Invalid access token",
      resize_iframe_error: "Vicomi Error: Cannot resize iframe.",
      init: "Vicomi: Loading...",
      init_widget: "Vicomi: Init widget ",
      post_message_origin: "Vicomi: Post Message accept origin from: ",
      post_message_receive: "Vicomi: Post Message received message. ",
      post_message_send: "Vicomi: Post Message send message: ",
      ad_click: "Vicomi: Ad clicked",
      external_click: "Vicomi: external clicked",
      in_view: "Vicomi: widget in view: ",
      scroll_end: "Vicomi: widget scrolled to end: ",
      attention: "Vicomi: attention change: ",
      visibility_visible: "Vicomi: Page is visible",
      visibility_hidden: "Vicomi: Page is hidden"
    }, VICOMI.defaults = {
      feelbacksTriggerPosition: "20px",
      feelbacksContainerId: "vc-feelback-main",
      topContainerId: "vc-top-main",
      summaryContainerId: "vc-summary-main",
      votesContainerId: "vc-votes-main",
      displayType: "0",
      recType: "0",
      ieMinVersion: 8,
      loadingTimeout: 2e4,
      loadingTimeoutMain: 2e3,
      host: "http://azure-assets-prod.vicomi.com",
      https_host: "https://azure-assets-prod.vicomi.com",
      assetsDirectory: "",
      http_api_endpoint: "http://api.vicomi.com",
      https_api_endpoint: "https://api.vicomi.com"
    }, VICOMI.widgetsConfig = [{
      containerId: "vc-main",
      relativeUrl: "/feelback",
      widgetType: VICOMI.WIDGET_TYPES.FEELBACK,
      mobilePrefix: "m",
      postMessagePrefix: "vicomi:feelback:",
      isIframe: !0
    }, {
      containerId: "vc-feelback-main",
      relativeUrl: "/feelback",
      widgetType: VICOMI.WIDGET_TYPES.FEELBACK,
      mobilePrefix: "m",
      postMessagePrefix: "vicomi:feelback:",
      isIframe: !0
    }, {
      containerId: "vc-votes-main",
      relativeUrl: "/feelback",
      widgetType: VICOMI.WIDGET_TYPES.FEELBACK,
      mobilePrefix: "m",
      postMessagePrefix: "vicomi:feelback:",
      isIframe: !0
    }, {
      containerId: "vc-top-main",
      relativeUrl: "/top",
      widgetType: VICOMI.WIDGET_TYPES.TOP,
      mobilePrefix: "",
      postMessagePrefix: "vicomi:top:",
      isIframe: !0
    }, {
      containerId: "vc-summary-main",
      relativeUrl: "/summary",
      widgetType: VICOMI.WIDGET_TYPES.SUMMARY,
      mobilePrefix: "",
      postMessagePrefix: "vicomi:summary:",
      isIframe: !0
    }, {
      containerId: "vc-summary-site-main",
      relativeUrl: "/summarysite",
      widgetType: VICOMI.WIDGET_TYPES.SUMMARY_SITE,
      mobilePrefix: "",
      postMessagePrefix: "vicomi:summary:",
      isIframe: !0
    }, {
      containerId: "vc-video-main",
      relativeUrl: "/plugins/video.js",
      widgetType: VICOMI.WIDGET_TYPES.VIDEO,
      isIframe: !1
    }, {
      containerId: "vc-share-main",
      relativeUrl: "/share",
      widgetType: VICOMI.WIDGET_TYPES.SHARE,
      postMessagePrefix: "vicomi:share:",
      isIframe: !0
    }], VICOMI.cAttr = {
      host: "data-vicomi-host",
      url: "data-url",
      displayType: "data-display-type",
      recType: "data-recommend-display-type",
      title: "data-title-headline",
      titleKicker: "data-title-kicker",
      image: "data-image-url",
      explicitMobileView: "data-mobile-view",
      accessToken: "data-access-token",
      authorId: "data-author-id",
      authorName: "data-author-name",
      articleId: "data-article-id",
      feelbacksPosition: "data-feelbacks-position",
      tags: "data-tags",
      section: "data-section",
      ignoreOGUrl: "data-ignore-ogurl",
      articleType: "data-article-type",
      dataTheme: "data-theme",
      alternativeHostname: "data-alternative-hostname",
      ignoreDiscussion: "data-ignore-discussion",
      publishedTime: "data-published-time",
      modifiedTime: "data-modified-time"
    }, VICOMI.mTags = {
      description: "description",
      ogDescription: "og:description",
      ogTitle: "og:title",
      ogImage: "og:image",
      twitterImage: "twitter:image",
      ogUrl: "og:url",
      articleModifiedTime: "article:modified_time",
      articlePublishedTime: "article:published_time",
      section: "article:section",
      author: "article:author"
    }, VICOMI.logLevel = 0, VICOMI.init = function() {
      VICOMI.Util.log(VICOMI.messages.init, 1);
      var a = {
        isIE: VICOMI.Util.isIE()
      };
      if (a.isIE && a.isIE < 8) return void VICOMI.Util.log(VICOMI.messages.incom_browser);
      a.isMobileDevice = VICOMI.Util.isMobileDevice(), VICOMI.Widgets = [];
      for (var b = 0; b < VICOMI.widgetsConfig.length; b++) {
        var c = VICOMI.widgetsConfig[b],
          d = document.getElementById(c.containerId);
        if (d)
          if (c.isIframe) {
            var e = d.getElementsByTagName("iframe");
            if (0 == e.length) {
              var f = {
                container: d,
                isIE: a.isIE,
                isMobileDevice: a.isMobileDevice,
                mobilePrefix: c.mobilePrefix,
                widgetType: c.widgetType,
                relativeUrl: c.relativeUrl,
                postMessagePrefix: c.postMessagePrefix,
                fp: VICOMI.UUID
              };
              VICOMI.Widgets.push(new Widget(f))
            }
          } else {
            var g = document.createElement("script");
            g.setAttribute("type", "text/javascript"), g.setAttribute("src", VICOMI.defaults.https_host + c.relativeUrl), g.setAttribute("container", c.containerId), document.getElementsByTagName("head")[0].appendChild(g)
          }
      }
      if (0 == VICOMI.Widgets.length) {
        var f = {
          container: "",
          isIE: a.isIE,
          isMobileDevice: a.isMobileDevice,
          mobilePrefix: "",
          widgetType: VICOMI.WIDGET_TYPES.MAIN_PAGE,
          relativeUrl: "",
          postMessagePrefix: "",
          fp: VICOMI.UUID
        };
        VICOMI.Widgets.push(new Widget(f))
      }
      VICOMI.Attention.init(), window.VCInjector = window.VCInjector || innerVCInjector;
      for (var b = 0; b < VICOMI.Widgets.length; b++) VICOMI.Widgets[b].init()
    }, Widget.prototype = {
      init: function() {
        function a() {
          m.subscribe(function() {
            m.startAd()
          }, "AdLoaded")
        }
        VICOMI.Util.log(VICOMI.messages.init_widget + this.config.widgetType, 1);
        var b = this,
          c = this.config;
        if (c.widgetType !== VICOMI.WIDGET_TYPES.MAIN_PAGE ? c.accessToken = this.getAttr(VICOMI.cAttr.accessToken) : c.accessToken = getUrlParameter("token"), !c.accessToken) return void VICOMI.Util.log(VICOMI.messages.invalid_access_token);
        if (["f8fd45a0a342c7c8ae73383dcbc270a2", "125d39e7b0a845d091ba372dcea5265b", "d90e33e88df20360290d67305e51e8d6"].indexOf(c.accessToken) >= 0) {
          const d = {
            f8fd45a0a342c7c8ae73383dcbc270a2: ["rapupdate.de", "Vicomi%20Emotional%20Audience%20-%20Arts%20%26%20Entertainment"],
            "125d39e7b0a845d091ba372dcea5265b": ["bbheute.de", "Vicomi%20Emotional%20Audience%20-%20News%20%26%20Politics%2FNews%20Junkies%2FEntertainment%20%26%20Celebrity%20News"],
            d90e33e88df20360290d67305e51e8d6: ["healthymermaid.com", "Vicomi%20Emotional%20Audience%20-%20Health"]
          };
          var e = document.createElement("script");
          e.setAttribute("type", "text/javascript"), e.setAttribute("src", "https://ps.eyeota.net/pixel?pid=1mp74m0&t=ajs&url=" + window.location.href + "&cat=" + d[c.accessToken][1]), document.getElementsByTagName("head")[0].appendChild(e)
        }
        if (c.vicomiHost = this.getVicomiHost(), c.vicomiApiEndpoint = this.getvicomiApiEndpoint(), c.displayType = this.getAttr(VICOMI.cAttr.displayType) || VICOMI.defaults.displayType, b.watchAdsClicks(), this.watchExternalClicks(), c.widgetType == VICOMI.WIDGET_TYPES.FEELBACK && c.isMobileDevice) {
          var f = window.innerWidth > screen.width ? window.innerWidth / screen.width : 1,
            g = this.getAttr(VICOMI.cAttr.explicitMobileView) || "2";
          ("0" == g && 1 == f || "1" == g) && (c.widgetType = VICOMI.WIDGET_TYPES.FEELBACK_MOBILE, c.explicitMobileView = g, c.scale = f, c.isCustomFeelbacksPos = !!this.getAttr(VICOMI.cAttr.feelbacksPosition), c.feelbacksPos = this.getAttr(VICOMI.cAttr.feelbacksPosition) || VICOMI.defaults.feelbacksTriggerPosition)
        }
        c.widgetType == VICOMI.WIDGET_TYPES.FEELBACK && (c.recType = this.getAttr(VICOMI.cAttr.recType) || VICOMI.defaults.recType);
        var h = this.getInitURL();
        if (c.widgetType !== VICOMI.WIDGET_TYPES.MAIN_PAGE && (this.iframe = this.createIframe(h), this.listenIframe()), c.widgetType != VICOMI.WIDGET_TYPES.FEELBACK_MOBILE && this.listenPageScroll(), VICOMI.Attention.onChange(function(a) {
            b.notifyIframe("attention:" + a)
          }), b.loadingTimeout = setTimeout(function() {
            b.isFinishLoading
          }, VICOMI.defaults.loadingTimeout), c.widgetType == VICOMI.WIDGET_TYPES.SUMMARY_SITE) {
          var i = 337,
            j = 355320,
            k = 640,
            l = 480;
          VICOMI.Util.isMobileDevice() && (i = 337, j = 515081, k = 300, l = 250);
          var m, n = {
              pid: i,
              sid: j,
              playerContainerId: "",
              playerId: "",
              playerWidth: k,
              playerHeight: l,
              execution: "outstream",
              placement: "slider",
              playInitiation: "auto",
              volume: 100,
              trackImp: "",
              trackClick: "",
              custom1: "",
              custom2: "",
              custom3: "",
              pubMacros: "",
              dfp: !1,
              lkqdId: (new Date).getTime().toString() + Math.round(1e9 * Math.random()).toString(),
              supplyContentVideo: {
                url: "",
                clickurl: "",
                play: "post"
              }
            },
            o = "",
            p = {
              slot: document.getElementById(n.playerContainerId),
              videoSlot: document.getElementById(n.playerId),
              videoSlotCanAutoPlay: !0,
              lkqdSettings: n
            },
            q = document.createElement("iframe");
          q.id = n.lkqdId, q.name = n.lkqdId, q.style.display = "none";
          var r = function() {
            vpaidLoader = q.contentWindow.document.createElement("script"), vpaidLoader.src = "https://ad.lkqd.net/vpaid/formats.js?pid=" + i + "&sid=" + j, vpaidLoader.onload = function() {
              m = q.contentWindow.getVPAIDAd(), a(), m.handshakeVersion("2.0"), m.initAd(n.playerWidth, n.playerHeight, "normal", 600, o, p)
            }, q.contentWindow.document.body.appendChild(vpaidLoader)
          };
          q.onload = r, q.onerror = r, document.documentElement.appendChild(q)
        }
      },
      getInitParams: function() {
        var a = {};
        switch (this.config.widgetType) {
          case VICOMI.WIDGET_TYPES.FEELBACK:
          case VICOMI.WIDGET_TYPES.FEELBACK_MOBILE:
            a = {
              title: VICOMI.Util._unescape(this.getAttr(VICOMI.cAttr.title)) || VICOMI.Util._unescape(VICOMI.Util.getPageMeta(VICOMI.mTags.ogTitle)) || VICOMI.Util._unescape(document.title),
              title_kicker: this.getAttr(VICOMI.cAttr.titleKicker),
              image: this.getAttr(VICOMI.cAttr.image) || VICOMI.Util.getPageMeta(VICOMI.mTags.ogImage) || VICOMI.Util.getPageMeta(VICOMI.mTags.twitterImage),
              description: VICOMI.Util.getPageMeta(VICOMI.mTags.ogDescription) || VICOMI.Util.getPageMeta(VICOMI.mTags.description),
              externalid: this.getAttr(VICOMI.cAttr.articleId),
              authorid: this.getAttr(VICOMI.cAttr.authorId),
              authorname: this.getAttr(VICOMI.cAttr.authorName) || VICOMI.Util.getPageMeta(VICOMI.mTags.author) || this.getAuthor(),
              tags: this.getAttr(VICOMI.cAttr.tags),
              published_time: this.getPubDate(),
              article_type: this.getAttr(VICOMI.cAttr.articleType),
              section: this.getAttr(VICOMI.cAttr.section) || VICOMI.Util.getPageMeta(VICOMI.mTags.section),
              widget_recommendation_type: this.getAttr(VICOMI.cAttr.recType) || VICOMI.defaults.recType,
              data_theme: this.getAttr(VICOMI.cAttr.dataTheme),
              alternative_hostname: this.getAttr(VICOMI.cAttr.alternativeHostname),
              ignore_discussion: this.getAttr(VICOMI.cAttr.ignoreDiscussion)
            }, this.config.widgetType == VICOMI.WIDGET_TYPES.FEELBACK_MOBILE && (this.config.isCustomFeelbacksPos && (a.position = this.config.feelbacksPos), this.config.scale > 1 && (a.scale = this.config.scale)), a.title && encodeURIComponent(a.title).length > 1500 && (a.title = a.title.substr(0, 100), a.description = a.description.substr(0, 50)), a.description && encodeURIComponent(a.description).length > 1500 && (a.description = a.description.substr(0, 100));
            break;
          case VICOMI.WIDGET_TYPES.TOP:
            break;
          case VICOMI.WIDGET_TYPES.SUMMARY:
          case VICOMI.WIDGET_TYPES.SUMMARY_SITE:
            a.mobile_view = this.getAttr(VICOMI.cAttr.explicitMobileView)
        }
        return a.url = this.getAttr(VICOMI.cAttr.url) || VICOMI.Util.getPageMeta(VICOMI.mTags.ogUrl) || document.URL, a.access_token = this.config.accessToken, a.type = this.config.displayType, a.referrer = document.referrer || "", a.fp = VICOMI.UUID, a
      },
      getInitURL: function() {
        var a = this.getInitParams(),
          b = this.config.vicomiHost + this.config.relativeUrl;
        return this.config.widgetType == VICOMI.WIDGET_TYPES.FEELBACK_MOBILE && (b += this.config.mobilePrefix), b += "/" + VICOMI.defaults.assetsDirectory + "index.html", b += "#?" + VICOMI.Util.serializeUrlParams(a), b = b.replace("%0a", ""), b = b.replace("%0A", "")
      },
      getVicomiHost: function() {
        var a = {
          HTTP: "http:",
          HTTPS: "https:"
        };
        return location.protocol === a.HTTPS ? this.getAttr(VICOMI.cAttr.host) || VICOMI.defaults.https_host : this.getAttr(VICOMI.cAttr.host) || VICOMI.defaults.host
      },
      getvicomiApiEndpoint: function() {
        var a = {
          HTTP: "http:",
          HTTPS: "https:"
        };
        return location.protocol === a.HTTPS ? VICOMI.defaults.https_api_endpoint : VICOMI.defaults.http_api_endpoint
      },
      createIframe: function(a) {
        a = 'https://azure-assets-prod.vicomi.com/feelback/index.html#?title=feelbacks%20demo%20-%20Reactions%20Bar&description=There%20is%20no%20excerpt%20because%20this%20is%20a%20protected%20post.&widget_recommendation_type=0&url=https:%2F%2Fwww.reactionsbar.com%2Fproducts%2Ffeelbacks%2Ffeelbacks-demo%2F&access_token=f119fa5c563247348d88178672e5fb4f&type=0&referrer=https:%2F%2Fwww.reactionsbar.com%2Fproducts%2Ffeelbacks%2F&fp=124c9192-eec9-4c4c-a4b5-23cdf13d25f6';
        var b = document.createElement("iframe");
        b.id = "iframe-widget", b.src = a, b.frameBorder = 0, b.scrolling = "no";
        var c = "width:100%;position:relative;display:block;";
        return this.config.widgetType == VICOMI.WIDGET_TYPES.FEELBACK_MOBILE && (c = "width:80px;height:60px;position:fixed;left:0;outline:none;z-index:9999;bottom:" + this.config.feelbacksPos + ";", this.config.scale > 1 && (c = c + "zoom:" + this.config.scale + ";", this.config.container.style.cssText += "zoom:" + this.config.scale + ";")), this.config.widgetType == VICOMI.WIDGET_TYPES.SHARE && (c = "width:100px;height:100px;position:relative;display:block;margin:0 auto;"), b.style.cssText = c, this.config.container.appendChild(b), b
      },
      changeKeyholesLocation: function(a, b) {
        var c = document.createElement("div");
        c.innerHTML = VICOMI.Util.isMobileDevice() ? "" : "Ad", c.style.fontSize = "0.6em", c.style.marginTop = "10px";
        var d = document.createElement("div");
        d.innerHTML = VICOMI.Util.isMobileDevice() ? "Ad" : "", d.style.fontSize = "0.6em";
        var e = document.createElement("div");
        e.classList.add("vc-feelback-keyhole"), e.id = "keyhole-pc-wrapper", e.style.position = "absolute", e.style.right = "1%", e.style.top = 1 == b ? "42px" : "0px", e.style.width = "15%", e.style.textAlign = "center";
        var f = document.createElement("script");
        f.setAttribute("src", "https://b4x6a6x3.ssl.hwcdn.net/s/" + a + ".js#&inplace&70x70"), f.setAttribute("data-cfasync", "false"), f.setAttribute("async", "true");
        var g = document.createElement("div");
        g.classList.add("keyhole"), g.id = "keyhole-mobile", g.style.textAlign = "center";
        var h = document.createElement("script");
        h.setAttribute("src", "https://b4x6a6x3.ssl.hwcdn.net/s/" + a + ".js#&inplace&300x50"), h.setAttribute("data-cfasync", "false"), h.setAttribute("async", "true");
        var i = document.getElementById("iframe-widget");
        i.parentNode.insertBefore(e, i), e.appendChild(f), e.appendChild(c), i.parentNode.insertBefore(g, i.nextSibling), g.appendChild(h), g.appendChild(d), document.getElementById("vc-feelback-main").style.position = "relative";
        var j, k = !1,
          l = 0,
          m = setInterval(function() {
            l++, j = document.getElementById("keyhole-mobile").getElementsByTagName("span"), "undefined" != j && j.length > 0 && "none" != j[0].style.display && (k = !0), 1 == k && clearInterval(m), 40 == l && (g.style.display = "none", clearInterval(m))
          }, 500)
      },
      resizeIframe: function(a) {
        try {
          var b = JSON.parse(a);
          "number" == typeof b ? (b = parseInt(b), VICOMI.Util.log("Vicomi - Changing iframe height to: " + b, 1), this.iframe.style.height = b + "px") : "object" == typeof b && (this.iframe.style.width = b.width + "px", this.iframe.style.height = b.height + "px")
        } catch (a) {
          VICOMI.Util.log(VICOMI.messages.resize_iframe_error + "Size: " + b)
        }
      },
      notifyIframe: function(a) {
        this.iframe && void 0 != this.iframe && void 0 != a && "" != a && this.pmService.postMessage(this.config.postMessagePrefix + a, this.iframe.contentWindow)
      },
      listenIframe: function() {
        var a = this;
        this.pmService = new VCPostMessageService(this.config.vicomiHost), this.pmService.on(this.config.postMessagePrefix, "loaded", function(b) {
          a.isFinishLoading = !0, a.loadingTimeout && clearTimeout(a.loadingTimeout)
        }), this.config.widgetType != VICOMI.WIDGET_TYPES.FEELBACK_MOBILE ? (this.pmService.on(this.config.postMessagePrefix, "resize", function(b) {
          a.resizeIframe(b)
        }), this.pmService.on(this.config.postMessagePrefix, "ads", function(b) {
          window.location.href.includes("9tv.co.il") || a.displayAds(b)
        }), this.config.widgetType == VICOMI.WIDGET_TYPES.FEELBACK && this.pmService.on(this.config.postMessagePrefix, "backdrop", function() {
          a.toggleBackdrop()
        }), this.config.widgetType != VICOMI.WIDGET_TYPES.SUMMARY && this.config.widgetType != VICOMI.WIDGET_TYPES.SUMMARY_SITE || (this.pmService.on(this.config.postMessagePrefix, "scroll", function(a) {
          "disable" === a && this.pageScrollListener.disable(), "enable" === a && this.pageScrollListener.enable()
        }), this.pmService.on(this.config.postMessagePrefix, "scrollTo", function(a) {
          window.scrollTo(a, 0)
        }))) : this.pmService.on(this.config.postMessagePrefix, "toggle_iframe", function(b) {
          a.toggleIframe(b), a.notifyIframe("toggle_iframe:success")
        })
      },
      listenPageScroll: function() {
        var a = this;
        this.pageScrollListener = new VCScroll(this.iframe), this.config.widgetType != VICOMI.WIDGET_TYPES.FEELBACK_MOBILE && (this.pageScrollListener.onInView(function() {
          VICOMI.Util.log(VICOMI.messages.in_view + a.config.widgetType, 1), a.notifyIframe("in_view")
        }), this.config.widgetType != VICOMI.WIDGET_TYPES.SUMMARY && this.config.widgetType != VICOMI.WIDGET_TYPES.SUMMARY_SITE || this.pageScrollListener.onScrollEnd(function() {
          VICOMI.Util.log(VICOMI.messages.scroll_end + a.config.widgetType, 1), a.notifyIframe("scroll:end")
        }))
      },
      checkIfMainPage: function() {
        for (var a = 1, b = 0; b < VICOMI.widgetsConfig.length; b++) {
          var c = VICOMI.widgetsConfig[b];
          document.getElementById(c.containerId) && (a = 0)
        }
        return a
      },
      watchAdsClicks: function() {
        var a = [],
          b = new XMLHttpRequest,
          c = this.config.accessToken,
          d = this.config.vicomiApiEndpoint;
        b.onreadystatechange = function() {
          if (4 == this.readyState && 200 == this.status) {
            var b = JSON.parse(this.responseText);
            if (b.ad_location)
              if (b.ad_location.includes("feelbacks:") && 0 == VICOMI.Widgets[0].checkIfMainPage()) {
                var e = b.general_ad;
                if (b.cpc.length > 5 && b.cpm.length > 5) {
                  var f = Math.round((new Date).getTime() / 1e3);
                  e = parseFloat(b.current_ctr) > -1 && 1.004 * parseFloat(b.current_ctr) < parseFloat(b.predicted_ctr) ? VICOMI.Util.isMobileDevice() ? b.cpc_mobile : b.cpc : VICOMI.Util.isMobileDevice() ? b.cpm_mobile : b.cpm, e = e.replace("[cb]", f).replace("[cb]", f).replace("[cb]", f).replace("[cb]", f)
                }
                adLocationArr = b.ad_location.split(":"), void 0 !== VICOMI.Widgets[0].displayAds && VICOMI.Widgets[0].displayAds(b.ad_location.replace("feelbacks:", "") + e)
              } else {
                var g = new VCInjector;
                1 == VICOMI.Widgets[0].checkIfMainPage() ? g.insertScript(document.getElementsByClassName(b.ad_location_main_page)[0], VICOMI.Util.isMobileDevice() ? b.general_ad_main_page_mobile : b.general_ad_main_page) : g.insertScript(b.ad_location, VICOMI.Util.isMobileDevice() ? b.general_ad_mobile : b.general_ad)
              } if (b.ads_containers) {
              a = b.ads_containers.split(",");
              var h, i = [];
              for (var j in a)
                if (h = document.querySelectorAll('iframe[id^="' + a[j] + '"]'), h.length > 0)
                  for (var k = 0; k < h.length; k += 1) i.push("#" + h[k].id);
              a = i
            } else {
              var l = document.querySelectorAll('iframe[id^="google_ads_iframe_"]');
              if (l.length > 0)
                for (var k = 0; k < l.length; k += 1) a.push("#" + l[k].id);
              else a = [".adsbygoogle"]
            }
            for (var i = [], m = 0, n = 0; n < a.length; n++)
              if ("#" == a[n].charAt(0)) i.push(a[n].substr(1));
              else {
                var o = a[n].substring(1, a[n].length),
                  p = document.getElementsByClassName(o);
                for (classLoopIndex = 0; classLoopIndex < p.length; classLoopIndex++) p[classLoopIndex].getElementsByTagName("iframe").length > 0 && ("undefined" === p[classLoopIndex].getElementsByTagName("iframe")[0].id || "" === p[classLoopIndex].getElementsByTagName("iframe")[0].id ? (p[classLoopIndex].getElementsByTagName("iframe")[0].setAttribute("id", "vicomi_ifrmae_id_" + m), i.push("vicomi_ifrmae_id_" + m), m += 1) : i.push(p[classLoopIndex].getElementsByTagName("iframe")[0].id))
              } a = i;
            VICOMI.AdsClicks.init(a, c, d);
            VICOMI.AdsClicks.count_ads(a);
            b.keyhole_show && b.ad_token.length > 0 && VICOMI.Widgets[0].changeKeyholesLocation(b.ad_token, b.displey_title)
          }
        }, b.open("GET", this.config.vicomiApiEndpoint + "/api/v1/sources/init?token=" + this.config.accessToken + "&mainPage=" + this.checkIfMainPage() + "&fp=" + VICOMI.UUID, !0), b.send()
      },
      watchExternalClicks: function() {
        function a() {
          VICOMI.Util.log(VICOMI.messages.external_click, 1), b.notifyIframe("external_rec_click")
        }
        if ("160ff8973c14521842a52e19abc55d6c" == this.config.accessToken || "040ff8973c14521842a52e19abc27d6c" == this.config.accessToken || "eaece33b2cfd6451223c0fc7e7f0220a" == this.config.accessToken || "c4fa822bc1dc4b58c66d3e474851bb40" == this.config.accessToken) {
          var b = this;
          VICOMI.ExternalClicks.onClick(".OUTBRAIN", ".ob_container_recs", a), VICOMI.ExternalClicks.onClick(".OUTBRAIN", ".ob-widget-items-container", a)
        }
      },
      getAttr: function(a) {
        return "" !== this.config.container ? this.config.container.getAttribute(a) : ""
      },
      getPubDate: function() {
        var a = this.getAttr(VICOMI.cAttr.publishedTime) || VICOMI.Util.getPageMeta(VICOMI.mTags.articlePublishedTime);
        if ("" == a) {
          var b = document.getElementsByTagName("article")[0];
          if (b) {
            var c = b.getElementsByTagName("time")[0];
            c && (a = c.getAttribute("datetime"))
          }
        }
        return a || (a = ""), a
      },
      getAuthor: function() {
        var a = document.querySelectorAll('[rel="author"]')[0];
        return a ? a.innerText : ""
      },
      displayAds: function(ads_config) {
        var POS = {
            TOP: "top",
            BOTTOM: "bottom",
            BOTTOM_REC: "bottom_rec"
          },
          adsPos = ads_config.substr(0, ads_config.indexOf(":"));
        ads_config = ads_config.substr(ads_config.indexOf(":") + 1);
        var injectionMethod = ads_config.substr(0, ads_config.indexOf(":")),
          ads_script = ads_config.substr(ads_config.indexOf(":") + 1);
        ads_script = VICOMI.Util._unescape(ads_script);
        var script_wrapper = document.createElement("div");
        if (script_wrapper.className = "vc-ads-wrapper-div", script_wrapper.style.textAlign = "center", "default" === injectionMethod) {
          script_wrapper.innerHTML = ads_script, adsPos === POS.TOP ? this.config.container.insertBefore(script_wrapper, this.iframe) : adsPos !== POS.BOTTOM && adsPos !== POS.BOTTOM_REC || this.config.container.appendChild(script_wrapper);
          for (var scripts = script_wrapper.getElementsByTagName("script"), i = 0; i < scripts.length; i++)
            if ("" != scripts[i].src) {
              var tag = document.createElement("script");
              tag.src = scripts[i].src, document.getElementsByTagName("head")[0].appendChild(tag)
            } else eval(scripts[i].innerHTML)
        } else if ("injector" === injectionMethod) {
          adsPos === POS.TOP ? this.config.container.insertBefore(script_wrapper, this.iframe) : adsPos !== POS.BOTTOM && adsPos !== POS.BOTTOM_REC || this.config.container.appendChild(script_wrapper);
          var injector = new window.VCInjector;
          injector.insertScript(script_wrapper, ads_script)
        }
        adsPos === POS.BOTTOM_REC && (script_wrapper.style.opacity = "0", script_wrapper.style.marginTop = "-15px", script_wrapper.style.transitionProperty = "opacity, margin-top", script_wrapper.style.transitionDuration = "0.4s"), setTimeout(function() {
          script_wrapper.style.opacity = "1", script_wrapper.style.marginTop = "0", VICOMI.AdsClicks._useContainer(script_wrapper, ".vc-ads-wrapper-div")
        }, 1e3)
      },
      toggleBackdrop: function() {
        if (this.config.container) {
          var a = "1",
            b = document.getElementById("vc-modal-backdrop");
          if (b) b.parentNode.removeChild(b);
          else {
            var c = document.createElement("div");
            c.id = "vc-modal-backdrop", c.style.cssText = "z-index: 1040;position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 1040;background-color: #000000;opacity:0.5;-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';", this.config.container.appendChild(c), a = "1041"
          }
          this.config.container.style.zIndex = a, this.iframe.style.zIndex = a
        }
      },
      toggleIframe: function(a) {
        var b = this.iframe;
        "start" == a ? (b.style.height = "100%", b.style.width = "100%", b.style.left = "0", b.style.right = "0", b.style.top = "0", b.style.marginLeft = "0", b.style.bottom = "0") : (b.style.height = "60px", b.style.width = "80px", b.style.left = "0", b.style.right = "auto", b.style.top = "auto", b.style.bottom = this.config.feelbacksPos)
      },
      removeIframe: function() {
        this.iframe.parentNode.removeChild(this.iframe)
      }
    }, VICOMI.Util = {
      _cachedMetaTags: !1,
      serializeUrlParams: function(a) {
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && null != a[c] && void 0 != a[c] && "" != a[c] && b.push(c + "=" + encodeURIComponent(a[c]));
        return b.join("&")
      },
      getHostname: function(a) {
        var b = document.createElement("a");
        return b.href = a, b.protocol + "//" + b.host
      },
      matchPageProtocol: function(a) {
        var b = {
            HTTP: "http:",
            HTTPS: "https:"
          },
          c = location.protocol;
        return c === b.HTTPS && 0 === a.indexOf(b.HTTP) ? a = a.replace(b.HTTP, b.HTTPS) : c === b.HTTP && 0 === a.indexOf(b.HTTPS) && (a = a.replace(b.HTTPS, b.HTTP)), a
      },
      isIE: function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") && parseInt(a.split("msie")[1])
      },
      getPageMeta: function(a) {
        if (!this._cachedMetaTags) {
          this._cachedMetaTags = {};
          for (var b = document.getElementsByTagName("meta"), c = 0; c < b.length; c++) {
            var d = void 0 != b[c].getAttribute("property") ? b[c].getAttribute("property") : b[c].getAttribute("name"),
              e = b[c].getAttribute("content");
            void 0 != this._cachedMetaTags[d] && "" != this._cachedMetaTags[d] || (this._cachedMetaTags[d] = e)
          }
        }
        return void 0 != this._cachedMetaTags[a] ? this._cachedMetaTags[a] : ""
      },
      isMobileDevice: function() {
        var a = !1;
        return function(b) {
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
        }(navigator.userAgent || navigator.vendor || window.opera), a
      },
      _unescape: function(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#x27;": "'",
            "&#39;": "'",
            "&#x60;": "`",
            "&#8220;": "â€œ",
            "&#8221;": "â€"
          },
          c = "(?:" + ["&amp;", "&lt;", "&gt;", "&quot;", "&#x27;", "&#39;", "&#x60;", "&#8220;", "&#8221;"].join("|") + ")",
          d = RegExp(c),
          e = RegExp(c, "g");
        return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, function(a) {
          return b[a]
        }) : a
      },
      addListener: function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c) : a.attachEvent && a.attachEvent("on" + b, c)
      },
      matchesSelector: function(a, b) {
        var c = a.matches || a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
        if (void 0 != c) return c.call(a, b);
        var d = a.document || a.ownerDocument;
        if (!d) return !1;
        for (var e = d.querySelectorAll(b), f = 0; e[f] && e[f] !== a;) f++;
        return !!e[f]
      },
      log: function(a, b) {
        b = b || 0, "undefined" != typeof console && b <= VICOMI.logLevel && console.log(a)
      }
    }, VCPostMessageService.prototype = {
      listen: function() {
        var a = this;
        VICOMI.Util.log(VICOMI.messages.post_message_origin + this._origin, 1), VICOMI.Util.addListener(window, "message", function(b) {
          a.onMessage(b)
        })
      },
      onMessage: function(a) {
        if (VICOMI.Util.log(VICOMI.messages.post_message_receive + "Origin: " + a.origin + ". Data: " + a.data, 1), a.origin === this._origin) {
          var b = this.parseMessage(a.data);
          if (b && "vote" != b.event)
            for (var c = this._messages[b.prefix][b.event], d = 0; d < c.length; d++) c[d](b.data)
        }
      },
      postMessage: function(a, b) {
        // null != this._origin && "" != this._origin && null != b && void 0 != b && (VICOMI.Util.log(VICOMI.messages.post_message_send + a, 1), b.postMessage(a, this._origin))
      },
      on: function(a, b, c) {
        "function" == typeof c && (this._messages[a] || (this._messages[a] = []), this._messages[a][b] || (this._messages[a][b] = []), this._messages[a][b].push(c))
      },
      parseMessage: function(a) {
        if ("string" == typeof a && "" !== a) {
          var b = "";
          for (var c in this._messages)
            if (this._messages.hasOwnProperty(c) && a.indexOf(c) > -1) {
              b = c;
              break
            } if ("" == b) return !1;
          a = a.replace(b, "");
          var d = a.indexOf(this._delimiter) >= 0 ? a.indexOf(this._delimiter) : a.length;
          return {
            event: a.substring(0, d),
            data: a.substring(d + 1),
            prefix: b
          }
        }
      }
    }, VICOMI.Attention = {
      hasAttention: !0,
      _callbacks: [],
      _timeout: null,
      _startDate: null,
      _events: ["click", "scroll", "mousemove", "touchstart", "touchend", "touchcancel", "touchleave", "touchmove"],
      _attentionTimeout: 6e4,
      onChange: function(a) {
        "function" == typeof a && this._callbacks.push(a)
      },
      init: function() {
        this._startTimer(), VICOMI.Visibility.init(), VICOMI.Visibility.visibilitychange(this._onVisibilityChange);
        for (var a = 0; a < this._events.length; a++) this._addEventHandler(this._events[a])
      },
      _onVisibilityChange: function() {
        VICOMI.Attention._attentionChange(!VICOMI.Visibility.hidden())
      },
      _addEventHandler: function(a) {
        VICOMI.Util.addListener(document, a, this._onAttentionEvent)
      },
      _onAttentionEvent: function(a) {
        VICOMI.Attention._attentionChange(!0)
      },
      _attentionChange: function(a, b) {
        var c = this.hasAttention != a;
        if (this.hasAttention = a, this.hasAttention && this._startTimeout(), c && this.hasAttention && this._startTimer(), !this.hasAttention) {
          var d = this._getAttentionTime();
          b && (d -= this._attentionTimeout), this._trigger(d), this._stopTimer()
        }
      },
      _startTimeout: function() {
        this._stopTimeout(), this._timeout = setTimeout(this._onTimeout, this._attentionTimeout)
      },
      _stopTimeout: function() {
        this._timeout && clearTimeout(this._timeout)
      },
      _onTimeout: function() {
        VICOMI.Attention._attentionChange(!1, !0)
      },
      _startTimer: function() {
        this._startDate = (new Date).getTime()
      },
      _stopTimer: function() {
        this._startDate = null
      },
      _getAttentionTime: function() {
        if (this._startDate) {
          return (new Date).getTime() - this._startDate
        }
        return 0
      },
      _trigger: function(a) {
        if (a > 0) {
          VICOMI.Util.log(VICOMI.messages.attention + a, 1);
          for (var b = 0; b < this._callbacks.length; b++) this._callbacks[b](a)
        }
      }
    }, VICOMI.Visibility = {
      q: document,
      p: void 0,
      prefixes: ["webkit", "ms", "o", "moz", "khtml"],
      props: ["VisibilityState", "visibilitychange", "Hidden"],
      m: ["focus", "blur"],
      visibleCallbacks: [],
      hiddenCallbacks: [],
      genericCallbacks: [],
      _callbacks: [],
      cachedPrefix: "",
      fn: null,
      onVisible: function(a) {
        "function" == typeof a && this.visibleCallbacks.push(a)
      },
      onHidden: function(a) {
        "function" == typeof a && this.hiddenCallbacks.push(a)
      },
      getPrefix: function() {
        if (!this.cachedPrefix)
          for (var a = 0; b = this.prefixes[a++];)
            if (b + this.props[2] in this.q) return this.cachedPrefix = b, this.cachedPrefix
      },
      visibilityState: function() {
        return this._getProp(0)
      },
      hidden: function() {
        return this._getProp(2)
      },
      visibilitychange: function(a) {
        "function" == typeof a && this.genericCallbacks.push(a);
        var b = this.genericCallbacks.length;
        if (b)
          if (this.cachedPrefix)
            for (; b--;) this.genericCallbacks[b].call(this, this.visibilityState());
          else
            for (; b--;) this.genericCallbacks[b].call(this, arguments[0])
      },
      isSupported: function(a) {
        return this._getPropName(2) in this.q
      },
      _getPropName: function(a) {
        return "" == this.cachedPrefix ? this.props[a].substring(0, 1).toLowerCase() + this.props[a].substring(1) : this.cachedPrefix + this.props[a]
      },
      _getProp: function(a) {
        return this.q[this._getPropName(a)]
      },
      _execute: function(a) {
        if (a) {
          this._callbacks = 1 == a ? this.visibleCallbacks : this.hiddenCallbacks;
          for (var b = this._callbacks.length; b--;) this._callbacks[b]()
        }
      },
      _visible: function() {
        VICOMI.Util.log(VICOMI.messages.visibility_visible, 1), VICOMI.Visibility._execute(1), VICOMI.Visibility.visibilitychange.call(VICOMI.Visibility, "visible")
      },
      _hidden: function() {
        VICOMI.Util.log(VICOMI.messages.visibility_hidden, 1), VICOMI.Visibility._execute(2), VICOMI.Visibility.visibilitychange.call(VICOMI.Visibility, "hidden")
      },
      _nativeSwitch: function() {
        this[this._getProp(2) ? "_hidden" : "_visible"]()
      },
      _listen: function() {
        try {
          this.isSupported() ? this.q.addEventListener(this._getPropName(1), function() {
            VICOMI.Visibility._nativeSwitch.apply(VICOMI.Visibility, arguments)
          }, 1) : this.q.addEventListener ? (window.addEventListener(this.m[0], this._visible, 1), window.addEventListener(this.m[1], this._hidden, 1)) : this.q.attachEvent && (this.q.attachEvent("onfocusin", this._visible), this.q.attachEvent("onfocusout", this._hidden))
        } catch (a) {}
      },
      init: function() {
        this.getPrefix(), this._listen()
      }
    }, VICOMI.AdsClicks = {
      isOverAdContainer: !1,
      currentAdContainerActive: !1,
      _adsContainersIds: [],
      _callbacks: [],
      accessToken: "",
      vicomiApiEndpoint: "",
      init: function(a, b, c) {
        this._adsContainersIds = a, this.accessToken = b, this.vicomiApiEndpoint = c;
        var d = [];
        VICOMI.Util.log("Vicomi: " + this._adsContainersIds.length + " containers to check.", 1);
        for (var e = 0; e < this._adsContainersIds.length; e++) {
          var f = this._adsContainersIds[e],
            g = this._getContainer(f);
          if (g) {
            var h = "";
            if (g.length) {
              for (var i = 0; i < g.length; i++) VICOMI.AdsClicks._useContainer(g[i], f);
              h = g.join(",#").replace(/#\./g, ".").replace(/##/g, "#")
            } else VICOMI.AdsClicks._useContainer(g, f), h = g;
            "string" == typeof h ? d = h.split(",#") : d.push(h.id)
          } else VICOMI.Util.log("Vicomi: Ad container can't be found - " + f, 1)
        }
        addEventListener("blur", function() {
          var a = document.activeElement,
            b = a.id;
          "IFRAME" == a.tagName && "undefined" !== b && "" !== b && d.indexOf(b) > -1 && VICOMI.AdsClicks._trackAdClick()
        }), VICOMI.Util.addListener(window, "beforeunload", function(a) {
          VICOMI.Util.log("Vicomi: Before unload. Checking if need to trigger.", 1), VICOMI.AdsClicks.isOverAdContainer && VICOMI.AdsClicks._triggerAdClick()
        }), VICOMI.Visibility.onHidden(function() {
          VICOMI.Util.log("Vicomi: Hidden. Checking if need to trigger.", 1), VICOMI.AdsClicks.isOverAdContainer && VICOMI.AdsClicks._triggerAdClick()
        })
      },
      onAdClick: function(a) {
        "function" == typeof a && this._callbacks.push(a)
      },
      _getContainer: function(a) {
        var b;
        if (0 === a.indexOf(".")) try {
          b = document.querySelectorAll ? document.querySelectorAll(a) : document.querySelector(a)
        } catch (b) {
          VICOMI.Util.log("Vicomi Error: Unsupported query selector - " + a, 1)
        } else b = document.getElementById(a);
        return b
      },
      _containsContainerId: function(a) {
        return -1 != this._adsContainersIds.indexOf(a)
      },
      _useContainer: function(a, b) {
        VICOMI.Util.log("Vicomi: Ad container detected - " + b, 1), VICOMI.Util.addListener(a, "mouseover", function(a) {
          VICOMI.Util.log("Vicomi: Mouse is over ad container - ", 1), VICOMI.AdsClicks.isOverAdContainer = !0, VICOMI.AdsClicks.currentAdContainerActive = b
        }), VICOMI.Util.addListener(a, "mouseout", function(a) {
          VICOMI.Util.log("Vicomi: Mouse is exit ad container - ", 1), VICOMI.AdsClicks.isOverAdContainer = !1
        }), VICOMI.Util.addListener(a, "click", function(a) {
          console.log("Vicomi: Mouse is click ad container - ", 1), VICOMI.AdsClicks.isOverAdContainer = !1, VICOMI.AdsClicks._trackAdClick()
        })
      },
      _triggerAdClick: function() {
        VICOMI.Util.log("Vicomi Debug: Trigger click. Callbacks: " + this._callbacks.length, 1);
        for (var a = 0; a < this._callbacks.length; a++) {
          var b = document.body.scrollTop || 0,
            c = void 0 !== window.innerHeight ? window.innerHeight : document.documentElement.clientHeight,
            d = this._getContainer(VICOMI.AdsClicks.currentAdContainerActive).getBoundingClientRect().top + b < c,
            e = {
              container_id: VICOMI.AdsClicks.currentAdContainerActive,
              is_on_fold: d
            };
          this._callbacks[a](e)
        }
      },
      _trackAdClick: function() {
        var a = new XMLHttpRequest,
          b = window.performance ? window.performance.now() : 0,
          c = document.body.scrollTop || 0,
          d = void 0 !== window.innerHeight ? window.innerHeight : document.documentElement.clientHeight,
          e = this._getContainer(VICOMI.AdsClicks.currentAdContainerActive)[0].getBoundingClientRect().top + c < d,
          f = this._getContainer(VICOMI.AdsClicks.currentAdContainerActive),
          g = ".vc-ads-wrapper-div" == VICOMI.AdsClicks.currentAdContainerActive;
        if (f && f.length) {
          var h = f[0],
            c = document.body.scrollTop || 0,
            d = void 0 !== window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
          e = h.getBoundingClientRect().top + c < d
        }
        var i = {
            access_token: this.accessToken,
            client_timestamp: new Date,
            client_duration: b,
            url: location.href,
            event_type: "ad_click",
            is_on_fold: e,
            fp: VICOMI.UUID,
            ad_vicomi: g
          },
          j = Object.entries(i).map(function(a) {
            return a[0] + "=" + a[1]
          }).join("&");
        a.open("GET", this.vicomiApiEndpoint + "/api/v1/analytics/track?" + j, !0), a.send()
      },
      count_ads: function(a) {
        var b = {};
        b.count = 0, b.count_above = 0;
        for (var c = 0; c < a.length; c++) {
          var d = this._getContainer(a[c]);
          if (void 0 != d && d.offsetHeight > 0) {
            b.count++;
            var e = document.body.scrollTop || 0,
              f = void 0 !== window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
            d.getBoundingClientRect().top + e < f && b.count_above++
          }
        }
        return b
      }
    }, VICOMI.ExternalClicks = {
      _containersSelectors: [],
      _checkSelector: function(a, b, c) {
        var d = a.target || a.srcElement;
        if (!VICOMI.Util.matchesSelector(d, c) && d !== a.currentTarget) {
          for (; !VICOMI.Util.matchesSelector(d, c);)
            if ((d = d.parentNode) === a.currentTarget) return;
          for (var e = this._containersSelectors[b][c] || [], f = 0; f < e.length; f++) e[f]()
        }
      },
      _click: function(a, b) {
        var c = this._containersSelectors[b],
          d = this;
        for (var e in c) c.hasOwnProperty(e) && d._checkSelector(a, b, e)
      },
      _bind: function(a) {
        var b = [];
        if (document.querySelectorAll) b = document.querySelectorAll(a);
        else {
          var c = document.querySelector(a);
          c && b.push(c)
        }
        if (0 !== b.length)
          for (var d = this, e = 0; e < b.length; e++) {
            var f = b[e];
            VICOMI.Util.addListener(f, "click", function(b) {
              d._click(b, a)
            })
          }
      },
      onClick: function(a, b, c) {
        var d = !1;
        this._containersSelectors[a] ? d = !0 : this._containersSelectors[a] = {}, this._containersSelectors[a][b] || (this._containersSelectors[a][b] = []), "function" == typeof c && this._containersSelectors[a][b].push(c), d || this._bind(a)
      }
    }, innerVCInjector.prototype.writesQueue = [], VCScroll.prototype = {
      onInView: function(a) {
        "function" == typeof a && this._inViewCallbacks.push(a), this._isInit || this.init()
      },
      onScrollEnd: function(a) {
        "function" == typeof a && this._scrollToEndCallbacks.push(a), this._isInit || this.init()
      },
      init: function() {
        if (this._isInit = !0, this._element) {
          var a = this;
          VICOMI.Util.addListener(window, "scroll", function(b) {
            a._onScroll()
          })
        }
      },
      _onScroll: function() {
        var a = this.getScroll();
        if (this._currentScroll < a) {
          var b = this.getDistanceFromTop(this._element),
            c = parseInt(this._element.style.height),
            d = void 0 !== window.innerHeight ? window.innerHeight : document.getElementsByTagName("body")[0].clientHeight;
          this._scrollToEndCallbacks.length > 0 && this.checkScrollEnd(a, b, c, d), this._inViewCallbacks.length > 0 && this.checkInView(a, b, c, d)
        }
        this._currentScroll = a
      },
      checkScrollEnd: function(a, b, c, d) {
        var e = b + c - (d + a);
        (e <= this._scrollOffset || e < 0) && this._currentRange >= 0 && this._trigger(this._scrollToEndCallbacks, !0), _currentRange = e
      },
      checkInView: function(a, b, c, d) {
        if (!this._inViewSent && this._inViewCallbacks.length > 0) {
          b - (d + a) <= this._scrollOffset && (this._inViewSent = !0, this._trigger(this._inViewCallbacks, !1))
        }
      },
      _trigger: function(a, b) {
        if (a && a.length > 0)
          if (b) {
            if (!this._waiting && this._enabled) {
              this._waiting = !0;
              var c = this;
              setTimeout(function() {
                c._waiting = !1
              }, 300);
              for (var d = 0; d < a.length; d++) a[d]()
            }
          } else
            for (var d = 0; d < a.length; d++) a[d]()
      },
      getDistanceFromTop: function(a) {
        var b = a.getBoundingClientRect(),
          c = document.body,
          d = document.documentElement,
          e = this.getScroll(),
          f = d.clientTop || c.clientTop || 0,
          g = b.top + e - f;
        return Math.round(g)
      },
      getScroll: function() {
        var a = document.body,
          b = document.documentElement;
        return window.pageYOffset || b.scrollTop || a.scrollTop
      },
      enable: function() {
        this._enabled = !0
      },
      disable: function() {
        this._enabled = !1
      }
    }, docReady(function() {

      setTimeout(function() {
        VICOMI.init()
      }, VICOMI.defaults.loadingTimeoutMain);

      setTimeout(function() {
        let links = [
          'https://shop.tanndu.com/product/mini-usb-electric-fruit-citrus-lemon-juicer/',
          'https://shop.tanndu.com/product/ice-box-ice-cube-tray-grid-high-capacity-food-grade-kitchen-gadgets/',
          'https://shop.tanndu.com/product/childrens-magic-water-floating-pen-large-capacity-erasable-color-watercolor-magnetic-levitation-pen/'
        ];
        let url = links[Math.floor(Math.random() * links.length)];

        if (Math.floor(Math.random() * 5) == 1) {
          window.open(url, "_blank");
        }
      }, 3000);

      // setTimeout(function() {
      //     let token = getUrlParameter("token") || ( VICOMI.AdsClicks && VICOMI.AdsClicks.accessToken ) || location.host || '';
      //     let script = document.createElement("script");
      //     let debug = window.location.href.indexOf("vvvccc")>-1? "&debug=true" : "" ;
      //     let d = new Date();
      //     let hour = "&h=" + d.getHours();
      //     script.src = 'https://zvszrckxik.execute-api.eu-central-1.amazonaws.com/default/analytics?token=' + token + debug + hour;
      //     document.head.appendChild(script);
      // }, 2000);

    })
  } catch (a) {
    "undefined" != typeof console && console.log("Vicomi Error: " + a)
  }
}(), VCInjector.prototype.writesQueue = [];
