iePlaceholder: function (inputElem) {
        $("[placeholder]").addClass("noPholderInIE");
        var me = _navigation;          
        var inputElem = $("[placeholder]");
       
            $('<span class="ie-placeholder"></span>').insertBefore("[placeholder]").css({
                'color': '#6A6A6A',
                'zIndex' : '1001',
                'position': 'absolute',
                'left': '31px',
                'top': '9px',
            });
            var spanHolder = $('.ie-placeholder');                            
            inputElem.focus(function () {                
                    $('.ie-placeholder').text($(this).attr("placeholder"));
                    $(this).keyup(function(){
                        if($(this).val().length == 0) $('.ie-placeholder').show();
                        else $('.ie-placeholder').hide();
                    });                    
                });
            spanHolder.click(function () {
                $(this).siblings("[placeholder]").focus();
            });
            
    }