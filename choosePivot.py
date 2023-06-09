int_list = [2, 1, 1, 1, 1, 1, 1, 5, 4, 9, 8]


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


print(choosePivot(int_list, 7))
