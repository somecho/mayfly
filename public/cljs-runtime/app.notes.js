goog.provide('app.notes');
app.notes.on_focus_out = (function app$notes$on_focus_out(e,focused){
var content = e.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(focused,cljs.core.not);

return cljs.core.reset_BANG_(app.db.store,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.db.store),new cljs.core.Keyword(null,"content","content",15833224),content));
});
app.notes.on_change = (function app$notes$on_change(e,content){
cljs.core.reset_BANG_(content,e.target.value);

cljs.core.reset_BANG_(app.db.store,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.db.store),new cljs.core.Keyword(null,"last-updated","last-updated",1881380161),app.date.get_date_today()));

return cljs.core.reset_BANG_(app.db.store,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.db.store),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.deref(content)));
});
app.notes.notes = (function app$notes$notes(){
var content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.store)));
var focused = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var padding = "8px 0";
var min_height = new cljs.core.Keyword(null,"92dvh","92dvh",-1861579854);
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#notes","div#notes",123812610),(cljs.core.truth_(cljs.core.deref(focused))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#notes-content","textarea#notes-content",-1339968946),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__18949_SHARP_){
return app.notes.on_focus_out(p1__18949_SHARP_,focused);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18950_SHARP_){
return app.notes.on_change(p1__18950_SHARP_,content);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(content),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"100%","100%",2121014846),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"16px","16px",1165026892),new cljs.core.Keyword(null,"background","background",-863952629),app.theme.bg,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(focused,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(content))?nextjournal.markdown.transform.__GT_hiccup.cljs$core$IFn$_invoke$arity$1(nextjournal.markdown.parse.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(content))):null)], null))], null);
});
});

//# sourceMappingURL=app.notes.js.map
