(ns app.core
  (:require [reagent.dom :as rdom]
            [app.db :as db]
            ["react" :as react]
            [app.theme :as theme]
            [app.status :refer [status]]))

(defn on-focus-out []
  (let [content (-> (.getElementById js/document "notes-content") .-innerHTML)]
    (js/console.log content)
    (reset! db/store (assoc @db/store :content content))))

(defn notes
  []
  (react/useEffect
   (fn []
     (set! (.-innerHTML (.getElementById js/document "notes-content"))
           (:content @db/store))
     #()))
  [:div#notes
   [:div#notes-content
    {:content-editable true
     ; to be used later for markdown conversion
     :on-focus (fn [] (js/console.log "FOCUS IN"))
     :on-blur on-focus-out
     :style {:outline :none
             :min-height :92dvh
             :padding "8px 0"}}]])

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
