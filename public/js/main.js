$( document ).ready(function() {
    const icon = $(".search-icon");
    const navForm = $("form.search");
    const weatherLink = $(".weather-link");
    const opn = $(".opn");

    icon.click(function() {
        if($(this).hasClass("opn")) {
            $(this).hide(200).fadeIn().removeClass("ml-3 opn");
            navForm.removeClass("spread-out");
            setTimeout(function() {
                icon.parent("div").addClass("separator");
                weatherLink.removeClass("d-none");
            }, 300);
        } else {
            $(this).parent("div").removeClass("separator");
            $(this).hide().delay(80).fadeIn().addClass("ml-3 opn");
            weatherLink.addClass("d-none");
            navForm.addClass("spread-out");
            if (navForm.hasClass("spread-out")) {
                navForm.children("input.search").focus();
            }
        }
    });
});

