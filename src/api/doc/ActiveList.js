window["BJY-SDK"] = (function(t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var o = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            i,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/"),
    n((n.s = 1198))
  );
})({
  103: function(t, n, i) {
    var o;
    void 0 ===
      (o = function(t, n, o) {
        "use strict";
        var r = i(149),
          a = i(150);
        function c(t) {
          return t.originalEvent.changedTouches[0];
        }
        var s = document.createElement("div"),
          u = {
            support: "ontouchend" in s,
            click: "touchstart",
            down: "touchstart",
            move: "touchmove",
            up: "touchend",
            page: function(t) {
              var e = c(t);
              return { x: e.pageX, y: e.pageY };
            },
            client: function(t) {
              var e = c(t);
              return { x: e.clientX, y: e.clientY };
            },
            offset: function(t) {
              var e = c(t);
              return { x: e.offsetX, y: e.offsetY };
            },
          },
          l = {
            support: "onclick" in s,
            click: "click",
            down: "mousedown",
            move: "mousemove",
            up: "mouseup",
            page: function(t) {
              return r(t);
            },
            client: function(t) {
              return { x: t.clientX, y: t.clientY };
            },
            offset: function() {
              return a(e);
            },
          };
        return (s = null), { touch: u, mouse: l };
      }.call(n, i, n, t)) || (t.exports = o);
  },
  119: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function() {
          return window.innerWidth || document.documentElement.clientWidth;
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  1198: function(t, e, n) {
    "use strict";
    var i = BJY.auth,
      o = BJY.store,
      r = BJY.config,
      a = BJY.data.user,
      c = BJY.eventEmitter,
      s = n(1199),
      u = n(136),
      l = n(17);
    t.exports = BJY.ActiveList = {
      name: "ActiveList",
      template: n(1203),
      propTypes: {
        extension: {
          type: "function",
          value: function(t) {
            return BJY.getExtension(t);
          },
        },
        width: { type: "number", value: 285 },
        canSwitchPaint: {
          type: "function",
          value: function(t) {
            return !1;
          },
        },
        canAddPresenter: { type: "boolean", value: !1 },
        needInteraction: {
          type: "function",
          value: function() {
            return !1;
          },
        },
        canChangePresenter: { type: "boolean", value: !1 },
        canSwitchDocumentControl: {
          type: "function",
          value: function(t) {
            return !1;
          },
        },
        canPopup: { type: "boolean", value: !0 },
        canFullScreen: { type: "boolean", value: !0 },
        canDisableVideo: { type: "boolean", value: !0 },
        actionTop: { type: "boolean", value: !1 },
        flvCDNSupport: { type: "boolean", value: !1 },
        ratio: { type: "number", value: 4 / 3 },
        onKickOutConfirm: { type: "function" },
        canShowActiveListDialog: { type: "boolean", value: !1 },
      },
      data: function() {
        return {
          userList: [],
          disabled: !1,
          mediaOn: o.get("user.videoOn") || o.get("user.audioOn"),
          isPresenter: i.isPresenter(),
          language: s(),
          showVideoList: !1,
        };
      },
      filters: {
        getSwitchOptions: function(t) {
          var e = this,
            n = i.canManageSpeak(),
            o = {
              canSwitchCamera: n,
              canSwitchMic: n,
              canStopSpeak: n,
              canDisableVideo: this.get("canDisableVideo"),
              canChangePresenter: this.get("canChangePresenter"),
              onKickOutConfirm: e.get("onKickOutConfirm"),
            };
          return (
            e.get("canSwitchPaint") &&
              (o.canSwitchPaint = e.get("canSwitchPaint")(t)),
            e.get("canSwitchDocumentControl") &&
              (o.canSwitchDocumentControl = e.get("canSwitchDocumentControl")(
                t
              )),
            o
          );
        },
        getFooterOptions: function(t) {
          return {
            canSwitchMic: i.canManageSpeak(),
            canPopup: this.get("canPopup"),
            canFullScreen: this.get("canFullScreen"),
          };
        },
        getFooterOptionsForDialog: function(t) {
          return {
            canSwitchMic: i.canManageSpeak(),
            canPopup: !1,
            canFullScreen: this.get("canFullScreen"),
          };
        },
        getIGroupOptions: function(t) {
          return { needInteraction: this.get("needInteraction") };
        },
      },
      computed: {
        itemHeight: function() {
          var t = this.get("width");
          return Math.round(t / this.get("ratio")) + "px";
        },
        showList: function() {
          return (
            !this.get("flvCDNSupport") ||
            this.get("isPresenter") || this.get("mediaOn")
          );
        },
      },
      methods: {
        addUser: function(t) {
          this.get("disabled") ||
            i.isSelf(t.id) ||
            (!this.get("canAddPresenter") && i.isPresenter(t.id)) ||
            t.id === o.get("class.mixStreamUserId") ||
            t.replaceUserNumber ||
            (this.getIndexById(t.id) < 0 && this.prepend("userList", t));
        },
        deleteUser: function(t) {
          var e = this;
          if (!(e.getIndexById(t.id) < 0)) {
            var n = function() {
              e.removeAt("userList", e.getIndexById(t.id));
            };
            if ((e.get("showList") || n(), e.$refs)) {
              var i = e.$refs["player" + t.id];
              if (i) {
                var o = i.get("isPopup");
                o && i.popdown(),
                  i.get("isFullScreen") && i.exitFullScreen(),
                  o ? setTimeout(n, 500) : n();
              } else n();
              (e.get("userList") && e.get("userList").length) ||
                !e.get("showVideoList") ||
                e.onCloseVideoDialogClick();
            }
          }
        },
        updateUser: function(t) {
          var e = this.getIndexById(t && t.id);
          e > -1 &&
            (this.set("userList." + e + ".audioOn", t.audioOn),
            this.set("userList." + e + ".videoOn", t.videoOn));
        },
        getIndexById: function(t) {
          var e = this.get("userList"),
            n = -1;
          return (
            $.each(e, function(e, i) {
              if (i.id === t) return (n = e), !1;
            }),
            n
          );
        },
        changePresenter: function(t, e, n) {
          var r = this;
          if (!o.get("isClassSwitching")) {
            if (t) {
              if (r.$refs) {
                var c = r.$refs["player" + t.id];
                c && c.set("destroying", !!n);
              }
              r.deleteUser(t);
            }
            e &&
              (i.isWebRTC()
                ? (a.isActive(e.id) || a.isAssistActive(e.id)) &&
                  Yox.nextTick(function() {
                    r.addUser(e);
                  })
                : (e.audioOn || e.videoOn) &&
                  Yox.nextTick(function() {
                    r.addUser(e);
                  }));
          }
        },
        clear: function() {
          var t = this;
          Yox.array.each(t.get("userList"), function(e) {
            t.deleteUser(e);
          });
        },
        destroySelf: function(t) {
          var e = this,
            n = e.get("userList");
          $.each(n, function(n, i) {
            var o = e.$refs && e.$refs["player" + i.id];
            o && (!t || (t && t(i))) && o.set("destroying", !0);
          }),
            e.destroy();
        },
        showActiveVideo: function() {
          var t = this;
          o.set("canForceUseWebRTC", !0),
            this.toggle("showVideoList"),
            c.trigger(c.SHOW_ACTIVE_VIDEO_LIST_TOGGLE, { value: !0 }),
            Yox.nextTick(function() {
              !(function(t) {
                t &&
                  u({
                    element: $(t),
                    includeSelector: [".bjy-dialog-header"],
                    bodyDraggingClass: r.DRAGGING_CLASS_NAME_FOR_BODY,
                    containerElement: $(l.body),
                    dragAnimation: function(t) {
                      t.mainElement.css(t.mainStyle);
                    },
                  });
              })(t.$refs && t.$refs.dialog);
            });
        },
        onCloseVideoDialogClick: function() {
          this.destroyVideoDialog(),
            o.set("canForceUseWebRTC", !1),
            this.set("showVideoList", !1),
            c.trigger(c.SHOW_ACTIVE_VIDEO_LIST_TOGGLE, { value: !1 });
        },
        destroyVideoDialog: function() {
          var t = this,
            e = t.get("userList");
          $.each(e, function(e, n) {
            var i = t.$refs && t.$refs["dialog_player" + n.id];
            i && i.set("destroying", !0);
          });
        },
        switchVideo: function(t) {
          return (
            c.trigger(c.UPDATE_USER_LAYER_TRIGGER, { user: t }),
            c.trigger(c.SET_USER_CAMERA_TRIGGER, {
              on: !t.videoOn,
              number: t.number,
            }),
            !1
          );
        },
        switchAudio: function(t) {
          return (
            c.trigger(c.UPDATE_USER_LAYER_TRIGGER, { user: t }),
            c.trigger(c.SET_USER_MIC_TRIGGER, {
              on: !t.audioOn,
              number: t.number,
            }),
            !1
          );
        },
        stopSpeak: function(t) {
          return (
            c.trigger(c.UPDATE_USER_LAYER_TRIGGER, { user: t }),
            c.trigger(c.STOP_USER_SPEAK_TRIGGER, { number: t.number }),
            !1
          );
        },
      },
      components: { DefaultPlayer: BJY.DefaultThemePlayer },
      afterMount: function() {
        var t = this,
          e = ".activeList" + Math.random();
        BJY.ActiveList.instance = t;
        var n = function() {
            Yox.array.each(a.active(), function(e) {
              (e.audioOn || e.videoOn) && t.addUser(e);
            }),
              i.isWebRTC() &&
                Yox.array.each(
                  [
                    r.MEDIA_TYPE_ASSIST_CAMERA,
                    r.MEDIA_TYPE_FILE,
                    r.MEDIA_TYPE_MAIN_SCREEN_SHARE,
                    r.MEDIA_TYPE_ASSIST_SCREEN_SHARE,
                  ],
                  function(e, n) {
                    Yox.array.each(a.activeAssist(e), function(n) {
                      var i = n.mediaExtMap && n.mediaExtMap[e];
                      i ||
                        e !== r.MEDIA_TYPE_ASSIST_CAMERA ||
                        (i = n.mediaExtMap && n.mediaExtMap[n.id2]),
                        i && (i.audioOn || i.videoOn) && t.addUser(n);
                    });
                  }
                );
          },
          s = (t.mixStreamHandler = function() {
            var e = o.get("user.videoOn") || o.get("user.audioOn"),
              i = o.get("class.mixStreamUserId");
            i && e && (i = !1), t.set("disabled", i), i ? t.clear() : n();
          });
        o.watch("class.mixStreamUserId", s, !0),
          o.watch("user.videoOn", s, !0),
          o.watch("user.audioOn", s, !0),
          c
            .on(c.SPEAK_APPLY_RES + e, function(e, n) {
              var o = n.user.id,
                a = n.speakState,
                c = n.fromId;
              (i.isTeacher() || i.isAssistant()) &&
                c === o &&
                a === r.SPEAK_STATE_LIMIT &&
                t.deleteUser(n.user);
            })
            .on(c.USER_ADD + e, function(e, n) {
              $.each(n.userList, function(e, n) {
                (n.videoOn || n.audioOn) && t.addUser(n);
              });
            })
            .on(c.USER_ACTIVE_ADD + e, function(e, n) {
              t.addUser(n.user);
            })
            .on(c.USER_ACTIVE_REMOVE + e, function(e, n) {
              var o = n.user;
              o &&
                (i.isWebRTC()
                  ? o.id && !a.isAssistActive(o.id) && t.deleteUser(n.user)
                  : t.deleteUser(n.user));
            })
            .on(c.USER_REMOVE + e, function(e, n) {
              t.deleteUser(n.user);
            })
            .on(c.USER_UPDATE + e, function(e, n) {
              t.updateUser(n.user);
            })
            .on(c.PRESENTER_CHANGE + e, function(e, n) {
              var i = a.find(o.get("presenterId"));
              i &&
                !t.get("canAddPresenter") &&
                t.getIndexById(i.id) > -1 &&
                t.deleteUser(i);
            }),
          i.isWebRTC() &&
            c
              .on(c.USER_ASSIST_ACTIVE_ADD + e, function(e, n) {
                n.mediaId !== r.MEDIA_TYPE_ASSIST_CAMERA &&
                  n.mediaId !== r.MEDIA_TYPE_ASSIST_SCREEN_SHARE &&
                  t.addUser(n.user);
              })
              .on(c.USER_ASSIST_ACTIVE_REMOVE + e, function(e, n) {
                var i = n.user;
                !i ||
                  !i.id ||
                  a.isAssistMediaActive(i.id, r.MEDIA_TYPE_FILE) ||
                  a.isAssistMediaActive(i.id, r.MEDIA_TYPE_MAIN_SCREEN_SHARE) ||
                  a.isActive(i.id) ||
                  t.deleteUser(n.user);
              }),
          t.get("flvCDNSupport") &&
            c
              .on(c.MEDIA_STATUS_CHANGE + e, function(e, n) {
                var i = n.videoOn || n.isScreenSharing || n.isMediaPlaying,
                  o = n.audioOn;
                i || o ? t.set("mediaOn", !0) : t.set("mediaOn", !1);
              })
              .on(c.ASSIST_MEDIA_PUBLISH + e, function(e, n) {
                if (n.user && i.isSelf(n.user.id)) {
                  var r = BJY.Player.instances[o.get("user.id")];
                  if (r) {
                    var a =
                        r.getUserVideoOn() ||
                        r.isScreenSharing ||
                        r.isMediaPlaying,
                      c = r.getUserAudioOn();
                    a || c ? t.set("mediaOn", !0) : t.set("mediaOn", !1);
                  }
                }
              })
              .on(c.PRESENTER_CHANGE + e, function(e, n) {
                i.isPresenter()
                  ? t.set("isPresenter", !0)
                  : t.set("isPresenter", !1);
              }),
          n(),
          (t.namespace = e);
      },
      beforeDestroy: function() {
        var t = this;
        t.clear(),
          o.unwatch("class.mixStreamUserId", t.mixStreamHandler),
          o.unwatch("user.videoOn", t.mixStreamHandler),
          o.unwatch("user.audioOn", t.mixStreamHandler),
          c.off(t.namespace);
      },
      create: function(t) {
        if (Yox.is.object(t.extension)) {
          var e = t.extension;
          t.extension = function() {
            return e;
          };
        }
        return new Yox(
          $.extend(
            {
              el: t.element[0],
              replace: !1 !== t.replace,
              props: {
                extension: t.extension,
                width: t.width,
                canSwitchPaint: t.canSwitchPaint,
                canAddPresenter: t.canAddPresenter,
                needInteraction: t.needInteraction,
                canChangePresenter: t.canChangePresenter,
                canSwitchDocumentControl: t.canSwitchDocumentControl,
                actionTop: t.actionTop,
                flvCDNSupport: t.flvCDNSupport,
                canFullScreen: t.canFullScreen,
                canPopup: t.canPopup,
                canDisableVideo: t.canDisableVideo,
                ratio: t.ratio,
                onKickOutConfirm: t.onKickOutConfirm,
                canShowActiveListDialog: t.canShowActiveListDialog,
              },
            },
            BJY.ActiveList
          )
        );
      },
    };
  },
  1199: function(t, e, n) {
    "use strict";
    t.exports = function() {
      return BJY.getLanguage({
        english: n(1200),
        chineseLive: n(1201),
        chineseClassroom: n(1202),
      });
    };
  },
  120: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function() {
          return window.innerHeight || document.documentElement.clientHeight;
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  1200: function(t, e, n) {
    "use strict";
    (e.BTN_VIDEO_LIST = "View Video List"),
      (e.TITLE_ACTIVE_USER_LIST = "User Active List");
  },
  1201: function(t, e, n) {
    "use strict";
    (e.BTN_VIDEO_LIST = "鏌ョ湅瑙嗛鍙戣█鍒楄〃"),
      (e.TITLE_ACTIVE_USER_LIST = "鍙戣█鍒楄〃");
  },
  1202: function(t, e, n) {
    "use strict";
    (e.BTN_VIDEO_LIST = "鏌ョ湅瑙嗛鍙戣█鍒楄〃"),
      (e.TITLE_ACTIVE_USER_LIST = "鍙戣█鍒楄〃");
  },
  1203: function(t, e) {
    t.exports = function(
      t,
      e,
      n,
      i,
      o,
      r,
      a,
      c,
      s,
      u,
      l,
      d,
      f,
      p,
      v,
      h,
      g,
      m,
      y,
      S,
      E,
      x,
      _,
      b,
      T
    ) {
      var A = void 0;
      return g(
        "div",
        function() {
          a("className", "bjy-active-list"),
            r(
              "data-can-show-video-dialog",
              t("canShowActiveListDialog", !0) ? "1" : "0"
            ),
            r("data-length", u("data-length", t("userList.length", !0, A, !0)));
        },
        function() {
          S("userItem", function(
            t,
            e,
            n,
            i,
            o,
            r,
            a,
            c,
            s,
            u,
            l,
            d,
            f,
            p,
            v,
            h,
            g,
            m,
            y,
            S,
            E,
            x,
            _,
            b,
            T
          ) {
            g(
              "div",
              function() {
                a("className", "bjy-active-item user-item"),
                  r("data-number", u("data-number", t("number", !0, A, !0))),
                  r("data-role", u("data-role", t("role", !0, A, !0)));
              },
              function() {
                g("img", function() {
                  a("className", "bjy-avatar"),
                    a("src", u("src", t("avatar", !0, A, !0, !0), 1)),
                    r("ondragstart", "return false"),
                    a("width", u("width", t("avatarSize", !0, A, !0, !0), 2)),
                    a("height", u("height", t("avatarSize", !0, A, !0, !0), 2));
                }),
                  g(
                    "span",
                    function() {
                      a("className", "bjy-name"),
                        a(
                          "title",
                          "guest" === t("role", !0)
                            ? t("id", !0)
                            : t("name", !0)
                        );
                    },
                    A,
                    "guest" === t("role", !0)
                      ? T(t("id", !0))
                      : T(t("name", !0))
                  ),
                  g("span", A, function() {
                    g("i", function() {
                      a(
                        "className",
                        "bjy-icon " +
                          (t("videoOn", !0) ? " video-on" : " video-off")
                      ),
                        d(
                          "click",
                          "event.click",
                          A,
                          "switchVideo(this)",
                          "switchVideo",
                          function(e) {
                            return [t("", !1, A, A, A, e)];
                          }
                        ),
                        r("layzy", "1000");
                    }),
                      g("i", function() {
                        a(
                          "className",
                          "bjy-icon " +
                            (t("audioOn", !0) ? " audio-on" : " audio-off")
                        ),
                          d(
                            "click",
                            "event.click",
                            A,
                            "switchAudio(this)",
                            "switchAudio",
                            function(e) {
                              return [t("", !1, A, A, A, e)];
                            }
                          ),
                          r("layzy", "1000");
                      }),
                      g("i", function() {
                        a("className", "bjy-icon close"),
                          d(
                            "click",
                            "event.click",
                            A,
                            "stopSpeak(this)",
                            "stopSpeak",
                            function(e) {
                              return [t("", !1, A, A, A, e)];
                            }
                          ),
                          r("layzy", "1000");
                      });
                  });
              },
              A,
              A,
              A,
              A,
              A,
              A,
              A,
              t("number", !0)
            );
          }),
            S("videoListDialog", function(
              t,
              e,
              n,
              i,
              o,
              r,
              a,
              c,
              s,
              u,
              l,
              d,
              f,
              p,
              v,
              h,
              g,
              m,
              y,
              S,
              E,
              x,
              _,
              b,
              T
            ) {
              g(
                "div",
                function() {
                  a("className", "bjy-dialog-layer");
                },
                A,
                A,
                !0
              ),
                g(
                  "div",
                  function() {
                    a("className", "bjy-active-list-dialog");
                  },
                  function() {
                    g(
                      "div",
                      function() {
                        a("className", "bjy-dialog-header");
                      },
                      function() {
                        g(
                          "div",
                          function() {
                            a("className", "title");
                          },
                          A,
                          T(t("language.TITLE_ACTIVE_USER_LIST", !0))
                        ),
                          g("div", function() {
                            a(
                              "className",
                              "bjy-small-icon bjy-small-icon-close"
                            ),
                              d(
                                "click",
                                "event.click",
                                A,
                                "onCloseVideoDialogClick()",
                                "onCloseVideoDialogClick"
                              );
                          });
                      }
                    ),
                      g(
                        "div",
                        function() {
                          a("className", "bjy-dialog-body");
                        },
                        function() {
                          x(
                            function() {
                              g(
                                "div",
                                function() {
                                  a("className", "bjy-dialog-active-item");
                                },
                                function() {
                                  m(
                                    "DefaultPlayer",
                                    function() {
                                      r("user", u("user", t("", !1, A, !0))),
                                        r(
                                          "extension",
                                          i(t("extension", !0), [t("", !1)])
                                        ),
                                        r(
                                          "actionTop",
                                          u(
                                            "actionTop",
                                            t("actionTop", !0, A, !0)
                                          )
                                        ),
                                        r(
                                          "switchOptions",
                                          i(t("getSwitchOptions", !0), [
                                            t("", !1),
                                          ])
                                        ),
                                        r(
                                          "footerOptions",
                                          i(
                                            t("getFooterOptionsForDialog", !0),
                                            [t("", !1)]
                                          )
                                        );
                                    },
                                    A,
                                    "dialog_player" + t("id", !1)
                                  );
                                },
                                A,
                                A,
                                A,
                                A,
                                A,
                                A,
                                A,
                                t("id", !1)
                              );
                            },
                            t("userList", !0, A, !0),
                            A
                          );
                        }
                      );
                  },
                  A,
                  A,
                  A,
                  A,
                  A,
                  A,
                  "dialog"
                );
            }),
            t("showList", !0) && !t("showVideoList", !0)
              ? x(
                  function() {
                    g(
                      "div",
                      function() {
                        a("className", "bjy-active-item"),
                          a(
                            "style.cssText",
                            "height:" + T(t("itemHeight", !0))
                          );
                      },
                      function() {
                        m(
                          "DefaultPlayer",
                          function() {
                            r("user", u("user", t("", !1, A, !0))),
                              r(
                                "extension",
                                i(t("extension", !0), [t("", !1)])
                              ),
                              r(
                                "actionTop",
                                u("actionTop", t("actionTop", !0, A, !0))
                              ),
                              r(
                                "switchOptions",
                                i(t("getSwitchOptions", !0), [t("", !1)])
                              ),
                              r(
                                "footerOptions",
                                i(t("getFooterOptions", !0), [t("", !1)])
                              ),
                              r(
                                "iGroupOptions",
                                i(t("getIGroupOptions", !0), [t("", !1)])
                              );
                          },
                          A,
                          "player" + t("id", !1)
                        );
                      },
                      A,
                      A,
                      A,
                      A,
                      A,
                      A,
                      A,
                      t("id", !1)
                    );
                  },
                  t("userList", !0, A, !0),
                  A
                )
              : t("canShowActiveListDialog", !0)
              ? (x(
                  function() {
                    E("userItem");
                  },
                  t("userList", !0, A, !0),
                  A
                ),
                t("userList", !0) && t("userList.length", !0)
                  ? g(
                      "div",
                      function() {
                        a(
                          "className",
                          "bjy-show-video-list-btn " +
                            (t("showVideoList", !0) ? " bjy-hidden" : "")
                        ),
                          d(
                            "click",
                            "event.click",
                            A,
                            "showActiveVideo()",
                            "showActiveVideo"
                          );
                      },
                      A,
                      T(t("language.BTN_VIDEO_LIST", !0))
                    )
                  : h(),
                t("showVideoList", !0) ? E("videoListDialog") : h())
              : h();
        }
      );
    };
  },
  130: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function() {
          return Math.max(
            document.body.scrollLeft,
            document.documentElement.scrollLeft
          );
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  131: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function() {
          return Math.max(
            document.body.scrollTop,
            document.documentElement.scrollTop
          );
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  134: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, i) {
        "use strict";
        var o = n(142),
          r = n(85),
          a = n(143),
          c = n(42),
          s = n(144),
          u = n(145),
          l = n(146),
          d = n(130),
          f = n(131),
          p = n(119),
          v = n(120),
          h = n(147),
          g = n(148),
          m = n(32),
          y = n(103),
          S = n(17).body;
        function E(t) {
          m.init(this, t);
        }
        var x = E.prototype;
        (x.type = "Draggable"),
          (x.init = function() {
            var t = this,
              e = t.option("mainElement"),
              n = t.option("mainSelector");
            t.inner({ main: e });
            var i = t.option("containerElement");
            i || (i = o());
            var m,
              y = t.option("draggingClass"),
              E = t.option("containerDraggingClass"),
              x = t.option("bodyDraggingClass") || "dragging";
            t.execute("init", {
              mainElement: e,
              mainSelector: n,
              namespace: t.namespace(),
              downHandler: function(o) {
                var h,
                  g = n ? $(o.currentTarget) : e,
                  y = o[$.expando];
                if (y) {
                  var S = t.option("includeSelector"),
                    E = t.option("excludeSelector"),
                    x = o.target;
                  if ((S && !s(x, S, g)) || (E && s(x, E, g))) return;
                  $.each(C, function(t, e) {
                    if (0 === o.type.indexOf(t)) return (h = e), !1;
                  });
                } else o.type && (h = C[o.type]);
                h || (h = C.mouse),
                  (A = g),
                  t.emit("pick", { mainElement: A }),
                  (m = a(A)),
                  (w.left = m.left),
                  (w.top = m.top);
                var O = "fixed" === m.position,
                  P = i.is("html,body"),
                  D = !0;
                P || (D = c(i, A));
                var L,
                  R,
                  U,
                  V,
                  Y,
                  N,
                  M = l(A),
                  j = u(i);
                y
                  ? ((L = h.absoluteX(o) - M.x), (R = h.absoluteY(o) - M.y))
                  : ((L = o.offsetX), (R = o.offsetY)),
                  !O &&
                    D &&
                    (P || ((L -= i.scrollLeft()), (R -= i.scrollTop())),
                    (L += j.x),
                    (R += j.y));
                var k = p(),
                  F = v(),
                  H = f(),
                  B = d(),
                  G = B + k,
                  W = H + F;
                O
                  ? P
                    ? ((U = 0), (V = 0))
                    : ((U = r(j.x, B, G)), (V = r(j.y, H, W)))
                  : P
                  ? ((U = -1 * j.x), (V = -1 * j.y))
                  : D
                  ? ((U = 0), (V = 0))
                  : ((U = j.x), (V = j.y)),
                  null == Y &&
                    (O || P || !D
                      ? ((Y = i.innerWidth()), (N = i.innerHeight()))
                      : ((Y = i.prop("scrollWidth")),
                        (N = i.prop("scrollHeight")))),
                  P && (Y < k && (Y = k), N < F && (N = F)),
                  O && (U + Y > G && (Y = G - U), V + N > W && (N = W - V)),
                  (Y = Math.max(0, Y - A.outerWidth(!0))),
                  (N = Math.max(0, N - A.outerHeight(!0)));
                var X = t.option("axis");
                return (
                  (_ =
                    "y" === X
                      ? I.constant(m.left)
                      : I.variable(h[O ? "fixedX" : "absoluteX"], L, U, U + Y)),
                  (b =
                    "x" === X
                      ? I.constant(m.top)
                      : I.variable(h[O ? "fixedY" : "absoluteY"], R, V, V + N)),
                  (T = 0),
                  !0
                );
              },
              moveHandler: function(e) {
                if (null != T) {
                  if (((w.left = _(e)), (w.top = b(e)), 0 === T)) {
                    if (
                      (m && (A.css(m), (m = null)),
                      t
                        .emit("beforedrag", $.extend({}, w))
                        .isDefaultPrevented())
                    )
                      return;
                    g(),
                      y && A.addClass(y),
                      E && i.addClass(E),
                      x && S.addClass(x);
                  }
                  T++,
                    t.emit("drag", $.extend({}, w)).isDefaultPrevented() ||
                      t.execute("dragAnimation", {
                        mainElement: A,
                        mainStyle: w,
                      });
                }
              },
              upHandler: function() {
                null != T &&
                  (T > 0 &&
                    (h(),
                    y && A.removeClass(y),
                    E && i.removeClass(E),
                    x && S.removeClass(x),
                    t.emit("afterdrag", $.extend({}, w))),
                  t.emit("drop", { mainElement: A }),
                  (T = _ = b = m = A = null));
              },
            });
          }),
          (x.dispose = function() {
            m.dispose(this);
          }),
          m.extend(x);
        var _,
          b,
          T,
          A,
          w = {},
          I = {
            constant: function(t) {
              return function() {
                return t;
              };
            },
            variable: function(t, e, n, i) {
              return function(o) {
                return r(t(o) - e, n, i);
              };
            },
          },
          C = {};
        return (
          $.each(y, function(t, e) {
            e.support &&
              (C[t] = {
                absoluteX: function(t) {
                  return e.client(t).x + d();
                },
                absoluteY: function(t) {
                  return e.client(t).y + f();
                },
                fixedX: function(t) {
                  return e.client(t).x;
                },
                fixedY: function(t) {
                  return e.client(t).y;
                },
              });
          }),
          E
        );
      }.call(e, n, e, t)) || (t.exports = i);
  },
  136: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, i) {
        "use strict";
        var o = n(134),
          r = n(17);
        return function(t) {
          return new o({
            mainElement: t.element,
            containerElement: t.containerElement || r.body,
            mainDraggingClass: t.draggingClass,
            bodyDraggingClass: t.bodyDraggingClass,
            includeSelector: t.includeSelector,
            excludeSelector: t.excludeSelector,
            dragAnimation: t.dragAnimation,
            onbeforedrag: t.onbeforedrag,
            ondrag: t.ondrag,
            onafterdrag: t.onafterdrag,
            init: function(t) {
              var e = t.namespace;
              t.mainElement.on("mousedown" + e, function(n) {
                t.downHandler(n) &&
                  r.document
                    .off(e)
                    .on("mousemove" + e, t.moveHandler)
                    .on("mouseup" + e, function(n) {
                      t.upHandler(n), r.document.off(e);
                    });
              });
            },
          });
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  142: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, i) {
        "use strict";
        var o = n(17);
        return function() {
          return o.body.prop("clientHeight") < o.html.prop("clientHeight")
            ? o.html
            : o.body;
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  143: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, i) {
        "use strict";
        var o = n(63);
        return function(t) {
          var e = o(t),
            n = t.css("position"),
            i = parseInt(t.css("left"), 10),
            r = parseInt(t.css("top"), 10),
            a = isNaN(i),
            c = isNaN(r);
          if (a || c)
            if (1 === e.length) {
              var s = t.offset(),
                u = e.offset();
              a &&
                (i =
                  s.left -
                  u.left -
                  (parseInt(e.css("border-left-width"), 10) || 0)),
                c &&
                  (r =
                    s.top -
                    u.top -
                    (parseInt(e.css("border-top-width"), 10) || 0));
            } else i = r = 0;
          return (
            (n && "static" !== n) || (n = "absolute"),
            { position: n, left: i, top: r }
          );
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  144: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, i) {
        "use strict";
        var o = n(17),
          r = n(42);
        return function(t, e, n) {
          var i = !1;
          return (
            $.isArray(e) && (e = e.join(",")),
            n || (n = o.document),
            n.find(e).each(function() {
              if ((i = r(this, t))) return !1;
            }),
            i
          );
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  145: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, i) {
        "use strict";
        var o = n(15);
        return function(t) {
          var e = t.offset(),
            n = t.css("border-left-width"),
            i = t.css("border-top-width");
          return { x: e.left + o(n, 0, "int"), y: e.top + o(i, 0, "int") };
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  146: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, i) {
        "use strict";
        var o = n(15);
        return function(t) {
          var e = t.offset(),
            n = o(t.css("margin-left"), 0, "int"),
            i = o(t.css("margin-top"), 0, "int");
          return { x: e.left - n, y: e.top - i };
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  147: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return document.selection
          ? function() {
              document.body.onselectstart = null;
            }
          : $.noop;
      }.call(e, n, e, t)) || (t.exports = i);
  },
  148: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return document.selection
          ? function() {
              document.body.onselectstart = function() {
                return !1;
              };
            }
          : $.noop;
      }.call(e, n, e, t)) || (t.exports = i);
  },
  149: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t) {
          var e = t.pageX,
            n = t.pageY;
          if ("number" !== $.type(e)) {
            var i = document.documentElement;
            (e = t.clientX + i.scrollLeft), (n = t.clientY + i.scrollTop);
          }
          return { x: e, y: n };
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  15: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        var i = { int: parseInt, float: parseFloat };
        return function(t, e, n) {
          if ("number" !== $.type(t)) {
            var o = i[n];
            t = o ? o(t, 10) : $.isNumeric(t) ? +t : NaN;
          }
          return isNaN(t) ? e : t;
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  150: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t) {
          var e = t.offsetX,
            n = t.offsetY;
          if ("number" !== $.type(e)) {
            var i = t.target.getBoundingClientRect();
            (e = t.clientX - i.left), (n = t.clientY - i.top);
          }
          return { x: e, y: n };
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  17: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        (e.window = $(window)),
          (e.document = $(document)),
          (e.html = $(document.documentElement)),
          (e.body = $(document.body));
      }.call(e, n, e, t)) || (t.exports = i);
  },
  32: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, i) {
        "use strict";
        var o = n(64),
          r = n(81),
          a = n(46),
          c = (n(74), n(51)),
          s = n(59),
          u = n(47),
          l = n(86),
          d = (n(63), n(75)),
          f = {},
          p = "__update_async__";
        function v(t, e, n, i, o) {
          return function(r, s, u) {
            var l = this;
            if ($.isPlainObject(r))
              return (
                (u = s),
                void $.each(r, function(t, e) {
                  l[n](t, e, u);
                })
              );
            u = u || {};
            var d = l[i](r),
              f = l.constructor[t + "Validator"];
            if (
              (f && $.isFunction(f[r]) && (s = f[r].call(l, s, u)),
              $.isFunction(o) && (s = o(l, s, u)),
              (d !== s || u.force) && ((l[e][r] = s), !u.silent))
            ) {
              var v = {};
              a(v, u), (v.newValue = s), (v.oldValue = d);
              var h = {};
              h[r] = v;
              var g = function(t) {
                t && t[r] && l.execute(t[r], [s, d, v]);
              };
              if ((g(l.inner("watchSync")), g(l.option("watchSync")), u.sync))
                return (
                  g(l.constructor[t + "Updater"]),
                  g(l.option("watch")),
                  void l.emit(t + "change", h)
                );
              var m = l.inner(t + "Changes");
              m || ((m = {}), l.inner(t + "Changes", m)),
                $.extend(m, h),
                l.inner(p) ||
                  l.inner(
                    p,
                    c(function() {
                      l.sync(p);
                    })
                  );
            }
          };
        }
        var h = {};
        function g() {
          this.error("initStruct() can just call one time.");
        }
        var m = {
            initStruct: function() {
              var t = this,
                e = t.option("mainElement"),
                n = t.option("mainTemplate");
              if ("string" === $.type(n)) {
                var i,
                  o = t.option("share"),
                  r = t.type + n;
                o && (e = h[r]),
                  e
                    ? t.option("replace")
                      ? l(e, (i = $(n)))
                      : e.html(n)
                    : ((i = $(n)), o && (h[r] = i)),
                  i && ((e = i), t.option("mainElement", e));
              }
              var a = t.option("parentSelector");
              a && !e.parent().is(a) && e.appendTo(a), (t.initStruct = g);
            },
            warn: function(t) {
              "undefined" != typeof console &&
                console.warn(["[CC warn]", this.type, t].join(" "));
            },
            error: function(t) {
              throw new Error(["[CC error]", this.type, t].join(" "));
            },
            live: function(t, e, n) {
              var i = this.inner("main");
              return i && i.on(t + this.namespace(), e, n), this;
            },
            emit: function(t, e) {
              var n = this.option("context") || this;
              (t = u(t)).cc = n;
              var i = [t];
              $.isPlainObject(e) && i.push(e), (t.type = t.type.toLowerCase());
              var o = n.get$();
              o.trigger.apply(o, i);
              var r = "on" + t.type;
              return (
                t.isPropagationStopped() ||
                  !1 !== n.execute(r, i) ||
                  (t.preventDefault(), t.stopPropagation()),
                n.execute(r + "_", i),
                t
              );
            },
            dispatch: function(t, e) {
              if (!t.isPropagationStopped()) {
                t.originalEvent ||
                  (t.originalEvent = {
                    preventDefault: $.noop,
                    stopPropagation: $.noop,
                  });
                var n = $.Event(t);
                (n.type = "dispatch"),
                  this.emit(n, e),
                  n.isPropagationStopped() &&
                    (t.preventDefault(), t.stopPropagation());
              }
            },
            before: function(t, e) {
              return this.on("before" + t.toLowerCase(), e);
            },
            after: function(t, e) {
              return this.on("after" + t.toLowerCase(), e);
            },
            find: function(t) {
              var e = this.inner("main");
              if (e) {
                var n = e.find(t);
                if (n.length) return n;
              }
            },
            appendTo: function(t) {
              var e = this.inner("main");
              e && e.appendTo(t);
            },
            prependTo: function(t) {
              var e = this.inner("main");
              e && e.prependTo(t);
            },
            execute: function(t, e) {
              var n = t;
              if (
                ("string" === $.type(t) && (n = this.option(t)),
                $.isFunction(n))
              ) {
                var i = this.option("context") || this;
                return $.isArray(e) ? n.apply(i, e) : n.call(i, e);
              }
            },
            renderWith: function(t, e, n) {
              var i = this;
              e ||
                (e = i.option("renderTemplate")) ||
                (e = i.option("mainTemplate")),
                n || (n = i.option("mainElement"));
              var o,
                r = i.option("renderSelector");
              r && (n = n.find(r)),
                $.isPlainObject(t) || $.isArray(t)
                  ? (o = i.execute("render", [t, e]))
                  : "string" === $.type(t) && (o = t),
                n.html(o);
            },
            namespace: function() {
              return "." + this.guid;
            },
            option: function(t, e) {
              var n = this;
              if (1 === arguments.length && "string" === $.type(t))
                return n.options[t];
              $.isPlainObject(t)
                ? $.each(t, function(t, e) {
                    n.option(t, e);
                  })
                : (n.options[t] = e);
            },
            inner: function(t, e) {
              var n = this,
                i = n.inners || {};
              if (1 === arguments.length && "string" === $.type(t)) return i[t];
              $.isPlainObject(t)
                ? $.each(t, function(t, e) {
                    n.inner(t, e);
                  })
                : (i[t] = e);
            },
            is: function(t) {
              return this.states[t];
            },
            state: v("state", "states", "state", "is", function(t, e) {
              return s(e, !1);
            }),
            get: function(t) {
              return this.properties[t];
            },
            set: v("property", "properties", "set", "get"),
          },
          y = {
            sync: function() {
              var t = this,
                e = function(e, n, i) {
                  $.each(e, function(o, r) {
                    return t.execute(n[o], [r.newValue, r.oldValue, i ? e : r]);
                  });
                };
              $.each(["property", "state"], function(n, i) {
                var o = t.inner(i + "Changes");
                if (o) {
                  t.inner(i + "Changes", null);
                  var r = t.constructor[i + "Updater"];
                  r && e(o, r, !0);
                  var a = t.option("watch");
                  a && e(o, a), t.emit(i + "change", o);
                }
              }),
                arguments[0] !== p && t.execute(t.inner(p)),
                t.inner(p, !1);
            },
            _sync: function() {
              if (!this.inner(p)) return !1;
            },
            _init: function() {
              if (this.is("initCalled")) return !1;
              this.state("initCalled", !0);
            },
            _dispose: function() {
              if (this.is("disposeCalled")) return !1;
              this.state("disposeCalled", !0);
            },
          };
        function S(t, e, n, i, o) {
          var r,
            a = t["before" === i ? "_" + e : e + "_"];
          if (
            ($.isFunction(a) &&
              (!1 === (r = a.apply(t, n)) || $.isPlainObject(r) || (r = null)),
            !1 === r)
          )
            return !1;
          var c = !1;
          return (
            r && r.dispatch && ((c = !0), delete r.dispatch),
            ((o = $.Event(o)).type = i + e),
            t.emit(o, r),
            c && t.dispatch(o, r),
            !o.isDefaultPrevented() && void 0
          );
        }
        (e.extend = function(t, e) {
          a(t, y),
            $.each(t, function(n, i) {
              var o = n.indexOf("_");
              if (
                $.isFunction(i) &&
                0 !== o &&
                o !== n.length - 1 &&
                !($.isArray(e) && $.inArray(n, e) >= 0)
              ) {
                r(
                  t,
                  n,
                  function(t) {
                    return S(this, n, arguments, "before", t);
                  },
                  function(t) {
                    var e = this,
                      o = arguments,
                      r = function() {
                        return S(e, n, o, "after", t);
                      };
                    if (i.length + 1 === o.length) {
                      var a = o[o.length - 1];
                      if (a && $.isFunction(a.then)) return void a.then(r);
                    }
                    r();
                  }
                );
              }
            }),
            a(t, m),
            d.extend(t);
        }),
          (e.init = function(t, e) {
            return (
              e || (e = {}),
              a(e, t.constructor.defaultOptions),
              (e.onafterinit_ = function() {
                t.state("inited", !0);
              }),
              (e.onafterdispose_ = function() {
                t.state("disposed", !0), t.off();
                var e = t.inner("main");
                t.option("removeOnDispose") && e && e.remove(),
                  c(function() {
                    delete f[t.guid],
                      (t.properties = t.options = t.changes = t.states = t.inners = t.guid = null);
                  });
              }),
              (f[(t.guid = o())] = t),
              (t.properties = {}),
              (t.options = e),
              (t.states = {}),
              (t.inners = {}),
              t.init(),
              t
            );
          }),
          (e.dispose = function(t) {
            t.sync();
            var e = t.inner("main") || t.option("mainElement");
            e && e.off(t.namespace());
          });
      }.call(e, n, e, t)) || (t.exports = i);
  },
  42: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t, e) {
          return (
            (t = t.jquery ? t[0] : t),
            (e = e.jquery ? e[0] : e),
            !(!t || !e) && (t === e || $.contains(t, e))
          );
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  46: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t, e) {
          $.isPlainObject(e) &&
            $.each(e, function(e, n) {
              e in t || (t[e] = n);
            });
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  47: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t) {
          return (
            t &&
              !t[$.expando] &&
              (t =
                "string" === $.type(t) || t.type
                  ? $.Event(t)
                  : $.Event(null, t)),
            t || $.Event()
          );
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  51: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t) {
          var e = setTimeout(t, 0);
          return function() {
            clearTimeout(e);
          };
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  59: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t, e) {
          return (
            "boolean" !== $.type(t) &&
              (1 === arguments.length && (e = !!t), (t = e)),
            t
          );
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  63: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        function i(t) {
          return t.is("body") || "static" !== t.css("position");
        }
        return function(t) {
          if (t.is("body")) return t;
          for (var e = t.parent(); !i(e); ) e = e.parent();
          return e;
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  64: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        return (
          (window.ccInstanceIndex = window.ccInstanceIndex || 1),
          function() {
            return "cc_" + ++window.ccInstanceIndex;
          }
        );
      }.call(e, n, e, t)) || (t.exports = i);
  },
  74: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  75: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, i) {
        "use strict";
        var o = n(46),
          r = n(47),
          a = {
            get$: function() {
              return this.$ || (this.$ = $({})), this.$;
            },
            on: function(t, e, n) {
              return this.get$().on(t, e, n), this;
            },
            once: function(t, e, n) {
              return this.get$().one(t, e, n), this;
            },
            off: function(t, e) {
              return this.get$().off(t, e), this;
            },
            emit: function(t, e) {
              return (t = r(t)), this.get$().trigger(t, e), t;
            },
          };
        e.extend = function(t) {
          o(t, a);
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  81: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t, e, n, i) {
          var o = "string" === $.type(e),
            r = o ? t[e] : t;
          o || ((i = n), (n = e));
          var a = function() {
            var t,
              e = $.makeArray(arguments);
            if (($.isFunction(n) && (t = n.apply(this, e)), !1 !== t)) {
              if (
                ($.isFunction(r) && (t = r.apply(this, e)), $.isFunction(i))
              ) {
                e.push(t);
                var o = i.apply(this, e);
                "undefined" !== $.type(o) && (t = o);
              }
              return t;
            }
          };
          return o ? (t[e] = a) : a;
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  85: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t, e, n) {
        "use strict";
        return function(t, e, n) {
          return t < e ? (t = e) : t > n && (t = n), t;
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
  86: function(t, e, n) {
    var i;
    void 0 ===
      (i = function(t) {
        "use strict";
        return function(t, e) {
          (t = t[0]), (e = e[0]), t.parentNode.replaceChild(e, t);
        };
      }.call(e, n, e, t)) || (t.exports = i);
  },
});
