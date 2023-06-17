(ns app.db
  (:require [reagent.core :as r]
            [app.date :as date]))

(defonce store (r/atom {}))

(defn init []
  (let [content (.getItem js/localStorage "content")
        last-updated (.getItem js/localStorage "lastUpdated")]
    (when content (reset! store (assoc @store :content content)))
    (when (and last-updated
               (not= last-updated (date/get-date-today)))
      (reset! store (assoc @store :content "")))))

(defn on-store-change
  [key atom old new]
  (.setItem js/localStorage "content" (:content new))
  (.setItem js/localStorage "lastUpdated" (:last-updated new)))

(add-watch store :watcher on-store-change)
