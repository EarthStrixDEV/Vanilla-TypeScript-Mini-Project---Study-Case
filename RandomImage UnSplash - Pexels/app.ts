const container = document.querySelector<HTMLDivElement>('.container')
const form = document.querySelector<HTMLFormElement>('form')
const row:number = 30
const cols:number = 4
var apiKey:string = "563492ad6f91700001000001479e896764a14390a1d66173789721d9"
function randomNumber() {
    return Math.floor(Math.random()*500);
}
function showImages() {
    container?.innerHTML = "";
    for(let i:number = 0; i < row * cols; i++)
    {
        const url:string = `https://source.unsplash.com/random/${randomNumber()}`
        const imageEl = document.createElement('img')
        imageEl.src = url
        container?.appendChild(imageEl)
    }
}
function clearPage() {
    container?.innerHTML = "";
}

form?.addEventListener('submit', async(e:Event) => {
    e.preventDefault()
    container?.innerHTML = "";
    let search = document.querySelector<HTMLInputElement>('#search')?.value
    if (search == "")
    {
        alert("Please enter your data!!!")
        return;
    }
    const url: string = `https://api.pexels.com/v1/search?query=${search}&page=1`
    const res = await fetch(url,{
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: apiKey
        }
    })
    let data = await res.json()
    console.log(data);
    data.photos.forEach((image: any) => {
        const item_container = document.createElement('div')
        const img = document.createElement('img')
        const desc = document.createElement('p')
        const photographer = document.createElement('small')
        img.src = image.src.large
        desc.innerHTML = image.alt
        photographer.innerHTML = image.photographer
        item_container?.setAttribute('class', 'item-container')
        item_container?.appendChild(img)
        item_container?.appendChild(desc)
        item_container?.appendChild(photographer)
        container?.appendChild(item_container)
    });
})