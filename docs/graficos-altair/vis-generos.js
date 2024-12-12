const spec_generos = {
    "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
    "data": {"name": "data-f4dae9cfd82ba338f3b2f5ab8ea0711d"},
    "mark": "bar",
    "encoding": {
        "color": {
            "field": "Cantidad",
            "scale": {"scheme": "reds"},
            "title": "Cantidad",
            "type": "quantitative"
        },
        "tooltip": [
            {"field": "Género", "type": "nominal"},
            {"field": "Cantidad", "type": "quantitative"}
        ],
        "x": {
            "field": "Cantidad",
            "title": "Cantidad de Libros",
            "type": "quantitative"
        },
        "y": {"field": "Género", "sort": "-x", "title": "Género", "type": "nominal"}
    },
    "height": 400,
    "title": "Top 15 Géneros Más Vendidos",
    "width": 600,
    "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
    "datasets": {
        "data-f4dae9cfd82ba338f3b2f5ab8ea0711d": [
            {"Género": "Autobiografía", "Cantidad": 476},
            {"Género": "Thriller", "Cantidad": 331},
            {"Género": "Romance", "Cantidad": 288},
            {"Género": "Romance Contemporáneo", "Cantidad": 214},
            {"Género": "Historia", "Cantidad": 200},
            {"Género": "Política", "Cantidad": 146},
            {"Género": "Ficción Histórica", "Cantidad": 139},
            {"Género": "Autoayuda", "Cantidad": 131},
            {"Género": "Ensayo", "Cantidad": 119},
            {"Género": "Biografía", "Cantidad": 99},
            {"Género": "Misterio", "Cantidad": 85},
            {"Género": "Ficción Contemporánea", "Cantidad": 80},
            {"Género": "Fantasía", "Cantidad": 79},
            {"Género": "Ciencia", "Cantidad": 73},
            {"Género": "Drama", "Cantidad": 62}
        ]
    }
};
vegaEmbed("#vis-generos", spec_generos, {mode: "vega-lite"}).then(console.log).catch(console.warn);
