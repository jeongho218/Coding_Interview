E, S, M = map(int, input().split())

연도 = 1
지구, 태양, 달 = 1, 1, 1

while not (지구 == E and 태양 == S and 달 == M):
    연도 += 1
    지구 += 1
    태양 += 1
    달 += 1

    if 지구 == 16:
        지구 = 1
    if 태양 == 29:
        태양 = 1
    if 달 == 20:
        달 = 1

print(연도)
