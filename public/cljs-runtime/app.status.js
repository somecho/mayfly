goog.provide('app.status');
app.status.date_status = (function app$status$date_status(){
var date = (new Date());
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(app.date.days_short,date.getDay());
var day_of_month = app.date.get_day();
var month = app.date.get_month();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day_of_month),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null);
});
app.status.reset_status = (function app$status$reset_status(){
var now = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new Date()).getTime());
return (function (){
setInterval((function (){
return cljs.core.reset_BANG_(now,(new Date()).getTime());
}),(1000));

var today = (new Date(app.date.get_date_today())).getTime();
var tomorrow = (today + app.date.interval);
var remaining = (tomorrow - cljs.core.deref(now));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["resetting in ",app.date.millis_to_time(remaining)].join('')], null);
});
});
app.status.character_status = (function app$status$character_status(){
var characters = cljs.core.rest((function (){var all_chars = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.db.store)),(new RegExp("")));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18951_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__18951_SHARP_);
}),all_chars);
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(characters))," characters"].join('')], null);
});
app.status.separator = (function app$status$separator(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\uD802\uDD1F"], null);
});
/**
 * The status bar
 */
app.status.status = (function app$status$status(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),app.theme.secondary,new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0",new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"4px","4px",200148326),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.status.date_status], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.status.separator], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.status.reset_status], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.status.separator], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.status.character_status], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",app.theme.secondary].join('')], null)], null)], null)], null);
});

//# sourceMappingURL=app.status.js.map
