$(document).ready(function(){
    $("#button").click(function(){
        var lat = $("#lat").val();
        var lon = $("#lon").val();

        var myCenter = new google.maps.LatLng(lat, lon);

        // 地図のオプション
        var myOptions = {
            zoom : 13,
            center : myCenter,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };

        // 地図の生成
        var myMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        // マーカーの生成
        new google.maps.Marker({
            position : myCenter,
            map : myMap,
            title : "Hello World!"
        });
    });
});

