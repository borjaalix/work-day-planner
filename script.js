var weekDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(weekDay);

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var input = $(this).siblings(".description").val();
        var box = $(this).parent().attr("id");
        localStorage.setItem(box, input);
    })

    function time() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var boxTime = parseInt($(this).attr("id").split("hour")[1]);

            if (boxTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (boxTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    $("#hour8 .description").val(localStorage.getItem("hour08"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    time();
})