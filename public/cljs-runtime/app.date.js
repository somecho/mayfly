goog.provide('app.date');
app.date.days_short = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], null);
app.date.interval = (86400000);
app.date.pad = (function app$date$pad(n){
return n.toString().padStart("2","0");
});
app.date.get_day = (function app$date$get_day(){
return app.date.pad((new Date()).getDate());
});
app.date.get_month = (function app$date$get_month(){
return app.date.pad(((new Date()).getMonth() + (1)));
});
app.date.get_year = (function app$date$get_year(){
return (new Date()).getUTCFullYear();
});
app.date.get_date_today = (function app$date$get_date_today(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.date.get_year()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.date.get_month()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.date.get_day())].join('');
});
app.date.millis_to_time = (function app$date$millis_to_time(ms){
var total_seconds = (ms / (1000));
var total_minutes = (total_seconds / (60));
var total_hours = ((total_minutes / (60)) - (2));
var hours = Math.floor(total_hours);
var minutes = app.date.pad(Math.floor(cljs.core.mod(total_minutes,(60))));
var seconds = app.date.pad(Math.floor(cljs.core.mod(total_seconds,(60))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hours),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seconds)].join('');
});

//# sourceMappingURL=app.date.js.map
