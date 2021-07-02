import Vue from 'vue';

var script$5 = /*#__PURE__*/Vue.extend({
  name: 'DsComponentFoodzUpSample',

  // vue component name
  data() {
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
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "ds-component-foodz-up-sample"
  }, [_c('p', [_vm._v("The counter was " + _vm._s(_vm.changedBy) + " to "), _c('b', [_vm._v(_vm._s(_vm.counter))]), _vm._v(".")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("\n    Click +1\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("\n    Click -1\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.increment(5);
      }
    }
  }, [_vm._v("\n    Click +5\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.decrement(5);
      }
    }
  }, [_vm._v("\n    Click -5\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("\n    Reset\n  ")])]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = function (inject) {
  if (!inject) return;
  inject("data-v-004d046c_0", {
    source: ".ds-component-foodz-up-sample[data-v-004d046c]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.ds-component-foodz-up-sample p[data-v-004d046c]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$6 = "data-v-004d046c";
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$5, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, createInjector, undefined, undefined);

var script$4 = /*#__PURE__*/Vue.extend({
  name: 'DsComponentFoodzUpSample2',

  // vue component name
  data() {
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
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "ds-component-foodz-up-sample-2"
  }, [_c('p', [_vm._v("The counter was " + _vm._s(_vm.changedBy) + " to "), _c('b', [_vm._v(_vm._s(_vm.counter))]), _vm._v(".")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("\n    Click +1\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("\n    Click -1\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.increment(5);
      }
    }
  }, [_vm._v("\n    Click +5\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.decrement(5);
      }
    }
  }, [_vm._v("\n    Click -5\n  ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("\n    Reset\n  ")])]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = function (inject) {
  if (!inject) return;
  inject("data-v-d634c418_0", {
    source: ".ds-component-foodz-up-sample-2[data-v-d634c418]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.ds-component-foodz-up-sample-2 p[data-v-d634c418]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$5 = "data-v-d634c418";
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$4, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, createInjector, undefined, undefined);

var script$3 = {
  name: 'TestDD',

  // vue component name
  data() {
    return {
      message: "coucou"
    };
  }

};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('button', [_vm._v(_vm._s(_vm.message))])]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = "data-v-46d1b678";
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$3, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var script$2 = /*#__PURE__*/Vue.extend({
  name: 'ButtonAddToCart',
  props: ['itemNumber'],
  methods: {
    addItemNumber() {
      this.$emit('addItemNumber');
    },

    removeItemNumber() {
      this.$emit('removeItemNumber');
    }

  }
});

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex items-stretch justify-center bg-red-pastel-80 w-20"
  }, [_c('div', {
    staticClass: "flex btn-custom cursor-pointer",
    on: {
      "click": function ($event) {
        return _vm.removeItemNumber();
      }
    }
  }, [_c('svg', {
    staticClass: "mx-2 fill-current text-white w-2",
    attrs: {
      "width": "20",
      "viewBox": "0 0 448 512"
    }
  }, [_c('path', {
    attrs: {
      "d": "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "bg-white my-1 border text-center w-8",
    attrs: {
      "type": "text"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.itemNumber) + "\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "flex btn-custom cursor-pointer",
    on: {
      "click": function ($event) {
        return _vm.addItemNumber();
      }
    }
  }, [_c('svg', {
    staticClass: "mx-2 fill-current text-white w-2",
    attrs: {
      "width": "20",
      "viewBox": "0 0 448 512"
    }
  }, [_c('path', {
    attrs: {
      "d": "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
    }
  })])])]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-5c9289d8_0", {
    source: ".btn-custom[data-v-5c9289d8]:active{@apply bg-red-pastel;}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$3 = "data-v-5c9289d8";
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$2, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

var script$1 = /*#__PURE__*/Vue.extend({
  name: 'ButtonFoodzUp',
  props: ['title'],
  methods: {
    buttonClicked() {
      this.$emit('buttonClicked');
    }

  }
});

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium hover:bg-gray-50",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.buttonClicked();
      }
    }
  }, [_vm._v("\n  " + _vm._s(_vm.title) + "\n")]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = "data-v-ba0c8c52";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$1, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

/* script */

/* template */
var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "w-auto cursor-pointer text-red-pastel hover:underline font-medium"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, {}, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var script = /*#__PURE__*/Vue.extend({
  name: 'InputFoodzUp',
  props: ['icon', 'type', 'width', 'variableDescription', 'inputVariable', 'value', 'disabled', 'placeholder']
});

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm.variableDescription ? _c('label', {
    staticClass: "pl-2",
    attrs: {
      "for": _vm.inputVariable
    }
  }, [_vm._v(_vm._s(_vm.variableDescription))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "relative text-gray-800"
  }, [_vm.icon ? _c('span', {
    staticClass: "absolute inset-y-0 left-0 flex items-center pl-2"
  }, [_c('button', {
    staticClass: "p-1",
    attrs: {
      "type": "submit"
    }
  }, [_c('DynamicSvg', {
    staticClass: "mr-4 text-gray-700",
    attrs: {
      "component-name": _vm.icon,
      "width": _vm.width
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('input', {
    staticClass: "pl-5 text-lg w-full placeholder-gray-500 py-2 font-medium text-gray-800 bg-gray-200 rounded-full",
    class: {
      'pl-16': _vm.icon
    },
    attrs: {
      "id": _vm.variableDescription,
      "name": _vm.variableDescription,
      "type": _vm.type,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function ($event) {
        return _vm.$emit('input', $event.target.value);
      }
    }
  })])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = "data-v-eb7865ca";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DsComponentFoodzUpSample: __vue_component__$6,
  DsComponentFoodzUpSample2: __vue_component__$5,
  TestDD: __vue_component__$4,
  ButtonAddToCart: __vue_component__$3,
  ButtonFoodzUp: __vue_component__$2,
  ButtonSimpleText: __vue_component__$1,
  InputFoodzUp: __vue_component__
});

// Import vue components

const install = function installDsComponentFoodzUp(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
 // export * as api from '@/api/index';

export default install;
export { __vue_component__$3 as ButtonAddToCart, __vue_component__$2 as ButtonFoodzUp, __vue_component__$1 as ButtonSimpleText, __vue_component__$6 as DsComponentFoodzUpSample, __vue_component__$5 as DsComponentFoodzUpSample2, __vue_component__ as InputFoodzUp, __vue_component__$4 as TestDD };
