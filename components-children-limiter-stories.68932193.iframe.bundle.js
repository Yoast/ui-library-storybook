(globalThis.webpackChunk_yoast_ui_library=globalThis.webpackChunk_yoast_ui_library||[]).push([[2406],{"./.storybook/interactive-docs-page.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>InteractiveDocsPage});var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const InteractiveDocsPage=({stories})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"meta"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"story"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.H2,{}),stories.map(((story,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.fy,{of:story},(null==story?void 0:story.name)||`story-${index}`)))]});InteractiveDocsPage.propTypes={stories:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]))},InteractiveDocsPage.defaultProps={stories:[]},InteractiveDocsPage.__docgenInfo={description:"An alternative version of the Storybook DocsPage component.\n\nReplacing the Stories component with individual DocsStory components.\nThis prevents Stories from passing `__forceInitialArgs` to the DocsStory components.\nWhich makes the stories are interactive on the docs page, making the `args` more like initial values.\n\n@param {(Object|function)[]} [stories] The stories to display.\n@returns {JSX.Element} The DocsPage component without stories.",methods:[],displayName:"InteractiveDocsPage",props:{stories:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"object"},{name:"func"}]}},required:!1}}}},"./src/components/children-limiter/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Factory:()=>Factory,default:()=>stories});var react=__webpack_require__("../../node_modules/react/index.js"),redux_toolkit_esm=__webpack_require__("../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),lodash=__webpack_require__("../../node_modules/lodash/lodash.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),esm=__webpack_require__("./node_modules/react-animate-height/dist/esm/index.js"),use_toggle_state=__webpack_require__("./src/hooks/use-toggle-state.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const ChildrenLimiter=({limit,children,renderButton,initialShow=!1,id:requestedId=""})=>{const[show,toggle]=(0,use_toggle_state.A)(initialShow),flattened=(0,react.useMemo)((()=>(0,lodash.flatten)(children)),[children]),before=(0,react.useMemo)((()=>(0,lodash.slice)(flattened,0,limit)),[flattened]),after=(0,react.useMemo)((()=>(0,lodash.slice)(flattened,limit)),[flattened]),id=(0,react.useMemo)((()=>requestedId||`yst-animate-height-${(0,redux_toolkit_esm.Ak)()}`),[requestedId]),ariaProps=(0,react.useMemo)((()=>({"aria-expanded":show,"aria-controls":id})),[show,id]);return limit<0||flattened.length<=limit?children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[before,(0,jsx_runtime.jsx)(esm.A,{id,easing:"ease-in-out",duration:300,height:show?"auto":0,animateOpacity:!0,children:after}),renderButton({show,toggle,ariaProps})]})};ChildrenLimiter.propTypes={limit:prop_types_default().number.isRequired,children:prop_types_default().arrayOf(prop_types_default().node).isRequired,renderButton:prop_types_default().func.isRequired,initialShow:prop_types_default().bool,id:prop_types_default().string};const children_limiter=ChildrenLimiter;ChildrenLimiter.__docgenInfo={description:"@param {number} limit Maximum amount of children to render before more/less. Use < 0 for no limit.\n@param {JSX.node[]} children The children.\n@param {function} renderButton Render the more/less button. Receives `show`, `toggle` and `ariaProps`.\n@param {boolean} [initialShow] Whether to initially show all the children. Defaults to false.\n@param {string} [id] Optional ID.\n@returns {JSX.Element|JSX.node[]} The children or the limited children with more/less.",methods:[],displayName:"ChildrenLimiter",props:{initialShow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},limit:{description:"",type:{name:"number"},required:!0},children:{description:"",type:{name:"arrayOf",value:{name:"node"}},required:!0},renderButton:{description:"",type:{name:"func"},required:!0}}};var elements_button=__webpack_require__("./src/elements/button/index.js"),interactive_docs_page=__webpack_require__("./.storybook/interactive-docs-page.js");const renderButton=({show,toggle,ariaProps})=>(0,jsx_runtime.jsx)(elements_button.A,{className:"yst-my-1.5",onClick:toggle,...ariaProps,children:show?"Less":"More"});renderButton.displayName="renderButton";const Template=args=>(0,jsx_runtime.jsx)(children_limiter,{...args,children:[...Array(10).keys()].map((n=>(0,jsx_runtime.jsx)("p",{children:n},n)))});Template.displayName="Template";const Factory={render:Template.bind({}),parameters:{controls:{disable:!1}}},stories={title:"2) Components/Children limiter",component:children_limiter,parameters:{docs:{description:{component:"A simple component to limit the amount of children rendered. Handy within menus."},page:interactive_docs_page.f}},argTypes:{children:{control:{disable:!0}},renderButton:{control:{disable:!0}}},args:{limit:5,renderButton}}},"./src/elements/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,_:()=>classNameMap});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_spinner__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/elements/spinner/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classNameMap={variant:{primary:"yst-button--primary",secondary:"yst-button--secondary",tertiary:"yst-button--tertiary",error:"yst-button--error",upsell:"yst-button--upsell"},size:{default:"",small:"yst-button--small",large:"yst-button--large","extra-large":"yst-button--extra-large"}},Button=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((({children,as:Component,type,variant,size,isLoading,disabled,className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Component,{type:type||"button"===Component&&"button"||void 0,disabled,ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-button",classNameMap.variant[variant],classNameMap.size[size],isLoading&&"yst-cursor-wait",disabled&&"yst-button--disabled",className),...props,children:[isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_4__.A,{size:"small"===size?"3":"4",className:"yst--ml-1 yst-mr-2"}),children]})));Button.displayName="Button",Button.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired,as:prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType,type:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["button","submit","reset"]),variant:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.variant)),size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.size)),isLoading:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Button.defaultProps={as:"button",type:void 0,variant:"primary",size:"default",isLoading:!1,disabled:!1,className:""};const __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:'@param {JSX.node} children Content of the button.\n@param {string|JSX.Element} [as="button"] Base component.\n@param {string} [type] Type attribute. Used when `as` is a `button`.\n@param {string} [variant="primary"] Button variant. See `classNameMap` for the options.\n@param {string} [size="default"] Button size. See `classNameMap` for the options.\n@param {boolean} [isLoading=false] Whether to show a spinner.\n@param {boolean} [disabled=false] Whether the button is disabled.\n@param {string} [className] CSS class.\n@returns {JSX.Element} Button component.',methods:[],displayName:"Button",props:{as:{defaultValue:{value:'"button"',computed:!1},description:"",type:{name:"elementType"},required:!1},type:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",value:[{value:'"button"',computed:!1},{value:'"submit"',computed:!1},{value:'"reset"',computed:!1}]},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.variant )"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.size )"},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}}},"./src/elements/spinner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,_:()=>classNameMap});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/use-svg-aria.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classNameMap={variant:{default:"",primary:"yst-text-primary-500",white:"yst-text-white"},size:{3:"yst-w-3 yst-h-3",4:"yst-w-4 yst-h-4",8:"yst-w-8 yst-h-8"}},Spinner=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((({variant,size,className},ref)=>{const svgAriaProps=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.A)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg",{ref,xmlns:"http://www.w3.org/2000/svg/",fill:"none",viewBox:"0 0 24 24",className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-animate-spin",classNameMap.variant[variant],classNameMap.size[size],className),...svgAriaProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle",{className:"yst-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{className:"yst-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}));Spinner.displayName="Spinner",Spinner.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.variant)),size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(classNameMap.size)),className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Spinner.defaultProps={variant:"default",size:"4",className:""};const __WEBPACK_DEFAULT_EXPORT__=Spinner;Spinner.__docgenInfo={description:"@param {string} [variant=default] The variant.\n@param {string} [size] The size.\n@param {string} [className] The HTML class.\n@returns {JSX.Element} The spinner.",methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.variant )"},required:!1},size:{defaultValue:{value:'"4"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( classNameMap.size )"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/hooks/use-svg-aria.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(isFocusable=null)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const aria={role:"img","aria-hidden":"true"};return null!==isFocusable&&(aria.focusable=isFocusable?"true":"false"),aria}),[isFocusable])},"./src/hooks/use-toggle-state.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(initialState=!0)=>{const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),toggleState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setState(!state)),[state,setState]),setTrue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setState(!0)),[setState]),setFalse=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setState(!1)),[setState]);return[state,toggleState,setState,setTrue,setFalse]}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);