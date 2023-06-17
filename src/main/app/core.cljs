(ns app.core
  (:require [reagent.dom :as rdom]
            [app.db :as db]
            [app.theme :as theme]
            [app.notes :refer [notes]]
            [app.status :refer [status]]))

(defn main []
  [:div#main {:style {:min-width :360px
                      :width :60dvw
                      :max-width :800px
                      :margin :auto}}
   [status]
   [notes]])

(defn app []
  [:div#app {:style {:background theme/bg
                     :height :100dvh}}
   [main]])

(db/init)
(rdom/render [app] (.getElementById js/document "root"))
