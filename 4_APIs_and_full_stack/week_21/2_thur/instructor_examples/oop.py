# class Dog:
#     pass

# sparky = Dog()

# def ownerPet():
#     print('pat pat')

# class Dog:
#     def __init__(self, name = '', age = 0):
#         self.name = name
#         self.age = age

#     def bark(self):
#         print(f'{self.name} barks')
    
#     def interact(self, methodOfInteraction):
#         methodOfInteraction()
#         print(f'{self.name} wags tail')

# Sparky = Dog('Sparky', 10)

# print(Sparky.name, Sparky.age)

# Sparky.bark()

# Sparky.interact(ownerPet)

# class Dog:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#     def bark(self):
#         print(f'{self.name} barks')
#     def buy_dog(self):
#         print(f'{self.name} now has a home!')

# class SmallDog(Dog):
#     def __init__ (self, name, age, breed):
#         super().__init__(name, age)
#         self.breed = breed
#     def bark(self):
#         print(f'{self.name} yaps')
    

# Sparky = SmallDog("Sparky", 4, "Pomeranian")
# print(Sparky.breed)
# Sparky.bark()

class AmazonProduct:
    hostingPlatform = 'Amazon'

    def __init__(asdf, name, price):
        asdf.name = name
        asdf.price = price

    @classmethod
    def printPlatform(asdf):
        print(f'Hosted on {asdf.hostingPlatform}')

    @staticmethod
    def singBezosPraises():
        print('I am your overlord!')

    
DogBowl = AmazonProduct('Big dog bowl', 30)

DogBowl.printPlatform()

DogBowl.singBezosPraises()

