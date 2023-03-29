MY_CONSTANT = 5

my_variable = 12


# print(MY_CONSTANT)

# user_input = input('Who are you?')
# print(f'Hey there {user_input}')


# num = 0

# if (num > 3):
#   print('num is greater than 3')
# elif (num > 1):
#   print('num is greater than 1')
# else:
#   print('num is less than 1')


# counter = 0

# while(counter < 10):
#   print(counter)
#   counter += 1


# i = 0

# while (i < 10):
#   if(i % 2 == 0):
#     print("it's even")
#   elif(i % 3 == 0):
#     print('meow')
#   i += 1


# for i in range(10):
#   if i % 2 == 0:
#     print("it's even")
#   elif i % 3 == 0:
#     print('meow')


# my_list = [1, 2, 'some string', [5, 6, 7]]

# # print(my_list)
# # print(my_list[2])


# my_dictionary = {
#   "cheese": "gouda", 
#   "bread": "rye"
# }

# print(my_dictionary['cheese'])

# my_dictionary['cheese'] = 'swiss'

# print(my_dictionary['cheese'])

# my_dictionary['meat'] = 'ham'

# print(my_dictionary)

# del my_dictionary['meat']

# print(my_dictionary)


my_list = [1,2,3,4,5,6,7,8,9,10]

# print(len(my_list))

# for el in my_list:
#   print(el)

# my_list.pop()
# print(my_list)

# my_list.append(10)
# print(my_list)



# my_list2 = [11, 12, 13, 14]

# my_list2.insert(1, 11.5)

# my_combined_list = my_list + my_list2
# print(my_combined_list)


# my_list.pop(12)

# print(my_list)


# string_list = ['1', '2', '3', '4']

# string_list.remove('12')

# print(string_list)


# new_list = [0] + my_list

# print(new_list)


# my_num = 2

# print(my_num / 3)

# def add_nums (x, y=2, i=0):
#   if(i < 2):
#     return add_nums(x + i, y + i, i + 1) + add_nums(x, y, i + 1)
#   else: 
#     return x + y

# sum = add_nums(add_nums(100, 200))

# print(sum)

# def add (num1, num2):
#   return num1 + num2

# def calculator (num1, num2, op):
#   return op(num1, num2)


# print(calculator(2, 3, add))

def sub_nums (num1, num2):
  return num1 - num2

def say_hello (name):
  print(f'Hello, {name}!')

def say_hello_adv (person):
  print(f'Hello {person["name"]}, how does it feel to be {person["age"]} years old?')

def looper (numList):
  for num in numList:
    print(num) 


# print(sub_nums(5, 4))

# say_hello('Hunter')

# say_hello_adv({'name': 'Hunter', 'age': 31})

# looper([1, 2, 3, 4, 5])


def calculator2 (num1, num2, num3, operator):
  return operator(num1, num2, num3)
  

print(calculator2(2, 4, 6, lambda t, z, k : t + z + k))

# console.log(calculator2(2, 4, 6, (a, b, c) => a + b + c)


























###########