window.onload = function () {

    var last_i = 9;
    var last_j = 7;
    function changeImage() { 
        console.log("this is a test");
        var BackgroundImg=["./src/climbing.jpg",
        "./src/football.jpg", 
        "./src/golf.jpg", 
        "./src/marathon.jpg", 
        "./src/sailing.jpg", 
        "./src/skate.jpg", 
        "./src/skiing.jpg", 
        "./src/climbing.jpg", 
        "./src/soccer.jpg", 
        "./src/tennis.jpg"
        ];
        var i = Math.floor((Math.random() * 10));
        var j = Math.floor((Math.random() * 10));
        
        while (i == last_i) {
            var i = Math.floor((Math.random() * 10));
        }

        while (j == last_j) {
            var j = Math.floor((Math.random() * 10));
        }

        while (i == j) {
            j = Math.floor((Math.random() * 10));
        }

        last_i = i;
        last_j = j;
        
        console.log(i + " " + j);

        $('#image1')
        .animate({opacity: 0.8}, 'slow', function() {
            $(this)
                .css({'background-image': 'url("' + BackgroundImg[i] + '")'})
                .animate({opacity: 1});
        });

        $('#image2')
        .animate({opacity: 0.8}, 'slow', function() {
            $(this)
                .css({'background-image': 'url("' + BackgroundImg[j] + '")'})
                .animate({opacity: 1});
        });

        // document.getElementById("image1").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
        // document.getElementById("image2").style.backgroundImage = 'url("' + BackgroundImg[j] + '")';
    }
    window.setInterval(changeImage, 5000);
}