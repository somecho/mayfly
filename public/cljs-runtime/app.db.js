goog.provide('app.db');
if((typeof app !== 'undefined') && (typeof app.db !== 'undefined') && (typeof app.db.store !== 'undefined')){
} else {
app.db.store = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
app.db.init = (function app$db$init(){
var content = localStorage.getItem("content");
var last_updated = localStorage.getItem("lastUpdated");
if(cljs.core.truth_(content)){
cljs.core.reset_BANG_(app.db.store,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.db.store),new cljs.core.Keyword(null,"content","content",15833224),content));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = last_updated;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_updated,app.date.get_date_today());
} else {
return and__5043__auto__;
}
})())){
return cljs.core.reset_BANG_(app.db.store,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.db.store),new cljs.core.Keyword(null,"content","content",15833224),""));
} else {
return null;
}
});
app.db.on_store_change = (function app$db$on_store_change(key,atom,old,new$){
localStorage.setItem("content",new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(new$));

return localStorage.setItem("lastUpdated",new cljs.core.Keyword(null,"last-updated","last-updated",1881380161).cljs$core$IFn$_invoke$arity$1(new$));
});
cljs.core.add_watch(app.db.store,new cljs.core.Keyword(null,"watcher","watcher",2145165251),app.db.on_store_change);

//# sourceMappingURL=app.db.js.map
