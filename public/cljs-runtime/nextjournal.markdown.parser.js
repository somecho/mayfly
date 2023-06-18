goog.provide('nextjournal.markdown.parser');
nextjournal.markdown.parser.get_in_STAR_ = applied_science.js_interop.get_in;
nextjournal.markdown.parser.update_STAR_ = applied_science.js_interop.update_BANG_;
/**
 * Takes a regex and a string, returns a seq of triplets comprised of match groups followed by indices delimiting each match.
 */
nextjournal.markdown.parser.re_idx_seq = (function nextjournal$markdown$parser$re_idx_seq(re,text){
var rex = (new RegExp(re.source,"g"));
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5808__auto__ = rex.exec(text);
if((temp__5808__auto__ == null)){
return null;
} else {
var m = temp__5808__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(m),m.index,rex.lastIndex], null);
}
})));
});
nextjournal.markdown.parser.inc_last = (function nextjournal$markdown$parser$inc_last(path){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(path,(cljs.core.count(path) - (1)),cljs.core.inc);
});
nextjournal.markdown.parser.hlevel = (function nextjournal$markdown$parser$hlevel(p__18401){
var map__18402 = p__18401;
var map__18402__$1 = cljs.core.__destructure_map(map__18402);
var _token = map__18402__$1;
var hn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18402__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(typeof hn === 'string'){
var G__18403 = cljs.core.re_matches(/h([\d])/,hn);
var G__18403__$1 = (((G__18403 == null))?null:cljs.core.second(G__18403));
if((G__18403__$1 == null)){
return null;
} else {
return parseInt(G__18403__$1);
}
} else {
return null;
}
});
nextjournal.markdown.parser.split_by_emoji = (function nextjournal$markdown$parser$split_by_emoji(s){
var vec__18425 = cljs.core.first(nextjournal.markdown.parser.re_idx_seq(nextjournal.markdown.parser.emoji.regex,s));
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18425,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18425,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18425,(2),null);
if(cljs.core.truth_(match)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,end),clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,end))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
}
});
nextjournal.markdown.parser.text__GT_id_PLUS_emoji = (function nextjournal$markdown$parser$text__GT_id_PLUS_emoji(text){
if(typeof text === 'string'){
var vec__18453 = nextjournal.markdown.parser.split_by_emoji(clojure.string.trim(text));
var emoji = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18453,(0),null);
var text_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18453,(1),null);
var G__18456 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,(function (c){
var G__18458 = c;
switch (G__18458) {
case " ":
case "_":
return "-";

break;
default:
return c;

}
})),text_SINGLEQUOTE_))], null);
if(cljs.core.truth_(emoji)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18456,new cljs.core.Keyword(null,"emoji","emoji",1031230144),emoji);
} else {
return G__18456;
}
} else {
return null;
}
});
nextjournal.markdown.parser.parse_fence_info = (function nextjournal$markdown$parser$parse_fence_info(info_str){
try{if(typeof info_str === 'string'){
var tokens = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(clojure.string.replace(clojure.string.trim(info_str),/[\{\}\,]/,""),".",""),/ /);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__18460,token){
var map__18461 = p__18460;
var map__18461__$1 = cljs.core.__destructure_map(map__18461);
var info_map = map__18461__$1;
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18461__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var vec__18463 = cljs.core.re_matches(/^([^=]+)=([^=]+)$/,token);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18463,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18463,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18463,(2),null);
if(clojure.string.starts_with_QMARK_(token,"#")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,new cljs.core.Keyword(null,"id","id",-1388402092),clojure.string.replace(token,/^#/,""));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = k;
if(cljs.core.truth_(and__5043__auto__)){
return v;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
if(cljs.core.not(language)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,new cljs.core.Keyword(null,"language","language",-1591107564),token);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token),true);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,tokens);
} else {
return null;
}
}catch (e18459){var _ = e18459;
return cljs.core.PersistentArrayMap.EMPTY;
}});
nextjournal.markdown.parser.text_node = (function nextjournal$markdown$parser$text_node(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.formula = (function nextjournal$markdown$parser$formula(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"formula","formula",-1059725192),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.block_formula = (function nextjournal$markdown$parser$block_formula(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-formula","block-formula",-1790528301),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.footnote_ref = (function nextjournal$markdown$parser$footnote_ref(ref,label){
var G__18466 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"footnote-ref","footnote-ref",-1588889125),new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null);
if(cljs.core.truth_(label)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18466,new cljs.core.Keyword(null,"label","label",1718410804),label);
} else {
return G__18466;
}
});
nextjournal.markdown.parser.node = (function nextjournal$markdown$parser$node(type,content,attrs,top_level){
var G__18467 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"content","content",15833224),content], null);
var G__18467__$1 = ((cljs.core.seq(attrs))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs):G__18467);
if(cljs.core.seq(top_level)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__18467__$1,top_level], 0));
} else {
return G__18467__$1;
}
});
nextjournal.markdown.parser.empty_text_node_QMARK_ = (function nextjournal$markdown$parser$empty_text_node_QMARK_(p__18468){
var map__18469 = p__18468;
var map__18469__$1 = cljs.core.__destructure_map(map__18469);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18469__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18469__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),t)) && (cljs.core.empty_QMARK_(text)));
});
nextjournal.markdown.parser.push_node = (function nextjournal$markdown$parser$push_node(p__18470,node){
var map__18471 = p__18470;
var map__18471__$1 = cljs.core.__destructure_map(map__18471);
var doc = map__18471__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
try{var G__18473 = doc;
if((!(nextjournal.markdown.parser.empty_text_node_QMARK_(node)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__18473,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),nextjournal.markdown.parser.inc_last),cljs.core.pop(path),cljs.core.conj,node);
} else {
return G__18473;
}
}catch (e18472){if((e18472 instanceof Error)){
var e = e18472;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["nextjournal.markdown cannot add node: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node)," at path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"node","node",581201198),node], null),e);
} else {
throw e18472;

}
}});
nextjournal.markdown.parser.push_nodes = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,nextjournal.markdown.parser.push_node);
nextjournal.markdown.parser.open_node = (function nextjournal$markdown$parser$open_node(var_args){
var G__18475 = arguments.length;
switch (G__18475) {
case 2:
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2 = (function (doc,type){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,type,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3 = (function (doc,type,attrs){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,type,attrs,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4 = (function (doc,type,attrs,top_level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.node(type,cljs.core.PersistentVector.EMPTY,attrs,top_level)),new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),cljs.core.into,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(-1)], null));
}));

(nextjournal.markdown.parser.open_node.cljs$lang$maxFixedArity = 4);

nextjournal.markdown.parser.ppop = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pop,cljs.core.pop);
nextjournal.markdown.parser.close_node = (function nextjournal$markdown$parser$close_node(doc){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),nextjournal.markdown.parser.ppop);
});
nextjournal.markdown.parser.update_current = (function nextjournal$markdown$parser$update_current(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18612 = arguments.length;
var i__5770__auto___18613 = (0);
while(true){
if((i__5770__auto___18613 < len__5769__auto___18612)){
args__5775__auto__.push((arguments[i__5770__auto___18613]));

var G__18614 = (i__5770__auto___18613 + (1));
i__5770__auto___18613 = G__18614;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nextjournal.markdown.parser.update_current.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nextjournal.markdown.parser.update_current.cljs$core$IFn$_invoke$arity$variadic = (function (p__18479,fn,args){
var map__18480 = p__18479;
var map__18480__$1 = cljs.core.__destructure_map(map__18480);
var doc = map__18480__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18480__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,doc,path,fn,args);
}));

(nextjournal.markdown.parser.update_current.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.markdown.parser.update_current.cljs$lang$applyTo = (function (seq18476){
var G__18477 = cljs.core.first(seq18476);
var seq18476__$1 = cljs.core.next(seq18476);
var G__18478 = cljs.core.first(seq18476__$1);
var seq18476__$2 = cljs.core.next(seq18476__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18477,G__18478,seq18476__$2);
}));

/**
 * Given an open parsing context `doc`, returns the parent of the node which was last parsed into the document.
 */
nextjournal.markdown.parser.current_parent_node = (function nextjournal$markdown$parser$current_parent_node(p__18481){
var map__18482 = p__18481;
var map__18482__$1 = cljs.core.__destructure_map(map__18482);
var doc = map__18482__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18482__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
if(cljs.core.truth_(path)){
} else {
throw (new Error(["Assert failed: ","A path is needed in document context to retrieve the current node: `current-parent-node` cannot be called after `parse`.","\n","path"].join('')));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,nextjournal.markdown.parser.ppop(path));
});
/**
 * Given an open parsing context `doc`, returns the list of ancestors of the node last parsed into the document, up to but
 * not including the top document.
 */
nextjournal.markdown.parser.current_ancestor_nodes = (function nextjournal$markdown$parser$current_ancestor_nodes(p__18483){
var map__18484 = p__18483;
var map__18484__$1 = cljs.core.__destructure_map(map__18484);
var doc = map__18484__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18484__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
if(cljs.core.truth_(path)){
} else {
throw (new Error(["Assert failed: ","A path is needed in document context to retrieve the current node: `current-ancestor-nodes` cannot be called after `parse`.","\n","path"].join('')));
}

var p = nextjournal.markdown.parser.ppop(path);
var ancestors = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(p)){
var G__18615 = nextjournal.markdown.parser.ppop(p);
var G__18616 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ancestors,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,p));
p = G__18615;
ancestors = G__18616;
continue;
} else {
return ancestors;
}
break;
}
});
nextjournal.markdown.parser.__GT_zip = (function nextjournal$markdown$parser$__GT_zip(doc){
return clojure.zip.zipper(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"content","content",15833224),(function (node,cs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec(cs));
}),doc);
});
nextjournal.markdown.parser.assign_node_id_PLUS_emoji = (function nextjournal$markdown$parser$assign_node_id_PLUS_emoji(p__18485){
var map__18486 = p__18485;
var map__18486__$1 = cljs.core.__destructure_map(map__18486);
var doc = map__18486__$1;
var id__GT_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18486__$1,new cljs.core.Keyword("nextjournal.markdown.parser","id->index","nextjournal.markdown.parser/id->index",546594288));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18486__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
var text__GT_id_PLUS_emoji_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18486__$1,new cljs.core.Keyword(null,"text->id+emoji-fn","text->id+emoji-fn",-1047929619));
var map__18487 = ((cljs.core.ifn_QMARK_(text__GT_id_PLUS_emoji_fn))?(function (){var G__18488 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,path);
return (text__GT_id_PLUS_emoji_fn.cljs$core$IFn$_invoke$arity$1 ? text__GT_id_PLUS_emoji_fn.cljs$core$IFn$_invoke$arity$1(G__18488) : text__GT_id_PLUS_emoji_fn.call(null,G__18488));
})():null);
var map__18487__$1 = cljs.core.__destructure_map(map__18487);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var emoji = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword(null,"emoji","emoji",1031230144));
var id_count = (cljs.core.truth_(id)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_index,id):null);
var G__18489 = doc;
var G__18489__$1 = (cljs.core.truth_(id)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__18489,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.markdown.parser","id->index","nextjournal.markdown.parser/id->index",546594288),id], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))):G__18489);
if(cljs.core.truth_((function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return emoji;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__18489__$1,path,(function (node){
var G__18490 = node;
var G__18490__$1 = (cljs.core.truth_(id)?cljs.core.assoc_in(G__18490,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(function (){var G__18491 = id;
if(cljs.core.truth_(id_count)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18491),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((id_count + (1)))].join('');
} else {
return G__18491;
}
})()):G__18490);
if(cljs.core.truth_(emoji)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18490__$1,new cljs.core.Keyword(null,"emoji","emoji",1031230144),emoji);
} else {
return G__18490__$1;
}
}));
} else {
return G__18489__$1;
}
});
nextjournal.markdown.parser.into_toc = (function nextjournal$markdown$parser$into_toc(toc,p__18492){
var map__18493 = p__18492;
var map__18493__$1 = cljs.core.__destructure_map(map__18493);
var toc_item = map__18493__$1;
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18493__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
var toc__$1 = toc;
var l = heading_level;
var toc_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null);
while(true){
var type_path = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(toc_path,(cljs.core.count(toc_path) - (1)),new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(toc__$1,toc_path))){
var G__18617 = cljs.core.assoc_in(toc__$1,toc_path,cljs.core.PersistentVector.EMPTY);
var G__18618 = l;
var G__18619 = toc_path;
toc__$1 = G__18617;
l = G__18618;
toc_path = G__18619;
continue;
} else {
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(toc__$1,type_path))){
var G__18620 = cljs.core.assoc_in(toc__$1,type_path,new cljs.core.Keyword(null,"toc","toc",2050089251));
var G__18621 = l;
var G__18622 = toc_path;
toc__$1 = G__18620;
l = G__18621;
toc_path = G__18622;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),l)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(toc__$1,toc_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),toc_item);
} else {
var G__18623 = toc__$1;
var G__18624 = (l - (1));
var G__18625 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(toc_path,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(toc__$1,toc_path)) - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982)], 0));
toc__$1 = G__18623;
l = G__18624;
toc_path = G__18625;
continue;

}
}
}
break;
}
});
nextjournal.markdown.parser.add_to_toc = (function nextjournal$markdown$parser$add_to_toc(doc,p__18494){
var map__18495 = p__18494;
var map__18495__$1 = cljs.core.__destructure_map(map__18495);
var h = map__18495__$1;
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18495__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
var G__18496 = doc;
if(cljs.core.pos_int_QMARK_(heading_level)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__18496,new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.markdown.parser.into_toc,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toc","toc",2050089251)));
} else {
return G__18496;
}
});
nextjournal.markdown.parser.set_title_when_missing = (function nextjournal$markdown$parser$set_title_when_missing(p__18497,heading){
var map__18498 = p__18497;
var map__18498__$1 = cljs.core.__destructure_map(map__18498);
var doc = map__18498__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18498__$1,new cljs.core.Keyword(null,"title","title",636505583));
var G__18499 = doc;
if((title == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18499,new cljs.core.Keyword(null,"title","title",636505583),nextjournal.markdown.transform.__GT_text(heading));
} else {
return G__18499;
}
});
/**
 * Computes and adds a :title and a :toc to the document-like structure `doc` which might have not been constructed by means of `parse`.
 */
nextjournal.markdown.parser.add_title_PLUS_toc = (function nextjournal$markdown$parser$add_title_PLUS_toc(p__18500){
var map__18501 = p__18500;
var map__18501__$1 = cljs.core.__destructure_map(map__18501);
var doc = map__18501__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18501__$1,new cljs.core.Keyword(null,"content","content",15833224));
var rf = (function (doc__$1,heading){
return nextjournal.markdown.parser.set_title_when_missing(nextjournal.markdown.parser.add_to_toc(doc__$1,heading),heading);
});
var xf = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(xf(rf),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toc","toc",2050089251)], null)),content);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.markdown !== 'undefined') && (typeof nextjournal.markdown.parser !== 'undefined') && (typeof nextjournal.markdown.parser.apply_token !== 'undefined')){
} else {
nextjournal.markdown.parser.apply_token = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__18502 = cljs.core.get_global_hierarchy;
return (fexpr__18502.cljs$core$IFn$_invoke$arity$0 ? fexpr__18502.cljs$core$IFn$_invoke$arity$0() : fexpr__18502.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("nextjournal.markdown.parser","apply-token"),(function (_doc,token){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (doc,token){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("apply-token","unknown-type","apply-token/unknown-type",-1923384033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], 0));

return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"heading_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading-level","heading-level",563433452),nextjournal.markdown.parser.hlevel(token)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"heading_close",(function (doc,p__18503){
var map__18504 = p__18503;
var map__18504__$1 = cljs.core.__destructure_map(map__18504);
var doc_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18504__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var map__18505 = nextjournal.markdown.parser.close_node(doc);
var map__18505__$1 = cljs.core.__destructure_map(map__18505);
var doc__$1 = map__18505__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18505__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
var doc_SINGLEQUOTE_ = nextjournal.markdown.parser.assign_node_id_PLUS_emoji(doc__$1);
var heading = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc_SINGLEQUOTE_,path),new cljs.core.Keyword(null,"path","path",-188191168),path);
var G__18506 = doc_SINGLEQUOTE_;
if((doc_level === (0))){
return nextjournal.markdown.parser.set_title_when_missing(nextjournal.markdown.parser.add_to_toc(G__18506,heading),heading);
} else {
return G__18506;
}
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"paragraph_open",(function (doc,p__18507){
var map__18508 = p__18507;
var map__18508__$1 = cljs.core.__destructure_map(map__18508);
var _token = map__18508__$1;
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18508__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,(cljs.core.truth_(hidden)?new cljs.core.Keyword(null,"plain","plain",1368629269):new cljs.core.Keyword(null,"paragraph","paragraph",296707709)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"paragraph_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"bullet_list_open",(function (doc,p__18509){
var map__18510 = p__18509;
var map__18510__$1 = cljs.core.__destructure_map(map__18510);
var map__18511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var map__18511__$1 = cljs.core.__destructure_map(map__18511);
var attrs = map__18511__$1;
var has_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18511__$1,new cljs.core.Keyword(null,"has-todos","has-todos",-1788119241));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,(cljs.core.truth_(has_todos)?new cljs.core.Keyword(null,"todo-list","todo-list",653205378):new cljs.core.Keyword(null,"bullet-list","bullet-list",-2051767989)),attrs);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"bullet_list_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"ordered_list_open",(function (doc,p__18512){
var map__18513 = p__18512;
var map__18513__$1 = cljs.core.__destructure_map(map__18513);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"numbered-list","numbered-list",13892942),attrs);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"ordered_list_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"list_item_open",(function (doc,p__18514){
var map__18515 = p__18514;
var map__18515__$1 = cljs.core.__destructure_map(map__18515);
var map__18516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var map__18516__$1 = cljs.core.__destructure_map(map__18516);
var attrs = map__18516__$1;
var todo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18516__$1,new cljs.core.Keyword(null,"todo","todo",-1046442570));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,(cljs.core.truth_(todo)?new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804):new cljs.core.Keyword(null,"list-item","list-item",-999803634)),attrs);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"list_item_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_block",(function (doc,p__18517){
var map__18518 = p__18517;
var map__18518__$1 = cljs.core.__destructure_map(map__18518);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18518__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.block_formula(text));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_block_end",(function (doc,_token){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"hr",(function (doc,_token){
return nextjournal.markdown.parser.push_node(doc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ruler","ruler",2134373867)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"blockquote_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"blockquote","blockquote",372264190));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"blockquote_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tocOpen",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"toc","toc",2050089251));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tocBody",(function (doc,_token){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tocClose",(function (doc,_token){
return nextjournal.markdown.parser.update_current.cljs$core$IFn$_invoke$arity$variadic(nextjournal.markdown.parser.close_node(doc),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"code_block",(function (doc,p__18519){
var map__18520 = p__18519;
var map__18520__$1 = cljs.core.__destructure_map(map__18520);
var _token = map__18520__$1;
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18520__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.close_node(nextjournal.markdown.parser.push_node(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"code","code",1586293142)),nextjournal.markdown.parser.text_node(c)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"fence",(function (doc,p__18521){
var map__18522 = p__18521;
var map__18522__$1 = cljs.core.__destructure_map(map__18522);
var _token = map__18522__$1;
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18522__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18522__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.close_node(nextjournal.markdown.parser.push_node(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.markdown.parser.parse_fence_info(i),new cljs.core.Keyword(null,"info","info",-317069002),i)),nextjournal.markdown.parser.text_node(c)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"footnote_ref",(function (p__18523,token){
var map__18524 = p__18523;
var map__18524__$1 = cljs.core.__destructure_map(map__18524);
var doc = map__18524__$1;
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18524__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.footnote_ref((cljs.core.count(footnotes) + (function (){var G__18525 = token;
var G__18526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__18525,G__18526) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__18525,G__18526));
})()),(function (){var G__18527 = token;
var G__18528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"label","label",1718410804)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__18527,G__18528) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__18527,G__18528));
})()));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"footnote_anchor",(function (doc,token){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"footnote_open",(function (p__18529,token){
var map__18530 = p__18529;
var map__18530__$1 = cljs.core.__destructure_map(map__18530);
var doc = map__18530__$1;
var footnote_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18530__$1,new cljs.core.Keyword("nextjournal.markdown.parser","footnote-offset","nextjournal.markdown.parser/footnote-offset",1598459991));
var ref = ((function (){var G__18531 = token;
var G__18532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__18531,G__18532) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__18531,G__18532));
})() + footnote_offset);
var label = (function (){var G__18533 = token;
var G__18534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"label","label",1718410804)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__18533,G__18534) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__18533,G__18534));
})();
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,new cljs.core.Keyword(null,"footnote","footnote",-1569223153),null,(function (){var G__18535 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null);
if(cljs.core.truth_(label)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18535,new cljs.core.Keyword(null,"label","label",1718410804),label);
} else {
return G__18535;
}
})());
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"footnote_close",(function (doc,token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"footnote_block_open",(function (p__18536,_token){
var map__18537 = p__18536;
var map__18537__$1 = cljs.core.__destructure_map(map__18537);
var doc = map__18537__$1;
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18537__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18537__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
var footnote_offset = cljs.core.count(footnotes);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(doc,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),(footnote_offset - (1))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal.markdown.parser","footnote-offset","nextjournal.markdown.parser/footnote-offset",1598459991),footnote_offset,new cljs.core.Keyword("nextjournal.markdown.parser","path-to-restore","nextjournal.markdown.parser/path-to-restore",1716882601),path], 0));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"footnote_block_close",(function (p__18538,_token){
var map__18539 = p__18538;
var map__18539__$1 = cljs.core.__destructure_map(map__18539);
var doc = map__18539__$1;
var path_to_restore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path-to-restore","nextjournal.markdown.parser/path-to-restore",1716882601));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),path_to_restore),new cljs.core.Keyword("nextjournal.markdown.parser","path-to-restore","nextjournal.markdown.parser/path-to-restore",1716882601),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal.markdown.parser","footnote-offset","nextjournal.markdown.parser/footnote-offset",1598459991)], 0));
}));
nextjournal.markdown.parser.footnote__GT_sidenote = (function nextjournal$markdown$parser$footnote__GT_sidenote(p__18540){
var map__18541 = p__18540;
var map__18541__$1 = cljs.core.__destructure_map(map__18541);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18541__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18541__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18541__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.node(new cljs.core.Keyword(null,"sidenote","sidenote",-368558802),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first(content)),null,(function (){var G__18542 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null);
if(cljs.core.truth_(label)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18542,new cljs.core.Keyword(null,"label","label",1718410804),label);
} else {
return G__18542;
}
})());
});
nextjournal.markdown.parser.node_with_sidenote_refs = (function nextjournal$markdown$parser$node_with_sidenote_refs(p_node){
var l = nextjournal.markdown.parser.__GT_zip(p_node);
var refs = cljs.core.PersistentVector.EMPTY;
while(true){
if(clojure.zip.end_QMARK_(l)){
if(cljs.core.seq(refs)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),clojure.zip.root(l),new cljs.core.Keyword(null,"refs","refs",-1560051448),refs], null);
} else {
return null;
}
} else {
var map__18544 = clojure.zip.node(l);
var map__18544__$1 = cljs.core.__destructure_map(map__18544);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18544__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18544__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"footnote-ref","footnote-ref",-1588889125),type)){
var G__18626 = clojure.zip.next(clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(l,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sidenote-ref","sidenote-ref",-1057198382)], 0)));
var G__18627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref);
l = G__18626;
refs = G__18627;
continue;
} else {
var G__18628 = clojure.zip.next(l);
var G__18629 = refs;
l = G__18628;
refs = G__18629;
continue;
}
}
break;
}
});
/**
 * Handles footnotes as sidenotes.
 * 
 * Takes and returns a parsed document. When the document has footnotes, wraps every top-level block which contains footnote references
 * with a `:footnote-container` node, into each of such nodes, adds a `:sidenote-column` node containing a `:sidenote` node for each found ref.
 * Renames type `:footnote-ref` to `:sidenote-ref.
 */
nextjournal.markdown.parser.insert_sidenote_containers = (function nextjournal$markdown$parser$insert_sidenote_containers(p__18546){
var map__18547 = p__18546;
var map__18547__$1 = cljs.core.__destructure_map(map__18547);
var doc = map__18547__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18547__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18547__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.not(cljs.core.seq(footnotes))){
return doc;
} else {
var root = nextjournal.markdown.parser.__GT_zip(doc);
var loc = clojure.zip.down(root);
var parent = root;
while(true){
if((loc == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.zip.node(parent),new cljs.core.Keyword(null,"sidenotes?","sidenotes?",-1418896412),true);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"todo-list","todo-list",653205378),null,new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"bullet-list","bullet-list",-2051767989),null,new cljs.core.Keyword(null,"numbered-list","numbered-list",13892942),null,new cljs.core.Keyword(null,"plain","plain",1368629269),null,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),null,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),null,new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc)))){
var temp__5806__auto__ = nextjournal.markdown.parser.node_with_sidenote_refs(clojure.zip.node(loc));
if((temp__5806__auto__ == null)){
var G__18630 = clojure.zip.right(loc);
var G__18631 = parent;
loc = G__18630;
parent = G__18631;
continue;
} else {
var map__18548 = temp__5806__auto__;
var map__18548__$1 = cljs.core.__destructure_map(map__18548);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18548__$1,new cljs.core.Keyword(null,"node","node",581201198));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18548__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
var new_loc = clojure.zip.append_child(clojure.zip.append_child(clojure.zip.replace(loc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sidenote-container","sidenote-container",-1130512065),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null)),node),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sidenote-column","sidenote-column",-1953321794),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (loc,parent,map__18548,map__18548__$1,node,refs,temp__5806__auto__,root,map__18547,map__18547__$1,doc,path,footnotes){
return (function (p1__18545_SHARP_){
return nextjournal.markdown.parser.footnote__GT_sidenote(cljs.core.get.cljs$core$IFn$_invoke$arity$2(footnotes,p1__18545_SHARP_));
});})(loc,parent,map__18548,map__18548__$1,node,refs,temp__5806__auto__,root,map__18547,map__18547__$1,doc,path,footnotes))
,refs)], null));
var G__18632 = clojure.zip.right(new_loc);
var G__18633 = clojure.zip.up(new_loc);
loc = G__18632;
parent = G__18633;
continue;
}
} else {
var G__18634 = clojure.zip.right(loc);
var G__18635 = parent;
loc = G__18634;
parent = G__18635;
continue;

}
}
break;
}
}
});
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"table_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table","table",-564943036));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"table_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"thead_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table-head","table-head",-1134134854));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"thead_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tr_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table-row","table-row",118957987));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tr_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"th_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"table-header","table-header",564803008),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(token));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"th_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tbody_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table-body","table-body",-753458877));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tbody_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"td_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(token));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"td_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.hashtag_tokenizer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"regex","regex",939488856),/(^|\B)#[\w-]+/,new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__18549_SHARP_){
return cljs.core.every_QMARK_(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"link","link",-1769163468),null], null), null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),nextjournal.markdown.parser.current_ancestor_nodes(p1__18549_SHARP_)));
}),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (match){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.subs.cljs$core$IFn$_invoke$arity$2((match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1((0)) : match.call(null,(0))),(1))], null);
})], null);
nextjournal.markdown.parser.internal_link_tokenizer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"regex","regex",939488856),/\[\[([^\]]+)\]\]/,new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__18550_SHARP_){
return cljs.core.every_QMARK_(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"link","link",-1769163468),null], null), null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),nextjournal.markdown.parser.current_ancestor_nodes(p1__18550_SHARP_)));
}),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (match){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"internal-link","internal-link",-1380732260),new cljs.core.Keyword(null,"text","text",-1790561697),(match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1((1)) : match.call(null,(1)))], null);
})], null);
/**
 * Normalizes a map of regex and handler into a Tokenizer
 */
nextjournal.markdown.parser.normalize_tokenizer = (function nextjournal$markdown$parser$normalize_tokenizer(p__18551){
var map__18552 = p__18551;
var map__18552__$1 = cljs.core.__destructure_map(map__18552);
var tokenizer = map__18552__$1;
var doc_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"regex","regex",939488856));
var tokenizer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"tokenizer-fn","tokenizer-fn",1254435779));
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = doc_handler;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return handler;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = regex;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return tokenizer_fn;
}
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (or doc-handler handler) (or regex tokenizer-fn))"));
}

var G__18553 = tokenizer;
var G__18553__$1 = ((cljs.core.not(doc_handler))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18553,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),(function (doc,p__18554){
var map__18555 = p__18554;
var map__18555__$1 = cljs.core.__destructure_map(map__18555);
var match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18555__$1,new cljs.core.Keyword(null,"match","match",1220059550));
return nextjournal.markdown.parser.push_node(doc,(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(match) : handler.call(null,match)));
})):G__18553);
var G__18553__$2 = ((cljs.core.not(tokenizer_fn))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18553__$1,new cljs.core.Keyword(null,"tokenizer-fn","tokenizer-fn",1254435779),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.parser.re_idx_seq,regex)):G__18553__$1);
if(cljs.core.not(pred)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18553__$2,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.constantly(true));
} else {
return G__18553__$2;
}
});
nextjournal.markdown.parser.tokenize_text_node = (function nextjournal$markdown$parser$tokenize_text_node(p__18556,doc,p__18557){
var map__18558 = p__18556;
var map__18558__$1 = cljs.core.__destructure_map(map__18558);
var tkz = map__18558__$1;
var tokenizer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18558__$1,new cljs.core.Keyword(null,"tokenizer-fn","tokenizer-fn",1254435779));
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18558__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var doc_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18558__$1,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
var map__18559 = p__18557;
var map__18559__$1 = cljs.core.__destructure_map(map__18559);
var node = map__18559__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18559__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(((cljs.core.fn_QMARK_(tokenizer_fn)) && (((cljs.core.fn_QMARK_(doc_handler)) && (((cljs.core.fn_QMARK_(pred)) && (typeof text === 'string'))))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"tokenizer","tokenizer",1801337391),tkz], null)),"\n","(and (fn? tokenizer-fn) (fn? doc-handler) (fn? pred) (string? text))"].join('')));
}

var idx_seq = (cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(doc) : pred.call(null,doc)))?(tokenizer_fn.cljs$core$IFn$_invoke$arity$1 ? tokenizer_fn.cljs$core$IFn$_invoke$arity$1(text) : tokenizer_fn.call(null,text)):null);
if(cljs.core.seq(idx_seq)){
var text_hnode = (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.markdown.parser.text_node(s),new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),nextjournal.markdown.parser.push_node);
});
var map__18560 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__18561,p__18562){
var map__18563 = p__18561;
var map__18563__$1 = cljs.core.__destructure_map(map__18563);
var acc = map__18563__$1;
var remaining_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18563__$1,new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259));
var vec__18564 = p__18562;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18564,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18564,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18564,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var G__18567 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259),cljs.core.subs,(0),start);
if((end < cljs.core.count(remaining_text))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__18567,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.conj,text_hnode(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remaining_text,end)));
} else {
return G__18567;
}
})(),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),doc_handler,new cljs.core.Keyword(null,"match","match",1220059550),match,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259),text,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.List.EMPTY], null),cljs.core.reverse(idx_seq));
var map__18560__$1 = cljs.core.__destructure_map(map__18560);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var remaining_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259));
var G__18568 = nodes;
if(cljs.core.seq(remaining_text)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18568,text_hnode(remaining_text));
} else {
return G__18568;
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
}
});
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"text",(function (p__18569,p__18570){
var map__18571 = p__18569;
var map__18571__$1 = cljs.core.__destructure_map(map__18571);
var doc = map__18571__$1;
var text_tokenizers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926));
var map__18572 = p__18570;
var map__18572__$1 = cljs.core.__destructure_map(map__18572);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18572__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (doc__$1,p__18573){
var map__18574 = p__18573;
var map__18574__$1 = cljs.core.__destructure_map(map__18574);
var node = map__18574__$1;
var doc_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18574__$1,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
var G__18575 = doc__$1;
var G__18576 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
return (doc_handler.cljs$core$IFn$_invoke$arity$2 ? doc_handler.cljs$core$IFn$_invoke$arity$2(G__18575,G__18576) : doc_handler.call(null,G__18575,G__18576));
}),doc,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (nodes,tokenizer){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__18577){
var map__18578 = p__18577;
var map__18578__$1 = cljs.core.__destructure_map(map__18578);
var node = map__18578__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18578__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),type)){
return nextjournal.markdown.parser.tokenize_text_node(tokenizer,doc,node);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),content,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),nextjournal.markdown.parser.push_node], null)], null),text_tokenizers));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"inline",(function (doc,p__18579){
var map__18580 = p__18579;
var map__18580__$1 = cljs.core.__destructure_map(map__18580);
var _token = map__18580__$1;
var ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return (nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2(doc,ts) : nextjournal.markdown.parser.apply_tokens.call(null,doc,ts));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_inline",(function (doc,p__18581){
var map__18582 = p__18581;
var map__18582__$1 = cljs.core.__destructure_map(map__18582);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.formula(text));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_inline_double",(function (doc,p__18583){
var map__18584 = p__18583;
var map__18584__$1 = cljs.core.__destructure_map(map__18584);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18584__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.formula(text));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"softbreak",(function (doc,_token){
return nextjournal.markdown.parser.push_node(doc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"softbreak","softbreak",-983135729)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"hardbreak",(function (doc,_token){
return nextjournal.markdown.parser.push_node(doc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hardbreak","hardbreak",1036545944)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"image",(function (doc,p__18585){
var map__18586 = p__18585;
var map__18586__$1 = cljs.core.__destructure_map(map__18586);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return nextjournal.markdown.parser.close_node((function (){var G__18587 = nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"image","image",-58725096),attrs);
var G__18588 = children;
return (nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2(G__18587,G__18588) : nextjournal.markdown.parser.apply_tokens.call(null,G__18587,G__18588));
})());
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"em_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"em","em",707813035));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"em_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"strong_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"strong","strong",269529000));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"strong_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"s_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"s_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"link_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(token));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"link_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"code_inline",(function (doc,p__18589){
var map__18590 = p__18589;
var map__18590__$1 = cljs.core.__destructure_map(map__18590);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18590__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.close_node(nextjournal.markdown.parser.push_node(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"monospace","monospace",2089559697)),nextjournal.markdown.parser.text_node(text)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"html_inline",(function (doc,_){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"html_block",(function (doc,_){
return doc;
}));
nextjournal.markdown.parser.pairs__GT_kmap = (function nextjournal$markdown$parser$pairs__GT_kmap(pairs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.first),cljs.core.second)),pairs);
});
nextjournal.markdown.parser.apply_tokens = (function nextjournal$markdown$parser$apply_tokens(doc,tokens){
var mapify_attrs_xf = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return (nextjournal.markdown.parser.update_STAR_.cljs$core$IFn$_invoke$arity$3 ? nextjournal.markdown.parser.update_STAR_.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),nextjournal.markdown.parser.pairs__GT_kmap) : nextjournal.markdown.parser.update_STAR_.call(null,x,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),nextjournal.markdown.parser.pairs__GT_kmap));
}));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mapify_attrs_xf(nextjournal.markdown.parser.apply_token),doc,tokens);
});
nextjournal.markdown.parser.empty_doc = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("nextjournal.markdown.parser","id->index","nextjournal.markdown.parser/id->index",546594288),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"text->id+emoji-fn","text->id+emoji-fn",-1047929619),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.parser.text__GT_id_PLUS_emoji,nextjournal.markdown.transform.__GT_text),new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toc","toc",2050089251)], null),new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(-1)], null),new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926),cljs.core.PersistentVector.EMPTY], null);
/**
 * Takes a doc and a collection of markdown-it tokens, applies tokens to doc. Uses an emtpy doc in arity 1.
 */
nextjournal.markdown.parser.parse = (function nextjournal$markdown$parser$parse(var_args){
var G__18592 = arguments.length;
switch (G__18592) {
case 1:
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$1 = (function (tokens){
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.parser.empty_doc,tokens);
}));

(nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$2 = (function (doc,tokens){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(nextjournal.markdown.parser.apply_tokens(cljs.core.update.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,nextjournal.markdown.parser.normalize_tokenizer)),tokens),new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal.markdown.parser","id->index","nextjournal.markdown.parser/id->index",546594288),new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926),new cljs.core.Keyword(null,"text->id+emoji-fn","text->id+emoji-fn",-1047929619)], 0));
}));

(nextjournal.markdown.parser.parse.cljs$lang$maxFixedArity = 2);

nextjournal.markdown.parser.section_at = (function nextjournal$markdown$parser$section_at(p__18593,p__18594){
var map__18595 = p__18593;
var map__18595__$1 = cljs.core.__destructure_map(map__18595);
var doc = map__18595__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18595__$1,new cljs.core.Keyword(null,"content","content",15833224));
var vec__18596 = p__18594;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18596,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18596,(1),null);
var path = vec__18596;
var map__18599 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,path);
var map__18599__$1 = cljs.core.__destructure_map(map__18599);
var h = map__18599__$1;
var section_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18599__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
var in_section_QMARK_ = (function (p__18600){
var map__18601 = p__18600;
var map__18601__$1 = cljs.core.__destructure_map(map__18601);
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18601__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
return ((cljs.core.not(l)) || ((section_level < l)));
});
if(cljs.core.truth_(section_level)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.cons(h,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(in_section_QMARK_,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((pos + (1)),content)))], null);
} else {
return null;
}
});
nextjournal.markdown.parser.flatten_tokens = (function nextjournal$markdown$parser$flatten_tokens(tokens){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.tree_seq,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Keyword(null,"children","children",-940561982)),new cljs.core.Keyword(null,"children","children",-940561982))),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__18602_SHARP_){
return cljs.core.select_keys(p1__18602_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"meta","meta",1499536964)], null));
}))),tokens);
});

//# sourceMappingURL=nextjournal.markdown.parser.js.map
