$(document).ready(function () {

    //HOLAPET SHOP
    $("#holapetshop_box").mouseenter(function () {
        $("#holapetshop_main > img").stop().animate({ marginTop: "-1962px" }, 13000)
    }).mouseleave(function () {
        $("#holapetshop_main > img").stop().animate({ marginTop: "0px" }, 1000)
    });

    //LIFETRAKR
    $("#lifetrakr_box").mouseenter(function () {
        $("#lifetrakr_main > img").stop().animate({ marginTop: "-2760px" }, 15000)
    }).mouseleave(function () {
        $("#lifetrakr_main > img").stop().animate({ marginTop: "0px" }, 3000)
    });

    //BALCK HOUSE
    $("#blackhouse_box").mouseenter(function () {
        $("#blackhouse_main > img").stop().animate({ marginTop: "-2250px" }, 15000)
    }).mouseleave(function () {
        $("#blackhouse_main > img").stop().animate({ marginTop: "0px" }, 2000)
    });

    //INTERPARK
    $("#interpark_main").mouseenter(function () {
        $("#interpark_main_box > li").stop().animate({ marginTop: "-1105px" }, 3000)
    }).mouseleave(function () {
        $("#interpark_main_box > li").stop().animate({ marginTop: "0px" }, 1000)
    });

    $(".lifetrakr_mobile").mouseenter(function () {
        $(".lifetrakr_mobile_box > ul > li").stop().animate({ marginTop: "-5600px" }, 13000)
    }).mouseleave(function () {
        $(".lifetrakr_mobile_box > ul > li").stop().animate({ marginTop: "0px" }, 5000)
    });

    $(".blackhouse_mobile").mouseenter(function () {
        $(".blackhouse_mobile_box > ul > li").stop().animate({ marginTop: "-5055px" }, 11000)
    }).mouseleave(function () {
        $(".blackhouse_mobile_box > ul > li").stop().animate({ marginTop: "0px" }, 5000)
    });
});