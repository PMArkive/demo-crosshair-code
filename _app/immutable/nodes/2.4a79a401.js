import{s as Ce,n as we,r as ve,o as De,f as he}from"../chunks/scheduler.0318841a.js";import{S as Te,i as Se,g as L,s as B,m as F,h as C,j as z,y as Z,c as P,f as D,n as j,k as w,a as G,x as b,z as le,o as ee,A as Ie}from"../chunks/index.12b96ea2.js";import{w as Me}from"../chunks/index.46b4c523.js";function me(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}let f;const q=new Array(128).fill(void 0);q.push(void 0,null,!0,!1);function l(t){return q[t]}let te=q.length;function Fe(t){t<132||(q[t]=te,te=t)}function R(t){const e=l(t);return Fe(t),e}const xe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});xe.decode();let K=null;function ne(){return(K===null||K.buffer!==f.memory.buffer)&&(K=new Uint8Array(f.memory.buffer)),K}function ie(t,e){return xe.decode(ne().slice(t,t+e))}function d(t){te===q.length&&q.push(q.length+1);const e=te;return te=q[e],q[e]=t,e}let k=0;const Ee=new TextEncoder("utf-8"),je=function(t,e){const n=Ee.encode(t);return e.set(n),{read:t.length,written:n.length}};function ce(t,e,n){if(n===void 0){const a=Ee.encode(t),u=e(a.length);return ne().subarray(u,u+a.length).set(a),k=a.length,u}let r=t.length,o=e(r);const c=ne();let i=0;for(;i<r;i++){const a=t.charCodeAt(i);if(a>127)break;c[o+i]=a}if(i!==r){i!==0&&(t=t.slice(i)),o=n(o,r,r=i+t.length*3);const a=ne().subarray(o+i,o+r),u=je(t,a);i+=u.written}return k=i,o}function N(t){return t==null}let X=null;function T(){return(X===null||X.buffer!==f.memory.buffer)&&(X=new Int32Array(f.memory.buffer)),X}function de(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const o=t.description;return o==null?"Symbol":`Symbol(${o})`}if(e=="function"){const o=t.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(t)){const o=t.length;let c="[";o>0&&(c+=de(t[0]));for(let i=1;i<o;i++)c+=", "+de(t[i]);return c+="]",c}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function ke(t,e){const n=e(t.length*1);return ne().set(t,n/1),k=t.length,n}let $=null;function Ae(){return($===null||$.buffer!==f.memory.buffer)&&($=new Uint32Array(f.memory.buffer)),$}function _e(t,e){const n=e(t.length*4),r=Ae();for(let o=0;o<t.length;o++)r[n/4+o]=d(t[o]);return k=t.length,n}function He(t,e,n,r){try{const v=f.__wbindgen_add_to_stack_pointer(-16),I=ke(t,f.__wbindgen_malloc),H=k;var o=N(e)?0:ce(e,f.__wbindgen_malloc,f.__wbindgen_realloc),c=k,i=N(n)?0:_e(n,f.__wbindgen_malloc),a=k,u=N(r)?0:_e(r,f.__wbindgen_malloc),y=k;f.parseEvent(v,I,H,o,c,i,a,u,y);var _=T()[v/4+0],s=T()[v/4+1],h=T()[v/4+2];if(h)throw R(s);return R(_)}finally{f.__wbindgen_add_to_stack_pointer(16)}}function Oe(t,e){const n=e(t.length*4);return Ae().set(t,n/4),k=t.length,n}function Ue(t,e,n,r){try{const s=f.__wbindgen_add_to_stack_pointer(-16),h=ke(t,f.__wbindgen_malloc),v=k;var o=N(e)?0:_e(e,f.__wbindgen_malloc),c=k,i=N(n)?0:Oe(n,f.__wbindgen_malloc),a=k;f.parseTicks(s,h,v,o,c,i,a,N(r)?16777215:r?1:0);var u=T()[s/4+0],y=T()[s/4+1],_=T()[s/4+2];if(_)throw R(y);return R(u)}finally{f.__wbindgen_add_to_stack_pointer(16)}}function W(t,e){try{return t.apply(this,e)}catch(n){f.__wbindgen_exn_store(d(n))}}async function We(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function qe(){const t={};return t.wbg={},t.wbg.__wbindgen_object_drop_ref=function(e){R(e)},t.wbg.__wbindgen_is_string=function(e){return typeof l(e)=="string"},t.wbg.__wbindgen_error_new=function(e,n){const r=new Error(ie(e,n));return d(r)},t.wbg.__wbindgen_string_get=function(e,n){const r=l(n),o=typeof r=="string"?r:void 0;var c=N(o)?0:ce(o,f.__wbindgen_malloc,f.__wbindgen_realloc),i=k;T()[e/4+1]=i,T()[e/4+0]=c},t.wbg.__wbindgen_is_object=function(e){const n=l(e);return typeof n=="object"&&n!==null},t.wbg.__wbg_String_88810dfeb4021902=function(e,n){const r=String(l(n)),o=ce(r,f.__wbindgen_malloc,f.__wbindgen_realloc),c=k;T()[e/4+1]=c,T()[e/4+0]=o},t.wbg.__wbindgen_number_new=function(e){return d(e)},t.wbg.__wbindgen_string_new=function(e,n){const r=ie(e,n);return d(r)},t.wbg.__wbindgen_object_clone_ref=function(e){const n=l(e);return d(n)},t.wbg.__wbg_set_841ac57cff3d672b=function(e,n,r){l(e)[R(n)]=R(r)},t.wbg.__wbg_crypto_70a96de3b6b73dac=function(e){const n=l(e).crypto;return d(n)},t.wbg.__wbg_process_dd1577445152112e=function(e){const n=l(e).process;return d(n)},t.wbg.__wbg_versions_58036bec3add9e6f=function(e){const n=l(e).versions;return d(n)},t.wbg.__wbg_node_6a9d28205ed5b0d8=function(e){const n=l(e).node;return d(n)},t.wbg.__wbg_msCrypto_adbc770ec9eca9c7=function(e){const n=l(e).msCrypto;return d(n)},t.wbg.__wbg_require_f05d779769764e82=function(){return W(function(){const e=module.require;return d(e)},arguments)},t.wbg.__wbindgen_is_function=function(e){return typeof l(e)=="function"},t.wbg.__wbg_getRandomValues_3774744e221a22ad=function(){return W(function(e,n){l(e).getRandomValues(l(n))},arguments)},t.wbg.__wbg_randomFillSync_e950366c42764a07=function(){return W(function(e,n){l(e).randomFillSync(R(n))},arguments)},t.wbg.__wbg_new_b525de17f44a8943=function(){const e=new Array;return d(e)},t.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(e,n){const r=new Function(ie(e,n));return d(r)},t.wbg.__wbg_new_f841cc6f2098f4b5=function(){return d(new Map)},t.wbg.__wbg_call_95d1ea488d03e4e8=function(){return W(function(e,n){const r=l(e).call(l(n));return d(r)},arguments)},t.wbg.__wbg_new_f9876326328f45ed=function(){const e=new Object;return d(e)},t.wbg.__wbg_self_e7c1f827057f6584=function(){return W(function(){const e=self.self;return d(e)},arguments)},t.wbg.__wbg_window_a09ec664e14b1b81=function(){return W(function(){const e=window.window;return d(e)},arguments)},t.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return W(function(){const e=globalThis.globalThis;return d(e)},arguments)},t.wbg.__wbg_global_c85a9259e621f3db=function(){return W(function(){const e=global.global;return d(e)},arguments)},t.wbg.__wbindgen_is_undefined=function(e){return l(e)===void 0},t.wbg.__wbg_set_17224bc548dd1d7b=function(e,n,r){l(e)[n>>>0]=R(r)},t.wbg.__wbg_call_9495de66fdbe016b=function(){return W(function(e,n,r){const o=l(e).call(l(n),l(r));return d(o)},arguments)},t.wbg.__wbg_set_388c4c6422704173=function(e,n,r){const o=l(e).set(l(n),l(r));return d(o)},t.wbg.__wbg_buffer_cf65c07de34b9a08=function(e){const n=l(e).buffer;return d(n)},t.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5=function(e,n,r){const o=new Uint8Array(l(e),n>>>0,r>>>0);return d(o)},t.wbg.__wbg_new_537b7341ce90bb31=function(e){const n=new Uint8Array(l(e));return d(n)},t.wbg.__wbg_set_17499e8aa4003ebd=function(e,n,r){l(e).set(l(n),r>>>0)},t.wbg.__wbg_newwithlength_b56c882b57805732=function(e){const n=new Uint8Array(e>>>0);return d(n)},t.wbg.__wbg_subarray_7526649b91a252a6=function(e,n,r){const o=l(e).subarray(n>>>0,r>>>0);return d(o)},t.wbg.__wbindgen_debug_string=function(e,n){const r=de(l(n)),o=ce(r,f.__wbindgen_malloc,f.__wbindgen_realloc),c=k;T()[e/4+1]=c,T()[e/4+0]=o},t.wbg.__wbindgen_throw=function(e,n){throw new Error(ie(e,n))},t.wbg.__wbindgen_memory=function(){const e=f.memory;return d(e)},t}function Re(t,e){t.wbg.memory=e||new WebAssembly.Memory({initial:25,maximum:16384,shared:!0})}function Ve(t,e){return f=t.exports,Le.__wbindgen_wasm_module=e,X=null,$=null,K=null,f.__wbindgen_start(),f}async function Le(t,e){typeof t>"u"&&(t=new URL(""+new URL("../assets/demoparser2_bg.f58594b6.wasm",import.meta.url).href,self.location));const n=qe();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t)),Re(n,e);const{instance:r,module:o}=await We(await t,n);return Ve(r,o)}const re=Me({dragging:!1,file:void 0},()=>{function t(r){var o;r.preventDefault(),re.set({dragging:!0,file:(o=r.dataTransfer)==null?void 0:o.files[0]})}function e(r){r.preventDefault(),re.set({dragging:!1,file:void 0})}function n(r){var o;r.preventDefault(),re.set({dragging:!1,file:(o=r.dataTransfer)==null?void 0:o.files[0]})}return document.addEventListener("dragover",t),document.addEventListener("dragleave",e),document.addEventListener("drop",n),()=>{document.removeEventListener("dragover",t),document.removeEventListener("dragleave",e),document.removeEventListener("drop",n)}});function ze(t){return new Promise((e,n)=>{const r=new FileReader;r.addEventListener("error",()=>{n(new Error("Failed to load file"))}),r.addEventListener("load",o=>{if(!o.target||!o.target.result||typeof o.target.result=="string"){n(new Error("Could not load file"));return}const c=new Uint8Array(o.target.result);try{const a=He(c,"round_freeze_end").map(_=>_.get("tick")),u=Ue(c,["crosshair_code"],a),y=[];for(const _ of u)y.findIndex(s=>s.steamID===_.get("steamid"))>=0||y.push({steamID:_.get("steamid")??"",name:_.get("name")??"",code:_.get("crosshair_code")??""});e(y)}catch(i){n(i)}}),r.readAsArrayBuffer(t)})}function Be(t){return!(!t||!t.name.endsWith(".dem"))}async function Pe(t){try{return await navigator.clipboard.writeText(t),!0}catch{return!1}}function Ne(){return new Promise((t,e)=>{const n=document.createElement("input");n.type="file",n.accept=".dem",n.addEventListener("cancel",()=>{n.remove(),t(!1)}),n.addEventListener("change",()=>{n.remove(),!n.files||n.files.length<=0?t(!1):(re.set({dragging:!1,file:n.files[0]}),t(!0))}),n.addEventListener("error",()=>{n.remove(),e(new Error("Failed to select file"))}),n.click()})}function pe(t,e,n){const r=t.slice();return r[8]=e[n],r}function Qe(t){let e,n='<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" class="text-white group-hover:text-black"><path fill="currentColor" d="M11 20H6.5q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55Z"></path></svg>',r,o,c='<h2 class="text-base text-white group-hover:text-black">Drag &amp; drop your .dem file here</h2> <h2 class="text-sm italic text-white group-hover:text-black">...or click on this box to select a file from your device</h2>';return{c(){e=L("div"),e.innerHTML=n,r=B(),o=L("div"),o.innerHTML=c,this.h()},l(i){e=C(i,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-tjiwuw"&&(e.innerHTML=n),r=P(i),o=C(i,"DIV",{class:!0,"data-svelte-h":!0}),Z(o)!=="svelte-1fljg82"&&(o.innerHTML=c),this.h()},h(){w(e,"class",""),w(o,"class","")},m(i,a){G(i,e,a),G(i,r,a),G(i,o,a)},d(i){i&&(D(e),D(r),D(o))}}}function Je(t){let e,n="Loading...";return{c(){e=L("h1"),e.textContent=n,this.h()},l(r){e=C(r,"H1",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1lzmij5"&&(e.textContent=n),this.h()},h(){w(e,"class","animate-pulse text-5xl font-bold uppercase text-zinc-400")},m(r,o){G(r,e,o)},d(r){r&&D(e)}}}function ye(t){let e,n,r=t[8].steamID+"",o,c,i=t[8].name+"",a,u,y,_,s,h=t[8].code+"",v,I,H,V;function Q(){return t[6](t[8])}return{c(){e=L("li"),n=L("a"),o=F(r),c=F(": "),a=F(i),y=F(`
				           
				`),_=L("div"),s=L("code"),v=F(h),I=B(),this.h()},l(S){e=C(S,"LI",{class:!0});var E=z(e);n=C(E,"A",{href:!0,target:!0,rel:!0,class:!0});var A=z(n);o=j(A,r),c=j(A,": "),a=j(A,i),A.forEach(D),y=j(E,`
				           
				`),_=C(E,"DIV",{class:!0,role:!0,tabindex:!0});var M=z(_);s=C(M,"CODE",{});var Y=z(s);v=j(Y,h),Y.forEach(D),M.forEach(D),I=P(E),E.forEach(D),this.h()},h(){w(n,"href",u="https://steamcommunity.com/profiles/"+t[8].steamID),w(n,"target","_blank"),w(n,"rel","noreferrer noreopener"),w(n,"class","transition hover:text-pink-400 active:scale-90"),w(_,"class","cursor-pointer transition hover:text-pink-400 active:scale-90"),w(_,"role","button"),w(_,"tabindex","0"),w(e,"class","flex justify-between text-white")},m(S,E){G(S,e,E),b(e,n),b(n,o),b(n,c),b(n,a),b(e,y),b(e,_),b(_,s),b(s,v),b(e,I),H||(V=[le(_,"click",Q),le(_,"keydown",t[4])],H=!0)},p(S,E){t=S,E&1&&r!==(r=t[8].steamID+"")&&ee(o,r),E&1&&i!==(i=t[8].name+"")&&ee(a,i),E&1&&u!==(u="https://steamcommunity.com/profiles/"+t[8].steamID)&&w(n,"href",u),E&1&&h!==(h=t[8].code+"")&&ee(v,h)},d(S){S&&D(e),H=!1,ve(V)}}}function Ze(t){let e,n,r="CS2 Demo Crosshair Code Extractor",o,c,i=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
		GitHub`,a,u,y,_,s,h,v=t[0].length+"",I,H,V=t[0].length===1?"":"s",Q,S,E,A,M,Y=`<em class="text-left font-semibold not-italic">SteamID
				<p class="text-sm font-normal italic">Click to open profile</p></em>
			 
			<em class="text-right font-semibold not-italic">Code
				<p class="text-sm font-normal italic">Click to copy</p></em>`,ae,ue,ge;function be(g,p){return g[1]?Je:Qe}let oe=be(t),O=oe(t),J=me(t[0]),x=[];for(let g=0;g<J.length;g+=1)x[g]=ye(pe(t,J,g));return{c(){e=L("div"),n=L("h1"),n.textContent=r,o=B(),c=L("a"),c.innerHTML=i,a=B(),u=L("div"),O.c(),_=B(),s=L("h1"),h=F("Found "),I=F(v),H=F(" crosshair code"),Q=F(V),S=F("."),E=B(),A=L("ul"),M=L("li"),M.innerHTML=Y,ae=B();for(let g=0;g<x.length;g+=1)x[g].c();this.h()},l(g){e=C(g,"DIV",{class:!0});var p=z(e);n=C(p,"H1",{class:!0,"data-svelte-h":!0}),Z(n)!=="svelte-326fts"&&(n.textContent=r),o=P(p),c=C(p,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),Z(c)!=="svelte-1itvnlq"&&(c.innerHTML=i),a=P(p),u=C(p,"DIV",{class:!0,role:!0,tabindex:!0});var m=z(u);O.l(m),m.forEach(D),_=P(p),s=C(p,"H1",{class:!0});var U=z(s);h=j(U,"Found "),I=j(U,v),H=j(U," crosshair code"),Q=j(U,V),S=j(U,"."),U.forEach(D),E=P(p),A=C(p,"UL",{class:!0});var se=z(A);M=C(se,"LI",{class:!0,"data-svelte-h":!0}),Z(M)!=="svelte-5p3vfg"&&(M.innerHTML=Y),ae=P(se);for(let fe=0;fe<x.length;fe+=1)x[fe].l(se);se.forEach(D),p.forEach(D),this.h()},h(){w(n,"class","mb-4 text-2xl text-white"),w(c,"href","https://github.com/BeepIsla/demo-crosshair-code"),w(c,"target","_blank"),w(c,"class","mb-4 flex items-center gap-1 text-white hover:underline"),w(u,"class",y="group flex h-[300px] w-full cursor-pointer place-content-center place-items-center justify-center gap-6 rounded-xl border-2 border-dashed border-zinc-400 p-8 transition "+(t[1]?"cursor-wait":"hover:border-transparent hover:bg-[#EDEDED]")),w(u,"role","button"),w(u,"tabindex","0"),w(s,"class","mb-4 mt-4 text-lg text-white"),w(M,"class","flex justify-between text-white"),w(A,"class","w-full"),w(e,"class","mx-auto flex h-screen w-full max-w-[1024px] flex-col items-center justify-center")},m(g,p){G(g,e,p),b(e,n),b(e,o),b(e,c),b(e,a),b(e,u),O.m(u,null),b(e,_),b(e,s),b(s,h),b(s,I),b(s,H),b(s,Q),b(s,S),b(e,E),b(e,A),b(A,M),b(A,ae);for(let m=0;m<x.length;m+=1)x[m]&&x[m].m(A,null);ue||(ge=[le(u,"click",t[2]),le(u,"keypress",t[5])],ue=!0)},p(g,[p]){if(oe!==(oe=be(g))&&(O.d(1),O=oe(g),O&&(O.c(),O.m(u,null))),p&2&&y!==(y="group flex h-[300px] w-full cursor-pointer place-content-center place-items-center justify-center gap-6 rounded-xl border-2 border-dashed border-zinc-400 p-8 transition "+(g[1]?"cursor-wait":"hover:border-transparent hover:bg-[#EDEDED]"))&&w(u,"class",y),p&1&&v!==(v=g[0].length+"")&&ee(I,v),p&1&&V!==(V=g[0].length===1?"":"s")&&ee(Q,V),p&9){J=me(g[0]);let m;for(m=0;m<J.length;m+=1){const U=pe(g,J,m);x[m]?x[m].p(U,p):(x[m]=ye(U),x[m].c(),x[m].m(A,null))}for(;m<x.length;m+=1)x[m].d(1);x.length=J.length}},i:we,o:we,d(g){g&&D(e),O.d(),Ie(x,g),ue=!1,ve(ge)}}}function Ge(t,e,n){let r=[],o=!0;De(()=>{n(1,o=!0),Le().catch(s=>{c(s,!0)}).finally(()=>{n(1,o=!1)})});function c(s,h){console.error(s),alert(h?`An error occurred: ${String(s)}

This will prevent the website from working.
Please reload the page.`:`An error occurred: ${String(s)}

Please select another file or report this issue.`)}function i(){o||(n(1,o=!0),Ne().then(s=>{s||n(1,o=!1)}).catch(s=>{c(s),n(1,o=!1)}))}function a(s){Pe(s).then(()=>{alert(`Copied "${s}" to clipboard`)}).catch(h=>{alert(`Failed to copy to clipboard: ${h}`)})}re.subscribe(s=>{if(!s.dragging&&s.file){if(!Be(s.file)){alert(`Invalid file. Only .dem files are supported!

You may have to extract the file using 7zip.`);return}n(1,o=!0),ze(s.file).then(h=>{n(0,r=h)}).catch(h=>{c(h)}).finally(()=>{n(1,o=!1)})}});function u(s){he.call(this,t,s)}function y(s){he.call(this,t,s)}return[r,o,i,a,u,y,s=>a(s.code)]}class $e extends Te{constructor(e){super(),Se(this,e,Ge,Ze,Ce,{})}}export{$e as component};
