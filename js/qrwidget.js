(function ($) {

    $.fn.qrwidget = function(options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            iconWidth: "30",
            vpos : "bottom",
            hpos : "middle",
            shape : "square"
        }, options );

        var arrowOuter = "position:absolute; width: 0; height: 0; border-left: 22px solid transparent; border-right: 22px solid transparent;";
        var arrowInner = "position:absolute; width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent;";
        var widget     = "position:absolute; z-index: 5000; display:none; border:1px solid #CCC; background:#FFF; text-align:center; text-transform:uppercase; letter-spacing:3px; font-size:11px; color:#000;";

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

        if(settings.hpos=="middle"){
            arrowOuter += "left:59px;";
            arrowInner += "left:60px;";
            widget += "left:" + (settings.iconWidth/2 - 80) + "px";
        }else if(settings.hpos=="left"){
            arrowOuter += "left:145px; border-right: 0px solid transparent;";
            arrowInner += "left:146px;  border-right: 0px solid transparent;";
            widget += "left:" + (-167 + (settings.iconWidth/2)) + "px";
        }else if(settings.hpos=="right"){
            arrowOuter += "left:0px; border-left: 0px solid transparent;";
            arrowInner += "left:1px; border-left: 0px solid transparent;";
            widget += "left:" + (0 + (settings.iconWidth/2)) + "px";
        }else{
            arrowOuter += "left:59px;";
            arrowInner += "left:60px;";
            widget += "left:" + (settings.iconWidth/2 - 80) + "px";
        }

        // Greenify the collection based on the settings variable.

        var myjs = document.getElementById('myjs');
        var domain = myjs.getAttribute('src').replace('qrwidget.js','');
        var content = "<div id='qrWidget' style='position:relative; width:" + settings.iconWidth + "px'>";
        content += "<img src='" + domain + "icon_" + settings.shape + ".png' style='width:100%; cursor:pointer;'>";
        content += "<div id='qrWidgetDisplay' style='" + widget + "'>";
        content += "<img src='http://162.13.117.116/bookmark?size=5&fc=000000' style='border:0px solid #CCC;' /><div style='position:relative; top:-10px;'><a href='http://webzakimbo.com' target='_blank' style='color:#000; text-decoration:none;'>webzakimbo.com</a></div>";
        content += "<div style='" + arrowOuter + "'></div>";
        content += "<div style='" + arrowInner + "'></div>";
        content += "</div>";
        content += "</div>";

        return this.html(content).click(function(){
            $("#qrWidgetDisplay").fadeToggle(200);
        });

        /*
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
*/

    };

}(jQuery));