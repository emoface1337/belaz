document.addEventListener("DOMContentLoaded", () => {
    ymaps.ready(init);
})

const init = () => {
    var map = new ymaps.Map("map", {
        center: [64.54453794023053, 40.515659992065345],
        zoom: 17,
        controls: [],
        behaviors: ['drag']
    });
    var placemark = new ymaps.Placemark([64.54454255732554, 40.51540249999992], {
        iconCaption: 'Проспект Троицкий, 65'
    });
    map.geoObjects.add(placemark)
}