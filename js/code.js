function entry() {
    let browser = 'Browser name: ' + visitor.browser.name + ' ' + visitor.browser.versionMajor + '.' + visitor.browser.versionMinor;

    let device = 'Device: ' + visitor.device.name + ' : ' + visitor.device.screen.resolution + ' - ' + visitor.device.screen.width + 'x' + visitor.device.screen.height;

    let geo = 'Geo: ' + visitor.geo.continentName + ' (' + visitor.geo.continentCode + '), '
        + visitor.geo.countryName + ' (' + visitor.geo.countryCode + '), '
        + visitor.geo.city + ' [' + visitor.geo.coordinates.latitude + ' - ' + visitor.geo.coordinates.longitude + ']';

    let ip = 'IP address: ' + visitor.ip.address;

    let locale = 'Locale: ' + visitor.locale.countryCode + ' ' + visitor.locale.languageCode;

    let os = 'OS: ' + visitor.os.name + ' ' + visitor.os.version;
}

function animate(element, text, opacity_from, opacity_to, callback) {
    let $element = $(element);
    $element.text(text);

    let timeout = 1500;

    $element.animate({
        opacity: opacity_from,
    }, timeout, function () {
        $element.animate({
            opacity: opacity_to,
        }, timeout, callback);
    });
}

function schedule(element, lines) {
    let size = lines.length;

    let chain = new Array(size);
    chain[size - 1] = function () {
        animate(element, lines[size - 1], 1, 0);
    };

    for (let index = size - 2; index >= 0; index--) {
        chain[index] = function () {
            animate(element, lines[index], 1, 0, chain[index + 1]);
        }
    }

    chain[0](); // start chain
}

$(window).on("load", function() {
    entry();

    schedule($('#text'), [
        'Свободный интернет',
        'Свободный интернет',
        'Свободный интернет',
        '16 июля, 19:00',
        'Get Together'
    ]);
});