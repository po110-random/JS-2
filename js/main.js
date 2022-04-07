//alert();

let taReview = document.getElementById('taReview');

let radiousLT = document.getElementById('radiousLT');
let radiousRT = document.getElementById('radiousRT');
let radiousRB = document.getElementById('radiousRB')
let radiousLB = document.getElementById('radiousLB')

let inputLT = document.getElementById('inputLT');
let inputLB = document.getElementById('inputLB');
let inputRB = document.getElementById('inputRB');
let inputRT = document.getElementById('inputRT');

let allRadious = document.getElementById('allRadious');
let widthBorder = document.getElementById('widthBorder');
let border1 = document.getElementById('border1');

let borderColor = document.getElementById('borderColor');
let alphaBorder = document.getElementById('alphaBorder');

let borderDotted = document.getElementById('borderDotted');
let borderSolid = document.getElementById('borderSolid');
let borderDashed = document.getElementById('borderDashed');
let borderDouble = document.getElementById('borderDouble');
let borderGroove = document.getElementById('borderGroove');
let borderRidge = document.getElementById('borderRidge');
let borderInset = document.getElementById('borderInset');
let borderOutset = document.getElementById('borderOutset');
let borderHidden = document.getElementById('borderHidden');
let none = document.getElementById('none');

let posAll = document.getElementById('posAll');
let posTop = document.getElementById('posTop');
let posRight = document.getElementById('posRight');
let posBottom = document.getElementById('posBottom');
let posLeft = document.getElementById('posLeft');

radiousLT.oninput = function (e) {

    inputLT.value = radiousLT.value;

    if (allRadious.checked) {
        taReview.style.borderRadius = radiousLT.value + 'px';
        inputLB.value = radiousLT.value;
        inputRB.value = radiousLT.value;
        inputRT.value = radiousLT.value;
    }

    else {
        taReview.style.borderTopLeftRadius = radiousLT.value + 'px';
    }

};

radiousRT.oninput = function (e) {

    inputRT.value = radiousRT.value;
    taReview.style.borderTopRightRadius = radiousRT.value + 'px';

};

radiousRB.oninput = function (e) {

    inputRB.value = radiousRB.value;
    taReview.style.borderBottomRightRadius = radiousRB.value + 'px';

};

radiousLB.oninput = function (e) {

    inputRT.value = radiousLB.value;
    taReview.style.borderBottomLeftRadius = radiousLB.value + 'px';

};

allRadious.oninput = function (e) {

    if (!allRadious.checked) {
        taReview.style.borderRadius = '0px 0px 0px';
        inputLB.value = 0;
        inputRB.value = 0;
        inputRT.value = 0;
    }

};

widthBorder.oninput = function (e) {
    taReview.style.borderWidth = widthBorder.value + 'px';
};

border1.onclick = function (e) {
    taReview.style.borderWidth = '1px';
    widthBorder.value = 1;
};

borderDotted.onclick = function (e) {
    taReview.style.borderStyle = 'dotted';
};

borderDashed.onclick = function (e) {
    taReview.style.borderStyle = 'dashed';
};

borderDouble.onclick = function (e) {
    taReview.style.borderStyle = 'double';
};

borderGroove.onclick = function (e) {
    taReview.style.borderStyle = 'groove';
};

borderRidge.onclick = function (e) {
    taReview.style.borderStyle = 'ridge';
};

borderInset.onclick = function (e) {
    taReview.style.borderStyle = 'inset';
};

borderOutset.onclick = function (e) {
    taReview.style.borderStyle = 'outset';
};

borderHidden.onclick = function (e) {
    taReview.style.borderStyle = 'hidden';
};

none.onclick = function (e) {
    taReview.style.borderStyle = 'none';
};

borderColor.oninput = function (e) {
    taReview.style.borderColor = borderColor.value;
};

posAll.onclick = function (e) {
    taReview.style.borderWidth = widthBorder.value + 'px';
};

posTop.onclick = function (e) {
    taReview.style.borderWidth = widthBorder.value + 'px 0px 0px 0px';
};

posRight.onclick = function (e) {
    taReview.style.borderWidth = '0px ' + widthBorder.value + 'px 0px 0px';
};

posBottom.onclick = function (e) {
    taReview.style.borderWidth = '0px 0px ' + widthBorder.value + 'px 0px';
};

posLeft.onclick = function (e) {
    taReview.style.borderWidth = '0px 0px 0px ' + widthBorder.value + 'px';
};

alphaBorder.oninput = function (e) {
    taReview.style.opacity = alphaBorder.value / 100;

    /* color.value + (transparencia.value.toString(16).toUpperCase()); */

};

/* radiousLT.addEventListener('input', function (e) {

    taReview.style.borderTopLeftRadius = radiousLT.value;
}); */
