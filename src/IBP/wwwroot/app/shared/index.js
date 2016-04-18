System.register(['./panel/headerBlockComponent', './panel/panelBodyComponent', './footer/footerContent', './navbar/navContent', './sidebar/sidebar.component'], function(exports_1, context_1) {
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
            function (headerBlockComponent_1_1) {
                exportStar_1(headerBlockComponent_1_1);
            },
            function (panelBodyComponent_1_1) {
                exportStar_1(panelBodyComponent_1_1);
            },
            function (footerContent_1_1) {
                exportStar_1(footerContent_1_1);
            },
            function (navContent_1_1) {
                exportStar_1(navContent_1_1);
            },
            function (sidebar_component_1_1) {
                exportStar_1(sidebar_component_1_1);
            }],
        execute: function() {
        }
    }
});
