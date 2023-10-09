const from = document.querySelector("#search_movie")

from.addEventListener('submit', async (e) => {

    e.preventDefault();

    const keyword = from.elements.query.value;
    const config = {
        params : {
            q: keyword
        },
    }

    const res = await axios.get(" https://api.tvmaze.com/search/shows", config);
    image(res.data)
    from.elements.query.value = " ";
    console.log(res.data);

})

const image = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}