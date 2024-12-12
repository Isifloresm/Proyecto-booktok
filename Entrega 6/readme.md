# Información General Entrega 06
La creación de nuestra página web se basó en un proceso con diferentes ejes de trabajo, desde la creación de los códigos, la redacción del reportaje completo, hasta la implementación de gráficos interactivos.

Para poder comprobar nuestra hipótesis inicial que afirma que las redes sociales, específicamente TikTok y su comunidad literaria (BookTok), influyen de manera positiva en la venta de libros realizamos un análisis de dos factores. 
###  New York Times
El New York Times publica semanalmente un listado de los 15 libros más vendidos, [Bestsellers](https://www.nytimes.com/books/best-sellers/), en doce categorías que abarcan desde literatura infantil, hasta literatura Young Adult (adulto joven). Para nuestro análisis decidimos centrarnos en las categorías **Combined Print & E-Book Fiction** y **Combined Print & E-Book Nonfiction**, debido a que al abarcar tanto libros impresos como electrónicos nos permite acceder a un mayor espectro de obras, además, las categorías de Ficción y No Ficción al ser más generales también contribuyen a acceder a una oferta literaria más amplia y con mayor espacio para los diversos gustos de los lectores que pueden ser de diferentes grupos etarios.

Al centrarnos en estas dos categorías pudimos recopilar 30 libros por semana, y considerando que analizamos estos datos durante las 52 semanas del año 2022 y las 52 semanas del año 2023, pudimos obtener más de 3000 registros de los libros más vendidos en estos dos años.

Esta información fue traspasada a una base de datos con las variables de _Semana_, _Título_, _Autor_, _Género_, _Posición en el ranking_, y _Semanas que lleva en el ranking_, para posteriormente realizar un análisis y crear gráficos con los libros, géneros, y autores más vendidos.

### TikTok
Nuestro segundo factor de análisis se basó en las métricas de la red social Tiktok. Al ser el centro de la comunidad literaria, seleccionamos los cinco videos más virales del año 2021, 2022 y 2023 que utilizaran el #BookTok. Posteriormente construimos una base de datos con las variables de _Video_, _Libros mencionados_, _Autores mencionados_, _Géneros literarios_, _Cantidad de likes_, _Cantidad de comentarios_, _Veces que se guardó el video_, _Cantidad de visualizaciones_.

A partir de estos datos se realizaron los mismos gráficos que los creados con la base de datos del New York Times, es decir, gráficos que evidencien los libros, autores y géneros más mencionados, pero esta vez desde la viralidad de los videos. 
### Gráficos

Para la construcción de los siete gráficos, se utilizaron los programas de Altair y Flourish para su desarrollo. Considerando la dificultad de cada uno, de la cantidad de datos, categorías y finalidad, tres fueron construidos en Altair y cuatro en Flourish. En el caso de los gráficos con Altair tuvimos cierta dificultad a la hora de agregarlos a la página y que no se desconfigurara por el tamaño.

### Diseño de la Página Web
La página web fue diseñada a partir de lo determinado en trabajos anteriores, como la identidad visual, donde se definió una paleta de colores, elementos visuales y un identificador visual.

Nuestro objetivo principal fue hacer que el diseño de la página se pareciera al de una página de un libro, debido a la temática de nuestra investigación. Por lo mismo, utilizamos una tipografía similar a la de las páginas de libros, colores y tonalidades más suaves, a excepción del utilizado para los subtítulos, también dividimos las secciones por "capítulos", utilizamos un fondo blanco parecido al de una página de una obra digital, y agregamos la numeración de páginas en el costado inferior derecho. El fondo de la página por su parte también simboliza una hoja arrugada.

Para el diseño visual trabajamos con el CSS, para definir los colores claros, las tipografías y las animaciones, especialmente la animación del libro que aparece al inicio. 
### Cambios en la página
**Logo y Favicon**: Creamos un logo y un favicon con nuestro logo. El logo tiene los colores de nuestra identidad visual y representa el tema principal de nuestra investigación: los libros y las redes sociales, por eso se muestra una pluma "escribiendo" en un teléfono. Esto lo creamos a través de la página de favicon y añadimos el código al html y el css. 

**Menú**: Decidimos crear un menú con Javascript para que la página tenga un contenido más interactivo y sea más fácil de usar para el usuario identificar los diferentes capítulos y secciones.


**Título**: Cambiamos el títular de "De hashtags a bestsellers: La nueva era del mercado literario", a "#Bestsellers: La nueva era del mercado literario", con la finalidad de tener un titular más conciso y creativo.

**Imágenes e infografías**: Agregamos una imagen de Colleen Hoover, la autora en la cual se centra la historia principal de nuestro reportaje, al inicio de la página, para que el usuario pueda identificarla en caso de no conocerla. También a sugerencia de las profesores agregamos dos infografías para evitar el exceso de texto, una fue en la sección de los premios Goodreads 2022, y otra en la sección de la crónica de la dominancia femenina para evidenciar a las ocho autoras y dos autores. Además, en la sección del final agregamos dos imágenes de las autoras que consideramos que podrían tener el mismo éxito que Colleen Hoover en unos años más: Emily Henry y Taylor Jenkins Reid.

**Gráficos**: Primero cambiamos los colores que representan a Colleen Hoover en los gráficos, ya sea haciéndolo de un color más fuerte que el resto, o en caso de tener varias alusiones en un solo gráfico, cambiar todas sus menciones a un solo color para que sea más fácil de identificar sus repeticiones. Además, agregamos dos gráficos más para la sección de los géneros más vendidos en el caso del ranking del NYT, y de los géneros más mencionados en el caso de TikTok. Para la crónica también añadimos un gráfico de barra más que evidencia la relación entre autores hombres y mujeres mencionados en TikTok durante 2021, 2022 y 2023.

**Sección Géneros**: Añadimos un capítulo aparte para evidenciar la diferencia de los géneros preferidos por los lectores en las dos plataformas. Si bien detectamos varias coincidencias en términos de autores y libros, en los géneros sí se presentó una variación, por lo que decidimos que también era algo importante de evidenciar: en el caso del NYT, notamos que los géneros preferidos era autobiografía y thriller, mientras que en TikTok estos fueron Romance y Ficción. Acá utilizamos dos gráficos, uno hecho en Altair y otro en Flourish.

**Crónica**: Para nuestro capítulo 5 añadimos una crónica que evidencia otro de nuestros hallazgos más importantes: hay más mujeres escritoras más reconocidas que hombres. En el listado de los best sellers del NYT, vimos que solo 2 autores eran hombres, mientras que el resto eran solo escritoras mujeres. Aquí agregamos una infografía para mostrar los rostros de los autores para que para el usuario le sea más fácil de identificar. 

**Predicciones**: También añadimos una sección en el capítulo final con las predicciones de quiénes podrían ser las próximas autoras que tengan un éxito similar a Colleen Hoover para realizar un cierre completo de toda nuestra investigación. 



## Conclusión
El reportaje fue realizado a través de un diseño integral en el que todas partes colaboraron. F ue escrito a partir de la hipótesis mencionada, se realizó una breve introducción y pensando en términos de redacción digital utilizamos el caso de Colleen Hoover, para hacer más dinámica la lectura. Luego presentamos el fenómeno es acompañado de los elementos visuales creados y que complementan la narración. Finalmente, tras un análisis profundo, en la conclusión se da por corroborada la idea de que BookTok influye de manera positiva en el mercado literario. 

## Ponderador de autoría
**Isidora Flores**:Realizó la redacción de la última parte del reportaje, además se encargó de mejorar el código de la pagina, por ejemplo al agregar un menú, el logo , entre otras cosas. AgregÓ fotos y realizó las infografías. También realizó un gráfico en Altair sobre los géneros más vendidos según el new York times, ayudó en redacción y diseño del handout  y por último  se encargó  del análisis de las visualizaciones atómicas

**Alanis Arancibia**:A partir de los rankings de The New York Times de 2021, elaboró una base de datos clasificando los libros más vendidos según categorías como género, autor, año de publicación y posición en el ranking, entre otros. Paralelamente, creó una base de datos con las métricas de TikTok de ese mismo año, centrada en los videos más virales. Como parte del proyecto, construyó gráficos para analizar y visualizar la información. Usó Altair para clasificar los libros más vendidos según decisiones editoriales, aunque finalmente este gráfico quedó fuera del reportaje por motivos estratégicos. La mayoría de las visualizaciones fueron creadas con Flourish, tras un análisis y selección de los datos más relevantes. Además, tuvo la oportunidad de contribuir en la redacción de la sección final del reportaje.

**Constanza Mora**: Creó los primeros códigos de la página web para su estructura general y el diseño en el CSS, añadiendo las páginas blancas, la tipografía, el número de página abajo, los capítulos, todo el diseño de la página web que se asemeja a un libro. También realizó la redacción y edición del reportaje y del handout, y el readme general. Además creó la base de datos del New York Times del 2023 y la del Tiktok del 2023. Por último diseñó el logo para el favicon. 