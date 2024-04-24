A, B = input().split()
A = int(A) # 시간
B = int(B) # 분
C = int(input())
D = C//60 # 시간
E = C%60 # 분

H = A+D
M = B+E
if(M>=60):
    H = H+(M//60)
    M = M%60
if(H>=24):
    H = H%24

print(str(H)+" "+str(M))