import{R as L,j as o}from"./index-DUikSin5.js";var ue=e=>e.type==="checkbox",se=e=>e instanceof Date,T=e=>e==null;const es=e=>typeof e=="object";var j=e=>!T(e)&&!Array.isArray(e)&&es(e)&&!se(e),ms=e=>j(e)&&e.target?ue(e.target)?e.target.checked:e.target.value:e,gs=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,xs=(e,t)=>e.has(gs(t)),vs=e=>{const t=e.constructor&&e.constructor.prototype;return j(t)&&t.hasOwnProperty("isPrototypeOf")},Ee=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let t;const r=Array.isArray(e),l=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Ee&&(e instanceof Blob||l))&&(r||j(e)))if(t=r?[]:{},!r&&!vs(e))t=e;else for(const c in e)e.hasOwnProperty(c)&&(t[c]=M(e[c]));else return e;return t}var _e=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,y=(e,t,r)=>{if(!t||!j(e))return r;const l=_e(t.split(/[,[\].]+?/)).reduce((c,n)=>T(c)?c:c[n],e);return w(l)||l===e?w(e[t])?r:e[t]:l},W=e=>typeof e=="boolean",Se=e=>/^\w*$/.test(e),ss=e=>_e(e.replace(/["|']|\]/g,"").split(/\.|\[/)),F=(e,t,r)=>{let l=-1;const c=Se(t)?[t]:ss(t),n=c.length,h=n-1;for(;++l<n;){const m=c[l];let C=r;if(l!==h){const q=e[m];C=j(q)||Array.isArray(q)?q:isNaN(+c[l+1])?{}:[]}if(m==="__proto__"||m==="constructor"||m==="prototype")return;e[m]=C,e=e[m]}return e};const He={BLUR:"blur",FOCUS_OUT:"focusout"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};L.createContext(null);var bs=(e,t,r,l=!0)=>{const c={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(c,n,{get:()=>{const h=n;return t._proxyFormState[h]!==P.all&&(t._proxyFormState[h]=!l||P.all),e[h]}});return c},U=e=>j(e)&&!Object.keys(e).length,ps=(e,t,r,l)=>{r(e);const{name:c,...n}=e;return U(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find(h=>t[h]===P.all)},ge=e=>Array.isArray(e)?e:[e];function _s(e){const t=L.useRef(e);t.current=e,L.useEffect(()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var K=e=>typeof e=="string",Fs=(e,t,r,l,c)=>K(e)?(l&&t.watch.add(e),y(r,e,c)):Array.isArray(e)?e.map(n=>(l&&t.watch.add(n),y(r,n))):(l&&(t.watchAll=!0),r),Ns=(e,t,r,l,c)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[l]:c||!0}}:{},Ke=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),$e=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const de=(e,t,r,l)=>{for(const c of r||Object.keys(e)){const n=y(e,c);if(n){const{_f:h,...m}=n;if(h){if(h.refs&&h.refs[0]&&t(h.refs[0],c)&&!l)return!0;if(h.ref&&t(h.ref,h.name)&&!l)return!0;if(de(m,t))break}else if(j(m)&&de(m,t))break}}};var js=(e,t,r)=>{const l=ge(y(e,r));return F(l,"root",t[r]),F(e,r,l),e},Te=e=>e.type==="file",H=e=>typeof e=="function",ve=e=>{if(!Ee)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},xe=e=>K(e),Ce=e=>e.type==="radio",be=e=>e instanceof RegExp;const ze={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var rs=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:ze}return ze};const Xe={isValid:!1,value:null};var ts=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Xe):Xe;function Ze(e,t,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||W(e)&&!e)return{type:r,message:xe(e)?e:"",ref:t}}var ie=e=>j(e)&&!be(e)?e:{value:e,message:""},Je=async(e,t,r,l,c,n)=>{const{ref:h,refs:m,required:C,maxLength:q,minLength:N,min:b,max:fe,pattern:he,validate:$,name:B,valueAsNumber:z,mount:J}=e._f,p=y(r,B);if(!J||t.has(B))return{};const Y=m?m[0]:h,X=v=>{c&&Y.reportValidity&&(Y.setCustomValidity(W(v)?"":v||""),Y.reportValidity())},A={},re=Ce(h),ye=ue(h),ee=re||ye,te=(z||Te(h))&&w(h.value)&&w(p)||ve(h)&&h.value===""||p===""||Array.isArray(p)&&!p.length,O=Ns.bind(null,B,l,A),me=(v,_,V,S=Z.maxLength,I=Z.minLength)=>{const R=v?_:V;A[B]={type:v?S:I,message:R,ref:h,...O(v?S:I,R)}};if(n?!Array.isArray(p)||!p.length:C&&(!ee&&(te||T(p))||W(p)&&!p||ye&&!rs(m).isValid||re&&!ts(m).isValid)){const{value:v,message:_}=xe(C)?{value:!!C,message:C}:ie(C);if(v&&(A[B]={type:Z.required,message:_,ref:Y,...O(Z.required,_)},!l))return X(_),A}if(!te&&(!T(b)||!T(fe))){let v,_;const V=ie(fe),S=ie(b);if(!T(p)&&!isNaN(p)){const I=h.valueAsNumber||p&&+p;T(V.value)||(v=I>V.value),T(S.value)||(_=I<S.value)}else{const I=h.valueAsDate||new Date(p),R=ne=>new Date(new Date().toDateString()+" "+ne),ae=h.type=="time",le=h.type=="week";K(V.value)&&p&&(v=ae?R(p)>R(V.value):le?p>V.value:I>new Date(V.value)),K(S.value)&&p&&(_=ae?R(p)<R(S.value):le?p<S.value:I<new Date(S.value))}if((v||_)&&(me(!!v,V.message,S.message,Z.max,Z.min),!l))return X(A[B].message),A}if((q||N)&&!te&&(K(p)||n&&Array.isArray(p))){const v=ie(q),_=ie(N),V=!T(v.value)&&p.length>+v.value,S=!T(_.value)&&p.length<+_.value;if((V||S)&&(me(V,v.message,_.message),!l))return X(A[B].message),A}if(he&&!te&&K(p)){const{value:v,message:_}=ie(he);if(be(v)&&!p.match(v)&&(A[B]={type:Z.pattern,message:_,ref:h,...O(Z.pattern,_)},!l))return X(_),A}if($){if(H($)){const v=await $(p,r),_=Ze(v,Y);if(_&&(A[B]={..._,...O(Z.validate,_.message)},!l))return X(_.message),A}else if(j($)){let v={};for(const _ in $){if(!U(v)&&!l)break;const V=Ze(await $[_](p,r),Y,_);V&&(v={...V,...O(_,V.message)},X(V.message),l&&(A[B]=v))}if(!U(v)&&(A[B]={ref:Y,...v},!l))return A}}return X(!0),A};function ws(e,t){const r=t.slice(0,-1).length;let l=0;for(;l<r;)e=w(e)?l++:e[t[l++]];return e}function As(e){for(const t in e)if(e.hasOwnProperty(t)&&!w(e[t]))return!1;return!0}function D(e,t){const r=Array.isArray(t)?t:Se(t)?[t]:ss(t),l=r.length===1?e:ws(e,r),c=r.length-1,n=r[c];return l&&delete l[n],c!==0&&(j(l)&&U(l)||Array.isArray(l)&&As(l))&&D(e,r.slice(0,-1)),e}var Ae=()=>{let e=[];return{get observers(){return e},next:c=>{for(const n of e)n.next&&n.next(c)},subscribe:c=>(e.push(c),{unsubscribe:()=>{e=e.filter(n=>n!==c)}}),unsubscribe:()=>{e=[]}}},ke=e=>T(e)||!es(e);function G(e,t){if(ke(e)||ke(t))return e===t;if(se(e)&&se(t))return e.getTime()===t.getTime();const r=Object.keys(e),l=Object.keys(t);if(r.length!==l.length)return!1;for(const c of r){const n=e[c];if(!l.includes(c))return!1;if(c!=="ref"){const h=t[c];if(se(n)&&se(h)||j(n)&&j(h)||Array.isArray(n)&&Array.isArray(h)?!G(n,h):n!==h)return!1}}return!0}var is=e=>e.type==="select-multiple",Vs=e=>Ce(e)||ue(e),Ve=e=>ve(e)&&e.isConnected,as=e=>{for(const t in e)if(H(e[t]))return!0;return!1};function pe(e,t={}){const r=Array.isArray(e);if(j(e)||r)for(const l in e)Array.isArray(e[l])||j(e[l])&&!as(e[l])?(t[l]=Array.isArray(e[l])?[]:{},pe(e[l],t[l])):T(e[l])||(t[l]=!0);return t}function ls(e,t,r){const l=Array.isArray(e);if(j(e)||l)for(const c in e)Array.isArray(e[c])||j(e[c])&&!as(e[c])?w(t)||ke(r[c])?r[c]=Array.isArray(e[c])?pe(e[c],[]):{...pe(e[c])}:ls(e[c],T(t)?{}:t[c],r[c]):r[c]=!G(e[c],t[c]);return r}var oe=(e,t)=>ls(e,t,pe(t)),ns=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:l})=>w(e)?e:t?e===""?NaN:e&&+e:r&&K(e)?new Date(e):l?l(e):e;function De(e){const t=e.ref;return Te(t)?t.files:Ce(t)?ts(e.refs).value:is(t)?[...t.selectedOptions].map(({value:r})=>r):ue(t)?rs(e.refs).value:ns(w(t.value)?e.ref.value:t.value,e)}var Ds=(e,t,r,l)=>{const c={};for(const n of e){const h=y(t,n);h&&F(c,n,h._f)}return{criteriaMode:r,names:[...e],fields:c,shouldUseNativeValidation:l}},ce=e=>w(e)?e:be(e)?e.source:j(e)?be(e.value)?e.value.source:e.value:e;const Qe="AsyncFunction";var ks=e=>!!e&&!!e.validate&&!!(H(e.validate)&&e.validate.constructor.name===Qe||j(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Qe)),Es=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ge(e,t,r){const l=y(e,r);if(l||Se(r))return{error:l,name:r};const c=r.split(".");for(;c.length;){const n=c.join("."),h=y(t,n),m=y(e,n);if(h&&!Array.isArray(h)&&r!==n)return{name:r};if(m&&m.type)return{name:n,error:m};c.pop()}return{name:r}}var Ss=(e,t,r,l,c)=>c.isOnAll?!1:!r&&c.isOnTouch?!(t||e):(r?l.isOnBlur:c.isOnBlur)?!e:(r?l.isOnChange:c.isOnChange)?e:!0,Ts=(e,t)=>!_e(y(e,t)).length&&D(e,t);const Cs={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Us(e={}){let t={...Cs,...e},r={submitCount:0,isDirty:!1,isLoading:H(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},l={},c=j(t.defaultValues)||j(t.values)?M(t.defaultValues||t.values)||{}:{},n=t.shouldUnregister?{}:M(c),h={action:!1,mount:!1,watch:!1},m={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},C,q=0;const N={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:Ae(),array:Ae(),state:Ae()},fe=Ke(t.mode),he=Ke(t.reValidateMode),$=t.criteriaMode===P.all,B=s=>i=>{clearTimeout(q),q=setTimeout(s,i)},z=async s=>{if(!t.disabled&&(N.isValid||s)){const i=t.resolver?U((await ee()).errors):await O(l,!0);i!==r.isValid&&b.state.next({isValid:i})}},J=(s,i)=>{!t.disabled&&(N.isValidating||N.validatingFields)&&((s||Array.from(m.mount)).forEach(a=>{a&&(i?F(r.validatingFields,a,i):D(r.validatingFields,a))}),b.state.next({validatingFields:r.validatingFields,isValidating:!U(r.validatingFields)}))},p=(s,i=[],a,f,u=!0,d=!0)=>{if(f&&a&&!t.disabled){if(h.action=!0,d&&Array.isArray(y(l,s))){const g=a(y(l,s),f.argA,f.argB);u&&F(l,s,g)}if(d&&Array.isArray(y(r.errors,s))){const g=a(y(r.errors,s),f.argA,f.argB);u&&F(r.errors,s,g),Ts(r.errors,s)}if(N.touchedFields&&d&&Array.isArray(y(r.touchedFields,s))){const g=a(y(r.touchedFields,s),f.argA,f.argB);u&&F(r.touchedFields,s,g)}N.dirtyFields&&(r.dirtyFields=oe(c,n)),b.state.next({name:s,isDirty:v(s,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else F(n,s,i)},Y=(s,i)=>{F(r.errors,s,i),b.state.next({errors:r.errors})},X=s=>{r.errors=s,b.state.next({errors:r.errors,isValid:!1})},A=(s,i,a,f)=>{const u=y(l,s);if(u){const d=y(n,s,w(a)?y(c,s):a);w(d)||f&&f.defaultChecked||i?F(n,s,i?d:De(u._f)):S(s,d),h.mount&&z()}},re=(s,i,a,f,u)=>{let d=!1,g=!1;const x={name:s};if(!t.disabled){const k=!!(y(l,s)&&y(l,s)._f&&y(l,s)._f.disabled);if(!a||f){N.isDirty&&(g=r.isDirty,r.isDirty=x.isDirty=v(),d=g!==x.isDirty);const E=k||G(y(c,s),i);g=!!(!k&&y(r.dirtyFields,s)),E||k?D(r.dirtyFields,s):F(r.dirtyFields,s,!0),x.dirtyFields=r.dirtyFields,d=d||N.dirtyFields&&g!==!E}if(a){const E=y(r.touchedFields,s);E||(F(r.touchedFields,s,a),x.touchedFields=r.touchedFields,d=d||N.touchedFields&&E!==a)}d&&u&&b.state.next(x)}return d?x:{}},ye=(s,i,a,f)=>{const u=y(r.errors,s),d=N.isValid&&W(i)&&r.isValid!==i;if(t.delayError&&a?(C=B(()=>Y(s,a)),C(t.delayError)):(clearTimeout(q),C=null,a?F(r.errors,s,a):D(r.errors,s)),(a?!G(u,a):u)||!U(f)||d){const g={...f,...d&&W(i)?{isValid:i}:{},errors:r.errors,name:s};r={...r,...g},b.state.next(g)}},ee=async s=>{J(s,!0);const i=await t.resolver(n,t.context,Ds(s||m.mount,l,t.criteriaMode,t.shouldUseNativeValidation));return J(s),i},te=async s=>{const{errors:i}=await ee(s);if(s)for(const a of s){const f=y(i,a);f?F(r.errors,a,f):D(r.errors,a)}else r.errors=i;return i},O=async(s,i,a={valid:!0})=>{for(const f in s){const u=s[f];if(u){const{_f:d,...g}=u;if(d){const x=m.array.has(d.name),k=u._f&&ks(u._f);k&&N.validatingFields&&J([f],!0);const E=await Je(u,m.disabled,n,$,t.shouldUseNativeValidation&&!i,x);if(k&&N.validatingFields&&J([f]),E[d.name]&&(a.valid=!1,i))break;!i&&(y(E,d.name)?x?js(r.errors,E,d.name):F(r.errors,d.name,E[d.name]):D(r.errors,d.name))}!U(g)&&await O(g,i,a)}}return a.valid},me=()=>{for(const s of m.unMount){const i=y(l,s);i&&(i._f.refs?i._f.refs.every(a=>!Ve(a)):!Ve(i._f.ref))&&Fe(s)}m.unMount=new Set},v=(s,i)=>!t.disabled&&(s&&i&&F(n,s,i),!G(Ue(),c)),_=(s,i,a)=>Fs(s,m,{...h.mount?n:w(i)?c:K(s)?{[s]:i}:i},a,i),V=s=>_e(y(h.mount?n:c,s,t.shouldUnregister?y(c,s,[]):[])),S=(s,i,a={})=>{const f=y(l,s);let u=i;if(f){const d=f._f;d&&(!d.disabled&&F(n,s,ns(i,d)),u=ve(d.ref)&&T(i)?"":i,is(d.ref)?[...d.ref.options].forEach(g=>g.selected=u.includes(g.value)):d.refs?ue(d.ref)?d.refs.length>1?d.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(u)?!!u.find(x=>x===g.value):u===g.value)):d.refs[0]&&(d.refs[0].checked=!!u):d.refs.forEach(g=>g.checked=g.value===u):Te(d.ref)?d.ref.value="":(d.ref.value=u,d.ref.type||b.values.next({name:s,values:{...n}})))}(a.shouldDirty||a.shouldTouch)&&re(s,u,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ne(s)},I=(s,i,a)=>{for(const f in i){const u=i[f],d=`${s}.${f}`,g=y(l,d);(m.array.has(s)||j(u)||g&&!g._f)&&!se(u)?I(d,u,a):S(d,u,a)}},R=(s,i,a={})=>{const f=y(l,s),u=m.array.has(s),d=M(i);F(n,s,d),u?(b.array.next({name:s,values:{...n}}),(N.isDirty||N.dirtyFields)&&a.shouldDirty&&b.state.next({name:s,dirtyFields:oe(c,n),isDirty:v(s,d)})):f&&!f._f&&!T(d)?I(s,d,a):S(s,d,a),$e(s,m)&&b.state.next({...r}),b.values.next({name:h.mount?s:void 0,values:{...n}})},ae=async s=>{h.mount=!0;const i=s.target;let a=i.name,f=!0;const u=y(l,a),d=()=>i.type?De(u._f):ms(s),g=x=>{f=Number.isNaN(x)||se(x)&&isNaN(x.getTime())||G(x,y(n,a,x))};if(u){let x,k;const E=d(),Q=s.type===He.BLUR||s.type===He.FOCUS_OUT,fs=!Es(u._f)&&!t.resolver&&!y(r.errors,a)&&!u._f.deps||Ss(Q,y(r.touchedFields,a),r.isSubmitted,he,fe),je=$e(a,m,Q);F(n,a,E),Q?(u._f.onBlur&&u._f.onBlur(s),C&&C(0)):u._f.onChange&&u._f.onChange(s);const we=re(a,E,Q,!1),hs=!U(we)||je;if(!Q&&b.values.next({name:a,type:s.type,values:{...n}}),fs)return N.isValid&&(t.mode==="onBlur"&&Q?z():Q||z()),hs&&b.state.next({name:a,...je?{}:we});if(!Q&&je&&b.state.next({...r}),t.resolver){const{errors:qe}=await ee([a]);if(g(E),f){const ys=Ge(r.errors,l,a),We=Ge(qe,l,ys.name||a);x=We.error,a=We.name,k=U(qe)}}else J([a],!0),x=(await Je(u,m.disabled,n,$,t.shouldUseNativeValidation))[a],J([a]),g(E),f&&(x?k=!1:N.isValid&&(k=await O(l,!0)));f&&(u._f.deps&&ne(u._f.deps),ye(a,k,x,we))}},le=(s,i)=>{if(y(r.errors,i)&&s.focus)return s.focus(),1},ne=async(s,i={})=>{let a,f;const u=ge(s);if(t.resolver){const d=await te(w(s)?s:u);a=U(d),f=s?!u.some(g=>y(d,g)):a}else s?(f=(await Promise.all(u.map(async d=>{const g=y(l,d);return await O(g&&g._f?{[d]:g}:g)}))).every(Boolean),!(!f&&!r.isValid)&&z()):f=a=await O(l);return b.state.next({...!K(s)||N.isValid&&a!==r.isValid?{}:{name:s},...t.resolver||!s?{isValid:a}:{},errors:r.errors}),i.shouldFocus&&!f&&de(l,le,s?u:m.mount),f},Ue=s=>{const i={...h.mount?n:c};return w(s)?i:K(s)?y(i,s):s.map(a=>y(i,a))},Be=(s,i)=>({invalid:!!y((i||r).errors,s),isDirty:!!y((i||r).dirtyFields,s),error:y((i||r).errors,s),isValidating:!!y(r.validatingFields,s),isTouched:!!y((i||r).touchedFields,s)}),os=s=>{s&&ge(s).forEach(i=>D(r.errors,i)),b.state.next({errors:s?r.errors:{}})},Oe=(s,i,a)=>{const f=(y(l,s,{_f:{}})._f||{}).ref,u=y(r.errors,s)||{},{ref:d,message:g,type:x,...k}=u;F(r.errors,s,{...k,...i,ref:f}),b.state.next({name:s,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&f&&f.focus&&f.focus()},cs=(s,i)=>H(s)?b.values.subscribe({next:a=>s(_(void 0,i),a)}):_(s,i,!0),Fe=(s,i={})=>{for(const a of s?ge(s):m.mount)m.mount.delete(a),m.array.delete(a),i.keepValue||(D(l,a),D(n,a)),!i.keepError&&D(r.errors,a),!i.keepDirty&&D(r.dirtyFields,a),!i.keepTouched&&D(r.touchedFields,a),!i.keepIsValidating&&D(r.validatingFields,a),!t.shouldUnregister&&!i.keepDefaultValue&&D(c,a);b.values.next({values:{...n}}),b.state.next({...r,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&z()},Re=({disabled:s,name:i,field:a,fields:f})=>{(W(s)&&h.mount||s||m.disabled.has(i))&&(s?m.disabled.add(i):m.disabled.delete(i),re(i,De(a?a._f:y(f,i)._f),!1,!1,!0))},Ne=(s,i={})=>{let a=y(l,s);const f=W(i.disabled)||W(t.disabled);return F(l,s,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:s}},name:s,mount:!0,...i}}),m.mount.add(s),a?Re({field:a,disabled:W(i.disabled)?i.disabled:t.disabled,name:s}):A(s,!0,i.value),{...f?{disabled:i.disabled||t.disabled}:{},...t.progressive?{required:!!i.required,min:ce(i.min),max:ce(i.max),minLength:ce(i.minLength),maxLength:ce(i.maxLength),pattern:ce(i.pattern)}:{},name:s,onChange:ae,onBlur:ae,ref:u=>{if(u){Ne(s,i),a=y(l,s);const d=w(u.value)&&u.querySelectorAll&&u.querySelectorAll("input,select,textarea")[0]||u,g=Vs(d),x=a._f.refs||[];if(g?x.find(k=>k===d):d===a._f.ref)return;F(l,s,{_f:{...a._f,...g?{refs:[...x.filter(Ve),d,...Array.isArray(y(c,s))?[{}]:[]],ref:{type:d.type,name:s}}:{ref:d}}}),A(s,!1,void 0,d)}else a=y(l,s,{}),a._f&&(a._f.mount=!1),(t.shouldUnregister||i.shouldUnregister)&&!(xs(m.array,s)&&h.action)&&m.unMount.add(s)}}},Me=()=>t.shouldFocusError&&de(l,le,m.mount),ds=s=>{W(s)&&(b.state.next({disabled:s}),de(l,(i,a)=>{const f=y(l,a);f&&(i.disabled=f._f.disabled||s,Array.isArray(f._f.refs)&&f._f.refs.forEach(u=>{u.disabled=f._f.disabled||s}))},0,!1))},Le=(s,i)=>async a=>{let f;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let u=M(n);if(m.disabled.size)for(const d of m.disabled)F(u,d,void 0);if(b.state.next({isSubmitting:!0}),t.resolver){const{errors:d,values:g}=await ee();r.errors=d,u=g}else await O(l);if(D(r.errors,"root"),U(r.errors)){b.state.next({errors:{}});try{await s(u,a)}catch(d){f=d}}else i&&await i({...r.errors},a),Me(),setTimeout(Me);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},us=(s,i={})=>{y(l,s)&&(w(i.defaultValue)?R(s,M(y(c,s))):(R(s,i.defaultValue),F(c,s,M(i.defaultValue))),i.keepTouched||D(r.touchedFields,s),i.keepDirty||(D(r.dirtyFields,s),r.isDirty=i.defaultValue?v(s,M(y(c,s))):v()),i.keepError||(D(r.errors,s),N.isValid&&z()),b.state.next({...r}))},Ie=(s,i={})=>{const a=s?M(s):c,f=M(a),u=U(s),d=u?c:f;if(i.keepDefaultValues||(c=a),!i.keepValues){if(i.keepDirtyValues){const g=new Set([...m.mount,...Object.keys(oe(c,n))]);for(const x of Array.from(g))y(r.dirtyFields,x)?F(d,x,y(n,x)):R(x,y(d,x))}else{if(Ee&&w(s))for(const g of m.mount){const x=y(l,g);if(x&&x._f){const k=Array.isArray(x._f.refs)?x._f.refs[0]:x._f.ref;if(ve(k)){const E=k.closest("form");if(E){E.reset();break}}}}l={}}n=t.shouldUnregister?i.keepDefaultValues?M(c):{}:M(d),b.array.next({values:{...d}}),b.values.next({values:{...d}})}m={mount:i.keepDirtyValues?m.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!N.isValid||!!i.keepIsValid||!!i.keepDirtyValues,h.watch=!!t.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:u?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!G(s,c)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:u?{}:i.keepDirtyValues?i.keepDefaultValues&&n?oe(c,n):r.dirtyFields:i.keepDefaultValues&&s?oe(c,s):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(s,i)=>Ie(H(s)?s(n):s,i);return{control:{register:Ne,unregister:Fe,getFieldState:Be,handleSubmit:Le,setError:Oe,_executeSchema:ee,_getWatch:_,_getDirty:v,_updateValid:z,_removeUnmounted:me,_updateFieldArray:p,_updateDisabledField:Re,_getFieldArray:V,_reset:Ie,_resetDefaultValues:()=>H(t.defaultValues)&&t.defaultValues().then(s=>{Pe(s,t.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:s=>{r={...r,...s}},_disableForm:ds,_subjects:b,_proxyFormState:N,_setErrors:X,get _fields(){return l},get _formValues(){return n},get _state(){return h},set _state(s){h=s},get _defaultValues(){return c},get _names(){return m},set _names(s){m=s},get _formState(){return r},set _formState(s){r=s},get _options(){return t},set _options(s){t={...t,...s}}},trigger:ne,register:Ne,handleSubmit:Le,watch:cs,setValue:R,getValues:Ue,reset:Pe,resetField:us,clearErrors:os,unregister:Fe,setError:Oe,setFocus:(s,i={})=>{const a=y(l,s),f=a&&a._f;if(f){const u=f.refs?f.refs[0]:f.ref;u.focus&&(u.focus(),i.shouldSelect&&H(u.select)&&u.select())}},getFieldState:Be}}function Bs(e={}){const t=L.useRef(void 0),r=L.useRef(void 0),[l,c]=L.useState({isDirty:!1,isValidating:!1,isLoading:H(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:H(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Us(e),formState:l});const n=t.current.control;return n._options=e,_s({subject:n._subjects.state,next:h=>{ps(h,n._proxyFormState,n._updateFormState)&&c({...n._formState})}}),L.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),L.useEffect(()=>{if(n._proxyFormState.isDirty){const h=n._getDirty();h!==l.isDirty&&n._subjects.state.next({isDirty:h})}},[n,l.isDirty]),L.useEffect(()=>{e.values&&!G(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,c(h=>({...h}))):n._resetDefaultValues()},[e.values,n]),L.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),L.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),L.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),t.current.formState=bs(l,n),t.current}const Os="/assets/contactForm-DyQ2Xu4S.png",Ps=()=>{const{register:e,handleSubmit:t,formState:{errors:r},reset:l}=Bs(),c=n=>{try{console.log("data",n),fetch("https://script.google.com/macros/s/AKfycbxYNp-8jxit3fnRIWuiLU5Yuo8_h1ubaFIIwVT4jYeLXFGa0BR36BJ32e33_IKXcD5C4A/exec",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(h=>{console.log("res",h)}).catch(h=>{console.log("err",h)})}catch(h){console.log(h)}};return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"contactUsBanner",children:o.jsx("div",{className:"overlay",children:o.jsx("h2",{children:"Contact Us"})})}),o.jsxs("div",{className:"container-sm contactUs py-3",children:[o.jsxs("div",{className:"py-2 row align-items-center justify-content-between",children:[o.jsx("h2",{className:"text-center py-4",children:"Main Office"}),o.jsx("div",{className:"col-12 col-md-7 order-1",children:o.jsx("iframe",{className:" border border-dark border-3",width:"100%",title:"googleMap",height:"400",scrolling:"no",src:"https://maps.google.com/maps?width=100%25&height=400&hl=en&q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&t=&z=14&ie=UTF8&iwloc=B&output=embed"})}),o.jsx("div",{className:"col-12 col-md-4 py-3 order-md-1",children:o.jsxs("div",{className:"text-center text-md-start",children:[o.jsx("h3",{className:"py-md-2",children:"Reach Us"}),o.jsxs("p",{children:["Call or Text : ",o.jsx("span",{className:"contact1",children:"(123) 123-1234"})]}),o.jsxs("p",{children:["Email : ",o.jsx("span",{className:"contact1",children:"goodmanlawfirm@gmail.com"})]}),o.jsx("br",{}),o.jsx("br",{}),o.jsx("h3",{className:"py-md-2",children:"Visit Us"}),o.jsx("p",{children:"165 Burnside St 2nd Floor Cranston, RI 02910"})]})})]}),o.jsx("hr",{className:"border border-1 border-danger-subtle my-1 mt-5"}),o.jsxs("div",{className:"py-2 row align-items-center justify-content-between",children:[o.jsx("h2",{className:"text-center py-4",children:"Branch Office 1"}),o.jsx("div",{className:"col-12 col-md-7 order-1",children:o.jsx("iframe",{className:" border border-dark border-3",width:"100%",title:"googleMap",height:"400",scrolling:"no",src:"https://maps.google.com/maps?width=100%25&height=400&hl=en&q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&t=&z=14&ie=UTF8&iwloc=B&output=embed"})}),o.jsx("div",{className:"col-12 col-md-4 py-3",children:o.jsxs("div",{className:"text-center text-md-start",children:[o.jsx("h3",{className:"py-md-2",children:"Reach Us"}),o.jsxs("p",{children:["Call or Text : ",o.jsx("span",{className:"contact1",children:"(123) 123-1234"})]}),o.jsxs("p",{children:["Email : ",o.jsx("span",{className:"contact1",children:"goodmanlawfirm@gmail.com"})]}),o.jsx("br",{}),o.jsx("br",{}),o.jsx("h3",{className:"py-md-2",children:"Visit Us"}),o.jsx("p",{children:"165 Burnside St 2nd Floor Cranston, RI 02910"})]})})]}),o.jsx("hr",{className:"border border-1 border-danger-subtle my-1 mt-5"}),o.jsxs("div",{className:"py-2 row align-items-center justify-content-between",children:[o.jsx("h2",{className:"text-center py-4",children:"Branch Office 2"}),o.jsx("div",{className:"col-12 col-md-7 order-1",children:o.jsx("iframe",{className:" border border-dark border-3",width:"100%",title:"googleMap",height:"400",scrolling:"no",src:"https://maps.google.com/maps?width=100%25&height=400&hl=en&q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&t=&z=14&ie=UTF8&iwloc=B&output=embed"})}),o.jsx("div",{className:"col-12 col-md-4 py-3 order-md-1",children:o.jsxs("div",{className:"text-center text-md-start",children:[o.jsx("h3",{className:"py-md-2",children:"Reach Us"}),o.jsxs("p",{children:["Call or Text : ",o.jsx("span",{className:"contact1",children:"(123) 123-1234"})]}),o.jsxs("p",{children:["Email : ",o.jsx("span",{className:"contact1",children:"goodmanlawfirm@gmail.com"})]}),o.jsx("br",{}),o.jsx("br",{}),o.jsx("h3",{className:"py-md-2",children:"Visit Us"}),o.jsx("p",{children:"165 Burnside St 2nd Floor Cranston, RI 02910"})]})})]}),o.jsx("hr",{className:"border border-1 border-danger-subtle my-1 mt-5"}),o.jsxs("div",{className:"contactForm rounded-5 my-3 p-5",children:[o.jsx("h3",{className:"fw-bold text-center",children:"Schedule A Free Consultation Today"}),o.jsx("p",{className:"fw-bold text-center",children:"Need legal representation? Fill out our contact form with some information about your case or concern. We will respond to any inquiry as soon as possible."}),o.jsxs("div",{className:"contactForm1 row align-items-center justify-content-around",children:[o.jsx("div",{className:"col-12 col-md-6",children:o.jsxs("form",{className:"w-100 row",onSubmit:t(c),children:[o.jsxs("div",{className:" col-12",children:[o.jsx("div",{className:"py-2",children:o.jsxs("label",{htmlFor:"Name",children:["Name ",o.jsx("span",{children:"(required)"})]})}),o.jsx("div",{className:"py-2",children:o.jsx("input",{className:"input rounded-2",id:"Name",type:"text",...e("Name",{required:"Name is required"})})}),o.jsx("div",{className:"py-1",children:r.Name&&o.jsxs("span",{className:"error",children:["*",r.Name.message]})})]}),o.jsxs("div",{className:"col-12",children:[o.jsx("div",{className:"py-2",children:o.jsxs("label",{htmlFor:"Email",children:["Email ",o.jsx("span",{children:"(required)"})]})}),o.jsx("div",{className:"py-2",children:o.jsx("input",{className:"input rounded-2",id:"Email",type:"email",...e("Email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid email address"}})})}),o.jsx("div",{className:"py-1",children:r.Email&&o.jsxs("span",{className:"error",children:["*",r.Email.message]})})]}),o.jsxs("div",{className:"col-12",children:[o.jsx("div",{className:"py-2",children:o.jsxs("label",{htmlFor:"Phone",children:["Mobile Number ",o.jsx("span",{children:"(required)"})]})}),o.jsx("div",{className:"py-2",children:o.jsx("input",{className:"input rounded-2",id:"Phone",type:"text",...e("Phone",{required:"Mobile number is required",pattern:{value:/^[0-9]{10}$/,message:"Mobile number must be 10 digits"}})})}),o.jsx("div",{className:"py-1",children:r.Phone&&o.jsxs("span",{className:"error",children:["*",r.Phone.message]})})]}),o.jsxs("div",{className:"col-12",children:[o.jsxs("div",{className:"py-2",children:[o.jsxs("label",{htmlFor:"Message",children:["How Can We Help? ",o.jsx("span",{children:"(required)"})]}),o.jsx("p",{className:"py-1 w-100 lead",children:"Please do not include confidential or sensitive information in your message. In the event that we are representing a party with opposing interests to your own, we may have a duty to disclose any information you provide to our client."})]}),o.jsx("div",{className:"",children:o.jsx("textarea",{className:"input rounded-2",id:"Message",...e("Message",{required:"Message is required"})})}),o.jsx("div",{className:"py-1",children:r.Message&&o.jsxs("span",{className:"error",children:["*",r.Message.message]})})]}),o.jsx("div",{className:"pt-3",children:o.jsx("button",{className:"btn submitButton rounded-5 px-5 float-center",type:"submit",children:"Submit"})})]})}),o.jsx("div",{className:"col-12 col-md-4 d-none d-lg-block",children:o.jsx("img",{width:500,className:"img-fluid",src:Os})})]})]})]})]})};export{Ps as default};
