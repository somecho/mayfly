goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17921 = arguments.length;
var i__5770__auto___17922 = (0);
while(true){
if((i__5770__auto___17922 < len__5769__auto___17921)){
args__5775__auto__.push((arguments[i__5770__auto___17922]));

var G__17923 = (i__5770__auto___17922 + (1));
i__5770__auto___17922 = G__17923;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__17788_17924 = keyvals;
var vec__17789_17925 = G__17788_17924;
var seq__17790_17926 = cljs.core.seq(vec__17789_17925);
var first__17791_17927 = cljs.core.first(seq__17790_17926);
var seq__17790_17928__$1 = cljs.core.next(seq__17790_17926);
var k_17929 = first__17791_17927;
var first__17791_17930__$1 = cljs.core.first(seq__17790_17928__$1);
var seq__17790_17931__$2 = cljs.core.next(seq__17790_17928__$1);
var v_17932 = first__17791_17930__$1;
var keyvals_17933__$1 = seq__17790_17931__$2;
var G__17788_17934__$1 = G__17788_17924;
while(true){
var vec__17796_17935 = G__17788_17934__$1;
var seq__17797_17936 = cljs.core.seq(vec__17796_17935);
var first__17798_17937 = cljs.core.first(seq__17797_17936);
var seq__17797_17938__$1 = cljs.core.next(seq__17797_17936);
var k_17939__$1 = first__17798_17937;
var first__17798_17940__$1 = cljs.core.first(seq__17797_17938__$1);
var seq__17797_17941__$2 = cljs.core.next(seq__17797_17938__$1);
var v_17942__$1 = first__17798_17940__$1;
var keyvals_17943__$2 = seq__17797_17941__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_17939__$1)] = v_17942__$1);

if(keyvals_17943__$2){
var G__17944 = keyvals_17943__$2;
G__17788_17934__$1 = G__17944;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq17771){
var G__17773 = cljs.core.first(seq17771);
var seq17771__$1 = cljs.core.next(seq17771);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17773,seq17771__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__17811 = arguments.length;
switch (G__17811) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj17812 = obj;
if((!((obj17812 == null)))){
return (obj17812[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj17813 = obj;
if((!((obj17813 == null)))){
return (obj17813[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__17462__auto__ = (function (){var obj17814 = obj;
if((!((obj17814 == null)))){
return (obj17814[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__17462__auto__)){
return not_found;
} else {
return val__17462__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__17816 = arguments.length;
switch (G__17816) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj17825 = self__.obj;
if((!((obj17825 == null)))){
return (obj17825[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__17462__auto__ = (function (){var obj17829 = self__.obj;
if((!((obj17829 == null)))){
return (obj17829[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__17462__auto__)){
return not_found;
} else {
return val__17462__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17947 = arguments.length;
var i__5770__auto___17948 = (0);
while(true){
if((i__5770__auto___17948 < len__5769__auto___17947)){
args__5775__auto__.push((arguments[i__5770__auto___17948]));

var G__17949 = (i__5770__auto___17948 + (1));
i__5770__auto___17948 = G__17949;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__17842 = keyvals;
var vec__17843 = G__17842;
var seq__17844 = cljs.core.seq(vec__17843);
var first__17845 = cljs.core.first(seq__17844);
var seq__17844__$1 = cljs.core.next(seq__17844);
var k = first__17845;
var first__17845__$1 = cljs.core.first(seq__17844__$1);
var seq__17844__$2 = cljs.core.next(seq__17844__$1);
var v = first__17845__$1;
var kvs = seq__17844__$2;
var G__17842__$1 = G__17842;
while(true){
var vec__17846 = G__17842__$1;
var seq__17847 = cljs.core.seq(vec__17846);
var first__17848 = cljs.core.first(seq__17847);
var seq__17847__$1 = cljs.core.next(seq__17847);
var k__$1 = first__17848;
var first__17848__$1 = cljs.core.first(seq__17847__$1);
var seq__17847__$2 = cljs.core.next(seq__17847__$1);
var v__$1 = first__17848__$1;
var kvs__$1 = seq__17847__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__17950 = kvs__$1;
G__17842__$1 = G__17950;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq17833){
var G__17834 = cljs.core.first(seq17833);
var seq17833__$1 = cljs.core.next(seq17833);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17834,seq17833__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17951 = arguments.length;
var i__5770__auto___17952 = (0);
while(true){
if((i__5770__auto___17952 < len__5769__auto___17951)){
args__5775__auto__.push((arguments[i__5770__auto___17952]));

var G__17953 = (i__5770__auto___17952 + (1));
i__5770__auto___17952 = G__17953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq17850){
var G__17851 = cljs.core.first(seq17850);
var seq17850__$1 = cljs.core.next(seq17850);
var G__17852 = cljs.core.first(seq17850__$1);
var seq17850__$2 = cljs.core.next(seq17850__$1);
var G__17853 = cljs.core.first(seq17850__$2);
var seq17850__$3 = cljs.core.next(seq17850__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17851,G__17852,G__17853,seq17850__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17954 = arguments.length;
var i__5770__auto___17955 = (0);
while(true){
if((i__5770__auto___17955 < len__5769__auto___17954)){
args__5775__auto__.push((arguments[i__5770__auto___17955]));

var G__17956 = (i__5770__auto___17955 + (1));
i__5770__auto___17955 = G__17956;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq17856){
var G__17857 = cljs.core.first(seq17856);
var seq17856__$1 = cljs.core.next(seq17856);
var G__17858 = cljs.core.first(seq17856__$1);
var seq17856__$2 = cljs.core.next(seq17856__$1);
var G__17859 = cljs.core.first(seq17856__$2);
var seq17856__$3 = cljs.core.next(seq17856__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17857,G__17858,G__17859,seq17856__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__17864 = arguments.length;
switch (G__17864) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___17958 = arguments.length;
var i__5770__auto___17959 = (0);
while(true){
if((i__5770__auto___17959 < len__5769__auto___17958)){
args_arr__5794__auto__.push((arguments[i__5770__auto___17959]));

var G__17960 = (i__5770__auto___17959 + (1));
i__5770__auto___17959 = G__17960;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__17870_17961 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__17871_17962 = null;
var count__17872_17963 = (0);
var i__17873_17964 = (0);
while(true){
if((i__17873_17964 < count__17872_17963)){
var k_17965 = chunk__17871_17962.cljs$core$IIndexed$_nth$arity$2(null,i__17873_17964);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17965,applied_science.js_interop.unchecked_get(x,k_17965)], 0));


var G__17966 = seq__17870_17961;
var G__17967 = chunk__17871_17962;
var G__17968 = count__17872_17963;
var G__17969 = (i__17873_17964 + (1));
seq__17870_17961 = G__17966;
chunk__17871_17962 = G__17967;
count__17872_17963 = G__17968;
i__17873_17964 = G__17969;
continue;
} else {
var temp__5804__auto___17970 = cljs.core.seq(seq__17870_17961);
if(temp__5804__auto___17970){
var seq__17870_17971__$1 = temp__5804__auto___17970;
if(cljs.core.chunked_seq_QMARK_(seq__17870_17971__$1)){
var c__5568__auto___17972 = cljs.core.chunk_first(seq__17870_17971__$1);
var G__17973 = cljs.core.chunk_rest(seq__17870_17971__$1);
var G__17974 = c__5568__auto___17972;
var G__17975 = cljs.core.count(c__5568__auto___17972);
var G__17976 = (0);
seq__17870_17961 = G__17973;
chunk__17871_17962 = G__17974;
count__17872_17963 = G__17975;
i__17873_17964 = G__17976;
continue;
} else {
var k_17978 = cljs.core.first(seq__17870_17971__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17978,applied_science.js_interop.unchecked_get(x,k_17978)], 0));


var G__17979 = cljs.core.next(seq__17870_17971__$1);
var G__17980 = null;
var G__17981 = (0);
var G__17982 = (0);
seq__17870_17961 = G__17979;
chunk__17871_17962 = G__17980;
count__17872_17963 = G__17981;
i__17873_17964 = G__17982;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq17861){
var G__17862 = cljs.core.first(seq17861);
var seq17861__$1 = cljs.core.next(seq17861);
var G__17863 = cljs.core.first(seq17861__$1);
var seq17861__$2 = cljs.core.next(seq17861__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17862,G__17863,seq17861__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__17876 = array;
G__17876.push(x);

return G__17876;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__17877 = array;
G__17877.unshift(x);

return G__17877;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17983 = arguments.length;
var i__5770__auto___17984 = (0);
while(true){
if((i__5770__auto___17984 < len__5769__auto___17983)){
args__5775__auto__.push((arguments[i__5770__auto___17984]));

var G__17985 = (i__5770__auto___17984 + (1));
i__5770__auto___17984 = G__17985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj17881 = obj;
if((!((obj17881 == null)))){
return (obj17881[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq17878){
var G__17879 = cljs.core.first(seq17878);
var seq17878__$1 = cljs.core.next(seq17878);
var G__17880 = cljs.core.first(seq17878__$1);
var seq17878__$2 = cljs.core.next(seq17878__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17879,G__17880,seq17878__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj17882 = obj;
if((!((obj17882 == null)))){
return (obj17882[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17988 = arguments.length;
var i__5770__auto___17989 = (0);
while(true){
if((i__5770__auto___17989 < len__5769__auto___17988)){
args__5775__auto__.push((arguments[i__5770__auto___17989]));

var G__17990 = (i__5770__auto___17989 + (1));
i__5770__auto___17989 = G__17990;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq17883){
var G__17884 = cljs.core.first(seq17883);
var seq17883__$1 = cljs.core.next(seq17883);
var G__17885 = cljs.core.first(seq17883__$1);
var seq17883__$2 = cljs.core.next(seq17883__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17884,G__17885,seq17883__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17991 = arguments.length;
var i__5770__auto___17992 = (0);
while(true){
if((i__5770__auto___17992 < len__5769__auto___17991)){
args__5775__auto__.push((arguments[i__5770__auto___17992]));

var G__17993 = (i__5770__auto___17992 + (1));
i__5770__auto___17992 = G__17993;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__17889_17994 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__17890_17995 = null;
var count__17891_17996 = (0);
var i__17892_17997 = (0);
while(true){
if((i__17892_17997 < count__17891_17996)){
var vec__17907_17998 = chunk__17890_17995.cljs$core$IIndexed$_nth$arity$2(null,i__17892_17997);
var k_17999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17907_17998,(0),null);
var v_18000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17907_17998,(1),null);
var obj17910_18001 = obj;
var obj17911_18002 = (((!((obj17910_18001 == null))))?obj17910_18001:({}));
(obj17911_18002[applied_science.js_interop.impl.wrap_key(k_17999)] = v_18000);



var G__18003 = seq__17889_17994;
var G__18004 = chunk__17890_17995;
var G__18005 = count__17891_17996;
var G__18006 = (i__17892_17997 + (1));
seq__17889_17994 = G__18003;
chunk__17890_17995 = G__18004;
count__17891_17996 = G__18005;
i__17892_17997 = G__18006;
continue;
} else {
var temp__5804__auto___18007 = cljs.core.seq(seq__17889_17994);
if(temp__5804__auto___18007){
var seq__17889_18008__$1 = temp__5804__auto___18007;
if(cljs.core.chunked_seq_QMARK_(seq__17889_18008__$1)){
var c__5568__auto___18009 = cljs.core.chunk_first(seq__17889_18008__$1);
var G__18010 = cljs.core.chunk_rest(seq__17889_18008__$1);
var G__18011 = c__5568__auto___18009;
var G__18012 = cljs.core.count(c__5568__auto___18009);
var G__18013 = (0);
seq__17889_17994 = G__18010;
chunk__17890_17995 = G__18011;
count__17891_17996 = G__18012;
i__17892_17997 = G__18013;
continue;
} else {
var vec__17914_18014 = cljs.core.first(seq__17889_18008__$1);
var k_18015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17914_18014,(0),null);
var v_18016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17914_18014,(1),null);
var obj17917_18018 = obj;
var obj17918_18019 = (((!((obj17917_18018 == null))))?obj17917_18018:({}));
(obj17918_18019[applied_science.js_interop.impl.wrap_key(k_18015)] = v_18016);



var G__18021 = cljs.core.next(seq__17889_18008__$1);
var G__18022 = null;
var G__18023 = (0);
var G__18024 = (0);
seq__17889_17994 = G__18021;
chunk__17890_17995 = G__18022;
count__17891_17996 = G__18023;
i__17892_17997 = G__18024;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq17886){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17886));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
