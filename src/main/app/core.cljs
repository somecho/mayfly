(ns app.core
  (:require [reagent.dom :as rdom]
            [app.theme :as theme]
            [app.status :refer [status]]))

(defn main
  "The main container"
  []
  [:div#main
   {:style {:min-width :360px
            :width :60dvw
            :max-width :800px
            :margin :auto}}
   [status]])

(defn app
  "Root app"
  []
  [:div#app
   {:style {:background theme/bg
            :height :100dvh}}
   [main]])

(rdom/render [app] (.getElementById js/document "root"))
