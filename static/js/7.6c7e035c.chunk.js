(this["webpackJsonpreact-customer-portal"]=this["webpackJsonpreact-customer-portal"]||[]).push([[7],{160:function(e,t,a){"use strict";var n=a(159),r=a.n(n),l=a(34),c=a(35),o=a(58),s=new(function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"getProofCollection",value:function(){var e,t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e={method:"GET",url:"/order-pickup-details"},a.next=3,r.a.awrap(o.a.request(e));case 3:return t=a.sent,a.abrupt("return",t.data);case 5:case"end":return a.stop()}}))}}]),e}());t.a=s},163:function(e,t,a){"use strict";var n=a(159),r=a.n(n),l=a(34),c=a(35),o=a(58),s=new(function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"getItemsByOrder",value:function(){var e,t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e={method:"GET",url:"/v2/orders/items"},a.next=3,r.a.awrap(o.a.request(e));case 3:return t=a.sent,a.abrupt("return",t.data);case 5:case"end":return a.stop()}}))}},{key:"updateApprovalStatus",value:function(e,t){var a,n;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a={method:"PUT",url:"/orders/items/".concat(e,"/approval-status"),data:{itemCode:e,approvalStatus:t}},l.next=3,r.a.awrap(o.a.request(a));case 3:return n=l.sent,l.abrupt("return",n);case 5:case"end":return l.stop()}}))}},{key:"updatePreferences",value:function(e){var t,a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"PUT",url:"/customers/future/preferences",data:e},n.next=3,r.a.awrap(o.a.request(t));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}))}},{key:"getBillingInfo",value:function(){var e,t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e={method:"GET",url:"v2/orders/billing"},a.next=3,r.a.awrap(o.a.request(e));case 3:return t=a.sent,a.abrupt("return",t.data);case 5:case"end":return a.stop()}}))}}]),e}()),i=(a(160),new(function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"getProofDelivery",value:function(){var e,t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e={method:"GET",url:"/order-delivery-details"},a.next=3,r.a.awrap(o.a.request(e));case 3:return t=a.sent,a.abrupt("return",t.data);case 5:case"end":return a.stop()}}))}}]),e}()));a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}))},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(161),r=function(e,t){switch(t.type){case"FETCHING":return Object(n.a)({},e,{loading:!0});case"FETCHING_COMPLETE":return Object(n.a)({},e,{loading:!1});case"SET_ERROR":return Object(n.a)({},e,{error:{isError:!0,message:t.message}});case"GET_ORDER_COMPLETE":return Object(n.a)({},e,{loading:!1,order:t.order});default:return e}}},180:function(e,t,a){},181:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a(21),o=a(159),s=a.n(o),i=a(15),m=a(27),u=a(13),d=a(10),f=a(162),p=a(59),E=function(e){var t=e.values,a=e.hasBorderBottom,n=void 0!==a&&a;return r.a.createElement("div",{className:n?"pb-3":"pb-0",style:n?{borderBottom:"1px solid rgba(0, 0, 0, 0.125)"}:{}},Object.entries(t).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"d-flex justify-content-center",key:"unique".concat(n)},n?r.a.createElement("p",{className:"mb-0"},a,": ",r.a.createElement("span",{className:"font-weight-normal"},n)):r.a.createElement("span",{className:"font-weight-normal"},a))})))},x=function(e){var t=e.serviceFee,a=e.minOrderRequirement,n=e.nextDaySurcharge,l=e.totPreVat,c=e.vat,o=e.driverTip,s=e.totalBilled,i=e.originApp,m=void 0===i?"":i,f=e.deliveryFee;return r.a.createElement("div",{className:"p-3 border-grey-1px"},s&&r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"font-weight-normal"}," Total "),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end p-0 font-weight-normal"},"AED"),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end pl-0 font-weight-normal"},s)),"0"!==a&&r.a.createElement(u.a,null,r.a.createElement(d.a,null,"Minimum Order Top-up"),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end p-0"},"AED"),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end pl-0"},parseFloat(a))),"0"!==n&&r.a.createElement(u.a,null,r.a.createElement(d.a,null,"Next Day Surcharge"),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end p-0"},"AED"),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end  pl-0"},n)),"SHOP_MEADOWS"!==m&&0!==t&&r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"font-weight-normal"}," Service Fee"),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end p-0 font-weight-normal"},"AED"),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end pl-0 font-weight-normal"},t)),"SHOP_MEADOWS"!==m&&r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"font-weight-normal"},r.a.createElement("span",null,"Delivery Fee")),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end p-0 font-weight-normal"},"AED"),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end pl-0 font-weight-normal"},f)),"SHOP_MEADOWS"!==m&&o&&r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"font-weight-normal"}," Driver Tip "),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end p-0 font-weight-normal"},"AED"),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end pl-0 font-weight-normal"},o)),r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"text-primary font-weight-normal"},"Total Pre-VAT"),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end text-primary font-weight-normal p-0"},"AED"),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end text-primary font-weight-normal pl-0"},parseFloat(l))),r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"text-primary font-weight-normal"},"VAT 5%"),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end text-primary font-weight-normal p-0"},"AED"),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end text-primary font-weight-normal pl-0"},parseFloat(c))))},g=a(71),h=a(167),y=a.n(h);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var N=r.a.createElement("rect",{width:23.0538,height:16,rx:4,fill:"url(#paint0_linear_2402_73067)"}),w=r.a.createElement("g",{clipPath:"url(#clip0_2402_73067)"},r.a.createElement("path",{d:"M8.95607 4.00235H7.06535C5.38972 4.00235 4.01953 5.37224 4.01953 7.04751V8.93783C4.01953 10.6131 5.38972 11.983 7.06535 11.983H8.95607C10.6317 11.983 12.0019 10.6131 12.0019 8.93783V7.04751C12.0019 5.37224 10.6317 4.00235 8.95607 4.00235ZM6.89542 5.38945C7.35143 5.38945 7.7214 5.75934 7.7214 6.21525C7.7214 6.67117 7.35143 7.04106 6.89542 7.04106C6.43941 7.04106 6.06943 6.67117 6.06943 6.21525C6.06943 5.75934 6.43941 5.38945 6.89542 5.38945ZM8.27636 10.8604C6.67817 10.8604 5.38326 9.56364 5.38326 7.96794C5.38326 7.90773 5.38542 7.84751 5.38757 7.78945H6.71688C6.71043 7.84751 6.70613 7.90773 6.70613 7.96794C6.70613 8.83461 7.40736 9.53568 8.27421 9.53568C8.76033 9.53568 9.19484 9.31418 9.48092 8.96794L10.5026 9.8131C9.9735 10.454 9.17333 10.8604 8.27636 10.8604ZM9.61428 7.14859C9.37122 6.75074 8.95607 6.47117 8.4721 6.4131L8.81626 5.12493C9.56696 5.26687 10.2166 5.69697 10.6403 6.29912L9.61428 7.14859Z",fill:"#00E784"}),r.a.createElement("path",{d:"M17.5116 7.22373C17.2384 7.22373 16.9674 7.27749 16.7136 7.38502C16.7996 7.15491 16.8448 6.90975 16.8448 6.66459V5.13126H15.4574V6.66459C15.4574 6.84093 15.3864 7.00868 15.2616 7.13341C15.1369 7.25814 14.967 7.32696 14.7906 7.32696H13.2548V8.7119H14.7927C15.0659 8.7119 15.3369 8.65814 15.5907 8.55061C15.5047 8.78072 15.4595 9.02588 15.4595 9.27104V10.8044H16.8469V9.27104C16.8469 9.0947 16.9179 8.92695 17.0427 8.80222C17.1674 8.67749 17.3374 8.60867 17.5137 8.60867H19.0517V7.22373H17.5116Z",fill:"#00E784"})),j=r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"paint0_linear_2402_73067",x1:28.2291,y1:24.2667,x2:11.4384,y2:.0613703,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#00E784"}),r.a.createElement("stop",{offset:.250292,stopColor:"#00AC6A"}),r.a.createElement("stop",{offset:.49686,stopColor:"#008A5B"}),r.a.createElement("stop",{offset:.723999,stopColor:"#00654A"}),r.a.createElement("stop",{offset:1,stopColor:"#00493E"})),r.a.createElement("clipPath",{id:"clip0_2402_73067"},r.a.createElement("rect",{width:15.0538,height:8,fill:"white",transform:"translate(4 4)"}))),C=function(e){var t=e.svgRef,a=e.title,n=v(e,["svgRef","title"]);return r.a.createElement("svg",b({width:24,height:16,viewBox:"0 0 24 16",fill:"none",ref:t},n),a?r.a.createElement("title",null,a):null,N,w,j)},O=r.a.forwardRef((function(e,t){return r.a.createElement(C,b({svgRef:t},e))})),T=(a.p,a(180),{CP:"Clean & Press",WF:"Wash & Fold",P:"Press Only",HC:"Homecare",TF:"The Finery"}),D=function(e,t,a){return a.indexOf(e)===t},P=function(e){return Math.round(10*e)/10},A=function(e){var t,a=e.item;return r.a.createElement(u.a,null,r.a.createElement(d.a,{xs:1,className:"bulletPoint"}),r.a.createElement(d.a,{className:"pl-0"},"string"===typeof(t=a.quantity)?parseFloat(t):t.toString()," x"," ","Homecare"===a.name?"Homecare bag(s)":a.name[0].toUpperCase()+a.name.replace(/_/g," ").slice(1).toLowerCase()),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end p-0 "},"AED"," "),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end pl-0"},parseFloat(a.unitPrice)*a.quantity+a.extraCostAmount))},S=function(e){var t=e.order;return r.a.createElement(u.a,null,r.a.createElement(d.a,{xs:1,className:"bulletPoint"}),r.a.createElement(d.a,{className:"pl-0"},t.hooksQty," x"," ","Door Hook"),r.a.createElement(d.a,{xs:1,className:"d-flex justify-content-end p-0 "},"AED"," "),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end pl-0"},t.billing.hooks_charge))},F=function(e){var t=e.promocode,a=e.totalBeforeDiscount,n=e.isCareemPlusApplied,l=t.match(/%/)?Number(a/100)*t.slice(0,-1):t;return console.log(typeof t,"--------------promoo------------------"),t.match(/^0/)?null:r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{xs:1,className:"bulletPoint"}),r.a.createElement(d.a,{className:"pl-0"},t.match(/%/)?t:""," ",t.match(/%/)?"discount":"Credit",n&&r.a.createElement("div",{className:"d-inline ic-careem-plus-container"},r.a.createElement("span",null," (-10% included ",r.a.createElement("div",{className:"d-inline"},r.a.createElement(O,{width:"2rem",height:"1rem"})),")"))),r.a.createElement(d.a,{xs:"auto",className:"d-flex justify-content-end p-0 "},"-"," "),r.a.createElement(d.a,{xs:"auto",className:"d-flex justify-content-end p-0 "},"AED"," "),r.a.createElement(d.a,{xs:2,md:1,className:"d-flex justify-content-end pl-0"},function(e){if("number"===typeof e)return!0}(l)?l:t))))},_=function(e){var t=e.order,a=t.billingReport,l=t.billing.minimum_amount.toString(),c=t.billing.is_careem_plus,o=t.billing.promocodes,s=c&&y.a.includes(o,g.b),i=Object(n.useMemo)((function(){return t&&a?a.billingItemsList.map((function(e){return T[e.cleanType]})).filter(D):[]}),[t,a]),m=Object(n.useMemo)((function(){return Array.from(i,(function(e){return{cleanType:e,items:t&&a?a.billingItemsList.filter((function(t){return T[t.cleanType]===e})):[]}}))}),[i,t,a]),p=P(a.totalPaid).toString(),h=parseFloat(p),b=P(a.totalBeforeDiscount),v=function(e){var t=P(y.a.get(e,"promoCredit",0)).toString(),a=y.a.get(e,"promoDiscount",0).toString(),n=[];return"0"===t&&"0%"===a||n.push(t,a),n}(a),N=P(y.a.get(a,"totalPreVAT",0)).toString(),w=P(y.a.get(a,"VAT",0)).toString();return r.a.createElement(f.a,{className:"border-top-0 border-bottom-1 border-left-0 border-right-0 mb-4"},r.a.createElement(f.a.Body,{className:"p-0"},r.a.createElement(f.a.Title,{className:"mt-3 mb-2 d-flex justify-content-center text-cyan font-weight-normal"},"Tax Invoice"),r.a.createElement(E,{hasBorderBottom:!0,values:{"Invoice Number":t.orderNumber,"Invoice Date":t.dropoffDate,"TR Number":"100284642400003"}}),m.map((function(e,t){return r.a.createElement("div",{key:"resp-".concat(t)},r.a.createElement(u.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement(f.a.Subtitle,{className:"mt-3 mb-1 pl-3 font-weight-normal"},e.cleanType),r.a.createElement("div",{className:"pl-3 pr-3 pb-3 border-grey-1px"},e.items&&e.items.filter((function(e){return!1===e.isExtraCost||!e.isExtraCost})).map((function(e,t){return r.a.createElement(A,{item:e,key:"unique".concat(t)})})),e.items&&e.items.filter((function(e){return!0===e.isExtraCost})).length>0&&r.a.createElement(u.a,{className:"mt-2 mb-1 pl-3 font-weight-normal"},"* Extra Charge *"),e.items&&e.items.filter((function(e){return!0===e.isExtraCost})).map((function(e,t){return r.a.createElement(A,{item:e,key:"unique".concat(t)})}))))))})),Boolean(t.hooksQty)&&r.a.createElement(u.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement(f.a.Subtitle,{className:"mt-3 mb-1 pl-3 font-weight-normal"},"Washmen Shop"),r.a.createElement("div",{className:"pl-3 pr-3 pb-3 border-grey-1px"},r.a.createElement(S,{order:t})))),Boolean(v.length>0)&&r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement(u.a,{className:"pr-3"},r.a.createElement(d.a,null,r.a.createElement(f.a.Subtitle,{className:"mt-3 mb-1 pl-3 pr-8 pb-3 font-weight-normal card-subtitle"},"Total before discount")),r.a.createElement(d.a,{xs:1,className:" mt-3 d-flex justify-content-end p-0 font-weight-normal"},"AED"),r.a.createElement(d.a,{xs:2,className:" mt-3 d-flex justify-content-end pl-0 col-md-1 col-2 font-weight-normal"},b)),r.a.createElement("div",{className:"pl-3 pr-3 pb-3 border-grey-1px"},v.map((function(e,t){return r.a.createElement(F,{promocode:e,totalBeforeDiscount:b,isCareemPlusApplied:s,key:"unique".concat(t)})})))))),r.a.createElement(x,{totPreVat:N,vat:w,nextDaySurcharge:a.nextDaySurcharge,serviceFee:a.serviceFee,driverTip:a.driverTip,totalBilled:v.length>0?void 0:b,minOrderRequirement:l,originApp:t.originApp,deliveryFee:a.deliveryFee}),r.a.createElement(u.a,{className:"p-3"},r.a.createElement(d.a,{className:"text-cyan font-weight-bold"},"Total Paid"),r.a.createElement(d.a,{xs:1,md:1,className:"d-flex justify-content-end text-cyan font-weight-bold p-0 pr-1"},"AED"),r.a.createElement(d.a,{xs:p.length>4?"auto":2,md:1,className:"d-flex justify-content-end text-cyan font-weight-bold pl-0"},h))))},k=a(14),H=a(163),B=a(168),R=a(157),M={loading:!1,error:{isError:!1}},I=function(){var e,t=Object(n.useReducer)(B.a,M),a=Object(i.a)(t,2),l=a[0],o=l.loading,x=l.order,g=l.error,h=a[1];return r.a.useEffect((function(){h({type:"FETCHING"});!function(){var e,t,a;s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.awrap(H.a.getBillingInfo());case 3:e=n.sent,(t=e.order).customerEmail=t.customerEmail.replace("+careem",""),h({type:"GET_ORDER_COMPLETE",order:t}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),n.t0.isAxiosError&&(a=n.t0.response?n.t0.response.data.infoCodes:n.t0.message,h({type:"SET_ERROR",message:Object(k.InfoCodeParser)(a)}));case 12:return n.prev=12,h({type:"FETCHING_COMPLETE"}),n.finish(12);case 15:case"end":return n.stop()}}),null,null,[[0,9,12,15]])}()}),[]),r.a.createElement(r.a.Fragment,null,g.isError?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{bsPrefix:"container-sm",className:"mt-4"},r.a.createElement(u.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement(p.s,{type:"danger",title:"Something wrong has happened"},r.a.createElement(R.a,{id:g.message,defaultMessage:g.message}),r.a.createElement("br",null),r.a.createElement("span",{onClick:function(){return window.location.reload()},style:{textDecoration:"underline",cursor:"pointer"}},"reload")))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.o,{orderId:x?x.orderAlphaId:void 0,loaderHeight:"32px",textFontSize:"16px",iconWidth:"1.8rem"}),o||!x?r.a.createElement(p.g,{amount:4}):r.a.createElement(m.a,{className:"mt-3"},r.a.createElement(u.a,{className:"mb-2"},r.a.createElement(d.a,{xs:12},r.a.createElement(f.a,{className:"border-bottom-1 border-top-0 border-left-0 border-right-0"},r.a.createElement(f.a.Body,null,r.a.createElement(E,{values:(e={},Object(c.a)(e,x.customerName,void 0),Object(c.a)(e,x.dropoffAddress.building,void 0),Object(c.a)(e,"Email",x.customerEmail),Object(c.a)(e,"Pickup Date",x.pickupDate),Object(c.a)(e,"Dropoff Date",x.dropoffDate),e)}))))),r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement(_,{order:x}))))))};a(181),t.default=Object(l.i)((function(e){var t=e.match.path;return r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"".concat(t),children:r.a.createElement(I,null)}),r.a.createElement(l.a,{to:t}))}))}}]);
//# sourceMappingURL=7.6c7e035c.chunk.js.map