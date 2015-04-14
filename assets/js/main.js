

/**
 * Ie10 viewport bug workaround
 * @return {[type]} [description]
 */
(function () {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();


/**
 * functional code goes here
 * start point of application
 * @param  {[type]} ) {                   $(".pulse-module").on('click', function(){        if ( !$(this).hasClass("modal-active") ) {            $(".modal-active").removeClass('modal-active');            $(this).addClass("modal-active");        }    });        $("#help").on('click', function(){         $.ajax({            url: "data/help.json",            dataType: "json",            success: function(data) {                var helpModalTemplate [description]
 * @return {[type]}   [description]
 */
$(function() {
   

    /***************************
    Load Help Modal
    ***************************/
    $("#help").on('click', function(){
         $.ajax({
            url: "data/help.json",
            dataType: "json",
            success: function(data) {
                var helpModalTemplate = $("#help-modal-template").html(),
                    helpModalTemplateCompiled = Handlebars.compile(helpModalTemplate),
                    helpModalHtml = helpModalTemplateCompiled(data);

                $('#help-modal-holder').html(helpModalHtml);
                $('#help-modal').modal();
            }
        });
    })
});


