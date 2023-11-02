"""
P parameters - n = interger representing the row we want to sum (0 - Infinity)
R return value - interger rep sum of that nth row
E examples:
1 -> (1) => 1
2 -> (3 5) => 8
3 -> (7 9 11) => 27
5 -> (21 23 25 27 29) => 125
    - We can determine that there will be N entries in row N
    - We can also determine that the first element in in N, (X) divided by N = 1
        => row 5 => 21 % 5 = 1
        => row 3 => 7 % 3 = 1 ...
        => row N => X % N = 1 - here's our formula, need to balence this formula to get X,
        which is our first element.
        
    New strategy
    Count up by odd numbers until we reach the Nth row.
    row = 1, digits = 1, sum = 1
    row = 2, digits = 2, sum = (3 5) = 8
    row = 3, digits = 3, sum = (7 9 11) = 27
    row = 4, digits = 4, sum = (13 15 17 19) = 64
    
    
    n 
    row = 0
    count = 1
    # iterate rows
    for(i = 0; i < n; i++):
        row_digits = []
        for(j = count; j < n; j++):
            row_digits.append(j + 2)
            count++
"""

def row_sum_odd_numbers(n):
    print (f'#### n = {n} ####')
    count = -1
    num_of_elements_in_row = 1
    pyramid = []
    for row in range(0, n):
        print(f'row => {row}')
        row_digits = []
        for digit in range(0, num_of_elements_in_row):
            count += 2
            row_digits.append(count)
        pyramid.append(row_digits)
        num_of_elements_in_row += 1
    print(f'pyramid => {pyramid}')

    return sum(pyramid[n - 1])


r = row_sum_odd_numbers(5)

print(f"r => {r}")