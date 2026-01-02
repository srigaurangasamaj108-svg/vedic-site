/**
 * VEDIC WISDOM - CORE ENGINE v4.0
 * Verified against: Responsive.md and Motion.md
 */

(function($) {
    'use strict';

    // 1. BREAKPOINT SYSTEM (Ref: vedic-wisdom-responsive.md)
    const breakpoints = {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536
    };

    /**
     * Determines current breakpoint based on window width
     */
    function getCurrentBreakpoint() {
        const width = window.innerWidth;
        if (width >= breakpoints['2xl']) return '2xl';
        if (width >= breakpoints.xl) return 'xl';
        if (width >= breakpoints.lg) return 'lg';
        if (width >= breakpoints.md) return 'md';
        if (width >= breakpoints.sm) return 'sm';
        return 'xs';
    }

    // Helper Functions explicitly requested
    function isMobile() {
        return window.innerWidth < breakpoints.md;
    }

    function isTablet() {
        return window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg;
    }

    function isDesktop() {
        return window.innerWidth >= breakpoints.lg;
    }

    // 2. MOTION HELPER (Ref: vedic-wisdom-motion.md)
    /**
     * Wait for an animation to finish on an element
     * @param {HTMLElement} element 
     */
    function waitForAnimation(element) {
        return new Promise(resolve => {
            function handleAnimationEnd() {
                element.removeEventListener('animationend', handleAnimationEnd);
                resolve();
            }
            element.addEventListener('animationend', handleAnimationEnd, { once: true });
        });
    }

    // 3. RESIZE LISTENER (Ref: vedic-wisdom-responsive.md)
    // "Listen for resize" with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            console.log('Resized. Current BP:', getCurrentBreakpoint());
            // Logic to handle resize end can go here
            $(window).trigger('vedic-resize-end');
        }, 150); // Standard debounce time
    });

    // 4. EXPOSE API
    window.VedicEngine = {
        breakpoints,
        getCurrentBreakpoint,
        isMobile,
        isTablet,
        isDesktop,
        waitForAnimation
    };

    // 5. INIT
    $(window).on('load', function() {
        console.log('Vedic System Active.');
        document.body.classList.add('vedic-ready');
    });

})(jQuery);