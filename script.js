'use strict';
$(document).ready(function(){                                   //sprawdzam czy document się już załadował
    var carouselList = $('#carousel ul');                       //łapie ele. ul

    var moveFirstSlide = function () {                          //tworze funkcje moveFirstSlide
        var firstItem = carouselList.find('li:first');          //znajduje pierwszy ele. listy
        var lastItem = carouselList.find('li:last');            //znajduje ostatni ele. listy

        lastItem.after(firstItem);                              //dodaje za ostatnim ele. pierwszy ele.
        carouselList.css({marginLeft:0});                       //resetuje lewy margines na wartość 0
    };

    var changeSlide = function() {                                          //tworze funkcje changeSlide                                            
        carouselList.animate({ 'marginLeft': -400 }, 500, moveFirstSlide);  //na liście wywołuje metode animate oraz funkcje moveFirstSlide
    };                                                                      //{ 'marginLeft': -400 } - obiekt reprezentuje właściwości CSS
                                                                            //500 - czas wykonania się animacji
    setInterval(changeSlide, 3000);
});

