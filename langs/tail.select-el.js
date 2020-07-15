/*
 |  tail.select - The vanilla solution to make your HTML select fields AWESOME!
 |  @file       ./langs/tail.select-it.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.5.16 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.select
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2014 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */
/*
 |  Translator:     Grigoris Chatzinikolaou - (https://github.com/AGTGreg)
 |  GitHub:         --
 */
;(function(factory){
  if(typeof(define) == "function" && define.amd){
      define(function(){
          return function(select){ factory(select); };
      });
  } else {
      if(typeof(window.tail) != "undefined" && window.tail.select){
          factory(window.tail.select);
      }
  }
}(function(select){
   select.strings.register("el", {
       all: "Όλα",
       none: "Κανένα",
       empty: "Δεν υπάρχουν διαθέσιμες επιλογές",
       emptySearch: "Δεν βρέθηκαν επιλογές",
       limit: "Δεν υπάρχει δυνατότητα άλλης επιλογής",
       placeholder: "Επιλογή",
       placeholderMulti: "Διαλέξτε εώς :limit Επιλογές...",
       search: "Αναζήτηση...",
       disabled: "Απενεργοποιημένο"
   });
   return select;
}));
