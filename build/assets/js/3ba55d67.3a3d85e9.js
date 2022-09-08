"use strict";(self.webpackChunkbleekerv_2=self.webpackChunkbleekerv_2||[]).push([[443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,v=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"Lancement d'un Live depuis un bouton sp\xe9cifique.",sidebar_position:4},o=void 0,l={unversionedId:"integrersp/speclivelaunch",id:"integrersp/speclivelaunch",title:"Lancement d'un Live depuis un bouton sp\xe9cifique.",description:"La fonction `initLive` permet de lancer un live depuis un bouton.",source:"@site/docs/integrersp/speclivelaunch.md",sourceDirName:"integrersp",slug:"/integrersp/speclivelaunch",permalink:"/integrersp/speclivelaunch",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Lancement d'un Live depuis un bouton sp\xe9cifique.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Lancement d'un Replay depuis un bouton sp\xe9cifique",permalink:"/integrersp/replaylaunch"},next:{title:"Page de Redirection",permalink:"/integrersp/redirection"}},p={},u=[],c={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"La fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"initLive")," permet de lancer un live depuis un bouton."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Fonction \xe0 utiliser : ",(0,i.kt)("inlineCode",{parentName:"p"},"initLive('id_live', 'id_vendeur');"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Param\xe8tres autoris\xe9es :")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id_live")," (",(0,i.kt)("strong",{parentName:"li"},"Requis"),") : Valeurs possibles => ID d\u2019un Live, \xe0 r\xe9cup\xe9rer depuis la console sur la fiche d\xe9tail du Live Shopping. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id_vendeur")," (",(0,i.kt)("strong",{parentName:"li"},"Requis"),") : Valeurs possibles => ID du compte, le m\xeame que celui d\xe9fini dans l\u2019initialisation du widget."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Bouton"))," :",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"L'ID du bouton doit imp\xe9rativement \xeatre ",(0,i.kt)("inlineCode",{parentName:"li"},"live-bleeker"),"."),(0,i.kt)("li",{parentName:"ul"},"La fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"initLive('id_live', 'id_vendeur', 'start')")," doit \xeatre associ\xe9e \xe0 l'\xe9v\xe8nement onClick."))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Exemple de bouton")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<button id=\"live-bleeker\" onclick=\"initLive('id_live', 'id_vendeur')\">Particper au  Live</button>\n")))))}s.isMDXComponent=!0}}]);