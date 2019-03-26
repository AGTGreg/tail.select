/*
 |  tail.select - Another solution to make select fields beautiful again!
 |  @file       ./langs/tail.select-all.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.5.9 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.select
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2014 - 2019 SamBrishes, pytesNET <info@pytes.net>
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
    select.strings.register("de", {
        all: "Alle",
        none: "Keine",
        actionAll: "Alle auswählen",
        actionNone: "Alle abwählen",
        empty: "Keine Optionen verfügbar",
        emptySearch: "Keine Optionen gefunden",
        limit: "Keine weiteren Optionen wählbar",
        placeholder: "Wähle eine Option...",
        placeholderMulti: "Wähle bis zu :limit Optionen...",
        search: "Tippen zum suchen",
        disabled: "Dieses Feld ist deaktiviert"
    });

    /*
     |  Translator:     elPesecillo - (https://github.com/elPesecillo)
     |  GitHub:         https://github.com/pytesNET/tail.select/issues/41
     */
    select.strings.register("es", {
        all: "Todos",
        none: "Ninguno",
        actionAll: "Seleccionar todo",
        actionNone: "Descartar todo",
        empty: "No hay opciones disponibles",
        emptySearch: "No se encontraron opciones",
        limit: "No puedes seleccionar mas opciones",
        placeholder: "Selecciona una opción...",
        placeholderMulti: "Selecciona hasta :límite de opciones...",
        search: "Escribe dentro para buscar...",
        disabled: "Este campo esta deshabilitado"
    });

    /*
     |  Translator:     Anthony Rabine - (https://github.com/arabine)
     |  GitHub:         https://github.com/pytesNET/tail.select/issues/11
     */
    select.strings.register("fr", {
        all: "Tous",
        none: "Aucun",
        actionAll: "Sélectionner tout",
        actionNone: "Sélectionner aucun",
        empty: "Aucune option disponible",
        emptySearch: "Aucune option trouvée",
        limit: "Aucune autre option sélectionnable",
        placeholder: "Choisissez une option ...",
        placeholderMulti: "Choisissez jusqu'à :limit option(s) ...",
        search: "Rechercher ...",
        disabled: "Ce champs est désactivé"
    });

    /*
     |  Translator:     Anthony Rabine - (https://github.com/arabine)
     |  GitHub:         https://github.com/pytesNET/tail.select/issues/11
     */
    select.strings.register("pt_BR", {
        all: "Todas",
        none: "Nenhuma",
        actionAll: "Selecionar todas",
        actionNone: "Desmarcar todas",
        empty: "Nenhuma opção disponível",
        emptySearch: "Nenhuma opção encontrada",
        limit: "Não é possível selecionar outra opção",
        placeholder: "Escolha uma opção ...",
        placeholderMulti: "Escolha até: :limit opção(ões) ...",
        search: "Buscar ...",
        disabled: "Campo desativado"
    });

    /*
     |  Translator:     Roman Yepanchenko - (https://github.com/tizis)
     |  GitHub:         https://github.com/pytesNET/tail.select/issues/38
     */
    select.strings.register("ru", {
        all: "Все",
        none: "Ничего",
        actionAll: "Выбрать все",
        actionNone: "Отменить все",
        empty: "Нет доступных вариантов",
        emptySearch: "Ничего не найдено",
        limit: "Вы не можете выбрать больше вариантов",
        placeholder: "Выберите вариант...",
        placeholderMulti: function(args){
            var strings = ["варианта", "вариантов", "вариантов"], cases = [2, 0, 1, 1, 1, 2], num = args[":limit"];
            var string = strings[(num%100 > 4 && num%100 < 20)? 2: cases[(num%10 < 5)? num%10: 5]];
            return "Выбор до :limit " + string + " ...";
        },
        search: "Начните набирать для поиска ...",
        disabled: "Поле отключено"
    });
    return select;
}));