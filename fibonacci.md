#### Написать программу для вывода чисел Фибоначчи. Сделать вариант с рекурсией и без.

##### Рекурсивный вариант

1. Объявляем функцию `fibRecursive(n)`, которая будет вычислять n-е число Фибоначчи.
2. Если значение `n` равно 0, то возвращаем 0, потому что первое число Фибоначчи — это 0.
3. Если значение `n` равно 1, то возвращаем 1, потому что второе число Фибоначчи — это 1.
4. Во всех остальных случаях вызываем эту же функцию дважды: один раз с аргументом `n - 1`, второй раз с аргументом `n - 2`, и складываем результаты этих вызовов.
5. Запрашиваем у пользователя количество чисел Фибоначчи, которые он хочет увидеть, и сохраняем это число в переменную `n`.
6. Переводим введённое значение в целое число, чтобы использовать его в цикле.
7. Запускаем цикл от 0 до `n - 1`, чтобы вывести нужное количество чисел.
8. На каждой итерации цикла вызываем функцию `fibRecursive(i)` и выводим результат в консоль.

##### Итеративный вариант
1. Создаём функцию `fibIterative(n)`, которая будет выводить первые `n` чисел Фибоначчи без использования рекурсии.
2. Проверяем, если пользователь ввёл ноль или отрицательное число, то выводим сообщение об ошибке и прекращаем выполнение функции.
3. Объявляем две переменные: `a` и `b`, где `a = 0` — это первое число Фибоначчи, `b = 1` — второе.
4. Выводим в консоль значение переменной `a`, то есть первое число последовательности.
5. Запускаем цикл, который будет выполняться от 1 до `n - 1`, чтобы вывести оставшиеся числа.
6. В каждой итерации цикла:
    - Выводим текущее значение `b`, которое является следующим числом Фибоначчи.
    - Сохраняем текущее значение `b` во временную переменную `temp`, чтобы не потерять его при изменении.
    - Вычисляем новое значение `b` как сумму `a` и `b`.
    - Присваиваем переменной `a` значение из временной переменной `temp`, то есть предыдущее значение `b`.
7. После окончания цикла все запрошенные числа будут выведены.