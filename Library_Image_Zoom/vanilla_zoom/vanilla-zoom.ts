(function (window:Object) {
    function define_library(){
        let vanillaZoom:Object = {};
        vanillaZoom.init = function (gallery:string) {
            console.log("Hello VJS");
            let container = document.querySelector<HTMLDivElement>(gallery)
            if (!container)
            {
                console.error("Please specify the correct class of your galley");
                return
            }
            let firstSmallImage = container.querySelector<HTMLImageElement>(".small-preview")
            let zoomedImage = container.querySelector<HTMLDivElement>(".zoomed-image")
            if (!firstSmallImage)
            {
                console.error("Please add images with the .small-preview class to your galley");
                return
            } else
            {
                zoomedImage?.style.backgroundImage = `url(${firstSmallImage.src})`;
            }
            if (!zoomedImage)
            {
                console.error("Please add .zoomed-image element to your galley");
                return
            }
            container.addEventListener("click", (e) => {
                let elem = e.target;
                console.log(elem);
                if (elem?.classList.contains("small-preview"))
                {
                    let imageSrc: EventTarget = elem.src;
                    zoomedImage?.style.backgroundImage = `url(${imageSrc})`
                }
            })
            zoomedImage.addEventListener("mouseenter", (e) => {
                this.style.backgroundSize = "250%"
            }, false)
            zoomedImage.addEventListener("mouseleave", (e) => {
                this.style.backgroundSize = "cover"
                this.style.backgroundPosition = "center"
            }, false)
            zoomedImage.addEventListener("mousemove", (e) => {
                let dimention = this.getBoundingClientRect()
                let x = e.clientX - dimention.left;
                let y = e.clientY - dimention.top;
                let xpercent = Math.round(100 / (dimention.width / x))
                let ypercent = Math.round(100 / (dimention.height / y))
                this.style.backgroundPosition = xpercent+"% "+ypercent+"%"
            }, false)
        }
        return vanillaZoom;
    }
    if (typeof(vanillaZoom) == 'undefined')
    {
        window.vanillaZoom = define_library();
    }
    else
    {
        console.log("Library already defined.");
    }
})(window)