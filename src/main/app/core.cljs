(ns app.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            ["react" :as react]
            [app.db :as db]
            [app.theme :as theme]
            [app.status :refer [status]]))

(defn on-focus-out [e]
  (let [content (-> e .-target .-value)]
    (js/console.log content)
    (reset! db/store (assoc @db/store :content content))))

(defn notes
  []
  (let [content (r/atom (:content @db/store))]
    (fn []
      [:div#notes
       [:textarea#notes-content
        {:on-focus (fn [] (js/console.log "FOCUS IN"))
         :on-blur on-focus-out
         :on-change #(reset! content (-> % .-target .-value))
         :value @content
         :style {:outline :none
                 :width :100%
                 :border :none
                 :font-size :16px
                 :background theme/bg
                 :min-height :92dvh
                 :padding "8px 0"}}]])))

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
