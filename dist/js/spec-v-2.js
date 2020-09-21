/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function t(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        } catch (n) {}
    }

    function r(n, o) {
        var i = u.raw ? n : t(n);
        return e.isFunction(o) ? o(i) : i
    }
    var c = /\+/g,
        u = e.cookie = function (t, c, s) {
            if (arguments.length > 1 && !e.isFunction(c)) {
                if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) {
                    var a = s.expires,
                        d = s.expires = new Date;
                    d.setMilliseconds(d.getMilliseconds() + 864e5 * a)
                }
                return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
            }
            for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
                var x = p[l].split("="),
                    g = o(x.shift()),
                    j = x.join("=");
                if (t === g) {
                    f = r(j, c);
                    break
                }
                t || void 0 === (j = r(j)) || (f[g] = j)
            }
            return f
        };
    u.defaults = {}, e.removeCookie = function (n, o) {
        return e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })), !e.cookie(n)
    }
});
/* End */


;; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/modern_orange_s1/js/special_version.js?15911077584451";s:6:"source";s:56:"/bitrix/templates/modern_orange_s1/js/special_version.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function () {
    'use strict';
    $(document)
        .on('click', '.special-settings a', function (event) {
            event.preventDefault();
            setSpecialVersion($(this).data());
        })
        .on('click', '[data-aa-off]', function (event) {
            event.preventDefault();
            unsetSpecialVersion();
        })
        .on('click', '[data-aa-on]', function (event) {
            event.preventDefault();
            setDefaultsSpecialVersion();
        });

    jQuery(document).ready(function ($) {
        setSpecialVersion();
    });

    /**
     * Установка параметров отображения спецверсии
     * @param {object} data Объект с данными для формирования параметров
     */
    function setSpecialVersion(data) {
        var
            // получаем текущее значение переменной $.cookie.json;
            cookieJson = $.cookie.json,
            $html = $('html'),
            // Получаем текущее значение атрибута class и html.
            htmlCurrentClass = $html.prop('class'),
            // Удаляем старые классы у html, оставляем только чужие классы, это важно, 
            // т.к. классы добавляем не только мы.
            clearSpecialClasses = htmlCurrentClass.replace(/special-([a-z,A-Z,-]+)/g, ''),
            // Признак включенной спецверсии, он же специальный класс, который добавится к html
            $aaVersion = {
                'aaVersion': 'on'
            },
            // Переменная под новые классы.
            htmlClass = '';

        // Работаем с куками в json-формате	
        $.cookie.json = true;

        // Если переданы данные
        if (data) {
            // Объединяем существующие куки с новыми данными из ссылки.
            var $newCookies = $.extend($.cookie('aaSet'), data, $aaVersion);

            // Записываем новую куку
            $.cookie('aaSet', $newCookies, {
                expires: 365,
                path: '/',
                secure: false
            });
        }

        // Удаляем ненужные классы a-current.
        $('.a-current').removeClass('a-current');

        // Если есть кука — работаем.
        if ($.cookie('aaSet')) {
            // Пробегаем по массыву из нашей куки
            $.each($.cookie('aaSet'), function (key, val) {
                // Формируем строку с добавляемыми классам (использовать тут .addClass — зло!)
                htmlClass += ' special-' + key + '-' + val;
                // Добавляем нужные классы a-current.
                $('.' + key + '-' + val).addClass('a-current');

            });

            $html
                // Заменяем текущий атрибут на очищенный от лишних классов.
                .prop('class', clearSpecialClasses)
                // Добавляем вновь сформированные классы.
                .addClass(htmlClass);

            // Возвращаем формат куков как было до нас.
            $.cookie.json = cookieJson;
        }


        return false;
    }

    /**
     * Отключение специальной версии сайта.
     */
    function unsetSpecialVersion() {
        var
            // Получаем значение класса тега html.
            htmlCurrentClass = $('html').prop('class'),
            // Очищаем от классов спецверсии
            clearSpecialClasses = htmlCurrentClass.replace(/special-([a-z,A-Z,-]+)/g, '');
        // Заменяем текущий атрибут на очищенный от лишних классов.
        $('html').prop('class', clearSpecialClasses);
        // Удаляем куки
        $.removeCookie('aaSet', {
            path: '/'
        });
    }

    /**
     * Установка дефолтных значений для спецверсии.
     * @param {object} params Объект с данными для формирования параметров.
     */
    function setDefaultsSpecialVersion(params) {
        // Задаём значения по умолчанию
        var $specialDefaults = {
            'aaVersion': 'on',
            'aaColor': 'black',
            'aaFontsize': 'small',
            'aaFont': 'times',
            'aaKerning': 'normal',
            'aaImage': 'on'
        };

        // Объединяем значения по умолчанию с переданными данными.
        var $setDefaulParams = $.extend($specialDefaults, params);

        // Вызываем setSpecialVersion, где и происходит весь процесс.
        setSpecialVersion($setDefaulParams);
    }

})();