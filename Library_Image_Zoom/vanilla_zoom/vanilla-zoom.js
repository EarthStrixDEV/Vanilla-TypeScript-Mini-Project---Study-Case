(function (window) {
    function define_library() {
        var vanillaZoom = {};
        vanillaZoom.init = function (gallery) {
            var _this = this;
            console.log("Hello VJS");
            var container = document.querySelector(gallery);
            if (!container) {
                console.error("Please specify the correct class of your galley");
                return;
            }
            var firstSmallImage = container.querySelector(".small-preview");
            var zoomedImage = container.querySelector(".zoomed-image");
            if (!firstSmallImage) {
                console.error("Please add images with the .small-preview class to your galley");
                return;
            }
            else {
                zoomedImage === null || zoomedImage === void 0 ? void 0 : zoomedImage.style.backgroundImage = "url(".concat(firstSmallImage.src, ")");
            }
            if (!zoomedImage) {
                console.error("Please add .zoomed-image element to your galley");
                return;
            }
            container.addEventListener("click", function (e) {
                var elem = e.target;
                console.log(elem);
                if (elem === null || elem === void 0 ? void 0 : elem.classList.contains("small-preview")) {
                    var imageSrc = elem.src;
                    zoomedImage === null || zoomedImage === void 0 ? void 0 : zoomedImage.style.backgroundImage = "url(".concat(imageSrc, ")");
                }
            });
            zoomedImage.addEventListener("mouseenter", function (e) {
                this.style.backgroundSize = "250%";
            }, false);
            zoomedImage.addEventListener("mouseleave", function (e) {
                this.style.backgroundSize = "cover";
                this.style.backgroundPosition = "center";
            }, false);
            zoomedImage.addEventListener("mousemove", function (e) {
                var dimention = this.getBoundingClientRect();
                var x = e.clientX - dimention.left;
                var y = e.clientY - dimention.top;
                var xpercent = Math.round(100 / (dimention.width / x));
                var ypercent = Math.round(100 / (dimention.height / y));
                this.style.backgroundPosition = xpercent + "% " + ypercent + "%";
            }, false);
        };
        return vanillaZoom;
    }
    if (typeof (vanillaZoom) == 'undefined') {
        window.vanillaZoom = define_library();
    }
    else {
        console.log("Library already defined.");
    }
})(window);
