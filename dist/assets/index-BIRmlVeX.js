(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Jh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var vf = { exports: {} },
  So = {},
  xf = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xr = Symbol.for("react.element"),
  qh = Symbol.for("react.portal"),
  bh = Symbol.for("react.fragment"),
  em = Symbol.for("react.strict_mode"),
  tm = Symbol.for("react.profiler"),
  nm = Symbol.for("react.provider"),
  rm = Symbol.for("react.context"),
  im = Symbol.for("react.forward_ref"),
  om = Symbol.for("react.suspense"),
  sm = Symbol.for("react.memo"),
  lm = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function am(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sf = Object.assign,
  kf = {};
function Jn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kf),
    (this.updater = n || wf);
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pf() {}
Pf.prototype = Jn.prototype;
function _l(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kf),
    (this.updater = n || wf);
}
var Fl = (_l.prototype = new Pf());
Fl.constructor = _l;
Sf(Fl, Jn.prototype);
Fl.isPureReactComponent = !0;
var tu = Array.isArray,
  Cf = Object.prototype.hasOwnProperty,
  Ol = { current: null },
  Tf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ef(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Cf.call(t, r) && !Tf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Xr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Ol.current,
  };
}
function um(e, t) {
  return {
    $$typeof: Xr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Il(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xr;
}
function cm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? cm("" + e.key)
    : t.toString(36);
}
function Ei(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xr:
          case qh:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Ho(s, 0) : r),
      tu(i)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          Ei(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Il(i) &&
            (i = um(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(nu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Ho(o, l);
      s += Ei(o, t, n, a, i);
    }
  else if (((a = am(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Ho(o, l++)), (s += Ei(o, t, n, a, i));
  else if (o === "object")
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
  return s;
}
function oi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ei(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function fm(e) {
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
var we = { current: null },
  Vi = { transition: null },
  dm = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Vi,
    ReactCurrentOwner: Ol,
  };
F.Children = {
  map: oi,
  forEach: function (e, t, n) {
    oi(
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
      oi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Il(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = Jn;
F.Fragment = bh;
F.Profiler = tm;
F.PureComponent = _l;
F.StrictMode = em;
F.Suspense = om;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dm;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Sf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Ol.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Cf.call(t, a) &&
        !Tf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Xr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: rm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: nm, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Ef;
F.createFactory = function (e) {
  var t = Ef.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: im, render: e };
};
F.isValidElement = Il;
F.lazy = function (e) {
  return { $$typeof: lm, _payload: { _status: -1, _result: e }, _init: fm };
};
F.memo = function (e, t) {
  return { $$typeof: sm, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Vi.transition;
  Vi.transition = {};
  try {
    e();
  } finally {
    Vi.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return we.current.useCallback(e, t);
};
F.useContext = function (e) {
  return we.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return we.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return we.current.useEffect(e, t);
};
F.useId = function () {
  return we.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return we.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return we.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return we.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return we.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return we.current.useRef(e);
};
F.useState = function (e) {
  return we.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return we.current.useTransition();
};
F.version = "18.2.0";
xf.exports = F;
var A = xf.exports;
const zl = Jh(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pm = A,
  hm = Symbol.for("react.element"),
  mm = Symbol.for("react.fragment"),
  gm = Object.prototype.hasOwnProperty,
  ym = pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) gm.call(t, r) && !vm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: hm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ym.current,
  };
}
So.Fragment = mm;
So.jsx = Vf;
So.jsxs = Vf;
vf.exports = So;
var E = vf.exports,
  Vs = {},
  Lf = { exports: {} },
  Ne = {},
  Af = { exports: {} },
  Df = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(V, M) {
    var _ = V.length;
    V.push(M);
    e: for (; 0 < _; ) {
      var j = (_ - 1) >>> 1,
        $ = V[j];
      if (0 < i($, M)) (V[j] = M), (V[_] = $), (_ = j);
      else break e;
    }
  }
  function n(V) {
    return V.length === 0 ? null : V[0];
  }
  function r(V) {
    if (V.length === 0) return null;
    var M = V[0],
      _ = V.pop();
    if (_ !== M) {
      V[0] = _;
      e: for (var j = 0, $ = V.length, Qt = $ >>> 1; j < Qt; ) {
        var qe = 2 * (j + 1) - 1,
          vn = V[qe],
          Le = qe + 1,
          Yt = V[Le];
        if (0 > i(vn, _))
          Le < $ && 0 > i(Yt, vn)
            ? ((V[j] = Yt), (V[Le] = _), (j = Le))
            : ((V[j] = vn), (V[qe] = _), (j = qe));
        else if (Le < $ && 0 > i(Yt, _)) (V[j] = Yt), (V[Le] = _), (j = Le);
        else break e;
      }
    }
    return M;
  }
  function i(V, M) {
    var _ = V.sortIndex - M.sortIndex;
    return _ !== 0 ? _ : V.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    y = !1,
    v = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(V) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= V)
        r(u), (M.sortIndex = M.expirationTime), t(a, M);
      else break;
      M = n(u);
    }
  }
  function x(V) {
    if (((v = !1), h(V), !y))
      if (n(a) !== null) (y = !0), Z(w);
      else {
        var M = n(u);
        M !== null && Fe(x, M.startTime - V);
      }
  }
  function w(V, M) {
    (y = !1), v && ((v = !1), g(k), (k = -1)), (m = !0);
    var _ = d;
    try {
      for (
        h(M), f = n(a);
        f !== null && (!(f.expirationTime > M) || (V && !re()));

      ) {
        var j = f.callback;
        if (typeof j == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var $ = j(f.expirationTime <= M);
          (M = e.unstable_now()),
            typeof $ == "function" ? (f.callback = $) : f === n(a) && r(a),
            h(M);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Qt = !0;
      else {
        var qe = n(u);
        qe !== null && Fe(x, qe.startTime - M), (Qt = !1);
      }
      return Qt;
    } finally {
      (f = null), (d = _), (m = !1);
    }
  }
  var T = !1,
    P = null,
    k = -1,
    N = 5,
    R = -1;
  function re() {
    return !(e.unstable_now() - R < N);
  }
  function le() {
    if (P !== null) {
      var V = e.unstable_now();
      R = V;
      var M = !0;
      try {
        M = P(!0, V);
      } finally {
        M ? ye() : ((T = !1), (P = null));
      }
    } else T = !1;
  }
  var ye;
  if (typeof p == "function")
    ye = function () {
      p(le);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      wt = ie.port2;
    (ie.port1.onmessage = le),
      (ye = function () {
        wt.postMessage(null);
      });
  } else
    ye = function () {
      C(le, 0);
    };
  function Z(V) {
    (P = V), T || ((T = !0), ye());
  }
  function Fe(V, M) {
    k = C(function () {
      V(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (V) {
      V.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), Z(w));
    }),
    (e.unstable_forceFrameRate = function (V) {
      0 > V || 125 < V
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < V ? Math.floor(1e3 / V) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (V) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = d;
      }
      var _ = d;
      d = M;
      try {
        return V();
      } finally {
        d = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (V, M) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var _ = d;
      d = V;
      try {
        return M();
      } finally {
        d = _;
      }
    }),
    (e.unstable_scheduleCallback = function (V, M, _) {
      var j = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? j + _ : j))
          : (_ = j),
        V)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = _ + $),
        (V = {
          id: c++,
          callback: M,
          priorityLevel: V,
          startTime: _,
          expirationTime: $,
          sortIndex: -1,
        }),
        _ > j
          ? ((V.sortIndex = _),
            t(u, V),
            n(a) === null &&
              V === n(u) &&
              (v ? (g(k), (k = -1)) : (v = !0), Fe(x, _ - j)))
          : ((V.sortIndex = $), t(a, V), y || m || ((y = !0), Z(w))),
        V
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (V) {
      var M = d;
      return function () {
        var _ = d;
        d = M;
        try {
          return V.apply(this, arguments);
        } finally {
          d = _;
        }
      };
    });
})(Df);
Af.exports = Df;
var xm = Af.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf = A,
  Re = xm;
function S(e) {
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
var Rf = new Set(),
  Ar = {};
function mn(e, t) {
  $n(e, t), $n(e + "Capture", t);
}
function $n(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) Rf.add(t[e]);
}
var ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ls = Object.prototype.hasOwnProperty,
  wm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  iu = {};
function Sm(e) {
  return Ls.call(iu, e)
    ? !0
    : Ls.call(ru, e)
    ? !1
    : wm.test(e)
    ? (iu[e] = !0)
    : ((ru[e] = !0), !1);
}
function km(e, t, n, r) {
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
function Pm(e, t, n, r) {
  if (t === null || typeof t > "u" || km(e, t, n, r)) return !0;
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
function Se(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bl = /[\-:]([a-z])/g;
function Ul(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bl, Ul);
    fe[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bl, Ul);
    fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bl, Ul);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $l(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pm(t, n, i, r) && (n = null),
    r || i === null
      ? Sm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  si = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  Wl = Symbol.for("react.strict_mode"),
  As = Symbol.for("react.profiler"),
  jf = Symbol.for("react.provider"),
  Nf = Symbol.for("react.context"),
  Hl = Symbol.for("react.forward_ref"),
  Ds = Symbol.for("react.suspense"),
  Ms = Symbol.for("react.suspense_list"),
  Gl = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  _f = Symbol.for("react.offscreen"),
  ou = Symbol.iterator;
function tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Go;
function fr(e) {
  if (Go === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Go = (t && t[1]) || "";
    }
  return (
    `
` +
    Go +
    e
  );
}
var Ko = !1;
function Qo(e, t) {
  if (!e || Ko) return "";
  Ko = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Ko = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function Cm(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qo(e.type, !1)), e;
    case 11:
      return (e = Qo(e.type.render, !1)), e;
    case 1:
      return (e = Qo(e.type, !0)), e;
    default:
      return "";
  }
}
function Rs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case wn:
      return "Portal";
    case As:
      return "Profiler";
    case Wl:
      return "StrictMode";
    case Ds:
      return "Suspense";
    case Ms:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nf:
        return (e.displayName || "Context") + ".Consumer";
      case jf:
        return (e._context.displayName || "Context") + ".Provider";
      case Hl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gl:
        return (
          (t = e.displayName || null), t !== null ? t : Rs(e.type) || "Memo"
        );
      case Pt:
        (t = e._payload), (e = e._init);
        try {
          return Rs(e(t));
        } catch {}
    }
  return null;
}
function Tm(e) {
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
      return Rs(t);
    case 8:
      return t === Wl ? "StrictMode" : "Mode";
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
function zt(e) {
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
function Ff(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Em(e) {
  var t = Ff(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function li(e) {
  e._valueTracker || (e._valueTracker = Em(e));
}
function Of(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ff(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ui(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function js(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function su(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function If(e, t) {
  (t = t.checked), t != null && $l(e, "checked", t, !1);
}
function Ns(e, t) {
  If(e, t);
  var n = zt(t.value),
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
    ? _s(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _s(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
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
function _s(e, t, n) {
  (t !== "number" || Ui(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var dr = Array.isArray;
function Fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (dr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function zf(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Os(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Bf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ai,
  Uf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ai = ai || document.createElement("div"),
          ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ai.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var gr = {
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
  Vm = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function (e) {
  Vm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (gr[t] = gr[e]);
  });
});
function $f(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (gr.hasOwnProperty(e) && gr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Wf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = $f(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Lm = Y(
  { menuitem: !0 },
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
function Is(e, t) {
  if (t) {
    if (Lm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function zs(e, t) {
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
var Bs = null;
function Kl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Us = null,
  On = null,
  In = null;
function cu(e) {
  if ((e = qr(e))) {
    if (typeof Us != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Eo(t)), Us(e.stateNode, e.type, t));
  }
}
function Hf(e) {
  On ? (In ? In.push(e) : (In = [e])) : (On = e);
}
function Gf() {
  if (On) {
    var e = On,
      t = In;
    if (((In = On = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function Kf(e, t) {
  return e(t);
}
function Qf() {}
var Yo = !1;
function Yf(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return Kf(e, t, n);
  } finally {
    (Yo = !1), (On !== null || In !== null) && (Qf(), Gf());
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var $s = !1;
if (ht)
  try {
    var nr = {};
    Object.defineProperty(nr, "passive", {
      get: function () {
        $s = !0;
      },
    }),
      window.addEventListener("test", nr, nr),
      window.removeEventListener("test", nr, nr);
  } catch {
    $s = !1;
  }
function Am(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var yr = !1,
  $i = null,
  Wi = !1,
  Ws = null,
  Dm = {
    onError: function (e) {
      (yr = !0), ($i = e);
    },
  };
function Mm(e, t, n, r, i, o, s, l, a) {
  (yr = !1), ($i = null), Am.apply(Dm, arguments);
}
function Rm(e, t, n, r, i, o, s, l, a) {
  if ((Mm.apply(this, arguments), yr)) {
    if (yr) {
      var u = $i;
      (yr = !1), ($i = null);
    } else throw Error(S(198));
    Wi || ((Wi = !0), (Ws = u));
  }
}
function gn(e) {
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
function Xf(e) {
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
function fu(e) {
  if (gn(e) !== e) throw Error(S(188));
}
function jm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return fu(i), e;
        if (o === r) return fu(i), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Zf(e) {
  return (e = jm(e)), e !== null ? Jf(e) : null;
}
function Jf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qf = Re.unstable_scheduleCallback,
  du = Re.unstable_cancelCallback,
  Nm = Re.unstable_shouldYield,
  _m = Re.unstable_requestPaint,
  q = Re.unstable_now,
  Fm = Re.unstable_getCurrentPriorityLevel,
  Ql = Re.unstable_ImmediatePriority,
  bf = Re.unstable_UserBlockingPriority,
  Hi = Re.unstable_NormalPriority,
  Om = Re.unstable_LowPriority,
  ed = Re.unstable_IdlePriority,
  ko = null,
  nt = null;
function Im(e) {
  if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
      nt.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Um,
  zm = Math.log,
  Bm = Math.LN2;
function Um(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zm(e) / Bm) | 0)) | 0;
}
var ui = 64,
  ci = 4194304;
function pr(e) {
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
function Gi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = pr(l)) : ((o &= s), o !== 0 && (r = pr(o)));
  } else (s = n & ~i), s !== 0 ? (r = pr(s)) : o !== 0 && (r = pr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function $m(e, t) {
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
function Wm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Xe(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = $m(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Hs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function td() {
  var e = ui;
  return (ui <<= 1), !(ui & 4194240) && (ui = 64), e;
}
function Xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n);
}
function Hm(e, t) {
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
    var i = 31 - Xe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Yl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var I = 0;
function nd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var rd,
  Xl,
  id,
  od,
  sd,
  Gs = !1,
  fi = [],
  Mt = null,
  Rt = null,
  jt = null,
  Rr = new Map(),
  jr = new Map(),
  Et = [],
  Gm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jr.delete(t.pointerId);
  }
}
function rr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = qr(t)), t !== null && Xl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Km(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Mt = rr(Mt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Rt = rr(Rt, e, t, n, r, i)), !0;
    case "mouseover":
      return (jt = rr(jt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Rr.set(o, rr(Rr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), jr.set(o, rr(jr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ld(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xf(n)), t !== null)) {
          (e.blockedOn = t),
            sd(e.priority, function () {
              id(n);
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
function Li(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ks(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Bs = r), n.target.dispatchEvent(r), (Bs = null);
    } else return (t = qr(n)), t !== null && Xl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function hu(e, t, n) {
  Li(e) && n.delete(t);
}
function Qm() {
  (Gs = !1),
    Mt !== null && Li(Mt) && (Mt = null),
    Rt !== null && Li(Rt) && (Rt = null),
    jt !== null && Li(jt) && (jt = null),
    Rr.forEach(hu),
    jr.forEach(hu);
}
function ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gs ||
      ((Gs = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Qm)));
}
function Nr(e) {
  function t(i) {
    return ir(i, e);
  }
  if (0 < fi.length) {
    ir(fi[0], e);
    for (var n = 1; n < fi.length; n++) {
      var r = fi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mt !== null && ir(Mt, e),
      Rt !== null && ir(Rt, e),
      jt !== null && ir(jt, e),
      Rr.forEach(t),
      jr.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    ld(n), n.blockedOn === null && Et.shift();
}
var zn = xt.ReactCurrentBatchConfig,
  Ki = !0;
function Ym(e, t, n, r) {
  var i = I,
    o = zn.transition;
  zn.transition = null;
  try {
    (I = 1), Zl(e, t, n, r);
  } finally {
    (I = i), (zn.transition = o);
  }
}
function Xm(e, t, n, r) {
  var i = I,
    o = zn.transition;
  zn.transition = null;
  try {
    (I = 4), Zl(e, t, n, r);
  } finally {
    (I = i), (zn.transition = o);
  }
}
function Zl(e, t, n, r) {
  if (Ki) {
    var i = Ks(e, t, n, r);
    if (i === null) os(e, t, r, Qi, n), pu(e, r);
    else if (Km(i, e, t, n, r)) r.stopPropagation();
    else if ((pu(e, r), t & 4 && -1 < Gm.indexOf(e))) {
      for (; i !== null; ) {
        var o = qr(i);
        if (
          (o !== null && rd(o),
          (o = Ks(e, t, n, r)),
          o === null && os(e, t, r, Qi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else os(e, t, r, null, n);
  }
}
var Qi = null;
function Ks(e, t, n, r) {
  if (((Qi = null), (e = Kl(r)), (e = tn(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Xf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Qi = e), null;
}
function ad(e) {
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
      switch (Fm()) {
        case Ql:
          return 1;
        case bf:
          return 4;
        case Hi:
        case Om:
          return 16;
        case ed:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  Jl = null,
  Ai = null;
function ud() {
  if (Ai) return Ai;
  var e,
    t = Jl,
    n = t.length,
    r,
    i = "value" in Lt ? Lt.value : Lt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ai = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Di(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function di() {
  return !0;
}
function mu() {
  return !1;
}
function _e(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? di
        : mu),
      (this.isPropagationStopped = mu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = di));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = di));
      },
      persist: function () {},
      isPersistent: di,
    }),
    t
  );
}
var qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ql = _e(qn),
  Jr = Y({}, qn, { view: 0, detail: 0 }),
  Zm = _e(Jr),
  Zo,
  Jo,
  or,
  Po = Y({}, Jr, {
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
    getModifierState: bl,
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
        : (e !== or &&
            (or && e.type === "mousemove"
              ? ((Zo = e.screenX - or.screenX), (Jo = e.screenY - or.screenY))
              : (Jo = Zo = 0),
            (or = e)),
          Zo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jo;
    },
  }),
  gu = _e(Po),
  Jm = Y({}, Po, { dataTransfer: 0 }),
  qm = _e(Jm),
  bm = Y({}, Jr, { relatedTarget: 0 }),
  qo = _e(bm),
  eg = Y({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tg = _e(eg),
  ng = Y({}, qn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rg = _e(ng),
  ig = Y({}, qn, { data: 0 }),
  yu = _e(ig),
  og = {
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
  sg = {
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
  lg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ag(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lg[e]) ? !!t[e] : !1;
}
function bl() {
  return ag;
}
var ug = Y({}, Jr, {
    key: function (e) {
      if (e.key) {
        var t = og[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Di(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sg[e.keyCode] || "Unidentified"
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
    getModifierState: bl,
    charCode: function (e) {
      return e.type === "keypress" ? Di(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Di(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  cg = _e(ug),
  fg = Y({}, Po, {
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
  vu = _e(fg),
  dg = Y({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bl,
  }),
  pg = _e(dg),
  hg = Y({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mg = _e(hg),
  gg = Y({}, Po, {
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
  yg = _e(gg),
  vg = [9, 13, 27, 32],
  ea = ht && "CompositionEvent" in window,
  vr = null;
ht && "documentMode" in document && (vr = document.documentMode);
var xg = ht && "TextEvent" in window && !vr,
  cd = ht && (!ea || (vr && 8 < vr && 11 >= vr)),
  xu = " ",
  wu = !1;
function fd(e, t) {
  switch (e) {
    case "keyup":
      return vg.indexOf(t.keyCode) !== -1;
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
function dd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var kn = !1;
function wg(e, t) {
  switch (e) {
    case "compositionend":
      return dd(t);
    case "keypress":
      return t.which !== 32 ? null : ((wu = !0), xu);
    case "textInput":
      return (e = t.data), e === xu && wu ? null : e;
    default:
      return null;
  }
}
function Sg(e, t) {
  if (kn)
    return e === "compositionend" || (!ea && fd(e, t))
      ? ((e = ud()), (Ai = Jl = Lt = null), (kn = !1), e)
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
      return cd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kg = {
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
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kg[e.type] : t === "textarea";
}
function pd(e, t, n, r) {
  Hf(r),
    (t = Yi(t, "onChange")),
    0 < t.length &&
      ((n = new ql("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var xr = null,
  _r = null;
function Pg(e) {
  Cd(e, 0);
}
function Co(e) {
  var t = Tn(e);
  if (Of(t)) return e;
}
function Cg(e, t) {
  if (e === "change") return t;
}
var hd = !1;
if (ht) {
  var bo;
  if (ht) {
    var es = "oninput" in document;
    if (!es) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"),
        (es = typeof ku.oninput == "function");
    }
    bo = es;
  } else bo = !1;
  hd = bo && (!document.documentMode || 9 < document.documentMode);
}
function Pu() {
  xr && (xr.detachEvent("onpropertychange", md), (_r = xr = null));
}
function md(e) {
  if (e.propertyName === "value" && Co(_r)) {
    var t = [];
    pd(t, _r, e, Kl(e)), Yf(Pg, t);
  }
}
function Tg(e, t, n) {
  e === "focusin"
    ? (Pu(), (xr = t), (_r = n), xr.attachEvent("onpropertychange", md))
    : e === "focusout" && Pu();
}
function Eg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Co(_r);
}
function Vg(e, t) {
  if (e === "click") return Co(t);
}
function Lg(e, t) {
  if (e === "input" || e === "change") return Co(t);
}
function Ag(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : Ag;
function Fr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ls.call(t, i) || !Je(e[i], t[i])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tu(e, t) {
  var n = Cu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Cu(n);
  }
}
function gd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function yd() {
  for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ui(e.document);
  }
  return t;
}
function ta(e) {
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
function Dg(e) {
  var t = yd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ta(n)) {
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
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Tu(n, o));
        var s = Tu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Mg = ht && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  Qs = null,
  wr = null,
  Ys = !1;
function Eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ys ||
    Pn == null ||
    Pn !== Ui(r) ||
    ((r = Pn),
    "selectionStart" in r && ta(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
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
    (wr && Fr(wr, r)) ||
      ((wr = r),
      (r = Yi(Qs, "onSelect")),
      0 < r.length &&
        ((t = new ql("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function pi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cn = {
    animationend: pi("Animation", "AnimationEnd"),
    animationiteration: pi("Animation", "AnimationIteration"),
    animationstart: pi("Animation", "AnimationStart"),
    transitionend: pi("Transition", "TransitionEnd"),
  },
  ts = {},
  vd = {};
ht &&
  ((vd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  "TransitionEvent" in window || delete Cn.transitionend.transition);
function To(e) {
  if (ts[e]) return ts[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in vd) return (ts[e] = t[n]);
  return e;
}
var xd = To("animationend"),
  wd = To("animationiteration"),
  Sd = To("animationstart"),
  kd = To("transitionend"),
  Pd = new Map(),
  Vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Wt(e, t) {
  Pd.set(e, t), mn(t, [e]);
}
for (var ns = 0; ns < Vu.length; ns++) {
  var rs = Vu[ns],
    Rg = rs.toLowerCase(),
    jg = rs[0].toUpperCase() + rs.slice(1);
  Wt(Rg, "on" + jg);
}
Wt(xd, "onAnimationEnd");
Wt(wd, "onAnimationIteration");
Wt(Sd, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(kd, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ng = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function Lu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Rm(r, t, void 0, e), (e.currentTarget = null);
}
function Cd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Lu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Lu(i, l, u), (o = a);
        }
    }
  }
  if (Wi) throw ((e = Ws), (Wi = !1), (Ws = null), e);
}
function B(e, t) {
  var n = t[bs];
  n === void 0 && (n = t[bs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Td(t, e, 2, !1), n.add(r));
}
function is(e, t, n) {
  var r = 0;
  t && (r |= 4), Td(n, e, r, t);
}
var hi = "_reactListening" + Math.random().toString(36).slice(2);
function Or(e) {
  if (!e[hi]) {
    (e[hi] = !0),
      Rf.forEach(function (n) {
        n !== "selectionchange" && (Ng.has(n) || is(n, !1, e), is(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hi] || ((t[hi] = !0), is("selectionchange", !1, t));
  }
}
function Td(e, t, n, r) {
  switch (ad(t)) {
    case 1:
      var i = Ym;
      break;
    case 4:
      i = Xm;
      break;
    default:
      i = Zl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !$s ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function os(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = tn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Yf(function () {
    var u = o,
      c = Kl(n),
      f = [];
    e: {
      var d = Pd.get(e);
      if (d !== void 0) {
        var m = ql,
          y = e;
        switch (e) {
          case "keypress":
            if (Di(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = cg;
            break;
          case "focusin":
            (y = "focus"), (m = qo);
            break;
          case "focusout":
            (y = "blur"), (m = qo);
            break;
          case "beforeblur":
          case "afterblur":
            m = qo;
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
            m = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = qm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = pg;
            break;
          case xd:
          case wd:
          case Sd:
            m = tg;
            break;
          case kd:
            m = mg;
            break;
          case "scroll":
            m = Zm;
            break;
          case "wheel":
            m = yg;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = rg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = vu;
        }
        var v = (t & 4) !== 0,
          C = !v && e === "scroll",
          g = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p = u, h; p !== null; ) {
          h = p;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              g !== null && ((x = Mr(p, g)), x != null && v.push(Ir(p, x, h)))),
            C)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((d = new m(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Bs &&
            (y = n.relatedTarget || n.fromElement) &&
            (tn(y) || y[mt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? tn(y) : null),
              y !== null &&
                ((C = gn(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = gu),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = vu),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (C = m == null ? d : Tn(m)),
            (h = y == null ? d : Tn(y)),
            (d = new v(x, p + "leave", m, n, c)),
            (d.target = C),
            (d.relatedTarget = h),
            (x = null),
            tn(c) === u &&
              ((v = new v(g, p + "enter", y, n, c)),
              (v.target = h),
              (v.relatedTarget = C),
              (x = v)),
            (C = x),
            m && y)
          )
            t: {
              for (v = m, g = y, p = 0, h = v; h; h = xn(h)) p++;
              for (h = 0, x = g; x; x = xn(x)) h++;
              for (; 0 < p - h; ) (v = xn(v)), p--;
              for (; 0 < h - p; ) (g = xn(g)), h--;
              for (; p--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = xn(v)), (g = xn(g));
              }
              v = null;
            }
          else v = null;
          m !== null && Au(f, d, m, v, !1),
            y !== null && C !== null && Au(f, C, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Tn(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var w = Cg;
        else if (Su(d))
          if (hd) w = Lg;
          else {
            w = Eg;
            var T = Tg;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = Vg);
        if (w && (w = w(e, u))) {
          pd(f, w, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            _s(d, "number", d.value);
      }
      switch (((T = u ? Tn(u) : window), e)) {
        case "focusin":
          (Su(T) || T.contentEditable === "true") &&
            ((Pn = T), (Qs = u), (wr = null));
          break;
        case "focusout":
          wr = Qs = Pn = null;
          break;
        case "mousedown":
          Ys = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ys = !1), Eu(f, n, c);
          break;
        case "selectionchange":
          if (Mg) break;
        case "keydown":
        case "keyup":
          Eu(f, n, c);
      }
      var P;
      if (ea)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        kn
          ? fd(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (cd &&
          n.locale !== "ko" &&
          (kn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && kn && (P = ud())
            : ((Lt = c),
              (Jl = "value" in Lt ? Lt.value : Lt.textContent),
              (kn = !0))),
        (T = Yi(u, k)),
        0 < T.length &&
          ((k = new yu(k, e, null, n, c)),
          f.push({ event: k, listeners: T }),
          P ? (k.data = P) : ((P = dd(n)), P !== null && (k.data = P)))),
        (P = xg ? wg(e, n) : Sg(e, n)) &&
          ((u = Yi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new yu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Cd(f, t);
  });
}
function Ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Mr(e, n)),
      o != null && r.unshift(Ir(e, o, i)),
      (o = Mr(e, t)),
      o != null && r.push(Ir(e, o, i))),
      (e = e.return);
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Au(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Mr(n, o)), a != null && s.unshift(Ir(n, a, l)))
        : i || ((a = Mr(n, o)), a != null && s.push(Ir(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var _g = /\r\n?/g,
  Fg = /\u0000|\uFFFD/g;
function Du(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _g,
      `
`
    )
    .replace(Fg, "");
}
function mi(e, t, n) {
  if (((t = Du(t)), Du(e) !== t && n)) throw Error(S(425));
}
function Xi() {}
var Xs = null,
  Zs = null;
function Js(e, t) {
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
var qs = typeof setTimeout == "function" ? setTimeout : void 0,
  Og = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Mu = typeof Promise == "function" ? Promise : void 0,
  Ig =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Mu < "u"
      ? function (e) {
          return Mu.resolve(null).then(e).catch(zg);
        }
      : qs;
function zg(e) {
  setTimeout(function () {
    throw e;
  });
}
function ss(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Nr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Nr(t);
}
function Nt(e) {
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
function Ru(e) {
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
var bn = Math.random().toString(36).slice(2),
  tt = "__reactFiber$" + bn,
  zr = "__reactProps$" + bn,
  mt = "__reactContainer$" + bn,
  bs = "__reactEvents$" + bn,
  Bg = "__reactListeners$" + bn,
  Ug = "__reactHandles$" + bn;
function tn(e) {
  var t = e[tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ru(e); e !== null; ) {
          if ((n = e[tt])) return n;
          e = Ru(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qr(e) {
  return (
    (e = e[tt] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Eo(e) {
  return e[zr] || null;
}
var el = [],
  En = -1;
function Ht(e) {
  return { current: e };
}
function U(e) {
  0 > En || ((e.current = el[En]), (el[En] = null), En--);
}
function z(e, t) {
  En++, (el[En] = e.current), (e.current = t);
}
var Bt = {},
  ge = Ht(Bt),
  Ce = Ht(!1),
  cn = Bt;
function Wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Zi() {
  U(Ce), U(ge);
}
function ju(e, t, n) {
  if (ge.current !== Bt) throw Error(S(168));
  z(ge, t), z(Ce, n);
}
function Ed(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(S(108, Tm(e) || "Unknown", i));
  return Y({}, n, r);
}
function Ji(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (cn = ge.current),
    z(ge, e),
    z(Ce, Ce.current),
    !0
  );
}
function Nu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = Ed(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(Ce),
      U(ge),
      z(ge, e))
    : U(Ce),
    z(Ce, n);
}
var st = null,
  Vo = !1,
  ls = !1;
function Vd(e) {
  st === null ? (st = [e]) : st.push(e);
}
function $g(e) {
  (Vo = !0), Vd(e);
}
function Gt() {
  if (!ls && st !== null) {
    ls = !0;
    var e = 0,
      t = I;
    try {
      var n = st;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (Vo = !1);
    } catch (i) {
      throw (st !== null && (st = st.slice(e + 1)), qf(Ql, Gt), i);
    } finally {
      (I = t), (ls = !1);
    }
  }
  return null;
}
var Vn = [],
  Ln = 0,
  qi = null,
  bi = 0,
  ze = [],
  Be = 0,
  fn = null,
  lt = 1,
  at = "";
function Jt(e, t) {
  (Vn[Ln++] = bi), (Vn[Ln++] = qi), (qi = e), (bi = t);
}
function Ld(e, t, n) {
  (ze[Be++] = lt), (ze[Be++] = at), (ze[Be++] = fn), (fn = e);
  var r = lt;
  e = at;
  var i = 32 - Xe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Xe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (lt = (1 << (32 - Xe(t) + i)) | (n << i) | r),
      (at = o + e);
  } else (lt = (1 << o) | (n << i) | r), (at = e);
}
function na(e) {
  e.return !== null && (Jt(e, 1), Ld(e, 1, 0));
}
function ra(e) {
  for (; e === qi; )
    (qi = Vn[--Ln]), (Vn[Ln] = null), (bi = Vn[--Ln]), (Vn[Ln] = null);
  for (; e === fn; )
    (fn = ze[--Be]),
      (ze[Be] = null),
      (at = ze[--Be]),
      (ze[Be] = null),
      (lt = ze[--Be]),
      (ze[Be] = null);
}
var Me = null,
  De = null,
  W = !1,
  Ye = null;
function Ad(e, t) {
  var n = Ue(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function _u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Me = e), (De = Nt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Me = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fn !== null ? { id: lt, overflow: at } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Me = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function tl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function nl(e) {
  if (W) {
    var t = De;
    if (t) {
      var n = t;
      if (!_u(e, t)) {
        if (tl(e)) throw Error(S(418));
        t = Nt(n.nextSibling);
        var r = Me;
        t && _u(e, t)
          ? Ad(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Me = e));
      }
    } else {
      if (tl(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Me = e);
    }
  }
}
function Fu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function gi(e) {
  if (e !== Me) return !1;
  if (!W) return Fu(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Js(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (tl(e)) throw (Dd(), Error(S(418)));
    for (; t; ) Ad(e, t), (t = Nt(t.nextSibling));
  }
  if ((Fu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Me ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function Dd() {
  for (var e = De; e; ) e = Nt(e.nextSibling);
}
function Hn() {
  (De = Me = null), (W = !1);
}
function ia(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var Wg = xt.ReactCurrentBatchConfig;
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var eo = Ht(null),
  to = null,
  An = null,
  oa = null;
function sa() {
  oa = An = to = null;
}
function la(e) {
  var t = eo.current;
  U(eo), (e._currentValue = t);
}
function rl(e, t, n) {
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
function Bn(e, t) {
  (to = e),
    (oa = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (oa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (to === null) throw Error(S(308));
      (An = e), (to.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var nn = null;
function aa(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function Md(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), aa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
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
var Ct = !1;
function ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rd(e, t) {
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
function ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), aa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function Mi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n);
  }
}
function Ou(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
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
function no(e, t, n, r) {
  var i = e.updateQueue;
  Ct = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = Y({}, f, d);
              break e;
            case 2:
              Ct = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (a = f)) : (c = c.next = m),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (pn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Iu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var jd = new Mf.Component().refs;
function il(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Ot(e),
      o = ct(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = _t(e, o, i)),
      t !== null && (Ze(t, e, i, r), Mi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Ot(e),
      o = ct(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = _t(e, o, i)),
      t !== null && (Ze(t, e, i, r), Mi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = Ot(e),
      i = ct(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = _t(e, i, r)),
      t !== null && (Ze(t, e, r, n), Mi(t, e, r));
  },
};
function zu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Fr(n, r) || !Fr(i, o)
      : !0
  );
}
function Nd(e, t, n) {
  var r = !1,
    i = Bt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = We(o))
      : ((i = Te(t) ? cn : ge.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Wn(e, i) : Bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Bu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
}
function ol(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = jd), ua(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = We(o))
    : ((o = Te(t) ? cn : ge.current), (i.context = Wn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (il(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Lo.enqueueReplaceState(i, i.state, null),
      no(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === jd && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function yi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function _d(e) {
  function t(g, p) {
    if (e) {
      var h = g.deletions;
      h === null ? ((g.deletions = [p]), (g.flags |= 16)) : h.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function i(g, p) {
    return (g = It(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, p, h) {
    return (
      (g.index = h),
      e
        ? ((h = g.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((g.flags |= 2), p) : h)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, p, h, x) {
    return p === null || p.tag !== 6
      ? ((p = hs(h, g.mode, x)), (p.return = g), p)
      : ((p = i(p, h)), (p.return = g), p);
  }
  function a(g, p, h, x) {
    var w = h.type;
    return w === Sn
      ? c(g, p, h.props.children, x, h.key)
      : p !== null &&
        (p.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Pt &&
            Uu(w) === p.type))
      ? ((x = i(p, h.props)), (x.ref = sr(g, p, h)), (x.return = g), x)
      : ((x = Oi(h.type, h.key, h.props, null, g.mode, x)),
        (x.ref = sr(g, p, h)),
        (x.return = g),
        x);
  }
  function u(g, p, h, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = ms(h, g.mode, x)), (p.return = g), p)
      : ((p = i(p, h.children || [])), (p.return = g), p);
  }
  function c(g, p, h, x, w) {
    return p === null || p.tag !== 7
      ? ((p = ln(h, g.mode, x, w)), (p.return = g), p)
      : ((p = i(p, h)), (p.return = g), p);
  }
  function f(g, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = hs("" + p, g.mode, h)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case si:
          return (
            (h = Oi(p.type, p.key, p.props, null, g.mode, h)),
            (h.ref = sr(g, null, p)),
            (h.return = g),
            h
          );
        case wn:
          return (p = ms(p, g.mode, h)), (p.return = g), p;
        case Pt:
          var x = p._init;
          return f(g, x(p._payload), h);
      }
      if (dr(p) || tr(p))
        return (p = ln(p, g.mode, h, null)), (p.return = g), p;
      yi(g, p);
    }
    return null;
  }
  function d(g, p, h, x) {
    var w = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return w !== null ? null : l(g, p, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case si:
          return h.key === w ? a(g, p, h, x) : null;
        case wn:
          return h.key === w ? u(g, p, h, x) : null;
        case Pt:
          return (w = h._init), d(g, p, w(h._payload), x);
      }
      if (dr(h) || tr(h)) return w !== null ? null : c(g, p, h, x, null);
      yi(g, h);
    }
    return null;
  }
  function m(g, p, h, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (g = g.get(h) || null), l(p, g, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case si:
          return (g = g.get(x.key === null ? h : x.key) || null), a(p, g, x, w);
        case wn:
          return (g = g.get(x.key === null ? h : x.key) || null), u(p, g, x, w);
        case Pt:
          var T = x._init;
          return m(g, p, h, T(x._payload), w);
      }
      if (dr(x) || tr(x)) return (g = g.get(h) || null), c(p, g, x, w, null);
      yi(p, x);
    }
    return null;
  }
  function y(g, p, h, x) {
    for (
      var w = null, T = null, P = p, k = (p = 0), N = null;
      P !== null && k < h.length;
      k++
    ) {
      P.index > k ? ((N = P), (P = null)) : (N = P.sibling);
      var R = d(g, P, h[k], x);
      if (R === null) {
        P === null && (P = N);
        break;
      }
      e && P && R.alternate === null && t(g, P),
        (p = o(R, p, k)),
        T === null ? (w = R) : (T.sibling = R),
        (T = R),
        (P = N);
    }
    if (k === h.length) return n(g, P), W && Jt(g, k), w;
    if (P === null) {
      for (; k < h.length; k++)
        (P = f(g, h[k], x)),
          P !== null &&
            ((p = o(P, p, k)), T === null ? (w = P) : (T.sibling = P), (T = P));
      return W && Jt(g, k), w;
    }
    for (P = r(g, P); k < h.length; k++)
      (N = m(P, g, k, h[k], x)),
        N !== null &&
          (e && N.alternate !== null && P.delete(N.key === null ? k : N.key),
          (p = o(N, p, k)),
          T === null ? (w = N) : (T.sibling = N),
          (T = N));
    return (
      e &&
        P.forEach(function (re) {
          return t(g, re);
        }),
      W && Jt(g, k),
      w
    );
  }
  function v(g, p, h, x) {
    var w = tr(h);
    if (typeof w != "function") throw Error(S(150));
    if (((h = w.call(h)), h == null)) throw Error(S(151));
    for (
      var T = (w = null), P = p, k = (p = 0), N = null, R = h.next();
      P !== null && !R.done;
      k++, R = h.next()
    ) {
      P.index > k ? ((N = P), (P = null)) : (N = P.sibling);
      var re = d(g, P, R.value, x);
      if (re === null) {
        P === null && (P = N);
        break;
      }
      e && P && re.alternate === null && t(g, P),
        (p = o(re, p, k)),
        T === null ? (w = re) : (T.sibling = re),
        (T = re),
        (P = N);
    }
    if (R.done) return n(g, P), W && Jt(g, k), w;
    if (P === null) {
      for (; !R.done; k++, R = h.next())
        (R = f(g, R.value, x)),
          R !== null &&
            ((p = o(R, p, k)), T === null ? (w = R) : (T.sibling = R), (T = R));
      return W && Jt(g, k), w;
    }
    for (P = r(g, P); !R.done; k++, R = h.next())
      (R = m(P, g, k, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? k : R.key),
          (p = o(R, p, k)),
          T === null ? (w = R) : (T.sibling = R),
          (T = R));
    return (
      e &&
        P.forEach(function (le) {
          return t(g, le);
        }),
      W && Jt(g, k),
      w
    );
  }
  function C(g, p, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Sn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case si:
          e: {
            for (var w = h.key, T = p; T !== null; ) {
              if (T.key === w) {
                if (((w = h.type), w === Sn)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (p = i(T, h.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  T.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Pt &&
                    Uu(w) === T.type)
                ) {
                  n(g, T.sibling),
                    (p = i(T, h.props)),
                    (p.ref = sr(g, T, h)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            h.type === Sn
              ? ((p = ln(h.props.children, g.mode, x, h.key)),
                (p.return = g),
                (g = p))
              : ((x = Oi(h.type, h.key, h.props, null, g.mode, x)),
                (x.ref = sr(g, p, h)),
                (x.return = g),
                (g = x));
          }
          return s(g);
        case wn:
          e: {
            for (T = h.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(g, p.sibling),
                    (p = i(p, h.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = ms(h, g.mode, x)), (p.return = g), (g = p);
          }
          return s(g);
        case Pt:
          return (T = h._init), C(g, p, T(h._payload), x);
      }
      if (dr(h)) return y(g, p, h, x);
      if (tr(h)) return v(g, p, h, x);
      yi(g, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = i(p, h)), (p.return = g), (g = p))
          : (n(g, p), (p = hs(h, g.mode, x)), (p.return = g), (g = p)),
        s(g))
      : n(g, p);
  }
  return C;
}
var Gn = _d(!0),
  Fd = _d(!1),
  br = {},
  rt = Ht(br),
  Br = Ht(br),
  Ur = Ht(br);
function rn(e) {
  if (e === br) throw Error(S(174));
  return e;
}
function ca(e, t) {
  switch ((z(Ur, t), z(Br, e), z(rt, br), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Os(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Os(t, e));
  }
  U(rt), z(rt, t);
}
function Kn() {
  U(rt), U(Br), U(Ur);
}
function Od(e) {
  rn(Ur.current);
  var t = rn(rt.current),
    n = Os(t, e.type);
  t !== n && (z(Br, e), z(rt, n));
}
function fa(e) {
  Br.current === e && (U(rt), U(Br));
}
var H = Ht(0);
function ro(e) {
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
var as = [];
function da() {
  for (var e = 0; e < as.length; e++)
    as[e]._workInProgressVersionPrimary = null;
  as.length = 0;
}
var Ri = xt.ReactCurrentDispatcher,
  us = xt.ReactCurrentBatchConfig,
  dn = 0,
  Q = null,
  te = null,
  oe = null,
  io = !1,
  Sr = !1,
  $r = 0,
  Hg = 0;
function de() {
  throw Error(S(321));
}
function pa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n])) return !1;
  return !0;
}
function ha(e, t, n, r, i, o) {
  if (
    ((dn = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ri.current = e === null || e.memoizedState === null ? Yg : Xg),
    (e = n(r, i)),
    Sr)
  ) {
    o = 0;
    do {
      if (((Sr = !1), ($r = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (oe = te = null),
        (t.updateQueue = null),
        (Ri.current = Zg),
        (e = n(r, i));
    } while (Sr);
  }
  if (
    ((Ri.current = oo),
    (t = te !== null && te.next !== null),
    (dn = 0),
    (oe = te = Q = null),
    (io = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function ma() {
  var e = $r !== 0;
  return ($r = 0), e;
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (Q.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function He() {
  if (te === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = oe === null ? Q.memoizedState : oe.next;
  if (t !== null) (oe = t), (te = e);
  else {
    if (e === null) throw Error(S(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      oe === null ? (Q.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function Wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cs(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((dn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Q.lanes |= c),
          (pn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Je(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Q.lanes |= o), (pn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fs(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Je(o, t.memoizedState) || (Pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Id() {}
function zd(e, t) {
  var n = Q,
    r = He(),
    i = t(),
    o = !Je(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    ga($d.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Hr(9, Ud.bind(null, n, r, i, t), void 0, null),
      se === null)
    )
      throw Error(S(349));
    dn & 30 || Bd(n, t, i);
  }
  return i;
}
function Bd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ud(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wd(t) && Hd(e);
}
function $d(e, t, n) {
  return n(function () {
    Wd(t) && Hd(e);
  });
}
function Wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Hd(e) {
  var t = gt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function $u(e) {
  var t = et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qg.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Hr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gd() {
  return He().memoizedState;
}
function ji(e, t, n, r) {
  var i = et();
  (Q.flags |= e),
    (i.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ao(e, t, n, r) {
  var i = He();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (te !== null) {
    var s = te.memoizedState;
    if (((o = s.destroy), r !== null && pa(r, s.deps))) {
      i.memoizedState = Hr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = Hr(1 | t, n, o, r));
}
function Wu(e, t) {
  return ji(8390656, 8, e, t);
}
function ga(e, t) {
  return Ao(2048, 8, e, t);
}
function Kd(e, t) {
  return Ao(4, 2, e, t);
}
function Qd(e, t) {
  return Ao(4, 4, e, t);
}
function Yd(e, t) {
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
function Xd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ao(4, 4, Yd.bind(null, t, e), n)
  );
}
function ya() {}
function Zd(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jd(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qd(e, t, n) {
  return dn & 21
    ? (Je(n, t) || ((n = td()), (Q.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function Gg(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = us.transition;
  us.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (us.transition = r);
  }
}
function bd() {
  return He().memoizedState;
}
function Kg(e, t, n) {
  var r = Ot(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ep(e))
  )
    tp(t, n);
  else if (((n = Md(e, t, n, r)), n !== null)) {
    var i = xe();
    Ze(n, e, r, i), np(n, t, r);
  }
}
function Qg(e, t, n) {
  var r = Ot(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ep(e)) tp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Je(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), aa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Md(e, t, i, r)),
      n !== null && ((i = xe()), Ze(n, e, r, i), np(n, t, r));
  }
}
function ep(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function tp(e, t) {
  Sr = io = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function np(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n);
  }
}
var oo = {
    readContext: We,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  Yg = {
    readContext: We,
    useCallback: function (e, t) {
      return (et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: Wu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ji(4194308, 4, Yd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ji(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = et();
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
        (e = e.dispatch = Kg.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $u,
    useDebugValue: ya,
    useDeferredValue: function (e) {
      return (et().memoizedState = e);
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0];
      return (e = Gg.bind(null, e[1])), (et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = et();
      if (W) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(S(349));
        dn & 30 || Bd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Wu($d.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Hr(9, Ud.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = et(),
        t = se.identifierPrefix;
      if (W) {
        var n = at,
          r = lt;
        (n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $r++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xg = {
    readContext: We,
    useCallback: Zd,
    useContext: We,
    useEffect: ga,
    useImperativeHandle: Xd,
    useInsertionEffect: Kd,
    useLayoutEffect: Qd,
    useMemo: Jd,
    useReducer: cs,
    useRef: Gd,
    useState: function () {
      return cs(Wr);
    },
    useDebugValue: ya,
    useDeferredValue: function (e) {
      var t = He();
      return qd(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = cs(Wr)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Id,
    useSyncExternalStore: zd,
    useId: bd,
    unstable_isNewReconciler: !1,
  },
  Zg = {
    readContext: We,
    useCallback: Zd,
    useContext: We,
    useEffect: ga,
    useImperativeHandle: Xd,
    useInsertionEffect: Kd,
    useLayoutEffect: Qd,
    useMemo: Jd,
    useReducer: fs,
    useRef: Gd,
    useState: function () {
      return fs(Wr);
    },
    useDebugValue: ya,
    useDeferredValue: function (e) {
      var t = He();
      return te === null ? (t.memoizedState = e) : qd(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = fs(Wr)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Id,
    useSyncExternalStore: zd,
    useId: bd,
    unstable_isNewReconciler: !1,
  };
function Qn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Cm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ds(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jg = typeof WeakMap == "function" ? WeakMap : Map;
function rp(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      lo || ((lo = !0), (gl = r)), sl(e, t);
    }),
    n
  );
}
function ip(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        sl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        sl(e, t),
          typeof r != "function" &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = fy.bind(null, e, t, n)), t.then(e, e));
}
function Gu(e) {
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
function Ku(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ct(-1, 1)), (t.tag = 2), _t(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qg = xt.ReactCurrentOwner,
  Pe = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Fd(t, null, n, r) : Gn(t, e.child, n, r);
}
function Qu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Bn(t, i),
    (r = ha(e, t, n, r, o, i)),
    (n = ma()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (W && n && na(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function Yu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ta(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), op(e, t, o, r, i))
      : ((e = Oi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fr), n(s, r) && e.ref === t.ref)
    )
      return yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = It(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function op(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Fr(o, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), yt(e, t, i);
  }
  return ll(e, t, n, r, i);
}
function sp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Mn, Ae),
        (Ae |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Mn, Ae),
          (Ae |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(Mn, Ae),
        (Ae |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Mn, Ae),
      (Ae |= r);
  return ve(e, t, i, n), t.child;
}
function lp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ll(e, t, n, r, i) {
  var o = Te(n) ? cn : ge.current;
  return (
    (o = Wn(t, o)),
    Bn(t, i),
    (n = ha(e, t, n, r, o, i)),
    (r = ma()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (W && r && na(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function Xu(e, t, n, r, i) {
  if (Te(n)) {
    var o = !0;
    Ji(t);
  } else o = !1;
  if ((Bn(t, i), t.stateNode === null))
    Ni(e, t), Nd(t, n, r), ol(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = We(u))
      : ((u = Te(n) ? cn : ge.current), (u = Wn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Bu(t, s, r, u)),
      (Ct = !1);
    var d = t.memoizedState;
    (s.state = d),
      no(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ce.current || Ct
        ? (typeof c == "function" && (il(t, n, c, r), (a = t.memoizedState)),
          (l = Ct || zu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Rd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ke(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = We(a))
        : ((a = Te(n) ? cn : ge.current), (a = Wn(t, a)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && Bu(t, s, r, a)),
      (Ct = !1),
      (d = t.memoizedState),
      (s.state = d),
      no(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Ce.current || Ct
      ? (typeof m == "function" && (il(t, n, m, r), (y = t.memoizedState)),
        (u = Ct || zu(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return al(e, t, n, r, o, i);
}
function al(e, t, n, r, i, o) {
  lp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Nu(t, n, !1), yt(e, t, o);
  (r = t.stateNode), (qg.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Gn(t, e.child, null, o)), (t.child = Gn(t, null, l, o)))
      : ve(e, t, l, o),
    (t.memoizedState = r.state),
    i && Nu(t, n, !0),
    t.child
  );
}
function ap(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ju(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ju(e, t.context, !1),
    ca(e, t.containerInfo);
}
function Zu(e, t, n, r, i) {
  return Hn(), ia(i), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var ul = { dehydrated: null, treeContext: null, retryLane: 0 };
function cl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function up(e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(H, i & 1),
    e === null)
  )
    return (
      nl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ro(s, r, 0, null)),
              (e = ln(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = cl(n)),
              (t.memoizedState = ul),
              e)
            : va(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return bg(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = It(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = It(l, o)) : ((o = ln(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? cl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ul),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = It(o, { mode: "visible", children: r.children })),
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
function va(e, t) {
  return (
    (t = Ro({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vi(e, t, n, r) {
  return (
    r !== null && ia(r),
    Gn(t, e.child, null, n),
    (e = va(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bg(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ds(Error(S(422)))), vi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ro({ mode: "visible", children: r.children }, i, 0, null)),
        (o = ln(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Gn(t, e.child, null, s),
        (t.child.memoizedState = cl(s)),
        (t.memoizedState = ul),
        o);
  if (!(t.mode & 1)) return vi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(S(419))), (r = ds(o, r, void 0)), vi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Pe || l)) {
    if (((r = se), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), gt(e, i), Ze(r, e, i, -1));
    }
    return Ca(), (r = ds(Error(S(421)))), vi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (De = Nt(i.nextSibling)),
      (Me = t),
      (W = !0),
      (Ye = null),
      e !== null &&
        ((ze[Be++] = lt),
        (ze[Be++] = at),
        (ze[Be++] = fn),
        (lt = e.id),
        (at = e.overflow),
        (fn = t)),
      (t = va(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rl(e.return, t, n);
}
function ps(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function cp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ve(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
        else if (e.tag === 19) Ju(e, n, t);
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
  if ((z(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ro(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ps(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ro(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ps(t, !0, n, null, o);
        break;
      case "together":
        ps(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ni(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ey(e, t, n) {
  switch (t.tag) {
    case 3:
      ap(t), Hn();
      break;
    case 5:
      Od(t);
      break;
    case 1:
      Te(t.type) && Ji(t);
      break;
    case 4:
      ca(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(eo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? up(e, t, n)
          : (z(H, H.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      z(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), sp(e, t, n);
  }
  return yt(e, t, n);
}
var fp, fl, dp, pp;
fp = function (e, t) {
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
fl = function () {};
dp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rn(rt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = js(e, i)), (r = js(e, r)), (o = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Fs(e, i)), (r = Fs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xi);
    }
    Is(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ar.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ar.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && B("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
pp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lr(e, t) {
  if (!W)
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
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ty(e, t, n) {
  var r = t.pendingProps;
  switch ((ra(t), t.tag)) {
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
      return pe(t), null;
    case 1:
      return Te(t.type) && Zi(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kn(),
        U(Ce),
        U(ge),
        da(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (xl(Ye), (Ye = null)))),
        fl(e, t),
        pe(t),
        null
      );
    case 5:
      fa(t);
      var i = rn(Ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return pe(t), null;
        }
        if (((e = rn(rt.current)), gi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[tt] = t), (r[zr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < hr.length; i++) B(hr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              su(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              au(r, o), B("invalid", r);
          }
          Is(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      mi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      mi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Ar.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              li(r), lu(r, o, !0);
              break;
            case "textarea":
              li(r), uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Bf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[tt] = t),
            (e[zr] = r),
            fp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = zs(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < hr.length; i++) B(hr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                su(e, r), (i = js(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                au(e, r), (i = Fs(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            Is(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? Wf(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Uf(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Dr(e, a)
                    : typeof a == "number" && Dr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ar.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && B("scroll", e)
                      : a != null && $l(e, o, a, s));
              }
            switch (n) {
              case "input":
                li(e), lu(e, r, !1);
                break;
              case "textarea":
                li(e), uu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Fn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Xi);
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
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) pp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = rn(Ur.current)), rn(rt.current), gi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[tt] = t),
            (o = r.nodeValue !== n) && ((e = Me), e !== null))
          )
            switch (e.tag) {
              case 3:
                mi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[tt] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (U(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && De !== null && t.mode & 1 && !(t.flags & 128))
          Dd(), Hn(), (t.flags |= 98560), (o = !1);
        else if (((o = gi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[tt] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (o = !1);
        } else Ye !== null && (xl(Ye), (Ye = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? ne === 0 && (ne = 3) : Ca())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Kn(), fl(e, t), e === null && Or(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return la(t.type._context), pe(t), null;
    case 17:
      return Te(t.type) && Zi(), pe(t), null;
    case 19:
      if ((U(H), (o = t.memoizedState), o === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) lr(o, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ro(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    lr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            q() > Yn &&
            ((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ro(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              lr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !W)
            )
              return pe(t), null;
          } else
            2 * q() - o.renderingStartTime > Yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = q()),
          (t.sibling = null),
          (n = H.current),
          z(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Pa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function ny(e, t) {
  switch ((ra(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Zi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kn(),
        U(Ce),
        U(ge),
        da(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fa(t), null;
    case 13:
      if ((U(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(H), null;
    case 4:
      return Kn(), null;
    case 10:
      return la(t.type._context), null;
    case 22:
    case 23:
      return Pa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xi = !1,
  me = !1,
  ry = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function dl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var qu = !1;
function iy(e, t) {
  if (((Xs = Ki), (e = yd()), ta(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zs = { focusedElem: e, selectionRange: n }, Ki = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    C = y.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ke(t.type, v),
                      C
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (x) {
          X(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = qu), (qu = !1), y;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && dl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Do(e, t) {
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
function pl(e) {
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
function hp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tt], delete t[zr], delete t[bs], delete t[Bg], delete t[Ug])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mp(e.return)) return null;
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
function hl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Xi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hl(e, t, n), e = e.sibling; e !== null; ) hl(e, t, n), (e = e.sibling);
}
function ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ml(e, t, n), e = e.sibling; e !== null; ) ml(e, t, n), (e = e.sibling);
}
var ae = null,
  Qe = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; ) gp(e, t, n), (n = n.sibling);
}
function gp(e, t, n) {
  if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
      nt.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Dn(n, t);
    case 6:
      var r = ae,
        i = Qe;
      (ae = null),
        St(e, t, n),
        (ae = r),
        (Qe = i),
        ae !== null &&
          (Qe
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Qe
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? ss(e.parentNode, n)
              : e.nodeType === 1 && ss(e, n),
            Nr(e))
          : ss(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = Qe),
        (ae = n.stateNode.containerInfo),
        (Qe = !0),
        St(e, t, n),
        (ae = r),
        (Qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && dl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          X(n, t, l);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), St(e, t, n), (me = r))
        : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ry()),
      t.forEach(function (r) {
        var i = py.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (Qe = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(S(160));
        gp(o, s, i), (ae = null), (Qe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yp(t, e), (t = t.sibling);
}
function yp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), be(e), r & 4)) {
        try {
          kr(3, e, e.return), Do(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          kr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      Ge(t, e), be(e), r & 512 && n !== null && Dn(n, n.return);
      break;
    case 5:
      if (
        (Ge(t, e),
        be(e),
        r & 512 && n !== null && Dn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Dr(i, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && If(i, o),
              zs(l, s);
            var u = zs(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? Wf(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Uf(i, f)
                : c === "children"
                ? Dr(i, f)
                : $l(i, c, f, u);
            }
            switch (l) {
              case "input":
                Ns(i, o);
                break;
              case "textarea":
                zf(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? Fn(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Fn(i, !!o.multiple, o.defaultValue, !0)
                      : Fn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[zr] = o;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), be(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Nr(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      Ge(t, e), be(e);
      break;
    case 13:
      Ge(t, e),
        be(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Sa = q())),
        r & 4 && ec(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), Ge(t, e), (me = u)) : Ge(t, e),
        be(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, d, d.return);
                  break;
                case 1:
                  Dn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Dn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    nc(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (L = m)) : nc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = $f("display", s)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), be(e), r & 4 && ec(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), be(e);
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Dr(i, ""), (r.flags &= -33));
          var o = bu(e);
          ml(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = bu(e);
          hl(e, l, s);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function oy(e, t, n) {
  (L = e), vp(e);
}
function vp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || xi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || me;
        l = xi;
        var u = me;
        if (((xi = s), (me = a) && !u))
          for (L = i; L !== null; )
            (s = L),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? rc(i)
                : a !== null
                ? ((a.return = s), (L = a))
                : rc(i);
        for (; o !== null; ) (L = o), vp(o), (o = o.sibling);
        (L = i), (xi = l), (me = u);
      }
      tc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : tc(e);
  }
}
function tc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Do(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Iu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Iu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Nr(f);
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
              throw Error(S(163));
          }
        me || (t.flags & 512 && pl(t));
      } catch (d) {
        X(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function nc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function rc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Do(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var o = t.return;
          try {
            pl(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            pl(t);
          } catch (a) {
            X(t, s, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var sy = Math.ceil,
  so = xt.ReactCurrentDispatcher,
  xa = xt.ReactCurrentOwner,
  $e = xt.ReactCurrentBatchConfig,
  O = 0,
  se = null,
  b = null,
  ce = 0,
  Ae = 0,
  Mn = Ht(0),
  ne = 0,
  Gr = null,
  pn = 0,
  Mo = 0,
  wa = 0,
  Pr = null,
  ke = null,
  Sa = 0,
  Yn = 1 / 0,
  ot = null,
  lo = !1,
  gl = null,
  Ft = null,
  wi = !1,
  At = null,
  ao = 0,
  Cr = 0,
  yl = null,
  _i = -1,
  Fi = 0;
function xe() {
  return O & 6 ? q() : _i !== -1 ? _i : (_i = q());
}
function Ot(e) {
  return e.mode & 1
    ? O & 2 && ce !== 0
      ? ce & -ce
      : Wg.transition !== null
      ? (Fi === 0 && (Fi = td()), Fi)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ad(e.type))),
        e)
    : 1;
}
function Ze(e, t, n, r) {
  if (50 < Cr) throw ((Cr = 0), (yl = null), Error(S(185)));
  Zr(e, n, r),
    (!(O & 2) || e !== se) &&
      (e === se && (!(O & 2) && (Mo |= n), ne === 4 && Vt(e, ce)),
      Ee(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((Yn = q() + 500), Vo && Gt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Wm(e, t);
  var r = Gi(e, e === se ? ce : 0);
  if (r === 0)
    n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && du(n), t === 1))
      e.tag === 0 ? $g(ic.bind(null, e)) : Vd(ic.bind(null, e)),
        Ig(function () {
          !(O & 6) && Gt();
        }),
        (n = null);
    else {
      switch (nd(r)) {
        case 1:
          n = Ql;
          break;
        case 4:
          n = bf;
          break;
        case 16:
          n = Hi;
          break;
        case 536870912:
          n = ed;
          break;
        default:
          n = Hi;
      }
      n = Ep(n, xp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xp(e, t) {
  if (((_i = -1), (Fi = 0), O & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = Gi(e, e === se ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = uo(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var o = Sp();
    (se !== e || ce !== t) && ((ot = null), (Yn = q() + 500), sn(e, t));
    do
      try {
        uy();
        break;
      } catch (l) {
        wp(e, l);
      }
    while (!0);
    sa(),
      (so.current = o),
      (O = i),
      b !== null ? (t = 0) : ((se = null), (ce = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Hs(e)), i !== 0 && ((r = i), (t = vl(e, i)))), t === 1)
    )
      throw ((n = Gr), sn(e, 0), Vt(e, r), Ee(e, q()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !ly(i) &&
          ((t = uo(e, r)),
          t === 2 && ((o = Hs(e)), o !== 0 && ((r = o), (t = vl(e, o)))),
          t === 1))
      )
        throw ((n = Gr), sn(e, 0), Vt(e, r), Ee(e, q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          qt(e, ke, ot);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = Sa + 500 - q()), 10 < t))
          ) {
            if (Gi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = qs(qt.bind(null, e, ke, ot), t);
            break;
          }
          qt(e, ke, ot);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Xe(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
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
                : 1960 * sy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qs(qt.bind(null, e, ke, ot), r);
            break;
          }
          qt(e, ke, ot);
          break;
        case 5:
          qt(e, ke, ot);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ee(e, q()), e.callbackNode === n ? xp.bind(null, e) : null;
}
function vl(e, t) {
  var n = Pr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = uo(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && xl(t)),
    e
  );
}
function xl(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function ly(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Je(o(), i)) return !1;
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
function Vt(e, t) {
  for (
    t &= ~wa,
      t &= ~Mo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ic(e) {
  if (O & 6) throw Error(S(327));
  Un();
  var t = Gi(e, 0);
  if (!(t & 1)) return Ee(e, q()), null;
  var n = uo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hs(e);
    r !== 0 && ((t = r), (n = vl(e, r)));
  }
  if (n === 1) throw ((n = Gr), sn(e, 0), Vt(e, t), Ee(e, q()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, ke, ot),
    Ee(e, q()),
    null
  );
}
function ka(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((Yn = q() + 500), Vo && Gt());
  }
}
function hn(e) {
  At !== null && At.tag === 0 && !(O & 6) && Un();
  var t = O;
  O |= 1;
  var n = $e.transition,
    r = I;
  try {
    if ((($e.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), ($e.transition = n), (O = t), !(O & 6) && Gt();
  }
}
function Pa() {
  (Ae = Mn.current), U(Mn);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Og(n)), b !== null))
    for (n = b.return; n !== null; ) {
      var r = n;
      switch ((ra(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zi();
          break;
        case 3:
          Kn(), U(Ce), U(ge), da();
          break;
        case 5:
          fa(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          U(H);
          break;
        case 19:
          U(H);
          break;
        case 10:
          la(r.type._context);
          break;
        case 22:
        case 23:
          Pa();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (b = e = It(e.current, null)),
    (ce = Ae = t),
    (ne = 0),
    (Gr = null),
    (wa = Mo = pn = 0),
    (ke = Pr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function wp(e, t) {
  do {
    var n = b;
    try {
      if ((sa(), (Ri.current = oo), io)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        io = !1;
      }
      if (
        ((dn = 0),
        (oe = te = Q = null),
        (Sr = !1),
        ($r = 0),
        (xa.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Gr = t), (b = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ce),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Gu(s);
          if (m !== null) {
            (m.flags &= -257),
              Ku(m, s, l, o, t),
              m.mode & 1 && Hu(o, u, t),
              (t = m),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(o, u, t), Ca();
              break e;
            }
            a = Error(S(426));
          }
        } else if (W && l.mode & 1) {
          var C = Gu(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Ku(C, s, l, o, t),
              ia(Qn(a, l));
            break e;
          }
        }
        (o = a = Qn(a, l)),
          ne !== 4 && (ne = 2),
          Pr === null ? (Pr = [o]) : Pr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = rp(o, a, t);
              Ou(o, g);
              break e;
            case 1:
              l = a;
              var p = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Ft === null || !Ft.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = ip(o, l, t);
                Ou(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Pp(n);
    } catch (w) {
      (t = w), b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sp() {
  var e = so.current;
  return (so.current = oo), e === null ? oo : e;
}
function Ca() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    se === null || (!(pn & 268435455) && !(Mo & 268435455)) || Vt(se, ce);
}
function uo(e, t) {
  var n = O;
  O |= 2;
  var r = Sp();
  (se !== e || ce !== t) && ((ot = null), sn(e, t));
  do
    try {
      ay();
      break;
    } catch (i) {
      wp(e, i);
    }
  while (!0);
  if ((sa(), (O = n), (so.current = r), b !== null)) throw Error(S(261));
  return (se = null), (ce = 0), ne;
}
function ay() {
  for (; b !== null; ) kp(b);
}
function uy() {
  for (; b !== null && !Nm(); ) kp(b);
}
function kp(e) {
  var t = Tp(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? Pp(e) : (b = t),
    (xa.current = null);
}
function Pp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ny(n, t)), n !== null)) {
        (n.flags &= 32767), (b = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (b = null);
        return;
      }
    } else if (((n = ty(n, t, Ae)), n !== null)) {
      b = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function qt(e, t, n) {
  var r = I,
    i = $e.transition;
  try {
    ($e.transition = null), (I = 1), cy(e, t, n, r);
  } finally {
    ($e.transition = i), (I = r);
  }
  return null;
}
function cy(e, t, n, r) {
  do Un();
  while (At !== null);
  if (O & 6) throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hm(e, o),
    e === se && ((b = se = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wi ||
      ((wi = !0),
      Ep(Hi, function () {
        return Un(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = $e.transition), ($e.transition = null);
    var s = I;
    I = 1;
    var l = O;
    (O |= 4),
      (xa.current = null),
      iy(e, n),
      yp(n, e),
      Dg(Zs),
      (Ki = !!Xs),
      (Zs = Xs = null),
      (e.current = n),
      oy(n),
      _m(),
      (O = l),
      (I = s),
      ($e.transition = o);
  } else e.current = n;
  if (
    (wi && ((wi = !1), (At = e), (ao = i)),
    (o = e.pendingLanes),
    o === 0 && (Ft = null),
    Im(n.stateNode),
    Ee(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (lo) throw ((lo = !1), (e = gl), (gl = null), e);
  return (
    ao & 1 && e.tag !== 0 && Un(),
    (o = e.pendingLanes),
    o & 1 ? (e === yl ? Cr++ : ((Cr = 0), (yl = e))) : (Cr = 0),
    Gt(),
    null
  );
}
function Un() {
  if (At !== null) {
    var e = nd(ao),
      t = $e.transition,
      n = I;
    try {
      if ((($e.transition = null), (I = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (ao = 0), O & 6)) throw Error(S(331));
        var i = O;
        for (O |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        m = c.return;
                      if ((hp(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (L = d);
                        break;
                      }
                      L = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var C = v.sibling;
                    (v.sibling = null), (v = C);
                  } while (v !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kr(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (L = g);
                break e;
              }
              L = o.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          s = L;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (L = h);
          else
            e: for (s = p; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Do(9, l);
                  }
                } catch (w) {
                  X(l, l.return, w);
                }
              if (l === s) {
                L = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (L = x);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((O = i), Gt(), nt && typeof nt.onPostCommitFiberRoot == "function")
        )
          try {
            nt.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), ($e.transition = t);
    }
  }
  return !1;
}
function oc(e, t, n) {
  (t = Qn(n, t)),
    (t = rp(e, t, 1)),
    (e = _t(e, t, 1)),
    (t = xe()),
    e !== null && (Zr(e, 1, t), Ee(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) oc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ft === null || !Ft.has(r)))
        ) {
          (e = Qn(n, e)),
            (e = ip(t, e, 1)),
            (t = _t(t, e, 1)),
            (e = xe()),
            t !== null && (Zr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ce & n) === n &&
      (ne === 4 || (ne === 3 && (ce & 130023424) === ce && 500 > q() - Sa)
        ? sn(e, 0)
        : (wa |= n)),
    Ee(e, t);
}
function Cp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ci), (ci <<= 1), !(ci & 130023424) && (ci = 4194304))
      : (t = 1));
  var n = xe();
  (e = gt(e, t)), e !== null && (Zr(e, t, n), Ee(e, n));
}
function dy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cp(e, n);
}
function py(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Cp(e, n);
}
var Tp;
Tp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), ey(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), W && t.flags & 1048576 && Ld(t, bi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ni(e, t), (e = t.pendingProps);
      var i = Wn(t, ge.current);
      Bn(t, n), (i = ha(null, t, r, e, i, n));
      var o = ma();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), Ji(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ua(t),
            (i.updater = Lo),
            (t.stateNode = i),
            (i._reactInternals = t),
            ol(t, r, e, n),
            (t = al(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && na(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ni(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = my(r)),
          (e = Ke(r, e)),
          i)
        ) {
          case 0:
            t = ll(null, t, r, e, n);
            break e;
          case 1:
            t = Xu(null, t, r, e, n);
            break e;
          case 11:
            t = Qu(null, t, r, e, n);
            break e;
          case 14:
            t = Yu(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        ll(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Xu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ap(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Rd(e, t),
          no(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Qn(Error(S(423)), t)), (t = Zu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Qn(Error(S(424)), t)), (t = Zu(e, t, r, n, i));
            break e;
          } else
            for (
              De = Nt(t.stateNode.containerInfo.firstChild),
                Me = t,
                W = !0,
                Ye = null,
                n = Fd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === i)) {
            t = yt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Od(t),
        e === null && nl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Js(r, i) ? (s = null) : o !== null && Js(r, o) && (t.flags |= 32),
        lp(e, t),
        ve(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && nl(t), null;
    case 13:
      return up(e, t, n);
    case 4:
      return (
        ca(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Qu(e, t, r, i, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(eo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Je(o.value, s)) {
            if (o.children === i.children && !Ce.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = ct(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      rl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(S(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  rl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ve(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Bn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ke(r, t.pendingProps)),
        (i = Ke(r.type, i)),
        Yu(e, t, r, i, n)
      );
    case 15:
      return op(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Ni(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Ji(t)) : (e = !1),
        Bn(t, n),
        Nd(t, r, i),
        ol(t, r, i, n),
        al(null, t, r, !0, e, n)
      );
    case 19:
      return cp(e, t, n);
    case 22:
      return sp(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Ep(e, t) {
  return qf(e, t);
}
function hy(e, t, n, r) {
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
function Ue(e, t, n, r) {
  return new hy(e, t, n, r);
}
function Ta(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function my(e) {
  if (typeof e == "function") return Ta(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hl)) return 11;
    if (e === Gl) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
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
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Oi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ta(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Sn:
        return ln(n.children, i, o, t);
      case Wl:
        (s = 8), (i |= 8);
        break;
      case As:
        return (
          (e = Ue(12, n, t, i | 2)), (e.elementType = As), (e.lanes = o), e
        );
      case Ds:
        return (e = Ue(13, n, t, i)), (e.elementType = Ds), (e.lanes = o), e;
      case Ms:
        return (e = Ue(19, n, t, i)), (e.elementType = Ms), (e.lanes = o), e;
      case _f:
        return Ro(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jf:
              s = 10;
              break e;
            case Nf:
              s = 9;
              break e;
            case Hl:
              s = 11;
              break e;
            case Gl:
              s = 14;
              break e;
            case Pt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function ln(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Ro(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = _f),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hs(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function ms(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gy(e, t, n, r, i) {
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
    (this.eventTimes = Xo(0)),
    (this.expirationTimes = Xo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ea(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new gy(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ue(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ua(o),
    e
  );
}
function yy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Vp(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Ed(e, n, t);
  }
  return t;
}
function Lp(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ea(n, r, !0, e, i, o, s, l, a)),
    (e.context = Vp(null)),
    (n = e.current),
    (r = xe()),
    (i = Ot(n)),
    (o = ct(r, i)),
    (o.callback = t ?? null),
    _t(n, o, i),
    (e.current.lanes = i),
    Zr(e, i, r),
    Ee(e, r),
    e
  );
}
function jo(e, t, n, r) {
  var i = t.current,
    o = xe(),
    s = Ot(i);
  return (
    (n = Vp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ct(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = _t(i, t, s)),
    e !== null && (Ze(e, i, s, o), Mi(e, i, s)),
    s
  );
}
function co(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Va(e, t) {
  sc(e, t), (e = e.alternate) && sc(e, t);
}
function vy() {
  return null;
}
var Ap =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function La(e) {
  this._internalRoot = e;
}
No.prototype.render = La.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  jo(e, t, null, null);
};
No.prototype.unmount = La.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      jo(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function No(e) {
  this._internalRoot = e;
}
No.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = od();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && ld(e);
  }
};
function Aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _o(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function lc() {}
function xy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = co(s);
        o.call(u);
      };
    }
    var s = Lp(t, r, e, 0, null, !1, !1, "", lc);
    return (
      (e._reactRootContainer = s),
      (e[mt] = s.current),
      Or(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = co(a);
      l.call(u);
    };
  }
  var a = Ea(e, 0, !1, null, null, !1, !1, "", lc);
  return (
    (e._reactRootContainer = a),
    (e[mt] = a.current),
    Or(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      jo(t, a, n, r);
    }),
    a
  );
}
function Fo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = co(s);
        l.call(a);
      };
    }
    jo(t, s, e, i);
  } else s = xy(n, t, e, i, r);
  return co(s);
}
rd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 &&
          (Yl(t, n | 1), Ee(t, q()), !(O & 6) && ((Yn = q() + 500), Gt()));
      }
      break;
    case 13:
      hn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = xe();
          Ze(r, e, 1, i);
        }
      }),
        Va(e, 1);
  }
};
Xl = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = xe();
      Ze(t, e, 134217728, n);
    }
    Va(e, 134217728);
  }
};
id = function (e) {
  if (e.tag === 13) {
    var t = Ot(e),
      n = gt(e, t);
    if (n !== null) {
      var r = xe();
      Ze(n, e, t, r);
    }
    Va(e, t);
  }
};
od = function () {
  return I;
};
sd = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Us = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ns(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Eo(r);
            if (!i) throw Error(S(90));
            Of(r), Ns(r, i);
          }
        }
      }
      break;
    case "textarea":
      zf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Fn(e, !!n.multiple, t, !1);
  }
};
Kf = ka;
Qf = hn;
var wy = { usingClientEntryPoint: !1, Events: [qr, Tn, Eo, Hf, Gf, ka] },
  ar = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Sy = {
    bundleType: ar.bundleType,
    version: ar.version,
    rendererPackageName: ar.rendererPackageName,
    rendererConfig: ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ar.findFiberByHostInstance || vy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Si.isDisabled && Si.supportsFiber)
    try {
      (ko = Si.inject(Sy)), (nt = Si);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wy;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Aa(t)) throw Error(S(200));
  return yy(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!Aa(e)) throw Error(S(299));
  var n = !1,
    r = "",
    i = Ap;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ea(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    Or(e.nodeType === 8 ? e.parentNode : e),
    new La(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Zf(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return hn(e);
};
Ne.hydrate = function (e, t, n) {
  if (!_o(t)) throw Error(S(200));
  return Fo(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!Aa(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Ap;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Lp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[mt] = t.current),
    Or(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new No(t);
};
Ne.render = function (e, t, n) {
  if (!_o(t)) throw Error(S(200));
  return Fo(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!_o(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (hn(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = ka;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_o(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Fo(e, t, n, !1, r);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function Dp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dp);
    } catch (e) {
      console.error(e);
    }
}
Dp(), (Lf.exports = Ne);
var ky = Lf.exports,
  ac = ky;
(Vs.createRoot = ac.createRoot), (Vs.hydrateRoot = ac.hydrateRoot);
const Py = ({ id: e }) => {
    const [t, n] = A.useState({});
    return e === null
      ? null
      : (A.useEffect(() => {
          fetch("./data.json")
            .then((r) => r.json())
            .then((r) => n(r.find((i) => i.id === e)))
            .catch((r) => console.error("Error fetching data:", r));
        }, [e]),
        E.jsxs(E.Fragment, {
          children: [
            E.jsxs("section", {
              className:
                "h-32 max-w-2xl bg-white dark:bg-darkBg m-auto mt-5 pr-6 rounded-lg shadow-lg flex items-center justify-between overflow-hidden relative max-sm:h-36 max-sm:p-6 max-sm:pb-0.5 max-sm:overflow-visible max-[425px]:flex-col max-[475px]:h-fit max-[475px]:pt-12",
              children: [
                E.jsx("div", {
                  className:
                    "h-full w-32 flex items-center justify-center object-cover object-center max-sm:absolute max-sm:h-20 max-sm:w-20 max-sm:rounded-lg max-sm:-top-10 max-sm:left-1/2 max-sm:-translate-x-1/2",
                  style: { backgroundColor: t.background },
                  children: E.jsx("img", {
                    src: t.logo,
                    alt: `${t.company} Logo`,
                    className: "max-w-full scale-[2] max-sm:scale-150",
                  }),
                }),
                E.jsxs("div", {
                  className:
                    "flex flex-col items-center justify-center max-sm:items-start",
                  children: [
                    E.jsx(Dt, {
                      title: t.company,
                      styles:
                        "text-[1.35rem] font-bold text-primary dark:text-white",
                    }),
                    E.jsx(Dt, {
                      title: t.company + ".com",
                      styles: "text-lightGrey text-lg font-medium lowercase",
                    }),
                  ],
                }),
                E.jsx(wl, {
                  desc: "Company Site",
                  px: "px-2.5",
                  bg: "bg-lightGrey",
                  href: t.website,
                }),
              ],
            }),
            E.jsxs("section", {
              className:
                "max-w-2xl bg-white dark:bg-darkBg m-auto mt-6 px-8 py-10 rounded-lg shadow-lg flex flex-col justify-center gap-6",
              children: [
                E.jsxs("div", {
                  className:
                    "flex items-center justify-between gap-3 max-sm:flex-col max-sm:text-center",
                  children: [
                    E.jsxs("div", {
                      className: "flex flex-col max-sm:items-center",
                      children: [
                        E.jsx(Xh, { posted: t.posted, contract: t.contract }),
                        E.jsx(Dt, {
                          title: t.position,
                          styles:
                            "text-[1.75rem] leading-[1.4] font-bold text-primary dark:text-white",
                        }),
                        E.jsx(Dt, {
                          title: t.location,
                          styles: "text-main text-xl font-bold",
                        }),
                      ],
                    }),
                    E.jsx(wl, { desc: "Apply Now", px: "px-6", href: t.apply }),
                  ],
                }),
                E.jsx(Nl, { desc: t.description }),
                E.jsx(gf, {
                  title: "Requirements:",
                  desc: t.requirements ? t.requirements.content : "",
                  list: t.requirements ? t.requirements.items : [],
                  listStyle: "list-disc",
                }),
                E.jsx(gf, {
                  title: "What you will do:",
                  desc: t.role ? t.role.content : "",
                  list: t.role ? t.role.items : [],
                  listStyle: "list-decimal",
                }),
              ],
            }),
          ],
        }));
  },
  wl = ({ desc: e, px: t, bg: n = "bg-main", href: r, type: i = "link" }) =>
    E.jsx("button", {
      className: `h-16 w-fit p-1.5 _focus-hover relative ${
        i === "search" &&
        "max-[812px]:absolute max-[812px]:h-16 max-[812px]:left-1/2 max-[812px]:-translate-x-1/2 max-[812px]:-bottom-1/2 max-[812px]:translate-y-1/2 max-[692px]:left-[80%] max-[692px]:-translate-x-[80%] max-[476px]:left-1/2 max-[476px]:-translate-x-1/2 max-[476px]:-bottom-[20%]"
      }`,
      children:
        i === "search"
          ? E.jsx("span", {
              className: `${t} py-3 rounded-md ${n} text-white text-lg font-semibold capitalize`,
              children: e,
            })
          : E.jsx("a", {
              href: r,
              target: "_blank",
              className: `${t} py-3 rounded-md ${n} text-white text-lg font-semibold capitalize outline-none`,
              children: e,
            }),
    }),
  Mp = A.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Oo = A.createContext({}),
  Da = A.createContext(null),
  Io = typeof document < "u",
  Cy = Io ? A.useLayoutEffect : A.useEffect,
  Rp = A.createContext({ strict: !1 }),
  Ma = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  Ty = "framerAppearId",
  jp = "data-" + Ma(Ty),
  Np = { skipAnimations: !1, useManualTiming: !1 };
class uc {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function Ey(e) {
  let t = new uc(),
    n = new uc(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            s.has(c) && (l.schedule(c), e()), c(a);
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const ki = ["prepare", "read", "update", "preRender", "render", "postRender"],
  Vy = 40;
function _p(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = ki.reduce((f, d) => ((f[d] = Ey(() => (n = !0))), f), {}),
    s = (f) => {
      o[f].process(i);
    },
    l = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Vy), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        ki.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: ki.reduce((f, d) => {
      const m = o[d];
      return (f[d] = (y, v = !1, C = !1) => (n || a(), m.schedule(y, v, C))), f;
    }, {}),
    cancel: (f) => ki.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
const { schedule: Ra, cancel: Zx } = _p(queueMicrotask, !1);
function Ly(e, t, n, r) {
  const { visualElement: i } = A.useContext(Oo),
    o = A.useContext(Rp),
    s = A.useContext(Da),
    l = A.useContext(Mp).reducedMotion,
    a = A.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  A.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = A.useRef(!!(n[jp] && !window.HandoffComplete));
  return (
    Cy(() => {
      u &&
        (Ra.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    A.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function Rn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Ay(e, t, n) {
  return A.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Rn(n) && (n.current = r));
    },
    [t]
  );
}
function Kr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function zo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const ja = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Na = ["initial", ...ja];
function Bo(e) {
  return zo(e.animate) || Na.some((t) => Kr(e[t]));
}
function Fp(e) {
  return !!(Bo(e) || e.variants);
}
function Dy(e, t) {
  if (Bo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Kr(n) ? n : void 0,
      animate: Kr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function My(e) {
  const { initial: t, animate: n } = Dy(e, A.useContext(Oo));
  return A.useMemo(() => ({ initial: t, animate: n }), [cc(t), cc(n)]);
}
function cc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const fc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Qr = {};
for (const e in fc) Qr[e] = { isEnabled: (t) => fc[e].some((n) => !!t[n]) };
function Ry(e) {
  for (const t in e) Qr[t] = { ...Qr[t], ...e[t] };
}
const Op = A.createContext({}),
  Ip = A.createContext({}),
  jy = Symbol.for("motionComponentSymbol");
function Ny({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Ry(e);
  function o(l, a) {
    let u;
    const c = { ...A.useContext(Mp), ...l, layoutId: _y(l) },
      { isStatic: f } = c,
      d = My(l),
      m = r(l, f);
    if (!f && Io) {
      d.visualElement = Ly(i, m, c, t);
      const y = A.useContext(Ip),
        v = A.useContext(Rp).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, y));
    }
    return A.createElement(
      Oo.Provider,
      { value: d },
      u && d.visualElement
        ? A.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, Ay(m, d.visualElement, a), m, f, d.visualElement)
    );
  }
  const s = A.forwardRef(o);
  return (s[jy] = i), s;
}
function _y({ layoutId: e }) {
  const t = A.useContext(Op).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Fy(e) {
  function t(r, i = {}) {
    return Ny(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const Oy = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function _a(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Oy.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const fo = {};
function Iy(e) {
  Object.assign(fo, e);
}
const ei = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  yn = new Set(ei);
function zp(e, { layout: t, layoutId: n }) {
  return (
    yn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!fo[e] || e === "opacity"))
  );
}
const Ve = (e) => !!(e && e.getVelocity),
  zy = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  By = ei.length;
function Uy(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < By; s++) {
    const l = ei[s];
    if (e[l] !== void 0) {
      const a = zy[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const Bp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Up = Bp("--"),
  $y = Bp("var(--"),
  po = (e) => $y(e) && Wy.test(e),
  Wy =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,
  Hy = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Ut = (e, t, n) => (n > t ? t : n < e ? e : n),
  er = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Tr = { ...er, transform: (e) => Ut(0, 1, e) },
  Pi = { ...er, default: 1 },
  Er = (e) => Math.round(e * 1e5) / 1e5,
  Fa = /(-)?([\d]*\.?[\d])+/g,
  Gy =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Ky =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ti(e) {
  return typeof e == "string";
}
const ni = (e) => ({
    test: (t) => ti(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  kt = ni("deg"),
  it = ni("%"),
  D = ni("px"),
  Qy = ni("vh"),
  Yy = ni("vw"),
  dc = {
    ...it,
    parse: (e) => it.parse(e) / 100,
    transform: (e) => it.transform(e * 100),
  },
  pc = { ...er, transform: Math.round },
  $p = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: kt,
    rotateX: kt,
    rotateY: kt,
    rotateZ: kt,
    scale: Pi,
    scaleX: Pi,
    scaleY: Pi,
    scaleZ: Pi,
    skew: kt,
    skewX: kt,
    skewY: kt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Tr,
    originX: dc,
    originY: dc,
    originZ: D,
    zIndex: pc,
    fillOpacity: Tr,
    strokeOpacity: Tr,
    numOctaves: pc,
  };
function Oa(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Up(f)) {
      o[f] = d;
      continue;
    }
    const m = $p[f],
      y = Hy(d, m);
    if (yn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (m.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = Uy(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = l;
    i.transformOrigin = `${f} ${d} ${m}`;
  }
}
const Ia = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Wp(e, t, n) {
  for (const r in t) !Ve(t[r]) && !zp(r, n) && (e[r] = t[r]);
}
function Xy({ transformTemplate: e }, t, n) {
  return A.useMemo(() => {
    const r = Ia();
    return (
      Oa(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function Zy(e, t, n) {
  const r = e.style || {},
    i = {};
  return Wp(i, r, e), Object.assign(i, Xy(e, t, n)), i;
}
function Jy(e, t, n) {
  const r = {},
    i = Zy(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const qy = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ho(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    qy.has(e)
  );
}
let Hp = (e) => !ho(e);
function by(e) {
  e && (Hp = (t) => (t.startsWith("on") ? !ho(t) : e(t)));
}
try {
  by(require("@emotion/is-prop-valid").default);
} catch {}
function e0(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Hp(i) ||
        (n === !0 && ho(i)) ||
        (!t && !ho(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function hc(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function t0(e, t, n) {
  const r = hc(t, e.x, e.width),
    i = hc(n, e.y, e.height);
  return `${r} ${i}`;
}
const n0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  r0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function i0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? n0 : r0;
  e[o.offset] = D.transform(-r);
  const s = D.transform(t),
    l = D.transform(n);
  e[o.array] = `${s} ${l}`;
}
function za(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((Oa(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: y, dimensions: v } = e;
  m.transform && (v && (y.transform = m.transform), delete m.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = t0(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && i0(m, s, l, a, !1);
}
const Gp = () => ({ ...Ia(), attrs: {} }),
  Ba = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function o0(e, t, n, r) {
  const i = A.useMemo(() => {
    const o = Gp();
    return (
      za(o, t, { enableHardwareAcceleration: !1 }, Ba(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Wp(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function s0(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (_a(n) ? o0 : Jy)(r, o, s, n),
      c = { ...e0(r, typeof n == "string", e), ...a, ref: i },
      { children: f } = r,
      d = A.useMemo(() => (Ve(f) ? f.get() : f), [f]);
    return A.createElement(n, { ...c, children: d });
  };
}
function Kp(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Qp = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Yp(e, t, n, r) {
  Kp(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Qp.has(i) ? i : Ma(i), t.attrs[i]);
}
function Ua(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Ve(n[i]) || (t.style && Ve(t.style[i])) || zp(i, e)) && (r[i] = n[i]);
  return r;
}
function Xp(e, t) {
  const n = Ua(e, t);
  for (const r in e)
    if (Ve(e[r]) || Ve(t[r])) {
      const i =
        ei.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function $a(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function l0(e) {
  const t = A.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const mo = (e) => Array.isArray(e),
  a0 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  u0 = (e) => (mo(e) ? e[e.length - 1] || 0 : e);
function Ii(e) {
  const t = Ve(e) ? e.get() : e;
  return a0(t) ? t.toValue() : t;
}
function c0(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: f0(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const Zp = (e) => (t, n) => {
  const r = A.useContext(Oo),
    i = A.useContext(Da),
    o = () => c0(e, t, r, i);
  return n ? o() : l0(o);
};
function f0(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Ii(o[d]);
  let { initial: s, animate: l } = e;
  const a = Bo(e),
    u = Fp(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !zo(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const y = $a(e, m);
        if (!y) return;
        const { transitionEnd: v, transition: C, ...g } = y;
        for (const p in g) {
          let h = g[p];
          if (Array.isArray(h)) {
            const x = c ? h.length - 1 : 0;
            h = h[x];
          }
          h !== null && (i[p] = h);
        }
        for (const p in v) i[p] = v[p];
      }),
    i
  );
}
const ee = (e) => e,
  {
    schedule: K,
    cancel: vt,
    state: ue,
    steps: gs,
  } = _p(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ee, !0),
  d0 = {
    useVisualState: Zp({
      scrapeMotionValuesFromProps: Xp,
      createRenderState: Gp,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        K.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          K.render(() => {
            za(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Ba(t.tagName),
              e.transformTemplate
            ),
              Yp(t, n);
          });
      },
    }),
  },
  p0 = {
    useVisualState: Zp({
      scrapeMotionValuesFromProps: Ua,
      createRenderState: Ia,
    }),
  };
function h0(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(_a(e) ? d0 : p0),
    preloadedFeatures: n,
    useRender: s0(t),
    createVisualElement: r,
    Component: e,
  };
}
function ut(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Jp = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Uo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const m0 = (e) => (t) => Jp(t) && e(t, Uo(t));
function ft(e, t, n, r) {
  return ut(e, t, m0(n), r);
}
const g0 = (e, t) => (n) => t(e(n)),
  dt = (...e) => e.reduce(g0);
function qp(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const mc = qp("dragHorizontal"),
  gc = qp("dragVertical");
function bp(e) {
  let t = !1;
  if (e === "y") t = gc();
  else if (e === "x") t = mc();
  else {
    const n = mc(),
      r = gc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function eh() {
  const e = bp(!0);
  return e ? (e(), !1) : !0;
}
class Kt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function yc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.pointerType === "touch" || eh()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && K.update(() => l[r](o, s));
    };
  return ft(e.current, n, i, { passive: !e.getProps()[r] });
}
class y0 extends Kt {
  mount() {
    this.unmount = dt(yc(this.node, !0), yc(this.node, !1));
  }
  unmount() {}
}
class v0 extends Kt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = dt(
      ut(this.node.current, "focus", () => this.onFocus()),
      ut(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const th = (e, t) => (t ? (e === t ? !0 : th(e, t.parentElement)) : !1);
function ys(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Uo(n));
}
class x0 extends Kt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ee),
      (this.removeEndListeners = ee),
      (this.removeAccessibleListeners = ee),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = ft(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: f,
              } = this.node.getProps();
              K.update(() => {
                !f && !th(this.node.current, l.target)
                  ? c && c(l, a)
                  : u && u(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = ft(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = dt(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                ys("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && K.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ut(this.node.current, "keyup", s)),
              ys("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = ut(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && ys("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = ut(this.node.current, "blur", r);
        this.removeAccessibleListeners = dt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && K.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !eh()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && K.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = ft(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = ut(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = dt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Sl = new WeakMap(),
  vs = new WeakMap(),
  w0 = (e) => {
    const t = Sl.get(e.target);
    t && t(e);
  },
  S0 = (e) => {
    e.forEach(w0);
  };
function k0({ root: e, ...t }) {
  const n = e || document;
  vs.has(n) || vs.set(n, {});
  const r = vs.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(S0, { root: e, ...t })), r[i];
}
function P0(e, t, n) {
  const r = k0(t);
  return (
    Sl.set(e, n),
    r.observe(e),
    () => {
      Sl.delete(e), r.unobserve(e);
    }
  );
}
const C0 = { some: 0, all: 1 };
class T0 extends Kt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : C0[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return P0(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(E0(t, n)) && this.startObserver();
  }
  unmount() {}
}
function E0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const V0 = {
  inView: { Feature: T0 },
  tap: { Feature: x0 },
  focus: { Feature: v0 },
  hover: { Feature: y0 },
};
function nh(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function L0(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function A0(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function $o(e, t, n) {
  const r = e.getProps();
  return $a(r, t, n !== void 0 ? n : r.custom, L0(e), A0(e));
}
let Wa = ee;
const an = (e) => e * 1e3,
  pt = (e) => e / 1e3,
  D0 = { current: !1 },
  rh = (e) => Array.isArray(e) && typeof e[0] == "number";
function ih(e) {
  return !!(
    !e ||
    (typeof e == "string" && oh[e]) ||
    rh(e) ||
    (Array.isArray(e) && e.every(ih))
  );
}
const mr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  oh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: mr([0, 0.65, 0.55, 1]),
    circOut: mr([0.55, 0, 1, 0.45]),
    backIn: mr([0.31, 0.01, 0.66, -0.59]),
    backOut: mr([0.33, 1.53, 0.69, 0.99]),
  };
function sh(e) {
  if (e) return rh(e) ? mr(e) : Array.isArray(e) ? e.map(sh) : oh[e];
}
function M0(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = sh(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function R0(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const lh = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  j0 = 1e-7,
  N0 = 12;
function _0(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = lh(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > j0 && ++l < N0);
  return s;
}
function ri(e, t, n, r) {
  if (e === t && n === r) return ee;
  const i = (o) => _0(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : lh(i(o), t, r));
}
const F0 = ri(0.42, 0, 1, 1),
  O0 = ri(0, 0, 0.58, 1),
  ah = ri(0.42, 0, 0.58, 1),
  I0 = (e) => Array.isArray(e) && typeof e[0] != "number",
  uh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  ch = (e) => (t) => 1 - e(1 - t),
  Ha = (e) => 1 - Math.sin(Math.acos(e)),
  fh = ch(Ha),
  z0 = uh(Ha),
  dh = ri(0.33, 1.53, 0.69, 0.99),
  Ga = ch(dh),
  B0 = uh(Ga),
  U0 = (e) =>
    (e *= 2) < 1 ? 0.5 * Ga(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  $0 = {
    linear: ee,
    easeIn: F0,
    easeInOut: ah,
    easeOut: O0,
    circIn: Ha,
    circInOut: z0,
    circOut: fh,
    backIn: Ga,
    backInOut: B0,
    backOut: dh,
    anticipate: U0,
  },
  vc = (e) => {
    if (Array.isArray(e)) {
      Wa(e.length === 4);
      const [t, n, r, i] = e;
      return ri(t, n, r, i);
    } else if (typeof e == "string") return $0[e];
    return e;
  },
  Yr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  G = (e, t, n) => e + (t - e) * n;
function xs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function W0({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = xs(a, l, e + 1 / 3)), (o = xs(a, l, e)), (s = xs(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Ka = (e, t) => (n) =>
    !!(
      (ti(n) && Ky.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ph = (e, t, n) => (r) => {
    if (!ti(r)) return r;
    const [i, o, s, l] = r.match(Fa);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  H0 = (e) => Ut(0, 255, e),
  ws = { ...er, transform: (e) => Math.round(H0(e)) },
  on = {
    test: Ka("rgb", "red"),
    parse: ph("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      ws.transform(e) +
      ", " +
      ws.transform(t) +
      ", " +
      ws.transform(n) +
      ", " +
      Er(Tr.transform(r)) +
      ")",
  };
function G0(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const kl = { test: Ka("#"), parse: G0, transform: on.transform },
  jn = {
    test: Ka("hsl", "hue"),
    parse: ph("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      it.transform(Er(t)) +
      ", " +
      it.transform(Er(n)) +
      ", " +
      Er(Tr.transform(r)) +
      ")",
  },
  Ss = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  K0 = [kl, on, jn],
  Q0 = (e) => K0.find((t) => t.test(e));
function xc(e) {
  const t = Q0(e);
  let n = t.parse(e);
  return t === jn && (n = W0(n)), n;
}
const wc = (e, t) => {
    const n = xc(e),
      r = xc(t),
      i = { ...n };
    return (o) => (
      (i.red = Ss(n.red, r.red, o)),
      (i.green = Ss(n.green, r.green, o)),
      (i.blue = Ss(n.blue, r.blue, o)),
      (i.alpha = G(n.alpha, r.alpha, o)),
      on.transform(i)
    );
  },
  he = {
    test: (e) => on.test(e) || kl.test(e) || jn.test(e),
    parse: (e) =>
      on.test(e) ? on.parse(e) : jn.test(e) ? jn.parse(e) : kl.parse(e),
    transform: (e) =>
      ti(e) ? e : e.hasOwnProperty("red") ? on.transform(e) : jn.transform(e),
  };
function Y0(e) {
  var t, n;
  return (
    isNaN(e) &&
    ti(e) &&
    (((t = e.match(Fa)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Gy)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const hh = "number",
  mh = "color",
  X0 = "var",
  Z0 = "var(",
  Sc = "${}",
  kc =
    /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;
function go(e) {
  const t = e.toString(),
    n = t.match(kc) || [],
    r = [],
    i = { color: [], number: [], var: [] },
    o = [];
  for (let a = 0; a < n.length; a++) {
    const u = n[a];
    he.test(u)
      ? (i.color.push(a), o.push(mh), r.push(he.parse(u)))
      : u.startsWith(Z0)
      ? (i.var.push(a), o.push(X0), r.push(u))
      : (i.number.push(a), o.push(hh), r.push(parseFloat(u)));
  }
  const l = t.replace(kc, Sc).split(Sc);
  return { values: r, split: l, indexes: i, types: o };
}
function gh(e) {
  return go(e).values;
}
function yh(e) {
  const { split: t, types: n } = go(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const l = n[s];
        l === hh
          ? (o += Er(i[s]))
          : l === mh
          ? (o += he.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const J0 = (e) => (typeof e == "number" ? 0 : e);
function q0(e) {
  const t = gh(e);
  return yh(e)(t.map(J0));
}
const $t = {
  test: Y0,
  parse: gh,
  createTransformer: yh,
  getAnimatableNone: q0,
};
function Pl(e, t) {
  return (n) => (n > 0 ? t : e);
}
function b0(e, t) {
  return (n) => G(e, t, n);
}
function Qa(e) {
  return typeof e == "number"
    ? b0
    : typeof e == "string"
    ? po(e)
      ? Pl
      : he.test(e)
      ? wc
      : nv
    : Array.isArray(e)
    ? vh
    : typeof e == "object"
    ? he.test(e)
      ? wc
      : ev
    : Pl;
}
function vh(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Qa(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function ev(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Qa(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function tv(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][i[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[o] = a), i[s]++;
  }
  return r;
}
const nv = (e, t) => {
  const n = $t.createTransformer(t),
    r = go(e),
    i = go(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? dt(vh(tv(r, i), i.values), n)
    : Pl(e, t);
};
function xh(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? G(e, t, n)
    : Qa(e)(e, t);
}
function rv(e, t, n) {
  const r = [],
    i = n || xh,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || ee : t;
      l = dt(a, l);
    }
    r.push(l);
  }
  return r;
}
function iv(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Wa(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = rv(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Yr(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Ut(e[0], e[o - 1], u)) : a;
}
function ov(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Yr(0, t, r);
    e.push(G(n, 1, i));
  }
}
function sv(e) {
  const t = [0];
  return ov(t, e.length - 1), t;
}
function lv(e, t) {
  return e.map((n) => n * t);
}
function av(e, t) {
  return e.map(() => t || ah).splice(0, e.length - 1);
}
function yo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = I0(r) ? r.map(vc) : vc(r),
    o = { done: !1, value: t[0] },
    s = lv(n && n.length === t.length ? n : sv(t), e),
    l = iv(s, t, { ease: Array.isArray(i) ? i : av(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function wh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const uv = 5;
function Sh(e, t, n) {
  const r = Math.max(t - uv, 0);
  return wh(n - e(r), t - r);
}
const ks = 0.001,
  cv = 0.01,
  fv = 10,
  dv = 0.05,
  pv = 1;
function hv({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = Ut(dv, pv, s)),
    (e = Ut(cv, fv, pt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            m = Cl(u, s),
            y = Math.exp(-f);
          return ks - (d / m) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Cl(Math.pow(u, 2), s);
          return ((-i(u) + ks > 0 ? -1 : 1) * ((d - m) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -ks + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = gv(i, o, l);
  if (((e = an(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const mv = 12;
function gv(e, t, n) {
  let r = n;
  for (let i = 1; i < mv; i++) r = r - e(r) / t(r);
  return r;
}
function Cl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const yv = ["duration", "bounce"],
  vv = ["stiffness", "damping", "mass"];
function Pc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function xv(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Pc(e, vv) && Pc(e, yv)) {
    const n = hv(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function kh({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = xv({ ...r, velocity: -pt(r.velocity || 0) }),
    m = f || 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    C = pt(Math.sqrt(l / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const h = Cl(C, y);
    p = (x) => {
      const w = Math.exp(-y * C * x);
      return (
        o - w * (((m + y * C * v) / h) * Math.sin(h * x) + v * Math.cos(h * x))
      );
    };
  } else if (y === 1) p = (h) => o - Math.exp(-C * h) * (v + (m + C * v) * h);
  else {
    const h = C * Math.sqrt(y * y - 1);
    p = (x) => {
      const w = Math.exp(-y * C * x),
        T = Math.min(h * x, 300);
      return (
        o - (w * ((m + y * C * v) * Math.sinh(T) + h * v * Math.cosh(T))) / h
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (h) => {
      const x = p(h);
      if (d) s.done = h >= c;
      else {
        let w = m;
        h !== 0 && (y < 1 ? (w = Sh(p, h, x)) : (w = 0));
        const T = Math.abs(w) <= n,
          P = Math.abs(o - x) <= t;
        s.done = T && P;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
function Cc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (k) => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    y = (k) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - k) < Math.abs(a - k)
        ? l
        : a;
  let v = n * t;
  const C = f + v,
    g = s === void 0 ? C : s(C);
  g !== C && (v = g - f);
  const p = (k) => -v * Math.exp(-k / r),
    h = (k) => g + p(k),
    x = (k) => {
      const N = p(k),
        R = h(k);
      (d.done = Math.abs(N) <= u), (d.value = d.done ? g : R);
    };
  let w, T;
  const P = (k) => {
    m(d.value) &&
      ((w = k),
      (T = kh({
        keyframes: [d.value, y(d.value)],
        velocity: Sh(h, k, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let N = !1;
        return (
          !T && w === void 0 && ((N = !0), x(k), P(k)),
          w !== void 0 && k > w ? T.next(k - w) : (!N && x(k), d)
        );
      },
    }
  );
}
let zi;
function wv() {
  zi = void 0;
}
const un = {
    now: () => (
      zi === void 0 &&
        un.set(
          ue.isProcessing || Np.useManualTiming
            ? ue.timestamp
            : performance.now()
        ),
      zi
    ),
    set: (e) => {
      (zi = e), queueMicrotask(wv);
    },
  },
  Sv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => K.update(t, !0),
      stop: () => vt(t),
      now: () => (ue.isProcessing ? ue.timestamp : un.now()),
    };
  },
  Tc = 2e4;
function Ec(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Tc; ) (t += n), (r = e.next(t));
  return t >= Tc ? 1 / 0 : t;
}
const kv = { decay: Cc, inertia: Cc, tween: yo, keyframes: yo, spring: kh },
  Pv = (e) => e / 100;
function vo({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = Sv,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let m = 1,
    y = !1,
    v,
    C;
  const g = () => {
    C = new Promise((j) => {
      v = j;
    });
  };
  g();
  let p;
  const h = kv[i] || yo;
  let x;
  h !== yo &&
    typeof r[0] != "number" &&
    ((x = dt(Pv, xh(r[0], r[1]))), (r = [0, 100]));
  const w = h({ ...d, keyframes: r });
  let T;
  l === "mirror" &&
    (T = h({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let P = "idle",
    k = null,
    N = null,
    R = null;
  w.calculatedDuration === null && o && (w.calculatedDuration = Ec(w));
  const { calculatedDuration: re } = w;
  let le = 1 / 0,
    ye = 1 / 0;
  re !== null && ((le = re + s), (ye = le * (o + 1) - s));
  let ie = 0;
  const wt = (j) => {
      if (N === null) return;
      m > 0 && (N = Math.min(N, j)),
        m < 0 && (N = Math.min(j - ye / m, N)),
        k !== null ? (ie = k) : (ie = Math.round(j - N) * m);
      const $ = ie - t * (m >= 0 ? 1 : -1),
        Qt = m >= 0 ? $ < 0 : $ > ye;
      (ie = Math.max($, 0)), P === "finished" && k === null && (ie = ye);
      let qe = ie,
        vn = w;
      if (o) {
        const Wo = Math.min(ie, ye) / le;
        let ii = Math.floor(Wo),
          Xt = Wo % 1;
        !Xt && Wo >= 1 && (Xt = 1),
          Xt === 1 && ii--,
          (ii = Math.min(ii, o + 1)),
          !!(ii % 2) &&
            (l === "reverse"
              ? ((Xt = 1 - Xt), s && (Xt -= s / le))
              : l === "mirror" && (vn = T)),
          (qe = Ut(0, 1, Xt) * le);
      }
      const Le = Qt ? { done: !1, value: r[0] } : vn.next(qe);
      x && (Le.value = x(Le.value));
      let { done: Yt } = Le;
      !Qt && re !== null && (Yt = m >= 0 ? ie >= ye : ie <= 0);
      const Zh = k === null && (P === "finished" || (P === "running" && Yt));
      return f && f(Le.value), Zh && V(), Le;
    },
    Z = () => {
      p && p.stop(), (p = void 0);
    },
    Fe = () => {
      (P = "idle"), Z(), v(), g(), (N = R = null);
    },
    V = () => {
      (P = "finished"), c && c(), Z(), v();
    },
    M = () => {
      if (y) return;
      p || (p = n(wt));
      const j = p.now();
      a && a(),
        k !== null ? (N = j - k) : (!N || P === "finished") && (N = j),
        P === "finished" && g(),
        (R = N),
        (k = null),
        (P = "running"),
        p.start();
    };
  e && M();
  const _ = {
    then(j, $) {
      return C.then(j, $);
    },
    get time() {
      return pt(ie);
    },
    set time(j) {
      (j = an(j)),
        (ie = j),
        k !== null || !p || m === 0 ? (k = j) : (N = p.now() - j / m);
    },
    get duration() {
      const j = w.calculatedDuration === null ? Ec(w) : w.calculatedDuration;
      return pt(j);
    },
    get speed() {
      return m;
    },
    set speed(j) {
      j === m || !p || ((m = j), (_.time = pt(ie)));
    },
    get state() {
      return P;
    },
    play: M,
    pause: () => {
      (P = "paused"), (k = ie);
    },
    stop: () => {
      (y = !0), P !== "idle" && ((P = "idle"), u && u(), Fe());
    },
    cancel: () => {
      R !== null && wt(R), Fe();
    },
    complete: () => {
      P = "finished";
    },
    sample: (j) => ((N = 0), wt(j)),
  };
  return _;
}
function Cv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Tv = Cv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ev = new Set(["opacity", "clipPath", "filter", "transform"]),
  Ci = 10,
  Vv = 2e4,
  Lv = (e, t) => t.type === "spring" || e === "backgroundColor" || !ih(t.ease);
function Av(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      Tv() &&
      Ev.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a,
    u = !1;
  const c = () => {
    a = new Promise((h) => {
      l = h;
    });
  };
  c();
  let { keyframes: f, duration: d = 300, ease: m, times: y } = i;
  if (Lv(t, i)) {
    const h = vo({ ...i, repeat: 0, delay: 0 });
    let x = { done: !1, value: f[0] };
    const w = [];
    let T = 0;
    for (; !x.done && T < Vv; ) (x = h.sample(T)), w.push(x.value), (T += Ci);
    (y = void 0), (f = w), (d = T - Ci), (m = "linear");
  }
  const v = M0(e.owner.current, t, f, { ...i, duration: d, ease: m, times: y }),
    C = () => {
      (u = !1), v.cancel();
    },
    g = () => {
      (u = !0), K.update(C), l(), c();
    };
  return (
    (v.onfinish = () => {
      u || (e.set(R0(f, i)), r && r(), g());
    }),
    {
      then(h, x) {
        return a.then(h, x);
      },
      attachTimeline(h) {
        return (v.timeline = h), (v.onfinish = null), ee;
      },
      get time() {
        return pt(v.currentTime || 0);
      },
      set time(h) {
        v.currentTime = an(h);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(h) {
        v.playbackRate = h;
      },
      get duration() {
        return pt(d);
      },
      play: () => {
        s || (v.play(), vt(C));
      },
      pause: () => v.pause(),
      stop: () => {
        if (((s = !0), v.playState === "idle")) return;
        const { currentTime: h } = v;
        if (h) {
          const x = vo({ ...i, autoplay: !1 });
          e.setWithVelocity(x.sample(h - Ci).value, x.sample(h).value, Ci);
        }
        g();
      },
      complete: () => {
        u || v.finish();
      },
      cancel: g,
    }
  );
}
function Dv({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: ee,
      pause: ee,
      stop: ee,
      then: (o) => (o(), Promise.resolve()),
      cancel: ee,
      complete: ee,
    }
  );
  return t
    ? vo({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const Mv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Rv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  jv = { type: "keyframes", duration: 0.8 },
  Nv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  _v = (e, { keyframes: t }) =>
    t.length > 2
      ? jv
      : yn.has(e)
      ? e.startsWith("scale")
        ? Rv(t[1])
        : Mv
      : Nv,
  Tl = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            ($t.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Fv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ov(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Fa) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Fv.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Iv = /([a-z-]*)\(.*?\)/g,
  El = {
    ...$t,
    getAnimatableNone: (e) => {
      const t = e.match(Iv);
      return t ? t.map(Ov).join(" ") : e;
    },
  },
  zv = {
    ...$p,
    color: he,
    backgroundColor: he,
    outlineColor: he,
    fill: he,
    stroke: he,
    borderColor: he,
    borderTopColor: he,
    borderRightColor: he,
    borderBottomColor: he,
    borderLeftColor: he,
    filter: El,
    WebkitFilter: El,
  },
  Ya = (e) => zv[e];
function Ph(e, t) {
  let n = Ya(e);
  return (
    n !== El && (n = $t), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Ch = (e) => /^0[^.\s]+$/.test(e);
function Bv(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Ch(e);
}
function Uv(e, t, n, r) {
  const i = Tl(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      Bv(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = Ph(t, l);
    }
  return o;
}
function $v({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Xa(e, t) {
  return e[t] || e.default || e;
}
const Za =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Xa(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - an(s);
    const a = Uv(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = Tl(e, u),
      d = Tl(e, c);
    let m = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      ($v(o) || (m = { ...m, ..._v(e, m) }),
      m.duration && (m.duration = an(m.duration)),
      m.repeatDelay && (m.repeatDelay = an(m.repeatDelay)),
      !f || !d || D0.current || o.type === !1 || Np.skipAnimations)
    )
      return Dv(m);
    if (
      !r.isHandoff &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = Av(t, e, m);
      if (y) return y;
    }
    return vo(m);
  };
function xo(e) {
  return !!(Ve(e) && e.add);
}
const Th = (e) => /^\-?\d*\.?\d+$/.test(e);
function Ja(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function qa(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ba {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ja(this.subscriptions, t), () => qa(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Vc = 30,
  Wv = (e) => !isNaN(parseFloat(e));
class Hv {
  constructor(t, n = {}) {
    (this.version = "11.0.5"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = un.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = Wv(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = un.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ba());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            K.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = un.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Vc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Vc);
    return wh(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Xn(e, t) {
  return new Hv(e, t);
}
const Eh = (e) => (t) => t.test(e),
  Gv = { test: (e) => e === "auto", parse: (e) => e },
  Vh = [er, D, it, kt, Yy, Qy, Gv],
  ur = (e) => Vh.find(Eh(e)),
  Kv = [...Vh, he, $t],
  Qv = (e) => Kv.find(Eh(e));
function Yv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xn(n));
}
function Xv(e, t) {
  const n = $o(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = u0(o[s]);
    Yv(e, s, l);
  }
}
function Zv(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && (Th(c) || Ch(c))
            ? (c = parseFloat(c))
            : !Qv(c) && $t.test(u) && (c = Ph(a, u)),
          e.addValue(a, Xn(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function Jv(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function qv(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = Jv(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function bv({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function e1(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function Lh(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      m = l[f];
    if (!d || m === void 0 || (c && bv(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...Xa(o || {}, f) };
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[jp];
      if (g) {
        const p = window.HandoffAppearAnimations(g, f, d, K);
        p !== null && ((y.elapsed = p), (y.isHandoff = !0));
      }
    }
    let v = !y.isHandoff && !e1(d, m);
    if (
      (y.type === "spring" && (d.getVelocity() || y.velocity) && (v = !1),
      d.animation && (v = !1),
      v)
    )
      continue;
    d.start(Za(f, d, m, e.shouldReduceMotion && yn.has(f) ? { type: !1 } : y));
    const C = d.animation;
    xo(a) && (a.add(f), C.then(() => a.remove(f))), u.push(C);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && Xv(e, s);
      }),
    u
  );
}
function Vl(e, t, n = {}) {
  const r = $o(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Lh(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return t1(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function t1(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(n1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Vl(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function n1(e, t) {
  return e.sortNodePosition(t);
}
function r1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Vl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Vl(e, t, n);
  else {
    const i = typeof t == "function" ? $o(e, t, n.custom) : t;
    r = Promise.all(Lh(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const i1 = [...ja].reverse(),
  o1 = ja.length;
function s1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => r1(e, n, r)));
}
function l1(e) {
  let t = s1(e);
  const n = u1();
  let r = !0;
  const i = (a, u) => {
    const c = $o(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...m } = c;
      a = { ...a, ...m, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let y = {},
      v = 1 / 0;
    for (let g = 0; g < o1; g++) {
      const p = i1[g],
        h = n[p],
        x = c[p] !== void 0 ? c[p] : f[p],
        w = Kr(x),
        T = p === u ? h.isActive : null;
      T === !1 && (v = g);
      let P = x === f[p] && x !== c[p] && w;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && T === null) ||
          (!x && !h.prevProp) ||
          zo(x) ||
          typeof x == "boolean")
      )
        continue;
      let N =
          a1(h.prevProp, x) ||
          (p === u && h.isActive && !P && w) ||
          (g > v && w),
        R = !1;
      const re = Array.isArray(x) ? x : [x];
      let le = re.reduce(i, {});
      T === !1 && (le = {});
      const { prevResolvedValues: ye = {} } = h,
        ie = { ...ye, ...le },
        wt = (Z) => {
          (N = !0),
            m.has(Z) && ((R = !0), m.delete(Z)),
            (h.needsAnimating[Z] = !0);
        };
      for (const Z in ie) {
        const Fe = le[Z],
          V = ye[Z];
        if (y.hasOwnProperty(Z)) continue;
        let M = !1;
        mo(Fe) && mo(V) ? (M = !nh(Fe, V)) : (M = Fe !== V),
          M
            ? Fe !== void 0
              ? wt(Z)
              : m.add(Z)
            : Fe !== void 0 && m.has(Z)
            ? wt(Z)
            : (h.protectedKeys[Z] = !0);
      }
      (h.prevProp = x),
        (h.prevResolvedValues = le),
        h.isActive && (y = { ...y, ...le }),
        r && e.blockInitialAnimation && (N = !1),
        N &&
          (!P || R) &&
          d.push(
            ...re.map((Z) => ({ animation: Z, options: { type: p, ...a } }))
          );
    }
    if (m.size) {
      const g = {};
      m.forEach((p) => {
        const h = e.getBaseTarget(p);
        h !== void 0 && (g[p] = h);
      }),
        d.push({ animation: g });
    }
    let C = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (C = !1),
      (r = !1),
      C ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((m) => {
        var y;
        return (y = m.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function a1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !nh(t, e) : !1;
}
function Zt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function u1() {
  return {
    animate: Zt(!0),
    whileInView: Zt(),
    whileHover: Zt(),
    whileTap: Zt(),
    whileDrag: Zt(),
    whileFocus: Zt(),
    exit: Zt(),
  };
}
class c1 extends Kt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = l1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), zo(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let f1 = 0;
class d1 extends Kt {
  constructor() {
    super(...arguments), (this.id = f1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const p1 = { animation: { Feature: c1 }, exit: { Feature: d1 } },
  Lc = (e, t) => Math.abs(e - t);
function h1(e, t) {
  const n = Lc(e.x, t.x),
    r = Lc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ah {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Cs(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          m = h1(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !m) return;
        const { point: y } = f,
          { timestamp: v } = ue;
        this.history.push({ ...y, timestamp: v });
        const { onStart: C, onMove: g } = this.handlers;
        d ||
          (C && C(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Ps(d, this.transformPagePoint)),
          K.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: m, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const C = Cs(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ps(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(f, C), y && y(f, C);
      }),
      !Jp(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Uo(t),
      l = Ps(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = ue;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Cs(l, this.history)),
      (this.removeListeners = dt(
        ft(this.contextWindow, "pointermove", this.handlePointerMove),
        ft(this.contextWindow, "pointerup", this.handlePointerUp),
        ft(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), vt(this.updatePoint);
  }
}
function Ps(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ac(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Cs({ point: e }, t) {
  return {
    point: e,
    delta: Ac(e, Dh(t)),
    offset: Ac(e, m1(t)),
    velocity: g1(t, 0.1),
  };
}
function m1(e) {
  return e[0];
}
function Dh(e) {
  return e[e.length - 1];
}
function g1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Dh(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > an(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = pt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function je(e) {
  return e.max - e.min;
}
function Ll(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Dc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = G(t.min, t.max, e.origin)),
    (e.scale = je(n) / je(t)),
    (Ll(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = G(n.min, n.max, e.origin) - e.originPoint),
    (Ll(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Vr(e, t, n, r) {
  Dc(e.x, t.x, n.x, r ? r.originX : void 0),
    Dc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Mc(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + je(t));
}
function y1(e, t, n) {
  Mc(e.x, t.x, n.x), Mc(e.y, t.y, n.y);
}
function Rc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + je(t));
}
function Lr(e, t, n) {
  Rc(e.x, t.x, n.x), Rc(e.y, t.y, n.y);
}
function v1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? G(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function jc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function x1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: jc(e.x, n, i), y: jc(e.y, t, r) };
}
function Nc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function w1(e, t) {
  return { x: Nc(e.x, t.x), y: Nc(e.y, t.y) };
}
function S1(e, t) {
  let n = 0.5;
  const r = je(e),
    i = je(t);
  return (
    i > r
      ? (n = Yr(t.min, t.max - r, e.min))
      : r > i && (n = Yr(e.min, e.max - i, t.min)),
    Ut(0, 1, n)
  );
}
function k1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Al = 0.35;
function P1(e = Al) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Al),
    { x: _c(e, "left", "right"), y: _c(e, "top", "bottom") }
  );
}
function _c(e, t, n) {
  return { min: Fc(e, t), max: Fc(e, n) };
}
function Fc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Oc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Nn = () => ({ x: Oc(), y: Oc() }),
  Ic = () => ({ min: 0, max: 0 }),
  J = () => ({ x: Ic(), y: Ic() });
function Ie(e) {
  return [e("x"), e("y")];
}
function Mh({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function C1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function T1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ts(e) {
  return e === void 0 || e === 1;
}
function Dl({ scale: e, scaleX: t, scaleY: n }) {
  return !Ts(e) || !Ts(t) || !Ts(n);
}
function bt(e) {
  return Dl(e) || Rh(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Rh(e) {
  return zc(e.x) || zc(e.y);
}
function zc(e) {
  return e && e !== "0%";
}
function wo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Bc(e, t, n, r, i) {
  return i !== void 0 && (e = wo(e, i, r)), wo(e, n, r) + t;
}
function Ml(e, t = 0, n = 1, r, i) {
  (e.min = Bc(e.min, t, n, r, i)), (e.max = Bc(e.max, t, n, r, i));
}
function jh(e, { x: t, y: n }) {
  Ml(e.x, t.translate, t.scale, t.originPoint),
    Ml(e.y, n.translate, n.scale, n.originPoint);
}
function E1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        _n(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), jh(e, s)),
      r && bt(o.latestValues) && _n(e, o.latestValues));
  }
  (t.x = Uc(t.x)), (t.y = Uc(t.y));
}
function Uc(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Tt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function $c(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = G(e.min, e.max, o);
  Ml(e, t[n], t[r], s, t.scale);
}
const V1 = ["x", "scaleX", "originX"],
  L1 = ["y", "scaleY", "originY"];
function _n(e, t) {
  $c(e.x, t, V1), $c(e.y, t, L1);
}
function Nh(e, t) {
  return Mh(T1(e.getBoundingClientRect(), t));
}
function A1(e, t, n) {
  const r = Nh(e, n),
    { scroll: i } = t;
  return i && (Tt(r.x, i.offset.x), Tt(r.y, i.offset.y)), r;
}
const _h = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  D1 = new WeakMap();
class M1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = J()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Uo(c, "page").point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: m, onDragStart: y } = this.getProps();
        if (
          d &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = bp(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ie((C) => {
            let g = this.getAxisMotionValue(C).get() || 0;
            if (it.test(g)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const h = p.layout.layoutBox[C];
                h && (g = je(h) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[C] = g;
          }),
          y && K.update(() => y(c, f), !1, !0);
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: m,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: C } = f;
        if (m && this.currentDirection === null) {
          (this.currentDirection = R1(C)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, C),
          this.updateAxis("y", f.point, C),
          this.visualElement.render(),
          v && v(c, f);
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        Ie((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Ah(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: _h(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && K.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ti(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = v1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Rn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = x1(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = P1(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ie((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = k1(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Rn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = A1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = w1(i.layout.layoutBox, o);
    if (n) {
      const l = n(C1(s));
      (this.hasMutatedConstraints = !!l), l && (s = Mh(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = Ie((c) => {
        if (!Ti(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Za(t, r, 0, n));
  }
  stopAnimation() {
    Ie((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ie((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ie((n) => {
      const { drag: r } = this.getProps();
      if (!Ti(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - G(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Rn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ie((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = S1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ie((s) => {
        if (!Ti(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(G(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    D1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ft(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Rn(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = ut(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Ie((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Al,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Ti(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function R1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class j1 extends Kt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ee),
      (this.removeListeners = ee),
      (this.controls = new M1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ee);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Wc = (e) => (t, n) => {
  e && K.update(() => e(t, n));
};
class N1 extends Kt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ee);
  }
  onPointerDown(t) {
    this.session = new Ah(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: _h(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Wc(t),
      onStart: Wc(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && K.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ft(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function _1() {
  const e = A.useContext(Da);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = A.useId();
  return A.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Bi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Hc(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const cr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Hc(e, t.target.x),
        r = Hc(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  F1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = $t.parse(e);
      if (i.length > 5) return r;
      const o = $t.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = G(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class O1 extends zl.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Iy(I1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Bi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              K.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Ra.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Fh(e) {
  const [t, n] = _1(),
    r = A.useContext(Op);
  return zl.createElement(O1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: A.useContext(Ip),
    isPresent: t,
    safeToRemove: n,
  });
}
const I1 = {
    borderRadius: {
      ...cr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: cr,
    borderTopRightRadius: cr,
    borderBottomLeftRadius: cr,
    borderBottomRightRadius: cr,
    boxShadow: F1,
  },
  Oh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  z1 = Oh.length,
  Gc = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Kc = (e) => typeof e == "number" || D.test(e);
function B1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = G(0, n.opacity !== void 0 ? n.opacity : 1, U1(r))),
      (e.opacityExit = G(t.opacity !== void 0 ? t.opacity : 1, 0, $1(r))))
    : o &&
      (e.opacity = G(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < z1; s++) {
    const l = `border${Oh[s]}Radius`;
    let a = Qc(t, l),
      u = Qc(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Kc(a) === Kc(u)
        ? ((e[l] = Math.max(G(Gc(a), Gc(u), r), 0)),
          (it.test(u) || it.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function Qc(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const U1 = Ih(0, 0.5, fh),
  $1 = Ih(0.5, 0.95, ee);
function Ih(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Yr(e, t, r)));
}
function Yc(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Oe(e, t) {
  Yc(e.x, t.x), Yc(e.y, t.y);
}
function Xc(e, t, n, r, i) {
  return (
    (e -= t), (e = wo(e, 1 / n, r)), i !== void 0 && (e = wo(e, 1 / i, r)), e
  );
}
function W1(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (it.test(t) &&
      ((t = parseFloat(t)), (t = G(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = G(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = Xc(e.min, t, n, l, i)),
    (e.max = Xc(e.max, t, n, l, i));
}
function Zc(e, t, [n, r, i], o, s) {
  W1(e, t[n], t[r], t[i], t.scale, o, s);
}
const H1 = ["x", "scaleX", "originX"],
  G1 = ["y", "scaleY", "originY"];
function Jc(e, t, n, r) {
  Zc(e.x, t, H1, n ? n.x : void 0, r ? r.x : void 0),
    Zc(e.y, t, G1, n ? n.y : void 0, r ? r.y : void 0);
}
function qc(e) {
  return e.translate === 0 && e.scale === 1;
}
function zh(e) {
  return qc(e.x) && qc(e.y);
}
function K1(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Bh(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function bc(e) {
  return je(e.x) / je(e.y);
}
class Q1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ja(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (qa(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ef(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const Y1 = (e, t) => e.depth - t.depth;
class X1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Ja(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    qa(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Y1),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Z1(e, t) {
  const n = un.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (vt(r), e(o - t));
    };
  return K.read(r, !0), () => vt(r);
}
function J1(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function q1(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function b1(e, t, n) {
  const r = Ve(e) ? e : Xn(e);
  return r.start(Za("", r, t, n)), r.animation;
}
const tf = ["", "X", "Y", "Z"],
  ex = { visibility: "hidden" },
  nf = 1e3;
let tx = 0;
const en = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Uh({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = tx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (en.totalNodes =
              en.resolvedTargetDeltas =
              en.recalculatedProjection =
                0),
            this.nodes.forEach(ix),
            this.nodes.forEach(ux),
            this.nodes.forEach(cx),
            this.nodes.forEach(ox),
            J1(en);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new X1());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new ba()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = q1(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Z1(d, 250)),
            Bi.hasAnimatedSinceResize &&
              ((Bi.hasAnimatedSinceResize = !1), this.nodes.forEach(of));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || mx,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: g } =
                  c.getProps(),
                p = !this.targetLayout || !Bh(this.targetLayout, y) || m,
                h = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                h ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, h);
                const x = { ...Xa(v, "layout"), onPlay: C, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || of(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        vt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(fx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rf);
        return;
      }
      this.isUpdating || this.nodes.forEach(lx),
        (this.isUpdating = !1),
        this.nodes.forEach(ax),
        this.nodes.forEach(nx),
        this.nodes.forEach(rx),
        this.clearAllSnapshots();
      const l = un.now();
      (ue.delta = Ut(0, 1e3 / 60, l - ue.timestamp)),
        (ue.timestamp = l),
        (ue.isProcessing = !0),
        gs.update.process(ue),
        gs.preRender.process(ue),
        gs.render.process(ue),
        (ue.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ra.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(sx), this.sharedNodes.forEach(dx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        K.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      K.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = J()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !zh(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || bt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        gx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return J();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Tt(l.x, a.offset.x), Tt(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = J();
      Oe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Oe(l, s);
            const { scroll: d } = this.root;
            d && (Tt(l.x, -d.offset.x), Tt(l.y, -d.offset.y));
          }
          Tt(l.x, c.offset.x), Tt(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = J();
      Oe(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          _n(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          bt(c.latestValues) && _n(a, c.latestValues);
      }
      return bt(this.latestValues) && _n(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = J();
      Oe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !bt(u.latestValues)) continue;
        Dl(u.latestValues) && u.updateSnapshot();
        const c = J(),
          f = u.measurePageBox();
        Oe(c, f),
          Jc(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bt(this.latestValues) && Jc(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ue.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = J()),
              (this.relativeTargetOrigin = J()),
              Lr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = J()), (this.targetWithTransforms = J())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                y1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Oe(this.target, this.layout.layoutBox),
                jh(this.target, this.targetDelta))
              : Oe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = J()),
                (this.relativeTargetOrigin = J()),
                Lr(this.relativeTargetOrigin, this.target, m.target),
                Oe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          en.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Dl(this.parent.latestValues) ||
          Rh(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ue.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Oe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      E1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = J()));
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = Nn()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Nn()),
        (this.projectionDeltaWithTransform = Nn()));
      const v = this.projectionTransform;
      Vr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = ef(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        en.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = Nn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = J(),
        m = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = m !== y,
        C = this.getStack(),
        g = !C || C.members.length <= 1,
        p = !!(v && !g && this.options.crossfade === !0 && !this.path.some(hx));
      this.animationProgress = 0;
      let h;
      (this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        sf(f.x, s.x, w),
          sf(f.y, s.y, w),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Lr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            px(this.relativeTarget, this.relativeTargetOrigin, d, w),
            h && K1(this.relativeTarget, h) && (this.isProjectionDirty = !1),
            h || (h = J()),
            Oe(h, this.relativeTarget)),
          v &&
            ((this.animationValues = c), B1(c, u, this.latestValues, w, p, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (vt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = K.update(() => {
          (Bi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = b1(0, nf, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(nf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          $h(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || J();
          const f = je(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = je(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        Oe(l, a),
          _n(l, c),
          Vr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Q1()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < tf.length; c++) {
        const f = "rotate" + tf[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return ex;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Ii(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Ii(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !bt(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = ef(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: m, y } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in fo) {
        if (d[v] === void 0) continue;
        const { correct: C, applyTo: g } = fo[v],
          p = u.transform === "none" ? d[v] : C(d[v], f);
        if (g) {
          const h = g.length;
          for (let x = 0; x < h; x++) u[g[x]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Ii(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(rf),
        this.root.sharedNodes.clear();
    }
  };
}
function nx(e) {
  e.updateLayout();
}
function rx(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? Ie((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = je(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : $h(o, n.layoutBox, r) &&
        Ie((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = je(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const l = Nn();
    Vr(l, r, n.layoutBox);
    const a = Nn();
    s ? Vr(a, e.applyTransform(i, !0), n.measuredBox) : Vr(a, r, n.layoutBox);
    const u = !zh(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const y = J();
          Lr(y, n.layoutBox, d.layoutBox);
          const v = J();
          Lr(v, r, m.layoutBox),
            Bh(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ix(e) {
  en.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function ox(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function sx(e) {
  e.clearSnapshot();
}
function rf(e) {
  e.clearMeasurements();
}
function lx(e) {
  e.isLayoutDirty = !1;
}
function ax(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function of(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function ux(e) {
  e.resolveTargetDelta();
}
function cx(e) {
  e.calcProjection();
}
function fx(e) {
  e.resetRotation();
}
function dx(e) {
  e.removeLeadSnapshot();
}
function sf(e, t, n) {
  (e.translate = G(t.translate, 0, n)),
    (e.scale = G(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function lf(e, t, n, r) {
  (e.min = G(t.min, n.min, r)), (e.max = G(t.max, n.max, r));
}
function px(e, t, n, r) {
  lf(e.x, t.x, n.x, r), lf(e.y, t.y, n.y, r);
}
function hx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const mx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  af = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  uf = af("applewebkit/") && !af("chrome/") ? Math.round : ee;
function cf(e) {
  (e.min = uf(e.min)), (e.max = uf(e.max));
}
function gx(e) {
  cf(e.x), cf(e.y);
}
function $h(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Ll(bc(t), bc(n), 0.2))
  );
}
const yx = Uh({
    attachResizeListener: (e, t) => ut(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Es = { current: void 0 },
  Wh = Uh({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Es.current) {
        const e = new yx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Es.current = e);
      }
      return Es.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  vx = {
    pan: { Feature: N1 },
    drag: { Feature: j1, ProjectionNode: Wh, MeasureLayout: Fh },
  },
  xx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function wx(e) {
  const t = xx.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Rl(e, t, n = 1) {
  const [r, i] = wx(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Th(s) ? parseFloat(s) : s;
  } else return po(i) ? Rl(i, t, n + 1) : i;
}
function Sx(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!po(o)) return;
      const s = Rl(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!po(o)) continue;
    const s = Rl(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const kx = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Hh = (e) => kx.has(e),
  Px = (e) => Object.keys(e).some(Hh),
  ff = (e) => e === er || e === D,
  df = (e, t) => parseFloat(e.split(", ")[t]),
  pf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return df(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? df(o[1], e) : 0;
      }
    },
  Cx = new Set(["x", "y", "z"]),
  Tx = ei.filter((e) => !Cx.has(e));
function Ex(e) {
  const t = [];
  return (
    Tx.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Zn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: pf(4, 13),
  y: pf(5, 14),
};
Zn.translateX = Zn.x;
Zn.translateY = Zn.y;
const Vx = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = Zn[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = Zn[u](a, o));
      }),
      e
    );
  },
  Lx = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Hh);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = ur(c);
        const d = t[a];
        let m;
        if (mo(d)) {
          const y = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = ur(c));
          for (let C = v; C < y && d[C] !== null; C++)
            m ? Wa(ur(d[C]) === m) : (m = ur(d[C]));
        } else m = ur(d);
        if (f !== m)
          if (ff(f) && ff(m)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && m === D && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            m != null &&
            m.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = Ex(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = Vx(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Io && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function Ax(e, t, n, r) {
  return Px(t) ? Lx(e, t, n, r) : { target: t, transitionEnd: r };
}
const Dx = (e, t, n, r) => {
    const i = Sx(e, t, r);
    return (t = i.target), (r = i.transitionEnd), Ax(e, t, n, r);
  },
  jl = { current: null },
  Gh = { current: !1 };
function Mx() {
  if (((Gh.current = !0), !!Io))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (jl.current = e.matches);
      e.addListener(t), t();
    } else jl.current = !1;
}
function Rx(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Ve(o)) e.addValue(i, o), xo(r) && r.add(i);
    else if (Ve(s)) e.addValue(i, Xn(o, { owner: e })), xo(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, Xn(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const hf = new WeakMap(),
  Kh = Object.keys(Qr),
  jx = Kh.length,
  mf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Nx = Na.length;
class _x {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => K.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Bo(n)),
      (this.isVariantNode = Fp(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && Ve(d) && (d.set(l[f], !1), xo(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      hf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Gh.current || Mx(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : jl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    hf.delete(this.current),
      this.projection && this.projection.unmount(),
      vt(this.notifyUpdate),
      vt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = yn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && K.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let a = 0; a < jx; a++) {
      const u = Kh[a],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: m,
        } = Qr[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          m && (l = m));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && Rn(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: m,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : J();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < mf.length; r++) {
      const i = mf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Rx(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Nx; r++) {
      const i = Na[r],
        o = this.props[i];
      (Kr(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Xn(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = $a(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Ve(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ba()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Qh extends _x {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    i
  ) {
    const o = qv(r, t || {}, this);
    if (i) {
      Zv(this, r, o);
      const s = Dx(this, r, o, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Fx(e) {
  return window.getComputedStyle(e);
}
class Ox extends Qh {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (yn.has(n)) {
      const r = Ya(n);
      return (r && r.default) || 0;
    } else {
      const r = Fx(t),
        i = (Up(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Nh(t, n);
  }
  build(t, n, r, i) {
    Oa(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Ua(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ve(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Kp(t, n, r, i);
  }
}
class Ix extends Qh {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (yn.has(n)) {
      const r = Ya(n);
      return (r && r.default) || 0;
    }
    return (n = Qp.has(n) ? n : Ma(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return J();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Xp(t, n);
  }
  build(t, n, r, i) {
    za(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Yp(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Ba(t.tagName)), super.mount(t);
  }
}
const zx = (e, t) =>
    _a(e)
      ? new Ix(t, { enableHardwareAcceleration: !1 })
      : new Ox(t, { enableHardwareAcceleration: !0 }),
  Bx = { layout: { ProjectionNode: Wh, MeasureLayout: Fh } },
  Ux = { ...p1, ...V0, ...vx, ...Bx },
  Yh = Fy((e, t) => h0(e, t, Ux, zx)),
  $x = ({
    id: e,
    logo: t,
    background: n,
    posted: r,
    contract: i,
    position: o,
    company: s,
    location: l,
    handleAppliedId: a,
  }) =>
    E.jsxs(Yh.li, {
      initial: { opacity: 0.15, scale: 0.85 },
      whileInView: { opacity: 1, scale: 1 },
      id: e,
      className:
        "h-64 w-[22rem] bg-white dark:bg-darkBg rounded-lg shadow-lg flex flex-col items-start justify-center gap-2.5 p-5 relative max-[776px]:w-full max-[425px]:p-4",
      children: [
        E.jsx(Wx, { background: n, logo: t, company: s }),
        E.jsx(Xh, { posted: r, contract: i }),
        E.jsxs("button", {
          className:
            "text-xl font-bold text-primary text-start dark:text-white _focus-hover hover:text-lightGrey hover:px-1.5 hover:py-1 focus:border-main focus:text-lightGrey focus:px-1.5 focus:py-1 tracking-wide relative group",
          onClick: () => {
            a(e), window.scrollTo({ top: 0, behavior: "smooth" });
          },
          children: [
            o,
            E.jsx("span", {
              className:
                "lowercase text-sm text-white font-medium bg-[#333333] rounded w-24 py-1.5 flex items-center justify-center absolute left-1/2 -translate-x-1/2 -top-12 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100 transition-all duration-300 before:absolute before:-bottom-2 before:border-x-8 before:border-b-[10px] before:border-transparent before:border-b-[#333333] before:rotate-180",
              children: "apply here",
            }),
          ],
        }),
        E.jsx(Dt, { title: s, styles: "text-lightGrey text-[1.1rem]" }),
        E.jsx(Dt, { title: l, styles: "text-main text-xl font-bold" }),
      ],
    }),
  gf = ({ title: e, desc: t, list: n, listStyle: r }) =>
    E.jsxs("div", {
      className: "flex flex-col justify-center gap-4",
      children: [
        E.jsx(Dt, {
          title: e,
          styles: "text-2xl font-bold text-primary dark:text-white",
        }),
        E.jsx(Nl, { desc: t }),
        E.jsx("ul", {
          className: `${r} text-main pl-4 flex flex-col gap-3 justify-center`,
          children: n.map((i, o) =>
            E.jsx(
              "li",
              { className: "w-full pl-2", children: E.jsx(Nl, { desc: i }) },
              o
            )
          ),
        }),
      ],
    }),
  yf = ({ type: e, icon: t, handleTitle: n, handleLocation: r }) => {
    const [i, o] = A.useState("");
    return E.jsxs("div", {
      className: "_form-card flex-row-reverse",
      children: [
        E.jsxs("div", {
          className:
            "relative h-full flex items-center justify-center peer max-[476px]:min-h-14",
          children: [
            E.jsx("input", {
              type: "text",
              name: e,
              id: e,
              value: i,
              className: `h-3/4 w-40 outline-none caret-main bg-transparent focus:self-end ${
                i.trim().length > 0 && "self-end"
              } peer max-[476px]:h-[80%] max-[476px]:mb-1.5`,
              onInput: (s) => {
                o(s.target.value),
                  e === "title" ? n(s.target.value) : r(s.target.value);
              },
            }),
            E.jsxs("label", {
              htmlFor: e,
              className: `absolute -translate-y-1/2 pointer-events-none peer-focus:text-xs peer-focus:top-3 ${
                i.trim().length > 0 ? "text-xs top-3" : "top-1/2"
              } ${
                e === "title"
                  ? `peer-focus:-left-10 ${
                      i.trim().length > 0 ? "-left-10" : "left-0"
                    }`
                  : `peer-focus:-left-8 ${
                      i.trim().length > 0 ? "-left-8" : "left-0"
                    }`
              } transition-all duration-200`,
              children: ["Filter by ", e],
            }),
          ],
        }),
        E.jsx("img", {
          src: `./icon-${t.toLowerCase()}.svg`,
          alt: `${t} Icon`,
          className: `peer-focus-within:mt-4 ${
            i.trim().length > 0 && "mt-4"
          } transition-all duration-200 ${
            e === "title" && "h-[1.65rem] w-[1.65rem] bg-main p-1 rounded"
          }`,
        }),
      ],
    });
  },
  Wx = ({ background: e, logo: t, company: n }) =>
    E.jsx(Yh.span, {
      initial: { scale: 0, opacity: 0 },
      whileInView: { scale: 1, opacity: 1, rotate: "360deg" },
      transition: { duration: 0.5 },
      className:
        "absolute -top-7 left-7 h-14 w-14 flex items-center justify-center rounded-lg",
      style: { backgroundColor: e },
      children: E.jsx("img", { src: t, alt: `${n} Logo` }),
    }),
  Nl = ({ desc: e }) =>
    E.jsx("p", {
      className: "text-lightGrey text-[1rem] w-full tracking-wide",
      children: e,
    }),
  Xh = ({ posted: e, contract: t }) =>
    E.jsx("ul", {
      className:
        "flex items-center justify-start gap-7 *:text-lightGrey *:text-[1.1rem]",
      children: [e, t].map((n, r) =>
        E.jsx(
          "li",
          {
            className: `relative ${
              r === 0 && "before:hidden"
            } before:absolute before:top-1/2 before:h-1 before:w-1 before:bg-lightGrey before:rounded-full before:-left-4 before:flex-shrink-0`,
            children: n,
          },
          r
        )
      ),
    }),
  Hx = ({ filterFullTimeJobs: e, filterJobs: t }) => {
    const [n, r] = A.useState(""),
      [i, o] = A.useState(""),
      s = (a) => r(a),
      l = (a) => o(a);
    return E.jsxs("form", {
      className:
        "h-20 w-max m-auto p-[9px] bg-white dark:bg-darkBg text-primary dark:text-white text-lg tracking-wider shadow-lg rounded-lg flex items-center justify-start gap-[5px] *:flex-shrink-0 relative max-[476px]:flex-col max-[476px]:h-max max-[476px]:items-start",
      onSubmit: (a) => {
        a.preventDefault(), t(n, i);
      },
      children: [
        E.jsx(yf, { type: "title", icon: "Search", handleTitle: s }),
        E.jsx(yf, { type: "location", icon: "Location", handleLocation: l }),
        E.jsxs("div", {
          className:
            "_form-card max-[692px]:absolute max-[692px]:h-16 max-[692px]:left-[15%] max-[692px]:-translate-x-[15%] max-[692px]:-bottom-1/2 max-[692px]:translate-y-1/2 max-[476px]:relative max-[476px]:translate-y-0 max-[476px]:flex max-[476px]:justify-start max-[476px]:h-14",
          children: [
            E.jsx("input", {
              type: "checkbox",
              name: "Full time",
              id: "full-time",
              className: "h-[1.15rem] w-[1.15rem] outline-none",
              onInput: (a) => {
                e(a.target.checked), setFullTime(a.target.checked);
              },
            }),
            E.jsx("label", {
              htmlFor: "full-time",
              className:
                "h-full flex items-center justify-center max-[476px]:w-full max-[476px]:justify-start",
              children: "Full time only",
            }),
          ],
        }),
        E.jsx(wl, { desc: "Search", px: "px-5", type: "search" }),
      ],
    });
  },
  Gx = () => {
    const [e, t] = A.useState(document.documentElement.className);
    document.documentElement.className =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";
    const n = { light: "-translate-x-[1.45rem]", dark: "translate-x-1" };
    return E.jsx("button", {
      className:
        "h-[1.625rem] w-[3.25rem] bg-white rounded-full relative before:absolute before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-5 before:bg-[url(../icon-sun.svg)] before:bg-no-repeat before:bg-contain before:bg-center before:-left-7 after:absolute after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-4 after:bg-[url(../icon-moon.svg)] after:bg-no-repeat after:bg-contain after:bg-center after:-right-[1.625rem] outline-none border-2 border-transparent border-dashed focus:border-main",
      onClick: () => {
        t((r) => (r === "light" ? "dark" : "light")),
          localStorage.setItem("theme", e === "light" ? "dark" : "light");
      },
      children: E.jsx("span", {
        className: `h-[1.15rem] w-[1.15rem] bg-main rounded-full absolute top-1/2 -translate-y-1/2 ${n[e]} transition-all duration-300`,
      }),
    });
  },
  Dt = ({ title: e, styles: t }) =>
    E.jsx("span", { className: t, children: e }),
  Kx = () =>
    E.jsxs("header", {
      className:
        "h-40 w-full bg-[url(../pattern.svg)] bg-no-repeat bg-cover bg-center flex items-center justify-between px-40 pb-10 max-lg:pl-16 max-lg:pr-20 max-[776px]:pl-12 max-[776px]:pr-16 max-[350px]:pl-6 max-[350px]:pr-12 absolute top-0 left-0",
      children: [
        E.jsx("a", {
          href: "#",
          className:
            "outline-none border-2 border-transparent border-dashed focus:border-white p-2.5 rounded",
          children: E.jsx("img", { src: "./logo.svg", alt: "Logo Icon" }),
        }),
        E.jsx(Gx, {}),
      ],
    }),
  Qx = () => {
    const [e, t] = A.useState([]),
      [n, r] = A.useState([]),
      [i, o] = A.useState({ title: "", location: "" }),
      [s, l] = A.useState(null),
      [a, u] = A.useState(0);
    A.useEffect(() => {
      (async () => {
        try {
          const v = await (await fetch("./data.json")).json();
          t(v), r(v);
        } catch (y) {
          console.error("Error fetching data:", y);
        }
      })(),
        window.addEventListener("scroll", () => u(window.scrollY));
    }, []);
    const c = (m) => l(m),
      f = (m, y) => {
        r(
          e.filter(
            (v) =>
              v.position.toLowerCase().includes(m.toLowerCase().trim()) &&
              v.location.toLowerCase().includes(y.toLowerCase().trim())
          )
        ),
          o({ title: m, location: y });
      },
      d = (m) =>
        r(m ? e.filter((y) => y.contract.toLowerCase() === "full time") : e);
    return E.jsxs("main", {
      className: "p-6 max-[512px]:px-4 mt-20",
      children: [
        s === null
          ? E.jsxs(E.Fragment, {
              children: [
                E.jsx(Hx, { filterFullTimeJobs: d, filterJobs: f }),
                E.jsxs("section", {
                  className: "mt-[5.5rem] max-[812px]:mt-28",
                  children: [
                    E.jsx(Dt, {
                      title: `No opportunities available ${
                        i.title !== "" ? `for "${i.title}"` : ""
                      }${i.location !== "" ? `at "${i.location}"` : ""}.`,
                      styles: `text-3xl text-primary text-center font-bold tracking-wider w-full max-[500px]:text-2xl ${
                        n.length === 0 ? "inline-block" : "hidden"
                      }`,
                    }),
                    E.jsx("ul", {
                      className:
                        "flex items-center justify-center flex-wrap gap-x-6 gap-y-12",
                      children: n.map((m) =>
                        E.jsx(
                          $x,
                          {
                            id: m.id,
                            logo: m.logo,
                            background: m.background,
                            posted: m.posted,
                            contract: m.contract,
                            position: m.position,
                            company: m.company,
                            location: m.location,
                            handleAppliedId: c,
                          },
                          m.id
                        )
                      ),
                    }),
                  ],
                }),
              ],
            })
          : E.jsx(Py, { id: s }),
        E.jsx("button", {
          className: `h-12 w-12 p-1 fixed right-6 bottom-6  _focus-hover !rounded-full ${
            a > 0
              ? "pointer-events-auto scale-100  opacity-100"
              : "pointer-events-none scale-0  opacity-0"
          }`,
          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          children: E.jsx("span", {
            className:
              "h-full w-full p-0.5 bg-main text-white text-xl font-extrabold rounded-full flex items-center justify-center",
            children: "↑",
          }),
        }),
      ],
    });
  },
  Yx = () => E.jsxs(E.Fragment, { children: [E.jsx(Kx, {}), E.jsx(Qx, {})] });
Vs.createRoot(document.getElementById("root")).render(
  E.jsx(zl.StrictMode, { children: E.jsx(Yx, {}) })
);
