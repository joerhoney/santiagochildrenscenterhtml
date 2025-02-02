(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
var qu = {
    exports: {},
  },
  tl = {},
  Qu = {
    exports: {},
  },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn = Symbol.for("react.element"),
  oc = Symbol.for("react.portal"),
  uc = Symbol.for("react.fragment"),
  sc = Symbol.for("react.strict_mode"),
  ac = Symbol.for("react.profiler"),
  cc = Symbol.for("react.provider"),
  fc = Symbol.for("react.context"),
  dc = Symbol.for("react.forward_ref"),
  pc = Symbol.for("react.suspense"),
  mc = Symbol.for("react.memo"),
  hc = Symbol.for("react.lazy"),
  Mo = Symbol.iterator;
function vc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mo && e[Mo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Zu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ku = Object.assign,
  Yu = {};
function ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yu),
    (this.updater = n || Zu);
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gu() {}
Gu.prototype = ln.prototype;
function Ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yu),
    (this.updater = n || Zu);
}
var Ui = (Ai.prototype = new Gu());
Ui.constructor = Ai;
Ku(Ui, ln.prototype);
Ui.isPureReactComponent = !0;
var Oo = Array.isArray,
  Xu = Object.prototype.hasOwnProperty,
  $i = {
    current: null,
  },
  Ju = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function bu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Xu.call(t, r) && !Ju.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Kn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: $i.current,
  };
}
function gc(e, t) {
  return {
    $$typeof: Kn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kn;
}
function yc(e) {
  var t = {
    "=": "=0",
    ":": "=2",
  };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Io = /\/+/g;
function xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yc("" + e.key)
    : t.toString(36);
}
function wr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kn:
          case oc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + xl(o, 0) : r),
      Oo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Io, "$&/") + "/"),
          wr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Hi(l) &&
            (l = gc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Io, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Oo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + xl(i, u);
      o += wr(i, t, n, s, l);
    }
  else if (((s = vc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + xl(i, u++)), (o += wr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function wc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = {
    current: null,
  },
  xr = {
    transition: null,
  },
  xc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: xr,
    ReactCurrentOwner: $i,
  };
function es() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: tr,
  forEach: function (e, t, n) {
    tr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = ln;
z.Fragment = uc;
z.Profiler = ac;
z.PureComponent = Ai;
z.StrictMode = sc;
z.Suspense = pc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xc;
z.act = es;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ku({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = $i.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Xu.call(t, s) &&
        !Ju.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return {
    $$typeof: Kn,
    type: e.type,
    key: l,
    ref: i,
    props: r,
    _owner: o,
  };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: fc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: cc,
      _context: e,
    }),
    (e.Consumer = e)
  );
};
z.createElement = bu;
z.createFactory = function (e) {
  var t = bu.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return {
    current: null,
  };
};
z.forwardRef = function (e) {
  return {
    $$typeof: dc,
    render: e,
  };
};
z.isValidElement = Hi;
z.lazy = function (e) {
  return {
    $$typeof: hc,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: wc,
  };
};
z.memo = function (e, t) {
  return {
    $$typeof: mc,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
z.startTransition = function (e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
z.unstable_act = es;
z.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ue.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
z.useId = function () {
  return ue.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ue.current.useRef(e);
};
z.useState = function (e) {
  return ue.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ue.current.useTransition();
};
z.version = "18.3.1";
Qu.exports = z;
var Wt = Qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc = Wt,
  Sc = Symbol.for("react.element"),
  _c = Symbol.for("react.fragment"),
  Ec = Object.prototype.hasOwnProperty,
  Cc = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function ts(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ec.call(t, r) && !Nc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Sc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Cc.current,
  };
}
tl.Fragment = _c;
tl.jsx = ts;
tl.jsxs = ts;
qu.exports = tl;
var f = qu.exports,
  ns = {
    exports: {},
  },
  ye = {},
  rs = {
    exports: {},
  },
  ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(E, T) {
    var P = E.length;
    E.push(T);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        Y = E[W];
      if (0 < l(Y, T)) (E[W] = T), (E[P] = Y), (P = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var T = E[0],
      P = E.pop();
    if (P !== T) {
      E[0] = P;
      e: for (var W = 0, Y = E.length, bn = Y >>> 1; W < bn; ) {
        var ht = 2 * (W + 1) - 1,
          wl = E[ht],
          vt = ht + 1,
          er = E[vt];
        if (0 > l(wl, P))
          vt < Y && 0 > l(er, wl)
            ? ((E[W] = er), (E[vt] = P), (W = vt))
            : ((E[W] = wl), (E[ht] = P), (W = ht));
        else if (vt < Y && 0 > l(er, P)) (E[W] = er), (E[vt] = P), (W = vt);
        else break e;
      }
    }
    return T;
  }
  function l(E, T) {
    var P = E.sortIndex - T.sortIndex;
    return P !== 0 ? P : E.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    h = null,
    m = 3,
    w = !1,
    x = !1,
    k = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= E)
        r(c), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(c);
    }
  }
  function g(E) {
    if (((k = !1), p(E), !x))
      if (n(s) !== null) (x = !0), gl(_);
      else {
        var T = n(c);
        T !== null && yl(g, T.startTime - E);
      }
  }
  function _(E, T) {
    (x = !1), k && ((k = !1), d(j), (j = -1)), (w = !0);
    var P = m;
    try {
      for (
        p(T), h = n(s);
        h !== null && (!(h.expirationTime > T) || (E && !Ne()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Y = W(h.expirationTime <= T);
          (T = e.unstable_now()),
            typeof Y == "function" ? (h.callback = Y) : h === n(s) && r(s),
            p(T);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var bn = !0;
      else {
        var ht = n(c);
        ht !== null && yl(g, ht.startTime - T), (bn = !1);
      }
      return bn;
    } finally {
      (h = null), (m = P), (w = !1);
    }
  }
  var C = !1,
    N = null,
    j = -1,
    V = 5,
    L = -1;
  function Ne() {
    return !(e.unstable_now() - L < V);
  }
  function sn() {
    if (N !== null) {
      var E = e.unstable_now();
      L = E;
      var T = !0;
      try {
        T = N(!0, E);
      } finally {
        T ? an() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var an;
  if (typeof a == "function")
    an = function () {
      a(sn);
    };
  else if (typeof MessageChannel < "u") {
    var Do = new MessageChannel(),
      ic = Do.port2;
    (Do.port1.onmessage = sn),
      (an = function () {
        ic.postMessage(null);
      });
  } else
    an = function () {
      F(sn, 0);
    };
  function gl(E) {
    (N = E), C || ((C = !0), an());
  }
  function yl(E, T) {
    j = F(function () {
      E(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), gl(_));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var P = m;
      m = T;
      try {
        return E();
      } finally {
        m = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, T) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var P = m;
      m = E;
      try {
        return T();
      } finally {
        m = P;
      }
    }),
    (e.unstable_scheduleCallback = function (E, T, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        E)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = P + Y),
        (E = {
          id: v++,
          callback: T,
          priorityLevel: E,
          startTime: P,
          expirationTime: Y,
          sortIndex: -1,
        }),
        P > W
          ? ((E.sortIndex = P),
            t(c, E),
            n(s) === null &&
              E === n(c) &&
              (k ? (d(j), (j = -1)) : (k = !0), yl(g, P - W)))
          : ((E.sortIndex = Y), t(s, E), x || w || ((x = !0), gl(_))),
        E
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (E) {
      var T = m;
      return function () {
        var P = m;
        m = T;
        try {
          return E.apply(this, arguments);
        } finally {
          m = P;
        }
      };
    });
})(ls);
rs.exports = ls;
var jc = rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc = Wt,
  ge = jc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var is = new Set(),
  Ln = {};
function Pt(e, t) {
  Xt(e, t), Xt(e + "Capture", t);
}
function Xt(e, t) {
  for (Ln[e] = t, e = 0; e < t.length; e++) is.add(t[e]);
}
var We = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ql = Object.prototype.hasOwnProperty,
  Pc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fo = {},
  Ao = {};
function zc(e) {
  return Ql.call(Ao, e)
    ? !0
    : Ql.call(Fo, e)
    ? !1
    : Pc.test(e)
    ? (Ao[e] = !0)
    : ((Fo[e] = !0), !1);
}
function Lc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rc(e, t, n, r) {
  if (t === null || typeof t > "u" || Lc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bi = /[\-:]([a-z])/g;
function Vi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bi, Vi);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bi, Vi);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bi, Vi);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wi(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rc(t, n, l, r) && (n = null),
    r || l === null
      ? zc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ke = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for("react.element"),
  Rt = Symbol.for("react.portal"),
  Dt = Symbol.for("react.fragment"),
  qi = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  os = Symbol.for("react.provider"),
  us = Symbol.for("react.context"),
  Qi = Symbol.for("react.forward_ref"),
  Kl = Symbol.for("react.suspense"),
  Yl = Symbol.for("react.suspense_list"),
  Zi = Symbol.for("react.memo"),
  Ge = Symbol.for("react.lazy"),
  ss = Symbol.for("react.offscreen"),
  Uo = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uo && e[Uo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  kl;
function yn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || "";
    }
  return (
    `
` +
    kl +
    e
  );
}
var Sl = !1;
function _l(e, t) {
  if (!e || Sl) return "";
  Sl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yn(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return yn(e.type);
    case 16:
      return yn("Lazy");
    case 13:
      return yn("Suspense");
    case 19:
      return yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _l(e.type, !1)), e;
    case 11:
      return (e = _l(e.type.render, !1)), e;
    case 1:
      return (e = _l(e.type, !0)), e;
    default:
      return "";
  }
}
function Gl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case Rt:
      return "Portal";
    case Zl:
      return "Profiler";
    case qi:
      return "StrictMode";
    case Kl:
      return "Suspense";
    case Yl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case us:
        return (e.displayName || "Context") + ".Consumer";
      case os:
        return (e._context.displayName || "Context") + ".Provider";
      case Qi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zi:
        return (
          (t = e.displayName || null), t !== null ? t : Gl(e.type) || "Memo"
        );
      case Ge:
        (t = e._payload), (e = e._init);
        try {
          return Gl(e(t));
        } catch {}
    }
  return null;
}
function Mc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Gl(t);
    case 8:
      return t === qi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ct(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function as(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Oc(e) {
  var t = as(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable,
      }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Oc(e));
}
function cs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = as(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xl(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $o(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ct(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function fs(e, t) {
  (t = t.checked), t != null && Wi(e, "checked", t, !1);
}
function Jl(e, t) {
  fs(e, t);
  var n = ct(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bl(e, t.type, ct(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ho(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bl(e, t, n) {
  (t !== "number" || Lr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ct(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Bo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = {
    initialValue: ct(n),
  };
}
function ds(e, t) {
  var n = ct(t.value),
    r = ct(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ps(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ti(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ps(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var lr,
  ms = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        lr = lr || document.createElement("div"),
          lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ic = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sn).forEach(function (e) {
  Ic.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sn[t] = Sn[e]);
  });
});
function hs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Sn.hasOwnProperty(e) && Sn[e])
    ? ("" + t).trim()
    : t + "px";
}
function vs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = hs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Fc = H(
  {
    menuitem: !0,
  },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ni(e, t) {
  if (t) {
    if (Fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ri(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var li = null;
function Ki(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ii = null,
  Qt = null,
  Zt = null;
function Wo(e) {
  if ((e = Xn(e))) {
    if (typeof ii != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ol(t)), ii(e.stateNode, e.type, t));
  }
}
function gs(e) {
  Qt ? (Zt ? Zt.push(e) : (Zt = [e])) : (Qt = e);
}
function ys() {
  if (Qt) {
    var e = Qt,
      t = Zt;
    if (((Zt = Qt = null), Wo(e), t)) for (e = 0; e < t.length; e++) Wo(t[e]);
  }
}
function ws(e, t) {
  return e(t);
}
function xs() {}
var El = !1;
function ks(e, t, n) {
  if (El) return e(t, n);
  El = !0;
  try {
    return ws(e, t, n);
  } finally {
    (El = !1), (Qt !== null || Zt !== null) && (xs(), ys());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var oi = !1;
if (We)
  try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
      get: function () {
        oi = !0;
      },
    }),
      window.addEventListener("test", fn, fn),
      window.removeEventListener("test", fn, fn);
  } catch {
    oi = !1;
  }
function Ac(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var _n = !1,
  Rr = null,
  Dr = !1,
  ui = null,
  Uc = {
    onError: function (e) {
      (_n = !0), (Rr = e);
    },
  };
function $c(e, t, n, r, l, i, o, u, s) {
  (_n = !1), (Rr = null), Ac.apply(Uc, arguments);
}
function Hc(e, t, n, r, l, i, o, u, s) {
  if (($c.apply(this, arguments), _n)) {
    if (_n) {
      var c = Rr;
      (_n = !1), (Rr = null);
    } else throw Error(y(198));
    Dr || ((Dr = !0), (ui = c));
  }
}
function zt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ss(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qo(e) {
  if (zt(e) !== e) throw Error(y(188));
}
function Bc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return qo(l), e;
        if (i === r) return qo(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function _s(e) {
  return (e = Bc(e)), e !== null ? Es(e) : null;
}
function Es(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Es(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cs = ge.unstable_scheduleCallback,
  Qo = ge.unstable_cancelCallback,
  Vc = ge.unstable_shouldYield,
  Wc = ge.unstable_requestPaint,
  q = ge.unstable_now,
  qc = ge.unstable_getCurrentPriorityLevel,
  Yi = ge.unstable_ImmediatePriority,
  Ns = ge.unstable_UserBlockingPriority,
  Mr = ge.unstable_NormalPriority,
  Qc = ge.unstable_LowPriority,
  js = ge.unstable_IdlePriority,
  nl = null,
  Fe = null;
function Zc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Le = Math.clz32 ? Math.clz32 : Gc,
  Kc = Math.log,
  Yc = Math.LN2;
function Gc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kc(e) / Yc) | 0)) | 0;
}
var ir = 64,
  or = 4194304;
function xn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Or(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = xn(u)) : ((i &= o), i !== 0 && (r = xn(i)));
  } else (o = n & ~l), o !== 0 ? (r = xn(o)) : i !== 0 && (r = xn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Le(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Xc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Le(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Xc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function si(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ts() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Cl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Le(t)),
    (e[t] = n);
}
function bc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Le(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Gi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Le(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function Ps(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zs,
  Xi,
  Ls,
  Rs,
  Ds,
  ai = !1,
  ur = [],
  nt = null,
  rt = null,
  lt = null,
  Mn = new Map(),
  On = new Map(),
  Je = [],
  ef =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nt = null;
      break;
    case "dragenter":
    case "dragleave":
      rt = null;
      break;
    case "mouseover":
    case "mouseout":
      lt = null;
      break;
    case "pointerover":
    case "pointerout":
      Mn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      On.delete(t.pointerId);
  }
}
function dn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Xn(t)), t !== null && Xi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function tf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (nt = dn(nt, e, t, n, r, l)), !0;
    case "dragenter":
      return (rt = dn(rt, e, t, n, r, l)), !0;
    case "mouseover":
      return (lt = dn(lt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Mn.set(i, dn(Mn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), On.set(i, dn(On.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ms(e) {
  var t = wt(e.target);
  if (t !== null) {
    var n = zt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ss(n)), t !== null)) {
          (e.blockedOn = t),
            Ds(e.priority, function () {
              Ls(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (li = r), n.target.dispatchEvent(r), (li = null);
    } else return (t = Xn(n)), t !== null && Xi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ko(e, t, n) {
  kr(e) && n.delete(t);
}
function nf() {
  (ai = !1),
    nt !== null && kr(nt) && (nt = null),
    rt !== null && kr(rt) && (rt = null),
    lt !== null && kr(lt) && (lt = null),
    Mn.forEach(Ko),
    On.forEach(Ko);
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ai ||
      ((ai = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, nf)));
}
function In(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < ur.length) {
    pn(ur[0], e);
    for (var n = 1; n < ur.length; n++) {
      var r = ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nt !== null && pn(nt, e),
      rt !== null && pn(rt, e),
      lt !== null && pn(lt, e),
      Mn.forEach(t),
      On.forEach(t),
      n = 0;
    n < Je.length;
    n++
  )
    (r = Je[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Je.length && ((n = Je[0]), n.blockedOn === null); )
    Ms(n), n.blockedOn === null && Je.shift();
}
var Kt = Ke.ReactCurrentBatchConfig,
  Ir = !0;
function rf(e, t, n, r) {
  var l = D,
    i = Kt.transition;
  Kt.transition = null;
  try {
    (D = 1), Ji(e, t, n, r);
  } finally {
    (D = l), (Kt.transition = i);
  }
}
function lf(e, t, n, r) {
  var l = D,
    i = Kt.transition;
  Kt.transition = null;
  try {
    (D = 4), Ji(e, t, n, r);
  } finally {
    (D = l), (Kt.transition = i);
  }
}
function Ji(e, t, n, r) {
  if (Ir) {
    var l = ci(e, t, n, r);
    if (l === null) Ol(e, t, r, Fr, n), Zo(e, r);
    else if (tf(l, e, t, n, r)) r.stopPropagation();
    else if ((Zo(e, r), t & 4 && -1 < ef.indexOf(e))) {
      for (; l !== null; ) {
        var i = Xn(l);
        if (
          (i !== null && zs(i),
          (i = ci(e, t, n, r)),
          i === null && Ol(e, t, r, Fr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ol(e, t, r, null, n);
  }
}
var Fr = null;
function ci(e, t, n, r) {
  if (((Fr = null), (e = Ki(r)), (e = wt(e)), e !== null))
    if (((t = zt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ss(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fr = e), null;
}
function Os(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qc()) {
        case Yi:
          return 1;
        case Ns:
          return 4;
        case Mr:
        case Qc:
          return 16;
        case js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var et = null,
  bi = null,
  Sr = null;
function Is() {
  if (Sr) return Sr;
  var e,
    t = bi,
    n = t.length,
    r,
    l = "value" in et ? et.value : et.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sr() {
  return !0;
}
function Yo() {
  return !1;
}
function we(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? sr
        : Yo),
      (this.isPropagationStopped = Yo),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = sr));
      },
      persist: function () {},
      isPersistent: sr,
    }),
    t
  );
}
var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eo = we(on),
  Gn = H({}, on, {
    view: 0,
    detail: 0,
  }),
  of = we(Gn),
  Nl,
  jl,
  mn,
  rl = H({}, Gn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: to,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mn &&
            (mn && e.type === "mousemove"
              ? ((Nl = e.screenX - mn.screenX), (jl = e.screenY - mn.screenY))
              : (jl = Nl = 0),
            (mn = e)),
          Nl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jl;
    },
  }),
  Go = we(rl),
  uf = H({}, rl, {
    dataTransfer: 0,
  }),
  sf = we(uf),
  af = H({}, Gn, {
    relatedTarget: 0,
  }),
  Tl = we(af),
  cf = H({}, on, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  ff = we(cf),
  df = H({}, on, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pf = we(df),
  mf = H({}, on, {
    data: 0,
  }),
  Xo = we(mf),
  hf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function yf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gf[e]) ? !!t[e] : !1;
}
function to() {
  return yf;
}
var wf = H({}, Gn, {
    key: function (e) {
      if (e.key) {
        var t = hf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: to,
    charCode: function (e) {
      return e.type === "keypress" ? _r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _r(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xf = we(wf),
  kf = H({}, rl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Jo = we(kf),
  Sf = H({}, Gn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to,
  }),
  _f = we(Sf),
  Ef = H({}, on, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  Cf = we(Ef),
  Nf = H({}, rl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jf = we(Nf),
  Tf = [9, 13, 27, 32],
  no = We && "CompositionEvent" in window,
  En = null;
We && "documentMode" in document && (En = document.documentMode);
var Pf = We && "TextEvent" in window && !En,
  Fs = We && (!no || (En && 8 < En && 11 >= En)),
  bo = " ",
  eu = !1;
function As(e, t) {
  switch (e) {
    case "keyup":
      return Tf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Us(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mt = !1;
function zf(e, t) {
  switch (e) {
    case "compositionend":
      return Us(t);
    case "keypress":
      return t.which !== 32 ? null : ((eu = !0), bo);
    case "textInput":
      return (e = t.data), e === bo && eu ? null : e;
    default:
      return null;
  }
}
function Lf(e, t) {
  if (Mt)
    return e === "compositionend" || (!no && As(e, t))
      ? ((e = Is()), (Sr = bi = et = null), (Mt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Fs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rf[e.type] : t === "textarea";
}
function $s(e, t, n, r) {
  gs(r),
    (t = Ar(t, "onChange")),
    0 < t.length &&
      ((n = new eo("onChange", "change", null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }));
}
var Cn = null,
  Fn = null;
function Df(e) {
  Xs(e, 0);
}
function ll(e) {
  var t = Ft(e);
  if (cs(t)) return e;
}
function Mf(e, t) {
  if (e === "change") return t;
}
var Hs = !1;
if (We) {
  var Pl;
  if (We) {
    var zl = "oninput" in document;
    if (!zl) {
      var nu = document.createElement("div");
      nu.setAttribute("oninput", "return;"),
        (zl = typeof nu.oninput == "function");
    }
    Pl = zl;
  } else Pl = !1;
  Hs = Pl && (!document.documentMode || 9 < document.documentMode);
}
function ru() {
  Cn && (Cn.detachEvent("onpropertychange", Bs), (Fn = Cn = null));
}
function Bs(e) {
  if (e.propertyName === "value" && ll(Fn)) {
    var t = [];
    $s(t, Fn, e, Ki(e)), ks(Df, t);
  }
}
function Of(e, t, n) {
  e === "focusin"
    ? (ru(), (Cn = t), (Fn = n), Cn.attachEvent("onpropertychange", Bs))
    : e === "focusout" && ru();
}
function If(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(Fn);
}
function Ff(e, t) {
  if (e === "click") return ll(t);
}
function Af(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function Uf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Uf;
function An(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ql.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function lu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function iu(e, t) {
  var n = lu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return {
          node: n,
          offset: t - e,
        };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = lu(n);
  }
}
function Vs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Vs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ws() {
  for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lr(e.document);
  }
  return t;
}
function ro(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $f(e) {
  var t = Ws(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Vs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ro(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = iu(n, i));
        var o = iu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Hf = We && "documentMode" in document && 11 >= document.documentMode,
  Ot = null,
  fi = null,
  Nn = null,
  di = !1;
function ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  di ||
    Ot == null ||
    Ot !== Lr(r) ||
    ((r = Ot),
    "selectionStart" in r && ro(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Nn && An(Nn, r)) ||
      ((Nn = r),
      (r = Ar(fi, "onSelect")),
      0 < r.length &&
        ((t = new eo("onSelect", "select", null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = Ot))));
}
function ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var It = {
    animationend: ar("Animation", "AnimationEnd"),
    animationiteration: ar("Animation", "AnimationIteration"),
    animationstart: ar("Animation", "AnimationStart"),
    transitionend: ar("Transition", "TransitionEnd"),
  },
  Ll = {},
  qs = {};
We &&
  ((qs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete It.animationend.animation,
    delete It.animationiteration.animation,
    delete It.animationstart.animation),
  "TransitionEvent" in window || delete It.transitionend.transition);
function il(e) {
  if (Ll[e]) return Ll[e];
  if (!It[e]) return e;
  var t = It[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qs) return (Ll[e] = t[n]);
  return e;
}
var Qs = il("animationend"),
  Zs = il("animationiteration"),
  Ks = il("animationstart"),
  Ys = il("transitionend"),
  Gs = new Map(),
  uu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dt(e, t) {
  Gs.set(e, t), Pt(t, [e]);
}
for (var Rl = 0; Rl < uu.length; Rl++) {
  var Dl = uu[Rl],
    Bf = Dl.toLowerCase(),
    Vf = Dl[0].toUpperCase() + Dl.slice(1);
  dt(Bf, "on" + Vf);
}
dt(Qs, "onAnimationEnd");
dt(Zs, "onAnimationIteration");
dt(Ks, "onAnimationStart");
dt("dblclick", "onDoubleClick");
dt("focusin", "onFocus");
dt("focusout", "onBlur");
dt(Ys, "onTransitionEnd");
Xt("onMouseEnter", ["mouseout", "mouseover"]);
Xt("onMouseLeave", ["mouseout", "mouseover"]);
Xt("onPointerEnter", ["pointerout", "pointerover"]);
Xt("onPointerLeave", ["pointerout", "pointerover"]);
Pt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Pt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Pt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Pt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function su(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Hc(r, t, void 0, e), (e.currentTarget = null);
}
function Xs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          su(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          su(l, u, c), (i = s);
        }
    }
  }
  if (Dr) throw ((e = ui), (Dr = !1), (ui = null), e);
}
function O(e, t) {
  var n = t[gi];
  n === void 0 && (n = t[gi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Js(t, e, 2, !1), n.add(r));
}
function Ml(e, t, n) {
  var r = 0;
  t && (r |= 4), Js(n, e, r, t);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function Un(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      is.forEach(function (n) {
        n !== "selectionchange" && (Wf.has(n) || Ml(n, !1, e), Ml(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cr] || ((t[cr] = !0), Ml("selectionchange", !1, t));
  }
}
function Js(e, t, n, r) {
  switch (Os(t)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = lf;
      break;
    default:
      l = Ji;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !oi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: l,
          })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, {
          passive: l,
        })
      : e.addEventListener(t, n, !1);
}
function Ol(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = wt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ks(function () {
    var c = i,
      v = Ki(n),
      h = [];
    e: {
      var m = Gs.get(e);
      if (m !== void 0) {
        var w = eo,
          x = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = xf;
            break;
          case "focusin":
            (x = "focus"), (w = Tl);
            break;
          case "focusout":
            (x = "blur"), (w = Tl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Go;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = _f;
            break;
          case Qs:
          case Zs:
          case Ks:
            w = ff;
            break;
          case Ys:
            w = Cf;
            break;
          case "scroll":
            w = of;
            break;
          case "wheel":
            w = jf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Jo;
        }
        var k = (t & 4) !== 0,
          F = !k && e === "scroll",
          d = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var a = c, p; a !== null; ) {
          p = a;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              d !== null && ((g = Dn(a, d)), g != null && k.push($n(a, g, p)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((m = new w(m, x, null, n, v)),
          h.push({
            event: m,
            listeners: k,
          }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== li &&
            (x = n.relatedTarget || n.fromElement) &&
            (wt(x) || x[qe]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? wt(x) : null),
              x !== null &&
                ((F = zt(x)), x !== F || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((k = Go),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Jo),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (a = "pointer")),
            (F = w == null ? m : Ft(w)),
            (p = x == null ? m : Ft(x)),
            (m = new k(g, a + "leave", w, n, v)),
            (m.target = F),
            (m.relatedTarget = p),
            (g = null),
            wt(v) === c &&
              ((k = new k(d, a + "enter", x, n, v)),
              (k.target = p),
              (k.relatedTarget = F),
              (g = k)),
            (F = g),
            w && x)
          )
            t: {
              for (k = w, d = x, a = 0, p = k; p; p = Lt(p)) a++;
              for (p = 0, g = d; g; g = Lt(g)) p++;
              for (; 0 < a - p; ) (k = Lt(k)), a--;
              for (; 0 < p - a; ) (d = Lt(d)), p--;
              for (; a--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = Lt(k)), (d = Lt(d));
              }
              k = null;
            }
          else k = null;
          w !== null && au(h, m, w, k, !1),
            x !== null && F !== null && au(h, F, x, k, !0);
        }
      }
      e: {
        if (
          ((m = c ? Ft(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var _ = Mf;
        else if (tu(m))
          if (Hs) _ = Af;
          else {
            _ = If;
            var C = Of;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (_ = Ff);
        if (_ && (_ = _(e, c))) {
          $s(h, _, n, v);
          break e;
        }
        C && C(e, m, c),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            bl(m, "number", m.value);
      }
      switch (((C = c ? Ft(c) : window), e)) {
        case "focusin":
          (tu(C) || C.contentEditable === "true") &&
            ((Ot = C), (fi = c), (Nn = null));
          break;
        case "focusout":
          Nn = fi = Ot = null;
          break;
        case "mousedown":
          di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (di = !1), ou(h, n, v);
          break;
        case "selectionchange":
          if (Hf) break;
        case "keydown":
        case "keyup":
          ou(h, n, v);
      }
      var N;
      if (no)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Mt
          ? As(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Fs &&
          n.locale !== "ko" &&
          (Mt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Mt && (N = Is())
            : ((et = v),
              (bi = "value" in et ? et.value : et.textContent),
              (Mt = !0))),
        (C = Ar(c, j)),
        0 < C.length &&
          ((j = new Xo(j, e, null, n, v)),
          h.push({
            event: j,
            listeners: C,
          }),
          N ? (j.data = N) : ((N = Us(n)), N !== null && (j.data = N)))),
        (N = Pf ? zf(e, n) : Lf(e, n)) &&
          ((c = Ar(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new Xo("onBeforeInput", "beforeinput", null, n, v)),
            h.push({
              event: v,
              listeners: c,
            }),
            (v.data = N)));
    }
    Xs(h, t);
  });
}
function $n(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  };
}
function Ar(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Dn(e, n)),
      i != null && r.unshift($n(e, i, l)),
      (i = Dn(e, t)),
      i != null && r.push($n(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Lt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function au(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Dn(n, i)), s != null && o.unshift($n(n, s, u)))
        : l || ((s = Dn(n, i)), s != null && o.push($n(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 &&
    e.push({
      event: t,
      listeners: o,
    });
}
var qf = /\r\n?/g,
  Qf = /\u0000|\uFFFD/g;
function cu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      qf,
      `
`
    )
    .replace(Qf, "");
}
function fr(e, t, n) {
  if (((t = cu(t)), cu(e) !== t && n)) throw Error(y(425));
}
function Ur() {}
var pi = null,
  mi = null;
function hi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vi = typeof setTimeout == "function" ? setTimeout : void 0,
  Zf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fu = typeof Promise == "function" ? Promise : void 0,
  Kf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fu < "u"
      ? function (e) {
          return fu.resolve(null).then(e).catch(Yf);
        }
      : vi;
function Yf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Il(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), In(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  In(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function du(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var un = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + un,
  Hn = "__reactProps$" + un,
  qe = "__reactContainer$" + un,
  gi = "__reactEvents$" + un,
  Gf = "__reactListeners$" + un,
  Xf = "__reactHandles$" + un;
function wt(e) {
  var t = e[Ie];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[Ie])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = du(e); e !== null; ) {
          if ((n = e[Ie])) return n;
          e = du(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Xn(e) {
  return (
    (e = e[Ie] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ft(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ol(e) {
  return e[Hn] || null;
}
var yi = [],
  At = -1;
function pt(e) {
  return {
    current: e,
  };
}
function I(e) {
  0 > At || ((e.current = yi[At]), (yi[At] = null), At--);
}
function M(e, t) {
  At++, (yi[At] = e.current), (e.current = t);
}
var ft = {},
  le = pt(ft),
  fe = pt(!1),
  Et = ft;
function Jt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  I(fe), I(le);
}
function pu(e, t, n) {
  if (le.current !== ft) throw Error(y(168));
  M(le, t), M(fe, n);
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Mc(e) || "Unknown", l));
  return H({}, n, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (Et = le.current),
    M(le, e),
    M(fe, fe.current),
    !0
  );
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = bs(e, t, Et)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(fe),
      I(le),
      M(le, e))
    : I(fe),
    M(fe, n);
}
var $e = null,
  ul = !1,
  Fl = !1;
function ea(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function Jf(e) {
  (ul = !0), ea(e);
}
function mt() {
  if (!Fl && $e !== null) {
    Fl = !0;
    var e = 0,
      t = D;
    try {
      var n = $e;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (ul = !1);
    } catch (l) {
      throw ($e !== null && ($e = $e.slice(e + 1)), Cs(Yi, mt), l);
    } finally {
      (D = t), (Fl = !1);
    }
  }
  return null;
}
var Ut = [],
  $t = 0,
  Br = null,
  Vr = 0,
  xe = [],
  ke = 0,
  Ct = null,
  He = 1,
  Be = "";
function gt(e, t) {
  (Ut[$t++] = Vr), (Ut[$t++] = Br), (Br = e), (Vr = t);
}
function ta(e, t, n) {
  (xe[ke++] = He), (xe[ke++] = Be), (xe[ke++] = Ct), (Ct = e);
  var r = He;
  e = Be;
  var l = 32 - Le(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Le(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (He = (1 << (32 - Le(t) + l)) | (n << l) | r),
      (Be = i + e);
  } else (He = (1 << i) | (n << l) | r), (Be = e);
}
function lo(e) {
  e.return !== null && (gt(e, 1), ta(e, 1, 0));
}
function io(e) {
  for (; e === Br; )
    (Br = Ut[--$t]), (Ut[$t] = null), (Vr = Ut[--$t]), (Ut[$t] = null);
  for (; e === Ct; )
    (Ct = xe[--ke]),
      (xe[ke] = null),
      (Be = xe[--ke]),
      (xe[ke] = null),
      (He = xe[--ke]),
      (xe[ke] = null);
}
var ve = null,
  he = null,
  A = !1,
  ze = null;
function na(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (he = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              Ct !== null
                ? {
                    id: He,
                    overflow: Be,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (A) {
    var t = he;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (wi(e)) throw Error(y(418));
        t = it(n.nextSibling);
        var r = ve;
        t && hu(e, t)
          ? na(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (ve = e));
      }
    } else {
      if (wi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (ve = e);
    }
  }
}
function vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function dr(e) {
  if (e !== ve) return !1;
  if (!A) return vu(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hi(e.type, e.memoizedProps))),
    t && (t = he))
  ) {
    if (wi(e)) throw (ra(), Error(y(418)));
    for (; t; ) na(e, t), (t = it(t.nextSibling));
  }
  if ((vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              he = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = he; e; ) e = it(e.nextSibling);
}
function bt() {
  (he = ve = null), (A = !1);
}
function oo(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var bf = Ke.ReactCurrentBatchConfig;
function hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gu(e) {
  var t = e._init;
  return t(e._payload);
}
function la(e) {
  function t(d, a) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [a]), (d.flags |= 16)) : p.push(a);
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), (a = a.sibling);
    return null;
  }
  function r(d, a) {
    for (d = new Map(); a !== null; )
      a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
    return d;
  }
  function l(d, a) {
    return (d = at(d, a)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, a, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < a ? ((d.flags |= 2), a) : p)
            : ((d.flags |= 2), a))
        : ((d.flags |= 1048576), a)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, p, g) {
    return a === null || a.tag !== 6
      ? ((a = Wl(p, d.mode, g)), (a.return = d), a)
      : ((a = l(a, p)), (a.return = d), a);
  }
  function s(d, a, p, g) {
    var _ = p.type;
    return _ === Dt
      ? v(d, a, p.props.children, g, p.key)
      : a !== null &&
        (a.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === Ge &&
            gu(_) === a.type))
      ? ((g = l(a, p.props)), (g.ref = hn(d, a, p)), (g.return = d), g)
      : ((g = zr(p.type, p.key, p.props, null, d.mode, g)),
        (g.ref = hn(d, a, p)),
        (g.return = d),
        g);
  }
  function c(d, a, p, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== p.containerInfo ||
      a.stateNode.implementation !== p.implementation
      ? ((a = ql(p, d.mode, g)), (a.return = d), a)
      : ((a = l(a, p.children || [])), (a.return = d), a);
  }
  function v(d, a, p, g, _) {
    return a === null || a.tag !== 7
      ? ((a = _t(p, d.mode, g, _)), (a.return = d), a)
      : ((a = l(a, p)), (a.return = d), a);
  }
  function h(d, a, p) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Wl("" + a, d.mode, p)), (a.return = d), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case nr:
          return (
            (p = zr(a.type, a.key, a.props, null, d.mode, p)),
            (p.ref = hn(d, null, a)),
            (p.return = d),
            p
          );
        case Rt:
          return (a = ql(a, d.mode, p)), (a.return = d), a;
        case Ge:
          var g = a._init;
          return h(d, g(a._payload), p);
      }
      if (wn(a) || cn(a))
        return (a = _t(a, d.mode, p, null)), (a.return = d), a;
      pr(d, a);
    }
    return null;
  }
  function m(d, a, p, g) {
    var _ = a !== null ? a.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return _ !== null ? null : u(d, a, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case nr:
          return p.key === _ ? s(d, a, p, g) : null;
        case Rt:
          return p.key === _ ? c(d, a, p, g) : null;
        case Ge:
          return (_ = p._init), m(d, a, _(p._payload), g);
      }
      if (wn(p) || cn(p)) return _ !== null ? null : v(d, a, p, g, null);
      pr(d, p);
    }
    return null;
  }
  function w(d, a, p, g, _) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(p) || null), u(a, d, "" + g, _);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case nr:
          return (d = d.get(g.key === null ? p : g.key) || null), s(a, d, g, _);
        case Rt:
          return (d = d.get(g.key === null ? p : g.key) || null), c(a, d, g, _);
        case Ge:
          var C = g._init;
          return w(d, a, p, C(g._payload), _);
      }
      if (wn(g) || cn(g)) return (d = d.get(p) || null), v(a, d, g, _, null);
      pr(a, g);
    }
    return null;
  }
  function x(d, a, p, g) {
    for (
      var _ = null, C = null, N = a, j = (a = 0), V = null;
      N !== null && j < p.length;
      j++
    ) {
      N.index > j ? ((V = N), (N = null)) : (V = N.sibling);
      var L = m(d, N, p[j], g);
      if (L === null) {
        N === null && (N = V);
        break;
      }
      e && N && L.alternate === null && t(d, N),
        (a = i(L, a, j)),
        C === null ? (_ = L) : (C.sibling = L),
        (C = L),
        (N = V);
    }
    if (j === p.length) return n(d, N), A && gt(d, j), _;
    if (N === null) {
      for (; j < p.length; j++)
        (N = h(d, p[j], g)),
          N !== null &&
            ((a = i(N, a, j)), C === null ? (_ = N) : (C.sibling = N), (C = N));
      return A && gt(d, j), _;
    }
    for (N = r(d, N); j < p.length; j++)
      (V = w(N, d, j, p[j], g)),
        V !== null &&
          (e && V.alternate !== null && N.delete(V.key === null ? j : V.key),
          (a = i(V, a, j)),
          C === null ? (_ = V) : (C.sibling = V),
          (C = V));
    return (
      e &&
        N.forEach(function (Ne) {
          return t(d, Ne);
        }),
      A && gt(d, j),
      _
    );
  }
  function k(d, a, p, g) {
    var _ = cn(p);
    if (typeof _ != "function") throw Error(y(150));
    if (((p = _.call(p)), p == null)) throw Error(y(151));
    for (
      var C = (_ = null), N = a, j = (a = 0), V = null, L = p.next();
      N !== null && !L.done;
      j++, L = p.next()
    ) {
      N.index > j ? ((V = N), (N = null)) : (V = N.sibling);
      var Ne = m(d, N, L.value, g);
      if (Ne === null) {
        N === null && (N = V);
        break;
      }
      e && N && Ne.alternate === null && t(d, N),
        (a = i(Ne, a, j)),
        C === null ? (_ = Ne) : (C.sibling = Ne),
        (C = Ne),
        (N = V);
    }
    if (L.done) return n(d, N), A && gt(d, j), _;
    if (N === null) {
      for (; !L.done; j++, L = p.next())
        (L = h(d, L.value, g)),
          L !== null &&
            ((a = i(L, a, j)), C === null ? (_ = L) : (C.sibling = L), (C = L));
      return A && gt(d, j), _;
    }
    for (N = r(d, N); !L.done; j++, L = p.next())
      (L = w(N, d, j, L.value, g)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? j : L.key),
          (a = i(L, a, j)),
          C === null ? (_ = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        N.forEach(function (sn) {
          return t(d, sn);
        }),
      A && gt(d, j),
      _
    );
  }
  function F(d, a, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Dt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case nr:
          e: {
            for (var _ = p.key, C = a; C !== null; ) {
              if (C.key === _) {
                if (((_ = p.type), _ === Dt)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (a = l(C, p.props.children)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                } else if (
                  C.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Ge &&
                    gu(_) === C.type)
                ) {
                  n(d, C.sibling),
                    (a = l(C, p.props)),
                    (a.ref = hn(d, C, p)),
                    (a.return = d),
                    (d = a);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            p.type === Dt
              ? ((a = _t(p.props.children, d.mode, g, p.key)),
                (a.return = d),
                (d = a))
              : ((g = zr(p.type, p.key, p.props, null, d.mode, g)),
                (g.ref = hn(d, a, p)),
                (g.return = d),
                (d = g));
          }
          return o(d);
        case Rt:
          e: {
            for (C = p.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === p.containerInfo &&
                  a.stateNode.implementation === p.implementation
                ) {
                  n(d, a.sibling),
                    (a = l(a, p.children || [])),
                    (a.return = d),
                    (d = a);
                  break e;
                } else {
                  n(d, a);
                  break;
                }
              else t(d, a);
              a = a.sibling;
            }
            (a = ql(p, d.mode, g)), (a.return = d), (d = a);
          }
          return o(d);
        case Ge:
          return (C = p._init), F(d, a, C(p._payload), g);
      }
      if (wn(p)) return x(d, a, p, g);
      if (cn(p)) return k(d, a, p, g);
      pr(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        a !== null && a.tag === 6
          ? (n(d, a.sibling), (a = l(a, p)), (a.return = d), (d = a))
          : (n(d, a), (a = Wl(p, d.mode, g)), (a.return = d), (d = a)),
        o(d))
      : n(d, a);
  }
  return F;
}
var en = la(!0),
  ia = la(!1),
  Wr = pt(null),
  qr = null,
  Ht = null,
  uo = null;
function so() {
  uo = Ht = qr = null;
}
function ao(e) {
  var t = Wr.current;
  I(Wr), (e._currentValue = t);
}
function ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yt(e, t) {
  (qr = e),
    (uo = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ee(e) {
  var t = e._currentValue;
  if (uo !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      Ht === null)
    ) {
      if (qr === null) throw Error(y(308));
      (Ht = e),
        (qr.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else Ht = Ht.next = e;
  return t;
}
var xt = null;
function co(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function oa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), co(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Qe(e, r)
  );
}
function Qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xe = !1;
function fo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  };
}
function ua(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ve(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Qe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), co(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Qe(e, n)
  );
}
function Er(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
  }
}
function yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Qr(e, t, n, r) {
  var l = e.updateQueue;
  Xe = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = c = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            k = u;
          switch (((m = t), (w = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == "function")) {
                h = x.call(w, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = k.payload),
                (m = typeof x == "function" ? x.call(w, h, m) : x),
                m == null)
              )
                break e;
              h = H({}, h, m);
              break e;
            case 2:
              Xe = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = w), (s = h)) : (v = v.next = w),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (jt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Jn = {},
  Ae = pt(Jn),
  Bn = pt(Jn),
  Vn = pt(Jn);
function kt(e) {
  if (e === Jn) throw Error(y(174));
  return e;
}
function po(e, t) {
  switch ((M(Vn, t), M(Bn, e), M(Ae, Jn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ti(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ti(t, e));
  }
  I(Ae), M(Ae, t);
}
function tn() {
  I(Ae), I(Bn), I(Vn);
}
function sa(e) {
  kt(Vn.current);
  var t = kt(Ae.current),
    n = ti(t, e.type);
  t !== n && (M(Bn, e), M(Ae, n));
}
function mo(e) {
  Bn.current === e && (I(Ae), I(Bn));
}
var U = pt(0);
function Zr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Al = [];
function ho() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Cr = Ke.ReactCurrentDispatcher,
  Ul = Ke.ReactCurrentBatchConfig,
  Nt = 0,
  $ = null,
  Z = null,
  G = null,
  Kr = !1,
  jn = !1,
  Wn = 0,
  ed = 0;
function te() {
  throw Error(y(321));
}
function vo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function go(e, t, n, r, l, i) {
  if (
    ((Nt = i),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Cr.current = e === null || e.memoizedState === null ? ld : id),
    (e = n(r, l)),
    jn)
  ) {
    i = 0;
    do {
      if (((jn = !1), (Wn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (G = Z = null),
        (t.updateQueue = null),
        (Cr.current = od),
        (e = n(r, l));
    } while (jn);
  }
  if (
    ((Cr.current = Yr),
    (t = Z !== null && Z.next !== null),
    (Nt = 0),
    (G = Z = $ = null),
    (Kr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function yo() {
  var e = Wn !== 0;
  return (Wn = 0), e;
}
function Oe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return G === null ? ($.memoizedState = G = e) : (G = G.next = e), G;
}
function Ce() {
  if (Z === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = G === null ? $.memoizedState : G.next;
  if (t !== null) (G = t), (Z = e);
  else {
    if (e === null) throw Error(y(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      G === null ? ($.memoizedState = G = e) : (G = G.next = e);
  }
  return G;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $l(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((Nt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          ($.lanes |= v),
          (jt |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      De(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), ($.lanes |= i), (jt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    De(i, t.memoizedState) || (ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function aa() {}
function ca(e, t) {
  var n = $,
    r = Ce(),
    l = t(),
    i = !De(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    wo(pa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (G !== null && G.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qn(9, da.bind(null, n, r, l, t), void 0, null),
      X === null)
    )
      throw Error(y(349));
    Nt & 30 || fa(n, t, l);
  }
  return l;
}
function fa(e, t, n) {
  (e.flags |= 16384),
    (e = {
      getSnapshot: t,
      value: n,
    }),
    (t = $.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function da(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ma(t) && ha(e);
}
function pa(e, t, n) {
  return n(function () {
    ma(t) && ha(e);
  });
}
function ma(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function ha(e) {
  var t = Qe(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function xu(e) {
  var t = Oe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rd.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function Qn(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = $.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function va() {
  return Ce().memoizedState;
}
function Nr(e, t, n, r) {
  var l = Oe();
  ($.flags |= e),
    (l.memoizedState = Qn(1 | t, n, void 0, r === void 0 ? null : r));
}
function sl(e, t, n, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && vo(r, o.deps))) {
      l.memoizedState = Qn(t, n, i, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Qn(1 | t, n, i, r));
}
function ku(e, t) {
  return Nr(8390656, 8, e, t);
}
function wo(e, t) {
  return sl(2048, 8, e, t);
}
function ga(e, t) {
  return sl(4, 2, e, t);
}
function ya(e, t) {
  return sl(4, 4, e, t);
}
function wa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sl(4, 4, wa.bind(null, t, e), n)
  );
}
function xo() {}
function ka(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Sa(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _a(e, t, n) {
  return Nt & 21
    ? (De(n, t) || ((n = Ts()), ($.lanes |= n), (jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function td(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Ul.transition = r);
  }
}
function Ea() {
  return Ce().memoizedState;
}
function nd(e, t, n) {
  var r = st(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ca(e))
  )
    Na(t, n);
  else if (((n = oa(e, t, n, r)), n !== null)) {
    var l = oe();
    Re(n, e, r, l), ja(n, t, r);
  }
}
function rd(e, t, n) {
  var r = st(e),
    l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (Ca(e)) Na(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), co(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = oa(e, t, l, r)),
      n !== null && ((l = oe()), Re(n, e, r, l), ja(n, t, r));
  }
}
function Ca(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function Na(e, t) {
  jn = Kr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ja(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
  }
}
var Yr = {
    readContext: Ee,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  ld = {
    readContext: Ee,
    useCallback: function (e, t) {
      return (Oe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ee,
    useEffect: ku,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Nr(4194308, 4, wa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Oe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Oe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nd.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Oe();
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      );
    },
    useState: xu,
    useDebugValue: xo,
    useDeferredValue: function (e) {
      return (Oe().memoizedState = e);
    },
    useTransition: function () {
      var e = xu(!1),
        t = e[0];
      return (e = td.bind(null, e[1])), (Oe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Oe();
      if (A) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), X === null)) throw Error(y(349));
        Nt & 30 || fa(r, t, n);
      }
      l.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t,
      };
      return (
        (l.queue = i),
        ku(pa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qn(9, da.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Oe(),
        t = X.identifierPrefix;
      if (A) {
        var n = Be,
          r = He;
        (n = (r & ~(1 << (32 - Le(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Wn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ed++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: Ee,
    useCallback: ka,
    useContext: Ee,
    useEffect: wo,
    useImperativeHandle: xa,
    useInsertionEffect: ga,
    useLayoutEffect: ya,
    useMemo: Sa,
    useReducer: $l,
    useRef: va,
    useState: function () {
      return $l(qn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Ce();
      return _a(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(qn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ea,
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: Ee,
    useCallback: ka,
    useContext: Ee,
    useEffect: wo,
    useImperativeHandle: xa,
    useInsertionEffect: ga,
    useLayoutEffect: ya,
    useMemo: Sa,
    useReducer: Hl,
    useRef: va,
    useState: function () {
      return Hl(qn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Ce();
      return Z === null ? (t.memoizedState = e) : _a(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(qn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ea,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Si(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = Ve(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Re(t, e, l, r), Er(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = Ve(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Re(t, e, l, r), Er(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = st(e),
      l = Ve(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ot(e, l, r)),
      t !== null && (Re(t, e, r, n), Er(t, e, r));
  },
};
function Su(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !An(n, r) || !An(l, i)
      : !0
  );
}
function Ta(e, t, n) {
  var r = !1,
    l = ft,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ee(i))
      : ((l = de(t) ? Et : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Jt(e, l) : ft)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function _u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function _i(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), fo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ee(i))
    : ((i = de(t) ? Et : le.current), (l.context = Jt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Si(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && al.enqueueReplaceState(l, l.state, null),
      Qr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Dc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return {
    value: e,
    source: t,
    stack: l,
    digest: null,
  };
}
function Bl(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  };
}
function Ei(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ud = typeof WeakMap == "function" ? WeakMap : Map;
function Pa(e, t, n) {
  (n = Ve(-1, n)),
    (n.tag = 3),
    (n.payload = {
      element: null,
    });
  var r = t.value;
  return (
    (n.callback = function () {
      Xr || ((Xr = !0), (Mi = r)), Ei(e, t);
    }),
    n
  );
}
function za(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ei(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ei(e, t),
          typeof r != "function" &&
            (ut === null ? (ut = new Set([this])) : ut.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Eu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ud();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = kd.bind(null, e, t, n)), t.then(e, e));
}
function Cu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ve(-1, 1)), (t.tag = 2), ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sd = Ke.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? ia(t, null, n, r) : en(t, e.child, n, r);
}
function ju(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Yt(t, l),
    (r = go(e, t, n, r, i, l)),
    (n = yo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (A && n && lo(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Tu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !To(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), La(e, t, i, r, l))
      : ((e = zr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : An), n(o, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = at(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function La(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (An(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return Ci(e, t, n, r, l);
}
function Ra(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        M(Vt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(Vt, me),
          (me |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = i !== null ? i.baseLanes : n),
        M(Vt, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(Vt, me),
      (me |= r);
  return ie(e, t, l, n), t.child;
}
function Da(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ci(e, t, n, r, l) {
  var i = de(n) ? Et : le.current;
  return (
    (i = Jt(t, i)),
    Yt(t, l),
    (n = go(e, t, n, r, i, l)),
    (r = yo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (A && r && lo(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Pu(e, t, n, r, l) {
  if (de(n)) {
    var i = !0;
    Hr(t);
  } else i = !1;
  if ((Yt(t, l), t.stateNode === null))
    jr(e, t), Ta(t, n, r), _i(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ee(c))
      : ((c = de(n) ? Et : le.current), (c = Jt(t, c)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && _u(t, o, r, c)),
      (Xe = !1);
    var m = t.memoizedState;
    (o.state = m),
      Qr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || fe.current || Xe
        ? (typeof v == "function" && (Si(t, n, v, r), (s = t.memoizedState)),
          (u = Xe || Su(t, n, u, r, m, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ua(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = c),
      (h = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ee(s))
        : ((s = de(n) ? Et : le.current), (s = Jt(t, s)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && _u(t, o, r, s)),
      (Xe = !1),
      (m = t.memoizedState),
      (o.state = m),
      Qr(t, r, o, l);
    var x = t.memoizedState;
    u !== h || m !== x || fe.current || Xe
      ? (typeof w == "function" && (Si(t, n, w, r), (x = t.memoizedState)),
        (c = Xe || Su(t, n, c, r, m, x, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ni(e, t, n, r, i, l);
}
function Ni(e, t, n, r, l, i) {
  Da(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && mu(t, n, !1), Ze(e, t, i);
  (r = t.stateNode), (sd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = en(t, e.child, null, i)), (t.child = en(t, null, u, i)))
      : ie(e, t, u, i),
    (t.memoizedState = r.state),
    l && mu(t, n, !0),
    t.child
  );
}
function Ma(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pu(e, t.context, !1),
    po(e, t.containerInfo);
}
function zu(e, t, n, r, l) {
  return bt(), oo(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var ji = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};
function Ti(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}
function Oa(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M(U, l & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = {
                mode: "hidden",
                children: o,
              }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = dl(o, r, 0, null)),
              (e = _t(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ti(n)),
              (t.memoizedState = ji),
              e)
            : ko(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ad(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = {
      mode: "hidden",
      children: r.children,
    };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = at(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = at(u, i)) : ((i = _t(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ti(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ji),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = at(i, {
      mode: "visible",
      children: r.children,
    })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ko(e, t) {
  return (
    (t = dl(
      {
        mode: "visible",
        children: t,
      },
      e.mode,
      0,
      null
    )),
    (t.return = e),
    (e.child = t)
  );
}
function mr(e, t, n, r) {
  return (
    r !== null && oo(r),
    en(t, e.child, null, n),
    (e = ko(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ad(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bl(Error(y(422)))), mr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = dl(
          {
            mode: "visible",
            children: r.children,
          },
          l,
          0,
          null
        )),
        (i = _t(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && en(t, e.child, null, o),
        (t.child.memoizedState = Ti(o)),
        (t.memoizedState = ji),
        i);
  if (!(t.mode & 1)) return mr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Bl(i, r, void 0)), mr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = X), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Qe(e, l), Re(r, e, l, -1));
    }
    return jo(), (r = Bl(Error(y(421)))), mr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (he = it(l.nextSibling)),
      (ve = t),
      (A = !0),
      (ze = null),
      e !== null &&
        ((xe[ke++] = He),
        (xe[ke++] = Be),
        (xe[ke++] = Ct),
        (He = e.id),
        (Be = e.overflow),
        (Ct = t)),
      (t = ko(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Lu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ki(e.return, t, n);
}
function Vl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Ia(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lu(e, n, t);
        else if (e.tag === 19) Lu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Zr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Vl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Zr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Vl(t, !0, n, null, i);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function jr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = at(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = at(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ma(t), bt();
      break;
    case 5:
      sa(t);
      break;
    case 1:
      de(t.type) && Hr(t);
      break;
    case 4:
      po(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Oa(e, t, n)
          : (M(U, U.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null);
      M(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ia(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ra(e, t, n);
  }
  return Ze(e, t, n);
}
var Fa, Pi, Aa, Ua;
Fa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Pi = function () {};
Aa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kt(Ae.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Xl(e, l)), (r = Xl(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, {
          value: void 0,
        })),
          (r = H({}, r, {
            value: void 0,
          })),
          (i = []);
        break;
      case "textarea":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ur);
    }
    ni(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ln.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Ln.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && O("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ua = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fd(e, t, n) {
  var r = t.pendingProps;
  switch ((io(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return de(t.type) && $r(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        I(fe),
        I(le),
        ho(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ze !== null && (Fi(ze), (ze = null)))),
        Pi(e, t),
        ne(t),
        null
      );
    case 5:
      mo(t);
      var l = kt(Vn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Aa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = kt(Ae.current)), dr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ie] = t), (r[Hn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) O(kn[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O("error", r), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              $o(r, i), O("invalid", r);
              break;
            case "select":
              (r._wrapperState = {
                wasMultiple: !!i.multiple,
              }),
                O("invalid", r);
              break;
            case "textarea":
              Bo(r, i), O("invalid", r);
          }
          ni(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Ln.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  O("scroll", r);
            }
          switch (n) {
            case "input":
              rr(r), Ho(r, i, !0);
              break;
            case "textarea":
              rr(r), Vo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ur);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ps(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, {
                    is: r.is,
                  }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ie] = t),
            (e[Hn] = r),
            Fa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ri(n, r)), n)) {
              case "dialog":
                O("cancel", e), O("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) O(kn[l], e);
                l = r;
                break;
              case "source":
                O("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (l = r);
                break;
              case "details":
                O("toggle", e), (l = r);
                break;
              case "input":
                $o(e, r), (l = Xl(e, r)), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (l = H({}, r, {
                    value: void 0,
                  })),
                  O("invalid", e);
                break;
              case "textarea":
                Bo(e, r), (l = ei(e, r)), O("invalid", e);
                break;
              default:
                l = r;
            }
            ni(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? vs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ms(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rn(e, s)
                    : typeof s == "number" && Rn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ln.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && O("scroll", e)
                      : s != null && Wi(e, i, s, o));
              }
            switch (n) {
              case "input":
                rr(e), Ho(e, r, !1);
                break;
              case "textarea":
                rr(e), Vo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ct(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ur);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = kt(Vn.current)), kt(Ae.current), dr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ie] = t),
            (i = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ie] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (I(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && he !== null && t.mode & 1 && !(t.flags & 128))
          ra(), bt(), (t.flags |= 98560), (i = !1);
        else if (((i = dr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ie] = t;
          } else
            bt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else ze !== null && (Fi(ze), (ze = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? K === 0 && (K = 3) : jo())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        tn(), Pi(e, t), e === null && Un(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return ao(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && $r(), ne(t), null;
    case 19:
      if ((I(U), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) vn(i, !1);
        else {
          if (K !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Zr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    vn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            q() > rn &&
            ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !A)
            )
              return ne(t), null;
          } else
            2 * q() - i.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = q()),
          (t.sibling = null),
          (n = U.current),
          M(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        No(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function dd(e, t) {
  switch ((io(t), t.tag)) {
    case 1:
      return (
        de(t.type) && $r(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tn(),
        I(fe),
        I(le),
        ho(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mo(t), null;
    case 13:
      if ((I(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        bt();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I(U), null;
    case 4:
      return tn(), null;
    case 10:
      return ao(t.type._context), null;
    case 22:
    case 23:
      return No(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hr = !1,
  re = !1,
  pd = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function zi(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Ru = !1;
function md(e, t) {
  if (((pi = Ir), (e = Ws()), ro(e))) {
    if ("selectionStart" in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd,
      };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (m = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++c === l && (u = o),
                m === i && ++v === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          n =
            u === -1 || s === -1
              ? null
              : {
                  start: u,
                  end: s,
                };
        } else n = null;
      }
    n = n || {
      start: 0,
      end: 0,
    };
  } else n = null;
  for (
    mi = {
      focusedElem: e,
      selectionRange: n,
    },
      Ir = !1,
      S = t;
    S !== null;

  )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    F = x.memoizedState,
                    d = t.stateNode,
                    a = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Te(t.type, k),
                      F
                    );
                  d.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          B(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (x = Ru), (Ru = !1), x;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && zi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Li(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $a(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $a(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ie], delete t[Hn], delete t[gi], delete t[Gf], delete t[Xf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ha(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ha(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
function Di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Di(e, t, n), e = e.sibling; e !== null; ) Di(e, t, n), (e = e.sibling);
}
var J = null,
  Pe = !1;
function Ye(e, t, n) {
  for (n = n.child; n !== null; ) Ba(e, t, n), (n = n.sibling);
}
function Ba(e, t, n) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Bt(n, t);
    case 6:
      var r = J,
        l = Pe;
      (J = null),
        Ye(e, t, n),
        (J = r),
        (Pe = l),
        J !== null &&
          (Pe
            ? ((e = J),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : J.removeChild(n.stateNode));
      break;
    case 18:
      J !== null &&
        (Pe
          ? ((e = J),
            (n = n.stateNode),
            e.nodeType === 8
              ? Il(e.parentNode, n)
              : e.nodeType === 1 && Il(e, n),
            In(e))
          : Il(J, n.stateNode));
      break;
    case 4:
      (r = J),
        (l = Pe),
        (J = n.stateNode.containerInfo),
        (Pe = !0),
        Ye(e, t, n),
        (J = r),
        (Pe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && zi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ye(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Bt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      Ye(e, t, n);
      break;
    case 21:
      Ye(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ye(e, t, n), (re = r))
        : Ye(e, t, n);
      break;
    default:
      Ye(e, t, n);
  }
}
function Mu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pd()),
      t.forEach(function (r) {
        var l = _d.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (J = u.stateNode), (Pe = !1);
              break e;
            case 3:
              (J = u.stateNode.containerInfo), (Pe = !0);
              break e;
            case 4:
              (J = u.stateNode.containerInfo), (Pe = !0);
              break e;
          }
          u = u.return;
        }
        if (J === null) throw Error(y(160));
        Ba(i, o, l), (J = null), (Pe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Va(t, e), (t = t.sibling);
}
function Va(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), Me(e), r & 4)) {
        try {
          Tn(3, e, e.return), cl(3, e);
        } catch (k) {
          B(e, e.return, k);
        }
        try {
          Tn(5, e, e.return);
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 1:
      je(t, e), Me(e), r & 512 && n !== null && Bt(n, n.return);
      break;
    case 5:
      if (
        (je(t, e),
        Me(e),
        r & 512 && n !== null && Bt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (k) {
          B(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && fs(l, i),
              ri(u, o);
            var c = ri(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === "style"
                ? vs(l, h)
                : v === "dangerouslySetInnerHTML"
                ? ms(l, h)
                : v === "children"
                ? Rn(l, h)
                : Wi(l, v, h, c);
            }
            switch (u) {
              case "input":
                Jl(l, i);
                break;
              case "textarea":
                ds(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? qt(l, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qt(l, !!i.multiple, i.defaultValue, !0)
                      : qt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Hn] = i;
          } catch (k) {
            B(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((je(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (je(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          In(t.containerInfo);
        } catch (k) {
          B(e, e.return, k);
        }
      break;
    case 4:
      je(t, e), Me(e);
      break;
    case 13:
      je(t, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Eo = q())),
        r & 4 && Mu(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || v), je(t, e), (re = c)) : je(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (S = e, v = e.child; v !== null; ) {
            for (h = S = v; S !== null; ) {
              switch (((m = S), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, m, m.return);
                  break;
                case 1:
                  Bt(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (k) {
                      B(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Bt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Iu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (S = w)) : Iu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = hs("display", o)));
              } catch (k) {
                B(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (k) {
                B(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      je(t, e), Me(e), r & 4 && Mu(e);
      break;
    case 21:
      break;
    default:
      je(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ha(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var i = Du(e);
          Di(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Du(e);
          Ri(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hd(e, t, n) {
  (S = e), Wa(e);
}
function Wa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || hr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = hr;
        var c = re;
        if (((hr = o), (re = s) && !c))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Fu(l)
                : s !== null
                ? ((s.return = o), (S = s))
                : Fu(l);
        for (; i !== null; ) (S = i), Wa(i), (i = i.sibling);
        (S = l), (hr = u), (re = c);
      }
      Ou(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Ou(e);
  }
}
function Ou(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && wu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && In(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && Li(t));
      } catch (m) {
        B(t, t.return, m);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Iu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var i = t.return;
          try {
            Li(t);
          } catch (s) {
            B(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Li(t);
          } catch (s) {
            B(t, o, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var vd = Math.ceil,
  Gr = Ke.ReactCurrentDispatcher,
  So = Ke.ReactCurrentOwner,
  _e = Ke.ReactCurrentBatchConfig,
  R = 0,
  X = null,
  Q = null,
  b = 0,
  me = 0,
  Vt = pt(0),
  K = 0,
  Zn = null,
  jt = 0,
  fl = 0,
  _o = 0,
  Pn = null,
  ae = null,
  Eo = 0,
  rn = 1 / 0,
  Ue = null,
  Xr = !1,
  Mi = null,
  ut = null,
  vr = !1,
  tt = null,
  Jr = 0,
  zn = 0,
  Oi = null,
  Tr = -1,
  Pr = 0;
function oe() {
  return R & 6 ? q() : Tr !== -1 ? Tr : (Tr = q());
}
function st(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : bf.transition !== null
      ? (Pr === 0 && (Pr = Ts()), Pr)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Os(e.type))),
        e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < zn) throw ((zn = 0), (Oi = null), Error(y(185)));
  Yn(e, n, r),
    (!(R & 2) || e !== X) &&
      (e === X && (!(R & 2) && (fl |= n), K === 4 && be(e, b)),
      pe(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((rn = q() + 500), ul && mt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  Jc(e, t);
  var r = Or(e, e === X ? b : 0);
  if (r === 0)
    n !== null && Qo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Qo(n), t === 1))
      e.tag === 0 ? Jf(Au.bind(null, e)) : ea(Au.bind(null, e)),
        Kf(function () {
          !(R & 6) && mt();
        }),
        (n = null);
    else {
      switch (Ps(r)) {
        case 1:
          n = Yi;
          break;
        case 4:
          n = Ns;
          break;
        case 16:
          n = Mr;
          break;
        case 536870912:
          n = js;
          break;
        default:
          n = Mr;
      }
      n = Ja(n, qa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function qa(e, t) {
  if (((Tr = -1), (Pr = 0), R & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Gt() && e.callbackNode !== n) return null;
  var r = Or(e, e === X ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var i = Za();
    (X !== e || b !== t) && ((Ue = null), (rn = q() + 500), St(e, t));
    do
      try {
        wd();
        break;
      } catch (u) {
        Qa(e, u);
      }
    while (!0);
    so(),
      (Gr.current = i),
      (R = l),
      Q !== null ? (t = 0) : ((X = null), (b = 0), (t = K));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = si(e)), l !== 0 && ((r = l), (t = Ii(e, l)))), t === 1)
    )
      throw ((n = Zn), St(e, 0), be(e, r), pe(e, q()), n);
    if (t === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !gd(l) &&
          ((t = br(e, r)),
          t === 2 && ((i = si(e)), i !== 0 && ((r = i), (t = Ii(e, i)))),
          t === 1))
      )
        throw ((n = Zn), St(e, 0), be(e, r), pe(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          yt(e, ae, Ue);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((t = Eo + 500 - q()), 10 < t))
          ) {
            if (Or(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = vi(yt.bind(null, e, ae, Ue), t);
            break;
          }
          yt(e, ae, Ue);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Le(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vi(yt.bind(null, e, ae, Ue), r);
            break;
          }
          yt(e, ae, Ue);
          break;
        case 5:
          yt(e, ae, Ue);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, q()), e.callbackNode === n ? qa.bind(null, e) : null;
}
function Ii(e, t) {
  var n = Pn;
  return (
    e.current.memoizedState.isDehydrated && (St(e, t).flags |= 256),
    (e = br(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Fi(t)),
    e
  );
}
function Fi(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function gd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!De(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function be(e, t) {
  for (
    t &= ~_o,
      t &= ~fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Le(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Au(e) {
  if (R & 6) throw Error(y(327));
  Gt();
  var t = Or(e, 0);
  if (!(t & 1)) return pe(e, q()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = si(e);
    r !== 0 && ((t = r), (n = Ii(e, r)));
  }
  if (n === 1) throw ((n = Zn), St(e, 0), be(e, t), pe(e, q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yt(e, ae, Ue),
    pe(e, q()),
    null
  );
}
function Co(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((rn = q() + 500), ul && mt());
  }
}
function Tt(e) {
  tt !== null && tt.tag === 0 && !(R & 6) && Gt();
  var t = R;
  R |= 1;
  var n = _e.transition,
    r = D;
  try {
    if (((_e.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (_e.transition = n), (R = t), !(R & 6) && mt();
  }
}
function No() {
  (me = Vt.current), I(Vt);
}
function St(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zf(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch ((io(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          tn(), I(fe), I(le), ho();
          break;
        case 5:
          mo(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          I(U);
          break;
        case 19:
          I(U);
          break;
        case 10:
          ao(r.type._context);
          break;
        case 22:
        case 23:
          No();
      }
      n = n.return;
    }
  if (
    ((X = e),
    (Q = e = at(e.current, null)),
    (b = me = t),
    (K = 0),
    (Zn = null),
    (_o = fl = jt = 0),
    (ae = Pn = null),
    xt !== null)
  ) {
    for (t = 0; t < xt.length; t++)
      if (((n = xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function Qa(e, t) {
  do {
    var n = Q;
    try {
      if ((so(), (Cr.current = Yr), Kr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Kr = !1;
      }
      if (
        ((Nt = 0),
        (G = Z = $ = null),
        (jn = !1),
        (Wn = 0),
        (So.current = null),
        n === null || n.return === null)
      ) {
        (K = 1), (Zn = t), (Q = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = Cu(o);
          if (w !== null) {
            (w.flags &= -257),
              Nu(w, o, u, i, t),
              w.mode & 1 && Eu(i, c, t),
              (t = w),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Eu(i, c, t), jo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (A && u.mode & 1) {
          var F = Cu(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Nu(F, o, u, i, t),
              oo(nn(s, u));
            break e;
          }
        }
        (i = s = nn(s, u)),
          K !== 4 && (K = 2),
          Pn === null ? (Pn = [i]) : Pn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = Pa(i, s, t);
              yu(i, d);
              break e;
            case 1:
              u = s;
              var a = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ut === null || !ut.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = za(i, u, t);
                yu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ya(n);
    } catch (_) {
      (t = _), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Za() {
  var e = Gr.current;
  return (Gr.current = Yr), e === null ? Yr : e;
}
function jo() {
  (K === 0 || K === 3 || K === 2) && (K = 4),
    X === null || (!(jt & 268435455) && !(fl & 268435455)) || be(X, b);
}
function br(e, t) {
  var n = R;
  R |= 2;
  var r = Za();
  (X !== e || b !== t) && ((Ue = null), St(e, t));
  do
    try {
      yd();
      break;
    } catch (l) {
      Qa(e, l);
    }
  while (!0);
  if ((so(), (R = n), (Gr.current = r), Q !== null)) throw Error(y(261));
  return (X = null), (b = 0), K;
}
function yd() {
  for (; Q !== null; ) Ka(Q);
}
function wd() {
  for (; Q !== null && !Vc(); ) Ka(Q);
}
function Ka(e) {
  var t = Xa(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ya(e) : (Q = t),
    (So.current = null);
}
function Ya(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dd(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (K = 6), (Q = null);
        return;
      }
    } else if (((n = fd(n, t, me)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  K === 0 && (K = 5);
}
function yt(e, t, n) {
  var r = D,
    l = _e.transition;
  try {
    (_e.transition = null), (D = 1), xd(e, t, n, r);
  } finally {
    (_e.transition = l), (D = r);
  }
  return null;
}
function xd(e, t, n, r) {
  do Gt();
  while (tt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (bc(e, i),
    e === X && ((Q = X = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vr ||
      ((vr = !0),
      Ja(Mr, function () {
        return Gt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = D;
    D = 1;
    var u = R;
    (R |= 4),
      (So.current = null),
      md(e, n),
      Va(n, e),
      $f(mi),
      (Ir = !!pi),
      (mi = pi = null),
      (e.current = n),
      hd(n),
      Wc(),
      (R = u),
      (D = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (vr && ((vr = !1), (tt = e), (Jr = l)),
    (i = e.pendingLanes),
    i === 0 && (ut = null),
    Zc(n.stateNode),
    pe(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]),
        r(l.value, {
          componentStack: l.stack,
          digest: l.digest,
        });
  if (Xr) throw ((Xr = !1), (e = Mi), (Mi = null), e);
  return (
    Jr & 1 && e.tag !== 0 && Gt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Oi ? zn++ : ((zn = 0), (Oi = e))) : (zn = 0),
    mt(),
    null
  );
}
function Gt() {
  if (tt !== null) {
    var e = Ps(Jr),
      t = _e.transition,
      n = D;
    try {
      if (((_e.transition = null), (D = 16 > e ? 16 : e), tt === null))
        var r = !1;
      else {
        if (((e = tt), (tt = null), (Jr = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (S = h);
                  else
                    for (; S !== null; ) {
                      v = S;
                      var m = v.sibling,
                        w = v.return;
                      if (($a(v), v === c)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (S = m);
                        break;
                      }
                      S = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var F = k.sibling;
                    (k.sibling = null), (k = F);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tn(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (S = d);
                break e;
              }
              S = i.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (S = p);
          else
            e: for (o = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, u);
                  }
                } catch (_) {
                  B(u, u.return, _);
                }
              if (u === o) {
                S = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (S = g);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((R = l), mt(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
        )
          try {
            Fe.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (_e.transition = t);
    }
  }
  return !1;
}
function Uu(e, t, n) {
  (t = nn(n, t)),
    (t = Pa(e, t, 1)),
    (e = ot(e, t, 1)),
    (t = oe()),
    e !== null && (Yn(e, 1, t), pe(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Uu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Uu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ut === null || !ut.has(r)))
        ) {
          (e = nn(n, e)),
            (e = za(t, e, 1)),
            (t = ot(t, e, 1)),
            (e = oe()),
            t !== null && (Yn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    X === e &&
      (b & n) === n &&
      (K === 4 || (K === 3 && (b & 130023424) === b && 500 > q() - Eo)
        ? St(e, 0)
        : (_o |= n)),
    pe(e, t);
}
function Ga(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = or), (or <<= 1), !(or & 130023424) && (or = 4194304))
      : (t = 1));
  var n = oe();
  (e = Qe(e, t)), e !== null && (Yn(e, t, n), pe(e, n));
}
function Sd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ga(e, n);
}
function _d(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), Ga(e, n);
}
var Xa;
Xa = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), cd(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), A && t.flags & 1048576 && ta(t, Vr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      jr(e, t), (e = t.pendingProps);
      var l = Jt(t, le.current);
      Yt(t, n), (l = go(null, t, r, e, l, n));
      var i = yo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((i = !0), Hr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            fo(t),
            (l.updater = al),
            (t.stateNode = l),
            (l._reactInternals = t),
            _i(t, r, e, n),
            (t = Ni(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && lo(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (jr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Cd(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Ci(null, t, r, e, n);
            break e;
          case 1:
            t = Pu(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = Tu(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ci(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Pu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ma(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ua(e, t),
          Qr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = nn(Error(y(423)), t)), (t = zu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = nn(Error(y(424)), t)), (t = zu(e, t, r, n, l));
            break e;
          } else
            for (
              he = it(t.stateNode.containerInfo.firstChild),
                ve = t,
                A = !0,
                ze = null,
                n = ia(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((bt(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sa(t),
        e === null && xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        hi(r, l) ? (o = null) : i !== null && hi(r, i) && (t.flags |= 32),
        Da(e, t),
        ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return Oa(e, t, n);
    case 4:
      return (
        po(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = en(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        ju(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          M(Wr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (De(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ve(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      ki(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  ki(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Yt(t, n),
        (l = Ee(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Tu(e, t, r, l, n)
      );
    case 15:
      return La(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        jr(e, t),
        (t.tag = 1),
        de(r) ? ((e = !0), Hr(t)) : (e = !1),
        Yt(t, n),
        Ta(t, r, l),
        _i(t, r, l, n),
        Ni(null, t, r, !0, e, n)
      );
    case 19:
      return Ia(e, t, n);
    case 22:
      return Ra(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Ja(e, t) {
  return Cs(e, t);
}
function Ed(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, t, n, r) {
  return new Ed(e, t, n, r);
}
function To(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cd(e) {
  if (typeof e == "function") return To(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Qi)) return 11;
    if (e === Zi) return 14;
  }
  return 2;
}
function at(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) To(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Dt:
        return _t(n.children, l, i, t);
      case qi:
        (o = 8), (l |= 8);
        break;
      case Zl:
        return (
          (e = Se(12, n, t, l | 2)), (e.elementType = Zl), (e.lanes = i), e
        );
      case Kl:
        return (e = Se(13, n, t, l)), (e.elementType = Kl), (e.lanes = i), e;
      case Yl:
        return (e = Se(19, n, t, l)), (e.elementType = Yl), (e.lanes = i), e;
      case ss:
        return dl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case os:
              o = 10;
              break e;
            case us:
              o = 9;
              break e;
            case Qi:
              o = 11;
              break e;
            case Zi:
              o = 14;
              break e;
            case Ge:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Se(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function _t(e, t, n, r) {
  return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function dl(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = ss),
    (e.lanes = n),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  );
}
function Wl(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function ql(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Nd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Cl(0)),
    (this.expirationTimes = Cl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Po(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Nd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Se(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fo(i),
    e
  );
}
function jd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ba(e) {
  if (!e) return ft;
  e = e._reactInternals;
  e: {
    if (zt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return bs(e, n, t);
  }
  return t;
}
function ec(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Po(n, r, !0, e, l, i, o, u, s)),
    (e.context = ba(null)),
    (n = e.current),
    (r = oe()),
    (l = st(n)),
    (i = Ve(r, l)),
    (i.callback = t ?? null),
    ot(n, i, l),
    (e.current.lanes = l),
    Yn(e, l, r),
    pe(e, r),
    e
  );
}
function pl(e, t, n, r) {
  var l = t.current,
    i = oe(),
    o = st(l);
  return (
    (n = ba(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ve(i, o)),
    (t.payload = {
      element: e,
    }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ot(l, t, o)),
    e !== null && (Re(e, l, o, i), Er(e, l, o)),
    o
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $u(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zo(e, t) {
  $u(e, t), (e = e.alternate) && $u(e, t);
}
function Td() {
  return null;
}
var tc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Lo(e) {
  this._internalRoot = e;
}
ml.prototype.render = Lo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  pl(e, t, null, null);
};
ml.prototype.unmount = Lo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      pl(null, e, null, null);
    }),
      (t[qe] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rs();
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    };
    for (var n = 0; n < Je.length && t !== 0 && t < Je[n].priority; n++);
    Je.splice(n, 0, e), n === 0 && Ms(e);
  }
};
function Ro(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hu() {}
function Pd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = el(o);
        i.call(c);
      };
    }
    var o = ec(t, r, e, 0, null, !1, !1, "", Hu);
    return (
      (e._reactRootContainer = o),
      (e[qe] = o.current),
      Un(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Po(e, 0, !1, null, null, !1, !1, "", Hu);
  return (
    (e._reactRootContainer = s),
    (e[qe] = s.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      pl(t, s, n, r);
    }),
    s
  );
}
function vl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = el(o);
        u.call(s);
      };
    }
    pl(t, o, e, l);
  } else o = Pd(n, t, e, l, r);
  return el(o);
}
zs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 &&
          (Gi(t, n | 1), pe(t, q()), !(R & 6) && ((rn = q() + 500), mt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Qe(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }),
        zo(e, 1);
  }
};
Xi = function (e) {
  if (e.tag === 13) {
    var t = Qe(e, 134217728);
    if (t !== null) {
      var n = oe();
      Re(t, e, 134217728, n);
    }
    zo(e, 134217728);
  }
};
Ls = function (e) {
  if (e.tag === 13) {
    var t = st(e),
      n = Qe(e, t);
    if (n !== null) {
      var r = oe();
      Re(n, e, t, r);
    }
    zo(e, t);
  }
};
Rs = function () {
  return D;
};
Ds = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
ii = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) throw Error(y(90));
            cs(r), Jl(r, l);
          }
        }
      }
      break;
    case "textarea":
      ds(e, n);
      break;
    case "select":
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
ws = Co;
xs = Tt;
var zd = {
    usingClientEntryPoint: !1,
    Events: [Xn, Ft, ol, gs, ys, Co],
  },
  gn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ld = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ke.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _s(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Td,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (nl = gr.inject(Ld)), (Fe = gr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ro(t)) throw Error(y(200));
  return jd(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Ro(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = tc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Po(e, 1, !1, null, null, n, !1, r, l)),
    (e[qe] = t.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    new Lo(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = _s(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Tt(e);
};
ye.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return vl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Ro(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = tc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ec(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[qe] = t.current),
    Un(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ml(t);
};
ye.render = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return vl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qe] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = Co;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return vl(e, t, n, !1, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function nc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc);
    } catch (e) {
      console.error(e);
    }
}
nc(), (ns.exports = ye);
var Rd = ns.exports,
  rc,
  Bu = Rd;
(rc = Bu.createRoot), Bu.hydrateRoot;
const Vu = ({ children: e, className: t, delay: n, interval: r }) => {
    (r = r || 7e3), (n = n || 0);
    const [l, i] = Wt.useState(0),
      o = Wt.Children.toArray(e);
    return (
      Wt.useEffect(() => {
        const u = setInterval(() => {
          i((s) => (s + 1) % o.length);
        }, r);
        return () => clearInterval(u);
      }, [o, r]),
      f.jsx("div", {
        className: `aFSlides ${t}`,
        children: o.map((u, s) =>
          f.jsx(
            "div",
            {
              className: l === s ? "current" : "",
              children: u,
            },
            s
          )
        ),
      })
    );
  },
  Dd = "/assets/Santiago-Childrens-Center-logo-Dth8tzil.svg",
  yr = "/assets/5-stars-CfW5u8sm.svg",
  Wu = "/assets/yelp-CIcdUixk.svg",
  Md = "/assets/children_watching_turtle_ai2x-RN2vxzpn.jpg",
  Od = "/assets/children_watching_terrarium_ai2x-BU3wuetC.jpg",
  Id = "/assets/children_looking_at_horse-B9VU7qaz.webp",
  Fd = "/assets/girl_n_horse_looking_at_each_other-nHVaNSET.jpg",
  Ad =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='currentColor'%3e%3cpath%20d='M40-160v-160q0-34%2023.5-57t56.5-23h131q20%200%2038%2010t29%2027q29%2039%2071.5%2061t90.5%2022q49%200%2091.5-22t70.5-61q13-17%2030.5-27t36.5-10h131q34%200%2057%2023t23%2057v160H640v-91q-35%2025-75.5%2038T480-200q-43%200-84-13.5T320-252v92H40Zm440-160q-38%200-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37%2093-58.5T480-520q63%200%20134%2021.5t93%2058.5q-29%200-55%2014.5T609-386q-22%2032-56%2049t-73%2017ZM160-440q-50%200-85-35t-35-85q0-51%2035-85.5t85-34.5q51%200%2085.5%2034.5T280-560q0%2050-34.5%2085T160-440Zm640%200q-50%200-85-35t-35-85q0-51%2035-85.5t85-34.5q51%200%2085.5%2034.5T920-560q0%2050-34.5%2085T800-440ZM480-560q-50%200-85-35t-35-85q0-51%2035-85.5t85-34.5q51%200%2085.5%2034.5T600-680q0%2050-34.5%2085T480-560Z'/%3e%3c/svg%3e",
  Ud =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='currentColor'%3e%3cpath%20d='m80-80%20200-560%20360%20360L80-80Zm132-132%20282-100-182-182-100%20282Zm370-246-42-42%20224-224q32-32%2077-32t77%2032l24%2024-42%2042-24-24q-14-14-35-14t-35%2014L582-458ZM422-618l-42-42%2024-24q14-14%2014-34t-14-34l-26-26%2042-42%2026%2026q32%2032%2032%2076t-32%2076l-24%2024Zm80%2080-42-42%20144-144q14-14%2014-35t-14-35l-64-64%2042-42%2064%2064q32%2032%2032%2077t-32%2077L502-538Zm160%20160-42-42%2064-64q32-32%2077-32t77%2032l64%2064-42%2042-64-64q-14-14-35-14t-35%2014l-64%2064ZM212-212Z'/%3e%3c/svg%3e",
  $d =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='currentColor'%3e%3cpath%20d='M880-80%20720-240H320q-33%200-56.5-23.5T240-320v-40h440q33%200%2056.5-23.5T760-440v-280h40q33%200%2056.5%2023.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33%2023.5-56.5T160-880h440q33%200%2056.5%2023.5T680-800v280q0%2033-23.5%2056.5T600-440H240L80-280Zm80-240v-280%20280Z'/%3e%3c/svg%3e",
  Hd =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='currentColor'%3e%3cpath%20d='M640-440%20474-602q-31-30-52.5-66.5T400-748q0-55%2038.5-93.5T532-880q32%200%2060%2013.5t48%2036.5q20-23%2048-36.5t60-13.5q55%200%2093.5%2038.5T880-748q0%2043-21%2079.5T807-602L640-440Zm0-112%20109-107q19-19%2035-40.5t16-48.5q0-22-15-37t-37-15q-14%200-26.5%205.5T700-778l-60%2072-60-72q-9-11-21.5-16.5T532-800q-22%200-37%2015t-15%2037q0%2027%2016%2048.5t35%2040.5l109%20107ZM280-220l278%2076%20238-74q-5-9-14.5-15.5T760-240H558q-27%200-43-2t-33-8l-93-31%2022-78%2081%2027q17%205%2040%208t68%204q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7%200%2014%201.5t13%203.5l235%2087q33%2012%2053.5%2042t20.5%2066h80q50%200%2085%2033t35%2087v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z'/%3e%3c/svg%3e",
  Bd =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='currentColor'%3e%3cpath%20d='M313-40q-24%200-46-9t-39-26L24-280l33-34q14-14%2034-19t40%200l69%2020v-327q0-17%2011.5-28.5T240-680q17%200%2028.5%2011.5T280-640v433l-98-28%20103%20103q6%206%2013%209t15%203h167q33%200%2056.5-23.5T560-200v-160q0-17%2011.5-28.5T600-400q17%200%2028.5%2011.5T640-360v160q0%2066-47%20113T480-40H313Zm7-280v-160q0-17%2011.5-28.5T360-520q17%200%2028.5%2011.5T400-480v160h-80Zm120%200v-120q0-17%2011.5-28.5T480-480q17%200%2028.5%2011.5T520-440v120h-80Zm40%20200H285h195Zm160-400q-91%200-168-48T360-700q35-84%20112-132t168-48q91%200%20168%2048t112%20132q-35%2084-112%20132t-168%2048Zm0-80q57%200%20107.5-26t82.5-74q-32-48-82.5-74T640-800q-57%200-107.5%2026T450-700q32%2048%2082.5%2074T640-600Zm0-40q-25%200-42.5-17.5T580-700q0-25%2017.5-42.5T640-760q25%200%2042.5%2017.5T700-700q0%2025-17.5%2042.5T640-640Z'/%3e%3c/svg%3e",
  Vd = "/assets/children_on_patio_ai4x-Cp1g7R6E.jpg",
  Wd = "/assets/girl_on_pony_graded-f_oWadm0.webp",
  qd = "/assets/JeriD-Bqeb7F9E.jpg",
  Qd = "/assets/GivannaN-Dan2ORPA.jpg",
  Zd = "/assets/CourtneyT-BLfQyP7-.jpg",
  Kd =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='currentColor'%3e%3cpath%20d='m612-292%2056-56-148-148v-184h-80v216l172%20172ZM480-80q-83%200-156-31.5T197-197q-54-54-85.5-127T80-480q0-83%2031.5-156T197-763q54-54%20127-85.5T480-880q83%200%20156%2031.5T763-763q54%2054%2085.5%20127T880-480q0%2083-31.5%20156T763-197q-54%2054-127%2085.5T480-80Zm0-400Zm0%20320q133%200%20226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133%200-226.5%2093.5T160-480q0%20133%2093.5%20226.5T480-160Z'/%3e%3c/svg%3e",
  Yd =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='currentColor'%3e%3cpath%20d='M200-120v-680h360l16%2080h224v400H520l-16-80H280v280h-80Zm300-440Zm86%20160h134v-240H510l-16-80H280v240h290l16%2080Z'/%3e%3c/svg%3e",
  Gd = "/assets/children_grooming_horse-DH6yDEWJ.webp",
  Xd = "/assets/children_playing_on_playground-D4Peg5OT.webp",
  Jd = "/assets/children_n_teacher-D8lQFNQp.webp";
function bd() {
  return f.jsxs(f.Fragment, {
    children: [
      f.jsxs("section", {
        className: "section md:flex md:gap-8",
        children: [
          f.jsxs("div", {
            className: "md:w-5/12",
            children: [
              f.jsx("img", {
                src: Dd,
                alt: "Santiago Childrens Center logo",
                className: "logo pb-5",
              }),
              f.jsxs("h1", {
                className: "font-sans text-4xl text-deepgreen",
                children: [
                  "Your child, ",
                  f.jsx("br", {}),
                  "nurtured ",
                  f.jsx("br", {}),
                  "by nature",
                ],
              }),
              f.jsx("p", {
                className: "max-w-[420px] pt-8",
                children:
                  "A daycare where children are respected, encouraged, and developed in a warm, safe country atmosphere.",
              }),
              f.jsxs("div", {
                className:
                  "stacker gap-8 py-8 text-center md:gap-8 lg:place-items-start lg:py-12",
                children: [
                  f.jsx("a", {
                    className:
                      "btn shape-S m-auto flex max-w-[240px] justify-center align-middle md:ml-0",
                    href: "mailto:sarah.santiagochildenscenter@gmail.com",
                    target: "_blank",
                    children: f.jsx("div", {
                      children: "EMAIL US",
                    }),
                  }),
                  f.jsxs("div", {
                    className:
                      "m-auto text-center md:ml-0 md:w-max md:text-left",
                    children: [
                      f.jsx("div", {
                        className: "font-bold text-forest",
                        children: "OR CALL",
                      }),
                      f.jsx("div", {
                        className: "text-3xl font-bold text-forest",
                        children: "714-478-0155",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("a", {
                href: "https://www.yelp.com/biz/santiago-childrens-center-orange",
                target: "_blank",
                className:
                  "mx-auto flex max-w-[290px] justify-around pb-20 text-center md:ml-0 md:w-max md:pb-2 md:text-left",
                children: [
                  f.jsx("img", {
                    src: yr,
                    alt: "5 stars",
                    className: "ml-auto w-full min-w-0 max-w-36 self-center",
                  }),
                  f.jsx("div", {
                    className: "self-center px-2 text-center",
                    children: "on",
                  }),
                  f.jsx("img", {
                    src: Wu,
                    alt: "Yelp logo",
                    className: "mr-auto w-full min-w-0 max-w-28 self-center",
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: "md:w-7/12",
            children: f.jsxs(Vu, {
              className: "shape-L mx-auto -mb-16 md:-mb-24",
              interval: 1e4,
              children: [
                f.jsx("img", {
                  className: "slide w-full",
                  src: Md,
                  alt: "Cildren on our green campus, admiring a Tortoise.",
                }),
                f.jsx("img", {
                  className: "slide w-full",
                  src: Od,
                  alt: "Cildren on our green campus, admiring a Tortoise.",
                }),
                f.jsx("img", {
                  className: "slide w-full",
                  src: Id,
                  alt: "Cildren on our green campus, admiring a Tortoise.",
                }),
                f.jsx("img", {
                  className: "slide w-full",
                  src: Fd,
                  alt: "Cildren on our green campus, admiring a Tortoise.",
                }),
              ],
            }),
          }),
        ],
      }),
      f.jsxs("section", {
        className:
          "section shape-gradient pb-20 pt-24 text-black md:flex md:gap-8",
        children: [
          f.jsxs("div", {
            className: "grow basis-[900px]",
            children: [
              f.jsx("h2", {
                className:
                  "w-[240px] pb-2 font-serif text-2xl font-bold text-black",
                children: "Give Your Child The Best Start",
              }),
              f.jsxs("div", {
                className: "lg:flex lg:gap-6",
                children: [
                  f.jsxs("div", {
                    children: [
                      f.jsxs("div", {
                        className: "flex items-start gap-6 py-5 align-top",
                        children: [
                          f.jsx("img", {
                            className: "w-8 flex-shrink-0 text-black",
                            src: Ad,
                            alt: "Icon of friends",
                          }),
                          f.jsx("p", {
                            children:
                              "Very small class sizes, typically between 6-10 students",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "flex items-start gap-6 py-5",
                        children: [
                          f.jsx("img", {
                            className: "w-8 flex-shrink-0 text-black",
                            src: Ud,
                            alt: "",
                          }),
                          f.jsx("p", {
                            children:
                              "A fun and challenging learning environment that sets up a love for learning and an enthusiasm for school",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "flex items-start gap-6 py-5",
                        children: [
                          f.jsx("img", {
                            className: "w-8 flex-shrink-0 text-black",
                            src: $d,
                            alt: "",
                          }),
                          f.jsx("p", {
                            children: "Excellent communication with parents",
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "max-md:mb-8",
                    children: [
                      f.jsxs("div", {
                        className: "flex items-start gap-6 py-5",
                        children: [
                          f.jsx("img", {
                            className: "w-8 flex-shrink-0 text-black",
                            src: Hd,
                            alt: "",
                          }),
                          f.jsx("p", {
                            children:
                              "A hands-on approach that acknowledges the unique learning styles for children, especially in the beginning years of school",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "flex items-start gap-6 py-5",
                        children: [
                          f.jsx("img", {
                            className: "w-8 flex-shrink-0 text-black",
                            src: Bd,
                            alt: "",
                          }),
                          f.jsx("p", {
                            children:
                              "Incorporation of multiple intelligences (visual, verbal, logical, kinesthetic, etc.) to reach and engage each child",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "shrink basis-[800px] lg:basis-[600px]",
            children: [
              f.jsx("div", {
                className: "ml-8 w-auto",
                children: f.jsx("div", {
                  className: "addFuncSlides",
                  children: f.jsx("img", {
                    className: "-mb-[40%] ml-auto w-auto",
                    src: Vd,
                    alt: "Children on our patio",
                  }),
                }),
              }),
              f.jsx("div", {
                className: "mr-8",
                children: f.jsx("div", {
                  className: "addFuncSlides",
                  children: f.jsx("img", {
                    className: "-mb-32 mr-auto w-auto",
                    src: Wd,
                    alt: "A girl on Sweetie, our pony",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("section", {
        className: "section pb-24 pt-32 text-center text-deepgreen",
        children: [
          f.jsx("h2", {
            className:
              "mx-auto w-[280px] pb-8 font-serif text-2xl font-bold text-black",
            children: "What Other Parents Say About Us",
          }),
          f.jsxs("div", {
            className:
              "cards mx-auto max-w-[300px] gap-8 md:max-w-none md:gap-12",
            children: [
              f.jsxs("div", {
                className: "card text-left",
                children: [
                  f.jsx("p", {
                    children:
                      "Their daycare has the benefits of a day care center, but with the feel of a family. Daycare doesn't close when they go on vacation or are sick because they have excellent subs.",
                  }),
                  f.jsxs("div", {
                    className: "flex gap-6 py-5",
                    children: [
                      f.jsx("div", {
                        className: "shape-S w-28",
                        children: f.jsx("img", {
                          src: qd,
                          alt: "Photo of Jeri D",
                        }),
                      }),
                      f.jsxs("div", {
                        className: "text-bold text-aqua",
                        children: [
                          "Jeri D.",
                          f.jsx("br", {}),
                          f.jsx("img", {
                            src: yr,
                            alt: "5 stars",
                            className: "mr-auto w-24",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "card text-left",
                children: [
                  f.jsx("p", {
                    children:
                      "They made us feel comfortable, welcomed, and they do genuinely love what they do. They have a great set up for the kids.",
                  }),
                  f.jsxs("div", {
                    className: "flex gap-6 py-5",
                    children: [
                      f.jsx("div", {
                        className: "shape-S w-28",
                        children: f.jsx("img", {
                          src: Qd,
                          alt: "Photo of Jeri D",
                        }),
                      }),
                      f.jsxs("div", {
                        className: "text-bold text-aqua",
                        children: [
                          "Givanna N.",
                          f.jsx("br", {}),
                          f.jsx("img", {
                            src: yr,
                            alt: "5 stars",
                            className: "mr-auto w-24",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "card text-left",
                children: [
                  f.jsx("p", {
                    children:
                      "My 2 year old absolutely loves Miss Sarah and Miss Connie! I struggled to find a daycare that she enjoyed and this one was a perfect match from the start.",
                  }),
                  f.jsxs("div", {
                    className: "flex gap-6 py-5",
                    children: [
                      f.jsx("div", {
                        className: "shape-S w-28",
                        children: f.jsx("img", {
                          src: Zd,
                          alt: "Photo of Jeri D",
                        }),
                      }),
                      f.jsxs("div", {
                        className: "text-bold text-aqua",
                        children: [
                          "Courtney T.",
                          f.jsx("br", {}),
                          f.jsx("img", {
                            src: yr,
                            alt: "5 stars",
                            className: "mr-auto w-24",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className:
              "align-center mx-auto flex w-5/6 justify-around gap-4 pt-8",
            children: [
              f.jsx("div", {
                className: "ml-auto self-center",
                children: "on",
              }),
              f.jsx("a", {
                href: "https://www.yelp.com/biz/santiago-childrens-center-orange",
                target: "_blank",
                className: "mr-auto block w-28 self-center",
                children: f.jsx("img", {
                  src: Wu,
                  alt: "Yelp logo",
                }),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("section", {
        className: "section shape-gradient py-12 text-black",
        children: [
          f.jsx("h2", {
            className:
              "w-[240px] pb-2 font-serif text-2xl font-bold text-black",
            children: "Frequently Asked Questions",
          }),
          f.jsxs("details", {
            children: [
              f.jsx("summary", {
                children: "Are you a licensed school?",
              }),
              f.jsx("p", {
                children:
                  "Yes, we are. This business has satisfied CA's requirements to be licensed. For the most up-to-date status and inspection reports, please view this provider's profile on CA's licensing website.",
              }),
            ],
          }),
          f.jsxs("details", {
            children: [
              f.jsx("summary", {
                children: "What do the licensing requirements include?",
              }),
              f.jsxs("ul", {
                className: "ml-4 list-disc",
                children: [
                  f.jsx("li", {
                    children: "Complying with safety and health inspections",
                  }),
                  f.jsx("li", {
                    children:
                      "Achieving the required levels of educational training",
                  }),
                  f.jsx("li", {
                    children: "Maintaining a minimum caregiver-to-child ratio",
                  }),
                  f.jsx("li", {
                    children: "Other state-defined requirements",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("details", {
            children: [
              f.jsx("summary", {
                children: "Where is Santiago Children's Center?",
              }),
              f.jsx("p", {
                children:
                  "We are located in the foothills of Orange Park Acres on a one acre lot.",
              }),
              f.jsx("p", {
                children: "Address: 20362 S. Randall St., Orange, CA 92869",
              }),
              f.jsx("p", {
                children: 'Contact: Sarah Holtz, "714-478-0155" ',
              }),
            ],
          }),
          f.jsxs("details", {
            children: [
              f.jsx("summary", {
                children: "How long have you been in business?",
              }),
              f.jsx("p", {
                children: "Santiago Children's Center was established in 1983.",
              }),
            ],
          }),
          f.jsxs("details", {
            children: [
              f.jsx("summary", {
                children: "What does your Pre-K Program include?",
              }),
              f.jsxs("ul", {
                className: "ml-4 list-disc",
                children: [
                  f.jsx("li", {
                    children: "Reading",
                  }),
                  f.jsx("li", {
                    children: "Math",
                  }),
                  f.jsx("li", {
                    children: "Science",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("details", {
            children: [
              f.jsx("summary", {
                children: "What type of day care are you?",
              }),
              f.jsxs("ul", {
                className: "ml-4 list-disc",
                children: [
                  f.jsx("li", {
                    children: "In-home/family day care",
                  }),
                  f.jsx("li", {
                    children: "Preschool (or nursery school or pre-k)",
                  }),
                ],
              }),
              f.jsx("p", {
                children: "Philosophy:",
              }),
              f.jsxs("ul", {
                className: "ml-4 list-disc",
                children: [
                  f.jsx("li", {
                    children: "Academic",
                  }),
                  f.jsx("li", {
                    children: "Developmental (play-based)",
                  }),
                  f.jsx("li", {
                    children: "Outdoor/nature",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("details", {
            children: [
              f.jsx("summary", {
                children: "What services do you offer?",
              }),
              f.jsxs("ul", {
                className: "ml-4 list-disc",
                children: [
                  f.jsx("li", {
                    children: "Services Offered",
                  }),
                  f.jsx("li", {
                    children: "Verified by Business",
                  }),
                  f.jsx("li", {
                    children: "In-home Child Care",
                  }),
                  f.jsx("li", {
                    children: "In-home Toddler Care",
                  }),
                  f.jsx("li", {
                    children: "Playgroups",
                  }),
                  f.jsx("li", {
                    children: "Preschool-aged child daycare",
                  }),
                  f.jsx("li", {
                    children: "Virtual Consultations",
                  }),
                  f.jsx("li", {
                    children: "Education-based Daycare",
                  }),
                  f.jsx("li", {
                    children: "Babycare (8+ months)",
                  }),
                  f.jsx("li", {
                    children: "Potty Training",
                  }),
                  f.jsx("li", {
                    children: "Toddler Daycare",
                  }),
                ],
              }),
              f.jsx("p", {
                children: f.jsx("em", {
                  children: "* If your child has siblings, please contact us.",
                }),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("section", {
        className: "section flex flex-col md:flex-row",
        children: [
          f.jsxs("div", {
            className: "mx-auto basis-[300px] self-center md:mr-0",
            children: [
              f.jsxs("div", {
                className: "flex gap-6 py-4",
                children: [
                  f.jsx("img", {
                    className: "w-8 flex-shrink-0 text-black",
                    src: Kd,
                    alt: "",
                  }),
                  f.jsxs("p", {
                    children: [
                      "Hours",
                      f.jsx("br", {}),
                      "8:00 AM - 5:00 PM",
                      f.jsx("br", {}),
                      "Monday - Friday",
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "flex gap-6 py-4",
                children: [
                  f.jsx("img", {
                    className: "w-8 flex-shrink-0 text-black",
                    src: Yd,
                    alt: "",
                  }),
                  f.jsx("p", {
                    children: "Established in 1983",
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: "-mb-16 mr-auto mt-12 basis-[400px] md:-mb-24",
            children: f.jsx("div", {
              className: "shape-L",
              children: f.jsxs(Vu, {
                interval: 10500,
                children: [
                  f.jsx("img", {
                    src: Gd,
                    alt: "Children grooming horse",
                  }),
                  f.jsx("img", {
                    src: Xd,
                    alt: "Children playing on playground",
                  }),
                  f.jsx("img", {
                    src: Jd,
                    alt: "Children and teacher",
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      f.jsx("section", {
        className: "section pb-8 pt-24",
        children: f.jsxs("div", {
          className: "stacker gap-8 py-8 text-center md:gap-12 lg:py-12",
          children: [
            f.jsx("a", {
              className:
                "btn shape-S m-auto flex max-w-[320px] justify-center align-middle md:mr-0",
              href: "mailto:sarah.santiagochildenscenter@gmail.com",
              target: "_blank",
              children: f.jsx("div", {
                children: "EMAIL US",
              }),
            }),
            f.jsxs("div", {
              className: "m-auto text-center md:ml-0 md:w-max md:text-left",
              children: [
                f.jsx("div", {
                  className: "font-bold text-forest",
                  children: "OR CALL",
                }),
                f.jsx("div", {
                  className: "text-3xl font-bold text-forest",
                  children: "714-478-0155",
                }),
              ],
            }),
          ],
        }),
      }),
      f.jsxs("footer", {
        className: "section shape-gradient copy-S py-14",
        children: [
          f.jsx("p", {
            children: "©2024 Santiago Children Center",
          }),
          f.jsx("p", {
            children: "20362 S Randall st. Orange Ca 92869",
          }),
          f.jsxs("p", {
            children: [
              "Website by ",
              f.jsx("a", {
                href: "https://joerhoney.com",
                children: "joerhoney.com",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const lc = document.getElementById("root");
if (!lc) throw new Error("Failed to find the root element");
rc(lc).render(
  f.jsx(Wt.StrictMode, {
    children: f.jsx(bd, {}),
  })
);
