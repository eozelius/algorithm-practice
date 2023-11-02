"""
Params - string roman numeral

Return value - int rep of roman numeral

Exceptions -
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Examples
'I' => 1
'III' => 3
'IV' => 4
'XII' => 7
'IX => 9
'X' => 10
'XIV' => 14
'XXIV' => 24
'XXXIX' => 39
'XL' => 40
'XLIX' => 49

'L' => 50
'LXI' => 61
'LXXIV' => 74
'LXXXIX' => 89
'XCIV' => 94
'CDXCIX' => 499
'CMXXXIV' = 934
"""

class Solution:
    def roman_to_int(self, r: str) -> int:
        print(f' ### r: {r} ###')
        return_sum = 0

        # map char to nums
        r_num_to_int = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        letters = [l for l in r]

        # iter thru r, finding current and next
        for idx, current_letter in enumerate(letters):
            print(f' >> sum => {return_sum} <<')

            # prevent index out of range
            if idx == len(letters) - 1:
                # return_sum += r_num_to_int[current_letter]
                print(f'idx = 0, adding {r_num_to_int[current_letter]}')
                break

            next_letter = r[idx + 1]
            print(f'current => {current_letter}; next_letter > {next_letter}')

            # if current < next, then we know an exception has occured,
            # so subtract current_letter's val from sum
            if r_num_to_int[current_letter] < r_num_to_int[next_letter]:
                return_sum -= r_num_to_int[current_letter]
            # otherwise, just add the current_letter's val to sum
            else:
                return_sum += r_num_to_int[current_letter]

        # return current sum + int val of last digit, since we know that the last
        # digit will never be an exception
        return return_sum + r_num_to_int[r[-1]]


# Test solution
sol = Solution()
inputs = dict(
    I = 1,
    III = 3,
    IV = 4,
    VII = 7,
    IX = 9,
    X = 10,
    XIV = 14,
    XXIV = 24,
    XXXIX = 39,
    XL = 40,
    XLIX = 49,
    L = 50,
    LXI = 61,
    LXXIV = 74,
    LXXXIX = 89,
    XCIV = 94,
    CDXCIX = 499,
    CMXXXIV = 934,
)

for key, val in inputs.items():
    print(f'/// testing {key}: {val} /// ')
    response = sol.roman_to_int(key)
    if response != val:
        print(f'       {key}: {val} FAILURE.  Received {response}')
        raise Exception('ka boom')
    else:
        print(f'       {key}: {val} SUCCESS!! :)')
