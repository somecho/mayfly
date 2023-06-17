(ns app.date)

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


