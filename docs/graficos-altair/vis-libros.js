const spec_libros = {
    "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
    "data": {"name": "data-4b550dc39cb2a45657ff00f897a9ad46"},
    "mark": "bar",
    "encoding": {
        "color": {
            "field": "Cantidad",
            "scale": {"scheme": "reds"},
            "type": "quantitative"
        },
        "tooltip": [
            {"field": "Título", "type": "nominal"},
            {"field": "Cantidad", "type": "quantitative"}
        ],
        "x": {
            "field": "Cantidad",
            "title": "Cantidad de Ventas",
            "type": "quantitative"
        },
        "y": {
            "axis": {"labelPadding": 10},
            "field": "Título",
            "sort": "-x",
            "title": "Título",
            "type": "nominal"
        }
    },
    "height": 400,
    "title": "Top 10 Libros según el ranking The New York Times",
    "width": 600,
    "background": "rgba(0, 0, 0, 0)",
    "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
    "datasets": {
        "data-4b550dc39cb2a45657ff00f897a9ad46": [
            {"Título": "THE BODY KEEPS THE SCORE", "Cantidad": 95},
            {"Título": "IT ENDS WITH US", "Cantidad": 82},
            {"Título": "THE SEVEN HUSBANDS OF EVELYN HUGO", "Cantidad": 80},
            {"Título": "VERITY", "Cantidad": 80},
            {"Título": "BRAIDING SWEETGRASS", "Cantidad": 65},
            {"Título": "CRYING IN H MART", "Cantidad": 62},
            {"Título": "ALL ABOUT LOVE", "Cantidad": 58},
            {"Título": "UGLY LOVE", "Cantidad": 57},
            {"Título": "LESSONS IN CHEMISTRY", "Cantidad": 53},
            {"Título": "I'M GLAD MY MOM DIED", "Cantidad": 50}
        ]
    }
};
vegaEmbed("#vis-libros", spec_libros, {mode: "vega-lite"}).then(console.log).catch(console.warn);
