(globalThis.webpackChunk_yoast_ui_library=globalThis.webpackChunk_yoast_ui_library||[]).push([[96],{"./.storybook/interactive-docs-page.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>InteractiveDocsPage});var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const InteractiveDocsPage=({stories})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"meta"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"story"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.H2,{}),stories.map(((story,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.fy,{of:story},(null==story?void 0:story.name)||`story-${index}`)))]});InteractiveDocsPage.propTypes={stories:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]))},InteractiveDocsPage.defaultProps={stories:[]},InteractiveDocsPage.__docgenInfo={description:"An alternative version of the Storybook DocsPage component.\n\nReplacing the Stories component with individual DocsStory components.\nThis prevents Stories from passing `__forceInitialArgs` to the DocsStory components.\nWhich makes the stories are interactive on the docs page, making the `args` more like initial values.\n\n@param {(Object|function)[]} [stories] The stories to display.\n@returns {JSX.Element} The DocsPage component without stories.",methods:[],displayName:"InteractiveDocsPage",props:{stories:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"object"},{name:"func"}]}},required:!1}}}},"./src/elements/spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,_:()=>classNameMap});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/use-svg-aria.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classNameMap={variant:{default:"",primary:"yst-text-primary-500",white:"yst-text-white"},size:{3:"yst-w-3 yst-h-3",4:"yst-w-4 yst-h-4",8:"yst-w-8 yst-h-8"}},Spinner=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((({variant,size,className},ref)=>{const svgAriaProps=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.A)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg",{ref,xmlns:"http://www.w3.org/2000/svg/",fill:"none",viewBox:"0 0 24 24",className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-animate-spin",classNameMap.variant[variant],classNameMap.size[size],className),...svgAriaProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle",{className:"yst-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{className:"yst-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}));Spinner.displayName="Spinner",Spinner.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.variant)),size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.size)),className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Spinner.defaultProps={variant:"default",size:"4",className:""};const __WEBPACK_DEFAULT_EXPORT__=Spinner;Spinner.__docgenInfo={description:"@param {string} [variant=default] The variant.\n@param {string} [size] The size.\n@param {string} [className] The HTML class.\n@returns {JSX.Element} The spinner.",methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.variant )"},required:!1},size:{defaultValue:{value:'"4"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.size )"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/elements/spinner/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Factory:()=>Factory,Sizes:()=>Sizes,Variants:()=>Variants,default:()=>stories});var lodash=__webpack_require__("../../node_modules/lodash/lodash.js"),spinner=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/elements/spinner/index.js")),interactive_docs_page=__webpack_require__("./.storybook/interactive-docs-page.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const WithBlackBackground=({withBlackBackground=!0,children})=>(0,jsx_runtime.jsxs)("div",{className:"yst-relative yst-w-fit",children:[withBlackBackground&&(0,jsx_runtime.jsx)("div",{className:"yst-absolute yst-inset-0 yst--m-2 yst-bg-black"}),children]});WithBlackBackground.displayName="WithBlackBackground";const Factory={parameters:{controls:{disable:!1}}},Variants={render:args=>(0,jsx_runtime.jsxs)("div",{className:"yst-flex yst-gap-5",children:[(0,jsx_runtime.jsx)(spinner.A,{variant:"default"}),(0,jsx_runtime.jsx)(spinner.A,{variant:"primary"}),(0,jsx_runtime.jsx)(WithBlackBackground,{children:(0,jsx_runtime.jsx)(spinner.A,{variant:"white"})})]}),parameters:{docs:{description:{story:""}}}},Sizes={render:args=>(0,jsx_runtime.jsxs)("div",{className:"yst-flex yst-gap-5",children:[(0,jsx_runtime.jsx)(spinner.A,{size:"3"}),(0,jsx_runtime.jsx)(spinner.A,{size:"4"}),(0,jsx_runtime.jsx)(spinner.A,{size:"8"})]}),parameters:{docs:{description:{story:""}}}},stories={title:"1) Elements/Spinner",component:spinner.A,argTypes:{className:{control:"text"},variant:{control:"select",options:(0,lodash.keys)(spinner._.variant),table:{type:{summary:(0,lodash.keys)(spinner._.variant).join("|")}}},size:{control:"select",options:(0,lodash.keys)(spinner._.size),table:{type:{summary:(0,lodash.keys)(spinner._.size).join("|")}}}},args:{className:""},parameters:{docs:{description:{component:"Spinners are visual elements used to indicate that a process or task is in progress. The purpose of a spinner is to provide visual feedback to users that a process is ongoing, helping to manage their expectations and reduce frustration caused by waiting for a response or action to complete.\n\nSpinners are commonly used in various scenarios, including:\n- **Data loading:** Indicating that data is being fetched or retrieved from a server.\n- **Form submission:** Showing that a form is being submitted and processed.\n- **Content loading:** Signifying that content, such as images or videos, is being loaded or rendered."},page:()=>(0,jsx_runtime.jsx)(interactive_docs_page.f,{stories:[Variants,Sizes]})}},decorators:[(Story,context)=>(0,jsx_runtime.jsx)(WithBlackBackground,{withBlackBackground:"white"===context.args.variant,children:(0,jsx_runtime.jsx)(Story,{})})]}},"./src/hooks/use-svg-aria.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(isFocusable=null)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const aria={role:"img","aria-hidden":"true"};return null!==isFocusable&&(aria.focusable=isFocusable?"true":"false"),aria}),[isFocusable])},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);