$(document).ready(function () {
    $('#home_button').click(function () {

        var offset = $('#home').offset(); //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({ scrollTop: offset.top }, 500);

    });

    $('#holapet_button').click(function () {

        var offset = $('#holapet').offset(); //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({ scrollTop: offset.top }, 500);

    });

    $('#lifetrakr_button').click(function () {

        var offset = $('#lifetrakr').offset(); //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({ scrollTop: offset.top }, 500);

    });

    $('#black_house_button').click(function () {

        var offset = $('#black_house').offset(); //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({ scrollTop: offset.top }, 500);

    });

    $('#interpark_button').click(function () {

        var offset = $('#interpark').offset(); //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({ scrollTop: offset.top }, 500);

    });

    $('#profile_button').click(function () {

        var offset = $('#profile').offset(); //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({ scrollTop: offset.top }, 500);

    });

    $('#home_button').click();
});