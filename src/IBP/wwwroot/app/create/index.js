System.register(['./client/client.component', './job/job.component', './salesperson/salesperson.component', './workorder/workorder.component'], function(exports_1, context_1) {
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
            function (client_component_1_1) {
                exportStar_1(client_component_1_1);
            },
            function (job_component_1_1) {
                exportStar_1(job_component_1_1);
            },
            function (salesperson_component_1_1) {
                exportStar_1(salesperson_component_1_1);
            },
            function (workorder_component_1_1) {
                exportStar_1(workorder_component_1_1);
            }],
        execute: function() {
        }
    }
});
