window["BJY-SDK"] = (function(e) {
  var n = {};
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = (n[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  return (
    (t.m = e),
    (t.c = n),
    (t.d = function(e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i });
    }),
    (t.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function(e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (t.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var r in e)
          t.d(
            i,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return i;
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = "/"),
    t((t.s = 970))
  );
})({
  0: function(e, n, t) {
    e.exports = t(57);
  },
  1: function(e, n) {
    e.exports = function(e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  11: function(e, n) {
    var t = {}.hasOwnProperty;
    e.exports = function(e, n) {
      return t.call(e, n);
    };
  },
  12: function(e, n) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  13: function(e, n, t) {
    var i = t(8),
      r = t(18);
    e.exports = t(4)
      ? function(e, n, t) {
          return i.f(e, n, r(1, t));
        }
      : function(e, n, t) {
          return (e[n] = t), e;
        };
  },
  16: function(e, n, t) {
    var i = t(22);
    e.exports = function(e, n, t) {
      if ((i(e), void 0 === n)) return e;
      switch (t) {
        case 1:
          return function(t) {
            return e.call(n, t);
          };
        case 2:
          return function(t, i) {
            return e.call(n, t, i);
          };
        case 3:
          return function(t, i, r) {
            return e.call(n, t, i, r);
          };
      }
      return function() {
        return e.apply(n, arguments);
      };
    };
  },
  166: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e) {
          e.css("display");
          return (
            "none" === e.css("display") ||
            0 == e.css("opacity") ||
            "hidden" === e.css("visibility")
          );
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  167: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, i) {
        "use strict";
        var r = t(50);
        function o(e) {
          return function(n) {
            var t = e.delay,
              i = e.startDelay,
              r = e.endDelay,
              o = function() {
                e.handler.call(n.currentTarget, n);
              },
              a = function() {
                if (t > 0 && i && r) {
                  var n = function(t) {
                    e.delayTimer &&
                      (clearTimeout(e.delayTimer),
                      r(n, e),
                      (e.delayTimer = null)),
                      "delayTimer" === t && o();
                  };
                  e.delayTimer ||
                    (i(n, e),
                    (e.delayTimer = setTimeout(function() {
                      n("delayTimer");
                    }, t)));
                } else o();
              },
              c = e.beforeHandler;
            if ($.isFunction(c)) {
              var u = c.call(n.currentTarget, n);
              if (!1 === u) return;
              if (u && $.isFunction(u.then)) return void u.then(a);
            }
            a();
          };
        }
        return (
          ((n = {
            focus: { type: "focusin", handler: o },
            blur: { type: "focusout", handler: o },
            click: { type: "click", handler: o },
            enter: { type: "mouseenter", handler: o },
            leave: { type: "mouseleave", handler: o },
            context: { type: "contextmenu", handler: o },
          }).parse = function(e, t) {
            var i = {};
            return (
              e &&
                $.each(r(e, ","), function(e, r) {
                  var o = n[r];
                  o && (i[r] = { type: o.type, handler: o.handler(t(r)) });
                }),
              i
            );
          }),
          n
        );
      }.call(n, t, n, e)) || (e.exports = i);
  },
  17: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        (n.window = $(window)),
          (n.document = $(document)),
          (n.html = $(document.documentElement)),
          (n.body = $(document.body));
      }.call(n, t, n, e)) || (e.exports = i);
  },
  18: function(e, n) {
    e.exports = function(e, n) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: n,
      };
    };
  },
  19: function(e, n, t) {
    e.exports = t(99);
  },
  2: function(e, n) {
    var t = (e.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = t);
  },
  22: function(e, n) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  26: function(e, n, t) {
    var i = t(6);
    e.exports = function(e, n) {
      if (!i(e)) return e;
      var t, r;
      if (n && "function" == typeof (t = e.toString) && !i((r = t.call(e))))
        return r;
      if ("function" == typeof (t = e.valueOf) && !i((r = t.call(e)))) return r;
      if (!n && "function" == typeof (t = e.toString) && !i((r = t.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  28: function(e, n, t) {
    var i = t(6),
      r = t(3).document,
      o = i(r) && i(r.createElement);
    e.exports = function(e) {
      return o ? r.createElement(e) : {};
    };
  },
  3: function(e, n) {
    var t = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = t);
  },
  32: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, i) {
        "use strict";
        var r = t(64),
          o = t(81),
          a = t(46),
          c = (t(74), t(51)),
          u = t(59),
          s = t(47),
          p = t(86),
          l = (t(63), t(75)),
          f = {},
          d = "__update_async__";
        function y(e, n, t, i, r) {
          return function(o, u, s) {
            var p = this;
            if ($.isPlainObject(o))
              return (
                (s = u),
                void $.each(o, function(e, n) {
                  p[t](e, n, s);
                })
              );
            s = s || {};
            var l = p[i](o),
              f = p.constructor[e + "Validator"];
            if (
              (f && $.isFunction(f[o]) && (u = f[o].call(p, u, s)),
              $.isFunction(r) && (u = r(p, u, s)),
              (l !== u || s.force) && ((p[n][o] = u), !s.silent))
            ) {
              var y = {};
              a(y, s), (y.newValue = u), (y.oldValue = l);
              var h = {};
              h[o] = y;
              var v = function(e) {
                e && e[o] && p.execute(e[o], [u, l, y]);
              };
              if ((v(p.inner("watchSync")), v(p.option("watchSync")), s.sync))
                return (
                  v(p.constructor[e + "Updater"]),
                  v(p.option("watch")),
                  void p.emit(e + "change", h)
                );
              var g = p.inner(e + "Changes");
              g || ((g = {}), p.inner(e + "Changes", g)),
                $.extend(g, h),
                p.inner(d) ||
                  p.inner(
                    d,
                    c(function() {
                      p.sync(d);
                    })
                  );
            }
          };
        }
        var h = {};
        function v() {
          this.error("initStruct() can just call one time.");
        }
        var g = {
            initStruct: function() {
              var e = this,
                n = e.option("mainElement"),
                t = e.option("mainTemplate");
              if ("string" === $.type(t)) {
                var i,
                  r = e.option("share"),
                  o = e.type + t;
                r && (n = h[o]),
                  n
                    ? e.option("replace")
                      ? p(n, (i = $(t)))
                      : n.html(t)
                    : ((i = $(t)), r && (h[o] = i)),
                  i && ((n = i), e.option("mainElement", n));
              }
              var a = e.option("parentSelector");
              a && !n.parent().is(a) && n.appendTo(a), (e.initStruct = v);
            },
            warn: function(e) {
              "undefined" != typeof console &&
                console.warn(["[CC warn]", this.type, e].join(" "));
            },
            error: function(e) {
              throw new Error(["[CC error]", this.type, e].join(" "));
            },
            live: function(e, n, t) {
              var i = this.inner("main");
              return i && i.on(e + this.namespace(), n, t), this;
            },
            emit: function(e, n) {
              var t = this.option("context") || this;
              (e = s(e)).cc = t;
              var i = [e];
              $.isPlainObject(n) && i.push(n), (e.type = e.type.toLowerCase());
              var r = t.get$();
              r.trigger.apply(r, i);
              var o = "on" + e.type;
              return (
                e.isPropagationStopped() ||
                  !1 !== t.execute(o, i) ||
                  (e.preventDefault(), e.stopPropagation()),
                t.execute(o + "_", i),
                e
              );
            },
            dispatch: function(e, n) {
              if (!e.isPropagationStopped()) {
                e.originalEvent ||
                  (e.originalEvent = {
                    preventDefault: $.noop,
                    stopPropagation: $.noop,
                  });
                var t = $.Event(e);
                (t.type = "dispatch"),
                  this.emit(t, n),
                  t.isPropagationStopped() &&
                    (e.preventDefault(), e.stopPropagation());
              }
            },
            before: function(e, n) {
              return this.on("before" + e.toLowerCase(), n);
            },
            after: function(e, n) {
              return this.on("after" + e.toLowerCase(), n);
            },
            find: function(e) {
              var n = this.inner("main");
              if (n) {
                var t = n.find(e);
                if (t.length) return t;
              }
            },
            appendTo: function(e) {
              var n = this.inner("main");
              n && n.appendTo(e);
            },
            prependTo: function(e) {
              var n = this.inner("main");
              n && n.prependTo(e);
            },
            execute: function(e, n) {
              var t = e;
              if (
                ("string" === $.type(e) && (t = this.option(e)),
                $.isFunction(t))
              ) {
                var i = this.option("context") || this;
                return $.isArray(n) ? t.apply(i, n) : t.call(i, n);
              }
            },
            renderWith: function(e, n, t) {
              var i = this;
              n ||
                (n = i.option("renderTemplate")) ||
                (n = i.option("mainTemplate")),
                t || (t = i.option("mainElement"));
              var r,
                o = i.option("renderSelector");
              o && (t = t.find(o)),
                $.isPlainObject(e) || $.isArray(e)
                  ? (r = i.execute("render", [e, n]))
                  : "string" === $.type(e) && (r = e),
                t.html(r);
            },
            namespace: function() {
              return "." + this.guid;
            },
            option: function(e, n) {
              var t = this;
              if (1 === arguments.length && "string" === $.type(e))
                return t.options[e];
              $.isPlainObject(e)
                ? $.each(e, function(e, n) {
                    t.option(e, n);
                  })
                : (t.options[e] = n);
            },
            inner: function(e, n) {
              var t = this,
                i = t.inners || {};
              if (1 === arguments.length && "string" === $.type(e)) return i[e];
              $.isPlainObject(e)
                ? $.each(e, function(e, n) {
                    t.inner(e, n);
                  })
                : (i[e] = n);
            },
            is: function(e) {
              return this.states[e];
            },
            state: y("state", "states", "state", "is", function(e, n) {
              return u(n, !1);
            }),
            get: function(e) {
              return this.properties[e];
            },
            set: y("property", "properties", "set", "get"),
          },
          m = {
            sync: function() {
              var e = this,
                n = function(n, t, i) {
                  $.each(n, function(r, o) {
                    return e.execute(t[r], [o.newValue, o.oldValue, i ? n : o]);
                  });
                };
              $.each(["property", "state"], function(t, i) {
                var r = e.inner(i + "Changes");
                if (r) {
                  e.inner(i + "Changes", null);
                  var o = e.constructor[i + "Updater"];
                  o && n(r, o, !0);
                  var a = e.option("watch");
                  a && n(r, a), e.emit(i + "change", r);
                }
              }),
                arguments[0] !== d && e.execute(e.inner(d)),
                e.inner(d, !1);
            },
            _sync: function() {
              if (!this.inner(d)) return !1;
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
        function A(e, n, t, i, r) {
          var o,
            a = e["before" === i ? "_" + n : n + "_"];
          if (
            ($.isFunction(a) &&
              (!1 === (o = a.apply(e, t)) || $.isPlainObject(o) || (o = null)),
            !1 === o)
          )
            return !1;
          var c = !1;
          return (
            o && o.dispatch && ((c = !0), delete o.dispatch),
            ((r = $.Event(r)).type = i + n),
            e.emit(r, o),
            c && e.dispatch(r, o),
            !r.isDefaultPrevented() && void 0
          );
        }
        (n.extend = function(e, n) {
          a(e, m),
            $.each(e, function(t, i) {
              var r = t.indexOf("_");
              if (
                $.isFunction(i) &&
                0 !== r &&
                r !== t.length - 1 &&
                !($.isArray(n) && $.inArray(t, n) >= 0)
              ) {
                o(
                  e,
                  t,
                  function(e) {
                    return A(this, t, arguments, "before", e);
                  },
                  function(e) {
                    var n = this,
                      r = arguments,
                      o = function() {
                        return A(n, t, r, "after", e);
                      };
                    if (i.length + 1 === r.length) {
                      var a = r[r.length - 1];
                      if (a && $.isFunction(a.then)) return void a.then(o);
                    }
                    o();
                  }
                );
              }
            }),
            a(e, g),
            l.extend(e);
        }),
          (n.init = function(e, n) {
            return (
              n || (n = {}),
              a(n, e.constructor.defaultOptions),
              (n.onafterinit_ = function() {
                e.state("inited", !0);
              }),
              (n.onafterdispose_ = function() {
                e.state("disposed", !0), e.off();
                var n = e.inner("main");
                e.option("removeOnDispose") && n && n.remove(),
                  c(function() {
                    delete f[e.guid],
                      (e.properties = e.options = e.changes = e.states = e.inners = e.guid = null);
                  });
              }),
              (f[(e.guid = r())] = e),
              (e.properties = {}),
              (e.options = n),
              (e.states = {}),
              (e.inners = {}),
              e.init(),
              e
            );
          }),
          (n.dispose = function(e) {
            e.sync();
            var n = e.inner("main") || e.option("mainElement");
            n && n.off(e.namespace());
          });
      }.call(n, t, n, e)) || (e.exports = i);
  },
  36: function(e, n, t) {
    e.exports =
      !t(4) &&
      !t(12)(function() {
        return (
          7 !=
          Object.defineProperty(t(28)("div"), "a", {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  4: function(e, n, t) {
    e.exports = !t(12)(function() {
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
  42: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e, n) {
          return (
            (e = e.jquery ? e[0] : e),
            (n = n.jquery ? n[0] : n),
            !(!e || !n) && (e === n || $.contains(e, n))
          );
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  46: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e, n) {
          $.isPlainObject(n) &&
            $.each(n, function(n, t) {
              n in e || (e[n] = t);
            });
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  47: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e) {
          return (
            e &&
              !e[$.expando] &&
              (e =
                "string" === $.type(e) || e.type
                  ? $.Event(e)
                  : $.Event(null, e)),
            e || $.Event()
          );
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  5: function(e, n, t) {
    var i = t(3),
      r = t(2),
      o = t(16),
      a = t(13),
      c = t(11),
      u = function(e, n, t) {
        var s,
          p,
          l,
          f = e & u.F,
          d = e & u.G,
          y = e & u.S,
          h = e & u.P,
          v = e & u.B,
          g = e & u.W,
          m = d ? r : r[n] || (r[n] = {}),
          A = m.prototype,
          b = d ? i : y ? i[n] : (i[n] || {}).prototype;
        for (s in (d && (t = n), t))
          ((p = !f && b && void 0 !== b[s]) && c(m, s)) ||
            ((l = p ? b[s] : t[s]),
            (m[s] =
              d && "function" != typeof b[s]
                ? t[s]
                : v && p
                ? o(l, i)
                : g && b[s] == l
                ? (function(e) {
                    var n = function(n, t, i) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(n);
                          case 2:
                            return new e(n, t);
                        }
                        return new e(n, t, i);
                      }
                      return e.apply(this, arguments);
                    };
                    return (n.prototype = e.prototype), n;
                  })(l)
                : h && "function" == typeof l
                ? o(Function.call, l)
                : l),
            h &&
              (((m.virtual || (m.virtual = {}))[s] = l),
              e & u.R && A && !A[s] && a(A, s, l)));
      };
    (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (e.exports = u);
  },
  50: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e, n) {
          var t = [];
          return (
            "number" === $.type(e) && (e = "" + e),
            e &&
              "string" === $.type(e) &&
              $.each(e.split(n), function(e, n) {
                (n = $.trim(n)) && t.push(n);
              }),
            t
          );
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  51: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e) {
          var n = setTimeout(e, 0);
          return function() {
            clearTimeout(n);
          };
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  57: function(e, n, t) {
    t(58);
    var i = t(2).Object;
    e.exports = function(e, n, t) {
      return i.defineProperty(e, n, t);
    };
  },
  58: function(e, n, t) {
    var i = t(5);
    i(i.S + i.F * !t(4), "Object", { defineProperty: t(8).f });
  },
  59: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e, n) {
          return (
            "boolean" !== $.type(e) &&
              (1 === arguments.length && (n = !!e), (e = n)),
            e
          );
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  6: function(e, n) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  63: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        function i(e) {
          return e.is("body") || "static" !== e.css("position");
        }
        return function(e) {
          if (e.is("body")) return e;
          for (var n = e.parent(); !i(n); ) n = n.parent();
          return n;
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  64: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        return (
          (window.ccInstanceIndex = window.ccInstanceIndex || 1),
          function() {
            return "cc_" + ++window.ccInstanceIndex;
          }
        );
      }.call(n, t, n, e)) || (e.exports = i);
  },
  74: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  75: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, i) {
        "use strict";
        var r = t(46),
          o = t(47),
          a = {
            get$: function() {
              return this.$ || (this.$ = $({})), this.$;
            },
            on: function(e, n, t) {
              return this.get$().on(e, n, t), this;
            },
            once: function(e, n, t) {
              return this.get$().one(e, n, t), this;
            },
            off: function(e, n) {
              return this.get$().off(e, n), this;
            },
            emit: function(e, n) {
              return (e = o(e)), this.get$().trigger(e, n), e;
            },
          };
        n.extend = function(e) {
          r(e, a);
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  79: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e, n, t) {
          return (
            $.each(n, function(n, i) {
              (e = e.replace(new RegExp("\\$\\{" + n + "\\}", "g"), function() {
                return i;
              })),
                t || (e = e.replace(/\n/g, "<br>"));
            }),
            e
          );
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  8: function(e, n, t) {
    var i = t(9),
      r = t(36),
      o = t(26),
      a = Object.defineProperty;
    n.f = t(4)
      ? Object.defineProperty
      : function(e, n, t) {
          if ((i(e), (n = o(n, !0)), i(t), r))
            try {
              return a(e, n, t);
            } catch (e) {}
          if ("get" in t || "set" in t)
            throw TypeError("Accessors not supported!");
          return "value" in t && (e[n] = t.value), e;
        };
  },
  81: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e, n, t, i) {
          var r = "string" === $.type(n),
            o = r ? e[n] : e;
          r || ((i = t), (t = n));
          var a = function() {
            var e,
              n = $.makeArray(arguments);
            if (($.isFunction(t) && (e = t.apply(this, n)), !1 !== e)) {
              if (
                ($.isFunction(o) && (e = o.apply(this, n)), $.isFunction(i))
              ) {
                n.push(e);
                var r = i.apply(this, n);
                "undefined" !== $.type(r) && (e = r);
              }
              return e;
            }
          };
          return r ? (e[n] = a) : a;
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  86: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e) {
        "use strict";
        return function(e, n) {
          (e = e[0]), (n = n[0]), e.parentNode.replaceChild(n, e);
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  9: function(e, n, t) {
    var i = t(6);
    e.exports = function(e) {
      if (!i(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  92: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, i) {
        "use strict";
        var r = t(166),
          o = t(97),
          a = t(42),
          c = t(51),
          u = t(32),
          s = t(167),
          p = t(17);
        function l(e) {
          u.init(this, e);
        }
        var f = l.prototype;
        function d(e, n) {
          return function(t) {
            "disabled" !== $(this).attr("disabled") &&
              (($.isFunction(n) && !n.call(this, t)) || e.open(t));
          };
        }
        function y(e, n) {
          return function(t) {
            if (
              "disabled" !== $(this).attr("disabled") &&
              (!$.isFunction(n) || n.call(this, t))
            ) {
              e.close(t);
              var i = e.inner(T);
              i && (e.sync(), i.resolve());
            }
          };
        }
        function h(e, n, t, i) {
          e && e.on(n, i, t);
        }
        function v(e, n, t) {
          e && e.off(n, t);
        }
        function g(e, n) {
          var t = e.option("triggerElement"),
            i = e.option("triggerSelector");
          (t || i) && h(t || p.body, n.type, n.handler, i);
        }
        function m(e, n) {
          v(e.option("triggerElement") || p.body, n.type, n.handler);
        }
        function A(e, n) {
          h(p.document, n.type, n.handler);
        }
        function b(e, n) {
          v(p.document, n.type, n.handler);
        }
        function _(e) {
          return y(e, function(n) {
            return !a(e.inner("layer"), n.target);
          });
        }
        function E(e, n) {
          var t = e.option("triggerElement"),
            i = e.option("triggerSelector");
          return t && !i ? t : n ? $(n.currentTarget) : void 0;
        }
        function x(e, n) {
          var t = e.option("layerElement");
          return t && t.jquery && t.length
            ? t
            : n && $.isFunction(t)
            ? ((t = e.execute(t, n)) && t.tagName && (t = $(t)), t)
            : void 0;
        }
        (f.type = "Popup"),
          (f.init = function() {
            var e,
              n,
              t = this,
              i = function(e, n) {
                if ($.isFunction(e[n])) return e[n](t);
              },
              r = s.parse(t.option("showLayerTrigger"), function(e) {
                var n = S.show[e];
                return {
                  delay: t.option("showLayerDelay"),
                  startDelay: i(n, "startDelay"),
                  endDelay: i(n, "endDelay"),
                  handler: o(i(n, "handler"), 100),
                  beforeHandler: function(e) {
                    var n = function() {
                      t.inner({ trigger: E(t, e), layer: x(t, e) });
                    };
                    if (t.is("opened")) {
                      var i = $.Deferred();
                      return i.then(n), t.inner(T, i), i;
                    }
                    n();
                  },
                };
              }),
              a = s.parse(t.option("hideLayerTrigger"), function(e) {
                var n = S.hide[e];
                return {
                  delay: t.option("hideLayerDelay"),
                  startDelay: i(n, "startDelay"),
                  endDelay: i(n, "endDelay"),
                  handler: o(i(n, "handler"), 100),
                };
              }),
              u = function(e) {
                $.each(r, function(n, i) {
                  S.show[n][e](t, i);
                });
              },
              p = function(e) {
                $.each(a, function(n, i) {
                  S.hide[n][e](t, i);
                });
              },
              l = function() {
                e && (u("off"), (e = !1));
              },
              f = function() {
                n || (p("on"), (n = !0));
              },
              d = function() {
                n && (p("off"), (n = !1));
              },
              y = function(n, i) {
                var r = i.opened;
                r &&
                  (r.newValue
                    ? (t.option("triggerSelector") || l(), c(f))
                    : (d(), e || (u("on"), (e = !0))));
              };
            t
              .before("dispose", function() {
                t.off("statechange", y), l(), d(), t.close();
              })
              .on("statechange", y),
              t.inner({ trigger: E(t), layer: x(t) }),
              t.state({ opened: t.option("opened") });
          }),
          (f.open = function() {
            this.state("opened", !0);
          }),
          (f._open = function(e) {
            var n = this;
            if (n.is("opened")) {
              var t = n.inner("layer"),
                i = n.inner("trigger"),
                r = t.data(C);
              return (
                i &&
                  r &&
                  i[0] !== r[0] &&
                  (t.data(P).close(),
                  c(function() {
                    n.guid && n.open(e);
                  })),
                !1
              );
            }
            return { dispatch: !0 };
          }),
          (f.open_ = function() {
            var e = this.inner("layer");
            if (e) {
              var n = {};
              (n[C] = this.inner("trigger")), (n[P] = this), e.data(n);
            }
            return { dispatch: !0 };
          }),
          (f.close = function() {
            this.state("opened", !1);
          }),
          (f._close = function() {
            return !!this.is("opened") && { dispatch: !0 };
          }),
          (f.close_ = function() {
            var e = this.inner("layer");
            return e && e.removeData(P).removeData(C), { dispatch: !0 };
          }),
          (f.dispose = function() {
            u.dispose(this);
          }),
          u.extend(f),
          (l.stateUpdater = {
            opened: function(e) {
              var n = this.inner("layer");
              n &&
                this.execute(e ? "showLayerAnimation" : "hideLayerAnimation", {
                  layerElement: n,
                });
            },
          }),
          (l.stateValidator = {
            opened: function(e) {
              if ("boolean" !== $.type(e)) {
                var n = this.inner("layer");
                n && (e = !r(n));
              }
              return e;
            },
          });
        var P = "__prev_popup__",
          C = "__trigger_element__",
          T = "__hide_promise__",
          N = s.enter.type,
          j = s.leave.type,
          S = {
            show: {
              focus: { on: g, off: m, handler: d },
              click: { on: g, off: m, handler: d },
              enter: {
                on: g,
                off: m,
                handler: d,
                startDelay: function(e) {
                  return function(n) {
                    h(e.inner("trigger"), j, n);
                  };
                },
                endDelay: function(e) {
                  return function(n) {
                    v(e.inner("trigger"), j, n);
                  };
                },
              },
              context: { on: g, off: m, handler: d },
            },
            hide: {
              blur: { on: g, off: m, handler: y },
              click: { on: A, off: b, handler: _ },
              leave: {
                on: function(e, n) {
                  h(e.inner("trigger"), n.type, n.handler),
                    h(e.inner("layer"), n.type, n.handler);
                },
                off: function(e, n) {
                  v(e.inner("trigger"), n.type, n.handler),
                    v(e.inner("layer"), n.type, n.handler);
                },
                handler: y,
                startDelay: function(e) {
                  return function(n) {
                    h(e.inner("trigger"), N, n), h(e.inner("layer"), N, n);
                  };
                },
                endDelay: function(e) {
                  return function(n) {
                    v(e.inner("trigger"), N, n), v(e.inner("layer"), N, n);
                  };
                },
              },
              context: { on: A, off: b, handler: _ },
            },
          };
        return l;
      }.call(n, t, n, e)) || (e.exports = i);
  },
  97: function(e, n, t) {
    var i;
    void 0 ===
      (i = function(e, n, t) {
        "use strict";
        return function(e, n, t) {
          var i;
          return (
            (n = "number" === $.type(n) ? n : 50),
            function() {
              if (!i) {
                var r = this,
                  o = $.makeArray(arguments);
                t && e.apply(r, o),
                  (i = setTimeout(function() {
                    (i = null), t || e.apply(r, o);
                  }, n));
              }
            }
          );
        };
      }.call(n, t, n, e)) || (e.exports = i);
  },
  970: function(e, n, t) {
    "use strict";
    var i = t(1)(t(19)),
      r = BJY.auth,
      o = BJY.store,
      a = BJY.config,
      c = BJY.userSpeak,
      u = BJY.eventEmitter,
      s = t(79);
    $.extend(u, t(971));
    var p = t(972)();
    e.exports = BJY.ApplyList = {
      name: "ApplyList",
      template: t(976),
      propTypes: {
        skin: { type: "string" },
        newcomerFirst: { type: "boolean", value: !0 },
        onApplyAdd: { type: "function" },
        renderUser: { type: "function", required: !1 },
        avatarSize: { type: "number", value: 60 },
        expandedDefault: { type: "boolean", value: !0 },
        rejectWhileForbidApply: { type: "boolean" },
        canExpand: {
          type: "boolean",
          value: function() {
            return !!o.get("partner.liveApplyListAtBottom");
          },
        },
        applyingCountStr: { type: "string" },
        removeApplyItemOnAccept: { type: "boolean", value: !1 },
        applyNotForPushStream: { type: "boolean", value: !1 },
        filterRenderUser: { type: "function" },
        showSpeakCount: { type: "boolean", value: !1 },
        needShowGroupInfo: { type: "boolean" },
        onAcceptApplyClick: { type: "function" },
      },
      data: function() {
        return {
          userList: [],
          language: p,
          expanded: this.get("expandedDefault") && this.get("canExpand"),
        };
      },
      computed: {
        applyingCount: function() {
          var e = this.get("userList"),
            n = 0;
          return (
            e &&
              $.each(e, function(e, t) {
                !t.isConnecting && n++;
              }),
            n
              ? s(this.get("applyingCountStr") || p.APPLYING_COUNT, {
                  count: n,
                })
              : (this.set("expanded", !1), "")
          );
        },
        connectingCount: function() {
          var e = this.get("userList"),
            n = 0;
          return (
            e &&
              $.each(e, function(e, t) {
                t.isConnecting && n++;
              }),
            n ? s(p.CONNECTING_COUNT, { count: n }) : ""
          );
        },
        containerClass: function() {
          return this.get("canExpand")
            ? this.get("expanded")
              ? "expandable expanded"
              : "expandable collapsed"
            : "";
        },
      },
      watchers: {
        userList: function(e) {
          u.trigger(u.APPLY_LIST_CHANGE, { count: e.length, list: e }),
            0 === e.length && this.set("expanded", !1);
        },
      },
      events: {
        applyAccept: function(e, n) {
          n &&
            (this.get("removeApplyItemOnAccept") ||
              "dark" === this.get("skin")) &&
            this.removeUser(n.userId),
            this.updateConnectingUserState(n.userId);
        },
        applyReject: function(e, n) {
          n && this.removeUser(n.userId);
        },
      },
      methods: {
        getApplyingList: function() {
          var e = this,
            n = c.getApplyingList(),
            t = [];
          return (
            $.each(n, function(n, i) {
              t.push(e.getRenderedUser(i));
            }),
            t
          );
        },
        getRenderedUser: function(e) {
          var n = this.get("renderUser"),
            t = this.get("avatarSize");
          return n ? n(e, t, t) : e;
        },
        toggleExpand: function() {
          var e = !this.get("expanded");
          this.set({ expanded: e }),
            u.trigger(u.APPLY_LIST_EXPAND_TOGGLE, { expanded: e });
        },
        getIndexById: function(e) {
          var n = this.get("userList"),
            t = -1;
          return (
            n &&
              $.each(n, function(n, i) {
                if (i.id === e) return (t = n), !1;
              }),
            t
          );
        },
        updateConnectingUserState: function(e) {
          var n = this,
            t = this.get("userList");
          t &&
            $.each(t, function(r, o) {
              if (o.id === e) {
                var a = JSON.parse((0, i.default)(o));
                return (
                  (a.isConnecting = !0),
                  (a.timer = setTimeout(function() {
                    (a.timer = null), n.removeUser(e);
                  }, 6e4)),
                  (t[r] = a),
                  !1
                );
              }
            }),
            this.set({ userList: t });
        },
        removeUser: function(e) {
          var n = this.getIndexById(e);
          if (~n) {
            var t = this.get("userList")[n];
            t.timer && clearTimeout(t.timer), this.removeAt("userList", n);
          }
        },
        accept: function(e) {
          c.processApply(e, !0), this.fire("applyAccept", e);
        },
      },
      components: { UserApply: t(977) },
      afterMount: function() {
        var e = this,
          n = (this.namespace = ".applyList" + Math.random()),
          t = [];
        Yox.array.each(e.getApplyingList(), function(n, i) {
          (n = e.getRenderedUser(n)),
            (!e.get("filterRenderUser") ||
              (e.get("filterRenderUser") && e.get("filterRenderUser")(n))) &&
              t.push(n);
        }),
          e.set("userList", t),
          u
            .on(u.SPEAK_APPLYING_ADD + n, function(n, t) {
              var i = e.getRenderedUser(t.user);
              if (i) {
                if (e.get("filterRenderUser") && !e.get("filterRenderUser")(i))
                  return;
                e.removeUser(i.id);
                var r = e.get("onApplyAdd");
                (!r || (r && !1 !== r(e.get("userList")))) &&
                  (e.get("newcomerFirst")
                    ? e.prepend("userList", i)
                    : e.append("userList", i));
              }
            })
            .on(u.SPEAK_APPLYING_REMOVE + n, function(n, t) {
              var i = t.user.id;
              null != i &&
                (t.speakState !== a.SPEAK_STATE_FREE ||
                e.get("removeApplyItemOnAccept")
                  ? e.removeUser(i)
                  : e.updateConnectingUserState(i));
            })
            .on(u.SPEAK_APPLY_RES + n, function(n, t) {
              var i = t.user.id,
                o = t.speakState,
                c = t.fromId;
              (r.isTeacher() || r.isAssistant()) &&
                c === i &&
                o === a.SPEAK_STATE_LIMIT &&
                e.removeUser(i);
            })
            .on(u.USER_OUT + n, function(n, t) {
              var i = t.user.id;
              e.removeUser(i);
            })
            .on(u.MEDIA_PUBLISH + n, function(n, t) {
              var i = t.user;
              e.get("applyNotForPushStream") ||
                ((i.videoOn || i.audioOn) && e.removeUser(i.id));
            })
            .on(u.REMOTER_TOGGLE_APPLYLIST + n, function() {
              e.toggleExpand();
            })
            .on(u.CLASSROOM_CONNECT_TRIGGER + n, function(n, t) {
              e.set("userList", []);
            });
      },
      beforeCreate: function(e) {
        "dark" === this.getProps().skin &&
          (e.components = function() {
            var e = Yox.object.copy(BJY.UserApply);
            return (e.template = e.templateDark), { UserApply: e };
          });
      },
      beforeDestroy: function() {
        u.off(this.namespace);
      },
      create: function(e) {
        var n = Yox.object.copy(BJY.ApplyList);
        return (
          (n.el = e.element[0]),
          (n.replace = !1 !== e.replace),
          (n.props = e),
          "simple" == e.template && (n.template = t(984)),
          "dark" === e.skin &&
            (n.components = function() {
              var e = Yox.object.copy(BJY.UserApply);
              return (e.template = e.templateDark), { UserApply: e };
            }),
          new Yox(n)
        );
      },
    };
  },
  971: function(e, n, t) {
    "use strict";
    t(0)(n, "__esModule", { value: !0 }), (n.APPLY_LIST_CHANGE = void 0);
    n.APPLY_LIST_CHANGE = "apply_list_clear";
  },
  972: function(e, n, t) {
    "use strict";
    e.exports = function() {
      return BJY.getLanguage({
        english: t(973),
        chineseLive: t(974),
        chineseClassroom: t(975),
      });
    };
  },
  973: function(e, n, t) {
    "use strict";
    (n.APPLYING_COUNT = "${count}applying"),
      (n.CONNECTING_COUNT = "${count}connecting..."),
      (n.USER_EMPTY = "No apply~");
  },
  974: function(e, n, t) {
    "use strict";
    (n.APPLYING_COUNT = "${count}浜轰妇鎵�"),
      (n.CONNECTING_COUNT = "${count}浜鸿繛鎺ヤ腑"),
      (n.USER_EMPTY = "娌℃湁浜轰妇鎵嬪摝~");
  },
  975: function(e, n, t) {
    "use strict";
    (n.APPLYING_COUNT = "${count}浜轰妇鎵�"),
      (n.CONNECTING_COUNT = "${count}浜鸿繛鎺ヤ腑"),
      (n.USER_EMPTY = "娌℃湁浜轰妇鎵嬪摝~");
  },
  976: function(e, n) {
    e.exports = function(
      e,
      n,
      t,
      i,
      r,
      o,
      a,
      c,
      u,
      s,
      p,
      l,
      f,
      d,
      y,
      h,
      v,
      g,
      m,
      A,
      b,
      _,
      E,
      x,
      P
    ) {
      var C = void 0;
      return v(
        "div",
        function() {
          a("className", "bjy-apply-list " + P(e("containerClass", !0))),
            o("data-length", s("data-length", e("userList.length", !0, C, !0))),
            o("data-skin", s("data-skin", e("skin", !0, C, !0))),
            o("data-expand", e("expanded", !0) ? 1 : 0),
            o("data-can-expand", e("canExpand", !0) ? 1 : 0);
        },
        function() {
          e("canExpand", !0)
            ? v(
                "div",
                function() {
                  a("className", "bjy-apply-list-title"),
                    l(
                      "click",
                      "event.click",
                      C,
                      "toggleExpand()",
                      "toggleExpand"
                    );
                },
                function() {
                  e("applyingCount", !0)
                    ? v(
                        "div",
                        function() {
                          a("className", "bjy-applying-count");
                        },
                        function() {
                          v(
                            "div",
                            function() {
                              a("className", "bjy-apply-icon-container");
                            },
                            function() {
                              v(
                                "div",
                                function() {
                                  a("className", "bjy-apply-icon");
                                },
                                C,
                                C,
                                !0
                              );
                            },
                            C,
                            !0
                          ),
                            r(P(e("applyingCount", !0)));
                        }
                      )
                    : h(),
                    e("connectingCount", !0)
                      ? v(
                          "div",
                          function() {
                            a("className", "bjy-connecting-count");
                          },
                          C,
                          P(e("connectingCount", !0))
                        )
                      : h(),
                    e("expanded", !0)
                      ? v(
                          "div",
                          function() {
                            a("className", "arrow-icon arrow-down-icon");
                          },
                          C,
                          C,
                          !0
                        )
                      : v(
                          "div",
                          function() {
                            a("className", "arrow-icon arrow-right-icon");
                          },
                          C,
                          C,
                          !0
                        );
                }
              )
            : h(),
            _(
              function() {
                g(
                  "UserApply",
                  function() {
                    o("user", s("user", e("", !1, C, !0))),
                      o("skin", s("skin", e("skin", !0, C, !0))),
                      o(
                        "rejectWhileForbidApply",
                        s(
                          "rejectWhileForbidApply",
                          e("rejectWhileForbidApply", !0, C, !0)
                        )
                      ),
                      o(
                        "showSpeakCount",
                        s("showSpeakCount", e("showSpeakCount", !0, C, !0))
                      ),
                      o(
                        "needShowGroupInfo",
                        s(
                          "needShowGroupInfo",
                          e("needShowGroupInfo", !0, C, !0)
                        )
                      ),
                      o(
                        "onAcceptApplyClick",
                        s(
                          "onAcceptApplyClick",
                          e("onAcceptApplyClick", !0, C, !0)
                        )
                      );
                  },
                  C,
                  C,
                  e("id", !1)
                );
              },
              e("userList", !0, C, !0),
              C
            ),
            e("userList.length", !0)
              ? h()
              : v(
                  "div",
                  function() {
                    a("className", "bjy-empty-info");
                  },
                  function() {
                    v(
                      "i",
                      function() {
                        a("className", "bjy-icon");
                      },
                      C,
                      C,
                      !0
                    ),
                      v("span", C, C, P(e("language.USER_EMPTY", !0)));
                  }
                );
        }
      );
    };
  },
  977: function(e, n, t) {
    "use strict";
    var i = t(978),
      r = BJY.config,
      o = BJY.states,
      a = BJY.data.user,
      c = BJY.userSpeak,
      u = BJY.eventEmitter,
      s = t(92);
    e.exports = BJY.UserApply = {
      template: t(982),
      templateDark: t(983),
      propTypes: {
        user: { type: "object", required: !0 },
        rejectWhileForbidApply: { type: "boolean" },
        showSpeakCount: { type: "boolean", value: !1 },
        needShowGroupInfo: { type: "boolean", value: !1 },
        onAcceptApplyClick: { type: "function" },
      },
      data: function() {
        var e = this.get("user.number"),
          n = o.state(o.MUTATION.SPEAK)[e] || 0;
        return {
          language: i(),
          NONE_GROUP_ID: r.NONE_GROUP_ID,
          showAction: !1,
          isConnecting: !1,
          speakCount: n,
        };
      },
      computed: {
        groupInfo: function() {
          return a.getGroupInfoById(this.get("user.group")) || {};
        },
      },
      filters: {
        compressImage: function(e, n) {
          return BJY.compressImage({ url: e, width: 60 * n, height: 60 * n });
        },
      },
      methods: {
        applyClick: function() {
          this.fire("userApplyClick", { user: this.get("user") });
        },
        applyDoubleClick: function() {
          this.fire("userApplyDoubleClick", { user: this.get("user") });
        },
        acceptApply: function() {
          var e = this,
            n = this.get("user"),
            t = e.get("onAcceptApplyClick"),
            i = function() {
              c.processApply(n.id, !0).then(function() {
                e &&
                  e.$el &&
                  (e.set({ isConnecting: !0, showAction: !1 }),
                  e.fire("applyAccept", { userId: n.id }));
              });
            },
            r = t && t(n);
          r && r.then
            ? r.then(function() {
                i();
              })
            : i();
        },
        rejectApply: function() {
          var e = this.get("user");
          c.processApply(e.id, !1),
            this.set({ showAction: !1 }),
            this.fire("applyReject", { userId: e.id });
        },
      },
      afterMount: function() {
        var e = this,
          n = $(this.$el);
        new s({
          triggerElement: n.find(".bjy-apply-icon"),
          layerElement: n.find(".bjy-popup-list"),
          showLayerTrigger: "click",
          showLayerAnimation: function(n) {
            e.set({ showAction: !0 });
          },
          hideLayerTrigger: "click",
          hideLayerAnimation: function(n) {
            e.set({ showAction: !1 });
          },
        }),
          (e.namespace = ".user_apply" + Math.random()),
          e.get("rejectWhileForbidApply") &&
            u.on(u.SPEAK_APPLY_FORBID_ALL_CHANGE + e.namespace, function(n, t) {
              t.forbidAll && e.rejectApply();
            }),
          u.on(u.REMOTER_USER_APPLY_HANDLE + e.namespace, function(n, t) {
            t.user.id == e.get("user.id") &&
              (t.accept ? e.acceptApply() : e.rejectApply());
          });
      },
      beforeDestroy: function() {
        u.off(this.namespace);
      },
      create: function(e) {
        var n = Yox.object.copy(BJY.UserApply);
        return (
          (n.el = e.element[0]),
          (n.replace = !1 !== e.replace),
          (n.props = e),
          new Yox(n)
        );
      },
    };
  },
  978: function(e, n, t) {
    "use strict";
    e.exports = function() {
      return BJY.getLanguage({
        english: t(979),
        chineseLive: t(980),
        chineseClassroom: t(981),
      });
    };
  },
  979: function(e, n, t) {
    "use strict";
    (n.APPLY_ACCEPT = "Agree"),
      (n.APPLY_REJECT = "Reject"),
      (n.USER_APPLY_ACCEPT = "Agree"),
      (n.USER_APPLY_REJECT = "Reject"),
      (n.USER_MEDIA_LOADING_HINT = "Connecting..."),
      (n.USER_SPEAK_PLACEHOLDER = "Speak Count");
  },
  980: function(e, n, t) {
    "use strict";
    (n.APPLY_ACCEPT = "涓婂彴"),
      (n.APPLY_REJECT = "鏀句笅涓炬墜"),
      (n.USER_APPLY_ACCEPT = "鍚屾剰"),
      (n.USER_APPLY_REJECT = "鎷掔粷"),
      (n.USER_MEDIA_LOADING_HINT = "杩炴帴涓�..."),
      (n.USER_SPEAK_PLACEHOLDER = "涓婇害娆℃暟"),
      (n.ACCEPT = "鎺ュ彈"),
      (n.REFUSE = "鎷掔粷");
  },
  981: function(e, n, t) {
    "use strict";
    (n.APPLY_ACCEPT = "涓婂彴"),
      (n.APPLY_REJECT = "鏀句笅涓炬墜"),
      (n.USER_APPLY_ACCEPT = "鍚屾剰"),
      (n.USER_APPLY_REJECT = "鎷掔粷"),
      (n.USER_MEDIA_LOADING_HINT = "杩炴帴涓�..."),
      (n.USER_SPEAK_PLACEHOLDER = "涓婇害娆℃暟");
  },
  982: function(e, n) {
    e.exports = function(
      e,
      n,
      t,
      i,
      r,
      o,
      a,
      c,
      u,
      s,
      p,
      l,
      f,
      d,
      y,
      h,
      v,
      g,
      m,
      A,
      b,
      _,
      E,
      x,
      P
    ) {
      var C = void 0;
      return v(
        "div",
        function() {
          a("className", "bjy-user-apply"),
            o("data-user-id", s("data-user-id", e("user.id", !0, C, !0))),
            l("click", "event.click", C, "applyClick()", "applyClick"),
            l(
              "dblclick",
              "event.dblclick",
              C,
              "applyDoubleClick()",
              "applyDoubleClick"
            );
        },
        function() {
          v("img", function() {
            a("className", "bjy-avatar"),
              o("ondragstart", "return false"),
              a("src", i(e("compressImage", !0), [e("user.avatar", !0), 1]));
          }),
            v(
              "div",
              function() {
                a("className", "bjy-name"),
                  a("title", i(e("formatUserName", !0), [e("user.name", !0)]));
              },
              function() {
                v(
                  "div",
                  function() {
                    a("className", "bjy-name-label");
                  },
                  C,
                  P(e("user.name", !0))
                ),
                  e("user.endTypeIcon", !0)
                    ? v(
                        "div",
                        function() {
                          a("className", "bjy-device");
                        },
                        function() {
                          v("i", function() {
                            a(
                              "className",
                              "bjy-end-type " + P(e("user.endTypeIcon", !0))
                            ),
                              e("user.endTypeText", !0) &&
                                a(
                                  "title",
                                  s(
                                    "title",
                                    e("user.endTypeText", !0, C, !0, !0),
                                    1
                                  )
                                );
                          });
                        }
                      )
                    : h();
              }
            ),
            e("isConnecting", !0)
              ? v(
                  "div",
                  function() {
                    a("className", "bjy-connecting-hint");
                  },
                  C,
                  P(e("language.USER_MEDIA_LOADING_HINT", !0))
                )
              : v(
                  "div",
                  function() {
                    a("className", "bjy-action");
                  },
                  function() {
                    v(
                      "div",
                      function() {
                        a("className", "bjy-button bjy-accept"),
                          l(
                            "click",
                            "event.click",
                            C,
                            "acceptApply()",
                            "acceptApply"
                          );
                      },
                      C,
                      P(e("language.USER_APPLY_ACCEPT", !0))
                    ),
                      v(
                        "div",
                        function() {
                          a("className", "bjy-button bjy-reject"),
                            l(
                              "click",
                              "event.click",
                              C,
                              "rejectApply()",
                              "rejectApply"
                            );
                        },
                        C,
                        P(e("language.USER_APPLY_REJECT", !0))
                      );
                  }
                );
        }
      );
    };
  },
  983: function(e, n) {
    e.exports = function(
      e,
      n,
      t,
      i,
      r,
      o,
      a,
      c,
      u,
      s,
      p,
      l,
      f,
      d,
      y,
      h,
      v,
      g,
      m,
      A,
      b,
      _,
      E,
      x,
      P
    ) {
      var C = void 0;
      return v(
        "div",
        function() {
          a(
            "className",
            "bjy-user-apply-dark " + P(e("showAction", !0) ? " active" : "")
          );
        },
        function() {
          v(
            "div",
            function() {
              a("className", "bjy-avatar");
            },
            C,
            P(i(e("formatUserName", !0), [e("user.name", !0)]))
          ),
            v(
              "div",
              function() {
                a("className", "bjy-name");
              },
              function() {
                v(
                  "div",
                  function() {
                    a("className", "bjy-name-label");
                  },
                  C,
                  P(i(e("formatUserName", !0), [e("user.name", !0)]))
                ),
                  e("user.endTypeIcon", !0)
                    ? v(
                        "div",
                        function() {
                          a("className", "bjy-device");
                        },
                        function() {
                          v("i", function() {
                            a(
                              "className",
                              "bjy-end-type " + P(e("user.endTypeIcon", !0))
                            ),
                              e("user.endTypeText", !0) &&
                                (o(
                                  "data-title",
                                  s(
                                    "data-title",
                                    e("user.endTypeText", !0, C, !0)
                                  )
                                ),
                                o("data-skin", "bjy-dark"),
                                o("data-placement", "top"));
                          });
                        }
                      )
                    : h(),
                  e("showSpeakCount", !0) && e("user.speakCountIncon", !0)
                    ? v(
                        "div",
                        function() {
                          a("className", "bjy-speak-count");
                        },
                        function() {
                          v("i", function() {
                            a(
                              "className",
                              "bjy-speak-count-icon " +
                                P(e("user.speakCountIncon", !0))
                            ),
                              o(
                                "data-title",
                                s(
                                  "data-title",
                                  e(
                                    "language.USER_SPEAK_PLACEHOLDER",
                                    !0,
                                    C,
                                    !0
                                  )
                                )
                              ),
                              o("data-skin", "bjy-dark"),
                              o("data-placement", "top");
                          }),
                            v(
                              "span",
                              function() {
                                a("className", "bjy-speak-count-label");
                              },
                              C,
                              P(e("speakCount", !0))
                            );
                        }
                      )
                    : h();
              }
            ),
            e("needShowGroupInfo", !0) &&
            e("groupInfo.id", !0) !== e("NONE_GROUP_ID", !0)
              ? v(
                  "div",
                  function() {
                    a("className", "bjy-group-info");
                  },
                  function() {
                    v("i", function() {
                      a("className", "bjy-group-color"),
                        a(
                          "style.cssText",
                          "background-color: " +
                            P(e("groupInfo.color", !0) || "#FFF")
                        );
                    }),
                      r(P(e("groupInfo.name", !0)));
                  }
                )
              : h(),
            e("isConnecting", !0)
              ? v(
                  "div",
                  function() {
                    a("className", "bjy-connecting-hint");
                  },
                  C,
                  P(e("language.USER_MEDIA_LOADING_HINT", !0))
                )
              : v(
                  "div",
                  function() {
                    a("className", "bjy-action");
                  },
                  function() {
                    v("div", function() {
                      a("className", "bjy-accept"),
                        l(
                          "click",
                          "event.click",
                          C,
                          "acceptApply()",
                          "acceptApply"
                        ),
                        o(
                          "data-title",
                          s("data-title", e("language.ACCEPT", !0, C, !0))
                        ),
                        c("", 2e3);
                    }),
                      v("div", function() {
                        a("className", "bjy-reject"),
                          l(
                            "click",
                            "event.click",
                            C,
                            "rejectApply()",
                            "rejectApply"
                          ),
                          o(
                            "data-title",
                            s("data-title", e("language.REFUSE", !0, C, !0))
                          ),
                          c("", 2e3);
                      });
                  }
                );
        }
      );
    };
  },
  984: function(e, n) {
    e.exports = function(
      e,
      n,
      t,
      i,
      r,
      o,
      a,
      c,
      u,
      s,
      p,
      l,
      f,
      d,
      y,
      h,
      v,
      g,
      m,
      A,
      b,
      _,
      E,
      x,
      P
    ) {
      var C = void 0;
      return v(
        "div",
        function() {
          a(
            "className",
            "bjy-apply-list simple-expandable " +
              (e("expanded", !0) ? "bjy-expanded" : "bjy-collapsed")
          ),
            o("data-length", s("data-length", e("userList.length", !0, C, !0)));
        },
        function() {
          v(
            "div",
            function() {
              a("className", "bjy-apply-title"),
                l("click", "event.click", C, "toggleExpand()", "toggleExpand");
            },
            function() {
              v("div", C, function() {
                v(
                  "div",
                  function() {
                    a("className", "bjy-apply-list-icon");
                  },
                  C,
                  C,
                  !0
                ),
                  e("userList.length", !0) > 1
                    ? v(
                        "div",
                        function() {
                          a("className", "bjy-apply-title-label");
                        },
                        C,
                        P(e("applyingCount", !0))
                      )
                    : v(
                        "div",
                        function() {
                          a("className", "bjy-apply-title-label");
                        },
                        C,
                        P(e("userList.0.name", !0))
                      );
              });
            }
          ),
            v(
              "div",
              function() {
                a("className", "bjy-apply-list-content");
              },
              function() {
                _(
                  function() {
                    g(
                      "UserApply",
                      function() {
                        o("user", s("user", e("", !1, C, !0))),
                          o("skin", s("skin", e("skin", !0, C, !0))),
                          o(
                            "rejectWhileForbidApply",
                            s(
                              "rejectWhileForbidApply",
                              e("rejectWhileForbidApply", !0, C, !0)
                            )
                          );
                      },
                      C,
                      C,
                      e("id", !1)
                    );
                  },
                  e("userList", !0, C, !0),
                  C
                );
              }
            );
        }
      );
    };
  },
  99: function(e, n, t) {
    var i = t(2),
      r = i.JSON || (i.JSON = { stringify: JSON.stringify });
    e.exports = function(e) {
      return r.stringify.apply(r, arguments);
    };
  },
});
