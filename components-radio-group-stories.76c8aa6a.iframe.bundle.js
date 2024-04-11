(globalThis.webpackChunk_yoast_ui_library=globalThis.webpackChunk_yoast_ui_library||[]).push([[2151],{"../../node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function CheckCircleIcon(props,svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))}))},"./.storybook/interactive-docs-page.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>InteractiveDocsPage});var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const InteractiveDocsPage=({stories})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.hE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Pd,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"meta"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.VY,{of:"story"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.Tn,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.H2,{}),stories.map(((story,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_0__.fy,{of:story},(null==story?void 0:story.name)||`story-${index}`)))]});InteractiveDocsPage.propTypes={stories:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,prop_types__WEBPACK_IMPORTED_MODULE_3___default().func]))},InteractiveDocsPage.defaultProps={stories:[]},InteractiveDocsPage.__docgenInfo={description:"An alternative version of the Storybook DocsPage component.\n\nReplacing the Stories component with individual DocsStory components.\nThis prevents Stories from passing `__forceInitialArgs` to the DocsStory components.\nWhich makes the stories are interactive on the docs page, making the `args` more like initial values.\n\n@param {(Object|function)[]} [stories] The stories to display.\n@returns {JSX.Element} The DocsPage component without stories.",methods:[],displayName:"InteractiveDocsPage",props:{stories:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"object"},{name:"func"}]}},required:!1}}}},"./src/components/radio-group/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChildrenProp:()=>ChildrenProp,Factory:()=>Factory,Variants:()=>Variants,WithLabelAndDescription:()=>WithLabelAndDescription,WithValue:()=>WithValue,default:()=>stories});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),lodash=__webpack_require__("../../node_modules/lodash/lodash.js"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),elements_label=__webpack_require__("./src/elements/label/index.js"),elements_radio=__webpack_require__("./src/elements/radio/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classNameMap={variant:{default:"","inline-block":"yst-radio-group--inline-block"}},RadioGroup=({children=null,id="",name="",value="",label,description,options,onChange=lodash.noop,variant="default",disabled=!1,className="",...props})=>{const handleChange=(0,react.useCallback)((({target})=>target.checked&&onChange(target.value)),[onChange]);return(0,jsx_runtime.jsxs)("fieldset",{id:`radio-group-${id}`,className:classnames_default()("yst-radio-group",disabled&&"yst-radio-group--disabled",classNameMap.variant[variant],className),children:[label&&(0,jsx_runtime.jsx)(elements_label.A,{as:"legend",className:"yst-radio-group__label",label}),description&&(0,jsx_runtime.jsx)("div",{className:"yst-radio-group__description",children:description}),(0,jsx_runtime.jsx)("div",{className:"yst-radio-group__options",children:children||options.map(((option,index)=>{const optionId=`radio-${id}-${index}`;return(0,jsx_runtime.jsx)(elements_radio.A,{id:optionId,name,value:option.value,label:option.label,screenReaderLabel:option.screenReaderLabel,variant,checked:value===option.value,onChange:handleChange,disabled,...props},optionId)}))})]})};RadioGroup.displayName="RadioGroup",RadioGroup.propTypes={children:prop_types_default().node,id:prop_types_default().string,name:prop_types_default().string,value:prop_types_default().string,label:prop_types_default().string,description:prop_types_default().string,options:prop_types_default().arrayOf(prop_types_default().shape({value:prop_types_default().string.isRequired,label:prop_types_default().string.isRequired,screenReaderLabel:prop_types_default().string})),onChange:prop_types_default().func,variant:prop_types_default().oneOf(Object.keys(classNameMap.variant)),disabled:prop_types_default().bool,className:prop_types_default().string},(RadioGroup.Radio=elements_radio.A).displayName="RadioGroup.Radio";const radio_group=RadioGroup;RadioGroup.__docgenInfo={description:"@param {JSX.node} children Children are rendered below the radio group.\n@param {string} [id] Identifier.\n@param {string} [name] Name.\n@param {string} [value] Value.\n@param {string} [label] Label.\n@param {string} [description] Description.\n@param {{ value: string, label: string, screenReaderLabel: string }[]} options Options to choose from.\n@param {Function} [onChange] Change handler.\n@param {string} [variant] Variant.\n@param {boolean} [disabled] Disabled state.\n@param {string} [className] CSS class.\n@param {Object} [props] Extra Radio props.\n@returns {JSX.Element} RadioGroup component.",methods:[],displayName:"RadioGroup",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},name:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"noop",computed:!0},description:"",type:{name:"func"},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"inline-block"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"string",required:!0},label:{name:"string",required:!0},screenReaderLabel:{name:"string",required:!1}}}},required:!1}}};var interactive_docs_page=__webpack_require__("./.storybook/interactive-docs-page.js");const Template=args=>{const[{value},updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)(),handleChange=(0,react.useCallback)((newValue=>updateArgs({value:newValue})),[updateArgs]);return(0,jsx_runtime.jsx)(radio_group,{...args,value:value||"",onChange:handleChange})};Template.displayName="Template";const Factory={render:Template.bind({}),parameters:{controls:{disable:!1}},args:{id:"radio-group",name:"name",value:"1",options:[{value:"1",label:"1",screenReaderLabel:"Option #1"},{value:"2",label:"2",screenReaderLabel:"Option #2"},{value:"3",label:"3",screenReaderLabel:"Option #3"},{value:"4",label:"4",screenReaderLabel:"Option #4"}],label:"A Radio Group"}},Variants={render:args=>(0,jsx_runtime.jsxs)("div",{className:"yst-flex yst-flex-col yst-gap-4",children:[(0,jsx_runtime.jsx)(radio_group,{id:"radio-group-1",name:"name-1",value:"2",options:Factory.args.options,label:"Default radio group",onChange:lodash.noop}),(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)(radio_group,{id:"radio-group-2",name:"name-2",value:"2",label:"Inline-block radio group",description:"Radio group with a description.",options:Factory.args.options,onChange:lodash.noop,variant:"inline-block"})]}),parameters:{docs:{description:{story:"In the `inline-block` variant, the `screenReaderLabel` prop is used to provide screen readers with a useful label.\n"}}}},WithLabelAndDescription={render:Template.bind({}),name:"With label and description",parameters:{controls:{disable:!1},docs:{description:{story:""}}},args:{id:"radio-group-3",name:"name-3",label:"Radio group with a label",options:Factory.args.options,description:"Radio group with a description."}},WithValue={render:Template.bind({}),name:"With value",parameters:{controls:{disable:!1},docs:{description:{story:""}}},args:{id:"radio-group-4",name:"name-4",value:"2",label:"Radio Group with a value",options:Factory.args.options}},ChildrenProp={render:Template.bind({}),name:"Children prop",parameters:{controls:{disable:!1},docs:{description:{story:"The `children` prop can be used to render custom content. The options are rendered using the sub component `Radio` (`RadioGroup.Radio` is equal to `Radio` element). Default values should be set inside the child component and not the `value` prop.\n"}}},args:{id:"radio-group-5",name:"name-5",label:"Radio Group with children",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(radio_group.Radio,{defaultChecked:!0,value:"child 1",label:"Option 1",id:"radio-1",name:"name-5"}),(0,jsx_runtime.jsx)(radio_group.Radio,{value:"child 2",label:"Option 2",id:"radio-2",name:"name-5"}),(0,jsx_runtime.jsx)(radio_group.Radio,{value:"child 3",label:"Option 3",id:"radio-3",name:"name-5"})]})}},stories={title:"2) Components/Radio group",component:radio_group,argTypes:{children:{control:{disable:!0}}},parameters:{docs:{description:{component:"A simple radio group component.\n"},page:()=>(0,jsx_runtime.jsx)(interactive_docs_page.f,{stories:[Variants,WithLabelAndDescription,WithValue,ChildrenProp]})}}}},"./src/elements/label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Label=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({as:Component,className,label,children,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-label",className),...props,children:label||children||null})));Label.displayName="Label",Label.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,as:prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},Label.defaultProps={label:"",children:"",as:"label",className:""};const __WEBPACK_DEFAULT_EXPORT__=Label;Label.__docgenInfo={description:"@param {string} label Content of the Label. Note that this is a string ONLY for a11y reasons.\n@param {string} children Alternative to the label. See label.\n@param {string|JSX.node} [as] Base component.\n@param {string} [className] CSS class.\n@returns {JSX.Element} Label component.",methods:[],displayName:"Label",props:{label:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},as:{defaultValue:{value:'"label"',computed:!1},description:"",type:{name:"elementType"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/elements/radio/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/use-svg-aria.js"),_label__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/elements/label/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Radio=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({id,name,value,label,screenReaderLabel,variant,disabled,className,isLabelDangerousHtml,...props},ref)=>{const svgAriaProps=(0,_hooks__WEBPACK_IMPORTED_MODULE_3__.A)();return"inline-block"===variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-radio","yst-radio--inline-block",disabled&&"yst-radio--disabled",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"radio",id,name,value,disabled,className:"yst-radio__input","aria-label":screenReaderLabel,...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"yst-radio__content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_label__WEBPACK_IMPORTED_MODULE_4__.A,{htmlFor:id,className:"yst-radio__label",label:isLabelDangerousHtml?null:label,dangerouslySetInnerHTML:isLabelDangerousHtml?{__html:label}:null}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.A,{className:"yst-radio__check",...svgAriaProps})]})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-radio",disabled&&"yst-radio--disabled",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{ref,type:"radio",id,name,value,disabled,className:"yst-radio__input",...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_label__WEBPACK_IMPORTED_MODULE_4__.A,{htmlFor:id,className:"yst-radio__label",label:isLabelDangerousHtml?null:label,dangerouslySetInnerHTML:isLabelDangerousHtml?{__html:label}:null})]})}));Radio.displayName="Radio",Radio.propTypes={name:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired,id:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired,isLabelDangerousHtml:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,screenReaderLabel:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(Object.keys({default:"","inline-block":"yst-radio--inline-block"})),disabled:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string},Radio.defaultProps={screenReaderLabel:"",variant:"default",disabled:!1,className:"",isLabelDangerousHtml:!1};const __WEBPACK_DEFAULT_EXPORT__=Radio;Radio.__docgenInfo={description:"@param {string} id Identifier.\n@param {string} name Name.\n@param {string} value Value.\n@param {string} label Label.\n@param {string} [screenReaderLabel] Screen reader label.\n@param {string} [variant] Variant.\n@param {boolean} [disabled] Disabled state.\n@param {string} [className] CSS class.\n@param {boolean} [isLabelDangerousHtml] Whether the label should be dangerously set as HTML.\n@returns {JSX.Element} Radio component.",methods:[],displayName:"Radio",props:{screenReaderLabel:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"inline-block"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},isLabelDangerousHtml:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},name:{description:"",type:{name:"string"},required:!0},id:{description:"",type:{name:"string"},required:!0},value:{description:"",type:{name:"string"},required:!0},label:{description:"",type:{name:"string"},required:!0}}}},"./src/hooks/use-svg-aria.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(isFocusable=null)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const aria={role:"img","aria-hidden":"true"};return null!==isFocusable&&(aria.focusable=isFocusable?"true":"false"),aria}),[isFocusable])},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);