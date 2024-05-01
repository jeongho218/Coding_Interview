n, m = list(map(int, input().split(' ')))
arr = []
for x in range(0, n):
    arr.append(0)

for y in range(0, m):
    i, j, k = list(map(int, input().split(' ')))
    for z in range(i-1, j):
        arr[z] = k

print(" ".join(list(map(str, arr))))