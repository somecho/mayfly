goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19014 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19014(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19015 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19015(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17304 = coll;
var G__17305 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17304,G__17305) : shadow.dom.lazy_native_coll_seq.call(null,G__17304,G__17305));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17401 = arguments.length;
switch (G__17401) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17408 = arguments.length;
switch (G__17408) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17512 = arguments.length;
switch (G__17512) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17521 = arguments.length;
switch (G__17521) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17534 = arguments.length;
switch (G__17534) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17581 = arguments.length;
switch (G__17581) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17596){if((e17596 instanceof Object)){
var e = e17596;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17596;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17616 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17617 = null;
var count__17618 = (0);
var i__17619 = (0);
while(true){
if((i__17619 < count__17618)){
var el = chunk__17617.cljs$core$IIndexed$_nth$arity$2(null,i__17619);
var handler_19074__$1 = ((function (seq__17616,chunk__17617,count__17618,i__17619,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17616,chunk__17617,count__17618,i__17619,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19074__$1);


var G__19075 = seq__17616;
var G__19076 = chunk__17617;
var G__19077 = count__17618;
var G__19078 = (i__17619 + (1));
seq__17616 = G__19075;
chunk__17617 = G__19076;
count__17618 = G__19077;
i__17619 = G__19078;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17616);
if(temp__5804__auto__){
var seq__17616__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17616__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17616__$1);
var G__19082 = cljs.core.chunk_rest(seq__17616__$1);
var G__19083 = c__5568__auto__;
var G__19084 = cljs.core.count(c__5568__auto__);
var G__19085 = (0);
seq__17616 = G__19082;
chunk__17617 = G__19083;
count__17618 = G__19084;
i__17619 = G__19085;
continue;
} else {
var el = cljs.core.first(seq__17616__$1);
var handler_19086__$1 = ((function (seq__17616,chunk__17617,count__17618,i__17619,el,seq__17616__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17616,chunk__17617,count__17618,i__17619,el,seq__17616__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19086__$1);


var G__19087 = cljs.core.next(seq__17616__$1);
var G__19088 = null;
var G__19089 = (0);
var G__19090 = (0);
seq__17616 = G__19087;
chunk__17617 = G__19088;
count__17618 = G__19089;
i__17619 = G__19090;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17706 = arguments.length;
switch (G__17706) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17716 = cljs.core.seq(events);
var chunk__17717 = null;
var count__17718 = (0);
var i__17719 = (0);
while(true){
if((i__17719 < count__17718)){
var vec__17735 = chunk__17717.cljs$core$IIndexed$_nth$arity$2(null,i__17719);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17735,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19092 = seq__17716;
var G__19093 = chunk__17717;
var G__19094 = count__17718;
var G__19095 = (i__17719 + (1));
seq__17716 = G__19092;
chunk__17717 = G__19093;
count__17718 = G__19094;
i__17719 = G__19095;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17716);
if(temp__5804__auto__){
var seq__17716__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17716__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17716__$1);
var G__19096 = cljs.core.chunk_rest(seq__17716__$1);
var G__19097 = c__5568__auto__;
var G__19098 = cljs.core.count(c__5568__auto__);
var G__19099 = (0);
seq__17716 = G__19096;
chunk__17717 = G__19097;
count__17718 = G__19098;
i__17719 = G__19099;
continue;
} else {
var vec__17742 = cljs.core.first(seq__17716__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17742,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19101 = cljs.core.next(seq__17716__$1);
var G__19102 = null;
var G__19103 = (0);
var G__19104 = (0);
seq__17716 = G__19101;
chunk__17717 = G__19102;
count__17718 = G__19103;
i__17719 = G__19104;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17746 = cljs.core.seq(styles);
var chunk__17747 = null;
var count__17748 = (0);
var i__17749 = (0);
while(true){
if((i__17749 < count__17748)){
var vec__17767 = chunk__17747.cljs$core$IIndexed$_nth$arity$2(null,i__17749);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17767,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19125 = seq__17746;
var G__19126 = chunk__17747;
var G__19127 = count__17748;
var G__19128 = (i__17749 + (1));
seq__17746 = G__19125;
chunk__17747 = G__19126;
count__17748 = G__19127;
i__17749 = G__19128;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17746);
if(temp__5804__auto__){
var seq__17746__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17746__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17746__$1);
var G__19149 = cljs.core.chunk_rest(seq__17746__$1);
var G__19150 = c__5568__auto__;
var G__19151 = cljs.core.count(c__5568__auto__);
var G__19152 = (0);
seq__17746 = G__19149;
chunk__17747 = G__19150;
count__17748 = G__19151;
i__17749 = G__19152;
continue;
} else {
var vec__17821 = cljs.core.first(seq__17746__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17821,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19158 = cljs.core.next(seq__17746__$1);
var G__19159 = null;
var G__19160 = (0);
var G__19161 = (0);
seq__17746 = G__19158;
chunk__17747 = G__19159;
count__17748 = G__19160;
i__17749 = G__19161;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17824_19163 = key;
var G__17824_19164__$1 = (((G__17824_19163 instanceof cljs.core.Keyword))?G__17824_19163.fqn:null);
switch (G__17824_19164__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19173 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19173,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19173,"aria-");
}
})())){
el.setAttribute(ks_19173,value);
} else {
(el[ks_19173] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17852){
var map__17861 = p__17852;
var map__17861__$1 = cljs.core.__destructure_map(map__17861);
var props = map__17861__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17861__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17862 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17865 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17865,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17865;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17878 = arguments.length;
switch (G__17878) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17934){
var vec__17935 = p__17934;
var seq__17936 = cljs.core.seq(vec__17935);
var first__17937 = cljs.core.first(seq__17936);
var seq__17936__$1 = cljs.core.next(seq__17936);
var nn = first__17937;
var first__17937__$1 = cljs.core.first(seq__17936__$1);
var seq__17936__$2 = cljs.core.next(seq__17936__$1);
var np = first__17937__$1;
var nc = seq__17936__$2;
var node = vec__17935;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17938 = nn;
var G__17939 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17938,G__17939) : create_fn.call(null,G__17938,G__17939));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17940 = nn;
var G__17941 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17940,G__17941) : create_fn.call(null,G__17940,G__17941));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17942 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17942,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17942,(1),null);
var seq__17945_19276 = cljs.core.seq(node_children);
var chunk__17947_19277 = null;
var count__17948_19278 = (0);
var i__17949_19279 = (0);
while(true){
if((i__17949_19279 < count__17948_19278)){
var child_struct_19280 = chunk__17947_19277.cljs$core$IIndexed$_nth$arity$2(null,i__17949_19279);
var children_19281 = shadow.dom.dom_node(child_struct_19280);
if(cljs.core.seq_QMARK_(children_19281)){
var seq__18023_19282 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19281));
var chunk__18025_19283 = null;
var count__18026_19284 = (0);
var i__18027_19285 = (0);
while(true){
if((i__18027_19285 < count__18026_19284)){
var child_19290 = chunk__18025_19283.cljs$core$IIndexed$_nth$arity$2(null,i__18027_19285);
if(cljs.core.truth_(child_19290)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19290);


var G__19291 = seq__18023_19282;
var G__19292 = chunk__18025_19283;
var G__19293 = count__18026_19284;
var G__19294 = (i__18027_19285 + (1));
seq__18023_19282 = G__19291;
chunk__18025_19283 = G__19292;
count__18026_19284 = G__19293;
i__18027_19285 = G__19294;
continue;
} else {
var G__19296 = seq__18023_19282;
var G__19297 = chunk__18025_19283;
var G__19298 = count__18026_19284;
var G__19299 = (i__18027_19285 + (1));
seq__18023_19282 = G__19296;
chunk__18025_19283 = G__19297;
count__18026_19284 = G__19298;
i__18027_19285 = G__19299;
continue;
}
} else {
var temp__5804__auto___19300 = cljs.core.seq(seq__18023_19282);
if(temp__5804__auto___19300){
var seq__18023_19301__$1 = temp__5804__auto___19300;
if(cljs.core.chunked_seq_QMARK_(seq__18023_19301__$1)){
var c__5568__auto___19302 = cljs.core.chunk_first(seq__18023_19301__$1);
var G__19305 = cljs.core.chunk_rest(seq__18023_19301__$1);
var G__19306 = c__5568__auto___19302;
var G__19307 = cljs.core.count(c__5568__auto___19302);
var G__19308 = (0);
seq__18023_19282 = G__19305;
chunk__18025_19283 = G__19306;
count__18026_19284 = G__19307;
i__18027_19285 = G__19308;
continue;
} else {
var child_19309 = cljs.core.first(seq__18023_19301__$1);
if(cljs.core.truth_(child_19309)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19309);


var G__19310 = cljs.core.next(seq__18023_19301__$1);
var G__19311 = null;
var G__19312 = (0);
var G__19313 = (0);
seq__18023_19282 = G__19310;
chunk__18025_19283 = G__19311;
count__18026_19284 = G__19312;
i__18027_19285 = G__19313;
continue;
} else {
var G__19315 = cljs.core.next(seq__18023_19301__$1);
var G__19316 = null;
var G__19317 = (0);
var G__19318 = (0);
seq__18023_19282 = G__19315;
chunk__18025_19283 = G__19316;
count__18026_19284 = G__19317;
i__18027_19285 = G__19318;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19281);
}


var G__19322 = seq__17945_19276;
var G__19323 = chunk__17947_19277;
var G__19324 = count__17948_19278;
var G__19325 = (i__17949_19279 + (1));
seq__17945_19276 = G__19322;
chunk__17947_19277 = G__19323;
count__17948_19278 = G__19324;
i__17949_19279 = G__19325;
continue;
} else {
var temp__5804__auto___19326 = cljs.core.seq(seq__17945_19276);
if(temp__5804__auto___19326){
var seq__17945_19327__$1 = temp__5804__auto___19326;
if(cljs.core.chunked_seq_QMARK_(seq__17945_19327__$1)){
var c__5568__auto___19328 = cljs.core.chunk_first(seq__17945_19327__$1);
var G__19329 = cljs.core.chunk_rest(seq__17945_19327__$1);
var G__19330 = c__5568__auto___19328;
var G__19331 = cljs.core.count(c__5568__auto___19328);
var G__19332 = (0);
seq__17945_19276 = G__19329;
chunk__17947_19277 = G__19330;
count__17948_19278 = G__19331;
i__17949_19279 = G__19332;
continue;
} else {
var child_struct_19333 = cljs.core.first(seq__17945_19327__$1);
var children_19335 = shadow.dom.dom_node(child_struct_19333);
if(cljs.core.seq_QMARK_(children_19335)){
var seq__18046_19336 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19335));
var chunk__18050_19337 = null;
var count__18052_19338 = (0);
var i__18053_19339 = (0);
while(true){
if((i__18053_19339 < count__18052_19338)){
var child_19343 = chunk__18050_19337.cljs$core$IIndexed$_nth$arity$2(null,i__18053_19339);
if(cljs.core.truth_(child_19343)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19343);


var G__19344 = seq__18046_19336;
var G__19345 = chunk__18050_19337;
var G__19346 = count__18052_19338;
var G__19347 = (i__18053_19339 + (1));
seq__18046_19336 = G__19344;
chunk__18050_19337 = G__19345;
count__18052_19338 = G__19346;
i__18053_19339 = G__19347;
continue;
} else {
var G__19348 = seq__18046_19336;
var G__19349 = chunk__18050_19337;
var G__19350 = count__18052_19338;
var G__19351 = (i__18053_19339 + (1));
seq__18046_19336 = G__19348;
chunk__18050_19337 = G__19349;
count__18052_19338 = G__19350;
i__18053_19339 = G__19351;
continue;
}
} else {
var temp__5804__auto___19352__$1 = cljs.core.seq(seq__18046_19336);
if(temp__5804__auto___19352__$1){
var seq__18046_19353__$1 = temp__5804__auto___19352__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18046_19353__$1)){
var c__5568__auto___19354 = cljs.core.chunk_first(seq__18046_19353__$1);
var G__19355 = cljs.core.chunk_rest(seq__18046_19353__$1);
var G__19356 = c__5568__auto___19354;
var G__19357 = cljs.core.count(c__5568__auto___19354);
var G__19358 = (0);
seq__18046_19336 = G__19355;
chunk__18050_19337 = G__19356;
count__18052_19338 = G__19357;
i__18053_19339 = G__19358;
continue;
} else {
var child_19359 = cljs.core.first(seq__18046_19353__$1);
if(cljs.core.truth_(child_19359)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19359);


var G__19360 = cljs.core.next(seq__18046_19353__$1);
var G__19361 = null;
var G__19362 = (0);
var G__19363 = (0);
seq__18046_19336 = G__19360;
chunk__18050_19337 = G__19361;
count__18052_19338 = G__19362;
i__18053_19339 = G__19363;
continue;
} else {
var G__19364 = cljs.core.next(seq__18046_19353__$1);
var G__19365 = null;
var G__19366 = (0);
var G__19367 = (0);
seq__18046_19336 = G__19364;
chunk__18050_19337 = G__19365;
count__18052_19338 = G__19366;
i__18053_19339 = G__19367;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19335);
}


var G__19368 = cljs.core.next(seq__17945_19327__$1);
var G__19369 = null;
var G__19370 = (0);
var G__19371 = (0);
seq__17945_19276 = G__19368;
chunk__17947_19277 = G__19369;
count__17948_19278 = G__19370;
i__17949_19279 = G__19371;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18088 = cljs.core.seq(node);
var chunk__18089 = null;
var count__18090 = (0);
var i__18091 = (0);
while(true){
if((i__18091 < count__18090)){
var n = chunk__18089.cljs$core$IIndexed$_nth$arity$2(null,i__18091);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19372 = seq__18088;
var G__19373 = chunk__18089;
var G__19374 = count__18090;
var G__19375 = (i__18091 + (1));
seq__18088 = G__19372;
chunk__18089 = G__19373;
count__18090 = G__19374;
i__18091 = G__19375;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18088);
if(temp__5804__auto__){
var seq__18088__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18088__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18088__$1);
var G__19379 = cljs.core.chunk_rest(seq__18088__$1);
var G__19380 = c__5568__auto__;
var G__19381 = cljs.core.count(c__5568__auto__);
var G__19382 = (0);
seq__18088 = G__19379;
chunk__18089 = G__19380;
count__18090 = G__19381;
i__18091 = G__19382;
continue;
} else {
var n = cljs.core.first(seq__18088__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19384 = cljs.core.next(seq__18088__$1);
var G__19385 = null;
var G__19386 = (0);
var G__19387 = (0);
seq__18088 = G__19384;
chunk__18089 = G__19385;
count__18090 = G__19386;
i__18091 = G__19387;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18100 = arguments.length;
switch (G__18100) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18106 = arguments.length;
switch (G__18106) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18122 = arguments.length;
switch (G__18122) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19413 = arguments.length;
var i__5770__auto___19414 = (0);
while(true){
if((i__5770__auto___19414 < len__5769__auto___19413)){
args__5775__auto__.push((arguments[i__5770__auto___19414]));

var G__19415 = (i__5770__auto___19414 + (1));
i__5770__auto___19414 = G__19415;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18202_19417 = cljs.core.seq(nodes);
var chunk__18203_19418 = null;
var count__18204_19419 = (0);
var i__18205_19420 = (0);
while(true){
if((i__18205_19420 < count__18204_19419)){
var node_19421 = chunk__18203_19418.cljs$core$IIndexed$_nth$arity$2(null,i__18205_19420);
fragment.appendChild(shadow.dom._to_dom(node_19421));


var G__19422 = seq__18202_19417;
var G__19423 = chunk__18203_19418;
var G__19424 = count__18204_19419;
var G__19425 = (i__18205_19420 + (1));
seq__18202_19417 = G__19422;
chunk__18203_19418 = G__19423;
count__18204_19419 = G__19424;
i__18205_19420 = G__19425;
continue;
} else {
var temp__5804__auto___19426 = cljs.core.seq(seq__18202_19417);
if(temp__5804__auto___19426){
var seq__18202_19427__$1 = temp__5804__auto___19426;
if(cljs.core.chunked_seq_QMARK_(seq__18202_19427__$1)){
var c__5568__auto___19428 = cljs.core.chunk_first(seq__18202_19427__$1);
var G__19429 = cljs.core.chunk_rest(seq__18202_19427__$1);
var G__19430 = c__5568__auto___19428;
var G__19431 = cljs.core.count(c__5568__auto___19428);
var G__19432 = (0);
seq__18202_19417 = G__19429;
chunk__18203_19418 = G__19430;
count__18204_19419 = G__19431;
i__18205_19420 = G__19432;
continue;
} else {
var node_19434 = cljs.core.first(seq__18202_19427__$1);
fragment.appendChild(shadow.dom._to_dom(node_19434));


var G__19435 = cljs.core.next(seq__18202_19427__$1);
var G__19436 = null;
var G__19437 = (0);
var G__19438 = (0);
seq__18202_19417 = G__19435;
chunk__18203_19418 = G__19436;
count__18204_19419 = G__19437;
i__18205_19420 = G__19438;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18191){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18191));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18228_19446 = cljs.core.seq(scripts);
var chunk__18229_19447 = null;
var count__18230_19448 = (0);
var i__18231_19449 = (0);
while(true){
if((i__18231_19449 < count__18230_19448)){
var vec__18248_19450 = chunk__18229_19447.cljs$core$IIndexed$_nth$arity$2(null,i__18231_19449);
var script_tag_19451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18248_19450,(0),null);
var script_body_19452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18248_19450,(1),null);
eval(script_body_19452);


var G__19453 = seq__18228_19446;
var G__19454 = chunk__18229_19447;
var G__19455 = count__18230_19448;
var G__19456 = (i__18231_19449 + (1));
seq__18228_19446 = G__19453;
chunk__18229_19447 = G__19454;
count__18230_19448 = G__19455;
i__18231_19449 = G__19456;
continue;
} else {
var temp__5804__auto___19457 = cljs.core.seq(seq__18228_19446);
if(temp__5804__auto___19457){
var seq__18228_19458__$1 = temp__5804__auto___19457;
if(cljs.core.chunked_seq_QMARK_(seq__18228_19458__$1)){
var c__5568__auto___19459 = cljs.core.chunk_first(seq__18228_19458__$1);
var G__19460 = cljs.core.chunk_rest(seq__18228_19458__$1);
var G__19461 = c__5568__auto___19459;
var G__19462 = cljs.core.count(c__5568__auto___19459);
var G__19463 = (0);
seq__18228_19446 = G__19460;
chunk__18229_19447 = G__19461;
count__18230_19448 = G__19462;
i__18231_19449 = G__19463;
continue;
} else {
var vec__18261_19464 = cljs.core.first(seq__18228_19458__$1);
var script_tag_19465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18261_19464,(0),null);
var script_body_19466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18261_19464,(1),null);
eval(script_body_19466);


var G__19467 = cljs.core.next(seq__18228_19458__$1);
var G__19468 = null;
var G__19469 = (0);
var G__19470 = (0);
seq__18228_19446 = G__19467;
chunk__18229_19447 = G__19468;
count__18230_19448 = G__19469;
i__18231_19449 = G__19470;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18271){
var vec__18272 = p__18271;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18300 = arguments.length;
switch (G__18300) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18405 = cljs.core.seq(style_keys);
var chunk__18406 = null;
var count__18407 = (0);
var i__18408 = (0);
while(true){
if((i__18408 < count__18407)){
var it = chunk__18406.cljs$core$IIndexed$_nth$arity$2(null,i__18408);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19483 = seq__18405;
var G__19484 = chunk__18406;
var G__19485 = count__18407;
var G__19486 = (i__18408 + (1));
seq__18405 = G__19483;
chunk__18406 = G__19484;
count__18407 = G__19485;
i__18408 = G__19486;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18405);
if(temp__5804__auto__){
var seq__18405__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18405__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18405__$1);
var G__19487 = cljs.core.chunk_rest(seq__18405__$1);
var G__19488 = c__5568__auto__;
var G__19489 = cljs.core.count(c__5568__auto__);
var G__19490 = (0);
seq__18405 = G__19487;
chunk__18406 = G__19488;
count__18407 = G__19489;
i__18408 = G__19490;
continue;
} else {
var it = cljs.core.first(seq__18405__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19491 = cljs.core.next(seq__18405__$1);
var G__19492 = null;
var G__19493 = (0);
var G__19494 = (0);
seq__18405 = G__19491;
chunk__18406 = G__19492;
count__18407 = G__19493;
i__18408 = G__19494;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18422,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18436 = k18422;
var G__18436__$1 = (((G__18436 instanceof cljs.core.Keyword))?G__18436.fqn:null);
switch (G__18436__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18422,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18440){
var vec__18442 = p__18440;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18421){
var self__ = this;
var G__18421__$1 = this;
return (new cljs.core.RecordIter((0),G__18421__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18423,other18424){
var self__ = this;
var this18423__$1 = this;
return (((!((other18424 == null)))) && ((((this18423__$1.constructor === other18424.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18423__$1.x,other18424.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18423__$1.y,other18424.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18423__$1.__extmap,other18424.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18422){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18515 = k18422;
var G__18515__$1 = (((G__18515 instanceof cljs.core.Keyword))?G__18515.fqn:null);
switch (G__18515__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18422);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18421){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18524 = cljs.core.keyword_identical_QMARK_;
var expr__18525 = k__5352__auto__;
if(cljs.core.truth_((pred__18524.cljs$core$IFn$_invoke$arity$2 ? pred__18524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18525) : pred__18524.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18525)))){
return (new shadow.dom.Coordinate(G__18421,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18524.cljs$core$IFn$_invoke$arity$2 ? pred__18524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18525) : pred__18524.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18525)))){
return (new shadow.dom.Coordinate(self__.x,G__18421,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18421),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18421){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18421,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18428){
var extmap__5385__auto__ = (function (){var G__18551 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18428,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18428)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18551);
} else {
return G__18551;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18428),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18428),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18562,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18578 = k18562;
var G__18578__$1 = (((G__18578 instanceof cljs.core.Keyword))?G__18578.fqn:null);
switch (G__18578__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18562,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18579){
var vec__18580 = p__18579;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18580,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18580,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18561){
var self__ = this;
var G__18561__$1 = this;
return (new cljs.core.RecordIter((0),G__18561__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18563,other18564){
var self__ = this;
var this18563__$1 = this;
return (((!((other18564 == null)))) && ((((this18563__$1.constructor === other18564.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18563__$1.w,other18564.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18563__$1.h,other18564.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18563__$1.__extmap,other18564.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18562){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18599 = k18562;
var G__18599__$1 = (((G__18599 instanceof cljs.core.Keyword))?G__18599.fqn:null);
switch (G__18599__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18562);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18561){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18607 = cljs.core.keyword_identical_QMARK_;
var expr__18608 = k__5352__auto__;
if(cljs.core.truth_((pred__18607.cljs$core$IFn$_invoke$arity$2 ? pred__18607.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18608) : pred__18607.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18608)))){
return (new shadow.dom.Size(G__18561,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18607.cljs$core$IFn$_invoke$arity$2 ? pred__18607.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18608) : pred__18607.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18608)))){
return (new shadow.dom.Size(self__.w,G__18561,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18561),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18561){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18561,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18566){
var extmap__5385__auto__ = (function (){var G__18624 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18566,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18566)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18624);
} else {
return G__18624;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18566),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18566),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19573 = (i + (1));
var G__19574 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19573;
ret = G__19574;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18642){
var vec__18643 = p__18642;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18643,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18643,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18652 = arguments.length;
switch (G__18652) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19579 = ps;
var G__19580 = (i + (1));
el__$1 = G__19579;
i = G__19580;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18668 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18671_19587 = cljs.core.seq(props);
var chunk__18672_19588 = null;
var count__18673_19589 = (0);
var i__18674_19590 = (0);
while(true){
if((i__18674_19590 < count__18673_19589)){
var vec__18694_19591 = chunk__18672_19588.cljs$core$IIndexed$_nth$arity$2(null,i__18674_19590);
var k_19592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18694_19591,(0),null);
var v_19593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18694_19591,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19592);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19592),v_19593);


var G__19594 = seq__18671_19587;
var G__19595 = chunk__18672_19588;
var G__19596 = count__18673_19589;
var G__19597 = (i__18674_19590 + (1));
seq__18671_19587 = G__19594;
chunk__18672_19588 = G__19595;
count__18673_19589 = G__19596;
i__18674_19590 = G__19597;
continue;
} else {
var temp__5804__auto___19598 = cljs.core.seq(seq__18671_19587);
if(temp__5804__auto___19598){
var seq__18671_19599__$1 = temp__5804__auto___19598;
if(cljs.core.chunked_seq_QMARK_(seq__18671_19599__$1)){
var c__5568__auto___19600 = cljs.core.chunk_first(seq__18671_19599__$1);
var G__19601 = cljs.core.chunk_rest(seq__18671_19599__$1);
var G__19602 = c__5568__auto___19600;
var G__19603 = cljs.core.count(c__5568__auto___19600);
var G__19604 = (0);
seq__18671_19587 = G__19601;
chunk__18672_19588 = G__19602;
count__18673_19589 = G__19603;
i__18674_19590 = G__19604;
continue;
} else {
var vec__18704_19605 = cljs.core.first(seq__18671_19599__$1);
var k_19606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18704_19605,(0),null);
var v_19607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18704_19605,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19606);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19606),v_19607);


var G__19608 = cljs.core.next(seq__18671_19599__$1);
var G__19609 = null;
var G__19610 = (0);
var G__19611 = (0);
seq__18671_19587 = G__19608;
chunk__18672_19588 = G__19609;
count__18673_19589 = G__19610;
i__18674_19590 = G__19611;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18711 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18711,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18711,(1),null);
var seq__18714_19615 = cljs.core.seq(node_children);
var chunk__18716_19616 = null;
var count__18717_19617 = (0);
var i__18718_19618 = (0);
while(true){
if((i__18718_19618 < count__18717_19617)){
var child_struct_19619 = chunk__18716_19616.cljs$core$IIndexed$_nth$arity$2(null,i__18718_19618);
if((!((child_struct_19619 == null)))){
if(typeof child_struct_19619 === 'string'){
var text_19620 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19620),child_struct_19619].join(''));
} else {
var children_19622 = shadow.dom.svg_node(child_struct_19619);
if(cljs.core.seq_QMARK_(children_19622)){
var seq__18754_19623 = cljs.core.seq(children_19622);
var chunk__18756_19624 = null;
var count__18757_19625 = (0);
var i__18758_19626 = (0);
while(true){
if((i__18758_19626 < count__18757_19625)){
var child_19627 = chunk__18756_19624.cljs$core$IIndexed$_nth$arity$2(null,i__18758_19626);
if(cljs.core.truth_(child_19627)){
node.appendChild(child_19627);


var G__19628 = seq__18754_19623;
var G__19629 = chunk__18756_19624;
var G__19630 = count__18757_19625;
var G__19631 = (i__18758_19626 + (1));
seq__18754_19623 = G__19628;
chunk__18756_19624 = G__19629;
count__18757_19625 = G__19630;
i__18758_19626 = G__19631;
continue;
} else {
var G__19632 = seq__18754_19623;
var G__19633 = chunk__18756_19624;
var G__19634 = count__18757_19625;
var G__19635 = (i__18758_19626 + (1));
seq__18754_19623 = G__19632;
chunk__18756_19624 = G__19633;
count__18757_19625 = G__19634;
i__18758_19626 = G__19635;
continue;
}
} else {
var temp__5804__auto___19637 = cljs.core.seq(seq__18754_19623);
if(temp__5804__auto___19637){
var seq__18754_19638__$1 = temp__5804__auto___19637;
if(cljs.core.chunked_seq_QMARK_(seq__18754_19638__$1)){
var c__5568__auto___19639 = cljs.core.chunk_first(seq__18754_19638__$1);
var G__19640 = cljs.core.chunk_rest(seq__18754_19638__$1);
var G__19641 = c__5568__auto___19639;
var G__19642 = cljs.core.count(c__5568__auto___19639);
var G__19643 = (0);
seq__18754_19623 = G__19640;
chunk__18756_19624 = G__19641;
count__18757_19625 = G__19642;
i__18758_19626 = G__19643;
continue;
} else {
var child_19644 = cljs.core.first(seq__18754_19638__$1);
if(cljs.core.truth_(child_19644)){
node.appendChild(child_19644);


var G__19645 = cljs.core.next(seq__18754_19638__$1);
var G__19646 = null;
var G__19647 = (0);
var G__19648 = (0);
seq__18754_19623 = G__19645;
chunk__18756_19624 = G__19646;
count__18757_19625 = G__19647;
i__18758_19626 = G__19648;
continue;
} else {
var G__19649 = cljs.core.next(seq__18754_19638__$1);
var G__19650 = null;
var G__19651 = (0);
var G__19652 = (0);
seq__18754_19623 = G__19649;
chunk__18756_19624 = G__19650;
count__18757_19625 = G__19651;
i__18758_19626 = G__19652;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19622);
}
}


var G__19653 = seq__18714_19615;
var G__19654 = chunk__18716_19616;
var G__19655 = count__18717_19617;
var G__19656 = (i__18718_19618 + (1));
seq__18714_19615 = G__19653;
chunk__18716_19616 = G__19654;
count__18717_19617 = G__19655;
i__18718_19618 = G__19656;
continue;
} else {
var G__19657 = seq__18714_19615;
var G__19658 = chunk__18716_19616;
var G__19659 = count__18717_19617;
var G__19660 = (i__18718_19618 + (1));
seq__18714_19615 = G__19657;
chunk__18716_19616 = G__19658;
count__18717_19617 = G__19659;
i__18718_19618 = G__19660;
continue;
}
} else {
var temp__5804__auto___19662 = cljs.core.seq(seq__18714_19615);
if(temp__5804__auto___19662){
var seq__18714_19663__$1 = temp__5804__auto___19662;
if(cljs.core.chunked_seq_QMARK_(seq__18714_19663__$1)){
var c__5568__auto___19667 = cljs.core.chunk_first(seq__18714_19663__$1);
var G__19668 = cljs.core.chunk_rest(seq__18714_19663__$1);
var G__19669 = c__5568__auto___19667;
var G__19670 = cljs.core.count(c__5568__auto___19667);
var G__19671 = (0);
seq__18714_19615 = G__19668;
chunk__18716_19616 = G__19669;
count__18717_19617 = G__19670;
i__18718_19618 = G__19671;
continue;
} else {
var child_struct_19672 = cljs.core.first(seq__18714_19663__$1);
if((!((child_struct_19672 == null)))){
if(typeof child_struct_19672 === 'string'){
var text_19673 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19673),child_struct_19672].join(''));
} else {
var children_19674 = shadow.dom.svg_node(child_struct_19672);
if(cljs.core.seq_QMARK_(children_19674)){
var seq__18762_19675 = cljs.core.seq(children_19674);
var chunk__18765_19676 = null;
var count__18766_19677 = (0);
var i__18767_19678 = (0);
while(true){
if((i__18767_19678 < count__18766_19677)){
var child_19679 = chunk__18765_19676.cljs$core$IIndexed$_nth$arity$2(null,i__18767_19678);
if(cljs.core.truth_(child_19679)){
node.appendChild(child_19679);


var G__19680 = seq__18762_19675;
var G__19681 = chunk__18765_19676;
var G__19682 = count__18766_19677;
var G__19683 = (i__18767_19678 + (1));
seq__18762_19675 = G__19680;
chunk__18765_19676 = G__19681;
count__18766_19677 = G__19682;
i__18767_19678 = G__19683;
continue;
} else {
var G__19684 = seq__18762_19675;
var G__19685 = chunk__18765_19676;
var G__19686 = count__18766_19677;
var G__19687 = (i__18767_19678 + (1));
seq__18762_19675 = G__19684;
chunk__18765_19676 = G__19685;
count__18766_19677 = G__19686;
i__18767_19678 = G__19687;
continue;
}
} else {
var temp__5804__auto___19688__$1 = cljs.core.seq(seq__18762_19675);
if(temp__5804__auto___19688__$1){
var seq__18762_19689__$1 = temp__5804__auto___19688__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18762_19689__$1)){
var c__5568__auto___19690 = cljs.core.chunk_first(seq__18762_19689__$1);
var G__19693 = cljs.core.chunk_rest(seq__18762_19689__$1);
var G__19694 = c__5568__auto___19690;
var G__19695 = cljs.core.count(c__5568__auto___19690);
var G__19696 = (0);
seq__18762_19675 = G__19693;
chunk__18765_19676 = G__19694;
count__18766_19677 = G__19695;
i__18767_19678 = G__19696;
continue;
} else {
var child_19697 = cljs.core.first(seq__18762_19689__$1);
if(cljs.core.truth_(child_19697)){
node.appendChild(child_19697);


var G__19700 = cljs.core.next(seq__18762_19689__$1);
var G__19701 = null;
var G__19702 = (0);
var G__19703 = (0);
seq__18762_19675 = G__19700;
chunk__18765_19676 = G__19701;
count__18766_19677 = G__19702;
i__18767_19678 = G__19703;
continue;
} else {
var G__19704 = cljs.core.next(seq__18762_19689__$1);
var G__19705 = null;
var G__19706 = (0);
var G__19707 = (0);
seq__18762_19675 = G__19704;
chunk__18765_19676 = G__19705;
count__18766_19677 = G__19706;
i__18767_19678 = G__19707;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19674);
}
}


var G__19708 = cljs.core.next(seq__18714_19663__$1);
var G__19709 = null;
var G__19710 = (0);
var G__19711 = (0);
seq__18714_19615 = G__19708;
chunk__18716_19616 = G__19709;
count__18717_19617 = G__19710;
i__18718_19618 = G__19711;
continue;
} else {
var G__19712 = cljs.core.next(seq__18714_19663__$1);
var G__19713 = null;
var G__19714 = (0);
var G__19715 = (0);
seq__18714_19615 = G__19712;
chunk__18716_19616 = G__19713;
count__18717_19617 = G__19714;
i__18718_19618 = G__19715;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19721 = arguments.length;
var i__5770__auto___19722 = (0);
while(true){
if((i__5770__auto___19722 < len__5769__auto___19721)){
args__5775__auto__.push((arguments[i__5770__auto___19722]));

var G__19723 = (i__5770__auto___19722 + (1));
i__5770__auto___19722 = G__19723;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18793){
var G__18794 = cljs.core.first(seq18793);
var seq18793__$1 = cljs.core.next(seq18793);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18794,seq18793__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18836 = arguments.length;
switch (G__18836) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13741__auto___19729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_18862){
var state_val_18865 = (state_18862[(1)]);
if((state_val_18865 === (1))){
var state_18862__$1 = state_18862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18862__$1,(2),once_or_cleanup);
} else {
if((state_val_18865 === (2))){
var inst_18852 = (state_18862[(2)]);
var inst_18853 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18862__$1 = (function (){var statearr_18878 = state_18862;
(statearr_18878[(7)] = inst_18852);

return statearr_18878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18862__$1,inst_18853);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13515__auto__ = null;
var shadow$dom$state_machine__13515__auto____0 = (function (){
var statearr_18890 = [null,null,null,null,null,null,null,null];
(statearr_18890[(0)] = shadow$dom$state_machine__13515__auto__);

(statearr_18890[(1)] = (1));

return statearr_18890;
});
var shadow$dom$state_machine__13515__auto____1 = (function (state_18862){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_18862);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e18902){var ex__13518__auto__ = e18902;
var statearr_19001_19732 = state_18862;
(statearr_19001_19732[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_18862[(4)]))){
var statearr_19002_19735 = state_18862;
(statearr_19002_19735[(1)] = cljs.core.first((state_18862[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19737 = state_18862;
state_18862 = G__19737;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
shadow$dom$state_machine__13515__auto__ = function(state_18862){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13515__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13515__auto____1.call(this,state_18862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13515__auto____0;
shadow$dom$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13515__auto____1;
return shadow$dom$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_19004 = f__13742__auto__();
(statearr_19004[(6)] = c__13741__auto___19729);

return statearr_19004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
