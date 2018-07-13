$(window).on("load", function () {
    entry();
});

function entry() {
    let up_left_corner = $('#text21');
    let up_center = $('#text22');
    let up_right_corner = $('#text23');

    let center = $('#text32');

    let down_left_corner = $('#text41');
    let down_center = $('#text42');
    let down_right_corner = $('#text43');


    let down_down_center = $('#text52');

    schedule([]
        .concat(
            internet(center)
        )
        .concat(
            questions(
                up_center,
                center,
                down_center)
        )
        .concat(
            information(
                up_left_corner, up_right_corner,
                center,
                down_left_corner, down_right_corner)
        )
        .concat(
            think(
                up_center,
                center,
                down_center)
        )
        .concat(
            address(
                center,
                down_down_center)
        )
    );
}

function schedule(tasks) {
    let size = tasks.length;

    let chain = new Array(size);
    chain[size - 1] = function () {
        let task = tasks[size - 1];
        animate(task.element, task.text, task.to, task.timeout, task.blink);
    };

    for (let index = size - 2; index >= 0; index--) {
        chain[index] = function () {
            let task = tasks[index];
            animate(task.element, task.text, task.to, task.timeout, task.blink, chain[index + 1]);
        }
    }

    chain[0](); // start chain
}

function animate(element, text, opacity_to, timeout, blink, callback) {
    element.html(text);

    element.animate({
        opacity: opacity_to,
    }, timeout, function () {
        if (blink) {
            element.animate({
                opacity: Math.max(0, 1 - Math.ceil(opacity_to)),
            }, timeout, callback);
        } else {
            callback();
        }
    });
}

function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const jndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[jndex]] = [array[jndex], array[index]];
    }
    return array;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}