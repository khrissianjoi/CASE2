if (self.CavalryLogger) { CavalryLogger.start_js(["ZhMzY"]); }

__d("CometTextInputWithIcon.react",["BaseTextInput.react","React","TetraIcon.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={disabledInput:{cursor:"rj84mg9z"},iconEnd:{end:"dpjh1vo5",position:"pmk7jnqg",top:"plgsh5y4"},iconStart:{position:"pmk7jnqg",start:"dnzpfbms",top:"plgsh5y4"},root:{color:"oo9gr5id",fontSize:"jq4qci2q",position:"l9j0dhe7"},textInput:{backgroundColor:"cwj9ozl2",borderTop:"l6v480f0",borderEnd:"maa8sdkg",borderBottom:"s1tcr66n",borderStart:"aypy0576",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxSizing:"rq0escxv",color:"oo9gr5id",fontSize:"l94mrbxd",fontWeight:"ekzkrbhg",height:"tv7at329",width:"k4urcfbm"},textInputEndIcon:{paddingTop:"jb3vyjys",paddingEnd:"bowiujrr",paddingBottom:"qt6c0cv9",paddingStart:"h4z51re5"},textInputStartIcon:{paddingTop:"jb3vyjys",paddingEnd:"rv4hoivh",paddingBottom:"qt6c0cv9",paddingStart:"jg4yhqs5"}};function a(a,c){var d=a.disabled;d=d===void 0?!1:d;var e=a.icon,f=a.iconColor,j=a.iconPlacement;j=j===void 0?"start":j;var k=a.label;a=babelHelpers.objectWithoutPropertiesLoose(a,["disabled","icon","iconColor","iconPlacement","label"]);return h.jsxs("div",{className:(g||(g=b("stylex")))(i.root),children:[j==="start"?h.jsx("div",{className:(g||(g=b("stylex")))(i.iconStart),children:h.jsx(b("TetraIcon.react"),{color:f,icon:e,size:16})}):null,h.jsx(b("BaseTextInput.react"),babelHelpers["extends"]({"aria-label":k,disabled:d,xstyle:[d&&i.disabledInput,i.textInput,j==="start"&&i.textInputStartIcon,j==="end"&&i.textInputEndIcon]},a,{ref:c})),j==="end"?h.jsx("div",{className:(g||(g=b("stylex")))(i.iconEnd),children:h.jsx(b("TetraIcon.react"),{color:f,icon:e,size:16})}):null]})}c=h.forwardRef(a);e.exports=c}),null);