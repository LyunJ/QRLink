!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(require("@firebase/app"))
    : "function" == typeof define && define.amd
    ? define(["@firebase/app"], t)
    : t(
        (e = "undefined" != typeof globalThis ? globalThis : e || self).firebase
      );
})(this, function (Hu) {
  "use strict";
  try {
    !function () {
      function e(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var t = e(Hu),
        r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        };
      function n(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var l = function () {
        return (l =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function i(e, a, s, u) {
        return new (s = s || Promise)(function (n, t) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              t(e);
            }
          }
          function i(e) {
            try {
              o(u.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(r, i);
          }
          o((u = u.apply(e, a || [])).next());
        });
      }
      function o(n, r) {
        var i,
          o,
          a,
          s = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          e = { next: t(0), throw: t(1), return: t(2) };
        return (
          "function" == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this;
            }),
          e
        );
        function t(t) {
          return function (e) {
            return (function (t) {
              if (i) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (a =
                        2 & t[0]
                          ? o.return
                          : t[0]
                          ? o.throw || ((a = o.return) && a.call(o), 0)
                          : o.next) &&
                      !(a = a.call(o, t[1])).done)
                  )
                    return a;
                  switch (((o = 0), (t = a ? [2 & t[0], a.value] : t)[0])) {
                    case 0:
                    case 1:
                      a = t;
                      break;
                    case 4:
                      return s.label++, { value: t[1], done: !1 };
                    case 5:
                      s.label++, (o = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                        s.label = t[1];
                        break;
                      }
                      if (6 === t[0] && s.label < a[1]) {
                        (s.label = a[1]), (a = t);
                        break;
                      }
                      if (a && s.label < a[2]) {
                        (s.label = a[2]), s.ops.push(t);
                        break;
                      }
                      a[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  t = r.call(n, s);
                } catch (e) {
                  (t = [6, e]), (o = 0);
                } finally {
                  i = a = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, e]);
          };
        }
      }
      function _(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return {
                value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                done: !e,
              };
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function y(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function a(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++)
          e[i] = t[n];
        return e;
      }
      function s(e) {
        for (var t = [], n = 0, r = 0; r < e.length; r++) {
          var i = e.charCodeAt(r);
          i < 128
            ? (t[n++] = i)
            : (i < 2048
                ? (t[n++] = (i >> 6) | 192)
                : (55296 == (64512 & i) &&
                  r + 1 < e.length &&
                  56320 == (64512 & e.charCodeAt(r + 1))
                    ? ((i =
                        65536 +
                        ((1023 & i) << 10) +
                        (1023 & e.charCodeAt(++r))),
                      (t[n++] = (i >> 18) | 240),
                      (t[n++] = ((i >> 12) & 63) | 128))
                    : (t[n++] = (i >> 12) | 224),
                  (t[n++] = ((i >> 6) & 63) | 128)),
              (t[n++] = (63 & i) | 128));
        }
        return t;
      }
      function u(e) {
        try {
          return h.decodeString(e, !0);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }
        return null;
      }
      var c = {
          NODE_CLIENT: !1,
          NODE_ADMIN: !1,
          SDK_VERSION: "${JSCORE_VERSION}",
        },
        g = function (e, t) {
          if (!e) throw m(t);
        },
        m = function (e) {
          return new Error(
            "Firebase Database (" +
              c.SDK_VERSION +
              ") INTERNAL ASSERT FAILED: " +
              e
          );
        },
        h = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" == typeof atob,
          encodeByteArray: function (e, t) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            for (
              var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                r = [],
                i = 0;
              i < e.length;
              i += 3
            ) {
              var o = e[i],
                a = i + 1 < e.length,
                s = a ? e[i + 1] : 0,
                u = i + 2 < e.length,
                l = u ? e[i + 2] : 0,
                c = o >> 2,
                o = ((3 & o) << 4) | (s >> 4),
                s = ((15 & s) << 2) | (l >> 6),
                l = 63 & l;
              u || ((l = 64), a || (s = 64)), r.push(n[c], n[o], n[s], n[l]);
            }
            return r.join("");
          },
          encodeString: function (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(s(e), t);
          },
          decodeString: function (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : (function (e) {
                  for (var t = [], n = 0, r = 0; n < e.length; ) {
                    var i,
                      o,
                      a,
                      s = e[n++];
                    s < 128
                      ? (t[r++] = String.fromCharCode(s))
                      : 191 < s && s < 224
                      ? ((o = e[n++]),
                        (t[r++] = String.fromCharCode(
                          ((31 & s) << 6) | (63 & o)
                        )))
                      : 239 < s && s < 365
                      ? ((i =
                          (((7 & s) << 18) |
                            ((63 & (o = e[n++])) << 12) |
                            ((63 & (a = e[n++])) << 6) |
                            (63 & e[n++])) -
                          65536),
                        (t[r++] = String.fromCharCode(55296 + (i >> 10))),
                        (t[r++] = String.fromCharCode(56320 + (1023 & i))))
                      : ((o = e[n++]),
                        (a = e[n++]),
                        (t[r++] = String.fromCharCode(
                          ((15 & s) << 12) | ((63 & o) << 6) | (63 & a)
                        )));
                  }
                  return t.join("");
                })(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray: function (e, t) {
            this.init_();
            for (
              var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                r = [],
                i = 0;
              i < e.length;

            ) {
              var o = n[e.charAt(i++)],
                a = i < e.length ? n[e.charAt(i)] : 0,
                s = ++i < e.length ? n[e.charAt(i)] : 64,
                u = ++i < e.length ? n[e.charAt(i)] : 64;
              if ((++i, null == o || null == a || null == s || null == u))
                throw Error();
              o = (o << 2) | (a >> 4);
              r.push(o),
                64 !== s &&
                  ((a = ((a << 4) & 240) | (s >> 2)),
                  r.push(a),
                  64 !== u && ((u = ((s << 6) & 192) | u), r.push(u)));
            }
            return r;
          },
          init_: function () {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (var e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[
                    e
                  ] = this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[
                    this.byteToCharMapWebSafe_[e]
                  ] = e) >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[
                      this.ENCODED_VALS_WEBSAFE.charAt(e)
                    ] = e),
                    (this.charToByteMapWebSafe_[
                      this.ENCODED_VALS.charAt(e)
                    ] = e));
            }
          },
        };
      function p(e) {
        return (function e(t, n) {
          if (!(n instanceof Object)) return n;
          switch (n.constructor) {
            case Date:
              var r = n;
              return new Date(r.getTime());
            case Object:
              void 0 === t && (t = {});
              break;
            case Array:
              t = [];
              break;
            default:
              return n;
          }
          for (var i in n)
            n.hasOwnProperty(i) && d(i) && (t[i] = e(t[i], n[i]));
          return t;
        })(void 0, e);
      }
      function d(e) {
        return "__proto__" !== e;
      }
      var f =
        ((v.prototype.wrapCallback = function (n) {
          var r = this;
          return function (e, t) {
            e ? r.reject(e) : r.resolve(t),
              "function" == typeof n &&
                (r.promise.catch(function () {}),
                1 === n.length ? n(e) : n(e, t));
          };
        }),
        v);
      function v() {
        var n = this;
        (this.reject = function () {}),
          (this.resolve = function () {}),
          (this.promise = new Promise(function (e, t) {
            (n.resolve = e), (n.reject = t);
          }));
      }
      function w() {
        return (
          "undefined" != typeof window &&
          (window.cordova || window.phonegap || window.PhoneGap) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
            "undefined" != typeof navigator &&
              "string" == typeof navigator.userAgent
              ? navigator.userAgent
              : ""
          )
        );
      }
      function b() {
        return !0 === c.NODE_ADMIN;
      }
      var C,
        E = "FirebaseError",
        I = (n(S, (C = Error)), S);
      function S(e, t, n) {
        t = C.call(this, t) || this;
        return (
          (t.code = e),
          (t.customData = n),
          (t.name = E),
          Object.setPrototypeOf(t, S.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(t, T.prototype.create),
          t
        );
      }
      var T =
        ((P.prototype.create = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          var r,
            i = t[0] || {},
            o = this.service + "/" + e,
            e = this.errors[e],
            e = e
              ? ((r = i),
                e.replace(N, function (e, t) {
                  var n = r[t];
                  return null != n ? String(n) : "<" + t + "?>";
                }))
              : "Error",
            e = this.serviceName + ": " + e + " (" + o + ").";
          return new I(o, e, i);
        }),
        P);
      function P(e, t, n) {
        (this.service = e), (this.serviceName = t), (this.errors = n);
      }
      var N = /\{\$([^}]+)}/g;
      function x(e) {
        return JSON.parse(e);
      }
      function k(e) {
        return JSON.stringify(e);
      }
      function R(e) {
        var t = {},
          n = {},
          r = {},
          i = "";
        try {
          var o = e.split("."),
            t = x(u(o[0]) || ""),
            n = x(u(o[1]) || ""),
            i = o[2],
            r = n.d || {};
          delete n.d;
        } catch (e) {}
        return { header: t, claims: n, data: r, signature: i };
      }
      function D(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function O(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }
      function A(e) {
        for (var t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      function L(e, t, n) {
        var r,
          i = {};
        for (r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            (i[r] = t.call(n, e[r], r, e));
        return i;
      }
      function M(e) {
        for (var n = [], t = 0, r = Object.entries(e); t < r.length; t++) {
          var i = r[t];
          !(function (t, e) {
            Array.isArray(e)
              ? e.forEach(function (e) {
                  n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
                })
              : n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
          })(i[0], i[1]);
        }
        return n.length ? "&" + n.join("&") : "";
      }
      var F =
        ((q.prototype.reset = function () {
          (this.chain_[0] = 1732584193),
            (this.chain_[1] = 4023233417),
            (this.chain_[2] = 2562383102),
            (this.chain_[3] = 271733878),
            (this.chain_[4] = 3285377520),
            (this.inbuf_ = 0),
            (this.total_ = 0);
        }),
        (q.prototype.compress_ = function (e, t) {
          t = t || 0;
          var n = this.W_;
          if ("string" == typeof e)
            for (var r = 0; r < 16; r++)
              (n[r] =
                (e.charCodeAt(t) << 24) |
                (e.charCodeAt(t + 1) << 16) |
                (e.charCodeAt(t + 2) << 8) |
                e.charCodeAt(t + 3)),
                (t += 4);
          else
            for (r = 0; r < 16; r++)
              (n[r] =
                (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]),
                (t += 4);
          for (r = 16; r < 80; r++) {
            var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
            n[r] = 4294967295 & ((i << 1) | (i >>> 31));
          }
          for (
            var o,
              a = this.chain_[0],
              s = this.chain_[1],
              u = this.chain_[2],
              l = this.chain_[3],
              c = this.chain_[4],
              r = 0;
            r < 80;
            r++
          )
            var h =
                r < 40
                  ? r < 20
                    ? ((o = l ^ (s & (u ^ l))), 1518500249)
                    : ((o = s ^ u ^ l), 1859775393)
                  : r < 60
                  ? ((o = (s & u) | (l & (s | u))), 2400959708)
                  : ((o = s ^ u ^ l), 3395469782),
              i = (((a << 5) | (a >>> 27)) + o + c + h + n[r]) & 4294967295,
              c = l,
              l = u,
              u = 4294967295 & ((s << 30) | (s >>> 2)),
              s = a,
              a = i;
          (this.chain_[0] = (this.chain_[0] + a) & 4294967295),
            (this.chain_[1] = (this.chain_[1] + s) & 4294967295),
            (this.chain_[2] = (this.chain_[2] + u) & 4294967295),
            (this.chain_[3] = (this.chain_[3] + l) & 4294967295),
            (this.chain_[4] = (this.chain_[4] + c) & 4294967295);
        }),
        (q.prototype.update = function (e, t) {
          if (null != e) {
            for (
              var n = (t = void 0 === t ? e.length : t) - this.blockSize,
                r = 0,
                i = this.buf_,
                o = this.inbuf_;
              r < t;

            ) {
              if (0 === o)
                for (; r <= n; ) this.compress_(e, r), (r += this.blockSize);
              if ("string" == typeof e) {
                for (; r < t; )
                  if (((i[o] = e.charCodeAt(r)), ++r, ++o === this.blockSize)) {
                    this.compress_(i), (o = 0);
                    break;
                  }
              } else
                for (; r < t; )
                  if (((i[o] = e[r]), ++r, ++o === this.blockSize)) {
                    this.compress_(i), (o = 0);
                    break;
                  }
            }
            (this.inbuf_ = o), (this.total_ += t);
          }
        }),
        (q.prototype.digest = function () {
          var e = [],
            t = 8 * this.total_;
          this.inbuf_ < 56
            ? this.update(this.pad_, 56 - this.inbuf_)
            : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          for (var n = this.blockSize - 1; 56 <= n; n--)
            (this.buf_[n] = 255 & t), (t /= 256);
          this.compress_(this.buf_);
          for (var r = 0, n = 0; n < 5; n++)
            for (var i = 24; 0 <= i; i -= 8)
              (e[r] = (this.chain_[n] >> i) & 255), ++r;
          return e;
        }),
        q);
      function q() {
        (this.chain_ = []),
          (this.buf_ = []),
          (this.W_ = []),
          (this.pad_ = []),
          (this.inbuf_ = 0),
          (this.total_ = 0),
          (this.blockSize = 64),
          (this.pad_[0] = 128);
        for (var e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
        this.reset();
      }
      function j(e, t, n, r) {
        var i;
        if (
          (r < t
            ? (i = "at least " + t)
            : n < r && (i = 0 === n ? "none" : "no more than " + n),
          i)
        )
          throw new Error(
            e +
              " failed: Was called with " +
              r +
              (1 === r ? " argument." : " arguments.") +
              " Expects " +
              i +
              "."
          );
      }
      function W(e, t) {
        return e + " failed: " + t + " argument ";
      }
      function U(e, t, n, r) {
        if ((!r || n) && "function" != typeof n)
          throw new Error(W(e, t) + "must be a valid function.");
      }
      function B(e, t, n, r) {
        if ((!r || n) && ("object" != typeof n || null === n))
          throw new Error(W(e, t) + "must be a valid context object.");
      }
      function V(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? t++
            : r < 2048
            ? (t += 2)
            : 55296 <= r && r <= 56319
            ? ((t += 4), n++)
            : (t += 3);
        }
        return t;
      }
      function H(e) {
        return e && e._delegate ? e._delegate : e;
      }
      var z =
        ((Q.prototype.setInstantiationMode = function (e) {
          return (this.instantiationMode = e), this;
        }),
        (Q.prototype.setMultipleInstances = function (e) {
          return (this.multipleInstances = e), this;
        }),
        (Q.prototype.setServiceProps = function (e) {
          return (this.serviceProps = e), this;
        }),
        (Q.prototype.setInstanceCreatedCallback = function (e) {
          return (this.onInstanceCreated = e), this;
        }),
        Q);
      function Q(e, t, n) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null);
      }
      var Y = "[DEFAULT]",
        K =
          ((G.prototype.get = function (e) {
            void 0 === e && (e = Y);
            var t = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(t)) {
              var n = new f();
              if (
                (this.instancesDeferred.set(t, n),
                this.isInitialized(t) || this.shouldAutoInitialize())
              )
                try {
                  var r = this.getOrInitializeService({
                    instanceIdentifier: t,
                  });
                  r && n.resolve(r);
                } catch (e) {}
            }
            return this.instancesDeferred.get(t).promise;
          }),
          (G.prototype.getImmediate = function (e) {
            var t = l({ identifier: Y, optional: !1 }, e),
              e = t.identifier,
              t = t.optional,
              n = this.normalizeInstanceIdentifier(e);
            if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
              if (t) return null;
              throw Error("Service " + this.name + " is not available");
            }
            try {
              return this.getOrInitializeService({ instanceIdentifier: n });
            } catch (e) {
              if (t) return null;
              throw e;
            }
          }),
          (G.prototype.getComponent = function () {
            return this.component;
          }),
          (G.prototype.setComponent = function (e) {
            var t, n;
            if (e.name !== this.name)
              throw Error(
                "Mismatching Component " +
                  e.name +
                  " for Provider " +
                  this.name +
                  "."
              );
            if (this.component)
              throw Error(
                "Component for " + this.name + " has already been provided"
              );
            if (((this.component = e), this.shouldAutoInitialize())) {
              if ("EAGER" === e.instantiationMode)
                try {
                  this.getOrInitializeService({ instanceIdentifier: Y });
                } catch (e) {}
              try {
                for (
                  var r = _(this.instancesDeferred.entries()), i = r.next();
                  !i.done;
                  i = r.next()
                ) {
                  var o = y(i.value, 2),
                    a = o[0],
                    s = o[1],
                    u = this.normalizeInstanceIdentifier(a);
                  try {
                    var l = this.getOrInitializeService({
                      instanceIdentifier: u,
                    });
                    s.resolve(l);
                  } catch (e) {}
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  i && !i.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
            }
          }),
          (G.prototype.clearInstance = function (e) {
            void 0 === e && (e = Y),
              this.instancesDeferred.delete(e),
              this.instances.delete(e);
          }),
          (G.prototype.delete = function () {
            return i(this, void 0, void 0, function () {
              var t;
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = Array.from(this.instances.values())),
                      [
                        4,
                        Promise.all(
                          a(
                            a(
                              [],
                              y(
                                t
                                  .filter(function (e) {
                                    return "INTERNAL" in e;
                                  })
                                  .map(function (e) {
                                    return e.INTERNAL.delete();
                                  })
                              )
                            ),
                            y(
                              t
                                .filter(function (e) {
                                  return "_delete" in e;
                                })
                                .map(function (e) {
                                  return e._delete();
                                })
                            )
                          )
                        ),
                      ]
                    );
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          }),
          (G.prototype.isComponentSet = function () {
            return null != this.component;
          }),
          (G.prototype.isInitialized = function (e) {
            return void 0 === e && (e = Y), this.instances.has(e);
          }),
          (G.prototype.initialize = function (e) {
            var t,
              n,
              r = (e = void 0 === e ? {} : e).instanceIdentifier,
              r = void 0 === r ? Y : r,
              e = e.options,
              e = void 0 === e ? {} : e,
              i = this.normalizeInstanceIdentifier(r);
            if (this.isInitialized(i))
              throw Error(
                this.name + "(" + i + ") has already been initialized"
              );
            if (!this.isComponentSet())
              throw Error(
                "Component " + this.name + " has not been registered yet"
              );
            var o = this.getOrInitializeService({
              instanceIdentifier: i,
              options: e,
            });
            try {
              for (
                var a = _(this.instancesDeferred.entries()), s = a.next();
                !s.done;
                s = a.next()
              ) {
                var u = y(s.value, 2),
                  l = u[0],
                  u = u[1];
                i === this.normalizeInstanceIdentifier(l) && u.resolve(o);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                s && !s.done && (n = a.return) && n.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
            return o;
          }),
          (G.prototype.getOrInitializeService = function (e) {
            var t = e.instanceIdentifier,
              n = e.options,
              e = void 0 === n ? {} : n,
              r = this.instances.get(t);
            if (
              !r &&
              this.component &&
              ((r = this.component.instanceFactory(this.container, {
                instanceIdentifier: (n = t) === Y ? void 0 : n,
                options: e,
              })),
              this.instances.set(t, r),
              this.component.onInstanceCreated)
            )
              try {
                this.component.onInstanceCreated(this.container, t, r);
              } catch (e) {}
            return r || null;
          }),
          (G.prototype.normalizeInstanceIdentifier = function (e) {
            return !this.component || this.component.multipleInstances ? e : Y;
          }),
          (G.prototype.shouldAutoInitialize = function () {
            return (
              !!this.component &&
              "EXPLICIT" !== this.component.instantiationMode
            );
          }),
          G);
      function G(e, t) {
        (this.name = e),
          (this.container = t),
          (this.component = null),
          (this.instances = new Map()),
          (this.instancesDeferred = new Map());
      }
      var $,
        J =
          ((X.prototype.addComponent = function (e) {
            var t = this.getProvider(e.name);
            if (t.isComponentSet())
              throw new Error(
                "Component " +
                  e.name +
                  " has already been registered with " +
                  this.name
              );
            t.setComponent(e);
          }),
          (X.prototype.addOrOverwriteComponent = function (e) {
            this.getProvider(e.name).isComponentSet() &&
              this.providers.delete(e.name),
              this.addComponent(e);
          }),
          (X.prototype.getProvider = function (e) {
            if (this.providers.has(e)) return this.providers.get(e);
            var t = new K(e, this);
            return this.providers.set(e, t), t;
          }),
          (X.prototype.getProviders = function () {
            return Array.from(this.providers.values());
          }),
          X);
      function X(e) {
        (this.name = e), (this.providers = new Map());
      }
      ((Ot = $ = $ || {})[(Ot.DEBUG = 0)] = "DEBUG"),
        (Ot[(Ot.VERBOSE = 1)] = "VERBOSE"),
        (Ot[(Ot.INFO = 2)] = "INFO"),
        (Ot[(Ot.WARN = 3)] = "WARN"),
        (Ot[(Ot.ERROR = 4)] = "ERROR"),
        (Ot[(Ot.SILENT = 5)] = "SILENT");
      function Z(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(t < e.logLevel)) {
          var i = new Date().toISOString(),
            o = ne[t];
          if (!o)
            throw new Error(
              "Attempted to log a message with an invalid logType (value: " +
                t +
                ")"
            );
          console[o].apply(console, a(["[" + i + "]  " + e.name + ":"], n));
        }
      }
      var ee = {
          debug: $.DEBUG,
          verbose: $.VERBOSE,
          info: $.INFO,
          warn: $.WARN,
          error: $.ERROR,
          silent: $.SILENT,
        },
        te = $.INFO,
        ne =
          (((fe = {})[$.DEBUG] = "log"),
          (fe[$.VERBOSE] = "log"),
          (fe[$.INFO] = "info"),
          (fe[$.WARN] = "warn"),
          (fe[$.ERROR] = "error"),
          fe),
        re =
          (Object.defineProperty(ie.prototype, "logLevel", {
            get: function () {
              return this._logLevel;
            },
            set: function (e) {
              if (!(e in $))
                throw new TypeError(
                  'Invalid value "' + e + '" assigned to `logLevel`'
                );
              this._logLevel = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (ie.prototype.setLogLevel = function (e) {
            this._logLevel = "string" == typeof e ? ee[e] : e;
          }),
          Object.defineProperty(ie.prototype, "logHandler", {
            get: function () {
              return this._logHandler;
            },
            set: function (e) {
              if ("function" != typeof e)
                throw new TypeError(
                  "Value assigned to `logHandler` must be a function"
                );
              this._logHandler = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(ie.prototype, "userLogHandler", {
            get: function () {
              return this._userLogHandler;
            },
            set: function (e) {
              this._userLogHandler = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (ie.prototype.debug = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.DEBUG], e)),
              this._logHandler.apply(this, a([this, $.DEBUG], e));
          }),
          (ie.prototype.log = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.VERBOSE], e)),
              this._logHandler.apply(this, a([this, $.VERBOSE], e));
          }),
          (ie.prototype.info = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.INFO], e)),
              this._logHandler.apply(this, a([this, $.INFO], e));
          }),
          (ie.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.WARN], e)),
              this._logHandler.apply(this, a([this, $.WARN], e));
          }),
          (ie.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._userLogHandler &&
              this._userLogHandler.apply(this, a([this, $.ERROR], e)),
              this._logHandler.apply(this, a([this, $.ERROR], e));
          }),
          ie);
      function ie(e) {
        (this.name = e),
          (this._logLevel = te),
          (this._logHandler = Z),
          (this._userLogHandler = null);
      }
      var oe =
        ((ae.prototype.getPlatformInfoString = function () {
          return this.container
            .getProviders()
            .map(function (e) {
              if (
                (function (e) {
                  e = e.getComponent();
                  return "VERSION" === (null == e ? void 0 : e.type);
                })(e)
              ) {
                e = e.getImmediate();
                return e.library + "/" + e.version;
              }
              return null;
            })
            .filter(function (e) {
              return e;
            })
            .join(" ");
        }),
        ae);
      function ae(e) {
        this.container = e;
      }
      var se = "@firebase/app-exp",
        ue = new re("@firebase/app"),
        le =
          (((ke = {})[se] = "fire-core"),
          (ke["@firebase/app-compat"] = "fire-core-compat"),
          (ke["@firebase/analytics-exp"] = "fire-analytics"),
          (ke["@firebase/analytics-compat"] = "fire-analytics-compat"),
          (ke["@firebase/auth-exp"] = "fire-auth"),
          (ke["@firebase/auth-compat"] = "fire-auth-compat"),
          (ke["@firebase/database-exp"] = "fire-rtdb"),
          (ke["@firebase/functions-exp"] = "fire-fn"),
          (ke["@firebase/functions-compat"] = "fire-fn-compat"),
          (ke["@firebase/installations-exp"] = "fire-iid"),
          (ke["@firebase/installations-compat"] = "fire-iid-compat"),
          (ke["@firebase/messaging-exp"] = "fire-fcm"),
          (ke["@firebase/messaging-compat"] = "fire-fcm-compat"),
          (ke["@firebase/performance-exp"] = "fire-perf"),
          (ke["@firebase/performance-compat"] = "fire-perf-compat"),
          (ke["@firebase/remote-config-exp"] = "fire-rc"),
          (ke["@firebase/remote-config-compat"] = "fire-rc-compat"),
          (ke["@firebase/storage"] = "fire-gcs"),
          (ke["@firebase/storage-compat"] = "fire-gcs-compat"),
          (ke["@firebase/firestore-exp"] = "fire-fst"),
          (ke["@firebase/firestore-compat"] = "fire-fst-compat"),
          (ke["fire-js"] = "fire-js"),
          (ke["firebase-exp"] = "fire-js-all"),
          ke),
        ce = new Map(),
        he = new Map();
      function pe(e) {
        var t,
          n,
          r = e.name;
        if (!he.has(r)) {
          he.set(r, e);
          try {
            for (var i = _(ce.values()), o = i.next(); !o.done; o = i.next())
              !(function (t, n) {
                try {
                  t.container.addComponent(n);
                } catch (e) {
                  ue.debug(
                    "Component " +
                      n.name +
                      " failed to register with FirebaseApp " +
                      t.name,
                    e
                  );
                }
              })(o.value, e);
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              o && !o.done && (n = i.return) && n.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
          return 1;
        }
        ue.debug(
          "There were multiple attempts to register component " + r + "."
        );
      }
      var de,
        fe =
          (((Ot = {})["no-app"] =
            "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
          (Ot["bad-app-name"] = "Illegal App name: '{$appName}"),
          (Ot["duplicate-app"] =
            "Firebase App named '{$appName}' already exists"),
          (Ot["app-deleted"] =
            "Firebase App named '{$appName}' already deleted"),
          (Ot["invalid-app-argument"] =
            "firebase.{$appName}() takes either no argument or a Firebase App instance."),
          (Ot["invalid-log-argument"] =
            "First argument to `onLog` must be null or a function."),
          Ot),
        _e = new T("app", "Firebase", fe);
      Object.defineProperty(ye.prototype, "automaticDataCollectionEnabled", {
        get: function () {
          return this.checkDestroyed(), this._automaticDataCollectionEnabled;
        },
        set: function (e) {
          this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
        },
        enumerable: !1,
        configurable: !0,
      }),
        Object.defineProperty(ye.prototype, "name", {
          get: function () {
            return this.checkDestroyed(), this._name;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ye.prototype, "options", {
          get: function () {
            return this.checkDestroyed(), this._options;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ye.prototype, "container", {
          get: function () {
            return this._container;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ye.prototype, "isDeleted", {
          get: function () {
            return this._isDeleted;
          },
          set: function (e) {
            this._isDeleted = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (ye.prototype.checkDestroyed = function () {
          if (this.isDeleted)
            throw _e.create("app-deleted", { appName: this._name });
        });
      function ye(e, t, n) {
        var r = this;
        (this._isDeleted = !1),
          (this._options = l({}, e)),
          (this._name = t.name),
          (this._automaticDataCollectionEnabled =
            t.automaticDataCollectionEnabled),
          (this._container = n),
          this.container.addComponent(
            new z(
              "app-exp",
              function () {
                return r;
              },
              "PUBLIC"
            )
          );
      }
      function ve(e, t, n) {
        var r = null !== (i = le[e]) && void 0 !== i ? i : e;
        n && (r += "-" + n);
        var i = r.match(/\s|\//),
          e = t.match(/\s|\//);
        if (i || e) {
          n = [
            'Unable to register library "' + r + '" with version "' + t + '":',
          ];
          return (
            i &&
              n.push(
                'library name "' +
                  r +
                  '" contains illegal characters (whitespace or "/")'
              ),
            i && e && n.push("and"),
            e &&
              n.push(
                'version name "' +
                  t +
                  '" contains illegal characters (whitespace or "/")'
              ),
            void ue.warn(n.join(" "))
          );
        }
        pe(
          new z(
            r + "-version",
            function () {
              return { library: r, version: t };
            },
            "VERSION"
          )
        );
      }
      pe(
        new z(
          "platform-logger",
          function (e) {
            return new oe(e);
          },
          "PRIVATE"
        )
      ),
        ve(se, "0.0.900", de),
        ve("fire-js", "");
      var ge = "@firebase/database",
        me =
          ((we.prototype.set = function (e, t) {
            null == t
              ? this.domStorage_.removeItem(this.prefixedName_(e))
              : this.domStorage_.setItem(this.prefixedName_(e), k(t));
          }),
          (we.prototype.get = function (e) {
            e = this.domStorage_.getItem(this.prefixedName_(e));
            return null == e ? null : x(e);
          }),
          (we.prototype.remove = function (e) {
            this.domStorage_.removeItem(this.prefixedName_(e));
          }),
          (we.prototype.prefixedName_ = function (e) {
            return this.prefix_ + e;
          }),
          (we.prototype.toString = function () {
            return this.domStorage_.toString();
          }),
          we);
      function we(e) {
        (this.domStorage_ = e), (this.prefix_ = "firebase:");
      }
      var be =
        ((Ce.prototype.set = function (e, t) {
          null == t ? delete this.cache_[e] : (this.cache_[e] = t);
        }),
        (Ce.prototype.get = function (e) {
          return D(this.cache_, e) ? this.cache_[e] : null;
        }),
        (Ce.prototype.remove = function (e) {
          delete this.cache_[e];
        }),
        Ce);
      function Ce() {
        (this.cache_ = {}), (this.isInMemoryStorage = !0);
      }
      function Ee(e) {
        var t = (function (e) {
          for (var t = [], n = 0, r = 0; r < e.length; r++) {
            var i,
              o = e.charCodeAt(r);
            55296 <= o &&
              o <= 56319 &&
              ((i = o - 55296),
              g(++r < e.length, "Surrogate pair missing trail surrogate."),
              (o = 65536 + (i << 10) + (e.charCodeAt(r) - 56320))),
              o < 128
                ? (t[n++] = o)
                : (o < 2048
                    ? (t[n++] = (o >> 6) | 192)
                    : (o < 65536
                        ? (t[n++] = (o >> 12) | 224)
                        : ((t[n++] = (o >> 18) | 240),
                          (t[n++] = ((o >> 12) & 63) | 128)),
                      (t[n++] = ((o >> 6) & 63) | 128)),
                  (t[n++] = (63 & o) | 128));
          }
          return t;
        })(e);
        return (e = new F()).update(t), (e = e.digest()), h.encodeByteArray(e);
      }
      function Ie() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = "FIREBASE INTERNAL ERROR: " + Le.apply(void 0, a([], y(e)));
        Oe.error(n);
      }
      function Se(e) {
        return (
          "number" == typeof e &&
          (e != e ||
            e === Number.POSITIVE_INFINITY ||
            e === Number.NEGATIVE_INFINITY)
        );
      }
      function Te(e, t) {
        return e === t ? 0 : e < t ? -1 : 1;
      }
      function Pe(e, t) {
        if (t && e in t) return t[e];
        throw new Error("Missing required key (" + e + ") in object: " + k(t));
      }
      function Ne(e, t) {
        var n = e.length;
        if (n <= t) return [e];
        for (var r = [], i = 0; i < n; i += t)
          n < i + t ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
        return r;
      }
      var xe,
        ke = function (e) {
          try {
            if ("undefined" != typeof window && void 0 !== window[e]) {
              var t = window[e];
              return (
                t.setItem("firebase:sentinel", "cache"),
                t.removeItem("firebase:sentinel"),
                new me(t)
              );
            }
          } catch (e) {}
          return new be();
        },
        Re = ke("localStorage"),
        De = ke("sessionStorage"),
        Oe = new re("@firebase/database"),
        Ae =
          ((xe = 1),
          function () {
            return xe++;
          }),
        Le = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          for (var n = "", r = 0; r < e.length; r++) {
            var i = e[r];
            Array.isArray(i) ||
            (i && "object" == typeof i && "number" == typeof i.length)
              ? (n += Le.apply(null, i))
              : (n += "object" == typeof i ? k(i) : i),
              (n += " ");
          }
          return n;
        },
        Me = null,
        Fe = !0,
        qe = function (e, t) {
          g(
            !t || !0 === e || !1 === e,
            "Can't turn on custom loggers persistently."
          ),
            !0 === e
              ? ((Oe.logLevel = $.VERBOSE),
                (Me = Oe.log.bind(Oe)),
                t && De.set("logging_enabled", !0))
              : "function" == typeof e
              ? (Me = e)
              : ((Me = null), De.remove("logging_enabled"));
        },
        je = function () {
          for (var e, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          !0 === Fe &&
            ((Fe = !1),
            null === Me && !0 === De.get("logging_enabled") && qe(!0)),
            Me && ((e = Le.apply(null, t)), Me(e));
        },
        We = function (n) {
          return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            je.apply(void 0, a([n], y(e)));
          };
        },
        Ue = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = "FIREBASE FATAL ERROR: " + Le.apply(void 0, a([], y(e)));
          throw (Oe.error(n), new Error(n));
        },
        Be = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = "FIREBASE WARNING: " + Le.apply(void 0, a([], y(e)));
          Oe.warn(n);
        },
        Ve = "[MIN_NAME]",
        He = "[MAX_NAME]",
        ze = function (e, t) {
          if (e === t) return 0;
          if (e === Ve || t === He) return -1;
          if (t === Ve || e === He) return 1;
          var n = Ze(e),
            r = Ze(t);
          return null !== n
            ? null !== r
              ? n - r == 0
                ? e.length - t.length
                : n - r
              : -1
            : null === r && e < t
            ? -1
            : 1;
        },
        Qe = function (e) {
          if ("object" != typeof e || null === e) return k(e);
          var t,
            n = [];
          for (t in e) n.push(t);
          n.sort();
          for (var r = "{", i = 0; i < n.length; i++)
            0 !== i && (r += ","),
              (r += k(n[i])),
              (r += ":"),
              (r += Qe(e[n[i]]));
          return (r += "}");
        };
      function Ye(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
      }
      function Ke(e) {
        var t, n, r, i;
        g(!Se(e), "Invalid JSON number"),
          0 === e
            ? (t = 1 / e == -1 / (r = n = 0) ? 1 : 0)
            : ((t = e < 0),
              (r =
                (e = Math.abs(e)) >= Math.pow(2, -1022)
                  ? ((n =
                      (i = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) +
                      1023),
                    Math.round(e * Math.pow(2, 52 - i) - Math.pow(2, 52)))
                  : ((n = 0), Math.round(e / Math.pow(2, -1074)))));
        for (var o = [], a = 52; a; --a)
          o.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2));
        for (a = 11; a; --a) o.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
        o.push(t ? 1 : 0), o.reverse();
        var s = o.join(""),
          u = "";
        for (a = 0; a < 64; a += 8) {
          var l = parseInt(s.substr(a, 8), 2).toString(16);
          u += l = 1 === l.length ? "0" + l : l;
        }
        return u.toLowerCase();
      }
      function Ge(e, t) {
        return (
          "object" == typeof (t = setTimeout(e, t)) && t.unref && t.unref(), t
        );
      }
      var $e = new RegExp("^-?(0*)\\d{1,10}$"),
        Je = -2147483648,
        Xe = 2147483647,
        Ze = function (e) {
          if ($e.test(e)) {
            e = Number(e);
            if (Je <= e && e <= Xe) return e;
          }
          return null;
        },
        et = function (e) {
          try {
            e();
          } catch (t) {
            setTimeout(function () {
              var e = t.stack || "";
              throw (Be("Exception was thrown by user callback.", e), t);
            }, Math.floor(0));
          }
        },
        tt =
          ((nt.prototype.getToken = function (e) {
            return this.auth_
              ? this.auth_.getToken(e).catch(function (e) {
                  return e && "auth/token-not-initialized" === e.code
                    ? (je(
                        "Got auth/token-not-initialized error.  Treating as null token."
                      ),
                      null)
                    : Promise.reject(e);
                })
              : Promise.resolve(null);
          }),
          (nt.prototype.addTokenChangeListener = function (t) {
            this.auth_
              ? this.auth_.addAuthTokenListener(t)
              : (setTimeout(function () {
                  return t(null);
                }, 0),
                this.authProvider_.get().then(function (e) {
                  return e.addAuthTokenListener(t);
                }));
          }),
          (nt.prototype.removeTokenChangeListener = function (t) {
            this.authProvider_.get().then(function (e) {
              return e.removeAuthTokenListener(t);
            });
          }),
          (nt.prototype.notifyForInvalidToken = function () {
            var e =
              'Provided authentication credentials for the app named "' +
              this.appName_ +
              '" are invalid. This usually indicates your app was not initialized correctly. ';
            "credential" in this.firebaseOptions_
              ? (e +=
                  'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
              : "serviceAccount" in this.firebaseOptions_
              ? (e +=
                  'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
              : (e +=
                  'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
              Be(e);
          }),
          nt);
      function nt(e, t, n) {
        var r = this;
        (this.appName_ = e),
          (this.firebaseOptions_ = t),
          (this.authProvider_ = n),
          (this.auth_ = null),
          (this.auth_ = n.getImmediate({ optional: !0 })),
          this.auth_ ||
            n.get().then(function (e) {
              return (r.auth_ = e);
            });
      }
      var rt =
        ((it.prototype.getToken = function (e) {
          return Promise.resolve({ accessToken: it.EMULATOR_AUTH_TOKEN });
        }),
        (it.prototype.addTokenChangeListener = function (e) {
          e(it.EMULATOR_AUTH_TOKEN);
        }),
        (it.prototype.removeTokenChangeListener = function (e) {}),
        (it.prototype.notifyForInvalidToken = function () {}),
        (it.EMULATOR_AUTH_TOKEN = "owner"),
        it);
      function it() {}
      var ot = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
        at = "websocket",
        st = "long_polling",
        ut =
          ((lt.prototype.isCacheableHost = function () {
            return "s-" === this.internalHost.substr(0, 2);
          }),
          (lt.prototype.isCustomHost = function () {
            return (
              "firebaseio.com" !== this._domain &&
              "firebaseio-demo.com" !== this._domain
            );
          }),
          Object.defineProperty(lt.prototype, "host", {
            get: function () {
              return this._host;
            },
            set: function (e) {
              e !== this.internalHost &&
                ((this.internalHost = e),
                this.isCacheableHost() &&
                  Re.set("host:" + this._host, this.internalHost));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (lt.prototype.toString = function () {
            var e = this.toURLString();
            return (
              this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
            );
          }),
          (lt.prototype.toURLString = function () {
            var e = this.secure ? "https://" : "http://",
              t = this.includeNamespaceInQueryParams
                ? "?ns=" + this.namespace
                : "";
            return e + this.host + "/" + t;
          }),
          lt);
      function lt(e, t, n, r, i, o, a) {
        void 0 === i && (i = !1),
          void 0 === o && (o = ""),
          void 0 === a && (a = !1),
          (this.secure = t),
          (this.namespace = n),
          (this.webSocketOnly = r),
          (this.nodeAdmin = i),
          (this.persistenceKey = o),
          (this.includeNamespaceInQueryParams = a),
          (this._host = e.toLowerCase()),
          (this._domain = this._host.substr(this._host.indexOf(".") + 1)),
          (this.internalHost = Re.get("host:" + e) || this._host);
      }
      function ct(e, t, n) {
        var r;
        if (
          (g("string" == typeof t, "typeof type must == string"),
          g("object" == typeof n, "typeof params must == object"),
          t === at)
        )
          r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
        else {
          if (t !== st) throw new Error("Unknown connection type: " + t);
          r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?";
        }
        ((t = e).host !== t.internalHost ||
          t.isCustomHost() ||
          t.includeNamespaceInQueryParams) &&
          (n.ns = e.namespace);
        var i = [];
        return (
          Ye(n, function (e, t) {
            i.push(e + "=" + t);
          }),
          r + i.join("&")
        );
      }
      var ht =
        ((pt.prototype.incrementCounter = function (e, t) {
          void 0 === t && (t = 1),
            D(this.counters_, e) || (this.counters_[e] = 0),
            (this.counters_[e] += t);
        }),
        (pt.prototype.get = function () {
          return p(this.counters_);
        }),
        pt);
      function pt() {
        this.counters_ = {};
      }
      var dt = {},
        ft = {};
      function _t(e) {
        e = e.toString();
        return dt[e] || (dt[e] = new ht()), dt[e];
      }
      var yt =
        ((vt.prototype.closeAfter = function (e, t) {
          (this.closeAfterResponse = e),
            (this.onClose = t),
            this.closeAfterResponse < this.currentResponseNum &&
              (this.onClose(), (this.onClose = null));
        }),
        (vt.prototype.handleResponse = function (e, t) {
          var n = this;
          this.pendingResponses[e] = t;
          for (var r = this; this.pendingResponses[this.currentResponseNum]; )
            if (
              "break" ===
              (function () {
                var t = r.pendingResponses[r.currentResponseNum];
                delete r.pendingResponses[r.currentResponseNum];
                for (var e = 0; e < t.length; ++e)
                  !(function (e) {
                    t[e] &&
                      et(function () {
                        n.onMessage_(t[e]);
                      });
                  })(e);
                if (r.currentResponseNum === r.closeAfterResponse)
                  return (
                    r.onClose && (r.onClose(), (r.onClose = null)), "break"
                  );
                r.currentResponseNum++;
              })()
            )
              break;
        }),
        vt);
      function vt(e) {
        (this.onMessage_ = e),
          (this.pendingResponses = []),
          (this.currentResponseNum = 0),
          (this.closeAfterResponse = -1),
          (this.onClose = null);
      }
      var gt = "pLPCommand",
        mt = "pRTLPCB",
        wt =
          ((bt.prototype.open = function (e, t) {
            var n,
              r,
              i,
              a = this;
            (this.curSegmentNum = 0),
              (this.onDisconnect_ = t),
              (this.myPacketOrderer = new yt(e)),
              (this.isClosed_ = !1),
              (this.connectTimeoutTimer_ = setTimeout(function () {
                a.log_("Timed out trying to connect."),
                  a.onClosed_(),
                  (a.connectTimeoutTimer_ = null);
              }, Math.floor(3e4))),
              (n = function () {
                var e;
                a.isClosed_ ||
                  ((a.scriptTagHolder = new Ct(
                    function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      var n = y(e, 5),
                        r = n[0],
                        i = n[1],
                        o = n[2];
                      n[3], n[4];
                      if ((a.incrementIncomingBytes_(e), a.scriptTagHolder))
                        if (
                          (a.connectTimeoutTimer_ &&
                            (clearTimeout(a.connectTimeoutTimer_),
                            (a.connectTimeoutTimer_ = null)),
                          (a.everConnected_ = !0),
                          "start" === r)
                        )
                          (a.id = i), (a.password = o);
                        else {
                          if ("close" !== r)
                            throw new Error(
                              "Unrecognized command received: " + r
                            );
                          i
                            ? ((a.scriptTagHolder.sendNewPolls = !1),
                              a.myPacketOrderer.closeAfter(i, function () {
                                a.onClosed_();
                              }))
                            : a.onClosed_();
                        }
                    },
                    function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      var n = y(e, 2),
                        r = n[0],
                        n = n[1];
                      a.incrementIncomingBytes_(e),
                        a.myPacketOrderer.handleResponse(r, n);
                    },
                    function () {
                      a.onClosed_();
                    },
                    a.urlFn
                  )),
                  ((e = { start: "t" }).ser = Math.floor(1e8 * Math.random())),
                  a.scriptTagHolder.uniqueCallbackIdentifier &&
                    (e.cb = a.scriptTagHolder.uniqueCallbackIdentifier),
                  (e.v = "5"),
                  a.transportSessionId && (e.s = a.transportSessionId),
                  a.lastSessionId && (e.ls = a.lastSessionId),
                  a.applicationId && (e.p = a.applicationId),
                  "undefined" != typeof location &&
                    location.hostname &&
                    ot.test(location.hostname) &&
                    (e.r = "f"),
                  (e = a.urlFn(e)),
                  a.log_("Connecting via long-poll to " + e),
                  a.scriptTagHolder.addTag(e, function () {}));
              }),
              "complete" === document.readyState
                ? n()
                : ((r = !1),
                  (i = function () {
                    document.body
                      ? r || ((r = !0), n())
                      : setTimeout(i, Math.floor(10));
                  }),
                  document.addEventListener
                    ? (document.addEventListener("DOMContentLoaded", i, !1),
                      window.addEventListener("load", i, !1))
                    : document.attachEvent &&
                      (document.attachEvent("onreadystatechange", function () {
                        "complete" === document.readyState && i();
                      }),
                      window.attachEvent("onload", i)));
          }),
          (bt.prototype.start = function () {
            this.scriptTagHolder.startLongPoll(this.id, this.password),
              this.addDisconnectPingFrame(this.id, this.password);
          }),
          (bt.forceAllow = function () {
            bt.forceAllow_ = !0;
          }),
          (bt.forceDisallow = function () {
            bt.forceDisallow_ = !0;
          }),
          (bt.isAvailable = function () {
            return (
              !!bt.forceAllow_ ||
              !(
                bt.forceDisallow_ ||
                "undefined" == typeof document ||
                null == document.createElement ||
                ("object" == typeof window &&
                  window.chrome &&
                  window.chrome.extension &&
                  !/^chrome/.test(window.location.href)) ||
                ("object" == typeof Windows && "object" == typeof Windows.UI)
              )
            );
          }),
          (bt.prototype.markConnectionHealthy = function () {}),
          (bt.prototype.shutdown_ = function () {
            (this.isClosed_ = !0),
              this.scriptTagHolder &&
                (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
              this.myDisconnFrame &&
                (document.body.removeChild(this.myDisconnFrame),
                (this.myDisconnFrame = null)),
              this.connectTimeoutTimer_ &&
                (clearTimeout(this.connectTimeoutTimer_),
                (this.connectTimeoutTimer_ = null));
          }),
          (bt.prototype.onClosed_ = function () {
            this.isClosed_ ||
              (this.log_("Longpoll is closing itself"),
              this.shutdown_(),
              this.onDisconnect_ &&
                (this.onDisconnect_(this.everConnected_),
                (this.onDisconnect_ = null)));
          }),
          (bt.prototype.close = function () {
            this.isClosed_ ||
              (this.log_("Longpoll is being closed."), this.shutdown_());
          }),
          (bt.prototype.send = function (e) {
            e = k(e);
            (this.bytesSent += e.length),
              this.stats_.incrementCounter("bytes_sent", e.length);
            for (
              var e = (function (e) {
                  e = s(e);
                  return h.encodeByteArray(e, !0);
                })(e),
                t = Ne(e, 1840),
                n = 0;
              n < t.length;
              n++
            )
              this.scriptTagHolder.enqueueSegment(
                this.curSegmentNum,
                t.length,
                t[n]
              ),
                this.curSegmentNum++;
          }),
          (bt.prototype.addDisconnectPingFrame = function (e, t) {
            this.myDisconnFrame = document.createElement("iframe");
            var n = { dframe: "t" };
            (n.id = e),
              (n.pw = t),
              (this.myDisconnFrame.src = this.urlFn(n)),
              (this.myDisconnFrame.style.display = "none"),
              document.body.appendChild(this.myDisconnFrame);
          }),
          (bt.prototype.incrementIncomingBytes_ = function (e) {
            e = k(e).length;
            (this.bytesReceived += e),
              this.stats_.incrementCounter("bytes_received", e);
          }),
          bt);
      function bt(e, t, n, r, i) {
        (this.connId = e),
          (this.repoInfo = t),
          (this.applicationId = n),
          (this.transportSessionId = r),
          (this.lastSessionId = i),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.everConnected_ = !1),
          (this.log_ = We(e)),
          (this.stats_ = _t(t)),
          (this.urlFn = function (e) {
            return ct(t, st, e);
          });
      }
      var Ct =
        ((Et.createIFrame_ = function () {
          var t = document.createElement("iframe");
          if (((t.style.display = "none"), !document.body))
            throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
          document.body.appendChild(t);
          try {
            t.contentWindow.document || je("No IE domain setting required");
          } catch (e) {
            var n = document.domain;
            t.src =
              "javascript:void((function(){document.open();document.domain='" +
              n +
              "';document.close();})())";
          }
          return (
            t.contentDocument
              ? (t.doc = t.contentDocument)
              : t.contentWindow
              ? (t.doc = t.contentWindow.document)
              : t.document && (t.doc = t.document),
            t
          );
        }),
        (Et.prototype.close = function () {
          var e = this;
          (this.alive = !1),
            this.myIFrame &&
              ((this.myIFrame.doc.body.innerHTML = ""),
              setTimeout(function () {
                null !== e.myIFrame &&
                  (document.body.removeChild(e.myIFrame), (e.myIFrame = null));
              }, Math.floor(0)));
          var t = this.onDisconnect;
          t && ((this.onDisconnect = null), t());
        }),
        (Et.prototype.startLongPoll = function (e, t) {
          for (
            this.myID = e, this.myPW = t, this.alive = !0;
            this.newRequest_();

          );
        }),
        (Et.prototype.newRequest_ = function () {
          if (
            this.alive &&
            this.sendNewPolls &&
            this.outstandingRequests.size <
              (0 < this.pendingSegs.length ? 2 : 1)
          ) {
            this.currentSerial++;
            var e = {};
            (e.id = this.myID),
              (e.pw = this.myPW),
              (e.ser = this.currentSerial);
            for (
              var e = this.urlFn(e), t = "", n = 0;
              0 < this.pendingSegs.length;

            ) {
              if (!(this.pendingSegs[0].d.length + 30 + t.length <= 1870))
                break;
              var r = this.pendingSegs.shift(),
                t =
                  t +
                  "&seg" +
                  n +
                  "=" +
                  r.seg +
                  "&ts" +
                  n +
                  "=" +
                  r.ts +
                  "&d" +
                  n +
                  "=" +
                  r.d;
              n++;
            }
            return (e += t), this.addLongPollTag_(e, this.currentSerial), !0;
          }
          return !1;
        }),
        (Et.prototype.enqueueSegment = function (e, t, n) {
          this.pendingSegs.push({ seg: e, ts: t, d: n }),
            this.alive && this.newRequest_();
        }),
        (Et.prototype.addLongPollTag_ = function (e, t) {
          var n = this;
          this.outstandingRequests.add(t);
          function r() {
            n.outstandingRequests.delete(t), n.newRequest_();
          }
          var i = setTimeout(r, Math.floor(25e3));
          this.addTag(e, function () {
            clearTimeout(i), r();
          });
        }),
        (Et.prototype.addTag = function (e, n) {
          var r = this;
          setTimeout(function () {
            try {
              if (!r.sendNewPolls) return;
              var t = r.myIFrame.doc.createElement("script");
              (t.type = "text/javascript"),
                (t.async = !0),
                (t.src = e),
                (t.onload = t.onreadystatechange = function () {
                  var e = t.readyState;
                  (e && "loaded" !== e && "complete" !== e) ||
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    n());
                }),
                (t.onerror = function () {
                  je("Long-poll script failed to load: " + e),
                    (r.sendNewPolls = !1),
                    r.close();
                }),
                r.myIFrame.doc.body.appendChild(t);
            } catch (e) {}
          }, Math.floor(1));
        }),
        Et);
      function Et(e, t, n, r) {
        (this.onDisconnect = n),
          (this.urlFn = r),
          (this.outstandingRequests = new Set()),
          (this.pendingSegs = []),
          (this.currentSerial = Math.floor(1e8 * Math.random())),
          (this.sendNewPolls = !0),
          (this.uniqueCallbackIdentifier = Ae()),
          (window[gt + this.uniqueCallbackIdentifier] = e),
          (window[mt + this.uniqueCallbackIdentifier] = t),
          (this.myIFrame = Et.createIFrame_());
        var t = "",
          i =
            "<html><body>" +
            (t =
              this.myIFrame.src &&
              "javascript:" ===
                this.myIFrame.src.substr(0, "javascript:".length)
                ? '<script>document.domain="' + document.domain + '";</script>'
                : t) +
            "</body></html>";
        try {
          this.myIFrame.doc.open(),
            this.myIFrame.doc.write(i),
            this.myIFrame.doc.close();
        } catch (e) {
          je("frame writing exception"), e.stack && je(e.stack), je(e);
        }
      }
      var It = "";
      function St(e) {
        It = e;
      }
      var Tt = null;
      "undefined" != typeof MozWebSocket
        ? (Tt = MozWebSocket)
        : "undefined" != typeof WebSocket && (Tt = WebSocket);
      var Pt =
        ((Nt.connectionURL_ = function (e, t, n) {
          var r = { v: "5" };
          return (
            "undefined" != typeof location &&
              location.hostname &&
              ot.test(location.hostname) &&
              (r.r = "f"),
            t && (r.s = t),
            n && (r.ls = n),
            ct(e, at, r)
          );
        }),
        (Nt.prototype.open = function (t, e) {
          var n,
            r = this;
          (this.onDisconnect = e),
            (this.onMessage = t),
            this.log_("Websocket connecting to " + this.connURL),
            (this.everConnected_ = !1),
            Re.set("previous_websocket_failure", !0);
          try {
            b() ||
              ((n = {
                headers: { "X-Firebase-GMPID": this.applicationId || "" },
              }),
              (this.mySock = new Tt(this.connURL, [], n)));
          } catch (e) {
            this.log_("Error instantiating WebSocket.");
            t = e.message || e.data;
            return t && this.log_(t), void this.onClosed_();
          }
          (this.mySock.onopen = function () {
            r.log_("Websocket connected."), (r.everConnected_ = !0);
          }),
            (this.mySock.onclose = function () {
              r.log_("Websocket connection was disconnected."),
                (r.mySock = null),
                r.onClosed_();
            }),
            (this.mySock.onmessage = function (e) {
              r.handleIncomingFrame(e);
            }),
            (this.mySock.onerror = function (e) {
              r.log_("WebSocket error.  Closing connection.");
              e = e.message || e.data;
              e && r.log_(e), r.onClosed_();
            });
        }),
        (Nt.prototype.start = function () {}),
        (Nt.forceDisallow = function () {
          Nt.forceDisallow_ = !0;
        }),
        (Nt.isAvailable = function () {
          var e,
            t = !1;
          return (
            "undefined" != typeof navigator &&
              navigator.userAgent &&
              (e = navigator.userAgent.match(
                /Android ([0-9]{0,}\.[0-9]{0,})/
              )) &&
              1 < e.length &&
              parseFloat(e[1]) < 4.4 &&
              (t = !0),
            !t && null !== Tt && !Nt.forceDisallow_
          );
        }),
        (Nt.previouslyFailed = function () {
          return (
            Re.isInMemoryStorage || !0 === Re.get("previous_websocket_failure")
          );
        }),
        (Nt.prototype.markConnectionHealthy = function () {
          Re.remove("previous_websocket_failure");
        }),
        (Nt.prototype.appendFrame_ = function (e) {
          this.frames.push(e),
            this.frames.length === this.totalFrames &&
              ((e = this.frames.join("")),
              (this.frames = null),
              (e = x(e)),
              this.onMessage(e));
        }),
        (Nt.prototype.handleNewFrameCount_ = function (e) {
          (this.totalFrames = e), (this.frames = []);
        }),
        (Nt.prototype.extractFrameCount_ = function (e) {
          if (
            (g(null === this.frames, "We already have a frame buffer"),
            e.length <= 6)
          ) {
            var t = Number(e);
            if (!isNaN(t)) return this.handleNewFrameCount_(t), null;
          }
          return this.handleNewFrameCount_(1), e;
        }),
        (Nt.prototype.handleIncomingFrame = function (e) {
          null !== this.mySock &&
            ((e = e.data),
            (this.bytesReceived += e.length),
            this.stats_.incrementCounter("bytes_received", e.length),
            this.resetKeepAlive(),
            null !== this.frames
              ? this.appendFrame_(e)
              : null !== (e = this.extractFrameCount_(e)) &&
                this.appendFrame_(e));
        }),
        (Nt.prototype.send = function (e) {
          this.resetKeepAlive();
          e = k(e);
          (this.bytesSent += e.length),
            this.stats_.incrementCounter("bytes_sent", e.length);
          var t = Ne(e, 16384);
          1 < t.length && this.sendString_(String(t.length));
          for (var n = 0; n < t.length; n++) this.sendString_(t[n]);
        }),
        (Nt.prototype.shutdown_ = function () {
          (this.isClosed_ = !0),
            this.keepaliveTimer &&
              (clearInterval(this.keepaliveTimer),
              (this.keepaliveTimer = null)),
            this.mySock && (this.mySock.close(), (this.mySock = null));
        }),
        (Nt.prototype.onClosed_ = function () {
          this.isClosed_ ||
            (this.log_("WebSocket is closing itself"),
            this.shutdown_(),
            this.onDisconnect &&
              (this.onDisconnect(this.everConnected_),
              (this.onDisconnect = null)));
        }),
        (Nt.prototype.close = function () {
          this.isClosed_ ||
            (this.log_("WebSocket is being closed"), this.shutdown_());
        }),
        (Nt.prototype.resetKeepAlive = function () {
          var e = this;
          clearInterval(this.keepaliveTimer),
            (this.keepaliveTimer = setInterval(function () {
              e.mySock && e.sendString_("0"), e.resetKeepAlive();
            }, Math.floor(45e3)));
        }),
        (Nt.prototype.sendString_ = function (e) {
          try {
            this.mySock.send(e);
          } catch (e) {
            this.log_(
              "Exception thrown from WebSocket.send():",
              e.message || e.data,
              "Closing connection."
            ),
              setTimeout(this.onClosed_.bind(this), 0);
          }
        }),
        (Nt.responsesRequiredToBeHealthy = 2),
        (Nt.healthyTimeout = 3e4),
        Nt);
      function Nt(e, t, n, r, i) {
        (this.connId = e),
          (this.applicationId = n),
          (this.keepaliveTimer = null),
          (this.frames = null),
          (this.totalFrames = 0),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.log_ = We(this.connId)),
          (this.stats_ = _t(t)),
          (this.connURL = Nt.connectionURL_(t, r, i)),
          (this.nodeAdmin = t.nodeAdmin);
      }
      var xt =
        (Object.defineProperty(kt, "ALL_TRANSPORTS", {
          get: function () {
            return [wt, Pt];
          },
          enumerable: !1,
          configurable: !0,
        }),
        (kt.prototype.initTransports_ = function (e) {
          var t,
            n,
            r = Pt && Pt.isAvailable(),
            i = r && !Pt.previouslyFailed();
          if (
            (e.webSocketOnly &&
              (r ||
                Be(
                  "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                ),
              (i = !0)),
            i)
          )
            this.transports_ = [Pt];
          else {
            var o = (this.transports_ = []);
            try {
              for (
                var a = _(kt.ALL_TRANSPORTS), s = a.next();
                !s.done;
                s = a.next()
              ) {
                var u = s.value;
                u && u.isAvailable() && o.push(u);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                s && !s.done && (n = a.return) && n.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
          }
        }),
        (kt.prototype.initialTransport = function () {
          if (0 < this.transports_.length) return this.transports_[0];
          throw new Error("No transports available");
        }),
        (kt.prototype.upgradeTransport = function () {
          return 1 < this.transports_.length ? this.transports_[1] : null;
        }),
        kt);
      function kt(e) {
        this.initTransports_(e);
      }
      var Rt =
        ((Dt.prototype.start_ = function () {
          var e = this,
            t = this.transportManager_.initialTransport();
          (this.conn_ = new t(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            void 0,
            this.lastSessionId
          )),
            (this.primaryResponsesRequired_ =
              t.responsesRequiredToBeHealthy || 0);
          var n = this.connReceiver_(this.conn_),
            r = this.disconnReceiver_(this.conn_);
          (this.tx_ = this.conn_),
            (this.rx_ = this.conn_),
            (this.secondaryConn_ = null),
            (this.isHealthy_ = !1),
            setTimeout(function () {
              e.conn_ && e.conn_.open(n, r);
            }, Math.floor(0));
          t = t.healthyTimeout || 0;
          0 < t &&
            (this.healthyTimeout_ = Ge(function () {
              (e.healthyTimeout_ = null),
                e.isHealthy_ ||
                  (e.conn_ && 102400 < e.conn_.bytesReceived
                    ? (e.log_(
                        "Connection exceeded healthy timeout but has received " +
                          e.conn_.bytesReceived +
                          " bytes.  Marking connection healthy."
                      ),
                      (e.isHealthy_ = !0),
                      e.conn_.markConnectionHealthy())
                    : e.conn_ && 10240 < e.conn_.bytesSent
                    ? e.log_(
                        "Connection exceeded healthy timeout but has sent " +
                          e.conn_.bytesSent +
                          " bytes.  Leaving connection alive."
                      )
                    : (e.log_("Closing unhealthy connection after timeout."),
                      e.close()));
            }, Math.floor(t)));
        }),
        (Dt.prototype.nextTransportId_ = function () {
          return "c:" + this.id + ":" + this.connectionCount++;
        }),
        (Dt.prototype.disconnReceiver_ = function (t) {
          var n = this;
          return function (e) {
            t === n.conn_
              ? n.onConnectionLost_(e)
              : t === n.secondaryConn_
              ? (n.log_("Secondary connection lost."),
                n.onSecondaryConnectionLost_())
              : n.log_("closing an old connection");
          };
        }),
        (Dt.prototype.connReceiver_ = function (t) {
          var n = this;
          return function (e) {
            2 !== n.state_ &&
              (t === n.rx_
                ? n.onPrimaryMessageReceived_(e)
                : t === n.secondaryConn_
                ? n.onSecondaryMessageReceived_(e)
                : n.log_("message on old connection"));
          };
        }),
        (Dt.prototype.sendRequest = function (e) {
          e = { t: "d", d: e };
          this.sendData_(e);
        }),
        (Dt.prototype.tryCleanupConnection = function () {
          this.tx_ === this.secondaryConn_ &&
            this.rx_ === this.secondaryConn_ &&
            (this.log_(
              "cleaning up and promoting a connection: " +
                this.secondaryConn_.connId
            ),
            (this.conn_ = this.secondaryConn_),
            (this.secondaryConn_ = null));
        }),
        (Dt.prototype.onSecondaryControl_ = function (e) {
          "t" in e &&
            ("a" === (e = e.t)
              ? this.upgradeIfSecondaryHealthy_()
              : "r" === e
              ? (this.log_("Got a reset on secondary, closing it"),
                this.secondaryConn_.close(),
                (this.tx_ !== this.secondaryConn_ &&
                  this.rx_ !== this.secondaryConn_) ||
                  this.close())
              : "o" === e &&
                (this.log_("got pong on secondary."),
                this.secondaryResponsesRequired_--,
                this.upgradeIfSecondaryHealthy_()));
        }),
        (Dt.prototype.onSecondaryMessageReceived_ = function (e) {
          var t = Pe("t", e),
            e = Pe("d", e);
          if ("c" === t) this.onSecondaryControl_(e);
          else {
            if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
            this.pendingDataMessages.push(e);
          }
        }),
        (Dt.prototype.upgradeIfSecondaryHealthy_ = function () {
          this.secondaryResponsesRequired_ <= 0
            ? (this.log_("Secondary connection is healthy."),
              (this.isHealthy_ = !0),
              this.secondaryConn_.markConnectionHealthy(),
              this.proceedWithUpgrade_())
            : (this.log_("sending ping on secondary."),
              this.secondaryConn_.send({ t: "c", d: { t: "p", d: {} } }));
        }),
        (Dt.prototype.proceedWithUpgrade_ = function () {
          this.secondaryConn_.start(),
            this.log_("sending client ack on secondary"),
            this.secondaryConn_.send({ t: "c", d: { t: "a", d: {} } }),
            this.log_("Ending transmission on primary"),
            this.conn_.send({ t: "c", d: { t: "n", d: {} } }),
            (this.tx_ = this.secondaryConn_),
            this.tryCleanupConnection();
        }),
        (Dt.prototype.onPrimaryMessageReceived_ = function (e) {
          var t = Pe("t", e),
            e = Pe("d", e);
          "c" === t ? this.onControl_(e) : "d" === t && this.onDataMessage_(e);
        }),
        (Dt.prototype.onDataMessage_ = function (e) {
          this.onPrimaryResponse_(), this.onMessage_(e);
        }),
        (Dt.prototype.onPrimaryResponse_ = function () {
          this.isHealthy_ ||
            (this.primaryResponsesRequired_--,
            this.primaryResponsesRequired_ <= 0 &&
              (this.log_("Primary connection is healthy."),
              (this.isHealthy_ = !0),
              this.conn_.markConnectionHealthy()));
        }),
        (Dt.prototype.onControl_ = function (e) {
          var t = Pe("t", e);
          if ("d" in e) {
            e = e.d;
            if ("h" === t) this.onHandshake_(e);
            else if ("n" === t) {
              this.log_("recvd end transmission on primary"),
                (this.rx_ = this.secondaryConn_);
              for (var n = 0; n < this.pendingDataMessages.length; ++n)
                this.onDataMessage_(this.pendingDataMessages[n]);
              (this.pendingDataMessages = []), this.tryCleanupConnection();
            } else
              "s" === t
                ? this.onConnectionShutdown_(e)
                : "r" === t
                ? this.onReset_(e)
                : "e" === t
                ? Ie("Server Error: " + e)
                : "o" === t
                ? (this.log_("got pong on primary."),
                  this.onPrimaryResponse_(),
                  this.sendPingOnPrimaryIfNecessary_())
                : Ie("Unknown control packet command: " + t);
          }
        }),
        (Dt.prototype.onHandshake_ = function (e) {
          var t = e.ts,
            n = e.v,
            r = e.h;
          (this.sessionId = e.s),
            (this.repoInfo_.host = r),
            0 === this.state_ &&
              (this.conn_.start(),
              this.onConnectionEstablished_(this.conn_, t),
              "5" !== n && Be("Protocol version mismatch detected"),
              this.tryStartUpgrade_());
        }),
        (Dt.prototype.tryStartUpgrade_ = function () {
          var e = this.transportManager_.upgradeTransport();
          e && this.startUpgrade_(e);
        }),
        (Dt.prototype.startUpgrade_ = function (e) {
          var t = this;
          (this.secondaryConn_ = new e(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            this.sessionId
          )),
            (this.secondaryResponsesRequired_ =
              e.responsesRequiredToBeHealthy || 0);
          var n = this.connReceiver_(this.secondaryConn_),
            e = this.disconnReceiver_(this.secondaryConn_);
          this.secondaryConn_.open(n, e),
            Ge(function () {
              t.secondaryConn_ &&
                (t.log_("Timed out trying to upgrade."),
                t.secondaryConn_.close());
            }, Math.floor(6e4));
        }),
        (Dt.prototype.onReset_ = function (e) {
          this.log_("Reset packet received.  New host: " + e),
            (this.repoInfo_.host = e),
            1 === this.state_
              ? this.close()
              : (this.closeConnections_(), this.start_());
        }),
        (Dt.prototype.onConnectionEstablished_ = function (e, t) {
          var n = this;
          this.log_("Realtime connection established."),
            (this.conn_ = e),
            (this.state_ = 1),
            this.onReady_ &&
              (this.onReady_(t, this.sessionId), (this.onReady_ = null)),
            0 === this.primaryResponsesRequired_
              ? (this.log_("Primary connection is healthy."),
                (this.isHealthy_ = !0))
              : Ge(function () {
                  n.sendPingOnPrimaryIfNecessary_();
                }, Math.floor(5e3));
        }),
        (Dt.prototype.sendPingOnPrimaryIfNecessary_ = function () {
          this.isHealthy_ ||
            1 !== this.state_ ||
            (this.log_("sending ping on primary."),
            this.sendData_({ t: "c", d: { t: "p", d: {} } }));
        }),
        (Dt.prototype.onSecondaryConnectionLost_ = function () {
          var e = this.secondaryConn_;
          (this.secondaryConn_ = null),
            (this.tx_ !== e && this.rx_ !== e) || this.close();
        }),
        (Dt.prototype.onConnectionLost_ = function (e) {
          (this.conn_ = null),
            e || 0 !== this.state_
              ? 1 === this.state_ && this.log_("Realtime connection lost.")
              : (this.log_("Realtime connection failed."),
                this.repoInfo_.isCacheableHost() &&
                  (Re.remove("host:" + this.repoInfo_.host),
                  (this.repoInfo_.internalHost = this.repoInfo_.host))),
            this.close();
        }),
        (Dt.prototype.onConnectionShutdown_ = function (e) {
          this.log_("Connection shutdown command received. Shutting down..."),
            this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
            (this.onDisconnect_ = null),
            this.close();
        }),
        (Dt.prototype.sendData_ = function (e) {
          if (1 !== this.state_) throw "Connection is not connected";
          this.tx_.send(e);
        }),
        (Dt.prototype.close = function () {
          2 !== this.state_ &&
            (this.log_("Closing realtime connection."),
            (this.state_ = 2),
            this.closeConnections_(),
            this.onDisconnect_ &&
              (this.onDisconnect_(), (this.onDisconnect_ = null)));
        }),
        (Dt.prototype.closeConnections_ = function () {
          this.log_("Shutting down all connections"),
            this.conn_ && (this.conn_.close(), (this.conn_ = null)),
            this.secondaryConn_ &&
              (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
            this.healthyTimeout_ &&
              (clearTimeout(this.healthyTimeout_),
              (this.healthyTimeout_ = null));
        }),
        Dt);
      function Dt(e, t, n, r, i, o, a, s) {
        (this.id = e),
          (this.repoInfo_ = t),
          (this.applicationId_ = n),
          (this.onMessage_ = r),
          (this.onReady_ = i),
          (this.onDisconnect_ = o),
          (this.onKill_ = a),
          (this.lastSessionId = s),
          (this.connectionCount = 0),
          (this.pendingDataMessages = []),
          (this.state_ = 0),
          (this.log_ = We("c:" + this.id + ":")),
          (this.transportManager_ = new xt(t)),
          this.log_("Connection created"),
          this.start_();
      }
      var Ot =
        ((At.prototype.put = function (e, t, n, r) {}),
        (At.prototype.merge = function (e, t, n, r) {}),
        (At.prototype.refreshAuthToken = function (e) {}),
        (At.prototype.onDisconnectPut = function (e, t, n) {}),
        (At.prototype.onDisconnectMerge = function (e, t, n) {}),
        (At.prototype.onDisconnectCancel = function (e, t) {}),
        (At.prototype.reportStats = function (e) {}),
        At);
      function At() {}
      (Lt.prototype.trigger = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        if (Array.isArray(this.listeners_[e]))
          for (var r = a([], y(this.listeners_[e])), i = 0; i < r.length; i++)
            r[i].callback.apply(r[i].context, t);
      }),
        (Lt.prototype.on = function (e, t, n) {
          this.validateEventType_(e),
            (this.listeners_[e] = this.listeners_[e] || []),
            this.listeners_[e].push({ callback: t, context: n });
          e = this.getInitialEvent(e);
          e && t.apply(n, e);
        }),
        (Lt.prototype.off = function (e, t, n) {
          this.validateEventType_(e);
          for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
            if (r[i].callback === t && (!n || n === r[i].context))
              return void r.splice(i, 1);
        }),
        (Lt.prototype.validateEventType_ = function (t) {
          g(
            this.allowedEvents_.find(function (e) {
              return e === t;
            }),
            "Unknown event: " + t
          );
        }),
        (fe = Lt);
      function Lt(e) {
        (this.allowedEvents_ = e),
          (this.listeners_ = {}),
          g(Array.isArray(e) && 0 < e.length, "Requires a non-empty array");
      }
      var Mt,
        Ft =
          (n(qt, (Mt = fe)),
          (qt.getInstance = function () {
            return new qt();
          }),
          (qt.prototype.getInitialEvent = function (e) {
            return (
              g("online" === e, "Unknown event type: " + e), [this.online_]
            );
          }),
          (qt.prototype.currentlyOnline = function () {
            return this.online_;
          }),
          qt);
      function qt() {
        var e = Mt.call(this, ["online"]) || this;
        return (
          (e.online_ = !0),
          "undefined" == typeof window ||
            void 0 === window.addEventListener ||
            w() ||
            (window.addEventListener(
              "online",
              function () {
                e.online_ || ((e.online_ = !0), e.trigger("online", !0));
              },
              !1
            ),
            window.addEventListener(
              "offline",
              function () {
                e.online_ && ((e.online_ = !1), e.trigger("online", !1));
              },
              !1
            )),
          e
        );
      }
      var jt = 32,
        Wt = 768,
        Ut =
          ((Bt.prototype.toString = function () {
            for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++)
              "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
            return e || "/";
          }),
          Bt);
      function Bt(e, t) {
        if (void 0 === t) {
          this.pieces_ = e.split("/");
          for (var n = 0, r = 0; r < this.pieces_.length; r++)
            0 < this.pieces_[r].length &&
              ((this.pieces_[n] = this.pieces_[r]), n++);
          (this.pieces_.length = n), (this.pieceNum_ = 0);
        } else (this.pieces_ = e), (this.pieceNum_ = t);
      }
      function Vt() {
        return new Ut("");
      }
      function Ht(e) {
        return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_];
      }
      function zt(e) {
        return e.pieces_.length - e.pieceNum_;
      }
      function Qt(e) {
        var t = e.pieceNum_;
        return t < e.pieces_.length && t++, new Ut(e.pieces_, t);
      }
      function Yt(e) {
        return e.pieceNum_ < e.pieces_.length
          ? e.pieces_[e.pieces_.length - 1]
          : null;
      }
      function Kt(e, t) {
        return void 0 === t && (t = 0), e.pieces_.slice(e.pieceNum_ + t);
      }
      function Gt(e) {
        if (e.pieceNum_ >= e.pieces_.length) return null;
        for (var t = [], n = e.pieceNum_; n < e.pieces_.length - 1; n++)
          t.push(e.pieces_[n]);
        return new Ut(t, 0);
      }
      function $t(e, t) {
        for (var n = [], r = e.pieceNum_; r < e.pieces_.length; r++)
          n.push(e.pieces_[r]);
        if (t instanceof Ut)
          for (r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r]);
        else
          for (var i = t.split("/"), r = 0; r < i.length; r++)
            0 < i[r].length && n.push(i[r]);
        return new Ut(n, 0);
      }
      function Jt(e) {
        return e.pieceNum_ >= e.pieces_.length;
      }
      function Xt(e, t) {
        var n = Ht(e),
          r = Ht(t);
        if (null === n) return t;
        if (n === r) return Xt(Qt(e), Qt(t));
        throw new Error(
          "INTERNAL ERROR: innerPath (" +
            t +
            ") is not within outerPath (" +
            e +
            ")"
        );
      }
      function Zt(e, t) {
        for (
          var n = Kt(e, 0), r = Kt(t, 0), i = 0;
          i < n.length && i < r.length;
          i++
        ) {
          var o = ze(n[i], r[i]);
          if (0 !== o) return o;
        }
        return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
      }
      function en(e, t) {
        if (zt(e) !== zt(t)) return !1;
        for (
          var n = e.pieceNum_, r = t.pieceNum_;
          n <= e.pieces_.length;
          n++, r++
        )
          if (e.pieces_[n] !== t.pieces_[r]) return !1;
        return !0;
      }
      function tn(e, t) {
        var n = e.pieceNum_,
          r = t.pieceNum_;
        if (zt(e) > zt(t)) return !1;
        for (; n < e.pieces_.length; ) {
          if (e.pieces_[n] !== t.pieces_[r]) return !1;
          ++n, ++r;
        }
        return !0;
      }
      var nn = function (e, t) {
        (this.errorPrefix_ = t),
          (this.parts_ = Kt(e, 0)),
          (this.byteLength_ = Math.max(1, this.parts_.length));
        for (var n = 0; n < this.parts_.length; n++)
          this.byteLength_ += V(this.parts_[n]);
        rn(this);
      };
      function rn(e) {
        if (e.byteLength_ > Wt)
          throw new Error(
            e.errorPrefix_ +
              "has a key path longer than " +
              Wt +
              " bytes (" +
              e.byteLength_ +
              ")."
          );
        if (e.parts_.length > jt)
          throw new Error(
            e.errorPrefix_ +
              "path specified exceeds the maximum depth that can be written (" +
              jt +
              ") or object contains a cycle " +
              on(e)
          );
      }
      function on(e) {
        return 0 === e.parts_.length
          ? ""
          : "in property '" + e.parts_.join(".") + "'";
      }
      var an,
        sn =
          (n(un, (an = fe)),
          (un.getInstance = function () {
            return new un();
          }),
          (un.prototype.getInitialEvent = function (e) {
            return (
              g("visible" === e, "Unknown event type: " + e), [this.visible_]
            );
          }),
          un);
      function un() {
        var t,
          e,
          n = an.call(this, ["visible"]) || this;
        return (
          "undefined" != typeof document &&
            void 0 !== document.addEventListener &&
            (void 0 !== document.hidden
              ? ((e = "visibilitychange"), (t = "hidden"))
              : void 0 !== document.mozHidden
              ? ((e = "mozvisibilitychange"), (t = "mozHidden"))
              : void 0 !== document.msHidden
              ? ((e = "msvisibilitychange"), (t = "msHidden"))
              : void 0 !== document.webkitHidden &&
                ((e = "webkitvisibilitychange"), (t = "webkitHidden"))),
          (n.visible_ = !0),
          e &&
            document.addEventListener(
              e,
              function () {
                var e = !document[t];
                e !== n.visible_ && ((n.visible_ = e), n.trigger("visible", e));
              },
              !1
            ),
          n
        );
      }
      var ln,
        cn = 1e3,
        hn = 3e5,
        pn =
          (n(dn, (ln = Ot)),
          (dn.prototype.sendRequest = function (e, t, n) {
            var r = ++this.requestNumber_,
              t = { r: r, a: e, b: t };
            this.log_(k(t)),
              g(
                this.connected_,
                "sendRequest call when we're not connected not allowed."
              ),
              this.realtime_.sendRequest(t),
              n && (this.requestCBHash_[r] = n);
          }),
          (dn.prototype.get = function (e) {
            var n = this,
              r = new f(),
              i = { p: e._path.toString(), q: e._queryObject },
              t = {
                action: "g",
                request: i,
                onComplete: function (e) {
                  var t = e.d;
                  "ok" === e.s
                    ? (n.onDataUpdate_(i.p, t, !1, null), r.resolve(t))
                    : r.reject(t);
                },
              };
            this.outstandingGets_.push(t), this.outstandingGetCount_++;
            var o = this.outstandingGets_.length - 1;
            return (
              this.connected_ ||
                setTimeout(function () {
                  var e = n.outstandingGets_[o];
                  void 0 !== e &&
                    t === e &&
                    (delete n.outstandingGets_[o],
                    n.outstandingGetCount_--,
                    0 === n.outstandingGetCount_ && (n.outstandingGets_ = []),
                    n.log_("get " + o + " timed out on connection"),
                    r.reject(new Error("Client is offline.")));
                }, 3e3),
              this.connected_ && this.sendGet_(o),
              r.promise
            );
          }),
          (dn.prototype.listen = function (e, t, n, r) {
            var i = e._queryIdentifier,
              o = e._path.toString();
            this.log_("Listen called for " + o + " " + i),
              this.listens.has(o) || this.listens.set(o, new Map()),
              g(
                e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
                "listen() called for non-default but complete query"
              ),
              g(
                !this.listens.get(o).has(i),
                "listen() called twice for same path/queryId."
              );
            n = { onComplete: r, hashFn: t, query: e, tag: n };
            this.listens.get(o).set(i, n),
              this.connected_ && this.sendListen_(n);
          }),
          (dn.prototype.sendGet_ = function (t) {
            var n = this,
              r = this.outstandingGets_[t];
            this.sendRequest("g", r.request, function (e) {
              delete n.outstandingGets_[t],
                n.outstandingGetCount_--,
                0 === n.outstandingGetCount_ && (n.outstandingGets_ = []),
                r.onComplete && r.onComplete(e);
            });
          }),
          (dn.prototype.sendListen_ = function (r) {
            var i = this,
              o = r.query,
              a = o._path.toString(),
              s = o._queryIdentifier;
            this.log_("Listen on " + a + " for " + s);
            var e = { p: a };
            r.tag && ((e.q = o._queryObject), (e.t = r.tag)),
              (e.h = r.hashFn()),
              this.sendRequest("q", e, function (e) {
                var t = e.d,
                  n = e.s;
                dn.warnOnListenWarnings_(t, o),
                  (i.listens.get(a) && i.listens.get(a).get(s)) === r &&
                    (i.log_("listen response", e),
                    "ok" !== n && i.removeListen_(a, s),
                    r.onComplete && r.onComplete(n, t));
              });
          }),
          (dn.warnOnListenWarnings_ = function (e, t) {
            e &&
              "object" == typeof e &&
              D(e, "w") &&
              ((e = O(e, "w")),
              Array.isArray(e) &&
                ~e.indexOf("no_index") &&
                ((e =
                  '".indexOn": "' + t._queryParams.getIndex().toString() + '"'),
                (t = t._path.toString()),
                Be(
                  "Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " +
                    e +
                    " at " +
                    t +
                    " to your security rules for better performance."
                )));
          }),
          (dn.prototype.refreshAuthToken = function (e) {
            (this.authToken_ = e),
              this.log_("Auth token refreshed"),
              this.authToken_
                ? this.tryAuth()
                : this.connected_ &&
                  this.sendRequest("unauth", {}, function () {}),
              this.reduceReconnectDelayIfAdminCredential_(e);
          }),
          (dn.prototype.reduceReconnectDelayIfAdminCredential_ = function (e) {
            ((e && 40 === e.length) ||
              (function (e) {
                e = R(e).claims;
                return "object" == typeof e && !0 === e.admin;
              })(e)) &&
              (this.log_(
                "Admin auth credential detected.  Reducing max reconnect time."
              ),
              (this.maxReconnectDelay_ = 3e4));
          }),
          (dn.prototype.tryAuth = function () {
            var n,
              e,
              t,
              r = this;
            this.connected_ &&
              this.authToken_ &&
              ((e = (function (e) {
                e = R(e).claims;
                return !!e && "object" == typeof e && e.hasOwnProperty("iat");
              })((n = this.authToken_))
                ? "auth"
                : "gauth"),
              (t = { cred: n }),
              null === this.authOverride_
                ? (t.noauth = !0)
                : "object" == typeof this.authOverride_ &&
                  (t.authvar = this.authOverride_),
              this.sendRequest(e, t, function (e) {
                var t = e.s,
                  e = e.d || "error";
                r.authToken_ === n &&
                  ("ok" === t
                    ? (r.invalidAuthTokenCount_ = 0)
                    : r.onAuthRevoked_(t, e));
              }));
          }),
          (dn.prototype.unlisten = function (e, t) {
            var n = e._path.toString(),
              r = e._queryIdentifier;
            this.log_("Unlisten called for " + n + " " + r),
              g(
                e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
                "unlisten() called for non-default but complete query"
              ),
              this.removeListen_(n, r) &&
                this.connected_ &&
                this.sendUnlisten_(n, r, e._queryObject, t);
          }),
          (dn.prototype.sendUnlisten_ = function (e, t, n, r) {
            this.log_("Unlisten on " + e + " for " + t);
            e = { p: e };
            r && ((e.q = n), (e.t = r)), this.sendRequest("n", e);
          }),
          (dn.prototype.onDisconnectPut = function (e, t, n) {
            this.connected_
              ? this.sendOnDisconnect_("o", e, t, n)
              : this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "o",
                  data: t,
                  onComplete: n,
                });
          }),
          (dn.prototype.onDisconnectMerge = function (e, t, n) {
            this.connected_
              ? this.sendOnDisconnect_("om", e, t, n)
              : this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "om",
                  data: t,
                  onComplete: n,
                });
          }),
          (dn.prototype.onDisconnectCancel = function (e, t) {
            this.connected_
              ? this.sendOnDisconnect_("oc", e, null, t)
              : this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "oc",
                  data: null,
                  onComplete: t,
                });
          }),
          (dn.prototype.sendOnDisconnect_ = function (e, t, n, r) {
            n = { p: t, d: n };
            this.log_("onDisconnect " + e, n),
              this.sendRequest(e, n, function (e) {
                r &&
                  setTimeout(function () {
                    r(e.s, e.d);
                  }, Math.floor(0));
              });
          }),
          (dn.prototype.put = function (e, t, n, r) {
            this.putInternal("p", e, t, n, r);
          }),
          (dn.prototype.merge = function (e, t, n, r) {
            this.putInternal("m", e, t, n, r);
          }),
          (dn.prototype.putInternal = function (e, t, n, r, i) {
            n = { p: t, d: n };
            void 0 !== i && (n.h = i),
              this.outstandingPuts_.push({
                action: e,
                request: n,
                onComplete: r,
              }),
              this.outstandingPutCount_++;
            r = this.outstandingPuts_.length - 1;
            this.connected_
              ? this.sendPut_(r)
              : this.log_("Buffering put: " + t);
          }),
          (dn.prototype.sendPut_ = function (t) {
            var n = this,
              r = this.outstandingPuts_[t].action,
              e = this.outstandingPuts_[t].request,
              i = this.outstandingPuts_[t].onComplete;
            (this.outstandingPuts_[t].queued = this.connected_),
              this.sendRequest(r, e, function (e) {
                n.log_(r + " response", e),
                  delete n.outstandingPuts_[t],
                  n.outstandingPutCount_--,
                  0 === n.outstandingPutCount_ && (n.outstandingPuts_ = []),
                  i && i(e.s, e.d);
              });
          }),
          (dn.prototype.reportStats = function (e) {
            var t = this;
            this.connected_ &&
              ((e = { c: e }),
              this.log_("reportStats", e),
              this.sendRequest("s", e, function (e) {
                "ok" !== e.s &&
                  ((e = e.d),
                  t.log_("reportStats", "Error sending stats: " + e));
              }));
          }),
          (dn.prototype.onDataMessage_ = function (e) {
            if ("r" in e) {
              this.log_("from server: " + k(e));
              var t = e.r,
                n = this.requestCBHash_[t];
              n && (delete this.requestCBHash_[t], n(e.b));
            } else {
              if ("error" in e)
                throw "A server-side error has occurred: " + e.error;
              "a" in e && this.onDataPush_(e.a, e.b);
            }
          }),
          (dn.prototype.onDataPush_ = function (e, t) {
            this.log_("handleServerMessage", e, t),
              "d" === e
                ? this.onDataUpdate_(t.p, t.d, !1, t.t)
                : "m" === e
                ? this.onDataUpdate_(t.p, t.d, !0, t.t)
                : "c" === e
                ? this.onListenRevoked_(t.p, t.q)
                : "ac" === e
                ? this.onAuthRevoked_(t.s, t.d)
                : "sd" === e
                ? this.onSecurityDebugPacket_(t)
                : Ie(
                    "Unrecognized action received from server: " +
                      k(e) +
                      "\nAre you using the latest client?"
                  );
          }),
          (dn.prototype.onReady_ = function (e, t) {
            this.log_("connection ready"),
              (this.connected_ = !0),
              (this.lastConnectionEstablishedTime_ = new Date().getTime()),
              this.handleTimestamp_(e),
              (this.lastSessionId = t),
              this.firstConnection_ && this.sendConnectStats_(),
              this.restoreState_(),
              (this.firstConnection_ = !1),
              this.onConnectStatus_(!0);
          }),
          (dn.prototype.scheduleConnect_ = function (e) {
            var t = this;
            g(
              !this.realtime_,
              "Scheduling a connect when we're already connected/ing?"
            ),
              this.establishConnectionTimer_ &&
                clearTimeout(this.establishConnectionTimer_),
              (this.establishConnectionTimer_ = setTimeout(function () {
                (t.establishConnectionTimer_ = null), t.establishConnection_();
              }, Math.floor(e)));
          }),
          (dn.prototype.onVisible_ = function (e) {
            e &&
              !this.visible_ &&
              this.reconnectDelay_ === this.maxReconnectDelay_ &&
              (this.log_("Window became visible.  Reducing delay."),
              (this.reconnectDelay_ = cn),
              this.realtime_ || this.scheduleConnect_(0)),
              (this.visible_ = e);
          }),
          (dn.prototype.onOnline_ = function (e) {
            e
              ? (this.log_("Browser went online."),
                (this.reconnectDelay_ = cn),
                this.realtime_ || this.scheduleConnect_(0))
              : (this.log_("Browser went offline.  Killing connection."),
                this.realtime_ && this.realtime_.close());
          }),
          (dn.prototype.onRealtimeDisconnect_ = function () {
            var e;
            this.log_("data client disconnected"),
              (this.connected_ = !1),
              (this.realtime_ = null),
              this.cancelSentTransactions_(),
              (this.requestCBHash_ = {}),
              this.shouldReconnect_() &&
                (this.visible_
                  ? this.lastConnectionEstablishedTime_ &&
                    (3e4 <
                      new Date().getTime() -
                        this.lastConnectionEstablishedTime_ &&
                      (this.reconnectDelay_ = cn),
                    (this.lastConnectionEstablishedTime_ = null))
                  : (this.log_("Window isn't visible.  Delaying reconnect."),
                    (this.reconnectDelay_ = this.maxReconnectDelay_),
                    (this.lastConnectionAttemptTime_ = new Date().getTime())),
                (e = new Date().getTime() - this.lastConnectionAttemptTime_),
                (e = Math.max(0, this.reconnectDelay_ - e)),
                (e = Math.random() * e),
                this.log_("Trying to reconnect in " + e + "ms"),
                this.scheduleConnect_(e),
                (this.reconnectDelay_ = Math.min(
                  this.maxReconnectDelay_,
                  1.3 * this.reconnectDelay_
                ))),
              this.onConnectStatus_(!1);
          }),
          (dn.prototype.establishConnection_ = function () {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              l,
              e,
              c = this;
            this.shouldReconnect_() &&
              (this.log_("Making a connection attempt"),
              (this.lastConnectionAttemptTime_ = new Date().getTime()),
              (this.lastConnectionEstablishedTime_ = null),
              (t = this.onDataMessage_.bind(this)),
              (n = this.onReady_.bind(this)),
              (r = this.onRealtimeDisconnect_.bind(this)),
              (i = this.id + ":" + dn.nextConnectionId_++),
              (a = (o = this).lastSessionId),
              (s = !1),
              (u = null),
              (l = function () {
                u ? u.close() : ((s = !0), r());
              }),
              (this.realtime_ = {
                close: l,
                sendRequest: function (e) {
                  g(
                    u,
                    "sendRequest call when we're not connected not allowed."
                  ),
                    u.sendRequest(e);
                },
              }),
              (e = this.forceTokenRefresh_),
              (this.forceTokenRefresh_ = !1),
              this.authTokenProvider_
                .getToken(e)
                .then(function (e) {
                  s
                    ? je("getToken() completed but was canceled")
                    : (je("getToken() completed. Creating connection."),
                      (o.authToken_ = e && e.accessToken),
                      (u = new Rt(
                        i,
                        o.repoInfo_,
                        o.applicationId_,
                        t,
                        n,
                        r,
                        function (e) {
                          Be(e + " (" + o.repoInfo_.toString() + ")"),
                            o.interrupt("server_kill");
                        },
                        a
                      )));
                })
                .then(null, function (e) {
                  o.log_("Failed to get token: " + e),
                    s || (c.repoInfo_.nodeAdmin && Be(e), l());
                }));
          }),
          (dn.prototype.interrupt = function (e) {
            je("Interrupting connection for reason: " + e),
              (this.interruptReasons_[e] = !0),
              this.realtime_
                ? this.realtime_.close()
                : (this.establishConnectionTimer_ &&
                    (clearTimeout(this.establishConnectionTimer_),
                    (this.establishConnectionTimer_ = null)),
                  this.connected_ && this.onRealtimeDisconnect_());
          }),
          (dn.prototype.resume = function (e) {
            je("Resuming connection for reason: " + e),
              delete this.interruptReasons_[e],
              A(this.interruptReasons_) &&
                ((this.reconnectDelay_ = cn),
                this.realtime_ || this.scheduleConnect_(0));
          }),
          (dn.prototype.handleTimestamp_ = function (e) {
            e -= new Date().getTime();
            this.onServerInfoUpdate_({ serverTimeOffset: e });
          }),
          (dn.prototype.cancelSentTransactions_ = function () {
            for (var e = 0; e < this.outstandingPuts_.length; e++) {
              var t = this.outstandingPuts_[e];
              t &&
                "h" in t.request &&
                t.queued &&
                (t.onComplete && t.onComplete("disconnect"),
                delete this.outstandingPuts_[e],
                this.outstandingPutCount_--);
            }
            0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
          }),
          (dn.prototype.onListenRevoked_ = function (e, t) {
            (t = t
              ? t
                  .map(function (e) {
                    return Qe(e);
                  })
                  .join("$")
              : "default"),
              (t = this.removeListen_(e, t));
            t && t.onComplete && t.onComplete("permission_denied");
          }),
          (dn.prototype.removeListen_ = function (e, t) {
            var n,
              r = new Ut(e).toString();
            return (
              this.listens.has(r)
                ? ((n = (e = this.listens.get(r)).get(t)),
                  e.delete(t),
                  0 === e.size && this.listens.delete(r))
                : (n = void 0),
              n
            );
          }),
          (dn.prototype.onAuthRevoked_ = function (e, t) {
            je("Auth token revoked: " + e + "/" + t),
              (this.authToken_ = null),
              (this.forceTokenRefresh_ = !0),
              this.realtime_.close(),
              ("invalid_token" !== e && "permission_denied" !== e) ||
                (this.invalidAuthTokenCount_++,
                3 <= this.invalidAuthTokenCount_ &&
                  ((this.reconnectDelay_ = 3e4),
                  this.authTokenProvider_.notifyForInvalidToken()));
          }),
          (dn.prototype.onSecurityDebugPacket_ = function (e) {
            this.securityDebugCallback_
              ? this.securityDebugCallback_(e)
              : "msg" in e &&
                console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "));
          }),
          (dn.prototype.restoreState_ = function () {
            var t, e, n, r;
            this.tryAuth();
            try {
              for (
                var i = _(this.listens.values()), o = i.next();
                !o.done;
                o = i.next()
              ) {
                var a = o.value;
                try {
                  for (
                    var s = ((n = void 0), _(a.values())), u = s.next();
                    !u.done;
                    u = s.next()
                  ) {
                    var l = u.value;
                    this.sendListen_(l);
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    u && !u.done && (r = s.return) && r.call(s);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (e = i.return) && e.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
            for (var c = 0; c < this.outstandingPuts_.length; c++)
              this.outstandingPuts_[c] && this.sendPut_(c);
            for (; this.onDisconnectRequestQueue_.length; ) {
              var h = this.onDisconnectRequestQueue_.shift();
              this.sendOnDisconnect_(
                h.action,
                h.pathString,
                h.data,
                h.onComplete
              );
            }
            for (c = 0; c < this.outstandingGets_.length; c++)
              this.outstandingGets_[c] && this.sendGet_(c);
          }),
          (dn.prototype.sendConnectStats_ = function () {
            var e = {};
            (e["sdk.js." + It.replace(/\./g, "-")] = 1),
              w()
                ? (e["framework.cordova"] = 1)
                : "object" == typeof navigator &&
                  "ReactNative" === navigator.product &&
                  (e["framework.reactnative"] = 1),
              this.reportStats(e);
          }),
          (dn.prototype.shouldReconnect_ = function () {
            var e = Ft.getInstance().currentlyOnline();
            return A(this.interruptReasons_) && e;
          }),
          (dn.nextPersistentConnectionId_ = 0),
          (dn.nextConnectionId_ = 0),
          dn);
      function dn(e, t, n, r, i, o, a) {
        var s = ln.call(this) || this;
        if (
          ((s.repoInfo_ = e),
          (s.applicationId_ = t),
          (s.onDataUpdate_ = n),
          (s.onConnectStatus_ = r),
          (s.onServerInfoUpdate_ = i),
          (s.authTokenProvider_ = o),
          (s.authOverride_ = a),
          (s.id = dn.nextPersistentConnectionId_++),
          (s.log_ = We("p:" + s.id + ":")),
          (s.interruptReasons_ = {}),
          (s.listens = new Map()),
          (s.outstandingPuts_ = []),
          (s.outstandingGets_ = []),
          (s.outstandingPutCount_ = 0),
          (s.outstandingGetCount_ = 0),
          (s.onDisconnectRequestQueue_ = []),
          (s.connected_ = !1),
          (s.reconnectDelay_ = cn),
          (s.maxReconnectDelay_ = hn),
          (s.securityDebugCallback_ = null),
          (s.lastSessionId = null),
          (s.establishConnectionTimer_ = null),
          (s.visible_ = !1),
          (s.requestCBHash_ = {}),
          (s.requestNumber_ = 0),
          (s.realtime_ = null),
          (s.authToken_ = null),
          (s.forceTokenRefresh_ = !1),
          (s.invalidAuthTokenCount_ = 0),
          (s.firstConnection_ = !0),
          (s.lastConnectionAttemptTime_ = null),
          (s.lastConnectionEstablishedTime_ = null),
          a && !b())
        )
          throw new Error(
            "Auth override specified in options, but not supported on non Node.js platforms"
          );
        return (
          s.scheduleConnect_(0),
          sn.getInstance().on("visible", s.onVisible_, s),
          -1 === e.host.indexOf("fblocal") &&
            Ft.getInstance().on("online", s.onOnline_, s),
          s
        );
      }
      var fn =
        ((_n.Wrap = function (e, t) {
          return new _n(e, t);
        }),
        _n);
      function _n(e, t) {
        (this.name = e), (this.node = t);
      }
      var yn,
        ke =
          ((vn.prototype.getCompare = function () {
            return this.compare.bind(this);
          }),
          (vn.prototype.indexedValueChanged = function (e, t) {
            (e = new fn(Ve, e)), (t = new fn(Ve, t));
            return 0 !== this.compare(e, t);
          }),
          (vn.prototype.minPost = function () {
            return fn.MIN;
          }),
          vn);
      function vn() {}
      var gn,
        re =
          (n(mn, (gn = ke)),
          Object.defineProperty(mn, "__EMPTY_NODE", {
            get: function () {
              return yn;
            },
            set: function (e) {
              yn = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (mn.prototype.compare = function (e, t) {
            return ze(e.name, t.name);
          }),
          (mn.prototype.isDefinedOn = function (e) {
            throw m("KeyIndex.isDefinedOn not expected to be called.");
          }),
          (mn.prototype.indexedValueChanged = function (e, t) {
            return !1;
          }),
          (mn.prototype.minPost = function () {
            return fn.MIN;
          }),
          (mn.prototype.maxPost = function () {
            return new fn(He, yn);
          }),
          (mn.prototype.makePost = function (e, t) {
            return (
              g(
                "string" == typeof e,
                "KeyIndex indexValue must always be a string."
              ),
              new fn(e, yn)
            );
          }),
          (mn.prototype.toString = function () {
            return ".key";
          }),
          mn);
      function mn() {
        return (null !== gn && gn.apply(this, arguments)) || this;
      }
      var wn = new re(),
        bn =
          ((Cn.prototype.getNext = function () {
            if (0 === this.nodeStack_.length) return null;
            var e = this.nodeStack_.pop(),
              t = this.resultGenerator_
                ? this.resultGenerator_(e.key, e.value)
                : { key: e.key, value: e.value };
            if (this.isReverse_)
              for (e = e.left; !e.isEmpty(); )
                this.nodeStack_.push(e), (e = e.right);
            else
              for (e = e.right; !e.isEmpty(); )
                this.nodeStack_.push(e), (e = e.left);
            return t;
          }),
          (Cn.prototype.hasNext = function () {
            return 0 < this.nodeStack_.length;
          }),
          (Cn.prototype.peek = function () {
            if (0 === this.nodeStack_.length) return null;
            var e = this.nodeStack_[this.nodeStack_.length - 1];
            return this.resultGenerator_
              ? this.resultGenerator_(e.key, e.value)
              : { key: e.key, value: e.value };
          }),
          Cn);
      function Cn(e, t, n, r, i) {
        void 0 === i && (i = null),
          (this.isReverse_ = r),
          (this.resultGenerator_ = i),
          (this.nodeStack_ = []);
        for (var o = 1; !e.isEmpty(); )
          if (((o = t ? n(e.key, t) : 1), r && (o *= -1), o < 0))
            e = this.isReverse_ ? e.left : e.right;
          else {
            if (0 === o) {
              this.nodeStack_.push(e);
              break;
            }
            this.nodeStack_.push(e), (e = this.isReverse_ ? e.right : e.left);
          }
      }
      var En =
        ((In.prototype.copy = function (e, t, n, r, i) {
          return new In(
            null != e ? e : this.key,
            null != t ? t : this.value,
            null != n ? n : this.color,
            null != r ? r : this.left,
            null != i ? i : this.right
          );
        }),
        (In.prototype.count = function () {
          return this.left.count() + 1 + this.right.count();
        }),
        (In.prototype.isEmpty = function () {
          return !1;
        }),
        (In.prototype.inorderTraversal = function (e) {
          return (
            this.left.inorderTraversal(e) ||
            !!e(this.key, this.value) ||
            this.right.inorderTraversal(e)
          );
        }),
        (In.prototype.reverseTraversal = function (e) {
          return (
            this.right.reverseTraversal(e) ||
            e(this.key, this.value) ||
            this.left.reverseTraversal(e)
          );
        }),
        (In.prototype.min_ = function () {
          return this.left.isEmpty() ? this : this.left.min_();
        }),
        (In.prototype.minKey = function () {
          return this.min_().key;
        }),
        (In.prototype.maxKey = function () {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }),
        (In.prototype.insert = function (e, t, n) {
          var r = this,
            i = n(e, r.key);
          return (r =
            i < 0
              ? r.copy(null, null, null, r.left.insert(e, t, n), null)
              : 0 === i
              ? r.copy(null, t, null, null, null)
              : r.copy(
                  null,
                  null,
                  null,
                  null,
                  r.right.insert(e, t, n)
                )).fixUp_();
        }),
        (In.prototype.removeMin_ = function () {
          if (this.left.isEmpty()) return Pn.EMPTY_NODE;
          var e = this;
          return (e = (e =
            !e.left.isRed_() && !e.left.left.isRed_()
              ? e.moveRedLeft_()
              : e).copy(null, null, null, e.left.removeMin_(), null)).fixUp_();
        }),
        (In.prototype.remove = function (e, t) {
          var n,
            r = this;
          if (t(e, r.key) < 0)
            r = (r = !(
              r.left.isEmpty() ||
              r.left.isRed_() ||
              r.left.left.isRed_()
            )
              ? r.moveRedLeft_()
              : r).copy(null, null, null, r.left.remove(e, t), null);
          else {
            if (
              0 ===
              t(
                e,
                (r = !(
                  (r = r.left.isRed_()
                    ? r.rotateRight_()
                    : r).right.isEmpty() ||
                  r.right.isRed_() ||
                  r.right.left.isRed_()
                )
                  ? r.moveRedRight_()
                  : r).key
              )
            ) {
              if (r.right.isEmpty()) return Pn.EMPTY_NODE;
              (n = r.right.min_()),
                (r = r.copy(n.key, n.value, null, null, r.right.removeMin_()));
            }
            r = r.copy(null, null, null, null, r.right.remove(e, t));
          }
          return r.fixUp_();
        }),
        (In.prototype.isRed_ = function () {
          return this.color;
        }),
        (In.prototype.fixUp_ = function () {
          var e = this;
          return (e =
            (e =
              (e =
                e.right.isRed_() && !e.left.isRed_()
                  ? e.rotateLeft_()
                  : e).left.isRed_() && e.left.left.isRed_()
                ? e.rotateRight_()
                : e).left.isRed_() && e.right.isRed_()
              ? e.colorFlip_()
              : e);
        }),
        (In.prototype.moveRedLeft_ = function () {
          var e = this.colorFlip_();
          return (e = e.right.left.isRed_()
            ? (e = (e = e.copy(
                null,
                null,
                null,
                null,
                e.right.rotateRight_()
              )).rotateLeft_()).colorFlip_()
            : e);
        }),
        (In.prototype.moveRedRight_ = function () {
          var e = this.colorFlip_();
          return (e = e.left.left.isRed_()
            ? (e = e.rotateRight_()).colorFlip_()
            : e);
        }),
        (In.prototype.rotateLeft_ = function () {
          var e = this.copy(null, null, In.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }),
        (In.prototype.rotateRight_ = function () {
          var e = this.copy(null, null, In.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }),
        (In.prototype.colorFlip_ = function () {
          var e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, e, t);
        }),
        (In.prototype.checkMaxDepth_ = function () {
          var e = this.check_();
          return Math.pow(2, e) <= this.count() + 1;
        }),
        (In.prototype.check_ = function () {
          if (this.isRed_() && this.left.isRed_())
            throw new Error(
              "Red node has red child(" + this.key + "," + this.value + ")"
            );
          if (this.right.isRed_())
            throw new Error(
              "Right child of (" + this.key + "," + this.value + ") is red"
            );
          var e = this.left.check_();
          if (e !== this.right.check_()) throw new Error("Black depths differ");
          return e + (this.isRed_() ? 0 : 1);
        }),
        (In.RED = !0),
        (In.BLACK = !1),
        In);
      function In(e, t, n, r, i) {
        (this.key = e),
          (this.value = t),
          (this.color = null != n ? n : In.RED),
          (this.left = null != r ? r : Pn.EMPTY_NODE),
          (this.right = null != i ? i : Pn.EMPTY_NODE);
      }
      (Sn.prototype.copy = function (e, t, n, r, i) {
        return this;
      }),
        (Sn.prototype.insert = function (e, t, n) {
          return new En(e, t, null);
        }),
        (Sn.prototype.remove = function (e, t) {
          return this;
        }),
        (Sn.prototype.count = function () {
          return 0;
        }),
        (Sn.prototype.isEmpty = function () {
          return !0;
        }),
        (Sn.prototype.inorderTraversal = function (e) {
          return !1;
        }),
        (Sn.prototype.reverseTraversal = function (e) {
          return !1;
        }),
        (Sn.prototype.minKey = function () {
          return null;
        }),
        (Sn.prototype.maxKey = function () {
          return null;
        }),
        (Sn.prototype.check_ = function () {
          return 0;
        }),
        (Sn.prototype.isRed_ = function () {
          return !1;
        }),
        (fe = Sn);
      function Sn() {}
      var Tn,
        Pn =
          ((Nn.prototype.insert = function (e, t) {
            return new Nn(
              this.comparator_,
              this.root_
                .insert(e, t, this.comparator_)
                .copy(null, null, En.BLACK, null, null)
            );
          }),
          (Nn.prototype.remove = function (e) {
            return new Nn(
              this.comparator_,
              this.root_
                .remove(e, this.comparator_)
                .copy(null, null, En.BLACK, null, null)
            );
          }),
          (Nn.prototype.get = function (e) {
            for (var t, n = this.root_; !n.isEmpty(); ) {
              if (0 === (t = this.comparator_(e, n.key))) return n.value;
              t < 0 ? (n = n.left) : 0 < t && (n = n.right);
            }
            return null;
          }),
          (Nn.prototype.getPredecessorKey = function (e) {
            for (var t, n = this.root_, r = null; !n.isEmpty(); ) {
              if (0 === (t = this.comparator_(e, n.key))) {
                if (n.left.isEmpty()) return r ? r.key : null;
                for (n = n.left; !n.right.isEmpty(); ) n = n.right;
                return n.key;
              }
              t < 0 ? (n = n.left) : 0 < t && (n = (r = n).right);
            }
            throw new Error(
              "Attempted to find predecessor key for a nonexistent key.  What gives?"
            );
          }),
          (Nn.prototype.isEmpty = function () {
            return this.root_.isEmpty();
          }),
          (Nn.prototype.count = function () {
            return this.root_.count();
          }),
          (Nn.prototype.minKey = function () {
            return this.root_.minKey();
          }),
          (Nn.prototype.maxKey = function () {
            return this.root_.maxKey();
          }),
          (Nn.prototype.inorderTraversal = function (e) {
            return this.root_.inorderTraversal(e);
          }),
          (Nn.prototype.reverseTraversal = function (e) {
            return this.root_.reverseTraversal(e);
          }),
          (Nn.prototype.getIterator = function (e) {
            return new bn(this.root_, null, this.comparator_, !1, e);
          }),
          (Nn.prototype.getIteratorFrom = function (e, t) {
            return new bn(this.root_, e, this.comparator_, !1, t);
          }),
          (Nn.prototype.getReverseIteratorFrom = function (e, t) {
            return new bn(this.root_, e, this.comparator_, !0, t);
          }),
          (Nn.prototype.getReverseIterator = function (e) {
            return new bn(this.root_, null, this.comparator_, !0, e);
          }),
          (Nn.EMPTY_NODE = new fe()),
          Nn);
      function Nn(e, t) {
        void 0 === t && (t = Nn.EMPTY_NODE),
          (this.comparator_ = e),
          (this.root_ = t);
      }
      function xn(e, t) {
        return ze(e.name, t.name);
      }
      function kn(e, t) {
        return ze(e, t);
      }
      function Rn(e) {
        return "number" == typeof e ? "number:" + Ke(e) : "string:" + e;
      }
      var Dn,
        On,
        An,
        Ln,
        Mn = function (e) {
          var t;
          e.isLeafNode()
            ? ((t = e.val()),
              g(
                "string" == typeof t ||
                  "number" == typeof t ||
                  ("object" == typeof t && D(t, ".sv")),
                "Priority must be a string or number."
              ))
            : g(e === Tn || e.isEmpty(), "priority of unexpected type."),
            g(
              e === Tn || e.getPriority().isEmpty(),
              "Priority nodes can't have a priority of their own."
            );
        },
        Fn =
          (Object.defineProperty(qn, "__childrenNodeConstructor", {
            get: function () {
              return Dn;
            },
            set: function (e) {
              Dn = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (qn.prototype.isLeafNode = function () {
            return !0;
          }),
          (qn.prototype.getPriority = function () {
            return this.priorityNode_;
          }),
          (qn.prototype.updatePriority = function (e) {
            return new qn(this.value_, e);
          }),
          (qn.prototype.getImmediateChild = function (e) {
            return ".priority" === e
              ? this.priorityNode_
              : qn.__childrenNodeConstructor.EMPTY_NODE;
          }),
          (qn.prototype.getChild = function (e) {
            return Jt(e)
              ? this
              : ".priority" === Ht(e)
              ? this.priorityNode_
              : qn.__childrenNodeConstructor.EMPTY_NODE;
          }),
          (qn.prototype.hasChild = function () {
            return !1;
          }),
          (qn.prototype.getPredecessorChildName = function (e, t) {
            return null;
          }),
          (qn.prototype.updateImmediateChild = function (e, t) {
            return ".priority" === e
              ? this.updatePriority(t)
              : t.isEmpty() && ".priority" !== e
              ? this
              : qn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                  e,
                  t
                ).updatePriority(this.priorityNode_);
          }),
          (qn.prototype.updateChild = function (e, t) {
            var n = Ht(e);
            return null === n
              ? t
              : t.isEmpty() && ".priority" !== n
              ? this
              : (g(
                  ".priority" !== n || 1 === zt(e),
                  ".priority must be the last token in a path"
                ),
                this.updateImmediateChild(
                  n,
                  qn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Qt(e), t)
                ));
          }),
          (qn.prototype.isEmpty = function () {
            return !1;
          }),
          (qn.prototype.numChildren = function () {
            return 0;
          }),
          (qn.prototype.forEachChild = function (e, t) {
            return !1;
          }),
          (qn.prototype.val = function (e) {
            return e && !this.getPriority().isEmpty()
              ? {
                  ".value": this.getValue(),
                  ".priority": this.getPriority().val(),
                }
              : this.getValue();
          }),
          (qn.prototype.hash = function () {
            var e, t;
            return (
              null === this.lazyHash_ &&
                ((e = ""),
                this.priorityNode_.isEmpty() ||
                  (e += "priority:" + Rn(this.priorityNode_.val()) + ":"),
                (e += (t = typeof this.value_) + ":"),
                (e += "number" == t ? Ke(this.value_) : this.value_),
                (this.lazyHash_ = Ee(e))),
              this.lazyHash_
            );
          }),
          (qn.prototype.getValue = function () {
            return this.value_;
          }),
          (qn.prototype.compareTo = function (e) {
            return e === qn.__childrenNodeConstructor.EMPTY_NODE
              ? 1
              : e instanceof qn.__childrenNodeConstructor
              ? -1
              : (g(e.isLeafNode(), "Unknown node type"),
                this.compareToLeafNode_(e));
          }),
          (qn.prototype.compareToLeafNode_ = function (e) {
            var t = typeof e.value_,
              n = typeof this.value_,
              r = qn.VALUE_TYPE_ORDER.indexOf(t),
              i = qn.VALUE_TYPE_ORDER.indexOf(n);
            return (
              g(0 <= r, "Unknown leaf type: " + t),
              g(0 <= i, "Unknown leaf type: " + n),
              r === i
                ? "object" == n
                  ? 0
                  : this.value_ < e.value_
                  ? -1
                  : this.value_ === e.value_
                  ? 0
                  : 1
                : i - r
            );
          }),
          (qn.prototype.withIndex = function () {
            return this;
          }),
          (qn.prototype.isIndexed = function () {
            return !0;
          }),
          (qn.prototype.equals = function (e) {
            return (
              e === this ||
              (!!e.isLeafNode() &&
                this.value_ === e.value_ &&
                this.priorityNode_.equals(e.priorityNode_))
            );
          }),
          (qn.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"]),
          qn);
      function qn(e, t) {
        void 0 === t && (t = qn.__childrenNodeConstructor.EMPTY_NODE),
          (this.value_ = e),
          (this.priorityNode_ = t),
          (this.lazyHash_ = null),
          g(
            void 0 !== this.value_ && null !== this.value_,
            "LeafNode shouldn't be created with null/undefined value."
          ),
          Mn(this.priorityNode_);
      }
      function jn() {
        return (null !== Ln && Ln.apply(this, arguments)) || this;
      }
      var Wn = new (n(jn, (Ln = ke)),
        (jn.prototype.compare = function (e, t) {
          var n = e.node.getPriority(),
            r = t.node.getPriority(),
            r = n.compareTo(r);
          return 0 === r ? ze(e.name, t.name) : r;
        }),
        (jn.prototype.isDefinedOn = function (e) {
          return !e.getPriority().isEmpty();
        }),
        (jn.prototype.indexedValueChanged = function (e, t) {
          return !e.getPriority().equals(t.getPriority());
        }),
        (jn.prototype.minPost = function () {
          return fn.MIN;
        }),
        (jn.prototype.maxPost = function () {
          return new fn(He, new Fn("[PRIORITY-POST]", An));
        }),
        (jn.prototype.makePost = function (e, t) {
          e = On(e);
          return new fn(t, new Fn("[PRIORITY-POST]", e));
        }),
        (jn.prototype.toString = function () {
          return ".priority";
        }),
        jn)(),
        Un = Math.log(2),
        Bn =
          ((Vn.prototype.nextBitIsOne = function () {
            var e = !(this.bits_ & (1 << this.current_));
            return this.current_--, e;
          }),
          Vn);
      function Vn(e) {
        var t;
        (this.count = ((t = e + 1), parseInt(Math.log(t) / Un, 10))),
          (this.current_ = this.count - 1);
        var n,
          r = ((n = this.count), parseInt(Array(n + 1).join("1"), 2));
        this.bits_ = (e + 1) & r;
      }
      var Hn,
        zn,
        Qn = function (l, e, c, t) {
          l.sort(e);
          var h = function (e, t) {
              var n = t - e;
              if (0 == n) return null;
              if (1 == n)
                return (
                  (r = l[e]),
                  (i = c ? c(r) : r),
                  new En(i, r.node, En.BLACK, null, null)
                );
              var n = parseInt(n / 2, 10) + e,
                e = h(e, n),
                t = h(n + 1, t),
                r = l[n],
                i = c ? c(r) : r;
              return new En(i, r.node, En.BLACK, e, t);
            },
            n = (function (e) {
              for (
                var t = null,
                  n = null,
                  i = l.length,
                  r = function (e, t) {
                    var n = i - e,
                      r = i;
                    i -= e;
                    (e = h(1 + n, r)), (r = l[n]), (n = c ? c(r) : r);
                    o(new En(n, r.node, t, null, e));
                  },
                  o = function (e) {
                    t = t ? (t.left = e) : (n = e);
                  },
                  a = 0;
                a < e.count;
                ++a
              ) {
                var s = e.nextBitIsOne(),
                  u = Math.pow(2, e.count - (a + 1));
                s ? r(u, En.BLACK) : (r(u, En.BLACK), r(u, En.RED));
              }
              return n;
            })(new Bn(l.length));
          return new Pn(t || e, n);
        },
        Yn = {},
        Kn =
          (Object.defineProperty(Gn, "Default", {
            get: function () {
              return (
                g(Wn, "ChildrenNode.ts has not been loaded"),
                (Hn = Hn || new Gn({ ".priority": Yn }, { ".priority": Wn }))
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Gn.prototype.get = function (e) {
            var t = O(this.indexes_, e);
            if (!t) throw new Error("No index defined for " + e);
            return t instanceof Pn ? t : null;
          }),
          (Gn.prototype.hasIndex = function (e) {
            return D(this.indexSet_, e.toString());
          }),
          (Gn.prototype.addIndex = function (e, t) {
            g(
              e !== wn,
              "KeyIndex always exists and isn't meant to be added to the IndexMap."
            );
            for (
              var n = [], r = !1, i = t.getIterator(fn.Wrap), o = i.getNext();
              o;

            )
              (r = r || e.isDefinedOn(o.node)), n.push(o), (o = i.getNext());
            var a = r ? Qn(n, e.getCompare()) : Yn,
              s = e.toString(),
              u = l({}, this.indexSet_);
            u[s] = e;
            t = l({}, this.indexes_);
            return (t[s] = a), new Gn(t, u);
          }),
          (Gn.prototype.addToIndexes = function (a, s) {
            var u = this;
            return new Gn(
              L(this.indexes_, function (e, t) {
                var n = O(u.indexSet_, t);
                if ((g(n, "Missing index implementation for " + t), e === Yn)) {
                  if (n.isDefinedOn(a.node)) {
                    for (
                      var r = [], i = s.getIterator(fn.Wrap), o = i.getNext();
                      o;

                    )
                      o.name !== a.name && r.push(o), (o = i.getNext());
                    return r.push(a), Qn(r, n.getCompare());
                  }
                  return Yn;
                }
                n = s.get(a.name);
                return (e = n ? e.remove(new fn(a.name, n)) : e).insert(
                  a,
                  a.node
                );
              }),
              this.indexSet_
            );
          }),
          (Gn.prototype.removeFromIndexes = function (n, r) {
            return new Gn(
              L(this.indexes_, function (e) {
                if (e === Yn) return e;
                var t = r.get(n.name);
                return t ? e.remove(new fn(n.name, t)) : e;
              }),
              this.indexSet_
            );
          }),
          Gn);
      function Gn(e, t) {
        (this.indexes_ = e), (this.indexSet_ = t);
      }
      var $n,
        Jn =
          (Object.defineProperty(Xn, "EMPTY_NODE", {
            get: function () {
              return (zn = zn || new Xn(new Pn(kn), null, Kn.Default));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (Xn.prototype.isLeafNode = function () {
            return !1;
          }),
          (Xn.prototype.getPriority = function () {
            return this.priorityNode_ || zn;
          }),
          (Xn.prototype.updatePriority = function (e) {
            return this.children_.isEmpty()
              ? this
              : new Xn(this.children_, e, this.indexMap_);
          }),
          (Xn.prototype.getImmediateChild = function (e) {
            if (".priority" === e) return this.getPriority();
            e = this.children_.get(e);
            return null === e ? zn : e;
          }),
          (Xn.prototype.getChild = function (e) {
            var t = Ht(e);
            return null === t
              ? this
              : this.getImmediateChild(t).getChild(Qt(e));
          }),
          (Xn.prototype.hasChild = function (e) {
            return null !== this.children_.get(e);
          }),
          (Xn.prototype.updateImmediateChild = function (e, t) {
            if (
              (g(t, "We should always be passing snapshot nodes"),
              ".priority" === e)
            )
              return this.updatePriority(t);
            var n = new fn(e, t),
              r = void 0,
              i = void 0,
              i = t.isEmpty()
                ? ((r = this.children_.remove(e)),
                  this.indexMap_.removeFromIndexes(n, this.children_))
                : ((r = this.children_.insert(e, t)),
                  this.indexMap_.addToIndexes(n, this.children_)),
              n = r.isEmpty() ? zn : this.priorityNode_;
            return new Xn(r, n, i);
          }),
          (Xn.prototype.updateChild = function (e, t) {
            var n = Ht(e);
            if (null === n) return t;
            g(
              ".priority" !== Ht(e) || 1 === zt(e),
              ".priority must be the last token in a path"
            );
            t = this.getImmediateChild(n).updateChild(Qt(e), t);
            return this.updateImmediateChild(n, t);
          }),
          (Xn.prototype.isEmpty = function () {
            return this.children_.isEmpty();
          }),
          (Xn.prototype.numChildren = function () {
            return this.children_.count();
          }),
          (Xn.prototype.val = function (n) {
            if (this.isEmpty()) return null;
            var r = {},
              i = 0,
              o = 0,
              a = !0;
            if (
              (this.forEachChild(Wn, function (e, t) {
                (r[e] = t.val(n)),
                  i++,
                  a && Xn.INTEGER_REGEXP_.test(e)
                    ? (o = Math.max(o, Number(e)))
                    : (a = !1);
              }),
              !n && a && o < 2 * i)
            ) {
              var e,
                t = [];
              for (e in r) t[e] = r[e];
              return t;
            }
            return (
              n &&
                !this.getPriority().isEmpty() &&
                (r[".priority"] = this.getPriority().val()),
              r
            );
          }),
          (Xn.prototype.hash = function () {
            var n;
            return (
              null === this.lazyHash_ &&
                ((n = ""),
                this.getPriority().isEmpty() ||
                  (n += "priority:" + Rn(this.getPriority().val()) + ":"),
                this.forEachChild(Wn, function (e, t) {
                  t = t.hash();
                  "" !== t && (n += ":" + e + ":" + t);
                }),
                (this.lazyHash_ = "" === n ? "" : Ee(n))),
              this.lazyHash_
            );
          }),
          (Xn.prototype.getPredecessorChildName = function (e, t, n) {
            n = this.resolveIndex_(n);
            if (n) {
              t = n.getPredecessorKey(new fn(e, t));
              return t ? t.name : null;
            }
            return this.children_.getPredecessorKey(e);
          }),
          (Xn.prototype.getFirstChildName = function (e) {
            e = this.resolveIndex_(e);
            if (e) {
              e = e.minKey();
              return e && e.name;
            }
            return this.children_.minKey();
          }),
          (Xn.prototype.getFirstChild = function (e) {
            e = this.getFirstChildName(e);
            return e ? new fn(e, this.children_.get(e)) : null;
          }),
          (Xn.prototype.getLastChildName = function (e) {
            e = this.resolveIndex_(e);
            if (e) {
              e = e.maxKey();
              return e && e.name;
            }
            return this.children_.maxKey();
          }),
          (Xn.prototype.getLastChild = function (e) {
            e = this.getLastChildName(e);
            return e ? new fn(e, this.children_.get(e)) : null;
          }),
          (Xn.prototype.forEachChild = function (e, t) {
            e = this.resolveIndex_(e);
            return e
              ? e.inorderTraversal(function (e) {
                  return t(e.name, e.node);
                })
              : this.children_.inorderTraversal(t);
          }),
          (Xn.prototype.getIterator = function (e) {
            return this.getIteratorFrom(e.minPost(), e);
          }),
          (Xn.prototype.getIteratorFrom = function (e, t) {
            var n = this.resolveIndex_(t);
            if (n)
              return n.getIteratorFrom(e, function (e) {
                return e;
              });
            for (
              var r = this.children_.getIteratorFrom(e.name, fn.Wrap),
                i = r.peek();
              null != i && t.compare(i, e) < 0;

            )
              r.getNext(), (i = r.peek());
            return r;
          }),
          (Xn.prototype.getReverseIterator = function (e) {
            return this.getReverseIteratorFrom(e.maxPost(), e);
          }),
          (Xn.prototype.getReverseIteratorFrom = function (e, t) {
            var n = this.resolveIndex_(t);
            if (n)
              return n.getReverseIteratorFrom(e, function (e) {
                return e;
              });
            for (
              var r = this.children_.getReverseIteratorFrom(e.name, fn.Wrap),
                i = r.peek();
              null != i && 0 < t.compare(i, e);

            )
              r.getNext(), (i = r.peek());
            return r;
          }),
          (Xn.prototype.compareTo = function (e) {
            return this.isEmpty()
              ? e.isEmpty()
                ? 0
                : -1
              : e.isLeafNode() || e.isEmpty()
              ? 1
              : e === er
              ? -1
              : 0;
          }),
          (Xn.prototype.withIndex = function (e) {
            if (e === wn || this.indexMap_.hasIndex(e)) return this;
            e = this.indexMap_.addIndex(e, this.children_);
            return new Xn(this.children_, this.priorityNode_, e);
          }),
          (Xn.prototype.isIndexed = function (e) {
            return e === wn || this.indexMap_.hasIndex(e);
          }),
          (Xn.prototype.equals = function (e) {
            if (e === this) return !0;
            if (e.isLeafNode()) return !1;
            if (this.getPriority().equals(e.getPriority())) {
              if (this.children_.count() !== e.children_.count()) return !1;
              for (
                var t = this.getIterator(Wn),
                  n = e.getIterator(Wn),
                  r = t.getNext(),
                  i = n.getNext();
                r && i;

              ) {
                if (r.name !== i.name || !r.node.equals(i.node)) return !1;
                (r = t.getNext()), (i = n.getNext());
              }
              return null === r && null === i;
            }
            return !1;
          }),
          (Xn.prototype.resolveIndex_ = function (e) {
            return e === wn ? null : this.indexMap_.get(e.toString());
          }),
          (Xn.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
          Xn);
      function Xn(e, t, n) {
        (this.children_ = e),
          (this.priorityNode_ = t),
          (this.indexMap_ = n),
          (this.lazyHash_ = null),
          this.priorityNode_ && Mn(this.priorityNode_),
          this.children_.isEmpty() &&
            g(
              !this.priorityNode_ || this.priorityNode_.isEmpty(),
              "An empty node cannot have a priority"
            );
      }
      function Zn() {
        return $n.call(this, new Pn(kn), Jn.EMPTY_NODE, Kn.Default) || this;
      }
      var er = new (n(Zn, ($n = Jn)),
      (Zn.prototype.compareTo = function (e) {
        return e === this ? 0 : 1;
      }),
      (Zn.prototype.equals = function (e) {
        return e === this;
      }),
      (Zn.prototype.getPriority = function () {
        return this;
      }),
      (Zn.prototype.getImmediateChild = function (e) {
        return Jn.EMPTY_NODE;
      }),
      (Zn.prototype.isEmpty = function () {
        return !1;
      }),
      Zn)();
      Object.defineProperties(fn, {
        MIN: { value: new fn(Ve, Jn.EMPTY_NODE) },
        MAX: { value: new fn(He, er) },
      }),
        (re.__EMPTY_NODE = Jn.EMPTY_NODE),
        (Fn.__childrenNodeConstructor = Jn),
        (Tn = er),
        (An = er);
      var tr = !0;
      function nr(n, e) {
        if ((void 0 === e && (e = null), null === n)) return Jn.EMPTY_NODE;
        if (
          ("object" == typeof n && ".priority" in n && (e = n[".priority"]),
          g(
            null === e ||
              "string" == typeof e ||
              "number" == typeof e ||
              ("object" == typeof e && ".sv" in e),
            "Invalid priority type found: " + typeof e
          ),
          "object" == typeof n &&
            ".value" in n &&
            null !== n[".value"] &&
            (n = n[".value"]),
          "object" != typeof n || ".sv" in n)
        )
          return new Fn(n, nr(e));
        if (n instanceof Array || !tr) {
          var r = Jn.EMPTY_NODE;
          return (
            Ye(n, function (e, t) {
              D(n, e) &&
                "." !== e.substring(0, 1) &&
                ((!(t = nr(t)).isLeafNode() && t.isEmpty()) ||
                  (r = r.updateImmediateChild(e, t)));
            }),
            r.updatePriority(nr(e))
          );
        }
        var i = [],
          o = !1;
        if (
          (Ye(n, function (e, t) {
            "." !== e.substring(0, 1) &&
              ((t = nr(t)).isEmpty() ||
                ((o = o || !t.getPriority().isEmpty()), i.push(new fn(e, t))));
          }),
          0 === i.length)
        )
          return Jn.EMPTY_NODE;
        var t = Qn(
          i,
          xn,
          function (e) {
            return e.name;
          },
          kn
        );
        if (o) {
          var a = Qn(i, Wn.getCompare());
          return new Jn(
            t,
            nr(e),
            new Kn({ ".priority": a }, { ".priority": Wn })
          );
        }
        return new Jn(t, nr(e), Kn.Default);
      }
      On = nr;
      var rr,
        ir,
        or =
          (n(ar, (rr = ke)),
          (ar.prototype.extractChild = function (e) {
            return e.getChild(this.indexPath_);
          }),
          (ar.prototype.isDefinedOn = function (e) {
            return !e.getChild(this.indexPath_).isEmpty();
          }),
          (ar.prototype.compare = function (e, t) {
            var n = this.extractChild(e.node),
              r = this.extractChild(t.node),
              r = n.compareTo(r);
            return 0 === r ? ze(e.name, t.name) : r;
          }),
          (ar.prototype.makePost = function (e, t) {
            (e = nr(e)), (e = Jn.EMPTY_NODE.updateChild(this.indexPath_, e));
            return new fn(t, e);
          }),
          (ar.prototype.maxPost = function () {
            var e = Jn.EMPTY_NODE.updateChild(this.indexPath_, er);
            return new fn(He, e);
          }),
          (ar.prototype.toString = function () {
            return Kt(this.indexPath_, 0).join("/");
          }),
          ar);
      function ar(e) {
        var t = rr.call(this) || this;
        return (
          (t.indexPath_ = e),
          g(
            !Jt(e) && ".priority" !== Ht(e),
            "Can't create PathIndex with empty path or .priority key"
          ),
          t
        );
      }
      function sr() {
        return (null !== ir && ir.apply(this, arguments)) || this;
      }
      function ur(e) {
        if (e === "" + Xe) return "-";
        var t = Ze(e);
        if (null != t) return "" + (t + 1);
        for (var n = new Array(e.length), r = 0; r < n.length; r++)
          n[r] = e.charAt(r);
        if (n.length < 786) return n.push("-"), n.join("");
        for (var i = n.length - 1; 0 <= i && "z" === n[i]; ) i--;
        return -1 === i
          ? He
          : ((t = n[i]),
            (t = dr.charAt(dr.indexOf(t) + 1)),
            (n[i] = t),
            n.slice(0, i + 1).join(""));
      }
      function lr(e) {
        if (e === "" + Je) return Ve;
        var t = Ze(e);
        if (null != t) return "" + (t - 1);
        for (var n = new Array(e.length), r = 0; r < n.length; r++)
          n[r] = e.charAt(r);
        return "-" === n[n.length - 1]
          ? 1 === n.length
            ? "" + Xe
            : (delete n[n.length - 1], n.join(""))
          : ((n[n.length - 1] = dr.charAt(dr.indexOf(n[n.length - 1]) - 1)),
            n.join("") + "z".repeat(786 - n.length));
      }
      var cr,
        hr,
        pr = new (n(sr, (ir = ke)),
        (sr.prototype.compare = function (e, t) {
          var n = e.node.compareTo(t.node);
          return 0 === n ? ze(e.name, t.name) : n;
        }),
        (sr.prototype.isDefinedOn = function (e) {
          return !0;
        }),
        (sr.prototype.indexedValueChanged = function (e, t) {
          return !e.equals(t);
        }),
        (sr.prototype.minPost = function () {
          return fn.MIN;
        }),
        (sr.prototype.maxPost = function () {
          return fn.MAX;
        }),
        (sr.prototype.makePost = function (e, t) {
          e = nr(e);
          return new fn(t, e);
        }),
        (sr.prototype.toString = function () {
          return ".value";
        }),
        sr)(),
        dr = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
        fr =
          ((cr = 0),
          (hr = []),
          function (e) {
            var t = e === cr;
            cr = e;
            for (var n = new Array(8), r = 7; 0 <= r; r--)
              (n[r] = dr.charAt(e % 64)), (e = Math.floor(e / 64));
            g(0 === e, "Cannot push at time == 0");
            var i = n.join("");
            if (t) {
              for (r = 11; 0 <= r && 63 === hr[r]; r--) hr[r] = 0;
              hr[r]++;
            } else
              for (r = 0; r < 12; r++) hr[r] = Math.floor(64 * Math.random());
            for (r = 0; r < 12; r++) i += dr.charAt(hr[r]);
            return g(20 === i.length, "nextPushId: Length should be 20."), i;
          });
      function _r(e) {
        return { type: "value", snapshotNode: e };
      }
      function yr(e, t) {
        return { type: "child_added", snapshotNode: t, childName: e };
      }
      function vr(e, t) {
        return { type: "child_removed", snapshotNode: t, childName: e };
      }
      function gr(e, t, n) {
        return {
          type: "child_changed",
          snapshotNode: t,
          childName: e,
          oldSnap: n,
        };
      }
      var mr =
        ((wr.prototype.updateChild = function (e, t, n, r, i, o) {
          g(
            e.isIndexed(this.index_),
            "A node must be indexed if only a child is updated"
          );
          var a = e.getImmediateChild(t);
          return a.getChild(r).equals(n.getChild(r)) &&
            a.isEmpty() === n.isEmpty()
            ? e
            : (null != o &&
                (n.isEmpty()
                  ? e.hasChild(t)
                    ? o.trackChildChange(vr(t, a))
                    : g(
                        e.isLeafNode(),
                        "A child remove without an old child only makes sense on a leaf node"
                      )
                  : a.isEmpty()
                  ? o.trackChildChange(yr(t, n))
                  : o.trackChildChange(gr(t, n, a))),
              e.isLeafNode() && n.isEmpty()
                ? e
                : e.updateImmediateChild(t, n).withIndex(this.index_));
        }),
        (wr.prototype.updateFullNode = function (r, n, i) {
          return (
            null != i &&
              (r.isLeafNode() ||
                r.forEachChild(Wn, function (e, t) {
                  n.hasChild(e) || i.trackChildChange(vr(e, t));
                }),
              n.isLeafNode() ||
                n.forEachChild(Wn, function (e, t) {
                  var n;
                  r.hasChild(e)
                    ? (n = r.getImmediateChild(e)).equals(t) ||
                      i.trackChildChange(gr(e, t, n))
                    : i.trackChildChange(yr(e, t));
                })),
            n.withIndex(this.index_)
          );
        }),
        (wr.prototype.updatePriority = function (e, t) {
          return e.isEmpty() ? Jn.EMPTY_NODE : e.updatePriority(t);
        }),
        (wr.prototype.filtersNodes = function () {
          return !1;
        }),
        (wr.prototype.getIndexedFilter = function () {
          return this;
        }),
        (wr.prototype.getIndex = function () {
          return this.index_;
        }),
        wr);
      function wr(e) {
        this.index_ = e;
      }
      var br =
        ((Cr.prototype.getStartPost = function () {
          return this.startPost_;
        }),
        (Cr.prototype.getEndPost = function () {
          return this.endPost_;
        }),
        (Cr.prototype.matches = function (e) {
          return (
            this.index_.compare(this.getStartPost(), e) <= 0 &&
            this.index_.compare(e, this.getEndPost()) <= 0
          );
        }),
        (Cr.prototype.updateChild = function (e, t, n, r, i, o) {
          return (
            this.matches(new fn(t, n)) || (n = Jn.EMPTY_NODE),
            this.indexedFilter_.updateChild(e, t, n, r, i, o)
          );
        }),
        (Cr.prototype.updateFullNode = function (e, t, n) {
          t.isLeafNode() && (t = Jn.EMPTY_NODE);
          var r = (r = t.withIndex(this.index_)).updatePriority(Jn.EMPTY_NODE),
            i = this;
          return (
            t.forEachChild(Wn, function (e, t) {
              i.matches(new fn(e, t)) ||
                (r = r.updateImmediateChild(e, Jn.EMPTY_NODE));
            }),
            this.indexedFilter_.updateFullNode(e, r, n)
          );
        }),
        (Cr.prototype.updatePriority = function (e, t) {
          return e;
        }),
        (Cr.prototype.filtersNodes = function () {
          return !0;
        }),
        (Cr.prototype.getIndexedFilter = function () {
          return this.indexedFilter_;
        }),
        (Cr.prototype.getIndex = function () {
          return this.index_;
        }),
        (Cr.getStartPost_ = function (e) {
          if (e.hasStart()) {
            var t = e.getIndexStartName();
            return e.getIndex().makePost(e.getIndexStartValue(), t);
          }
          return e.getIndex().minPost();
        }),
        (Cr.getEndPost_ = function (e) {
          if (e.hasEnd()) {
            var t = e.getIndexEndName();
            return e.getIndex().makePost(e.getIndexEndValue(), t);
          }
          return e.getIndex().maxPost();
        }),
        Cr);
      function Cr(e) {
        (this.indexedFilter_ = new mr(e.getIndex())),
          (this.index_ = e.getIndex()),
          (this.startPost_ = Cr.getStartPost_(e)),
          (this.endPost_ = Cr.getEndPost_(e));
      }
      var Er =
        ((Ir.prototype.updateChild = function (e, t, n, r, i, o) {
          return (
            this.rangedFilter_.matches(new fn(t, n)) || (n = Jn.EMPTY_NODE),
            e.getImmediateChild(t).equals(n)
              ? e
              : e.numChildren() < this.limit_
              ? this.rangedFilter_
                  .getIndexedFilter()
                  .updateChild(e, t, n, r, i, o)
              : this.fullLimitUpdateChild_(e, t, n, i, o)
          );
        }),
        (Ir.prototype.updateFullNode = function (e, t, n) {
          if (t.isLeafNode() || t.isEmpty())
            r = Jn.EMPTY_NODE.withIndex(this.index_);
          else if (
            2 * this.limit_ < t.numChildren() &&
            t.isIndexed(this.index_)
          ) {
            var r = Jn.EMPTY_NODE.withIndex(this.index_),
              i = void 0;
            i = this.reverse_
              ? t.getReverseIteratorFrom(
                  this.rangedFilter_.getEndPost(),
                  this.index_
                )
              : t.getIteratorFrom(
                  this.rangedFilter_.getStartPost(),
                  this.index_
                );
            for (var o = 0; i.hasNext() && o < this.limit_; ) {
              var a = i.getNext();
              if (
                !(this.reverse_
                  ? this.index_.compare(this.rangedFilter_.getStartPost(), a) <=
                    0
                  : this.index_.compare(a, this.rangedFilter_.getEndPost()) <=
                    0)
              )
                break;
              (r = r.updateImmediateChild(a.name, a.node)), o++;
            }
          } else {
            r = (r = t.withIndex(this.index_)).updatePriority(Jn.EMPTY_NODE);
            var s,
              u = void 0,
              l = void 0,
              c = void 0,
              i = void 0;
            c = this.reverse_
              ? ((i = r.getReverseIterator(this.index_)),
                (u = this.rangedFilter_.getEndPost()),
                (l = this.rangedFilter_.getStartPost()),
                (s = this.index_.getCompare()),
                function (e, t) {
                  return s(t, e);
                })
              : ((i = r.getIterator(this.index_)),
                (u = this.rangedFilter_.getStartPost()),
                (l = this.rangedFilter_.getEndPost()),
                this.index_.getCompare());
            for (var o = 0, h = !1; i.hasNext(); ) {
              a = i.getNext();
              (h = !h && c(u, a) <= 0 ? !0 : h) &&
              o < this.limit_ &&
              c(a, l) <= 0
                ? o++
                : (r = r.updateImmediateChild(a.name, Jn.EMPTY_NODE));
            }
          }
          return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n);
        }),
        (Ir.prototype.updatePriority = function (e, t) {
          return e;
        }),
        (Ir.prototype.filtersNodes = function () {
          return !0;
        }),
        (Ir.prototype.getIndexedFilter = function () {
          return this.rangedFilter_.getIndexedFilter();
        }),
        (Ir.prototype.getIndex = function () {
          return this.index_;
        }),
        (Ir.prototype.fullLimitUpdateChild_ = function (e, t, n, r, i) {
          var o, a;
          a = this.reverse_
            ? ((o = this.index_.getCompare()),
              function (e, t) {
                return o(t, e);
              })
            : this.index_.getCompare();
          var s = e;
          g(s.numChildren() === this.limit_, "");
          var u = new fn(t, n),
            l = this.reverse_
              ? s.getFirstChild(this.index_)
              : s.getLastChild(this.index_),
            c = this.rangedFilter_.matches(u);
          if (s.hasChild(t)) {
            for (
              var h = s.getImmediateChild(t),
                p = r.getChildAfterChild(this.index_, l, this.reverse_);
              null != p && (p.name === t || s.hasChild(p.name));

            )
              p = r.getChildAfterChild(this.index_, p, this.reverse_);
            var d = null == p ? 1 : a(p, u);
            if (c && !n.isEmpty() && 0 <= d)
              return (
                null != i && i.trackChildChange(gr(t, n, h)),
                s.updateImmediateChild(t, n)
              );
            null != i && i.trackChildChange(vr(t, h));
            h = s.updateImmediateChild(t, Jn.EMPTY_NODE);
            return null != p && this.rangedFilter_.matches(p)
              ? (null != i && i.trackChildChange(yr(p.name, p.node)),
                h.updateImmediateChild(p.name, p.node))
              : h;
          }
          return !n.isEmpty() && c && 0 <= a(l, u)
            ? (null != i &&
                (i.trackChildChange(vr(l.name, l.node)),
                i.trackChildChange(yr(t, n))),
              s
                .updateImmediateChild(t, n)
                .updateImmediateChild(l.name, Jn.EMPTY_NODE))
            : e;
        }),
        Ir);
      function Ir(e) {
        (this.rangedFilter_ = new br(e)),
          (this.index_ = e.getIndex()),
          (this.limit_ = e.getLimit()),
          (this.reverse_ = !e.isViewFromLeft());
      }
      var Sr =
        ((Tr.prototype.hasStart = function () {
          return this.startSet_;
        }),
        (Tr.prototype.hasStartAfter = function () {
          return this.startAfterSet_;
        }),
        (Tr.prototype.hasEndBefore = function () {
          return this.endBeforeSet_;
        }),
        (Tr.prototype.isViewFromLeft = function () {
          return "" === this.viewFrom_
            ? this.startSet_
            : "l" === this.viewFrom_;
        }),
        (Tr.prototype.getIndexStartValue = function () {
          return (
            g(this.startSet_, "Only valid if start has been set"),
            this.indexStartValue_
          );
        }),
        (Tr.prototype.getIndexStartName = function () {
          return (
            g(this.startSet_, "Only valid if start has been set"),
            this.startNameSet_ ? this.indexStartName_ : Ve
          );
        }),
        (Tr.prototype.hasEnd = function () {
          return this.endSet_;
        }),
        (Tr.prototype.getIndexEndValue = function () {
          return (
            g(this.endSet_, "Only valid if end has been set"),
            this.indexEndValue_
          );
        }),
        (Tr.prototype.getIndexEndName = function () {
          return (
            g(this.endSet_, "Only valid if end has been set"),
            this.endNameSet_ ? this.indexEndName_ : He
          );
        }),
        (Tr.prototype.hasLimit = function () {
          return this.limitSet_;
        }),
        (Tr.prototype.hasAnchoredLimit = function () {
          return this.limitSet_ && "" !== this.viewFrom_;
        }),
        (Tr.prototype.getLimit = function () {
          return (
            g(this.limitSet_, "Only valid if limit has been set"), this.limit_
          );
        }),
        (Tr.prototype.getIndex = function () {
          return this.index_;
        }),
        (Tr.prototype.loadsAllData = function () {
          return !(this.startSet_ || this.endSet_ || this.limitSet_);
        }),
        (Tr.prototype.isDefault = function () {
          return this.loadsAllData() && this.index_ === Wn;
        }),
        (Tr.prototype.copy = function () {
          var e = new Tr();
          return (
            (e.limitSet_ = this.limitSet_),
            (e.limit_ = this.limit_),
            (e.startSet_ = this.startSet_),
            (e.indexStartValue_ = this.indexStartValue_),
            (e.startNameSet_ = this.startNameSet_),
            (e.indexStartName_ = this.indexStartName_),
            (e.endSet_ = this.endSet_),
            (e.indexEndValue_ = this.indexEndValue_),
            (e.endNameSet_ = this.endNameSet_),
            (e.indexEndName_ = this.indexEndName_),
            (e.index_ = this.index_),
            (e.viewFrom_ = this.viewFrom_),
            e
          );
        }),
        Tr);
      function Tr() {
        (this.limitSet_ = !1),
          (this.startSet_ = !1),
          (this.startNameSet_ = !1),
          (this.startAfterSet_ = !1),
          (this.endSet_ = !1),
          (this.endNameSet_ = !1),
          (this.endBeforeSet_ = !1),
          (this.limit_ = 0),
          (this.viewFrom_ = ""),
          (this.indexStartValue_ = null),
          (this.indexStartName_ = ""),
          (this.indexEndValue_ = null),
          (this.indexEndName_ = ""),
          (this.index_ = Wn);
      }
      function Pr(e, t, n) {
        e = e.copy();
        return (
          (e.startSet_ = !0),
          void 0 === t && (t = null),
          (e.indexStartValue_ = t),
          null != n
            ? ((e.startNameSet_ = !0), (e.indexStartName_ = n))
            : ((e.startNameSet_ = !1), (e.indexStartName_ = "")),
          e
        );
      }
      function Nr(e, t, n) {
        e = e.copy();
        return (
          (e.endSet_ = !0),
          void 0 === t && (t = null),
          (e.indexEndValue_ = t),
          void 0 !== n
            ? ((e.endNameSet_ = !0), (e.indexEndName_ = n))
            : ((e.endNameSet_ = !1), (e.indexEndName_ = "")),
          e
        );
      }
      function xr(e, t) {
        e = e.copy();
        return (e.index_ = t), e;
      }
      function kr(e) {
        var t,
          n = {};
        return (
          e.isDefault() ||
            ((t =
              e.index_ === Wn
                ? "$priority"
                : e.index_ === pr
                ? "$value"
                : e.index_ === wn
                ? "$key"
                : (g(e.index_ instanceof or, "Unrecognized index type!"),
                  e.index_.toString())),
            (n.orderBy = k(t)),
            e.startSet_ &&
              ((n.startAt = k(e.indexStartValue_)),
              e.startNameSet_ && (n.startAt += "," + k(e.indexStartName_))),
            e.endSet_ &&
              ((n.endAt = k(e.indexEndValue_)),
              e.endNameSet_ && (n.endAt += "," + k(e.indexEndName_))),
            e.limitSet_ &&
              (e.isViewFromLeft()
                ? (n.limitToFirst = e.limit_)
                : (n.limitToLast = e.limit_))),
          n
        );
      }
      function Rr(e) {
        var t,
          n = {};
        return (
          e.startSet_ &&
            ((n.sp = e.indexStartValue_),
            e.startNameSet_ && (n.sn = e.indexStartName_)),
          e.endSet_ &&
            ((n.ep = e.indexEndValue_),
            e.endNameSet_ && (n.en = e.indexEndName_)),
          e.limitSet_ &&
            ((n.l = e.limit_),
            "" === (t = e.viewFrom_) && (t = e.isViewFromLeft() ? "l" : "r"),
            (n.vf = t)),
          e.index_ !== Wn && (n.i = e.index_.toString()),
          n
        );
      }
      var Dr,
        Or =
          (n(Ar, (Dr = Ot)),
          (Ar.prototype.reportStats = function (e) {
            throw new Error("Method not implemented.");
          }),
          (Ar.getListenId_ = function (e, t) {
            return void 0 !== t
              ? "tag$" + t
              : (g(
                  e._queryParams.isDefault(),
                  "should have a tag if it's not a default query."
                ),
                e._path.toString());
          }),
          (Ar.prototype.listen = function (e, t, n, r) {
            var i = this,
              o = e._path.toString();
            this.log_("Listen called for " + o + " " + e._queryIdentifier);
            var a = Ar.getListenId_(e, n),
              s = {};
            this.listens_[a] = s;
            e = kr(e._queryParams);
            this.restRequest_(o + ".json", e, function (e, t) {
              null === (e = 404 === e ? (t = null) : e) &&
                i.onDataUpdate_(o, t, !1, n),
                O(i.listens_, a) === s &&
                  r(
                    e
                      ? 401 === e
                        ? "permission_denied"
                        : "rest_error:" + e
                      : "ok",
                    null
                  );
            });
          }),
          (Ar.prototype.unlisten = function (e, t) {
            t = Ar.getListenId_(e, t);
            delete this.listens_[t];
          }),
          (Ar.prototype.get = function (e) {
            var n = this,
              t = kr(e._queryParams),
              r = e._path.toString(),
              i = new f();
            return (
              this.restRequest_(r + ".json", t, function (e, t) {
                null === (e = 404 === e ? (t = null) : e)
                  ? (n.onDataUpdate_(r, t, !1, null), i.resolve(t))
                  : i.reject(new Error(t));
              }),
              i.promise
            );
          }),
          (Ar.prototype.refreshAuthToken = function (e) {}),
          (Ar.prototype.restRequest_ = function (r, i, o) {
            var a = this;
            ((i = void 0 === i ? {} : i).format = "export"),
              this.authTokenProvider_.getToken(!1).then(function (e) {
                e = e && e.accessToken;
                e && (i.auth = e);
                var t =
                  (a.repoInfo_.secure ? "https://" : "http://") +
                  a.repoInfo_.host +
                  r +
                  "?ns=" +
                  a.repoInfo_.namespace +
                  M(i);
                a.log_("Sending REST request for " + t);
                var n = new XMLHttpRequest();
                (n.onreadystatechange = function () {
                  if (o && 4 === n.readyState) {
                    a.log_(
                      "REST Response for " + t + " received. status:",
                      n.status,
                      "response:",
                      n.responseText
                    );
                    var e = null;
                    if (200 <= n.status && n.status < 300) {
                      try {
                        e = x(n.responseText);
                      } catch (e) {
                        Be(
                          "Failed to parse JSON response for " +
                            t +
                            ": " +
                            n.responseText
                        );
                      }
                      o(null, e);
                    } else
                      401 !== n.status &&
                        404 !== n.status &&
                        Be(
                          "Got unsuccessful REST response for " +
                            t +
                            " Status: " +
                            n.status
                        ),
                        o(n.status);
                    o = null;
                  }
                }),
                  n.open("GET", t, !0),
                  n.send();
              });
          }),
          Ar);
      function Ar(e, t, n) {
        var r = Dr.call(this) || this;
        return (
          (r.repoInfo_ = e),
          (r.onDataUpdate_ = t),
          (r.authTokenProvider_ = n),
          (r.log_ = We("p:rest:")),
          (r.listens_ = {}),
          r
        );
      }
      var Lr =
        ((Mr.prototype.getNode = function (e) {
          return this.rootNode_.getChild(e);
        }),
        (Mr.prototype.updateSnapshot = function (e, t) {
          this.rootNode_ = this.rootNode_.updateChild(e, t);
        }),
        Mr);
      function Mr() {
        this.rootNode_ = Jn.EMPTY_NODE;
      }
      function Fr() {
        return { value: null, children: new Map() };
      }
      function qr(e, t, n) {
        var r;
        Jt(t)
          ? ((e.value = n), e.children.clear())
          : null !== e.value
          ? (e.value = e.value.updateChild(t, n))
          : ((r = Ht(t)),
            e.children.has(r) || e.children.set(r, Fr()),
            qr(e.children.get(r), (t = Qt(t)), n));
      }
      function jr(e, n, r) {
        var i;
        null !== e.value
          ? r(n, e.value)
          : ((i = function (e, t) {
              jr(t, new Ut(n.toString() + "/" + e), r);
            }),
            e.children.forEach(function (e, t) {
              i(t, e);
            }));
      }
      var Wr =
        ((Ur.prototype.get = function () {
          var e = this.collection_.get(),
            n = l({}, e);
          return (
            this.last_ &&
              Ye(this.last_, function (e, t) {
                n[e] = n[e] - t;
              }),
            (this.last_ = e),
            n
          );
        }),
        Ur);
      function Ur(e) {
        (this.collection_ = e), (this.last_ = null);
      }
      var Br,
        Vr =
          ((Hr.prototype.reportStats_ = function () {
            var n = this,
              e = this.statsListener_.get(),
              r = {},
              i = !1;
            Ye(e, function (e, t) {
              0 < t && D(n.statsToReport_, e) && ((r[e] = t), (i = !0));
            }),
              i && this.server_.reportStats(r),
              Ge(
                this.reportStats_.bind(this),
                Math.floor(2 * Math.random() * 3e5)
              );
          }),
          Hr);
      function Hr(e, t) {
        (this.server_ = t),
          (this.statsToReport_ = {}),
          (this.statsListener_ = new Wr(e));
        e = 1e4 + 2e4 * Math.random();
        Ge(this.reportStats_.bind(this), Math.floor(e));
      }
      function zr() {
        return { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 };
      }
      function Qr() {
        return { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 };
      }
      function Yr(e) {
        return { fromUser: !1, fromServer: !0, queryId: e, tagged: !0 };
      }
      ((Ot = Br = Br || {})[(Ot.OVERWRITE = 0)] = "OVERWRITE"),
        (Ot[(Ot.MERGE = 1)] = "MERGE"),
        (Ot[(Ot.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
        (Ot[(Ot.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
      var Kr =
        ((Gr.prototype.operationForChild = function (e) {
          if (Jt(this.path)) {
            if (null != this.affectedTree.value)
              return (
                g(
                  this.affectedTree.children.isEmpty(),
                  "affectedTree should not have overlapping affected paths."
                ),
                this
              );
            var t = this.affectedTree.subtree(new Ut(e));
            return new Gr(Vt(), t, this.revert);
          }
          return (
            g(
              Ht(this.path) === e,
              "operationForChild called for unrelated child."
            ),
            new Gr(Qt(this.path), this.affectedTree, this.revert)
          );
        }),
        Gr);
      function Gr(e, t, n) {
        (this.path = e),
          (this.affectedTree = t),
          (this.revert = n),
          (this.type = Br.ACK_USER_WRITE),
          (this.source = zr());
      }
      var $r =
        ((Jr.prototype.operationForChild = function (e) {
          return Jt(this.path)
            ? new Jr(this.source, Vt())
            : new Jr(this.source, Qt(this.path));
        }),
        Jr);
      function Jr(e, t) {
        (this.source = e), (this.path = t), (this.type = Br.LISTEN_COMPLETE);
      }
      var Xr =
        ((Zr.prototype.operationForChild = function (e) {
          return Jt(this.path)
            ? new Zr(this.source, Vt(), this.snap.getImmediateChild(e))
            : new Zr(this.source, Qt(this.path), this.snap);
        }),
        Zr);
      function Zr(e, t, n) {
        (this.source = e),
          (this.path = t),
          (this.snap = n),
          (this.type = Br.OVERWRITE);
      }
      var ei =
        ((ti.prototype.operationForChild = function (e) {
          if (Jt(this.path)) {
            var t = this.children.subtree(new Ut(e));
            return t.isEmpty()
              ? null
              : t.value
              ? new Xr(this.source, Vt(), t.value)
              : new ti(this.source, Vt(), t);
          }
          return (
            g(
              Ht(this.path) === e,
              "Can't get a merge for a child not on the path of the operation"
            ),
            new ti(this.source, Qt(this.path), this.children)
          );
        }),
        (ti.prototype.toString = function () {
          return (
            "Operation(" +
            this.path +
            ": " +
            this.source.toString() +
            " merge: " +
            this.children.toString() +
            ")"
          );
        }),
        ti);
      function ti(e, t, n) {
        (this.source = e),
          (this.path = t),
          (this.children = n),
          (this.type = Br.MERGE);
      }
      var ni =
        ((ri.prototype.isFullyInitialized = function () {
          return this.fullyInitialized_;
        }),
        (ri.prototype.isFiltered = function () {
          return this.filtered_;
        }),
        (ri.prototype.isCompleteForPath = function (e) {
          if (Jt(e)) return this.isFullyInitialized() && !this.filtered_;
          e = Ht(e);
          return this.isCompleteForChild(e);
        }),
        (ri.prototype.isCompleteForChild = function (e) {
          return (
            (this.isFullyInitialized() && !this.filtered_) ||
            this.node_.hasChild(e)
          );
        }),
        (ri.prototype.getNode = function () {
          return this.node_;
        }),
        ri);
      function ri(e, t, n) {
        (this.node_ = e), (this.fullyInitialized_ = t), (this.filtered_ = n);
      }
      var ii,
        oi = function (e) {
          (this.query_ = e),
            (this.index_ = this.query_._queryParams.getIndex());
        };
      function ai(n, e, t, r) {
        var i = [],
          o = [];
        return (
          e.forEach(function (e) {
            var t;
            "child_changed" === e.type &&
              n.index_.indexedValueChanged(e.oldSnap, e.snapshotNode) &&
              o.push(
                ((t = e.childName),
                {
                  type: "child_moved",
                  snapshotNode: e.snapshotNode,
                  childName: t,
                })
              );
          }),
          si(n, i, "child_removed", e, r, t),
          si(n, i, "child_added", e, r, t),
          si(n, i, "child_moved", o, r, t),
          si(n, i, "child_changed", e, r, t),
          si(n, i, "value", e, r, t),
          i
        );
      }
      function si(o, a, t, e, s, u) {
        e = e.filter(function (e) {
          return e.type === t;
        });
        e.sort(function (e, t) {
          return (function (e, t, n) {
            if (null == t.childName || null == n.childName)
              throw m("Should only compare child_ events.");
            (t = new fn(t.childName, t.snapshotNode)),
              (n = new fn(n.childName, n.snapshotNode));
            return e.index_.compare(t, n);
          })(o, e, t);
        }),
          e.forEach(function (t) {
            var e,
              n,
              r,
              i =
                ((e = o),
                (r = u),
                "value" === (n = t).type ||
                  "child_removed" === n.type ||
                  (n.prevName = r.getPredecessorChildName(
                    n.childName,
                    n.snapshotNode,
                    e.index_
                  )),
                n);
            s.forEach(function (e) {
              e.respondsTo(t.type) && a.push(e.createEvent(i, o.query_));
            });
          });
      }
      function ui(e, t) {
        return { eventCache: e, serverCache: t };
      }
      function li(e, t, n, r) {
        return ui(new ni(t, n, r), e.serverCache);
      }
      function ci(e, t, n, r) {
        return ui(e.eventCache, new ni(t, n, r));
      }
      function hi(e) {
        return e.eventCache.isFullyInitialized()
          ? e.eventCache.getNode()
          : null;
      }
      function pi(e) {
        return e.serverCache.isFullyInitialized()
          ? e.serverCache.getNode()
          : null;
      }
      var di =
        ((fi.fromObject = function (e) {
          var n = new fi(null);
          return (
            Ye(e, function (e, t) {
              n = n.set(new Ut(e), t);
            }),
            n
          );
        }),
        (fi.prototype.isEmpty = function () {
          return null === this.value && this.children.isEmpty();
        }),
        (fi.prototype.findRootMostMatchingPathAndValue = function (e, t) {
          if (null != this.value && t(this.value))
            return { path: Vt(), value: this.value };
          if (Jt(e)) return null;
          var n = Ht(e),
            r = this.children.get(n);
          if (null === r) return null;
          t = r.findRootMostMatchingPathAndValue(Qt(e), t);
          return null == t
            ? null
            : { path: $t(new Ut(n), t.path), value: t.value };
        }),
        (fi.prototype.findRootMostValueAndPath = function (e) {
          return this.findRootMostMatchingPathAndValue(e, function () {
            return !0;
          });
        }),
        (fi.prototype.subtree = function (e) {
          if (Jt(e)) return this;
          var t = Ht(e),
            t = this.children.get(t);
          return null !== t ? t.subtree(Qt(e)) : new fi(null);
        }),
        (fi.prototype.set = function (e, t) {
          if (Jt(e)) return new fi(t, this.children);
          var n = Ht(e),
            t = (this.children.get(n) || new fi(null)).set(Qt(e), t),
            t = this.children.insert(n, t);
          return new fi(this.value, t);
        }),
        (fi.prototype.remove = function (e) {
          if (Jt(e))
            return this.children.isEmpty()
              ? new fi(null)
              : new fi(null, this.children);
          var t = Ht(e),
            n = this.children.get(t);
          if (n) {
            (n = n.remove(Qt(e))),
              (e = void 0),
              (e = n.isEmpty()
                ? this.children.remove(t)
                : this.children.insert(t, n));
            return null === this.value && e.isEmpty()
              ? new fi(null)
              : new fi(this.value, e);
          }
          return this;
        }),
        (fi.prototype.get = function (e) {
          if (Jt(e)) return this.value;
          var t = Ht(e),
            t = this.children.get(t);
          return t ? t.get(Qt(e)) : null;
        }),
        (fi.prototype.setTree = function (e, t) {
          if (Jt(e)) return t;
          var n = Ht(e),
            e = (this.children.get(n) || new fi(null)).setTree(Qt(e), t),
            t = void 0,
            t = e.isEmpty()
              ? this.children.remove(n)
              : this.children.insert(n, e);
          return new fi(this.value, t);
        }),
        (fi.prototype.fold = function (e) {
          return this.fold_(Vt(), e);
        }),
        (fi.prototype.fold_ = function (n, r) {
          var i = {};
          return (
            this.children.inorderTraversal(function (e, t) {
              i[e] = t.fold_($t(n, e), r);
            }),
            r(n, this.value, i)
          );
        }),
        (fi.prototype.findOnPath = function (e, t) {
          return this.findOnPath_(e, Vt(), t);
        }),
        (fi.prototype.findOnPath_ = function (e, t, n) {
          var r = !!this.value && n(t, this.value);
          if (r) return r;
          if (Jt(e)) return null;
          var i = Ht(e),
            r = this.children.get(i);
          return r ? r.findOnPath_(Qt(e), $t(t, i), n) : null;
        }),
        (fi.prototype.foreachOnPath = function (e, t) {
          return this.foreachOnPath_(e, Vt(), t);
        }),
        (fi.prototype.foreachOnPath_ = function (e, t, n) {
          if (Jt(e)) return this;
          this.value && n(t, this.value);
          var r = Ht(e),
            i = this.children.get(r);
          return i ? i.foreachOnPath_(Qt(e), $t(t, r), n) : new fi(null);
        }),
        (fi.prototype.foreach = function (e) {
          this.foreach_(Vt(), e);
        }),
        (fi.prototype.foreach_ = function (n, r) {
          this.children.inorderTraversal(function (e, t) {
            t.foreach_($t(n, e), r);
          }),
            this.value && r(n, this.value);
        }),
        (fi.prototype.foreachChild = function (n) {
          this.children.inorderTraversal(function (e, t) {
            t.value && n(e, t.value);
          });
        }),
        fi);
      function fi(e, t) {
        void 0 === t && (t = ii = ii || new Pn(Te)),
          (this.value = e),
          (this.children = t);
      }
      var _i =
        ((yi.empty = function () {
          return new yi(new di(null));
        }),
        yi);
      function yi(e) {
        this.writeTree_ = e;
      }
      function vi(e, t, n) {
        if (Jt(t)) return new _i(new di(n));
        var r = e.writeTree_.findRootMostValueAndPath(t);
        if (null != r) {
          var i = r.path,
            o = r.value,
            r = Xt(i, t),
            o = o.updateChild(r, n);
          return new _i(e.writeTree_.set(i, o));
        }
        (n = new di(n)), (n = e.writeTree_.setTree(t, n));
        return new _i(n);
      }
      function gi(e, n, t) {
        var r = e;
        return (
          Ye(t, function (e, t) {
            r = vi(r, $t(n, e), t);
          }),
          r
        );
      }
      function mi(e, t) {
        if (Jt(t)) return _i.empty();
        t = e.writeTree_.setTree(t, new di(null));
        return new _i(t);
      }
      function wi(e, t) {
        return null != bi(e, t);
      }
      function bi(e, t) {
        var n = e.writeTree_.findRootMostValueAndPath(t);
        return null != n
          ? e.writeTree_.get(n.path).getChild(Xt(n.path, t))
          : null;
      }
      function Ci(e) {
        var n = [],
          t = e.writeTree_.value;
        return (
          null != t
            ? t.isLeafNode() ||
              t.forEachChild(Wn, function (e, t) {
                n.push(new fn(e, t));
              })
            : e.writeTree_.children.inorderTraversal(function (e, t) {
                null != t.value && n.push(new fn(e, t.value));
              }),
          n
        );
      }
      function Ei(e, t) {
        if (Jt(t)) return e;
        var n = bi(e, t);
        return new _i(null != n ? new di(n) : e.writeTree_.subtree(t));
      }
      function Ii(e) {
        return e.writeTree_.isEmpty();
      }
      function Si(e, t) {
        return (function n(r, e, i) {
          {
            if (null != e.value) return i.updateChild(r, e.value);
            var o = null;
            return (
              e.children.inorderTraversal(function (e, t) {
                ".priority" === e
                  ? (g(
                      null !== t.value,
                      "Priority writes must always be leaf nodes"
                    ),
                    (o = t.value))
                  : (i = n($t(r, e), t, i));
              }),
              (i =
                !i.getChild(r).isEmpty() && null !== o
                  ? i.updateChild($t(r, ".priority"), o)
                  : i)
            );
          }
        })(Vt(), e.writeTree_, t);
      }
      function Ti(e, t) {
        return qi(t, e);
      }
      function Pi(t, n) {
        var e = t.allWrites.findIndex(function (e) {
          return e.writeId === n;
        });
        g(0 <= e, "removeWrite called with nonexistent writeId.");
        var r = t.allWrites[e];
        t.allWrites.splice(e, 1);
        for (
          var i, o = r.visible, a = !1, s = t.allWrites.length - 1;
          o && 0 <= s;

        ) {
          var u = t.allWrites[s];
          u.visible &&
            (e <= s &&
            (function (e, t) {
              {
                if (e.snap) return tn(e.path, t);
                for (var n in e.children)
                  if (e.children.hasOwnProperty(n) && tn($t(e.path, n), t))
                    return !0;
                return !1;
              }
            })(u, r.path)
              ? (o = !1)
              : tn(r.path, u.path) && (a = !0)),
            s--;
        }
        return (
          !!o &&
          (a
            ? (((i = t).visibleWrites = xi(i.allWrites, Ni, Vt())),
              0 < i.allWrites.length
                ? (i.lastWriteId = i.allWrites[i.allWrites.length - 1].writeId)
                : (i.lastWriteId = -1))
            : r.snap
            ? (t.visibleWrites = mi(t.visibleWrites, r.path))
            : Ye(r.children, function (e) {
                t.visibleWrites = mi(t.visibleWrites, $t(r.path, e));
              }),
          !0)
        );
      }
      function Ni(e) {
        return e.visible;
      }
      function xi(e, t, n) {
        for (var r = _i.empty(), i = 0; i < e.length; ++i) {
          var o = e[i];
          if (t(o)) {
            var a = o.path,
              s = void 0;
            if (o.snap)
              tn(n, a)
                ? (r = vi(r, (s = Xt(n, a)), o.snap))
                : tn(a, n) &&
                  ((s = Xt(a, n)), (r = vi(r, Vt(), o.snap.getChild(s))));
            else {
              if (!o.children)
                throw m("WriteRecord should have .snap or .children");
              tn(n, a)
                ? (r = gi(r, (s = Xt(n, a)), o.children))
                : tn(a, n) &&
                  (Jt((s = Xt(a, n)))
                    ? (r = gi(r, Vt(), o.children))
                    : (o = O(o.children, Ht(s))) &&
                      ((s = o.getChild(Qt(s))), (r = vi(r, Vt(), s))));
            }
          }
        }
        return r;
      }
      function ki(e, t, n, r, i) {
        if (r || i) {
          var o = Ei(e.visibleWrites, t);
          if (!i && Ii(o)) return n;
          if (i || null != n || wi(o, Vt()))
            return Si(
              xi(
                e.allWrites,
                function (e) {
                  return (
                    (e.visible || i) &&
                    (!r || !~r.indexOf(e.writeId)) &&
                    (tn(e.path, t) || tn(t, e.path))
                  );
                },
                t
              ),
              n || Jn.EMPTY_NODE
            );
          return null;
        }
        o = bi(e.visibleWrites, t);
        if (null != o) return o;
        e = Ei(e.visibleWrites, t);
        return Ii(e)
          ? n
          : null != n || wi(e, Vt())
          ? Si(e, n || Jn.EMPTY_NODE)
          : null;
      }
      function Ri(e, t, n, r) {
        return ki(e.writeTree, e.treePath, t, n, r);
      }
      function Di(e, t) {
        return (function (e, t, n) {
          var r = Jn.EMPTY_NODE,
            i = bi(e.visibleWrites, t);
          if (i)
            return (
              i.isLeafNode() ||
                i.forEachChild(Wn, function (e, t) {
                  r = r.updateImmediateChild(e, t);
                }),
              r
            );
          if (n) {
            var o = Ei(e.visibleWrites, t);
            return (
              n.forEachChild(Wn, function (e, t) {
                t = Si(Ei(o, new Ut(e)), t);
                r = r.updateImmediateChild(e, t);
              }),
              Ci(o).forEach(function (e) {
                r = r.updateImmediateChild(e.name, e.node);
              }),
              r
            );
          }
          return (
            Ci(Ei(e.visibleWrites, t)).forEach(function (e) {
              r = r.updateImmediateChild(e.name, e.node);
            }),
            r
          );
        })(e.writeTree, e.treePath, t);
      }
      function Oi(e, t, n, r) {
        return (
          (i = e.writeTree),
          (e = e.treePath),
          (t = t),
          (r = r),
          g(
            n || r,
            "Either existingEventSnap or existingServerSnap must exist"
          ),
          (e = $t(e, t)),
          wi(i.visibleWrites, e)
            ? null
            : Ii((e = Ei(i.visibleWrites, e)))
            ? r.getChild(t)
            : Si(e, r.getChild(t))
        );
        var i;
      }
      function Ai(e, t) {
        return (
          (n = e.writeTree), (t = $t(e.treePath, t)), bi(n.visibleWrites, t)
        );
        var n;
      }
      function Li(e, t, n, r, i, o) {
        return (function (e, t, n, r, i, o, a) {
          var s,
            e = Ei(e.visibleWrites, t);
          if (null != (t = bi(e, Vt()))) s = t;
          else {
            if (null == n) return [];
            s = Si(e, n);
          }
          if ((s = s.withIndex(a)).isEmpty() || s.isLeafNode()) return [];
          for (
            var u = [],
              l = a.getCompare(),
              c = o ? s.getReverseIteratorFrom(r, a) : s.getIteratorFrom(r, a),
              h = c.getNext();
            h && u.length < i;

          )
            0 !== l(h, r) && u.push(h), (h = c.getNext());
          return u;
        })(e.writeTree, e.treePath, t, n, r, i, o);
      }
      function Mi(e, t, n) {
        return (
          (r = e.writeTree),
          (i = e.treePath),
          (e = n),
          (t = $t(i, (n = t))),
          null != (i = bi(r.visibleWrites, t))
            ? i
            : e.isCompleteForChild(n)
            ? Si(Ei(r.visibleWrites, t), e.getNode().getImmediateChild(n))
            : null
        );
        var r, i;
      }
      function Fi(e, t) {
        return qi($t(e.treePath, t), e.writeTree);
      }
      function qi(e, t) {
        return { treePath: e, writeTree: t };
      }
      var ji =
        ((Wi.prototype.trackChildChange = function (e) {
          var t = e.type,
            n = e.childName;
          g(
            "child_added" === t ||
              "child_changed" === t ||
              "child_removed" === t,
            "Only child changes supported for tracking"
          ),
            g(
              ".priority" !== n,
              "Only non-priority child changes can be tracked."
            );
          var r = this.changeMap.get(n);
          if (r) {
            var i = r.type;
            if ("child_added" === t && "child_removed" === i)
              this.changeMap.set(n, gr(n, e.snapshotNode, r.snapshotNode));
            else if ("child_removed" === t && "child_added" === i)
              this.changeMap.delete(n);
            else if ("child_removed" === t && "child_changed" === i)
              this.changeMap.set(n, vr(n, r.oldSnap));
            else if ("child_changed" === t && "child_added" === i)
              this.changeMap.set(n, yr(n, e.snapshotNode));
            else {
              if ("child_changed" !== t || "child_changed" !== i)
                throw m(
                  "Illegal combination of changes: " +
                    e +
                    " occurred after " +
                    r
                );
              this.changeMap.set(n, gr(n, e.snapshotNode, r.oldSnap));
            }
          } else this.changeMap.set(n, e);
        }),
        (Wi.prototype.getChanges = function () {
          return Array.from(this.changeMap.values());
        }),
        Wi);
      function Wi() {
        this.changeMap = new Map();
      }
      function Ui() {}
      var Bi = new ((Ui.prototype.getCompleteChild = function (e) {
          return null;
        }),
        (Ui.prototype.getChildAfterChild = function (e, t, n) {
          return null;
        }),
        Ui)(),
        Vi =
          ((Hi.prototype.getCompleteChild = function (e) {
            var t = this.viewCache_.eventCache;
            if (t.isCompleteForChild(e))
              return t.getNode().getImmediateChild(e);
            t =
              null != this.optCompleteServerCache_
                ? new ni(this.optCompleteServerCache_, !0, !1)
                : this.viewCache_.serverCache;
            return Mi(this.writes_, e, t);
          }),
          (Hi.prototype.getChildAfterChild = function (e, t, n) {
            var r =
                null != this.optCompleteServerCache_
                  ? this.optCompleteServerCache_
                  : pi(this.viewCache_),
              e = Li(this.writes_, r, t, 1, n, e);
            return 0 === e.length ? null : e[0];
          }),
          Hi);
      function Hi(e, t, n) {
        void 0 === n && (n = null),
          (this.writes_ = e),
          (this.viewCache_ = t),
          (this.optCompleteServerCache_ = n);
      }
      function zi(e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          h,
          p,
          d = new ji();
        if (n.type === Br.OVERWRITE)
          var f = n,
            _ = f.source.fromUser
              ? Ki(e, t, f.path, f.snap, r, i, d)
              : (g(f.source.fromServer, "Unknown source."),
                (o =
                  f.source.tagged ||
                  (t.serverCache.isFiltered() && !Jt(f.path))),
                Yi(e, t, f.path, f.snap, r, i, o, d));
        else if (n.type === Br.MERGE) {
          var y = n;
          _ = y.source.fromUser
            ? ((a = e),
              (s = t),
              (u = y.path),
              (f = y.children),
              (l = r),
              (c = i),
              (h = d),
              (p = s),
              f.foreach(function (e, t) {
                e = $t(u, e);
                Gi(s, Ht(e)) && (p = Ki(a, p, e, t, l, c, h));
              }),
              f.foreach(function (e, t) {
                e = $t(u, e);
                Gi(s, Ht(e)) || (p = Ki(a, p, e, t, l, c, h));
              }),
              p)
            : (g(y.source.fromServer, "Unknown source."),
              (o = y.source.tagged || t.serverCache.isFiltered()),
              Ji(e, t, y.path, y.children, r, i, o, d));
        } else if (n.type === Br.ACK_USER_WRITE) {
          var v = n;
          _ = v.revert
            ? (function (e, t, n, r, i, o) {
                var a;
                {
                  if (null != Ai(r, n)) return t;
                  var s,
                    u,
                    l = new Vi(r, t, i),
                    c = t.eventCache.getNode(),
                    i = void 0;
                  return (
                    Jt(n) || ".priority" === Ht(n)
                      ? ((u = void 0),
                        (u = t.serverCache.isFullyInitialized()
                          ? Ri(r, pi(t))
                          : ((s = t.serverCache.getNode()),
                            g(
                              s instanceof Jn,
                              "serverChildren would be complete if leaf node"
                            ),
                            Di(r, s))),
                        (i = e.filter.updateFullNode(c, u, o)))
                      : ((s = Ht(n)),
                        null == (u = Mi(r, s, t.serverCache)) &&
                          t.serverCache.isCompleteForChild(s) &&
                          (u = c.getImmediateChild(s)),
                        (i =
                          null != u
                            ? e.filter.updateChild(c, s, u, Qt(n), l, o)
                            : t.eventCache.getNode().hasChild(s)
                            ? e.filter.updateChild(
                                c,
                                s,
                                Jn.EMPTY_NODE,
                                Qt(n),
                                l,
                                o
                              )
                            : c).isEmpty() &&
                          t.serverCache.isFullyInitialized() &&
                          (a = Ri(r, pi(t))).isLeafNode() &&
                          (i = e.filter.updateFullNode(i, a, o))),
                    (a =
                      t.serverCache.isFullyInitialized() ||
                      null != Ai(r, Vt())),
                    li(t, i, a, e.filter.filtersNodes())
                  );
                }
              })(e, t, v.path, r, i, d)
            : (function (e, t, r, n, i, o, a) {
                if (null != Ai(i, r)) return t;
                var s = t.serverCache.isFiltered(),
                  u = t.serverCache;
                {
                  if (null != n.value) {
                    if (
                      (Jt(r) && u.isFullyInitialized()) ||
                      u.isCompleteForPath(r)
                    )
                      return Yi(e, t, r, u.getNode().getChild(r), i, o, s, a);
                    if (Jt(r)) {
                      var l = new di(null);
                      return (
                        u.getNode().forEachChild(wn, function (e, t) {
                          l = l.set(new Ut(e), t);
                        }),
                        Ji(e, t, r, l, i, o, s, a)
                      );
                    }
                    return t;
                  }
                  var c = new di(null);
                  return (
                    n.foreach(function (e, t) {
                      var n = $t(r, e);
                      u.isCompleteForPath(n) &&
                        (c = c.set(e, u.getNode().getChild(n)));
                    }),
                    Ji(e, t, r, c, i, o, s, a)
                  );
                }
              })(e, t, v.path, v.affectedTree, r, i, d);
        } else {
          if (n.type !== Br.LISTEN_COMPLETE)
            throw m("Unknown operation type: " + n.type);
          (o = e),
            (v = t),
            (i = n.path),
            (e = r),
            (n = d),
            (r = v.serverCache),
            (r = ci(
              v,
              r.getNode(),
              r.isFullyInitialized() || Jt(i),
              r.isFiltered()
            )),
            (_ = Qi(o, r, i, e, Bi, n));
        }
        d = d.getChanges();
        return (
          (function (e, t, n) {
            var r = t.eventCache;
            {
              var i, o;
              r.isFullyInitialized() &&
                ((i = r.getNode().isLeafNode() || r.getNode().isEmpty()),
                (o = hi(e)),
                (0 < n.length ||
                  !e.eventCache.isFullyInitialized() ||
                  (i && !r.getNode().equals(o)) ||
                  !r.getNode().getPriority().equals(o.getPriority())) &&
                  n.push(_r(hi(t))));
            }
          })(t, _, d),
          { viewCache: _, changes: d }
        );
      }
      function Qi(e, t, n, r, i, o) {
        var a = t.eventCache;
        if (null != Ai(r, n)) return t;
        var s,
          u,
          l,
          c,
          h = void 0,
          p = void 0;
        return (
          (h = Jt(n)
            ? (g(
                t.serverCache.isFullyInitialized(),
                "If change path is empty, we must have complete server data"
              ),
              t.serverCache.isFiltered()
                ? ((s = Di(r, (s = pi(t)) instanceof Jn ? s : Jn.EMPTY_NODE)),
                  e.filter.updateFullNode(t.eventCache.getNode(), s, o))
                : ((u = Ri(r, pi(t))),
                  e.filter.updateFullNode(t.eventCache.getNode(), u, o)))
            : ".priority" === (u = Ht(n))
            ? (g(
                1 === zt(n),
                "Can't have a priority with additional path components"
              ),
              null !=
              (c = Oi(r, n, (l = a.getNode()), (p = t.serverCache.getNode())))
                ? e.filter.updatePriority(l, c)
                : a.getNode())
            : ((l = Qt(n)),
              (c = void 0),
              null !=
              (c = a.isCompleteForChild(u)
                ? ((p = t.serverCache.getNode()),
                  null != (p = Oi(r, n, a.getNode(), p))
                    ? a.getNode().getImmediateChild(u).updateChild(l, p)
                    : a.getNode().getImmediateChild(u))
                : Mi(r, u, t.serverCache))
                ? e.filter.updateChild(a.getNode(), u, c, l, i, o)
                : a.getNode())),
          li(t, h, a.isFullyInitialized() || Jt(n), e.filter.filtersNodes())
        );
      }
      function Yi(e, t, n, r, i, o, a, s) {
        var u = t.serverCache,
          l = a ? e.filter : e.filter.getIndexedFilter();
        if (Jt(n)) h = l.updateFullNode(u.getNode(), r, null);
        else if (l.filtersNodes() && !u.isFiltered())
          var c = u.getNode().updateChild(n, r),
            h = l.updateFullNode(u.getNode(), c, null);
        else {
          a = Ht(n);
          if (!u.isCompleteForPath(n) && 1 < zt(n)) return t;
          (c = Qt(n)), (r = u.getNode().getImmediateChild(a).updateChild(c, r));
          h =
            ".priority" === a
              ? l.updatePriority(u.getNode(), r)
              : l.updateChild(u.getNode(), a, r, c, Bi, null);
        }
        l = ci(t, h, u.isFullyInitialized() || Jt(n), l.filtersNodes());
        return Qi(e, l, n, i, new Vi(i, l, o), s);
      }
      function Ki(e, t, n, r, i, o, a) {
        var s,
          u,
          l = t.eventCache,
          c = new Vi(i, t, o);
        return Jt(n)
          ? ((u = e.filter.updateFullNode(t.eventCache.getNode(), r, a)),
            li(t, u, !0, e.filter.filtersNodes()))
          : ".priority" === (s = Ht(n))
          ? ((u = e.filter.updatePriority(t.eventCache.getNode(), r)),
            li(t, u, l.isFullyInitialized(), l.isFiltered()))
          : ((i = Qt(n)),
            (o = l.getNode().getImmediateChild(s)),
            (u = void 0),
            (u = Jt(i)
              ? r
              : null != (n = c.getCompleteChild(s))
              ? ".priority" === Yt(i) && n.getChild(Gt(i)).isEmpty()
                ? n
                : n.updateChild(i, r)
              : Jn.EMPTY_NODE),
            o.equals(u)
              ? t
              : li(
                  t,
                  e.filter.updateChild(l.getNode(), s, u, i, c, a),
                  l.isFullyInitialized(),
                  e.filter.filtersNodes()
                ));
      }
      function Gi(e, t) {
        return e.eventCache.isCompleteForChild(t);
      }
      function $i(e, n, t) {
        return (
          t.foreach(function (e, t) {
            n = n.updateChild(e, t);
          }),
          n
        );
      }
      function Ji(r, i, e, t, o, a, s, u) {
        if (
          i.serverCache.getNode().isEmpty() &&
          !i.serverCache.isFullyInitialized()
        )
          return i;
        var l = i,
          t = Jt(e) ? t : new di(null).setTree(e, t),
          c = i.serverCache.getNode();
        return (
          t.children.inorderTraversal(function (e, t) {
            c.hasChild(e) &&
              ((t = $i(0, i.serverCache.getNode().getImmediateChild(e), t)),
              (l = Yi(r, l, new Ut(e), t, o, a, s, u)));
          }),
          t.children.inorderTraversal(function (e, t) {
            var n = !i.serverCache.isCompleteForChild(e) && void 0 === t.value;
            c.hasChild(e) ||
              n ||
              ((t = $i(0, i.serverCache.getNode().getImmediateChild(e), t)),
              (l = Yi(r, l, new Ut(e), t, o, a, s, u)));
          }),
          l
        );
      }
      var Xi,
        Zi =
          (Object.defineProperty(eo.prototype, "query", {
            get: function () {
              return this.query_;
            },
            enumerable: !1,
            configurable: !0,
          }),
          eo);
      function eo(e, t) {
        (this.query_ = e), (this.eventRegistrations_ = []);
        var n = this.query_._queryParams,
          r = new mr(n.getIndex()),
          i = (o = n).loadsAllData()
            ? new mr(o.getIndex())
            : new (o.hasLimit() ? Er : br)(o);
        this.processor_ = { filter: i };
        var e = t.serverCache,
          n = t.eventCache,
          o = r.updateFullNode(Jn.EMPTY_NODE, e.getNode(), null),
          t = i.updateFullNode(Jn.EMPTY_NODE, n.getNode(), null),
          r = new ni(o, e.isFullyInitialized(), r.filtersNodes()),
          i = new ni(t, n.isFullyInitialized(), i.filtersNodes());
        (this.viewCache_ = ui(i, r)),
          (this.eventGenerator_ = new oi(this.query_));
      }
      function to(e) {
        return 0 === e.eventRegistrations_.length;
      }
      function no(e, t, n) {
        var r,
          i = [];
        if (
          (n &&
            (g(null == t, "A cancel should cancel all event registrations."),
            (r = e.query._path),
            e.eventRegistrations_.forEach(function (e) {
              e = e.createCancelEvent(n, r);
              e && i.push(e);
            })),
          t)
        ) {
          for (var o = [], a = 0; a < e.eventRegistrations_.length; ++a) {
            var s = e.eventRegistrations_[a];
            if (s.matches(t)) {
              if (t.hasAnyCallback()) {
                o = o.concat(e.eventRegistrations_.slice(a + 1));
                break;
              }
            } else o.push(s);
          }
          e.eventRegistrations_ = o;
        } else e.eventRegistrations_ = [];
        return i;
      }
      function ro(e, t, n, r) {
        t.type === Br.MERGE &&
          null !== t.source.queryId &&
          (g(
            pi(e.viewCache_),
            "We should always have a full cache before handling merges"
          ),
          g(
            hi(e.viewCache_),
            "Missing event cache, even though we have a server cache"
          ));
        var i = e.viewCache_,
          t = zi(e.processor_, i, t, n, r);
        return (
          (n = e.processor_),
          (r = t.viewCache),
          g(
            r.eventCache.getNode().isIndexed(n.filter.getIndex()),
            "Event snap not indexed"
          ),
          g(
            r.serverCache.getNode().isIndexed(n.filter.getIndex()),
            "Server snap not indexed"
          ),
          g(
            t.viewCache.serverCache.isFullyInitialized() ||
              !i.serverCache.isFullyInitialized(),
            "Once a server snap is complete, it should never go back"
          ),
          (e.viewCache_ = t.viewCache),
          io(e, t.changes, t.viewCache.eventCache.getNode(), null)
        );
      }
      function io(e, t, n, r) {
        r = r ? [r] : e.eventRegistrations_;
        return ai(e.eventGenerator_, t, n, r);
      }
      var oo,
        ao = function () {
          this.views = new Map();
        };
      function so(e, t, n, r) {
        var i,
          o,
          a = t.source.queryId;
        if (null !== a) {
          var s = e.views.get(a);
          return (
            g(null != s, "SyncTree gave us an op for an invalid query."),
            ro(s, t, n, r)
          );
        }
        var u = [];
        try {
          for (var l = _(e.views.values()), c = l.next(); !c.done; c = l.next())
            (s = c.value), (u = u.concat(ro(s, t, n, r)));
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            c && !c.done && (o = l.return) && o.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
        return u;
      }
      function uo(e, t, n, r, i) {
        var o = t._queryIdentifier,
          e = e.views.get(o);
        if (e) return e;
        (o = Ri(n, i ? r : null)),
          (e = !1),
          (e = !!o || ((o = r instanceof Jn ? Di(n, r) : Jn.EMPTY_NODE), !1)),
          (i = ui(new ni(o, e, !1), new ni(r, i, !1)));
        return new Zi(t, i);
      }
      function lo(e, t, n, r, i, o) {
        var a,
          o = uo(e, t, r, i, o);
        return (
          e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, o),
          (t = n),
          o.eventRegistrations_.push(t),
          (t = n),
          (o = (n = o).viewCache_.eventCache),
          (a = []),
          o.getNode().isLeafNode() ||
            o.getNode().forEachChild(Wn, function (e, t) {
              a.push(yr(e, t));
            }),
          o.isFullyInitialized() && a.push(_r(o.getNode())),
          io(n, a, o.getNode(), t)
        );
      }
      function co(e, t, n, r) {
        var i,
          o,
          a = t._queryIdentifier,
          s = [],
          u = [],
          l = yo(e);
        if ("default" === a)
          try {
            for (
              var c = _(e.views.entries()), h = c.next();
              !h.done;
              h = c.next()
            ) {
              var p = y(h.value, 2),
                d = p[0],
                f = p[1],
                u = u.concat(no(f, n, r));
              to(f) &&
                (e.views.delete(d),
                f.query._queryParams.loadsAllData() || s.push(f.query));
            }
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              h && !h.done && (o = c.return) && o.call(c);
            } finally {
              if (i) throw i.error;
            }
          }
        else
          (f = e.views.get(a)) &&
            ((u = u.concat(no(f, n, r))),
            to(f) &&
              (e.views.delete(a),
              f.query._queryParams.loadsAllData() || s.push(f.query)));
        return (
          l &&
            !yo(e) &&
            s.push(
              (g(Xi, "Reference.ts has not been loaded"),
              new Xi(t._repo, t._path))
            ),
          { removed: s, events: u }
        );
      }
      function ho(e) {
        var t,
          n,
          r = [];
        try {
          for (
            var i = _(e.views.values()), o = i.next();
            !o.done;
            o = i.next()
          ) {
            var a = o.value;
            a.query._queryParams.loadsAllData() || r.push(a);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
        return r;
      }
      function po(e, t) {
        var n,
          r,
          i,
          o,
          a = null;
        try {
          for (var s = _(e.views.values()), u = s.next(); !u.done; u = s.next())
            var l = u.value,
              a =
                a ||
                ((i = t),
                (o = void 0),
                (o = pi((l = l).viewCache_)) &&
                (l.query._queryParams.loadsAllData() ||
                  (!Jt(i) && !o.getImmediateChild(Ht(i)).isEmpty()))
                  ? o.getChild(i)
                  : null);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            u && !u.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return a;
      }
      function fo(e, t) {
        if (t._queryParams.loadsAllData()) return vo(e);
        t = t._queryIdentifier;
        return e.views.get(t);
      }
      function _o(e, t) {
        return null != fo(e, t);
      }
      function yo(e) {
        return null != vo(e);
      }
      function vo(e) {
        var t, n;
        try {
          for (
            var r = _(e.views.values()), i = r.next();
            !i.done;
            i = r.next()
          ) {
            var o = i.value;
            if (o.query._queryParams.loadsAllData()) return o;
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
        return null;
      }
      var go = 1,
        mo = function (e) {
          (this.listenProvider_ = e),
            (this.syncPointTree_ = new di(null)),
            (this.pendingWriteTree_ = {
              visibleWrites: _i.empty(),
              allWrites: [],
              lastWriteId: -1,
            }),
            (this.tagToQueryMap = new Map()),
            (this.queryToTagMap = new Map());
        };
      function wo(e, t, n, r, i) {
        var o, a, s, u;
        return (
          (o = e.pendingWriteTree_),
          (a = t),
          (s = n),
          (u = i),
          g(
            (r = r) > o.lastWriteId,
            "Stacking an older write on top of newer ones"
          ),
          void 0 === u && (u = !0),
          o.allWrites.push({ path: a, snap: s, writeId: r, visible: u }),
          u && (o.visibleWrites = vi(o.visibleWrites, a, s)),
          (o.lastWriteId = r),
          i ? No(e, new Xr(zr(), t, n)) : []
        );
      }
      function bo(e, t, n, r) {
        var i, o, a;
        (i = e.pendingWriteTree_),
          (o = t),
          (a = n),
          g(
            (r = r) > i.lastWriteId,
            "Stacking an older merge on top of newer ones"
          ),
          i.allWrites.push({ path: o, children: a, writeId: r, visible: !0 }),
          (i.visibleWrites = gi(i.visibleWrites, o, a)),
          (i.lastWriteId = r);
        n = di.fromObject(n);
        return No(e, new ei(zr(), t, n));
      }
      function Co(e, t, n) {
        void 0 === n && (n = !1);
        var r = (function (e, t) {
          for (var n = 0; n < e.allWrites.length; n++) {
            var r = e.allWrites[n];
            if (r.writeId === t) return r;
          }
          return null;
        })(e.pendingWriteTree_, t);
        if (Pi(e.pendingWriteTree_, t)) {
          var i = new di(null);
          return (
            null != r.snap
              ? (i = i.set(Vt(), !0))
              : Ye(r.children, function (e) {
                  i = i.set(new Ut(e), !0);
                }),
            No(e, new Kr(r.path, i, n))
          );
        }
        return [];
      }
      function Eo(e, t, n) {
        return No(e, new Xr(Qr(), t, n));
      }
      function Io(n, e, t, r) {
        var i = e._path,
          o = n.syncPointTree_.get(i),
          a = [];
        if (o && ("default" === e._queryIdentifier || _o(o, e))) {
          var s = co(o, e, t, r);
          0 === o.views.size && (n.syncPointTree_ = n.syncPointTree_.remove(i));
          (t = s.removed),
            (a = s.events),
            (o =
              -1 !==
              t.findIndex(function (e) {
                return e._queryParams.loadsAllData();
              })),
            (s = n.syncPointTree_.findOnPath(i, function (e, t) {
              return yo(t);
            }));
          if (o && !s) {
            i = n.syncPointTree_.subtree(i);
            if (!i.isEmpty())
              for (
                var u = i.fold(function (e, t, n) {
                    if (t && yo(t)) return [vo(t)];
                    var r = [];
                    return (
                      t && (r = ho(t)),
                      Ye(n, function (e, t) {
                        r = r.concat(t);
                      }),
                      r
                    );
                  }),
                  l = 0;
                l < u.length;
                ++l
              ) {
                var c = u[l],
                  h = c.query,
                  c = ko(n, c);
                n.listenProvider_.startListening(
                  Mo(h),
                  Ro(n, h),
                  c.hashFn,
                  c.onComplete
                );
              }
          }
          !s &&
            0 < t.length &&
            !r &&
            (o
              ? n.listenProvider_.stopListening(Mo(e), null)
              : t.forEach(function (e) {
                  var t = n.queryToTagMap.get(Do(e));
                  n.listenProvider_.stopListening(Mo(e), t);
                })),
            (function (e, t) {
              for (var n = 0; n < t.length; ++n) {
                var r,
                  i = t[n];
                i._queryParams.loadsAllData() ||
                  ((r = Do(i)),
                  (i = e.queryToTagMap.get(r)),
                  e.queryToTagMap.delete(r),
                  e.tagToQueryMap.delete(i));
              }
            })(n, t);
        }
        return a;
      }
      function So(e, t, n) {
        var r = t._path,
          i = null,
          o = !1;
        e.syncPointTree_.foreachOnPath(r, function (e, t) {
          e = Xt(e, r);
          (i = i || po(t, e)), (o = o || yo(t));
        });
        var a = e.syncPointTree_.get(r);
        a
          ? ((o = o || yo(a)), (i = i || po(a, Vt())))
          : ((a = new ao()), (e.syncPointTree_ = e.syncPointTree_.set(r, a))),
          null != i
            ? (c = !0)
            : ((c = !1),
              (i = Jn.EMPTY_NODE),
              e.syncPointTree_.subtree(r).foreachChild(function (e, t) {
                t = po(t, Vt());
                t && (i = i.updateImmediateChild(e, t));
              }));
        var s,
          u,
          l = _o(a, t);
        l ||
          t._queryParams.loadsAllData() ||
          ((s = Do(t)),
          g(!e.queryToTagMap.has(s), "View does not exist, but we have a tag"),
          (u = go++),
          e.queryToTagMap.set(s, u),
          e.tagToQueryMap.set(u, s));
        var c = lo(a, t, n, Ti(e.pendingWriteTree_, r), i, c);
        return (
          l ||
            o ||
            ((a = fo(a, t)),
            (c = c.concat(
              (function (e, t, n) {
                var r = t._path,
                  i = Ro(e, t),
                  n = ko(e, n),
                  n = e.listenProvider_.startListening(
                    Mo(t),
                    i,
                    n.hashFn,
                    n.onComplete
                  ),
                  r = e.syncPointTree_.subtree(r);
                if (i)
                  g(
                    !yo(r.value),
                    "If we're adding a query, it shouldn't be shadowed"
                  );
                else
                  for (
                    var o = r.fold(function (e, t, n) {
                        if (!Jt(e) && t && yo(t)) return [vo(t).query];
                        var r = [];
                        return (
                          t &&
                            (r = r.concat(
                              ho(t).map(function (e) {
                                return e.query;
                              })
                            )),
                          Ye(n, function (e, t) {
                            r = r.concat(t);
                          }),
                          r
                        );
                      }),
                      a = 0;
                    a < o.length;
                    ++a
                  ) {
                    var s = o[a];
                    e.listenProvider_.stopListening(Mo(s), Ro(e, s));
                  }
                return n;
              })(e, t, a)
            ))),
          c
        );
      }
      function To(e, n, t) {
        var r = e.pendingWriteTree_,
          e = e.syncPointTree_.findOnPath(n, function (e, t) {
            e = po(t, Xt(e, n));
            if (e) return e;
          });
        return ki(r, n, e, t, !0);
      }
      function Po(e, t) {
        var n = t._path,
          r = null;
        e.syncPointTree_.foreachOnPath(n, function (e, t) {
          e = Xt(e, n);
          r = r || po(t, e);
        });
        var i = e.syncPointTree_.get(n);
        i
          ? (r = r || po(i, Vt()))
          : ((i = new ao()), (e.syncPointTree_ = e.syncPointTree_.set(n, i)));
        var o = null != r,
          a = o ? new ni(r, !0, !1) : null,
          o = uo(
            i,
            t,
            Ti(e.pendingWriteTree_, t._path),
            o ? a.getNode() : Jn.EMPTY_NODE,
            o
          );
        return hi(o.viewCache_);
      }
      function No(e, t) {
        return (function e(t, n, r, i) {
          {
            if (Jt(t.path)) return xo(t, n, r, i);
            var o = n.get(Vt());
            null == r && null != o && (r = po(o, Vt()));
            var a = [],
              s = Ht(t.path),
              u = t.operationForChild(s),
              l = n.children.get(s);
            return (
              l &&
                u &&
                ((n = r ? r.getImmediateChild(s) : null),
                (s = Fi(i, s)),
                (a = a.concat(e(u, l, n, s)))),
              (a = o ? a.concat(so(o, t, i, r)) : a)
            );
          }
        })(t, e.syncPointTree_, null, Ti(e.pendingWriteTree_, Vt()));
      }
      function xo(i, e, o, a) {
        var t = e.get(Vt());
        null == o && null != t && (o = po(t, Vt()));
        var s = [];
        return (
          e.children.inorderTraversal(function (e, t) {
            var n = o ? o.getImmediateChild(e) : null,
              r = Fi(a, e),
              e = i.operationForChild(e);
            e && (s = s.concat(xo(e, t, n, r)));
          }),
          (s = t ? s.concat(so(t, i, a, o)) : s)
        );
      }
      function ko(r, e) {
        var i = e.query,
          o = Ro(r, i);
        return {
          hashFn: function () {
            return (e.viewCache_.serverCache.getNode() || Jn.EMPTY_NODE).hash();
          },
          onComplete: function (e) {
            if ("ok" === e)
              return o
                ? (function (e, t, n) {
                    var r = Oo(e, n);
                    if (r) {
                      (n = Ao(r)),
                        (r = n.path),
                        (n = n.queryId),
                        (t = Xt(r, t));
                      return Lo(e, r, new $r(Yr(n), t));
                    }
                    return [];
                  })(r, i._path, o)
                : ((t = r), (n = i._path), No(t, new $r(Qr(), n)));
            var t,
              n,
              n =
                ((n = "Unknown Error"),
                "too_big" === (e = e)
                  ? (n =
                      "The data requested exceeds the maximum size that can be accessed with a single request.")
                  : "permission_denied" === e
                  ? (n =
                      "Client doesn't have permission to access the desired data.")
                  : "unavailable" === e && (n = "The service is unavailable"),
                ((n = new Error(
                  e + " at " + i._path.toString() + ": " + n
                )).code = e.toUpperCase()),
                n);
            return Io(r, i, null, n);
          },
        };
      }
      function Ro(e, t) {
        t = Do(t);
        return e.queryToTagMap.get(t);
      }
      function Do(e) {
        return e._path.toString() + "$" + e._queryIdentifier;
      }
      function Oo(e, t) {
        return e.tagToQueryMap.get(t);
      }
      function Ao(e) {
        var t = e.indexOf("$");
        return (
          g(-1 !== t && t < e.length - 1, "Bad queryKey."),
          { queryId: e.substr(t + 1), path: new Ut(e.substr(0, t)) }
        );
      }
      function Lo(e, t, n) {
        var r = e.syncPointTree_.get(t);
        return (
          g(r, "Missing sync point for query tag that we're tracking"),
          so(r, n, Ti(e.pendingWriteTree_, t), null)
        );
      }
      function Mo(e) {
        return e._queryParams.loadsAllData() && !e._queryParams.isDefault()
          ? (g(oo, "Reference.ts has not been loaded"),
            new oo(e._repo, e._path))
          : e;
      }
      var Fo =
        ((qo.prototype.getImmediateChild = function (e) {
          return new qo(this.node_.getImmediateChild(e));
        }),
        (qo.prototype.node = function () {
          return this.node_;
        }),
        qo);
      function qo(e) {
        this.node_ = e;
      }
      var jo =
        ((Wo.prototype.getImmediateChild = function (e) {
          e = $t(this.path_, e);
          return new Wo(this.syncTree_, e);
        }),
        (Wo.prototype.node = function () {
          return To(this.syncTree_, this.path_);
        }),
        Wo);
      function Wo(e, t) {
        (this.syncTree_ = e), (this.path_ = t);
      }
      var Uo = function (e) {
          return (
            ((e = e || {}).timestamp = e.timestamp || new Date().getTime()), e
          );
        },
        Bo = function (e, t, n) {
          return e && "object" == typeof e
            ? (g(".sv" in e, "Unexpected leaf node or priority contents"),
              "string" == typeof e[".sv"]
                ? Vo(e[".sv"], t, n)
                : "object" == typeof e[".sv"]
                ? Ho(e[".sv"], t)
                : void g(
                    !1,
                    "Unexpected server value: " + JSON.stringify(e, null, 2)
                  ))
            : e;
        },
        Vo = function (e, t, n) {
          if ("timestamp" === e) return n.timestamp;
          g(!1, "Unexpected server value: " + e);
        },
        Ho = function (e, t, n) {
          e.hasOwnProperty("increment") ||
            g(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
          e = e.increment;
          "number" != typeof e && g(!1, "Unexpected increment value: " + e);
          t = t.node();
          if (
            (g(null != t, "Expected ChildrenNode.EMPTY_NODE for nulls"),
            !t.isLeafNode())
          )
            return e;
          t = t.getValue();
          return "number" != typeof t ? e : t + e;
        },
        zo = function (e, t, n, r) {
          return Yo(t, new jo(n, e), r);
        },
        Qo = function (e, t, n) {
          return Yo(e, new Fo(t), n);
        };
      function Yo(e, r, i) {
        var t = e.getPriority().val(),
          n = Bo(t, r.getImmediateChild(".priority"), i);
        if (e.isLeafNode()) {
          var o = e,
            t = Bo(o.getValue(), r, i);
          return t !== o.getValue() || n !== o.getPriority().val()
            ? new Fn(t, nr(n))
            : e;
        }
        var e = e,
          a = e;
        return (
          n !== e.getPriority().val() && (a = a.updatePriority(new Fn(n))),
          e.forEachChild(Wn, function (e, t) {
            var n = Yo(t, r.getImmediateChild(e), i);
            n !== t && (a = a.updateImmediateChild(e, n));
          }),
          a
        );
      }
      var Ko = function (e, t, n) {
        void 0 === e && (e = ""),
          void 0 === t && (t = null),
          void 0 === n && (n = { children: {}, childCount: 0 }),
          (this.name = e),
          (this.parent = t),
          (this.node = n);
      };
      function Go(e, t) {
        for (
          var n = t instanceof Ut ? t : new Ut(t), r = e, i = Ht(n);
          null !== i;

        )
          var o = O(r.node.children, i) || { children: {}, childCount: 0 },
            r = new Ko(i, r, o),
            i = Ht((n = Qt(n)));
        return r;
      }
      function $o(e) {
        return e.node.value;
      }
      function Jo(e, t) {
        (e.node.value = t), ta(e);
      }
      function Xo(e) {
        return 0 < e.node.childCount;
      }
      function Zo(n, r) {
        Ye(n.node.children, function (e, t) {
          r(new Ko(e, n, t));
        });
      }
      function ea(e) {
        return new Ut(null === e.parent ? e.name : ea(e.parent) + "/" + e.name);
      }
      function ta(e) {
        var t, n, r, i;
        null !== e.parent &&
          ((t = e.parent),
          (n = e.name),
          (i = (function (e) {
            return void 0 === $o(e) && !Xo(e);
          })((r = e))),
          (e = D(t.node.children, n)),
          i && e
            ? (delete t.node.children[n], t.node.childCount--, ta(t))
            : i ||
              e ||
              ((t.node.children[n] = r.node), t.node.childCount++, ta(t)));
      }
      function na(e) {
        return "string" == typeof e && 0 !== e.length && !sa.test(e);
      }
      function ra(e) {
        return "string" == typeof e && 0 !== e.length && !ua.test(e);
      }
      function ia(e, t, n, r) {
        if (!r || void 0 !== t) {
          var i = W(e, "values");
          if (!t || "object" != typeof t || Array.isArray(t))
            throw new Error(
              i + " must be an object containing the children to replace."
            );
          var o = [];
          Ye(t, function (e, t) {
            e = new Ut(e);
            if ((pa(i, t, $t(n, e)), ".priority" === Yt(e) && !ca(t)))
              throw new Error(
                i +
                  "contains an invalid value for '" +
                  e.toString() +
                  "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
              );
            o.push(e);
          }),
            (function (e, t) {
              for (var n = 0; n < t.length; n++)
                for (var r, i = Kt((r = t[n])), o = 0; o < i.length; o++)
                  if ((".priority" !== i[o] || o !== i.length - 1) && !na(i[o]))
                    throw new Error(
                      e +
                        "contains an invalid key (" +
                        i[o] +
                        ") in path " +
                        r.toString() +
                        '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                    );
              t.sort(Zt);
              var a = null;
              for (n = 0; n < t.length; n++) {
                if (((r = t[n]), null !== a && tn(a, r)))
                  throw new Error(
                    e +
                      "contains a path " +
                      a.toString() +
                      " that is ancestor of another path " +
                      r.toString()
                  );
                a = r;
              }
            })(i, o);
        }
      }
      function oa(e, t, n) {
        if (!n || void 0 !== t) {
          if (Se(t))
            throw new Error(
              W(e, "priority") +
                "is " +
                t.toString() +
                ", but must be a valid Firebase priority (a string, finite number, server value, or null)."
            );
          if (!ca(t))
            throw new Error(
              W(e, "priority") +
                "must be a valid Firebase priority (a string, finite number, server value, or null)."
            );
        }
      }
      function aa(e, t, n, r) {
        if (!((r && void 0 === n) || na(n)))
          throw new Error(
            W(e, t) +
              'was an invalid key = "' +
              n +
              '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
          );
      }
      var sa = /[\[\].#$\/\u0000-\u001F\u007F]/,
        ua = /[\[\].#$\u0000-\u001F\u007F]/,
        la = 10485760,
        ca = function (e) {
          return (
            null === e ||
            "string" == typeof e ||
            ("number" == typeof e && !Se(e)) ||
            (e && "object" == typeof e && D(e, ".sv"))
          );
        },
        ha = function (e, t, n, r) {
          (r && void 0 === t) || pa(W(e, "value"), t, n);
        },
        pa = function (r, e, t) {
          var i = t instanceof Ut ? new nn(t, r) : t;
          if (void 0 === e) throw new Error(r + "contains undefined " + on(i));
          if ("function" == typeof e)
            throw new Error(
              r +
                "contains a function " +
                on(i) +
                " with contents = " +
                e.toString()
            );
          if (Se(e))
            throw new Error(r + "contains " + e.toString() + " " + on(i));
          if ("string" == typeof e && e.length > la / 3 && V(e) > la)
            throw new Error(
              r +
                "contains a string greater than " +
                la +
                " utf8 bytes " +
                on(i) +
                " ('" +
                e.substring(0, 50) +
                "...')"
            );
          if (e && "object" == typeof e) {
            var o = !1,
              a = !1;
            if (
              (Ye(e, function (e, t) {
                if (".value" === e) o = !0;
                else if (".priority" !== e && ".sv" !== e && ((a = !0), !na(e)))
                  throw new Error(
                    r +
                      " contains an invalid key (" +
                      e +
                      ") " +
                      on(i) +
                      '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                  );
                var n;
                (n = e),
                  0 < (e = i).parts_.length && (e.byteLength_ += 1),
                  e.parts_.push(n),
                  (e.byteLength_ += V(n)),
                  rn(e),
                  pa(r, t, i),
                  (t = (e = i).parts_.pop()),
                  (e.byteLength_ -= V(t)),
                  0 < e.parts_.length && --e.byteLength_;
              }),
              o && a)
            )
              throw new Error(
                r +
                  ' contains ".value" child ' +
                  on(i) +
                  " in addition to actual children."
              );
          }
        },
        da = function (e, t, n, r) {
          if (!((r && void 0 === n) || ra(n)))
            throw new Error(
              W(e, t) +
                'was an invalid path = "' +
                n +
                '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
            );
        },
        fa = function (e, t, n, r) {
          (n = n && n.replace(/^\/*\.info(\/|$)/, "/")), da(e, t, n, r);
        },
        _a = function (e, t) {
          if (".info" === Ht(t))
            throw new Error(e + " failed = Can't modify data under /.info/");
        },
        ya = function (e, t) {
          var n = t.path.toString();
          if (
            "string" != typeof t.repoInfo.host ||
            0 === t.repoInfo.host.length ||
            (!na(t.repoInfo.namespace) &&
              "localhost" !== t.repoInfo.host.split(":")[0]) ||
            (0 !== n.length &&
              ((n = (n = n) && n.replace(/^\/*\.info(\/|$)/, "/")), !ra(n)))
          )
            throw new Error(
              W(e, "url") +
                'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
            );
        },
        va = function () {
          (this.eventLists_ = []), (this.recursionDepth_ = 0);
        };
      function ga(e, t) {
        for (var n = null, r = 0; r < t.length; r++) {
          var i = t[r],
            o = i.getPath();
          null === n || en(o, n.path) || (e.eventLists_.push(n), (n = null)),
            (n = null === n ? { events: [], path: o } : n).events.push(i);
        }
        n && e.eventLists_.push(n);
      }
      function ma(e, t, n) {
        ga(e, n),
          ba(e, function (e) {
            return en(e, t);
          });
      }
      function wa(e, t, n) {
        ga(e, n),
          ba(e, function (e) {
            return tn(e, t) || tn(t, e);
          });
      }
      function ba(e, t) {
        e.recursionDepth_++;
        for (var n = !0, r = 0; r < e.eventLists_.length; r++) {
          var i = e.eventLists_[r];
          i &&
            (t(i.path)
              ? ((function (e) {
                  for (var t = 0; t < e.events.length; t++) {
                    var n,
                      r = e.events[t];
                    null !== r &&
                      ((e.events[t] = null),
                      (n = r.getEventRunner()),
                      Me && je("event: " + r.toString()),
                      et(n));
                  }
                })(e.eventLists_[r]),
                (e.eventLists_[r] = null))
              : (n = !1));
        }
        n && (e.eventLists_ = []), e.recursionDepth_--;
      }
      var Ca = "repo_interrupt",
        Ea = 25,
        Ia =
          ((Sa.prototype.toString = function () {
            return (
              (this.repoInfo_.secure ? "https://" : "http://") +
              this.repoInfo_.host
            );
          }),
          Sa);
      function Sa(e, t, n) {
        (this.repoInfo_ = e),
          (this.forceRestClient_ = t),
          (this.authTokenProvider_ = n),
          (this.dataUpdateCount = 0),
          (this.statsListener_ = null),
          (this.eventQueue_ = new va()),
          (this.nextWriteId_ = 1),
          (this.interceptServerDataCallback_ = null),
          (this.onDisconnect_ = Fr()),
          (this.transactionQueueTree_ = new Ko()),
          (this.persistentConnection_ = null),
          (this.key = this.repoInfo_.toURLString());
      }
      function Ta(a, e, t) {
        if (
          ((a.stats_ = _t(a.repoInfo_)),
          a.forceRestClient_ ||
            0 <=
              (
                ("object" == typeof window &&
                  window.navigator &&
                  window.navigator.userAgent) ||
                ""
              ).search(
                /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
              ))
        )
          (a.server_ = new Or(
            a.repoInfo_,
            function (e, t, n, r) {
              xa(a, e, t, n, r);
            },
            a.authTokenProvider_
          )),
            setTimeout(function () {
              return ka(a, !0);
            }, 0);
        else {
          if (null != t) {
            if ("object" != typeof t)
              throw new Error(
                "Only objects are supported for option databaseAuthVariableOverride"
              );
            try {
              k(t);
            } catch (e) {
              throw new Error("Invalid authOverride provided: " + e);
            }
          }
          (a.persistentConnection_ = new pn(
            a.repoInfo_,
            e,
            function (e, t, n, r) {
              xa(a, e, t, n, r);
            },
            function (e) {
              ka(a, e);
            },
            function (e) {
              var n;
              (n = a),
                Ye(e, function (e, t) {
                  Ra(n, e, t);
                });
            },
            a.authTokenProvider_,
            t
          )),
            (a.server_ = a.persistentConnection_);
        }
        var n;
        a.authTokenProvider_.addTokenChangeListener(function (e) {
          a.server_.refreshAuthToken(e);
        }),
          (a.statsReporter_ =
            ((n = a.repoInfo_),
            (e = function () {
              return new Vr(a.stats_, a.server_);
            }),
            (n = n.toString()),
            ft[n] || (ft[n] = e()),
            ft[n])),
          (a.infoData_ = new Lr()),
          (a.infoSyncTree_ = new mo({
            startListening: function (e, t, n, r) {
              var i = [],
                o = a.infoData_.getNode(e._path);
              return (
                o.isEmpty() ||
                  ((i = Eo(a.infoSyncTree_, e._path, o)),
                  setTimeout(function () {
                    r("ok");
                  }, 0)),
                i
              );
            },
            stopListening: function () {},
          })),
          Ra(a, "connected", !1),
          (a.serverSyncTree_ = new mo({
            startListening: function (n, e, t, r) {
              return (
                a.server_.listen(n, t, e, function (e, t) {
                  t = r(e, t);
                  wa(a.eventQueue_, n._path, t);
                }),
                []
              );
            },
            stopListening: function (e, t) {
              a.server_.unlisten(e, t);
            },
          }));
      }
      function Pa(e) {
        e = e.infoData_.getNode(new Ut(".info/serverTimeOffset")).val() || 0;
        return new Date().getTime() + e;
      }
      function Na(e) {
        return Uo({ timestamp: Pa(e) });
      }
      function xa(e, t, n, r, i) {
        e.dataUpdateCount++;
        var o = new Ut(t);
        n = e.interceptServerDataCallback_
          ? e.interceptServerDataCallback_(t, n)
          : n;
        var a,
          s,
          u,
          l = [],
          c = o;
        0 <
          (l = i
            ? r
              ? ((a = L(n, function (e) {
                  return nr(e);
                })),
                (function (e, t, n, r) {
                  var i = Oo(e, r);
                  if (i) {
                    (r = Ao(i)),
                      (i = r.path),
                      (r = r.queryId),
                      (t = Xt(i, t)),
                      (n = di.fromObject(n));
                    return Lo(e, i, new ei(Yr(r), t, n));
                  }
                  return [];
                })(e.serverSyncTree_, o, a, i))
              : ((t = nr(n)),
                (a = e.serverSyncTree_),
                (s = o),
                (u = t),
                null == (i = Oo(a, (t = i)))
                  ? []
                  : ((t = Ao(i)),
                    (i = t.path),
                    (t = t.queryId),
                    (s = Xt(i, s)),
                    Lo(a, i, new Xr(Yr(t), s, u))))
            : r
            ? ((s = L(n, function (e) {
                return nr(e);
              })),
              (u = e.serverSyncTree_),
              (r = o),
              (s = s),
              (s = di.fromObject(s)),
              No(u, new ei(Qr(), r, s)))
            : ((n = nr(n)), Eo(e.serverSyncTree_, o, n))).length &&
          (c = Ba(e, o)),
          wa(e.eventQueue_, c, l);
      }
      function ka(e, t) {
        Ra(e, "connected", t),
          !1 === t &&
            (function (n) {
              qa(n, "onDisconnectEvents");
              var r = Na(n),
                i = Fr();
              jr(n.onDisconnect_, Vt(), function (e, t) {
                t = zo(e, t, n.serverSyncTree_, r);
                qr(i, e, t);
              });
              var o = [];
              jr(i, Vt(), function (e, t) {
                o = o.concat(Eo(n.serverSyncTree_, e, t));
                e = Qa(n, e);
                Ba(n, e);
              }),
                (n.onDisconnect_ = Fr()),
                wa(n.eventQueue_, Vt(), o);
            })(e);
      }
      function Ra(e, t, n) {
        (t = new Ut("/.info/" + t)), (n = nr(n));
        e.infoData_.updateSnapshot(t, n);
        n = Eo(e.infoSyncTree_, t, n);
        wa(e.eventQueue_, t, n);
      }
      function Da(e) {
        return e.nextWriteId_++;
      }
      function Oa(r, i, e, t, o) {
        qa(r, "set", { path: i.toString(), value: e, priority: t });
        var n = Na(r),
          e = nr(e, t),
          t = To(r.serverSyncTree_, i),
          n = Qo(e, t, n),
          a = Da(r),
          n = wo(r.serverSyncTree_, i, n, a, !0);
        ga(r.eventQueue_, n),
          r.server_.put(i.toString(), e.val(!0), function (e, t) {
            var n = "ok" === e;
            n || Be("set at " + i + " failed: " + e);
            n = Co(r.serverSyncTree_, a, !n);
            wa(r.eventQueue_, i, n), ja(0, o, e, t);
          });
        e = Qa(r, i);
        Ba(r, e), wa(r.eventQueue_, e, []);
      }
      function Aa(n, r, i) {
        n.server_.onDisconnectCancel(r.toString(), function (e, t) {
          "ok" === e &&
            !(function e(n, t) {
              if (Jt(t)) return (n.value = null), n.children.clear(), !0;
              if (null !== n.value) {
                if (n.value.isLeafNode()) return !1;
                var r = n.value;
                return (
                  (n.value = null),
                  r.forEachChild(Wn, function (e, t) {
                    qr(n, new Ut(e), t);
                  }),
                  e(n, t)
                );
              }
              if (0 < n.children.size)
                return (
                  (r = Ht(t)),
                  (t = Qt(t)),
                  n.children.has(r) &&
                    e(n.children.get(r), t) &&
                    n.children.delete(r),
                  0 === n.children.size
                );
              return !0;
            })(n.onDisconnect_, r),
            ja(0, i, e, t);
        });
      }
      function La(n, r, e, i) {
        var o = nr(e);
        n.server_.onDisconnectPut(r.toString(), o.val(!0), function (e, t) {
          "ok" === e && qr(n.onDisconnect_, r, o), ja(0, i, e, t);
        });
      }
      function Ma(e, t, n) {
        n =
          ".info" === Ht(t._path)
            ? Io(e.infoSyncTree_, t, n)
            : Io(e.serverSyncTree_, t, n);
        ma(e.eventQueue_, t._path, n);
      }
      function Fa(e) {
        e.persistentConnection_ && e.persistentConnection_.interrupt(Ca);
      }
      function qa(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = "";
        e.persistentConnection_ && (r = e.persistentConnection_.id + ":"),
          je.apply(void 0, a([r], y(t)));
      }
      function ja(e, n, r, i) {
        n &&
          et(function () {
            var e, t;
            "ok" === r
              ? n(null)
              : ((t = e = (r || "error").toUpperCase()),
                i && (t += ": " + i),
                ((t = new Error(t)).code = e),
                n(t));
          });
      }
      function Wa(e, t, n) {
        return To(e.serverSyncTree_, t, n) || Jn.EMPTY_NODE;
      }
      function Ua(t, e) {
        var n;
        (e = void 0 === e ? t.transactionQueueTree_ : e) || za(t, e),
          $o(e)
            ? ((n = Ha(t, e)),
              g(0 < n.length, "Sending zero length transaction queue"),
              n.every(function (e) {
                return 0 === e.status;
              }) &&
                (function (i, o, a) {
                  for (
                    var e = a.map(function (e) {
                        return e.currentWriteId;
                      }),
                      t = Wa(i, o, e),
                      n = t,
                      e = t.hash(),
                      r = 0;
                    r < a.length;
                    r++
                  ) {
                    var s = a[r];
                    g(
                      0 === s.status,
                      "tryToSendTransactionQueue_: items in queue should all be run."
                    ),
                      (s.status = 1),
                      s.retryCount++;
                    var u = Xt(o, s.path);
                    n = n.updateChild(u, s.currentOutputSnapshotRaw);
                  }
                  var t = n.val(!0),
                    l = o;
                  i.server_.put(
                    l.toString(),
                    t,
                    function (e) {
                      qa(i, "transaction put response", {
                        path: l.toString(),
                        status: e,
                      });
                      var t = [];
                      if ("ok" === e) {
                        for (var n = [], r = 0; r < a.length; r++)
                          !(function (e) {
                            (a[e].status = 2),
                              (t = t.concat(
                                Co(i.serverSyncTree_, a[e].currentWriteId)
                              )),
                              a[e].onComplete &&
                                n.push(function () {
                                  return a[e].onComplete(
                                    null,
                                    !0,
                                    a[e].currentOutputSnapshotResolved
                                  );
                                }),
                              a[e].unwatcher();
                          })(r);
                        za(i, Go(i.transactionQueueTree_, o)),
                          Ua(i, i.transactionQueueTree_),
                          wa(i.eventQueue_, o, t);
                        for (r = 0; r < n.length; r++) et(n[r]);
                      } else {
                        if ("datastale" === e)
                          for (r = 0; r < a.length; r++)
                            3 === a[r].status
                              ? (a[r].status = 4)
                              : (a[r].status = 0);
                        else {
                          Be(
                            "transaction at " + l.toString() + " failed: " + e
                          );
                          for (r = 0; r < a.length; r++)
                            (a[r].status = 4), (a[r].abortReason = e);
                        }
                        Ba(i, o);
                      }
                    },
                    e
                  );
                })(t, ea(e), n))
            : Xo(e) &&
              Zo(e, function (e) {
                Ua(t, e);
              });
      }
      function Ba(e, t) {
        var n = Va(e, t),
          t = ea(n);
        return (
          (function (u, l, c) {
            if (0 === l.length) return;
            for (
              var h = [],
                p = [],
                d = l
                  .filter(function (e) {
                    return 0 === e.status;
                  })
                  .map(function (e) {
                    return e.currentWriteId;
                  }),
                e = 0;
              e < l.length;
              e++
            )
              !(function (e) {
                var t,
                  n,
                  r,
                  i,
                  o = l[e],
                  a = Xt(c, o.path),
                  s = !1;
                g(
                  null !== a,
                  "rerunTransactionsUnderNode_: relativePath should not be null."
                ),
                  4 === o.status
                    ? ((s = !0),
                      (t = o.abortReason),
                      (p = p.concat(
                        Co(u.serverSyncTree_, o.currentWriteId, !0)
                      )))
                    : 0 === o.status &&
                      (p =
                        o.retryCount >= Ea
                          ? ((s = !0),
                            (t = "maxretry"),
                            p.concat(
                              Co(u.serverSyncTree_, o.currentWriteId, !0)
                            ))
                          : ((n = Wa(u, o.path, d)),
                            (o.currentInputSnapshot = n),
                            void 0 !== (i = l[e].update(n.val()))
                              ? (pa(
                                  "transaction failed: Data returned ",
                                  i,
                                  o.path
                                ),
                                (r = nr(i)),
                                ("object" == typeof i &&
                                  null != i &&
                                  D(i, ".priority")) ||
                                  (r = r.updatePriority(n.getPriority())),
                                (a = o.currentWriteId),
                                (i = Na(u)),
                                (i = Qo(r, n, i)),
                                (o.currentOutputSnapshotRaw = r),
                                (o.currentOutputSnapshotResolved = i),
                                (o.currentWriteId = Da(u)),
                                d.splice(d.indexOf(a), 1),
                                (p = p.concat(
                                  wo(
                                    u.serverSyncTree_,
                                    o.path,
                                    i,
                                    o.currentWriteId,
                                    o.applyLocally
                                  )
                                )).concat(Co(u.serverSyncTree_, a, !0)))
                              : ((s = !0),
                                (t = "nodata"),
                                p.concat(
                                  Co(u.serverSyncTree_, o.currentWriteId, !0)
                                )))),
                  wa(u.eventQueue_, c, p),
                  (p = []),
                  s &&
                    ((l[e].status = 2),
                    (s = l[e].unwatcher),
                    setTimeout(s, Math.floor(0)),
                    l[e].onComplete &&
                      ("nodata" === t
                        ? h.push(function () {
                            return l[e].onComplete(
                              null,
                              !1,
                              l[e].currentInputSnapshot
                            );
                          })
                        : h.push(function () {
                            return l[e].onComplete(new Error(t), !1, null);
                          })));
              })(e);
            za(u, u.transactionQueueTree_);
            for (e = 0; e < h.length; e++) et(h[e]);
            Ua(u, u.transactionQueueTree_);
          })(e, Ha(e, n), t),
          t
        );
      }
      function Va(e, t) {
        for (
          var n = e.transactionQueueTree_, r = Ht(t);
          null !== r && void 0 === $o(n);

        )
          (n = Go(n, r)), (r = Ht((t = Qt(t))));
        return n;
      }
      function Ha(e, t) {
        var n = [];
        return (
          (function t(n, e, r) {
            var i = $o(e);
            if (i) for (var o = 0; o < i.length; o++) r.push(i[o]);
            Zo(e, function (e) {
              t(n, e, r);
            });
          })(e, t, n),
          n.sort(function (e, t) {
            return e.order - t.order;
          }),
          n
        );
      }
      function za(t, e) {
        var n = $o(e);
        if (n) {
          for (var r = 0, i = 0; i < n.length; i++)
            2 !== n[i].status && ((n[r] = n[i]), r++);
          (n.length = r), Jo(e, 0 < n.length ? n : void 0);
        }
        Zo(e, function (e) {
          za(t, e);
        });
      }
      function Qa(t, e) {
        var n = ea(Va(t, e)),
          e = Go(t.transactionQueueTree_, e);
        return (
          (function (e, t, n) {
            for (var r = n ? e : e.parent; null !== r; ) {
              if (t(r)) return;
              r = r.parent;
            }
          })(e, function (e) {
            Ya(t, e);
          }),
          Ya(t, e),
          (function t(e, n, r, i) {
            r && !i && n(e),
              Zo(e, function (e) {
                t(e, n, !0, i);
              }),
              r && i && n(e);
          })(e, function (e) {
            Ya(t, e);
          }),
          n
        );
      }
      function Ya(e, t) {
        var n = $o(t);
        if (n) {
          for (var r = [], i = [], o = -1, a = 0; a < n.length; a++)
            3 === n[a].status ||
              (1 === n[a].status
                ? (g(
                    o === a - 1,
                    "All SENT items should be at beginning of queue."
                  ),
                  (n[(o = a)].status = 3),
                  (n[a].abortReason = "set"))
                : (g(
                    0 === n[a].status,
                    "Unexpected transaction status in abort"
                  ),
                  n[a].unwatcher(),
                  (i = i.concat(
                    Co(e.serverSyncTree_, n[a].currentWriteId, !0)
                  )),
                  n[a].onComplete &&
                    r.push(
                      n[a].onComplete.bind(null, new Error("set"), !1, null)
                    )));
          -1 === o ? Jo(t, void 0) : (n.length = o + 1),
            wa(e.eventQueue_, ea(t), i);
          for (a = 0; a < r.length; a++) et(r[a]);
        }
      }
      var Ka = function (e, t) {
          var n = Ga(e),
            r = n.namespace;
          "firebase.com" === n.domain &&
            Ue(
              n.host +
                " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
            ),
            (r && "undefined" !== r) ||
              "localhost" === n.domain ||
              Ue(
                "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
              ),
            n.secure ||
              ("undefined" != typeof window &&
                window.location &&
                window.location.protocol &&
                -1 !== window.location.protocol.indexOf("https:") &&
                Be(
                  "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
                ));
          e = "ws" === n.scheme || "wss" === n.scheme;
          return {
            repoInfo: new ut(n.host, n.secure, r, t, e, "", r !== n.subdomain),
            path: new Ut(n.pathString),
          };
        },
        Ga = function (e) {
          var t,
            n,
            r,
            i = "",
            o = "",
            a = "",
            s = "",
            u = "",
            l = !0,
            c = "https",
            h = 443;
          return (
            "string" == typeof e &&
              (0 <= (r = e.indexOf("//")) &&
                ((c = e.substring(0, r - 1)), (e = e.substring(r + 2))),
              -1 === (t = e.indexOf("/")) && (t = e.length),
              -1 === (n = e.indexOf("?")) && (n = e.length),
              (i = e.substring(0, Math.min(t, n))),
              t < n &&
                (s = (function (e) {
                  for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
                    if (0 < n[r].length) {
                      var i = n[r];
                      try {
                        i = decodeURIComponent(i.replace(/\+/g, " "));
                      } catch (e) {}
                      t += "/" + i;
                    }
                  return t;
                })(e.substring(t, n))),
              (n = (function (e) {
                var t,
                  n,
                  r = {};
                "?" === e.charAt(0) && (e = e.substring(1));
                try {
                  for (
                    var i = _(e.split("&")), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a,
                      s = o.value;
                    0 !== s.length &&
                      (2 === (a = s.split("=")).length
                        ? (r[decodeURIComponent(a[0])] = decodeURIComponent(
                            a[1]
                          ))
                        : Be(
                            "Invalid query segment '" +
                              s +
                              "' in query '" +
                              e +
                              "'"
                          ));
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return r;
              })(e.substring(Math.min(e.length, n)))),
              0 <= (r = i.indexOf(":"))
                ? ((l = "https" === c || "wss" === c),
                  (h = parseInt(i.substring(r + 1), 10)))
                : (r = i.length),
              "localhost" === (r = i.slice(0, r)).toLowerCase()
                ? (o = "localhost")
                : r.split(".").length <= 2
                ? (o = r)
                : ((r = i.indexOf(".")),
                  (a = i.substring(0, r).toLowerCase()),
                  (o = i.substring(r + 1)),
                  (u = a)),
              "ns" in n && (u = n.ns)),
            {
              host: i,
              port: h,
              domain: o,
              subdomain: a,
              secure: l,
              scheme: c,
              pathString: s,
              namespace: u,
            }
          );
        },
        $a =
          ((Ja.prototype.getPath = function () {
            var e = this.snapshot.ref;
            return ("value" === this.eventType ? e : e.parent)._path;
          }),
          (Ja.prototype.getEventType = function () {
            return this.eventType;
          }),
          (Ja.prototype.getEventRunner = function () {
            return this.eventRegistration.getEventRunner(this);
          }),
          (Ja.prototype.toString = function () {
            return (
              this.getPath().toString() +
              ":" +
              this.eventType +
              ":" +
              k(this.snapshot.exportVal())
            );
          }),
          Ja);
      function Ja(e, t, n, r) {
        (this.eventType = e),
          (this.eventRegistration = t),
          (this.snapshot = n),
          (this.prevName = r);
      }
      var Xa =
        ((Za.prototype.getPath = function () {
          return this.path;
        }),
        (Za.prototype.getEventType = function () {
          return "cancel";
        }),
        (Za.prototype.getEventRunner = function () {
          return this.eventRegistration.getEventRunner(this);
        }),
        (Za.prototype.toString = function () {
          return this.path.toString() + ":cancel";
        }),
        Za);
      function Za(e, t, n) {
        (this.eventRegistration = e), (this.error = t), (this.path = n);
      }
      var es =
        ((ts.prototype.onValue = function (e, t) {
          this.snapshotCallback.call(null, e, t);
        }),
        (ts.prototype.onCancel = function (e) {
          return (
            g(
              this.hasCancelCallback,
              "Raising a cancel event on a listener with no cancel callback"
            ),
            this.cancelCallback.call(null, e)
          );
        }),
        Object.defineProperty(ts.prototype, "hasCancelCallback", {
          get: function () {
            return !!this.cancelCallback;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (ts.prototype.matches = function (e) {
          return (
            this.snapshotCallback === e.snapshotCallback ||
            (this.snapshotCallback.userCallback ===
              e.snapshotCallback.userCallback &&
              this.snapshotCallback.context === e.snapshotCallback.context)
          );
        }),
        ts);
      function ts(e, t) {
        (this.snapshotCallback = e), (this.cancelCallback = t);
      }
      var ns =
        ((rs.prototype.cancel = function () {
          var e = new f();
          return (
            Aa(
              this._repo,
              this._path,
              e.wrapCallback(function () {})
            ),
            e.promise
          );
        }),
        (rs.prototype.remove = function () {
          _a("OnDisconnect.remove", this._path);
          var e = new f();
          return (
            La(
              this._repo,
              this._path,
              null,
              e.wrapCallback(function () {})
            ),
            e.promise
          );
        }),
        (rs.prototype.set = function (e) {
          _a("OnDisconnect.set", this._path),
            ha("OnDisconnect.set", e, this._path, !1);
          var t = new f();
          return (
            La(
              this._repo,
              this._path,
              e,
              t.wrapCallback(function () {})
            ),
            t.promise
          );
        }),
        (rs.prototype.setWithPriority = function (e, t) {
          _a("OnDisconnect.setWithPriority", this._path),
            ha("OnDisconnect.setWithPriority", e, this._path, !1),
            oa("OnDisconnect.setWithPriority", t, !1);
          var n,
            r,
            i,
            o,
            a = new f();
          return (
            (n = this._repo),
            (r = this._path),
            (e = e),
            (t = t),
            (i = a.wrapCallback(function () {})),
            (o = nr(e, t)),
            n.server_.onDisconnectPut(r.toString(), o.val(!0), function (e, t) {
              "ok" === e && qr(n.onDisconnect_, r, o), ja(0, i, e, t);
            }),
            a.promise
          );
        }),
        (rs.prototype.update = function (e) {
          _a("OnDisconnect.update", this._path),
            ia("OnDisconnect.update", e, this._path, !1);
          var t = new f();
          return (
            (function (n, r, i, o) {
              if (A(i))
                return (
                  je(
                    "onDisconnect().update() called with empty data.  Don't do anything."
                  ),
                  ja(0, o, "ok", void 0)
                );
              n.server_.onDisconnectMerge(r.toString(), i, function (e, t) {
                "ok" === e &&
                  Ye(i, function (e, t) {
                    t = nr(t);
                    qr(n.onDisconnect_, $t(r, e), t);
                  }),
                  ja(0, o, e, t);
              });
            })(
              this._repo,
              this._path,
              e,
              t.wrapCallback(function () {})
            ),
            t.promise
          );
        }),
        rs);
      function rs(e, t) {
        (this._repo = e), (this._path = t);
      }
      var is =
        (Object.defineProperty(os.prototype, "key", {
          get: function () {
            return Jt(this._path) ? null : Yt(this._path);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(os.prototype, "ref", {
          get: function () {
            return new cs(this._repo, this._path);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(os.prototype, "_queryIdentifier", {
          get: function () {
            var e = Rr(this._queryParams),
              e = Qe(e);
            return "{}" === e ? "default" : e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(os.prototype, "_queryObject", {
          get: function () {
            return Rr(this._queryParams);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (os.prototype.isEqual = function (e) {
          if (!((e = H(e)) instanceof os)) return !1;
          var t = this._repo === e._repo,
            n = en(this._path, e._path),
            e = this._queryIdentifier === e._queryIdentifier;
          return t && n && e;
        }),
        (os.prototype.toJSON = function () {
          return this.toString();
        }),
        (os.prototype.toString = function () {
          return (
            this._repo.toString() +
            (function (e) {
              for (var t = "", n = e.pieceNum_; n < e.pieces_.length; n++)
                "" !== e.pieces_[n] &&
                  (t += "/" + encodeURIComponent(String(e.pieces_[n])));
              return t || "/";
            })(this._path)
          );
        }),
        os);
      function os(e, t, n, r) {
        (this._repo = e),
          (this._path = t),
          (this._queryParams = n),
          (this._orderByCalled = r);
      }
      function as(e, t) {
        if (!0 === e._orderByCalled)
          throw new Error(t + ": You can't combine multiple orderBy calls.");
      }
      function ss(e) {
        var t = null,
          n = null;
        if (
          (e.hasStart() && (t = e.getIndexStartValue()),
          e.hasEnd() && (n = e.getIndexEndValue()),
          e.getIndex() === wn)
        ) {
          var r =
              "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
            i =
              "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
          if (e.hasStart()) {
            if (e.getIndexStartName() !== Ve) throw new Error(r);
            if ("string" != typeof t) throw new Error(i);
          }
          if (e.hasEnd()) {
            if (e.getIndexEndName() !== He) throw new Error(r);
            if ("string" != typeof n) throw new Error(i);
          }
        } else if (e.getIndex() === Wn) {
          if ((null != t && !ca(t)) || (null != n && !ca(n)))
            throw new Error(
              "Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string)."
            );
        } else if (
          (g(
            e.getIndex() instanceof or || e.getIndex() === pr,
            "unknown index type."
          ),
          (null != t && "object" == typeof t) ||
            (null != n && "object" == typeof n))
        )
          throw new Error(
            "Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object."
          );
      }
      function us(e) {
        if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit())
          throw new Error(
            "Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead."
          );
      }
      var ls,
        cs =
          (n(hs, (ls = is)),
          Object.defineProperty(hs.prototype, "parent", {
            get: function () {
              var e = Gt(this._path);
              return null === e ? null : new hs(this._repo, e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(hs.prototype, "root", {
            get: function () {
              for (var e = this; null !== e.parent; ) e = e.parent;
              return e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          hs);
      function hs(e, t) {
        return ls.call(this, e, t, new Sr(), !1) || this;
      }
      var ps =
        (Object.defineProperty(ds.prototype, "priority", {
          get: function () {
            return this._node.getPriority().val();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ds.prototype, "key", {
          get: function () {
            return this.ref.key;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(ds.prototype, "size", {
          get: function () {
            return this._node.numChildren();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (ds.prototype.child = function (e) {
          var t = new Ut(e),
            e = ys(this.ref, e);
          return new ds(this._node.getChild(t), e, Wn);
        }),
        (ds.prototype.exists = function () {
          return !this._node.isEmpty();
        }),
        (ds.prototype.exportVal = function () {
          return this._node.val(!0);
        }),
        (ds.prototype.forEach = function (n) {
          var r = this;
          return (
            !this._node.isLeafNode() &&
            !!this._node.forEachChild(this._index, function (e, t) {
              return n(new ds(t, ys(r.ref, e), Wn));
            })
          );
        }),
        (ds.prototype.hasChild = function (e) {
          e = new Ut(e);
          return !this._node.getChild(e).isEmpty();
        }),
        (ds.prototype.hasChildren = function () {
          return !this._node.isLeafNode() && !this._node.isEmpty();
        }),
        (ds.prototype.toJSON = function () {
          return this.exportVal();
        }),
        (ds.prototype.val = function () {
          return this._node.val();
        }),
        ds);
      function ds(e, t, n) {
        (this._node = e), (this.ref = t), (this._index = n);
      }
      function fs(e, t) {
        return (
          (e = H(e))._checkNotDeleted("ref"),
          void 0 !== t ? ys(e._root, t) : e._root
        );
      }
      function _s(e, t) {
        (e = H(e))._checkNotDeleted("refFromURL");
        var n = Ka(t, e._repo.repoInfo_.nodeAdmin);
        ya("refFromURL", n);
        t = n.repoInfo;
        return (
          e._repo.repoInfo_.isCustomHost() ||
            t.host === e._repo.repoInfo_.host ||
            Ue(
              "refFromURL: Host name does not match the current database: (found " +
                t.host +
                " but expected " +
                e._repo.repoInfo_.host +
                ")"
            ),
          fs(e, n.path.toString())
        );
      }
      function ys(e, t) {
        return (
          (null === Ht((e = H(e))._path) ? fa : da)("child", "path", t, !1),
          new cs(e._repo, $t(e._path, t))
        );
      }
      function vs(e, t) {
        (e = H(e)), _a("set", e._path), ha("set", t, e._path, !1);
        var n = new f();
        return (
          Oa(
            e._repo,
            e._path,
            t,
            null,
            n.wrapCallback(function () {})
          ),
          n.promise
        );
      }
      function gs(e, t) {
        ia("update", t, e._path, !1);
        var n = new f();
        return (
          (function (i, o, e, a) {
            qa(i, "update", { path: o.toString(), value: e });
            var s,
              t,
              n = !0,
              r = Na(i),
              u = {};
            Ye(e, function (e, t) {
              (n = !1), (u[e] = zo($t(o, e), nr(t), i.serverSyncTree_, r));
            }),
              n
                ? (je("update() called with empty data.  Don't do anything."),
                  ja(0, a, "ok", void 0))
                : ((s = Da(i)),
                  (t = bo(i.serverSyncTree_, o, u, s)),
                  ga(i.eventQueue_, t),
                  i.server_.merge(o.toString(), e, function (e, t) {
                    var n = "ok" === e;
                    n || Be("update at " + o + " failed: " + e);
                    var r = Co(i.serverSyncTree_, s, !n),
                      n = 0 < r.length ? Ba(i, o) : o;
                    wa(i.eventQueue_, n, r), ja(0, a, e, t);
                  }),
                  Ye(e, function (e) {
                    e = Qa(i, $t(o, e));
                    Ba(i, e);
                  }),
                  wa(i.eventQueue_, o, []));
          })(
            e._repo,
            e._path,
            t,
            n.wrapCallback(function () {})
          ),
          n.promise
        );
      }
      function ms(t) {
        return (
          (t = H(t)),
          (n = t._repo),
          (r = t),
          (null != (e = Po(n.serverSyncTree_, r))
            ? Promise.resolve(e)
            : n.server_.get(r).then(
                function (e) {
                  var t = nr(e),
                    e = Eo(n.serverSyncTree_, r._path, t);
                  return ma(n.eventQueue_, r._path, e), Promise.resolve(t);
                },
                function (e) {
                  return (
                    qa(n, "get for query " + k(r) + " failed: " + e),
                    Promise.reject(new Error(e))
                  );
                }
              )
          ).then(function (e) {
            return new ps(
              e,
              new cs(t._repo, t._path),
              t._queryParams.getIndex()
            );
          })
        );
        var n, r, e;
      }
      var ws =
        ((bs.prototype.respondsTo = function (e) {
          return "value" === e;
        }),
        (bs.prototype.createEvent = function (e, t) {
          var n = t._queryParams.getIndex();
          return new $a(
            "value",
            this,
            new ps(e.snapshotNode, new cs(t._repo, t._path), n)
          );
        }),
        (bs.prototype.getEventRunner = function (e) {
          var t = this;
          return "cancel" === e.getEventType()
            ? function () {
                return t.callbackContext.onCancel(e.error);
              }
            : function () {
                return t.callbackContext.onValue(e.snapshot, null);
              };
        }),
        (bs.prototype.createCancelEvent = function (e, t) {
          return this.callbackContext.hasCancelCallback
            ? new Xa(this, e, t)
            : null;
        }),
        (bs.prototype.matches = function (e) {
          return (
            e instanceof bs &&
            (!e.callbackContext ||
              !this.callbackContext ||
              e.callbackContext.matches(this.callbackContext))
          );
        }),
        (bs.prototype.hasAnyCallback = function () {
          return null !== this.callbackContext;
        }),
        bs);
      function bs(e) {
        this.callbackContext = e;
      }
      var Cs =
        ((Es.prototype.respondsTo = function (e) {
          e =
            "children_removed" ===
            (e = "children_added" === e ? "child_added" : e)
              ? "child_removed"
              : e;
          return D(this.callbacks, e);
        }),
        (Es.prototype.createCancelEvent = function (e, t) {
          return this.callbacks.cancel.hasCancelCallback
            ? new Xa(this, e, t)
            : null;
        }),
        (Es.prototype.createEvent = function (e, t) {
          g(null != e.childName, "Child events should have a childName.");
          var n = ys(new cs(t._repo, t._path), e.childName),
            t = t._queryParams.getIndex();
          return new $a(e.type, this, new ps(e.snapshotNode, n, t), e.prevName);
        }),
        (Es.prototype.getEventRunner = function (e) {
          if ("cancel" === e.getEventType()) {
            var t = this.callbacks.cancel;
            return function () {
              return t.onCancel(e.error);
            };
          }
          var n = this.callbacks[e.eventType];
          return function () {
            return n.onValue(e.snapshot, e.prevName);
          };
        }),
        (Es.prototype.matches = function (t) {
          var n = this;
          if (t instanceof Es) {
            if (!this.callbacks || !t.callbacks) return !0;
            var e = Object.keys(t.callbacks),
              r = Object.keys(this.callbacks),
              i = e.length;
            if (i === r.length) {
              if (1 !== i)
                return r.every(function (e) {
                  return t.callbacks[e].matches(n.callbacks[e]);
                });
              (e = e[0]), (r = r[0]);
              return (
                r === e &&
                (!t.callbacks[e] ||
                  !this.callbacks[r] ||
                  t.callbacks[e].matches(this.callbacks[r]))
              );
            }
          }
          return !1;
        }),
        (Es.prototype.hasAnyCallback = function () {
          return null !== this.callbacks;
        }),
        Es);
      function Es(e) {
        this.callbacks = e;
      }
      function Is(n, e, t, r, i) {
        var o;
        "object" == typeof r && ((s = void 0), (i = r)),
          "function" == typeof r && (s = r),
          i &&
            i.onlyOnce &&
            (((i = function (e, t) {
              o(e, t), Ma(n._repo, n, u);
            }).userCallback = (o = t).userCallback),
            (i.context = t.context),
            (t = i));
        var a,
          s = new es(t, s || void 0),
          u = "value" === e ? new ws(s) : new Cs((((a = {})[e] = s), a));
        return (
          (e = n._repo),
          (s = u),
          (s =
            ".info" === Ht((a = n)._path)
              ? So(e.infoSyncTree_, a, s)
              : So(e.serverSyncTree_, a, s)),
          ma(e.eventQueue_, a._path, s),
          function () {
            return Ma(n._repo, n, u);
          }
        );
      }
      function Ss(e, t, n, r) {
        return Is(e, "value", t, n, r);
      }
      function Ts(e, t, n, r) {
        return Is(e, "child_added", t, n, r);
      }
      function Ps(e, t, n, r) {
        return Is(e, "child_changed", t, n, r);
      }
      function Ns(e, t, n, r) {
        return Is(e, "child_moved", t, n, r);
      }
      function xs(e, t, n, r) {
        return Is(e, "child_removed", t, n, r);
      }
      function ks(e, t, n) {
        var r = null,
          i = null,
          o = n ? new es(n) : null;
        "value" === t
          ? (r = new ws(o))
          : t && (n && ((i = {})[t] = o), (r = new Cs(i))),
          Ma(e._repo, e, r);
      }
      var Rs,
        Ot = function () {},
        Ds =
          (n(Os, (Rs = Ot)),
          (Os.prototype._apply = function (e) {
            ha("endAt", this._value, e._path, !0);
            var t = Nr(e._queryParams, this._value, this._key);
            if ((us(t), ss(t), e._queryParams.hasEnd()))
              throw new Error(
                "endAt: Starting point was already set (by another call to endAt, endBefore or equalTo)."
              );
            return new is(e._repo, e._path, t, e._orderByCalled);
          }),
          Os);
      function Os(e, t) {
        var n = Rs.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var As,
        Ls =
          (n(Ms, (As = Ot)),
          (Ms.prototype._apply = function (e) {
            ha("endBefore", this._value, e._path, !1);
            var t,
              n,
              r,
              r =
                ((t = e._queryParams),
                (n = this._value),
                (r = this._key),
                ((r =
                  t.index_ === wn
                    ? Nr(t, (n = "string" == typeof n ? lr(n) : n), r)
                    : Nr(t, n, null == r ? Ve : lr(r))).endBeforeSet_ = !0),
                r);
            if ((us(r), ss(r), e._queryParams.hasEnd()))
              throw new Error(
                "endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo)."
              );
            return new is(e._repo, e._path, r, e._orderByCalled);
          }),
          Ms);
      function Ms(e, t) {
        var n = As.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Fs,
        qs =
          (n(js, (Fs = Ot)),
          (js.prototype._apply = function (e) {
            ha("startAt", this._value, e._path, !0);
            var t = Pr(e._queryParams, this._value, this._key);
            if ((us(t), ss(t), e._queryParams.hasStart()))
              throw new Error(
                "startAt: Starting point was already set (by another call to startAt, startBefore or equalTo)."
              );
            return new is(e._repo, e._path, t, e._orderByCalled);
          }),
          js);
      function js(e, t) {
        var n = Fs.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Ws,
        Us =
          (n(Bs, (Ws = Ot)),
          (Bs.prototype._apply = function (e) {
            ha("startAfter", this._value, e._path, !1);
            var t,
              n,
              r,
              r =
                ((t = e._queryParams),
                (n = this._value),
                (r = this._key),
                ((r =
                  t.index_ === wn
                    ? Pr(t, (n = "string" == typeof n ? ur(n) : n), r)
                    : Pr(t, n, null == r ? He : ur(r))).startAfterSet_ = !0),
                r);
            if ((us(r), ss(r), e._queryParams.hasStart()))
              throw new Error(
                "startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo)."
              );
            return new is(e._repo, e._path, r, e._orderByCalled);
          }),
          Bs);
      function Bs(e, t) {
        var n = Ws.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      var Vs,
        Hs =
          (n(zs, (Vs = Ot)),
          (zs.prototype._apply = function (e) {
            if (e._queryParams.hasLimit())
              throw new Error(
                "limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast)."
              );
            return new is(
              e._repo,
              e._path,
              ((t = e._queryParams),
              (n = this._limit),
              ((t = t.copy()).limitSet_ = !0),
              (t.limit_ = n),
              (t.viewFrom_ = "l"),
              t),
              e._orderByCalled
            );
            var t, n;
          }),
          zs);
      function zs(e) {
        var t = Vs.call(this) || this;
        return (t._limit = e), t;
      }
      var Qs,
        Ys =
          (n(Ks, (Qs = Ot)),
          (Ks.prototype._apply = function (e) {
            if (e._queryParams.hasLimit())
              throw new Error(
                "limitToLast: Limit was already set (by another call to limitToFirst or limitToLast)."
              );
            return new is(
              e._repo,
              e._path,
              ((t = e._queryParams),
              (n = this._limit),
              ((t = t.copy()).limitSet_ = !0),
              (t.limit_ = n),
              (t.viewFrom_ = "r"),
              t),
              e._orderByCalled
            );
            var t, n;
          }),
          Ks);
      function Ks(e) {
        var t = Qs.call(this) || this;
        return (t._limit = e), t;
      }
      var Gs,
        $s =
          (n(Js, (Gs = Ot)),
          (Js.prototype._apply = function (e) {
            as(e, "orderByChild");
            var t = new Ut(this._path);
            if (Jt(t))
              throw new Error(
                "orderByChild: cannot pass in empty path. Use orderByValue() instead."
              );
            (t = new or(t)), (t = xr(e._queryParams, t));
            return ss(t), new is(e._repo, e._path, t, !0);
          }),
          Js);
      function Js(e) {
        var t = Gs.call(this) || this;
        return (t._path = e), t;
      }
      var Xs,
        Zs =
          (n(eu, (Xs = Ot)),
          (eu.prototype._apply = function (e) {
            as(e, "orderByKey");
            var t = xr(e._queryParams, wn);
            return ss(t), new is(e._repo, e._path, t, !0);
          }),
          eu);
      function eu() {
        return (null !== Xs && Xs.apply(this, arguments)) || this;
      }
      var tu,
        nu =
          (n(ru, (tu = Ot)),
          (ru.prototype._apply = function (e) {
            as(e, "orderByPriority");
            var t = xr(e._queryParams, Wn);
            return ss(t), new is(e._repo, e._path, t, !0);
          }),
          ru);
      function ru() {
        return (null !== tu && tu.apply(this, arguments)) || this;
      }
      var iu,
        ou =
          (n(au, (iu = Ot)),
          (au.prototype._apply = function (e) {
            as(e, "orderByValue");
            var t = xr(e._queryParams, pr);
            return ss(t), new is(e._repo, e._path, t, !0);
          }),
          au);
      function au() {
        return (null !== iu && iu.apply(this, arguments)) || this;
      }
      var su,
        uu,
        lu,
        cu =
          (n(hu, (su = Ot)),
          (hu.prototype._apply = function (e) {
            if (
              (ha("equalTo", this._value, e._path, !1),
              e._queryParams.hasStart())
            )
              throw new Error(
                "equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo)."
              );
            if (e._queryParams.hasEnd())
              throw new Error(
                "equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo)."
              );
            return new Ds(this._value, this._key)._apply(
              new qs(this._value, this._key)._apply(e)
            );
          }),
          hu);
      function hu(e, t) {
        var n = su.call(this) || this;
        return (n._value = e), (n._key = t), n;
      }
      function pu(e) {
        for (var t, n, r = [], i = 1; i < arguments.length; i++)
          r[i - 1] = arguments[i];
        var o = H(e);
        try {
          for (var a = _(r), s = a.next(); !s.done; s = a.next())
            o = s.value._apply(o);
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            s && !s.done && (n = a.return) && n.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        return o;
      }
      (uu = cs),
        g(!Xi, "__referenceConstructor has already been defined"),
        (Xi = uu),
        (lu = cs),
        g(!oo, "__referenceConstructor has already been defined"),
        (oo = lu);
      var du = "FIREBASE_DATABASE_EMULATOR_HOST",
        fu = {},
        _u = !1;
      function yu(e, t, n, r) {
        var i = n || e.options.databaseURL;
        void 0 === i &&
          (e.options.projectId ||
            Ue(
              "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
            ),
          je("Using default host for project ", e.options.projectId),
          (i = e.options.projectId + "-default-rtdb.firebaseio.com"));
        var o,
          a = Ka(i, r),
          s = a.repoInfo,
          n = void 0;
        (n = "undefined" != typeof process ? process.env[du] : n)
          ? ((o = !0),
            (i = "http://" + n + "?ns=" + s.namespace),
            (s = (a = Ka(i, r)).repoInfo))
          : (o = !a.repoInfo.secure);
        t = r && o ? new rt() : new tt(e.name, e.options, t);
        ya("Invalid Firebase Database URL", a),
          Jt(a.path) ||
            Ue(
              "Database URL must point to the root of a Firebase Database (not including a child path)."
            );
        t = (function (e, t, n) {
          var r = fu[t.name];
          r || ((r = {}), (fu[t.name] = r));
          t = r[e.toURLString()];
          t &&
            Ue(
              "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
            );
          return (t = new Ia(e, _u, n)), (r[e.toURLString()] = t);
        })(s, e, t);
        return new vu(t, e);
      }
      var vu =
        (Object.defineProperty(gu.prototype, "_repo", {
          get: function () {
            return (
              this._instanceStarted ||
                (Ta(
                  this._repoInternal,
                  this.app.options.appId,
                  this.app.options.databaseAuthVariableOverride
                ),
                (this._instanceStarted = !0)),
              this._repoInternal
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(gu.prototype, "_root", {
          get: function () {
            return (
              this._rootInternal ||
                (this._rootInternal = new cs(this._repo, Vt())),
              this._rootInternal
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (gu.prototype._delete = function () {
          var e, t, n;
          return (
            this._checkNotDeleted("delete"),
            (e = this._repo),
            (t = this.app.name),
            ((n = fu[t]) && n[e.key] === e) ||
              Ue(
                "Database " +
                  t +
                  "(" +
                  e.repoInfo_ +
                  ") has already been deleted."
              ),
            Fa(e),
            delete n[e.key],
            (this._repoInternal = null),
            (this._rootInternal = null),
            Promise.resolve()
          );
        }),
        (gu.prototype._checkNotDeleted = function (e) {
          null === this._rootInternal &&
            Ue("Cannot call " + e + " on a deleted database.");
        }),
        gu);
      function gu(e, t) {
        (this._repoInternal = e),
          (this.app = t),
          (this.type = "database"),
          (this._instanceStarted = !1);
      }
      function mu(e, t, n) {
        (e = H(e))._checkNotDeleted("useEmulator"),
          e._instanceStarted &&
            Ue(
              "Cannot call useEmulator() after instance has already been initialized."
            ),
          (e = e._repo),
          (t = t),
          (n = n),
          (e.repoInfo_ = new ut(
            t + ":" + n,
            !1,
            e.repoInfo_.namespace,
            e.repoInfo_.webSocketOnly,
            e.repoInfo_.nodeAdmin,
            e.repoInfo_.persistenceKey,
            e.repoInfo_.includeNamespaceInQueryParams
          )),
          e.repoInfo_.nodeAdmin && (e.authTokenProvider_ = new rt());
      }
      function wu(e) {
        (e = H(e))._checkNotDeleted("goOnline"),
          (e = e._repo).persistentConnection_ &&
            e.persistentConnection_.resume(Ca);
      }
      function bu(e, t) {
        qe(e, t);
      }
      var Cu = { ".sv": "timestamp" };
      var Eu,
        Iu =
          ((Su.prototype.toJSON = function () {
            return {
              committed: this.committed,
              snapshot: this.snapshot.toJSON(),
            };
          }),
          Su);
      function Su(e, t) {
        (this.committed = e), (this.snapshot = t);
      }
      function Tu(i, e, t) {
        if (
          ((i = H(i)),
          _a("Reference.transaction", i._path),
          ".length" === i.key || ".keys" === i.key)
        )
          throw (
            "Reference.transaction failed: " + i.key + " is a read-only object."
          );
        var t =
            null === (n = null == t ? void 0 : t.applyLocally) ||
            void 0 === n ||
            n,
          o = new f(),
          n = Ss(i, function () {});
        return (
          (function (e, t, n, r, i, o) {
            qa(e, "transaction on " + t);
            var a = {
                path: t,
                update: n,
                onComplete: r,
                status: null,
                order: Ae(),
                applyLocally: o,
                retryCount: 0,
                unwatcher: i,
                abortReason: null,
                currentWriteId: null,
                currentInputSnapshot: null,
                currentOutputSnapshotRaw: null,
                currentOutputSnapshotResolved: null,
              },
              n = Wa(e, t, void 0);
            (a.currentInputSnapshot = n),
              void 0 === (r = a.update(n.val()))
                ? (a.unwatcher(),
                  (a.currentOutputSnapshotRaw = null),
                  (a.currentOutputSnapshotResolved = null),
                  a.onComplete &&
                    a.onComplete(null, !1, a.currentInputSnapshot))
                : (pa("transaction failed: Data returned ", r, a.path),
                  (a.status = 0),
                  (i = $o((o = Go(e.transactionQueueTree_, t))) || []).push(a),
                  Jo(o, i),
                  (o = void 0),
                  "object" == typeof r && null !== r && D(r, ".priority")
                    ? ((o = O(r, ".priority")),
                      g(
                        ca(o),
                        "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null."
                      ))
                    : (o = (To(e.serverSyncTree_, t) || Jn.EMPTY_NODE)
                        .getPriority()
                        .val()),
                  (i = Na(e)),
                  (o = nr(r, o)),
                  (i = Qo(o, n, i)),
                  (a.currentOutputSnapshotRaw = o),
                  (a.currentOutputSnapshotResolved = i),
                  (a.currentWriteId = Da(e)),
                  (a = wo(
                    e.serverSyncTree_,
                    t,
                    i,
                    a.currentWriteId,
                    a.applyLocally
                  )),
                  wa(e.eventQueue_, t, a),
                  Ua(e, e.transactionQueueTree_));
          })(
            i._repo,
            i._path,
            e,
            function (e, t, n) {
              var r;
              e
                ? o.reject(e)
                : ((r = new ps(n, new cs(i._repo, i._path), Wn)),
                  o.resolve(new Iu(t, r)));
            },
            n,
            t
          ),
          o.promise
        );
      }
      pe(
        new z(
          "database-exp",
          function (e, t) {
            t = t.instanceIdentifier;
            return yu(
              e.getProvider("app-exp").getImmediate(),
              e.getProvider("auth-internal"),
              t
            );
          },
          "PUBLIC"
        ).setMultipleInstances(!0)
      ),
        ve(ge, "0.9.9", Eu);
      var Pu =
        ((Nu.prototype.cancel = function (t) {
          j("OnDisconnect.cancel", 0, 1, arguments.length),
            U("OnDisconnect.cancel", "onComplete", t, !0);
          var e = this._delegate.cancel();
          return (
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            e
          );
        }),
        (Nu.prototype.remove = function (t) {
          j("OnDisconnect.remove", 0, 1, arguments.length),
            U("OnDisconnect.remove", "onComplete", t, !0);
          var e = this._delegate.remove();
          return (
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            e
          );
        }),
        (Nu.prototype.set = function (e, t) {
          j("OnDisconnect.set", 1, 2, arguments.length),
            U("OnDisconnect.set", "onComplete", t, !0);
          e = this._delegate.set(e);
          return (
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            e
          );
        }),
        (Nu.prototype.setWithPriority = function (e, t, n) {
          j("OnDisconnect.setWithPriority", 2, 3, arguments.length),
            U("OnDisconnect.setWithPriority", "onComplete", n, !0);
          t = this._delegate.setWithPriority(e, t);
          return (
            n &&
              t.then(
                function () {
                  return n(null);
                },
                function (e) {
                  return n(e);
                }
              ),
            t
          );
        }),
        (Nu.prototype.update = function (e, t) {
          if (
            (j("OnDisconnect.update", 1, 2, arguments.length), Array.isArray(e))
          ) {
            for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
            (e = n),
              Be(
                "Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
              );
          }
          U("OnDisconnect.update", "onComplete", t, !0);
          var i = this._delegate.update(e);
          return (
            t &&
              i.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              ),
            i
          );
        }),
        Nu);
      function Nu(e) {
        this._delegate = e;
      }
      var xu =
        ((ku.prototype.toJSON = function () {
          return (
            j("TransactionResult.toJSON", 0, 1, arguments.length),
            { committed: this.committed, snapshot: this.snapshot.toJSON() }
          );
        }),
        ku);
      function ku(e, t) {
        (this.committed = e), (this.snapshot = t);
      }
      var Ru =
        ((Du.prototype.val = function () {
          return (
            j("DataSnapshot.val", 0, 0, arguments.length), this._delegate.val()
          );
        }),
        (Du.prototype.exportVal = function () {
          return (
            j("DataSnapshot.exportVal", 0, 0, arguments.length),
            this._delegate.exportVal()
          );
        }),
        (Du.prototype.toJSON = function () {
          return (
            j("DataSnapshot.toJSON", 0, 1, arguments.length),
            this._delegate.toJSON()
          );
        }),
        (Du.prototype.exists = function () {
          return (
            j("DataSnapshot.exists", 0, 0, arguments.length),
            this._delegate.exists()
          );
        }),
        (Du.prototype.child = function (e) {
          return (
            j("DataSnapshot.child", 0, 1, arguments.length),
            (e = String(e)),
            da("DataSnapshot.child", "path", e, !1),
            new Du(this._database, this._delegate.child(e))
          );
        }),
        (Du.prototype.hasChild = function (e) {
          return (
            j("DataSnapshot.hasChild", 1, 1, arguments.length),
            da("DataSnapshot.hasChild", "path", e, !1),
            this._delegate.hasChild(e)
          );
        }),
        (Du.prototype.getPriority = function () {
          return (
            j("DataSnapshot.getPriority", 0, 0, arguments.length),
            this._delegate.priority
          );
        }),
        (Du.prototype.forEach = function (t) {
          var n = this;
          return (
            j("DataSnapshot.forEach", 1, 1, arguments.length),
            U("DataSnapshot.forEach", "action", t, !1),
            this._delegate.forEach(function (e) {
              return t(new Du(n._database, e));
            })
          );
        }),
        (Du.prototype.hasChildren = function () {
          return (
            j("DataSnapshot.hasChildren", 0, 0, arguments.length),
            this._delegate.hasChildren()
          );
        }),
        Object.defineProperty(Du.prototype, "key", {
          get: function () {
            return this._delegate.key;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (Du.prototype.numChildren = function () {
          return (
            j("DataSnapshot.numChildren", 0, 0, arguments.length),
            this._delegate.size
          );
        }),
        (Du.prototype.getRef = function () {
          return (
            j("DataSnapshot.ref", 0, 0, arguments.length),
            new Mu(this._database, this._delegate.ref)
          );
        }),
        Object.defineProperty(Du.prototype, "ref", {
          get: function () {
            return this.getRef();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Du);
      function Du(e, t) {
        (this._database = e), (this._delegate = t);
      }
      var Ou =
        ((Au.prototype.on = function (e, n, t, r) {
          var i = this;
          j("Query.on", 2, 4, arguments.length),
            U("Query.on", "callback", n, !1);
          function o(e, t) {
            n.call(a.context, new Ru(i.database, e), t);
          }
          var a = Au.getCancelAndContextArgs_("Query.on", t, r);
          (o.userCallback = n), (o.context = a.context);
          var s =
            null === (r = a.cancel) || void 0 === r
              ? void 0
              : r.bind(a.context);
          switch (e) {
            case "value":
              return Ss(this._delegate, o, s), n;
            case "child_added":
              return Ts(this._delegate, o, s), n;
            case "child_removed":
              return xs(this._delegate, o, s), n;
            case "child_changed":
              return Ps(this._delegate, o, s), n;
            case "child_moved":
              return Ns(this._delegate, o, s), n;
            default:
              throw new Error(
                W("Query.on", "eventType") +
                  'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
              );
          }
        }),
        (Au.prototype.off = function (e, t, n) {
          var r;
          j("Query.off", 0, 3, arguments.length),
            (function (e, t, n) {
              if (!n || void 0 !== t)
                switch (t) {
                  case "value":
                  case "child_added":
                  case "child_removed":
                  case "child_changed":
                  case "child_moved":
                    break;
                  default:
                    throw new Error(
                      W(e, "eventType") +
                        'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                    );
                }
            })("Query.off", e, !0),
            U("Query.off", "callback", t, !0),
            B("Query.off", "context", n, !0),
            t
              ? (((r = function () {}).userCallback = t),
                (r.context = n),
                ks(this._delegate, e, r))
              : ks(this._delegate, e);
        }),
        (Au.prototype.get = function () {
          var t = this;
          return ms(this._delegate).then(function (e) {
            return new Ru(t.database, e);
          });
        }),
        (Au.prototype.once = function (e, n, t, r) {
          var i = this;
          j("Query.once", 1, 4, arguments.length),
            U("Query.once", "callback", n, !0);
          function o(e, t) {
            (e = new Ru(i.database, e)),
              n && n.call(a.context, e, t),
              s.resolve(e);
          }
          var a = Au.getCancelAndContextArgs_("Query.on", t, r),
            s = new f();
          (o.userCallback = n), (o.context = a.context);
          function u(e) {
            a.cancel && a.cancel.call(a.context, e), s.reject(e);
          }
          switch (e) {
            case "value":
              Ss(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_added":
              Ts(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_removed":
              xs(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_changed":
              Ps(this._delegate, o, u, { onlyOnce: !0 });
              break;
            case "child_moved":
              Ns(this._delegate, o, u, { onlyOnce: !0 });
              break;
            default:
              throw new Error(
                W("Query.once", "eventType") +
                  'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
              );
          }
          return s.promise;
        }),
        (Au.prototype.limitToFirst = function (e) {
          return (
            j("Query.limitToFirst", 1, 1, arguments.length),
            new Au(
              this.database,
              pu(
                this._delegate,
                (function (e) {
                  if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
                    throw new Error(
                      "limitToFirst: First argument must be a positive integer."
                    );
                  return new Hs(e);
                })(e)
              )
            )
          );
        }),
        (Au.prototype.limitToLast = function (e) {
          return (
            j("Query.limitToLast", 1, 1, arguments.length),
            new Au(
              this.database,
              pu(
                this._delegate,
                (function (e) {
                  if ("number" != typeof e || Math.floor(e) !== e || e <= 0)
                    throw new Error(
                      "limitToLast: First argument must be a positive integer."
                    );
                  return new Ys(e);
                })(e)
              )
            )
          );
        }),
        (Au.prototype.orderByChild = function (e) {
          return (
            j("Query.orderByChild", 1, 1, arguments.length),
            new Au(
              this.database,
              pu(
                this._delegate,
                (function (e) {
                  if ("$key" === e)
                    throw new Error(
                      'orderByChild: "$key" is invalid.  Use orderByKey() instead.'
                    );
                  if ("$priority" === e)
                    throw new Error(
                      'orderByChild: "$priority" is invalid.  Use orderByPriority() instead.'
                    );
                  if ("$value" === e)
                    throw new Error(
                      'orderByChild: "$value" is invalid.  Use orderByValue() instead.'
                    );
                  return da("orderByChild", "path", e, !1), new $s(e);
                })(e)
              )
            )
          );
        }),
        (Au.prototype.orderByKey = function () {
          return (
            j("Query.orderByKey", 0, 0, arguments.length),
            new Au(this.database, pu(this._delegate, new Zs()))
          );
        }),
        (Au.prototype.orderByPriority = function () {
          return (
            j("Query.orderByPriority", 0, 0, arguments.length),
            new Au(this.database, pu(this._delegate, new nu()))
          );
        }),
        (Au.prototype.orderByValue = function () {
          return (
            j("Query.orderByValue", 0, 0, arguments.length),
            new Au(this.database, pu(this._delegate, new ou()))
          );
        }),
        (Au.prototype.startAt = function (e, t) {
          return (
            void 0 === e && (e = null),
            j("Query.startAt", 0, 2, arguments.length),
            new Au(
              this.database,
              pu(
                this._delegate,
                (void 0 === (e = e) && (e = null),
                aa("startAt", "key", (t = t), !0),
                new qs(e, t))
              )
            )
          );
        }),
        (Au.prototype.startAfter = function (e, t) {
          return (
            void 0 === e && (e = null),
            j("Query.startAfter", 0, 2, arguments.length),
            new Au(
              this.database,
              pu(
                this._delegate,
                ((e = e), aa("startAfter", "key", (t = t), !0), new Us(e, t))
              )
            )
          );
        }),
        (Au.prototype.endAt = function (e, t) {
          return (
            void 0 === e && (e = null),
            j("Query.endAt", 0, 2, arguments.length),
            new Au(
              this.database,
              pu(
                this._delegate,
                ((e = e), aa("endAt", "key", (t = t), !0), new Ds(e, t))
              )
            )
          );
        }),
        (Au.prototype.endBefore = function (e, t) {
          return (
            void 0 === e && (e = null),
            j("Query.endBefore", 0, 2, arguments.length),
            new Au(
              this.database,
              pu(
                this._delegate,
                ((e = e), aa("endBefore", "key", (t = t), !0), new Ls(e, t))
              )
            )
          );
        }),
        (Au.prototype.equalTo = function (e, t) {
          return (
            j("Query.equalTo", 1, 2, arguments.length),
            new Au(
              this.database,
              pu(
                this._delegate,
                ((e = e), aa("equalTo", "key", (t = t), !0), new cu(e, t))
              )
            )
          );
        }),
        (Au.prototype.toString = function () {
          return (
            j("Query.toString", 0, 0, arguments.length),
            this._delegate.toString()
          );
        }),
        (Au.prototype.toJSON = function () {
          return (
            j("Query.toJSON", 0, 1, arguments.length), this._delegate.toJSON()
          );
        }),
        (Au.prototype.isEqual = function (e) {
          if ((j("Query.isEqual", 1, 1, arguments.length), e instanceof Au))
            return this._delegate.isEqual(e._delegate);
          throw new Error(
            "Query.isEqual failed: First argument must be an instance of firebase.database.Query."
          );
        }),
        (Au.getCancelAndContextArgs_ = function (e, t, n) {
          var r = { cancel: void 0, context: void 0 };
          if (t && n)
            (r.cancel = t),
              U(e, "cancel", r.cancel, !0),
              (r.context = n),
              B(e, "context", r.context, !0);
          else if (t)
            if ("object" == typeof t && null !== t) r.context = t;
            else {
              if ("function" != typeof t)
                throw new Error(
                  W(e, "cancelOrContext") +
                    " must either be a cancel callback or a context object."
                );
              r.cancel = t;
            }
          return r;
        }),
        Object.defineProperty(Au.prototype, "ref", {
          get: function () {
            return new Mu(
              this.database,
              new cs(this._delegate._repo, this._delegate._path)
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Au);
      function Au(e, t) {
        (this.database = e), (this._delegate = t);
      }
      var Lu,
        Mu =
          (n(Fu, (Lu = Ou)),
          (Fu.prototype.getKey = function () {
            return (
              j("Reference.key", 0, 0, arguments.length), this._delegate.key
            );
          }),
          (Fu.prototype.child = function (e) {
            return (
              j("Reference.child", 1, 1, arguments.length),
              "number" == typeof e && (e = String(e)),
              new Fu(this.database, ys(this._delegate, e))
            );
          }),
          (Fu.prototype.getParent = function () {
            j("Reference.parent", 0, 0, arguments.length);
            var e = this._delegate.parent;
            return e ? new Fu(this.database, e) : null;
          }),
          (Fu.prototype.getRoot = function () {
            return (
              j("Reference.root", 0, 0, arguments.length),
              new Fu(this.database, this._delegate.root)
            );
          }),
          (Fu.prototype.set = function (e, t) {
            j("Reference.set", 1, 2, arguments.length),
              U("Reference.set", "onComplete", t, !0);
            e = vs(this._delegate, e);
            return (
              t &&
                e.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              e
            );
          }),
          (Fu.prototype.update = function (e, t) {
            if (
              (j("Reference.update", 1, 2, arguments.length), Array.isArray(e))
            ) {
              for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
              (e = n),
                Be(
                  "Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children."
                );
            }
            _a("Reference.update", this._delegate._path),
              U("Reference.update", "onComplete", t, !0);
            var i = gs(this._delegate, e);
            return (
              t &&
                i.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              i
            );
          }),
          (Fu.prototype.setWithPriority = function (e, t, n) {
            j("Reference.setWithPriority", 2, 3, arguments.length),
              U("Reference.setWithPriority", "onComplete", n, !0);
            t = (function (e, t, n) {
              if (
                (_a("setWithPriority", e._path),
                ha("setWithPriority", t, e._path, !1),
                oa("setWithPriority", n, !1),
                ".length" === e.key || ".keys" === e.key)
              )
                throw (
                  "setWithPriority failed: " + e.key + " is a read-only object."
                );
              var r = new f();
              return (
                Oa(
                  e._repo,
                  e._path,
                  t,
                  n,
                  r.wrapCallback(function () {})
                ),
                r.promise
              );
            })(this._delegate, e, t);
            return (
              n &&
                t.then(
                  function () {
                    return n(null);
                  },
                  function (e) {
                    return n(e);
                  }
                ),
              t
            );
          }),
          (Fu.prototype.remove = function (t) {
            j("Reference.remove", 0, 1, arguments.length),
              U("Reference.remove", "onComplete", t, !0);
            var e,
              e = ((e = this._delegate), _a("remove", e._path), vs(e, null));
            return (
              t &&
                e.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              e
            );
          }),
          (Fu.prototype.transaction = function (e, t, n) {
            var r = this;
            j("Reference.transaction", 1, 3, arguments.length),
              U("Reference.transaction", "transactionUpdate", e, !1),
              U("Reference.transaction", "onComplete", t, !0),
              (function (e, t, n, r) {
                if ((!r || void 0 !== n) && "boolean" != typeof n)
                  throw new Error(W(e, t) + "must be a boolean.");
              })("Reference.transaction", "applyLocally", n, !0);
            n = Tu(this._delegate, e, { applyLocally: n }).then(function (e) {
              return new xu(e.committed, new Ru(r.database, e.snapshot));
            });
            return (
              t &&
                n.then(
                  function (e) {
                    return t(null, e.committed, e.snapshot);
                  },
                  function (e) {
                    return t(e, !1, null);
                  }
                ),
              n
            );
          }),
          (Fu.prototype.setPriority = function (e, t) {
            j("Reference.setPriority", 1, 2, arguments.length),
              U("Reference.setPriority", "onComplete", t, !0);
            e = (function (e, t) {
              (e = H(e)), _a("setPriority", e._path), oa("setPriority", t, !1);
              var n = new f();
              return (
                Oa(
                  e._repo,
                  $t(e._path, ".priority"),
                  t,
                  null,
                  n.wrapCallback(function () {})
                ),
                n.promise
              );
            })(this._delegate, e);
            return (
              t &&
                e.then(
                  function () {
                    return t(null);
                  },
                  function (e) {
                    return t(e);
                  }
                ),
              e
            );
          }),
          (Fu.prototype.push = function (e, t) {
            var n = this;
            j("Reference.push", 0, 2, arguments.length),
              U("Reference.push", "onComplete", t, !0);
            var r = (function (e, t) {
                (e = H(e)), _a("push", e._path), ha("push", t, e._path, !0);
                var n = Pa(e._repo),
                  r = fr(n),
                  n = ys(e, r),
                  i = ys(e, r),
                  t =
                    null != t
                      ? vs(i, t).then(function () {
                          return i;
                        })
                      : Promise.resolve(i);
                return (
                  (n.then = t.then.bind(t)),
                  (n.catch = t.then.bind(t, void 0)),
                  n
                );
              })(this._delegate, e),
              e = r.then(function (e) {
                return new Fu(n.database, e);
              });
            t &&
              e.then(
                function () {
                  return t(null);
                },
                function (e) {
                  return t(e);
                }
              );
            r = new Fu(this.database, r);
            return (
              (r.then = e.then.bind(e)), (r.catch = e.catch.bind(e, void 0)), r
            );
          }),
          (Fu.prototype.onDisconnect = function () {
            return (
              _a("Reference.onDisconnect", this._delegate._path),
              new Pu(new ns(this._delegate._repo, this._delegate._path))
            );
          }),
          Object.defineProperty(Fu.prototype, "key", {
            get: function () {
              return this.getKey();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Fu.prototype, "parent", {
            get: function () {
              return this.getParent();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(Fu.prototype, "root", {
            get: function () {
              return this.getRoot();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Fu);
      function Fu(e, t) {
        var n =
          Lu.call(this, e, new is(t._repo, t._path, new Sr(), !1)) || this;
        return (n.database = e), (n._delegate = t), n;
      }
      var qu =
        ((ju.prototype.useEmulator = function (e, t) {
          mu(this._delegate, e, t);
        }),
        (ju.prototype.ref = function (e) {
          if ((j("database.ref", 0, 1, arguments.length), e instanceof Mu)) {
            var t = _s(this._delegate, e.toString());
            return new Mu(this, t);
          }
          t = fs(this._delegate, e);
          return new Mu(this, t);
        }),
        (ju.prototype.refFromURL = function (e) {
          j("database.refFromURL", 1, 1, arguments.length);
          e = _s(this._delegate, e);
          return new Mu(this, e);
        }),
        (ju.prototype.goOffline = function () {
          var e;
          j("database.goOffline", 0, 0, arguments.length),
            (e = H((e = this._delegate)))._checkNotDeleted("goOffline"),
            Fa(e._repo);
        }),
        (ju.prototype.goOnline = function () {
          return (
            j("database.goOnline", 0, 0, arguments.length), wu(this._delegate)
          );
        }),
        (ju.ServerValue = {
          TIMESTAMP: Cu,
          increment: function (e) {
            return { ".sv": { increment: e } };
          },
        }),
        ju);
      function ju(e, t) {
        var n = this;
        (this._delegate = e),
          (this.app = t),
          (this.INTERNAL = {
            delete: function () {
              return n._delegate._delete();
            },
          });
      }
      var Wu = Object.freeze({
          __proto__: null,
          forceLongPolling: function () {
            Pt.forceDisallow(), wt.forceAllow();
          },
          forceWebSockets: function () {
            wt.forceDisallow();
          },
          isWebSocketsAvailable: function () {
            return Pt.isAvailable();
          },
          setSecurityDebugCallback: function (e, t) {
            e._delegate._repo.persistentConnection_.securityDebugCallback_ = t;
          },
          stats: function (e, t) {
            var i;
            (e = e._delegate._repo),
              void 0 === (t = t) && (t = !1),
              "undefined" != typeof console &&
                ((e = t
                  ? (e.statsListener_ || (e.statsListener_ = new Wr(e.stats_)),
                    e.statsListener_.get())
                  : e.stats_.get()),
                (i = Object.keys(e).reduce(function (e, t) {
                  return Math.max(t.length, e);
                }, 0)),
                Ye(e, function (e, t) {
                  for (var n = e, r = e.length; r < i + 2; r++) n += " ";
                  console.log(n + t);
                }));
          },
          statsIncrementCounter: function (e, t) {
            (e = e._delegate._repo),
              (t = t),
              e.stats_.incrementCounter(t),
              (e = e.statsReporter_),
              (t = t),
              (e.statsToReport_[t] = !0);
          },
          dataUpdateCount: function (e) {
            return e._delegate._repo.dataUpdateCount;
          },
          interceptServerData: function (e, t) {
            (e = e._delegate._repo),
              (t = t),
              (e.interceptServerDataCallback_ = t);
          },
          initStandalone: function (e) {
            var t = e.app,
              n = e.url,
              r = e.version,
              i = e.customAuthImpl,
              o = e.namespace,
              e = void 0 !== (e = e.nodeAdmin) && e;
            return (
              St(r),
              (r = new K(
                "auth-internal",
                new J("database-standalone")
              )).setComponent(
                new z(
                  "auth-internal",
                  function () {
                    return i;
                  },
                  "PRIVATE"
                )
              ),
              { instance: new qu(yu(t, r, n, e), t), namespace: o }
            );
          },
        }),
        Ot = pn;
      (pn.prototype.simpleListen = function (e, t) {
        this.sendRequest("q", { p: e }, t);
      }),
        (pn.prototype.echo = function (e, t) {
          this.sendRequest("echo", { d: e }, t);
        });
      var Uu,
        Bu = Object.freeze({
          __proto__: null,
          DataConnection: Ot,
          RealTimeConnection: Rt,
          hijackHash: function (i) {
            var o = pn.prototype.put;
            return (
              (pn.prototype.put = function (e, t, n, r) {
                void 0 !== r && (r = i()), o.call(this, e, t, n, r);
              }),
              function () {
                pn.prototype.put = o;
              }
            );
          },
          ConnectionTarget: ut,
          queryIdentifier: function (e) {
            return e._delegate._queryIdentifier;
          },
          forceRestClient: function (e) {
            _u = e;
          },
        }),
        Vu = qu.ServerValue;
      St((Uu = t.default).SDK_VERSION),
        Uu.INTERNAL.registerComponent(
          new z(
            "database",
            function (e, t) {
              var n = t.instanceIdentifier,
                t = e.getProvider("app").getImmediate(),
                e = e.getProvider("auth-internal");
              return new qu(yu(t, e, n), t);
            },
            "PUBLIC"
          )
            .setServiceProps({
              Reference: Mu,
              Query: Ou,
              Database: qu,
              DataSnapshot: Ru,
              enableLogging: bu,
              INTERNAL: Wu,
              ServerValue: Vu,
              TEST_ACCESS: Bu,
            })
            .setMultipleInstances(!0)
        ),
        Uu.registerVersion(ge, "0.9.9");
    }.apply(this, arguments);
  } catch (e) {
    throw (
      (console.error(e),
      new Error(
        "Cannot instantiate firebase-database.js - be sure to load firebase-app.js first."
      ))
    );
  }
});
//# sourceMappingURL=firebase-database.js.map
