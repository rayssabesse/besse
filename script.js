var langcheck = false;
var colorcheck = false;


let enbtn = document.getElementById('en')
let ptbtn = document.getElementById('pt')


let bluebtn = document.getElementById('blue')
// let orangebtn = document.getElementById('orange')
let whitebtn = document.getElementById('white')
let greenbtn = document.getElementById('green')


let nxtbtn = document.getElementById('next')


var encheck = false;
var ptcheck = false;


var bcheck = false;
// var ocheck = false;
var wcheck = false;
var gcheck = false;

var next = false;

function select(which) {
    // COLOR SELECT
    if (which == "blue") {
        bluebtn.value = true
        // orangebtn.value = false
        whitebtn.value = false
        greenbtn.value = false

        colorcheck = true
        bcheck = true
        ocheck = false
        wcheck = false
        gcheck = false

        bluebtn.classList.add('highlight')
        // orangebtn.classList.remove('highlight')
        whitebtn.classList.remove('highlight')
        greenbtn.classList.remove('highlight')
    }
    // if (which == "orange") {
    //     bluebtn.value = false
    //     orangebtn.value = true
    //     whitebtn.value = false
    //     greenbtn.value = false

    //     colorcheck = true
    //     bcheck = false
    //     ocheck = true
    //     wcheck = false
    //     gcheck = false

    //     bluebtn.classList.remove('highlight')
    //     orangebtn.classList.add('highlight')
    //     whitebtn.classList.remove('highlight')
    //     greenbtn.classList.remove('highlight')
    // }
    if (which == "white") {
        bluebtn.value = false
        // orangebtn.value = false
        whitebtn.value = true
        greenbtn.value = false

        colorcheck = true
        bcheck = false
        ocheck = false
        wcheck = true
        gcheck = false

        bluebtn.classList.remove('highlight')
        // orangebtn.classList.remove('highlight')
        whitebtn.classList.add('highlight')
        greenbtn.classList.remove('highlight')
    }
    if (which == "green") {
        bluebtn.value = false
        // orangebtn.value = false
        whitebtn.value = false
        greenbtn.value = true

        colorcheck = true
        bcheck = false
        ocheck = false
        wcheck = false
        gcheck = true

        bluebtn.classList.remove('highlight')
        // orangebtn.classList.remove('highlight')
        whitebtn.classList.remove('highlight')
        greenbtn.classList.add('highlight')
    }

    // LANGUAGE SELECT
    if (which == "en") {
        enbtn.value = true
        ptbtn.value = false

        langcheck = true
        encheck = true
        ptcheck = false

        enbtn.classList.replace('border', 'highlight-lang')
        ptbtn.classList.replace('highlight-lang', 'border')
    }
    if (which == "pt") {
        enbtn.value = false
        ptbtn.value = true

        langcheck = true
        encheck = false
        ptcheck = true

        enbtn.classList.replace('highlight-lang', 'border')
        ptbtn.classList.replace('border', 'highlight-lang')
    }

    // CHECKPOINT
    if (langcheck == true && colorcheck == true) {
        document.getElementById('next').removeAttribute("hidden")
    }
    if (which == "nxt") {
        next = true
    }

    // GO TO PAGES
    function page(which2) {
        // BLUE
        if (which2 == 'ben') {
            window.location.replace('./blue/index-blue.html')
        }
        if (which2 == 'bpt') {
            window.location.replace('./blue/index-blue-pt.html')
        }

        // ORANGE
        // if (which2 == 'oen') {
        //     window.location.replace('./orange/index-orange.html')
        // }
        // if (which2 == 'opt') {
        //     window.location.replace('./orange/index-orange-pt.html')
        // }

        // WHITE
        if (which2 == 'wen') {
            window.location.replace('./white/index-white.html')
        }
        if (which2 == 'wpt') {
            window.location.replace('./white/index-white-pt.html')
        }

        // GREEN
        if (which2 == 'gen') {
            window.location.replace('./green/index-green.html')
        }
        if (which2 == 'gpt') {
            window.location.replace('./green/index-green-pt.html')
        }
    }

    // REDIRECT
    // BLUE REDIRECT
    if (bcheck == true && encheck == true && next == true) {
        page('ben')
    }
    if (bcheck == true && ptcheck == true && next == true) {
        page('bpt')
    }

    // ORANGE REDIRECT
    // if (ocheck == true && encheck == true && next == true) {
    //     page('oen')
    // }
    // if (ocheck == true && ptcheck == true && next == true) {
    //     page('opt')
    // }

    // WHITE REDIRECT
    if (wcheck == true && encheck == true && next == true) {
        page('wen')
    }
    if (wcheck == true && ptcheck == true && next == true) {
        page('wpt')
    }
    // GREEN REDIRECT
    if (gcheck == true && encheck == true && next == true) {
        page('gen')
    }
    if (gcheck == true && ptcheck == true && next == true) {
        page('gpt')
    }

    console.log(langcheck, encheck, ptcheck, next)
}


const resolver = {
    resolve: function resolve(options, callback) {

        // Resolve
        const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
        const combinedOptions = Object.assign({}, options, { resolveString: resolveString });

        function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        function randomCharacter(characters) {
            return characters[getRandomInteger(0, characters.length - 1)];
        };

        function doRandomiserEffect(options, callback) {
            const characters = options.characters;
            const timeout = options.timeout;
            const element = options.element;
            const partialString = options.partialString;

            let iterations = options.iterations;

            setTimeout(() => {
                if (iterations >= 0) {
                    const nextOptions = Object.assign({}, options, { iterations: iterations - 1 });

                    if (iterations === 0) {
                        element.textContent = partialString;
                    } else {
                        element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
                    }

                    doRandomiserEffect(nextOptions, callback)
                } else if (typeof callback === "function") {
                    callback();
                }
            }, options.timeout);
        };

        function doResolverEffect(options, callback) {
            const resolveString = options.resolveString;
            const characters = options.characters;
            const offset = options.offset;
            const partialString = resolveString.substring(0, offset);
            const combinedOptions = Object.assign({}, options, { partialString: partialString });

            doRandomiserEffect(combinedOptions, () => {
                const nextOptions = Object.assign({}, options, { offset: offset + 1 });

                if (offset <= resolveString.length) {
                    doResolverEffect(nextOptions, callback);
                } else if (typeof callback === "function") {
                    callback();
                }
            });
        };

        doResolverEffect(combinedOptions, callback);
    }
}

const strings = [
    'select your design',
    'selecione seu design',
];

let counter = 0;

const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 20,
    // Number of random characters to show
    iterations: 8,
    // Random characters to pick from
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    // String to resolve
    resolveString: strings[counter],
    // The element
    element: document.querySelector('[data-target-resolver]')
}

// Callback 
function callback() {
    setTimeout(() => {
        counter++;

        if (counter >= strings.length) {
            counter = 0;
        }

        let nextOptions = Object.assign({}, options, { resolveString: strings[counter] });
        resolver.resolve(nextOptions, callback);
    }, 1500);
}

resolver.resolve(options, callback);