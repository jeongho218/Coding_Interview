A, B = input().split()
A = int(A)
B = int(B)
if(B>=45):
    print(str(A)+" "+str(B-45))
elif(A==0):
    print("23 "+str(B+60-45))
else:
    print(str(A-1)+" "+str(B+60-45))