arr = []
for i in range(1, 10):
    arr.append(int(input()))

max = sorted(arr, reverse=True)[0]
print(max)
print(arr.index(max)+1)