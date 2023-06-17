int_list = [1, 10, 3, 7, 2]
# int_list = [12, 9, 7, 15, 10]


def choosePivot(int_list: list, idx: int):
    pivot = int_list[idx]
    for index in range(len(int_list)):
        if int_list[index] < pivot:
            int_list.insert(0, int_list.pop(index))

        elif int_list[index] > pivot:
            int_list.append(int_list.pop(index))
        else:
            continue

    return int_list


def choosePivotWithALoop(int_list: list):
    p = int_list[-1]
    li = 0

    for idx in range(len(int_list) - 1):
        if int_list[idx] <= p:
            int_list[li], int_list[idx] = int_list[idx], int_list[li]
            li = li + 1

    int_list[li], int_list[-1] = p, int_list[li]

    return int_list


print(choosePivotWithALoop(int_list))
