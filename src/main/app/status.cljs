(ns app.status
  (:require [app.theme :as theme]
            [reagent.core :as r]))

(def days-short ["Mon" "Tue" "Wed" "Thu" "Fri" "Sat" "Sun"])

(def interval 86400000)
(defn pad [n] (-> n .toString (.padStart "2" "0")))
(defn get-day [] (-> (js/Date.) .getDate pad))
(defn get-month [] (-> (js/Date.) .getMonth inc pad))
(defn get-year [] (-> (js/Date.) .getUTCFullYear))
(defn get-date-today [] (str (get-year) "-" (get-month) "-" (get-day)))
(defn millis-to-time [ms]
  (let [total-seconds (/ ms 1000)
        total-minutes (/ total-seconds 60)
        ;todo: why minus 2?
        total-hours (- (/ total-minutes 60) 2)
        hours (Math/floor total-hours)
        minutes (Math/floor (mod total-minutes 60))
        seconds (-> (Math/floor (mod total-seconds 60)) pad)]
    (str hours ":" minutes ":" seconds)))

(defn date-status
  []
  (let [date (js/Date.)
        day (nth days-short (.getDay date))
        day-of-month (get-day)
        month (get-month)]
    [:div (str day " " day-of-month "/" month)]))

(defn reset-status
  []
  (let [now (r/atom (.getTime (js/Date.)))]
    (fn []
      (js/setInterval (fn [] (reset! now (.getTime (js/Date.)))) 1000)
      (let [today  (-> (js/Date. (get-date-today)) .getTime)
            tomorrow (+ today interval)
            remaining (- tomorrow @now)]
        [:div (millis-to-time remaining)]))))

(defn character-status
  []
  [:div "0 characters"])

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


