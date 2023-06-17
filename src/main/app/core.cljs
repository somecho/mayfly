(ns app.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [nextjournal.markdown :as md]
            [nextjournal.markdown.transform :as md.transform]
            [app.db :as db]
            [app.theme :as theme]
            [app.status :refer [status]]))

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
        focused (r/atom false)]
    (fn []
      [:div#notes
       (if @focused
         [:textarea#notes-content
          {:on-focus (fn [])
           :auto-focus true
           :on-blur (fn [e] (on-focus-out e focused))
           :on-change (fn [e] (on-change e content))
           :value @content
           :style {:outline :none
                   :width :100%
                   :border :none
                   :font-size :16px
                   :background theme/bg
                   :min-height :92dvh
                   :padding "8px 0"}}]
         [:div {:tab-index 0
                :style {:padding "8px 0"
                        :min-height :92dvh}
                :on-focus #(swap! focused not)}
          (md.transform/->hiccup (md/parse @content))])])))

(defn main
  "The main container"
  []
  [:div#main
   {:style {:min-width :360px
            :width :60dvw
            :max-width :800px
            :margin :auto}}
   [status]
   [:f> notes]])

(defn app
  "Root app"
  []
  [:div#app
   {:style {:background theme/bg
            :height :100dvh}}
   [main]])

(db/init)
(rdom/render [app] (.getElementById js/document "root"))
