window["BJY-SDK"] = function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  return n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(i, r, function (t) {
        return e[t]
      }.bind(null, r));
    return i
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/", n(n.s = 1319)
}({
  0: function (e, t, n) {
    e.exports = n(57)
  },
  1: function (e, t) {
    e.exports = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
  },
  103: function (t, n, i) {
    var r;
    void 0 === (r = function (t, n, r) {
      "use strict";
      var o = i(149),
        a = i(150);

      function s(e) {
        return e.originalEvent.changedTouches[0]
      }
      var c = document.createElement("div"),
        u = {
          support: "ontouchend" in c,
          click: "touchstart",
          down: "touchstart",
          move: "touchmove",
          up: "touchend",
          page: function (e) {
            var t = s(e);
            return {
              x: t.pageX,
              y: t.pageY
            }
          },
          client: function (e) {
            var t = s(e);
            return {
              x: t.clientX,
              y: t.clientY
            }
          },
          offset: function (e) {
            var t = s(e);
            return {
              x: t.offsetX,
              y: t.offsetY
            }
          }
        },
        l = {
          support: "onclick" in c,
          click: "click",
          down: "mousedown",
          move: "mousemove",
          up: "mouseup",
          page: function (e) {
            return o(e)
          },
          client: function (e) {
            return {
              x: e.clientX,
              y: e.clientY
            }
          },
          offset: function () {
            return a(e)
          }
        };
      return c = null, {
        touch: u,
        mouse: l
      }
    }.call(n, i, n, t)) || (t.exports = r)
  },
  104: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e) {
        var t = ("" + e).split(".");
        return 2 === t.length ? t[1].length : 0
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  105: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t) {
        var n, i = ("" + e).split(".");
        return t >= 0 || (t = 0), 1 === i.length ? n = e + new Array(t + 1).join("0") : (t = Math.max(0, t - i[1].length), n = i.join("") + new Array(t + 1).join("0")), +n
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  11: function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t)
    }
  },
  119: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function () {
        return window.innerWidth || document.documentElement.clientWidth
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  12: function (e, t) {
    e.exports = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  },
  120: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function () {
        return window.innerHeight || document.documentElement.clientHeight
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  129: function (e, t, n) {
    "use strict";
    e.exports = function () {
      return !BJY.browser.wechat && 1 != +BJY.query.ignoreCefQuery && "function" == typeof window.cefQuery
    }
  },
  13: function (e, t, n) {
    var i = n(8),
      r = n(18);
    e.exports = n(4) ? function (e, t, n) {
      return i.f(e, t, r(1, n))
    } : function (e, t, n) {
      return e[t] = n, e
    }
  },
  130: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function () {
        return Math.max(document.body.scrollLeft, document.documentElement.scrollLeft)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  131: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function () {
        return Math.max(document.body.scrollTop, document.documentElement.scrollTop)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  1319: function (e, t, n) {
    "use strict";
    var i, r, o = n(1),
      a = o(n(68)),
      s = o(n(34)),
      c = n(841),
      u = BJY.data.media,
      l = BJY.store,
      d = BJY.storage,
      E = {
        PREPARE: 0,
        DETECT: 1,
        RESULT: 2
      },
      p = {
        NONE: -1,
        CAMERA: 0,
        SPEAKER: 1,
        MIC: 2,
        NETWORK: 3
      },
      f = {
        ATTEMPTING: 0,
        FAILED_DEVICE: 1,
        FAILED_NETWORK: 2,
        FAILED_BOTH: 3,
        SUCCESS: 4
      },
      v = (i = {}, (0, s.default)(i, f.ATTEMPTING, c.PREPARE_STATE_ATTEMPTING), (0, s.default)(i, f.FAILED_DEVICE, c.PREPARE_STATE_FAILED_DEVICE), (0, s.default)(i, f.FAILED_NETWORK, c.PREPARE_STATE_FAILED_NETWORK), (0, s.default)(i, f.FAILED_BOTH, c.PREPARE_STATE_FAILED_BOTH), (0, s.default)(i, f.FAILED, c.PREPARE_STATE_FAILED), (0, s.default)(i, f.SUCCESS, c.PREPARE_STATE_SUCCESS), i),
      T = (r = {}, (0, s.default)(r, p.CAMERA, {
        question: c.DETECT_CAMERA_QUESTION,
        unconnected: c.DETECT_DEVICE_UNCONNECTED,
        fail: c.DETECT_CAMERA_FAIL,
        success: c.DETECT_CAMERA_SUCCESS,
        confirm: c.DETECT_CAMERA_CONFIRM
      }), (0, s.default)(r, p.SPEAKER, {
        question: c.DETECT_SPEAKER_QUESTION,
        unconnected: c.DETECT_DEVICE_UNCONNECTED,
        fail: c.DETECT_SPEAKER_FAIL,
        success: c.DETECT_SPEAKER_SUCCESS,
        confirm: c.DETECT_SPEAKER_CONFIRM
      }), (0, s.default)(r, p.MIC, {
        question: c.DETECT_MIC_QUESTION,
        unconnected: c.DETECT_DEVICE_UNCONNECTED,
        fail: c.DETECT_MIC_FAIL,
        success: c.DETECT_MIC_SUCCESS,
        confirm: c.DETECT_MIC_CONFIRM
      }), (0, s.default)(r, p.NETWORK, {
        question: c.DETECT_NETWORK_FINISH,
        unconnected: c.DETECT_NETWORK_UNCONNECTED
      }), r);
    window.addEventListener("load", (function e() {
      window.removeEventListener("load", e), (new Image).src = BJY.cdnOrigin + "/page/detectionNew/img/camera_normal.png", (new Image).src = BJY.cdnOrigin + "/page/detectionNew/img/speaker_normal.png", (new Image).src = BJY.cdnOrigin + "/page/detectionNew/img/mic_normal.png", (new Image).src = BJY.cdnOrigin + "/page/detectionNew/img/network_normal.png", (new Image).src = BJY.cdnOrigin + "/page/detectionNew/img/success.png", (new Image).src = BJY.cdnOrigin + "/page/detectionNew/img/fail.png", (new Audio).src = BJY.cdnOrigin + "/page/detectionNew/audio/speaker.mp3"
    })), e.exports = BJY.DetectionNew = {
      template: n(1322),
      propTypes: {
        onDetectResult: {
          type: "function",
          value: function () {}
        },
        checkConnectivityOnly: {
          type: "boolean"
        }
      },
      data: function () {
        var e, t, n;
        return {
          STAGE: E,
          DEVICES: p,
          stage: E.PREPARE,
          STAGE_PREPARE_STATE: f,
          stage_prepare_state: f.ATTEMPTING,
          stage_prepare_progress: 0,
          STAGE_PREPARE_STATE_TEXT: v,
          STAGE_PREPARE_DEVICE_STATE: (e = {}, (0, s.default)(e, p.CAMERA, "pending"), (0, s.default)(e, p.SPEAKER, "pending"), (0, s.default)(e, p.MIC, "pending"), (0, s.default)(e, p.NETWORK, "pending"), e),
          stage_detect_device: p.NONE,
          STAGE_DETECT_DEVICE_STATE: (t = {}, (0, s.default)(t, p.CAMERA, "pending"), (0, s.default)(t, p.SPEAKER, "pending"), (0, s.default)(t, p.MIC, "pending"), (0, s.default)(t, p.NETWORK, "pending"), t),
          STAGE_DETECT_DEVICE_CONNECTED: (n = {}, (0, s.default)(n, p.CAMERA, !0), (0, s.default)(n, p.SPEAKER, !0), (0, s.default)(n, p.MIC, !0), (0, s.default)(n, p.NETWORK, !0), n),
          STAGE_DETECT_TEXT: T,
          dialog: {
            visible: !1,
            title: "",
            confirm: "",
            buttons: []
          },
          language: c,
          showSelectOption_: !1,
          detectResult: (0, s.default)({}, p.NETWORK, null),
          hasCheckedNoMorePopup: BJY.DetectionNew.hasCheckedNoMorePopup()
        }
      },
      computed: {
        prepare_failed: function () {
          return this.stage_prepare_state > f.ATTEMPTING && this.stage_prepare_state < f.SUCCESS
        },
        result_passed: function () {
          return "success" === this.STAGE_DETECT_DEVICE_STATE[p.CAMERA] && "success" === this.STAGE_DETECT_DEVICE_STATE[p.SPEAKER] && "success" === this.STAGE_DETECT_DEVICE_STATE[p.MIC] && "success" === this.STAGE_DETECT_DEVICE_STATE[p.NETWORK]
        },
        progress_percent: function () {
          return this.stage_prepare_progress / ((0, a.default)(p).length - 1) * 100 + "%"
        },
        showSelectOption: function () {
          return this.stage_detect_device === p.NETWORK ? !!this.detectResult[p.NETWORK] : this.showSelectOption_
        }
      },
      watchers: {
        stage_detect_device: function () {
          var e = this;
          this.showSelectOption_ = !1, setTimeout((function () {
            e.showSelectOption_ = !0
          }), 2e3)
        }
      },
      components: {
        CameraDetection: n(1323),
        SpeakerDetection: n(1325),
        MicDetection: n(1327),
        NetworkDetection: n(1329)
      },
      methods: {
        startDetect: function () {
          this.prepare_failed ? this.reprepare() : (this.player.dispose(), this.stage = E.DETECT, this._detectNextDevice())
        },
        finishDetect: function () {
          var e;
          this.stage = E.RESULT, this.detectResult = (e = {}, (0, s.default)(e, p.CAMERA, u.getCameraName()), (0, s.default)(e, p.SPEAKER, u.getSpeakerName()), (0, s.default)(e, p.MIC, u.getMicName()), (0, s.default)(e, p.NETWORK, this.detectResult[p.NETWORK]), e)
        },
        detectDevice: function (e, t) {
          var n = this;
          "fail" === t && this.STAGE_DETECT_DEVICE_CONNECTED[e] ? this.dialog = {
            visible: !0,
            title: T[e].fail + "?",
            confirm: T[e].confirm,
            buttons: [{
              type: "plain",
              text: T[e].fail,
              handler: function () {
                n.STAGE_DETECT_DEVICE_STATE[e] = "fail", n._detectNextDevice()
              }
            }, {
              type: "primary",
              text: T[e].success,
              handler: function () {
                n.STAGE_DETECT_DEVICE_STATE[e] = "success", n._detectNextDevice()
              }
            }]
          } : t ? (this.STAGE_DETECT_DEVICE_STATE[e] = t, this._detectNextDevice()) : (this.stage_detect_device = e, this._detectCurrentDevice())
        },
        cancelDetect: function () {
          var e = this;
          this.stage === E.PREPARE && this.stage_prepare_state > f.ATTEMPTING && this.stage_prepare_state < f.SUCCESS ? this.onDetectResult(!1) : this.dialog = {
            visible: !0,
            title: c.PREPARE_GIVEUP_TITLE,
            confirm: c.PREPARE_GIVEUP_CONFIRM,
            buttons: [{
              type: "primary",
              text: c.PREPARE_CONTINUE,
              handler: function () {}
            }, {
              type: "plain",
              text: c.PREPARE_GIVEUP,
              handler: function () {
                e.onDetectResult(!1)
              }
            }]
          }
        },
        exitDetect: function () {
          var e = this,
            t = {
              ip: this.detectResult[p.NETWORK].ip,
              os: this.detectResult[p.NETWORK].os,
              client: this.detectResult[p.NETWORK].browser,
              camera_status: "success" === this.STAGE_DETECT_DEVICE_STATE[p.CAMERA] ? 1 : 0,
              mic_status: "success" === this.STAGE_DETECT_DEVICE_STATE[p.MIC] ? 1 : 0,
              speaker_status: "success" === this.STAGE_DETECT_DEVICE_STATE[p.SPEAKER] ? 1 : 0
            };
          this.result_passed ? (this.onDetectResult(!0, t), d.set("bjy_detection_new_succeed", !0)) : this.dialog = {
            visible: !0,
            title: c.RESULT_EXIT_TITLE,
            confirm: c.RESULT_EXIT_CONFIRM,
            buttons: [{
              type: "plain",
              text: c.RESULT_EXIT,
              handler: function () {
                e.onDetectResult(!1, t)
              }
            }, {
              type: "primary",
              text: c.RESULT_AGAIN,
              handler: function () {
                e.againDetect()
              }
            }]
          }
        },
        againDetect: function (e) {
          var t, n;
          e.stopPropagation(), this.STAGE_DETECT_DEVICE_STATE = (t = {}, (0, s.default)(t, p.CAMERA, "pending"), (0, s.default)(t, p.SPEAKER, "pending"), (0, s.default)(t, p.MIC, "pending"), (0, s.default)(t, p.NETWORK, "pending"), t), this.STAGE_DETECT_DEVICE_CONNECTED = (n = {}, (0, s.default)(n, p.CAMERA, !0), (0, s.default)(n, p.SPEAKER, !0), (0, s.default)(n, p.MIC, !0), (0, s.default)(n, p.NETWORK, !0), n), this.stage = E.DETECT, this.stage_detect_device = p.NONE, this.detectResult = (0, s.default)({}, p.NETWORK, null), this._detectNextDevice()
        },
        closeDialog: function (e) {
          this.dialog.visible = !1, "function" == typeof e && e()
        },
        noop: function (e) {
          e.stop()
        },
        onNetworkResult: function (e) {
          this.detectResult[p.NETWORK] = e, this.STAGE_DETECT_DEVICE_STATE[p.NETWORK] = e.success ? "success" : "fail"
        },
        _prepare: function () {
          var e = this;
          this._detectDevicesConnectivity("media.cameraList", p.CAMERA).then((function () {
            return e._detectDevicesConnectivity("media.speakerList", p.SPEAKER)
          })).then((function () {
            return e._detectDevicesConnectivity("media.micList", p.MIC)
          })).then((function () {
            return e._detectNetworkConnectivity()
          })).then((function () {
            var t, n = "fail" === e.STAGE_PREPARE_DEVICE_STATE[p.NETWORK],
              i = "fail" === e.STAGE_PREPARE_DEVICE_STATE[p.CAMERA] || "fail" === e.STAGE_PREPARE_DEVICE_STATE[p.SPEAKER] || "fail" === e.STAGE_PREPARE_DEVICE_STATE[p.MIC];
            t = n && i ? f.FAILED_BOTH : n ? f.FAILED_NETWORK : i ? f.FAILED_DEVICE : f.SUCCESS, e.checkConnectivityOnly && t !== f.SUCCESS && (t = f.FAILED), e.stage_prepare_state = t
          }))
        },
        reprepare: function () {
          var e, t = this;
          this.stage_prepare_state = f.ATTEMPTING, this.stage_prepare_progress = 0, this.STAGE_PREPARE_DEVICE_STATE = (e = {}, (0, s.default)(e, p.CAMERA, "pending"), (0, s.default)(e, p.SPEAKER, "pending"), (0, s.default)(e, p.MIC, "pending"), (0, s.default)(e, p.NETWORK, "pending"), e), setTimeout((function () {
            return t._prepare()
          }))
        },
        toggleNoMorePopup: function () {
          var e = !this.hasCheckedNoMorePopup;
          d.set("bjy_detection_new_no_more_popup", e), this.hasCheckedNoMorePopup = e
        },
        _detectCurrentDevice: function () {
          var e = this;
          switch (this.stage_detect_device) {
            case p.CAMERA:
              this._detectCurrentDeviceConnectivity(u.getCameraIndex()), l.watch("media.cameraIndex", this._detectCurrentDeviceConnectivity);
              break;
            case p.SPEAKER:
              l.unwatch("media.cameraIndex", this._detectCurrentDeviceConnectivity), this._detectCurrentDeviceConnectivity(u.getSpeakerIndex()), l.watch("media.speakerIndex", this._detectCurrentDeviceConnectivity);
              break;
            case p.MIC:
              l.unwatch("media.speakerIndex", this._detectCurrentDeviceConnectivity), this._detectCurrentDeviceConnectivity(u.getMicIndex()), l.watch("media.micIndex", this._detectCurrentDeviceConnectivity);
              break;
            case p.NETWORK:
              l.unwatch("media.micIndex", this._detectCurrentDeviceConnectivity), navigator.onLine ? this.STAGE_DETECT_DEVICE_CONNECTED[this.stage_detect_device] = !0 : this.STAGE_DETECT_DEVICE_CONNECTED[this.stage_detect_device] = !1, window.addEventListener("offline", (function () {
                e.STAGE_DETECT_DEVICE_CONNECTED[e.stage_detect_device] = !1
              })), window.addEventListener("online", (function () {
                e.STAGE_DETECT_DEVICE_CONNECTED[e.stage_detect_device] = !0
              }))
          }
        },
        _detectTimeout: function () {
          this.stage_prepare_progress++;
          var e = $.Deferred();
          return setTimeout((function () {
            return e.resolve()
          }), 1e3), e
        },
        _detectDevicesConnectivity: function (e, t) {
          var n = this;
          return this._detectTimeout().then((function () {
            var i = BJY.store.get(e) || [];
            "media.speakerList" === e && 0 === i.length && BJY.getExtension() === BJY.Player.flash && (i = [{
              name: "default",
              index: 0,
              guid: "..."
            }]), i.length && i.some((function (e) {
              return e.guid
            })) ? n.STAGE_PREPARE_DEVICE_STATE[t] = "success" : n.STAGE_PREPARE_DEVICE_STATE[t] = "fail"
          }))
        },
        _detectNetworkConnectivity: function () {
          var e = this;
          return this._detectTimeout().then((function () {
            window.navigator.onLine ? e.STAGE_PREPARE_DEVICE_STATE[p.NETWORK] = "success" : e.STAGE_PREPARE_DEVICE_STATE[p.NETWORK] = "fail"
          }))
        },
        _detectCurrentDeviceConnectivity: function (e) {
          this.STAGE_DETECT_DEVICE_CONNECTED[this.stage_detect_device] = -1 !== e
        },
        _detectNextDevice: function () {
          this.stage_detect_device++, "pending" === this.STAGE_DETECT_DEVICE_STATE[this.stage_detect_device] && (this.STAGE_DETECT_DEVICE_STATE[this.stage_detect_device] = ""), this._detectCurrentDevice()
        }
      },
      afterCreate: function () {
        this._detectCurrentDeviceConnectivity = this._detectCurrentDeviceConnectivity.bind(this)
      },
      afterMount: function () {
        var e = this;
        this.player = new BJY.Player({
          element: $(this.$el).find(".player"),
          user: l.get("user"),
          extension: BJY.getExtension(),
          isSetting: !0,
          onComplete: function () {
            e._prepare()
          }
        })
      },
      beforeDestroy: function () {
        this.player && this.player.dispose()
      },
      create: function (e) {
        return new Yox($.extend(e, BJY.DetectionNew))
      },
      hasDetectSucceeded: function () {
        return BJY.DetectionNew.hasCheckedNoMorePopup() || !!d.get("bjy_detection_new_succeed")
      },
      hasCheckedNoMorePopup: function () {
        return "true" === d.get("bjy_detection_new_no_more_popup")
      }
    }
  },
  1320: function (e, t, n) {
    "use strict";
    t.PREPARE_TITLE = "Detect Preparation", t.PREPARE_WELCOME = "Welcome to cloud room", t.PREPARE_WELCOME_TIP = "In order to ensure better teaching effect, please complete the equipment test~", t.PREPARE_ATTETION = "Please wear headphones to avoid squealing and harsh noise", t.PREPARE_START = "Start", t.PREPARE_NOTICE = "This reminder will not appear after self check", t.PREPARE_NOMORE_POPUP = "No more pop-up", t.PREPARE_GIVEUP = "Giveup Detection", t.PREPARE_CONTINUE = "Continue Detection", t.PREPARE_GIVEUP_TITLE = "Giveup Detection锛�", t.PREPARE_GIVEUP_CONFIRM = "The test has not been completed, giving up the test may affect the class effect <br/> are you sure you want to give up the test?", t.PREPARE_EXIT_ROOM = "Exit Room", t.PREPARE_CONTINUE_ENTER_ROOM = "Continue Enter", t.PREPARE_RECONNECT = "Reconnect", t.PREPARE_STATE_ATTEMPTING = "Please wait while we try to connect the necessary devices to the network", t.PREPARE_STATE_FAILED_DEVICE = "No devices found, please connect the necessary audio and video equipment correctly before testing", t.PREPARE_STATE_FAILED_NETWORK = "No network connection found! Please keep the network unobstructed during the test", t.PREPARE_STATE_FAILED_BOTH = "Device and network not found! Be sure to connect the device and network correctly", t.PREPARE_STATE_FAILED = "Abnormal connection may directly affect your classroom experience!", t.PREPARE_STATE_SUCCESS = "The device and network connection are normal. You can start detection", t.PREPARE_STATE_FAILED_TIP = 'In case of abnormal connection, please refer to the following scheme: <br/> 1. If the browser pops up a prompt, please select "allow" <br/> 2. If the antivirus software pops up a prompt, please select "allow" <br/> 3. Check whether the camera is properly connected and turned on <br/> 4. Check whether the camera is occupied by other programs <br/> 5. Try to unplug the camera or replace the socket <br/> 6. Try to restart the computer and check again', t.DETECT_CAMERA_QUESTION = "Can you see yourself clearly through the camera?", t.DETECT_SPEAKER_QUESTION = "Can you hear the sound clearly through the loudspeaker?", t.DETECT_MIC_QUESTION = "Can you hear through headphones and see the volume beat?", t.DETECT_NETWORK_FINISH = "Click Finish to view the test report", t.DETECT_DEVICE_UNCONNECTED = "No device found, please keep the equipment connected normally during the test", t.DETECT_NETWORK_UNCONNECTED = "No device found, please keep the network connected normally during the test", t.DETECT_CAMERA_FAIL = "Can't see", t.DETECT_CAMERA_SUCCESS = "Can see", t.DETECT_SPEAKER_FAIL = "Can't hear", t.DETECT_SPEAKER_SUCCESS = "Can hear", t.DETECT_MIC_FAIL = "Can't hear or see", t.DETECT_MIC_SUCCESS = "Can hear and see", t.DETECT_CAMERA_CONFIRM = "Detect that the camera is connected normally <br/> are you sure you can't see yourself through the camera?", t.DETECT_SPEAKER_CONFIRM = "Detect that the loudspeaker is connected normally <br/> are you sure you can't hear the sound through the loudspeaker?", t.DETECT_MIC_CONFIRM = "Detected that the microphone is connected properly <br/> are you sure that you can't hear the sound or see the volume beating effect?", t.DETECT_FINISH = "Finish", t.DETECT_CAMERA_TIP = "No video", t.DETECT_CAMERA_TIP_CONTENT = '1. If the antivirus software pops up a prompt, please select "allow" <br/> 2. Check whether the camera is properly connected and turned on <br/> 3. Check whether the camera is occupied by other programs <br/> 4. Try to unplug the camera or replace the socket <br/> 5. Try to restart the computer and check again', t.DETECT_SPEAKER_TIP = "No sound", t.DETECT_SPEAKER_TIP_CONTENT = '1. If the antivirus software pops up a prompt, please select "allow" <br/> 2. Check whether the audio device is properly connected and turned on <br/> 3. Check whether the audio device is turned on in mute mode <br/> 4. Try to unplug the audio device again or change the socket <br/> 5. Try to restart the computer and then check again', t.DETECT_MIC_TIP = "No sound or beat", t.DETECT_MIC_TIP_CONTENT = '1. If the antivirus software pops up a prompt, please select "allow" <br/> 2. Check whether the audio device is properly connected and turned on <br/> 3. Check whether the audio device is turned on in mute mode <br/> 4. Try to unplug the audio device again or change the socket <br/> 5. Try to restart the computer and then check again', t.DETECT_NETWORK_TIP = "Bad network", t.DETECT_NETWORK_TIP_CONTENT = "1. It is recommended to use the network cable to connect <br/> 2. There will be large network fluctuation during the peak period of the network <br/> 3. Detect again after trying to switch the network", t.RESULT_EXIT = "End", t.RESULT_EXIT_TITLE = "End test?", t.RESULT_EXIT_CONFIRM = "Some of the test items are not up to the standard, continued use may affect the class experience <br/> are you sure you want to end the test?", t.RESULT_AGAIN = "Retest", t.RESULT_TITLE = "Test report", t.RESULT_SUCCESS = "Congratulations! All test items have reached the standard!", t.RESULT_FAIL = "Some test items are not up to standard, which may directly affect your classroom experience!", t.CAMERA_SELECT_LABEL = "Select camera", t.SPEAKER_SELECT_LABEL = "Select speakers", t.SPEAKER_OUTPUT_LABEL = "Output volumn", t.SPEAKER_PLAYING_TIP = "Playing test tone", t.SPEAKER_PLAY_TIP = "Please click to play the test tone", t.SPEAKER_DISABLED_TIP = "Device not connected properly", t.MIC_SELECT_LABEL = "select microphone", t.MIC_INPUT_LABEL = "You can count from 1 to 10 in front of the microphone and see if there's a bounce effect", t.MIC_OUTPUT_LABEL = "Output volumn", t.NETWORK_LABEL_OS = "Operating system", t.NETWORK_LABEL_BROWSER = "Browser", t.NETWORK_LABEL_CLIENT = "Client Version", t.NETWORK_LABEL_OPERATOR = "Network Ip", t.NETWORK_LABEL_SERVER = "Server", t.NETWORK_LABEL_LINKTYPE = "Link Type", t.NETWORK_LABEL_UPSTREAM_SPEED = "Upload", t.NETWORK_LABEL_DOWNSTREAM_SPEED = "Download", t.SPEED_STATE_FAIL = "Detection failed", t.SPEED_STATE_TERRIBLE = "Very Bad", t.SPEED_STATE_BAD = "Bad", t.SPEED_STATE_NORMAL = "Normal", t.SPEED_STATE_GOOD = "Good", t.SPEED_STATE_EXCELLENT = "Very Good"
  },
  1321: function (e, t, n) {
    "use strict";
    t.PREPARE_TITLE = "鍑嗗妫€娴�", t.PREPARE_WELCOME = "娆㈣繋浣跨敤浜戠璇惧爞", t.PREPARE_WELCOME_TIP = "涓轰簡淇濊瘉鏇村ソ鐨勬巿璇炬晥鏋滐紝璇峰姟蹇呭畬鎴愯澶囨娴嬪摝~", t.PREPARE_ATTETION = "涓洪伩鍏嶄骇鐢熷暩鍙埡鑰冲櫔闊冲強澹伴煶璐ㄩ噺璇锋偍浣╂埓鏈夌嚎鑰虫満锛�<br/>灏介噺涓嶈浣跨敤钃濈墮鑰虫満銆�", t.PREPARE_START = "寮€濮�", t.PREPARE_NOTICE = "鑷閫氳繃浠ュ悗涓嶄細鍐嶅嚭鐜版鎻愰啋", t.PREPARE_NOMORE_POPUP = "涓嶅啀寮瑰嚭", t.PREPARE_GIVEUP = "鏀惧純妫€娴�", t.PREPARE_CONTINUE = "缁х画妫€娴�", t.PREPARE_GIVEUP_TITLE = "鏀惧純妫€娴嬶紵", t.PREPARE_GIVEUP_CONFIRM = "妫€娴嬪皻鏈畬鎴愶紝鏀惧純妫€娴嬪彲鑳戒細褰卞搷涓婅鏁堟灉<br/>纭畾瑕佹斁寮冩娴嬶紵", t.PREPARE_EXIT_ROOM = "閫€鍑烘暀瀹�", t.PREPARE_CONTINUE_ENTER_ROOM = "缁х画杩涘叆", t.PREPARE_RECONNECT = "閲嶆柊杩炴帴", t.PREPARE_STATE_ATTEMPTING = "姝ｅ湪灏濊瘯杩炴帴蹇呰鐨勮澶囦笌缃戠粶璇风◢鍊�", t.PREPARE_STATE_FAILED_DEVICE = "鏈彂鐜拌澶囷紝妫€娴嬪墠璇锋纭繛鎺ュ繀瑕佺殑闊宠棰戣澶�", t.PREPARE_STATE_FAILED_NETWORK = "鏈彂鐜扮綉缁滆繛鎺ワ紒妫€娴嬭繃绋嬩腑璇峰姟蹇呬繚鎸佺綉缁滈€氱晠", t.PREPARE_STATE_FAILED_BOTH = "鏈彂鐜拌澶囦笌缃戠粶锛佽鍔″繀姝ｇ‘杩炴帴璁惧涓庣綉缁�", t.PREPARE_STATE_FAILED = "杩炴帴寮傚父锛屽彲鑳戒細鐩存帴褰卞搷鎮ㄧ殑璇惧爞浣撻獙锛�", t.PREPARE_STATE_SUCCESS = "璁惧銆佺綉缁滆繛鎺ユ甯革紝鍙互寮€濮嬫娴嬪暒", t.PREPARE_STATE_FAILED_TIP = "濡傚嚭鐜拌繛鎺ュ紓甯歌鍙傝€冧互涓嬫柟妗堬細<br/>1.鑻ユ祻瑙堝櫒寮瑰嚭鎻愮ず锛岃閫夋嫨鈥滃厑璁糕€�<br/>2.鑻ユ潃姣掕蒋浠跺脊鍑烘彁绀猴紝璇烽€夋嫨鈥滃厑璁糕€�<br/>3.妫€鏌ユ憚鍍忓ご鏄惁姝ｇ‘杩炴帴骞跺紑鍚�<br/>4.妫€鏌ユ憚鍍忓ご鏄惁琚叾浠栫▼搴忓崰鐢�<br/>5.灏濊瘯閲嶆柊鎷旀彃鎽勫儚澶存垨鏇存崲鎻掑彛<br/>6.灏濊瘯閲嶅惎鐢佃剳鍚庡啀娆℃娴�", t.DETECT_CAMERA_QUESTION = "閫氳繃鎽勫儚澶磋兘娓呮櫚鐨勭湅鍒拌嚜宸卞悧锛�", t.DETECT_SPEAKER_QUESTION = "閫氳繃鎵０鍣ㄨ兘娓呮櫚鐨勫惉鍒板０闊冲悧锛�", t.DETECT_MIC_QUESTION = "鑳介€氳繃鑰虫満鍚埌澹伴煶骞剁湅鍒伴煶閲忚烦鍔ㄦ晥鏋滃悧锛�", t.DETECT_NETWORK_FINISH = "鐐瑰嚮瀹屾垚锛屾煡鐪嬫娴嬫姤鍛�", t.DETECT_DEVICE_UNCONNECTED = "鏈彂鐜拌澶囷紝妫€娴嬩腑璇峰姟蹇呬繚鎸佽澶囨甯歌繛鎺�", t.DETECT_NETWORK_UNCONNECTED = "鏈彂鐜拌澶囷紝妫€娴嬩腑璇峰姟蹇呬繚鎸佺綉缁滄甯歌繛鎺�", t.DETECT_CAMERA_FAIL = "鐪嬩笉鍒�", t.DETECT_CAMERA_SUCCESS = "鑳界湅鍒�", t.DETECT_SPEAKER_FAIL = "鍚笉鍒�", t.DETECT_SPEAKER_SUCCESS = "鑳藉惉鍒�", t.DETECT_MIC_FAIL = "鍚笉鍒版垨鐪嬩笉鍒�", t.DETECT_MIC_SUCCESS = "鑳藉惉鍒板拰鐪嬪埌", t.DETECT_CAMERA_CONFIRM = "妫€娴嬪埌鎽勫儚澶村凡姝ｅ父杩炴帴<br/>纭畾鏃犳硶閫氳繃鎽勫儚澶寸湅鍒拌嚜宸卞悧锛�", t.DETECT_SPEAKER_CONFIRM = "妫€娴嬪埌鎵０鍣ㄥ凡姝ｅ父杩炴帴<br/>纭畾鏃犳硶閫氳繃鎵０鍣ㄥ惉鍒板０闊冲悧锛�", t.DETECT_MIC_CONFIRM = "妫€娴嬪埌楹﹀厠椋庡凡姝ｅ父杩炴帴<br/>纭畾鏃犳硶鍚埌澹伴煶鎴栫湅涓嶅埌闊抽噺璺冲姩鏁堟灉鍚楋紵", t.DETECT_FINISH = "瀹屾垚", t.DETECT_CAMERA_TIP = "鐪嬩笉瑙佽棰�", t.DETECT_CAMERA_TIP_CONTENT = "1.鑻ユ潃姣掕蒋浠跺脊鍑烘彁绀猴紝璇烽€夋嫨鈥滃厑璁糕€�<br/>2.妫€鏌ユ憚鍍忓ご鏄惁姝ｇ‘杩炴帴骞跺紑鍚�<br/>3.妫€鏌ユ憚鍍忓ご鏄惁琚叾浠栫▼搴忓崰鐢�<br/>4.灏濊瘯閲嶆柊鎷旀彃鎽勫儚澶存垨鏇存崲鎻掑彛<br/>5.灏濊瘯閲嶈捣鐢佃剳鍚庡啀娆℃娴�", t.DETECT_SPEAKER_TIP = "鍚笉鍒板０闊�", t.DETECT_SPEAKER_TIP_CONTENT = "1.鑻ユ潃姣掕蒋浠跺脊鍑烘彁绀猴紝璇烽€夋嫨鈥滃厑璁糕€�<br/>2.妫€鏌ラ煶棰戣澶囨槸鍚︽纭繛鎺ュ苟寮€鍚�<br/>3.妫€鏌ラ煶棰戣澶囨槸鍚﹀紑鍚潤闊虫ā寮�<br/>4.灏濊瘯閲嶆柊鎷旀彃闊抽璁惧鎴栨洿鎹㈡彃鍙�<br/>5.灏濊瘯閲嶈捣鐢佃剳鍚庡啀娆℃娴�", t.DETECT_MIC_TIP = "鍚笉鍒板０闊虫垨鐪嬩笉鍒拌烦鍔�", t.DETECT_MIC_TIP_CONTENT = "1.鑻ユ潃姣掕蒋浠跺脊鍑烘彁绀猴紝璇烽€夋嫨鈥滃厑璁糕€�<br/>2.妫€鏌ラ煶棰戣澶囨槸鍚︽纭繛鎺ュ苟寮€鍚�<br/>3.妫€鏌ラ煶棰戣澶囨槸鍚﹀紑鍚潤闊虫ā寮�<br/>4.灏濊瘯閲嶆柊鎷旀彃闊抽璁惧鎴栨洿鎹㈡彃鍙�<br/>5.灏濊瘯閲嶈捣鐢佃剳鍚庡啀娆℃娴�", t.DETECT_NETWORK_TIP = "缃戠粶涓嶅ソ", t.DETECT_NETWORK_TIP_CONTENT = "1.寤鸿浣跨敤缃戠嚎杩炴帴<br/>2.缃戠粶楂樺嘲鏃舵浼氫骇鐢熻緝澶х綉缁滄尝鍔�<br/>3.灏濊瘯鍒囨崲缃戠粶鍚庡啀娆℃娴�", t.RESULT_EXIT = "缁撴潫", t.RESULT_EXIT_TITLE = "缁撴潫妫€娴嬶紵", t.RESULT_EXIT_CONFIRM = "閮ㄥ垎妫€娴嬮」鐩湭杈炬爣锛岀户缁娇鐢ㄥ彲鑳戒細褰卞搷涓婅浣撻獙<br/>纭畾瑕佺粨鏉熸娴嬶紵", t.RESULT_AGAIN = "閲嶆柊妫€娴�", t.RESULT_TITLE = "妫€娴嬫姤鍛�", t.RESULT_SUCCESS = "鎭枩鎮紒鍏ㄩ儴妫€娴嬮」鐩凡杈炬爣锛�", t.RESULT_FAIL = "閮ㄥ垎妫€娴嬮」鐩湭杈炬爣锛屽彲鑳戒細鐩存帴褰卞搷鎮ㄧ殑璇惧爞浣撻獙锛�", t.CAMERA_SELECT_LABEL = "閫夋嫨鎽勫儚澶�", t.SPEAKER_SELECT_LABEL = "閫夋嫨鎵０鍣�", t.SPEAKER_OUTPUT_LABEL = "杈撳嚭闊抽噺", t.SPEAKER_PLAYING_TIP = "姝ｅ湪鎾斁娴嬭瘯闊�", t.SPEAKER_PLAY_TIP = "璇风偣鍑绘挱鏀炬祴璇曢煶", t.SPEAKER_DISABLED_TIP = "璁惧鏈甯歌繛鎺�", t.MIC_SELECT_LABEL = "閫夋嫨楹﹀厠椋�", t.MIC_INPUT_LABEL = "鎮ㄥ彲浠ュ鐫€楹﹀厠椋庝粠1鏁板埌10锛屽苟瑙傚療鏄惁鏈夎烦鍔ㄦ晥鏋�", t.MIC_OUTPUT_LABEL = "杈撳嚭闊抽噺", t.NETWORK_LABEL_OS = "鎿嶄綔绯荤粺", t.NETWORK_LABEL_BROWSER = "娴忚鍣�", t.NETWORK_LABEL_CLIENT = "瀹㈡埛绔増鏈�", t.NETWORK_LABEL_OPERATOR = "缃戠粶IP", t.NETWORK_LABEL_SERVER = "鏈嶅姟鍣�", t.NETWORK_LABEL_LINKTYPE = "閾炬帴鏂瑰紡", t.NETWORK_LABEL_UPSTREAM_SPEED = "涓婅", t.NETWORK_LABEL_DOWNSTREAM_SPEED = "涓嬭", t.SPEED_STATE_FAIL = "妫€娴嬪け璐�", t.SPEED_STATE_TERRIBLE = "鏋佸樊", t.SPEED_STATE_BAD = "宸�", t.SPEED_STATE_NORMAL = "涓€鑸�", t.SPEED_STATE_GOOD = "鑹ソ", t.SPEED_STATE_EXCELLENT = "浼樼"
  },
  1322: function (e, t) {
    e.exports = '<div class="bjy-detection-box"><div class="player" style="width: 0;height: 0; visibility: hidden;"></div>{{#if stage===STAGE.PREPARE}}<div class="prepare-title">{{language.PREPARE_TITLE}}</div>\x3c!-- <div class="prepare-welcome">{{language.PREPARE_WELCOME}}</div> --\x3e<div class="prepare-welcome-tip">{{language.PREPARE_WELCOME_TIP}}</div><div class="prepare-attention">{{{language.PREPARE_ATTETION}}}</div><div class="prepare-devices {{stage_prepare_state>STAGE_PREPARE_STATE.ATTEMPTING?\'prepared\':\'\'}}"><div class="prepare-device prepare-device-camera {{STAGE_PREPARE_DEVICE_STATE[DEVICES.CAMERA]}}"></div><div class="prepare-device prepare-device-speaker {{STAGE_PREPARE_DEVICE_STATE[DEVICES.SPEAKER]}}"></div><div class="prepare-device prepare-device-mic {{STAGE_PREPARE_DEVICE_STATE[DEVICES.MIC]}}"></div><div class="prepare-device prepare-device-network {{STAGE_PREPARE_DEVICE_STATE[DEVICES.NETWORK]}}"></div><div class="prepare-progress"><div class="prepare-progress-bar" style="width: {{progress_percent}};"></div></div></div><div class="prepare-state {{ prepare_failed ? \'fail\':\'\'}}"><span>{{STAGE_PREPARE_STATE_TEXT[stage_prepare_state]}}</span><div class="detect-tip"><span></span><div class="detect-tip-content">{{{language.PREPARE_STATE_FAILED_TIP}}}</div></div></div>{{#if checkConnectivityOnly}}{{#if stage_prepare_state < STAGE_PREPARE_STATE.SUCCESS}}<div><div class="btn btn-160 btn-primary">{{language.PREPARE_EXIT_ROOM}}</div><div class="btn btn-160 btn-plain">{{language.PREPARE_CONTINUE_ENTER_ROOM}}</div></div>{{/if}}{{else}}<div class="prepare-start btn btn-primary btn-220 btn-{{stage_prepare_state!==STAGE_PREPARE_STATE.ATTEMPTING?\'primary\':\'disabled\'}}"on-click="startDetect()">{{ prepare_failed ? language.PREPARE_RECONNECT : language.PREPARE_START }}</div>{{#if stage_prepare_state===STAGE_PREPARE_STATE.SUCCESS}}<div class="prepare-notice">{{language.PREPARE_NOTICE}}</div>{{/if}}<label class="prepare-checkbox"><input class="prepare-checkbox-input" type="checkbox" on-change="toggleNoMorePopup()" value="{{hasCheckedNoMorePopup}}"><span class="prepare-checkbox-label"></span><span>{{language.PREPARE_NOMORE_POPUP}}</span></label>{{/if}}{{else if stage===STAGE.DETECT}}<div class="detect-devices"><div class="detect-device detect-device-camera {{STAGE_DETECT_DEVICE_STATE[DEVICES.CAMERA]}}"on-click="detectDevice(DEVICES.CAMERA)"></div><div class="detect-device-divider {{STAGE_DETECT_DEVICE_STATE[DEVICES.SPEAKER]!==\'pending\'?\'activated\':\'\'}}"></div><div class="detect-device detect-device-speaker {{STAGE_DETECT_DEVICE_STATE[DEVICES.SPEAKER]}}"on-click="detectDevice(DEVICES.SPEAKER)"></div><div class="detect-device-divider {{STAGE_DETECT_DEVICE_STATE[DEVICES.MIC]!==\'pending\'?\'activated\':\'\'}}"></div><div class="detect-device detect-device-mic {{STAGE_DETECT_DEVICE_STATE[DEVICES.MIC]}}"on-click="detectDevice(DEVICES.MIC)"></div><div class="detect-device-divider {{STAGE_DETECT_DEVICE_STATE[DEVICES.NETWORK]!==\'pending\'?\'activated\':\'\'}}"></div><div class="detect-device detect-device-network {{STAGE_DETECT_DEVICE_STATE[DEVICES.NETWORK]}}"on-click="detectDevice(DEVICES.NETWORK)"></div></div><div class="detect-content">{{#if stage_detect_device===DEVICES.CAMERA}}<CameraDetection /><div class="detect-tip detect-tip-camera"><span>{{language.DETECT_CAMERA_TIP}}</span><div class="detect-tip-content">{{{language.DETECT_CAMERA_TIP_CONTENT}}}</div></div>{{else if stage_detect_device===DEVICES.SPEAKER}}<SpeakerDetection /><div class="detect-tip"><span>{{language.DETECT_SPEAKER_TIP}}</span><div class="detect-tip-content">{{{language.DETECT_SPEAKER_TIP_CONTENT}}}</div></div>{{else if stage_detect_device===DEVICES.MIC}}<MicDetection /><div class="detect-tip"><span>{{language.DETECT_MIC_TIP}}</span><div class="detect-tip-content">{{{language.DETECT_MIC_TIP_CONTENT}}}</div></div>{{else if stage_detect_device===DEVICES.NETWORK}}<NetworkDetection onResult="{{onNetworkResult}}" /><div class="detect-tip"><span>{{language.DETECT_NETWORK_TIP}}</span><div class="detect-tip-content">{{{language.DETECT_NETWORK_TIP_CONTENT}}}</div></div>{{/if}}</div>\x3c!-- 閫夐」鍜屾彁绀� --\x3e<div class="detect-select" style="visibility: {{showSelectOption ? \'visible\' : \'hidden\'}};">{{#if STAGE_DETECT_DEVICE_CONNECTED[stage_detect_device]}}<div>{{STAGE_DETECT_TEXT[stage_detect_device].question}}</div>{{else}}<div class="fail">{{STAGE_DETECT_TEXT[stage_detect_device].unconnected}}</div>{{/if}}{{#if stage_detect_device===DEVICES.NETWORK}}<div class="detect-select-options"><div class="btn btn-{{STAGE_DETECT_DEVICE_CONNECTED[stage_detect_device]?\'primary\':\'disabled\'}} btn-220"on-click="finishDetect()">{{language.DETECT_FINISH}}</div></div>{{else}}<div class="detect-select-options"><div class="btn btn-{{STAGE_DETECT_DEVICE_CONNECTED[stage_detect_device]?\'plain\':\'primary\'}} btn-{{stage_detect_device===DEVICES.MIC?\'160\':\'120\'}}"on-click="detectDevice(stage_detect_device, \'fail\')">{{STAGE_DETECT_TEXT[stage_detect_device].fail}}</div><div class="btn btn-{{STAGE_DETECT_DEVICE_CONNECTED[stage_detect_device]?\'plain\':\'disabled\'}} btn-{{stage_detect_device===DEVICES.MIC?\'160\':\'120\'}}"on-click="detectDevice(stage_detect_device, \'success\')">{{STAGE_DETECT_TEXT[stage_detect_device].success}}</div></div>{{/if}}</div>{{else}}<div class="result-title">{{language.RESULT_TITLE}}</div><div class="result-panel"><div class="result-labels"><div>{{language.NETWORK_LABEL_OS}}</div><div>{{language.NETWORK_LABEL_BROWSER}}</div><div>{{language.NETWORK_LABEL_OPERATOR}}</div></div><div class="result-values"><div>{{detectResult[DEVICES.NETWORK].os}}</div><div>{{detectResult[DEVICES.NETWORK].browser}}</div><div>{{detectResult[DEVICES.NETWORK].ip}}</div></div></div><div class="result-items"><div class="result-item"><div class="result-icon result-icon-camera"></div><div class="result-label">{{detectResult[DEVICES.CAMERA]}}</div><div class="result-state-text {{STAGE_DETECT_DEVICE_STATE[DEVICES.CAMERA]}}">{{STAGE_DETECT_TEXT[DEVICES.CAMERA][STAGE_DETECT_DEVICE_STATE[DEVICES.CAMERA]]}}</div><div class="result-state-icon {{STAGE_DETECT_DEVICE_STATE[DEVICES.CAMERA]}}"></div></div><div class="result-item"><div class="result-icon result-icon-speaker"></div><div class="result-label">{{detectResult[DEVICES.SPEAKER]}}</div><div class="result-state-text {{STAGE_DETECT_DEVICE_STATE[DEVICES.SPEAKER]}}">{{STAGE_DETECT_TEXT[DEVICES.SPEAKER][STAGE_DETECT_DEVICE_STATE[DEVICES.SPEAKER]]}}</div><div class="result-state-icon {{STAGE_DETECT_DEVICE_STATE[DEVICES.SPEAKER]}}"></div></div><div class="result-item"><div class="result-icon result-icon-mic"></div><div class="result-label">{{detectResult[DEVICES.MIC]}}</div><div class="result-state-text {{STAGE_DETECT_DEVICE_STATE[DEVICES.MIC]}}">{{STAGE_DETECT_TEXT[DEVICES.MIC][STAGE_DETECT_DEVICE_STATE[DEVICES.MIC]]}}</div><div class="result-state-icon {{STAGE_DETECT_DEVICE_STATE[DEVICES.MIC]}}"></div></div><div class="result-item"><div class="result-icon result-icon-network"></div><div class="result-label">{{detectResult[DEVICES.NETWORK].ip}}</div><div class="result-state-text"><div class="network-speed"><span class="network-speed-icon up"></span><span class="network-speed-number">{{detectResult[DEVICES.NETWORK].upstream_speed_state_text}}</span><span class="network-speed-level">{{{detectResult[DEVICES.NETWORK].upstream_speed_text}}}</span></div><div class="network-speed"><span class="network-speed-icon down"></span><span class="network-speed-number">{{{detectResult[DEVICES.NETWORK].downstream_speed_state_text}}}</span><span class="network-speed-level">{{detectResult[DEVICES.NETWORK].downstream_speed_text}}</span></div></div><div class="result-state-icon {{detectResult[DEVICES.NETWORK].success ? \'success\' : \'fail\'}}"></div></div></div><div class="detect-select"><div class="{{result_passed?\'\':\'fail\'}}">{{result_passed?language.RESULT_SUCCESS:language.RESULT_FAIL}}</div><div class="result-time">{{result_time}}</div><div class="detect-select-options"><div class="btn btn-160 btn-{{result_passed?\'plain\':\'primary\'}}" on-click="againDetect()">{{language.RESULT_AGAIN}}</div><div class="btn btn-160 btn-{{result_passed?\'primary\':\'plain\'}}" on-click="exitDetect()">{{language.RESULT_EXIT}}</div></div></div><div class="result-emotion {{result_passed?\'success\':\'fail\'}}"></div>{{/if}}<div class="close-btn" on-click="cancelDetect()"></div>{{#if dialog.visible}}<div class="twice-confirm-dialog-container" on-click="closeDialog()"><div class="twice-confirm-dialog" on-click.stop="noop()"><div class="title">{{dialog.title}}</div><div class="confirm">{{{dialog.confirm}}}</div><div class="select-options">{{#each dialog.buttons}}<div class="btn btn-160 btn-{{this.type}}" on-click="closeDialog(this.handler)">{{this.text}}</div>{{/each}}</div></div></div>{{/if}}</div>'
  },
  1323: function (e, t, n) {
    "use strict";
    var i = n(841),
      r = n(177),
      o = BJY.store,
      a = BJY.data.media,
      s = BJY.eventEmitter;

    function c(e) {
      var t = [];
      return Yox.array.each(e, (function (e) {
        t.push({
          text: e.name,
          value: e.index
        })
      })), t
    }
    e.exports = BJY.DetectionNewCamera = {
      template: n(1324),
      data: function () {
        var e = this;
        return {
          language: i,
          deviceListOptions: {
            name: "camera-device",
            className: "bjy-camera-device-choose",
            data: c(a.getCameraList()),
            value: a.getCameraIndex(),
            onChange: function (t) {
              s.trigger(s.CAMERA_INDEX_CHANGE_TRIGGER, {
                index: t
              }), e.forceUpdate()
            }
          },
          connected: -1 !== a.getCameraIndex()
        }
      },
      components: {
        Select: n(80)
      },
      methods: {
        _onCameraIndexChanged: function (e) {
          this.connected = -1 !== e
        }
      },
      afterCreate: function () {
        this._onCameraIndexChanged = this._onCameraIndexChanged.bind(this)
      },
      afterMount: function () {
        var e = this,
          t = ".detection_new_camera" + Math.random();
        e.namespace = t;
        var n = $(e.$el);
        e.player = new BJY.Player({
          element: n.find(".camera-preview"),
          user: o.get("user"),
          extension: r(),
          isSetting: !0,
          onComplete: function () {
            e.player.openCamera()
          }
        }), s.on(s.VIDEO_DEVICE_DETECT + t, (function (t, n) {
          e.set("deviceListOptions.data", c(a.getCameraList())), e.set("deviceListOptions.value", a.getCameraIndex())
        })).on(s.CAMERA_INDEX_CHANGE + t, (function (t, n) {
          e.set("deviceListOptions.value", a.getCameraIndex())
        })), e.namespace = t, BJY.store.watch("media.cameraIndex", this._onCameraIndexChanged)
      },
      beforeDestroy: function () {
        this.player && this.player.dispose(), s.off(this.namespace), BJY.store.unwatch("media.cameraIndex", this._onCameraIndexChanged)
      },
      create: function (e) {
        return new Yox($.extend({
          el: e.element[0],
          replace: !1 !== e.replace
        }, BJY.DetectionNewCamera))
      }
    }
  },
  1324: function (e, t) {
    e.exports = function (e, t, n, i, r, o, a, s, c, u, l, d, E, p, f, v, T, _, h, m, C, g, A, S, R) {
      return T("div", (function () {
        a("className", "bjy-detection-camera")
      }), (function () {
        T("div", (function () {
          a("className", "camera-list")
        }), (function () {
          T("div", (function () {
            a("className", "label")
          }), void 0, R(e("language.CAMERA_SELECT_LABEL", !0))), _("Select", (function () {
            f(e("deviceListOptions", !0, void 0, !0, !0))
          }))
        })), T("div", (function () {
          a("className", "camera-preview")
        }), (function () {
          T("div", (function () {
            a("className", "camera-preview-bg " + R(e("connected", !0) ? "" : "placeholder"))
          }))
        }))
      }))
    }
  },
  1325: function (e, t, n) {
    "use strict";
    var i = n(841),
      r = n(137),
      o = BJY.config,
      a = (BJY.auth, BJY.data.media),
      s = BJY.eventEmitter;

    function c(e) {
      var t = [];
      return Yox.array.each(e, (function (e) {
        t.push({
          text: e.name,
          value: e.index
        })
      })), t
    }
    e.exports = BJY.detectionNewSpeaker = {
      template: n(1326),
      data: function () {
        var e = this;
        return {
          language: i,
          speakerVolume: a.getSpeakerVolume(),
          playing: !1,
          playingProgress: "0%",
          speakerDeviceListOptions: {
            name: "speaker-device",
            className: "bjy-speaker-device-choose",
            data: c(a.getSpeakerList()),
            value: a.getSpeakerIndex(),
            onChange: function (t) {
              var n = a.getSpeakerList()[t];
              n && e.updateSpeaker(n.guid), s.trigger(s.SPEAKER_INDEX_CHANGE_TRIGGER, {
                index: t
              }), e.forceUpdate()
            }
          },
          connected: -1 !== a.getSpeakerIndex()
        }
      },
      computed: {
        sliderValue: function () {
          return (this.speakerVolume / o.SPEAKER_VOLUME_MAX * 100).toFixed(0) + "%"
        },
        mediaSrc: function () {
          return BJY.cdnOrigin + "/page/detectionNew/audio/speaker.mp3"
        }
      },
      components: {
        Select: n(80)
      },
      methods: {
        initSpeakerSlider: function () {
          var e = this,
            t = $(e.$el);
          e.speakerSlider = new r({
            mainElement: t.find(".speaker-output-slider"),
            value: a.getSpeakerVolume(),
            minValue: 0,
            maxValue: o.SPEAKER_VOLUME_MAX,
            step: 1,
            orientation: "horizontal",
            thumbSelector: ".slider-thumb",
            trackSelector: ".slider-track",
            barSelector: ".slider-bar",
            draggingClass: "slider-dragging",
            slideAnimation: function (e) {
              e.thumbElement.css(e.thumbStyle), e.barElement.css(e.barStyle)
            },
            watchSync: {
              value: function (t) {
                e.$refs.audio.volume = t / o.SPEAKER_VOLUME_MAX, e.set({
                  speakerVolume: t
                }), s.trigger(s.SPEAKER_VOLUME_CHANGE_TRIGGER, {
                  value: t
                })
              }
            }
          })
        },
        play: function () {
          var e = this.$refs.audio;
          this.playing ? (this.playing = !1, e.pause()) : (this.playing = !0, e.play())
        },
        updateSpeaker: function (e) {
          var t = this.$refs.audio;
          "function" == typeof t.setSinkId && t.setSinkId(e).catch((function (e) {
            console.log(e)
          }))
        },
        _onSpeakerIndexChanged: function (e) {
          this.connected = -1 !== e
        }
      },
      afterMount: function () {
        var e = this,
          t = ".detection_new_speaker" + Math.random();
        e.namespace = t, s.on(s.AUDIO_DEVICE_DETECT + t, (function (t, n) {
          e.set({
            "speakerDeviceListOptions.data": c(a.getSpeakerList()),
            "speakerDeviceListOptions.value": a.getSpeakerIndex()
          })
        })).on(s.SPEAKER_INDEX_CHANGE + t, (function (t, n) {
          e.set({
            "speakerDeviceListOptions.value": a.getSpeakerIndex()
          })
        })), e.initSpeakerSlider(), BJY.store.watch("media.speakerIndex", e._onSpeakerIndexChanged);
        var n = this.$refs.audio;
        n.addEventListener("timeupdate", (function () {
          e.playingProgress = n.currentTime / n.duration * 100 + "%"
        })), n.addEventListener("ended", (function () {
          e.playing = !1, e.playingProgress = "0%"
        }))
      },
      beforeDestroy: function () {
        s.off(this.namespace), this.speakerSlider && this.speakerSlider.dispose(), BJY.store.unwatch("media.speakerIndex", this._onSpeakerIndexChanged)
      },
      create: function (e) {
        return new Yox({
          el: e.element[0],
          replace: !1 !== e.replace,
          props: {}
        }, BJY.detectionNewSpeaker)
      }
    }
  },
  1326: function (e, t) {
    e.exports = '<div class="bjy-detection-speaker"><div class="speaker-list"><div class="label">{{language.SPEAKER_SELECT_LABEL}}</div><Select {{...speakerDeviceListOptions}} /></div><div class="speaker-play {{playing ? \'pause\' : \'\'}}"><div class="speaker-play-icon" on-click="play()"></div><div class="speaker-play-content"><div class="speaker-play-tip"><span class="speaker-play-tip-icon"></span><span>{{playing ? language.SPEAKER_PLAYING_TIP : language.SPEAKER_PLAY_TIP}}</span></div><div class="speaker-play-progress"><div class="track" style="width: {{playingProgress}}"></div></div><audio class="speaker-play-audio" ref="audio" src="{{mediaSrc}}"></audio></div></div><div class="speaker-output"><div class="label">{{language.SPEAKER_OUTPUT_LABEL}}</div><div class="speaker-output-slider"><div class="slider-track"><div class="slider-bar"><div class="slider-before"></div></div><div class="slider-thumb"></div></div><span class="slider-value">{{sliderValue}}</span></div></div></div>'
  },
  1327: function (e, t, n) {
    "use strict";
    var i = n(841),
      r = n(137),
      o = n(177),
      a = (n(129), BJY.config),
      s = BJY.auth,
      c = BJY.store,
      u = BJY.data.media,
      l = BJY.eventEmitter;

    function d(e) {
      var t = [];
      return Yox.array.each(e, (function (e) {
        t.push({
          text: e.name,
          value: e.index
        })
      })), t
    }

    function E(e) {
      var t = [];
      e = e || 0;
      var n = Math.ceil(e / 5);
      s.isWebRTC() && (n = Math.ceil(e / 4));
      for (var i = 0; i < 27; i++) i < n ? t.push(1) : t.push(0);
      return t
    }
    e.exports = BJY.detectionNewMic = {
      template: n(1328),
      components: {
        Select: n(80)
      },
      data: function () {
        var e = this;
        return {
          language: i,
          previewVolumeGrid: E(),
          micVolume: u.getMicVolume(),
          micDeviceListOptions: {
            name: "mic-device",
            className: "bjy-mic-device-choose",
            data: d(u.getMicList()),
            value: u.getMicIndex(),
            onChange: function (t) {
              l.trigger(l.MIC_INDEX_CHANGE_TRIGGER, {
                index: t,
                mute: !0
              }), e.forceUpdate()
            }
          }
        }
      },
      computed: {
        sliderValue: function () {
          return (this.micVolume / a.MIC_VOLUME_MAX * 100).toFixed(0) + "%"
        }
      },
      methods: {
        initMicSlider: function () {
          var e = this,
            t = $(e.$el);
          e.micSlider = new r({
            mainElement: t.find(".mic-output-slider"),
            value: u.getMicVolume(),
            minValue: 0,
            maxValue: a.MIC_VOLUME_MAX,
            step: 1,
            orientation: "horizontal",
            thumbSelector: ".slider-thumb",
            trackSelector: ".slider-track",
            barSelector: ".slider-bar",
            draggingClass: "slider-dragging",
            slideAnimation: function (e) {
              e.thumbElement.css(e.thumbStyle), e.barElement.css(e.barStyle)
            },
            watchSync: {
              value: function (t) {
                e.set({
                  micVolume: t
                }), l.trigger(l.MIC_VOLUME_CHANGE_TRIGGER, {
                  value: t
                })
              }
            }
          })
        },
        bindEvents: function () {
          var e = this,
            t = ".detection_new_mic" + Math.random();
          e.namespace = t, l.on(l.AUDIO_DEVICE_DETECT + t, (function (t, n) {
            e.set({
              "micDeviceListOptions.data": d(u.getMicList()),
              "micDeviceListOptions.value": u.getMicIndex()
            })
          })).on(l.MIC_INDEX_CHANGE + t, (function (t, n) {
            e.set({
              "micDeviceListOptions.value": n.index
            })
          }))
        },
        startPreviewAudio: function () {
          var e = this;
          ! function t() {
            e.timer = setTimeout((function () {
              e.timer && e.player.getInputVolume().then((function (n) {
                e.set("previewVolumeGrid", E(n.volume)), t()
              }))
            }), 200)
          }()
        },
        stopPreviewAudio: function () {
          this.timer && clearTimeout(this.timer)
        },
        initPlayer: function () {
          var e = this;
          e.player = new BJY.Player({
            element: $(e.$el).find(".player"),
            user: c.get("user"),
            extension: o(),
            isSetting: !0,
            onComplete: function () {
              e.player.openMic()
            }
          })
        }
      },
      afterCreate: function () {
        this.bindEvents()
      },
      afterMount: function () {
        this.initPlayer(), this.startPreviewAudio(), this.initMicSlider()
      },
      beforeDestroy: function () {
        var e = this;
        e.player && e.player.dispose(), e.micSlider && e.micSlider.dispose(), e.stopPreviewAudio(), l.off(e.namespace)
      },
      create: function (e) {
        return new Yox({
          el: e.element[0],
          replace: !1 !== e.replace,
          props: {}
        }, BJY.detectionNewMic)
      }
    }
  },
  1328: function (e, t) {
    e.exports = '<div class="bjy-detection-mic"><div class="player"></div><div class="mic-list"><div class="label"> {{language.MIC_SELECT_LABEL}} </div><Select {{...micDeviceListOptions}} /></div><div class="mic-input"><div class="label">{{language.MIC_INPUT_LABEL}}</div><div class="mic-input-bar">{{#each previewVolumeGrid:value}}<div class="mic-input-grid {{#if this}} active {{/if}}"></div>{{/each}}</div></div><div class="mic-output"><div class="label">{{language.MIC_OUTPUT_LABEL}}</div><div class="mic-output-slider"><div class="slider-track"><div class="slider-bar"><div class="slider-before"></div></div><div class="slider-thumb"></div></div><span class="slider-value">{{sliderValue}}</span></div></div></div>'
  },
  1329: function (e, t, n) {
    "use strict";
    var i = n(841),
      r = n(858),
      o = n(129);

    function a(e) {
      return 0 == e ? i.SPEED_STATE_FAIL : e < 5e4 ? i.SPEED_STATE_TERRIBLE : e < 2e5 ? i.SPEED_STATE_BAD : e < 1e6 ? i.SPEED_STATE_NORMAL : e < 1e7 ? i.SPEED_STATE_GOOD : i.SPEED_STATE_EXCELLENT
    }

    function s(e) {
      return e > 1e6 ? Math.floor(e / 1e6) + "Mb/s" : e > 1e3 ? Math.floor(e / 1e3) + "Kb/s" : e + "b/s"
    }
    e.exports = BJY.detectionNewNetwork = {
      template: n(1330),
      propTypes: {
        onResult: {
          type: "function",
          required: !0
        }
      },
      data: function () {
        return {
          language: i,
          ip: "unknown",
          upstream_speed: 0,
          downstream_speed: 0,
          loading: !1,
          os: BJY.os.name + " " + BJY.os.version,
          browser: BJY.browser.name + " " + BJY.browser.version
        }
      },
      computed: {
        upstream_speed_state_text: function () {
          return a(this.upstream_speed)
        },
        downstream_speed_state_text: function () {
          return a(this.downstream_speed)
        },
        upstream_speed_text: function () {
          return s(this.upstream_speed)
        },
        downstream_speed_text: function () {
          return s(this.downstream_speed)
        }
      },
      methods: {
        startTest: function () {
          var e = this;
          this.loading = !0, this.networkSpeed.start().then((function (t) {
            if (0 == t.code) return e.downstream_speed = t.data.download, e.upstream_speed = t.data.upload, e.ip = t.data.ip, !0
          }), (function (e) {
            e.code
          })).then((function (t) {
            e.loading = !1, e.onResult({
              upstream_speed_state_text: e.upstream_speed_state_text,
              downstream_speed_state_text: e.downstream_speed_state_text,
              upstream_speed_text: e.upstream_speed_text,
              downstream_speed_text: e.downstream_speed_text,
              ip: e.ip,
              os: e.os,
              browser: e.browser,
              success: !!t
            })
          }))
        }
      },
      afterCreate: function () {
        this.startTest = this.startTest.bind(this)
      },
      afterMount: function () {
        this.networkSpeed = new r({
          upload: "//www.baijiayun.com/web/detection/upload",
          download: "//www.baijiayun.com/web/detection/upload"
        }), o() && (this.browser = BJY.store.get("cefApiVersion"), i.NETWORK_LABEL_BROWSER = i.NETWORK_LABEL_CLIENT), this.startTest(), window.addEventListener("online", this.startTest)
      },
      beforeDestroy: function () {
        window.removeEventListener("online", this.startTest)
      },
      create: function (e) {
        return new Yox({
          el: e.element[0],
          replace: !1 !== e.replace,
          props: {}
        }, BJY.detectionNewNetwork)
      }
    }
  },
  1330: function (e, t) {
    e.exports = '<div class="bjy-detection-network {{loading ? \'loading\' : \'\'}}"><div class="network-item"><div class="network-item-label">{{language.NETWORK_LABEL_OS}}</div><div class="network-item-value">{{os}}</div></div><div class="network-item"><div class="network-item-label">{{language.NETWORK_LABEL_BROWSER}}</div><div class="network-item-value">{{browser}}</div></div><div class="network-item"><div class="network-item-label">{{language.NETWORK_LABEL_OPERATOR}}</div><div class="network-item-value">{{ip}}</div></div>\x3c!-- <div class="network-item"><div class="network-item-label">{{language.NETWORK_LABEL_SERVER}}</div><div class="network-item-value"></div></div> --\x3e\x3c!-- <div class="network-item"><div class="network-item-label">{{language.NETWORK_LABEL_LINKTYPE}}</div><div class="network-item-value"></div></div> --\x3e<div class="network-item"><div class="network-item-label">{{language.NETWORK_LABEL_UPSTREAM_SPEED}}</div><div class="network-item-value"><span class="network-speed-icon up"></span><span class="network-speed-number">{{upstream_speed_text}}</span><span class="network-speed-level">{{upstream_speed_state_text}}</span></div></div><div class="network-item"><div class="network-item-label">{{language.NETWORK_LABEL_DOWNSTREAM_SPEED}}</div><div class="network-item-value"><span class="network-speed-icon down"></span><span class="network-speed-number">{{downstream_speed_text}}</span><span class="network-speed-level">{{downstream_speed_state_text}}</span></div></div></div>'
  },
  134: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(142),
        o = n(85),
        a = n(143),
        s = n(42),
        c = n(144),
        u = n(145),
        l = n(146),
        d = n(130),
        E = n(131),
        p = n(119),
        f = n(120),
        v = n(147),
        T = n(148),
        _ = n(32),
        h = n(103),
        m = n(17).body;

      function C(e) {
        _.init(this, e)
      }
      var g = C.prototype;
      g.type = "Draggable", g.init = function () {
        var e = this,
          t = e.option("mainElement"),
          n = e.option("mainSelector");
        e.inner({
          main: t
        });
        var i = e.option("containerElement");
        i || (i = r());
        var _, h = e.option("draggingClass"),
          C = e.option("containerDraggingClass"),
          g = e.option("bodyDraggingClass") || "dragging";
        e.execute("init", {
          mainElement: t,
          mainSelector: n,
          namespace: e.namespace(),
          downHandler: function (r) {
            var v, T = n ? $(r.currentTarget) : t,
              h = r[$.expando];
            if (h) {
              var m = e.option("includeSelector"),
                C = e.option("excludeSelector"),
                g = r.target;
              if (m && !c(g, m, T) || C && c(g, C, T)) return;
              $.each(P, (function (e, t) {
                if (0 === r.type.indexOf(e)) return v = t, !1
              }))
            } else r.type && (v = P[r.type]);
            v || (v = P.mouse), y = T, e.emit("pick", {
              mainElement: y
            }), _ = a(y), D.left = _.left, D.top = _.top;
            var b = "fixed" === _.position,
              w = i.is("html,body"),
              N = !0;
            w || (N = s(i, y));
            var x, O, L, M, k, V, K = l(y),
              B = u(i);
            h ? (x = v.absoluteX(r) - K.x, O = v.absoluteY(r) - K.y) : (x = r.offsetX, O = r.offsetY), !b && N && (w || (x -= i.scrollLeft(), O -= i.scrollTop()), x += B.x, O += B.y);
            var G = p(),
              U = f(),
              W = E(),
              Y = d(),
              F = Y + G,
              j = W + U;
            b ? w ? (L = 0, M = 0) : (L = o(B.x, Y, F), M = o(B.y, W, j)) : w ? (L = -1 * B.x, M = -1 * B.y) : N ? (L = 0, M = 0) : (L = B.x, M = B.y), null == k && (b || w || !N ? (k = i.innerWidth(), V = i.innerHeight()) : (k = i.prop("scrollWidth"), V = i.prop("scrollHeight"))), w && (k < G && (k = G), V < U && (V = U)), b && (L + k > F && (k = F - L), M + V > j && (V = j - M)), k = Math.max(0, k - y.outerWidth(!0)), V = Math.max(0, V - y.outerHeight(!0));
            var J = e.option("axis");
            return A = "y" === J ? I.constant(_.left) : I.variable(v[b ? "fixedX" : "absoluteX"], x, L, L + k), S = "x" === J ? I.constant(_.top) : I.variable(v[b ? "fixedY" : "absoluteY"], O, M, M + V), R = 0, !0
          },
          moveHandler: function (t) {
            if (null != R) {
              if (D.left = A(t), D.top = S(t), 0 === R) {
                if (_ && (y.css(_), _ = null), e.emit("beforedrag", $.extend({}, D)).isDefaultPrevented()) return;
                T(), h && y.addClass(h), C && i.addClass(C), g && m.addClass(g)
              }
              R++, e.emit("drag", $.extend({}, D)).isDefaultPrevented() || e.execute("dragAnimation", {
                mainElement: y,
                mainStyle: D
              })
            }
          },
          upHandler: function () {
            null != R && (R > 0 && (v(), h && y.removeClass(h), C && i.removeClass(C), g && m.removeClass(g), e.emit("afterdrag", $.extend({}, D))), e.emit("drop", {
              mainElement: y
            }), R = A = S = _ = y = null)
          }
        })
      }, g.dispose = function () {
        _.dispose(this)
      }, _.extend(g);
      var A, S, R, y, D = {},
        I = {
          constant: function (e) {
            return function () {
              return e
            }
          },
          variable: function (e, t, n, i) {
            return function (r) {
              return o(e(r) - t, n, i)
            }
          }
        },
        P = {};
      return $.each(h, (function (e, t) {
        t.support && (P[e] = {
          absoluteX: function (e) {
            return t.client(e).x + d()
          },
          absoluteY: function (e) {
            return t.client(e).y + E()
          },
          fixedX: function (e) {
            return t.client(e).x
          },
          fixedY: function (e) {
            return t.client(e).y
          }
        })
      })), C
    }.call(t, n, t, e)) || (e.exports = i)
  },
  137: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(243),
        o = n(244),
        a = n(230),
        s = n(245),
        c = n(15),
        u = n(85),
        l = n(42),
        d = n(134),
        E = n(32),
        p = n(246),
        f = n(103),
        v = n(247),
        T = n(17).document;

      function _(e) {
        E.init(this, e)
      }
      var h = _.prototype;
      return h.type = "Slider", h.init = function () {
        var e = this;
        e.initStruct();
        var t, n = e.option("mainElement"),
          i = n.find(e.option("thumbSelector")),
          r = e.option("trackSelector"),
          o = r ? n.find(r) : n,
          a = e.option("barSelector");
        a && (t = n.find(a));
        var s = v[e.option("orientation")],
          u = e.option("reverse"),
          E = function (t, n) {
            return "number" !== $.type(t) && (t = c(t, 0, "float")), u && (t = e.inner("maxPixel") - t), _(e.pixelToValue(t), n)
          },
          _ = function (t, n) {
            var i = {
                action: n
              },
              r = e.get("value");
            return e.set("value", t, i), r !== e.get("value")
          },
          h = e.namespace(),
          m = new d({
            mainElement: i,
            containerElement: o,
            containerDraggingClass: e.option("draggingClass"),
            axis: s.axis,
            init: function (e) {
              $.each(f, (function (t, n) {
                n.support && i.on(n.down + h, (function (t) {
                  e.downHandler(t) && T.off(h).on(n.move + h, e.moveHandler).on(n.up + h, (function () {
                    e.upHandler(), T.off(h)
                  }))
                }))
              }))
            },
            dragAnimation: function (e) {
              E(e.mainStyle[s.position], "drag")
            }
          }),
          C = function (t, n) {
            e.emit(t, n)
          };
        m.on("beforedrag", C).on("drag", C).on("afterdrag", C), o.on("click" + h, (function (t) {
          if (!l(i, t.target)) {
            var n = t.currentTarget.getBoundingClientRect(),
              r = {
                x: t.clientX - n.left,
                y: t.clientY - n.top
              };
            E(r[s.axis] - e.inner("thumbSize") / 2, "click")
          }
        }));
        var g, A = e.option("scrollStep"),
          S = e.option("scrollStepType"),
          R = $.isFunction(A);
        if (R || A > 0) {
          g = [];
          var y = function (t, n) {
              var i = n.delta,
                r = R ? A(i) : i * A;
              if (r) {
                u && (r *= -1);
                var o = e.get("value");
                return !("value" === S ? _(o + r, "scroll") : E(e.valueToPixel(o) + r, "scroll"))
              }
            },
            D = function (e) {
              p.init(e), e.on(p.WHEEL, y), g.push(e)
            };
          D(o);
          var I = e.option("scrollElement");
          I && D(I)
        }
        e.inner({
          main: n,
          track: o,
          thumb: i,
          bar: t,
          drager: m,
          wheels: g
        }), e.set({
          minValue: e.option("minValue"),
          maxValue: e.option("maxValue")
        }), e.refresh();
        var P = e.option("value");
        "number" === $.type(P) ? _(P) : E(i.css(s.position))
      }, h.refresh = function () {
        var e, t, n = this,
          i = v[n.option("orientation")],
          c = n.inner("track"),
          u = n.inner("thumb")[i.outerSize](!0),
          l = c[i.innerSize]() - u,
          d = n.get("minValue"),
          E = n.get("maxValue"),
          p = n.option("step");
        if ("number" === $.type(p)) {
          var f = a(l, a(o(E, d), p));
          e = function (e) {
            return r(d, s(Math.round(a(e, f)), p))
          }, t = function (e) {
            return s(a(o(e, d), p), f)
          }
        } else e = function (e) {
          return r(d, s(o(E, d), a(e, l)))
        }, t = function (e) {
          return s(o(e, d), a(l, o(E, d)))
        };
        n.inner({
          thumbSize: u,
          maxPixel: l
        }), n.pixelToValue = e, n.valueToPixel = t;
        var T = n.get("value");
        "number" === $.type(T) && n.set("value", T, {
          force: !0
        })
      }, h.dispose = function () {
        var e = this;
        E.dispose(e);
        var t = e.namespace();
        T.off(t), e.inner("thumb").off(t), e.inner("track").off(t), e.inner("drager").dispose();
        var n = e.inner("wheels");
        n && $.each(n, (function (e, t) {
          p.dispose(t)
        }))
      }, E.extend(h), _.propertyUpdater = {
        value: function (e, t, n) {
          var i, r = this,
            o = v[r.option("orientation")],
            a = r.inner("thumb"),
            s = r.inner("thumbSize"),
            c = r.valueToPixel(e),
            u = r.inner("bar");
          u && ((i = {})[o.size] = c + s / 2), r.option("reverse") && (c = r.inner("maxPixel") - c);
          var l = {};
          l[o.position] = c;
          var d = {
            thumbElement: a,
            thumbStyle: l
          };
          i && (d.barStyle = i, d.barElement = u);
          var E = n.value;
          E.action && (d.action = E.action), r.execute("slideAnimation", d)
        }
      }, _.propertyValidator = {
        value: function (e) {
          var t = this.get("minValue"),
            n = this.get("maxValue");
          return u(c(e, t), t, n)
        },
        minValue: function (e) {
          return null == (e = c(e, null)) && this.error("minValue must be a number."), e
        },
        maxValue: function (e) {
          return null == (e = c(e, null)) && this.error("maxValue must be a number."), e
        }
      }, _
    }.call(t, n, t, e)) || (e.exports = i)
  },
  14: function (e, t, n) {
    var i = n(54),
      r = n(33);
    e.exports = function (e) {
      return i(r(e))
    }
  },
  142: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(17);
      return function () {
        return r.body.prop("clientHeight") < r.html.prop("clientHeight") ? r.html : r.body
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  143: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(63);
      return function (e) {
        var t = r(e),
          n = e.css("position"),
          i = parseInt(e.css("left"), 10),
          o = parseInt(e.css("top"), 10),
          a = isNaN(i),
          s = isNaN(o);
        if (a || s)
          if (1 === t.length) {
            var c = e.offset(),
              u = t.offset();
            a && (i = c.left - u.left - (parseInt(t.css("border-left-width"), 10) || 0)), s && (o = c.top - u.top - (parseInt(t.css("border-top-width"), 10) || 0))
          } else i = o = 0;
        return n && "static" !== n || (n = "absolute"), {
          position: n,
          left: i,
          top: o
        }
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  144: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(17),
        o = n(42);
      return function (e, t, n) {
        var i = !1;
        return $.isArray(t) && (t = t.join(",")), n || (n = r.document), n.find(t).each((function () {
          if (i = o(this, e)) return !1
        })), i
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  145: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(15);
      return function (e) {
        var t = e.offset(),
          n = e.css("border-left-width"),
          i = e.css("border-top-width");
        return {
          x: t.left + r(n, 0, "int"),
          y: t.top + r(i, 0, "int")
        }
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  146: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(15);
      return function (e) {
        var t = e.offset(),
          n = r(e.css("margin-left"), 0, "int"),
          i = r(e.css("margin-top"), 0, "int");
        return {
          x: t.left - n,
          y: t.top - i
        }
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  147: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return document.selection ? function () {
        document.body.onselectstart = null
      } : $.noop
    }.call(t, n, t, e)) || (e.exports = i)
  },
  148: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return document.selection ? function () {
        document.body.onselectstart = function () {
          return !1
        }
      } : $.noop
    }.call(t, n, t, e)) || (e.exports = i)
  },
  149: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e) {
        var t = e.pageX,
          n = e.pageY;
        if ("number" !== $.type(t)) {
          var i = document.documentElement;
          t = e.clientX + i.scrollLeft, n = e.clientY + i.scrollTop
        }
        return {
          x: t,
          y: n
        }
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  15: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      var i = {
        int: parseInt,
        float: parseFloat
      };
      return function (e, t, n) {
        if ("number" !== $.type(e)) {
          var r = i[n];
          e = r ? r(e, 10) : $.isNumeric(e) ? +e : NaN
        }
        return isNaN(e) ? t : e
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  150: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e) {
        var t = e.offsetX,
          n = e.offsetY;
        if ("number" !== $.type(t)) {
          var i = e.target.getBoundingClientRect();
          t = e.clientX - i.left, n = e.clientY - i.top
        }
        return {
          x: t,
          y: n
        }
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  16: function (e, t, n) {
    var i = n(22);
    e.exports = function (e, t, n) {
      if (i(e), void 0 === t) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n)
          };
        case 2:
          return function (n, i) {
            return e.call(t, n, i)
          };
        case 3:
          return function (n, i, r) {
            return e.call(t, n, i, r)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }
  },
  166: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e) {
        e.css("display");
        return "none" === e.css("display") || 0 == e.css("opacity") || "hidden" === e.css("visibility")
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  167: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(50);

      function o(e) {
        return function (t) {
          var n = e.delay,
            i = e.startDelay,
            r = e.endDelay,
            o = function () {
              e.handler.call(t.currentTarget, t)
            },
            a = function () {
              if (n > 0 && i && r) {
                var t = function (n) {
                  e.delayTimer && (clearTimeout(e.delayTimer), r(t, e), e.delayTimer = null), "delayTimer" === n && o()
                };
                e.delayTimer || (i(t, e), e.delayTimer = setTimeout((function () {
                  t("delayTimer")
                }), n))
              } else o()
            },
            s = e.beforeHandler;
          if ($.isFunction(s)) {
            var c = s.call(t.currentTarget, t);
            if (!1 === c) return;
            if (c && $.isFunction(c.then)) return void c.then(a)
          }
          a()
        }
      }
      return (t = {
        focus: {
          type: "focusin",
          handler: o
        },
        blur: {
          type: "focusout",
          handler: o
        },
        click: {
          type: "click",
          handler: o
        },
        enter: {
          type: "mouseenter",
          handler: o
        },
        leave: {
          type: "mouseleave",
          handler: o
        },
        context: {
          type: "contextmenu",
          handler: o
        }
      }).parse = function (e, n) {
        var i = {};
        return e && $.each(r(e, ","), (function (e, r) {
          var o = t[r];
          o && (i[r] = {
            type: o.type,
            handler: o.handler(n(r))
          })
        })), i
      }, t
    }.call(t, n, t, e)) || (e.exports = i)
  },
  17: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      t.window = $(window), t.document = $(document), t.html = $(document.documentElement), t.body = $(document.body)
    }.call(t, n, t, e)) || (e.exports = i)
  },
  177: function (e, t, n) {
    "use strict";
    e.exports = function () {
      return BJY.auth.isWebRTC() ? BJY.Player.webrtc : BJY.is.inClient() ? BJY.cef : BJY.Player.flash
    }
  },
  178: function (e, t, n) {
    n(179), e.exports = n(2).Object.keys
  },
  179: function (e, t, n) {
    var i = n(29),
      r = n(27);
    n(93)("keys", (function () {
      return function (e) {
        return r(i(e))
      }
    }))
  },
  18: function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  },
  2: function (e, t) {
    var n = e.exports = {
      version: "2.6.11"
    };
    "number" == typeof __e && (__e = n)
  },
  212: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(213),
        o = n(32),
        a = n(214);

      function s(e) {
        o.init(this, e)
      }
      var c = s.prototype;
      return c.type = "Select", c.init = function () {
        var e = this;
        e.initStruct();
        var t = e.option("mainElement"),
          n = new r({
            mainElement: t,
            data: e.option("data"),
            value: e.option("value"),
            defaultText: e.option("defaultText"),
            buttonElement: t.find(e.option("buttonSelector")),
            menuElement: t.find(e.option("menuSelector")),
            menuTemplate: e.option("menuTemplate"),
            renderSelector: e.option("renderSelector"),
            renderTemplate: e.option("renderTemplate"),
            showMenuTrigger: e.option("showMenuTrigger"),
            showMenuDelay: e.option("showMenuDelay"),
            hideMenuTrigger: e.option("hideMenuTrigger"),
            hideMenuDelay: e.option("hideMenuDelay"),
            itemSelector: e.option("itemSelector"),
            itemActiveClass: e.option("itemActiveClass"),
            menuActiveClass: e.option("menuActiveClass"),
            textAttribute: e.option("textAttribute"),
            valueAttribute: e.option("valueAttribute"),
            showMenuAnimation: function (t) {
              e.execute("showMenuAnimation", t)
            },
            hideMenuAnimation: function (t) {
              e.execute("hideMenuAnimation", t)
            },
            render: function (t, n) {
              return e.execute("render", [t, n])
            },
            setText: function (n) {
              var i = e.option("labelSelector");
              t.find(i).html(n.text)
            }
          });
        e.once("aftersync", (function () {
          n.option("watchSync", {
            value: function (t) {
              e.set("value", t)
            },
            opened: function (t) {
              e.state("opened", t)
            }
          }), n.set("value", e.get("value")), e.state("opened", n.is("opened"))
        }));
        var i = a.findNative(e, 'input[type="hidden"]');
        n.on("dispatch", (function (t, n) {
          var r = t.originalEvent;
          switch (r.type) {
            case "afteropen":
              i.trigger("focusin");
              break;
            case "afterclose":
              i.trigger("focusout")
          }
          e.dispatch(e.emit(r, n), n)
        })), e.inner({
          main: t,
          native: i,
          combobox: n
        }), e.set({
          data: e.option("data"),
          name: e.option("name"),
          value: e.option("value")
        })
      }, c.open = function () {
        this.state("opened", !0)
      }, c.close = function () {
        this.state("opened", !1)
      }, c.dispose = function () {
        o.dispose(this), this.inner("combobox").dispose()
      }, o.extend(c, ["open", "close"]), s.propertyUpdater = {
        name: function (e) {
          a.prop(this, "name", e)
        }
      }, s.propertyUpdater.data = s.propertyUpdater.value = function (e, t, n) {
        var i = {},
          r = n.value;
        if (r) {
          var o = r.newValue;
          a.prop(this, "value", o), i.value = o
        }
        var s = n.data;
        return s && (i.data = s.newValue), this.inner("combobox").set(i), !1
      }, s.propertyValidator = {
        name: function (e) {
          return a.validateName(this, e)
        },
        value: function (e) {
          return a.validateValue(this, e)
        }
      }, s.stateUpdater = {
        opened: function (e) {
          var t = this.inner("combobox");
          e ? t.open() : t.close()
        }
      }, s
    }.call(t, n, t, e)) || (e.exports = i)
  },
  213: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(90),
        o = n(92),
        a = n(32);

      function s(e) {
        a.init(this, e)
      }
      var c = s.prototype;
      return c.type = "ComboBox", c.init = function () {
        var e = this;
        e.initStruct();
        var t = e.option("buttonElement"),
          n = e.option("menuElement"),
          i = new o({
            triggerElement: t,
            layerElement: n,
            showLayerTrigger: e.option("showMenuTrigger"),
            showLayerDelay: e.option("showMenuDelay"),
            hideLayerTrigger: e.option("hideMenuTrigger"),
            hideLayerDelay: e.option("hideMenuDelay"),
            showLayerAnimation: function () {
              e.execute("showMenuAnimation", {
                menuElement: n
              })
            },
            hideLayerAnimation: function () {
              e.execute("hideMenuAnimation", {
                menuElement: n
              })
            },
            watchSync: {
              opened: function (t) {
                e.state("opened", t)
              }
            }
          });
        i.on("dispatch", (function (t, n) {
          var i = e.emit(t.originalEvent, n);
          e.dispatch(i, n)
        }));
        var r = e.option("mainElement"),
          a = e.option("menuActiveClass");
        if (a) {
          var s = r || n;
          i.after("open", (function () {
            s.addClass(a)
          })).after("close", (function () {
            s.removeClass(a)
          }))
        }
        var c = e.option("itemSelector"),
          u = e.option("valueAttribute");
        n.on("click" + e.namespace(), c, (function (t) {
          if (e.is("opened") && e.close(t), !t.isDefaultPrevented()) {
            e.set("value", $(this).attr(u));
            var n = $.Event(t.originalEvent);
            n.type = "select", e.dispatch(e.emit(n))
          }
        })), e.inner({
          main: r,
          popup: i
        }), e.set({
          data: e.option("data"),
          value: e.option("value")
        })
      }, c.render = function () {
        this.renderWith(this.get("data"), this.option("menuTemplate"), this.option("menuElement"))
      }, c._render = function () {
        if (!this.get("data")) return !1
      }, c.open = function () {
        this.state("opened", !0)
      }, c.close = function () {
        this.state("opened", !1)
      }, c.dispose = function () {
        a.dispose(this), this.inner("popup").dispose(), this.option("menuElement").off(this.namespace())
      }, a.extend(c, ["open", "close"]), s.propertyUpdater = {}, s.propertyUpdater.data = s.propertyUpdater.value = function (e, t, n) {
        var i, o = this,
          a = o.option("menuElement"),
          s = o.option("itemActiveClass"),
          c = o.option("textAttribute"),
          u = o.option("valueAttribute");
        n.data ? this.render() : n.value && s && a.find("." + s).removeClass(s);
        var l = r(o.get("value"), null);
        if (null != l) {
          var d = function (e) {
            return null == (i = e.attr(c)) && (i = e.html()), i
          };
          if ("" !== l) {
            var E = a.find("[" + u + '="' + l + '"]');
            switch (E.length) {
              case 1:
                s && E.addClass(s), i = d(E);
                break;
              case 0:
                break;
              default:
                o.error("value repeated.")
            }
          } else a.find("[" + u + "]").each((function () {
            var e = $(this);
            if ("" === e.attr(u)) return i = d(e), !1
          }))
        }
        return o.execute("setText", {
          buttonElement: o.option("buttonElement"),
          text: i || o.option("defaultText")
        }), !1
      }, s.propertyValidator = {
        value: function (e) {
          var t = this.option("itemActiveClass");
          if (null == e && t) {
            var n = this.option("menuElement").find("." + t);
            1 === n.length && (e = n.attr(this.option("valueAttribute")))
          }
          return e
        }
      }, s.stateUpdater = {
        opened: function (e) {
          var t = this.inner("popup");
          e ? t.open() : t.close()
        }
      }, s
    }.call(t, n, t, e)) || (e.exports = i)
  },
  214: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      t.prop = function (e, n, i) {
        if ($.isPlainObject(n)) $.each(n, (function (n, i) {
          t.prop(e, n, i)
        }));
        else {
          var r = e.inner("native");
          if (2 === arguments.length) return r.prop(n);
          r.prop(n) !== i && r.prop(n, i), "value" === n && r.trigger("change")
        }
      }, t.setClass = function (e, t, n) {
        var i = e.option(t);
        i && e.option("mainElement")[n + "Class"](i)
      }, t.findNative = function (e, t) {
        var n = e.option("mainElement").find(t);
        return 0 === n.length && e.error("form/" + e.type + " 蹇呴』鍖呭惈涓€涓� [" + t + "]."), n.eq(0)
      }, t.validateName = function (e, n) {
        return "string" !== $.type(n) && ((n = t.prop(e, "name")) && "string" === $.type(n) || e.error("name attribute is missing.")), n
      }, t.validateValue = function (e, n) {
        var i = $.type(n);
        return "number" === i ? n = "" + n : "string" !== i && (n = t.prop(e, "value") || ""), n
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  215: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t) {
        var n = e.scrollTop(),
          i = n + e.height(),
          r = t.prop("offsetTop");
        (r < n || r > i) && e.scrollTop(r)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  216: function (e, t) {
    e.exports = function (e, t, n, i, r, o, a, s, c, u, l, d, E, p, f, v, T, _, h, m, C, g, A, S, R) {
      var y = void 0;
      return T("div", (function () {
        a("className", "bjy-select-dropdown" + (e("className", !0) ? " " + R(e("className", !0)) : "") + (e("hidden", !0) ? " bjy-hidden" : ""))
      }), (function () {
        T("div", (function () {
          a("className", "bjy-button"), e("disabled", !0) && a("disabled", !0)
        }), (function () {
          T("span", (function () {
            a("className", "bjy-text")
          }), y, y, y, y, y, y, R(e("defaultText", !0)))
        })), T("ul", (function () {
          a("className", "bjy-menu")
        }), y, y, !0), T("input", (function () {
          a("type", "hidden"), a("name", u("name", e("name", !0, y, !0, !0), 1))
        }))
      }))
    }
  },
  22: function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e
    }
  },
  230: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(104),
        o = n(105);
      return function (e, t) {
        var n = Math.max(r(e), r(t));
        return (e = o(e, n)) / (t = o(t, n))
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  243: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(104),
        o = n(105);
      return function (e, t) {
        var n = Math.max(r(e), r(t));
        return ((e = o(e, n)) + (t = o(t, n))) / Math.pow(10, n)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  244: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(104),
        o = n(105);
      return function (e, t) {
        var n = Math.max(r(e), r(t));
        return ((e = o(e, n)) - (t = o(t, n))) / Math.pow(10, n)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  245: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(104),
        o = n(105);
      return function (e, t) {
        var n = Math.max(r(e), r(t));
        e = o(e, n), t = o(t, n);
        var i = Math.pow(10, n);
        return e * t / (i * i)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  246: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(64);
      t.WHEEL = "cc-wheel", t.init = function (e) {
        var t = "." + r(),
          n = "onmousewheel" in document.body ? "mousewheel" : "DOMMouseScroll";
        e.data("cc-util-wheel", t).on(n + t, (function (t) {
          var n, i = t.originalEvent,
            r = i.wheelDelta;
          n = r % 120 == 0 ? -r / 120 : r % 3 == 0 ? -r / 3 : i.detail % 3 == 0 ? -i.detail / 3 : i.delta || 0, t.type = "cc-wheel", e.trigger(t, {
            delta: n
          })
        }))
      }, t.dispose = function (e) {
        var t = e.data("cc-util-wheel");
        t && e.removeData("cc-util-wheel").off(t)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  247: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return {
        horizontal: {
          axis: "x",
          position: "left",
          scrollPosition: "scrollLeft",
          size: "width",
          minSize: "minWidth",
          maxSize: "maxWidth",
          innerSize: "innerWidth",
          outerSize: "outerWidth",
          scrollSize: "scrollWidth"
        },
        vertical: {
          axis: "y",
          position: "top",
          scrollPosition: "scrollTop",
          size: "height",
          minSize: "minHeight",
          maxSize: "maxHeight",
          innerSize: "innerHeight",
          outerSize: "outerHeight",
          scrollSize: "scrollHeight"
        }
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  25: function (e, t) {
    e.exports = !0
  },
  26: function (e, t, n) {
    var i = n(6);
    e.exports = function (e, t) {
      if (!i(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
      if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
      if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
      throw TypeError("Can't convert object to primitive value")
    }
  },
  27: function (e, t, n) {
    var i = n(66),
      r = n(41);
    e.exports = Object.keys || function (e) {
      return i(e, r)
    }
  },
  28: function (e, t, n) {
    var i = n(6),
      r = n(3).document,
      o = i(r) && i(r.createElement);
    e.exports = function (e) {
      return o ? r.createElement(e) : {}
    }
  },
  29: function (e, t, n) {
    var i = n(33);
    e.exports = function (e) {
      return Object(i(e))
    }
  },
  3: function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
  },
  30: function (e, t) {
    var n = 0,
      i = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
  },
  31: function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1)
    }
  },
  32: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(64),
        o = n(81),
        a = n(46),
        s = (n(74), n(51)),
        c = n(59),
        u = n(47),
        l = n(86),
        d = (n(63), n(75)),
        E = {},
        p = "__update_async__";

      function f(e, t, n, i, r) {
        return function (o, c, u) {
          var l = this;
          if ($.isPlainObject(o)) return u = c, void $.each(o, (function (e, t) {
            l[n](e, t, u)
          }));
          u = u || {};
          var d = l[i](o),
            E = l.constructor[e + "Validator"];
          if (E && $.isFunction(E[o]) && (c = E[o].call(l, c, u)), $.isFunction(r) && (c = r(l, c, u)), (d !== c || u.force) && (l[t][o] = c, !u.silent)) {
            var f = {};
            a(f, u), f.newValue = c, f.oldValue = d;
            var v = {};
            v[o] = f;
            var T = function (e) {
              e && e[o] && l.execute(e[o], [c, d, f])
            };
            if (T(l.inner("watchSync")), T(l.option("watchSync")), u.sync) return T(l.constructor[e + "Updater"]), T(l.option("watch")), void l.emit(e + "change", v);
            var _ = l.inner(e + "Changes");
            _ || (_ = {}, l.inner(e + "Changes", _)), $.extend(_, v), l.inner(p) || l.inner(p, s((function () {
              l.sync(p)
            })))
          }
        }
      }
      var v = {};

      function T() {
        this.error("initStruct() can just call one time.")
      }
      var _ = {
          initStruct: function () {
            var e = this,
              t = e.option("mainElement"),
              n = e.option("mainTemplate");
            if ("string" === $.type(n)) {
              var i, r = e.option("share"),
                o = e.type + n;
              r && (t = v[o]), t ? e.option("replace") ? l(t, i = $(n)) : t.html(n) : (i = $(n), r && (v[o] = i)), i && (t = i, e.option("mainElement", t))
            }
            var a = e.option("parentSelector");
            a && !t.parent().is(a) && t.appendTo(a), e.initStruct = T
          },
          warn: function (e) {
            "undefined" != typeof console && console.warn(["[CC warn]", this.type, e].join(" "))
          },
          error: function (e) {
            throw new Error(["[CC error]", this.type, e].join(" "))
          },
          live: function (e, t, n) {
            var i = this.inner("main");
            return i && i.on(e + this.namespace(), t, n), this
          },
          emit: function (e, t) {
            var n = this.option("context") || this;
            (e = u(e)).cc = n;
            var i = [e];
            $.isPlainObject(t) && i.push(t), e.type = e.type.toLowerCase();
            var r = n.get$();
            r.trigger.apply(r, i);
            var o = "on" + e.type;
            return e.isPropagationStopped() || !1 !== n.execute(o, i) || (e.preventDefault(), e.stopPropagation()), n.execute(o + "_", i), e
          },
          dispatch: function (e, t) {
            if (!e.isPropagationStopped()) {
              e.originalEvent || (e.originalEvent = {
                preventDefault: $.noop,
                stopPropagation: $.noop
              });
              var n = $.Event(e);
              n.type = "dispatch", this.emit(n, t), n.isPropagationStopped() && (e.preventDefault(), e.stopPropagation())
            }
          },
          before: function (e, t) {
            return this.on("before" + e.toLowerCase(), t)
          },
          after: function (e, t) {
            return this.on("after" + e.toLowerCase(), t)
          },
          find: function (e) {
            var t = this.inner("main");
            if (t) {
              var n = t.find(e);
              if (n.length) return n
            }
          },
          appendTo: function (e) {
            var t = this.inner("main");
            t && t.appendTo(e)
          },
          prependTo: function (e) {
            var t = this.inner("main");
            t && t.prependTo(e)
          },
          execute: function (e, t) {
            var n = e;
            if ("string" === $.type(e) && (n = this.option(e)), $.isFunction(n)) {
              var i = this.option("context") || this;
              return $.isArray(t) ? n.apply(i, t) : n.call(i, t)
            }
          },
          renderWith: function (e, t, n) {
            var i = this;
            t || (t = i.option("renderTemplate")) || (t = i.option("mainTemplate")), n || (n = i.option("mainElement"));
            var r, o = i.option("renderSelector");
            o && (n = n.find(o)), $.isPlainObject(e) || $.isArray(e) ? r = i.execute("render", [e, t]) : "string" === $.type(e) && (r = e), n.html(r)
          },
          namespace: function () {
            return "." + this.guid
          },
          option: function (e, t) {
            var n = this;
            if (1 === arguments.length && "string" === $.type(e)) return n.options[e];
            $.isPlainObject(e) ? $.each(e, (function (e, t) {
              n.option(e, t)
            })) : n.options[e] = t
          },
          inner: function (e, t) {
            var n = this,
              i = n.inners || {};
            if (1 === arguments.length && "string" === $.type(e)) return i[e];
            $.isPlainObject(e) ? $.each(e, (function (e, t) {
              n.inner(e, t)
            })) : i[e] = t
          },
          is: function (e) {
            return this.states[e]
          },
          state: f("state", "states", "state", "is", (function (e, t) {
            return c(t, !1)
          })),
          get: function (e) {
            return this.properties[e]
          },
          set: f("property", "properties", "set", "get")
        },
        h = {
          sync: function () {
            var e = this,
              t = function (t, n, i) {
                $.each(t, (function (r, o) {
                  return e.execute(n[r], [o.newValue, o.oldValue, i ? t : o])
                }))
              };
            $.each(["property", "state"], (function (n, i) {
              var r = e.inner(i + "Changes");
              if (r) {
                e.inner(i + "Changes", null);
                var o = e.constructor[i + "Updater"];
                o && t(r, o, !0);
                var a = e.option("watch");
                a && t(r, a), e.emit(i + "change", r)
              }
            })), arguments[0] !== p && e.execute(e.inner(p)), e.inner(p, !1)
          },
          _sync: function () {
            if (!this.inner(p)) return !1
          },
          _init: function () {
            if (this.is("initCalled")) return !1;
            this.state("initCalled", !0)
          },
          _dispose: function () {
            if (this.is("disposeCalled")) return !1;
            this.state("disposeCalled", !0)
          }
        };

      function m(e, t, n, i, r) {
        var o, a = e["before" === i ? "_" + t : t + "_"];
        if ($.isFunction(a) && (!1 === (o = a.apply(e, n)) || $.isPlainObject(o) || (o = null)), !1 === o) return !1;
        var s = !1;
        return o && o.dispatch && (s = !0, delete o.dispatch), (r = $.Event(r)).type = i + t, e.emit(r, o), s && e.dispatch(r, o), !r.isDefaultPrevented() && void 0
      }
      t.extend = function (e, t) {
        a(e, h), $.each(e, (function (n, i) {
          var r = n.indexOf("_");
          if ($.isFunction(i) && 0 !== r && r !== n.length - 1 && !($.isArray(t) && $.inArray(n, t) >= 0)) {
            o(e, n, (function (e) {
              return m(this, n, arguments, "before", e)
            }), (function (e) {
              var t = this,
                r = arguments,
                o = function () {
                  return m(t, n, r, "after", e)
                };
              if (i.length + 1 === r.length) {
                var a = r[r.length - 1];
                if (a && $.isFunction(a.then)) return void a.then(o)
              }
              o()
            }))
          }
        })), a(e, _), d.extend(e)
      }, t.init = function (e, t) {
        return t || (t = {}), a(t, e.constructor.defaultOptions), t.onafterinit_ = function () {
          e.state("inited", !0)
        }, t.onafterdispose_ = function () {
          e.state("disposed", !0), e.off();
          var t = e.inner("main");
          e.option("removeOnDispose") && t && t.remove(), s((function () {
            delete E[e.guid], e.properties = e.options = e.changes = e.states = e.inners = e.guid = null
          }))
        }, E[e.guid = r()] = e, e.properties = {}, e.options = t, e.states = {}, e.inners = {}, e.init(), e
      }, t.dispose = function (e) {
        e.sync();
        var t = e.inner("main") || e.option("mainElement");
        t && t.off(e.namespace())
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  33: function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e
    }
  },
  34: function (e, t, n) {
    var i = n(0);
    e.exports = function (e, t, n) {
      return t in e ? i(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }
  },
  36: function (e, t, n) {
    e.exports = !n(4) && !n(12)((function () {
      return 7 != Object.defineProperty(n(28)("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    }))
  },
  37: function (e, t) {
    var n = Math.ceil,
      i = Math.floor;
    e.exports = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
  },
  39: function (e, t, n) {
    var i = n(40)("keys"),
      r = n(30);
    e.exports = function (e) {
      return i[e] || (i[e] = r(e))
    }
  },
  4: function (e, t, n) {
    e.exports = !n(12)((function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    }))
  },
  40: function (e, t, n) {
    var i = n(2),
      r = n(3),
      o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
      version: i.version,
      mode: n(25) ? "pure" : "global",
      copyright: "漏 2019 Denis Pushkarev (zloirock.ru)"
    })
  },
  41: function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  },
  42: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t) {
        return e = e.jquery ? e[0] : e, t = t.jquery ? t[0] : t, !(!e || !t) && (e === t || $.contains(e, t))
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  43: function (e, t, n) {
    var i = n(37),
      r = Math.min;
    e.exports = function (e) {
      return e > 0 ? r(i(e), 9007199254740991) : 0
    }
  },
  46: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t) {
        $.isPlainObject(t) && $.each(t, (function (t, n) {
          t in e || (e[t] = n)
        }))
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  47: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e) {
        return e && !e[$.expando] && (e = "string" === $.type(e) || e.type ? $.Event(e) : $.Event(null, e)), e || $.Event()
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  5: function (e, t, n) {
    var i = n(3),
      r = n(2),
      o = n(16),
      a = n(13),
      s = n(11),
      c = function (e, t, n) {
        var u, l, d, E = e & c.F,
          p = e & c.G,
          f = e & c.S,
          v = e & c.P,
          T = e & c.B,
          _ = e & c.W,
          h = p ? r : r[t] || (r[t] = {}),
          m = h.prototype,
          C = p ? i : f ? i[t] : (i[t] || {}).prototype;
        for (u in p && (n = t), n)(l = !E && C && void 0 !== C[u]) && s(h, u) || (d = l ? C[u] : n[u], h[u] = p && "function" != typeof C[u] ? n[u] : T && l ? o(d, i) : _ && C[u] == d ? function (e) {
          var t = function (t, n, i) {
            if (this instanceof e) {
              switch (arguments.length) {
                case 0:
                  return new e;
                case 1:
                  return new e(t);
                case 2:
                  return new e(t, n)
              }
              return new e(t, n, i)
            }
            return e.apply(this, arguments)
          };
          return t.prototype = e.prototype, t
        }(d) : v && "function" == typeof d ? o(Function.call, d) : d, v && ((h.virtual || (h.virtual = {}))[u] = d, e & c.R && m && !m[u] && a(m, u, d)))
      };
    c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
  },
  50: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t) {
        var n = [];
        return "number" === $.type(e) && (e = "" + e), e && "string" === $.type(e) && $.each(e.split(t), (function (e, t) {
          (t = $.trim(t)) && n.push(t)
        })), n
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  51: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e) {
        var t = setTimeout(e, 0);
        return function () {
          clearTimeout(t)
        }
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  54: function (e, t, n) {
    var i = n(31);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return "String" == i(e) ? e.split("") : Object(e)
    }
  },
  57: function (e, t, n) {
    n(58);
    var i = n(2).Object;
    e.exports = function (e, t, n) {
      return i.defineProperty(e, t, n)
    }
  },
  58: function (e, t, n) {
    var i = n(5);
    i(i.S + i.F * !n(4), "Object", {
      defineProperty: n(8).f
    })
  },
  59: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t) {
        return "boolean" !== $.type(e) && (1 === arguments.length && (t = !!e), e = t), e
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  6: function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  },
  63: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";

      function i(e) {
        return e.is("body") || "static" !== e.css("position")
      }
      return function (e) {
        if (e.is("body")) return e;
        for (var t = e.parent(); !i(t);) t = t.parent();
        return t
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  64: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      return window.ccInstanceIndex = window.ccInstanceIndex || 1,
        function () {
          return "cc_" + ++window.ccInstanceIndex
        }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  66: function (e, t, n) {
    var i = n(11),
      r = n(14),
      o = n(96)(!1),
      a = n(39)("IE_PROTO");
    e.exports = function (e, t) {
      var n, s = r(e),
        c = 0,
        u = [];
      for (n in s) n != a && i(s, n) && u.push(n);
      for (; t.length > c;) i(s, n = t[c++]) && (~o(u, n) || u.push(n));
      return u
    }
  },
  68: function (e, t, n) {
    e.exports = n(178)
  },
  74: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  75: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(46),
        o = n(47),
        a = {
          get$: function () {
            return this.$ || (this.$ = $({})), this.$
          },
          on: function (e, t, n) {
            return this.get$().on(e, t, n), this
          },
          once: function (e, t, n) {
            return this.get$().one(e, t, n), this
          },
          off: function (e, t) {
            return this.get$().off(e, t), this
          },
          emit: function (e, t) {
            return e = o(e), this.get$().trigger(e, t), e
          }
        };
      t.extend = function (e) {
        r(e, a)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  8: function (e, t, n) {
    var i = n(9),
      r = n(36),
      o = n(26),
      a = Object.defineProperty;
    t.f = n(4) ? Object.defineProperty : function (e, t, n) {
      if (i(e), t = o(t, !0), i(n), r) try {
        return a(e, t, n)
      } catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (e[t] = n.value), e
    }
  },
  80: function (e, t, n) {
    "use strict";
    var i = n(212),
      r = n(215);
    i.defaultOptions = {
      buttonSelector: "> .bjy-button",
      menuSelector: "> .bjy-menu",
      labelSelector: "> .bjy-button > .bjy-text",
      itemSelector: "li",
      itemActiveClass: "bjy-active",
      textAttribute: "data-text",
      valueAttribute: "data-value",
      defaultText: "- 璇烽€夋嫨 -",
      menuActiveClass: "bjy-opened",
      showMenuTrigger: "click",
      hideMenuTrigger: "click",
      showMenuAnimation: function (e) {
        e.menuElement.show()
      },
      hideMenuAnimation: function (e) {
        e.menuElement.hide()
      },
      render: function (e) {
        var t = [];
        return $.each(e, (function (e, n) {
          var i = [];
          $.each(n, (function (e, t) {
            "text" !== e && null != t && i.push("data-" + e + '="' + t + '"')
          }));
          var r = i.join(" ");
          r && (r = " " + r), t.push('<li class="bjy-item"' + r + ">" + n.text + "</li>")
        })), t.join("")
      }
    }, BJY.components.select = {
      template: n(216),
      propTypes: {
        name: {
          type: "string"
        },
        className: {
          type: "string"
        },
        defaultText: {
          type: "string",
          value: "璇烽€夋嫨"
        },
        data: {
          type: "array",
          value: null
        },
        value: {
          type: ["string", "number"],
          value: ""
        },
        disabled: {
          type: "boolean"
        },
        hidden: {
          type: "boolean"
        },
        onSelect: {
          type: "function"
        },
        onChange: {
          type: "function"
        }
      },
      watchers: {
        value: function (e) {
          this.select.set("value", e)
        },
        data: function (e) {
          this.select.set("data", e)
        }
      },
      afterMount: function () {
        var e = this,
          t = $(e.$el);
        e.select = new i({
          mainElement: t,
          data: e.get("data"),
          value: e.get("value"),
          defaultText: e.get("defaultText"),
          onSelect: e.get("onSelect"),
          opened: !1,
          watch: {
            value: function (t) {
              e.get("onChange")(t)
            },
            opened: function (e) {
              if (e) {
                var n = t.find(".bjy-menu");
                setTimeout((function () {
                  r(n, n.find(".bjy-active"))
                }), 500)
              }
            }
          }
        }), e.select.close()
      },
      methods: {
        setValue: function (e) {
          this.select.set("value", e)
        },
        setData: function (e) {
          this.select.set("data", e)
        }
      },
      beforeDestroy: function () {
        this.select.dispose()
      }
    }, e.exports = BJY.components.select
  },
  81: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t, n, i) {
        var r = "string" === $.type(t),
          o = r ? e[t] : e;
        r || (i = n, n = t);
        var a = function () {
          var e, t = $.makeArray(arguments);
          if ($.isFunction(n) && (e = n.apply(this, t)), !1 !== e) {
            if ($.isFunction(o) && (e = o.apply(this, t)), $.isFunction(i)) {
              t.push(e);
              var r = i.apply(this, t);
              "undefined" !== $.type(r) && (e = r)
            }
            return e
          }
        };
        return r ? e[t] = a : a
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  841: function (e, t, n) {
    "use strict";
    var i = n(1320),
      r = n(1321);
    e.exports = BJY.getLanguage({
      english: i,
      chineseLive: r,
      chineseClassroom: r
    })
  },
  85: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t, n) {
        return e < t ? e = t : e > n && (e = n), e
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  858: function (e, t, n) {
    "use strict";
    var i = 0;

    function r() {
      i = $.now()
    }

    function o() {
      return $.now() - i
    }
    var a = {
      upload: "/web/detection/upload",
      download: "/web/detection/download",
      size: 1e5,
      count: 10,
      timeout: 15
    };

    function s(e) {
      $.extend(this, a, e), this.uploadData || (this.uploadData = new Uint8Array(this.size)), this.onProgress || (this.onProgress = $.noop)
    }
    var c = s.prototype;
    c.getNetworkSpeed = function () {
      var e = this,
        t = e.downloadRealCount * e.size / (e.downloadTime / 1e3),
        n = e.uploadRealCount * e.size / (e.uploadTime / 1e3);
      return {
        server_res: e.serverResTime,
        upload: n,
        download: t,
        ip: e.ip
      }
    }, c.start = function () {
      var e = this;
      e.onProgress;
      return e.deferred = $.Deferred(), e.isStart = !0, r(),
        function (e) {
          return $.ajax({
            method: "HEAD",
            url: e.download
          })
        }(e).then((function () {
          e.serverResTime = o(), e.onProgress({
              type: "server_res",
              time: e.serverResTime
            }), e.downloadStartTime = $.now(),
            function e(t, n, i) {
              var a;
              if (t.isStart) return 1 === n ? (a = $.Deferred(), t.downloadTime = 0) : a = i, r(), $.ajax({
                method: "GET",
                timeout: 1e3 * t.timeout,
                url: t.download,
                data: {
                  size: t.size
                }
              }).then((function () {
                t.downloadTime += o(), n === t.count || $.now() - t.downloadStartTime > 1e3 * t.timeout ? a.resolve(n) : (setTimeout((function () {
                  e(t, n + 1, a)
                }), 200), t.onProgress({
                  type: "upload_count",
                  count: n
                }))
              }), (function () {
                a.reject()
              })), 1 === n ? a : void 0
            }(e, 1).then((function (t) {
              e.onProgress({
                  type: "download_res",
                  time: e.downloadTime
                }), e.downloadRealCount = t, e.uploadStartTime = $.now(),
                function e(t, n, i) {
                  var a;
                  if (t.isStart) return 1 === n ? (a = $.Deferred(), t.uploadTime = 0) : a = i, r(), $.ajax({
                    method: "POST",
                    url: t.upload,
                    timeout: 1e3 * t.timeout,
                    data: t.uploadData,
                    processData: !1,
                    contentType: !1
                  }).then((function (i) {
                    0 == i.code && i.data && (t.ip = i.data), t.uploadTime += o(), n === t.count || $.now() - t.uploadStartTime > 1e3 * t.timeout ? a.resolve(n) : (setTimeout((function () {
                      e(t, n + 1, a)
                    }), 200), t.onProgress({
                      type: "upload_count",
                      count: n
                    }))
                  }), (function () {
                    a.reject()
                  })), 1 === n ? a : void 0
                }(e, 1).then((function (t) {
                  e.onProgress({
                    type: "upload_res",
                    time: e.uploadTime
                  }), e.uploadRealCount = t, e.deferred.resolve({
                    code: 0,
                    data: e.getNetworkSpeed()
                  }), e.isStart = !1
                }), (function () {
                  e.deferred.reject({
                    code: 1
                  })
                }))
            }), (function () {
              e.deferred.reject({
                code: 1
              })
            }))
        }), (function () {
          e.deferred.reject({
            code: 1
          })
        })), e.deferred
    }, c.stop = function () {
      this.isStart && (this.isStart = !1, this.deferred.resolve({
        code: 2
      }))
    }, c.dispose = function () {
      this.stop()
    }, e.exports = s
  },
  86: function (e, t, n) {
    var i;
    void 0 === (i = function (e) {
      "use strict";
      return function (e, t) {
        e = e[0], t = t[0], e.parentNode.replaceChild(t, e)
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  89: function (e, t, n) {
    var i = n(37),
      r = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      return (e = i(e)) < 0 ? r(e + t, 0) : o(e, t)
    }
  },
  9: function (e, t, n) {
    var i = n(6);
    e.exports = function (e) {
      if (!i(e)) throw TypeError(e + " is not an object!");
      return e
    }
  },
  90: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t) {
        var n = $.type(e);
        return "number" === n ? e = "" + e : "string" !== n && (1 === arguments.length && (t = ""), e = t), e
      }
    }.call(t, n, t, e)) || (e.exports = i)
  },
  92: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, i) {
      "use strict";
      var r = n(166),
        o = n(97),
        a = n(42),
        s = n(51),
        c = n(32),
        u = n(167),
        l = n(17);

      function d(e) {
        c.init(this, e)
      }
      var E = d.prototype;

      function p(e, t) {
        return function (n) {
          "disabled" !== $(this).attr("disabled") && ($.isFunction(t) && !t.call(this, n) || e.open(n))
        }
      }

      function f(e, t) {
        return function (n) {
          if ("disabled" !== $(this).attr("disabled") && (!$.isFunction(t) || t.call(this, n))) {
            e.close(n);
            var i = e.inner(D);
            i && (e.sync(), i.resolve())
          }
        }
      }

      function v(e, t, n, i) {
        e && e.on(t, i, n)
      }

      function T(e, t, n) {
        e && e.off(t, n)
      }

      function _(e, t) {
        var n = e.option("triggerElement"),
          i = e.option("triggerSelector");
        (n || i) && v(n || l.body, t.type, t.handler, i)
      }

      function h(e, t) {
        T(e.option("triggerElement") || l.body, t.type, t.handler)
      }

      function m(e, t) {
        v(l.document, t.type, t.handler)
      }

      function C(e, t) {
        T(l.document, t.type, t.handler)
      }

      function g(e) {
        return f(e, (function (t) {
          return !a(e.inner("layer"), t.target)
        }))
      }

      function A(e, t) {
        var n = e.option("triggerElement"),
          i = e.option("triggerSelector");
        return n && !i ? n : t ? $(t.currentTarget) : void 0
      }

      function S(e, t) {
        var n = e.option("layerElement");
        return n && n.jquery && n.length ? n : t && $.isFunction(n) ? ((n = e.execute(n, t)) && n.tagName && (n = $(n)), n) : void 0
      }
      E.type = "Popup", E.init = function () {
        var e, t, n = this,
          i = function (e, t) {
            if ($.isFunction(e[t])) return e[t](n)
          },
          r = u.parse(n.option("showLayerTrigger"), (function (e) {
            var t = b.show[e];
            return {
              delay: n.option("showLayerDelay"),
              startDelay: i(t, "startDelay"),
              endDelay: i(t, "endDelay"),
              handler: o(i(t, "handler"), 100),
              beforeHandler: function (e) {
                var t = function () {
                  n.inner({
                    trigger: A(n, e),
                    layer: S(n, e)
                  })
                };
                if (n.is("opened")) {
                  var i = $.Deferred();
                  return i.then(t), n.inner(D, i), i
                }
                t()
              }
            }
          })),
          a = u.parse(n.option("hideLayerTrigger"), (function (e) {
            var t = b.hide[e];
            return {
              delay: n.option("hideLayerDelay"),
              startDelay: i(t, "startDelay"),
              endDelay: i(t, "endDelay"),
              handler: o(i(t, "handler"), 100)
            }
          })),
          c = function (e) {
            $.each(r, (function (t, i) {
              b.show[t][e](n, i)
            }))
          },
          l = function (e) {
            $.each(a, (function (t, i) {
              b.hide[t][e](n, i)
            }))
          },
          d = function () {
            e && (c("off"), e = !1)
          },
          E = function () {
            t || (l("on"), t = !0)
          },
          p = function () {
            t && (l("off"), t = !1)
          },
          f = function (t, i) {
            var r = i.opened;
            r && (r.newValue ? (n.option("triggerSelector") || d(), s(E)) : (p(), e || (c("on"), e = !0)))
          };
        n.before("dispose", (function () {
          n.off("statechange", f), d(), p(), n.close()
        })).on("statechange", f), n.inner({
          trigger: A(n),
          layer: S(n)
        }), n.state({
          opened: n.option("opened")
        })
      }, E.open = function () {
        this.state("opened", !0)
      }, E._open = function (e) {
        var t = this;
        if (t.is("opened")) {
          var n = t.inner("layer"),
            i = t.inner("trigger"),
            r = n.data(y);
          return i && r && i[0] !== r[0] && (n.data(R).close(), s((function () {
            t.guid && t.open(e)
          }))), !1
        }
        return {
          dispatch: !0
        }
      }, E.open_ = function () {
        var e = this.inner("layer");
        if (e) {
          var t = {};
          t[y] = this.inner("trigger"), t[R] = this, e.data(t)
        }
        return {
          dispatch: !0
        }
      }, E.close = function () {
        this.state("opened", !1)
      }, E._close = function () {
        return !!this.is("opened") && {
          dispatch: !0
        }
      }, E.close_ = function () {
        var e = this.inner("layer");
        return e && e.removeData(R).removeData(y), {
          dispatch: !0
        }
      }, E.dispose = function () {
        c.dispose(this)
      }, c.extend(E), d.stateUpdater = {
        opened: function (e) {
          var t = this.inner("layer");
          t && this.execute(e ? "showLayerAnimation" : "hideLayerAnimation", {
            layerElement: t
          })
        }
      }, d.stateValidator = {
        opened: function (e) {
          if ("boolean" !== $.type(e)) {
            var t = this.inner("layer");
            t && (e = !r(t))
          }
          return e
        }
      };
      var R = "__prev_popup__",
        y = "__trigger_element__",
        D = "__hide_promise__",
        I = u.enter.type,
        P = u.leave.type,
        b = {
          show: {
            focus: {
              on: _,
              off: h,
              handler: p
            },
            click: {
              on: _,
              off: h,
              handler: p
            },
            enter: {
              on: _,
              off: h,
              handler: p,
              startDelay: function (e) {
                return function (t) {
                  v(e.inner("trigger"), P, t)
                }
              },
              endDelay: function (e) {
                return function (t) {
                  T(e.inner("trigger"), P, t)
                }
              }
            },
            context: {
              on: _,
              off: h,
              handler: p
            }
          },
          hide: {
            blur: {
              on: _,
              off: h,
              handler: f
            },
            click: {
              on: m,
              off: C,
              handler: g
            },
            leave: {
              on: function (e, t) {
                v(e.inner("trigger"), t.type, t.handler), v(e.inner("layer"), t.type, t.handler)
              },
              off: function (e, t) {
                T(e.inner("trigger"), t.type, t.handler), T(e.inner("layer"), t.type, t.handler)
              },
              handler: f,
              startDelay: function (e) {
                return function (t) {
                  v(e.inner("trigger"), I, t), v(e.inner("layer"), I, t)
                }
              },
              endDelay: function (e) {
                return function (t) {
                  T(e.inner("trigger"), I, t), T(e.inner("layer"), I, t)
                }
              }
            },
            context: {
              on: m,
              off: C,
              handler: g
            }
          }
        };
      return d
    }.call(t, n, t, e)) || (e.exports = i)
  },
  93: function (e, t, n) {
    var i = n(5),
      r = n(2),
      o = n(12);
    e.exports = function (e, t) {
      var n = (r.Object || {})[e] || Object[e],
        a = {};
      a[e] = t(n), i(i.S + i.F * o((function () {
        n(1)
      })), "Object", a)
    }
  },
  96: function (e, t, n) {
    var i = n(14),
      r = n(43),
      o = n(89);
    e.exports = function (e) {
      return function (t, n, a) {
        var s, c = i(t),
          u = r(c.length),
          l = o(a, u);
        if (e && n != n) {
          for (; u > l;)
            if ((s = c[l++]) != s) return !0
        } else
          for (; u > l; l++)
            if ((e || l in c) && c[l] === n) return e || l || 0;
        return !e && -1
      }
    }
  },
  97: function (e, t, n) {
    var i;
    void 0 === (i = function (e, t, n) {
      "use strict";
      return function (e, t, n) {
        var i;
        return t = "number" === $.type(t) ? t : 50,
          function () {
            if (!i) {
              var r = this,
                o = $.makeArray(arguments);
              n && e.apply(r, o), i = setTimeout((function () {
                i = null, n || e.apply(r, o)
              }), t)
            }
          }
      }
    }.call(t, n, t, e)) || (e.exports = i)
  }
});