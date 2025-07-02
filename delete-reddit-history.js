$(".del-button .main").each(
    function (index, element) {
        var e=element;
        setTimeout(function() { change_state(e, "del", hide_thing, undefined, null); }, index*400);
    });
