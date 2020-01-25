import timeit, platform, random, math

def swap(arr, a, b):
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp

def generate_data(length):
    return random.sample(range(0, length), length)

def bubble_sort(arr):
    length = len(arr)
    for i in range(length-1):
        for j in range(length-i-1):
            if (arr[j] > arr[j+1]):
                swap(arr, j, j+1)
    return arr

# in place
def quick_sort(arr):
    if len(arr) == 0 or len(arr) == 1:
        return arr
    pivot = arr[0]
    right = 0
    for i in range(len(arr)-1):
        if arr[i+1] < pivot:
            swap(arr, i + 1, right + 1)
            right += 1
    swap(arr, 0, right)
    first = quick_sort(arr[:right])
    last = quick_sort(arr[right+1:])
    first.append(arr[right])
    return first + last

# Not in place
# def quick_sort(arr):
#     if len(arr) <= 0: 
#         return arr
#     pivot = arr[0]
#     first = quick_sort([e for e in arr if e < pivot])
#     last = quick_sort([e for e in arr if e > pivot])
#     return first + [e for e in arr if e == pivot] + last

def test_sort(name, sort_func):
    array_sizes = [100, 1000, 10000]
    s = ""
    for i in array_sizes:
        start_time = timeit.default_timer()
        sort_func(generate_data(i))
        s += f"{name} took {timeit.default_timer() - start_time} seconds to sort {i} integers.\n"
    return s

def print_report():
    s = "+" * 32 + "\n"
    s += " SORTING REPORT ".center(32, "-") +"\n"
    s += "+" * 32 + "\n"

    s+= test_sort("Bubble sort", bubble_sort)
    s+= test_sort("Quick sort", quick_sort)

    s += "=" * 32 + "\n"
    s += f"Test performed on {platform.processor()}."

    with open("Sorting Report.txt", "w") as txt:
            txt.write(s)
    
print_report()