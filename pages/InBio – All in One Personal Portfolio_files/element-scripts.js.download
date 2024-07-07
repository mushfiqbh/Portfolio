(function ($) {
    "use strict";

    var $document = $(document),
        $window = $(window),
        isEditMode = false;


    /**
     * Portfolio Filter Options
     * @param $scope
     * @param $
     * @constructor
     */
    var PortfolioFilter = function ($scope, $){
        var rn_portfolio_area = $scope.find('.rn-portfolio-area').eq(0);
        var uniq_id = rn_portfolio_area.attr('id');

        $('#' + uniq_id ).imagesLoaded(function () {
            // filter items on button click
            $('#' + uniq_id + ' .messonry-button').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('#' + uniq_id + ' .rn-filterable-portfolios').isotope({
                itemSelector: '.rn-filterable-portfolio-item',
                percentPosition: true,
                transitionDuration: '0.7s',
                layoutMode: 'fitRows',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.rn-filterable-portfolio-item',
                }
            });
        });

        $('#' + uniq_id + ' .messonry-button button').on('click', function (event) {
            $(this).siblings('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
            event.preventDefault();
        });
    }


    // Init 
	$(window).on('elementor/frontend/init', function () {
	    if(elementorFrontend.isEditMode()) {
	        isEditMode = true;
	    }
        elementorFrontend.hooks.addAction('frontend/element_ready/rainbow-portfolio-grid.default', PortfolioFilter);
    });


}(jQuery));