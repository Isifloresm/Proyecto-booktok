# Constanza Mora 
## Explicación proceso de visualización, cada paso y decisión tomada.

En primer lugar, decidí cuál variable es la que me interesaba investigar, por lo que elegí centrarme en los 10 autores más destacados del año 2023 en términos de presencia en el ranking de los libros más vendidos del New York Times

Antes de realizar la visualización, limpié los datos que se encontraban en la base de datos original que consideraba la semana, categoria, posición en el ranking, autor, título, tiempo en el ranking y género, y dejé solamente las variables de:
- Semana (del 1 de enero al 31 de diciembre).
- Ranking (del 1 al 15 en la categoría de ficción y del 1 al 15 en la de no ficción)
- Autor
- Semanas que lleva en el ranking.

Se utilizó un archivo CSV llamado db-v2.csv.Inicalmente tenía uno llamado Copia Base de Datos Constanza Mora, pero el programa no lo pudo leer bien y lo traspasé a Markdown.
## Paso a paso

El archivo fue leído utilizando la biblioteca pandas de Python con el siguiente comando:

*data = pd.read_csv(file_path, sep=';', encoding='utf-8')*

La separación de columnas en el archivo se realizó por ;.

La columna Semanas en ranking se convirtió a tipo numérico, descartando valores no válidos con:

*data['Semanas en ranking'] = pd.to_numeric(data['Semanas en ranking'], errors='coerce')*

Se eliminó cualquier entrada duplicada de autores en una misma semana, ya que cada autor debía ser considerado una sola vez por semana. Esto se hizo con:

*data_unique = data.drop_duplicates(subset=['Autor', 'Semana'])*

Se contó el número de semanas únicas que cada autor estuvo presente en el ranking usando:

*top_authors = data_unique.groupby('Autor', as_index=False).size()*

Los resultados se ordenaron en orden descendente por la cantidad total de semanas y se seleccionaron los 10 autores principales:

*top_authors = top_authors.sort_values('Semanas en ranking', ascending=False).head(10)*

Se utilizó la biblioteca Altair para crear un gráfico de barras.

Cada autor fue representado con un color personalizado, definido en un diccionario de colores:

*author_colors = {
    'Bonnie Garmus': '#FF5733',
    'Bessel van der Kolk': '#33FF57',
    ...
}*

El gráfico incluyó ejes descriptivos, un título e información al pasar el cursor.

La visualización final se mostró en formato interactivo usando:

*chart.show()*

## Preguntas que responde la visualización
* ¿Quiénes fueron los autores con mayor presencia en el ranking de los más vendidos del NYT en 2023?
* ¿Cómo se compara la cantidad de semanas entre los autores más populares?
* ¿Qué autores se posicionaron con más fuerza y lograron más de 30 semanas en el ranking?