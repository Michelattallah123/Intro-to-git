$(".alert-button").on("click",function(){
    $(this).parent().css({"transition":"0.5s","opacity":"0"});
}); 


/*============
REVIEW
============*/
$(".reviewComment").on("mouseover",function(){
    $(this).css();
});


$('.editReviewButton').on("click",function(){
    var text = $($(this).closest(".reviewComment").find(".reviewText")).text();
    $($(this).closest(".reviewComment")).toggleClass("hide");
    $($(this).closest(".oneReview").find(".reviewEdit")).toggleClass("hide");
    $($(this).closest(".oneReview").find(".reviewEdit textarea")).focus();
    $($(this).closest(".oneReview").find(".reviewEdit textarea")).val(text);
});

$('.cancelEditButton').on("click",function(){
    $($(this).closest(".reviewEdit")).toggleClass("hide");
    $($(this).closest(".oneReview").find(".reviewComment")).toggleClass("hide");

});

/*============
TEXT AREA AUTO EXPAND
============*/
var autoExpand = function (field) {

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

	field.style.height = height + 'px';

};


//STARS
$.fn.stars = function() {
    return $(this).each(function() {
        // Get the value
        var val = parseFloat($(this).html());
        // Make sure that the value is in 0 - 5 range, multiply to get width
        var size = Math.max(0, (Math.min(5, val))) * 16;
        // Create stars holder
        var $span = $('<span />').width(size);
        // Replace the numerical value with stars
        $(this).html($span);
    });
}

$(function() {
    $('span.stars').stars();
});



//FORM STOP PROPAGATION
$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});

//EXPAND TEXT AREA
document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() !== 'textarea') return;
	autoExpand(event.target);
}, false);



//NAVBAR SCROLL
var myNav = document.querySelector('#index-body #main-navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ){
    myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
