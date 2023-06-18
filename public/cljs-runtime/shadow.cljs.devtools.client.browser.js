goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21478 = arguments.length;
var i__5770__auto___21479 = (0);
while(true){
if((i__5770__auto___21479 < len__5769__auto___21478)){
args__5775__auto__.push((arguments[i__5770__auto___21479]));

var G__21480 = (i__5770__auto___21479 + (1));
i__5770__auto___21479 = G__21480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21037){
var G__21038 = cljs.core.first(seq21037);
var seq21037__$1 = cljs.core.next(seq21037);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21038,seq21037__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21045 = cljs.core.seq(sources);
var chunk__21046 = null;
var count__21047 = (0);
var i__21048 = (0);
while(true){
if((i__21048 < count__21047)){
var map__21071 = chunk__21046.cljs$core$IIndexed$_nth$arity$2(null,i__21048);
var map__21071__$1 = cljs.core.__destructure_map(map__21071);
var src = map__21071__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21071__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21071__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21071__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21071__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21074){var e_21481 = e21074;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21481);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21481.message)].join('')));
}

var G__21482 = seq__21045;
var G__21483 = chunk__21046;
var G__21484 = count__21047;
var G__21485 = (i__21048 + (1));
seq__21045 = G__21482;
chunk__21046 = G__21483;
count__21047 = G__21484;
i__21048 = G__21485;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21045);
if(temp__5804__auto__){
var seq__21045__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21045__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21045__$1);
var G__21486 = cljs.core.chunk_rest(seq__21045__$1);
var G__21487 = c__5568__auto__;
var G__21488 = cljs.core.count(c__5568__auto__);
var G__21489 = (0);
seq__21045 = G__21486;
chunk__21046 = G__21487;
count__21047 = G__21488;
i__21048 = G__21489;
continue;
} else {
var map__21076 = cljs.core.first(seq__21045__$1);
var map__21076__$1 = cljs.core.__destructure_map(map__21076);
var src = map__21076__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21076__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21076__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21076__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21076__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21077){var e_21490 = e21077;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21490);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21490.message)].join('')));
}

var G__21491 = cljs.core.next(seq__21045__$1);
var G__21492 = null;
var G__21493 = (0);
var G__21494 = (0);
seq__21045 = G__21491;
chunk__21046 = G__21492;
count__21047 = G__21493;
i__21048 = G__21494;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21082 = cljs.core.seq(js_requires);
var chunk__21083 = null;
var count__21084 = (0);
var i__21085 = (0);
while(true){
if((i__21085 < count__21084)){
var js_ns = chunk__21083.cljs$core$IIndexed$_nth$arity$2(null,i__21085);
var require_str_21499 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21499);


var G__21500 = seq__21082;
var G__21501 = chunk__21083;
var G__21502 = count__21084;
var G__21503 = (i__21085 + (1));
seq__21082 = G__21500;
chunk__21083 = G__21501;
count__21084 = G__21502;
i__21085 = G__21503;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21082);
if(temp__5804__auto__){
var seq__21082__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21082__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21082__$1);
var G__21504 = cljs.core.chunk_rest(seq__21082__$1);
var G__21505 = c__5568__auto__;
var G__21506 = cljs.core.count(c__5568__auto__);
var G__21507 = (0);
seq__21082 = G__21504;
chunk__21083 = G__21505;
count__21084 = G__21506;
i__21085 = G__21507;
continue;
} else {
var js_ns = cljs.core.first(seq__21082__$1);
var require_str_21508 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21508);


var G__21509 = cljs.core.next(seq__21082__$1);
var G__21510 = null;
var G__21511 = (0);
var G__21512 = (0);
seq__21082 = G__21509;
chunk__21083 = G__21510;
count__21084 = G__21511;
i__21085 = G__21512;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21089){
var map__21090 = p__21089;
var map__21090__$1 = cljs.core.__destructure_map(map__21090);
var msg = map__21090__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21091(s__21092){
return (new cljs.core.LazySeq(null,(function (){
var s__21092__$1 = s__21092;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21092__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21100 = cljs.core.first(xs__6360__auto__);
var map__21100__$1 = cljs.core.__destructure_map(map__21100);
var src = map__21100__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21100__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21100__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__21092__$1,map__21100,map__21100__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21090,map__21090__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21091_$_iter__21093(s__21094){
return (new cljs.core.LazySeq(null,((function (s__21092__$1,map__21100,map__21100__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21090,map__21090__$1,msg,info,reload_info){
return (function (){
var s__21094__$1 = s__21094;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21094__$1);
if(temp__5804__auto____$1){
var s__21094__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21094__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21094__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21096 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21095 = (0);
while(true){
if((i__21095 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__21095);
cljs.core.chunk_append(b__21096,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21513 = (i__21095 + (1));
i__21095 = G__21513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21096),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21091_$_iter__21093(cljs.core.chunk_rest(s__21094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21096),null);
}
} else {
var warning = cljs.core.first(s__21094__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21091_$_iter__21093(cljs.core.rest(s__21094__$2)));
}
} else {
return null;
}
break;
}
});})(s__21092__$1,map__21100,map__21100__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21090,map__21090__$1,msg,info,reload_info))
,null,null));
});})(s__21092__$1,map__21100,map__21100__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21090,map__21090__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21091(cljs.core.rest(s__21092__$1)));
} else {
var G__21514 = cljs.core.rest(s__21092__$1);
s__21092__$1 = G__21514;
continue;
}
} else {
var G__21515 = cljs.core.rest(s__21092__$1);
s__21092__$1 = G__21515;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21101_21516 = cljs.core.seq(warnings);
var chunk__21102_21517 = null;
var count__21103_21518 = (0);
var i__21104_21519 = (0);
while(true){
if((i__21104_21519 < count__21103_21518)){
var map__21111_21520 = chunk__21102_21517.cljs$core$IIndexed$_nth$arity$2(null,i__21104_21519);
var map__21111_21521__$1 = cljs.core.__destructure_map(map__21111_21520);
var w_21522 = map__21111_21521__$1;
var msg_21523__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21111_21521__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21111_21521__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21111_21521__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21111_21521__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21526)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21524),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21525),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21523__$1)].join(''));


var G__21527 = seq__21101_21516;
var G__21528 = chunk__21102_21517;
var G__21529 = count__21103_21518;
var G__21530 = (i__21104_21519 + (1));
seq__21101_21516 = G__21527;
chunk__21102_21517 = G__21528;
count__21103_21518 = G__21529;
i__21104_21519 = G__21530;
continue;
} else {
var temp__5804__auto___21531 = cljs.core.seq(seq__21101_21516);
if(temp__5804__auto___21531){
var seq__21101_21532__$1 = temp__5804__auto___21531;
if(cljs.core.chunked_seq_QMARK_(seq__21101_21532__$1)){
var c__5568__auto___21533 = cljs.core.chunk_first(seq__21101_21532__$1);
var G__21534 = cljs.core.chunk_rest(seq__21101_21532__$1);
var G__21535 = c__5568__auto___21533;
var G__21536 = cljs.core.count(c__5568__auto___21533);
var G__21537 = (0);
seq__21101_21516 = G__21534;
chunk__21102_21517 = G__21535;
count__21103_21518 = G__21536;
i__21104_21519 = G__21537;
continue;
} else {
var map__21112_21538 = cljs.core.first(seq__21101_21532__$1);
var map__21112_21539__$1 = cljs.core.__destructure_map(map__21112_21538);
var w_21540 = map__21112_21539__$1;
var msg_21541__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21112_21539__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21112_21539__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21112_21539__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21112_21539__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21544)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21542),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21543),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21541__$1)].join(''));


var G__21545 = cljs.core.next(seq__21101_21532__$1);
var G__21546 = null;
var G__21547 = (0);
var G__21548 = (0);
seq__21101_21516 = G__21545;
chunk__21102_21517 = G__21546;
count__21103_21518 = G__21547;
i__21104_21519 = G__21548;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21088_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21088_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21113){
var map__21114 = p__21113;
var map__21114__$1 = cljs.core.__destructure_map(map__21114);
var msg = map__21114__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21115 = cljs.core.seq(updates);
var chunk__21117 = null;
var count__21118 = (0);
var i__21119 = (0);
while(true){
if((i__21119 < count__21118)){
var path = chunk__21117.cljs$core$IIndexed$_nth$arity$2(null,i__21119);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21306_21550 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21310_21551 = null;
var count__21311_21552 = (0);
var i__21312_21553 = (0);
while(true){
if((i__21312_21553 < count__21311_21552)){
var node_21554 = chunk__21310_21551.cljs$core$IIndexed$_nth$arity$2(null,i__21312_21553);
if(cljs.core.not(node_21554.shadow$old)){
var path_match_21555 = shadow.cljs.devtools.client.browser.match_paths(node_21554.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21555)){
var new_link_21556 = (function (){var G__21344 = node_21554.cloneNode(true);
G__21344.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21555),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21344;
})();
(node_21554.shadow$old = true);

(new_link_21556.onload = ((function (seq__21306_21550,chunk__21310_21551,count__21311_21552,i__21312_21553,seq__21115,chunk__21117,count__21118,i__21119,new_link_21556,path_match_21555,node_21554,path,map__21114,map__21114__$1,msg,updates,reload_info){
return (function (e){
var seq__21345_21557 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21347_21558 = null;
var count__21348_21559 = (0);
var i__21349_21560 = (0);
while(true){
if((i__21349_21560 < count__21348_21559)){
var map__21353_21561 = chunk__21347_21558.cljs$core$IIndexed$_nth$arity$2(null,i__21349_21560);
var map__21353_21562__$1 = cljs.core.__destructure_map(map__21353_21561);
var task_21563 = map__21353_21562__$1;
var fn_str_21564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353_21562__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353_21562__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21566 = goog.getObjectByName(fn_str_21564,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21565)].join(''));

(fn_obj_21566.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21566.cljs$core$IFn$_invoke$arity$2(path,new_link_21556) : fn_obj_21566.call(null,path,new_link_21556));


var G__21567 = seq__21345_21557;
var G__21568 = chunk__21347_21558;
var G__21569 = count__21348_21559;
var G__21570 = (i__21349_21560 + (1));
seq__21345_21557 = G__21567;
chunk__21347_21558 = G__21568;
count__21348_21559 = G__21569;
i__21349_21560 = G__21570;
continue;
} else {
var temp__5804__auto___21571 = cljs.core.seq(seq__21345_21557);
if(temp__5804__auto___21571){
var seq__21345_21572__$1 = temp__5804__auto___21571;
if(cljs.core.chunked_seq_QMARK_(seq__21345_21572__$1)){
var c__5568__auto___21573 = cljs.core.chunk_first(seq__21345_21572__$1);
var G__21574 = cljs.core.chunk_rest(seq__21345_21572__$1);
var G__21575 = c__5568__auto___21573;
var G__21576 = cljs.core.count(c__5568__auto___21573);
var G__21577 = (0);
seq__21345_21557 = G__21574;
chunk__21347_21558 = G__21575;
count__21348_21559 = G__21576;
i__21349_21560 = G__21577;
continue;
} else {
var map__21354_21578 = cljs.core.first(seq__21345_21572__$1);
var map__21354_21579__$1 = cljs.core.__destructure_map(map__21354_21578);
var task_21580 = map__21354_21579__$1;
var fn_str_21581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354_21579__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354_21579__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21583 = goog.getObjectByName(fn_str_21581,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21582)].join(''));

(fn_obj_21583.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21583.cljs$core$IFn$_invoke$arity$2(path,new_link_21556) : fn_obj_21583.call(null,path,new_link_21556));


var G__21585 = cljs.core.next(seq__21345_21572__$1);
var G__21586 = null;
var G__21587 = (0);
var G__21588 = (0);
seq__21345_21557 = G__21585;
chunk__21347_21558 = G__21586;
count__21348_21559 = G__21587;
i__21349_21560 = G__21588;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21554);
});})(seq__21306_21550,chunk__21310_21551,count__21311_21552,i__21312_21553,seq__21115,chunk__21117,count__21118,i__21119,new_link_21556,path_match_21555,node_21554,path,map__21114,map__21114__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21555], 0));

goog.dom.insertSiblingAfter(new_link_21556,node_21554);


var G__21589 = seq__21306_21550;
var G__21590 = chunk__21310_21551;
var G__21591 = count__21311_21552;
var G__21592 = (i__21312_21553 + (1));
seq__21306_21550 = G__21589;
chunk__21310_21551 = G__21590;
count__21311_21552 = G__21591;
i__21312_21553 = G__21592;
continue;
} else {
var G__21593 = seq__21306_21550;
var G__21594 = chunk__21310_21551;
var G__21595 = count__21311_21552;
var G__21596 = (i__21312_21553 + (1));
seq__21306_21550 = G__21593;
chunk__21310_21551 = G__21594;
count__21311_21552 = G__21595;
i__21312_21553 = G__21596;
continue;
}
} else {
var G__21597 = seq__21306_21550;
var G__21598 = chunk__21310_21551;
var G__21599 = count__21311_21552;
var G__21600 = (i__21312_21553 + (1));
seq__21306_21550 = G__21597;
chunk__21310_21551 = G__21598;
count__21311_21552 = G__21599;
i__21312_21553 = G__21600;
continue;
}
} else {
var temp__5804__auto___21601 = cljs.core.seq(seq__21306_21550);
if(temp__5804__auto___21601){
var seq__21306_21602__$1 = temp__5804__auto___21601;
if(cljs.core.chunked_seq_QMARK_(seq__21306_21602__$1)){
var c__5568__auto___21603 = cljs.core.chunk_first(seq__21306_21602__$1);
var G__21604 = cljs.core.chunk_rest(seq__21306_21602__$1);
var G__21605 = c__5568__auto___21603;
var G__21606 = cljs.core.count(c__5568__auto___21603);
var G__21607 = (0);
seq__21306_21550 = G__21604;
chunk__21310_21551 = G__21605;
count__21311_21552 = G__21606;
i__21312_21553 = G__21607;
continue;
} else {
var node_21608 = cljs.core.first(seq__21306_21602__$1);
if(cljs.core.not(node_21608.shadow$old)){
var path_match_21609 = shadow.cljs.devtools.client.browser.match_paths(node_21608.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21609)){
var new_link_21610 = (function (){var G__21359 = node_21608.cloneNode(true);
G__21359.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21609),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21359;
})();
(node_21608.shadow$old = true);

(new_link_21610.onload = ((function (seq__21306_21550,chunk__21310_21551,count__21311_21552,i__21312_21553,seq__21115,chunk__21117,count__21118,i__21119,new_link_21610,path_match_21609,node_21608,seq__21306_21602__$1,temp__5804__auto___21601,path,map__21114,map__21114__$1,msg,updates,reload_info){
return (function (e){
var seq__21360_21613 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21362_21614 = null;
var count__21363_21615 = (0);
var i__21364_21616 = (0);
while(true){
if((i__21364_21616 < count__21363_21615)){
var map__21370_21617 = chunk__21362_21614.cljs$core$IIndexed$_nth$arity$2(null,i__21364_21616);
var map__21370_21618__$1 = cljs.core.__destructure_map(map__21370_21617);
var task_21619 = map__21370_21618__$1;
var fn_str_21620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370_21618__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370_21618__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21622 = goog.getObjectByName(fn_str_21620,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21621)].join(''));

(fn_obj_21622.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21622.cljs$core$IFn$_invoke$arity$2(path,new_link_21610) : fn_obj_21622.call(null,path,new_link_21610));


var G__21623 = seq__21360_21613;
var G__21624 = chunk__21362_21614;
var G__21625 = count__21363_21615;
var G__21626 = (i__21364_21616 + (1));
seq__21360_21613 = G__21623;
chunk__21362_21614 = G__21624;
count__21363_21615 = G__21625;
i__21364_21616 = G__21626;
continue;
} else {
var temp__5804__auto___21627__$1 = cljs.core.seq(seq__21360_21613);
if(temp__5804__auto___21627__$1){
var seq__21360_21628__$1 = temp__5804__auto___21627__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21360_21628__$1)){
var c__5568__auto___21632 = cljs.core.chunk_first(seq__21360_21628__$1);
var G__21633 = cljs.core.chunk_rest(seq__21360_21628__$1);
var G__21634 = c__5568__auto___21632;
var G__21635 = cljs.core.count(c__5568__auto___21632);
var G__21636 = (0);
seq__21360_21613 = G__21633;
chunk__21362_21614 = G__21634;
count__21363_21615 = G__21635;
i__21364_21616 = G__21636;
continue;
} else {
var map__21371_21637 = cljs.core.first(seq__21360_21628__$1);
var map__21371_21638__$1 = cljs.core.__destructure_map(map__21371_21637);
var task_21639 = map__21371_21638__$1;
var fn_str_21640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21371_21638__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21371_21638__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21642 = goog.getObjectByName(fn_str_21640,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21641)].join(''));

(fn_obj_21642.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21642.cljs$core$IFn$_invoke$arity$2(path,new_link_21610) : fn_obj_21642.call(null,path,new_link_21610));


var G__21643 = cljs.core.next(seq__21360_21628__$1);
var G__21644 = null;
var G__21645 = (0);
var G__21646 = (0);
seq__21360_21613 = G__21643;
chunk__21362_21614 = G__21644;
count__21363_21615 = G__21645;
i__21364_21616 = G__21646;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21608);
});})(seq__21306_21550,chunk__21310_21551,count__21311_21552,i__21312_21553,seq__21115,chunk__21117,count__21118,i__21119,new_link_21610,path_match_21609,node_21608,seq__21306_21602__$1,temp__5804__auto___21601,path,map__21114,map__21114__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21609], 0));

goog.dom.insertSiblingAfter(new_link_21610,node_21608);


var G__21647 = cljs.core.next(seq__21306_21602__$1);
var G__21648 = null;
var G__21649 = (0);
var G__21650 = (0);
seq__21306_21550 = G__21647;
chunk__21310_21551 = G__21648;
count__21311_21552 = G__21649;
i__21312_21553 = G__21650;
continue;
} else {
var G__21651 = cljs.core.next(seq__21306_21602__$1);
var G__21652 = null;
var G__21653 = (0);
var G__21654 = (0);
seq__21306_21550 = G__21651;
chunk__21310_21551 = G__21652;
count__21311_21552 = G__21653;
i__21312_21553 = G__21654;
continue;
}
} else {
var G__21655 = cljs.core.next(seq__21306_21602__$1);
var G__21656 = null;
var G__21657 = (0);
var G__21658 = (0);
seq__21306_21550 = G__21655;
chunk__21310_21551 = G__21656;
count__21311_21552 = G__21657;
i__21312_21553 = G__21658;
continue;
}
}
} else {
}
}
break;
}


var G__21659 = seq__21115;
var G__21660 = chunk__21117;
var G__21661 = count__21118;
var G__21662 = (i__21119 + (1));
seq__21115 = G__21659;
chunk__21117 = G__21660;
count__21118 = G__21661;
i__21119 = G__21662;
continue;
} else {
var G__21663 = seq__21115;
var G__21664 = chunk__21117;
var G__21665 = count__21118;
var G__21666 = (i__21119 + (1));
seq__21115 = G__21663;
chunk__21117 = G__21664;
count__21118 = G__21665;
i__21119 = G__21666;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21115);
if(temp__5804__auto__){
var seq__21115__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21115__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21115__$1);
var G__21667 = cljs.core.chunk_rest(seq__21115__$1);
var G__21668 = c__5568__auto__;
var G__21669 = cljs.core.count(c__5568__auto__);
var G__21670 = (0);
seq__21115 = G__21667;
chunk__21117 = G__21668;
count__21118 = G__21669;
i__21119 = G__21670;
continue;
} else {
var path = cljs.core.first(seq__21115__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21375_21671 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21379_21672 = null;
var count__21380_21673 = (0);
var i__21381_21674 = (0);
while(true){
if((i__21381_21674 < count__21380_21673)){
var node_21675 = chunk__21379_21672.cljs$core$IIndexed$_nth$arity$2(null,i__21381_21674);
if(cljs.core.not(node_21675.shadow$old)){
var path_match_21676 = shadow.cljs.devtools.client.browser.match_paths(node_21675.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21676)){
var new_link_21677 = (function (){var G__21416 = node_21675.cloneNode(true);
G__21416.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21676),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21416;
})();
(node_21675.shadow$old = true);

(new_link_21677.onload = ((function (seq__21375_21671,chunk__21379_21672,count__21380_21673,i__21381_21674,seq__21115,chunk__21117,count__21118,i__21119,new_link_21677,path_match_21676,node_21675,path,seq__21115__$1,temp__5804__auto__,map__21114,map__21114__$1,msg,updates,reload_info){
return (function (e){
var seq__21417_21678 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21419_21679 = null;
var count__21420_21680 = (0);
var i__21421_21681 = (0);
while(true){
if((i__21421_21681 < count__21420_21680)){
var map__21427_21682 = chunk__21419_21679.cljs$core$IIndexed$_nth$arity$2(null,i__21421_21681);
var map__21427_21683__$1 = cljs.core.__destructure_map(map__21427_21682);
var task_21684 = map__21427_21683__$1;
var fn_str_21685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427_21683__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427_21683__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21687 = goog.getObjectByName(fn_str_21685,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21686)].join(''));

(fn_obj_21687.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21687.cljs$core$IFn$_invoke$arity$2(path,new_link_21677) : fn_obj_21687.call(null,path,new_link_21677));


var G__21688 = seq__21417_21678;
var G__21689 = chunk__21419_21679;
var G__21690 = count__21420_21680;
var G__21691 = (i__21421_21681 + (1));
seq__21417_21678 = G__21688;
chunk__21419_21679 = G__21689;
count__21420_21680 = G__21690;
i__21421_21681 = G__21691;
continue;
} else {
var temp__5804__auto___21692__$1 = cljs.core.seq(seq__21417_21678);
if(temp__5804__auto___21692__$1){
var seq__21417_21693__$1 = temp__5804__auto___21692__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21417_21693__$1)){
var c__5568__auto___21694 = cljs.core.chunk_first(seq__21417_21693__$1);
var G__21695 = cljs.core.chunk_rest(seq__21417_21693__$1);
var G__21696 = c__5568__auto___21694;
var G__21697 = cljs.core.count(c__5568__auto___21694);
var G__21698 = (0);
seq__21417_21678 = G__21695;
chunk__21419_21679 = G__21696;
count__21420_21680 = G__21697;
i__21421_21681 = G__21698;
continue;
} else {
var map__21433_21699 = cljs.core.first(seq__21417_21693__$1);
var map__21433_21700__$1 = cljs.core.__destructure_map(map__21433_21699);
var task_21701 = map__21433_21700__$1;
var fn_str_21702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21433_21700__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21433_21700__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21704 = goog.getObjectByName(fn_str_21702,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21703)].join(''));

(fn_obj_21704.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21704.cljs$core$IFn$_invoke$arity$2(path,new_link_21677) : fn_obj_21704.call(null,path,new_link_21677));


var G__21705 = cljs.core.next(seq__21417_21693__$1);
var G__21706 = null;
var G__21707 = (0);
var G__21708 = (0);
seq__21417_21678 = G__21705;
chunk__21419_21679 = G__21706;
count__21420_21680 = G__21707;
i__21421_21681 = G__21708;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21675);
});})(seq__21375_21671,chunk__21379_21672,count__21380_21673,i__21381_21674,seq__21115,chunk__21117,count__21118,i__21119,new_link_21677,path_match_21676,node_21675,path,seq__21115__$1,temp__5804__auto__,map__21114,map__21114__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21676], 0));

goog.dom.insertSiblingAfter(new_link_21677,node_21675);


var G__21709 = seq__21375_21671;
var G__21710 = chunk__21379_21672;
var G__21711 = count__21380_21673;
var G__21712 = (i__21381_21674 + (1));
seq__21375_21671 = G__21709;
chunk__21379_21672 = G__21710;
count__21380_21673 = G__21711;
i__21381_21674 = G__21712;
continue;
} else {
var G__21713 = seq__21375_21671;
var G__21714 = chunk__21379_21672;
var G__21715 = count__21380_21673;
var G__21716 = (i__21381_21674 + (1));
seq__21375_21671 = G__21713;
chunk__21379_21672 = G__21714;
count__21380_21673 = G__21715;
i__21381_21674 = G__21716;
continue;
}
} else {
var G__21717 = seq__21375_21671;
var G__21718 = chunk__21379_21672;
var G__21719 = count__21380_21673;
var G__21720 = (i__21381_21674 + (1));
seq__21375_21671 = G__21717;
chunk__21379_21672 = G__21718;
count__21380_21673 = G__21719;
i__21381_21674 = G__21720;
continue;
}
} else {
var temp__5804__auto___21721__$1 = cljs.core.seq(seq__21375_21671);
if(temp__5804__auto___21721__$1){
var seq__21375_21722__$1 = temp__5804__auto___21721__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21375_21722__$1)){
var c__5568__auto___21723 = cljs.core.chunk_first(seq__21375_21722__$1);
var G__21724 = cljs.core.chunk_rest(seq__21375_21722__$1);
var G__21725 = c__5568__auto___21723;
var G__21726 = cljs.core.count(c__5568__auto___21723);
var G__21727 = (0);
seq__21375_21671 = G__21724;
chunk__21379_21672 = G__21725;
count__21380_21673 = G__21726;
i__21381_21674 = G__21727;
continue;
} else {
var node_21728 = cljs.core.first(seq__21375_21722__$1);
if(cljs.core.not(node_21728.shadow$old)){
var path_match_21729 = shadow.cljs.devtools.client.browser.match_paths(node_21728.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21729)){
var new_link_21730 = (function (){var G__21434 = node_21728.cloneNode(true);
G__21434.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21729),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21434;
})();
(node_21728.shadow$old = true);

(new_link_21730.onload = ((function (seq__21375_21671,chunk__21379_21672,count__21380_21673,i__21381_21674,seq__21115,chunk__21117,count__21118,i__21119,new_link_21730,path_match_21729,node_21728,seq__21375_21722__$1,temp__5804__auto___21721__$1,path,seq__21115__$1,temp__5804__auto__,map__21114,map__21114__$1,msg,updates,reload_info){
return (function (e){
var seq__21435_21731 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21437_21732 = null;
var count__21438_21733 = (0);
var i__21439_21734 = (0);
while(true){
if((i__21439_21734 < count__21438_21733)){
var map__21444_21735 = chunk__21437_21732.cljs$core$IIndexed$_nth$arity$2(null,i__21439_21734);
var map__21444_21736__$1 = cljs.core.__destructure_map(map__21444_21735);
var task_21737 = map__21444_21736__$1;
var fn_str_21738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444_21736__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444_21736__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21740 = goog.getObjectByName(fn_str_21738,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21739)].join(''));

(fn_obj_21740.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21740.cljs$core$IFn$_invoke$arity$2(path,new_link_21730) : fn_obj_21740.call(null,path,new_link_21730));


var G__21741 = seq__21435_21731;
var G__21742 = chunk__21437_21732;
var G__21743 = count__21438_21733;
var G__21744 = (i__21439_21734 + (1));
seq__21435_21731 = G__21741;
chunk__21437_21732 = G__21742;
count__21438_21733 = G__21743;
i__21439_21734 = G__21744;
continue;
} else {
var temp__5804__auto___21745__$2 = cljs.core.seq(seq__21435_21731);
if(temp__5804__auto___21745__$2){
var seq__21435_21746__$1 = temp__5804__auto___21745__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21435_21746__$1)){
var c__5568__auto___21747 = cljs.core.chunk_first(seq__21435_21746__$1);
var G__21748 = cljs.core.chunk_rest(seq__21435_21746__$1);
var G__21749 = c__5568__auto___21747;
var G__21750 = cljs.core.count(c__5568__auto___21747);
var G__21751 = (0);
seq__21435_21731 = G__21748;
chunk__21437_21732 = G__21749;
count__21438_21733 = G__21750;
i__21439_21734 = G__21751;
continue;
} else {
var map__21446_21752 = cljs.core.first(seq__21435_21746__$1);
var map__21446_21753__$1 = cljs.core.__destructure_map(map__21446_21752);
var task_21754 = map__21446_21753__$1;
var fn_str_21755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446_21753__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446_21753__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21757 = goog.getObjectByName(fn_str_21755,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21756)].join(''));

(fn_obj_21757.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21757.cljs$core$IFn$_invoke$arity$2(path,new_link_21730) : fn_obj_21757.call(null,path,new_link_21730));


var G__21758 = cljs.core.next(seq__21435_21746__$1);
var G__21759 = null;
var G__21760 = (0);
var G__21761 = (0);
seq__21435_21731 = G__21758;
chunk__21437_21732 = G__21759;
count__21438_21733 = G__21760;
i__21439_21734 = G__21761;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21728);
});})(seq__21375_21671,chunk__21379_21672,count__21380_21673,i__21381_21674,seq__21115,chunk__21117,count__21118,i__21119,new_link_21730,path_match_21729,node_21728,seq__21375_21722__$1,temp__5804__auto___21721__$1,path,seq__21115__$1,temp__5804__auto__,map__21114,map__21114__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21729], 0));

goog.dom.insertSiblingAfter(new_link_21730,node_21728);


var G__21762 = cljs.core.next(seq__21375_21722__$1);
var G__21763 = null;
var G__21764 = (0);
var G__21765 = (0);
seq__21375_21671 = G__21762;
chunk__21379_21672 = G__21763;
count__21380_21673 = G__21764;
i__21381_21674 = G__21765;
continue;
} else {
var G__21766 = cljs.core.next(seq__21375_21722__$1);
var G__21767 = null;
var G__21768 = (0);
var G__21769 = (0);
seq__21375_21671 = G__21766;
chunk__21379_21672 = G__21767;
count__21380_21673 = G__21768;
i__21381_21674 = G__21769;
continue;
}
} else {
var G__21770 = cljs.core.next(seq__21375_21722__$1);
var G__21771 = null;
var G__21772 = (0);
var G__21773 = (0);
seq__21375_21671 = G__21770;
chunk__21379_21672 = G__21771;
count__21380_21673 = G__21772;
i__21381_21674 = G__21773;
continue;
}
}
} else {
}
}
break;
}


var G__21774 = cljs.core.next(seq__21115__$1);
var G__21775 = null;
var G__21776 = (0);
var G__21777 = (0);
seq__21115 = G__21774;
chunk__21117 = G__21775;
count__21118 = G__21776;
i__21119 = G__21777;
continue;
} else {
var G__21778 = cljs.core.next(seq__21115__$1);
var G__21779 = null;
var G__21780 = (0);
var G__21781 = (0);
seq__21115 = G__21778;
chunk__21117 = G__21779;
count__21118 = G__21780;
i__21119 = G__21781;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21447){
var map__21448 = p__21447;
var map__21448__$1 = cljs.core.__destructure_map(map__21448);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21448__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21449,done,error){
var map__21450 = p__21449;
var map__21450__$1 = cljs.core.__destructure_map(map__21450);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21451,done,error){
var map__21452 = p__21451;
var map__21452__$1 = cljs.core.__destructure_map(map__21452);
var msg = map__21452__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21452__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21452__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21452__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21453){
var map__21454 = p__21453;
var map__21454__$1 = cljs.core.__destructure_map(map__21454);
var src = map__21454__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21454__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21455 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21455) : done.call(null,G__21455));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21458){
var map__21459 = p__21458;
var map__21459__$1 = cljs.core.__destructure_map(map__21459);
var msg__$1 = map__21459__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21459__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21460){var ex = e21460;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21461){
var map__21462 = p__21461;
var map__21462__$1 = cljs.core.__destructure_map(map__21462);
var env = map__21462__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21462__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21471){
var map__21472 = p__21471;
var map__21472__$1 = cljs.core.__destructure_map(map__21472);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21472__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21472__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21473){
var map__21474 = p__21473;
var map__21474__$1 = cljs.core.__destructure_map(map__21474);
var svc = map__21474__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21474__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
