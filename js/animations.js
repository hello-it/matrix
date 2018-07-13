function internet(element) {
    let lines = [];
    lines.push({element: element, text: 'Свободный интернет', to: 1, timeout: 1500});

    if (Math.random() >= 0.5) {
        lines = lines.concat([
            {element: element, text: 'Свободный интернет', to: 1, timeout: 1500},
            {element: element, text: 'Свободный интернет', to: 1, timeout: 100},
            {element: element, text: 'Свободны  интернет', to: 1, timeout: 100},
            {element: element, text: 'Свободн   интернет', to: 1, timeout: 100},
            {element: element, text: 'Свобод    интернет', to: 1, timeout: 100},
            {element: element, text: 'Свобо     интернет', to: 1, timeout: 100},
            {element: element, text: 'Своб      интернет', to: 1, timeout: 100},
            {element: element, text: 'Сво       интернет', to: 1, timeout: 100},
            {element: element, text: 'Св        интернет', to: 1, timeout: 100},
            {element: element, text: 'С         интернет', to: 1, timeout: 100},
            {element: element, text: '          интернет', to: 1, timeout: 100},
            {element: element, text: 'А         интернет', to: 1, timeout: 100},
            {element: element, text: 'Ан        интернет', to: 1, timeout: 100},
            {element: element, text: 'Ано       интернет', to: 1, timeout: 100},
            {element: element, text: 'Анон      интернет', to: 1, timeout: 100},
            {element: element, text: 'Анони     интернет', to: 1, timeout: 100},
            {element: element, text: 'Аноним    интернет', to: 1, timeout: 100},
            {element: element, text: 'Анонимн   интернет', to: 1, timeout: 100},
            {element: element, text: 'Анонимны  интернет', to: 1, timeout: 100},
            {element: element, text: 'Анонимный интернет', to: 1, timeout: 100}
        ]);
    } else {
        lines = lines.concat([
            {element: element, text: 'Свободный интернет', to: 1, timeout: 100},
            {element: element, text: ' вободный интернет', to: 1, timeout: 100},
            {element: element, text: '  ободный интернет', to: 1, timeout: 100},
            {element: element, text: '   бодный интернет', to: 1, timeout: 100},
            {element: element, text: '    одный интернет', to: 1, timeout: 100},
            {element: element, text: '     дный интернет', to: 1, timeout: 100},
            {element: element, text: '      ный интернет', to: 1, timeout: 100},
            {element: element, text: '       ый интернет', to: 1, timeout: 100},
            {element: element, text: '        й интернет', to: 1, timeout: 100},
            {element: element, text: '          интернет', to: 1, timeout: 100},
            {element: element, text: '        й интернет', to: 1, timeout: 100},
            {element: element, text: '       ый интернет', to: 1, timeout: 100},
            {element: element, text: '      ный интернет', to: 1, timeout: 100},
            {element: element, text: '     мный интернет', to: 1, timeout: 100},
            {element: element, text: '    имный интернет', to: 1, timeout: 100},
            {element: element, text: '   нимный интернет', to: 1, timeout: 100},
            {element: element, text: '  онимный интернет', to: 1, timeout: 100},
            {element: element, text: ' нонимный интернет', to: 1, timeout: 100},
            {element: element, text: 'Анонимный интернет', to: 1, timeout: 100}
        ]);
    }

    lines.push({element: element, text: 'Анонимный интернет', to: 0, timeout: 1500});
    return lines;
}

function questions(uc, c, dc) {
    let elements = shuffle([uc, c, dc]);

    return [
        {element: getRandomElement(elements), text: 'Персональные данные защищены', to: 1, timeout: 1000, blink: true},
        {element: getRandomElement(elements), text: 'Все личности анонимизированы', to: 1, timeout: 1000, blink: true},
        {element: getRandomElement(elements), text: 'Только государство имеет доступ', to: 1, timeout: 1000, blink: true},
        {element: getRandomElement(elements), text: 'к любым данным о нас...', to: 1, timeout: 1000, blink: true},


        {element: getRandomElement(elements), text: '', to: 0, timeout: 500},


        {element: getRandomElement(elements), text: 'Или нет?...', to: 1, timeout: 1000, blink: true},


        {element: getRandomElement(elements), text: '', to: 0, timeout: 500},
    ];
}

function information(ulc, urc, c, dlc, drc) {
    let browser = visitor.browser;
    let device = visitor.device;
    let geo = visitor.geo;
    let ip = visitor.ip;
    let os = visitor.os;

    let browser_text = browser.name + ' ' + browser.versionMajor + '.' + browser.versionMinor;

    let device_text = (device.name || 'Desktop') + ' (' + device.screen.resolution + ')';

    let geo_text = geo.continentName + ', ' + geo.countryName + ',<br/>'
        + ' (' + geo.coordinates.latitude + ' - ' + geo.coordinates.longitude + ')';

    let ip_text = ip.address;

    let os_text = os.name + ' ' + os.version;

    return [
        {element: ulc, text: geo_text, to: 1, timeout: 1000},
        {element: urc, text: os_text, to: 1, timeout: 1000},
        {element: c, text: ip_text, to: 1, timeout: 1000},
        {element: drc, text: device_text, to: 1, timeout: 1000},
        {element: dlc, text: browser_text, to: 1, timeout: 1000},

        {element: ulc, text: geo_text, to: 0, timeout: 1000},
        {element: urc, text: os_text, to: 0, timeout: 1000},
        {element: c, text: ip_text, to: 0, timeout: 1000},
        {element: drc, text: device_text, to: 0, timeout: 1000},
        {element: dlc, text: browser_text, to: 0, timeout: 1000}
    ];

}

function think(uc, c, dc) {
    let elements = shuffle([uc, c, dc]);

    return [
        {element: getRandomElement(elements), text: 'Вместе выясним', to: 1, timeout: 1000, blink: true},
        {element: getRandomElement(elements), text: 'как стать действительно анонимным', to: 1, timeout: 1000, blink: true},
        {element: getRandomElement(elements), text: 'и сохранить тайну переписки', to: 1, timeout: 1000, blink: true},

        {element: getRandomElement(elements), text: '...', to: 0, timeout: 1000},

        {element: c, text: 'Но каждый решает для себя...', to: 1, timeout: 1000, blink: true},

        {element: c, text: 'Приватность?', to: 1, timeout: 1000, blink: true},
        {element: c, text: 'или', to: 1, timeout: 500, blink: true},
        {element: c, text: 'Безопасность?', to: 1, timeout: 1000, blink: true}
    ];
}

function address(center, down_center) {
    let rows = [];
    rows.push({element: center, text: 'Советская 86/70<br/>16 июля, 19:00<br/>Get Together', to: 1, timeout: 1500});
    rows.push({element: center, text: 'Советская 86/70<br/>16 июля, 19:00<br/>Get Together', to: 1, timeout: 500});

    rows.push({element: down_center,
        text:
        '<a href="https://vk.com/messaging_privacy">' +
            '<img src="img/hello.jpg" width="80px" height="80px" style="opacity: 0.7;">' +
        '</a>',
        to: 1, timeout: 1500});

    for (let index = 0; index < 8; index++) {
        for (let jndex = 0; jndex < 2; jndex++) {
            rows.push({element: center, text: 'Советская 86/70<br/>16 июля, 19:00<br/>Get Together', to: 0, timeout: 50});
            rows.push({element: center, text: 'Советская 86/70<br/>16 июля, 19:00<br/>Get Together', to: 1, timeout: 300});
            rows.push({element: center, text: 'Советская 86/70<br/>16 июля, 19:00<br/>Get Together', to: 1, timeout: 50});
        }
        rows.push({element: center, text: 'Советская 86/70<br/>16 июля, 19:00<br/>Get Together', to: 1, timeout: 1500});
    }

    rows.push({element: center, text: 'Советская 86/70<br/>16 июля, 19:00<br/>Get Together', to: 1, timeout: 1000});
    return rows;
}