        // ---position fixid for iOS devaice---//  
        var iOScheck = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
        var iosKeyboardHeight = 0;       
        function IframePositionControl() {
            document.getElementById("artEXPOiFrame").style.position = "absolute";            
            var elem = document.getElementById("artEXPOiFrame");
            var windHeight = window.innerHeight; // window height
            var windWhidth = window.innerWidth; // window width
            var scrolHeight = window.pageYOffset; // scroll height
            var iframeHeight = elem.offsetHeight;  // element height
            var iframeWidth = elem.offsetWidth; // element width
            var bottomPositionElem = windHeight + scrolHeight; // bottom position for element            
            var topPositionElem = windHeight + scrolHeight - iframeHeight - iosKeyboardHeight; // top position for element
            elem.style.top = topPositionElem + "px";            
        };
        
        function rePositionInZoom() {
            var scrolLeft = window.pageXOffset;
            if (scrolLeft > 5) {
                var windWhidth = window.innerWidth; // screen width	
                var documentFoolWidth = document.body.scrollWidth; // fool document width
                var scrolLeft = window.pageXOffset; //scrol from left saide
                var elem = document.getElementById("artEXPOiFrame");
                var iframeWidth = elem.offsetWidth; // element width
                var rightRemove = documentFoolWidth - windWhidth - scrolLeft;
                elem.style.right = rightRemove + "px";
            }
        };
        function iOSDetectKeyboard() {
            console.log('ioskey func is start');
            var iOSversionHiethCorrect = 0;
            var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);            
            var iOSversion = parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]).replace('undefined', '3_2')) || false;
            
            if (iOS) {
                console.log("gadget type iOS");
                var iOSversionHiethCorrectPotrite = 0;
                var iOSversionHiethCorrectLandscape = 0;
                var iPad = !!navigator.platform && /iPad/.test(navigator.platform);                 
                if (iPad) {                    
                    console.log("gadget type iPad");
                    var IpadPortriteKeyboard = window.innerHeight / 2.5; // height of keyboard for Ipad Air2 in gorizontal position
                    var IpadLandscapeKeyboard = window.innerHeight / 1.5; // height of keyboard for Ipad Air2 in vertical position

                    if (window.innerWidth < window.innerHeight) {
                        iosKeyboardHeight = IpadPortriteKeyboard + iOSversionHiethCorrectPotrite;                      
                        
                    }
                    else {
                        iosKeyboardHeight = IpadLandscapeKeyboard + iOSversionHiethCorrectLandscape;                        
                    }
                }

                var iPhone = !!navigator.platform && /iPhone/.test(navigator.platform);
                if (iPhone) {
                    console.log("gadget type iPhone");
                    var ifaraimeHeight = document.getElementById("artEXPOiFrame").offsetHeight;
                    var iPhonePortriteKeyboard = window.innerHeight * 0.7; // height of keyboard for Ipad Air2 in gorizontal position
                    var iPhoneLandscapeKeyboard = window.innerHeight *0.6; // height of keyboard for Ipad Air2 in vertical position

                    if (window.innerWidth < window.innerHeight) {
                        iosKeyboardHeight = iPhonePortriteKeyboard + iOSversionHiethCorrectPotrite;
                    }
                    else { iosKeyboardHeight = iPhoneLandscapeKeyboard + iOSversionHiethCorrectLandscape; }
                }
            }            
        }

        function iOSDetectKeyboardStop() {
            console.log('ioskey func is stop');
            iosKeyboardHeight = 0;
            IframePositionControl();
        }
        window.onscroll = function () {
            //firstInitCommentcard = 0;           
            if (iOScheck) {               
                IframePositionControl();
                rePositionInZoom();                
            }
            else {               
                return false;                
            }
        };
        // ---/end position fixid for iOS devaice---//