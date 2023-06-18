goog.provide('nextjournal.markdown.transform');
nextjournal.markdown.transform.guard = (function nextjournal$markdown$transform$guard(pred,val){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(val) : pred.call(null,val)))){
return val;
} else {
return null;
}
});
nextjournal.markdown.transform.__GT_text = (function nextjournal$markdown$transform$__GT_text(p__16290){
var map__16291 = p__16290;
var map__16291__$1 = cljs.core.__destructure_map(map__16291);
var _node = map__16291__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16291__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16291__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16291__$1,new cljs.core.Keyword(null,"content","content",15833224));
var or__5045__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"softbreak","softbreak",-983135729),type))?" ":null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = text;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.__GT_text,content));
}
}
});
/**
 * Scans doc contents and replaces toc node placeholder with the toc node accumulated during parse.
 */
nextjournal.markdown.transform.hydrate_toc = (function nextjournal$markdown$transform$hydrate_toc(p__16292){
var map__16293 = p__16292;
var map__16293__$1 = cljs.core.__destructure_map(map__16293);
var doc = map__16293__$1;
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16293__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__16294){
var map__16295 = p__16294;
var map__16295__$1 = cljs.core.__destructure_map(map__16295);
var node = map__16295__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16295__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toc","toc",2050089251),t)){
return toc;
} else {
return node;
}
}))));
});
nextjournal.markdown.transform.table_alignment = (function nextjournal$markdown$transform$table_alignment(p__16296){
var map__16297 = p__16296;
var map__16297__$1 = cljs.core.__destructure_map(map__16297);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof style === 'string'){
var vec__16298 = cljs.core.re_matches(/^text-align:(.+)$/,style);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16298,(0),null);
var alignment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16298,(1),null);
if(cljs.core.truth_(alignment)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),alignment], null);
} else {
return null;
}
} else {
return null;
}
});
nextjournal.markdown.transform.heading_markup = (function nextjournal$markdown$transform$heading_markup(p__16301){
var map__16302 = p__16301;
var map__16302__$1 = cljs.core.__destructure_map(map__16302);
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16302__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = l;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})())].join(''))], null);
});
/**
 * Takes a hiccup vector, a context and a node, puts node's `:content` into markup mapping through `->hiccup`.
 */
nextjournal.markdown.transform.into_markup = (function nextjournal$markdown$transform$into_markup(mkup,ctx,p__16303){
var map__16304 = p__16303;
var map__16304__$1 = cljs.core.__destructure_map(map__16304);
var node = map__16304__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16304__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16304__$1,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.truth_(text)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mkup,text);
} else {
if(cljs.core.truth_(content)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(mkup,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.__GT_hiccup,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("nextjournal.markdown.transform","parent","nextjournal.markdown.transform/parent",612696398),node))),content);
} else {
return null;
}
}
});
nextjournal.markdown.transform.toc__GT_hiccup = (function nextjournal$markdown$transform$toc__GT_hiccup(p__16306,p__16307){
var map__16308 = p__16306;
var map__16308__$1 = cljs.core.__destructure_map(map__16308);
var ctx = map__16308__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16308__$1,new cljs.core.Keyword("nextjournal.markdown.transform","parent","nextjournal.markdown.transform/parent",612696398));
var map__16309 = p__16307;
var map__16309__$1 = cljs.core.__destructure_map(map__16309);
var node = map__16309__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16309__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs);
var toc_item = (function (){var G__16310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
var G__16310__$1 = ((cljs.core.seq(content))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16310,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__16305_SHARP_){
var temp__5808__auto__ = document.getElementById(id);
if((temp__5808__auto__ == null)){
return null;
} else {
var el = temp__5808__auto__;
p1__16305_SHARP_.preventDefault();

return el.scrollIntoViewIfNeeded();
}
})], null),nextjournal.markdown.transform.into_markup(nextjournal.markdown.transform.heading_markup(node),ctx,node)], null)):G__16310);
if(cljs.core.seq(children)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16310__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.__GT_hiccup,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("nextjournal.markdown.transform","parent","nextjournal.markdown.transform/parent",612696398),node))),children));
} else {
return G__16310__$1;
}
})();
var G__16311 = toc_item;
var G__16311__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.toc-item","li.toc-item",1430212457)], null),G__16311):G__16311);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toc","div.toc",2085460476)], null),G__16311__$1);
} else {
return G__16311__$1;
}
});
nextjournal.markdown.transform.default_hiccup_renderers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"table-header","table-header",564803008),new cljs.core.Keyword(null,"todo-list","todo-list",653205378),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"table-body","table-body",-753458877),new cljs.core.Keyword(null,"table-row","table-row",118957987),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"bullet-list","bullet-list",-2051767989),new cljs.core.Keyword(null,"ruler","ruler",2134373867),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"list-item","list-item",-999803634),new cljs.core.Keyword(null,"sidenote","sidenote",-368558802),new cljs.core.Keyword(null,"numbered-list","numbered-list",13892942),new cljs.core.Keyword(null,"softbreak","softbreak",-983135729),new cljs.core.Keyword(null,"footnote","footnote",-1569223153),new cljs.core.Keyword(null,"monospace","monospace",2089559697),new cljs.core.Keyword(null,"sidenote-ref","sidenote-ref",-1057198382),new cljs.core.Keyword(null,"block-formula","block-formula",-1790528301),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"formula","formula",-1059725192),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"hardbreak","hardbreak",1036545944),new cljs.core.Keyword(null,"table-head","table-head",-1134134854),new cljs.core.Keyword(null,"footnote-ref","footnote-ref",-1588889125),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804),new cljs.core.Keyword(null,"internal-link","internal-link",-1380732260),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"paragraph","paragraph",296707709),new cljs.core.Keyword(null,"sidenote-column","sidenote-column",-1953321794),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"sidenote-container","sidenote-container",-1130512065),new cljs.core.Keyword(null,"text","text",-1790561697)],[(function (ctx,p__16312){
var map__16313 = p__16312;
var map__16313__$1 = cljs.core.__destructure_map(map__16313);
var node = map__16313__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup((function (){var ta = nextjournal.markdown.transform.table_alignment(attrs);
var G__16314 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null);
if(cljs.core.truth_(ta)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16314,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),ta], null));
} else {
return G__16314;
}
})(),ctx,node);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.contains-task-list","ul.contains-task-list",-299292859)], null)),(function (ctx,p__16315){
var map__16316 = p__16315;
var map__16316__$1 = cljs.core.__destructure_map(map__16316);
var node = map__16316__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup((function (){var ta = nextjournal.markdown.transform.table_alignment(attrs);
var G__16317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null);
if(cljs.core.truth_(ta)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16317,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),ta], null));
} else {
return G__16317;
}
})(),ctx,node);
}),nextjournal.markdown.transform.toc__GT_hiccup,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null)),(function (ctx,p__16318){
var map__16319 = p__16318;
var map__16319__$1 = cljs.core.__destructure_map(map__16319);
var node = map__16319__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16319__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5808__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.default_hiccup_renderers,t);
if((temp__5808__auto__ == null)){
return null;
} else {
var d = temp__5808__auto__;
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(ctx,node) : d.call(null,ctx,node));
}
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null)),cljs.core.constantly(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null)),(function (ctx,p__16320){
var map__16321 = p__16320;
var map__16321__$1 = cljs.core.__destructure_map(map__16321);
var node = map__16321__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16321__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sidenote","span.sidenote",-1886925254),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"3px"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ref + (1)))], null)], null),ctx,node);
}),(function (ctx,p__16322){
var map__16323 = p__16322;
var map__16323__$1 = cljs.core.__destructure_map(map__16323);
var node = map__16323__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),attrs], null),ctx,node);
}),cljs.core.constantly(" "),(function (ctx,p__16324){
var map__16325 = p__16324;
var map__16325__$1 = cljs.core.__destructure_map(map__16325);
var node = map__16325__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16325__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16325__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footnote","div.footnote",1091410196),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.footnote-label","span.footnote-label",1697840277),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),ref], null),label], null)], null),ctx,node);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null)),(function (_,p__16326){
var map__16327 = p__16326;
var map__16327__$1 = cljs.core.__destructure_map(map__16327);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16327__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16327__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.sidenote-ref","sup.sidenote-ref",-900607849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-label","data-label",-355583348),label], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ref + (1)))], null);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.formula","figure.formula",-1349258944)], null)),(function (ctx,p__16328){
var map__16329 = p__16328;
var map__16329__$1 = cljs.core.__destructure_map(map__16329);
var node = map__16329__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs)], null)], null),ctx,node);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.viewer-code.not-prose","pre.viewer-code.not-prose",-1594627191)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.formula","span.formula",-1123101161)], null)),(function (p__16330,p__16331){
var map__16332 = p__16330;
var map__16332__$1 = cljs.core.__destructure_map(map__16332);
var ctx = map__16332__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16332__$1,new cljs.core.Keyword("nextjournal.markdown.transform","parent","nextjournal.markdown.transform/parent",612696398));
var map__16333 = p__16331;
var map__16333__$1 = cljs.core.__destructure_map(map__16333);
var node = map__16333__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16333__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paragraph","paragraph",296707709),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.inline","img.inline",-1116141579),attrs], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.image","figure.image",-1216510536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),attrs], null),nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047)], null),ctx,node)], null);
}
}),cljs.core.constantly(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null)),(function (_,p__16334){
var map__16335 = p__16334;
var map__16335__$1 = cljs.core.__destructure_map(map__16335);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16335__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16335__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.sidenote-ref","sup.sidenote-ref",-900607849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-label","data-label",-355583348),label], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ref + (1)))], null);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),(function (ctx,p__16336){
var map__16337 = p__16336;
var map__16337__$1 = cljs.core.__destructure_map(map__16337);
var node = map__16337__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16337__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(attrs)], null)], null)], null),ctx,node);
}),(function (_,p__16338){
var map__16339 = p__16338;
var map__16339__$1 = cljs.core.__destructure_map(map__16339);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16339__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.internal","a.internal",-136861873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(attrs,text)], null),text], null);
}),(function (_,p__16340){
var map__16341 = p__16340;
var map__16341__$1 = cljs.core.__destructure_map(map__16341);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16341__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag","a.tag",-1102521004),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/tags/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidenote-column","div.sidenote-column",973426180)], null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190)], null)),(function (ctx,p__16342){
var map__16343 = p__16342;
var map__16343__$1 = cljs.core.__destructure_map(map__16343);
var node = map__16343__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16343__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.transform.into_markup(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.heading_markup(node),attrs),ctx,node);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.into_markup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidenote-container","div.sidenote-container",1042468135)], null)),(function (_,p__16344){
var map__16345 = p__16344;
var map__16345__$1 = cljs.core.__destructure_map(map__16345);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16345__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return text;
})]);
nextjournal.markdown.transform.__GT_hiccup = (function nextjournal$markdown$transform$__GT_hiccup(var_args){
var G__16347 = arguments.length;
switch (G__16347) {
case 1:
return nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (node){
return nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.transform.default_hiccup_renderers,node);
}));

(nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__16348){
var map__16349 = p__16348;
var map__16349__$1 = cljs.core.__destructure_map(map__16349);
var node = map__16349__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16349__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__16350 = (function (){var G__16351 = node;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"doc","doc",1913296891),t)){
return nextjournal.markdown.transform.hydrate_toc(G__16351);
} else {
return G__16351;
}
})();
var map__16350__$1 = cljs.core.__destructure_map(map__16350);
var node__$1 = map__16350__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16350__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5806__auto__ = nextjournal.markdown.transform.guard(cljs.core.fn_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx,type));
if((temp__5806__auto__ == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.message.red","span.message.red",-41588333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),["Unknown type: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"'."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node__$1], 0))], null)], null);
} else {
var f = temp__5806__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,node__$1) : f.call(null,ctx,node__$1));
}
}));

(nextjournal.markdown.transform.__GT_hiccup.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=nextjournal.markdown.transform.js.map
