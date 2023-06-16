(ns app.db
  (:require [reagent.core :as r]))

(defonce store (r/atom {}))

(defn init []
  (let [content (.getItem js/localStorage "content")]
    (when content
      (reset! store (assoc @store :content content)))))

(defn on-store-change
  [key atom old new]
  (.setItem js/localStorage "content" (:content new)))

(add-watch store :watcher on-store-change)
