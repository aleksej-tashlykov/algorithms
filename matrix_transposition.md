#### Задать матрицу. Вывести транспонированную.

##### Алгоритм
1. Начало программы.
2. Объявить исходную матрицу как двумерный массив.
    - Например: `let matrix = [[1, 2, 3], [4, 5, 6]]`
3. Проверить, что матрица не пустая и имеет хотя бы одну строку.
4. Определить размеры матрицы:
    - Количество строк: `rows = matrix.length`
    - Количество столбцов: `cols = matrix[0].length`
5. Создать новую пустую матрицу `transposedMatrix` размером `cols x rows`.
6. Организовать вложенные циклы:
    - Внешний цикл по столбцам исходной матрицы (`j = 0` до `cols - 1`)
    - Внутренний цикл по строкам исходной матрицы (`i = 0` до `rows - 1`)
    - На каждом шаге добавить `matrix[i][j]` в соответствующую строку транспонированной матрицы
7. После заполнения вывести транспонированную матрицу на экран.
8. Конец программы.