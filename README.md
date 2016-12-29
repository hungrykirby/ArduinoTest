at node_modules/johnny-five/lib/compass.js

you must add

raw: {
    get: function () {
        return raw;
    }
},
