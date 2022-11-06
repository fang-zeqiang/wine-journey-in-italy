var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZmFuZ3pxIiwiYSI6ImNsYTR3dzk3ZzBvZW8zbm83Nmd0MnJxbnQifQ.jFs26VO3jkx7TbJt9id4-w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'The wine journey in Italy',
    subtitle: "Let's explore the stories behind Italian wine",
    byline: 'By Franklin Fang',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Lombardy, Italy',
            image: 'https://static01.nyt.com/images/2020/05/21/dining/21pour2/21pour2-mobileMasterAt3x.jpg',
            description: 'Chapter One Content',
            location: {
                center: [45.6897653,9.3920696],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Emilia-Romagna, Italy',
            image: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/08/12140446-aldo-conterno-granbussia_cover_1331x2000.jpg',
            description: 'Chapter Two Content',
            location: {
                center: [42.4519692,14.1513502],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Tatler Asia',
            image: 'https://cdn.tatlerasia.com/asiatatler/i/hk/2020/08/12140440-guidalberto-2018_cover_1333x2000.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [40.8913118,14.240508],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: "Saracco Moscato d' Asti",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGabM44CPjChjKKWXlIdR65-i3yev1svtQ3A&usqp=CAU',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [38.9175269,16.5508681],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
