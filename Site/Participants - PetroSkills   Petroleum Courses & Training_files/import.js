/**
 * Require the vendors.
 */


require( [ "vendors/jQuery", "vendors/underscore", "vendors/pixastic" ], function(){
        require( [ "vendors/backbone", "vendors/zebra_datepicker" ], function(){
            /**
             * Require the libaray, and application core.
             */
            require( ["Core"], function(){

            });
        });
} );

