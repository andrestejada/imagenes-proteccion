(this["webpackJsonpimagenes-proteccion"]=this["webpackJsonpimagenes-proteccion"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),r=n.n(i),s=(n(13),n(14),n(8)),l=n(7),o=n(2),j=function(e,t){return e/t},d=n(0),m=function(e){var t=e.imagen,n=Object(c.useState)(0),a=Object(o.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)(0),l=Object(o.a)(s,2),m=l[0],b=l[1],u=Object(c.useState)(0),g=Object(o.a)(u,2),O=g[0],h=g[1],x=Object(c.useState)(0),f=Object(o.a)(x,2),p=f[0],v=f[1],N=Object(c.useState)("vertical"),y=Object(o.a)(N,2),I=y[0],w=y[1];Object(c.useEffect)((function(){S()}),[i]);var S=function(){var e=1123;if(i>=796&&i>=e||m>=e&&m>=796)if(i>m){var t=j(i,m),n=parseInt(1123/t);w("Horizontal"),v(n),h(1123)}else if(i===m){w("Vertical"),h(796),v(796)}else{var c=j(i,m),a=parseInt(1123*c);w("Vertical"),h(a),v(1123)}else i>796&&i<e?(h(i),v(m),w("Horizontal"),console.log("horizontal")):(w("Vertical"),h(i),v(m))};return""===t?null:Object(d.jsx)("div",{className:"bg-light mt-4 mb-4  mx-3 col col-md-5 col-lg-5",children:Object(d.jsxs)("div",{className:"row rounded",children:[Object(d.jsxs)("div",{className:"col-md-6 p-0",children:[Object(d.jsx)("h3",{className:"bg-primary text-center p-2 m-0 text-white",children:"Imagen Previa"}),Object(d.jsx)("img",{className:"imgpreview",src:t,onLoad:function(e){r(e.target.naturalWidth),b(e.target.naturalHeight)}})]}),Object(d.jsxs)("div",{className:"col-md-6 bg-dark",children:[Object(d.jsx)("h4",{className:"titulo-img text-primary",children:"Medidas de la Imagen Original"}),Object(d.jsxs)("p",{children:["El ancho original de la imagen es de : ",i," px "]}),Object(d.jsxs)("p",{children:["El alto original de la imagen es de : ",m," px "]}),Object(d.jsx)("h4",{className:"titulo-img text-primary",children:"Recomendaciones de la Imagen"}),Object(d.jsxs)("p",{children:["La orientacion debe ser : ",I," "]}),Object(d.jsxs)("p",{children:["El ancho de la imagen debe ser: ",O," px "]}),Object(d.jsxs)("p",{children:["El alto de la imagen debe ser: ",p," px "]})]})]})})},b=function(e){var t=e.imagenes;return null===t?null:Object(d.jsx)("div",{className:"row justify-content-md-center justify-content-lg-center",children:t.map((function(e,t){return Object(d.jsx)(m,{imagen:e},t)}))})},u=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"row justify-content-md-center",children:Object(d.jsxs)("form",{className:" col-md-6 bg-light rounded",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{className:"d-block text-center font-weight-bold",htmlFor:"uploadImg",children:"Sube una imagen en formato .jpg"}),Object(d.jsx)("input",{type:"file",name:"imagen",id:"uploadImg",className:"form-control-file",accept:".jpg",required:!0,multiple:!0,onChange:function(e){var t,n=e.target.files,c=[],i=Object(l.a)(n);try{var r=function(){var e=t.value,n=new FileReader;n.onload=function(){c=[].concat(Object(s.a)(c),[n.result]),a(c)},n.readAsDataURL(e)};for(i.s();!(t=i.n()).done;)r()}catch(o){i.e(o)}finally{i.f()}}})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-3",children:"Subir Imagenes"})]})}),Object(d.jsx)(b,{imagenes:n})]})},g=function(){return Object(d.jsx)("h1",{className:"text-white text-center bg-primary py-2",children:"Carga tus Imagenes"})};var O=function(){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsx)(u,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.ab300095.chunk.js.map