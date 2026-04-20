Vue.component('joke-card', {
    props: ['icon_url','value'],
    template: `
        <div class="card h-100">
            <img :src="icon_url" class="card-img-top"  :alt="value">
            <div class="card-body">
                <p class="card-text">{{ value }}</p>
            </div>                
        </div>
    `
});

var app = new Vue({
    el: '#app',
    data: {
        title: 'Chuck Jokes Vue',
        message: 'Enjoy!! XD',
        chuck: [
            {
                "icon_url": "https://cinescopia.com/wp-content/uploads/2011/05/chuck-norris.jpg",
                "value": "Chuck Norris can skydive into outer space."
            },
            {
                "icon_url": "https://i.chzbgr.com/full/9130577664/hFE815140",
                "value": "The chief export of Chuck Norris is pain."
            },
            {
                "icon_url": "https://i.pinimg.com/474x/22/48/32/2248321c1e26a3f1966aff710d4fb79e.jpg",
                "value": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants."
            },
            {
                "icon_url": "https://hips.hearstapps.com/hmg-prod/images/chuck-norris-a-renegade-texas-ranger-in-a-scene-from-the-news-photo-1754389118.pjpeg?crop=1xw:0.82545xh;0.142xw,0.0144xh",
                "value": "Time waits for no man. Unless that man is Chuck Norris."
            },
            {
                "icon_url": "https://masterpiecer-images.s3.yandex.net/d8904105994011ee81f3c6a5b577b9fe:upscaled",
                "value": "If you spell Chuck Norris in Scrabble, you win. Forever."
            },
        ],
    },
});