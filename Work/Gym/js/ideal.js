
    var $ = function (id) {
        return document.getElementById(id);
    };

function msystem() {
    //measuring system
    if ($('msw').value == 'metric') {
        $('thw').innerHTML = ' (Cms)';
    } else {
        $('thw').innerHTML = ' (inches)';
    };
}

function bweight() {
    //body weight calculation
    var ms = $('msw').value;
    var sex = $('sw').value;
    var height = $('hw').value;
    if (height == null || height.length == 0) {
        //error on empty fields
        $('ibw').value = "Pl. enter data.";
    } else {
        $('ibw').value = "";
    }
    //calculation begin here
    if (ms == 'metric' && height > 0 && sex == 'm') {
        $('ibw').value = Math.round(56.2 * 1 + (height * .39 - 152.4 * .39) * 1.41) * 1 + " Kgs";
    } else if (ms == 'metric' && height > 0 && sex == 'f') {
        $('ibw').value = Math.round(53.1 * 1 + (height * .39 - 152.4 * .39) * 1.36) * 1 + " Kgs";
    } else if (ms == 'us' && height > 0 && sex == 'm') {
        $('ibw').value = Math.round(56.2 * 2.20462 + (height * 1 - 60) * 1.41 * 2.20462) * 1 + " lbs";
    } else if (ms == 'us' && height > 0 && sex == 'f') {
        $('ibw').value = Math.round(53.1 * 2.20462 + (height * 1 - 60) * 1.36 * 2.20462) * 1 + " lbs";
    }
    if (ms == 'metric' && height > 0) {
        $('ibw1').value = Math.round(18.5 * (height * height / 10000)) + " Kgs-" + Math.round(25 * (height * height / 10000)) + " Kgs";
    } else if (ms == 'us' && height > 0) {
        $('ibw1').value = Math.round(18.5 * (height * height) / 703) + " lbs-" + Math.round(25 * (height * height) / 703) + " lbs";
    }
} 
