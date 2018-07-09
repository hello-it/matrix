function entry() {
    $('#1').text('Browser name: ' + visitor.browser.name + ' ' + visitor.browser.versionMajor + '.' + visitor.browser.versionMinor);

    $('#2').text('Device: ' + visitor.device.name + ' : ' + visitor.device.screen.resolution + ' - ' + visitor.device.screen.width + 'x' + visitor.device.screen.height);

    $('#3').text('First session: ' + visitor.firstSession.sessionStart + ' - '
        + visitor.firstSession.referral.url.path); // ?

    $('#4').text('Geo: ' + visitor.geo.continentName + ' (' + visitor.geo.continentCode + '), '
        + visitor.geo.countryName + ' (' + visitor.geo.countryCode + '), '
        + visitor.geo.city + ' [' + visitor.geo.coordinates.latitude + ' - ' + visitor.geo.coordinates.longitude + ']');

    $('#5').text('IP address: ' + visitor.ip.address);

    $('#6').text('Locale: ' + visitor.locale.countryCode + ' ' + visitor.locale.languageCode);

    $('#7').text('OS: ' + visitor.os.name + ' ' + visitor.os.version);

    $('#8').text('Session: ' + visitor.session.sessionStart + ' - '
        + visitor.session.referral.url.path); // ?
}

$(window).on("load", function() {
    entry();
});