var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var colors;
var span;
var RingStack = /** @class */ (function () {
    function RingStack(series, options) {
        if (options === void 0) { options = {}; }
        this.series = series;
        this.options = options;
        this.index = -1;
    }
    RingStack.prototype.burn = function (index) {
        if (index === void 0) { index = -1; }
        var burnIx = index === -1 ? this.index : index % this.series.length;
        if (burnIx === -1) {
            burnIx = 0;
        }
        var val = this.series[burnIx];
        var trimmed = [];
        this.series.forEach(function (c, ix) {
            if (ix !== burnIx) {
                trimmed.push(c);
            }
        });
        this.series = trimmed;
        this.reset(index);
        return val;
    };
    RingStack.prototype.burnRandom = function () {
        var index = Math.floor(Math.random() * this.series.length);
        return this.burn(index);
    };
    RingStack.prototype.duplicate = function () {
        return new RingStack(this.series);
    };
    RingStack.prototype.dict = function (names) {
        var _this = this;
        var ret = {};
        names.forEach(function (c, ix) {
            var key = names[ix];
            ret[names[ix]] = key === "bg" ? _this.background() : _this.next();
        });
        return ret;
    };
    RingStack.prototype.get = function (index) {
        if (index === undefined) {
            return this.get(this.index);
        }
        return this.series[index % this.series.length];
    };
    RingStack.prototype.next = function (count) {
        if (count === void 0) { count = 1; }
        this.reset(this.index + 1);
        if (count === 1) {
            return this.get(this.index);
        }
        var ret = [];
        for (var i = 0; i < count; i++) {
            ret.push(this.get(this.index + i));
        }
        return ret;
    };
    RingStack.prototype.random = function () {
        var index = Math.floor(Math.random() * this.series.length);
        return this.series[index];
    };
    RingStack.prototype.reset = function (ix) {
        if (ix === void 0) { ix = 0; }
        this.index = ix % this.series.length;
        return this;
    };
    RingStack.prototype.shuffle = function () {
        this.series = this.series.sort(function () { return Math.random() - 0.5; });
        return this;
    };
    RingStack.prototype.background = function () {
        if (!this.options.background) {
            this.options.background = this.burnRandom();
        }
        return this.options.background;
    };
    return RingStack;
}());
var ColorStack = /** @class */ (function (_super) {
    __extends(ColorStack, _super);
    function ColorStack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorStack.prototype.duplicate = function () {
        return new ColorStack(this.series);
    };
    ColorStack.prototype.background = function () {
        if (!this.options.background) {
            this.options.background = this.burnRandom();
        }
        return this.options.background;
    };
    ColorStack.prototype.stroke = function () {
        if (!this.options.stroke) {
            this.options.stroke = this.burnRandom();
        }
        return this.options.stroke;
    };
    ColorStack.prototype.nextWithOpacity = function (opacity) {
        var val = this.next();
        var r = val.slice(1, 3);
        var g = val.slice(3, 5);
        var b = val.slice(5, 7);
        var rgba = "rgba(" + parseInt(r, 16) + ", " + parseInt(g, 16) + ", " + parseInt(b, 16) + ", " + opacity + ")";
        return rgba;
    };
    return ColorStack;
}(RingStack));
function chromatoneColors(pallette) {
    var chroma = chromotome.get(pallette);
    return new ColorStack(chroma.colors, chroma);
}
// --- drawing funcs
function SawTooth(x, y, span, teeth, fg, triangleWidth) {
    var increment = (2 * PI) / teeth;
    noStroke();
    fill(fg);
    for (var i = 0; i < teeth; i++) {
        i > 0 && rotate(increment);
        triangle(0, -span / triangleWidth, 0, span / triangleWidth, span / 2, 0);
    }
}
// --- main
var usableHeight = 500;
var usableWidth = 500;
function setup() {
    var square = min(windowHeight - 250, windowWidth - 100);
    usableHeight = square;
    usableWidth = square;
    createCanvas(usableWidth, usableHeight);
    colors = chromatoneColors();
    background(colors.background());
    var smaller = min(usableHeight, usableWidth);
    span = smaller / 4.25;
    var frameSpeed = Math.floor(Math.random() * 10) + 7;
    frameRate(frameSpeed);
}
var running = true;
function keyPressed(code) {
    console.log("code", code);
    if (!running) {
        running = true;
        loop();
    }
    else {
        running = false;
        noLoop();
    }
}
function Lotus(x, y, span, petals, petalColor, innerColor, dotColor) {
    push();
    translate(x, y);
    SawTooth(0, 0, span, petals, petalColor, 2);
    var seg = PI / petals;
    for (var i = 0; i < petals * 2; i++) {
        rotate(seg);
        fill(innerColor);
        circle(span / 4, 0, span / 12);
        triangle(span / 6, span / 16, span / 6, -span / 16, span / 3, 0);
        fill(dotColor);
        circle(span / 5, 0, span / 32);
    }
    noFill();
    strokeWeight(span / 48);
    stroke(petalColor);
    circle(0, 0, span / 3.1);
    pop();
}
function drawAll(color, span, r) {
    var s1 = colors.next();
    var fg1 = colors.next();
    var fg2 = colors.next();
    //drawingContext.shadowBlur = 20;
    //drawingContext.shadowColor = colors.nextWithOpacity(0.8);
    Lotus(0, 0, span * 1.5, 6, s1, fg1, fg2);
    rotate(-r);
    s1 = colors.next();
    fg1 = colors.next();
    fg2 = colors.next();
    var s1b = colors.next();
    var fg1b = colors.next();
    var fg2b = colors.next();
    var seg = PI / 6;
    for (var i = 0; i < 12; i++) {
        (i > 0) && rotate(seg);
        if (i % 2 === 0) {
            Lotus(span * 2, 0, span * 0.66, 8, s1b, fg1b, fg2b);
            stroke(s1);
            strokeWeight(span / 32);
            line(span * 0.8, 0, span * 1.6, 0);
            noStroke();
        }
        else {
            Lotus(span * 1.5, 0, span, 8, s1, fg1, fg2);
        }
    }
}
function draw() {
    clear();
    colors.reset();
    translate(usableWidth / 2, usableHeight / 2);
    drawAll(color, span, frameCount % (40 * PI));
}
