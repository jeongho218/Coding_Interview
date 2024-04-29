drop = input()
arr = list(map(int, input().split(' ')))
min = sorted(arr, reverse=False)[0]
max = sorted(arr, reverse=True)[0]
print(min, max)