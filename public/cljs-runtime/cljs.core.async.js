goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13843 = (function (f,blockable,meta13844){
this.f = f;
this.blockable = blockable;
this.meta13844 = meta13844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13845,meta13844__$1){
var self__ = this;
var _13845__$1 = this;
return (new cljs.core.async.t_cljs$core$async13843(self__.f,self__.blockable,meta13844__$1));
}));

(cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13845){
var self__ = this;
var _13845__$1 = this;
return self__.meta13844;
}));

(cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13844","meta13844",1395166640,null)], null);
}));

(cljs.core.async.t_cljs$core$async13843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13843");

(cljs.core.async.t_cljs$core$async13843.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13843.
 */
cljs.core.async.__GT_t_cljs$core$async13843 = (function cljs$core$async$__GT_t_cljs$core$async13843(f,blockable,meta13844){
return (new cljs.core.async.t_cljs$core$async13843(f,blockable,meta13844));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13839 = arguments.length;
switch (G__13839) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13843(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13906 = arguments.length;
switch (G__13906) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13908 = arguments.length;
switch (G__13908) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13912 = arguments.length;
switch (G__13912) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17218 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17218) : fn1.call(null,val_17218));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17218) : fn1.call(null,val_17218));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13920 = arguments.length;
switch (G__13920) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17222 = n;
var x_17223 = (0);
while(true){
if((x_17223 < n__5636__auto___17222)){
(a[x_17223] = x_17223);

var G__17224 = (x_17223 + (1));
x_17223 = G__17224;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13939 = (function (flag,meta13940){
this.flag = flag;
this.meta13940 = meta13940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13941,meta13940__$1){
var self__ = this;
var _13941__$1 = this;
return (new cljs.core.async.t_cljs$core$async13939(self__.flag,meta13940__$1));
}));

(cljs.core.async.t_cljs$core$async13939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13941){
var self__ = this;
var _13941__$1 = this;
return self__.meta13940;
}));

(cljs.core.async.t_cljs$core$async13939.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13939.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13940","meta13940",951408655,null)], null);
}));

(cljs.core.async.t_cljs$core$async13939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13939");

(cljs.core.async.t_cljs$core$async13939.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13939.
 */
cljs.core.async.__GT_t_cljs$core$async13939 = (function cljs$core$async$__GT_t_cljs$core$async13939(flag,meta13940){
return (new cljs.core.async.t_cljs$core$async13939(flag,meta13940));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13939(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13947 = (function (flag,cb,meta13948){
this.flag = flag;
this.cb = cb;
this.meta13948 = meta13948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13949,meta13948__$1){
var self__ = this;
var _13949__$1 = this;
return (new cljs.core.async.t_cljs$core$async13947(self__.flag,self__.cb,meta13948__$1));
}));

(cljs.core.async.t_cljs$core$async13947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13949){
var self__ = this;
var _13949__$1 = this;
return self__.meta13948;
}));

(cljs.core.async.t_cljs$core$async13947.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13947.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13948","meta13948",-327839713,null)], null);
}));

(cljs.core.async.t_cljs$core$async13947.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13947");

(cljs.core.async.t_cljs$core$async13947.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13947");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13947.
 */
cljs.core.async.__GT_t_cljs$core$async13947 = (function cljs$core$async$__GT_t_cljs$core$async13947(flag,cb,meta13948){
return (new cljs.core.async.t_cljs$core$async13947(flag,cb,meta13948));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13947(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13955_SHARP_){
var G__13957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13955_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13957) : fret.call(null,G__13957));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13956_SHARP_){
var G__13958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13956_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13958) : fret.call(null,G__13958));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17237 = (i + (1));
i = G__17237;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17239 = arguments.length;
var i__5770__auto___17240 = (0);
while(true){
if((i__5770__auto___17240 < len__5769__auto___17239)){
args__5775__auto__.push((arguments[i__5770__auto___17240]));

var G__17241 = (i__5770__auto___17240 + (1));
i__5770__auto___17240 = G__17241;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13975){
var map__13976 = p__13975;
var map__13976__$1 = cljs.core.__destructure_map(map__13976);
var opts = map__13976__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13965){
var G__13968 = cljs.core.first(seq13965);
var seq13965__$1 = cljs.core.next(seq13965);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13968,seq13965__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13992 = arguments.length;
switch (G__13992) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13741__auto___17270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_14036){
var state_val_14037 = (state_14036[(1)]);
if((state_val_14037 === (7))){
var inst_14031 = (state_14036[(2)]);
var state_14036__$1 = state_14036;
var statearr_14039_17271 = state_14036__$1;
(statearr_14039_17271[(2)] = inst_14031);

(statearr_14039_17271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (1))){
var state_14036__$1 = state_14036;
var statearr_14041_17272 = state_14036__$1;
(statearr_14041_17272[(2)] = null);

(statearr_14041_17272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (4))){
var inst_14011 = (state_14036[(7)]);
var inst_14011__$1 = (state_14036[(2)]);
var inst_14013 = (inst_14011__$1 == null);
var state_14036__$1 = (function (){var statearr_14042 = state_14036;
(statearr_14042[(7)] = inst_14011__$1);

return statearr_14042;
})();
if(cljs.core.truth_(inst_14013)){
var statearr_14043_17273 = state_14036__$1;
(statearr_14043_17273[(1)] = (5));

} else {
var statearr_14044_17274 = state_14036__$1;
(statearr_14044_17274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (13))){
var state_14036__$1 = state_14036;
var statearr_14047_17275 = state_14036__$1;
(statearr_14047_17275[(2)] = null);

(statearr_14047_17275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (6))){
var inst_14011 = (state_14036[(7)]);
var state_14036__$1 = state_14036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14036__$1,(11),to,inst_14011);
} else {
if((state_val_14037 === (3))){
var inst_14034 = (state_14036[(2)]);
var state_14036__$1 = state_14036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14036__$1,inst_14034);
} else {
if((state_val_14037 === (12))){
var state_14036__$1 = state_14036;
var statearr_14054_17278 = state_14036__$1;
(statearr_14054_17278[(2)] = null);

(statearr_14054_17278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (2))){
var state_14036__$1 = state_14036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14036__$1,(4),from);
} else {
if((state_val_14037 === (11))){
var inst_14023 = (state_14036[(2)]);
var state_14036__$1 = state_14036;
if(cljs.core.truth_(inst_14023)){
var statearr_14064_17281 = state_14036__$1;
(statearr_14064_17281[(1)] = (12));

} else {
var statearr_14065_17282 = state_14036__$1;
(statearr_14065_17282[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (9))){
var state_14036__$1 = state_14036;
var statearr_14067_17283 = state_14036__$1;
(statearr_14067_17283[(2)] = null);

(statearr_14067_17283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (5))){
var state_14036__$1 = state_14036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14068_17284 = state_14036__$1;
(statearr_14068_17284[(1)] = (8));

} else {
var statearr_14071_17285 = state_14036__$1;
(statearr_14071_17285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (14))){
var inst_14029 = (state_14036[(2)]);
var state_14036__$1 = state_14036;
var statearr_14075_17289 = state_14036__$1;
(statearr_14075_17289[(2)] = inst_14029);

(statearr_14075_17289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (10))){
var inst_14020 = (state_14036[(2)]);
var state_14036__$1 = state_14036;
var statearr_14083_17290 = state_14036__$1;
(statearr_14083_17290[(2)] = inst_14020);

(statearr_14083_17290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14037 === (8))){
var inst_14017 = cljs.core.async.close_BANG_(to);
var state_14036__$1 = state_14036;
var statearr_14085_17292 = state_14036__$1;
(statearr_14085_17292[(2)] = inst_14017);

(statearr_14085_17292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_14091 = [null,null,null,null,null,null,null,null];
(statearr_14091[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_14091[(1)] = (1));

return statearr_14091;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_14036){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14036);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14094){var ex__13518__auto__ = e14094;
var statearr_14097_17296 = state_14036;
(statearr_14097_17296[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14036[(4)]))){
var statearr_14098_17297 = state_14036;
(statearr_14098_17297[(1)] = cljs.core.first((state_14036[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17298 = state_14036;
state_14036 = G__17298;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_14036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_14036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_14104 = f__13742__auto__();
(statearr_14104[(6)] = c__13741__auto___17270);

return statearr_14104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14113){
var vec__14114 = p__14113;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14114,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14114,(1),null);
var job = vec__14114;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13741__auto___17303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_14121){
var state_val_14122 = (state_14121[(1)]);
if((state_val_14122 === (1))){
var state_14121__$1 = state_14121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14121__$1,(2),res,v);
} else {
if((state_val_14122 === (2))){
var inst_14118 = (state_14121[(2)]);
var inst_14119 = cljs.core.async.close_BANG_(res);
var state_14121__$1 = (function (){var statearr_14127 = state_14121;
(statearr_14127[(7)] = inst_14118);

return statearr_14127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14121__$1,inst_14119);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0 = (function (){
var statearr_14135 = [null,null,null,null,null,null,null,null];
(statearr_14135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__);

(statearr_14135[(1)] = (1));

return statearr_14135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1 = (function (state_14121){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14121);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14140){var ex__13518__auto__ = e14140;
var statearr_14142_17316 = state_14121;
(statearr_14142_17316[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14121[(4)]))){
var statearr_14143_17318 = state_14121;
(statearr_14143_17318[(1)] = cljs.core.first((state_14121[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17319 = state_14121;
state_14121 = G__17319;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = function(state_14121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1.call(this,state_14121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_14147 = f__13742__auto__();
(statearr_14147[(6)] = c__13741__auto___17303);

return statearr_14147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14158){
var vec__14159 = p__14158;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14159,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14159,(1),null);
var job = vec__14159;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17327 = n;
var __17328 = (0);
while(true){
if((__17328 < n__5636__auto___17327)){
var G__14184_17329 = type;
var G__14184_17330__$1 = (((G__14184_17329 instanceof cljs.core.Keyword))?G__14184_17329.fqn:null);
switch (G__14184_17330__$1) {
case "compute":
var c__13741__auto___17332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17328,c__13741__auto___17332,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async){
return (function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = ((function (__17328,c__13741__auto___17332,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async){
return (function (state_14209){
var state_val_14210 = (state_14209[(1)]);
if((state_val_14210 === (1))){
var state_14209__$1 = state_14209;
var statearr_14214_17333 = state_14209__$1;
(statearr_14214_17333[(2)] = null);

(statearr_14214_17333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14210 === (2))){
var state_14209__$1 = state_14209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14209__$1,(4),jobs);
} else {
if((state_val_14210 === (3))){
var inst_14203 = (state_14209[(2)]);
var state_14209__$1 = state_14209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14209__$1,inst_14203);
} else {
if((state_val_14210 === (4))){
var inst_14195 = (state_14209[(2)]);
var inst_14196 = process__$1(inst_14195);
var state_14209__$1 = state_14209;
if(cljs.core.truth_(inst_14196)){
var statearr_14222_17337 = state_14209__$1;
(statearr_14222_17337[(1)] = (5));

} else {
var statearr_14224_17338 = state_14209__$1;
(statearr_14224_17338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14210 === (5))){
var state_14209__$1 = state_14209;
var statearr_14225_17340 = state_14209__$1;
(statearr_14225_17340[(2)] = null);

(statearr_14225_17340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14210 === (6))){
var state_14209__$1 = state_14209;
var statearr_14230_17341 = state_14209__$1;
(statearr_14230_17341[(2)] = null);

(statearr_14230_17341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14210 === (7))){
var inst_14201 = (state_14209[(2)]);
var state_14209__$1 = state_14209;
var statearr_14232_17343 = state_14209__$1;
(statearr_14232_17343[(2)] = inst_14201);

(statearr_14232_17343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17328,c__13741__auto___17332,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async))
;
return ((function (__17328,switch__13514__auto__,c__13741__auto___17332,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0 = (function (){
var statearr_14233 = [null,null,null,null,null,null,null];
(statearr_14233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__);

(statearr_14233[(1)] = (1));

return statearr_14233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1 = (function (state_14209){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14209);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14234){var ex__13518__auto__ = e14234;
var statearr_14235_17346 = state_14209;
(statearr_14235_17346[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14209[(4)]))){
var statearr_14236_17347 = state_14209;
(statearr_14236_17347[(1)] = cljs.core.first((state_14209[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17349 = state_14209;
state_14209 = G__17349;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = function(state_14209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1.call(this,state_14209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__;
})()
;})(__17328,switch__13514__auto__,c__13741__auto___17332,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async))
})();
var state__13743__auto__ = (function (){var statearr_14237 = f__13742__auto__();
(statearr_14237[(6)] = c__13741__auto___17332);

return statearr_14237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
});})(__17328,c__13741__auto___17332,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async))
);


break;
case "async":
var c__13741__auto___17351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17328,c__13741__auto___17351,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async){
return (function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = ((function (__17328,c__13741__auto___17351,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async){
return (function (state_14250){
var state_val_14251 = (state_14250[(1)]);
if((state_val_14251 === (1))){
var state_14250__$1 = state_14250;
var statearr_14255_17352 = state_14250__$1;
(statearr_14255_17352[(2)] = null);

(statearr_14255_17352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14251 === (2))){
var state_14250__$1 = state_14250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14250__$1,(4),jobs);
} else {
if((state_val_14251 === (3))){
var inst_14248 = (state_14250[(2)]);
var state_14250__$1 = state_14250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14250__$1,inst_14248);
} else {
if((state_val_14251 === (4))){
var inst_14240 = (state_14250[(2)]);
var inst_14241 = async(inst_14240);
var state_14250__$1 = state_14250;
if(cljs.core.truth_(inst_14241)){
var statearr_14265_17355 = state_14250__$1;
(statearr_14265_17355[(1)] = (5));

} else {
var statearr_14266_17356 = state_14250__$1;
(statearr_14266_17356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14251 === (5))){
var state_14250__$1 = state_14250;
var statearr_14271_17357 = state_14250__$1;
(statearr_14271_17357[(2)] = null);

(statearr_14271_17357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14251 === (6))){
var state_14250__$1 = state_14250;
var statearr_14280_17358 = state_14250__$1;
(statearr_14280_17358[(2)] = null);

(statearr_14280_17358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14251 === (7))){
var inst_14246 = (state_14250[(2)]);
var state_14250__$1 = state_14250;
var statearr_14281_17360 = state_14250__$1;
(statearr_14281_17360[(2)] = inst_14246);

(statearr_14281_17360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17328,c__13741__auto___17351,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async))
;
return ((function (__17328,switch__13514__auto__,c__13741__auto___17351,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0 = (function (){
var statearr_14283 = [null,null,null,null,null,null,null];
(statearr_14283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__);

(statearr_14283[(1)] = (1));

return statearr_14283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1 = (function (state_14250){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14250);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14284){var ex__13518__auto__ = e14284;
var statearr_14285_17362 = state_14250;
(statearr_14285_17362[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14250[(4)]))){
var statearr_14286_17363 = state_14250;
(statearr_14286_17363[(1)] = cljs.core.first((state_14250[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17364 = state_14250;
state_14250 = G__17364;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = function(state_14250){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1.call(this,state_14250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__;
})()
;})(__17328,switch__13514__auto__,c__13741__auto___17351,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async))
})();
var state__13743__auto__ = (function (){var statearr_14287 = f__13742__auto__();
(statearr_14287[(6)] = c__13741__auto___17351);

return statearr_14287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
});})(__17328,c__13741__auto___17351,G__14184_17329,G__14184_17330__$1,n__5636__auto___17327,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14184_17330__$1)].join('')));

}

var G__17365 = (__17328 + (1));
__17328 = G__17365;
continue;
} else {
}
break;
}

var c__13741__auto___17366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_14309){
var state_val_14310 = (state_14309[(1)]);
if((state_val_14310 === (7))){
var inst_14305 = (state_14309[(2)]);
var state_14309__$1 = state_14309;
var statearr_14311_17367 = state_14309__$1;
(statearr_14311_17367[(2)] = inst_14305);

(statearr_14311_17367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (1))){
var state_14309__$1 = state_14309;
var statearr_14312_17368 = state_14309__$1;
(statearr_14312_17368[(2)] = null);

(statearr_14312_17368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (4))){
var inst_14290 = (state_14309[(7)]);
var inst_14290__$1 = (state_14309[(2)]);
var inst_14291 = (inst_14290__$1 == null);
var state_14309__$1 = (function (){var statearr_14313 = state_14309;
(statearr_14313[(7)] = inst_14290__$1);

return statearr_14313;
})();
if(cljs.core.truth_(inst_14291)){
var statearr_14314_17369 = state_14309__$1;
(statearr_14314_17369[(1)] = (5));

} else {
var statearr_14315_17370 = state_14309__$1;
(statearr_14315_17370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (6))){
var inst_14290 = (state_14309[(7)]);
var inst_14295 = (state_14309[(8)]);
var inst_14295__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14296 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14297 = [inst_14290,inst_14295__$1];
var inst_14298 = (new cljs.core.PersistentVector(null,2,(5),inst_14296,inst_14297,null));
var state_14309__$1 = (function (){var statearr_14316 = state_14309;
(statearr_14316[(8)] = inst_14295__$1);

return statearr_14316;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14309__$1,(8),jobs,inst_14298);
} else {
if((state_val_14310 === (3))){
var inst_14307 = (state_14309[(2)]);
var state_14309__$1 = state_14309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14309__$1,inst_14307);
} else {
if((state_val_14310 === (2))){
var state_14309__$1 = state_14309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14309__$1,(4),from);
} else {
if((state_val_14310 === (9))){
var inst_14302 = (state_14309[(2)]);
var state_14309__$1 = (function (){var statearr_14317 = state_14309;
(statearr_14317[(9)] = inst_14302);

return statearr_14317;
})();
var statearr_14318_17377 = state_14309__$1;
(statearr_14318_17377[(2)] = null);

(statearr_14318_17377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (5))){
var inst_14293 = cljs.core.async.close_BANG_(jobs);
var state_14309__$1 = state_14309;
var statearr_14319_17378 = state_14309__$1;
(statearr_14319_17378[(2)] = inst_14293);

(statearr_14319_17378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14310 === (8))){
var inst_14295 = (state_14309[(8)]);
var inst_14300 = (state_14309[(2)]);
var state_14309__$1 = (function (){var statearr_14322 = state_14309;
(statearr_14322[(10)] = inst_14300);

return statearr_14322;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14309__$1,(9),results,inst_14295);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0 = (function (){
var statearr_14326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__);

(statearr_14326[(1)] = (1));

return statearr_14326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1 = (function (state_14309){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14309);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14328){var ex__13518__auto__ = e14328;
var statearr_14329_17379 = state_14309;
(statearr_14329_17379[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14309[(4)]))){
var statearr_14330_17380 = state_14309;
(statearr_14330_17380[(1)] = cljs.core.first((state_14309[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17381 = state_14309;
state_14309 = G__17381;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = function(state_14309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1.call(this,state_14309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_14331 = f__13742__auto__();
(statearr_14331[(6)] = c__13741__auto___17366);

return statearr_14331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


var c__13741__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_14370){
var state_val_14371 = (state_14370[(1)]);
if((state_val_14371 === (7))){
var inst_14365 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
var statearr_14375_17382 = state_14370__$1;
(statearr_14375_17382[(2)] = inst_14365);

(statearr_14375_17382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (20))){
var state_14370__$1 = state_14370;
var statearr_14376_17383 = state_14370__$1;
(statearr_14376_17383[(2)] = null);

(statearr_14376_17383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (1))){
var state_14370__$1 = state_14370;
var statearr_14377_17393 = state_14370__$1;
(statearr_14377_17393[(2)] = null);

(statearr_14377_17393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (4))){
var inst_14334 = (state_14370[(7)]);
var inst_14334__$1 = (state_14370[(2)]);
var inst_14335 = (inst_14334__$1 == null);
var state_14370__$1 = (function (){var statearr_14378 = state_14370;
(statearr_14378[(7)] = inst_14334__$1);

return statearr_14378;
})();
if(cljs.core.truth_(inst_14335)){
var statearr_14379_17397 = state_14370__$1;
(statearr_14379_17397[(1)] = (5));

} else {
var statearr_14380_17398 = state_14370__$1;
(statearr_14380_17398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (15))){
var inst_14347 = (state_14370[(8)]);
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14370__$1,(18),to,inst_14347);
} else {
if((state_val_14371 === (21))){
var inst_14360 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
var statearr_14388_17399 = state_14370__$1;
(statearr_14388_17399[(2)] = inst_14360);

(statearr_14388_17399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (13))){
var inst_14362 = (state_14370[(2)]);
var state_14370__$1 = (function (){var statearr_14392 = state_14370;
(statearr_14392[(9)] = inst_14362);

return statearr_14392;
})();
var statearr_14393_17402 = state_14370__$1;
(statearr_14393_17402[(2)] = null);

(statearr_14393_17402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (6))){
var inst_14334 = (state_14370[(7)]);
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14370__$1,(11),inst_14334);
} else {
if((state_val_14371 === (17))){
var inst_14355 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
if(cljs.core.truth_(inst_14355)){
var statearr_14394_17403 = state_14370__$1;
(statearr_14394_17403[(1)] = (19));

} else {
var statearr_14395_17404 = state_14370__$1;
(statearr_14395_17404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (3))){
var inst_14367 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14370__$1,inst_14367);
} else {
if((state_val_14371 === (12))){
var inst_14344 = (state_14370[(10)]);
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14370__$1,(14),inst_14344);
} else {
if((state_val_14371 === (2))){
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14370__$1,(4),results);
} else {
if((state_val_14371 === (19))){
var state_14370__$1 = state_14370;
var statearr_14402_17405 = state_14370__$1;
(statearr_14402_17405[(2)] = null);

(statearr_14402_17405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (11))){
var inst_14344 = (state_14370[(2)]);
var state_14370__$1 = (function (){var statearr_14404 = state_14370;
(statearr_14404[(10)] = inst_14344);

return statearr_14404;
})();
var statearr_14405_17407 = state_14370__$1;
(statearr_14405_17407[(2)] = null);

(statearr_14405_17407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (9))){
var state_14370__$1 = state_14370;
var statearr_14409_17409 = state_14370__$1;
(statearr_14409_17409[(2)] = null);

(statearr_14409_17409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (5))){
var state_14370__$1 = state_14370;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14412_17410 = state_14370__$1;
(statearr_14412_17410[(1)] = (8));

} else {
var statearr_14413_17411 = state_14370__$1;
(statearr_14413_17411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (14))){
var inst_14349 = (state_14370[(11)]);
var inst_14347 = (state_14370[(8)]);
var inst_14347__$1 = (state_14370[(2)]);
var inst_14348 = (inst_14347__$1 == null);
var inst_14349__$1 = cljs.core.not(inst_14348);
var state_14370__$1 = (function (){var statearr_14415 = state_14370;
(statearr_14415[(11)] = inst_14349__$1);

(statearr_14415[(8)] = inst_14347__$1);

return statearr_14415;
})();
if(inst_14349__$1){
var statearr_14416_17413 = state_14370__$1;
(statearr_14416_17413[(1)] = (15));

} else {
var statearr_14419_17414 = state_14370__$1;
(statearr_14419_17414[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (16))){
var inst_14349 = (state_14370[(11)]);
var state_14370__$1 = state_14370;
var statearr_14422_17415 = state_14370__$1;
(statearr_14422_17415[(2)] = inst_14349);

(statearr_14422_17415[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (10))){
var inst_14341 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
var statearr_14424_17417 = state_14370__$1;
(statearr_14424_17417[(2)] = inst_14341);

(statearr_14424_17417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (18))){
var inst_14352 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
var statearr_14425_17418 = state_14370__$1;
(statearr_14425_17418[(2)] = inst_14352);

(statearr_14425_17418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (8))){
var inst_14338 = cljs.core.async.close_BANG_(to);
var state_14370__$1 = state_14370;
var statearr_14428_17419 = state_14370__$1;
(statearr_14428_17419[(2)] = inst_14338);

(statearr_14428_17419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0 = (function (){
var statearr_14432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__);

(statearr_14432[(1)] = (1));

return statearr_14432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1 = (function (state_14370){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14370);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14433){var ex__13518__auto__ = e14433;
var statearr_14434_17426 = state_14370;
(statearr_14434_17426[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14370[(4)]))){
var statearr_14435_17431 = state_14370;
(statearr_14435_17431[(1)] = cljs.core.first((state_14370[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17435 = state_14370;
state_14370 = G__17435;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__ = function(state_14370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1.call(this,state_14370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_14437 = f__13742__auto__();
(statearr_14437[(6)] = c__13741__auto__);

return statearr_14437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));

return c__13741__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14443 = arguments.length;
switch (G__14443) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14455 = arguments.length;
switch (G__14455) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14469 = arguments.length;
switch (G__14469) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13741__auto___17449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_14525){
var state_val_14527 = (state_14525[(1)]);
if((state_val_14527 === (7))){
var inst_14520 = (state_14525[(2)]);
var state_14525__$1 = state_14525;
var statearr_14535_17457 = state_14525__$1;
(statearr_14535_17457[(2)] = inst_14520);

(statearr_14535_17457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (1))){
var state_14525__$1 = state_14525;
var statearr_14540_17464 = state_14525__$1;
(statearr_14540_17464[(2)] = null);

(statearr_14540_17464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (4))){
var inst_14485 = (state_14525[(7)]);
var inst_14485__$1 = (state_14525[(2)]);
var inst_14491 = (inst_14485__$1 == null);
var state_14525__$1 = (function (){var statearr_14544 = state_14525;
(statearr_14544[(7)] = inst_14485__$1);

return statearr_14544;
})();
if(cljs.core.truth_(inst_14491)){
var statearr_14545_17465 = state_14525__$1;
(statearr_14545_17465[(1)] = (5));

} else {
var statearr_14555_17466 = state_14525__$1;
(statearr_14555_17466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (13))){
var state_14525__$1 = state_14525;
var statearr_14558_17467 = state_14525__$1;
(statearr_14558_17467[(2)] = null);

(statearr_14558_17467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (6))){
var inst_14485 = (state_14525[(7)]);
var inst_14501 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14485) : p.call(null,inst_14485));
var state_14525__$1 = state_14525;
if(cljs.core.truth_(inst_14501)){
var statearr_14563_17471 = state_14525__$1;
(statearr_14563_17471[(1)] = (9));

} else {
var statearr_14564_17472 = state_14525__$1;
(statearr_14564_17472[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (3))){
var inst_14522 = (state_14525[(2)]);
var state_14525__$1 = state_14525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14525__$1,inst_14522);
} else {
if((state_val_14527 === (12))){
var state_14525__$1 = state_14525;
var statearr_14568_17473 = state_14525__$1;
(statearr_14568_17473[(2)] = null);

(statearr_14568_17473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (2))){
var state_14525__$1 = state_14525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14525__$1,(4),ch);
} else {
if((state_val_14527 === (11))){
var inst_14485 = (state_14525[(7)]);
var inst_14507 = (state_14525[(2)]);
var state_14525__$1 = state_14525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14525__$1,(8),inst_14507,inst_14485);
} else {
if((state_val_14527 === (9))){
var state_14525__$1 = state_14525;
var statearr_14579_17474 = state_14525__$1;
(statearr_14579_17474[(2)] = tc);

(statearr_14579_17474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (5))){
var inst_14493 = cljs.core.async.close_BANG_(tc);
var inst_14498 = cljs.core.async.close_BANG_(fc);
var state_14525__$1 = (function (){var statearr_14585 = state_14525;
(statearr_14585[(8)] = inst_14493);

return statearr_14585;
})();
var statearr_14586_17478 = state_14525__$1;
(statearr_14586_17478[(2)] = inst_14498);

(statearr_14586_17478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (14))){
var inst_14518 = (state_14525[(2)]);
var state_14525__$1 = state_14525;
var statearr_14588_17483 = state_14525__$1;
(statearr_14588_17483[(2)] = inst_14518);

(statearr_14588_17483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (10))){
var state_14525__$1 = state_14525;
var statearr_14589_17487 = state_14525__$1;
(statearr_14589_17487[(2)] = fc);

(statearr_14589_17487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14527 === (8))){
var inst_14513 = (state_14525[(2)]);
var state_14525__$1 = state_14525;
if(cljs.core.truth_(inst_14513)){
var statearr_14591_17490 = state_14525__$1;
(statearr_14591_17490[(1)] = (12));

} else {
var statearr_14592_17491 = state_14525__$1;
(statearr_14592_17491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_14599 = [null,null,null,null,null,null,null,null,null];
(statearr_14599[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_14599[(1)] = (1));

return statearr_14599;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_14525){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14525);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14605){var ex__13518__auto__ = e14605;
var statearr_14606_17499 = state_14525;
(statearr_14606_17499[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14525[(4)]))){
var statearr_14610_17500 = state_14525;
(statearr_14610_17500[(1)] = cljs.core.first((state_14525[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17501 = state_14525;
state_14525 = G__17501;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_14525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_14525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_14629 = f__13742__auto__();
(statearr_14629[(6)] = c__13741__auto___17449);

return statearr_14629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13741__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_14719){
var state_val_14720 = (state_14719[(1)]);
if((state_val_14720 === (7))){
var inst_14709 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
var statearr_14730_17502 = state_14719__$1;
(statearr_14730_17502[(2)] = inst_14709);

(statearr_14730_17502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (1))){
var inst_14668 = init;
var inst_14670 = inst_14668;
var state_14719__$1 = (function (){var statearr_14734 = state_14719;
(statearr_14734[(7)] = inst_14670);

return statearr_14734;
})();
var statearr_14738_17503 = state_14719__$1;
(statearr_14738_17503[(2)] = null);

(statearr_14738_17503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (4))){
var inst_14675 = (state_14719[(8)]);
var inst_14675__$1 = (state_14719[(2)]);
var inst_14679 = (inst_14675__$1 == null);
var state_14719__$1 = (function (){var statearr_14741 = state_14719;
(statearr_14741[(8)] = inst_14675__$1);

return statearr_14741;
})();
if(cljs.core.truth_(inst_14679)){
var statearr_14743_17513 = state_14719__$1;
(statearr_14743_17513[(1)] = (5));

} else {
var statearr_14745_17514 = state_14719__$1;
(statearr_14745_17514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (6))){
var inst_14675 = (state_14719[(8)]);
var inst_14670 = (state_14719[(7)]);
var inst_14687 = (state_14719[(9)]);
var inst_14687__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14670,inst_14675) : f.call(null,inst_14670,inst_14675));
var inst_14693 = cljs.core.reduced_QMARK_(inst_14687__$1);
var state_14719__$1 = (function (){var statearr_14752 = state_14719;
(statearr_14752[(9)] = inst_14687__$1);

return statearr_14752;
})();
if(inst_14693){
var statearr_14755_17515 = state_14719__$1;
(statearr_14755_17515[(1)] = (8));

} else {
var statearr_14756_17516 = state_14719__$1;
(statearr_14756_17516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (3))){
var inst_14711 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14719__$1,inst_14711);
} else {
if((state_val_14720 === (2))){
var state_14719__$1 = state_14719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14719__$1,(4),ch);
} else {
if((state_val_14720 === (9))){
var inst_14687 = (state_14719[(9)]);
var inst_14670 = inst_14687;
var state_14719__$1 = (function (){var statearr_14759 = state_14719;
(statearr_14759[(7)] = inst_14670);

return statearr_14759;
})();
var statearr_14764_17517 = state_14719__$1;
(statearr_14764_17517[(2)] = null);

(statearr_14764_17517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (5))){
var inst_14670 = (state_14719[(7)]);
var state_14719__$1 = state_14719;
var statearr_14769_17518 = state_14719__$1;
(statearr_14769_17518[(2)] = inst_14670);

(statearr_14769_17518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (10))){
var inst_14706 = (state_14719[(2)]);
var state_14719__$1 = state_14719;
var statearr_14778_17520 = state_14719__$1;
(statearr_14778_17520[(2)] = inst_14706);

(statearr_14778_17520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14720 === (8))){
var inst_14687 = (state_14719[(9)]);
var inst_14698 = cljs.core.deref(inst_14687);
var state_14719__$1 = state_14719;
var statearr_14817_17523 = state_14719__$1;
(statearr_14817_17523[(2)] = inst_14698);

(statearr_14817_17523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13515__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13515__auto____0 = (function (){
var statearr_14822 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14822[(0)] = cljs$core$async$reduce_$_state_machine__13515__auto__);

(statearr_14822[(1)] = (1));

return statearr_14822;
});
var cljs$core$async$reduce_$_state_machine__13515__auto____1 = (function (state_14719){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14719);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14824){var ex__13518__auto__ = e14824;
var statearr_14825_17525 = state_14719;
(statearr_14825_17525[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14719[(4)]))){
var statearr_14828_17526 = state_14719;
(statearr_14828_17526[(1)] = cljs.core.first((state_14719[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17527 = state_14719;
state_14719 = G__17527;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13515__auto__ = function(state_14719){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13515__auto____1.call(this,state_14719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13515__auto____0;
cljs$core$async$reduce_$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13515__auto____1;
return cljs$core$async$reduce_$_state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_14832 = f__13742__auto__();
(statearr_14832[(6)] = c__13741__auto__);

return statearr_14832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));

return c__13741__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13741__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_14840){
var state_val_14841 = (state_14840[(1)]);
if((state_val_14841 === (1))){
var inst_14835 = cljs.core.async.reduce(f__$1,init,ch);
var state_14840__$1 = state_14840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14840__$1,(2),inst_14835);
} else {
if((state_val_14841 === (2))){
var inst_14837 = (state_14840[(2)]);
var inst_14838 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14837) : f__$1.call(null,inst_14837));
var state_14840__$1 = state_14840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14840__$1,inst_14838);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13515__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13515__auto____0 = (function (){
var statearr_14858 = [null,null,null,null,null,null,null];
(statearr_14858[(0)] = cljs$core$async$transduce_$_state_machine__13515__auto__);

(statearr_14858[(1)] = (1));

return statearr_14858;
});
var cljs$core$async$transduce_$_state_machine__13515__auto____1 = (function (state_14840){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14840);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14862){var ex__13518__auto__ = e14862;
var statearr_14864_17535 = state_14840;
(statearr_14864_17535[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14840[(4)]))){
var statearr_14867_17536 = state_14840;
(statearr_14867_17536[(1)] = cljs.core.first((state_14840[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17537 = state_14840;
state_14840 = G__17537;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13515__auto__ = function(state_14840){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13515__auto____1.call(this,state_14840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13515__auto____0;
cljs$core$async$transduce_$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13515__auto____1;
return cljs$core$async$transduce_$_state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_14872 = f__13742__auto__();
(statearr_14872[(6)] = c__13741__auto__);

return statearr_14872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));

return c__13741__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14874 = arguments.length;
switch (G__14874) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13741__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_14918){
var state_val_14919 = (state_14918[(1)]);
if((state_val_14919 === (7))){
var inst_14897 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_14925_17539 = state_14918__$1;
(statearr_14925_17539[(2)] = inst_14897);

(statearr_14925_17539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (1))){
var inst_14885 = cljs.core.seq(coll);
var inst_14886 = inst_14885;
var state_14918__$1 = (function (){var statearr_14926 = state_14918;
(statearr_14926[(7)] = inst_14886);

return statearr_14926;
})();
var statearr_14927_17540 = state_14918__$1;
(statearr_14927_17540[(2)] = null);

(statearr_14927_17540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (4))){
var inst_14886 = (state_14918[(7)]);
var inst_14895 = cljs.core.first(inst_14886);
var state_14918__$1 = state_14918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14918__$1,(7),ch,inst_14895);
} else {
if((state_val_14919 === (13))){
var inst_14910 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_14934_17541 = state_14918__$1;
(statearr_14934_17541[(2)] = inst_14910);

(statearr_14934_17541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (6))){
var inst_14901 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
if(cljs.core.truth_(inst_14901)){
var statearr_14941_17542 = state_14918__$1;
(statearr_14941_17542[(1)] = (8));

} else {
var statearr_14943_17543 = state_14918__$1;
(statearr_14943_17543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (3))){
var inst_14914 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14918__$1,inst_14914);
} else {
if((state_val_14919 === (12))){
var state_14918__$1 = state_14918;
var statearr_14949_17546 = state_14918__$1;
(statearr_14949_17546[(2)] = null);

(statearr_14949_17546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (2))){
var inst_14886 = (state_14918[(7)]);
var state_14918__$1 = state_14918;
if(cljs.core.truth_(inst_14886)){
var statearr_14950_17547 = state_14918__$1;
(statearr_14950_17547[(1)] = (4));

} else {
var statearr_14951_17548 = state_14918__$1;
(statearr_14951_17548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (11))){
var inst_14907 = cljs.core.async.close_BANG_(ch);
var state_14918__$1 = state_14918;
var statearr_14961_17549 = state_14918__$1;
(statearr_14961_17549[(2)] = inst_14907);

(statearr_14961_17549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (9))){
var state_14918__$1 = state_14918;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14963_17550 = state_14918__$1;
(statearr_14963_17550[(1)] = (11));

} else {
var statearr_14964_17551 = state_14918__$1;
(statearr_14964_17551[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (5))){
var inst_14886 = (state_14918[(7)]);
var state_14918__$1 = state_14918;
var statearr_14971_17552 = state_14918__$1;
(statearr_14971_17552[(2)] = inst_14886);

(statearr_14971_17552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (10))){
var inst_14912 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_14973_17553 = state_14918__$1;
(statearr_14973_17553[(2)] = inst_14912);

(statearr_14973_17553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (8))){
var inst_14886 = (state_14918[(7)]);
var inst_14903 = cljs.core.next(inst_14886);
var inst_14886__$1 = inst_14903;
var state_14918__$1 = (function (){var statearr_14977 = state_14918;
(statearr_14977[(7)] = inst_14886__$1);

return statearr_14977;
})();
var statearr_14979_17557 = state_14918__$1;
(statearr_14979_17557[(2)] = null);

(statearr_14979_17557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_14985 = [null,null,null,null,null,null,null,null];
(statearr_14985[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_14985[(1)] = (1));

return statearr_14985;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_14918){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_14918);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e14987){var ex__13518__auto__ = e14987;
var statearr_14989_17558 = state_14918;
(statearr_14989_17558[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_14918[(4)]))){
var statearr_14992_17559 = state_14918;
(statearr_14992_17559[(1)] = cljs.core.first((state_14918[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17560 = state_14918;
state_14918 = G__17560;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_14918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_14918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_14996 = f__13742__auto__();
(statearr_14996[(6)] = c__13741__auto__);

return statearr_14996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));

return c__13741__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15012 = arguments.length;
switch (G__15012) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17565 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17565(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17569 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17569(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17570 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17570(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17571 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17571(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15044 = (function (ch,cs,meta15045){
this.ch = ch;
this.cs = cs;
this.meta15045 = meta15045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15046,meta15045__$1){
var self__ = this;
var _15046__$1 = this;
return (new cljs.core.async.t_cljs$core$async15044(self__.ch,self__.cs,meta15045__$1));
}));

(cljs.core.async.t_cljs$core$async15044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15046){
var self__ = this;
var _15046__$1 = this;
return self__.meta15045;
}));

(cljs.core.async.t_cljs$core$async15044.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15044.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15044.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15044.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15044.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15045","meta15045",96200362,null)], null);
}));

(cljs.core.async.t_cljs$core$async15044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15044");

(cljs.core.async.t_cljs$core$async15044.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15044.
 */
cljs.core.async.__GT_t_cljs$core$async15044 = (function cljs$core$async$__GT_t_cljs$core$async15044(ch,cs,meta15045){
return (new cljs.core.async.t_cljs$core$async15044(ch,cs,meta15045));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15044(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13741__auto___17587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_15242){
var state_val_15243 = (state_15242[(1)]);
if((state_val_15243 === (7))){
var inst_15238 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15244_17589 = state_15242__$1;
(statearr_15244_17589[(2)] = inst_15238);

(statearr_15244_17589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (20))){
var inst_15118 = (state_15242[(7)]);
var inst_15136 = cljs.core.first(inst_15118);
var inst_15137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15136,(0),null);
var inst_15138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15136,(1),null);
var state_15242__$1 = (function (){var statearr_15245 = state_15242;
(statearr_15245[(8)] = inst_15137);

return statearr_15245;
})();
if(cljs.core.truth_(inst_15138)){
var statearr_15246_17591 = state_15242__$1;
(statearr_15246_17591[(1)] = (22));

} else {
var statearr_15248_17592 = state_15242__$1;
(statearr_15248_17592[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (27))){
var inst_15079 = (state_15242[(9)]);
var inst_15185 = (state_15242[(10)]);
var inst_15178 = (state_15242[(11)]);
var inst_15180 = (state_15242[(12)]);
var inst_15185__$1 = cljs.core._nth(inst_15178,inst_15180);
var inst_15186 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15185__$1,inst_15079,done);
var state_15242__$1 = (function (){var statearr_15250 = state_15242;
(statearr_15250[(10)] = inst_15185__$1);

return statearr_15250;
})();
if(cljs.core.truth_(inst_15186)){
var statearr_15251_17593 = state_15242__$1;
(statearr_15251_17593[(1)] = (30));

} else {
var statearr_15253_17594 = state_15242__$1;
(statearr_15253_17594[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (1))){
var state_15242__$1 = state_15242;
var statearr_15254_17595 = state_15242__$1;
(statearr_15254_17595[(2)] = null);

(statearr_15254_17595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (24))){
var inst_15118 = (state_15242[(7)]);
var inst_15148 = (state_15242[(2)]);
var inst_15149 = cljs.core.next(inst_15118);
var inst_15088 = inst_15149;
var inst_15089 = null;
var inst_15090 = (0);
var inst_15091 = (0);
var state_15242__$1 = (function (){var statearr_15255 = state_15242;
(statearr_15255[(13)] = inst_15088);

(statearr_15255[(14)] = inst_15148);

(statearr_15255[(15)] = inst_15089);

(statearr_15255[(16)] = inst_15090);

(statearr_15255[(17)] = inst_15091);

return statearr_15255;
})();
var statearr_15256_17597 = state_15242__$1;
(statearr_15256_17597[(2)] = null);

(statearr_15256_17597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (39))){
var state_15242__$1 = state_15242;
var statearr_15261_17598 = state_15242__$1;
(statearr_15261_17598[(2)] = null);

(statearr_15261_17598[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (4))){
var inst_15079 = (state_15242[(9)]);
var inst_15079__$1 = (state_15242[(2)]);
var inst_15080 = (inst_15079__$1 == null);
var state_15242__$1 = (function (){var statearr_15265 = state_15242;
(statearr_15265[(9)] = inst_15079__$1);

return statearr_15265;
})();
if(cljs.core.truth_(inst_15080)){
var statearr_15266_17611 = state_15242__$1;
(statearr_15266_17611[(1)] = (5));

} else {
var statearr_15268_17612 = state_15242__$1;
(statearr_15268_17612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (15))){
var inst_15088 = (state_15242[(13)]);
var inst_15089 = (state_15242[(15)]);
var inst_15090 = (state_15242[(16)]);
var inst_15091 = (state_15242[(17)]);
var inst_15113 = (state_15242[(2)]);
var inst_15115 = (inst_15091 + (1));
var tmp15257 = inst_15088;
var tmp15258 = inst_15089;
var tmp15259 = inst_15090;
var inst_15088__$1 = tmp15257;
var inst_15089__$1 = tmp15258;
var inst_15090__$1 = tmp15259;
var inst_15091__$1 = inst_15115;
var state_15242__$1 = (function (){var statearr_15271 = state_15242;
(statearr_15271[(13)] = inst_15088__$1);

(statearr_15271[(15)] = inst_15089__$1);

(statearr_15271[(16)] = inst_15090__$1);

(statearr_15271[(18)] = inst_15113);

(statearr_15271[(17)] = inst_15091__$1);

return statearr_15271;
})();
var statearr_15273_17613 = state_15242__$1;
(statearr_15273_17613[(2)] = null);

(statearr_15273_17613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (21))){
var inst_15152 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15277_17614 = state_15242__$1;
(statearr_15277_17614[(2)] = inst_15152);

(statearr_15277_17614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (31))){
var inst_15185 = (state_15242[(10)]);
var inst_15189 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15185);
var state_15242__$1 = state_15242;
var statearr_15282_17615 = state_15242__$1;
(statearr_15282_17615[(2)] = inst_15189);

(statearr_15282_17615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (32))){
var inst_15178 = (state_15242[(11)]);
var inst_15180 = (state_15242[(12)]);
var inst_15179 = (state_15242[(19)]);
var inst_15177 = (state_15242[(20)]);
var inst_15191 = (state_15242[(2)]);
var inst_15193 = (inst_15180 + (1));
var tmp15274 = inst_15178;
var tmp15275 = inst_15179;
var tmp15276 = inst_15177;
var inst_15177__$1 = tmp15276;
var inst_15178__$1 = tmp15274;
var inst_15179__$1 = tmp15275;
var inst_15180__$1 = inst_15193;
var state_15242__$1 = (function (){var statearr_15284 = state_15242;
(statearr_15284[(11)] = inst_15178__$1);

(statearr_15284[(12)] = inst_15180__$1);

(statearr_15284[(21)] = inst_15191);

(statearr_15284[(19)] = inst_15179__$1);

(statearr_15284[(20)] = inst_15177__$1);

return statearr_15284;
})();
var statearr_15285_17620 = state_15242__$1;
(statearr_15285_17620[(2)] = null);

(statearr_15285_17620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (40))){
var inst_15206 = (state_15242[(22)]);
var inst_15212 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15206);
var state_15242__$1 = state_15242;
var statearr_15287_17621 = state_15242__$1;
(statearr_15287_17621[(2)] = inst_15212);

(statearr_15287_17621[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (33))){
var inst_15197 = (state_15242[(23)]);
var inst_15199 = cljs.core.chunked_seq_QMARK_(inst_15197);
var state_15242__$1 = state_15242;
if(inst_15199){
var statearr_15288_17622 = state_15242__$1;
(statearr_15288_17622[(1)] = (36));

} else {
var statearr_15289_17623 = state_15242__$1;
(statearr_15289_17623[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (13))){
var inst_15100 = (state_15242[(24)]);
var inst_15110 = cljs.core.async.close_BANG_(inst_15100);
var state_15242__$1 = state_15242;
var statearr_15291_17624 = state_15242__$1;
(statearr_15291_17624[(2)] = inst_15110);

(statearr_15291_17624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (22))){
var inst_15137 = (state_15242[(8)]);
var inst_15144 = cljs.core.async.close_BANG_(inst_15137);
var state_15242__$1 = state_15242;
var statearr_15294_17626 = state_15242__$1;
(statearr_15294_17626[(2)] = inst_15144);

(statearr_15294_17626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (36))){
var inst_15197 = (state_15242[(23)]);
var inst_15201 = cljs.core.chunk_first(inst_15197);
var inst_15202 = cljs.core.chunk_rest(inst_15197);
var inst_15203 = cljs.core.count(inst_15201);
var inst_15177 = inst_15202;
var inst_15178 = inst_15201;
var inst_15179 = inst_15203;
var inst_15180 = (0);
var state_15242__$1 = (function (){var statearr_15297 = state_15242;
(statearr_15297[(11)] = inst_15178);

(statearr_15297[(12)] = inst_15180);

(statearr_15297[(19)] = inst_15179);

(statearr_15297[(20)] = inst_15177);

return statearr_15297;
})();
var statearr_15298_17638 = state_15242__$1;
(statearr_15298_17638[(2)] = null);

(statearr_15298_17638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (41))){
var inst_15197 = (state_15242[(23)]);
var inst_15214 = (state_15242[(2)]);
var inst_15215 = cljs.core.next(inst_15197);
var inst_15177 = inst_15215;
var inst_15178 = null;
var inst_15179 = (0);
var inst_15180 = (0);
var state_15242__$1 = (function (){var statearr_15299 = state_15242;
(statearr_15299[(11)] = inst_15178);

(statearr_15299[(12)] = inst_15180);

(statearr_15299[(25)] = inst_15214);

(statearr_15299[(19)] = inst_15179);

(statearr_15299[(20)] = inst_15177);

return statearr_15299;
})();
var statearr_15304_17640 = state_15242__$1;
(statearr_15304_17640[(2)] = null);

(statearr_15304_17640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (43))){
var state_15242__$1 = state_15242;
var statearr_15306_17641 = state_15242__$1;
(statearr_15306_17641[(2)] = null);

(statearr_15306_17641[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (29))){
var inst_15224 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15308_17642 = state_15242__$1;
(statearr_15308_17642[(2)] = inst_15224);

(statearr_15308_17642[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (44))){
var inst_15235 = (state_15242[(2)]);
var state_15242__$1 = (function (){var statearr_15309 = state_15242;
(statearr_15309[(26)] = inst_15235);

return statearr_15309;
})();
var statearr_15311_17643 = state_15242__$1;
(statearr_15311_17643[(2)] = null);

(statearr_15311_17643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (6))){
var inst_15163 = (state_15242[(27)]);
var inst_15162 = cljs.core.deref(cs);
var inst_15163__$1 = cljs.core.keys(inst_15162);
var inst_15167 = cljs.core.count(inst_15163__$1);
var inst_15168 = cljs.core.reset_BANG_(dctr,inst_15167);
var inst_15174 = cljs.core.seq(inst_15163__$1);
var inst_15177 = inst_15174;
var inst_15178 = null;
var inst_15179 = (0);
var inst_15180 = (0);
var state_15242__$1 = (function (){var statearr_15313 = state_15242;
(statearr_15313[(27)] = inst_15163__$1);

(statearr_15313[(11)] = inst_15178);

(statearr_15313[(12)] = inst_15180);

(statearr_15313[(28)] = inst_15168);

(statearr_15313[(19)] = inst_15179);

(statearr_15313[(20)] = inst_15177);

return statearr_15313;
})();
var statearr_15314_17645 = state_15242__$1;
(statearr_15314_17645[(2)] = null);

(statearr_15314_17645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (28))){
var inst_15197 = (state_15242[(23)]);
var inst_15177 = (state_15242[(20)]);
var inst_15197__$1 = cljs.core.seq(inst_15177);
var state_15242__$1 = (function (){var statearr_15319 = state_15242;
(statearr_15319[(23)] = inst_15197__$1);

return statearr_15319;
})();
if(inst_15197__$1){
var statearr_15323_17646 = state_15242__$1;
(statearr_15323_17646[(1)] = (33));

} else {
var statearr_15327_17647 = state_15242__$1;
(statearr_15327_17647[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (25))){
var inst_15180 = (state_15242[(12)]);
var inst_15179 = (state_15242[(19)]);
var inst_15182 = (inst_15180 < inst_15179);
var inst_15183 = inst_15182;
var state_15242__$1 = state_15242;
if(cljs.core.truth_(inst_15183)){
var statearr_15328_17650 = state_15242__$1;
(statearr_15328_17650[(1)] = (27));

} else {
var statearr_15329_17651 = state_15242__$1;
(statearr_15329_17651[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (34))){
var state_15242__$1 = state_15242;
var statearr_15331_17652 = state_15242__$1;
(statearr_15331_17652[(2)] = null);

(statearr_15331_17652[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (17))){
var state_15242__$1 = state_15242;
var statearr_15334_17653 = state_15242__$1;
(statearr_15334_17653[(2)] = null);

(statearr_15334_17653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (3))){
var inst_15240 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15242__$1,inst_15240);
} else {
if((state_val_15243 === (12))){
var inst_15157 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15336_17654 = state_15242__$1;
(statearr_15336_17654[(2)] = inst_15157);

(statearr_15336_17654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (2))){
var state_15242__$1 = state_15242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15242__$1,(4),ch);
} else {
if((state_val_15243 === (23))){
var state_15242__$1 = state_15242;
var statearr_15344_17655 = state_15242__$1;
(statearr_15344_17655[(2)] = null);

(statearr_15344_17655[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (35))){
var inst_15221 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15346_17659 = state_15242__$1;
(statearr_15346_17659[(2)] = inst_15221);

(statearr_15346_17659[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (19))){
var inst_15118 = (state_15242[(7)]);
var inst_15128 = cljs.core.chunk_first(inst_15118);
var inst_15129 = cljs.core.chunk_rest(inst_15118);
var inst_15130 = cljs.core.count(inst_15128);
var inst_15088 = inst_15129;
var inst_15089 = inst_15128;
var inst_15090 = inst_15130;
var inst_15091 = (0);
var state_15242__$1 = (function (){var statearr_15347 = state_15242;
(statearr_15347[(13)] = inst_15088);

(statearr_15347[(15)] = inst_15089);

(statearr_15347[(16)] = inst_15090);

(statearr_15347[(17)] = inst_15091);

return statearr_15347;
})();
var statearr_15348_17662 = state_15242__$1;
(statearr_15348_17662[(2)] = null);

(statearr_15348_17662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (11))){
var inst_15088 = (state_15242[(13)]);
var inst_15118 = (state_15242[(7)]);
var inst_15118__$1 = cljs.core.seq(inst_15088);
var state_15242__$1 = (function (){var statearr_15351 = state_15242;
(statearr_15351[(7)] = inst_15118__$1);

return statearr_15351;
})();
if(inst_15118__$1){
var statearr_15352_17663 = state_15242__$1;
(statearr_15352_17663[(1)] = (16));

} else {
var statearr_15353_17664 = state_15242__$1;
(statearr_15353_17664[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (9))){
var inst_15159 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15354_17666 = state_15242__$1;
(statearr_15354_17666[(2)] = inst_15159);

(statearr_15354_17666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (5))){
var inst_15086 = cljs.core.deref(cs);
var inst_15087 = cljs.core.seq(inst_15086);
var inst_15088 = inst_15087;
var inst_15089 = null;
var inst_15090 = (0);
var inst_15091 = (0);
var state_15242__$1 = (function (){var statearr_15355 = state_15242;
(statearr_15355[(13)] = inst_15088);

(statearr_15355[(15)] = inst_15089);

(statearr_15355[(16)] = inst_15090);

(statearr_15355[(17)] = inst_15091);

return statearr_15355;
})();
var statearr_15356_17671 = state_15242__$1;
(statearr_15356_17671[(2)] = null);

(statearr_15356_17671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (14))){
var state_15242__$1 = state_15242;
var statearr_15358_17673 = state_15242__$1;
(statearr_15358_17673[(2)] = null);

(statearr_15358_17673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (45))){
var inst_15230 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15359_17674 = state_15242__$1;
(statearr_15359_17674[(2)] = inst_15230);

(statearr_15359_17674[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (26))){
var inst_15163 = (state_15242[(27)]);
var inst_15226 = (state_15242[(2)]);
var inst_15227 = cljs.core.seq(inst_15163);
var state_15242__$1 = (function (){var statearr_15360 = state_15242;
(statearr_15360[(29)] = inst_15226);

return statearr_15360;
})();
if(inst_15227){
var statearr_15362_17675 = state_15242__$1;
(statearr_15362_17675[(1)] = (42));

} else {
var statearr_15363_17676 = state_15242__$1;
(statearr_15363_17676[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (16))){
var inst_15118 = (state_15242[(7)]);
var inst_15124 = cljs.core.chunked_seq_QMARK_(inst_15118);
var state_15242__$1 = state_15242;
if(inst_15124){
var statearr_15368_17678 = state_15242__$1;
(statearr_15368_17678[(1)] = (19));

} else {
var statearr_15369_17679 = state_15242__$1;
(statearr_15369_17679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (38))){
var inst_15218 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15370_17680 = state_15242__$1;
(statearr_15370_17680[(2)] = inst_15218);

(statearr_15370_17680[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (30))){
var state_15242__$1 = state_15242;
var statearr_15371_17683 = state_15242__$1;
(statearr_15371_17683[(2)] = null);

(statearr_15371_17683[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (10))){
var inst_15089 = (state_15242[(15)]);
var inst_15091 = (state_15242[(17)]);
var inst_15099 = cljs.core._nth(inst_15089,inst_15091);
var inst_15100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15099,(0),null);
var inst_15108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15099,(1),null);
var state_15242__$1 = (function (){var statearr_15372 = state_15242;
(statearr_15372[(24)] = inst_15100);

return statearr_15372;
})();
if(cljs.core.truth_(inst_15108)){
var statearr_15373_17690 = state_15242__$1;
(statearr_15373_17690[(1)] = (13));

} else {
var statearr_15374_17691 = state_15242__$1;
(statearr_15374_17691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (18))){
var inst_15155 = (state_15242[(2)]);
var state_15242__$1 = state_15242;
var statearr_15375_17692 = state_15242__$1;
(statearr_15375_17692[(2)] = inst_15155);

(statearr_15375_17692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (42))){
var state_15242__$1 = state_15242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15242__$1,(45),dchan);
} else {
if((state_val_15243 === (37))){
var inst_15079 = (state_15242[(9)]);
var inst_15206 = (state_15242[(22)]);
var inst_15197 = (state_15242[(23)]);
var inst_15206__$1 = cljs.core.first(inst_15197);
var inst_15207 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15206__$1,inst_15079,done);
var state_15242__$1 = (function (){var statearr_15379 = state_15242;
(statearr_15379[(22)] = inst_15206__$1);

return statearr_15379;
})();
if(cljs.core.truth_(inst_15207)){
var statearr_15380_17693 = state_15242__$1;
(statearr_15380_17693[(1)] = (39));

} else {
var statearr_15381_17694 = state_15242__$1;
(statearr_15381_17694[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15243 === (8))){
var inst_15090 = (state_15242[(16)]);
var inst_15091 = (state_15242[(17)]);
var inst_15093 = (inst_15091 < inst_15090);
var inst_15094 = inst_15093;
var state_15242__$1 = state_15242;
if(cljs.core.truth_(inst_15094)){
var statearr_15382_17695 = state_15242__$1;
(statearr_15382_17695[(1)] = (10));

} else {
var statearr_15386_17696 = state_15242__$1;
(statearr_15386_17696[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13515__auto__ = null;
var cljs$core$async$mult_$_state_machine__13515__auto____0 = (function (){
var statearr_15387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15387[(0)] = cljs$core$async$mult_$_state_machine__13515__auto__);

(statearr_15387[(1)] = (1));

return statearr_15387;
});
var cljs$core$async$mult_$_state_machine__13515__auto____1 = (function (state_15242){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_15242);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e15388){var ex__13518__auto__ = e15388;
var statearr_15390_17700 = state_15242;
(statearr_15390_17700[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_15242[(4)]))){
var statearr_15391_17701 = state_15242;
(statearr_15391_17701[(1)] = cljs.core.first((state_15242[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17702 = state_15242;
state_15242 = G__17702;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13515__auto__ = function(state_15242){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13515__auto____1.call(this,state_15242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13515__auto____0;
cljs$core$async$mult_$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13515__auto____1;
return cljs$core$async$mult_$_state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_15396 = f__13742__auto__();
(statearr_15396[(6)] = c__13741__auto___17587);

return statearr_15396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15398 = arguments.length;
switch (G__15398) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17705 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17705(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17710 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17710(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17711 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17711(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17715 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17715(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17720 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17720(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17724 = arguments.length;
var i__5770__auto___17725 = (0);
while(true){
if((i__5770__auto___17725 < len__5769__auto___17724)){
args__5775__auto__.push((arguments[i__5770__auto___17725]));

var G__17726 = (i__5770__auto___17725 + (1));
i__5770__auto___17725 = G__17726;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15432){
var map__15434 = p__15432;
var map__15434__$1 = cljs.core.__destructure_map(map__15434);
var opts = map__15434__$1;
var statearr_15435_17730 = state;
(statearr_15435_17730[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15436_17732 = state;
(statearr_15436_17732[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15437_17733 = state;
(statearr_15437_17733[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15424){
var G__15425 = cljs.core.first(seq15424);
var seq15424__$1 = cljs.core.next(seq15424);
var G__15426 = cljs.core.first(seq15424__$1);
var seq15424__$2 = cljs.core.next(seq15424__$1);
var G__15427 = cljs.core.first(seq15424__$2);
var seq15424__$3 = cljs.core.next(seq15424__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15425,G__15426,G__15427,seq15424__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15448 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15449){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15449 = meta15449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15450,meta15449__$1){
var self__ = this;
var _15450__$1 = this;
return (new cljs.core.async.t_cljs$core$async15448(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15449__$1));
}));

(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15450){
var self__ = this;
var _15450__$1 = this;
return self__.meta15449;
}));

(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15448.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15449","meta15449",-749594295,null)], null);
}));

(cljs.core.async.t_cljs$core$async15448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15448");

(cljs.core.async.t_cljs$core$async15448.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15448.
 */
cljs.core.async.__GT_t_cljs$core$async15448 = (function cljs$core$async$__GT_t_cljs$core$async15448(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15449){
return (new cljs.core.async.t_cljs$core$async15448(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15449));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15448(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13741__auto___17814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_15542){
var state_val_15543 = (state_15542[(1)]);
if((state_val_15543 === (7))){
var inst_15493 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
if(cljs.core.truth_(inst_15493)){
var statearr_15545_17815 = state_15542__$1;
(statearr_15545_17815[(1)] = (8));

} else {
var statearr_15548_17816 = state_15542__$1;
(statearr_15548_17816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (20))){
var inst_15486 = (state_15542[(7)]);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15542__$1,(23),out,inst_15486);
} else {
if((state_val_15543 === (1))){
var inst_15468 = calc_state();
var inst_15469 = cljs.core.__destructure_map(inst_15468);
var inst_15470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15469,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15469,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15469,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15473 = inst_15468;
var state_15542__$1 = (function (){var statearr_15550 = state_15542;
(statearr_15550[(8)] = inst_15470);

(statearr_15550[(9)] = inst_15473);

(statearr_15550[(10)] = inst_15471);

(statearr_15550[(11)] = inst_15472);

return statearr_15550;
})();
var statearr_15552_17825 = state_15542__$1;
(statearr_15552_17825[(2)] = null);

(statearr_15552_17825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (24))){
var inst_15476 = (state_15542[(12)]);
var inst_15473 = inst_15476;
var state_15542__$1 = (function (){var statearr_15553 = state_15542;
(statearr_15553[(9)] = inst_15473);

return statearr_15553;
})();
var statearr_15554_17828 = state_15542__$1;
(statearr_15554_17828[(2)] = null);

(statearr_15554_17828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (4))){
var inst_15486 = (state_15542[(7)]);
var inst_15488 = (state_15542[(13)]);
var inst_15485 = (state_15542[(2)]);
var inst_15486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15485,(0),null);
var inst_15487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15485,(1),null);
var inst_15488__$1 = (inst_15486__$1 == null);
var state_15542__$1 = (function (){var statearr_15556 = state_15542;
(statearr_15556[(7)] = inst_15486__$1);

(statearr_15556[(13)] = inst_15488__$1);

(statearr_15556[(14)] = inst_15487);

return statearr_15556;
})();
if(cljs.core.truth_(inst_15488__$1)){
var statearr_15557_17829 = state_15542__$1;
(statearr_15557_17829[(1)] = (5));

} else {
var statearr_15558_17830 = state_15542__$1;
(statearr_15558_17830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (15))){
var inst_15512 = (state_15542[(15)]);
var inst_15477 = (state_15542[(16)]);
var inst_15512__$1 = cljs.core.empty_QMARK_(inst_15477);
var state_15542__$1 = (function (){var statearr_15559 = state_15542;
(statearr_15559[(15)] = inst_15512__$1);

return statearr_15559;
})();
if(inst_15512__$1){
var statearr_15562_17831 = state_15542__$1;
(statearr_15562_17831[(1)] = (17));

} else {
var statearr_15563_17832 = state_15542__$1;
(statearr_15563_17832[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (21))){
var inst_15476 = (state_15542[(12)]);
var inst_15473 = inst_15476;
var state_15542__$1 = (function (){var statearr_15566 = state_15542;
(statearr_15566[(9)] = inst_15473);

return statearr_15566;
})();
var statearr_15568_17833 = state_15542__$1;
(statearr_15568_17833[(2)] = null);

(statearr_15568_17833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (13))){
var inst_15501 = (state_15542[(2)]);
var inst_15502 = calc_state();
var inst_15473 = inst_15502;
var state_15542__$1 = (function (){var statearr_15570 = state_15542;
(statearr_15570[(9)] = inst_15473);

(statearr_15570[(17)] = inst_15501);

return statearr_15570;
})();
var statearr_15572_17834 = state_15542__$1;
(statearr_15572_17834[(2)] = null);

(statearr_15572_17834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (22))){
var inst_15536 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15573_17836 = state_15542__$1;
(statearr_15573_17836[(2)] = inst_15536);

(statearr_15573_17836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (6))){
var inst_15487 = (state_15542[(14)]);
var inst_15491 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15487,change);
var state_15542__$1 = state_15542;
var statearr_15579_17837 = state_15542__$1;
(statearr_15579_17837[(2)] = inst_15491);

(statearr_15579_17837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (25))){
var state_15542__$1 = state_15542;
var statearr_15580_17840 = state_15542__$1;
(statearr_15580_17840[(2)] = null);

(statearr_15580_17840[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (17))){
var inst_15478 = (state_15542[(18)]);
var inst_15487 = (state_15542[(14)]);
var inst_15516 = (inst_15478.cljs$core$IFn$_invoke$arity$1 ? inst_15478.cljs$core$IFn$_invoke$arity$1(inst_15487) : inst_15478.call(null,inst_15487));
var inst_15517 = cljs.core.not(inst_15516);
var state_15542__$1 = state_15542;
var statearr_15581_17841 = state_15542__$1;
(statearr_15581_17841[(2)] = inst_15517);

(statearr_15581_17841[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (3))){
var inst_15540 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15542__$1,inst_15540);
} else {
if((state_val_15543 === (12))){
var state_15542__$1 = state_15542;
var statearr_15583_17842 = state_15542__$1;
(statearr_15583_17842[(2)] = null);

(statearr_15583_17842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (2))){
var inst_15473 = (state_15542[(9)]);
var inst_15476 = (state_15542[(12)]);
var inst_15476__$1 = cljs.core.__destructure_map(inst_15473);
var inst_15477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15476__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15476__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15476__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15542__$1 = (function (){var statearr_15584 = state_15542;
(statearr_15584[(18)] = inst_15478);

(statearr_15584[(12)] = inst_15476__$1);

(statearr_15584[(16)] = inst_15477);

return statearr_15584;
})();
return cljs.core.async.ioc_alts_BANG_(state_15542__$1,(4),inst_15479);
} else {
if((state_val_15543 === (23))){
var inst_15527 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
if(cljs.core.truth_(inst_15527)){
var statearr_15585_17843 = state_15542__$1;
(statearr_15585_17843[(1)] = (24));

} else {
var statearr_15587_17857 = state_15542__$1;
(statearr_15587_17857[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (19))){
var inst_15520 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15589_17858 = state_15542__$1;
(statearr_15589_17858[(2)] = inst_15520);

(statearr_15589_17858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (11))){
var inst_15487 = (state_15542[(14)]);
var inst_15498 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15487);
var state_15542__$1 = state_15542;
var statearr_15591_17860 = state_15542__$1;
(statearr_15591_17860[(2)] = inst_15498);

(statearr_15591_17860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (9))){
var inst_15505 = (state_15542[(19)]);
var inst_15477 = (state_15542[(16)]);
var inst_15487 = (state_15542[(14)]);
var inst_15505__$1 = (inst_15477.cljs$core$IFn$_invoke$arity$1 ? inst_15477.cljs$core$IFn$_invoke$arity$1(inst_15487) : inst_15477.call(null,inst_15487));
var state_15542__$1 = (function (){var statearr_15592 = state_15542;
(statearr_15592[(19)] = inst_15505__$1);

return statearr_15592;
})();
if(cljs.core.truth_(inst_15505__$1)){
var statearr_15593_17946 = state_15542__$1;
(statearr_15593_17946[(1)] = (14));

} else {
var statearr_15594_17950 = state_15542__$1;
(statearr_15594_17950[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (5))){
var inst_15488 = (state_15542[(13)]);
var state_15542__$1 = state_15542;
var statearr_15595_17952 = state_15542__$1;
(statearr_15595_17952[(2)] = inst_15488);

(statearr_15595_17952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (14))){
var inst_15505 = (state_15542[(19)]);
var state_15542__$1 = state_15542;
var statearr_15596_17953 = state_15542__$1;
(statearr_15596_17953[(2)] = inst_15505);

(statearr_15596_17953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (26))){
var inst_15532 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15601_17960 = state_15542__$1;
(statearr_15601_17960[(2)] = inst_15532);

(statearr_15601_17960[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (16))){
var inst_15522 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
if(cljs.core.truth_(inst_15522)){
var statearr_15604_17964 = state_15542__$1;
(statearr_15604_17964[(1)] = (20));

} else {
var statearr_15605_17965 = state_15542__$1;
(statearr_15605_17965[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (10))){
var inst_15538 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15607_17966 = state_15542__$1;
(statearr_15607_17966[(2)] = inst_15538);

(statearr_15607_17966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (18))){
var inst_15512 = (state_15542[(15)]);
var state_15542__$1 = state_15542;
var statearr_15609_17967 = state_15542__$1;
(statearr_15609_17967[(2)] = inst_15512);

(statearr_15609_17967[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (8))){
var inst_15486 = (state_15542[(7)]);
var inst_15496 = (inst_15486 == null);
var state_15542__$1 = state_15542;
if(cljs.core.truth_(inst_15496)){
var statearr_15610_17968 = state_15542__$1;
(statearr_15610_17968[(1)] = (11));

} else {
var statearr_15611_17969 = state_15542__$1;
(statearr_15611_17969[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13515__auto__ = null;
var cljs$core$async$mix_$_state_machine__13515__auto____0 = (function (){
var statearr_15613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15613[(0)] = cljs$core$async$mix_$_state_machine__13515__auto__);

(statearr_15613[(1)] = (1));

return statearr_15613;
});
var cljs$core$async$mix_$_state_machine__13515__auto____1 = (function (state_15542){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_15542);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e15617){var ex__13518__auto__ = e15617;
var statearr_15618_17971 = state_15542;
(statearr_15618_17971[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_15542[(4)]))){
var statearr_15619_17974 = state_15542;
(statearr_15619_17974[(1)] = cljs.core.first((state_15542[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17975 = state_15542;
state_15542 = G__17975;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13515__auto__ = function(state_15542){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13515__auto____1.call(this,state_15542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13515__auto____0;
cljs$core$async$mix_$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13515__auto____1;
return cljs$core$async$mix_$_state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_15624 = f__13742__auto__();
(statearr_15624[(6)] = c__13741__auto___17814);

return statearr_15624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17986 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17986(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17989 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17989(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18006 = (function() {
var G__18007 = null;
var G__18007__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18007__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18007 = function(p,v){
switch(arguments.length){
case 1:
return G__18007__1.call(this,p);
case 2:
return G__18007__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18007.cljs$core$IFn$_invoke$arity$1 = G__18007__1;
G__18007.cljs$core$IFn$_invoke$arity$2 = G__18007__2;
return G__18007;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15641 = arguments.length;
switch (G__15641) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18006(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18006(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15658 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15659){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15659 = meta15659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15660,meta15659__$1){
var self__ = this;
var _15660__$1 = this;
return (new cljs.core.async.t_cljs$core$async15658(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15659__$1));
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15660){
var self__ = this;
var _15660__$1 = this;
return self__.meta15659;
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15659","meta15659",-1090187148,null)], null);
}));

(cljs.core.async.t_cljs$core$async15658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15658");

(cljs.core.async.t_cljs$core$async15658.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15658.
 */
cljs.core.async.__GT_t_cljs$core$async15658 = (function cljs$core$async$__GT_t_cljs$core$async15658(ch,topic_fn,buf_fn,mults,ensure_mult,meta15659){
return (new cljs.core.async.t_cljs$core$async15658(ch,topic_fn,buf_fn,mults,ensure_mult,meta15659));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15648 = arguments.length;
switch (G__15648) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15644_SHARP_){
if(cljs.core.truth_((p1__15644_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15644_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15644_SHARP_.call(null,topic)))){
return p1__15644_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15644_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15658(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13741__auto___18045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_15741){
var state_val_15742 = (state_15741[(1)]);
if((state_val_15742 === (7))){
var inst_15737 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
var statearr_15747_18055 = state_15741__$1;
(statearr_15747_18055[(2)] = inst_15737);

(statearr_15747_18055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (20))){
var state_15741__$1 = state_15741;
var statearr_15748_18056 = state_15741__$1;
(statearr_15748_18056[(2)] = null);

(statearr_15748_18056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (1))){
var state_15741__$1 = state_15741;
var statearr_15749_18057 = state_15741__$1;
(statearr_15749_18057[(2)] = null);

(statearr_15749_18057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (24))){
var inst_15719 = (state_15741[(7)]);
var inst_15728 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15719);
var state_15741__$1 = state_15741;
var statearr_15750_18059 = state_15741__$1;
(statearr_15750_18059[(2)] = inst_15728);

(statearr_15750_18059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (4))){
var inst_15669 = (state_15741[(8)]);
var inst_15669__$1 = (state_15741[(2)]);
var inst_15670 = (inst_15669__$1 == null);
var state_15741__$1 = (function (){var statearr_15755 = state_15741;
(statearr_15755[(8)] = inst_15669__$1);

return statearr_15755;
})();
if(cljs.core.truth_(inst_15670)){
var statearr_15756_18060 = state_15741__$1;
(statearr_15756_18060[(1)] = (5));

} else {
var statearr_15757_18061 = state_15741__$1;
(statearr_15757_18061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (15))){
var inst_15712 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
var statearr_15758_18062 = state_15741__$1;
(statearr_15758_18062[(2)] = inst_15712);

(statearr_15758_18062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (21))){
var inst_15733 = (state_15741[(2)]);
var state_15741__$1 = (function (){var statearr_15763 = state_15741;
(statearr_15763[(9)] = inst_15733);

return statearr_15763;
})();
var statearr_15764_18063 = state_15741__$1;
(statearr_15764_18063[(2)] = null);

(statearr_15764_18063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (13))){
var inst_15693 = (state_15741[(10)]);
var inst_15695 = cljs.core.chunked_seq_QMARK_(inst_15693);
var state_15741__$1 = state_15741;
if(inst_15695){
var statearr_15768_18064 = state_15741__$1;
(statearr_15768_18064[(1)] = (16));

} else {
var statearr_15769_18065 = state_15741__$1;
(statearr_15769_18065[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (22))){
var inst_15725 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
if(cljs.core.truth_(inst_15725)){
var statearr_15770_18066 = state_15741__$1;
(statearr_15770_18066[(1)] = (23));

} else {
var statearr_15772_18067 = state_15741__$1;
(statearr_15772_18067[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (6))){
var inst_15721 = (state_15741[(11)]);
var inst_15719 = (state_15741[(7)]);
var inst_15669 = (state_15741[(8)]);
var inst_15719__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15669) : topic_fn.call(null,inst_15669));
var inst_15720 = cljs.core.deref(mults);
var inst_15721__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15720,inst_15719__$1);
var state_15741__$1 = (function (){var statearr_15774 = state_15741;
(statearr_15774[(11)] = inst_15721__$1);

(statearr_15774[(7)] = inst_15719__$1);

return statearr_15774;
})();
if(cljs.core.truth_(inst_15721__$1)){
var statearr_15775_18068 = state_15741__$1;
(statearr_15775_18068[(1)] = (19));

} else {
var statearr_15778_18069 = state_15741__$1;
(statearr_15778_18069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (25))){
var inst_15730 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
var statearr_15780_18070 = state_15741__$1;
(statearr_15780_18070[(2)] = inst_15730);

(statearr_15780_18070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (17))){
var inst_15693 = (state_15741[(10)]);
var inst_15703 = cljs.core.first(inst_15693);
var inst_15704 = cljs.core.async.muxch_STAR_(inst_15703);
var inst_15705 = cljs.core.async.close_BANG_(inst_15704);
var inst_15706 = cljs.core.next(inst_15693);
var inst_15679 = inst_15706;
var inst_15680 = null;
var inst_15681 = (0);
var inst_15682 = (0);
var state_15741__$1 = (function (){var statearr_15783 = state_15741;
(statearr_15783[(12)] = inst_15681);

(statearr_15783[(13)] = inst_15679);

(statearr_15783[(14)] = inst_15680);

(statearr_15783[(15)] = inst_15682);

(statearr_15783[(16)] = inst_15705);

return statearr_15783;
})();
var statearr_15787_18072 = state_15741__$1;
(statearr_15787_18072[(2)] = null);

(statearr_15787_18072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (3))){
var inst_15739 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15741__$1,inst_15739);
} else {
if((state_val_15742 === (12))){
var inst_15714 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
var statearr_15792_18076 = state_15741__$1;
(statearr_15792_18076[(2)] = inst_15714);

(statearr_15792_18076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (2))){
var state_15741__$1 = state_15741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15741__$1,(4),ch);
} else {
if((state_val_15742 === (23))){
var state_15741__$1 = state_15741;
var statearr_15797_18077 = state_15741__$1;
(statearr_15797_18077[(2)] = null);

(statearr_15797_18077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (19))){
var inst_15721 = (state_15741[(11)]);
var inst_15669 = (state_15741[(8)]);
var inst_15723 = cljs.core.async.muxch_STAR_(inst_15721);
var state_15741__$1 = state_15741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15741__$1,(22),inst_15723,inst_15669);
} else {
if((state_val_15742 === (11))){
var inst_15679 = (state_15741[(13)]);
var inst_15693 = (state_15741[(10)]);
var inst_15693__$1 = cljs.core.seq(inst_15679);
var state_15741__$1 = (function (){var statearr_15802 = state_15741;
(statearr_15802[(10)] = inst_15693__$1);

return statearr_15802;
})();
if(inst_15693__$1){
var statearr_15803_18086 = state_15741__$1;
(statearr_15803_18086[(1)] = (13));

} else {
var statearr_15804_18087 = state_15741__$1;
(statearr_15804_18087[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (9))){
var inst_15716 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
var statearr_15806_18092 = state_15741__$1;
(statearr_15806_18092[(2)] = inst_15716);

(statearr_15806_18092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (5))){
var inst_15676 = cljs.core.deref(mults);
var inst_15677 = cljs.core.vals(inst_15676);
var inst_15678 = cljs.core.seq(inst_15677);
var inst_15679 = inst_15678;
var inst_15680 = null;
var inst_15681 = (0);
var inst_15682 = (0);
var state_15741__$1 = (function (){var statearr_15810 = state_15741;
(statearr_15810[(12)] = inst_15681);

(statearr_15810[(13)] = inst_15679);

(statearr_15810[(14)] = inst_15680);

(statearr_15810[(15)] = inst_15682);

return statearr_15810;
})();
var statearr_15811_18093 = state_15741__$1;
(statearr_15811_18093[(2)] = null);

(statearr_15811_18093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (14))){
var state_15741__$1 = state_15741;
var statearr_15816_18094 = state_15741__$1;
(statearr_15816_18094[(2)] = null);

(statearr_15816_18094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (16))){
var inst_15693 = (state_15741[(10)]);
var inst_15697 = cljs.core.chunk_first(inst_15693);
var inst_15698 = cljs.core.chunk_rest(inst_15693);
var inst_15699 = cljs.core.count(inst_15697);
var inst_15679 = inst_15698;
var inst_15680 = inst_15697;
var inst_15681 = inst_15699;
var inst_15682 = (0);
var state_15741__$1 = (function (){var statearr_15820 = state_15741;
(statearr_15820[(12)] = inst_15681);

(statearr_15820[(13)] = inst_15679);

(statearr_15820[(14)] = inst_15680);

(statearr_15820[(15)] = inst_15682);

return statearr_15820;
})();
var statearr_15822_18095 = state_15741__$1;
(statearr_15822_18095[(2)] = null);

(statearr_15822_18095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (10))){
var inst_15681 = (state_15741[(12)]);
var inst_15679 = (state_15741[(13)]);
var inst_15680 = (state_15741[(14)]);
var inst_15682 = (state_15741[(15)]);
var inst_15687 = cljs.core._nth(inst_15680,inst_15682);
var inst_15688 = cljs.core.async.muxch_STAR_(inst_15687);
var inst_15689 = cljs.core.async.close_BANG_(inst_15688);
var inst_15690 = (inst_15682 + (1));
var tmp15813 = inst_15681;
var tmp15814 = inst_15679;
var tmp15815 = inst_15680;
var inst_15679__$1 = tmp15814;
var inst_15680__$1 = tmp15815;
var inst_15681__$1 = tmp15813;
var inst_15682__$1 = inst_15690;
var state_15741__$1 = (function (){var statearr_15829 = state_15741;
(statearr_15829[(12)] = inst_15681__$1);

(statearr_15829[(13)] = inst_15679__$1);

(statearr_15829[(14)] = inst_15680__$1);

(statearr_15829[(17)] = inst_15689);

(statearr_15829[(15)] = inst_15682__$1);

return statearr_15829;
})();
var statearr_15832_18101 = state_15741__$1;
(statearr_15832_18101[(2)] = null);

(statearr_15832_18101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (18))){
var inst_15709 = (state_15741[(2)]);
var state_15741__$1 = state_15741;
var statearr_15834_18102 = state_15741__$1;
(statearr_15834_18102[(2)] = inst_15709);

(statearr_15834_18102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15742 === (8))){
var inst_15681 = (state_15741[(12)]);
var inst_15682 = (state_15741[(15)]);
var inst_15684 = (inst_15682 < inst_15681);
var inst_15685 = inst_15684;
var state_15741__$1 = state_15741;
if(cljs.core.truth_(inst_15685)){
var statearr_15837_18104 = state_15741__$1;
(statearr_15837_18104[(1)] = (10));

} else {
var statearr_15841_18105 = state_15741__$1;
(statearr_15841_18105[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_15848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15848[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_15848[(1)] = (1));

return statearr_15848;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_15741){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_15741);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e15850){var ex__13518__auto__ = e15850;
var statearr_15851_18107 = state_15741;
(statearr_15851_18107[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_15741[(4)]))){
var statearr_15852_18108 = state_15741;
(statearr_15852_18108[(1)] = cljs.core.first((state_15741[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18111 = state_15741;
state_15741 = G__18111;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_15741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_15741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_15860 = f__13742__auto__();
(statearr_15860[(6)] = c__13741__auto___18045);

return statearr_15860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15869 = arguments.length;
switch (G__15869) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15879 = arguments.length;
switch (G__15879) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15890 = arguments.length;
switch (G__15890) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13741__auto___18116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_15956){
var state_val_15957 = (state_15956[(1)]);
if((state_val_15957 === (7))){
var state_15956__$1 = state_15956;
var statearr_15965_18117 = state_15956__$1;
(statearr_15965_18117[(2)] = null);

(statearr_15965_18117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (1))){
var state_15956__$1 = state_15956;
var statearr_15967_18118 = state_15956__$1;
(statearr_15967_18118[(2)] = null);

(statearr_15967_18118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (4))){
var inst_15905 = (state_15956[(7)]);
var inst_15907 = (state_15956[(8)]);
var inst_15910 = (inst_15907 < inst_15905);
var state_15956__$1 = state_15956;
if(cljs.core.truth_(inst_15910)){
var statearr_15972_18119 = state_15956__$1;
(statearr_15972_18119[(1)] = (6));

} else {
var statearr_15974_18121 = state_15956__$1;
(statearr_15974_18121[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (15))){
var inst_15941 = (state_15956[(9)]);
var inst_15946 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15941);
var state_15956__$1 = state_15956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15956__$1,(17),out,inst_15946);
} else {
if((state_val_15957 === (13))){
var inst_15941 = (state_15956[(9)]);
var inst_15941__$1 = (state_15956[(2)]);
var inst_15942 = cljs.core.some(cljs.core.nil_QMARK_,inst_15941__$1);
var state_15956__$1 = (function (){var statearr_15999 = state_15956;
(statearr_15999[(9)] = inst_15941__$1);

return statearr_15999;
})();
if(cljs.core.truth_(inst_15942)){
var statearr_16001_18123 = state_15956__$1;
(statearr_16001_18123[(1)] = (14));

} else {
var statearr_16002_18124 = state_15956__$1;
(statearr_16002_18124[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (6))){
var state_15956__$1 = state_15956;
var statearr_16005_18125 = state_15956__$1;
(statearr_16005_18125[(2)] = null);

(statearr_16005_18125[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (17))){
var inst_15948 = (state_15956[(2)]);
var state_15956__$1 = (function (){var statearr_16015 = state_15956;
(statearr_16015[(10)] = inst_15948);

return statearr_16015;
})();
var statearr_16019_18127 = state_15956__$1;
(statearr_16019_18127[(2)] = null);

(statearr_16019_18127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (3))){
var inst_15953 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15956__$1,inst_15953);
} else {
if((state_val_15957 === (12))){
var _ = (function (){var statearr_16035 = state_15956;
(statearr_16035[(4)] = cljs.core.rest((state_15956[(4)])));

return statearr_16035;
})();
var state_15956__$1 = state_15956;
var ex16011 = (state_15956__$1[(2)]);
var statearr_16039_18128 = state_15956__$1;
(statearr_16039_18128[(5)] = ex16011);


if((ex16011 instanceof Object)){
var statearr_16042_18129 = state_15956__$1;
(statearr_16042_18129[(1)] = (11));

(statearr_16042_18129[(5)] = null);

} else {
throw ex16011;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (2))){
var inst_15904 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15905 = cnt;
var inst_15907 = (0);
var state_15956__$1 = (function (){var statearr_16049 = state_15956;
(statearr_16049[(7)] = inst_15905);

(statearr_16049[(8)] = inst_15907);

(statearr_16049[(11)] = inst_15904);

return statearr_16049;
})();
var statearr_16054_18130 = state_15956__$1;
(statearr_16054_18130[(2)] = null);

(statearr_16054_18130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (11))){
var inst_15915 = (state_15956[(2)]);
var inst_15917 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15956__$1 = (function (){var statearr_16059 = state_15956;
(statearr_16059[(12)] = inst_15915);

return statearr_16059;
})();
var statearr_16062_18131 = state_15956__$1;
(statearr_16062_18131[(2)] = inst_15917);

(statearr_16062_18131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (9))){
var inst_15907 = (state_15956[(8)]);
var _ = (function (){var statearr_16073 = state_15956;
(statearr_16073[(4)] = cljs.core.cons((12),(state_15956[(4)])));

return statearr_16073;
})();
var inst_15923 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15907) : chs__$1.call(null,inst_15907));
var inst_15924 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15907) : done.call(null,inst_15907));
var inst_15925 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15923,inst_15924);
var ___$1 = (function (){var statearr_16082 = state_15956;
(statearr_16082[(4)] = cljs.core.rest((state_15956[(4)])));

return statearr_16082;
})();
var state_15956__$1 = state_15956;
var statearr_16086_18132 = state_15956__$1;
(statearr_16086_18132[(2)] = inst_15925);

(statearr_16086_18132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (5))){
var inst_15937 = (state_15956[(2)]);
var state_15956__$1 = (function (){var statearr_16088 = state_15956;
(statearr_16088[(13)] = inst_15937);

return statearr_16088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15956__$1,(13),dchan);
} else {
if((state_val_15957 === (14))){
var inst_15944 = cljs.core.async.close_BANG_(out);
var state_15956__$1 = state_15956;
var statearr_16093_18133 = state_15956__$1;
(statearr_16093_18133[(2)] = inst_15944);

(statearr_16093_18133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (16))){
var inst_15951 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_16097_18134 = state_15956__$1;
(statearr_16097_18134[(2)] = inst_15951);

(statearr_16097_18134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (10))){
var inst_15907 = (state_15956[(8)]);
var inst_15928 = (state_15956[(2)]);
var inst_15929 = (inst_15907 + (1));
var inst_15907__$1 = inst_15929;
var state_15956__$1 = (function (){var statearr_16099 = state_15956;
(statearr_16099[(14)] = inst_15928);

(statearr_16099[(8)] = inst_15907__$1);

return statearr_16099;
})();
var statearr_16101_18135 = state_15956__$1;
(statearr_16101_18135[(2)] = null);

(statearr_16101_18135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (8))){
var inst_15934 = (state_15956[(2)]);
var state_15956__$1 = state_15956;
var statearr_16102_18136 = state_15956__$1;
(statearr_16102_18136[(2)] = inst_15934);

(statearr_16102_18136[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_16110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16110[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_16110[(1)] = (1));

return statearr_16110;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_15956){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_15956);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e16112){var ex__13518__auto__ = e16112;
var statearr_16113_18140 = state_15956;
(statearr_16113_18140[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_15956[(4)]))){
var statearr_16116_18141 = state_15956;
(statearr_16116_18141[(1)] = cljs.core.first((state_15956[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18142 = state_15956;
state_15956 = G__18142;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_15956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_15956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_16119 = f__13742__auto__();
(statearr_16119[(6)] = c__13741__auto___18116);

return statearr_16119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16140 = arguments.length;
switch (G__16140) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13741__auto___18148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_16219){
var state_val_16220 = (state_16219[(1)]);
if((state_val_16220 === (7))){
var inst_16168 = (state_16219[(7)]);
var inst_16169 = (state_16219[(8)]);
var inst_16168__$1 = (state_16219[(2)]);
var inst_16169__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16168__$1,(0),null);
var inst_16170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16168__$1,(1),null);
var inst_16177 = (inst_16169__$1 == null);
var state_16219__$1 = (function (){var statearr_16234 = state_16219;
(statearr_16234[(7)] = inst_16168__$1);

(statearr_16234[(9)] = inst_16170);

(statearr_16234[(8)] = inst_16169__$1);

return statearr_16234;
})();
if(cljs.core.truth_(inst_16177)){
var statearr_16235_18149 = state_16219__$1;
(statearr_16235_18149[(1)] = (8));

} else {
var statearr_16236_18150 = state_16219__$1;
(statearr_16236_18150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (1))){
var inst_16152 = cljs.core.vec(chs);
var inst_16155 = inst_16152;
var state_16219__$1 = (function (){var statearr_16243 = state_16219;
(statearr_16243[(10)] = inst_16155);

return statearr_16243;
})();
var statearr_16244_18151 = state_16219__$1;
(statearr_16244_18151[(2)] = null);

(statearr_16244_18151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (4))){
var inst_16155 = (state_16219[(10)]);
var state_16219__$1 = state_16219;
return cljs.core.async.ioc_alts_BANG_(state_16219__$1,(7),inst_16155);
} else {
if((state_val_16220 === (6))){
var inst_16195 = (state_16219[(2)]);
var state_16219__$1 = state_16219;
var statearr_16246_18152 = state_16219__$1;
(statearr_16246_18152[(2)] = inst_16195);

(statearr_16246_18152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (3))){
var inst_16198 = (state_16219[(2)]);
var state_16219__$1 = state_16219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16219__$1,inst_16198);
} else {
if((state_val_16220 === (2))){
var inst_16155 = (state_16219[(10)]);
var inst_16161 = cljs.core.count(inst_16155);
var inst_16162 = (inst_16161 > (0));
var state_16219__$1 = state_16219;
if(cljs.core.truth_(inst_16162)){
var statearr_16249_18154 = state_16219__$1;
(statearr_16249_18154[(1)] = (4));

} else {
var statearr_16250_18155 = state_16219__$1;
(statearr_16250_18155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (11))){
var inst_16155 = (state_16219[(10)]);
var inst_16188 = (state_16219[(2)]);
var tmp16248 = inst_16155;
var inst_16155__$1 = tmp16248;
var state_16219__$1 = (function (){var statearr_16251 = state_16219;
(statearr_16251[(10)] = inst_16155__$1);

(statearr_16251[(11)] = inst_16188);

return statearr_16251;
})();
var statearr_16252_18156 = state_16219__$1;
(statearr_16252_18156[(2)] = null);

(statearr_16252_18156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (9))){
var inst_16169 = (state_16219[(8)]);
var state_16219__$1 = state_16219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16219__$1,(11),out,inst_16169);
} else {
if((state_val_16220 === (5))){
var inst_16193 = cljs.core.async.close_BANG_(out);
var state_16219__$1 = state_16219;
var statearr_16262_18157 = state_16219__$1;
(statearr_16262_18157[(2)] = inst_16193);

(statearr_16262_18157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (10))){
var inst_16191 = (state_16219[(2)]);
var state_16219__$1 = state_16219;
var statearr_16263_18158 = state_16219__$1;
(statearr_16263_18158[(2)] = inst_16191);

(statearr_16263_18158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (8))){
var inst_16168 = (state_16219[(7)]);
var inst_16155 = (state_16219[(10)]);
var inst_16170 = (state_16219[(9)]);
var inst_16169 = (state_16219[(8)]);
var inst_16182 = (function (){var cs = inst_16155;
var vec__16164 = inst_16168;
var v = inst_16169;
var c = inst_16170;
return (function (p1__16134_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16134_SHARP_);
});
})();
var inst_16184 = cljs.core.filterv(inst_16182,inst_16155);
var inst_16155__$1 = inst_16184;
var state_16219__$1 = (function (){var statearr_16270 = state_16219;
(statearr_16270[(10)] = inst_16155__$1);

return statearr_16270;
})();
var statearr_16271_18165 = state_16219__$1;
(statearr_16271_18165[(2)] = null);

(statearr_16271_18165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_16275 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16275[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_16275[(1)] = (1));

return statearr_16275;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_16219){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_16219);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e16277){var ex__13518__auto__ = e16277;
var statearr_16278_18173 = state_16219;
(statearr_16278_18173[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_16219[(4)]))){
var statearr_16279_18180 = state_16219;
(statearr_16279_18180[(1)] = cljs.core.first((state_16219[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18181 = state_16219;
state_16219 = G__18181;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_16219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_16219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_16284 = f__13742__auto__();
(statearr_16284[(6)] = c__13741__auto___18148);

return statearr_16284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16287 = arguments.length;
switch (G__16287) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13741__auto___18187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_16341){
var state_val_16342 = (state_16341[(1)]);
if((state_val_16342 === (7))){
var inst_16307 = (state_16341[(7)]);
var inst_16307__$1 = (state_16341[(2)]);
var inst_16308 = (inst_16307__$1 == null);
var inst_16309 = cljs.core.not(inst_16308);
var state_16341__$1 = (function (){var statearr_16344 = state_16341;
(statearr_16344[(7)] = inst_16307__$1);

return statearr_16344;
})();
if(inst_16309){
var statearr_16345_18188 = state_16341__$1;
(statearr_16345_18188[(1)] = (8));

} else {
var statearr_16349_18189 = state_16341__$1;
(statearr_16349_18189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (1))){
var inst_16299 = (0);
var state_16341__$1 = (function (){var statearr_16352 = state_16341;
(statearr_16352[(8)] = inst_16299);

return statearr_16352;
})();
var statearr_16353_18190 = state_16341__$1;
(statearr_16353_18190[(2)] = null);

(statearr_16353_18190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (4))){
var state_16341__$1 = state_16341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16341__$1,(7),ch);
} else {
if((state_val_16342 === (6))){
var inst_16336 = (state_16341[(2)]);
var state_16341__$1 = state_16341;
var statearr_16356_18192 = state_16341__$1;
(statearr_16356_18192[(2)] = inst_16336);

(statearr_16356_18192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (3))){
var inst_16338 = (state_16341[(2)]);
var inst_16339 = cljs.core.async.close_BANG_(out);
var state_16341__$1 = (function (){var statearr_16357 = state_16341;
(statearr_16357[(9)] = inst_16338);

return statearr_16357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16341__$1,inst_16339);
} else {
if((state_val_16342 === (2))){
var inst_16299 = (state_16341[(8)]);
var inst_16301 = (inst_16299 < n);
var state_16341__$1 = state_16341;
if(cljs.core.truth_(inst_16301)){
var statearr_16362_18199 = state_16341__$1;
(statearr_16362_18199[(1)] = (4));

} else {
var statearr_16366_18200 = state_16341__$1;
(statearr_16366_18200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (11))){
var inst_16299 = (state_16341[(8)]);
var inst_16312 = (state_16341[(2)]);
var inst_16314 = (inst_16299 + (1));
var inst_16299__$1 = inst_16314;
var state_16341__$1 = (function (){var statearr_16368 = state_16341;
(statearr_16368[(10)] = inst_16312);

(statearr_16368[(8)] = inst_16299__$1);

return statearr_16368;
})();
var statearr_16369_18201 = state_16341__$1;
(statearr_16369_18201[(2)] = null);

(statearr_16369_18201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (9))){
var state_16341__$1 = state_16341;
var statearr_16370_18207 = state_16341__$1;
(statearr_16370_18207[(2)] = null);

(statearr_16370_18207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (5))){
var state_16341__$1 = state_16341;
var statearr_16374_18208 = state_16341__$1;
(statearr_16374_18208[(2)] = null);

(statearr_16374_18208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (10))){
var inst_16333 = (state_16341[(2)]);
var state_16341__$1 = state_16341;
var statearr_16376_18216 = state_16341__$1;
(statearr_16376_18216[(2)] = inst_16333);

(statearr_16376_18216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (8))){
var inst_16307 = (state_16341[(7)]);
var state_16341__$1 = state_16341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16341__$1,(11),out,inst_16307);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_16413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16413[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_16413[(1)] = (1));

return statearr_16413;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_16341){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_16341);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e16414){var ex__13518__auto__ = e16414;
var statearr_16415_18218 = state_16341;
(statearr_16415_18218[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_16341[(4)]))){
var statearr_16416_18219 = state_16341;
(statearr_16416_18219[(1)] = cljs.core.first((state_16341[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18220 = state_16341;
state_16341 = G__18220;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_16341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_16341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_16419 = f__13742__auto__();
(statearr_16419[(6)] = c__13741__auto___18187);

return statearr_16419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16438 = (function (f,ch,meta16426,_,fn1,meta16439){
this.f = f;
this.ch = ch;
this.meta16426 = meta16426;
this._ = _;
this.fn1 = fn1;
this.meta16439 = meta16439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16440,meta16439__$1){
var self__ = this;
var _16440__$1 = this;
return (new cljs.core.async.t_cljs$core$async16438(self__.f,self__.ch,self__.meta16426,self__._,self__.fn1,meta16439__$1));
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16440){
var self__ = this;
var _16440__$1 = this;
return self__.meta16439;
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16422_SHARP_){
var G__16451 = (((p1__16422_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16422_SHARP_) : self__.f.call(null,p1__16422_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16451) : f1.call(null,G__16451));
});
}));

(cljs.core.async.t_cljs$core$async16438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16426","meta16426",2119166427,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16425","cljs.core.async/t_cljs$core$async16425",-109717182,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16439","meta16439",-2017036263,null)], null);
}));

(cljs.core.async.t_cljs$core$async16438.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16438");

(cljs.core.async.t_cljs$core$async16438.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16438");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16438.
 */
cljs.core.async.__GT_t_cljs$core$async16438 = (function cljs$core$async$__GT_t_cljs$core$async16438(f,ch,meta16426,_,fn1,meta16439){
return (new cljs.core.async.t_cljs$core$async16438(f,ch,meta16426,_,fn1,meta16439));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16425 = (function (f,ch,meta16426){
this.f = f;
this.ch = ch;
this.meta16426 = meta16426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16427,meta16426__$1){
var self__ = this;
var _16427__$1 = this;
return (new cljs.core.async.t_cljs$core$async16425(self__.f,self__.ch,meta16426__$1));
}));

(cljs.core.async.t_cljs$core$async16425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16427){
var self__ = this;
var _16427__$1 = this;
return self__.meta16426;
}));

(cljs.core.async.t_cljs$core$async16425.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16425.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16425.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16438(self__.f,self__.ch,self__.meta16426,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16457 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16457) : self__.f.call(null,G__16457));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16425.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16426","meta16426",2119166427,null)], null);
}));

(cljs.core.async.t_cljs$core$async16425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16425");

(cljs.core.async.t_cljs$core$async16425.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16425.
 */
cljs.core.async.__GT_t_cljs$core$async16425 = (function cljs$core$async$__GT_t_cljs$core$async16425(f,ch,meta16426){
return (new cljs.core.async.t_cljs$core$async16425(f,ch,meta16426));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16425(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16465 = (function (f,ch,meta16466){
this.f = f;
this.ch = ch;
this.meta16466 = meta16466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16467,meta16466__$1){
var self__ = this;
var _16467__$1 = this;
return (new cljs.core.async.t_cljs$core$async16465(self__.f,self__.ch,meta16466__$1));
}));

(cljs.core.async.t_cljs$core$async16465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16467){
var self__ = this;
var _16467__$1 = this;
return self__.meta16466;
}));

(cljs.core.async.t_cljs$core$async16465.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16465.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16465.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16466","meta16466",-2057117112,null)], null);
}));

(cljs.core.async.t_cljs$core$async16465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16465");

(cljs.core.async.t_cljs$core$async16465.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16465.
 */
cljs.core.async.__GT_t_cljs$core$async16465 = (function cljs$core$async$__GT_t_cljs$core$async16465(f,ch,meta16466){
return (new cljs.core.async.t_cljs$core$async16465(f,ch,meta16466));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16465(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16479 = (function (p,ch,meta16480){
this.p = p;
this.ch = ch;
this.meta16480 = meta16480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16481,meta16480__$1){
var self__ = this;
var _16481__$1 = this;
return (new cljs.core.async.t_cljs$core$async16479(self__.p,self__.ch,meta16480__$1));
}));

(cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16481){
var self__ = this;
var _16481__$1 = this;
return self__.meta16480;
}));

(cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16480","meta16480",-1866488912,null)], null);
}));

(cljs.core.async.t_cljs$core$async16479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16479");

(cljs.core.async.t_cljs$core$async16479.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16479.
 */
cljs.core.async.__GT_t_cljs$core$async16479 = (function cljs$core$async$__GT_t_cljs$core$async16479(p,ch,meta16480){
return (new cljs.core.async.t_cljs$core$async16479(p,ch,meta16480));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16479(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16510 = arguments.length;
switch (G__16510) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13741__auto___18252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_16533){
var state_val_16534 = (state_16533[(1)]);
if((state_val_16534 === (7))){
var inst_16529 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16538_18253 = state_16533__$1;
(statearr_16538_18253[(2)] = inst_16529);

(statearr_16538_18253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (1))){
var state_16533__$1 = state_16533;
var statearr_16539_18254 = state_16533__$1;
(statearr_16539_18254[(2)] = null);

(statearr_16539_18254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (4))){
var inst_16514 = (state_16533[(7)]);
var inst_16514__$1 = (state_16533[(2)]);
var inst_16515 = (inst_16514__$1 == null);
var state_16533__$1 = (function (){var statearr_16547 = state_16533;
(statearr_16547[(7)] = inst_16514__$1);

return statearr_16547;
})();
if(cljs.core.truth_(inst_16515)){
var statearr_16550_18259 = state_16533__$1;
(statearr_16550_18259[(1)] = (5));

} else {
var statearr_16551_18260 = state_16533__$1;
(statearr_16551_18260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (6))){
var inst_16514 = (state_16533[(7)]);
var inst_16520 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16514) : p.call(null,inst_16514));
var state_16533__$1 = state_16533;
if(cljs.core.truth_(inst_16520)){
var statearr_16552_18264 = state_16533__$1;
(statearr_16552_18264[(1)] = (8));

} else {
var statearr_16554_18266 = state_16533__$1;
(statearr_16554_18266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (3))){
var inst_16531 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16533__$1,inst_16531);
} else {
if((state_val_16534 === (2))){
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16533__$1,(4),ch);
} else {
if((state_val_16534 === (11))){
var inst_16523 = (state_16533[(2)]);
var state_16533__$1 = state_16533;
var statearr_16564_18270 = state_16533__$1;
(statearr_16564_18270[(2)] = inst_16523);

(statearr_16564_18270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (9))){
var state_16533__$1 = state_16533;
var statearr_16568_18275 = state_16533__$1;
(statearr_16568_18275[(2)] = null);

(statearr_16568_18275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (5))){
var inst_16518 = cljs.core.async.close_BANG_(out);
var state_16533__$1 = state_16533;
var statearr_16572_18279 = state_16533__$1;
(statearr_16572_18279[(2)] = inst_16518);

(statearr_16572_18279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (10))){
var inst_16526 = (state_16533[(2)]);
var state_16533__$1 = (function (){var statearr_16573 = state_16533;
(statearr_16573[(8)] = inst_16526);

return statearr_16573;
})();
var statearr_16574_18281 = state_16533__$1;
(statearr_16574_18281[(2)] = null);

(statearr_16574_18281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16534 === (8))){
var inst_16514 = (state_16533[(7)]);
var state_16533__$1 = state_16533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16533__$1,(11),out,inst_16514);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_16585 = [null,null,null,null,null,null,null,null,null];
(statearr_16585[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_16585[(1)] = (1));

return statearr_16585;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_16533){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_16533);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e16586){var ex__13518__auto__ = e16586;
var statearr_16587_18286 = state_16533;
(statearr_16587_18286[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_16533[(4)]))){
var statearr_16588_18287 = state_16533;
(statearr_16588_18287[(1)] = cljs.core.first((state_16533[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18288 = state_16533;
state_16533 = G__18288;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_16533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_16533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_16589 = f__13742__auto__();
(statearr_16589[(6)] = c__13741__auto___18252);

return statearr_16589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16591 = arguments.length;
switch (G__16591) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13741__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_16694){
var state_val_16695 = (state_16694[(1)]);
if((state_val_16695 === (7))){
var inst_16687 = (state_16694[(2)]);
var state_16694__$1 = state_16694;
var statearr_16696_18292 = state_16694__$1;
(statearr_16696_18292[(2)] = inst_16687);

(statearr_16696_18292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (20))){
var inst_16646 = (state_16694[(7)]);
var inst_16668 = (state_16694[(2)]);
var inst_16669 = cljs.core.next(inst_16646);
var inst_16627 = inst_16669;
var inst_16628 = null;
var inst_16629 = (0);
var inst_16630 = (0);
var state_16694__$1 = (function (){var statearr_16701 = state_16694;
(statearr_16701[(8)] = inst_16628);

(statearr_16701[(9)] = inst_16629);

(statearr_16701[(10)] = inst_16627);

(statearr_16701[(11)] = inst_16668);

(statearr_16701[(12)] = inst_16630);

return statearr_16701;
})();
var statearr_16702_18294 = state_16694__$1;
(statearr_16702_18294[(2)] = null);

(statearr_16702_18294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (1))){
var state_16694__$1 = state_16694;
var statearr_16703_18297 = state_16694__$1;
(statearr_16703_18297[(2)] = null);

(statearr_16703_18297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (4))){
var inst_16614 = (state_16694[(13)]);
var inst_16614__$1 = (state_16694[(2)]);
var inst_16615 = (inst_16614__$1 == null);
var state_16694__$1 = (function (){var statearr_16704 = state_16694;
(statearr_16704[(13)] = inst_16614__$1);

return statearr_16704;
})();
if(cljs.core.truth_(inst_16615)){
var statearr_16705_18304 = state_16694__$1;
(statearr_16705_18304[(1)] = (5));

} else {
var statearr_16706_18305 = state_16694__$1;
(statearr_16706_18305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (15))){
var state_16694__$1 = state_16694;
var statearr_16710_18311 = state_16694__$1;
(statearr_16710_18311[(2)] = null);

(statearr_16710_18311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (21))){
var state_16694__$1 = state_16694;
var statearr_16711_18312 = state_16694__$1;
(statearr_16711_18312[(2)] = null);

(statearr_16711_18312[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (13))){
var inst_16628 = (state_16694[(8)]);
var inst_16629 = (state_16694[(9)]);
var inst_16627 = (state_16694[(10)]);
var inst_16630 = (state_16694[(12)]);
var inst_16638 = (state_16694[(2)]);
var inst_16639 = (inst_16630 + (1));
var tmp16707 = inst_16628;
var tmp16708 = inst_16629;
var tmp16709 = inst_16627;
var inst_16627__$1 = tmp16709;
var inst_16628__$1 = tmp16707;
var inst_16629__$1 = tmp16708;
var inst_16630__$1 = inst_16639;
var state_16694__$1 = (function (){var statearr_16713 = state_16694;
(statearr_16713[(8)] = inst_16628__$1);

(statearr_16713[(14)] = inst_16638);

(statearr_16713[(9)] = inst_16629__$1);

(statearr_16713[(10)] = inst_16627__$1);

(statearr_16713[(12)] = inst_16630__$1);

return statearr_16713;
})();
var statearr_16715_18314 = state_16694__$1;
(statearr_16715_18314[(2)] = null);

(statearr_16715_18314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (22))){
var state_16694__$1 = state_16694;
var statearr_16721_18315 = state_16694__$1;
(statearr_16721_18315[(2)] = null);

(statearr_16721_18315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (6))){
var inst_16614 = (state_16694[(13)]);
var inst_16625 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16614) : f.call(null,inst_16614));
var inst_16626 = cljs.core.seq(inst_16625);
var inst_16627 = inst_16626;
var inst_16628 = null;
var inst_16629 = (0);
var inst_16630 = (0);
var state_16694__$1 = (function (){var statearr_16730 = state_16694;
(statearr_16730[(8)] = inst_16628);

(statearr_16730[(9)] = inst_16629);

(statearr_16730[(10)] = inst_16627);

(statearr_16730[(12)] = inst_16630);

return statearr_16730;
})();
var statearr_16734_18317 = state_16694__$1;
(statearr_16734_18317[(2)] = null);

(statearr_16734_18317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (17))){
var inst_16646 = (state_16694[(7)]);
var inst_16654 = cljs.core.chunk_first(inst_16646);
var inst_16658 = cljs.core.chunk_rest(inst_16646);
var inst_16659 = cljs.core.count(inst_16654);
var inst_16627 = inst_16658;
var inst_16628 = inst_16654;
var inst_16629 = inst_16659;
var inst_16630 = (0);
var state_16694__$1 = (function (){var statearr_16737 = state_16694;
(statearr_16737[(8)] = inst_16628);

(statearr_16737[(9)] = inst_16629);

(statearr_16737[(10)] = inst_16627);

(statearr_16737[(12)] = inst_16630);

return statearr_16737;
})();
var statearr_16738_18318 = state_16694__$1;
(statearr_16738_18318[(2)] = null);

(statearr_16738_18318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (3))){
var inst_16689 = (state_16694[(2)]);
var state_16694__$1 = state_16694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16694__$1,inst_16689);
} else {
if((state_val_16695 === (12))){
var inst_16677 = (state_16694[(2)]);
var state_16694__$1 = state_16694;
var statearr_16743_18326 = state_16694__$1;
(statearr_16743_18326[(2)] = inst_16677);

(statearr_16743_18326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (2))){
var state_16694__$1 = state_16694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16694__$1,(4),in$);
} else {
if((state_val_16695 === (23))){
var inst_16685 = (state_16694[(2)]);
var state_16694__$1 = state_16694;
var statearr_16744_18337 = state_16694__$1;
(statearr_16744_18337[(2)] = inst_16685);

(statearr_16744_18337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (19))){
var inst_16672 = (state_16694[(2)]);
var state_16694__$1 = state_16694;
var statearr_16746_18338 = state_16694__$1;
(statearr_16746_18338[(2)] = inst_16672);

(statearr_16746_18338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (11))){
var inst_16646 = (state_16694[(7)]);
var inst_16627 = (state_16694[(10)]);
var inst_16646__$1 = cljs.core.seq(inst_16627);
var state_16694__$1 = (function (){var statearr_16747 = state_16694;
(statearr_16747[(7)] = inst_16646__$1);

return statearr_16747;
})();
if(inst_16646__$1){
var statearr_16748_18343 = state_16694__$1;
(statearr_16748_18343[(1)] = (14));

} else {
var statearr_16749_18344 = state_16694__$1;
(statearr_16749_18344[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (9))){
var inst_16679 = (state_16694[(2)]);
var inst_16680 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16694__$1 = (function (){var statearr_16750 = state_16694;
(statearr_16750[(15)] = inst_16679);

return statearr_16750;
})();
if(cljs.core.truth_(inst_16680)){
var statearr_16751_18354 = state_16694__$1;
(statearr_16751_18354[(1)] = (21));

} else {
var statearr_16752_18355 = state_16694__$1;
(statearr_16752_18355[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (5))){
var inst_16617 = cljs.core.async.close_BANG_(out);
var state_16694__$1 = state_16694;
var statearr_16753_18364 = state_16694__$1;
(statearr_16753_18364[(2)] = inst_16617);

(statearr_16753_18364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (14))){
var inst_16646 = (state_16694[(7)]);
var inst_16652 = cljs.core.chunked_seq_QMARK_(inst_16646);
var state_16694__$1 = state_16694;
if(inst_16652){
var statearr_16754_18369 = state_16694__$1;
(statearr_16754_18369[(1)] = (17));

} else {
var statearr_16755_18370 = state_16694__$1;
(statearr_16755_18370[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (16))){
var inst_16675 = (state_16694[(2)]);
var state_16694__$1 = state_16694;
var statearr_16756_18375 = state_16694__$1;
(statearr_16756_18375[(2)] = inst_16675);

(statearr_16756_18375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (10))){
var inst_16628 = (state_16694[(8)]);
var inst_16630 = (state_16694[(12)]);
var inst_16635 = cljs.core._nth(inst_16628,inst_16630);
var state_16694__$1 = state_16694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16694__$1,(13),out,inst_16635);
} else {
if((state_val_16695 === (18))){
var inst_16646 = (state_16694[(7)]);
var inst_16666 = cljs.core.first(inst_16646);
var state_16694__$1 = state_16694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16694__$1,(20),out,inst_16666);
} else {
if((state_val_16695 === (8))){
var inst_16629 = (state_16694[(9)]);
var inst_16630 = (state_16694[(12)]);
var inst_16632 = (inst_16630 < inst_16629);
var inst_16633 = inst_16632;
var state_16694__$1 = state_16694;
if(cljs.core.truth_(inst_16633)){
var statearr_16761_18389 = state_16694__$1;
(statearr_16761_18389[(1)] = (10));

} else {
var statearr_16763_18390 = state_16694__$1;
(statearr_16763_18390[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13515__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13515__auto____0 = (function (){
var statearr_16765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16765[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13515__auto__);

(statearr_16765[(1)] = (1));

return statearr_16765;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13515__auto____1 = (function (state_16694){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_16694);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e16766){var ex__13518__auto__ = e16766;
var statearr_16767_18395 = state_16694;
(statearr_16767_18395[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_16694[(4)]))){
var statearr_16768_18403 = state_16694;
(statearr_16768_18403[(1)] = cljs.core.first((state_16694[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18404 = state_16694;
state_16694 = G__18404;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13515__auto__ = function(state_16694){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13515__auto____1.call(this,state_16694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13515__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13515__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_16772 = f__13742__auto__();
(statearr_16772[(6)] = c__13741__auto__);

return statearr_16772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));

return c__13741__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16780 = arguments.length;
switch (G__16780) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16783 = arguments.length;
switch (G__16783) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16786 = arguments.length;
switch (G__16786) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13741__auto___18417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_16813){
var state_val_16814 = (state_16813[(1)]);
if((state_val_16814 === (7))){
var inst_16808 = (state_16813[(2)]);
var state_16813__$1 = state_16813;
var statearr_16820_18418 = state_16813__$1;
(statearr_16820_18418[(2)] = inst_16808);

(statearr_16820_18418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16814 === (1))){
var inst_16790 = null;
var state_16813__$1 = (function (){var statearr_16822 = state_16813;
(statearr_16822[(7)] = inst_16790);

return statearr_16822;
})();
var statearr_16823_18419 = state_16813__$1;
(statearr_16823_18419[(2)] = null);

(statearr_16823_18419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16814 === (4))){
var inst_16793 = (state_16813[(8)]);
var inst_16793__$1 = (state_16813[(2)]);
var inst_16794 = (inst_16793__$1 == null);
var inst_16795 = cljs.core.not(inst_16794);
var state_16813__$1 = (function (){var statearr_16825 = state_16813;
(statearr_16825[(8)] = inst_16793__$1);

return statearr_16825;
})();
if(inst_16795){
var statearr_16827_18420 = state_16813__$1;
(statearr_16827_18420[(1)] = (5));

} else {
var statearr_16828_18425 = state_16813__$1;
(statearr_16828_18425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16814 === (6))){
var state_16813__$1 = state_16813;
var statearr_16829_18427 = state_16813__$1;
(statearr_16829_18427[(2)] = null);

(statearr_16829_18427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16814 === (3))){
var inst_16810 = (state_16813[(2)]);
var inst_16811 = cljs.core.async.close_BANG_(out);
var state_16813__$1 = (function (){var statearr_16830 = state_16813;
(statearr_16830[(9)] = inst_16810);

return statearr_16830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16813__$1,inst_16811);
} else {
if((state_val_16814 === (2))){
var state_16813__$1 = state_16813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16813__$1,(4),ch);
} else {
if((state_val_16814 === (11))){
var inst_16793 = (state_16813[(8)]);
var inst_16802 = (state_16813[(2)]);
var inst_16790 = inst_16793;
var state_16813__$1 = (function (){var statearr_16831 = state_16813;
(statearr_16831[(7)] = inst_16790);

(statearr_16831[(10)] = inst_16802);

return statearr_16831;
})();
var statearr_16833_18433 = state_16813__$1;
(statearr_16833_18433[(2)] = null);

(statearr_16833_18433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16814 === (9))){
var inst_16793 = (state_16813[(8)]);
var state_16813__$1 = state_16813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16813__$1,(11),out,inst_16793);
} else {
if((state_val_16814 === (5))){
var inst_16793 = (state_16813[(8)]);
var inst_16790 = (state_16813[(7)]);
var inst_16797 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16793,inst_16790);
var state_16813__$1 = state_16813;
if(inst_16797){
var statearr_16836_18434 = state_16813__$1;
(statearr_16836_18434[(1)] = (8));

} else {
var statearr_16837_18435 = state_16813__$1;
(statearr_16837_18435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16814 === (10))){
var inst_16805 = (state_16813[(2)]);
var state_16813__$1 = state_16813;
var statearr_16841_18437 = state_16813__$1;
(statearr_16841_18437[(2)] = inst_16805);

(statearr_16841_18437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16814 === (8))){
var inst_16790 = (state_16813[(7)]);
var tmp16835 = inst_16790;
var inst_16790__$1 = tmp16835;
var state_16813__$1 = (function (){var statearr_16842 = state_16813;
(statearr_16842[(7)] = inst_16790__$1);

return statearr_16842;
})();
var statearr_16843_18438 = state_16813__$1;
(statearr_16843_18438[(2)] = null);

(statearr_16843_18438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_16852 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16852[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_16852[(1)] = (1));

return statearr_16852;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_16813){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_16813);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e16857){var ex__13518__auto__ = e16857;
var statearr_16858_18439 = state_16813;
(statearr_16858_18439[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_16813[(4)]))){
var statearr_16859_18441 = state_16813;
(statearr_16859_18441[(1)] = cljs.core.first((state_16813[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18445 = state_16813;
state_16813 = G__18445;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_16813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_16813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_16860 = f__13742__auto__();
(statearr_16860[(6)] = c__13741__auto___18417);

return statearr_16860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16864 = arguments.length;
switch (G__16864) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13741__auto___18452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_16910){
var state_val_16911 = (state_16910[(1)]);
if((state_val_16911 === (7))){
var inst_16906 = (state_16910[(2)]);
var state_16910__$1 = state_16910;
var statearr_16915_18455 = state_16910__$1;
(statearr_16915_18455[(2)] = inst_16906);

(statearr_16915_18455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (1))){
var inst_16869 = (new Array(n));
var inst_16870 = inst_16869;
var inst_16871 = (0);
var state_16910__$1 = (function (){var statearr_16916 = state_16910;
(statearr_16916[(7)] = inst_16871);

(statearr_16916[(8)] = inst_16870);

return statearr_16916;
})();
var statearr_16917_18465 = state_16910__$1;
(statearr_16917_18465[(2)] = null);

(statearr_16917_18465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (4))){
var inst_16874 = (state_16910[(9)]);
var inst_16874__$1 = (state_16910[(2)]);
var inst_16875 = (inst_16874__$1 == null);
var inst_16876 = cljs.core.not(inst_16875);
var state_16910__$1 = (function (){var statearr_16918 = state_16910;
(statearr_16918[(9)] = inst_16874__$1);

return statearr_16918;
})();
if(inst_16876){
var statearr_16919_18467 = state_16910__$1;
(statearr_16919_18467[(1)] = (5));

} else {
var statearr_16922_18468 = state_16910__$1;
(statearr_16922_18468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (15))){
var inst_16897 = (state_16910[(2)]);
var state_16910__$1 = state_16910;
var statearr_16929_18470 = state_16910__$1;
(statearr_16929_18470[(2)] = inst_16897);

(statearr_16929_18470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (13))){
var state_16910__$1 = state_16910;
var statearr_16930_18471 = state_16910__$1;
(statearr_16930_18471[(2)] = null);

(statearr_16930_18471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (6))){
var inst_16871 = (state_16910[(7)]);
var inst_16892 = (inst_16871 > (0));
var state_16910__$1 = state_16910;
if(cljs.core.truth_(inst_16892)){
var statearr_16933_18479 = state_16910__$1;
(statearr_16933_18479[(1)] = (12));

} else {
var statearr_16934_18480 = state_16910__$1;
(statearr_16934_18480[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (3))){
var inst_16908 = (state_16910[(2)]);
var state_16910__$1 = state_16910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16910__$1,inst_16908);
} else {
if((state_val_16911 === (12))){
var inst_16870 = (state_16910[(8)]);
var inst_16895 = cljs.core.vec(inst_16870);
var state_16910__$1 = state_16910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16910__$1,(15),out,inst_16895);
} else {
if((state_val_16911 === (2))){
var state_16910__$1 = state_16910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16910__$1,(4),ch);
} else {
if((state_val_16911 === (11))){
var inst_16886 = (state_16910[(2)]);
var inst_16887 = (new Array(n));
var inst_16870 = inst_16887;
var inst_16871 = (0);
var state_16910__$1 = (function (){var statearr_16948 = state_16910;
(statearr_16948[(10)] = inst_16886);

(statearr_16948[(7)] = inst_16871);

(statearr_16948[(8)] = inst_16870);

return statearr_16948;
})();
var statearr_16950_18482 = state_16910__$1;
(statearr_16950_18482[(2)] = null);

(statearr_16950_18482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (9))){
var inst_16870 = (state_16910[(8)]);
var inst_16884 = cljs.core.vec(inst_16870);
var state_16910__$1 = state_16910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16910__$1,(11),out,inst_16884);
} else {
if((state_val_16911 === (5))){
var inst_16879 = (state_16910[(11)]);
var inst_16871 = (state_16910[(7)]);
var inst_16870 = (state_16910[(8)]);
var inst_16874 = (state_16910[(9)]);
var inst_16878 = (inst_16870[inst_16871] = inst_16874);
var inst_16879__$1 = (inst_16871 + (1));
var inst_16880 = (inst_16879__$1 < n);
var state_16910__$1 = (function (){var statearr_16954 = state_16910;
(statearr_16954[(11)] = inst_16879__$1);

(statearr_16954[(12)] = inst_16878);

return statearr_16954;
})();
if(cljs.core.truth_(inst_16880)){
var statearr_16956_18486 = state_16910__$1;
(statearr_16956_18486[(1)] = (8));

} else {
var statearr_16957_18487 = state_16910__$1;
(statearr_16957_18487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (14))){
var inst_16900 = (state_16910[(2)]);
var inst_16904 = cljs.core.async.close_BANG_(out);
var state_16910__$1 = (function (){var statearr_16962 = state_16910;
(statearr_16962[(13)] = inst_16900);

return statearr_16962;
})();
var statearr_16965_18488 = state_16910__$1;
(statearr_16965_18488[(2)] = inst_16904);

(statearr_16965_18488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (10))){
var inst_16890 = (state_16910[(2)]);
var state_16910__$1 = state_16910;
var statearr_16967_18489 = state_16910__$1;
(statearr_16967_18489[(2)] = inst_16890);

(statearr_16967_18489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16911 === (8))){
var inst_16879 = (state_16910[(11)]);
var inst_16870 = (state_16910[(8)]);
var tmp16959 = inst_16870;
var inst_16870__$1 = tmp16959;
var inst_16871 = inst_16879;
var state_16910__$1 = (function (){var statearr_16970 = state_16910;
(statearr_16970[(7)] = inst_16871);

(statearr_16970[(8)] = inst_16870__$1);

return statearr_16970;
})();
var statearr_16973_18491 = state_16910__$1;
(statearr_16973_18491[(2)] = null);

(statearr_16973_18491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_16975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16975[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_16975[(1)] = (1));

return statearr_16975;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_16910){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_16910);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e16977){var ex__13518__auto__ = e16977;
var statearr_16978_18509 = state_16910;
(statearr_16978_18509[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_16910[(4)]))){
var statearr_16979_18510 = state_16910;
(statearr_16979_18510[(1)] = cljs.core.first((state_16910[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18512 = state_16910;
state_16910 = G__18512;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_16910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_16910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_16980 = f__13742__auto__();
(statearr_16980[(6)] = c__13741__auto___18452);

return statearr_16980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16982 = arguments.length;
switch (G__16982) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13741__auto___18516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13742__auto__ = (function (){var switch__13514__auto__ = (function (state_17032){
var state_val_17033 = (state_17032[(1)]);
if((state_val_17033 === (7))){
var inst_17028 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17034_18517 = state_17032__$1;
(statearr_17034_18517[(2)] = inst_17028);

(statearr_17034_18517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (1))){
var inst_16986 = [];
var inst_16987 = inst_16986;
var inst_16988 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17032__$1 = (function (){var statearr_17035 = state_17032;
(statearr_17035[(7)] = inst_16988);

(statearr_17035[(8)] = inst_16987);

return statearr_17035;
})();
var statearr_17036_18520 = state_17032__$1;
(statearr_17036_18520[(2)] = null);

(statearr_17036_18520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (4))){
var inst_16992 = (state_17032[(9)]);
var inst_16992__$1 = (state_17032[(2)]);
var inst_16993 = (inst_16992__$1 == null);
var inst_16994 = cljs.core.not(inst_16993);
var state_17032__$1 = (function (){var statearr_17038 = state_17032;
(statearr_17038[(9)] = inst_16992__$1);

return statearr_17038;
})();
if(inst_16994){
var statearr_17039_18522 = state_17032__$1;
(statearr_17039_18522[(1)] = (5));

} else {
var statearr_17040_18523 = state_17032__$1;
(statearr_17040_18523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (15))){
var inst_16987 = (state_17032[(8)]);
var inst_17020 = cljs.core.vec(inst_16987);
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17032__$1,(18),out,inst_17020);
} else {
if((state_val_17033 === (13))){
var inst_17015 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17044_18527 = state_17032__$1;
(statearr_17044_18527[(2)] = inst_17015);

(statearr_17044_18527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (6))){
var inst_16987 = (state_17032[(8)]);
var inst_17017 = inst_16987.length;
var inst_17018 = (inst_17017 > (0));
var state_17032__$1 = state_17032;
if(cljs.core.truth_(inst_17018)){
var statearr_17045_18529 = state_17032__$1;
(statearr_17045_18529[(1)] = (15));

} else {
var statearr_17049_18530 = state_17032__$1;
(statearr_17049_18530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (17))){
var inst_17025 = (state_17032[(2)]);
var inst_17026 = cljs.core.async.close_BANG_(out);
var state_17032__$1 = (function (){var statearr_17052 = state_17032;
(statearr_17052[(10)] = inst_17025);

return statearr_17052;
})();
var statearr_17054_18531 = state_17032__$1;
(statearr_17054_18531[(2)] = inst_17026);

(statearr_17054_18531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (3))){
var inst_17030 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17032__$1,inst_17030);
} else {
if((state_val_17033 === (12))){
var inst_16987 = (state_17032[(8)]);
var inst_17008 = cljs.core.vec(inst_16987);
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17032__$1,(14),out,inst_17008);
} else {
if((state_val_17033 === (2))){
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17032__$1,(4),ch);
} else {
if((state_val_17033 === (11))){
var inst_16996 = (state_17032[(11)]);
var inst_16992 = (state_17032[(9)]);
var inst_16987 = (state_17032[(8)]);
var inst_17005 = inst_16987.push(inst_16992);
var tmp17058 = inst_16987;
var inst_16987__$1 = tmp17058;
var inst_16988 = inst_16996;
var state_17032__$1 = (function (){var statearr_17059 = state_17032;
(statearr_17059[(7)] = inst_16988);

(statearr_17059[(12)] = inst_17005);

(statearr_17059[(8)] = inst_16987__$1);

return statearr_17059;
})();
var statearr_17062_18533 = state_17032__$1;
(statearr_17062_18533[(2)] = null);

(statearr_17062_18533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (9))){
var inst_16988 = (state_17032[(7)]);
var inst_17001 = cljs.core.keyword_identical_QMARK_(inst_16988,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17032__$1 = state_17032;
var statearr_17067_18535 = state_17032__$1;
(statearr_17067_18535[(2)] = inst_17001);

(statearr_17067_18535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (5))){
var inst_16998 = (state_17032[(13)]);
var inst_16996 = (state_17032[(11)]);
var inst_16992 = (state_17032[(9)]);
var inst_16988 = (state_17032[(7)]);
var inst_16996__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16992) : f.call(null,inst_16992));
var inst_16998__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16996__$1,inst_16988);
var state_17032__$1 = (function (){var statearr_17068 = state_17032;
(statearr_17068[(13)] = inst_16998__$1);

(statearr_17068[(11)] = inst_16996__$1);

return statearr_17068;
})();
if(inst_16998__$1){
var statearr_17069_18536 = state_17032__$1;
(statearr_17069_18536[(1)] = (8));

} else {
var statearr_17070_18537 = state_17032__$1;
(statearr_17070_18537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (14))){
var inst_16996 = (state_17032[(11)]);
var inst_16992 = (state_17032[(9)]);
var inst_17010 = (state_17032[(2)]);
var inst_17011 = [];
var inst_17012 = inst_17011.push(inst_16992);
var inst_16987 = inst_17011;
var inst_16988 = inst_16996;
var state_17032__$1 = (function (){var statearr_17075 = state_17032;
(statearr_17075[(14)] = inst_17010);

(statearr_17075[(7)] = inst_16988);

(statearr_17075[(15)] = inst_17012);

(statearr_17075[(8)] = inst_16987);

return statearr_17075;
})();
var statearr_17083_18538 = state_17032__$1;
(statearr_17083_18538[(2)] = null);

(statearr_17083_18538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (16))){
var state_17032__$1 = state_17032;
var statearr_17088_18540 = state_17032__$1;
(statearr_17088_18540[(2)] = null);

(statearr_17088_18540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (10))){
var inst_17003 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
if(cljs.core.truth_(inst_17003)){
var statearr_17089_18541 = state_17032__$1;
(statearr_17089_18541[(1)] = (11));

} else {
var statearr_17090_18542 = state_17032__$1;
(statearr_17090_18542[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (18))){
var inst_17022 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17091_18543 = state_17032__$1;
(statearr_17091_18543[(2)] = inst_17022);

(statearr_17091_18543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (8))){
var inst_16998 = (state_17032[(13)]);
var state_17032__$1 = state_17032;
var statearr_17092_18544 = state_17032__$1;
(statearr_17092_18544[(2)] = inst_16998);

(statearr_17092_18544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13515__auto__ = null;
var cljs$core$async$state_machine__13515__auto____0 = (function (){
var statearr_17101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17101[(0)] = cljs$core$async$state_machine__13515__auto__);

(statearr_17101[(1)] = (1));

return statearr_17101;
});
var cljs$core$async$state_machine__13515__auto____1 = (function (state_17032){
while(true){
var ret_value__13516__auto__ = (function (){try{while(true){
var result__13517__auto__ = switch__13514__auto__(state_17032);
if(cljs.core.keyword_identical_QMARK_(result__13517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13517__auto__;
}
break;
}
}catch (e17104){var ex__13518__auto__ = e17104;
var statearr_17105_18545 = state_17032;
(statearr_17105_18545[(2)] = ex__13518__auto__);


if(cljs.core.seq((state_17032[(4)]))){
var statearr_17114_18546 = state_17032;
(statearr_17114_18546[(1)] = cljs.core.first((state_17032[(4)])));

} else {
throw ex__13518__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18550 = state_17032;
state_17032 = G__18550;
continue;
} else {
return ret_value__13516__auto__;
}
break;
}
});
cljs$core$async$state_machine__13515__auto__ = function(state_17032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13515__auto____1.call(this,state_17032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13515__auto____0;
cljs$core$async$state_machine__13515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13515__auto____1;
return cljs$core$async$state_machine__13515__auto__;
})()
})();
var state__13743__auto__ = (function (){var statearr_17130 = f__13742__auto__();
(statearr_17130[(6)] = c__13741__auto___18516);

return statearr_17130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13743__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
