(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],{156:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(43),i=n.n(o),l=(n(156),n(113)),r=n(42),s=n(236),u=n(78),d=n(150),m=n(56),h=n(87),j=n(238),f=n(48),O=n(239),b=n(15),p=function(e){var t=e.dValue,n=e.form,c=e.fieldname,o=e.placeholder,i=e.onSchemaSelect,l=Object(a.useState)(t),s=Object(r.a)(l,2),u=s[0],d=s[1];Object(a.useEffect)((function(){n.setFieldsValue(Object(m.a)({},c,u))}),[u,c,n]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O.a,{placeholder:o,value:u,allowClear:!0,onChange:function(e){var t=e.target.value;d(e.target.value),n.setFieldsValue(Object(m.a)({},c,t)),i&&i()}})})},C=n(237),A=[{title:"Name",dataIndex:"name"},{title:"Item ID",dataIndex:"id"},{title:"Position",dataIndex:"position"},{title:"Prise",dataIndex:"listing_price"}],x=function(e){var t=e.data.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{key:e.id})}));return Object(b.jsx)(C.a,{columns:A,dataSource:t,pagination:{defaultPageSize:5,showSizeChanger:!0,pageSizeOptions:["5","10","20","30"]}})},T=h.a.Option,S=function(e){var t=e.name,n=e.label,a=e.required,c=e.children;return Object(b.jsx)(j.a.Item,{name:t,label:n,rules:[{required:a}],children:c})},g=function(e){var t=e.form,n=e.fieldname,a=e.options,c=e.onSchemaSelect,o=e.onRaritySelect;return Object(b.jsx)(h.a,{placeholder:"Select a ".concat(n),onChange:function(e){t.setFieldsValue(Object(m.a)({},n,e)),c&&c(),o&&o()},allowClear:!0,showSearch:!0,style:{textAlign:"left"},children:a.map((function(e){return Object(b.jsx)(T,{value:e,children:e},e)}))})},y=["gdz.topps","alien.worlds","darkcountryh","hodlgod","officialhero","stf.capcom"],w=[{type:"input",name:"name",label:"Name",required:!0,children:function(e){return Object(b.jsx)(p,{placeholder:"NFT Name",form:e,fieldname:"name"})}},{type:"select",name:"collection_name",label:"Collection Name",required:!0,children:function(e,t){return Object(b.jsx)(g,{form:e,fieldname:"collection_name",options:y,onSchemaSelect:t})}}],v=function(){var e=j.a.useForm(),t=Object(r.a)(e,1)[0],n=Object(a.useState)([]),c=Object(r.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)({name:"",rarity:"",collection_name:"",limit:""}),m=Object(r.a)(s,2),h=m[0],O=m[1],p=Object(a.useState)([]),C=Object(r.a)(p,2),A=C[0],T=C[1],y=Object(a.useState)(!1),v=Object(r.a)(y,2),E=v[0],P=v[1],_=Object(a.useState)([]),k=Object(r.a)(_,2),I=k[0],F=k[1],N=Object(a.useState)([]),z=Object(r.a)(N,2),H=z[0],q=z[1],D=function(e){var t=e.collection_name,n=e.name,a=e.rarity,c=e.schema_name;return{collection_name:t,contract_whitelist:"theonlykarma,sales.heroes,niftywizards,cc32dninenft","data:text.name":n,"data:text.rarity":a,limit:e.limit,order:"asc",page:"1",schema_name:c,seller_blacklist:"dximg.wam,xpvrs.wam",show_seller_contracts:"false",sort:"price",state:"1",symbol:"WAX"}};Object(a.useEffect)((function(){E&&fetch("https://wax.api.aa.atomichub.io/atomicmarket/v1/sales",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token","Access-Control-Allow-Credentials":"true"},body:JSON.stringify(D(h))}).then((function(e){return e.json()})).then((function(e){i(e.data.map((function(e){return e})))}))}),[E,h]);var G=Object(a.useCallback)((function(){F([]);var e=t.getFieldsValue(),n=e.collection_name,a=e.schema_name;n&&a&&fetch("https://wax.api.atomichub.io/v1/data/filters/".concat(n,"?result=true&schema_name=").concat(a,"&attributes=rarity"),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token","Access-Control-Allow-Credentials":"true"}}).then((function(e){return e.json()})).then((function(e){var t;(null===(t=e.data[0])||void 0===t?void 0:t.values)&&F(e.data[0].values)}))}),[t]),L=Object(a.useCallback)((function(){q([]);var e=t.getFieldsValue().collection_name;e&&fetch("https://wax.api.aa.atomichub.io/atomicassets/v1/collections/".concat(e,"/schemas"),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token","Access-Control-Allow-Credentials":"true"}}).then((function(e){return e.json()})).then((function(e){e.data.length&&q(e.data.map((function(e){return e.schema_name})))}))}),[t]);Object(a.useEffect)((function(){T([]),E&&(o.forEach((function(e,t){var n,a,c=null===(n=e.assets[0])||void 0===n?void 0:n.asset_id,o=null===(a=e.assets[0])||void 0===a?void 0:a.name,i="".concat(e.price.amount/1e8," WAX");c&&fetch("https://immortalgames.io/api/claimed-assets/".concat(c),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token","Access-Control-Allow-Credentials":"true"}}).then((function(e){return e.json()})).then((function(e){e||T((function(e){return[].concat(Object(l.a)(e),[{id:c,position:t+1,listing_price:i,name:o}]).sort((function(e,t){return e.position-t.position}))}))}))})),P(!1))}),[o]);return Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"row"},children:[Object(b.jsxs)(j.a,{form:t,name:"control-hooks",onFinish:function(e){O(e),P(!0)},children:[w.map((function(e){var n=e.children,a=Object(d.a)(e,["children"]);return Object(b.jsx)(S,Object(u.a)(Object(u.a)({},a),{},{children:n(t,L)}),a.name)})),Object(b.jsx)(j.a.Item,{name:"schema_name",label:"Schema Name",rules:[{required:!0}],children:Object(b.jsx)(g,{fieldname:"schema_name",options:H,form:t,onSchemaSelect:G})}),Object(b.jsx)(j.a.Item,{shouldUpdate:!0,name:"rarity",label:"Rarity",rules:[{required:!1}],children:Object(b.jsx)(g,{fieldname:"rarity",options:I,form:t})}),Object(b.jsxs)(j.a.Item,{style:{display:"flex",justifyContent:"right"},children:[Object(b.jsx)(j.a.Item,{name:"limit",rules:[{required:!0}],style:{width:"100%"},children:Object(b.jsx)(g,{fieldname:"limit",options:new Array(10).fill("").map((function(e,t){return(5*t).toString()})),form:t})}),Object(b.jsx)(f.a,{style:{margin:"0 5px"},type:"primary",htmlType:"submit",children:"Submit"}),Object(b.jsx)(f.a,{htmlType:"button",onClick:function(){t.resetFields()},children:"Reset"})]})]}),Object(b.jsx)(x,{size:"small",data:A,pagination:{pageSize:5},pageSize:5})]})},E=(n(232),s.a.Header),P=s.a.Content;var _=function(){var e=Object(a.useState)([1]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(E,{style:{color:"white",fontSize:20},children:"Collect Social Filter For Claiming!!"}),Object(b.jsx)(P,{className:"site-layout-content",children:n.map((function(e,t){return Object(b.jsx)(v,{},t)}))}),Object(b.jsx)(f.a,{onClick:function(){c((function(e){return[].concat(Object(l.a)(e),[1])}))},children:"Add Search"})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,240)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),k()}},[[233,1,2]]]);
//# sourceMappingURL=main.1335d194.chunk.js.map