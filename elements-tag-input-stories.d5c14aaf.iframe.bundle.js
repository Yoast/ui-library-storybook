(globalThis.webpackChunk_yoast_ui_library=globalThis.webpackChunk_yoast_ui_library||[]).push([[3288],{"../../node_modules/@heroicons/react/solid/esm/XIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function XIcon(props,svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}))},"./.storybook/interactive-docs-page.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>InteractiveDocsPage});var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const InteractiveDocsPage=({stories})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"meta"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"story"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.H2,{}),stories.map(((story,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.fy,{of:story},(null==story?void 0:story.name)||`story-${index}`)))]});InteractiveDocsPage.propTypes={stories:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]))},InteractiveDocsPage.defaultProps={stories:[]},InteractiveDocsPage.__docgenInfo={description:"An alternative version of the Storybook DocsPage component.\n\nReplacing the Stories component with individual DocsStory components.\nThis prevents Stories from passing `__forceInitialArgs` to the DocsStory components.\nWhich makes the stories are interactive on the docs page, making the `args` more like initial values.\n\n@param {(Object|function)[]} [stories] The stories to display.\n@returns {JSX.Element} The DocsPage component without stories.",methods:[],displayName:"InteractiveDocsPage",props:{stories:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"object"},{name:"func"}]}},required:!1}}}},"./src/elements/badge/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classNameMap={variant:{info:"yst-badge--info",upsell:"yst-badge--upsell",plain:"yst-badge--plain"},size:{default:"",small:"yst-badge--small",large:"yst-badge--large"}},Badge=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children,as:Component,variant,size,className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-badge",classNameMap.variant[variant],classNameMap.size[size],className),...props,children}))),propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,as:prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType,variant:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(Object.keys(classNameMap.variant)),size:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(Object.keys(classNameMap.size)),className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};Badge.displayName="Badge",Badge.propTypes=propTypes,Badge.defaultProps={as:"span",variant:"info",size:"default",className:""};const __WEBPACK_DEFAULT_EXPORT__=Badge;Badge.__docgenInfo={description:"@param {JSX.node} children Content of the Badge.\n@param {string|function} [as] Base component.\n@param {string} [variant] Badge variant. See `classNameMap.variant` for the options.\n@param {string} [size] Badge size. See `classNameMap.size` for the options.\n@param {string} [className] CSS class.\n@returns {JSX.Element} Badge component.",methods:[],displayName:"Badge",props:{as:{defaultValue:{value:'"span"',computed:!1},description:"",type:{name:"elementType"},required:!1},variant:{defaultValue:{value:'"info"',computed:!1},description:"",type:{name:"enum",value:[{value:'"info"',computed:!1},{value:'"upsell"',computed:!1},{value:'"plain"',computed:!1}]},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"small"',computed:!1},{value:'"large"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}}},"./src/elements/tag-input/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@heroicons/react/solid/esm/XIcon.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/elements/badge/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Tag=({tag,index,disabled=!1,onRemoveTag,screenReaderRemoveTag,...props})=>{const handleKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event=>{if(!disabled)switch(null==event?void 0:event.key){case"Delete":case"Backspace":return onRemoveTag(index),event.preventDefault(),!0}}),[index,disabled,onRemoveTag]),handleClick=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event=>{if(!disabled)return onRemoveTag(index),event.preventDefault(),!0}),[index,disabled,onRemoveTag]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_4__.A,{onKeyDown:handleKeyDown,...props,variant:"plain",className:"yst-tag-input__tag",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"yst-mb-px",children:tag}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{type:"button",onClick:handleClick,className:"yst-tag-input__remove-tag",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"yst-sr-only",children:screenReaderRemoveTag}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.A,{className:"yst-h-3 yst-w-3"})]})]})};Tag.displayName="Tag",Tag.propTypes={tag:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired,index:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired,disabled:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onRemoveTag:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired,screenReaderRemoveTag:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired};const TagInput=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((({tags=[],children,className,disabled,onAddTag,onRemoveTag,onSetTags,onBlur,screenReaderRemoveTag,...props},ref)=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event=>{var _event$target;(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(null==event||null===(_event$target=event.target)||void 0===_event$target?void 0:_event$target.value)&&setText(event.target.value)}),[setText]),handleKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event=>{switch(event.key){case",":case"Enter":return text.length>0&&(onAddTag(text),setText("")),event.preventDefault(),!0;case"Backspace":if(0!==text.length||0===tags.length)break;return onRemoveTag(tags.length-1),event.ctrlKey&&onSetTags([]),event.preventDefault(),!0}}),[text,tags,setText,onAddTag]),handleBlur=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event=>{text.length>0&&(onAddTag(text),setText("")),onBlur(event)}),[text,onAddTag,setText,onBlur]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-tag-input",disabled&&"yst-tag-input--disabled",className),children:[children||(0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(tags,((tag,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Tag,{tag,index,disabled,onRemoveTag,screenReaderRemoveTag},`tag-${index}`))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{ref,type:"text",disabled,className:"yst-tag-input__input",onKeyDown:handleKeyDown,...props,onChange:handleChange,onBlur:handleBlur,value:text})]})}));TagInput.displayName="TagInput",TagInput.propTypes={tags:prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onAddTag:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,onRemoveTag:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,onSetTags:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,onBlur:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,screenReaderRemoveTag:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string},TagInput.defaultProps={tags:[],children:null,className:"",disabled:!1,onAddTag:lodash__WEBPACK_IMPORTED_MODULE_1__.noop,onRemoveTag:lodash__WEBPACK_IMPORTED_MODULE_1__.noop,onSetTags:lodash__WEBPACK_IMPORTED_MODULE_1__.noop,onBlur:lodash__WEBPACK_IMPORTED_MODULE_1__.noop,screenReaderRemoveTag:"Remove tag"},TagInput.Tag=Tag,TagInput.Tag.displayName="TagInput.Tag";const __WEBPACK_DEFAULT_EXPORT__=TagInput;Tag.__docgenInfo={description:"@param {string} tag The tag / label.\n@param {number} index The tag index.\n@param {boolean} [disabled] Whether the component is disabled.\n@param {function} onRemoveTag Remove tag handler.\n@param {string} screenReaderRemoveTag Screen reader text for the remove tag button.\n@param {Object} [props] Extra properties.\n@returns {JSX.Element} The element.",methods:[],displayName:"Tag",props:{disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},tag:{description:"",type:{name:"string"},required:!0},index:{description:"",type:{name:"number"},required:!0},onRemoveTag:{description:"",type:{name:"func"},required:!0},screenReaderRemoveTag:{description:"",type:{name:"string"},required:!0}}},TagInput.__docgenInfo={description:"@param {string[]} [tags] The tags.\n@param {JSX.node} [children] Render tags override.\n@param {string} [className] Extra CSS class.\n@param {boolean} [disabled] Whether the input is disabled.\n@param {function} [onAddTag] Add tag handler.\n@param {function} [onRemoveTag] Remove tag handler.\n@param {function} [onSetTags] Set tag handler.\n@param {function} [onBlur] Blur handler.\n@param {string} [screenReaderRemoveTag] Screen reader text for the remove tag button.\n@param {object} [props] Extra properties.\n@returns {JSX.Element} The element.",methods:[{name:"Tag",docblock:null,modifiers:["static"],params:[{name:"{ tag, index, disabled = false, onRemoveTag, screenReaderRemoveTag, ...props }",optional:!1,type:null}],returns:null}],displayName:"TagInput",props:{tags:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onAddTag:{defaultValue:{value:"noop",computed:!0},description:"",type:{name:"func"},required:!1},onRemoveTag:{defaultValue:{value:"noop",computed:!0},description:"",type:{name:"func"},required:!1},onSetTags:{defaultValue:{value:"noop",computed:!0},description:"",type:{name:"func"},required:!1},onBlur:{defaultValue:{value:"noop",computed:!0},description:"",type:{name:"func"},required:!1},screenReaderRemoveTag:{defaultValue:{value:'"Remove tag"',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/elements/tag-input/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Factory:()=>Factory,default:()=>stories});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("../../node_modules/react/index.js"),tag_input=__webpack_require__("./src/elements/tag-input/index.js"),interactive_docs_page=__webpack_require__("./.storybook/interactive-docs-page.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Template=args=>{const[{tags},updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)(),addTag=(0,react.useCallback)((tag=>{updateArgs({tags:[...tags,tag]})}),[tags,updateArgs]),removeTag=(0,react.useCallback)((index=>{updateArgs({tags:[...tags.slice(0,index),...tags.slice(index+1)]})}),[tags,updateArgs]);return(0,jsx_runtime.jsx)(tag_input.A,{...args,tags:tags||[],onAddTag:addTag,onRemoveTag:removeTag})};Template.displayName="Template";const Factory={render:Template.bind({}),parameters:{controls:{disable:!1}}},stories={title:"1) Elements/Tag input",component:tag_input.A,parameters:{docs:{description:{component:"Tag inputs are designed to simplify the input of multiple tags. They provide a seamless way for users to interact with and manage their selections by inserting and removing tags with ease."},page:interactive_docs_page.f}},argTypes:{children:{control:"text",description:"Overrides `tags`. You can pass Tag subcomponent instead (e.g. `TagInput.Tag`).",table:{type:{summary:"JSX.node"}}},tags:{description:"Array of options to display."},tag:{control:"text",description:"[`TagInput.Tag`] The tag (label).",table:{type:{summary:"string"}}},index:{description:"[`TagInput.Tag`] The tag index.",control:"number",table:{type:{summary:"number"}}},disabled:{control:"boolean",description:"Also for `TagInput.Tag`.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},onAddTag:{control:"func",description:"Callback when a tag is added.",table:{type:{required:!0,summary:"func"}}},onRemoveTag:{control:"func",description:"Callback when a tag is removed. Also for `TagInput.Tag`.",table:{type:{required:!0,summary:"func"}}},onSetTags:{control:"func",description:"Sets the tags to the given array.",table:{type:{required:!0,summary:"func"}}},onBlur:{control:"func",description:"Callback when the input lost focus. A tag will be created from the current input value.",table:{type:{required:!0,summary:"func"}}},screenReaderRemoveTag:{description:"[`TagInput.Tag`] The screen reader text for the remove tag button.",control:"text",table:{type:{summary:"string"}}}},args:{tags:["These are","hopefully","enough","tags","to show","that","this component","will","wrap around","and","continue","on the next line.","This is a longer tag that includes spaces!"]}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);