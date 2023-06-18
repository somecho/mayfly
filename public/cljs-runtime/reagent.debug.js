goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__20919__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20920__i = 0, G__20920__a = new Array(arguments.length -  0);
while (G__20920__i < G__20920__a.length) {G__20920__a[G__20920__i] = arguments[G__20920__i + 0]; ++G__20920__i;}
  args = new cljs.core.IndexedSeq(G__20920__a,0,null);
} 
return G__20919__delegate.call(this,args);};
G__20919.cljs$lang$maxFixedArity = 0;
G__20919.cljs$lang$applyTo = (function (arglist__20921){
var args = cljs.core.seq(arglist__20921);
return G__20919__delegate(args);
});
G__20919.cljs$core$IFn$_invoke$arity$variadic = G__20919__delegate;
return G__20919;
})()
);

(o.error = (function() { 
var G__20922__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20923__i = 0, G__20923__a = new Array(arguments.length -  0);
while (G__20923__i < G__20923__a.length) {G__20923__a[G__20923__i] = arguments[G__20923__i + 0]; ++G__20923__i;}
  args = new cljs.core.IndexedSeq(G__20923__a,0,null);
} 
return G__20922__delegate.call(this,args);};
G__20922.cljs$lang$maxFixedArity = 0;
G__20922.cljs$lang$applyTo = (function (arglist__20924){
var args = cljs.core.seq(arglist__20924);
return G__20922__delegate(args);
});
G__20922.cljs$core$IFn$_invoke$arity$variadic = G__20922__delegate;
return G__20922;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
