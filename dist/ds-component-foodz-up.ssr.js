'use strict';var Vue=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$5 = /*#__PURE__*/Vue__default['default'].extend({
  name: 'DsComponentFoodzUpSample',
  // vue component name
  data: function data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },
  computed: {
    changedBy: function changedBy() {
      var _ref = this,
          message = _ref.message;

      if (!message.action) return 'initialized';
      return "".concat(message.action, " ").concat(message.amount || '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "ds-component-foodz-up-sample"
  }, [_vm._ssrNode("<p data-v-004d046c>" + _vm._ssrEscape("The counter was " + _vm._s(_vm.changedBy) + " to ") + "<b data-v-004d046c>" + _vm._ssrEscape(_vm._s(_vm.counter)) + "</b>.</p> <button data-v-004d046c>\n    Click +1\n  </button> <button data-v-004d046c>\n    Click -1\n  </button> <button data-v-004d046c>\n    Click +5\n  </button> <button data-v-004d046c>\n    Click -5\n  </button> <button data-v-004d046c>\n    Reset\n  </button>")]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-004d046c_0", {
    source: ".ds-component-foodz-up-sample[data-v-004d046c]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.ds-component-foodz-up-sample p[data-v-004d046c]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-004d046c";
/* module identifier */

var __vue_module_identifier__$6 = "data-v-004d046c";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$5, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);var script$4 = /*#__PURE__*/Vue__default['default'].extend({
  name: 'DsComponentFoodzUpSample2',
  // vue component name
  data: function data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },
  computed: {
    changedBy: function changedBy() {
      var _ref = this,
          message = _ref.message;

      if (!message.action) return 'initialized';
      return "".concat(message.action, " ").concat(message.amount || '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "ds-component-foodz-up-sample-2"
  }, [_vm._ssrNode("<p data-v-d634c418>" + _vm._ssrEscape("The counter was " + _vm._s(_vm.changedBy) + " to ") + "<b data-v-d634c418>" + _vm._ssrEscape(_vm._s(_vm.counter)) + "</b>.</p> <button data-v-d634c418>\n    Click +1\n  </button> <button data-v-d634c418>\n    Click -1\n  </button> <button data-v-d634c418>\n    Click +5\n  </button> <button data-v-d634c418>\n    Click -5\n  </button> <button data-v-d634c418>\n    Reset\n  </button>")]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-d634c418_0", {
    source: ".ds-component-foodz-up-sample-2[data-v-d634c418]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.ds-component-foodz-up-sample-2 p[data-v-d634c418]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = "data-v-d634c418";
/* module identifier */

var __vue_module_identifier__$5 = "data-v-d634c418";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$4, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, createInjectorSSR, undefined);var script$3 = {
  name: 'TestDD',
  // vue component name
  data: function data() {
    return {
      message: "coucou"
    };
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<button data-v-46d1b678>" + _vm._ssrEscape(_vm._s(_vm.message)) + "</button>")]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = "data-v-46d1b678";
/* module identifier */

var __vue_module_identifier__$4 = "data-v-46d1b678";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$3, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);var script$2 = /*#__PURE__*/Vue__default['default'].extend({
  name: 'ButtonAddToCart',
  props: ['itemNumber'],
  methods: {
    addItemNumber: function addItemNumber() {
      this.$emit('addItemNumber');
    },
    removeItemNumber: function removeItemNumber() {
      this.$emit('removeItemNumber');
    }
  }
});/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex items-stretch justify-center bg-red-pastel-80 w-20"
  }, [_vm._ssrNode("<div class=\"flex btn-custom cursor-pointer\" data-v-5c9289d8><svg width=\"20\" viewBox=\"0 0 448 512\" class=\"mx-2 fill-current text-white w-2\" data-v-5c9289d8><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\" data-v-5c9289d8></path></svg></div> <div type=\"text\" class=\"bg-white my-1 border text-center w-8\" data-v-5c9289d8>" + _vm._ssrEscape("\n    " + _vm._s(_vm.itemNumber) + "\n  ") + "</div> <div class=\"flex btn-custom cursor-pointer\" data-v-5c9289d8><svg width=\"20\" viewBox=\"0 0 448 512\" class=\"mx-2 fill-current text-white w-2\" data-v-5c9289d8><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\" data-v-5c9289d8></path></svg></div>")]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-5c9289d8_0", {
    source: ".btn-custom[data-v-5c9289d8]:active{@apply bg-red-pastel;}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-5c9289d8";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-5c9289d8";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$2, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);var script$1 = /*#__PURE__*/Vue__default['default'].extend({
  name: 'ButtonFoodzUp',
  props: ['title'],
  methods: {
    buttonClicked: function buttonClicked() {
      this.$emit('buttonClicked');
    }
  }
});/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium hover:bg-gray-50",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.buttonClicked();
      }
    }
  }, [_vm._ssrNode(_vm._ssrEscape("\n  " + _vm._s(_vm.title) + "\n"))]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = "data-v-ba0c8c52";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-ba0c8c52";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$1, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);/* script */

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "w-auto cursor-pointer text-red-pastel hover:underline font-medium"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-ad742680";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, {}, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);var script = /*#__PURE__*/Vue__default['default'].extend({
  name: 'InputFoodzUp',
  props: ['icon', 'type', 'width', 'variableDescription', 'inputVariable', 'value', 'disabled', 'placeholder']
});/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode((_vm.variableDescription ? "<label" + _vm._ssrAttr("for", _vm.inputVariable) + " class=\"pl-2\" data-v-eb7865ca>" + _vm._ssrEscape(_vm._s(_vm.variableDescription)) + "</label>" : "<!---->") + " "), _vm._ssrNode("<div class=\"relative text-gray-800\" data-v-eb7865ca>", "</div>", [_vm.icon ? _vm._ssrNode("<span class=\"absolute inset-y-0 left-0 flex items-center pl-2\" data-v-eb7865ca>", "</span>", [_vm._ssrNode("<button type=\"submit\" class=\"p-1\" data-v-eb7865ca>", "</button>", [_c('DynamicSvg', {
    staticClass: "mr-4 text-gray-700",
    attrs: {
      "component-name": _vm.icon,
      "width": _vm.width
    }
  })], 1)]) : _vm._e(), _vm._ssrNode(" <input" + _vm._ssrAttr("id", _vm.variableDescription) + _vm._ssrAttr("name", _vm.variableDescription) + _vm._ssrAttr("type", _vm.type) + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("value", _vm.value) + _vm._ssrClass("pl-5 text-lg w-full placeholder-gray-500 py-2 font-medium text-gray-800 bg-gray-200 rounded-full", {
    'pl-16': _vm.icon
  }) + " data-v-eb7865ca>")], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = "data-v-eb7865ca";
/* module identifier */

var __vue_module_identifier__ = "data-v-eb7865ca";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,DsComponentFoodzUpSample: __vue_component__$6,DsComponentFoodzUpSample2: __vue_component__$5,TestDD: __vue_component__$4,ButtonAddToCart: __vue_component__$3,ButtonFoodzUp: __vue_component__$2,ButtonSimpleText: __vue_component__$1,InputFoodzUp: __vue_component__});var install = function installDsComponentFoodzUp(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
 // export * as api from '@/api/index';
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,DsComponentFoodzUpSample: __vue_component__$6,DsComponentFoodzUpSample2: __vue_component__$5,TestDD: __vue_component__$4,ButtonAddToCart: __vue_component__$3,ButtonFoodzUp: __vue_component__$2,ButtonSimpleText: __vue_component__$1,InputFoodzUp: __vue_component__});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    var key = componentName;
    var val = component;
    install[key] = val;
  }
});module.exports=install;