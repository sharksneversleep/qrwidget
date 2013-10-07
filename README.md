qrwidget
========

QR Code Bookmark Widget

Container for widget to populate
<div id="qrWidget"></div>

Script to call
<script src="/js/qrwidget/qrwidget.js" id="myjs"></script>

Script to initialise
<script>
$("#qrWidget").qrwidget({
    iconWidth: 30,
    vpos : "bottom",
    hpos : "middle",
    shape : "circle"
});
</script>

Options
iconWidth: width of icon
vpos: top / bottom (vertical position of popup)
hpos: left / middle / right (horizontal position of popup)
shape: circle / square (shape of icon)
