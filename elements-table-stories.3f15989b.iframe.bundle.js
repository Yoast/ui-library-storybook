/*! For license information please see elements-table-stories.3f15989b.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_yoast_ui_library=globalThis.webpackChunk_yoast_ui_library||[]).push([[851],{"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,fy:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.fy,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/interactive-docs-page.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>InteractiveDocsPage});var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const InteractiveDocsPage=({stories})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"meta"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"story"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.H2,{}),stories.map(((story,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.fy,{of:story},(null==story?void 0:story.name)||`story-${index}`)))]});InteractiveDocsPage.propTypes={stories:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]))},InteractiveDocsPage.defaultProps={stories:[]},InteractiveDocsPage.__docgenInfo={description:"An alternative version of the Storybook DocsPage component.\n\nReplacing the Stories component with individual DocsStory components.\nThis prevents Stories from passing `__forceInitialArgs` to the DocsStory components.\nWhich makes the stories are interactive on the docs page, making the `args` more like initial values.\n\n@param {(Object|function)[]} [stories] The stories to display.\n@returns {JSX.Element} The DocsPage component without stories.",methods:[],displayName:"InteractiveDocsPage",props:{stories:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"object"},{name:"func"}]}},required:!1}}}},"./src/elements/table/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const rowClassNameMap={variant:{striped:"even:yst-bg-slate-50 odd:yst-bg-white",plain:""}},Cell=({children,className="",...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-px-3 yst-py-4 yst-text-sm yst-text-slate-500",className),...props,children});Cell.displayName="Cell",Cell.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,variant:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(Object.keys(rowClassNameMap.variant)),className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};const Row=({children,variant="plain",className="",...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(rowClassNameMap.variant[variant],className),...props,children});Row.displayName="Row",Row.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,variant:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(Object.keys(rowClassNameMap.variant)),className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};const Header=({children,className="",...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-px-3 yst-py-4 yst-text-left yst-text-sm yst-font-semibold yst-text-slate-900",className),...props,children});Header.displayName="Header",Header.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};const Head=({children,className="",...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-bg-slate-50",className),...props,children});Head.displayName="Head",Head.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};const Body=({children,className="",...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-divide-y yst-divide-gray-200 yst-bg-white",className),...props,children});Body.displayName="Body",Body.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};const Table=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children,className="",...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"yst-overflow-hidden yst-shadow yst-ring-1 yst-ring-black yst-ring-opacity-5 yst-rounded-lg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-min-w-full yst-divide-y yst-divide-slate-300",className),...props,ref,children})})));Table.displayName="Table",Table.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},Table.defaultProps={className:""},Table.Head=Head,Table.Head.displayName="Table.Head",Table.Body=Body,Table.Body.displayName="Table.Body",Table.Header=Header,Table.Header.displayName="Table.Header",Table.Row=Row,Table.Row.displayName="Table.Row",Table.Cell=Cell,Table.Cell.displayName="Table.Cell";const __WEBPACK_DEFAULT_EXPORT__=Table;Table.__docgenInfo={description:"@param {JSX.node} children The content.\n@param {string} [className] Optional class name.\n@param {Object} [props] Optional table props.\n@returns {JSX.Element} The element.",methods:[{name:"Head",docblock:null,modifiers:["static"],params:[{name:'{ children, className = "", ...props }',optional:!1,type:null}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:'{ children, className = "", ...props }',optional:!1,type:null}],returns:null},{name:"Header",docblock:null,modifiers:["static"],params:[{name:'{ children, className = "", ...props }',optional:!1,type:null}],returns:null},{name:"Row",docblock:null,modifiers:["static"],params:[{name:'{ children, variant = "plain", className = "", ...props }',optional:!1,type:null}],returns:null},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:'{ children, className = "", ...props }',optional:!1,type:null}],returns:null}],displayName:"Table",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}}},"./src/elements/table/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Factory:()=>Factory,TableBody:()=>TableBody,TableCell:()=>TableCell,TableHead:()=>TableHead,TableHeader:()=>TableHeader,TableRow:()=>TableRow,default:()=>stories});__webpack_require__("../../node_modules/react/index.js");var table=__webpack_require__("./src/elements/table/index.js"),interactive_docs_page=__webpack_require__("./.storybook/interactive-docs-page.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Factory={parameters:{controls:{disable:!1}},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(table.A.Head,{children:(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 1"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 2"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 3"})]})}),(0,jsx_runtime.jsxs)(table.A.Body,{children:[(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]}),(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]})]})]})}},TableHead={name:"Table head",parameters:{controls:{disable:!1},docs:{description:{story:"The sub component `Table.Head`. Has `Table.Row` as `children`, and `Table.Row` has `Table.Header` as children.\n"}}},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(table.A.Head,{className:"yst-bg-amber-200",children:(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 1"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 2"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 3"})]})}),(0,jsx_runtime.jsxs)(table.A.Body,{children:[(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]}),(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]})]})]})}},TableRow={name:"Table row",parameters:{controls:{disable:!1},docs:{description:{story:"The sub component `Table.Row`.\n"}}},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(table.A.Head,{children:(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 1"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 2"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 3"})]})}),(0,jsx_runtime.jsxs)(table.A.Body,{children:[(0,jsx_runtime.jsxs)(table.A.Row,{className:"yst-bg-amber-200",children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]}),(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]})]})]})}},TableHeader={name:"Table header",parameters:{controls:{disable:!1},docs:{description:{story:"The sub component `Table.Header`.\n"}}},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(table.A.Head,{children:(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Header,{className:"yst-bg-amber-200",children:"Header 1"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 2"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 3"})]})}),(0,jsx_runtime.jsxs)(table.A.Body,{children:[(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]}),(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]})]})]})}},TableBody={name:"Table body",parameters:{controls:{disable:!1},docs:{description:{story:"The sub component `Table.Body`. Has `Table.Row` as `children`, and `Table.Row` has `Table.Cell` as children.\n"}}},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(table.A.Head,{children:(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 1"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 2"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 3"})]})}),(0,jsx_runtime.jsxs)(table.A.Body,{className:"yst-bg-amber-200",children:[(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]}),(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]})]})]})}},TableCell={name:"Table cell",parameters:{controls:{disable:!1},docs:{description:{story:"The sub component `Table.Cell`.\n"}}},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(table.A.Head,{children:(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 1"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 2"}),(0,jsx_runtime.jsx)(table.A.Header,{children:"Header 3"})]})}),(0,jsx_runtime.jsxs)(table.A.Body,{children:[(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{className:"yst-bg-amber-200",children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]}),(0,jsx_runtime.jsxs)(table.A.Row,{children:[(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 1"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 2"}),(0,jsx_runtime.jsx)(table.A.Cell,{children:"Cell 3"})]})]})]})}},stories={title:"1) Elements/Table",component:table.A,argTypes:{children:{control:!1}},parameters:{docs:{description:{component:"\nTables are designed to efficiently organize and present data. They provide a structured layout that enables straightforward comprehension and interaction. With a variety of customizable features, they empower developers to craft dynamic and user-friendly interfaces for showcasing diverse types of information. Whether it's tabular data, lists, or grids, tables serve as powerful tools for enriching data visualization and user experience.\n\nA table comprises subcomponents that enable table construction. It includes `Table.Head` and `Table.Body` as child components.\n"},page:()=>(0,jsx_runtime.jsx)(interactive_docs_page.f,{stories:[TableHead,TableRow,TableHeader,TableBody,TableCell]})}}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);