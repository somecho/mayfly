goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13924){
var map__13925 = p__13924;
var map__13925__$1 = cljs.core.__destructure_map(map__13925);
var runtime = map__13925__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13925__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14123 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14123)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13933 = runtime;
var G__13934 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14123);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13933,G__13934) : shadow.remote.runtime.shared.process.call(null,G__13933,G__13934));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13937,res){
var map__13938 = p__13937;
var map__13938__$1 = cljs.core.__destructure_map(map__13938);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13938__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13938__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13942 = res;
var G__13942__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13942,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13942);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13942__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13942__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13944 = arguments.length;
switch (G__13944) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13945,msg,handlers,timeout_after_ms){
var map__13946 = p__13945;
var map__13946__$1 = cljs.core.__destructure_map(map__13946);
var runtime = map__13946__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14148 = arguments.length;
var i__5770__auto___14152 = (0);
while(true){
if((i__5770__auto___14152 < len__5769__auto___14148)){
args__5775__auto__.push((arguments[i__5770__auto___14152]));

var G__14154 = (i__5770__auto___14152 + (1));
i__5770__auto___14152 = G__14154;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13963,ev,args){
var map__13964 = p__13963;
var map__13964__$1 = cljs.core.__destructure_map(map__13964);
var runtime = map__13964__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13964__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13966 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13970 = null;
var count__13971 = (0);
var i__13972 = (0);
while(true){
if((i__13972 < count__13971)){
var ext = chunk__13970.cljs$core$IIndexed$_nth$arity$2(null,i__13972);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14162 = seq__13966;
var G__14163 = chunk__13970;
var G__14164 = count__13971;
var G__14165 = (i__13972 + (1));
seq__13966 = G__14162;
chunk__13970 = G__14163;
count__13971 = G__14164;
i__13972 = G__14165;
continue;
} else {
var G__14169 = seq__13966;
var G__14170 = chunk__13970;
var G__14171 = count__13971;
var G__14172 = (i__13972 + (1));
seq__13966 = G__14169;
chunk__13970 = G__14170;
count__13971 = G__14171;
i__13972 = G__14172;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13966);
if(temp__5804__auto__){
var seq__13966__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13966__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13966__$1);
var G__14176 = cljs.core.chunk_rest(seq__13966__$1);
var G__14177 = c__5568__auto__;
var G__14178 = cljs.core.count(c__5568__auto__);
var G__14179 = (0);
seq__13966 = G__14176;
chunk__13970 = G__14177;
count__13971 = G__14178;
i__13972 = G__14179;
continue;
} else {
var ext = cljs.core.first(seq__13966__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14180 = cljs.core.next(seq__13966__$1);
var G__14181 = null;
var G__14182 = (0);
var G__14183 = (0);
seq__13966 = G__14180;
chunk__13970 = G__14181;
count__13971 = G__14182;
i__13972 = G__14183;
continue;
} else {
var G__14186 = cljs.core.next(seq__13966__$1);
var G__14187 = null;
var G__14188 = (0);
var G__14189 = (0);
seq__13966 = G__14186;
chunk__13970 = G__14187;
count__13971 = G__14188;
i__13972 = G__14189;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13959){
var G__13960 = cljs.core.first(seq13959);
var seq13959__$1 = cljs.core.next(seq13959);
var G__13961 = cljs.core.first(seq13959__$1);
var seq13959__$2 = cljs.core.next(seq13959__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13960,G__13961,seq13959__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13979,p__13980){
var map__13981 = p__13979;
var map__13981__$1 = cljs.core.__destructure_map(map__13981);
var runtime = map__13981__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13981__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13982 = p__13980;
var map__13982__$1 = cljs.core.__destructure_map(map__13982);
var msg = map__13982__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13982__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13984 = cljs.core.deref(state_ref);
var map__13984__$1 = cljs.core.__destructure_map(map__13984);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13989,msg){
var map__13990 = p__13989;
var map__13990__$1 = cljs.core.__destructure_map(map__13990);
var runtime = map__13990__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13993,key,p__13994){
var map__13995 = p__13993;
var map__13995__$1 = cljs.core.__destructure_map(map__13995);
var state = map__13995__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13995__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13996 = p__13994;
var map__13996__$1 = cljs.core.__destructure_map(map__13996);
var spec = map__13996__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13996__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13998,key,spec){
var map__13999 = p__13998;
var map__13999__$1 = cljs.core.__destructure_map(map__13999);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13999__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14005_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14005_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14006_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14006_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14007_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14007_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14008_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14008_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14009_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14009_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14038,key){
var map__14040 = p__14038;
var map__14040__$1 = cljs.core.__destructure_map(map__14040);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14040__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14045,msg){
var map__14046 = p__14045;
var map__14046__$1 = cljs.core.__destructure_map(map__14046);
var runtime = map__14046__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14055,p__14056){
var map__14057 = p__14055;
var map__14057__$1 = cljs.core.__destructure_map(map__14057);
var runtime = map__14057__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14057__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14058 = p__14056;
var map__14058__$1 = cljs.core.__destructure_map(map__14058);
var msg = map__14058__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14058__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14058__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14077 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14079 = null;
var count__14080 = (0);
var i__14081 = (0);
while(true){
if((i__14081 < count__14080)){
var map__14105 = chunk__14079.cljs$core$IIndexed$_nth$arity$2(null,i__14081);
var map__14105__$1 = cljs.core.__destructure_map(map__14105);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14105__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14257 = seq__14077;
var G__14258 = chunk__14079;
var G__14259 = count__14080;
var G__14260 = (i__14081 + (1));
seq__14077 = G__14257;
chunk__14079 = G__14258;
count__14080 = G__14259;
i__14081 = G__14260;
continue;
} else {
var G__14261 = seq__14077;
var G__14262 = chunk__14079;
var G__14263 = count__14080;
var G__14264 = (i__14081 + (1));
seq__14077 = G__14261;
chunk__14079 = G__14262;
count__14080 = G__14263;
i__14081 = G__14264;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14077);
if(temp__5804__auto__){
var seq__14077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14077__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14077__$1);
var G__14267 = cljs.core.chunk_rest(seq__14077__$1);
var G__14268 = c__5568__auto__;
var G__14269 = cljs.core.count(c__5568__auto__);
var G__14270 = (0);
seq__14077 = G__14267;
chunk__14079 = G__14268;
count__14080 = G__14269;
i__14081 = G__14270;
continue;
} else {
var map__14110 = cljs.core.first(seq__14077__$1);
var map__14110__$1 = cljs.core.__destructure_map(map__14110);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14110__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14272 = cljs.core.next(seq__14077__$1);
var G__14273 = null;
var G__14274 = (0);
var G__14275 = (0);
seq__14077 = G__14272;
chunk__14079 = G__14273;
count__14080 = G__14274;
i__14081 = G__14275;
continue;
} else {
var G__14276 = cljs.core.next(seq__14077__$1);
var G__14277 = null;
var G__14278 = (0);
var G__14279 = (0);
seq__14077 = G__14276;
chunk__14079 = G__14277;
count__14080 = G__14278;
i__14081 = G__14279;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
