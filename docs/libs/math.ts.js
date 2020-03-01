"use strict";
// src/index.ts
var MathTS;
(function (MathTS) {
    function randn() {
        var u, v, x, y, q;
        do {
            u = Math.random();
            v = 1.7156 * (Math.random() - 0.5);
            x = u - 0.449871;
            y = Math.abs(v) + 0.386595;
            q = x * x + y * (0.19600 * y - 0.25472 * x);
        } while (q > 0.27597 && (q > 0.27846 || v * v > -4 * Math.log(u) * u * u));
        return v / u;
    }
    var Normal = /** @class */ (function () {
        function Normal() {
        }
        Normal.sample = function (mean, std) {
            return randn() * std + mean;
        };
        Normal.sampleN = function (N, mean, std) {
            var result = new Array(N);
            for (var i = 0; i < N; i++) {
                result[i] = Normal.sample(mean, std);
            }
            console.log("result != " + result);
            return result;
        };
        return Normal;
    }());
    MathTS.Normal = Normal;
    function sum(a, b) {
        return a + b;
    }
})(MathTS || (MathTS = {}));
