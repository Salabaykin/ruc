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