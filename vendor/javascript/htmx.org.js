// htmx.org@2.0.3 downloaded from https://ga.jspm.io/npm:htmx.org@2.0.3/dist/htmx.esm.js

var htmx=function(){const htmx={
/** @type {typeof onLoadHelper} */
onLoad:null,
/** @type {typeof processNode} */
process:null,
/** @type {typeof addEventListenerImpl} */
on:null,
/** @type {typeof removeEventListenerImpl} */
off:null,
/** @type {typeof triggerEvent} */
trigger:null,
/** @type {typeof ajaxHelper} */
ajax:null,
/** @type {typeof find} */
find:null,
/** @type {typeof findAll} */
findAll:null,
/** @type {typeof closest} */
closest:null,
/**
     * Returns the input values that would resolve for a given element via the htmx value resolution mechanism
     *
     * @see https://htmx.org/api/#values
     *
     * @param {Element} elt the element to resolve values on
     * @param {HttpVerb} type the request type (e.g. **get** or **post**) non-GET's will include the enclosing form of the element. Defaults to **post**
     * @returns {Object}
     */
values:function(e,t){const n=getInputValues(e,t||"post");return n.values},
/** @type {typeof removeElement} */
remove:null,
/** @type {typeof addClassToElement} */
addClass:null,
/** @type {typeof removeClassFromElement} */
removeClass:null,
/** @type {typeof toggleClassOnElement} */
toggleClass:null,
/** @type {typeof takeClassForElement} */
takeClass:null,
/** @type {typeof swap} */
swap:null,
/** @type {typeof defineExtension} */
defineExtension:null,
/** @type {typeof removeExtension} */
removeExtension:null,
/** @type {typeof logAll} */
logAll:null,
/** @type {typeof logNone} */
logNone:null,logger:null,config:{
/**
       * Whether to use history.
       * @type boolean
       * @default true
       */
historyEnabled:true,
/**
       * The number of pages to keep in **localStorage** for history support.
       * @type number
       * @default 10
       */
historyCacheSize:10,
/**
       * @type boolean
       * @default false
       */
refreshOnHistoryMiss:false,
/**
       * The default swap style to use if **[hx-swap](https://htmx.org/attributes/hx-swap)** is omitted.
       * @type HtmxSwapStyle
       * @default 'innerHTML'
       */
defaultSwapStyle:"innerHTML",
/**
       * The default delay between receiving a response from the server and doing the swap.
       * @type number
       * @default 0
       */
defaultSwapDelay:0,
/**
       * The default delay between completing the content swap and settling attributes.
       * @type number
       * @default 20
       */
defaultSettleDelay:20,
/**
       * If true, htmx will inject a small amount of CSS into the page to make indicators invisible unless the **htmx-indicator** class is present.
       * @type boolean
       * @default true
       */
includeIndicatorStyles:true,
/**
       * The class to place on indicators when a request is in flight.
       * @type string
       * @default 'htmx-indicator'
       */
indicatorClass:"htmx-indicator",
/**
       * The class to place on triggering elements when a request is in flight.
       * @type string
       * @default 'htmx-request'
       */
requestClass:"htmx-request",
/**
       * The class to temporarily place on elements that htmx has added to the DOM.
       * @type string
       * @default 'htmx-added'
       */
addedClass:"htmx-added",
/**
       * The class to place on target elements when htmx is in the settling phase.
       * @type string
       * @default 'htmx-settling'
       */
settlingClass:"htmx-settling",
/**
       * The class to place on target elements when htmx is in the swapping phase.
       * @type string
       * @default 'htmx-swapping'
       */
swappingClass:"htmx-swapping",
/**
       * Allows the use of eval-like functionality in htmx, to enable **hx-vars**, trigger conditions & script tag evaluation. Can be set to **false** for CSP compatibility.
       * @type boolean
       * @default true
       */
allowEval:true,
/**
       * If set to false, disables the interpretation of script tags.
       * @type boolean
       * @default true
       */
allowScriptTags:true,
/**
       * If set, the nonce will be added to inline scripts.
       * @type string
       * @default ''
       */
inlineScriptNonce:"",
/**
       * If set, the nonce will be added to inline styles.
       * @type string
       * @default ''
       */
inlineStyleNonce:"",
/**
       * The attributes to settle during the settling phase.
       * @type string[]
       * @default ['class', 'style', 'width', 'height']
       */
attributesToSettle:["class","style","width","height"],
/**
       * Allow cross-site Access-Control requests using credentials such as cookies, authorization headers or TLS client certificates.
       * @type boolean
       * @default false
       */
withCredentials:false,
/**
       * @type number
       * @default 0
       */
timeout:0,
/**
       * The default implementation of **getWebSocketReconnectDelay** for reconnecting after unexpected connection loss by the event code **Abnormal Closure**, **Service Restart** or **Try Again Later**.
       * @type {'full-jitter' | ((retryCount:number) => number)}
       * @default "full-jitter"
       */
wsReconnectDelay:"full-jitter",
/**
       * The type of binary data being received over the WebSocket connection
       * @type BinaryType
       * @default 'blob'
       */
wsBinaryType:"blob",
/**
       * @type string
       * @default '[hx-disable], [data-hx-disable]'
       */
disableSelector:"[hx-disable], [data-hx-disable]",
/**
       * @type {'auto' | 'instant' | 'smooth'}
       * @default 'instant'
       */
scrollBehavior:"instant",
/**
       * If the focused element should be scrolled into view.
       * @type boolean
       * @default false
       */
defaultFocusScroll:false,
/**
       * If set to true htmx will include a cache-busting parameter in GET requests to avoid caching partial responses by the browser
       * @type boolean
       * @default false
       */
getCacheBusterParam:false,
/**
       * If set to true, htmx will use the View Transition API when swapping in new content.
       * @type boolean
       * @default false
       */
globalViewTransitions:false,
/**
       * htmx will format requests with these methods by encoding their parameters in the URL, not the request body
       * @type {(HttpVerb)[]}
       * @default ['get', 'delete']
       */
methodsThatUseUrlParams:["get","delete"],
/**
       * If set to true, disables htmx-based requests to non-origin hosts.
       * @type boolean
       * @default false
       */
selfRequestsOnly:true,
/**
       * If set to true htmx will not update the title of the document when a title tag is found in new content
       * @type boolean
       * @default false
       */
ignoreTitle:false,
/**
       * Whether the target of a boosted element is scrolled into the viewport.
       * @type boolean
       * @default true
       */
scrollIntoViewOnBoost:true,
/**
       * The cache to store evaluated trigger specifications into.
       * You may define a simple object to use a never-clearing cache, or implement your own system using a [proxy object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
       * @type {Object|null}
       * @default null
       */
triggerSpecsCache:null,
/** @type boolean */
disableInheritance:false,
/** @type HtmxResponseHandlingConfig[] */
responseHandling:[{code:"204",swap:false},{code:"[23]..",swap:true},{code:"[45]..",swap:false,error:true}],
/**
       * Whether to process OOB swaps on elements that are nested within the main response element.
       * @type boolean
       * @default true
       */
allowNestedOobSwaps:true},
/** @type {typeof parseInterval} */
parseInterval:null,
/** @type {typeof internalEval} */
_:null,version:"2.0.3"};htmx.onLoad=onLoadHelper;htmx.process=processNode;htmx.on=addEventListenerImpl;htmx.off=removeEventListenerImpl;htmx.trigger=triggerEvent;htmx.ajax=ajaxHelper;htmx.find=find;htmx.findAll=findAll;htmx.closest=closest;htmx.remove=removeElement;htmx.addClass=addClassToElement;htmx.removeClass=removeClassFromElement;htmx.toggleClass=toggleClassOnElement;htmx.takeClass=takeClassForElement;htmx.swap=swap;htmx.defineExtension=defineExtension;htmx.removeExtension=removeExtension;htmx.logAll=logAll;htmx.logNone=logNone;htmx.parseInterval=parseInterval;htmx._=internalEval;const internalAPI={addTriggerHandler:addTriggerHandler,bodyContains:bodyContains,canAccessLocalStorage:canAccessLocalStorage,findThisElement:findThisElement,filterValues:filterValues,swap:swap,hasAttribute:hasAttribute,getAttributeValue:getAttributeValue,getClosestAttributeValue:getClosestAttributeValue,getClosestMatch:getClosestMatch,getExpressionVars:getExpressionVars,getHeaders:getHeaders,getInputValues:getInputValues,getInternalData:getInternalData,getSwapSpecification:getSwapSpecification,getTriggerSpecs:getTriggerSpecs,getTarget:getTarget,makeFragment:makeFragment,mergeObjects:mergeObjects,makeSettleInfo:makeSettleInfo,oobSwap:oobSwap,querySelectorExt:querySelectorExt,settleImmediately:settleImmediately,shouldCancel:shouldCancel,triggerEvent:triggerEvent,triggerErrorEvent:triggerErrorEvent,withExtensions:withExtensions};const VERBS=["get","post","put","delete","patch"];const VERB_SELECTOR=VERBS.map((function(e){return"[hx-"+e+"], [data-hx-"+e+"]"})).join(", ");
/**
   * Parses an interval string consistent with the way htmx does. Useful for plugins that have timing-related attributes.
   *
   * Caution: Accepts an int followed by either **s** or **ms**. All other values use **parseFloat**
   *
   * @see https://htmx.org/api/#parseInterval
   *
   * @param {string} str timing string
   * @returns {number|undefined}
   */function parseInterval(e){if(e==void 0)return;let t=NaN;t=e.slice(-2)=="ms"?parseFloat(e.slice(0,-2)):e.slice(-1)=="s"?parseFloat(e.slice(0,-1))*1e3:e.slice(-1)=="m"?parseFloat(e.slice(0,-1))*1e3*60:parseFloat(e);return isNaN(t)?void 0:t}
/**
   * @param {Node} elt
   * @param {string} name
   * @returns {(string | null)}
   */function getRawAttribute(e,t){return e instanceof Element&&e.getAttribute(t)}
/**
   * @param {Element} elt
   * @param {string} qualifiedName
   * @returns {boolean}
   */function hasAttribute(e,t){return!!e.hasAttribute&&(e.hasAttribute(t)||e.hasAttribute("data-"+t))}
/**
   *
   * @param {Node} elt
   * @param {string} qualifiedName
   * @returns {(string | null)}
   */function getAttributeValue(e,t){return getRawAttribute(e,t)||getRawAttribute(e,"data-"+t)}
/**
   * @param {Node} elt
   * @returns {Node | null}
   */function parentElt(e){const t=e.parentElement;return!t&&e.parentNode instanceof ShadowRoot?e.parentNode:t}
/**
   * @returns {Document}
   */function getDocument(){return document}
/**
   * @param {Node} elt
   * @param {boolean} global
   * @returns {Node|Document}
   */function getRootNode(e,t){return e.getRootNode?e.getRootNode({composed:t}):getDocument()}
/**
   * @param {Node} elt
   * @param {(e:Node) => boolean} condition
   * @returns {Node | null}
   */function getClosestMatch(e,t){while(e&&!t(e))e=parentElt(e);return e||null}
/**
   * @param {Element} initialElement
   * @param {Element} ancestor
   * @param {string} attributeName
   * @returns {string|null}
   */function getAttributeValueWithDisinheritance(e,t,n){const r=getAttributeValue(t,n);const o=getAttributeValue(t,"hx-disinherit");var s=getAttributeValue(t,"hx-inherit");if(e!==t){if(htmx.config.disableInheritance)return s&&(s==="*"||s.split(" ").indexOf(n)>=0)?r:null;if(o&&(o==="*"||o.split(" ").indexOf(n)>=0))return"unset"}return r}
/**
   * @param {Element} elt
   * @param {string} attributeName
   * @returns {string | null}
   */function getClosestAttributeValue(e,t){let n=null;getClosestMatch(e,(function(r){return!!(n=getAttributeValueWithDisinheritance(e,asElement(r),t))}));if(n!=="unset")return n}
/**
   * @param {Node} elt
   * @param {string} selector
   * @returns {boolean}
   */function matches(e,t){const n=e instanceof Element&&(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector);return!!n&&n.call(e,t)}
/**
   * @param {string} str
   * @returns {string}
   */function getStartTag(e){const t=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i;const n=t.exec(e);return n?n[1].toLowerCase():""}
/**
   * @param {string} resp
   * @returns {Document}
   */function parseHTML(e){const t=new DOMParser;return t.parseFromString(e,"text/html")}
/**
   * @param {DocumentFragment} fragment
   * @param {Node} elt
   */function takeChildrenFor(e,t){while(t.childNodes.length>0)e.append(t.childNodes[0])}
/**
   * @param {HTMLScriptElement} script
   * @returns {HTMLScriptElement}
   */function duplicateScript(e){const t=getDocument().createElement("script");forEach(e.attributes,(function(e){t.setAttribute(e.name,e.value)}));t.textContent=e.textContent;t.async=false;htmx.config.inlineScriptNonce&&(t.nonce=htmx.config.inlineScriptNonce);return t}
/**
   * @param {HTMLScriptElement} script
   * @returns {boolean}
   */function isJavaScriptScriptNode(e){return e.matches("script")&&(e.type==="text/javascript"||e.type==="module"||e.type==="")}
/**
   * we have to make new copies of script tags that we are going to insert because
   * SOME browsers (not saying who, but it involves an element and an animal) don't
   * execute scripts created in <template> tags when they are inserted into the DOM
   * and all the others do lmao
   * @param {DocumentFragment} fragment
   */function normalizeScriptTags(e){Array.from(e.querySelectorAll("script")).forEach((/** @param {HTMLScriptElement} script */e=>{if(isJavaScriptScriptNode(e)){const t=duplicateScript(e);const n=e.parentNode;try{n.insertBefore(t,e)}catch(e){logError(e)}finally{e.remove()}}}))}
/**
   * @typedef {DocumentFragment & {title?: string}} DocumentFragmentWithTitle
   * @description  a document fragment representing the response HTML, including
   * a `title` property for any title information found
   */
/**
   * @param {string} response HTML
   * @returns {DocumentFragmentWithTitle}
   */function makeFragment(e){const t=e.replace(/<head(\s[^>]*)?>[\s\S]*?<\/head>/i,"");const n=getStartTag(t);
/** @type DocumentFragmentWithTitle */let r;if(n==="html"){r=/** @type DocumentFragmentWithTitle */new DocumentFragment;const t=parseHTML(e);takeChildrenFor(r,t.body);r.title=t.title}else if(n==="body"){r=/** @type DocumentFragmentWithTitle */new DocumentFragment;const e=parseHTML(t);takeChildrenFor(r,e.body);r.title=e.title}else{const e=parseHTML('<body><template class="internal-htmx-wrapper">'+t+"</template></body>");r=/** @type DocumentFragmentWithTitle */e.querySelector("template").content;r.title=e.title;var o=r.querySelector("title");if(o&&o.parentNode===r){o.remove();r.title=o.innerText}}r&&(htmx.config.allowScriptTags?normalizeScriptTags(r):r.querySelectorAll("script").forEach((e=>e.remove())));return r}
/**
   * @param {Function} func
   */function maybeCall(e){e&&e()}
/**
   * @param {any} o
   * @param {string} type
   * @returns
   */function isType(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}
/**
   * @param {*} o
   * @returns {o is Function}
   */function isFunction(e){return typeof e==="function"}
/**
   * @param {*} o
   * @returns {o is Object}
   */function isRawObject(e){return isType(e,"Object")}
/**
   * @typedef {Object} OnHandler
   * @property {(keyof HTMLElementEventMap)|string} event
   * @property {EventListener} listener
   */
/**
   * @typedef {Object} ListenerInfo
   * @property {string} trigger
   * @property {EventListener} listener
   * @property {EventTarget} on
   */
/**
   * @typedef {Object} HtmxNodeInternalData
   * Element data
   * @property {number} [initHash]
   * @property {boolean} [boosted]
   * @property {OnHandler[]} [onHandlers]
   * @property {number} [timeout]
   * @property {ListenerInfo[]} [listenerInfos]
   * @property {boolean} [cancelled]
   * @property {boolean} [triggeredOnce]
   * @property {number} [delayed]
   * @property {number|null} [throttle]
   * @property {WeakMap<HtmxTriggerSpecification,WeakMap<EventTarget,string>>} [lastValue]
   * @property {boolean} [loaded]
   * @property {string} [path]
   * @property {string} [verb]
   * @property {boolean} [polling]
   * @property {HTMLButtonElement|HTMLInputElement|null} [lastButtonClicked]
   * @property {number} [requestCount]
   * @property {XMLHttpRequest} [xhr]
   * @property {(() => void)[]} [queuedRequests]
   * @property {boolean} [abortable]
   *
   * Event data
   * @property {HtmxTriggerSpecification} [triggerSpec]
   * @property {EventTarget[]} [handledFor]
   */
/**
   * getInternalData retrieves "private" data stored by htmx within an element
   * @param {EventTarget|Event} elt
   * @returns {HtmxNodeInternalData}
   */function getInternalData(e){const t="htmx-internal-data";let n=e[t];n||(n=e[t]={});return n}
/**
   * toArray converts an ArrayLike object into a real array.
   * @template T
   * @param {ArrayLike<T>} arr
   * @returns {T[]}
   */function toArray(e){const t=[];if(e)for(let n=0;n<e.length;n++)t.push(e[n]);return t}
/**
   * @template T
   * @param {T[]|NamedNodeMap|HTMLCollection|HTMLFormControlsCollection|ArrayLike<T>} arr
   * @param {(T) => void} func
   */function forEach(e,t){if(e)for(let n=0;n<e.length;n++)t(e[n])}
/**
   * @param {Element} el
   * @returns {boolean}
   */function isScrolledIntoView(e){const t=e.getBoundingClientRect();const n=t.top;const r=t.bottom;return n<window.innerHeight&&r>=0}
/**
   * @param {Node} elt
   * @returns {boolean}
   */function bodyContains(e){const t=e.getRootNode&&e.getRootNode();return t&&t instanceof window.ShadowRoot?getDocument().body.contains(t.host):getDocument().body.contains(e)}
/**
   * @param {string} trigger
   * @returns {string[]}
   */function splitOnWhitespace(e){return e.trim().split(/\s+/)}
/**
   * mergeObjects takes all the keys from
   * obj2 and duplicates them into obj1
   * @template T1
   * @template T2
   * @param {T1} obj1
   * @param {T2} obj2
   * @returns {T1 & T2}
   */function mergeObjects(e,t){for(const n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}
/**
   * @param {string} jString
   * @returns {any|null}
   */function parseJSON(e){try{return JSON.parse(e)}catch(e){logError(e);return null}}
/**
   * @returns {boolean}
   */function canAccessLocalStorage(){const e="htmx:localStorageTest";try{localStorage.setItem(e,e);localStorage.removeItem(e);return true}catch(e){return false}}
/**
   * @param {string} path
   * @returns {string}
   */function normalizePath(e){try{const t=new URL(e);t&&(e=t.pathname+t.search);/^\/$/.test(e)||(e=e.replace(/\/+$/,""));return e}catch(t){return e}}
/**
   * @param {string} str
   * @returns {any}
   */function internalEval(str){return maybeEval(getDocument().body,(function(){return eval(str)}))}
/**
   * Adds a callback for the **htmx:load** event. This can be used to process new content, for example initializing the content with a javascript library
   *
   * @see https://htmx.org/api/#onLoad
   *
   * @param {(elt: Node) => void} callback the callback to call on newly loaded content
   * @returns {EventListener}
   */function onLoadHelper(e){const t=htmx.on("htmx:load",(/** @param {CustomEvent} evt */function(t){e(t.detail.elt)}));return t}function logAll(){htmx.logger=function(e,t,n){console&&console.log(t,e,n)}}function logNone(){htmx.logger=null}
/**
   * Finds an element matching the selector
   *
   * @see https://htmx.org/api/#find
   *
   * @param {ParentNode|string} eltOrSelector  the root element to find the matching element in, inclusive | the selector to match
   * @param {string} [selector] the selector to match
   * @returns {Element|null}
   */function find(e,t){return typeof e!=="string"?e.querySelector(t):find(getDocument(),e)}
/**
   * Finds all elements matching the selector
   *
   * @see https://htmx.org/api/#findAll
   *
   * @param {ParentNode|string} eltOrSelector the root element to find the matching elements in, inclusive | the selector to match
   * @param {string} [selector] the selector to match
   * @returns {NodeListOf<Element>}
   */function findAll(e,t){return typeof e!=="string"?e.querySelectorAll(t):findAll(getDocument(),e)}
/**
   * @returns Window
   */function getWindow(){return window}
/**
   * Removes an element from the DOM
   *
   * @see https://htmx.org/api/#remove
   *
   * @param {Node} elt
   * @param {number} [delay]
   */function removeElement(e,t){e=resolveTarget(e);t?getWindow().setTimeout((function(){removeElement(e);e=null}),t):parentElt(e).removeChild(e)}
/**
   * @param {any} elt
   * @return {Element|null}
   */function asElement(e){return e instanceof Element?e:null}
/**
   * @param {any} elt
   * @return {HTMLElement|null}
   */function asHtmlElement(e){return e instanceof HTMLElement?e:null}
/**
   * @param {any} value
   * @return {string|null}
   */function asString(e){return typeof e==="string"?e:null}
/**
   * @param {EventTarget} elt
   * @return {ParentNode|null}
   */function asParentNode(e){return e instanceof Element||e instanceof Document||e instanceof DocumentFragment?e:null}
/**
   * This method adds a class to the given element.
   *
   * @see https://htmx.org/api/#addClass
   *
   * @param {Element|string} elt the element to add the class to
   * @param {string} clazz the class to add
   * @param {number} [delay] the delay (in milliseconds) before class is added
   */function addClassToElement(e,t,n){e=asElement(resolveTarget(e));e&&(n?getWindow().setTimeout((function(){addClassToElement(e,t);e=null}),n):e.classList&&e.classList.add(t))}
/**
   * Removes a class from the given element
   *
   * @see https://htmx.org/api/#removeClass
   *
   * @param {Node|string} node element to remove the class from
   * @param {string} clazz the class to remove
   * @param {number} [delay] the delay (in milliseconds before class is removed)
   */function removeClassFromElement(e,t,n){let r=asElement(resolveTarget(e));if(r)if(n)getWindow().setTimeout((function(){removeClassFromElement(r,t);r=null}),n);else if(r.classList){r.classList.remove(t);r.classList.length===0&&r.removeAttribute("class")}}
/**
   * Toggles the given class on an element
   *
   * @see https://htmx.org/api/#toggleClass
   *
   * @param {Element|string} elt the element to toggle the class on
   * @param {string} clazz the class to toggle
   */function toggleClassOnElement(e,t){e=resolveTarget(e);e.classList.toggle(t)}
/**
   * Takes the given class from its siblings, so that among its siblings, only the given element will have the class.
   *
   * @see https://htmx.org/api/#takeClass
   *
   * @param {Node|string} elt the element that will take the class
   * @param {string} clazz the class to take
   */function takeClassForElement(e,t){e=resolveTarget(e);forEach(e.parentElement.children,(function(e){removeClassFromElement(e,t)}));addClassToElement(asElement(e),t)}
/**
   * Finds the closest matching element in the given elements parentage, inclusive of the element
   *
   * @see https://htmx.org/api/#closest
   *
   * @param {Element|string} elt the element to find the selector from
   * @param {string} selector the selector to find
   * @returns {Element|null}
   */function closest(e,t){e=asElement(resolveTarget(e));if(e&&e.closest)return e.closest(t);do{if(e==null||matches(e,t))return e}while(e=e&&asElement(parentElt(e)));return null}
/**
   * @param {string} str
   * @param {string} prefix
   * @returns {boolean}
   */function startsWith(e,t){return e.substring(0,t.length)===t}
/**
   * @param {string} str
   * @param {string} suffix
   * @returns {boolean}
   */function endsWith(e,t){return e.substring(e.length-t.length)===t}
/**
   * @param {string} selector
   * @returns {string}
   */function normalizeSelector(e){const t=e.trim();return startsWith(t,"<")&&endsWith(t,"/>")?t.substring(1,t.length-2):t}
/**
   * @param {Node|Element|Document|string} elt
   * @param {string} selector
   * @param {boolean=} global
   * @returns {(Node|Window)[]}
   */function querySelectorAllExt(e,t,n){e=resolveTarget(e);return t.indexOf("closest ")===0?[closest(asElement(e),normalizeSelector(t.substr(8)))]:t.indexOf("find ")===0?[find(asParentNode(e),normalizeSelector(t.substr(5)))]:t==="next"?[asElement(e).nextElementSibling]:t.indexOf("next ")===0?[scanForwardQuery(e,normalizeSelector(t.substr(5)),!!n)]:t==="previous"?[asElement(e).previousElementSibling]:t.indexOf("previous ")===0?[scanBackwardsQuery(e,normalizeSelector(t.substr(9)),!!n)]:t==="document"?[document]:t==="window"?[window]:t==="body"?[document.body]:t==="root"?[getRootNode(e,!!n)]:t==="host"?[/** @type ShadowRoot */e.getRootNode().host]:t.indexOf("global ")===0?querySelectorAllExt(e,t.slice(7),true):toArray(asParentNode(getRootNode(e,!!n)).querySelectorAll(normalizeSelector(t)))}
/**
   * @param {Node} start
   * @param {string} match
   * @param {boolean} global
   * @returns {Element}
   */var scanForwardQuery=function(e,t,n){const r=asParentNode(getRootNode(e,n)).querySelectorAll(t);for(let t=0;t<r.length;t++){const n=r[t];if(n.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING)return n}};
/**
   * @param {Node} start
   * @param {string} match
   * @param {boolean} global
   * @returns {Element}
   */var scanBackwardsQuery=function(e,t,n){const r=asParentNode(getRootNode(e,n)).querySelectorAll(t);for(let t=r.length-1;t>=0;t--){const n=r[t];if(n.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_FOLLOWING)return n}};
/**
   * @param {Node|string} eltOrSelector
   * @param {string=} selector
   * @returns {Node|Window}
   */function querySelectorExt(e,t){return typeof e!=="string"?querySelectorAllExt(e,t)[0]:querySelectorAllExt(getDocument().body,e)[0]}
/**
   * @template {EventTarget} T
   * @param {T|string} eltOrSelector
   * @param {T} [context]
   * @returns {Element|T|null}
   */function resolveTarget(e,t){return typeof e==="string"?find(asParentNode(t)||document,e):e}
/**
   * @typedef {keyof HTMLElementEventMap|string} AnyEventName
   */
/**
   * @typedef {Object} EventArgs
   * @property {EventTarget} target
   * @property {AnyEventName} event
   * @property {EventListener} listener
   * @property {Object|boolean} options
   */
/**
   * @param {EventTarget|AnyEventName} arg1
   * @param {AnyEventName|EventListener} arg2
   * @param {EventListener|Object|boolean} [arg3]
   * @param {Object|boolean} [arg4]
   * @returns {EventArgs}
   */function processEventArgs(e,t,n,r){return isFunction(t)?{target:getDocument().body,event:asString(e),listener:t,options:n}:{target:resolveTarget(e),event:asString(t),listener:n,options:r}}
/**
   * Adds an event listener to an element
   *
   * @see https://htmx.org/api/#on
   *
   * @param {EventTarget|string} arg1 the element to add the listener to | the event name to add the listener for
   * @param {string|EventListener} arg2 the event name to add the listener for | the listener to add
   * @param {EventListener|Object|boolean} [arg3] the listener to add | options to add
   * @param {Object|boolean} [arg4] options to add
   * @returns {EventListener}
   */function addEventListenerImpl(e,t,n,r){ready((function(){const o=processEventArgs(e,t,n,r);o.target.addEventListener(o.event,o.listener,o.options)}));const o=isFunction(t);return o?t:n}
/**
   * Removes an event listener from an element
   *
   * @see https://htmx.org/api/#off
   *
   * @param {EventTarget|string} arg1 the element to remove the listener from | the event name to remove the listener from
   * @param {string|EventListener} arg2 the event name to remove the listener from | the listener to remove
   * @param {EventListener} [arg3] the listener to remove
   * @returns {EventListener}
   */function removeEventListenerImpl(e,t,n){ready((function(){const r=processEventArgs(e,t,n);r.target.removeEventListener(r.event,r.listener)}));return isFunction(t)?t:n}const DUMMY_ELT=getDocument().createElement("output");
/**
   * @param {Element} elt
   * @param {string} attrName
   * @returns {(Node|Window)[]}
   */function findAttributeTargets(e,t){const n=getClosestAttributeValue(e,t);if(n){if(n==="this")return[findThisElement(e,t)];{const r=querySelectorAllExt(e,n);if(r.length===0){logError('The selector "'+n+'" on '+t+" returned no matches!");return[DUMMY_ELT]}return r}}}
/**
   * @param {Element} elt
   * @param {string} attribute
   * @returns {Element|null}
   */function findThisElement(e,t){return asElement(getClosestMatch(e,(function(e){return getAttributeValue(asElement(e),t)!=null})))}
/**
   * @param {Element} elt
   * @returns {Node|Window|null}
   */function getTarget(e){const t=getClosestAttributeValue(e,"hx-target");if(t)return t==="this"?findThisElement(e,"hx-target"):querySelectorExt(e,t);{const t=getInternalData(e);return t.boosted?getDocument().body:e}}
/**
   * @param {string} name
   * @returns {boolean}
   */function shouldSettleAttribute(e){const t=htmx.config.attributesToSettle;for(let n=0;n<t.length;n++)if(e===t[n])return true;return false}
/**
   * @param {Element} mergeTo
   * @param {Element} mergeFrom
   */function cloneAttributes(e,t){forEach(e.attributes,(function(n){!t.hasAttribute(n.name)&&shouldSettleAttribute(n.name)&&e.removeAttribute(n.name)}));forEach(t.attributes,(function(t){shouldSettleAttribute(t.name)&&e.setAttribute(t.name,t.value)}))}
/**
   * @param {HtmxSwapStyle} swapStyle
   * @param {Element} target
   * @returns {boolean}
   */function isInlineSwap(e,t){const n=getExtensions(t);for(let t=0;t<n.length;t++){const r=n[t];try{if(r.isInlineSwap(e))return true}catch(e){logError(e)}}return e==="outerHTML"}
/**
   * @param {string} oobValue
   * @param {Element} oobElement
   * @param {HtmxSettleInfo} settleInfo
   * @param {Node|Document} [rootNode]
   * @returns
   */function oobSwap(e,t,n,r){r=r||getDocument();let o="#"+getRawAttribute(t,"id");
/** @type HtmxSwapStyle */let s="outerHTML";if(e==="true");else if(e.indexOf(":")>0){s=e.substr(0,e.indexOf(":"));o=e.substr(e.indexOf(":")+1,e.length)}else s=e;t.removeAttribute("hx-swap-oob");t.removeAttribute("data-hx-swap-oob");const a=querySelectorAllExt(r,o,false);if(a){forEach(a,(function(e){let r;const o=t.cloneNode(true);r=getDocument().createDocumentFragment();r.appendChild(o);isInlineSwap(s,e)||(r=asParentNode(o));const a={shouldSwap:true,target:e,fragment:r};if(triggerEvent(e,"htmx:oobBeforeSwap",a)){e=a.target;if(a.shouldSwap){handlePreservedElements(r);swapWithStyle(s,e,e,r,n);restorePreservedElements()}forEach(n.elts,(function(e){triggerEvent(e,"htmx:oobAfterSwap",a)}))}}));t.parentNode.removeChild(t)}else{t.parentNode.removeChild(t);triggerErrorEvent(getDocument().body,"htmx:oobErrorNoTarget",{content:t})}return e}function restorePreservedElements(){const e=find("#--htmx-preserve-pantry--");if(e){for(const t of[...e.children]){const e=find("#"+t.id);e.parentNode.moveBefore(t,e);e.remove()}e.remove()}}
/**
   * @param {DocumentFragment|ParentNode} fragment
   */function handlePreservedElements(e){forEach(findAll(e,"[hx-preserve], [data-hx-preserve]"),(function(e){const t=getAttributeValue(e,"id");const n=getDocument().getElementById(t);if(n!=null)if(e.moveBefore){let e=find("#--htmx-preserve-pantry--");if(e==null){getDocument().body.insertAdjacentHTML("afterend","<div id='--htmx-preserve-pantry--'></div>");e=find("#--htmx-preserve-pantry--")}e.moveBefore(n,null)}else e.parentNode.replaceChild(n,e)}))}
/**
   * @param {Node} parentNode
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */function handleAttributes(e,t,n){forEach(t.querySelectorAll("[id]"),(function(t){const r=getRawAttribute(t,"id");if(r&&r.length>0){const o=r.replace("'","\\'");const s=t.tagName.replace(":","\\:");const a=asParentNode(e);const i=a&&a.querySelector(s+"[id='"+o+"']");if(i&&i!==a){const e=t.cloneNode();cloneAttributes(t,i);n.tasks.push((function(){cloneAttributes(t,e)}))}}}))}
/**
   * @param {Node} child
   * @returns {HtmxSettleTask}
   */function makeAjaxLoadTask(e){return function(){removeClassFromElement(e,htmx.config.addedClass);processNode(asElement(e));processFocus(asParentNode(e));triggerEvent(e,"htmx:load")}}
/**
   * @param {ParentNode} child
   */function processFocus(e){const t="[autofocus]";const n=asHtmlElement(matches(e,t)?e:e.querySelector(t));n!=null&&n.focus()}
/**
   * @param {Node} parentNode
   * @param {Node} insertBefore
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */function insertNodesBefore(e,t,n,r){handleAttributes(e,n,r);while(n.childNodes.length>0){const o=n.firstChild;addClassToElement(asElement(o),htmx.config.addedClass);e.insertBefore(o,t);o.nodeType!==Node.TEXT_NODE&&o.nodeType!==Node.COMMENT_NODE&&r.tasks.push(makeAjaxLoadTask(o))}}
/**
   * based on https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0,
   * derived from Java's string hashcode implementation
   * @param {string} string
   * @param {number} hash
   * @returns {number}
   */function stringHash(e,t){let n=0;while(n<e.length)t=(t<<5)-t+e.charCodeAt(n++)|0;return t}
/**
   * @param {Element} elt
   * @returns {number}
   */function attributeHash(e){let t=0;if(e.attributes)for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n];if(r.value){t=stringHash(r.name,t);t=stringHash(r.value,t)}}return t}
/**
   * @param {EventTarget} elt
   */function deInitOnHandlers(e){const t=getInternalData(e);if(t.onHandlers){for(let n=0;n<t.onHandlers.length;n++){const r=t.onHandlers[n];removeEventListenerImpl(e,r.event,r.listener)}delete t.onHandlers}}
/**
   * @param {Node} element
   */function deInitNode(e){const t=getInternalData(e);t.timeout&&clearTimeout(t.timeout);t.listenerInfos&&forEach(t.listenerInfos,(function(e){e.on&&removeEventListenerImpl(e.on,e.trigger,e.listener)}));deInitOnHandlers(e);forEach(Object.keys(t),(function(e){delete t[e]}))}
/**
   * @param {Node} element
   */function cleanUpElement(e){triggerEvent(e,"htmx:beforeCleanupElement");deInitNode(e);e.children&&forEach(e.children,(function(e){cleanUpElement(e)}))}
/**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */function swapOuterHTML(e,t,n){if(e instanceof Element&&e.tagName==="BODY")return swapInnerHTML(e,t,n);
/** @type {Node} */let r;const o=e.previousSibling;const s=parentElt(e);if(s){insertNodesBefore(s,e,t,n);r=o==null?s.firstChild:o.nextSibling;n.elts=n.elts.filter((function(t){return t!==e}));while(r&&r!==e){r instanceof Element&&n.elts.push(r);r=r.nextSibling}cleanUpElement(e);e instanceof Element?e.remove():e.parentNode.removeChild(e)}}
/**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */function swapAfterBegin(e,t,n){return insertNodesBefore(e,e.firstChild,t,n)}
/**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */function swapBeforeBegin(e,t,n){return insertNodesBefore(parentElt(e),e,t,n)}
/**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */function swapBeforeEnd(e,t,n){return insertNodesBefore(e,null,t,n)}
/**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */function swapAfterEnd(e,t,n){return insertNodesBefore(parentElt(e),e.nextSibling,t,n)}
/**
   * @param {Node} target
   */function swapDelete(e){cleanUpElement(e);const t=parentElt(e);if(t)return t.removeChild(e)}
/**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */function swapInnerHTML(e,t,n){const r=e.firstChild;insertNodesBefore(e,r,t,n);if(r){while(r.nextSibling){cleanUpElement(r.nextSibling);e.removeChild(r.nextSibling)}cleanUpElement(r);e.removeChild(r)}}
/**
   * @param {HtmxSwapStyle} swapStyle
   * @param {Element} elt
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */function swapWithStyle(e,t,n,r,o){switch(e){case"none":return;case"outerHTML":swapOuterHTML(n,r,o);return;case"afterbegin":swapAfterBegin(n,r,o);return;case"beforebegin":swapBeforeBegin(n,r,o);return;case"beforeend":swapBeforeEnd(n,r,o);return;case"afterend":swapAfterEnd(n,r,o);return;case"delete":swapDelete(n);return;default:var s=getExtensions(t);for(let t=0;t<s.length;t++){const a=s[t];try{const t=a.handleSwap(e,n,r,o);if(t){if(Array.isArray(t))for(let e=0;e<t.length;e++){const n=t[e];n.nodeType!==Node.TEXT_NODE&&n.nodeType!==Node.COMMENT_NODE&&o.tasks.push(makeAjaxLoadTask(n))}return}}catch(e){logError(e)}}e==="innerHTML"?swapInnerHTML(n,r,o):swapWithStyle(htmx.config.defaultSwapStyle,t,n,r,o)}}
/**
   * @param {DocumentFragment} fragment
   * @param {HtmxSettleInfo} settleInfo
   * @param {Node|Document} [rootNode]
   */function findAndSwapOobElements(e,t,n){var r=findAll(e,"[hx-swap-oob], [data-hx-swap-oob]");forEach(r,(function(e){if(htmx.config.allowNestedOobSwaps||e.parentElement===null){const r=getAttributeValue(e,"hx-swap-oob");r!=null&&oobSwap(r,e,t,n)}else{e.removeAttribute("hx-swap-oob");e.removeAttribute("data-hx-swap-oob")}}));return r.length>0}
/**
   * Implements complete swapping pipeline, including: focus and selection preservation,
   * title updates, scroll, OOB swapping, normal swapping and settling
   * @param {string|Element} target
   * @param {string} content
   * @param {HtmxSwapSpecification} swapSpec
   * @param {SwapOptions} [swapOptions]
   */function swap(e,t,n,r){r||(r={});e=resolveTarget(e);const o=r.contextElement?getRootNode(r.contextElement,false):getDocument();const s=document.activeElement;let a={};try{a={elt:s,start:s?s.selectionStart:null,end:s?s.selectionEnd:null}}catch(e){}const i=makeSettleInfo(e);if(n.swapStyle==="textContent")e.textContent=t;else{let s=makeFragment(t);i.title=s.title;if(r.selectOOB){const e=r.selectOOB.split(",");for(let t=0;t<e.length;t++){const n=e[t].split(":",2);let r=n[0].trim();r.indexOf("#")===0&&(r=r.substring(1));const a=n[1]||"true";const l=s.querySelector("#"+r);l&&oobSwap(a,l,i,o)}}findAndSwapOobElements(s,i,o);forEach(findAll(s,"template"),(/** @param {HTMLTemplateElement} template */function(e){findAndSwapOobElements(e.content,i,o)&&e.remove()}));if(r.select){const e=getDocument().createDocumentFragment();forEach(s.querySelectorAll(r.select),(function(t){e.appendChild(t)}));s=e}handlePreservedElements(s);swapWithStyle(n.swapStyle,r.contextElement,e,s,i);restorePreservedElements()}if(a.elt&&!bodyContains(a.elt)&&getRawAttribute(a.elt,"id")){const e=document.getElementById(getRawAttribute(a.elt,"id"));const t={preventScroll:n.focusScroll!==void 0?!n.focusScroll:!htmx.config.defaultFocusScroll};if(e){if(a.start&&e.setSelectionRange)try{e.setSelectionRange(a.start,a.end)}catch(e){}e.focus(t)}}e.classList.remove(htmx.config.swappingClass);forEach(i.elts,(function(e){e.classList&&e.classList.add(htmx.config.settlingClass);triggerEvent(e,"htmx:afterSwap",r.eventInfo)}));r.afterSwapCallback&&r.afterSwapCallback();n.ignoreTitle||handleTitle(i.title);const doSettle=function(){forEach(i.tasks,(function(e){e.call()}));forEach(i.elts,(function(e){e.classList&&e.classList.remove(htmx.config.settlingClass);triggerEvent(e,"htmx:afterSettle",r.eventInfo)}));if(r.anchor){const e=asElement(resolveTarget("#"+r.anchor));e&&e.scrollIntoView({block:"start",behavior:"auto"})}updateScrollState(i.elts,n);r.afterSettleCallback&&r.afterSettleCallback()};n.settleDelay>0?getWindow().setTimeout(doSettle,n.settleDelay):doSettle()}
/**
   * @param {XMLHttpRequest} xhr
   * @param {string} header
   * @param {EventTarget} elt
   */function handleTriggerHeader(e,t,n){const r=e.getResponseHeader(t);if(r.indexOf("{")===0){const e=parseJSON(r);for(const t in e)if(e.hasOwnProperty(t)){let r=e[t];isRawObject(r)?n=r.target!==void 0?r.target:n:r={value:r};triggerEvent(n,t,r)}}else{const e=r.split(",");for(let t=0;t<e.length;t++)triggerEvent(n,e[t].trim(),[])}}const WHITESPACE=/\s/;const WHITESPACE_OR_COMMA=/[\s,]/;const SYMBOL_START=/[_$a-zA-Z]/;const SYMBOL_CONT=/[_$a-zA-Z0-9]/;const STRINGISH_START=['"',"'","/"];const NOT_WHITESPACE=/[^\s]/;const COMBINED_SELECTOR_START=/[{(]/;const COMBINED_SELECTOR_END=/[})]/;
/**
   * @param {string} str
   * @returns {string[]}
   */function tokenizeString(e){
/** @type string[] */
const t=[];let n=0;while(n<e.length){if(SYMBOL_START.exec(e.charAt(n))){var r=n;while(SYMBOL_CONT.exec(e.charAt(n+1)))n++;t.push(e.substr(r,n-r+1))}else if(STRINGISH_START.indexOf(e.charAt(n))!==-1){const o=e.charAt(n);r=n;n++;while(n<e.length&&e.charAt(n)!==o){e.charAt(n)==="\\"&&n++;n++}t.push(e.substr(r,n-r+1))}else{const r=e.charAt(n);t.push(r)}n++}return t}
/**
   * @param {string} token
   * @param {string|null} last
   * @param {string} paramName
   * @returns {boolean}
   */function isPossibleRelativeReference(e,t,n){return SYMBOL_START.exec(e.charAt(0))&&e!=="true"&&e!=="false"&&e!=="this"&&e!==n&&t!=="."}
/**
   * @param {EventTarget|string} elt
   * @param {string[]} tokens
   * @param {string} paramName
   * @returns {ConditionalFunction|null}
   */function maybeGenerateConditional(e,t,n){if(t[0]==="["){t.shift();let r=1;let o=" return (function("+n+"){ return (";let s=null;while(t.length>0){const a=t[0];if(a==="]"){r--;if(r===0){s===null&&(o+="true");t.shift();o+=")})";try{const t=maybeEval(e,(function(){return Function(o)()}),(function(){return true}));t.source=o;return t}catch(e){triggerErrorEvent(getDocument().body,"htmx:syntax:error",{error:e,source:o});return null}}}else a==="["&&r++;isPossibleRelativeReference(a,s,n)?o+="(("+n+"."+a+") ? ("+n+"."+a+") : (window."+a+"))":o+=a;s=t.shift()}}}
/**
   * @param {string[]} tokens
   * @param {RegExp} match
   * @returns {string}
   */function consumeUntil(e,t){let n="";while(e.length>0&&!t.test(e[0]))n+=e.shift();return n}
/**
   * @param {string[]} tokens
   * @returns {string}
   */function consumeCSSSelector(e){let t;if(e.length>0&&COMBINED_SELECTOR_START.test(e[0])){e.shift();t=consumeUntil(e,COMBINED_SELECTOR_END).trim();e.shift()}else t=consumeUntil(e,WHITESPACE_OR_COMMA);return t}const INPUT_SELECTOR="input, textarea, select";
/**
   * @param {Element} elt
   * @param {string} explicitTrigger
   * @param {Object} cache for trigger specs
   * @returns {HtmxTriggerSpecification[]}
   */function parseAndCacheTrigger(e,t,n){
/** @type HtmxTriggerSpecification[] */
const r=[];const o=tokenizeString(t);do{consumeUntil(o,NOT_WHITESPACE);const t=o.length;const n=consumeUntil(o,/[,\[\s]/);if(n!=="")if(n==="every"){
/** @type HtmxTriggerSpecification */
const t={trigger:"every"};consumeUntil(o,NOT_WHITESPACE);t.pollInterval=parseInterval(consumeUntil(o,/[,\[\s]/));consumeUntil(o,NOT_WHITESPACE);var s=maybeGenerateConditional(e,o,"event");s&&(t.eventFilter=s);r.push(t)}else{
/** @type HtmxTriggerSpecification */
const t={trigger:n};s=maybeGenerateConditional(e,o,"event");s&&(t.eventFilter=s);consumeUntil(o,NOT_WHITESPACE);while(o.length>0&&o[0]!==","){const n=o.shift();if(n==="changed")t.changed=true;else if(n==="once")t.once=true;else if(n==="consume")t.consume=true;else if(n==="delay"&&o[0]===":"){o.shift();t.delay=parseInterval(consumeUntil(o,WHITESPACE_OR_COMMA))}else if(n==="from"&&o[0]===":"){o.shift();if(COMBINED_SELECTOR_START.test(o[0]))var a=consumeCSSSelector(o);else{a=consumeUntil(o,WHITESPACE_OR_COMMA);if(a==="closest"||a==="find"||a==="next"||a==="previous"){o.shift();const e=consumeCSSSelector(o);e.length>0&&(a+=" "+e)}}t.from=a}else if(n==="target"&&o[0]===":"){o.shift();t.target=consumeCSSSelector(o)}else if(n==="throttle"&&o[0]===":"){o.shift();t.throttle=parseInterval(consumeUntil(o,WHITESPACE_OR_COMMA))}else if(n==="queue"&&o[0]===":"){o.shift();t.queue=consumeUntil(o,WHITESPACE_OR_COMMA)}else if(n==="root"&&o[0]===":"){o.shift();t[n]=consumeCSSSelector(o)}else if(n==="threshold"&&o[0]===":"){o.shift();t[n]=consumeUntil(o,WHITESPACE_OR_COMMA)}else triggerErrorEvent(e,"htmx:syntax:error",{token:o.shift()});consumeUntil(o,NOT_WHITESPACE)}r.push(t)}o.length===t&&triggerErrorEvent(e,"htmx:syntax:error",{token:o.shift()});consumeUntil(o,NOT_WHITESPACE)}while(o[0]===","&&o.shift());n&&(n[t]=r);return r}
/**
   * @param {Element} elt
   * @returns {HtmxTriggerSpecification[]}
   */function getTriggerSpecs(e){const t=getAttributeValue(e,"hx-trigger");let n=[];if(t){const r=htmx.config.triggerSpecsCache;n=r&&r[t]||parseAndCacheTrigger(e,t,r)}return n.length>0?n:matches(e,"form")?[{trigger:"submit"}]:matches(e,'input[type="button"], input[type="submit"]')?[{trigger:"click"}]:matches(e,INPUT_SELECTOR)?[{trigger:"change"}]:[{trigger:"click"}]}
/**
   * @param {Element} elt
   */function cancelPolling(e){getInternalData(e).cancelled=true}
/**
   * @param {Element} elt
   * @param {TriggerHandler} handler
   * @param {HtmxTriggerSpecification} spec
   */function processPolling(e,t,n){const r=getInternalData(e);r.timeout=getWindow().setTimeout((function(){if(bodyContains(e)&&r.cancelled!==true){maybeFilterEvent(n,e,makeEvent("hx:poll:trigger",{triggerSpec:n,target:e}))||t(e);processPolling(e,t,n)}}),n.pollInterval)}
/**
   * @param {HTMLAnchorElement} elt
   * @returns {boolean}
   */function isLocalLink(e){return location.hostname===e.hostname&&getRawAttribute(e,"href")&&getRawAttribute(e,"href").indexOf("#")!==0}
/**
   * @param {Element} elt
   */function eltIsDisabled(e){return closest(e,htmx.config.disableSelector)}
/**
   * @param {Element} elt
   * @param {HtmxNodeInternalData} nodeData
   * @param {HtmxTriggerSpecification[]} triggerSpecs
   */function boostElement(e,t,n){if(e instanceof HTMLAnchorElement&&isLocalLink(e)&&(e.target===""||e.target==="_self")||e.tagName==="FORM"&&String(getRawAttribute(e,"method")).toLowerCase()!=="dialog"){t.boosted=true;let r,o;if(e.tagName==="A"){r=/** @type HttpVerb */"get";o=getRawAttribute(e,"href")}else{const t=getRawAttribute(e,"method");r=/** @type HttpVerb */t?t.toLowerCase():"get";o=getRawAttribute(e,"action");r==="get"&&o.includes("?")&&(o=o.replace(/\?[^#]+/,""))}n.forEach((function(n){addEventListener(e,(function(e,t){const n=asElement(e);eltIsDisabled(n)?cleanUpElement(n):issueAjaxRequest(r,o,n,t)}),t,n,true)}))}}
/**
   * @param {Event} evt
   * @param {Node} node
   * @returns {boolean}
   */function shouldCancel(e,t){const n=asElement(t);if(!n)return false;if(e.type==="submit"||e.type==="click"){if(n.tagName==="FORM")return true;if(matches(n,'input[type="submit"], button')&&closest(n,"form")!==null)return true;if(n instanceof HTMLAnchorElement&&n.href&&(n.getAttribute("href")==="#"||n.getAttribute("href").indexOf("#")!==0))return true}return false}
/**
   * @param {Node} elt
   * @param {Event|MouseEvent|KeyboardEvent|TouchEvent} evt
   * @returns {boolean}
   */function ignoreBoostedAnchorCtrlClick(e,t){return getInternalData(e).boosted&&e instanceof HTMLAnchorElement&&t.type==="click"&&(t.ctrlKey||t.metaKey)}
/**
   * @param {HtmxTriggerSpecification} triggerSpec
   * @param {Node} elt
   * @param {Event} evt
   * @returns {boolean}
   */function maybeFilterEvent(e,t,n){const r=e.eventFilter;if(r)try{return r.call(t,n)!==true}catch(e){const t=r.source;triggerErrorEvent(getDocument().body,"htmx:eventFilter:error",{error:e,source:t});return true}return false}
/**
   * @param {Node} elt
   * @param {TriggerHandler} handler
   * @param {HtmxNodeInternalData} nodeData
   * @param {HtmxTriggerSpecification} triggerSpec
   * @param {boolean} [explicitCancel]
   */function addEventListener(e,t,n,r,o){const s=getInternalData(e);
/** @type {(Node|Window)[]} */let a;a=r.from?querySelectorAllExt(e,r.from):[e];if(r.changed){"lastValue"in s||(s.lastValue=new WeakMap);a.forEach((function(e){s.lastValue.has(r)||s.lastValue.set(r,new WeakMap);s.lastValue.get(r).set(e,e.value)}))}forEach(a,(function(a){
/** @type EventListener */
const eventListener=function(n){if(!bodyContains(e)){a.removeEventListener(r.trigger,eventListener);return}if(ignoreBoostedAnchorCtrlClick(e,n))return;(o||shouldCancel(n,e))&&n.preventDefault();if(maybeFilterEvent(r,e,n))return;const i=getInternalData(n);i.triggerSpec=r;i.handledFor==null&&(i.handledFor=[]);if(i.handledFor.indexOf(e)<0){i.handledFor.push(e);r.consume&&n.stopPropagation();if(r.target&&n.target&&!matches(asElement(n.target),r.target))return;if(r.once){if(s.triggeredOnce)return;s.triggeredOnce=true}if(r.changed){const e=event.target;const t=e.value;const n=s.lastValue.get(r);if(n.has(e)&&n.get(e)===t)return;n.set(e,t)}s.delayed&&clearTimeout(s.delayed);if(s.throttle)return;if(r.throttle>0){if(!s.throttle){triggerEvent(e,"htmx:trigger");t(e,n);s.throttle=getWindow().setTimeout((function(){s.throttle=null}),r.throttle)}}else if(r.delay>0)s.delayed=getWindow().setTimeout((function(){triggerEvent(e,"htmx:trigger");t(e,n)}),r.delay);else{triggerEvent(e,"htmx:trigger");t(e,n)}}};n.listenerInfos==null&&(n.listenerInfos=[]);n.listenerInfos.push({trigger:r.trigger,listener:eventListener,on:a});a.addEventListener(r.trigger,eventListener)}))}let windowIsScrolling=false;let scrollHandler=null;function initScrollHandler(){if(!scrollHandler){scrollHandler=function(){windowIsScrolling=true};window.addEventListener("scroll",scrollHandler);window.addEventListener("resize",scrollHandler);setInterval((function(){if(windowIsScrolling){windowIsScrolling=false;forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"),(function(e){maybeReveal(e)}))}}),200)}}
/**
   * @param {Element} elt
   */function maybeReveal(e){if(!hasAttribute(e,"data-hx-revealed")&&isScrolledIntoView(e)){e.setAttribute("data-hx-revealed","true");const t=getInternalData(e);t.initHash?triggerEvent(e,"revealed"):e.addEventListener("htmx:afterProcessNode",(function(){triggerEvent(e,"revealed")}),{once:true})}}
/**
   * @param {Element} elt
   * @param {TriggerHandler} handler
   * @param {HtmxNodeInternalData} nodeData
   * @param {number} delay
   */function loadImmediately(e,t,n,r){const load=function(){if(!n.loaded){n.loaded=true;t(e)}};r>0?getWindow().setTimeout(load,r):load()}
/**
   * @param {Element} elt
   * @param {HtmxNodeInternalData} nodeData
   * @param {HtmxTriggerSpecification[]} triggerSpecs
   * @returns {boolean}
   */function processVerbs(e,t,n){let r=false;forEach(VERBS,(function(o){if(hasAttribute(e,"hx-"+o)){const s=getAttributeValue(e,"hx-"+o);r=true;t.path=s;t.verb=o;n.forEach((function(n){addTriggerHandler(e,n,t,(function(e,t){const n=asElement(e);closest(n,htmx.config.disableSelector)?cleanUpElement(n):issueAjaxRequest(o,s,n,t)}))}))}}));return r}
/**
   * @callback TriggerHandler
   * @param {Node} elt
   * @param {Event} [evt]
   */
/**
   * @param {Node} elt
   * @param {HtmxTriggerSpecification} triggerSpec
   * @param {HtmxNodeInternalData} nodeData
   * @param {TriggerHandler} handler
   */function addTriggerHandler(e,t,n,r){if(t.trigger==="revealed"){initScrollHandler();addEventListener(e,r,n,t);maybeReveal(asElement(e))}else if(t.trigger==="intersect"){const o={};t.root&&(o.root=querySelectorExt(e,t.root));t.threshold&&(o.threshold=parseFloat(t.threshold));const s=new IntersectionObserver((function(t){for(let n=0;n<t.length;n++){const r=t[n];if(r.isIntersecting){triggerEvent(e,"intersect");break}}}),o);s.observe(asElement(e));addEventListener(asElement(e),r,n,t)}else if(t.trigger==="load")maybeFilterEvent(t,e,makeEvent("load",{elt:e}))||loadImmediately(asElement(e),r,n,t.delay);else if(t.pollInterval>0){n.polling=true;processPolling(asElement(e),r,t)}else addEventListener(e,r,n,t)}
/**
   * @param {Node} node
   * @returns {boolean}
   */function shouldProcessHxOn(e){const t=asElement(e);if(!t)return false;const n=t.attributes;for(let e=0;e<n.length;e++){const t=n[e].name;if(startsWith(t,"hx-on:")||startsWith(t,"data-hx-on:")||startsWith(t,"hx-on-")||startsWith(t,"data-hx-on-"))return true}return false}
/**
   * @param {Node} elt
   * @returns {Element[]}
   */const HX_ON_QUERY=(new XPathEvaluator).createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');function processHXOnRoot(e,t){shouldProcessHxOn(e)&&t.push(asElement(e));const n=HX_ON_QUERY.evaluate(e);let r=null;while(r=n.iterateNext())t.push(asElement(r))}function findHxOnWildcardElements(e){
/** @type {Element[]} */
const t=[];if(e instanceof DocumentFragment)for(const n of e.childNodes)processHXOnRoot(n,t);else processHXOnRoot(e,t);return t}
/**
   * @param {Element} elt
   * @returns {NodeListOf<Element>|[]}
   */function findElementsToProcess(e){if(e.querySelectorAll){const n=", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";const r=[];for(const e in extensions){const n=extensions[e];if(n.getSelectors){var t=n.getSelectors();t&&r.push(t)}}const o=e.querySelectorAll(VERB_SELECTOR+n+", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]"+r.flat().map((e=>", "+e)).join(""));return o}return[]}
/**
   * Handle submit buttons/inputs that have the form attribute set
   * see https://developer.mozilla.org/docs/Web/HTML/Element/button
   * @param {Event} evt
   */function maybeSetLastButtonClicked(e){const t=/** @type {HTMLButtonElement|HTMLInputElement} */closest(asElement(e.target),"button, input[type='submit']");const n=getRelatedFormData(e);n&&(n.lastButtonClicked=t)}
/**
   * @param {Event} evt
   */function maybeUnsetLastButtonClicked(e){const t=getRelatedFormData(e);t&&(t.lastButtonClicked=null)}
/**
   * @param {Event} evt
   * @returns {HtmxNodeInternalData|undefined}
   */function getRelatedFormData(e){const t=closest(asElement(e.target),"button, input[type='submit']");if(!t)return;const n=resolveTarget("#"+getRawAttribute(t,"form"),t.getRootNode())||closest(t,"form");return n?getInternalData(n):void 0}
/**
   * @param {EventTarget} elt
   */function initButtonTracking(e){e.addEventListener("click",maybeSetLastButtonClicked);e.addEventListener("focusin",maybeSetLastButtonClicked);e.addEventListener("focusout",maybeUnsetLastButtonClicked)}
/**
   * @param {Element} elt
   * @param {string} eventName
   * @param {string} code
   */function addHxOnEventHandler(e,t,n){const r=getInternalData(e);Array.isArray(r.onHandlers)||(r.onHandlers=[]);let o;
/** @type EventListener */const listener=function(t){maybeEval(e,(function(){if(!eltIsDisabled(e)){o||(o=new Function("event",n));o.call(e,t)}}))};e.addEventListener(t,listener);r.onHandlers.push({event:t,listener:listener})}
/**
   * @param {Element} elt
   */function processHxOnWildcard(e){deInitOnHandlers(e);for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;const r=e.attributes[t].value;if(startsWith(n,"hx-on")||startsWith(n,"data-hx-on")){const t=n.indexOf("-on")+3;const o=n.slice(t,t+1);if(o==="-"||o===":"){let o=n.slice(t+1);startsWith(o,":")?o="htmx"+o:startsWith(o,"-")?o="htmx:"+o.slice(1):startsWith(o,"htmx-")&&(o="htmx:"+o.slice(5));addHxOnEventHandler(e,o,r)}}}}
/**
   * @param {Element|HTMLInputElement} elt
   */function initNode(e){if(closest(e,htmx.config.disableSelector)){cleanUpElement(e);return}const t=getInternalData(e);if(t.initHash!==attributeHash(e)){deInitNode(e);t.initHash=attributeHash(e);triggerEvent(e,"htmx:beforeProcessNode");const n=getTriggerSpecs(e);const r=processVerbs(e,t,n);r||(getClosestAttributeValue(e,"hx-boost")==="true"?boostElement(e,t,n):hasAttribute(e,"hx-trigger")&&n.forEach((function(n){addTriggerHandler(e,n,t,(function(){}))})));(e.tagName==="FORM"||getRawAttribute(e,"type")==="submit"&&hasAttribute(e,"form"))&&initButtonTracking(e);triggerEvent(e,"htmx:afterProcessNode")}}
/**
   * Processes new content, enabling htmx behavior. This can be useful if you have content that is added to the DOM outside of the normal htmx request cycle but still want htmx attributes to work.
   *
   * @see https://htmx.org/api/#process
   *
   * @param {Element|string} elt element to process
   */function processNode(e){e=resolveTarget(e);if(closest(e,htmx.config.disableSelector))cleanUpElement(e);else{initNode(e);forEach(findElementsToProcess(e),(function(e){initNode(e)}));forEach(findHxOnWildcardElements(e),processHxOnWildcard)}}
/**
   * @param {string} str
   * @returns {string}
   */function kebabEventName(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}
/**
   * @param {string} eventName
   * @param {any} detail
   * @returns {CustomEvent}
   */function makeEvent(e,t){let n;if(window.CustomEvent&&typeof window.CustomEvent==="function")n=new CustomEvent(e,{bubbles:true,cancelable:true,composed:true,detail:t});else{n=getDocument().createEvent("CustomEvent");n.initCustomEvent(e,true,true,t)}return n}
/**
   * @param {EventTarget|string} elt
   * @param {string} eventName
   * @param {any=} detail
   */function triggerErrorEvent(e,t,n){triggerEvent(e,t,mergeObjects({error:t},n))}
/**
   * @param {string} eventName
   * @returns {boolean}
   */function ignoreEventForLogging(e){return e==="htmx:afterProcessNode"}
/**
   * `withExtensions` locates all active extensions for a provided element, then
   * executes the provided function using each of the active extensions.  It should
   * be called internally at every extendable execution point in htmx.
   *
   * @param {Element} elt
   * @param {(extension:HtmxExtension) => void} toDo
   * @returns void
   */function withExtensions(e,t){forEach(getExtensions(e),(function(e){try{t(e)}catch(e){logError(e)}}))}function logError(e){console.error?console.error(e):console.log&&console.log("ERROR: ",e)}
/**
   * Triggers a given event on an element
   *
   * @see https://htmx.org/api/#trigger
   *
   * @param {EventTarget|string} elt the element to trigger the event on
   * @param {string} eventName the name of the event to trigger
   * @param {any=} detail details for the event
   * @returns {boolean}
   */function triggerEvent(e,t,n){e=resolveTarget(e);n==null&&(n={});n.elt=e;const r=makeEvent(t,n);htmx.logger&&!ignoreEventForLogging(t)&&htmx.logger(e,t,n);if(n.error){logError(n.error);triggerEvent(e,"htmx:error",{errorInfo:n})}let o=e.dispatchEvent(r);const s=kebabEventName(t);if(o&&s!==t){const t=makeEvent(s,r.detail);o=o&&e.dispatchEvent(t)}withExtensions(asElement(e),(function(e){o=o&&e.onEvent(t,r)!==false&&!r.defaultPrevented}));return o}let currentPathForHistory=location.pathname+location.search;
/**
   * @returns {Element}
   */function getHistoryElement(){const e=getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]");return e||getDocument().body}
/**
   * @param {string} url
   * @param {Element} rootElt
   */function saveToHistoryCache(e,t){if(!canAccessLocalStorage())return;const n=cleanInnerHtmlForHistory(t);const r=getDocument().title;const o=window.scrollY;if(htmx.config.historyCacheSize<=0){localStorage.removeItem("htmx-history-cache");return}e=normalizePath(e);const s=parseJSON(localStorage.getItem("htmx-history-cache"))||[];for(let t=0;t<s.length;t++)if(s[t].url===e){s.splice(t,1);break}
/** @type HtmxHistoryItem */const a={url:e,content:n,title:r,scroll:o};triggerEvent(getDocument().body,"htmx:historyItemCreated",{item:a,cache:s});s.push(a);while(s.length>htmx.config.historyCacheSize)s.shift();while(s.length>0)try{localStorage.setItem("htmx-history-cache",JSON.stringify(s));break}catch(e){triggerErrorEvent(getDocument().body,"htmx:historyCacheError",{cause:e,cache:s});s.shift()}}
/**
   * @typedef {Object} HtmxHistoryItem
   * @property {string} url
   * @property {string} content
   * @property {string} title
   * @property {number} scroll
   */
/**
   * @param {string} url
   * @returns {HtmxHistoryItem|null}
   */function getCachedHistory(e){if(!canAccessLocalStorage())return null;e=normalizePath(e);const t=parseJSON(localStorage.getItem("htmx-history-cache"))||[];for(let n=0;n<t.length;n++)if(t[n].url===e)return t[n];return null}
/**
   * @param {Element} elt
   * @returns {string}
   */function cleanInnerHtmlForHistory(e){const t=htmx.config.requestClass;const n=/** @type Element */e.cloneNode(true);forEach(findAll(n,"."+t),(function(e){removeClassFromElement(e,t)}));forEach(findAll(n,"[data-disabled-by-htmx]"),(function(e){e.removeAttribute("disabled")}));return n.innerHTML}function saveCurrentPageToHistory(){const e=getHistoryElement();const t=currentPathForHistory||location.pathname+location.search;let n;try{n=getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]')}catch(e){n=getDocument().querySelector('[hx-history="false"],[data-hx-history="false"]')}if(!n){triggerEvent(getDocument().body,"htmx:beforeHistorySave",{path:t,historyElt:e});saveToHistoryCache(t,e)}htmx.config.historyEnabled&&history.replaceState({htmx:true},getDocument().title,window.location.href)}
/**
   * @param {string} path
   */function pushUrlIntoHistory(e){if(htmx.config.getCacheBusterParam){e=e.replace(/org\.htmx\.cache-buster=[^&]*&?/,"");(endsWith(e,"&")||endsWith(e,"?"))&&(e=e.slice(0,-1))}htmx.config.historyEnabled&&history.pushState({htmx:true},"",e);currentPathForHistory=e}
/**
   * @param {string} path
   */function replaceUrlInHistory(e){htmx.config.historyEnabled&&history.replaceState({htmx:true},"",e);currentPathForHistory=e}
/**
   * @param {HtmxSettleTask[]} tasks
   */function settleImmediately(e){forEach(e,(function(e){e.call(void 0)}))}
/**
   * @param {string} path
   */function loadHistoryFromServer(e){const t=new XMLHttpRequest;const n={path:e,xhr:t};triggerEvent(getDocument().body,"htmx:historyCacheMiss",n);t.open("GET",e,true);t.setRequestHeader("HX-Request","true");t.setRequestHeader("HX-History-Restore-Request","true");t.setRequestHeader("HX-Current-URL",getDocument().location.href);t.onload=function(){if(this.status>=200&&this.status<400){triggerEvent(getDocument().body,"htmx:historyCacheMissLoad",n);const t=makeFragment(this.response);
/** @type ParentNode */const r=t.querySelector("[hx-history-elt],[data-hx-history-elt]")||t;const o=getHistoryElement();const s=makeSettleInfo(o);handleTitle(t.title);handlePreservedElements(t);swapInnerHTML(o,r,s);restorePreservedElements();settleImmediately(s.tasks);currentPathForHistory=e;triggerEvent(getDocument().body,"htmx:historyRestore",{path:e,cacheMiss:true,serverResponse:this.response})}else triggerErrorEvent(getDocument().body,"htmx:historyCacheMissLoadError",n)};t.send()}
/**
   * @param {string} [path]
   */function restoreHistory(e){saveCurrentPageToHistory();e=e||location.pathname+location.search;const t=getCachedHistory(e);if(t){const n=makeFragment(t.content);const r=getHistoryElement();const o=makeSettleInfo(r);handleTitle(t.title);handlePreservedElements(n);swapInnerHTML(r,n,o);restorePreservedElements();settleImmediately(o.tasks);getWindow().setTimeout((function(){window.scrollTo(0,t.scroll)}),0);currentPathForHistory=e;triggerEvent(getDocument().body,"htmx:historyRestore",{path:e,item:t})}else htmx.config.refreshOnHistoryMiss?window.location.reload(true):loadHistoryFromServer(e)}
/**
   * @param {Element} elt
   * @returns {Element[]}
   */function addRequestIndicatorClasses(e){let t=/** @type Element[] */findAttributeTargets(e,"hx-indicator");t==null&&(t=[e]);forEach(t,(function(e){const t=getInternalData(e);t.requestCount=(t.requestCount||0)+1;e.classList.add.call(e.classList,htmx.config.requestClass)}));return t}
/**
   * @param {Element} elt
   * @returns {Element[]}
   */function disableElements(e){let t=/** @type Element[] */findAttributeTargets(e,"hx-disabled-elt");t==null&&(t=[]);forEach(t,(function(e){const t=getInternalData(e);t.requestCount=(t.requestCount||0)+1;e.setAttribute("disabled","");e.setAttribute("data-disabled-by-htmx","")}));return t}
/**
   * @param {Element[]} indicators
   * @param {Element[]} disabled
   */function removeRequestIndicators(e,t){forEach(e.concat(t),(function(e){const t=getInternalData(e);t.requestCount=(t.requestCount||1)-1}));forEach(e,(function(e){const t=getInternalData(e);t.requestCount===0&&e.classList.remove.call(e.classList,htmx.config.requestClass)}));forEach(t,(function(e){const t=getInternalData(e);if(t.requestCount===0){e.removeAttribute("disabled");e.removeAttribute("data-disabled-by-htmx")}}))}
/**
   * @param {Element[]} processed
   * @param {Element} elt
   * @returns {boolean}
   */function haveSeenNode(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(r.isSameNode(t))return true}return false}
/**
   * @param {Element} element
   * @return {boolean}
   */function shouldInclude(e){const t=/** @type {HTMLInputElement} */e;return t.name!==""&&t.name!=null&&!t.disabled&&!closest(t,"fieldset[disabled]")&&(t.type!=="button"&&t.type!=="submit"&&t.tagName!=="image"&&t.tagName!=="reset"&&t.tagName!=="file"&&(t.type!=="checkbox"&&t.type!=="radio"||t.checked))}
/** @param {string} name
   * @param {string|Array|FormDataEntryValue} value
   * @param {FormData} formData */function addValueToFormData(e,t,n){e!=null&&t!=null&&(Array.isArray(t)?t.forEach((function(t){n.append(e,t)})):n.append(e,t))}
/** @param {string} name
   * @param {string|Array} value
   * @param {FormData} formData */function removeValueFromFormData(e,t,n){if(e!=null&&t!=null){let r=n.getAll(e);r=Array.isArray(t)?r.filter((e=>t.indexOf(e)<0)):r.filter((e=>e!==t));n.delete(e);forEach(r,(t=>n.append(e,t)))}}
/**
   * @param {Element[]} processed
   * @param {FormData} formData
   * @param {HtmxElementValidationError[]} errors
   * @param {Element|HTMLInputElement|HTMLSelectElement|HTMLFormElement} elt
   * @param {boolean} validate
   */function processInputValue(e,t,n,r,o){if(r!=null&&!haveSeenNode(e,r)){e.push(r);if(shouldInclude(r)){const e=getRawAttribute(r,"name");let s=r.value;r instanceof HTMLSelectElement&&r.multiple&&(s=toArray(r.querySelectorAll("option:checked")).map((function(e){/** @type HTMLOptionElement */return e.value})));r instanceof HTMLInputElement&&r.files&&(s=toArray(r.files));addValueToFormData(e,s,t);o&&validateElement(r,n)}if(r instanceof HTMLFormElement){forEach(r.elements,(function(r){e.indexOf(r)>=0?removeValueFromFormData(r.name,r.value,t):e.push(r);o&&validateElement(r,n)}));new FormData(r).forEach((function(e,n){e instanceof File&&e.name===""||addValueToFormData(n,e,t)}))}}}
/**
   *
   * @param {Element} elt
   * @param {HtmxElementValidationError[]} errors
   */function validateElement(e,t){const n=/** @type {HTMLElement & ElementInternals} */e;if(n.willValidate){triggerEvent(n,"htmx:validation:validate");if(!n.checkValidity()){t.push({elt:n,message:n.validationMessage,validity:n.validity});triggerEvent(n,"htmx:validation:failed",{message:n.validationMessage,validity:n.validity})}}}
/**
   * Override values in the one FormData with those from another.
   * @param {FormData} receiver the formdata that will be mutated
   * @param {FormData} donor the formdata that will provide the overriding values
   * @returns {FormData} the {@linkcode receiver}
   */function overrideFormData(e,t){for(const n of t.keys())e.delete(n);t.forEach((function(t,n){e.append(n,t)}));return e}
/**
 * @param {Element|HTMLFormElement} elt
 * @param {HttpVerb} verb
 * @returns {{errors: HtmxElementValidationError[], formData: FormData, values: Object}}
 */function getInputValues(e,t){
/** @type Element[] */
const n=[];const r=new FormData;const o=new FormData;
/** @type HtmxElementValidationError[] */const s=[];const a=getInternalData(e);a.lastButtonClicked&&!bodyContains(a.lastButtonClicked)&&(a.lastButtonClicked=null);let i=e instanceof HTMLFormElement&&e.noValidate!==true||getAttributeValue(e,"hx-validate")==="true";a.lastButtonClicked&&(i=i&&a.lastButtonClicked.formNoValidate!==true);t!=="get"&&processInputValue(n,o,s,closest(e,"form"),i);processInputValue(n,r,s,e,i);if(a.lastButtonClicked||e.tagName==="BUTTON"||e.tagName==="INPUT"&&getRawAttribute(e,"type")==="submit"){const t=a.lastButtonClicked||/** @type HTMLInputElement|HTMLButtonElement */e;const n=getRawAttribute(t,"name");addValueToFormData(n,t.value,o)}const l=findAttributeTargets(e,"hx-include");forEach(l,(function(e){processInputValue(n,r,s,asElement(e),i);matches(e,"form")||forEach(asParentNode(e).querySelectorAll(INPUT_SELECTOR),(function(e){processInputValue(n,r,s,e,i)}))}));overrideFormData(r,o);return{errors:s,formData:r,values:formDataProxy(r)}}
/**
   * @param {string} returnStr
   * @param {string} name
   * @param {any} realValue
   * @returns {string}
   */function appendParam(e,t,n){e!==""&&(e+="&");String(n)==="[object Object]"&&(n=JSON.stringify(n));const r=encodeURIComponent(n);e+=encodeURIComponent(t)+"="+r;return e}
/**
   * @param {FormData|Object} values
   * @returns string
   */function urlEncode(e){e=formDataFromObject(e);let t="";e.forEach((function(e,n){t=appendParam(t,n,e)}));return t}
/**
 * @param {Element} elt
 * @param {Element} target
 * @param {string} prompt
 * @returns {HtmxHeaderSpecification}
 */function getHeaders(e,t,n){
/** @type HtmxHeaderSpecification */
const r={"HX-Request":"true","HX-Trigger":getRawAttribute(e,"id"),"HX-Trigger-Name":getRawAttribute(e,"name"),"HX-Target":getAttributeValue(t,"id"),"HX-Current-URL":getDocument().location.href};getValuesForElement(e,"hx-headers",false,r);n!==void 0&&(r["HX-Prompt"]=n);getInternalData(e).boosted&&(r["HX-Boosted"]="true");return r}
/**
 * filterValues takes an object containing form input values
 * and returns a new object that only contains keys that are
 * specified by the closest "hx-params" attribute
 * @param {FormData} inputValues
 * @param {Element} elt
 * @returns {FormData}
 */function filterValues(e,t){const n=getClosestAttributeValue(t,"hx-params");if(n){if(n==="none")return new FormData;if(n==="*")return e;if(n.indexOf("not ")===0){forEach(n.substr(4).split(","),(function(t){t=t.trim();e.delete(t)}));return e}{const t=new FormData;forEach(n.split(","),(function(n){n=n.trim();e.has(n)&&e.getAll(n).forEach((function(e){t.append(n,e)}))}));return t}}return e}
/**
   * @param {Element} elt
   * @return {boolean}
   */function isAnchorLink(e){return!!getRawAttribute(e,"href")&&getRawAttribute(e,"href").indexOf("#")>=0}
/**
 * @param {Element} elt
 * @param {HtmxSwapStyle} [swapInfoOverride]
 * @returns {HtmxSwapSpecification}
 */function getSwapSpecification(e,t){const n=t||getClosestAttributeValue(e,"hx-swap");
/** @type HtmxSwapSpecification */const r={swapStyle:getInternalData(e).boosted?"innerHTML":htmx.config.defaultSwapStyle,swapDelay:htmx.config.defaultSwapDelay,settleDelay:htmx.config.defaultSettleDelay};htmx.config.scrollIntoViewOnBoost&&getInternalData(e).boosted&&!isAnchorLink(e)&&(r.show="top");if(n){const e=splitOnWhitespace(n);if(e.length>0)for(let t=0;t<e.length;t++){const n=e[t];if(n.indexOf("swap:")===0)r.swapDelay=parseInterval(n.substr(5));else if(n.indexOf("settle:")===0)r.settleDelay=parseInterval(n.substr(7));else if(n.indexOf("transition:")===0)r.transition=n.substr(11)==="true";else if(n.indexOf("ignoreTitle:")===0)r.ignoreTitle=n.substr(12)==="true";else if(n.indexOf("scroll:")===0){const e=n.substr(7);var o=e.split(":");const t=o.pop();var s=o.length>0?o.join(":"):null;r.scroll=t;r.scrollTarget=s}else if(n.indexOf("show:")===0){const e=n.substr(5);o=e.split(":");const t=o.pop();s=o.length>0?o.join(":"):null;r.show=t;r.showTarget=s}else if(n.indexOf("focus-scroll:")===0){const e=n.substr(13);r.focusScroll=e=="true"}else t==0?r.swapStyle=n:logError("Unknown modifier in hx-swap: "+n)}}return r}
/**
   * @param {Element} elt
   * @return {boolean}
   */function usesFormData(e){return getClosestAttributeValue(e,"hx-encoding")==="multipart/form-data"||matches(e,"form")&&getRawAttribute(e,"enctype")==="multipart/form-data"}
/**
   * @param {XMLHttpRequest} xhr
   * @param {Element} elt
   * @param {FormData} filteredParameters
   * @returns {*|string|null}
   */function encodeParamsForBody(e,t,n){let r=null;withExtensions(t,(function(o){r==null&&(r=o.encodeParameters(e,n,t))}));return r!=null?r:usesFormData(t)?overrideFormData(new FormData,formDataFromObject(n)):urlEncode(n)}
/**
 *
 * @param {Element} target
 * @returns {HtmxSettleInfo}
 */function makeSettleInfo(e){return{tasks:[],elts:[e]}}
/**
   * @param {Element[]} content
   * @param {HtmxSwapSpecification} swapSpec
   */function updateScrollState(e,t){const n=e[0];const r=e[e.length-1];if(t.scroll){var o=null;t.scrollTarget&&(o=asElement(querySelectorExt(n,t.scrollTarget)));if(t.scroll==="top"&&(n||o)){o=o||n;o.scrollTop=0}if(t.scroll==="bottom"&&(r||o)){o=o||r;o.scrollTop=o.scrollHeight}}if(t.show){o=null;if(t.showTarget){let e=t.showTarget;t.showTarget==="window"&&(e="body");o=asElement(querySelectorExt(n,e))}if(t.show==="top"&&(n||o)){o=o||n;o.scrollIntoView({block:"start",behavior:htmx.config.scrollBehavior})}if(t.show==="bottom"&&(r||o)){o=o||r;o.scrollIntoView({block:"end",behavior:htmx.config.scrollBehavior})}}}
/**
 * @param {Element} elt
 * @param {string} attr
 * @param {boolean=} evalAsDefault
 * @param {Object=} values
 * @returns {Object}
 */function getValuesForElement(e,t,n,r){r==null&&(r={});if(e==null)return r;const o=getAttributeValue(e,t);if(o){let t=o.trim();let s=n;if(t==="unset")return null;if(t.indexOf("javascript:")===0){t=t.substr(11);s=true}else if(t.indexOf("js:")===0){t=t.substr(3);s=true}t.indexOf("{")!==0&&(t="{"+t+"}");let a;a=s?maybeEval(e,(function(){return Function("return ("+t+")")()}),{}):parseJSON(t);for(const e in a)a.hasOwnProperty(e)&&r[e]==null&&(r[e]=a[e])}return getValuesForElement(asElement(parentElt(e)),t,n,r)}
/**
   * @param {EventTarget|string} elt
   * @param {() => any} toEval
   * @param {any=} defaultVal
   * @returns {any}
   */function maybeEval(e,t,n){if(htmx.config.allowEval)return t();triggerErrorEvent(e,"htmx:evalDisallowedError");return n}
/**
 * @param {Element} elt
 * @param {*?} expressionVars
 * @returns
 */function getHXVarsForElement(e,t){return getValuesForElement(e,"hx-vars",true,t)}
/**
 * @param {Element} elt
 * @param {*?} expressionVars
 * @returns
 */function getHXValsForElement(e,t){return getValuesForElement(e,"hx-vals",false,t)}
/**
 * @param {Element} elt
 * @returns {FormData}
 */function getExpressionVars(e){return mergeObjects(getHXVarsForElement(e),getHXValsForElement(e))}
/**
   * @param {XMLHttpRequest} xhr
   * @param {string} header
   * @param {string|null} headerValue
   */function safelySetHeaderValue(e,t,n){if(n!==null)try{e.setRequestHeader(t,n)}catch(r){e.setRequestHeader(t,encodeURIComponent(n));e.setRequestHeader(t+"-URI-AutoEncoded","true")}}
/**
   * @param {XMLHttpRequest} xhr
   * @return {string}
   */function getPathFromResponse(e){if(e.responseURL&&typeof URL!=="undefined")try{const t=new URL(e.responseURL);return t.pathname+t.search}catch(t){triggerErrorEvent(getDocument().body,"htmx:badResponseUrl",{url:e.responseURL})}}
/**
   * @param {XMLHttpRequest} xhr
   * @param {RegExp} regexp
   * @return {boolean}
   */function hasHeader(e,t){return t.test(e.getAllResponseHeaders())}
/**
   * Issues an htmx-style AJAX request
   *
   * @see https://htmx.org/api/#ajax
   *
   * @param {HttpVerb} verb
   * @param {string} path the URL path to make the AJAX
   * @param {Element|string|HtmxAjaxHelperContext} context the element to target (defaults to the **body**) | a selector for the target | a context object that contains any of the following
   * @return {Promise<void>} Promise that resolves immediately if no request is sent, or when the request is complete
   */function ajaxHelper(e,t,n){e=/** @type HttpVerb */e.toLowerCase();if(n){if(n instanceof Element||typeof n==="string")return issueAjaxRequest(e,t,null,null,{targetOverride:resolveTarget(n)||DUMMY_ELT,returnPromise:true});{let r=resolveTarget(n.target);(n.target&&!r||!r&&!resolveTarget(n.source))&&(r=DUMMY_ELT);return issueAjaxRequest(e,t,resolveTarget(n.source),n.event,{handler:n.handler,headers:n.headers,values:n.values,targetOverride:r,swapOverride:n.swap,select:n.select,returnPromise:true})}}return issueAjaxRequest(e,t,null,null,{returnPromise:true})}
/**
   * @param {Element} elt
   * @return {Element[]}
   */function hierarchyForElt(e){const t=[];while(e){t.push(e);e=e.parentElement}return t}
/**
   * @param {Element} elt
   * @param {string} path
   * @param {HtmxRequestConfig} requestConfig
   * @return {boolean}
   */function verifyPath(e,t,n){let r;let o;if(typeof URL==="function"){o=new URL(t,document.location.href);const e=document.location.origin;r=e===o.origin}else{o=t;r=startsWith(t,document.location.origin)}return!(htmx.config.selfRequestsOnly&&!r)&&triggerEvent(e,"htmx:validateUrl",mergeObjects({url:o,sameHost:r},n))}
/**
   * @param {Object|FormData} obj
   * @return {FormData}
   */function formDataFromObject(e){if(e instanceof FormData)return e;const t=new FormData;for(const n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n].forEach==="function"?e[n].forEach((function(e){t.append(n,e)})):typeof e[n]!=="object"||e[n]instanceof Blob?t.append(n,e[n]):t.append(n,JSON.stringify(e[n])));return t}
/**
   * @param {FormData} formData
   * @param {string} name
   * @param {Array} array
   * @returns {Array}
   */function formDataArrayProxy(e,t,n){return new Proxy(n,{get:function(n,r){return typeof r==="number"?n[r]:r==="length"?n.length:r==="push"?function(r){n.push(r);e.append(t,r)}:typeof n[r]==="function"?function(){n[r].apply(n,arguments);e.delete(t);n.forEach((function(n){e.append(t,n)}))}:n[r]&&n[r].length===1?n[r][0]:n[r]},set:function(n,r,o){n[r]=o;e.delete(t);n.forEach((function(n){e.append(t,n)}));return true}})}
/**
   * @param {FormData} formData
   * @returns {Object}
   */function formDataProxy(e){return new Proxy(e,{get:function(t,n){if(typeof n==="symbol")return Reflect.get(t,n);if(n==="toJSON")return()=>Object.fromEntries(e);if(n in t)return typeof t[n]==="function"?function(){return e[n].apply(e,arguments)}:t[n];const r=e.getAll(n);return r.length===0?void 0:r.length===1?r[0]:formDataArrayProxy(t,n,r)},set:function(e,t,n){if(typeof t!=="string")return false;e.delete(t);n&&typeof n.forEach==="function"?n.forEach((function(n){e.append(t,n)})):typeof n!=="object"||n instanceof Blob?e.append(t,n):e.append(t,JSON.stringify(n));return true},deleteProperty:function(e,t){typeof t==="string"&&e.delete(t);return true},ownKeys:function(e){return Reflect.ownKeys(Object.fromEntries(e))},getOwnPropertyDescriptor:function(e,t){return Reflect.getOwnPropertyDescriptor(Object.fromEntries(e),t)}})}
/**
   * @param {HttpVerb} verb
   * @param {string} path
   * @param {Element} elt
   * @param {Event} event
   * @param {HtmxAjaxEtc} [etc]
   * @param {boolean} [confirmed]
   * @return {Promise<void>}
   */function issueAjaxRequest(e,t,n,r,o,s){let a=null;let i=null;o=o!=null?o:{};if(o.returnPromise&&typeof Promise!=="undefined")var l=new Promise((function(e,t){a=e;i=t}));n==null&&(n=getDocument().body);const c=o.handler||handleAjaxResponse;const u=o.select||null;if(!bodyContains(n)){maybeCall(a);return l}const f=o.targetOverride||asElement(getTarget(n));if(f==null||f==DUMMY_ELT){triggerErrorEvent(n,"htmx:targetError",{target:getAttributeValue(n,"hx-target")});maybeCall(i);return l}let d=getInternalData(n);const g=d.lastButtonClicked;if(g){const n=getRawAttribute(g,"formaction");n!=null&&(t=n);const r=getRawAttribute(g,"formmethod");r!=null&&r.toLowerCase()!=="dialog"&&(e=/** @type HttpVerb */r)}const h=getClosestAttributeValue(n,"hx-confirm");if(s===void 0){const issueRequest=function(s){return issueAjaxRequest(e,t,n,r,o,!!s)};const s={target:f,elt:n,path:t,verb:e,triggeringEvent:r,etc:o,issueRequest:issueRequest,question:h};if(triggerEvent(n,"htmx:confirm",s)===false){maybeCall(a);return l}}let m=n;let p=getClosestAttributeValue(n,"hx-sync");let E=null;let x=false;if(p){const e=p.split(":");const t=e[0].trim();m=t==="this"?findThisElement(n,"hx-sync"):asElement(querySelectorExt(n,t));p=(e[1]||"drop").trim();d=getInternalData(m);if(p==="drop"&&d.xhr&&d.abortable!==true){maybeCall(a);return l}if(p==="abort"){if(d.xhr){maybeCall(a);return l}x=true}else if(p==="replace")triggerEvent(m,"htmx:abort");else if(p.indexOf("queue")===0){const e=p.split(" ");E=(e[1]||"last").trim()}}if(d.xhr){if(!d.abortable){if(E==null){if(r){const e=getInternalData(r);e&&e.triggerSpec&&e.triggerSpec.queue&&(E=e.triggerSpec.queue)}E==null&&(E="last")}d.queuedRequests==null&&(d.queuedRequests=[]);if(E==="first"&&d.queuedRequests.length===0)d.queuedRequests.push((function(){issueAjaxRequest(e,t,n,r,o)}));else if(E==="all")d.queuedRequests.push((function(){issueAjaxRequest(e,t,n,r,o)}));else if(E==="last"){d.queuedRequests=[];d.queuedRequests.push((function(){issueAjaxRequest(e,t,n,r,o)}))}maybeCall(a);return l}triggerEvent(m,"htmx:abort")}const b=new XMLHttpRequest;d.xhr=b;d.abortable=x;const endRequestLock=function(){d.xhr=null;d.abortable=false;if(d.queuedRequests!=null&&d.queuedRequests.length>0){const e=d.queuedRequests.shift();e()}};const v=getClosestAttributeValue(n,"hx-prompt");if(v){var y=prompt(v);if(y===null||!triggerEvent(n,"htmx:prompt",{prompt:y,target:f})){maybeCall(a);endRequestLock();return l}}if(h&&!s&&!confirm(h)){maybeCall(a);endRequestLock();return l}let S=getHeaders(n,f,y);e==="get"||usesFormData(n)||(S["Content-Type"]="application/x-www-form-urlencoded");o.headers&&(S=mergeObjects(S,o.headers));const w=getInputValues(n,e);let C=w.errors;const A=w.formData;o.values&&overrideFormData(A,formDataFromObject(o.values));const T=formDataFromObject(getExpressionVars(n));const H=overrideFormData(A,T);let R=filterValues(H,n);htmx.config.getCacheBusterParam&&e==="get"&&R.set("org.htmx.cache-buster",getRawAttribute(f,"id")||"true");t!=null&&t!==""||(t=getDocument().location.href)
/**
     * @type {Object}
     * @property {boolean} [credentials]
     * @property {number} [timeout]
     * @property {boolean} [noHeaders]
     */;const O=getValuesForElement(n,"hx-request");const I=getInternalData(n).boosted;let D=htmx.config.methodsThatUseUrlParams.indexOf(e)>=0;
/** @type HtmxRequestConfig */const N={boosted:I,useUrlParams:D,formData:R,parameters:formDataProxy(R),unfilteredFormData:H,unfilteredParameters:formDataProxy(H),headers:S,target:f,verb:e,errors:C,withCredentials:o.credentials||O.credentials||htmx.config.withCredentials,timeout:o.timeout||O.timeout||htmx.config.timeout,path:t,triggeringEvent:r};if(!triggerEvent(n,"htmx:configRequest",N)){maybeCall(a);endRequestLock();return l}t=N.path;e=N.verb;S=N.headers;R=formDataFromObject(N.parameters);C=N.errors;D=N.useUrlParams;if(C&&C.length>0){triggerEvent(n,"htmx:validation:halted",N);maybeCall(a);endRequestLock();return l}const L=t.split("#");const P=L[0];const q=L[1];let F=t;if(D){F=P;const e=!R.keys().next().done;if(e){F.indexOf("?")<0?F+="?":F+="&";F+=urlEncode(R);q&&(F+="#"+q)}}if(!verifyPath(n,F,N)){triggerErrorEvent(n,"htmx:invalidPath",N);maybeCall(i);return l}b.open(e.toUpperCase(),F,true);b.overrideMimeType("text/html");b.withCredentials=N.withCredentials;b.timeout=N.timeout;if(O.noHeaders);else for(const e in S)if(S.hasOwnProperty(e)){const t=S[e];safelySetHeaderValue(b,e,t)}
/** @type {HtmxResponseInfo} */const M={xhr:b,target:f,requestConfig:N,etc:o,boosted:I,select:u,pathInfo:{requestPath:t,finalRequestPath:F,responsePath:null,anchor:q}};b.onload=function(){try{const e=hierarchyForElt(n);M.pathInfo.responsePath=getPathFromResponse(b);c(n,M);M.keepIndicators!==true&&removeRequestIndicators(k,V);triggerEvent(n,"htmx:afterRequest",M);triggerEvent(n,"htmx:afterOnLoad",M);if(!bodyContains(n)){let t=null;while(e.length>0&&t==null){const n=e.shift();bodyContains(n)&&(t=n)}if(t){triggerEvent(t,"htmx:afterRequest",M);triggerEvent(t,"htmx:afterOnLoad",M)}}maybeCall(a);endRequestLock()}catch(e){triggerErrorEvent(n,"htmx:onLoadError",mergeObjects({error:e},M));throw e}};b.onerror=function(){removeRequestIndicators(k,V);triggerErrorEvent(n,"htmx:afterRequest",M);triggerErrorEvent(n,"htmx:sendError",M);maybeCall(i);endRequestLock()};b.onabort=function(){removeRequestIndicators(k,V);triggerErrorEvent(n,"htmx:afterRequest",M);triggerErrorEvent(n,"htmx:sendAbort",M);maybeCall(i);endRequestLock()};b.ontimeout=function(){removeRequestIndicators(k,V);triggerErrorEvent(n,"htmx:afterRequest",M);triggerErrorEvent(n,"htmx:timeout",M);maybeCall(i);endRequestLock()};if(!triggerEvent(n,"htmx:beforeRequest",M)){maybeCall(a);endRequestLock();return l}var k=addRequestIndicatorClasses(n);var V=disableElements(n);forEach(["loadstart","loadend","progress","abort"],(function(e){forEach([b,b.upload],(function(t){t.addEventListener(e,(function(t){triggerEvent(n,"htmx:xhr:"+e,{lengthComputable:t.lengthComputable,loaded:t.loaded,total:t.total})}))}))}));triggerEvent(n,"htmx:beforeSend",M);const B=D?null:encodeParamsForBody(b,n,R);b.send(B);return l}
/**
   * @typedef {Object} HtmxHistoryUpdate
   * @property {string|null} [type]
   * @property {string|null} [path]
   */
/**
   * @param {Element} elt
   * @param {HtmxResponseInfo} responseInfo
   * @return {HtmxHistoryUpdate}
   */function determineHistoryUpdates(e,t){const n=t.xhr;let r=null;let o=null;if(hasHeader(n,/HX-Push:/i)){r=n.getResponseHeader("HX-Push");o="push"}else if(hasHeader(n,/HX-Push-Url:/i)){r=n.getResponseHeader("HX-Push-Url");o="push"}else if(hasHeader(n,/HX-Replace-Url:/i)){r=n.getResponseHeader("HX-Replace-Url");o="replace"}if(r)return r==="false"?{}:{type:o,path:r};const s=t.pathInfo.finalRequestPath;const a=t.pathInfo.responsePath;const i=getClosestAttributeValue(e,"hx-push-url");const l=getClosestAttributeValue(e,"hx-replace-url");const c=getInternalData(e).boosted;let u=null;let f=null;if(i){u="push";f=i}else if(l){u="replace";f=l}else if(c){u="push";f=a||s}if(f){if(f==="false")return{};f==="true"&&(f=a||s);t.pathInfo.anchor&&f.indexOf("#")===-1&&(f=f+"#"+t.pathInfo.anchor);return{type:u,path:f}}return{}}
/**
   * @param {HtmxResponseHandlingConfig} responseHandlingConfig
   * @param {number} status
   * @return {boolean}
   */function codeMatches(e,t){var n=new RegExp(e.code);return n.test(t.toString(10))}
/**
   * @param {XMLHttpRequest} xhr
   * @return {HtmxResponseHandlingConfig}
   */function resolveResponseHandling(e){for(var t=0;t<htmx.config.responseHandling.length;t++){
/** @type HtmxResponseHandlingConfig */
var n=htmx.config.responseHandling[t];if(codeMatches(n,e.status))return n}return{swap:false}}
/**
   * @param {string} title
   */function handleTitle(e){if(e){const t=find("title");t?t.innerHTML=e:window.document.title=e}}
/**
   * @param {Element} elt
   * @param {HtmxResponseInfo} responseInfo
   */function handleAjaxResponse(e,t){const n=t.xhr;let r=t.target;const o=t.etc;const s=t.select;if(!triggerEvent(e,"htmx:beforeOnLoad",t))return;hasHeader(n,/HX-Trigger:/i)&&handleTriggerHeader(n,"HX-Trigger",e);if(hasHeader(n,/HX-Location:/i)){saveCurrentPageToHistory();let e=n.getResponseHeader("HX-Location");
/** @type {HtmxAjaxHelperContext&{path:string}} */var a;if(e.indexOf("{")===0){a=parseJSON(e);e=a.path;delete a.path}ajaxHelper("get",e,a).then((function(){pushUrlIntoHistory(e)}));return}const i=hasHeader(n,/HX-Refresh:/i)&&n.getResponseHeader("HX-Refresh")==="true";if(hasHeader(n,/HX-Redirect:/i)){t.keepIndicators=true;location.href=n.getResponseHeader("HX-Redirect");i&&location.reload();return}if(i){t.keepIndicators=true;location.reload();return}hasHeader(n,/HX-Retarget:/i)&&(n.getResponseHeader("HX-Retarget")==="this"?t.target=e:t.target=asElement(querySelectorExt(e,n.getResponseHeader("HX-Retarget"))));const l=determineHistoryUpdates(e,t);const c=resolveResponseHandling(n);const u=c.swap;let f=!!c.error;let d=htmx.config.ignoreTitle||c.ignoreTitle;let g=c.select;c.target&&(t.target=asElement(querySelectorExt(e,c.target)));var h=o.swapOverride;h==null&&c.swapOverride&&(h=c.swapOverride);hasHeader(n,/HX-Retarget:/i)&&(n.getResponseHeader("HX-Retarget")==="this"?t.target=e:t.target=asElement(querySelectorExt(e,n.getResponseHeader("HX-Retarget"))));hasHeader(n,/HX-Reswap:/i)&&(h=n.getResponseHeader("HX-Reswap"));var m=n.response;
/** @type HtmxBeforeSwapDetails */var p=mergeObjects({shouldSwap:u,serverResponse:m,isError:f,ignoreTitle:d,selectOverride:g,swapOverride:h},t);if((!c.event||triggerEvent(r,c.event,p))&&triggerEvent(r,"htmx:beforeSwap",p)){r=p.target;m=p.serverResponse;f=p.isError;d=p.ignoreTitle;g=p.selectOverride;h=p.swapOverride;t.target=r;t.failed=f;t.successful=!f;if(p.shouldSwap){n.status===286&&cancelPolling(e);withExtensions(e,(function(t){m=t.transformResponse(m,n,e)}));l.type&&saveCurrentPageToHistory();var E=getSwapSpecification(e,h);E.hasOwnProperty("ignoreTitle")||(E.ignoreTitle=d);r.classList.add(htmx.config.swappingClass);let o=null;let a=null;s&&(g=s);hasHeader(n,/HX-Reselect:/i)&&(g=n.getResponseHeader("HX-Reselect"));const i=getClosestAttributeValue(e,"hx-select-oob");const c=getClosestAttributeValue(e,"hx-select");let doSwap=function(){try{if(l.type){triggerEvent(getDocument().body,"htmx:beforeHistoryUpdate",mergeObjects({history:l},t));if(l.type==="push"){pushUrlIntoHistory(l.path);triggerEvent(getDocument().body,"htmx:pushedIntoHistory",{path:l.path})}else{replaceUrlInHistory(l.path);triggerEvent(getDocument().body,"htmx:replacedInHistory",{path:l.path})}}swap(r,m,E,{select:g||c,selectOOB:i,eventInfo:t,anchor:t.pathInfo.anchor,contextElement:e,afterSwapCallback:function(){if(hasHeader(n,/HX-Trigger-After-Swap:/i)){let t=e;bodyContains(e)||(t=getDocument().body);handleTriggerHeader(n,"HX-Trigger-After-Swap",t)}},afterSettleCallback:function(){if(hasHeader(n,/HX-Trigger-After-Settle:/i)){let t=e;bodyContains(e)||(t=getDocument().body);handleTriggerHeader(n,"HX-Trigger-After-Settle",t)}maybeCall(o)}})}catch(n){triggerErrorEvent(e,"htmx:swapError",t);maybeCall(a);throw n}};let u=htmx.config.globalViewTransitions;E.hasOwnProperty("transition")&&(u=E.transition);if(u&&triggerEvent(e,"htmx:beforeTransition",t)&&typeof Promise!=="undefined"&&document.startViewTransition){const e=new Promise((function(e,t){o=e;a=t}));const t=doSwap;doSwap=function(){document.startViewTransition((function(){t();return e}))}}E.swapDelay>0?getWindow().setTimeout(doSwap,E.swapDelay):doSwap()}f&&triggerErrorEvent(e,"htmx:responseError",mergeObjects({error:"Response Status Error Code "+n.status+" from "+t.pathInfo.requestPath},t))}}
/** @type {Object<string, HtmxExtension>} */const extensions={};
/**
   * extensionBase defines the default functions for all extensions.
   * @returns {HtmxExtension}
   */function extensionBase(){return{init:function(e){return null},getSelectors:function(){return null},onEvent:function(e,t){return true},transformResponse:function(e,t,n){return e},isInlineSwap:function(e){return false},handleSwap:function(e,t,n,r){return false},encodeParameters:function(e,t,n){return null}}}
/**
   * defineExtension initializes the extension and adds it to the htmx registry
   *
   * @see https://htmx.org/api/#defineExtension
   *
   * @param {string} name the extension name
   * @param {HtmxExtension} extension the extension definition
   */function defineExtension(e,t){t.init&&t.init(internalAPI);extensions[e]=mergeObjects(extensionBase(),t)}
/**
   * removeExtension removes an extension from the htmx registry
   *
   * @see https://htmx.org/api/#removeExtension
   *
   * @param {string} name
   */function removeExtension(e){delete extensions[e]}
/**
   * getExtensions searches up the DOM tree to return all extensions that can be applied to a given element
   *
   * @param {Element} elt
   * @param {HtmxExtension[]=} extensionsToReturn
   * @param {string[]=} extensionsToIgnore
   * @returns {HtmxExtension[]}
   */function getExtensions(e,t,n){t==void 0&&(t=[]);if(e==void 0)return t;n==void 0&&(n=[]);const r=getAttributeValue(e,"hx-ext");r&&forEach(r.split(","),(function(e){e=e.replace(/ /g,"");if(e.slice(0,7)!="ignore:"){if(n.indexOf(e)<0){const n=extensions[e];n&&t.indexOf(n)<0&&t.push(n)}}else n.push(e.slice(7))}));return getExtensions(asElement(parentElt(e)),t,n)}var isReady=false;getDocument().addEventListener("DOMContentLoaded",(function(){isReady=true}));function ready(e){isReady||getDocument().readyState==="complete"?e():getDocument().addEventListener("DOMContentLoaded",e)}function insertIndicatorStyles(){if(htmx.config.includeIndicatorStyles!==false){const e=htmx.config.inlineStyleNonce?` nonce="${htmx.config.inlineStyleNonce}"`:"";getDocument().head.insertAdjacentHTML("beforeend","<style"+e+">      ."+htmx.config.indicatorClass+"{opacity:0}      ."+htmx.config.requestClass+" ."+htmx.config.indicatorClass+"{opacity:1; transition: opacity 200ms ease-in;}      ."+htmx.config.requestClass+"."+htmx.config.indicatorClass+"{opacity:1; transition: opacity 200ms ease-in;}      </style>")}}function getMetaConfig(){
/** @type HTMLMetaElement */
const e=getDocument().querySelector('meta[name="htmx-config"]');return e?parseJSON(e.content):null}function mergeMetaConfig(){const e=getMetaConfig();e&&(htmx.config=mergeObjects(htmx.config,e))}ready((function(){mergeMetaConfig();insertIndicatorStyles();let e=getDocument().body;processNode(e);const t=getDocument().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");e.addEventListener("htmx:abort",(function(e){const t=e.target;const n=getInternalData(t);n&&n.xhr&&n.xhr.abort()}));
/** @type {(ev: PopStateEvent) => any} */const n=window.onpopstate?window.onpopstate.bind(window):null;
/** @type {(ev: PopStateEvent) => any} */window.onpopstate=function(e){if(e.state&&e.state.htmx){restoreHistory();forEach(t,(function(e){triggerEvent(e,"htmx:restored",{document:getDocument(),triggerEvent:triggerEvent})}))}else n&&n(e)};getWindow().setTimeout((function(){triggerEvent(e,"htmx:load",{});e=null}),0)}));return htmx}();export{htmx as default};

