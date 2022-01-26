var arrLang = {
    'ru': {

        'key':'value',
    },

    'en': {
        'key':'value',

    },
}

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});