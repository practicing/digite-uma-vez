'use strict';


var elOrigin = '.searchbox__text--origin',
    elDestination = '.searchbox__text--destination',
    elIn = '.searchbox__date--in',
    elOut = '.searchbox__date--out',
    dataOrigin,
    dataDestination,
    dataIn,
    dataOut;

function getValues () {
    dataOrigin = $(elOrigin).val();
    dataDestination = $(elDestination).val();
    dataIn = $(elIn).val();
    dataOut = $(elOut).val();
}

function applyValue () {
    var dataHref;


    getValues();

    $('.company__item').each(function (data) {
        console.log(data);

        dataHref = $(this).find('a').data('href');

        dataHref = dataHref.replace('${dataOrigin}', dataOrigin);
        dataHref = dataHref.replace('${dataDestination}', dataDestination);
        dataHref = dataHref.replace('${dtaIn}', dataIn);
        dataHref = dataHref.replace('${dataOut}', dataOut);

        $(this).find('a').attr('href', dataHref);
    });

    // var dataHref = $('.company__item a').data('href');

    // $('.company__item a').attr('href', dataHref);
}

$('#apply').on('click', applyValue);

// alert('hello2');

// var searchbox = class Search {
//   constructor(origin, destination, dataIn, dataOut) {
//     this.origin = origin;
//     this.destination = destination;
//     this.dataIn = dataIn;
//     this.dataOut = dataOut;
//   }
// }
