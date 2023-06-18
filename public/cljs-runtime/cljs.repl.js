goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18760){
var map__18761 = p__18760;
var map__18761__$1 = cljs.core.__destructure_map(map__18761);
var m = map__18761__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18761__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18761__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18780_19175 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18781_19176 = null;
var count__18782_19177 = (0);
var i__18783_19178 = (0);
while(true){
if((i__18783_19178 < count__18782_19177)){
var f_19179 = chunk__18781_19176.cljs$core$IIndexed$_nth$arity$2(null,i__18783_19178);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19179], 0));


var G__19180 = seq__18780_19175;
var G__19181 = chunk__18781_19176;
var G__19182 = count__18782_19177;
var G__19183 = (i__18783_19178 + (1));
seq__18780_19175 = G__19180;
chunk__18781_19176 = G__19181;
count__18782_19177 = G__19182;
i__18783_19178 = G__19183;
continue;
} else {
var temp__5804__auto___19184 = cljs.core.seq(seq__18780_19175);
if(temp__5804__auto___19184){
var seq__18780_19185__$1 = temp__5804__auto___19184;
if(cljs.core.chunked_seq_QMARK_(seq__18780_19185__$1)){
var c__5568__auto___19186 = cljs.core.chunk_first(seq__18780_19185__$1);
var G__19187 = cljs.core.chunk_rest(seq__18780_19185__$1);
var G__19188 = c__5568__auto___19186;
var G__19189 = cljs.core.count(c__5568__auto___19186);
var G__19190 = (0);
seq__18780_19175 = G__19187;
chunk__18781_19176 = G__19188;
count__18782_19177 = G__19189;
i__18783_19178 = G__19190;
continue;
} else {
var f_19191 = cljs.core.first(seq__18780_19185__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19191], 0));


var G__19192 = cljs.core.next(seq__18780_19185__$1);
var G__19193 = null;
var G__19194 = (0);
var G__19195 = (0);
seq__18780_19175 = G__19192;
chunk__18781_19176 = G__19193;
count__18782_19177 = G__19194;
i__18783_19178 = G__19195;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19196 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19196], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19196)))?cljs.core.second(arglists_19196):arglists_19196)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18879_19199 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18880_19200 = null;
var count__18881_19201 = (0);
var i__18882_19202 = (0);
while(true){
if((i__18882_19202 < count__18881_19201)){
var vec__18953_19203 = chunk__18880_19200.cljs$core$IIndexed$_nth$arity$2(null,i__18882_19202);
var name_19204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18953_19203,(0),null);
var map__18956_19205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18953_19203,(1),null);
var map__18956_19206__$1 = cljs.core.__destructure_map(map__18956_19205);
var doc_19207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18956_19206__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18956_19206__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19204], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19208], 0));

if(cljs.core.truth_(doc_19207)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19207], 0));
} else {
}


var G__19210 = seq__18879_19199;
var G__19211 = chunk__18880_19200;
var G__19212 = count__18881_19201;
var G__19213 = (i__18882_19202 + (1));
seq__18879_19199 = G__19210;
chunk__18880_19200 = G__19211;
count__18881_19201 = G__19212;
i__18882_19202 = G__19213;
continue;
} else {
var temp__5804__auto___19215 = cljs.core.seq(seq__18879_19199);
if(temp__5804__auto___19215){
var seq__18879_19216__$1 = temp__5804__auto___19215;
if(cljs.core.chunked_seq_QMARK_(seq__18879_19216__$1)){
var c__5568__auto___19217 = cljs.core.chunk_first(seq__18879_19216__$1);
var G__19218 = cljs.core.chunk_rest(seq__18879_19216__$1);
var G__19219 = c__5568__auto___19217;
var G__19220 = cljs.core.count(c__5568__auto___19217);
var G__19221 = (0);
seq__18879_19199 = G__19218;
chunk__18880_19200 = G__19219;
count__18881_19201 = G__19220;
i__18882_19202 = G__19221;
continue;
} else {
var vec__18979_19222 = cljs.core.first(seq__18879_19216__$1);
var name_19223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18979_19222,(0),null);
var map__18982_19224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18979_19222,(1),null);
var map__18982_19225__$1 = cljs.core.__destructure_map(map__18982_19224);
var doc_19226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18982_19225__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18982_19225__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19223], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19227], 0));

if(cljs.core.truth_(doc_19226)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19226], 0));
} else {
}


var G__19229 = cljs.core.next(seq__18879_19216__$1);
var G__19230 = null;
var G__19231 = (0);
var G__19232 = (0);
seq__18879_19199 = G__19229;
chunk__18880_19200 = G__19230;
count__18881_19201 = G__19231;
i__18882_19202 = G__19232;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18988 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18989 = null;
var count__18990 = (0);
var i__18991 = (0);
while(true){
if((i__18991 < count__18990)){
var role = chunk__18989.cljs$core$IIndexed$_nth$arity$2(null,i__18991);
var temp__5804__auto___19233__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19233__$1)){
var spec_19234 = temp__5804__auto___19233__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19234)], 0));
} else {
}


var G__19235 = seq__18988;
var G__19236 = chunk__18989;
var G__19237 = count__18990;
var G__19238 = (i__18991 + (1));
seq__18988 = G__19235;
chunk__18989 = G__19236;
count__18990 = G__19237;
i__18991 = G__19238;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18988);
if(temp__5804__auto____$1){
var seq__18988__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18988__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18988__$1);
var G__19239 = cljs.core.chunk_rest(seq__18988__$1);
var G__19240 = c__5568__auto__;
var G__19241 = cljs.core.count(c__5568__auto__);
var G__19242 = (0);
seq__18988 = G__19239;
chunk__18989 = G__19240;
count__18990 = G__19241;
i__18991 = G__19242;
continue;
} else {
var role = cljs.core.first(seq__18988__$1);
var temp__5804__auto___19243__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19243__$2)){
var spec_19244 = temp__5804__auto___19243__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19244)], 0));
} else {
}


var G__19245 = cljs.core.next(seq__18988__$1);
var G__19246 = null;
var G__19247 = (0);
var G__19248 = (0);
seq__18988 = G__19245;
chunk__18989 = G__19246;
count__18990 = G__19247;
i__18991 = G__19248;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19264 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19265 = cljs.core.ex_cause(t);
via = G__19264;
t = G__19265;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19020 = datafied_throwable;
var map__19020__$1 = cljs.core.__destructure_map(map__19020);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19020__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19020__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19020__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19021 = cljs.core.last(via);
var map__19021__$1 = cljs.core.__destructure_map(map__19021);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19021__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19021__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19021__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19022 = data;
var map__19022__$1 = cljs.core.__destructure_map(map__19022);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19022__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19022__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19022__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19023 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19023__$1 = cljs.core.__destructure_map(map__19023);
var top_data = map__19023__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19023__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19027 = phase;
var G__19027__$1 = (((G__19027 instanceof cljs.core.Keyword))?G__19027.fqn:null);
switch (G__19027__$1) {
case "read-source":
var map__19028 = data;
var map__19028__$1 = cljs.core.__destructure_map(map__19028);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19028__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19028__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19029 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19029__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19029,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19029);
var G__19029__$2 = (cljs.core.truth_((function (){var fexpr__19037 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19037.cljs$core$IFn$_invoke$arity$1 ? fexpr__19037.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19037.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19029__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19029__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19029__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19029__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19040 = top_data;
var G__19040__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19040,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19040);
var G__19040__$2 = (cljs.core.truth_((function (){var fexpr__19045 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19045.cljs$core$IFn$_invoke$arity$1 ? fexpr__19045.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19045.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19040__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19040__$1);
var G__19040__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19040__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19040__$2);
var G__19040__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19040__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19040__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19040__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19040__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19046 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046,(3),null);
var G__19049 = top_data;
var G__19049__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19049,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19049);
var G__19049__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19049__$1);
var G__19049__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19049__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19049__$2);
var G__19049__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19049__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19049__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19049__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19049__$4;
}

break;
case "execution":
var vec__19057 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19017_SHARP_){
var or__5045__auto__ = (p1__19017_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19063 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19063.cljs$core$IFn$_invoke$arity$1 ? fexpr__19063.cljs$core$IFn$_invoke$arity$1(p1__19017_SHARP_) : fexpr__19063.call(null,p1__19017_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19065 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19065__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19065,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19065);
var G__19065__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19065__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19065__$1);
var G__19065__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19065__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19065__$2);
var G__19065__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19065__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19065__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19065__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19065__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19027__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19113){
var map__19114 = p__19113;
var map__19114__$1 = cljs.core.__destructure_map(map__19114);
var triage_data = map__19114__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19115 = phase;
var G__19115__$1 = (((G__19115 instanceof cljs.core.Keyword))?G__19115.fqn:null);
switch (G__19115__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19116 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19117 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19118 = loc;
var G__19119 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19120_19391 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19121_19392 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19122_19393 = true;
var _STAR_print_fn_STAR__temp_val__19123_19394 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19122_19393);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19123_19394);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19107_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19107_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19121_19392);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19120_19391);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19116,G__19117,G__19118,G__19119) : format.call(null,G__19116,G__19117,G__19118,G__19119));

break;
case "macroexpansion":
var G__19129 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19130 = cause_type;
var G__19131 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19132 = loc;
var G__19133 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19129,G__19130,G__19131,G__19132,G__19133) : format.call(null,G__19129,G__19130,G__19131,G__19132,G__19133));

break;
case "compile-syntax-check":
var G__19134 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19135 = cause_type;
var G__19136 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19137 = loc;
var G__19138 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19134,G__19135,G__19136,G__19137,G__19138) : format.call(null,G__19134,G__19135,G__19136,G__19137,G__19138));

break;
case "compilation":
var G__19139 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19140 = cause_type;
var G__19141 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19142 = loc;
var G__19143 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19139,G__19140,G__19141,G__19142,G__19143) : format.call(null,G__19139,G__19140,G__19141,G__19142,G__19143));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19145 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19146 = symbol;
var G__19147 = loc;
var G__19148 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19153_19403 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19154_19404 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19155_19405 = true;
var _STAR_print_fn_STAR__temp_val__19156_19406 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19155_19405);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19156_19406);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19109_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19109_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19154_19404);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19153_19403);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19145,G__19146,G__19147,G__19148) : format.call(null,G__19145,G__19146,G__19147,G__19148));
} else {
var G__19166 = "Execution error%s at %s(%s).\n%s\n";
var G__19167 = cause_type;
var G__19168 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19169 = loc;
var G__19170 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19166,G__19167,G__19168,G__19169,G__19170) : format.call(null,G__19166,G__19167,G__19168,G__19169,G__19170));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19115__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
