console.log("start");

jQuery(document).ready(
    function() {
        console.log("ready");


        var lista = jQuery("#list");
        //console.log(lista);

        var homeMenu = jQuery("#mainMenu .active a").css("color", "red");
        console.log(homeMenu);

        jQuery("#btnCreateBox").on("click", createBox)

        function createBox() {
            var $newBox = jQuery("<div class='box'>CIAO SONO UN BOX</div>");

            var theClass = getColor();
            console.log(theClass);

            $newBox
                .addClass(theClass)
                .text("CIAOOOOOO")
                .appendTo(".titolo");
        }

        function getColor() {
            var num = Math.round(Math.random());
            console.log("num", num)
            if (num === 0) {
                return "blue";
            } else {
                return "orange";
            }
        }

        //createBox();







    }
)