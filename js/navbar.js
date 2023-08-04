(function() {

    'use strict'


    /**
     * Clones the navigation menus and adds them to the site mobile menu body.
     * Adds collapsible functionality to menu items with children.
     * Toggles the offcanvas menu when the menu toggle button is clicked.
     * Closes the offcanvas menu when a click occurs outside the menu.
     */

    var siteMenuClone = function() {
        // Clone navigation menus
        var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
        var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

        jsCloneNavs.forEach(nav => {
            var navCloned = nav.cloneNode(true);
            navCloned.setAttribute('class', 'site-nav-wrap');
            siteMobileMenuBody.appendChild(navCloned);
        });

        // Delay execution of the code block after 1 second
        setTimeout(function() {
            // Find all elements with class 'has-children' inside the element with class 'site-mobile-menu'
            var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll(' .has-children');

            var counter = 0;
            // Iterate over each 'hasChild' element
            hasChildrens.forEach(hasChild => {
                // Find the first 'a' element inside the 'hasChild' element
                var refEl = hasChild.querySelector('a');

                // Create a new 'span' element
                var newElSpan = document.createElement('span');
                newElSpan.setAttribute('class', 'arrow-collapse collapsed');

                // Insert the new 'span' element before the 'refEl' element
                hasChild.insertBefore(newElSpan, refEl);

                // Find the 'arrow-collapse' element inside the 'hasChild' element
                var arrowCollapse = hasChild.querySelector('.arrow-collapse');
                arrowCollapse.setAttribute('data-bs-toggle', 'collapse');
                arrowCollapse.setAttribute('data-bs-target', '#collapseItem' + counter);

                // Find the 'dropdown' element inside the 'hasChild' element
                var dropdown = hasChild.querySelector('.dropdown');
                dropdown.setAttribute('class', 'collapse');
                dropdown.setAttribute('id', 'collapseItem' + counter);

                counter++;
            });

        }, 1000);

        // Toggle offcanvas menu when menu toggle button is clicked
        var menuToggle = document.querySelectorAll(".js-menu-toggle");
        var mTog;
        menuToggle.forEach(mtoggle => {
            mTog = mtoggle;
            mtoggle.addEventListener("click", (e) => {
                if (document.body.classList.contains('offcanvas-menu')) {
                    document.body.classList.remove('offcanvas-menu');
                    mtoggle.classList.remove('active');
                    mTog.classList.remove('active');
                } else {
                    document.body.classList.add('offcanvas-menu');
                    mtoggle.classList.add('active');
                    mTog.classList.add('active');
                }
            });
        });

        // Close offcanvas menu when click occurs outside the menu
        var specifiedElement = document.querySelector(".site-mobile-menu");
        var mt, mtoggleTemp;
        document.addEventListener('click', function(event) {
            var isClickInside = specifiedElement.contains(event.target);
            menuToggle.forEach(mtoggle => {
                mtoggleTemp = mtoggle;
                mt = mtoggle.contains(event.target);
            });

            if (!isClickInside && !mt) {
                if (document.body.classList.contains('offcanvas-menu')) {
                    document.body.classList.remove('offcanvas-menu');
                    mtoggleTemp.classList.remove('active');
                }
            }
        });
    };
    siteMenuClone();


})()