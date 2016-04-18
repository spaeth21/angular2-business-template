System.register(['./create/create.component', './dashboard/dashboard.component', './orders/orders.component', './quotes/quotes.component', './schedule/schedule.component', './create/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (create_component_1_1) {
                exportStar_1(create_component_1_1);
            },
            function (dashboard_component_1_1) {
                exportStar_1(dashboard_component_1_1);
            },
            function (orders_component_1_1) {
                exportStar_1(orders_component_1_1);
            },
            function (quotes_component_1_1) {
                exportStar_1(quotes_component_1_1);
            },
            function (schedule_component_1_1) {
                exportStar_1(schedule_component_1_1);
            },
            function (index_1_1) {
                exportStar_1(index_1_1);
            }],
        execute: function() {
        }
    }
});
