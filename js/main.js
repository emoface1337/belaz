function init(){

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [55.710124, 37.654601],
        zoom: 16,
        controls: []
    });

    myMap.geoObjects.add(new ymaps.Placemark([55.710124, 37.654601], {
        // balloonContent: 'цвет <strong>голубой</strong>',
        iconCaption: 'ул Ленинская Слобода, 26'
    }, {
        preset: 'islands#blueCircleDotIconWithCaption',
        iconCaptionMaxWidth: '100%'
    }));

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');

    myMap.events.once('click', function () {
        myMap.behaviors
            .enable('scrollZoom')
            .enable('multiTouch');
    });



}
ymaps.ready(init);