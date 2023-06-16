(ns app.core
  (:require [reagent.dom :as rdom]
            [app.theme :as theme]
            [app.status :refer [status]]))

(defn notes
  []
  [:div#notes
   [:div {:content-editable true
          ; to be used later for markdown conversion
          :on-focus (fn [] (js/console.log "FOCUS IN"))
          :on-blur (fn [] (js/console.log "FOCUS OUT"))
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
   [notes]])

(defn app
  "Root app"
  []
  [:div#app
   {:style {:background theme/bg
            :height :100dvh}}
   [main]])

(rdom/render [app] (.getElementById js/document "root"))
