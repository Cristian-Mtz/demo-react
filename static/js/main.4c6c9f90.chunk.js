(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(27),l=a.n(s),i=(a(156),a(157),a(58)),r=a(235),j=a(250),o=a(251),d=a(86),b=a(26),h=a(126),x=a(238),O=a(239),u=a(79),p=a(45),m=a(236),g=a(244),v=a(109),y=a(245),f=a(242),k=a(237),w=a(241),P=a(240),C=a(150),S=a(6),M=h.a.TabPane,T=x.a.Text,I=x.a.Title,N=O.a.Option;var R=function(){var e=new Date,t=Object(c.useState)(e.getDate()),a=Object(i.a)(t,2),n=(a[0],a[1]),s=Object(c.useState)(!1),l=Object(i.a)(s,2),r=l[0],j=l[1],o=Object(c.useState)("Pagado"),d=Object(i.a)(o,2),b=d[0],x=d[1];function R(e,t){n(t)}function q(){j(!1)}return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(h.a,{defaultActiveKey:"1",type:"card",size:"large",centered:!0,children:[Object(S.jsx)(M,{tab:"Diario",children:Object(S.jsxs)(u.a,{gutter:[16,34],justify:"center",align:"middle",children:[Object(S.jsx)(p.a,{flex:"auto"}),Object(S.jsx)(p.a,{flex:"auto",children:Object(S.jsx)(m.a,{onChange:R,size:"large"})}),Object(S.jsx)(p.a,{span:24,children:Object(S.jsxs)(g.a,{children:[Object(S.jsx)(g.a.Grid,{style:{width:"50%",textAlign:"center"},children:Object(S.jsx)(u.a,{children:Object(S.jsxs)(p.a,{span:24,children:[Object(S.jsx)(I,{level:3,autoSize:{minRows:3,maxRows:5},children:"Utilidad Total"}),Object(S.jsx)(I,{level:3,children:"$150,000.00"})]})})}),Object(S.jsx)(g.a.Grid,{style:{width:"50%",textAlign:"center"},children:Object(S.jsx)(u.a,{children:Object(S.jsxs)(p.a,{span:24,children:[Object(S.jsx)(I,{level:4,autoSize:{minRows:3,maxRows:5},children:"Ventas Totales"}),Object(S.jsx)(T,{type:"success",children:"$150,000.00"}),Object(S.jsx)(I,{level:4,autoSize:{minRows:3,maxRows:5},children:"Ventas Totales"}),Object(S.jsx)(T,{type:"danger",children:"$150,000.00"})]})})})]})}),Object(S.jsx)(p.a,{span:12,children:Object(S.jsx)(v.a,{type:"primary",block:!0,onClick:function(){j(!0)},icon:Object(S.jsx)(C.a,{}),children:"Nueva venta"})}),Object(S.jsx)(p.a,{span:12,children:Object(S.jsx)(v.a,{type:"danger",block:!0,children:"Nuevo Gasto"})})]})},"1"),Object(S.jsx)(M,{tab:"Semanal",children:Object(S.jsx)(y.b,{direction:"horizontal",centered:!0,children:Object(S.jsx)(m.a,{onChange:R,picker:"week"})})},"2"),Object(S.jsx)(M,{tab:"Mensual",children:Object(S.jsx)(y.b,{direction:"vertical",children:Object(S.jsx)(m.a,{onChange:R,picker:"month"})})},"3"),Object(S.jsx)(M,{tab:"Anual",children:Object(S.jsx)(y.b,{direction:"vertical",children:Object(S.jsx)(m.a,{onChange:R,picker:"year"})})},"4")]}),Object(S.jsx)(f.a,{title:"Nueva Venta",width:"100%",onClose:q,visible:r,bodyStyle:{paddingBottom:80},extra:Object(S.jsxs)(y.b,{children:[Object(S.jsx)(v.a,{onClick:q,children:"Cancel"}),Object(S.jsx)(v.a,{onClick:q,type:"primary",children:"Hola"})]}),children:Object(S.jsxs)(k.a,{layout:"vertical",hideRequiredMark:!0,children:[Object(S.jsxs)(u.a,{gutter:16,children:[Object(S.jsx)(p.a,{span:12,children:Object(S.jsx)(k.a.Item,{rules:[{required:!0,message:"Please enter url"}],children:Object(S.jsx)(m.a,{onChange:R})})}),Object(S.jsx)(p.a,{span:12,children:Object(S.jsx)(k.a.Item,{rules:[{required:!0,message:"Please enter user name"}],children:Object(S.jsx)(w.a.Group,{options:[{label:"Pagado",value:"Pagado"},{label:"Cr\xe9dito",value:"Cr\xe9dito"}],onChange:function(e){x("data"),console.log(e)},defaultValue:b,optionType:"button",buttonStyle:"solid"})})})]}),Object(S.jsxs)(u.a,{gutter:16,children:[Object(S.jsx)(p.a,{span:12,children:Object(S.jsx)(k.a.Item,{name:"owner",label:"Owner",rules:[{required:!0,message:"Please select an owner"}],children:Object(S.jsxs)(O.a,{placeholder:"Please select an owner",children:[Object(S.jsx)(N,{value:"xiao",children:"Xiaoxiao Fu"}),Object(S.jsx)(N,{value:"mao",children:"Maomao Zhou"})]})})}),Object(S.jsx)(p.a,{span:12,children:Object(S.jsx)(k.a.Item,{name:"type",label:"Type",rules:[{required:!0,message:"Please choose the type"}],children:Object(S.jsxs)(O.a,{placeholder:"Please choose the type",children:[Object(S.jsx)(N,{value:"private",children:"Private"}),Object(S.jsx)(N,{value:"public",children:"Public"})]})})})]}),Object(S.jsxs)(u.a,{gutter:16,children:[Object(S.jsx)(p.a,{span:12,children:Object(S.jsx)(k.a.Item,{name:"approver",label:"Approver",rules:[{required:!0,message:"Please choose the approver"}],children:Object(S.jsxs)(O.a,{placeholder:"Please choose the approver",children:[Object(S.jsx)(N,{value:"jack",children:"Jack Ma"}),Object(S.jsx)(N,{value:"tom",children:"Tom Liu"})]})})}),Object(S.jsx)(p.a,{span:12,children:Object(S.jsx)(k.a.Item,{name:"dateTime",label:"DateTime",rules:[{required:!0,message:"Please choose the dateTime"}],children:Object(S.jsx)(m.a.RangePicker,{style:{width:"100%"},getPopupContainer:function(e){return e.parentElement}})})})]}),Object(S.jsx)(u.a,{gutter:16,children:Object(S.jsx)(p.a,{span:24,children:Object(S.jsx)(k.a.Item,{name:"description",label:"Description",rules:[{required:!0,message:"please enter url description"}],children:Object(S.jsx)(P.a.TextArea,{rows:4,placeholder:"please enter url description"})})})})]})})]})};function q(){return Object(S.jsx)("div",{children:"Hola Tables"})}var z=a(243),D=a(246),H=a(247),A=a(115),G=a(248),V=a(249),K=[{title:"Home",path:"/",icon:Object(S.jsx)(D.a,{}),subMenu:[]},{title:"Dashboard",path:"#",icon:Object(S.jsx)(H.a,{}),subMenu:[{title:"Ventas",path:"#",icon:Object(S.jsx)(A.a,{})}]},{title:"Users",path:"/tables",icon:Object(S.jsx)(G.a,{}),subMenu:[]},{title:"DevOps2",path:"#",icon:Object(S.jsx)(A.a,{}),subMenu:[{title:"DevOps",path:"#",icon:Object(S.jsx)(A.a,{})}]}],L=(V.a,G.a,H.a,A.a,z.a.SubMenu),B=r.a.Sider,E=[];var F=function(e){var t=e.collapsed,a=Object(c.useState)([""]),n=Object(i.a)(a,2),s=n[0],l=n[1],r=[];return r=K,Object(S.jsx)(B,{collapsedWidth:"0",trigger:null,collapsible:!0,collapsed:t,style:{zIndex:1},children:Object(S.jsx)(z.a,{theme:"dark",mode:"inline",openKeys:s,onOpenChange:function(e){var t=e.find((function(e){return-1===s.indexOf(e)}));-1===E.indexOf(t)?l(e):l(t?[t]:[])},children:r.map((function(e,t){return e.subMenu&&E.push(e.title+t),0===e.subMenu.length?Object(S.jsx)(z.a.Item,{icon:e.icon,children:Object(S.jsx)(d.b,{to:e.path,children:e.title})},e.title+t):Object(S.jsx)(L,{icon:e.icon,title:e.title,children:e.subMenu.map((function(e,t){return Object(S.jsx)(z.a.Item,{children:Object(S.jsx)(d.b,{to:e.path,children:e.title})},e.title+t)}))},e.title+t)}))})})},J=r.a.Content;var $=function(e){var t=e.collapsed;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(d.a,{children:[Object(S.jsx)(F,{collapsed:t}),Object(S.jsx)(J,{className:"site-layout-background",style:{position:"fixed",width:"100%",backgroundColor:"RGB(240, 242, 245)"},children:Object(S.jsx)(J,{className:"site-layout-background",style:{margin:"20px 20px",padding:24},children:Object(S.jsxs)(b.c,{children:[Object(S.jsx)(b.a,{exact:!0,path:"/",component:R}),Object(S.jsx)(b.a,{exact:!0,path:"/tables",component:q})]})})})]})})},U=r.a.Header;var W=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(S.jsxs)(r.a,{style:{minHeight:"100vh"},children:[Object(S.jsx)(U,{className:"site-layout-background",style:{padding:0},children:Object(S.jsxs)("div",{className:"hamburger",style:{position:"relative",height:"100%",display:"flex",alignItems:"center",padding:"0 16px"},children:[Object(S.jsx)("div",{children:Object(S.jsxs)("a",{href:"/",style:{display:"flex",alignItems:"center",height:"100%"},children:[Object(S.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Logo",className:"Logo"}),Object(S.jsx)("h1",{style:{color:"#fff",margin:"0 0 0 12px",fontWeight:600,fontSize:"18px",lineHeight:"32px"},children:" Prueba Logo "})]})}),Object(S.jsx)("div",{children:n.a.createElement(a?j.a:o.a,{className:"trigger",onClick:function(){s(!a)}})}),Object(S.jsx)("div",{style:{flex:"1 1 0%"}})]})}),Object(S.jsx)(r.a,{className:"site-layout",children:Object(S.jsx)($,{collapsed:a})})]})};var X=function(){return Object(S.jsx)(W,{})};l.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(X,{})}),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.4c6c9f90.chunk.js.map