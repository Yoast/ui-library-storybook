(globalThis.webpackChunk_yoast_ui_library=globalThis.webpackChunk_yoast_ui_library||[]).push([[1803],{"./src/components/select-field/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_elements_select__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/elements/select/index.js"),_elements_validation__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/elements/validation/validation-message.js"),_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/use-described-by.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const SelectField=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({id,label,description,disabled,validation,className,...props},ref)=>{const{ids,describedBy}=(0,_hooks__WEBPACK_IMPORTED_MODULE_3__.A)(id,{validation:null==validation?void 0:validation.message,description});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-select-field",disabled&&"yst-select-field--disabled",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_elements_select__WEBPACK_IMPORTED_MODULE_4__.A,{ref,id,label,labelProps:{as:"label",className:"yst-label yst-select-field__label"},disabled,validation,className:"yst-select-field__select",buttonProps:{"aria-describedby":describedBy},...props}),(null==validation?void 0:validation.message)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_elements_validation__WEBPACK_IMPORTED_MODULE_5__.A,{variant:null==validation?void 0:validation.variant,id:ids.validation,className:"yst-select-field__validation",children:validation.message}),description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:ids.description,className:"yst-select-field__description",children:description})]})}));SelectField.displayName="SelectField",SelectField.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired,description:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,disabled:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,validation:prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({variant:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,message:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node}),className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string},SelectField.defaultProps={description:null,disabled:!1,validation:{},className:""},SelectField.Option=_elements_select__WEBPACK_IMPORTED_MODULE_4__.A.Option,SelectField.Option.displayName="SelectField.Option";const __WEBPACK_DEFAULT_EXPORT__=SelectField;SelectField.__docgenInfo={description:"@param {string} id Identifier.\n@param {JSX.Element} error Error node.\n@param {string} [className] Optional CSS class.\n@param {boolean} [disabled] Disabled state.\n@param {string} label Label.\n@param {JSX.node} [description] Optional description.\n@param {Object} [props] Any extra props.\n@returns {JSX.Element} SelectField component.",methods:[{name:"Option",docblock:null,modifiers:["static"],params:[{name:"{ value, label }",optional:!1,type:null}],returns:null}],displayName:"SelectField",props:{description:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},validation:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{variant:{name:"string",required:!1},message:{name:"node",required:!1}}},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!0},label:{description:"",type:{name:"string"},required:!0}}}},"./src/elements/badge/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const classNameMap={variant:{info:"yst-badge--info",upsell:"yst-badge--upsell",plain:"yst-badge--plain"},size:{default:"",small:"yst-badge--small",large:"yst-badge--large"}},Badge=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children,as:Component,variant,size,className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-badge",classNameMap.variant[variant],classNameMap.size[size],className),...props,children}))),propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,as:prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType,variant:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(Object.keys(classNameMap.variant)),size:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(Object.keys(classNameMap.size)),className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};Badge.displayName="Badge",Badge.propTypes=propTypes,Badge.defaultProps={as:"span",variant:"info",size:"default",className:""};const __WEBPACK_DEFAULT_EXPORT__=Badge;Badge.__docgenInfo={description:"@param {JSX.node} children Content of the Badge.\n@param {string|function} [as] Base component.\n@param {string} [variant] Badge variant. See `classNameMap.variant` for the options.\n@param {string} [size] Badge size. See `classNameMap.size` for the options.\n@param {string} [className] CSS class.\n@returns {JSX.Element} Badge component.",methods:[],displayName:"Badge",props:{as:{defaultValue:{value:'"span"',computed:!1},description:"",type:{name:"elementType"},required:!1},variant:{defaultValue:{value:'"info"',computed:!1},description:"",type:{name:"enum",value:[{value:'"info"',computed:!1},{value:'"upsell"',computed:!1},{value:'"plain"',computed:!1}]},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"small"',computed:!1},{value:'"large"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0}}}},"./src/elements/label/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Label=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({as:Component,className,label,children,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{ref,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-label",className),...props,children:label||children||null})));Label.displayName="Label",Label.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,as:prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},Label.defaultProps={label:"",children:"",as:"label",className:""};const __WEBPACK_DEFAULT_EXPORT__=Label;Label.__docgenInfo={description:"@param {string} label Content of the Label. Note that this is a string ONLY for a11y reasons.\n@param {string} children Alternative to the label. See label.\n@param {string|JSX.node} [as] Base component.\n@param {string} [className] CSS class.\n@returns {JSX.Element} Label component.",methods:[],displayName:"Label",props:{label:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},as:{defaultValue:{value:'"label"',computed:!1},description:"",type:{name:"elementType"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/elements/select/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/listbox/listbox.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/transitions/transition.js"),_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@heroicons/react/solid/esm/CheckIcon.js"),_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@heroicons/react/solid/esm/SelectorIcon.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/hooks/use-svg-aria.js"),_label__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/elements/label/index.js"),_validation__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/elements/validation/validation-input.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const optionPropType={value:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool]).isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired},Option=({value,label})=>{const svgAriaProps=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.A)(),getClassName=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((({active,selected})=>classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-select__option",active&&"yst-select__option--active",selected&&"yst-select__option--selected")),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.W.Option,{value,className:getClassName,children:({selected})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-select__option-label",selected&&"yst-font-semibold"),children:label}),selected&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.A,{className:"yst-select__option-check",...svgAriaProps})]})})};Option.displayName="Option",Option.propTypes=optionPropType;const Select=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({id,value,options,children,selectedLabel,label,labelProps,labelSuffix,onChange,disabled,validation,className,buttonProps,...props},ref)=>{const selectedOption=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>options.find((option=>value===(null==option?void 0:option.value)))||options[0]),[value,options]),svgAriaProps=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.A)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.W,{ref,as:"div",value,onChange,disabled,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-select",disabled&&"yst-select--disabled",className),...props,children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"yst-flex yst-items-center yst-mb-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.W.Label,{as:_label__WEBPACK_IMPORTED_MODULE_7__.A,...labelProps,children:label}),labelSuffix]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_validation__WEBPACK_IMPORTED_MODULE_8__.A,{as:_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.W.Button,"data-id":id,className:"yst-select__button",validation,...buttonProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"yst-select__button-label",children:selectedLabel||(null==selectedOption?void 0:selectedOption.label)||""}),!(null!=validation&&validation.message)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.A,{className:"yst-select__button-icon",...svgAriaProps})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.e,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"yst-transition yst-duration-100 yst-ease-out",enterFrom:"yst-transform yst-scale-95 yst-opacity-0",enterTo:"yst-transform yst-scale-100 yst-opacity-100",leave:"yst-transition yst-duration-75 yst-ease-out",leaveFrom:"yst-transform yst-scale-100 yst-opacity-100",leaveTo:"yst-transform yst-scale-95 yst-opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.W.Options,{className:"yst-select__options",children:children||options.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Option,{...option},option.value)))})})]})}));Select.displayName="Select",Select.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,prop_types__WEBPACK_IMPORTED_MODULE_3___default().number,prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool]).isRequired,options:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape(optionPropType)),children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,selectedLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,labelProps:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,labelSuffix:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,onChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,validation:prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({variant:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,message:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node}),className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,buttonProps:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object},Select.defaultProps={options:[],children:null,selectedLabel:"",label:"",labelProps:{},labelSuffix:null,disabled:!1,validation:{},className:"",buttonProps:{}},Select.Option=Option,Select.Option.displayName="Select.Option";const __WEBPACK_DEFAULT_EXPORT__=Select;Select.__docgenInfo={description:"@param {string} id Identifier.\n@param {string} value Selected value.\n@param {{ value, label }[]} [options] Options to choose from.\n@param {JSX.node} [children] Defer from the default options rendering.\n@param {string} [selectedLabel] When using children instead of options, pass the label of the selected option.\n@param {string} [label] Label.\n@param {Object} [labelProps] Extra label props.\n@param {JSX.node} [labelSuffix] Optional label suffix.\n@param {Function} onChange Change callback.\n@param {boolean} [disabled] Disabled state.\n@param {Object} [validation] The validation state.\n@param {string} [className] CSS class.\n@param {Object} [buttonProps] Any extra props for the button.\n@param {Object} [props] Any extra props.\n@returns {JSX.Element} Select component.",methods:[{name:"Option",docblock:null,modifiers:["static"],params:[{name:"{ value, label }",optional:!1,type:null}],returns:null}],displayName:"Select",props:{options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"union",value:[{name:"string"},{name:"number"},{name:"bool"}],required:!0},label:{name:"string",required:!0}}}},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},selectedLabel:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},labelProps:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},labelSuffix:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},validation:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{variant:{name:"string",required:!1},message:{name:"node",required:!1}}},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},buttonProps:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},id:{description:"",type:{name:"string"},required:!0},value:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"},{name:"bool"}]},required:!0},onChange:{description:"",type:{name:"func"},required:!0}}}},"./src/elements/validation/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>VALIDATION_ICON_MAP,U:()=>VALIDATION_VARIANTS});var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@heroicons/react/solid/esm/CheckCircleIcon.js"),_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@heroicons/react/solid/esm/ExclamationIcon.js"),_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@heroicons/react/solid/esm/InformationCircleIcon.js"),_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@heroicons/react/solid/esm/ExclamationCircleIcon.js");const VALIDATION_VARIANTS={success:"success",warning:"warning",info:"info",error:"error"},VALIDATION_ICON_MAP={success:_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.A,warning:_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.A,info:_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.A,error:_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.A}},"./src/elements/validation/validation-icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/hooks/use-svg-aria.js"),_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/elements/validation/constants.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const CLASSNAME_MAP={variant:{success:"yst-validation-icon--success",warning:"yst-validation-icon--warning",info:"yst-validation-icon--info",error:"yst-validation-icon--error"}},ValidationIcon=({variant="info",className="",...props})=>{const Component=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>_constants__WEBPACK_IMPORTED_MODULE_4__.B[variant]),[variant]),svgAriaProps=(0,_hooks__WEBPACK_IMPORTED_MODULE_5__.A)();return Component?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component,{...svgAriaProps,...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-validation-icon",CLASSNAME_MAP.variant[variant],className)}):null};ValidationIcon.propTypes={variant:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.values)(_constants__WEBPACK_IMPORTED_MODULE_4__.U)),className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string};const __WEBPACK_DEFAULT_EXPORT__=ValidationIcon;ValidationIcon.__docgenInfo={description:"@param {string} variant The variant to render.\n@param {string} className The classname.\n@param {Object} [props] Any extra props.\n@returns {JSX.Element} The ValidationIcon component.",methods:[],displayName:"ValidationIcon",props:{variant:{defaultValue:{value:'"info"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"values( VALIDATION_VARIANTS )"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/elements/validation/validation-input.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_validation_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/elements/validation/validation-icon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const CLASSNAME_MAP={variant:{success:"yst-validation-input--success",warning:"yst-validation-input--warning",info:"yst-validation-input--info",error:"yst-validation-input--error"}},ValidationInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({as:Component,validation={},className="",...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-validation-input",(null==validation?void 0:validation.message)&&CLASSNAME_MAP.variant[null==validation?void 0:validation.variant]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{ref,...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-validation-input__input",className)}),(null==validation?void 0:validation.message)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_validation_icon__WEBPACK_IMPORTED_MODULE_3__.A,{variant:null==validation?void 0:validation.variant,className:"yst-validation-input__icon"})]})));ValidationInput.displayName="ValidationInput",ValidationInput.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType.isRequired,validation:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({variant:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,message:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node}),className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},ValidationInput.defaultProps={validation:{},className:""};const __WEBPACK_DEFAULT_EXPORT__=ValidationInput;ValidationInput.__docgenInfo={description:"@param {string} variant The variant to render.\n@param {Object} [validation] The validation state.\n@param {string} [className] The classname.\n@returns {JSX.Element} The ValidationInput component.",methods:[],displayName:"ValidationInput",props:{validation:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{variant:{name:"string",required:!1},message:{name:"node",required:!1}}},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},as:{description:"",type:{name:"elementType"},required:!0}}}},"./src/elements/validation/validation-message.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const CLASSNAME_MAP={variant:{success:"yst-validation-message--success",warning:"yst-validation-message--warning",info:"yst-validation-message--info",error:"yst-validation-message--error"}},ValidationMessage=({as:Component="p",variant="info",children,className="",...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component,{...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("yst-validation-message",CLASSNAME_MAP.variant[variant],className),children});ValidationMessage.displayName="ValidationMessage",ValidationMessage.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType,variant:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(CLASSNAME_MAP.variant)),message:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired};const __WEBPACK_DEFAULT_EXPORT__=ValidationMessage;ValidationMessage.__docgenInfo={description:'@param {string|function} [as="p"] The component to render as.\n@param {string} [variant="info"] The variant.\n@param {JSX.node} [children=""] The validation message.\n@param {string} [className=""] The class name.\n@returns {JSX.Element} The ValidationMessage component.',methods:[],displayName:"ValidationMessage",props:{as:{defaultValue:{value:'"p"',computed:!1},description:"",type:{name:"elementType"},required:!1},variant:{defaultValue:{value:'"info"',computed:!1},description:"",type:{name:"enum",computed:!0,value:"keys( CLASSNAME_MAP.variant )"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},message:{description:"",type:{name:"node"},required:!1},children:{description:"",type:{name:"node"},required:!0}}}},"./src/hooks/use-described-by.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lodash/lodash.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(id,list)=>{const ids=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>(0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(list,((result,value,key)=>value?(result[key]=`${id}__${key}`,result):result),{})),[id,list]),describedBy=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(ids).join(" ")||null),[ids]);return{ids,describedBy}}},"./src/hooks/use-svg-aria.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(isFocusable=null)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const aria={role:"img","aria-hidden":"true"};return null!==isFocusable&&(aria.focusable=isFocusable?"true":"false"),aria}),[isFocusable])},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);