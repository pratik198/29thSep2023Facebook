(window.webpackJsonp=window.webpackJsonp||[]).push([[41,352,369],{1202:function(e,t,o){"use strict";var n=o(1321),r=o.n(n),d={props:{amount:{type:Number,default:0},currency:{type:String,default:"USD"},codeClass:{type:[String,Array],default:""}},computed:{currencyCode:()=>"$",price(){return r()(this.amount).format("0,0.[00]")}}},l=o(8),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("span",[t("span",{class:e.codeClass},[e._v(e._s(e.currencyCode))]),e._v(e._s(e.price)+"\n")])}),[],!1,null,null,null);t.a=component.exports},1326:function(e,t,o){e.exports=o.p+"img/report.bf0cf84.png"},1498:function(e,t,o){var content=o(2876);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("1555e1a0",content,!0,{sourceMap:!1})},2875:function(e,t,o){"use strict";var n=o(1498),r=o.n(n);o.d(t,"default",(function(){return r.a}))},2876:function(e,t,o){var n=o(40)(!1);n.push([e.i,".modal_ZYBxR .modal-dialog{max-width:536px}.modal_ZYBxR .modal-dialog .modal-content .modal-header{padding:20px;border-bottom:none}.modal_ZYBxR .modal-dialog .modal-content .modal-header .close{right:24px;width:24px;height:24px;top:20px}.modal_ZYBxR .modalBody_yHnXC{padding:0}.modal_ZYBxR .image_n0BAw{object-fit:contain;border-radius:12px}\n",""]),n.locals={modal:"modal_ZYBxR",modalBody:"modalBody_yHnXC",image:"image_n0BAw"},e.exports=n},3667:function(e,t,o){"use strict";o.r(t);var n=o(4776),r=o(67),d=o(1202),l={components:{BModal:n.a,Price:d.a},props:{previousSubscription:{type:Object,default:()=>{}}},methods:{onCloseModal(){this.$modal.close("modalUpdatePaymentDetails"),this.$store.commit("settings/setShowedUpdatePaymentDetailsModal",this.previousSubscription.failed_invoices[0].invoice_id)},generateSrcSetPx:r.c,generateMultipleFormats:r.a}},c=o(2875),m=o(8);var component=Object(m.a)(l,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"modalUpdatePaymentDetails","modal-class":e.$style.modal,"no-fade":!1,"body-class":e.$style.modalBody,title:"  ","hide-footer":"",centered:"",visible:"",lazy:""},on:{hidden:e.onCloseModal}},[t("div",{staticClass:"px-7 pb-7 text-center"},[t("picture",[t("source",e._b({},"source",e.generateMultipleFormats({url:o(1326),h:230,w:230}),!1)),e._v(" "),t("img",e._b({class:e.$style.image,attrs:{width:"230",height:"230"}},"img",e.generateSrcSetPx({url:o(1326),h:230,w:230,format:"webp"}),!1))]),e._v(" "),t("h3",{staticClass:"my-4 text-danger"},[e._v("Update your payment details")]),e._v(" "),t("div",{staticClass:"font-size-lg"},[t("p",[e._v("\n        We couldn’t\n        "+e._s("upgrade"===e.previousSubscription.failed_invoices[0].subscription?"upgrade":"auto-renew")+"\n        your subscription due to a payment issue. Please update your payment\n        details to continue enjoying Unlimited Downloads.\n      ")])]),e._v(" "),t("div",[t("p",[t("strong",[e._v("\n          "+e._s(e.previousSubscription.failed_invoices[0].name)+" Plan\n        ")]),e._v(" "),t("span",[e._v("\n          (\n          "),t("price",{attrs:{amount:e.previousSubscription.failed_invoices[0].amount_remaining}}),e._v(e._s("upgrade"===e.previousSubscription.failed_invoices[0].subscription?" due now ":" / ".concat(e.previousSubscription.failed_invoices[0].period," "))+"\n          )\n        ")],1)])]),e._v(" "),t("div",[t("a",{directives:[{name:"track",rawName:"v-track",value:{event:"failed-payment-retry",data:{route_path:e.$route.path,route_name:e.$route.name,location:"modal-update-payment-details",action:"update-payment-details"}},expression:"{\n          event: 'failed-payment-retry',\n          data: {\n            route_path: $route.path,\n            route_name: $route.name,\n            location: 'modal-update-payment-details',\n            action: 'update-payment-details',\n          },\n        }"}],staticClass:"btn btn-primary",attrs:{href:e.previousSubscription.failed_invoices[0].hosted_invoice_url,type:"button",target:"_blank",rel:"noopener"}},[e._v("\n        Update payment details\n      ")])])])])}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports}}]);
//# sourceMappingURL=38fd94b.modern.js.map