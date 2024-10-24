# Cómo se realizó el proceso de limpieza de datos

## Pasos limpieza de datos
1. **Recopilar los datos de los libros más leídos (Best Sellers) de la página web del New York Times**, sección BOOKS, desde el 1 de enero de 2023 hasta el 31 de diciembre de 2023
1. **Definir variables para las columnas**:
* Semana
* Categoría: Combined Print & E-Book Fiction; Combined Print & E-Book Nonfiction.
* Ranking: del 1 al 15 por cada categoría (1-15 en Ficción, y 1-15 en no ficción cada semana del 2023).
* Título del libro.
* Autor del libro.
* Número de semanas que lleva dentro del ranking.
* Género al que pertenece.
3. **Traspasar todos los datos manualmente**: New York Times contabilizó 53 semanas para el ranking semanal en 2023, cada semana tiene un ranking de 15 libros de Ficción y 15 libros de No Ficción, por lo que cada semana tuvo un total de 30 datos. Esto me dio un total de 1590 datos.

## Fuentes de datos utilizadas
Se utilizó la página web del New York Times, sección "books", en las categorías de Combined Print % E-Book Fiction y Combined Print & E-Book Nonfiction. Esto debido a que nos permitiría conocer la popularidad de ciertos libros y géneros a lo largo del año para luego poder relacionarlo con nuestra hipótesis.

[Este es el enlace](https://www.nytimes.com/books/best-sellers/)

## Preguntas que se podrían hacer y resolver con esta base de datos
1. ¿Cuál es el título que más se ha repetido a lo largo del 2023?
2. ¿Cuáles son los géneros literarios más populares en 2023?
3. ¿Qué autores han tenido más éxito en el ranking al pertenecer por más tiempo?
4. ¿Hay una correlación entre la época del año y el libro/género más leído?

