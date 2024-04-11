(globalThis.webpackChunk_yoast_ui_library=globalThis.webpackChunk_yoast_ui_library||[]).push([[4756],{"./.storybook/interactive-docs-page.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>InteractiveDocsPage});var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const InteractiveDocsPage=({stories})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"meta"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"story"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.H2,{}),stories.map(((story,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.fy,{of:story},(null==story?void 0:story.name)||`story-${index}`)))]});InteractiveDocsPage.propTypes={stories:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]))},InteractiveDocsPage.defaultProps={stories:[]},InteractiveDocsPage.__docgenInfo={description:"An alternative version of the Storybook DocsPage component.\n\nReplacing the Stories component with individual DocsStory components.\nThis prevents Stories from passing `__forceInitialArgs` to the DocsStory components.\nWhich makes the stories are interactive on the docs page, making the `args` more like initial values.\n\n@param {(Object|function)[]} [stories] The stories to display.\n@returns {JSX.Element} The DocsPage component without stories.",methods:[],displayName:"InteractiveDocsPage",props:{stories:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"object"},{name:"func"}]}},required:!1}}}},"./src/components/feature-upsell/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Card:()=>Card,Factory:()=>Factory,default:()=>stories});var react=__webpack_require__("../../node_modules/react/index.js");const esm_LockOpenIcon=react.forwardRef((function LockOpenIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))}));var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),elements_button=__webpack_require__("./src/elements/button/index.js"),use_svg_aria=__webpack_require__("./src/hooks/use-svg-aria.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classNameMap={variant:{default:"yst-feature-upsell--default",card:"yst-feature-upsell--card"}},FeatureUpsell=({children,shouldUpsell=!0,className="",variant="card",cardLink="",cardText="",...cardProps})=>{const svgAriaProps=(0,use_svg_aria.A)();return shouldUpsell?(0,jsx_runtime.jsxs)("div",{className:classnames_default()("yst-feature-upsell",classNameMap.variant[variant],className),children:[(0,jsx_runtime.jsx)("div",{className:"yst-space-y-8 yst-grayscale",children}),(0,jsx_runtime.jsx)("div",{className:"yst-absolute yst-inset-0 yst-ring-1 yst-ring-black yst-ring-opacity-5 yst-shadow-lg yst-rounded-md"}),(0,jsx_runtime.jsx)("div",{className:"yst-absolute yst-inset-0 yst-flex yst-items-center yst-justify-center",children:(0,jsx_runtime.jsxs)(elements_button.A,{as:"a",className:"yst-gap-2 yst-shadow-lg yst-shadow-amber-700/30",variant:"upsell",href:cardLink,target:"_blank",rel:"noopener",...cardProps,children:[(0,jsx_runtime.jsx)(esm_LockOpenIcon,{className:"yst-w-5 yst-h-5 yst--ml-1 yst-shrink-0",...svgAriaProps}),cardText]})})]}):children};FeatureUpsell.displayName="FeatureUpsell",FeatureUpsell.propTypes={children:prop_types_default().node.isRequired,shouldUpsell:prop_types_default().bool,className:prop_types_default().string,variant:prop_types_default().oneOf(Object.keys(classNameMap.variant)),cardLink:prop_types_default().string,cardText:prop_types_default().string};const feature_upsell=FeatureUpsell;FeatureUpsell.__docgenInfo={description:"@param {JSX.node} children The children/content.\n@param {boolean} [shouldUpsell] Whether to show the upsell.\n@param {string} [className] Extra classname for the parent. Add your content padding here.\n@param {string} [variant] The variant. See `classNameMap.variant`.\n@param {string} [cardLink] The card' URL to link to. Required if the variant is `card`.\n@param {string} [cardText] The card' button text. Used when the variant is `card`.\n@param {Object} [cardProps] Any extra card/button props.\n@returns {JSX.Element} The feature or the upsell around the feature.",methods:[],displayName:"FeatureUpsell",props:{shouldUpsell:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:'"card"',computed:!1},description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"card"',computed:!1}]},required:!1},cardLink:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},cardText:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}};var interactive_docs_page=__webpack_require__("./.storybook/interactive-docs-page.js");const Factory={parameters:{controls:{disable:!1}}},Card={parameters:{controls:{disable:!1},docs:{description:{story:"When using the `card` variant. You should provide a `cardLink` and a `cardText`.\n"}}},args:{variant:"card",cardLink:"#",cardText:"Upgrade"}},stories={title:"2) Components/Feature upsell",component:feature_upsell,parameters:{docs:{description:{component:"A feature upsell component.\n"},page:()=>(0,jsx_runtime.jsx)(interactive_docs_page.f,{stories:[Card]})}},argTypes:{children:{control:"text"}},args:{children:(0,jsx_runtime.jsx)("p",{className:"yst-p-2 yst-bg-blue-700 yst-text-white",children:"Content that will be grayscale."})}}},"./src/elements/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,_:()=>classNameMap});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_spinner__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/elements/spinner/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classNameMap={variant:{primary:"yst-button--primary",secondary:"yst-button--secondary",tertiary:"yst-button--tertiary",error:"yst-button--error",upsell:"yst-button--upsell"},size:{default:"",small:"yst-button--small",large:"yst-button--large","extra-large":"yst-button--extra-large"}},Button=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((({children,as:Component,type,variant,size,isLoading,disabled,className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Component,{type:type||"button"===Component&&"button"||void 0,disabled,ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-button",classNameMap.variant[variant],classNameMap.size[size],isLoading&&"yst-cursor-wait",disabled&&"yst-button--disabled",className),...props,children:[isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_4__.A,{size:"small"===size?"3":"4",className:"yst--ml-1 yst-mr-2"}),children]})));Button.displayName="Button",Button.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired,as:prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType,type:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["button","submit","reset"]),variant:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.variant)),size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.size)),isLoading:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Button.defaultProps={as:"button",type:void 0,variant:"primary",size:"default",isLoading:!1,disabled:!1,className:""};const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:'@param {JSX.node} children Content of the button.\n@param {string|JSX.Element} [as="button"] Base component.\n@param {string} [type] Type attribute. Used when `as` is a `button`.\n@param {string} [variant="primary"] Button variant. See `classNameMap` for the options.\n@param {string} [size="default"] Button size. See `classNameMap` for the options.\n@param {boolean} [isLoading=false] Whether to show a spinner.\n@param {boolean} [disabled=false] Whether the button is disabled.\n@param {string} [className] CSS class.\n@returns {JSX.Element} Button component.',methods:[],displayName:"Button",props:{as:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"elementType"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",value:[{value:'"button"',computed:!1},{value:'"submit"',computed:!1},{value:'"reset"',computed:!1}]},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.variant )"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.size )"},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}}},"./src/elements/spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,_:()=>classNameMap});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/use-svg-aria.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classNameMap={variant:{default:"",primary:"yst-text-primary-500",white:"yst-text-white"},size:{3:"yst-w-3 yst-h-3",4:"yst-w-4 yst-h-4",8:"yst-w-8 yst-h-8"}},Spinner=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((({variant,size,className},ref)=>{const svgAriaProps=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.A)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg",{ref,xmlns:"http://www.w3.org/2000/svg/",fill:"none",viewBox:"0 0 24 24",className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-animate-spin",classNameMap.variant[variant],classNameMap.size[size],className),...svgAriaProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle",{className:"yst-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{className:"yst-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}));Spinner.displayName="Spinner",Spinner.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.variant)),size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.size)),className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Spinner.defaultProps={variant:"default",size:"4",className:""};const __WEBPACK_DEFAULT_EXPORT__=Spinner;Spinner.__docgenInfo={description:"@param {string} [variant=default] The variant.\n@param {string} [size] The size.\n@param {string} [className] The HTML class.\n@returns {JSX.Element} The spinner.",methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.variant )"},required:!1},size:{defaultValue:{value:'"4"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.size )"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/hooks/use-svg-aria.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(isFocusable=null)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const aria={role:"img","aria-hidden":"true"};return null!==isFocusable&&(aria.focusable=isFocusable?"true":"false"),aria}),[isFocusable])},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);