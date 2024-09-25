/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=function(t){const e=[];let i=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Ma=function(t){const e=[];let i=0,r=0;for(;i<t.length;){const o=t[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=t[i++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=t[i++],l=t[i++],u=t[i++],g=((o&7)<<18|(c&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const c=t[i++],l=t[i++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return e.join("")},Ds={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const c=t[o],l=o+1<t.length,u=l?t[o+1]:0,g=o+2<t.length,E=g?t[o+2]:0,A=c>>2,S=(c&3)<<4|u>>4;let C=(u&15)<<2|E>>6,N=E&63;g||(N=64,l||(C=64)),r.push(i[A],i[S],i[C],i[N])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Os(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ma(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const c=i[t.charAt(o++)],u=o<t.length?i[t.charAt(o)]:0;++o;const E=o<t.length?i[t.charAt(o)]:64;++o;const S=o<t.length?i[t.charAt(o)]:64;if(++o,c==null||u==null||E==null||S==null)throw new Ua;const C=c<<2|u>>4;if(r.push(C),E!==64){const N=u<<4&240|E>>2;if(r.push(N),S!==64){const k=E<<6&192|S;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ua extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xa=function(t){const e=Os(t);return Ds.encodeByteArray(e,!0)},cn=function(t){return xa(t).replace(/\./g,"")},Ns=function(t){try{return Ds.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=()=>Fa().__FIREBASE_DEFAULTS__,Ba=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Va=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ns(t[1]);return e&&JSON.parse(e)},Ii=()=>{try{return ja()||Ba()||Va()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ls=t=>{var e,i;return(i=(e=Ii())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[t]},$a=t=>{const e=Ls(t);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},Ms=()=>{var t;return(t=Ii())===null||t===void 0?void 0:t.config},Us=t=>{var e;return(e=Ii())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=t.iat||0,c=t.sub||t.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},t),u="";return[cn(JSON.stringify(i)),cn(JSON.stringify(l)),u].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function za(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function xs(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ga(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qa(){const t=q();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fs(){try{return typeof indexedDB=="object"}catch{return!1}}function js(){return new Promise((t,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}function Ka(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="FirebaseError";class ce extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=Ja,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qe.prototype.create)}}class qe{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,c=this.errors[e],l=c?Ya(c,r):"Error",u=`${this.serviceName}: ${l} (${o}).`;return new ce(o,u,r)}}function Ya(t,e){return t.replace(Xa,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Xa=/\{\$([^}]+)}/g;function Qa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ot(t,e){if(t===e)return!0;const i=Object.keys(t),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const c=t[o],l=e[o];if(Vr(c)&&Vr(l)){if(!Ot(c,l))return!1}else if(c!==l)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function Vr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){const e=[];for(const[i,r]of Object.entries(t))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ct(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,c]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function Rt(t){const e=t.indexOf("?");if(!e)return"";const i=t.indexOf("#",e);return t.substring(e,i>0?i:void 0)}function Za(t,e){const i=new ec(t,e);return i.subscribe.bind(i)}class ec{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");tc(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=Zn),o.error===void 0&&(o.error=Zn),o.complete===void 0&&(o.complete=Zn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tc(t,e){if(typeof t!="object"||t===null)return!1;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}function Zn(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=1e3,ic=2,rc=4*60*60*1e3,sc=.5;function $r(t,e=nc,i=ic){const r=e*Math.pow(i,t),o=Math.round(sc*r*(Math.random()-.5)*2);return Math.min(rc,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){return t&&t._delegate?t._delegate:t}class oe{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new Ha;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cc(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Be){return this.instances.has(e)}getOptions(e=Be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(c);r===u&&l.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const l=this.instances.get(o);return l&&e(l,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ac(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Be){return this.component?this.component.multipleInstances?e:Be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ac(t){return t===Be?void 0:t}function cc(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new oc(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(O||(O={}));const hc={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},uc=O.INFO,dc={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},fc=(t,e,...i)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=dc[e];if(o)console[o](`[${r}]  ${t.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _n{constructor(e){this.name=e,this._logLevel=uc,this._logHandler=fc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const pc=(t,e)=>e.some(i=>t instanceof i);let Hr,Wr;function gc(){return Hr||(Hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mc(){return Wr||(Wr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bs=new WeakMap,hi=new WeakMap,Vs=new WeakMap,ei=new WeakMap,wi=new WeakMap;function yc(t){const e=new Promise((i,r)=>{const o=()=>{t.removeEventListener("success",c),t.removeEventListener("error",l)},c=()=>{i(Ne(t.result)),o()},l=()=>{r(t.error),o()};t.addEventListener("success",c),t.addEventListener("error",l)});return e.then(i=>{i instanceof IDBCursor&&Bs.set(i,t)}).catch(()=>{}),wi.set(e,t),e}function vc(t){if(hi.has(t))return;const e=new Promise((i,r)=>{const o=()=>{t.removeEventListener("complete",c),t.removeEventListener("error",l),t.removeEventListener("abort",l)},c=()=>{i(),o()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",c),t.addEventListener("error",l),t.addEventListener("abort",l)});hi.set(t,e)}let ui={get(t,e,i){if(t instanceof IDBTransaction){if(e==="done")return hi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vs.get(t);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ne(t[e])},set(t,e,i){return t[e]=i,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _c(t){ui=t(ui)}function Ic(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=t.call(ti(this),e,...i);return Vs.set(r,e.sort?e.sort():[e]),Ne(r)}:mc().includes(t)?function(...e){return t.apply(ti(this),e),Ne(Bs.get(this))}:function(...e){return Ne(t.apply(ti(this),e))}}function wc(t){return typeof t=="function"?Ic(t):(t instanceof IDBTransaction&&vc(t),pc(t,gc())?new Proxy(t,ui):t)}function Ne(t){if(t instanceof IDBRequest)return yc(t);if(ei.has(t))return ei.get(t);const e=wc(t);return e!==t&&(ei.set(t,e),wi.set(e,t)),e}const ti=t=>wi.get(t);function $s(t,e,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const l=indexedDB.open(t,e),u=Ne(l);return r&&l.addEventListener("upgradeneeded",g=>{r(Ne(l.result),g.oldVersion,g.newVersion,Ne(l.transaction),g)}),i&&l.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),u.then(g=>{c&&g.addEventListener("close",()=>c()),o&&g.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),u}const Ec=["get","getKey","getAll","getAllKeys","count"],Tc=["put","add","delete","clear"],ni=new Map;function zr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ni.get(e))return ni.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=Tc.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Ec.includes(i)))return;const c=async function(l,...u){const g=this.transaction(l,o?"readwrite":"readonly");let E=g.store;return r&&(E=E.index(u.shift())),(await Promise.all([E[i](...u),o&&g.done]))[0]};return ni.set(e,c),c}_c(t=>({...t,get:(e,i,r)=>zr(e,i)||t.get(e,i,r),has:(e,i)=>!!zr(e,i)||t.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(bc(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function bc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",Gr="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new _n("@firebase/app"),Sc="@firebase/app-compat",Cc="@firebase/analytics-compat",Rc="@firebase/analytics",kc="@firebase/app-check-compat",Pc="@firebase/app-check",Oc="@firebase/auth",Dc="@firebase/auth-compat",Nc="@firebase/database",Lc="@firebase/database-compat",Mc="@firebase/functions",Uc="@firebase/functions-compat",xc="@firebase/installations",Fc="@firebase/installations-compat",jc="@firebase/messaging",Bc="@firebase/messaging-compat",Vc="@firebase/performance",$c="@firebase/performance-compat",Hc="@firebase/remote-config",Wc="@firebase/remote-config-compat",zc="@firebase/storage",Gc="@firebase/storage-compat",qc="@firebase/firestore",Kc="@firebase/vertexai-preview",Jc="@firebase/firestore-compat",Yc="firebase",Xc="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="[DEFAULT]",Qc={[di]:"fire-core",[Sc]:"fire-core-compat",[Rc]:"fire-analytics",[Cc]:"fire-analytics-compat",[Pc]:"fire-app-check",[kc]:"fire-app-check-compat",[Oc]:"fire-auth",[Dc]:"fire-auth-compat",[Nc]:"fire-rtdb",[Lc]:"fire-rtdb-compat",[Mc]:"fire-fn",[Uc]:"fire-fn-compat",[xc]:"fire-iid",[Fc]:"fire-iid-compat",[jc]:"fire-fcm",[Bc]:"fire-fcm-compat",[Vc]:"fire-perf",[$c]:"fire-perf-compat",[Hc]:"fire-rc",[Wc]:"fire-rc-compat",[zc]:"fire-gcs",[Gc]:"fire-gcs-compat",[qc]:"fire-fst",[Jc]:"fire-fst-compat",[Kc]:"fire-vertex","fire-js":"fire-js",[Yc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map,Zc=new Map,pi=new Map;function qr(t,e){try{t.container.addComponent(e)}catch(i){$e.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function de(t){const e=t.name;if(pi.has(e))return $e.debug(`There were multiple attempts to register component ${e}.`),!1;pi.set(e,t);for(const i of ln.values())qr(i,t);for(const i of Zc.values())qr(i,t);return!0}function Ke(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}function le(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Le=new qe("app","Firebase",el);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=Xc;function Hs(t,e={}){let i=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fi,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Le.create("bad-app-name",{appName:String(o)});if(i||(i=Ms()),!i)throw Le.create("no-options");const c=ln.get(o);if(c){if(Ot(i,c.options)&&Ot(r,c.config))return c;throw Le.create("duplicate-app",{appName:o})}const l=new lc(o);for(const g of pi.values())l.addComponent(g);const u=new tl(i,r,l);return ln.set(o,u),u}function Ei(t=fi){const e=ln.get(t);if(!e&&t===fi&&Ms())return Hs();if(!e)throw Le.create("no-app",{appName:t});return e}function ne(t,e,i){var r;let o=(r=Qc[t])!==null&&r!==void 0?r:t;i&&(o+=`-${i}`);const c=o.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const u=[`Unable to register library "${o}" with version "${e}":`];c&&u.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$e.warn(u.join(" "));return}de(new oe(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="firebase-heartbeat-database",il=1,Dt="firebase-heartbeat-store";let ii=null;function Ws(){return ii||(ii=$s(nl,il,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Dt)}catch(i){console.warn(i)}}}}).catch(t=>{throw Le.create("idb-open",{originalErrorMessage:t.message})})),ii}async function rl(t){try{const i=(await Ws()).transaction(Dt),r=await i.objectStore(Dt).get(zs(t));return await i.done,r}catch(e){if(e instanceof ce)$e.warn(e.message);else{const i=Le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$e.warn(i.message)}}}async function Kr(t,e){try{const r=(await Ws()).transaction(Dt,"readwrite");await r.objectStore(Dt).put(e,zs(t)),await r.done}catch(i){if(i instanceof ce)$e.warn(i.message);else{const r=Le.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});$e.warn(r.message)}}}function zs(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=1024,ol=30*24*60*60*1e3;class al{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new ll(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Jr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=ol}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Jr(),{heartbeatsToSend:r,unsentEntries:o}=cl(this._heartbeatsCache.heartbeats),c=cn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function Jr(){return new Date().toISOString().substring(0,10)}function cl(t,e=sl){const i=[];let r=t.slice();for(const o of t){const c=i.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),Yr(i)>e){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),Yr(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class ll{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fs()?js().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await rl(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Kr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Kr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Yr(t){return cn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){de(new oe("platform-logger",e=>new Ac(e),"PRIVATE")),de(new oe("heartbeat",e=>new al(e),"PRIVATE")),ne(di,Gr,t),ne(di,Gr,"esm2017"),ne("fire-js","")}hl("");var ul="firebase",dl="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne(ul,dl,"app");const Gs="@firebase/installations",Ti="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=1e4,Ks=`w:${Ti}`,Js="FIS_v2",fl="https://firebaseinstallations.googleapis.com/v1",pl=60*60*1e3,gl="installations",ml="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},He=new qe(gl,ml,yl);function Ys(t){return t instanceof ce&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs({projectId:t}){return`${fl}/projects/${t}/installations`}function Qs(t){return{token:t.token,requestStatus:2,expiresIn:_l(t.expiresIn),creationTime:Date.now()}}async function Zs(t,e){const r=(await e.json()).error;return He.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function eo({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vl(t,{refreshToken:e}){const i=eo(t);return i.append("Authorization",Il(e)),i}async function to(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _l(t){return Number(t.replace("s","000"))}function Il(t){return`${Js} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl({appConfig:t,heartbeatServiceProvider:e},{fid:i}){const r=Xs(t),o=eo(t),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&o.append("x-firebase-client",E)}const l={fid:i,authVersion:Js,appId:t.appId,sdkVersion:Ks},u={method:"POST",headers:o,body:JSON.stringify(l)},g=await to(()=>fetch(r,u));if(g.ok){const E=await g.json();return{fid:E.fid||i,registrationStatus:2,refreshToken:E.refreshToken,authToken:Qs(E.authToken)}}else throw await Zs("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=/^[cdef][\w-]{21}$/,gi="";function Al(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const i=bl(t);return Tl.test(i)?i:gi}catch{return gi}}function bl(t){return El(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new Map;function ro(t,e){const i=In(t);so(i,e),Sl(i,e)}function so(t,e){const i=io.get(t);if(i)for(const r of i)r(e)}function Sl(t,e){const i=Cl();i&&i.postMessage({key:t,fid:e}),Rl()}let Ve=null;function Cl(){return!Ve&&"BroadcastChannel"in self&&(Ve=new BroadcastChannel("[Firebase] FID Change"),Ve.onmessage=t=>{so(t.data.key,t.data.fid)}),Ve}function Rl(){io.size===0&&Ve&&(Ve.close(),Ve=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="firebase-installations-database",Pl=1,We="firebase-installations-store";let ri=null;function Ai(){return ri||(ri=$s(kl,Pl,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(We)}}})),ri}async function hn(t,e){const i=In(t),o=(await Ai()).transaction(We,"readwrite"),c=o.objectStore(We),l=await c.get(i);return await c.put(e,i),await o.done,(!l||l.fid!==e.fid)&&ro(t,e.fid),e}async function oo(t){const e=In(t),r=(await Ai()).transaction(We,"readwrite");await r.objectStore(We).delete(e),await r.done}async function wn(t,e){const i=In(t),o=(await Ai()).transaction(We,"readwrite"),c=o.objectStore(We),l=await c.get(i),u=e(l);return u===void 0?await c.delete(i):await c.put(u,i),await o.done,u&&(!l||l.fid!==u.fid)&&ro(t,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t){let e;const i=await wn(t.appConfig,r=>{const o=Ol(r),c=Dl(t,o);return e=c.registrationPromise,c.installationEntry});return i.fid===gi?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function Ol(t){const e=t||{fid:Al(),registrationStatus:0};return ao(e)}function Dl(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(He.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Nl(t,i);return{installationEntry:i,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ll(t)}:{installationEntry:e}}async function Nl(t,e){try{const i=await wl(t,e);return hn(t.appConfig,i)}catch(i){throw Ys(i)&&i.customData.serverCode===409?await oo(t.appConfig):await hn(t.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function Ll(t){let e=await Xr(t.appConfig);for(;e.registrationStatus===1;)await no(100),e=await Xr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:r}=await bi(t);return r||i}return e}function Xr(t){return wn(t,e=>{if(!e)throw He.create("installation-not-found");return ao(e)})}function ao(t){return Ml(t)?{fid:t.fid,registrationStatus:0}:t}function Ml(t){return t.registrationStatus===1&&t.registrationTime+qs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul({appConfig:t,heartbeatServiceProvider:e},i){const r=xl(t,i),o=vl(t,i),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&o.append("x-firebase-client",E)}const l={installation:{sdkVersion:Ks,appId:t.appId}},u={method:"POST",headers:o,body:JSON.stringify(l)},g=await to(()=>fetch(r,u));if(g.ok){const E=await g.json();return Qs(E)}else throw await Zs("Generate Auth Token",g)}function xl(t,{fid:e}){return`${Xs(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t,e=!1){let i;const r=await wn(t.appConfig,c=>{if(!co(c))throw He.create("not-registered");const l=c.authToken;if(!e&&Bl(l))return c;if(l.requestStatus===1)return i=Fl(t,e),c;{if(!navigator.onLine)throw He.create("app-offline");const u=$l(c);return i=jl(t,u),u}});return i?await i:r.authToken}async function Fl(t,e){let i=await Qr(t.appConfig);for(;i.authToken.requestStatus===1;)await no(100),i=await Qr(t.appConfig);const r=i.authToken;return r.requestStatus===0?Si(t,e):r}function Qr(t){return wn(t,e=>{if(!co(e))throw He.create("not-registered");const i=e.authToken;return Hl(i)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jl(t,e){try{const i=await Ul(t,e),r=Object.assign(Object.assign({},e),{authToken:i});return await hn(t.appConfig,r),i}catch(i){if(Ys(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await oo(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hn(t.appConfig,r)}throw i}}function co(t){return t!==void 0&&t.registrationStatus===2}function Bl(t){return t.requestStatus===2&&!Vl(t)}function Vl(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pl}function $l(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Hl(t){return t.requestStatus===1&&t.requestTime+qs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(t){const e=t,{installationEntry:i,registrationPromise:r}=await bi(e);return r?r.catch(console.error):Si(e).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t,e=!1){const i=t;return await Gl(i),(await Si(i,e)).token}async function Gl(t){const{registrationPromise:e}=await bi(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){if(!t||!t.options)throw si("App Configuration");if(!t.name)throw si("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!t.options[i])throw si(i);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function si(t){return He.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="installations",Kl="installations-internal",Jl=t=>{const e=t.getProvider("app").getImmediate(),i=ql(e),r=Ke(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Yl=t=>{const e=t.getProvider("app").getImmediate(),i=Ke(e,lo).getImmediate();return{getId:()=>Wl(i),getToken:o=>zl(i,o)}};function Xl(){de(new oe(lo,Jl,"PUBLIC")),de(new oe(Kl,Yl,"PRIVATE"))}Xl();ne(Gs,Ti);ne(Gs,Ti,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="analytics",Ql="firebase_id",Zl="origin",eh=60*1e3,th="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ci="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=new _n("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ee=new qe("analytics","Analytics",nh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){if(!t.startsWith(Ci)){const e=ee.create("invalid-gtag-resource",{gtagURL:t});return X.warn(e.message),""}return t}function ho(t){return Promise.all(t.map(e=>e.catch(i=>i)))}function rh(t,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(t,e)),i}function sh(t,e){const i=rh("firebase-js-sdk-policy",{createScriptURL:ih}),r=document.createElement("script"),o=`${Ci}?l=${t}&id=${e}`;r.src=i?i==null?void 0:i.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function oh(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ah(t,e,i,r,o,c){const l=r[o];try{if(l)await e[l];else{const g=(await ho(i)).find(E=>E.measurementId===o);g&&await e[g.appId]}}catch(u){X.error(u)}t("config",o,c)}async function ch(t,e,i,r,o){try{let c=[];if(o&&o.send_to){let l=o.send_to;Array.isArray(l)||(l=[l]);const u=await ho(i);for(const g of l){const E=u.find(S=>S.measurementId===g),A=E&&e[E.appId];if(A)c.push(A);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),t("event",r,o||{})}catch(c){X.error(c)}}function lh(t,e,i,r){async function o(c,...l){try{if(c==="event"){const[u,g]=l;await ch(t,e,i,u,g)}else if(c==="config"){const[u,g]=l;await ah(t,e,i,r,u,g)}else if(c==="consent"){const[u,g]=l;t("consent",u,g)}else if(c==="get"){const[u,g,E]=l;t("get",u,g,E)}else if(c==="set"){const[u]=l;t("set",u)}else t(c,...l)}catch(u){X.error(u)}}return o}function hh(t,e,i,r,o){let c=function(...l){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=lh(c,t,e,i),{gtagCore:c,wrappedGtag:window[o]}}function uh(t){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(Ci)&&i.src.includes(t))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=30,fh=1e3;class ph{constructor(e={},i=fh){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uo=new ph;function gh(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function mh(t){var e;const{appId:i,apiKey:r}=t,o={method:"GET",headers:gh(r)},c=th.replace("{app-id}",i),l=await fetch(c,o);if(l.status!==200&&l.status!==304){let u="";try{const g=await l.json();!((e=g.error)===null||e===void 0)&&e.message&&(u=g.error.message)}catch{}throw ee.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function yh(t,e=uo,i){const{appId:r,apiKey:o,measurementId:c}=t.options;if(!r)throw ee.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:r};throw ee.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Ih;return setTimeout(async()=>{u.abort()},i!==void 0?i:eh),fo({appId:r,apiKey:o,measurementId:c},l,u,e)}async function fo(t,{throttleEndTimeMillis:e,backoffCount:i},r,o=uo){var c;const{appId:l,measurementId:u}=t;try{await vh(r,e)}catch(g){if(u)return X.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:u};throw g}try{const g=await mh(t);return o.deleteThrottleMetadata(l),g}catch(g){const E=g;if(!_h(E)){if(o.deleteThrottleMetadata(l),u)return X.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${E==null?void 0:E.message}]`),{appId:l,measurementId:u};throw g}const A=Number((c=E==null?void 0:E.customData)===null||c===void 0?void 0:c.httpStatus)===503?$r(i,o.intervalMillis,dh):$r(i,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+A,backoffCount:i+1};return o.setThrottleMetadata(l,S),X.debug(`Calling attemptFetch again in ${A} millis`),fo(t,S,r,o)}}function vh(t,e){return new Promise((i,r)=>{const o=Math.max(e-Date.now(),0),c=setTimeout(i,o);t.addEventListener(()=>{clearTimeout(c),r(ee.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _h(t){if(!(t instanceof ce)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ih{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function wh(t,e,i,r,o){if(o&&o.global){t("event",i,r);return}else{const c=await e,l=Object.assign(Object.assign({},r),{send_to:c});t("event",i,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(){if(Fs())try{await js()}catch(t){return X.warn(ee.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return X.warn(ee.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Th(t,e,i,r,o,c,l){var u;const g=yh(t);g.then(N=>{i[N.measurementId]=N.appId,t.options.measurementId&&N.measurementId!==t.options.measurementId&&X.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>X.error(N)),e.push(g);const E=Eh().then(N=>{if(N)return r.getId()}),[A,S]=await Promise.all([g,E]);uh(c)||sh(c,A.measurementId),o("js",new Date);const C=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return C[Zl]="firebase",C.update=!0,S!=null&&(C[Ql]=S),o("config",A.measurementId,C),A.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.app=e}_delete(){return delete kt[this.app.options.appId],Promise.resolve()}}let kt={},Zr=[];const es={};let oi="dataLayer",bh="gtag",ts,po,ns=!1;function Sh(){const t=[];if(xs()&&t.push("This is a browser extension environment."),Ka()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,o)=>`(${o+1}) ${r}`).join(" "),i=ee.create("invalid-analytics-context",{errorInfo:e});X.warn(i.message)}}function Ch(t,e,i){Sh();const r=t.options.appId;if(!r)throw ee.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)X.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ee.create("no-api-key");if(kt[r]!=null)throw ee.create("already-exists",{id:r});if(!ns){oh(oi);const{wrappedGtag:c,gtagCore:l}=hh(kt,Zr,es,oi,bh);po=c,ts=l,ns=!0}return kt[r]=Th(t,Zr,es,e,ts,oi,i),new Ah(t)}function Rh(t=Ei()){t=ie(t);const e=Ke(t,un);return e.isInitialized()?e.getImmediate():kh(t)}function kh(t,e={}){const i=Ke(t,un);if(i.isInitialized()){const o=i.getImmediate();if(Ot(e,i.getOptions()))return o;throw ee.create("already-initialized")}return i.initialize({options:e})}function Ph(t,e,i,r){t=ie(t),wh(po,kt[t.app.options.appId],e,i,r).catch(o=>X.error(o))}const is="@firebase/analytics",rs="0.10.5";function Oh(){de(new oe(un,(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Ch(r,o,i)},"PUBLIC")),de(new oe("analytics-internal",t,"PRIVATE")),ne(is,rs),ne(is,rs,"esm2017");function t(e){try{const i=e.getProvider(un).getImmediate();return{logEvent:(r,o,c)=>Ph(i,r,o,c)}}catch(i){throw ee.create("interop-component-reg-failed",{reason:i})}}}Oh();function Ri(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(i[r[o]]=t[r[o]]);return i}function go(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dh=go,mo=new qe("auth","Firebase",go());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new _n("@firebase/auth");function Nh(t,...e){dn.logLevel<=O.WARN&&dn.warn(`Auth (${at}): ${t}`,...e)}function rn(t,...e){dn.logLevel<=O.ERROR&&dn.error(`Auth (${at}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,...e){throw ki(t,...e)}function he(t,...e){return ki(t,...e)}function yo(t,e,i){const r=Object.assign(Object.assign({},Dh()),{[e]:i});return new qe("auth","Firebase",r).create(e,{appName:t.name})}function we(t){return yo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ki(t,...e){if(typeof t!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(i,...r)}return mo.create(t,...e)}function b(t,e,...i){if(!t)throw ki(e,...i)}function ve(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rn(e),new Error(e)}function Ee(t,e){t||ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lh(){return ss()==="http:"||ss()==="https:"}function ss(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lh()||xs()||"connection"in navigator)?navigator.onLine:!0}function Uh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,i){this.shortDelay=e,this.longDelay=i,Ee(i>e,"Short delay should be less than long delay!"),this.isMobile=za()||Ga()}get(){return Mh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t,e){Ee(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new Mt(3e4,6e4);function Te(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fe(t,e,i,r,o={}){return _o(t,o,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const u=Lt(Object.assign({key:t.config.apiKey},l)).slice(1),g=await t._getAdditionalHeaders();return g["Content-Type"]="application/json",t.languageCode&&(g["X-Firebase-Locale"]=t.languageCode),vo.fetch()(Io(t,t.config.apiHost,i,u),Object.assign({method:e,headers:g,referrerPolicy:"no-referrer"},c))})}async function _o(t,e,i){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xh),e);try{const o=new Bh(t),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw tn(t,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const u=c.ok?l.errorMessage:l.error.message,[g,E]=u.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw tn(t,"credential-already-in-use",l);if(g==="EMAIL_EXISTS")throw tn(t,"email-already-in-use",l);if(g==="USER_DISABLED")throw tn(t,"user-disabled",l);const A=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw yo(t,A,E);ae(t,A)}}catch(o){if(o instanceof ce)throw o;ae(t,"network-request-failed",{message:String(o)})}}async function Ut(t,e,i,r,o={}){const c=await fe(t,e,i,r,o);return"mfaPendingCredential"in c&&ae(t,"multi-factor-auth-required",{_serverResponse:c}),c}function Io(t,e,i,r){const o=`${e}${i}?${r}`;return t.config.emulator?Pi(t.config,o):`${t.config.apiScheme}://${o}`}function jh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(he(this.auth,"network-request-failed")),Fh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tn(t,e,i){const r={appName:t.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=he(t,e,r);return o.customData._tokenResponse=i,o}function os(t){return t!==void 0&&t.enterprise!==void 0}class Vh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return jh(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $h(t,e){return fe(t,"GET","/v2/recaptchaConfig",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t,e){return fe(t,"POST","/v1/accounts:delete",e)}async function wo(t,e){return fe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wh(t,e=!1){const i=ie(t),r=await i.getIdToken(e),o=Oi(r);b(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:Pt(ai(o.auth_time)),issuedAtTime:Pt(ai(o.iat)),expirationTime:Pt(ai(o.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function ai(t){return Number(t)*1e3}function Oi(t){const[e,i,r]=t.split(".");if(e===void 0||i===void 0||r===void 0)return rn("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ns(i);return o?JSON.parse(o):(rn("Failed to decode base64 JWT payload"),null)}catch(o){return rn("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function as(t){const e=Oi(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(t,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof ce&&zh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pt(this.lastLoginAt),this.creationTime=Pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t){var e;const i=t.auth,r=await t.getIdToken(),o=await st(t,wo(i,{idToken:r}));b(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];t._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Eo(c.providerUserInfo):[],u=Kh(t.providerData,l),g=t.isAnonymous,E=!(t.email&&c.passwordHash)&&!(u!=null&&u.length),A=g?E:!1,S={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:u,metadata:new yi(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(t,S)}async function qh(t){const e=ie(t);await fn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kh(t,e){return[...t.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Eo(t){return t.map(e=>{var{providerId:i}=e,r=Ri(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(t,e){const i=await _o(t,{},async()=>{const r=Lt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=t.config,l=Io(t,o,"/v1/token",`key=${c}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",vo.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Yh(t,e){return fe(t,"POST","/v2/accounts:revokeToken",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):as(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){b(e.length!==0,"internal-error");const i=as(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await Jh(e,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,l=new tt;return r&&(b(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(b(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),c&&(b(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _e{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,c=Ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new yi(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await st(this,this.stsTokenManager.getToken(this.auth,e));return b(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Wh(this,e)}reload(){return qh(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new _e(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await fn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(le(this.auth.app))return Promise.reject(we(this.auth));const e=await this.getIdToken();return await st(this,Hh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,c,l,u,g,E,A;const S=(r=i.displayName)!==null&&r!==void 0?r:void 0,C=(o=i.email)!==null&&o!==void 0?o:void 0,N=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,k=(l=i.photoURL)!==null&&l!==void 0?l:void 0,x=(u=i.tenantId)!==null&&u!==void 0?u:void 0,M=(g=i._redirectEventId)!==null&&g!==void 0?g:void 0,pe=(E=i.createdAt)!==null&&E!==void 0?E:void 0,Q=(A=i.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:j,emailVerified:re,isAnonymous:Ue,providerData:Y,stsTokenManager:_}=i;b(j&&_,e,"internal-error");const d=tt.fromJSON(this.name,_);b(typeof j=="string",e,"internal-error"),Re(S,e.name),Re(C,e.name),b(typeof re=="boolean",e,"internal-error"),b(typeof Ue=="boolean",e,"internal-error"),Re(N,e.name),Re(k,e.name),Re(x,e.name),Re(M,e.name),Re(pe,e.name),Re(Q,e.name);const p=new _e({uid:j,auth:e,email:C,emailVerified:re,displayName:S,isAnonymous:Ue,photoURL:k,phoneNumber:N,tenantId:x,stsTokenManager:d,createdAt:pe,lastLoginAt:Q});return Y&&Array.isArray(Y)&&(p.providerData=Y.map(m=>Object.assign({},m))),M&&(p._redirectEventId=M),p}static async _fromIdTokenResponse(e,i,r=!1){const o=new tt;o.updateFromServerResponse(i);const c=new _e({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await fn(c),c}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];b(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Eo(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),u=new tt;u.updateFromIdToken(r);const g=new _e({uid:o.localId,auth:e,stsTokenManager:u,isAnonymous:l}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new yi(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(g,E),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Map;function Ie(t){Ee(t instanceof Function,"Expected a class definition");let e=cs.get(t);return e?(Ee(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cs.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}To.type="NONE";const ls=To;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e,i){return`firebase:${t}:${e}:${i}`}class nt{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=sn(this.userKey,o.apiKey,c),this.fullPersistenceKey=sn("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_e._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new nt(Ie(ls),e,r);const o=(await Promise.all(i.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||Ie(ls);const l=sn(r,e.config.apiKey,e.name);let u=null;for(const E of i)try{const A=await E._get(l);if(A){const S=_e._fromJSON(e,A);E!==c&&(u=S),c=E;break}}catch{}const g=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new nt(c,e,r):(c=g[0],u&&await c._set(l,u.toJSON()),await Promise.all(i.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new nt(c,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(So(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ao(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ro(e))return"Blackberry";if(ko(e))return"Webos";if(Di(e))return"Safari";if((e.includes("chrome/")||bo(e))&&!e.includes("edge/"))return"Chrome";if(Co(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ao(t=q()){return/firefox\//i.test(t)}function Di(t=q()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bo(t=q()){return/crios\//i.test(t)}function So(t=q()){return/iemobile/i.test(t)}function Co(t=q()){return/android/i.test(t)}function Ro(t=q()){return/blackberry/i.test(t)}function ko(t=q()){return/webos/i.test(t)}function En(t=q()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xh(t=q()){var e;return En(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qh(){return qa()&&document.documentMode===10}function Po(t=q()){return En(t)||Co(t)||ko(t)||Ro(t)||/windows phone/i.test(t)||So(t)}function Zh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t,e=[]){let i;switch(t){case"Browser":i=hs(q());break;case"Worker":i=`${hs(q())}-${t}`;break;default:i=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${at}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=c=>new Promise((l,u)=>{try{const g=e(c);l(g)}catch(g){u(g)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(t,e={}){return fe(t,"GET","/v2/passwordPolicy",Te(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=6;class iu{constructor(e){var i,r,o,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=l.minPasswordLength)!==null&&i!==void 0?i:nu,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,c,l,u;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(i=g.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(r=g.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(c=g.containsUppercaseLetter)!==null&&c!==void 0?c:!0),g.isValid&&(g.isValid=(l=g.containsNumericCharacter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(u=g.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),g}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new us(this),this.idTokenSubscription=new us(this),this.beforeStateQueue=new eu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Ie(i)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await nt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await wo(this,{idToken:e}),r=await _e._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(le(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,u=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!l||l===u)&&(g!=null&&g.user)&&(o=g.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(l){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await fn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(le(this.app))return Promise.reject(we(this));const i=e?ie(e):null;return i&&b(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return le(this.app)?Promise.reject(we(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return le(this.app)?Promise.reject(we(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tu(this),i=new iu(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qe("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Ie(e)||this._popupRedirectResolver;b(i,this,"argument-error"),this.redirectPersistenceManager=await nt.create(this,[Ie(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(u,this,"internal-error"),u.then(()=>{l||c(this.currentUser)}),typeof i=="function"){const g=e.addObserver(i,r,o);return()=>{l=!0,g()}}else{const g=e.addObserver(i);return()=>{l=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&Nh(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Me(t){return ie(t)}class us{constructor(e){this.auth=e,this.observer=null,this.addObserver=Za(i=>this.observer=i)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function su(t){Tn=t}function Do(t){return Tn.loadJS(t)}function ou(){return Tn.recaptchaEnterpriseScript}function au(){return Tn.gapiScript}function cu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lu="recaptcha-enterprise",hu="NO_RECAPTCHA";class uu{constructor(e){this.type=lu,this.auth=Me(e)}async verify(e="verify",i=!1){async function r(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(l,u)=>{$h(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const E=new Vh(g);return c.tenantId==null?c._agentRecaptchaConfig=E:c._tenantRecaptchaConfigs[c.tenantId]=E,l(E.siteKey)}}).catch(g=>{u(g)})})}function o(c,l,u){const g=window.grecaptcha;os(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(E=>{l(E)}).catch(()=>{l(hu)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((c,l)=>{r(this.auth).then(u=>{if(!i&&os(window.grecaptcha))o(u,c,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let g=ou();g.length!==0&&(g+=u),Do(g).then(()=>{o(u,c,l)}).catch(E=>{l(E)})}}).catch(u=>{l(u)})})}}async function ds(t,e,i,r=!1){const o=new uu(t);let c;try{c=await o.verify(i)}catch{c=await o.verify(i,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function pn(t,e,i,r){var o;if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ds(t,e,i,i==="getOobCode");return r(t,c)}else return r(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ds(t,e,i,i==="getOobCode");return r(t,l)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e){const i=Ke(t,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Ot(c,e??{}))return o;ae(o,"already-initialized")}return i.initialize({options:e})}function fu(t,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Ie);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pu(t,e,i){const r=Me(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(i!=null&&i.disableWarnings),c=No(e),{host:l,port:u}=gu(e),g=u===null?"":`:${u}`;r.config.emulator={url:`${c}//${l}${g}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:u,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||mu()}function No(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gu(t){const e=No(t),i=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:fs(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:fs(l)}}}function fs(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mu(){function t(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,i){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}async function yu(t,e){return fe(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(t,e){return Ut(t,"POST","/v1/accounts:signInWithPassword",Te(t,e))}async function _u(t,e){return fe(t,"POST","/v1/accounts:sendOobCode",Te(t,e))}async function Iu(t,e){return _u(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(t,e){return Ut(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}async function Eu(t,e){return Ut(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Ni{constructor(e,i,r,o=null){super("password",r),this._email=e,this._password=i,this._tenantId=o}static _fromEmailAndPassword(e,i){return new Nt(e,i,"password")}static _fromEmailAndCode(e,i,r=null){return new Nt(e,i,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pn(e,i,"signInWithPassword",vu);case"emailLink":return wu(e,{email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const r={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pn(e,r,"signUpPassword",yu);case"emailLink":return Eu(e,{idToken:i,email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t,e){return Ut(t,"POST","/v1/accounts:signInWithIdp",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="http://localhost";class ze extends Ni{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):ae("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,c=Ri(i,["providerId","signInMethod"]);if(!r||!o)return null;const l=new ze(r,o);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const i=this.buildRequest();return it(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,it(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,it(e,i)}buildRequest(){const e={requestUri:Tu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Lt(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bu(t){const e=Ct(Rt(t)).link,i=e?Ct(Rt(e)).deep_link_id:null,r=Ct(Rt(t)).deep_link_id;return(r?Ct(Rt(r)).link:null)||r||i||e||t}class Li{constructor(e){var i,r,o,c,l,u;const g=Ct(Rt(e)),E=(i=g.apiKey)!==null&&i!==void 0?i:null,A=(r=g.oobCode)!==null&&r!==void 0?r:null,S=Au((o=g.mode)!==null&&o!==void 0?o:null);b(E&&A&&S,"argument-error"),this.apiKey=E,this.operation=S,this.code=A,this.continueUrl=(c=g.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(l=g.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(u=g.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const i=bu(e);try{return new Li(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,i){return Nt._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const r=Li.parseLink(i);return b(r,"argument-error"),Nt._fromEmailAndCode(e,r.code,r.tenantId)}}ct.PROVIDER_ID="password";ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Lo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends xt{constructor(){super("facebook.com")}static credential(e){return ze._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch{return null}}}ke.FACEBOOK_SIGN_IN_METHOD="facebook.com";ke.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends xt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return ze._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Pe.credential(i,r)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends xt{constructor(){super("github.com")}static credential(e){return ze._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.GITHUB_SIGN_IN_METHOD="github.com";Oe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends xt{constructor(){super("twitter.com")}static credential(e,i){return ze._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return De.credential(i,r)}catch{return null}}}De.TWITTER_SIGN_IN_METHOD="twitter.com";De.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t,e){return Ut(t,"POST","/v1/accounts:signUp",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const c=await _e._fromIdTokenResponse(e,r,o),l=ps(r);return new Ge({user:c,providerId:l,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=ps(r);return new Ge({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function ps(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ce{constructor(e,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,gn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new gn(e,i,r,o)}}function Mo(t,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?gn._fromErrorAndOperation(t,c,e,r):c})}async function Cu(t,e,i=!1){const r=await st(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return Ge._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(t,e,i=!1){const{auth:r}=t;if(le(r.app))return Promise.reject(we(r));const o="reauthenticate";try{const c=await st(t,Mo(r,o,e,t),i);b(c.idToken,r,"internal-error");const l=Oi(c.idToken);b(l,r,"internal-error");const{sub:u}=l;return b(t.uid===u,r,"user-mismatch"),Ge._forOperation(t,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&ae(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,i=!1){if(le(t.app))return Promise.reject(we(t));const r="signIn",o=await Mo(t,r,e),c=await Ge._fromIdTokenResponse(t,r,o);return i||await t._updateCurrentUser(c.user),c}async function ku(t,e){return Uo(Me(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e,i){var r;b(((r=i.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),b(typeof i.dynamicLinkDomain>"u"||i.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=i.url,e.dynamicLinkDomain=i.dynamicLinkDomain,e.canHandleCodeInApp=i.handleCodeInApp,i.iOS&&(b(i.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=i.iOS.bundleId),i.android&&(b(i.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=i.android.installApp,e.androidMinimumVersionCode=i.android.minimumVersion,e.androidPackageName=i.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){const e=Me(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yf(t,e,i){const r=Me(t),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};i&&Pu(r,o,i),await pn(r,o,"getOobCode",Iu)}async function vf(t,e,i){if(le(t.app))return Promise.reject(we(t));const r=Me(t),l=await pn(r,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Su).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&xo(t),g}),u=await Ge._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(u.user),u}function _f(t,e,i){return le(t.app)?Promise.reject(we(t)):ku(ie(t),ct.credential(e,i)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xo(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t,e){return fe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(t,{displayName:e,photoURL:i}){if(e===void 0&&i===void 0)return;const r=ie(t),c={idToken:await r.getIdToken(),displayName:e,photoUrl:i,returnSecureToken:!0},l=await st(r,Ou(r.auth,c));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const u=r.providerData.find(({providerId:g})=>g==="password");u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function Du(t,e,i,r){return ie(t).onIdTokenChanged(e,i,r)}function Nu(t,e,i){return ie(t).beforeAuthStateChanged(e,i)}function wf(t,e,i,r){return ie(t).onAuthStateChanged(e,i,r)}function Ef(t){return ie(t).signOut()}const mn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(mn,"1"),this.storage.removeItem(mn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(){const t=q();return Di(t)||En(t)}const Mu=1e3,Uu=10;class jo extends Fo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lu()&&Zh(),this.fallbackToPolling=Po(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((l,u,g)=>{this.notifyListeners(l,g)});return}const r=e.key;if(i?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!i)return}const o=()=>{const l=this.storage.getItem(r);!i&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);Qh()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Uu):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},Mu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}jo.type="LOCAL";const xu=jo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Fo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}Bo.type="SESSION";const Vo=Bo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new An(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:c}=i.data,l=this.handlersMap[o];if(!(l!=null&&l.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const u=Array.from(l).map(async E=>E(i.origin,c)),g=await Fu(u);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:g})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}An.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return t+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,l;return new Promise((u,g)=>{const E=Mi("",20);o.port1.start();const A=setTimeout(()=>{g(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===E)switch(C.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),u(C.data.response);break;default:clearTimeout(A),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:i},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return window}function Bu(t){ue().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function Vu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $u(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hu(){return $o()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="firebaseLocalStorageDb",Wu=1,yn="firebaseLocalStorage",Wo="fbase_key";class Ft{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function bn(t,e){return t.transaction([yn],e?"readwrite":"readonly").objectStore(yn)}function zu(){const t=indexedDB.deleteDatabase(Ho);return new Ft(t).toPromise()}function vi(){const t=indexedDB.open(Ho,Wu);return new Promise((e,i)=>{t.addEventListener("error",()=>{i(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yn,{keyPath:Wo})}catch(o){i(o)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yn)?e(r):(r.close(),await zu(),e(await vi()))})})}async function gs(t,e,i){const r=bn(t,!0).put({[Wo]:e,value:i});return new Ft(r).toPromise()}async function Gu(t,e){const i=bn(t,!1).get(e),r=await new Ft(i).toPromise();return r===void 0?null:r.value}function ms(t,e){const i=bn(t,!0).delete(e);return new Ft(i).toPromise()}const qu=800,Ku=3;class zo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vi(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Ku)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $o()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=An._getInstance(Hu()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await Vu(),!this.activeServiceWorker)return;this.sender=new ju(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$u()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vi();return await gs(e,mn,"1"),await ms(e,mn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>gs(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>Gu(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>ms(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=bn(o,!1).getAll();return new Ft(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zo.type="LOCAL";const Ju=zo;new Mt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t,e){return e?Ie(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Ni{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return it(e,this._buildIdpRequest())}_linkToIdToken(e,i){return it(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return it(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function Xu(t){return Uo(t.auth,new Ui(t),t.bypassAuthState)}function Qu(t){const{auth:e,user:i}=t;return b(i,e,"internal-error"),Ru(i,new Ui(t),t.bypassAuthState)}async function Zu(t){const{auth:e,user:i}=t;return b(i,e,"internal-error"),Cu(i,new Ui(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,i,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:l,type:u}=e;if(l){this.reject(l);return}const g={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(g))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xu;case"linkViaPopup":case"linkViaRedirect":return Zu;case"reauthViaPopup":case"reauthViaRedirect":return Qu;default:ae(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Mt(2e3,1e4);class et extends Go{constructor(e,i,r,o,c){super(e,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,et.currentPopupAction&&et.currentPopupAction.cancel(),et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=Mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,et.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ed.get())};e()}}et.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="pendingRedirect",on=new Map;class nd extends Go{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=on.get(this.auth._key());if(!e){try{const r=await id(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}on.set(this.auth._key(),e)}return this.bypassAuthState||on.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function id(t,e){const i=od(e),r=sd(t);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function rd(t,e){on.set(t._key(),e)}function sd(t){return Ie(t._redirectPersistence)}function od(t){return sn(td,t.config.apiKey,t.name)}async function ad(t,e,i=!1){if(le(t.app))return Promise.reject(we(t));const r=Me(t),o=Yu(r,e),l=await new nd(r,o,i).execute();return l&&!i&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=10*60*1e3;class ld{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hd(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!qo(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(he(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cd&&this.cachedEventUids.clear(),this.cachedEventUids.has(ys(e))}saveEventToCache(e){this.cachedEventUids.add(ys(e)),this.lastProcessedEventTime=Date.now()}}function ys(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qo({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qo(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ud(t,e={}){return fe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fd=/^https?/;async function pd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ud(t);for(const i of e)try{if(gd(i))return}catch{}ae(t,"unauthorized-domain")}function gd(t){const e=mi(),{protocol:i,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?i==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&l.hostname===r}if(!fd.test(i))return!1;if(dd.test(t))return r===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=new Mt(3e4,6e4);function vs(){const t=ue().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let i=0;i<t.CP.length;i++)t.CP[i]=null}}function yd(t){return new Promise((e,i)=>{var r,o,c;function l(){vs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vs(),i(he(t,"network-request-failed"))},timeout:md.get()})}if(!((o=(r=ue().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=ue().gapi)===null||c===void 0)&&c.load)l();else{const u=cu("iframefcb");return ue()[u]=()=>{gapi.load?l():i(he(t,"network-request-failed"))},Do(`${au()}?onload=${u}`).catch(g=>i(g))}}).catch(e=>{throw an=null,e})}let an=null;function vd(t){return an=an||yd(t),an}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new Mt(5e3,15e3),Id="__/auth/iframe",wd="emulator/auth/iframe",Ed={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Td=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ad(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?Pi(e,wd):`https://${t.config.authDomain}/${Id}`,r={apiKey:e.apiKey,appName:t.name,v:at},o=Td.get(t.config.apiHost);o&&(r.eid=o);const c=t._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${Lt(r).slice(1)}`}async function bd(t){const e=await vd(t),i=ue().gapi;return b(i,t,"internal-error"),e.open({where:document.body,url:Ad(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ed,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const l=he(t,"network-request-failed"),u=ue().setTimeout(()=>{c(l)},_d.get());function g(){ue().clearTimeout(u),o(r)}r.ping(g).then(g,()=>{c(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cd=500,Rd=600,kd="_blank",Pd="http://localhost";class _s{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Od(t,e,i,r=Cd,o=Rd){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const g=Object.assign(Object.assign({},Sd),{width:r.toString(),height:o.toString(),top:c,left:l}),E=q().toLowerCase();i&&(u=bo(E)?kd:i),Ao(E)&&(e=e||Pd,g.scrollbars="yes");const A=Object.entries(g).reduce((C,[N,k])=>`${C}${N}=${k},`,"");if(Xh(E)&&u!=="_self")return Dd(e||"",u),new _s(null);const S=window.open(e||"",u,A);b(S,t,"popup-blocked");try{S.focus()}catch{}return new _s(S)}function Dd(t,e){const i=document.createElement("a");i.href=t,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="__/auth/handler",Ld="emulator/auth/handler",Md=encodeURIComponent("fac");async function Is(t,e,i,r,o,c){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:r,v:at,eventId:o};if(e instanceof Lo){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",Qa(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,S]of Object.entries(c||{}))l[A]=S}if(e instanceof xt){const A=e.getScopes().filter(S=>S!=="");A.length>0&&(l.scopes=A.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const A of Object.keys(u))u[A]===void 0&&delete u[A];const g=await t._getAppCheckToken(),E=g?`#${Md}=${encodeURIComponent(g)}`:"";return`${Ud(t)}?${Lt(u).slice(1)}${E}`}function Ud({config:t}){return t.emulator?Pi(t,Ld):`https://${t.authDomain}/${Nd}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="webStorageSupport";class xd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vo,this._completeRedirectFn=ad,this._overrideRedirectResult=rd}async _openPopup(e,i,r,o){var c;Ee((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Is(e,i,r,mi(),o);return Od(e,l,Mi())}async _openRedirect(e,i,r,o){await this._originValidation(e);const c=await Is(e,i,r,mi(),o);return Bu(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Ee(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await bd(e),r=new ld(e);return i.register("authEvent",o=>(b(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(ci,{type:ci},o=>{var c;const l=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[ci];l!==void 0&&i(!!l),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=pd(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return Po()||Di()||En()}}const Fd=xd;var ws="@firebase/auth",Es="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vd(t){de(new oe("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;b(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oo(t)},E=new ru(r,o,c,g);return fu(E,i),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),de(new oe("auth-internal",e=>{const i=Me(e.getProvider("auth").getImmediate());return(r=>new jd(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),ne(ws,Es,Bd(t)),ne(ws,Es,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=5*60,Hd=Us("authIdTokenMaxAge")||$d;let Ts=null;const Wd=t=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>Hd)return;const o=i==null?void 0:i.token;Ts!==o&&(Ts=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zd(t=Ei()){const e=Ke(t,"auth");if(e.isInitialized())return e.getImmediate();const i=du(t,{popupRedirectResolver:Fd,persistence:[Ju,xu,Vo]}),r=Us("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=Wd(c.toString());Nu(i,l,()=>l(i.currentUser)),Du(i,u=>l(u))}}const o=Ls("auth");return o&&pu(i,`http://${o}`),i}function Gd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}su({loadJS(t){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=o=>{const c=he("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",Gd().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vd("Browser");var As=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ko;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,d){function p(){}p.prototype=d.prototype,_.D=d.prototype,_.prototype=new p,_.prototype.constructor=_,_.C=function(m,y,I){for(var f=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)f[ge-2]=arguments[ge];return d.prototype[y].apply(m,f)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(_,d,p){p||(p=0);var m=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)m[y]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(y=0;16>y;++y)m[y]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=_.g[0],p=_.g[1],y=_.g[2];var I=_.g[3],f=d+(I^p&(y^I))+m[0]+3614090360&4294967295;d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[1]+3905402710&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[2]+606105819&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[3]+3250441966&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+m[4]+4118548399&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[5]+1200080426&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[6]+2821735955&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[7]+4249261313&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+m[8]+1770035416&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[9]+2336552879&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[10]+4294925233&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[11]+2304563134&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+m[12]+1804603682&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[13]+4254626195&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[14]+2792965006&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[15]+1236535329&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(y^I&(p^y))+m[1]+4129170786&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[6]+3225465664&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[11]+643717713&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[0]+3921069994&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+m[5]+3593408605&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[10]+38016083&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[15]+3634488961&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[4]+3889429448&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+m[9]+568446438&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[14]+3275163606&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[3]+4107603335&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[8]+1163531501&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+m[13]+2850285829&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[2]+4243563512&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[7]+1735328473&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[12]+2368359562&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(p^y^I)+m[5]+4294588738&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[8]+2272392833&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[11]+1839030562&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[14]+4259657740&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+m[1]+2763975236&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[4]+1272893353&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[7]+4139469664&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[10]+3200236656&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+m[13]+681279174&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[0]+3936430074&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[3]+3572445317&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[6]+76029189&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+m[9]+3654602809&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[12]+3873151461&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[15]+530742520&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[2]+3299628645&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(y^(p|~I))+m[0]+4096336452&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[7]+1126891415&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[14]+2878612391&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[5]+4237533241&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+m[12]+1700485571&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[3]+2399980690&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[10]+4293915773&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[1]+2240044497&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+m[8]+1873313359&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[15]+4264355552&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[6]+2734768916&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[13]+1309151649&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+m[4]+4149444226&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[11]+3174756917&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[2]+718787259&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[9]+3951481745&4294967295,_.g[0]=_.g[0]+d&4294967295,_.g[1]=_.g[1]+(y+(f<<21&4294967295|f>>>11))&4294967295,_.g[2]=_.g[2]+y&4294967295,_.g[3]=_.g[3]+I&4294967295}r.prototype.u=function(_,d){d===void 0&&(d=_.length);for(var p=d-this.blockSize,m=this.B,y=this.h,I=0;I<d;){if(y==0)for(;I<=p;)o(this,_,I),I+=this.blockSize;if(typeof _=="string"){for(;I<d;)if(m[y++]=_.charCodeAt(I++),y==this.blockSize){o(this,m),y=0;break}}else for(;I<d;)if(m[y++]=_[I++],y==this.blockSize){o(this,m),y=0;break}}this.h=y,this.o+=d},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var d=1;d<_.length-8;++d)_[d]=0;var p=8*this.o;for(d=_.length-8;d<_.length;++d)_[d]=p&255,p/=256;for(this.u(_),_=Array(16),d=p=0;4>d;++d)for(var m=0;32>m;m+=8)_[p++]=this.g[d]>>>m&255;return _};function c(_,d){var p=u;return Object.prototype.hasOwnProperty.call(p,_)?p[_]:p[_]=d(_)}function l(_,d){this.h=d;for(var p=[],m=!0,y=_.length-1;0<=y;y--){var I=_[y]|0;m&&I==d||(p[y]=I,m=!1)}this.g=p}var u={};function g(_){return-128<=_&&128>_?c(_,function(d){return new l([d|0],0>d?-1:0)}):new l([_|0],0>_?-1:0)}function E(_){if(isNaN(_)||!isFinite(_))return S;if(0>_)return M(E(-_));for(var d=[],p=1,m=0;_>=p;m++)d[m]=_/p|0,p*=4294967296;return new l(d,0)}function A(_,d){if(_.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(_.charAt(0)=="-")return M(A(_.substring(1),d));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=E(Math.pow(d,8)),m=S,y=0;y<_.length;y+=8){var I=Math.min(8,_.length-y),f=parseInt(_.substring(y,y+I),d);8>I?(I=E(Math.pow(d,I)),m=m.j(I).add(E(f))):(m=m.j(p),m=m.add(E(f)))}return m}var S=g(0),C=g(1),N=g(16777216);t=l.prototype,t.m=function(){if(x(this))return-M(this).m();for(var _=0,d=1,p=0;p<this.g.length;p++){var m=this.i(p);_+=(0<=m?m:4294967296+m)*d,d*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(k(this))return"0";if(x(this))return"-"+M(this).toString(_);for(var d=E(Math.pow(_,6)),p=this,m="";;){var y=re(p,d).g;p=pe(p,y.j(d));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(_);if(p=y,k(p))return I+m;for(;6>I.length;)I="0"+I;m=I+m}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function k(_){if(_.h!=0)return!1;for(var d=0;d<_.g.length;d++)if(_.g[d]!=0)return!1;return!0}function x(_){return _.h==-1}t.l=function(_){return _=pe(this,_),x(_)?-1:k(_)?0:1};function M(_){for(var d=_.g.length,p=[],m=0;m<d;m++)p[m]=~_.g[m];return new l(p,~_.h).add(C)}t.abs=function(){return x(this)?M(this):this},t.add=function(_){for(var d=Math.max(this.g.length,_.g.length),p=[],m=0,y=0;y<=d;y++){var I=m+(this.i(y)&65535)+(_.i(y)&65535),f=(I>>>16)+(this.i(y)>>>16)+(_.i(y)>>>16);m=f>>>16,I&=65535,f&=65535,p[y]=f<<16|I}return new l(p,p[p.length-1]&-2147483648?-1:0)};function pe(_,d){return _.add(M(d))}t.j=function(_){if(k(this)||k(_))return S;if(x(this))return x(_)?M(this).j(M(_)):M(M(this).j(_));if(x(_))return M(this.j(M(_)));if(0>this.l(N)&&0>_.l(N))return E(this.m()*_.m());for(var d=this.g.length+_.g.length,p=[],m=0;m<2*d;m++)p[m]=0;for(m=0;m<this.g.length;m++)for(var y=0;y<_.g.length;y++){var I=this.i(m)>>>16,f=this.i(m)&65535,ge=_.i(y)>>>16,lt=_.i(y)&65535;p[2*m+2*y]+=f*lt,Q(p,2*m+2*y),p[2*m+2*y+1]+=I*lt,Q(p,2*m+2*y+1),p[2*m+2*y+1]+=f*ge,Q(p,2*m+2*y+1),p[2*m+2*y+2]+=I*ge,Q(p,2*m+2*y+2)}for(m=0;m<d;m++)p[m]=p[2*m+1]<<16|p[2*m];for(m=d;m<2*d;m++)p[m]=0;return new l(p,0)};function Q(_,d){for(;(_[d]&65535)!=_[d];)_[d+1]+=_[d]>>>16,_[d]&=65535,d++}function j(_,d){this.g=_,this.h=d}function re(_,d){if(k(d))throw Error("division by zero");if(k(_))return new j(S,S);if(x(_))return d=re(M(_),d),new j(M(d.g),M(d.h));if(x(d))return d=re(_,M(d)),new j(M(d.g),d.h);if(30<_.g.length){if(x(_)||x(d))throw Error("slowDivide_ only works with positive integers.");for(var p=C,m=d;0>=m.l(_);)p=Ue(p),m=Ue(m);var y=Y(p,1),I=Y(m,1);for(m=Y(m,2),p=Y(p,2);!k(m);){var f=I.add(m);0>=f.l(_)&&(y=y.add(p),I=f),m=Y(m,1),p=Y(p,1)}return d=pe(_,y.j(d)),new j(y,d)}for(y=S;0<=_.l(d);){for(p=Math.max(1,Math.floor(_.m()/d.m())),m=Math.ceil(Math.log(p)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),I=E(p),f=I.j(d);x(f)||0<f.l(_);)p-=m,I=E(p),f=I.j(d);k(I)&&(I=C),y=y.add(I),_=pe(_,f)}return new j(y,_)}t.A=function(_){return re(this,_).h},t.and=function(_){for(var d=Math.max(this.g.length,_.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)&_.i(m);return new l(p,this.h&_.h)},t.or=function(_){for(var d=Math.max(this.g.length,_.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)|_.i(m);return new l(p,this.h|_.h)},t.xor=function(_){for(var d=Math.max(this.g.length,_.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)^_.i(m);return new l(p,this.h^_.h)};function Ue(_){for(var d=_.g.length+1,p=[],m=0;m<d;m++)p[m]=_.i(m)<<1|_.i(m-1)>>>31;return new l(p,_.h)}function Y(_,d){var p=d>>5;d%=32;for(var m=_.g.length-p,y=[],I=0;I<m;I++)y[I]=0<d?_.i(I+p)>>>d|_.i(I+p+1)<<32-d:_.i(I+p);return new l(y,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=A,Ko=l}).apply(typeof As<"u"?As:typeof self<"u"?self:typeof window<"u"?window:{});var nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,s,a){return n==Array.prototype||n==Object.prototype||(n[s]=a.value),n};function i(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof nn=="object"&&nn];for(var s=0;s<n.length;++s){var a=n[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=i(this);function o(n,s){if(s)e:{var a=r;n=n.split(".");for(var h=0;h<n.length-1;h++){var v=n[h];if(!(v in a))break e;a=a[v]}n=n[n.length-1],h=a[n],s=s(h),s!=h&&s!=null&&e(a,n,{configurable:!0,writable:!0,value:s})}}function c(n,s){n instanceof String&&(n+="");var a=0,h=!1,v={next:function(){if(!h&&a<n.length){var w=a++;return{value:s(w,n[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}o("Array.prototype.values",function(n){return n||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function g(n){var s=typeof n;return s=s!="object"?s:n?Array.isArray(n)?"array":s:"null",s=="array"||s=="object"&&typeof n.length=="number"}function E(n){var s=typeof n;return s=="object"&&n!=null||s=="function"}function A(n,s,a){return n.call.apply(n.bind,arguments)}function S(n,s,a){if(!n)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),n.apply(s,v)}}return function(){return n.apply(s,arguments)}}function C(n,s,a){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:S,C.apply(null,arguments)}function N(n,s){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function k(n,s){function a(){}a.prototype=s.prototype,n.aa=s.prototype,n.prototype=new a,n.prototype.constructor=n,n.Qb=function(h,v,w){for(var T=Array(arguments.length-2),D=2;D<arguments.length;D++)T[D-2]=arguments[D];return s.prototype[v].apply(h,T)}}function x(n){const s=n.length;if(0<s){const a=Array(s);for(let h=0;h<s;h++)a[h]=n[h];return a}return[]}function M(n,s){for(let a=1;a<arguments.length;a++){const h=arguments[a];if(g(h)){const v=n.length||0,w=h.length||0;n.length=v+w;for(let T=0;T<w;T++)n[v+T]=h[T]}else n.push(h)}}class pe{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function Q(n){return/^[\s\xa0]*$/.test(n)}function j(){var n=u.navigator;return n&&(n=n.userAgent)?n:""}function re(n){return re[" "](n),n}re[" "]=function(){};var Ue=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function Y(n,s,a){for(const h in n)s.call(a,n[h],h,n)}function _(n,s){for(const a in n)s.call(void 0,n[a],a,n)}function d(n){const s={};for(const a in n)s[a]=n[a];return s}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(n,s){let a,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(a in h)n[a]=h[a];for(let w=0;w<p.length;w++)a=p[w],Object.prototype.hasOwnProperty.call(h,a)&&(n[a]=h[a])}}function y(n){var s=1;n=n.split(":");const a=[];for(;0<s&&n.length;)a.push(n.shift()),s--;return n.length&&a.push(n.join(":")),a}function I(n){u.setTimeout(()=>{throw n},0)}function f(){var n=Sn;let s=null;return n.g&&(s=n.g,n.g=n.g.next,n.g||(n.h=null),s.next=null),s}class ge{constructor(){this.h=this.g=null}add(s,a){const h=lt.get();h.set(s,a),this.h?this.h.next=h:this.g=h,this.h=h}}var lt=new pe(()=>new Zo,n=>n.reset());class Zo{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,ut=!1,Sn=new ge,$i=()=>{const n=u.Promise.resolve(void 0);ht=()=>{n.then(ea)}};var ea=()=>{for(var n;n=f();){try{n.h.call(n.g)}catch(a){I(a)}var s=lt;s.j(n),100>s.h&&(s.h++,n.next=s.g,s.g=n)}ut=!1};function Ae(){this.s=this.s,this.C=this.C}Ae.prototype.s=!1,Ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(n,s){this.type=n,this.g=this.target=s,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var ta=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var n=!1,s=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};u.addEventListener("test",a,s),u.removeEventListener("test",a,s)}catch{}return n}();function dt(n,s){if(B.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var a=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=s,s=n.relatedTarget){if(Ue){e:{try{re(s.nodeName);var v=!0;break e}catch{}v=!1}v||(s=null)}}else a=="mouseover"?s=n.fromElement:a=="mouseout"&&(s=n.toElement);this.relatedTarget=s,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:na[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&dt.aa.h.call(this)}}k(dt,B);var na={2:"touch",3:"pen",4:"mouse"};dt.prototype.h=function(){dt.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ft="closure_listenable_"+(1e6*Math.random()|0),ia=0;function ra(n,s,a,h,v){this.listener=n,this.proxy=null,this.src=s,this.type=a,this.capture=!!h,this.ha=v,this.key=++ia,this.da=this.fa=!1}function Bt(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Vt(n){this.src=n,this.g={},this.h=0}Vt.prototype.add=function(n,s,a,h,v){var w=n.toString();n=this.g[w],n||(n=this.g[w]=[],this.h++);var T=Rn(n,s,h,v);return-1<T?(s=n[T],a||(s.fa=!1)):(s=new ra(s,this.src,w,!!h,v),s.fa=a,n.push(s)),s};function Cn(n,s){var a=s.type;if(a in n.g){var h=n.g[a],v=Array.prototype.indexOf.call(h,s,void 0),w;(w=0<=v)&&Array.prototype.splice.call(h,v,1),w&&(Bt(s),n.g[a].length==0&&(delete n.g[a],n.h--))}}function Rn(n,s,a,h){for(var v=0;v<n.length;++v){var w=n[v];if(!w.da&&w.listener==s&&w.capture==!!a&&w.ha==h)return v}return-1}var kn="closure_lm_"+(1e6*Math.random()|0),Pn={};function Hi(n,s,a,h,v){if(h&&h.once)return zi(n,s,a,h,v);if(Array.isArray(s)){for(var w=0;w<s.length;w++)Hi(n,s[w],a,h,v);return null}return a=Ln(a),n&&n[ft]?n.K(s,a,E(h)?!!h.capture:!!h,v):Wi(n,s,a,!1,h,v)}function Wi(n,s,a,h,v,w){if(!s)throw Error("Invalid event type");var T=E(v)?!!v.capture:!!v,D=Dn(n);if(D||(n[kn]=D=new Vt(n)),a=D.add(s,a,h,T,w),a.proxy)return a;if(h=sa(),a.proxy=h,h.src=n,h.listener=a,n.addEventListener)ta||(v=T),v===void 0&&(v=!1),n.addEventListener(s.toString(),h,v);else if(n.attachEvent)n.attachEvent(qi(s.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function sa(){function n(a){return s.call(n.src,n.listener,a)}const s=oa;return n}function zi(n,s,a,h,v){if(Array.isArray(s)){for(var w=0;w<s.length;w++)zi(n,s[w],a,h,v);return null}return a=Ln(a),n&&n[ft]?n.L(s,a,E(h)?!!h.capture:!!h,v):Wi(n,s,a,!0,h,v)}function Gi(n,s,a,h,v){if(Array.isArray(s))for(var w=0;w<s.length;w++)Gi(n,s[w],a,h,v);else h=E(h)?!!h.capture:!!h,a=Ln(a),n&&n[ft]?(n=n.i,s=String(s).toString(),s in n.g&&(w=n.g[s],a=Rn(w,a,h,v),-1<a&&(Bt(w[a]),Array.prototype.splice.call(w,a,1),w.length==0&&(delete n.g[s],n.h--)))):n&&(n=Dn(n))&&(s=n.g[s.toString()],n=-1,s&&(n=Rn(s,a,h,v)),(a=-1<n?s[n]:null)&&On(a))}function On(n){if(typeof n!="number"&&n&&!n.da){var s=n.src;if(s&&s[ft])Cn(s.i,n);else{var a=n.type,h=n.proxy;s.removeEventListener?s.removeEventListener(a,h,n.capture):s.detachEvent?s.detachEvent(qi(a),h):s.addListener&&s.removeListener&&s.removeListener(h),(a=Dn(s))?(Cn(a,n),a.h==0&&(a.src=null,s[kn]=null)):Bt(n)}}}function qi(n){return n in Pn?Pn[n]:Pn[n]="on"+n}function oa(n,s){if(n.da)n=!0;else{s=new dt(s,this);var a=n.listener,h=n.ha||n.src;n.fa&&On(n),n=a.call(h,s)}return n}function Dn(n){return n=n[kn],n instanceof Vt?n:null}var Nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ln(n){return typeof n=="function"?n:(n[Nn]||(n[Nn]=function(s){return n.handleEvent(s)}),n[Nn])}function V(){Ae.call(this),this.i=new Vt(this),this.M=this,this.F=null}k(V,Ae),V.prototype[ft]=!0,V.prototype.removeEventListener=function(n,s,a,h){Gi(this,n,s,a,h)};function K(n,s){var a,h=n.F;if(h)for(a=[];h;h=h.F)a.push(h);if(n=n.M,h=s.type||s,typeof s=="string")s=new B(s,n);else if(s instanceof B)s.target=s.target||n;else{var v=s;s=new B(h,n),m(s,v)}if(v=!0,a)for(var w=a.length-1;0<=w;w--){var T=s.g=a[w];v=$t(T,h,!0,s)&&v}if(T=s.g=n,v=$t(T,h,!0,s)&&v,v=$t(T,h,!1,s)&&v,a)for(w=0;w<a.length;w++)T=s.g=a[w],v=$t(T,h,!1,s)&&v}V.prototype.N=function(){if(V.aa.N.call(this),this.i){var n=this.i,s;for(s in n.g){for(var a=n.g[s],h=0;h<a.length;h++)Bt(a[h]);delete n.g[s],n.h--}}this.F=null},V.prototype.K=function(n,s,a,h){return this.i.add(String(n),s,!1,a,h)},V.prototype.L=function(n,s,a,h){return this.i.add(String(n),s,!0,a,h)};function $t(n,s,a,h){if(s=n.i.g[String(s)],!s)return!0;s=s.concat();for(var v=!0,w=0;w<s.length;++w){var T=s[w];if(T&&!T.da&&T.capture==a){var D=T.listener,F=T.ha||T.src;T.fa&&Cn(n.i,T),v=D.call(F,h)!==!1&&v}}return v&&!h.defaultPrevented}function Ki(n,s,a){if(typeof n=="function")a&&(n=C(n,a));else if(n&&typeof n.handleEvent=="function")n=C(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:u.setTimeout(n,s||0)}function Ji(n){n.g=Ki(()=>{n.g=null,n.i&&(n.i=!1,Ji(n))},n.l);const s=n.h;n.h=null,n.m.apply(null,s)}class aa extends Ae{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ji(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(n){Ae.call(this),this.h=n,this.g={}}k(pt,Ae);var Yi=[];function Xi(n){Y(n.g,function(s,a){this.g.hasOwnProperty(a)&&On(s)},n),n.g={}}pt.prototype.N=function(){pt.aa.N.call(this),Xi(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mn=u.JSON.stringify,ca=u.JSON.parse,la=class{stringify(n){return u.JSON.stringify(n,void 0)}parse(n){return u.JSON.parse(n,void 0)}};function Un(){}Un.prototype.h=null;function Qi(n){return n.h||(n.h=n.i())}function ha(){}var gt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xn(){B.call(this,"d")}k(xn,B);function Fn(){B.call(this,"c")}k(Fn,B);var Je={},Zi=null;function jn(){return Zi=Zi||new V}Je.La="serverreachability";function er(n){B.call(this,Je.La,n)}k(er,B);function mt(n){const s=jn();K(s,new er(s))}Je.STAT_EVENT="statevent";function tr(n,s){B.call(this,Je.STAT_EVENT,n),this.stat=s}k(tr,B);function J(n){const s=jn();K(s,new tr(s,n))}Je.Ma="timingevent";function nr(n,s){B.call(this,Je.Ma,n),this.size=s}k(nr,B);function yt(n,s){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){n()},s)}function vt(){this.g=!0}vt.prototype.xa=function(){this.g=!1};function ua(n,s,a,h,v,w){n.info(function(){if(n.g)if(w)for(var T="",D=w.split("&"),F=0;F<D.length;F++){var P=D[F].split("=");if(1<P.length){var $=P[0];P=P[1];var H=$.split("_");T=2<=H.length&&H[1]=="type"?T+($+"="+P+"&"):T+($+"=redacted&")}}else T=null;else T=w;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+s+`
`+a+`
`+T})}function da(n,s,a,h,v,w,T){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+s+`
`+a+`
`+w+" "+T})}function Ye(n,s,a,h){n.info(function(){return"XMLHTTP TEXT ("+s+"): "+pa(n,a)+(h?" "+h:"")})}function fa(n,s){n.info(function(){return"TIMEOUT: "+s})}vt.prototype.info=function(){};function pa(n,s){if(!n.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(n=0;n<a.length;n++)if(Array.isArray(a[n])){var h=a[n];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var T=1;T<v.length;T++)v[T]=""}}}}return Mn(a)}catch{return s}}var Bn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ga={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vn;function Ht(){}k(Ht,Un),Ht.prototype.g=function(){return new XMLHttpRequest},Ht.prototype.i=function(){return{}},Vn=new Ht;function be(n,s,a,h){this.j=n,this.i=s,this.l=a,this.R=h||1,this.U=new pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ir}function ir(){this.i=null,this.g="",this.h=!1}var rr={},$n={};function Hn(n,s,a){n.L=1,n.v=qt(me(s)),n.m=a,n.P=!0,sr(n,null)}function sr(n,s){n.F=Date.now(),Wt(n),n.A=me(n.v);var a=n.A,h=n.R;Array.isArray(h)||(h=[String(h)]),_r(a.i,"t",h),n.C=0,a=n.j.J,n.h=new ir,n.g=xr(n.j,a?s:null,!n.m),0<n.O&&(n.M=new aa(C(n.Y,n,n.g),n.O)),s=n.U,a=n.g,h=n.ca;var v="readystatechange";Array.isArray(v)||(v&&(Yi[0]=v.toString()),v=Yi);for(var w=0;w<v.length;w++){var T=Hi(a,v[w],h||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=n.H?d(n.H):{},n.m?(n.u||(n.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,s)):(n.u="GET",n.g.ea(n.A,n.u,null,s)),mt(),ua(n.i,n.u,n.A,n.l,n.R,n.m)}be.prototype.ca=function(n){n=n.target;const s=this.M;s&&ye(n)==3?s.j():this.Y(n)},be.prototype.Y=function(n){try{if(n==this.g)e:{const H=ye(this.g);var s=this.g.Ba();const Ze=this.g.Z();if(!(3>H)&&(H!=3||this.g&&(this.h.h||this.g.oa()||Sr(this.g)))){this.J||H!=4||s==7||(s==8||0>=Ze?mt(3):mt(2)),Wn(this);var a=this.g.Z();this.X=a;t:if(or(this)){var h=Sr(this.g);n="";var v=h.length,w=ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xe(this),_t(this);var T="";break t}this.h.i=new u.TextDecoder}for(s=0;s<v;s++)this.h.h=!0,n+=this.h.i.decode(h[s],{stream:!(w&&s==v-1)});h.length=0,this.h.g+=n,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,da(this.i,this.u,this.A,this.l,this.R,H,a),this.o){if(this.T&&!this.K){t:{if(this.g){var D,F=this.g;if((D=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(D)){var P=D;break t}}P=null}if(a=P)Ye(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zn(this,a);else{this.o=!1,this.s=3,J(12),xe(this),_t(this);break e}}if(this.P){a=!0;let se;for(;!this.J&&this.C<T.length;)if(se=ma(this,T),se==$n){H==4&&(this.s=4,J(14),a=!1),Ye(this.i,this.l,null,"[Incomplete Response]");break}else if(se==rr){this.s=4,J(15),Ye(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else Ye(this.i,this.l,se,null),zn(this,se);if(or(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||T.length!=0||this.h.h||(this.s=1,J(16),a=!1),this.o=this.o&&a,!a)Ye(this.i,this.l,T,"[Invalid Chunked Response]"),xe(this),_t(this);else if(0<T.length&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.ba&&!$.M&&($.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Xn($),$.M=!0,J(11))}}else Ye(this.i,this.l,T,null),zn(this,T);H==4&&xe(this),this.o&&!this.J&&(H==4?Nr(this.j,this):(this.o=!1,Wt(this)))}else Na(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,J(12)):(this.s=0,J(13)),xe(this),_t(this)}}}catch{}finally{}};function or(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function ma(n,s){var a=n.C,h=s.indexOf(`
`,a);return h==-1?$n:(a=Number(s.substring(a,h)),isNaN(a)?rr:(h+=1,h+a>s.length?$n:(s=s.slice(h,h+a),n.C=h+a,s)))}be.prototype.cancel=function(){this.J=!0,xe(this)};function Wt(n){n.S=Date.now()+n.I,ar(n,n.I)}function ar(n,s){if(n.B!=null)throw Error("WatchDog timer not null");n.B=yt(C(n.ba,n),s)}function Wn(n){n.B&&(u.clearTimeout(n.B),n.B=null)}be.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(fa(this.i,this.A),this.L!=2&&(mt(),J(17)),xe(this),this.s=2,_t(this)):ar(this,this.S-n)};function _t(n){n.j.G==0||n.J||Nr(n.j,n)}function xe(n){Wn(n);var s=n.M;s&&typeof s.ma=="function"&&s.ma(),n.M=null,Xi(n.U),n.g&&(s=n.g,n.g=null,s.abort(),s.ma())}function zn(n,s){try{var a=n.j;if(a.G!=0&&(a.g==n||Gn(a.h,n))){if(!n.K&&Gn(a.h,n)&&a.G==3){try{var h=a.Da.g.parse(s)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<n.F)Zt(a),Xt(a);else break e;Yn(a),J(18)}}else a.za=v[1],0<a.za-a.T&&37500>v[2]&&a.F&&a.v==0&&!a.C&&(a.C=yt(C(a.Za,a),6e3));if(1>=hr(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else je(a,11)}else if((n.K||a.g==n)&&Zt(a),!Q(s))for(v=a.Da.g.parse(s),s=0;s<v.length;s++){let P=v[s];if(a.T=P[0],P=P[1],a.G==2)if(P[0]=="c"){a.K=P[1],a.ia=P[2];const $=P[3];$!=null&&(a.la=$,a.j.info("VER="+a.la));const H=P[4];H!=null&&(a.Aa=H,a.j.info("SVER="+a.Aa));const Ze=P[5];Ze!=null&&typeof Ze=="number"&&0<Ze&&(h=1.5*Ze,a.L=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const se=n.g;if(se){const en=se.g?se.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(en){var w=h.h;w.g||en.indexOf("spdy")==-1&&en.indexOf("quic")==-1&&en.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(qn(w,w.h),w.h=null))}if(h.D){const Qn=se.g?se.g.getResponseHeader("X-HTTP-Session-Id"):null;Qn&&(h.ya=Qn,L(h.I,h.D,Qn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-n.F,a.j.info("Handshake RTT: "+a.R+"ms")),h=a;var T=n;if(h.qa=Ur(h,h.J?h.ia:null,h.W),T.K){ur(h.h,T);var D=T,F=h.L;F&&(D.I=F),D.B&&(Wn(D),Wt(D)),h.g=T}else Or(h);0<a.i.length&&Qt(a)}else P[0]!="stop"&&P[0]!="close"||je(a,7);else a.G==3&&(P[0]=="stop"||P[0]=="close"?P[0]=="stop"?je(a,7):Jn(a):P[0]!="noop"&&a.l&&a.l.ta(P),a.v=0)}}mt(4)}catch{}}var ya=class{constructor(n,s){this.g=n,this.map=s}};function cr(n){this.l=n||10,u.PerformanceNavigationTiming?(n=u.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lr(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function hr(n){return n.h?1:n.g?n.g.size:0}function Gn(n,s){return n.h?n.h==s:n.g?n.g.has(s):!1}function qn(n,s){n.g?n.g.add(s):n.h=s}function ur(n,s){n.h&&n.h==s?n.h=null:n.g&&n.g.has(s)&&n.g.delete(s)}cr.prototype.cancel=function(){if(this.i=dr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function dr(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let s=n.i;for(const a of n.g.values())s=s.concat(a.D);return s}return x(n.i)}function va(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(g(n)){for(var s=[],a=n.length,h=0;h<a;h++)s.push(n[h]);return s}s=[],a=0;for(h in n)s[a++]=n[h];return s}function _a(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(g(n)||typeof n=="string"){var s=[];n=n.length;for(var a=0;a<n;a++)s.push(a);return s}s=[],a=0;for(const h in n)s[a++]=h;return s}}}function fr(n,s){if(n.forEach&&typeof n.forEach=="function")n.forEach(s,void 0);else if(g(n)||typeof n=="string")Array.prototype.forEach.call(n,s,void 0);else for(var a=_a(n),h=va(n),v=h.length,w=0;w<v;w++)s.call(void 0,h[w],a&&a[w],n)}var pr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ia(n,s){if(n){n=n.split("&");for(var a=0;a<n.length;a++){var h=n[a].indexOf("="),v=null;if(0<=h){var w=n[a].substring(0,h);v=n[a].substring(h+1)}else w=n[a];s(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Fe(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof Fe){this.h=n.h,zt(this,n.j),this.o=n.o,this.g=n.g,Gt(this,n.s),this.l=n.l;var s=n.i,a=new Et;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),gr(this,a),this.m=n.m}else n&&(s=String(n).match(pr))?(this.h=!1,zt(this,s[1]||"",!0),this.o=It(s[2]||""),this.g=It(s[3]||"",!0),Gt(this,s[4]),this.l=It(s[5]||"",!0),gr(this,s[6]||"",!0),this.m=It(s[7]||"")):(this.h=!1,this.i=new Et(null,this.h))}Fe.prototype.toString=function(){var n=[],s=this.j;s&&n.push(wt(s,mr,!0),":");var a=this.g;return(a||s=="file")&&(n.push("//"),(s=this.o)&&n.push(wt(s,mr,!0),"@"),n.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&n.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(wt(a,a.charAt(0)=="/"?Ta:Ea,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",wt(a,ba)),n.join("")};function me(n){return new Fe(n)}function zt(n,s,a){n.j=a?It(s,!0):s,n.j&&(n.j=n.j.replace(/:$/,""))}function Gt(n,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);n.s=s}else n.s=null}function gr(n,s,a){s instanceof Et?(n.i=s,Sa(n.i,n.h)):(a||(s=wt(s,Aa)),n.i=new Et(s,n.h))}function L(n,s,a){n.i.set(s,a)}function qt(n){return L(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function It(n,s){return n?s?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function wt(n,s,a){return typeof n=="string"?(n=encodeURI(n).replace(s,wa),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function wa(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var mr=/[#\/\?@]/g,Ea=/[#\?:]/g,Ta=/[#\?]/g,Aa=/[#\?@]/g,ba=/#/g;function Et(n,s){this.h=this.g=null,this.i=n||null,this.j=!!s}function Se(n){n.g||(n.g=new Map,n.h=0,n.i&&Ia(n.i,function(s,a){n.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}t=Et.prototype,t.add=function(n,s){Se(this),this.i=null,n=Xe(this,n);var a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(s),this.h+=1,this};function yr(n,s){Se(n),s=Xe(n,s),n.g.has(s)&&(n.i=null,n.h-=n.g.get(s).length,n.g.delete(s))}function vr(n,s){return Se(n),s=Xe(n,s),n.g.has(s)}t.forEach=function(n,s){Se(this),this.g.forEach(function(a,h){a.forEach(function(v){n.call(s,v,h,this)},this)},this)},t.na=function(){Se(this);const n=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let h=0;h<s.length;h++){const v=n[h];for(let w=0;w<v.length;w++)a.push(s[h])}return a},t.V=function(n){Se(this);let s=[];if(typeof n=="string")vr(this,n)&&(s=s.concat(this.g.get(Xe(this,n))));else{n=Array.from(this.g.values());for(let a=0;a<n.length;a++)s=s.concat(n[a])}return s},t.set=function(n,s){return Se(this),this.i=null,n=Xe(this,n),vr(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[s]),this.h+=1,this},t.get=function(n,s){return n?(n=this.V(n),0<n.length?String(n[0]):s):s};function _r(n,s,a){yr(n,s),0<a.length&&(n.i=null,n.g.set(Xe(n,s),x(a)),n.h+=a.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var h=s[a];const w=encodeURIComponent(String(h)),T=this.V(h);for(h=0;h<T.length;h++){var v=w;T[h]!==""&&(v+="="+encodeURIComponent(String(T[h]))),n.push(v)}}return this.i=n.join("&")};function Xe(n,s){return s=String(s),n.j&&(s=s.toLowerCase()),s}function Sa(n,s){s&&!n.j&&(Se(n),n.i=null,n.g.forEach(function(a,h){var v=h.toLowerCase();h!=v&&(yr(this,h),_r(this,v,a))},n)),n.j=s}function Ca(n,s){const a=new vt;if(u.Image){const h=new Image;h.onload=N(Ce,a,"TestLoadImage: loaded",!0,s,h),h.onerror=N(Ce,a,"TestLoadImage: error",!1,s,h),h.onabort=N(Ce,a,"TestLoadImage: abort",!1,s,h),h.ontimeout=N(Ce,a,"TestLoadImage: timeout",!1,s,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else s(!1)}function Ra(n,s){const a=new vt,h=new AbortController,v=setTimeout(()=>{h.abort(),Ce(a,"TestPingServer: timeout",!1,s)},1e4);fetch(n,{signal:h.signal}).then(w=>{clearTimeout(v),w.ok?Ce(a,"TestPingServer: ok",!0,s):Ce(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(v),Ce(a,"TestPingServer: error",!1,s)})}function Ce(n,s,a,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(a)}catch{}}function ka(){this.g=new la}function Pa(n,s,a){const h=a||"";try{fr(n,function(v,w){let T=v;E(v)&&(T=Mn(v)),s.push(h+w+"="+encodeURIComponent(T))})}catch(v){throw s.push(h+"type="+encodeURIComponent("_badmap")),v}}function Kt(n){this.l=n.Ub||null,this.j=n.eb||!1}k(Kt,Un),Kt.prototype.g=function(){return new Jt(this.l,this.j)},Kt.prototype.i=function(n){return function(){return n}}({});function Jt(n,s){V.call(this),this.D=n,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Jt,V),t=Jt.prototype,t.open=function(n,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=s,this.readyState=1,At(this)},t.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(s.body=n),(this.D||u).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tt(this)),this.readyState=0},t.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,At(this)),this.g&&(this.readyState=3,At(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ir(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ir(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}t.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var s=n.value?n.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!n.done}))&&(this.response=this.responseText+=s)}n.done?Tt(this):At(this),this.readyState==3&&Ir(this)}},t.Ra=function(n){this.g&&(this.response=this.responseText=n,Tt(this))},t.Qa=function(n){this.g&&(this.response=n,Tt(this))},t.ga=function(){this.g&&Tt(this)};function Tt(n){n.readyState=4,n.l=null,n.j=null,n.v=null,At(n)}t.setRequestHeader=function(n,s){this.u.append(n,s)},t.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=s.next();return n.join(`\r
`)};function At(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function wr(n){let s="";return Y(n,function(a,h){s+=h,s+=":",s+=a,s+=`\r
`}),s}function Kn(n,s,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=wr(a),typeof n=="string"?a!=null&&encodeURIComponent(String(a)):L(n,s,a))}function U(n){V.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(U,V);var Oa=/^https?$/i,Da=["POST","PUT"];t=U.prototype,t.Ha=function(n){this.J=n},t.ea=function(n,s,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);s=s?s.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vn.g(),this.v=this.o?Qi(this.o):Qi(Vn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(s,String(n),!0),this.B=!1}catch(w){Er(this,w);return}if(n=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)a.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())a.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(w=>w.toLowerCase()=="content-type"),v=u.FormData&&n instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Da,s,void 0))||h||v||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,T]of a)this.g.setRequestHeader(w,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{br(this),this.u=!0,this.g.send(n),this.u=!1}catch(w){Er(this,w)}};function Er(n,s){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=s,n.m=5,Tr(n),Yt(n)}function Tr(n){n.A||(n.A=!0,K(n,"complete"),K(n,"error"))}t.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,K(this,"complete"),K(this,"abort"),Yt(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yt(this,!0)),U.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ar(this):this.bb())},t.bb=function(){Ar(this)};function Ar(n){if(n.h&&typeof l<"u"&&(!n.v[1]||ye(n)!=4||n.Z()!=2)){if(n.u&&ye(n)==4)Ki(n.Ea,0,n);else if(K(n,"readystatechange"),ye(n)==4){n.h=!1;try{const T=n.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var h;if(h=T===0){var v=String(n.D).match(pr)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),h=!Oa.test(v?v.toLowerCase():"")}a=h}if(a)K(n,"complete"),K(n,"success");else{n.m=6;try{var w=2<ye(n)?n.g.statusText:""}catch{w=""}n.l=w+" ["+n.Z()+"]",Tr(n)}}finally{Yt(n)}}}}function Yt(n,s){if(n.g){br(n);const a=n.g,h=n.v[0]?()=>{}:null;n.g=null,n.v=null,s||K(n,"ready");try{a.onreadystatechange=h}catch{}}}function br(n){n.I&&(u.clearTimeout(n.I),n.I=null)}t.isActive=function(){return!!this.g};function ye(n){return n.g?n.g.readyState:0}t.Z=function(){try{return 2<ye(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(n){if(this.g){var s=this.g.responseText;return n&&s.indexOf(n)==0&&(s=s.substring(n.length)),ca(s)}};function Sr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Na(n){const s={};n=(n.g&&2<=ye(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if(Q(n[h]))continue;var a=y(n[h]);const v=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const w=s[v]||[];s[v]=w,w.push(a)}_(s,function(h){return h.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bt(n,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||s}function Cr(n){this.Aa=0,this.i=[],this.j=new vt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bt("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bt("baseRetryDelayMs",5e3,n),this.cb=bt("retryDelaySeedMs",1e4,n),this.Wa=bt("forwardChannelMaxRetries",2,n),this.wa=bt("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new cr(n&&n.concurrentRequestLimit),this.Da=new ka,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cr.prototype,t.la=8,t.G=1,t.connect=function(n,s,a,h){J(0),this.W=n,this.H=s||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.I=Ur(this,null,this.W),Qt(this)};function Jn(n){if(Rr(n),n.G==3){var s=n.U++,a=me(n.I);if(L(a,"SID",n.K),L(a,"RID",s),L(a,"TYPE","terminate"),St(n,a),s=new be(n,n.j,s),s.L=2,s.v=qt(me(a)),a=!1,u.navigator&&u.navigator.sendBeacon)try{a=u.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&u.Image&&(new Image().src=s.v,a=!0),a||(s.g=xr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Wt(s)}Mr(n)}function Xt(n){n.g&&(Xn(n),n.g.cancel(),n.g=null)}function Rr(n){Xt(n),n.u&&(u.clearTimeout(n.u),n.u=null),Zt(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&u.clearTimeout(n.s),n.s=null)}function Qt(n){if(!lr(n.h)&&!n.s){n.s=!0;var s=n.Ga;ht||$i(),ut||(ht(),ut=!0),Sn.add(s,n),n.B=0}}function La(n,s){return hr(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=s.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=yt(C(n.Ga,n,s),Lr(n,n.B)),n.B++,!0)}t.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const v=new be(this,this.j,n);let w=this.o;if(this.S&&(w?(w=d(w),m(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(s+=h,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=Pr(this,v,s),a=me(this.I),L(a,"RID",n),L(a,"CVER",22),this.D&&L(a,"X-HTTP-Session-Id",this.D),St(this,a),w&&(this.O?s="headers="+encodeURIComponent(String(wr(w)))+"&"+s:this.m&&Kn(a,this.m,w)),qn(this.h,v),this.Ua&&L(a,"TYPE","init"),this.P?(L(a,"$req",s),L(a,"SID","null"),v.T=!0,Hn(v,a,null)):Hn(v,a,s),this.G=2}}else this.G==3&&(n?kr(this,n):this.i.length==0||lr(this.h)||kr(this))};function kr(n,s){var a;s?a=s.l:a=n.U++;const h=me(n.I);L(h,"SID",n.K),L(h,"RID",a),L(h,"AID",n.T),St(n,h),n.m&&n.o&&Kn(h,n.m,n.o),a=new be(n,n.j,a,n.B+1),n.m===null&&(a.H=n.o),s&&(n.i=s.D.concat(n.i)),s=Pr(n,a,1e3),a.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),qn(n.h,a),Hn(a,h,s)}function St(n,s){n.H&&Y(n.H,function(a,h){L(s,h,a)}),n.l&&fr({},function(a,h){L(s,h,a)})}function Pr(n,s,a){a=Math.min(n.i.length,a);var h=n.l?C(n.l.Na,n.l,n):null;e:{var v=n.i;let w=-1;for(;;){const T=["count="+a];w==-1?0<a?(w=v[0].g,T.push("ofs="+w)):w=0:T.push("ofs="+w);let D=!0;for(let F=0;F<a;F++){let P=v[F].g;const $=v[F].map;if(P-=w,0>P)w=Math.max(0,v[F].g-100),D=!1;else try{Pa($,T,"req"+P+"_")}catch{h&&h($)}}if(D){h=T.join("&");break e}}}return n=n.i.splice(0,a),s.D=n,h}function Or(n){if(!n.g&&!n.u){n.Y=1;var s=n.Fa;ht||$i(),ut||(ht(),ut=!0),Sn.add(s,n),n.v=0}}function Yn(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=yt(C(n.Fa,n),Lr(n,n.v)),n.v++,!0)}t.Fa=function(){if(this.u=null,Dr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=yt(C(this.ab,this),n)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,J(10),Xt(this),Dr(this))};function Xn(n){n.A!=null&&(u.clearTimeout(n.A),n.A=null)}function Dr(n){n.g=new be(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var s=me(n.qa);L(s,"RID","rpc"),L(s,"SID",n.K),L(s,"AID",n.T),L(s,"CI",n.F?"0":"1"),!n.F&&n.ja&&L(s,"TO",n.ja),L(s,"TYPE","xmlhttp"),St(n,s),n.m&&n.o&&Kn(s,n.m,n.o),n.L&&(n.g.I=n.L);var a=n.g;n=n.ia,a.L=1,a.v=qt(me(s)),a.m=null,a.P=!0,sr(a,n)}t.Za=function(){this.C!=null&&(this.C=null,Xt(this),Yn(this),J(19))};function Zt(n){n.C!=null&&(u.clearTimeout(n.C),n.C=null)}function Nr(n,s){var a=null;if(n.g==s){Zt(n),Xn(n),n.g=null;var h=2}else if(Gn(n.h,s))a=s.D,ur(n.h,s),h=1;else return;if(n.G!=0){if(s.o)if(h==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var v=n.B;h=jn(),K(h,new nr(h,a)),Qt(n)}else Or(n);else if(v=s.s,v==3||v==0&&0<s.X||!(h==1&&La(n,s)||h==2&&Yn(n)))switch(a&&0<a.length&&(s=n.h,s.i=s.i.concat(a)),v){case 1:je(n,5);break;case 4:je(n,10);break;case 3:je(n,6);break;default:je(n,2)}}}function Lr(n,s){let a=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(a*=2),a*s}function je(n,s){if(n.j.info("Error code "+s),s==2){var a=C(n.fb,n),h=n.Xa;const v=!h;h=new Fe(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||zt(h,"https"),qt(h),v?Ca(h.toString(),a):Ra(h.toString(),a)}else J(2);n.G=0,n.l&&n.l.sa(s),Mr(n),Rr(n)}t.fb=function(n){n?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))};function Mr(n){if(n.G=0,n.ka=[],n.l){const s=dr(n.h);(s.length!=0||n.i.length!=0)&&(M(n.ka,s),M(n.ka,n.i),n.h.i.length=0,x(n.i),n.i.length=0),n.l.ra()}}function Ur(n,s,a){var h=a instanceof Fe?me(a):new Fe(a);if(h.g!="")s&&(h.g=s+"."+h.g),Gt(h,h.s);else{var v=u.location;h=v.protocol,s=s?s+"."+v.hostname:v.hostname,v=+v.port;var w=new Fe(null);h&&zt(w,h),s&&(w.g=s),v&&Gt(w,v),a&&(w.l=a),h=w}return a=n.D,s=n.ya,a&&s&&L(h,a,s),L(h,"VER",n.la),St(n,h),h}function xr(n,s,a){if(s&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=n.Ca&&!n.pa?new U(new Kt({eb:a})):new U(n.pa),s.Ha(n.J),s}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fr(){}t=Fr.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function te(n,s){V.call(this),this.g=new Cr(s),this.l=n,this.h=s&&s.messageUrlParams||null,n=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(n?n["X-WebChannel-Content-Type"]=s.messageContentType:n={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(n?n["X-WebChannel-Client-Profile"]=s.va:n={"X-WebChannel-Client-Profile":s.va}),this.g.S=n,(n=s&&s.Sb)&&!Q(n)&&(this.g.m=n),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!Q(s)&&(this.g.D=s,n=this.h,n!==null&&s in n&&(n=this.h,s in n&&delete n[s])),this.j=new Qe(this)}k(te,V),te.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},te.prototype.close=function(){Jn(this.g)},te.prototype.o=function(n){var s=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.u&&(a={},a.__data__=Mn(n),n=a);s.i.push(new ya(s.Ya++,n)),s.G==3&&Qt(s)},te.prototype.N=function(){this.g.l=null,delete this.j,Jn(this.g),delete this.g,te.aa.N.call(this)};function jr(n){xn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var s=n.__sm__;if(s){e:{for(const a in s){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,s=s!==null&&n in s?s[n]:void 0),this.data=s}else this.data=n}k(jr,xn);function Br(){Fn.call(this),this.status=1}k(Br,Fn);function Qe(n){this.g=n}k(Qe,Fr),Qe.prototype.ua=function(){K(this.g,"a")},Qe.prototype.ta=function(n){K(this.g,new jr(n))},Qe.prototype.sa=function(n){K(this.g,new Br)},Qe.prototype.ra=function(){K(this.g,"b")},te.prototype.send=te.prototype.o,te.prototype.open=te.prototype.m,te.prototype.close=te.prototype.close,Bn.NO_ERROR=0,Bn.TIMEOUT=8,Bn.HTTP_ERROR=6,ga.COMPLETE="complete",ha.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",V.prototype.listen=V.prototype.K,U.prototype.listenOnce=U.prototype.L,U.prototype.getLastError=U.prototype.Ka,U.prototype.getLastErrorCode=U.prototype.Ba,U.prototype.getStatus=U.prototype.Z,U.prototype.getResponseJson=U.prototype.Oa,U.prototype.getResponseText=U.prototype.oa,U.prototype.send=U.prototype.ea,U.prototype.setWithCredentials=U.prototype.Ha}).apply(typeof nn<"u"?nn:typeof self<"u"?self:typeof window<"u"?window:{});const bs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new _n("@firebase/firestore");function Z(t,...e){if(ot.logLevel<=O.DEBUG){const i=e.map(Fi);ot.debug(`Firestore (${jt}): ${t}`,...i)}}function xi(t,...e){if(ot.logLevel<=O.ERROR){const i=e.map(Fi);ot.error(`Firestore (${jt}): ${t}`,...i)}}function qd(t,...e){if(ot.logLevel<=O.WARN){const i=e.map(Fi);ot.warn(`Firestore (${jt}): ${t}`,...i)}}function Fi(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t="Unexpected state"){const e=`FIRESTORE (${jt}) INTERNAL ASSERTION FAILED: `+t;throw xi(e),new Error(e)}function _i(t,e){t||ji()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends ce{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(W.UNAUTHENTICATED))}shutdown(){}}class Jd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Yd{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){let r=this.i;const o=g=>this.i!==r?(r=this.i,i(g)):Promise.resolve();let c=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new rt,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const g=c;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},u=g=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(g=>u(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?u(g):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new rt)}},0),l()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_i(typeof r.accessToken=="string"),new Jo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _i(e===null||typeof e=="string"),new W(e)}}class Xd{constructor(e,i,r){this.l=e,this.h=i,this.P=r,this.type="FirstParty",this.user=W.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qd{constructor(e,i,r){this.l=e,this.h=i,this.P=r}getToken(){return Promise.resolve(new Xd(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ef{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){const r=c=>{c.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.R;return this.R=c.token,Z("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(_i(typeof i.token=="string"),this.R=i.token,new Zd(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let r=0;r<t;r++)i[r]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=tf(40);for(let c=0;c<o.length;++c)r.length<20&&o[c]<i&&(r+=e.charAt(o[c]%e.length))}return r}}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,i,r,o,c,l,u,g,E){this.databaseId=e,this.appId=i,this.persistenceKey=r,this.host=o,this.ssl=c,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=g,this.useFetchStreams=E}}class vn{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ss,R;(R=Ss||(Ss={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ko([4294967295,4294967295],0);function li(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,i,r=1e3,o=1.5,c=6e4){this.oi=e,this.timerId=i,this.No=r,this.Lo=o,this.Bo=c,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const i=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),o=Math.max(0,i-r);o>0&&Z("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.ko} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,o,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,i,r,o,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,o,c){const l=Date.now()+r,u=new Bi(e,i,l,o,c);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function of(t,e){if(xi("AsyncQueue",`${e}: ${t}`),Yo(t))return new G(z.UNAVAILABLE,`${e}: ${t}`);throw t}var Cs,Rs;(Rs=Cs||(Cs={})).J_="default",Rs.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,i,r,o){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=r,this.databaseInfo=o,this.user=W.UNAUTHENTICATED,this.clientId=nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async c=>{Z("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(Z("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const r=of(i,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Map;function cf(t,e,i,r){if(e===!0&&r===!0)throw new G(z.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}function lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ji()}function hf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=lf(t);throw new G(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xo((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new G(z.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new G(z.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new G(z.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qo{constructor(e,i,r,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ps({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ps(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kd;switch(r.type){case"firstParty":return new Qd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const r=ks.get(i);r&&(Z("ComponentProvider","Removing Datastore"),ks.delete(i),r.terminate())}(this),Promise.resolve()}}function uf(t,e,i,r={}){var o;const c=(t=hf(t,Qo))._getSettings(),l=`${e}:${i}`;if(c.host!=="firestore.googleapis.com"&&c.host!==l&&qd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},c),{host:l,ssl:!1})),r.mockUserToken){let u,g;if(typeof r.mockUserToken=="string")u=r.mockUserToken,g=W.MOCK_USER;else{u=Wa(r.mockUserToken,(o=t._app)===null||o===void 0?void 0:o.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new G(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new W(E)}t._authCredentials=new Jd(new Jo(u,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new sf(this,"async_queue_retry"),this.hu=()=>{const i=li();i&&Z("AsyncQueue","Visibility state changed to "+i.visibilityState),this.Yo.Wo()};const e=li();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const i=li();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const i=new rt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Yo(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const i=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const o=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw xi("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.uu=!1,r))));return this.iu=i,i}enqueueAfterDelay(e,i,r){this.Pu(),this.lu.indexOf(e)>-1&&(i=0);const o=Bi.createAndSchedule(this,e,i,r,c=>this.Eu(c));return this._u.push(o),o}Pu(){this.au&&ji()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const i of this._u)if(i.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((i,r)=>i.targetTimeMs-r.targetTimeMs);for(const i of this._u)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const i=this._u.indexOf(e);this._u.splice(i,1)}}class ff extends Qo{constructor(e,i,r,o){super(e,i,r,o),this.type="firestore",this._queue=function(){return new df}(),this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gf(this),this._firestoreClient.terminate()}}function pf(t,e){const i=typeof t=="object"?t:Ei(),r=typeof t=="string"?t:e||"(default)",o=Ke(i,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=$a("firestore");c&&uf(o,...c)}return o}function gf(t){var e,i,r;const o=t._freezeSettings(),c=function(u,g,E,A){return new rf(u,g,E,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,Xo(A.experimentalLongPollingOptions),A.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,o);t._firestoreClient=new af(t._authCredentials,t._appCheckCredentials,t._queue,c),!((i=o.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}(function(e,i=!0){(function(o){jt=o})(at),de(new oe("firestore",(r,{instanceIdentifier:o,options:c})=>{const l=r.getProvider("app").getImmediate(),u=new ff(new Yd(r.getProvider("auth-internal")),new ef(r.getProvider("app-check-internal")),function(E,A){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new G(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(E.options.projectId,A)}(l,o),l);return c=Object.assign({useFetchStreams:i},c),u._setSettings(c),u},"PUBLIC").setMultipleInstances(!0)),ne(bs,"4.6.4",e),ne(bs,"4.6.4","esm2017")})();const mf={apiKey:"AIzaSyBk-Q7ztYQxnZaUcxQdkdMjZ1pniaoRAwI",authDomain:"vueshop-ccc6e.firebaseapp.com",projectId:"vueshop-ccc6e",storageBucket:"vueshop-ccc6e.appspot.com",messagingSenderId:"267738395538",appId:"1:267738395538:web:b2521e2a83c0459673874b",measurementId:"G-Z9CWM23SV1"},Vi=Hs(mf);Rh(Vi);const Tf=zd(Vi);pf(Vi);export{Tf as a,_f as b,yf as c,vf as d,wf as o,Ef as s,If as u};
