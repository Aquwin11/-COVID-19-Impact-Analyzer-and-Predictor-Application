$(document).ready(function(){
$("#selector").change(function(){
    $("#iframeId").attr("src", $(this).val());
});
});
