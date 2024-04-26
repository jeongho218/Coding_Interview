A, B, C = input().split()
A = int(A)
B = int(B)
C = int(C)

# 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000
if(A==B and A==C):
    print(10000+(A*1000))
# 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100
elif(A!=B and A!=C and B!=C):
    arr = [A,B,C]
    arr.sort(reverse=True)
    print(arr[0]*100)
# 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100
else:
    if(A==B):
        print(1000+(A*100))
    elif(A==C):
        print(1000+(A*100))
    else:
        print(1000+(B*100))