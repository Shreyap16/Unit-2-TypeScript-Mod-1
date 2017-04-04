var myfirsttypescript = (function () {
    function myfirsttypescript(message) {
        this.message = message;
    }
    myfirsttypescript.prototype.sayit = function () {
        return "<h1>" + this.message + "<h1>";
    };
    return myfirsttypescript;
}());
;
var hw = new myfirsttypescript("I Love TypeScript!");
document.body.innerHTML = hw.sayit(); 
