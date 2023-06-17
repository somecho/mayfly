(ns app.status
  (:require [app.theme :as theme]
            [app.db :as db]
            [app.date :as date]
            [clojure.string :as str]
            [reagent.core :as r]))

(defn date-status
  []
  (let [date (js/Date.)
        day (nth date/days-short (dec (.getDay date)))
        day-of-month (date/get-day)
        month (date/get-month)]
    [:div (str day " " day-of-month "/" month)]))

(defn reset-status
  []
  (let [now (r/atom (.getTime (js/Date.)))]
    (fn []
      (js/setInterval (fn [] (reset! now (.getTime (js/Date.)))) 1000)
      (let [today  (-> (js/Date. (date/get-date-today)) .getTime)
            tomorrow (+ today date/interval)
            remaining (- tomorrow @now)]
        [:div (date/millis-to-time remaining)]))))

(defn character-status
  []
  (let [characters (-> (:content @db/store)
                       (str/split #"")
                       (as-> all-chars
                             (filter #(not= " " %) all-chars))
                       (rest))]
    [:div (str (count characters) " characters")]))

(defn separator [] [:div "❯"])

(defn status
  "The status bar"
  []
  [:div
   [:div
    {:style {:color theme/secondary
             :padding "8px 0"
             :gap :4px
             :display :flex}}
    [date-status]
    [separator]
    [reset-status]
    [separator]
    [character-status]]
   [:hr {:style {:border-top (str "1px solid " theme/secondary)}}]])


