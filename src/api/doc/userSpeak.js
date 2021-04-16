window["BJY-SDK"] = (function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 752))
  );
})({
  0: function(e, t, n) {
    e.exports = n(57);
  },
  11: function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return n.call(e, t);
    };
  },
  12: function(e, t) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  13: function(e, t, n) {
    var r = n(8),
      i = n(18);
    e.exports = n(4)
      ? function(e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function(e, t, n) {
          return (e[t] = n), e;
        };
  },
  16: function(e, t, n) {
    var r = n(22);
    e.exports = function(e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n);
          };
        case 2:
          return function(n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function(n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    };
  },
  18: function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  2: function(e, t) {
    var n = (e.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = n);
  },
  22: function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  26: function(e, t, n) {
    var r = n(6);
    e.exports = function(e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  28: function(e, t, n) {
    var r = n(6),
      i = n(3).document,
      o = r(i) && r(i.createElement);
    e.exports = function(e) {
      return o ? i.createElement(e) : {};
    };
  },
  3: function(e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  36: function(e, t, n) {
    e.exports =
      !n(4) &&
      !n(12)(function() {
        return (
          7 !=
          Object.defineProperty(n(28)("div"), "a", {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  4: function(e, t, n) {
    e.exports = !n(12)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          },
        }).a
      );
    });
  },
  5: function(e, t, n) {
    var r = n(3),
      i = n(2),
      o = n(16),
      _ = n(13),
      u = n(11),
      E = function(e, t, n) {
        var a,
          c,
          s,
          f = e & E.F,
          p = e & E.G,
          S = e & E.S,
          A = e & E.P,
          T = e & E.B,
          l = e & E.W,
          I = p ? i : i[t] || (i[t] = {}),
          P = I.prototype,
          R = p ? r : S ? r[t] : (r[t] || {}).prototype;
        for (a in (p && (n = t), n))
          ((c = !f && R && void 0 !== R[a]) && u(I, a)) ||
            ((s = c ? R[a] : n[a]),
            (I[a] =
              p && "function" != typeof R[a]
                ? n[a]
                : T && c
                ? o(s, r)
                : l && R[a] == s
                ? (function(e) {
                    var t = function(t, n, r) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t);
                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                      }
                      return e.apply(this, arguments);
                    };
                    return (t.prototype = e.prototype), t;
                  })(s)
                : A && "function" == typeof s
                ? o(Function.call, s)
                : s),
            A &&
              (((I.virtual || (I.virtual = {}))[a] = s),
              e & E.R && P && !P[a] && _(P, a, s)));
      };
    (E.F = 1),
      (E.G = 2),
      (E.S = 4),
      (E.P = 8),
      (E.B = 16),
      (E.W = 32),
      (E.U = 64),
      (E.R = 128),
      (e.exports = E);
  },
  57: function(e, t, n) {
    n(58);
    var r = n(2).Object;
    e.exports = function(e, t, n) {
      return r.defineProperty(e, t, n);
    };
  },
  58: function(e, t, n) {
    var r = n(5);
    r(r.S + r.F * !n(4), "Object", { defineProperty: n(8).f });
  },
  59: function(e, t, n) {
    var r;
    void 0 ===
      (r = function(e, t, n) {
        "use strict";
        return function(e, t) {
          return (
            "boolean" !== $.type(e) &&
              (1 === arguments.length && (t = !!e), (e = t)),
            e
          );
        };
      }.call(t, n, t, e)) || (e.exports = r);
  },
  6: function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  752: function(e, t, n) {
    "use strict";
    n(0)(t, "__esModule", { value: !0 }),
      (t.init = t.getInvitingCount = t.isInviting = t.processInvite = t.cancelInvite = t.startInvite = t.stopSpeak = t.getApplyingCount = t.getApplyingList = t.isApplying = t.processApply = t.cancelApply = t.startApply = t.ERROR_FORBID_SPEAK_APPLY = void 0);
    var r = BJY.auth,
      i = BJY.store,
      o = BJY.config,
      _ = BJY.command,
      u = BJY.data.user,
      E = BJY.data.class,
      a = BJY.data.media,
      c = BJY.eventEmitter,
      s = n(59);
    $.extend(c, n(753));
    var f,
      p,
      S,
      A = [],
      T = [];
    function l() {
      f && (clearTimeout(f), (f = null));
    }
    function I() {
      var e = i.get("user"),
        t = e.videoOn,
        n = e.audioOn;
      t ||
        (a.getCameraList().length > 0 &&
          r.canOpenCameraWhenSpeaking &&
          r.canOpenCameraWhenSpeaking() &&
          (t = !0)),
        n || (a.getMicList().length > 0 && (n = !0)),
        c.trigger(c.MEDIA_CONTROL_TRIGGER, { audioOn: n, videoOn: t });
    }
    _.messageTypes.media_remote_control_res = function(e, t) {
      var n = u.find(e);
      n.videoOn ||
        n.audioOn ||
        (!t.video_on && !t.audio_on) ||
        c.trigger(c.SPEAK_INVITE_RESULT_FORCE, { user: n });
    };
    t.ERROR_FORBID_SPEAK_APPLY = 1;
    t.startApply = function(e) {
      if (E.getForbidSpeakApply()) return 1;
      if (!p) {
        if (!S)
          return (
            (p = !0),
            (function(e) {
              l(),
                (f = setTimeout(function() {
                  (f = null),
                    c.trigger(c.SPEAK_APPLY_RESULT_TIMEOUT),
                    t.cancelApply();
                }, e));
            })(e),
            c.trigger(c.SPEAK_APPLY_REQ_TRIGGER),
            !0
          );
        t.processInvite(!0);
      }
    };
    t.cancelApply = function() {
      return !!p && ((p = !1), l(), t.processApply(i.get("user.id"), !1), !0);
    };
    t.processApply = function(e, t) {
      var n = u.find(e),
        r = $.Deferred();
      if (n) {
        if (t) {
          var i = ".speak_apply_result" + Math.random(),
            _ = setTimeout(function() {
              c.off(i), r.resolve();
            }, o.SECOND);
          c.on(c.SPEAK_APPLY_ACCEPT_RESULT + i, function(e, t) {
            n.id === t.userId &&
              (c.off(i), t.success ? r.resolve() : r.reject(), clearTimeout(_));
          });
        } else r.resolve();
        c.trigger(c.SPEAK_APPLY_RES_TRIGGER, {
          accept: t,
          user: n,
          speakState: t ? o.SPEAK_STATE_FREE : o.SPEAK_STATE_LIMIT,
        });
      } else r.resolve();
      return r;
    };
    t.isApplying = function(e) {
      return P(e) >= 0;
    };
    t.getApplyingList = function() {
      return Yox.object.copy(A);
    };
    function P(e) {
      var t = -1;
      return (
        Yox.array.each(A, function(n, r) {
          if (n.id === e) return (t = r), !1;
        }),
        t
      );
    }
    t.getApplyingCount = function() {
      return A.length;
    };
    t.stopSpeak = function(e) {
      var t = u.find(e);
      if (t)
        return (
          c.trigger(c.MEDIA_REMOTE_CONTROL_TRIGGER, {
            user: t,
            videoOn: !1,
            audioOn: !1,
            speakState: o.SPEAK_STATE_LIMIT,
          }),
          !0
        );
    };
    t.startInvite = function(e, n, i) {
      var _ = P(e);
      if (!(_ >= 0))
        return t.isInviting(e)
          ? void 0
          : (n
              ? (function(e) {
                  var t = u.find(e);
                  c.trigger(c.MEDIA_REMOTE_CONTROL_TRIGGER, {
                    user: t,
                    audioOn: !0,
                    videoOn:
                      !!r.canOpenCameraWhenSpeaking &&
                      !!r.canOpenCameraWhenSpeaking(t.type),
                    speakState: o.SPEAK_STATE_FREE,
                  });
                })(e)
              : (v(e, i),
                c.trigger(c.SPEAK_INVITE_REQ_TRIGGER, { to: e, invite: 1 })),
            !0);
      c.trigger(c.SPEAK_APPLY_RES_TRIGGER, {
        speakState: o.SPEAK_STATE_FREE,
        user: A[_],
      });
    };
    t.cancelInvite = function(e, t) {
      var n = R(e);
      if (n >= 0) return L(T[n], t), !0;
    };
    t.processInvite = function(e) {
      if (S) return (S = !1), g(e ? 1 : 0), !0;
    };
    t.isInviting = function(e) {
      return R(e) >= 0;
    };
    function R(e) {
      var t = -1;
      return (
        Yox.array.each(T, function(n, r) {
          if (n.userId === e) return (t = r), !1;
        }),
        t
      );
    }
    function g(e) {
      var t = 0 !== e;
      c.trigger(c.SPEAK_INVITE_RES_TRIGGER, { confirm: e, accept: t }),
        t && I();
    }
    function v(e, t) {
      var n = {
        userId: e,
        timer: setTimeout(function() {
          L(n), (n.timer = null);
          var t = u.find(e);
          t && c.trigger(c.SPEAK_INVITE_RESULT_TIMEOUT, { user: t });
        }, t),
      };
      T.push(n), c.trigger(c.SPEAK_INVITING_ADD, { user: u.find(e) });
    }
    function d(e) {
      e.timer && (clearTimeout(e.timer), (e.timer = null)),
        Yox.array.remove(T, e),
        c.trigger(c.SPEAK_INVITING_REMOVE, { user: u.find(e.userId) });
    }
    function L(e, t) {
      d(e),
        t || c.trigger(c.SPEAK_INVITE_REQ_TRIGGER, { to: e.userId, invite: 0 });
    }
    t.getInvitingCount = function() {
      return T.length;
    };
    (t.init = function(e) {
      (t.init = $.noop),
        c
          .on(c.CLASS_END, function() {
            p && t.cancelApply(), Yox.array.each(T, L);
          })
          .on(c.MEDIA_CONTROL_TRIGGER, function(e, t) {
            var n = s(t.videoOn),
              r = s(t.audioOn);
            n && !a.getCameraList().length && (n = !1),
              r && !a.getMicList().length && (r = !1),
              (function(e, t, n) {
                var r = function() {
                  c.trigger(c.MEDIA_SWITCH_TRIGGER, {
                    operator: n,
                    videoOn: e,
                    audioOn: t,
                  });
                };
                if (e || t)
                  i.get("class.speakState") !== o.SPEAK_STATE_FREE &&
                    i.set("class.speakState", o.SPEAK_STATE_FREE),
                    r();
                else {
                  var _ = BJY.Player && BJY.Player.instances[i.get("user.id")];
                  _ && _.isScreenSharing
                    ? c
                        .one(c.SCREEN_SHARE_STOP, function(e, t) {
                          r(),
                            i.get("class.isFree") ||
                              i.set("class.speakState", o.SPEAK_STATE_LIMIT);
                        })
                        .trigger(c.SCREEN_SHARE_STOP_TRIGGER)
                    : (r(),
                      i.get("class.isFree") ||
                        i.set("class.speakState", o.SPEAK_STATE_LIMIT));
                }
              })(n, r);
          })
          .on(c.USER_OUT, function(e, t) {
            var n = t.user,
              r = n.id,
              i = R(r);
            i >= 0 && d(T[i]),
              (i = P(r)) >= 0 &&
                (A.splice(i, 1),
                c.trigger(c.SPEAK_APPLYING_REMOVE, { user: n }));
          })
          .on(c.MEDIA_SWITCH_TRIGGER, function(e, t) {
            var n = t.operator,
              r = i.get("user");
            n &&
              n.id !== r.id &&
              (r.videoOn ||
                r.audioOn ||
                (!t.videoOn && !t.audioOn) ||
                c.trigger(c.SPEAK_INVITE_RES_TRIGGER, {
                  accept: !0,
                  force: !0,
                }));
          })
          .one(c.SPEAK_INVITE_PENDING_LIST, function(e, t) {
            Yox.array.each(t.userIdList, function(e) {
              v(e, 1e4);
            });
          })
          .on(c.SPEAK_APPLY_REQ, function(e, n) {
            var r = n.user;
            t.isApplying(r.id) ||
              (u.add(r),
              t.isInviting(r.id)
                ? t.processApply(r.id, !0)
                : ((r = u.find(r.id)),
                  A.push(r),
                  (r.isApplyingSpeak = !0),
                  c.trigger(c.SPEAK_APPLYING_ADD, { user: r })));
          })
          .on(c.SPEAK_APPLY_RES, function(e, t) {
            var n = t.user.id,
              i = t.speakState,
              _ = t.fromId;
            if (r.isSelf(n))
              if (r.isSelf(_)) c.trigger(c.SPEAK_APPLY_RESULT_CANCEL);
              else {
                if (!p) return;
                (p = !1), l();
                var E = { operator: u.find(_) };
                i === o.SPEAK_STATE_FREE
                  ? (c.trigger(c.SPEAK_APPLY_RESULT_ACCEPT, E),
                    BJY.userSpeak.onApplyAccept
                      ? BJY.userSpeak.onApplyAccept()
                      : I())
                  : c.trigger(c.SPEAK_APPLY_RESULT_REJECT, E);
              }
            else {
              var a = P(n);
              ~a &&
                (A.splice(a, 1),
                (u.find(n).isApplyingSpeak = !1),
                c.trigger(c.SPEAK_APPLYING_REMOVE, {
                  user: t.user,
                  speakState: i,
                }));
            }
          })
          .on(c.SPEAK_INVITE_REQ, function(e, n) {
            if (r.isSelf(n.to))
              switch (n.invite) {
                case 1:
                  S ||
                    (p
                      ? (t.cancelApply(), g(1))
                      : ((S = !0), c.trigger(c.SPEAK_INVITE_CONFIRM)));
                  break;
                case 0:
                  S && ((S = !1), c.trigger(c.SPEAK_INVITE_RESULT_CANCEL));
              }
          })
          .on(c.SPEAK_INVITE_RES, function(e, t) {
            var n = t.fromId,
              r = R(n);
            if (!(r < 0)) {
              d(T[r]);
              var i = u.find(n);
              if (i) {
                var o = t.confirm,
                  _ = { user: i };
                1 === o
                  ? c.trigger(c.SPEAK_INVITE_RESULT_ACCEPT, _)
                  : 0 === o && c.trigger(c.SPEAK_INVITE_RESULT_REJECT, _);
              }
            }
          })
          .on(c.CLASSROOM_CONNECT_TRIGGER, function(e, t) {
            t &&
              (t.isClassSwitching || t.reconnect) &&
              ((p = !1), (A = []), (T = []));
          });
    }),
      (BJY.userSpeak = t);
  },
  753: function(e, t, n) {
    "use strict";
    n(0)(t, "__esModule", { value: !0 }),
      (t.UPDATE_USER_LAYER_TRIGGER = t.STOP_USER_SPEAK_TRIGGER = t.SET_USER_MIC_TRIGGER = t.SET_USER_CAMERA_TRIGGER = t.SHOW_ACTIVE_VIDEO_LIST_TOGGLE = t.BLACK_LIST_CHANGE = t.APPLY_LIST_EXPAND_TOGGLE = t.SPEAK_INVITING_REMOVE = t.SPEAK_INVITING_ADD = t.SPEAK_APPLYING_REMOVE = t.SPEAK_APPLYING_ADD = t.SPEAK_INVITE_RESULT_REJECT = t.SPEAK_INVITE_RESULT_ACCEPT = t.SPEAK_INVITE_RESULT_TIMEOUT = t.SPEAK_INVITE_RESULT_CANCEL = t.SPEAK_INVITE_RESULT_FORCE = t.SPEAK_INVITE_CONFIRM = t.SPEAK_APPLY_RESULT_REJECT = t.SPEAK_APPLY_RESULT_ACCEPT = t.SPEAK_APPLY_RESULT_CANCEL = t.SPEAK_APPLY_RESULT_TIMEOUT = void 0);
    t.SPEAK_APPLY_RESULT_TIMEOUT = "speak_apply_result_timeout";
    t.SPEAK_APPLY_RESULT_CANCEL = "speak_apply_result_cancel";
    t.SPEAK_APPLY_RESULT_ACCEPT = "speak_apply_result_accept";
    t.SPEAK_APPLY_RESULT_REJECT = "speak_apply_result_reject";
    t.SPEAK_INVITE_CONFIRM = "speak_invite_confirm";
    t.SPEAK_INVITE_RESULT_FORCE = "speak_invite_result_force";
    t.SPEAK_INVITE_RESULT_CANCEL = "speak_invite_result_cancel";
    t.SPEAK_INVITE_RESULT_TIMEOUT = "speak_invite_result_timeout";
    t.SPEAK_INVITE_RESULT_ACCEPT = "speak_invite_result_accept";
    t.SPEAK_INVITE_RESULT_REJECT = "speak_invite_result_reject";
    t.SPEAK_APPLYING_ADD = "speak_applying_add";
    t.SPEAK_APPLYING_REMOVE = "speak_applying_remove";
    t.SPEAK_INVITING_ADD = "speak_inviting_add";
    t.SPEAK_INVITING_REMOVE = "speak_inviting_remove";
    t.APPLY_LIST_EXPAND_TOGGLE = "apply_list_expand_toggle";
    t.BLACK_LIST_CHANGE = "black_list_change";
    t.SHOW_ACTIVE_VIDEO_LIST_TOGGLE = "show_active_video_list_toggle";
    t.SET_USER_CAMERA_TRIGGER = "set_user_camera_trigger";
    t.SET_USER_MIC_TRIGGER = "set_user_mic_trigger";
    t.STOP_USER_SPEAK_TRIGGER = "stop_user_speak_trigger";
    t.UPDATE_USER_LAYER_TRIGGER = "update_user_layer_trigger";
  },
  8: function(e, t, n) {
    var r = n(9),
      i = n(36),
      o = n(26),
      _ = Object.defineProperty;
    t.f = n(4)
      ? Object.defineProperty
      : function(e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return _(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  9: function(e, t, n) {
    var r = n(6);
    e.exports = function(e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
});
//# sourceMappingURL=http://127.0.0.1:8858/output/1.54.0/user/userSpeak.js.map
