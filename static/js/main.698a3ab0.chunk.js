(this.webpackJsonpgoogle_store=this.webpackJsonpgoogle_store||[]).push([[0],{17:function(t,e,a){t.exports={header:"Header_header__2lcWO",rowTitle:"Header_rowTitle__2BmIO",rowNav:"Header_rowNav__3WqB3",title:"Header_title__3_C0i",titleCart:"Header_titleCart__1CAcV",quan:"Header_quan__1VKAe",cartWrapper:"Header_cartWrapper__3GL0q",alreadyNotification:"Header_alreadyNotification__3xOG4",viewNotification:"Header_viewNotification__1kLjP",message:"Header_message__PTUdK","name-goods":"Header_name-goods__2FnKv","icon-goods":"Header_icon-goods__zb3tN","delete-goods":"Header_delete-goods__JjW9N","quantity-goods":"Header_quantity-goods__294OV","quantity-goods__button":"Header_quantity-goods__button__1OqOe",plus__button:"Header_plus__button__3s1Ed",minus__button:"Header_minus__button__MCxLC",total:"Header_total__2YVPC",total__sum:"Header_total__sum__2pa1m",order__form:"Header_order__form__3Jj6S",order__button:"Header_order__button__15f9i"}},18:function(t,e,a){t.exports={cardProduct:"CardProduct_cardProduct__2oQDg",item:"CardProduct_item__27lH4",photoProduct:"CardProduct_photoProduct__3xg8g",title:"CardProduct_title__3Hj3V",price:"CardProduct_price__1I2XR",buttons:"CardProduct_buttons__33RNl",addCartWrapper:"CardProduct_addCartWrapper__1rJXA",selectionSize:"CardProduct_selectionSize__3O79P",addCart:"CardProduct_addCart__3IHko"}},35:function(t,e,a){t.exports={formCheckout:"Checkout_formCheckout__1BWgq",btnSubmitForm:"Checkout_btnSubmitForm__3DqWy"}},44:function(t,e,a){t.exports={backToShop:"Cart_backToShop__38uTr"}},52:function(t,e,a){t.exports={size:"SelectSize_size__3jnaC"}},53:function(t,e,a){t.exports={loading:"Loading_loading__1CQpk"}},65:function(t,e,a){},67:function(t,e,a){},69:function(t,e,a){},7:function(t,e,a){t.exports={info:"ProductInCart_info__1mjI9",mainInfoProduct:"ProductInCart_mainInfoProduct__3LZe_",selectSize:"ProductInCart_selectSize__1_Z1Y",notSelectSize:"ProductInCart_notSelectSize__UU-Qd",btnSelectSize:"ProductInCart_btnSelectSize__3ERlS",selectionSize:"ProductInCart_selectionSize__32fIc",smallProductIcons:"ProductInCart_smallProductIcons__1NkM7",btnCartManagement:"ProductInCart_btnCartManagement__wNpxt",btnDelGoodsTheCart:"ProductInCart_btnDelGoodsTheCart__3Cjoy",quantityTitle:"ProductInCart_quantityTitle__1YNs3",quantityGoods:"ProductInCart_quantityGoods__Oljir",buttons:"ProductInCart_buttons__2p8Dr",totalCost:"ProductInCart_totalCost__8etzE",nameGoods:"ProductInCart_nameGoods__1akq-"}},70:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a(0),o=a(24),r=a.n(o),i=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,o=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),o(t),r(t)}))},s=a(41),d=a(14),l=a(26),u=a.n(l),j=a(28),b=a(21),p=a(2),m=fetch("https://spreadsheets.google.com/feeds/list/1NVHcPwl7wVG1E87jVy0w-Q6HL7OcUfq3E674tEj7vw0/od6/public/values?alt=json").then((function(t){return t.json()})).then((function(t){return t})),_="cardProduct/SET_PRODUCT_CARD_DATA",C="cardProduct/SET_PRODUCT_TO_CART",O="cartProduct/SET_ADD_PRODUCT_TO_CART",h="cardProduct/INCREMENT_GOODS",f="cartProduct/DECREMENT_GOODS",x="cartProduct/REMOVE_FROM_CART",P="cartProduct/SET_ALREADY_IN_CART",g="cartProduct/SET_SELECT_SIZE",v={products:[],cart:[],totalCost:[],sum:0,isAlreadyInCart:!1,isAddProduct:!1,isLoaded:!1},N=function(t){return{type:_,data:t}},y=function(t){return{type:C,product:t}},S=function(t){return{type:P,data:t}},A=function(t){return{type:O,value:t}},T=function(t){return{type:g,size:t}},E=function(){return function(){var t=Object(j.a)(u.a.mark((function t(e){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m;case 2:a=t.sent,c=a.feed.entry.map((function(t){return{id:t.gsx$id.$t,cost:Number(t.gsx$cost.$t),img:t.gsx$image.$t,name:t.gsx$name.$t,description:t.gsx$description.$t,quantity:Number(t.gsx$quantity.$t),availableSizes:t.gsx$size.$t.split(", "),counter:1,selectSize:""}})),e(N(c));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I="app/INITIALIZED_SUCCESS",w="app/OPEN_MDW_CART",k="app/CLOSE_MDW_CART",z="app/OPEN_MDW_CHECKOUT",G="app/CLOSE_MDW_CHECKOUT",H="app/SET_WINDOW_CLOSING_PROCESS",W="app/SET_COORDINATE_ELEMENT",D="app/SET_COORDINATES_ICON_CART",V={initializedApp:!1,isOpenCart:!1,isOpenCheckout:!1,windowClosingProcess:!1,coordinateElement:{},coordinatesIconCart:{}},q=function(){return{type:z}},R=function(t){return{type:H,value:t}},M=function(t){return{type:W,coordinates:t}},L=a(42),U=Object(d.combineReducers)({cardProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return Object(p.a)(Object(p.a)({},t),{},{products:e.data});case C:return Object(p.a)(Object(p.a)({},t),{},{cart:[].concat(Object(b.a)(t.cart),[e.product]),sum:t.sum+e.product.cost});case h:var a=t.cart.findIndex((function(t){return t.id===e.id})),c=Object(b.a)(t.cart);return c[a].counter++,Object(p.a)(Object(p.a)({},t),{},{cart:Object(b.a)(c),sum:t.sum+t.cart[a].cost});case f:var n=t.cart.findIndex((function(t){return t.id===e.id})),o=Object(b.a)(t.cart);return o[n].counter--,Object(p.a)(Object(p.a)({},t),{},{cart:Object(b.a)(o),sum:t.sum-t.cart[n].cost});case x:var r=t.cart.findIndex((function(t){return t.id===e.id})),i=Object(b.a)(t.cart),s=i[r].cost*i[r].counter;return i[r].counter=1,i[r].selectSize="",i.splice(r,1),Object(p.a)(Object(p.a)({},t),{},{cart:Object(b.a)(i),sum:t.sum-s,isAlreadyInCart:!1});case P:return Object(p.a)(Object(p.a)({},t),{},{isAlreadyInCart:e.data});case O:return Object(p.a)(Object(p.a)({},t),{},{isAddProduct:e.value});case g:var d=t.cart.map((function(t){return t.selectSize=e.size,t}));return Object(p.a)(Object(p.a)({},t),{},{cart:Object(b.a)(d)});default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I:return Object(p.a)(Object(p.a)({},t),{},{initializedApp:!0});case w:return Object(p.a)(Object(p.a)({},t),{},{isOpenCart:!0});case k:return Object(p.a)(Object(p.a)({},t),{},{isOpenCart:!1});case z:return Object(p.a)(Object(p.a)({},t),{},{isOpenCheckout:!0});case G:return Object(p.a)(Object(p.a)({},t),{},{isOpenCheckout:!1});case H:return Object(p.a)(Object(p.a)({},t),{},{windowClosingProcess:e.value});case W:return Object(p.a)(Object(p.a)({},t),{},{coordinateElement:e.coordinates});case D:return Object(p.a)(Object(p.a)({},t),{},{coordinatesIconCart:e.coordinates});default:return t}}}),F=Object(d.createStore)(U,Object(L.composeWithDevTools)(Object(d.applyMiddleware)(s.a))),$=a(6),B=a(19),Z=a(4),Q=a(44),Y=a.n(Q),J=a(7),K=a.n(J),X=a(35),tt=a.n(X),et=a(22),at=a(47),ct=a(48),nt=a(55),ot=a(54),rt=function(t){Object(nt.a)(a,t);var e=Object(ot.a)(a);function a(){var t;Object(at.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).el=document.createElement("div"),t}return Object(ct.a)(a,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){return r.a.createPortal(this.props.children,this.el)}}]),a}(n.Component),it=(a(65),Object($.b)((function(t){return{windowClosingProcess:t.app.windowClosingProcess}}),null)((function(t){var e=t.className,a=t.title,n=t.children,o=t.isClosed,r=t.isOpen,i=t.width,s=t.windowClosingProcess;return Object(c.jsx)(c.Fragment,{children:r&&Object(c.jsx)(rt,{children:Object(c.jsx)("div",{className:"modalWindow ".concat(s?"hide":""," ").concat(e),children:Object(c.jsx)("div",{className:"modalOverlay",onClick:function(t){t.target.dataset.modalwindow&&o()},"data-modalwindow":!0,children:Object(c.jsxs)("div",{className:"modalBody",style:{maxWidth:i},children:[Object(c.jsxs)("div",{className:"modalHeader",children:[Object(c.jsx)("h2",{className:"modalTitle",children:a}),Object(c.jsx)("span",{className:"modalClosed",onClick:o,children:"\u2716"})]}),Object(c.jsx)("div",{className:"modalContent",children:n}),Object(c.jsx)("div",{className:"modalFooter"})]})})})})})}))),st=Object($.b)((function(t){return{isOpenCheckout:t.app.isOpenCheckout}}),{closeWindowCheckout:function(){return{type:G}},setWindowClosingProcess:R})((function(t){return Object(c.jsx)(it,{title:"Buy in one click",isClosed:function(){t.setWindowClosingProcess(!0),setTimeout((function(){t.closeWindowCheckout(),t.setWindowClosingProcess(!1)}),210)},isOpen:t.isOpenCheckout,width:"450px",children:Object(c.jsx)(et.d,{initialValues:{name:"",email:"",tel:""},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",e},onSubmit:function(t){console.log(t)},children:function(t){var e=t.isSubmitting;return Object(c.jsxs)(et.c,{className:tt.a.formCheckout,children:[Object(c.jsx)(et.b,{type:"text",name:"name",placeholder:"Name"}),Object(c.jsx)(et.b,{type:"email",name:"email",placeholder:"Email"}),Object(c.jsx)(et.a,{name:"email",className:"error",component:"div"}),Object(c.jsx)(et.b,{type:"tel",name:"tel",placeholder:"Phone"}),Object(c.jsx)(et.a,{name:"tel",component:"div"}),Object(c.jsx)("button",{className:"buttonPrimary ".concat(tt.a.btnSubmitForm),type:"submit",disabled:e,children:"Buy"})]})}})})})),dt=a(31),lt=a(36),ut=a(37);function jt(){var t=Object(lt.a)(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    width: 25px;\n    height: 25px;\n    background: #cc4a16;\n    border-radius: 50%;\n    animation: "," 0.8s forwards;\n  "]);return jt=function(){return t},t}function bt(){var t=Object(lt.a)(["\n  60% { \n    opacity: 1;\n  };  \n  100% { \n    opacity: 0;\n    top: ","px;\n    left: ","px;\n  }"]);return bt=function(){return t},t}var pt=function(t){var e=t.target.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},mt=function(t,e){return Object(ut.b)(bt(),t,e)},_t=function(t,e,a){return ut.a.span(jt(),t-25,e+15,a)},Ct=(a(67),function(t){var e=t.children,a=t.direction,n=t.className,o=Object(dt.a)(t,["children","direction","className"]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"notification ".concat(n),children:Object(c.jsxs)("div",{className:"notification-wrapper",children:[Object(c.jsx)("div",{className:"notification-content",style:{backgroundColor:o.background,borderColor:o.borderColor},children:e}),Object(c.jsx)("span",{className:"arrow ".concat(a),style:{backgroundColor:o.background,borderColor:o.borderColor}})]})})})}),Ot=a(52),ht=a.n(Ot),ft=Object($.b)(null,{setSelectSize:T,setCoordinateElement:M})((function(t){var e=t.className,a=t.direction,n=t.background,o=t.borderColor,r=t.iterationEl,i=t.setSelectSize,s=t.setCoordinateElement,d=Object(dt.a)(t,["className","direction","background","borderColor","iterationEl","setSelectSize","setCoordinateElement"]);return Object(c.jsx)(Ct,{className:e,direction:a,background:n,borderColor:o,children:r.availableSizes.map((function(t,e){return Object(c.jsx)("span",{className:ht.a.size,onClick:function(e){s(pt(e)),d.addCartGoodsValidation(r),i(t)},children:t},e)}))})})),xt=Object($.b)((function(t){return{cart:t.cardProduct.cart,sum:t.cardProduct.sum,totalCost:t.cardProduct.totalCost,selectSize:t.cardProduct.selectSize}}),{incrementGoodsAC:function(t){return{type:h,id:t}},decrementGoodsAC:function(t){return{type:f,id:t}},removeFromCartAC:function(t){return{type:x,id:t}}})((function(t){var e=t.cart,a=t.decrementGoodsAC,n=t.incrementGoodsAC,o=t.removeFromCartAC,r=t.sum,i=t.addCartGoodsValidation;return Object(c.jsxs)(c.Fragment,{children:[e.map((function(t){return Object(c.jsxs)("div",{className:K.a.goodsItem,children:[Object(c.jsxs)("div",{className:K.a.info,children:[Object(c.jsx)("div",{className:K.a.smallProductIcons,children:Object(c.jsx)("img",{src:t.img,alt:""})}),Object(c.jsxs)("div",{className:K.a.mainInfoProduct,children:[Object(c.jsx)("div",{className:K.a.nameGoods,children:t.name}),t.selectSize?Object(c.jsxs)("div",{className:K.a.selectSize,children:["Select size: ",t.selectSize]}):Object(c.jsxs)("div",{className:K.a.notSelectSize,children:[Object(c.jsx)("span",{className:K.a.btnSelectSize,children:"Select size"}),Object(c.jsx)(ft,{className:K.a.selectionSize,direction:"bottom",background:"#333",borderColor:"#333",iterationEl:t,addCartGoodsValidation:i})]})]}),Object(c.jsxs)("span",{className:K.a.btnCartManagement,children:[Object(c.jsx)(st,{}),Object(c.jsx)("button",{onClick:function(){return o(t.id)},className:"buttonPrimary ".concat(K.a.btnDelGoodsTheCart)})]})]}),Object(c.jsx)("div",{className:K.a.quantityGoods,children:Object(c.jsxs)("div",{className:K.a.quantityTitle,children:[Object(c.jsx)("span",{children:"Quantity:"}),"".concat(t.counter,"pc | ").concat(t.cost*t.counter," UAH"),Object(c.jsxs)("div",{className:K.a.buttons,children:[Object(c.jsx)("button",{onClick:function(){return e=t.id,void n(e);var e},className:"buttonPrimary ".concat(K.a.plusGoods),children:"+"}),Object(c.jsx)("button",{onClick:function(){return e=t.id,void(t.counter<=1?o(e):a(e));var e},className:"buttonPrimary ".concat(K.a.minusGoods),children:"-"})]})]})})]},t.id)})),!!e.length&&Object(c.jsxs)("div",{className:K.a.totalCost,children:["Total: ",Object(c.jsxs)("span",{children:[r," UAH"]})]})]})})),Pt=Object($.b)((function(t){return{isOpenCart:t.app.isOpenCart}}),{})((function(t){return Object(c.jsx)(it,{title:t.cart.length?"Cart":"Your cart is empty",isOpen:t.isOpenCart,isClosed:t.closePopup,width:!t.cart.length&&"400px",children:t.cart.length?Object(c.jsx)(xt,{addCartGoodsValidation:t.addCartGoodsValidation}):Object(c.jsx)("span",{className:Y.a.backToShop,onClick:t.closePopup,children:"Back to shopping"})})})),gt=a(17),vt=a.n(gt),Nt=a.p+"static/media/cart.ddc068c2.svg",yt=Object($.b)((function(t){return{isAlreadyInCart:t.cardProduct.isAlreadyInCart,cart:t.cardProduct.cart,initializedApp:t.app.initializedApp}}),{openCart:function(){return{type:w}},closeCart:function(){return{type:k}},setWindowClosingProcess:R,setCoordinatesIconCart:function(t){return{type:D,coordinates:t}}})((function(t){var e=Object(n.useRef)();return Object(n.useEffect)((function(){var a=e.current.getBoundingClientRect(),c=Math.round(a.top),n=Math.round(a.left);t.setCoordinatesIconCart({top:c,left:n})}),[]),Object(c.jsx)("header",{className:vt.a.header,children:Object(c.jsxs)("div",{className:vt.a.rowNav,children:[Object(c.jsx)("div",{className:vt.a.rowTitle,children:Object(c.jsx)(B.b,{to:"/selectionGoods",className:vt.a.title,children:"Google Shop"})}),Object(c.jsxs)("div",{className:vt.a.cartWrapper,children:[t.isAlreadyInCart&&Object(c.jsx)(Ct,{className:vt.a.alreadyNotification,direction:"right",children:Object(c.jsx)("span",{className:vt.a.message,children:"This goods is already in your cart"})}),Object(c.jsxs)("div",{ref:e,className:vt.a.titleCart,onClick:t.openCart,children:[Object(c.jsx)("img",{src:Nt,alt:""}),Object(c.jsx)("span",{className:vt.a.quan,children:t.cart.length})]})]}),Object(c.jsx)(Pt,{cart:t.cart,closePopup:function(){t.setWindowClosingProcess(!0),setTimeout((function(){t.closeCart(),t.setWindowClosingProcess(!1)}),210)},addCartGoodsValidation:t.addCartGoodsValidation})]})})})),St=a(18),At=a.n(St),Tt=Object(d.compose)(Object($.b)((function(t){return{products:t.cardProduct.products,cart:t.cardProduct.cart,isAddProduct:t.cardProduct.isAddProduct,coordinateElement:t.app.coordinateElement,coordinatesIconCart:t.app.coordinatesIconCart}}),{openWindowCheckout:q,setCoordinateElement:M,setProductToCartAC:y,setAlreadyInCartAC:S,setAddProductToCart:A}))((function(t){var e=mt(t.coordinatesIconCart.top,t.coordinatesIconCart.left),a=_t(t.coordinateElement.top,t.coordinateElement.left,e);return Object(c.jsxs)("div",{className:At.a.cardProduct,children:[Object(c.jsx)(st,{}),t.isAddProduct&&Object(c.jsx)(rt,{children:Object(c.jsx)(a,{})}),t.products.map((function(e){return Object(c.jsxs)("div",{className:At.a.item,children:[Object(c.jsx)(B.b,{to:"/goods/".concat(e.id),className:At.a.photoProduct,children:Object(c.jsx)("img",{src:e.img,alt:""})}),Object(c.jsx)(B.b,{to:"/goods/".concat(e.id),className:At.a.title,children:e.name}),Object(c.jsxs)("div",{className:At.a.price,children:[e.cost," UAH"]}),Object(c.jsxs)("div",{className:At.a.buttons,children:[Object(c.jsx)("button",{onClick:t.openWindowCheckout,className:"buttonPrimary",children:"Buy"}),Object(c.jsxs)("div",{className:At.a.addCartWrapper,children:[Object(c.jsx)(ft,{className:At.a.selectionSize,direction:"bottom",background:"#333",borderColor:"#333",iterationEl:e,addCartGoodsValidation:t.addCartGoodsValidation}),Object(c.jsx)("button",{className:"buttonPrimary ".concat(At.a.addCart),onClick:function(a){t.addCartGoodsValidation(e),t.setCoordinateElement(pt(a))}})]})]})]},e.id)}))]})})),Et=a(53),It=a.n(Et),wt=a.p+"static/media/loading.48060ccb.svg",kt=function(t){return Object(c.jsx)("div",{className:It.a.loading,children:Object(c.jsx)("img",{src:wt,alt:""})})},zt=a(8),Gt=a.n(zt),Ht=Object(d.compose)(Object($.b)((function(t){return{products:t.cardProduct.products,cart:t.cardProduct.cart,isAddProduct:t.cardProduct.isAddProduct,coordinatesIconCart:t.app.coordinatesIconCart,coordinateElement:t.app.coordinateElement}}),{getProductCardDataTC:E,setProductToCartAC:y,setAlreadyInCartAC:S,setAddProductToCart:A,openWindowCheckout:q,setCoordinateElement:M,setSelectSize:T}),Z.e)((function(t){var e=t.match.params.id,a=t.products[e],n=mt(t.coordinatesIconCart.top,t.coordinatesIconCart.left),o=_t(t.coordinateElement.top,t.coordinateElement.left,n);return t.products.length?Object(c.jsxs)("div",{className:Gt.a.productPage,children:[t.isAddProduct&&Object(c.jsx)(rt,{children:Object(c.jsx)(o,{})}),Object(c.jsx)("div",{className:Gt.a.infoSection,children:Object(c.jsx)("div",{className:Gt.a.photo,children:Object(c.jsx)("img",{src:a.img,alt:""})})}),Object(c.jsxs)("div",{className:Gt.a.orderSelection,children:[Object(c.jsx)("div",{className:Gt.a.title,children:a.name}),Object(c.jsxs)("div",{className:Gt.a.availability,children:[a.quantity>=10&&Object(c.jsx)("span",{className:"".concat(Gt.a.areAvailable),children:"Are available"}),a.quantity<10&&0!==a.quantity&&Object(c.jsx)("span",{className:"".concat(Gt.a.last),children:"The item is running out"}),0===a.quantity&&Object(c.jsx)("span",{className:"".concat(Gt.a.notAvailable),children:"Not available"})]}),Object(c.jsxs)("div",{className:Gt.a.cost,children:[a.cost," UAH"]}),Object(c.jsxs)("div",{className:Gt.a.descriptionGoods,children:[Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:a.description})]}),Object(c.jsxs)("div",{className:Gt.a.sizeSelection,children:[Object(c.jsx)("hr",{}),a.availableSizes.map((function(e){return Object(c.jsx)("div",{onClick:function(c){t.setCoordinateElement(pt(c)),t.addCartGoodsValidation(a),t.setSelectSize(e)},className:Gt.a.sizeGoods,children:e},e)})),Object(c.jsx)("hr",{})]}),Object(c.jsxs)("div",{className:Gt.a.buttons,children:[Object(c.jsx)(st,{}),Object(c.jsx)("button",{className:"buttonPrimary",onClick:t.openWindowCheckout,children:"Buy"}),Object(c.jsx)("button",{className:"buttonPrimary ".concat(Gt.a.addToCart),onClick:function(e){t.addCartGoodsValidation(a),t.setCoordinateElement(pt(e))},children:"Add to cart"})]})]})]}):Object(c.jsx)(kt,{})})),Wt=(a(69),Object($.b)((function(t){return{initializedApp:t.app.initializedApp,cart:t.cardProduct.cart}}),{setProductToCartAC:y,setAddProductToCart:A,setAlreadyInCartAC:S,initializeApp:function(){return function(){var t=Object(j.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e(E()),t.next=3,Promise.all([a]);case 3:e({type:I});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(t){Object(n.useEffect)((function(){return t.initializeApp()}),[]);var e=function(e){t.cart.length?t.cart.some((function(t){return e.id===t.id}))?(t.setAlreadyInCartAC(!0),setTimeout((function(){t.setAlreadyInCartAC(!1)}),2700)):(t.setProductToCartAC(e),t.setAddProductToCart(!0),setTimeout((function(){t.setAddProductToCart(!1)}),1e3)):(t.setProductToCartAC(e),t.setAddProductToCart(!0),setTimeout((function(){t.setAddProductToCart(!1)}),1e3))},a=Object(c.jsx)(Tt,{addCartGoodsValidation:e});return t.initializedApp?Object(c.jsxs)("div",{className:"wrapper-app",children:[Object(c.jsx)(yt,{addCartGoodsValidation:e}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"shop-body",children:[Object(c.jsx)(Z.a,{exact:!0,path:"/",render:function(){return a}}),Object(c.jsx)(Z.a,{path:"/selectionGoods",render:function(){return a}}),Object(c.jsx)(Z.a,{path:"/goods/:id",render:function(){return Object(c.jsx)(Ht,{addCartGoodsValidation:e})}})]})})]}):Object(c.jsx)(kt,{})})));a(70);r.a.render(Object(c.jsx)(B.a,{children:Object(c.jsx)($.a,{store:F,children:Object(c.jsx)(Wt,{})})}),document.getElementById("root")),i()},8:function(t,e,a){t.exports={productPage:"ProductPage_productPage__1poYV",infoSection:"ProductPage_infoSection__2oO63",photo:"ProductPage_photo__3i2z-",availability:"ProductPage_availability__1UiuS",areAvailable:"ProductPage_areAvailable__3Ermh",last:"ProductPage_last__1465L",notAvailable:"ProductPage_notAvailable__v5Vzj",orderSelection:"ProductPage_orderSelection__2ZsfX",title:"ProductPage_title__U0eGG",cost:"ProductPage_cost__6x9ki",descriptionGoods:"ProductPage_descriptionGoods__1eFTV",sizeSelection:"ProductPage_sizeSelection__1v89v",sizeGoods:"ProductPage_sizeGoods__3OQ4S",buttons:"ProductPage_buttons__2MyTP",addToCart:"ProductPage_addToCart__EkQtZ"}}},[[71,1,2]]]);
//# sourceMappingURL=main.698a3ab0.chunk.js.map