(ns app.notes
  (:require [app.db :as db]
            [app.theme :as theme]
            [reagent.core :as r]
            [nextjournal.markdown :as md]
            [nextjournal.markdown.transform :as md.transform]))

(defn on-focus-out [e focused]
  (let [content (-> e .-target .-value)]
    (swap! focused not)
    (reset! db/store (assoc @db/store :content content))))

(defn on-change [e content]
  (reset! content (-> e .-target .-value))
  (reset! db/store (assoc @db/store :content @content)))

(defn notes
  []
  (let [content (r/atom (:content @db/store))
        focused (r/atom false)
        padding "8px 0"
        min-height :92dvh]
    (fn []
      [:div#notes
       (if @focused
         [:textarea#notes-content
          {:auto-focus true
           :on-blur (fn [e] (on-focus-out e focused))
           :on-change (fn [e] (on-change e content))
           :value @content
           :style {:outline :none
                   :width :100%
                   :border :none
                   :font-size :16px
                   :background theme/bg
                   :min-height min-height
                   :padding padding}}]
         [:div {:tab-index 0
                :style {:padding padding
                        :min-height min-height}
                :on-focus #(swap! focused not)}
          (md.transform/->hiccup (md/parse @content))])])))


