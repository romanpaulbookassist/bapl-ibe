
var PATH_URL_RANGEPICKER = 'https://bookassistpolska.pl/temp/hotelalpex/_rangepicker/hotelalpex/';
var IBEdate_in = '2020-09-14';
var IBEdate_out = '2099-10-30';
var IBEilosc_nocy = 0;
var IBEmin_stay = 0;
var IBEis_week = 0;
var IBEweek_start = '5,6';
var IBEweek_end = '7';
var IBEdate = new Date();
var IBEtoday = $.now();
var IBEnextday = new Date(IBEtoday+86400000);
var css_link = $("<link>", {
    rel: "stylesheet",
    type: "text/css",
    href: PATH_URL_RANGEPICKER + "/public/build/css/styles.css?ver=" + IBEtoday
});
css_link.appendTo('head');
var template = '<div class="container"><buton class="BAPLbtnBookassistReservationBoxClose">X</buton><form action="rezerwacjaBA.php"><div clas="rangepicker" data-rangepicker="data-rangepicker" data-rangepicker-format-date="DD MMM yyyy" data-rangepicker-param-format-date="yyyy-MM-DD"><div class="rangepicker__inner"><div class="rangepicker--title">PRZYJAZD</div><div class="rangepicker--departure" data-rangepicker-arrival="data-rangepicker-arrival"><input class="rangepicker--input rangepicker--hidden" type="date" data-rangepicker-initial="data-rangepicker-initial" /><input class="rangepicker--input rangepicker--hidden" type="text" name="date_in" data-rangepicker-hide-value="data-rangepicker-hide-value" /><input class="rangepicker--input" type="text" data-rangepicker-field="data-rangepicker-field" autocomplete="off" /><img class="rangepicker--icon" src="' + PATH_URL_RANGEPICKER + '/public/img/kalendarz.svg"></div></div><div class="rangepicker__inner"><div class="rangepicker--title">WYJAZD</div><div class="rangepicker--departure" data-rangepicker-departure="data-rangepicker-departure"><input class="rangepicker--input rangepicker--hidden" type="text" name="date_out" data-rangepicker-hide-value="data-rangepicker-hide-value" /><input class="rangepicker--input" type="text" data-rangepicker-field="data-rangepicker-field" autocomplete="off" /><img class="rangepicker--icon" src="' + PATH_URL_RANGEPICKER + '/public/img/kalendarz.svg" data-rangepicker-image="data-rangepicker-image"></div></div><div class="rangepicker__inner"><div class="rangepicker--title">LICZBA OSÓB</div><div class="rangepicker--departure"><select class="BAPLrms BAPLrangepicker" type="select" name="adults" /><option value="1">1</option><option value="2" selected="selected">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select></div><div class="rangepicker--title">LICZBA POKOI</div><div class="rangepicker--departure"><select class="BAPLrms BAPLrangepicker" type="select" name="rms" /><option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><div class="rangepicker--title BApromoCodeVisible">KOD POROCYJNY</div><div class="rangepicker--departure BApromoCodeVisible"><input type="text" class="BApromoCodeVisible form-control promocode" name="promocode" placeholder="KOD POROCYJNY" value=""></div></div><div class="rangepicker__inner"><button type="submit" class="RangePickerYellow btn btn-bapl">Sprawdź dostępność</button></div></div><div class="BAPLbenefitsTitle">Korzyści rezerwacji on-line</div><div class="BAPLBenefitsList"><ul><li>Najlepsze dostępne ceny</li><li>Rezerwacja bez pośredników i opłat</li><li>Niezwłoczne przetworzenie rezerwacji</li><li>Bezpośrednia pomoc ze strony personelu hotelu</li></ul></div></form></div>';

//window.jQuery || document.write('<script id="custom-rangepicker" src="' + PATH_URL_RANGEPICKER + '/public/build/js/scripts.js?lang=pl&date_in=' + IBEdate_in + '&date_out=' + IBEdate_in + '&ilosc_nocy=' + IBEdate_in + '&min_stay=' + IBEdate_in + '&is_week=' + IBEdate_in + '&week_start=' + IBEdate_in + '&week_end=' + IBEdate_in + '&ver=' + IBEdate_in + '" />');

//$(".BAPLsectionsCallendarBookassis").html(template);

$( ".BAPLbtnBookassistReservationBox" ).click(function() {
    $( ".BAPLsectionsCallendarBookassis" ).slideToggle( "slow" );
});

$(".BAPLbtnBookassistReservationBoxClose").click(function(){
    $(".BAPLsectionsCallendarBookassis").slideToggle('BAPLBoxshowvisible');
});
