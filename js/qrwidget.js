(function ($) {

    $.fn.qrwidget = function(options) {

        // default options.
        var settings = $.extend({
            // These are the defaults.
            iconWidth: "30",
            vpos : "bottom",
            hpos : "middle",
            shape : "square"
        }, options );

        // default arrow and container styles
        var arrowOuter = "position:absolute; width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent;";
        var arrowInner = "position:absolute; width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent;";
        var widget     = "position:absolute; z-index: 5000; display:none; border:1px solid #CCC; background:#FFF; text-align:center; text-transform:uppercase; letter-spacing:3px; font-size:11px; color:#000;";

        // set vertical position of container and arrow
        if(settings.vpos=="bottom"){
            arrowOuter += "top:-20px; border-bottom: 20px solid #CCC;";
            arrowInner += "top:-19px; border-bottom: 20px solid #FFF;";
            widget += "top:" + (settings.iconWidth + 20) + "px; ";
        }else if(settings.vpos=="top"){
            arrowOuter += "bottom:-20px; border-top: 20px solid #CCC;";
            arrowInner += "bottom:-19px; border-top: 20px solid #FFF;";
            widget     += "bottom:" + (settings.iconWidth + 20) + "px; ";
        }else{
            arrowOuter += "top:-20px; border-bottom: 20px solid #CCC;";
            arrowInner += "top:-19px; border-bottom: 20px solid #FFF;";
            widget += "top:" + (settings.iconWidth + 20) + "px; ";
        }

        // set horozontal position of container and arrow
        if(settings.hpos=="middle"){
            arrowOuter += "left:60px;";
            arrowInner += "left:60px;";
            widget += "left:" + (settings.iconWidth/2 - 80) + "px";
        }else if(settings.hpos=="left"){
            arrowOuter += "left:145px; border-right: 0px solid transparent;";
            arrowInner += "left:145px;  border-right: 0px solid transparent;";
            widget += "left:" + (-167 + (settings.iconWidth/2)) + "px";
        }else if(settings.hpos=="right"){
            arrowOuter += "left:0px; border-left: 0px solid transparent;";
            arrowInner += "left:0px; border-left: 0px solid transparent;";
            widget += "left:" + (0 + (settings.iconWidth/2)) + "px";
        }else{
            arrowOuter += "left:60px;";
            arrowInner += "left:60px;";
            widget += "left:" + (settings.iconWidth/2 - 80) + "px";
        }

        // random id generator
        function getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // random id to append to QR code image to prevent caching
        var id = getRandomInt(1,999999);

        // get src of script
        var myjs = document.getElementById('myjs').getAttribute('src');
        // get filename
        var myarr = myjs.split("/");
        var file = myarr[(myarr.length-1)];
        // get directory
        var domain = myjs.replace(file,'');

        // set content for widget
        var content = "<div id='qrWidget' style='position:relative; width:" + settings.iconWidth + "px'>";
        content += "<img src='" + domain + "icon_" + settings.shape + ".png' style='width:100%; cursor:pointer;'>";
        content += "<div id='qrWidgetDisplay' style='" + widget + "'>";
        content += "<img src='http://162.13.117.116/bookmark?size=5&fc=000000&id=" + id + "' style='border:0px solid #CCC;' /><div style='position:relative; top:-10px;'><a href='http://webzakimbo.com' target='_blank' style='color:#000; text-decoration:none;'>webzakimbo.com</a></div>";
        content += "<div style='" + arrowOuter + "'></div>";
        content += "<div style='" + arrowInner + "'></div>";
        content += "</div>";
        content += "</div>";

        // populate container with content and display on click
        return this.html(content).click(function(){
            $("#qrWidgetDisplay").fadeToggle(200);
        });

    };

}(jQuery));