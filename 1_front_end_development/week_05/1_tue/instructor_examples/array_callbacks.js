// const sayHello = (name) => {
//   return `Hi ${name}!`
// }

// const sendMessage = (callback, name) => {
//   console.log(callback)
//   return callback(name)
// }

// console.log(sendMessage(sayHello, 'Hunter'))

const friends = [
  "ross", 
  "rachel", 
  "joey", 
  "monica", 
  "phoebe", 
  "chandler"
]

// for(let i = 0; i < friends.length; i++){
//   console.log(`Sending email to ${friends[i]}`)
// }

// const sendEmail = (name) => console.log(`Sending email to ${name}`)
// friends.forEach(sendEmail)

// friends.forEach((name) => {
//   console.log(`This is the first parameter (currentElement) ${name}`)  
// })

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]

// let sum = 0

// nums.forEach((el) => sum += el)

// console.log(sum)

// const friendsUpperCase = []
// friends.forEach((name) => friendsUpperCase.push(name.toUpperCase()))
// console.log(friendsUpperCase)


// const makeUpperCase = (word) => {
//   return word.toUpperCase()
// }

// const upperCaseFriends = friends.map((el) => {
//   return el.toUpperCase()
// })

// console.log(upperCaseFriends)


// const nums = [0, 1, 2, 3, 4, 5]
// const numsPlusOne = nums.map((num) => num + 1)
// const doPointlessMath = (num) => {
//   if(num % 2 === 0){
//     return num + 2
//   } else {
//     return num - 1
//   }
// }
// const pointlessMath = nums.map(doPointlessMath)
// console.log(pointlessMath)

const numbers = [
  15,
  18,
  3921,
  327,
  88,
  1235,
  1,
  55855,
  34,
  5,
  9,
  9019,
  156,
  874,
  76,
  444,
  12346
]

// const squared = numbers.map((num) => num ** 2)
// console.log(squared)


// const greaterThan100 = (num) => num > 100

// // const bigNums = []
// // for(let i = 0; i < numbers.length; i++){
// //   if(greaterThan100(numbers[i])){
// //     bigNums.push(numbers[i])
// //   }
// // }

// // const bigNums = numbers.filter(greaterThan100)

// const bigNums = numbers.filter((num)=> num > 100)


// console.log(bigNums)


// const names = [
//   'Doug',
//   'John',
//   'Daniel',
//   'Jorge', 
//   'Zach'
// ]
// const noDorJ = names.filter((name) => name[0] !== 'D' && name[0] !== 'J')

// console.log(noDorJ)


const states = [
  {
    name: "Alabama",
    capital: "Montgomery",
    lat: "32.361538",
    long: "-86.279118"
  },
  {
    name: "Alaska",
    capital: "Juneau",
    lat: "58.301935",
    long: "-134.419740"
  },
  {
    name: "Arizona",
    capital: "Phoenix",
    lat: "33.448457",
    long: "-112.073844"
  },
  {
    name: "Arkansas",
    capital: "Little Rock",
    lat: "34.736009",
    long: "-92.331122"
  },
  {
    name: "California",
    capital: "Sacramento",
    lat: "38.555605",
    long: "-121.468926"
  },
  {
    name: "Colorado",
    capital: "Denver",
    lat: "39.7391667",
    long: "-104.984167"
  },
  {
    name: "Connecticut",
    capital: "Hartford",
    lat: "41.767",
    long: "-72.677"
  },
  {
    name: "Delaware",
    capital: "Dover",
    lat: "39.161921",
    long: "-75.526755"
  },
  {
    name: "Florida",
    capital: "Tallahassee",
    lat: "30.4518",
    long: "-84.27277"
  },
  {
    name: "Georgia",
    capital: "Atlanta",
    lat: "33.76",
    long: "-84.39"
  },
  {
    name: "Hawaii",
    capital: "Honolulu",
    lat: "21.30895",
    long: "-157.826182"
  },
  {
    name: "Idaho",
    capital: "Boise",
    lat: "43.613739",
    long: "-116.237651"
  },
  {
    name: "Illinois",
    capital: "Springfield",
    lat: "39.783250",
    long: "-89.650373"
  },
  {
    name: "Indiana",
    capital: "Indianapolis",
    lat: "39.790942",
    long: "-86.147685"
  },
  {
    name: "Iowa",
    capital: "Des Moines",
    lat: "41.590939",
    long: "-93.620866"
  },
  {
    name: "Kansas",
    capital: "Topeka",
    lat: "39.04",
    long: "-95.69"
  },
  {
    name: "Kentucky",
    capital: "Frankfort",
    lat: "38.197274",
    long: "-84.86311"
  },
  {
    name: "Louisiana",
    capital: "Baton Rouge",
    lat: "30.45809",
    long: "-91.140229"
  },
  {
    name: "Maine",
    capital: "Augusta",
    lat: "44.323535",
    long: "-69.765261"
  },
  {
    name: "Maryland",
    capital: "Annapolis",
    lat: "38.972945",
    long: "-76.501157"
  },
  {
    name: "Massachusetts",
    capital: "Boston",
    lat: "42.2352",
    long: "-71.0275"
  },
  {
    name: "Michigan",
    capital: "Lansing",
    lat: "42.7335",
    long: "-84.5467"
  },
  {
    name: "Minnesota",
    capital: "Saint Paul",
    lat: "44.95",
    long: "-93.094"
  },
  {
    name: "Mississippi",
    capital: "Jackson",
    lat: "32.320",
    long: "-90.207"
  },
  {
    name: "Missouri",
    capital: "Jefferson City",
    lat: "38.572954",
    long: "-92.189283"
  },
  {
    name: "Montana",
    capital: "Helana",
    lat: "46.595805",
    long: "-112.027031"
  },
  {
    name: "Nebraska",
    capital: "Lincoln",
    lat: "40.809868",
    long: "-96.675345"
  },
  {
    name: "Nevada",
    capital: "Carson City",
    lat: "39.160949",
    long: "-119.753877"
  },
  {
    name: "New Hampshire",
    capital: "Concord",
    lat: "43.220093",
    long: "-71.549127"
  },
  {
    name: "New Jersey",
    capital: "Trenton",
    lat: "40.221741",
    long: "-74.756138"
  },
  {
    name: "New Mexico",
    capital: "Santa Fe",
    lat: "35.667231",
    long: "-105.964575"
  },
  {
    name: "New York",
    capital: "Albany",
    lat: "42.659829",
    long: "-73.781339"
  },
  {
    name: "North Carolina",
    capital: "Raleigh",
    lat: "35.771",
    long: "-78.638"
  },
  {
    name: "North Dakota",
    capital: "Bismarck",
    lat: "48.813343",
    long: "-100.779004"
  },
  {
    name: "Ohio",
    capital: "Columbus",
    lat: "39.962245",
    long: "-83.000647"
  },
  {
    name: "Oklahoma",
    capital: "Oklahoma City",
    lat: "35.482309",
    long: "-97.534994"
  },
  {
    name: "Oregon",
    capital: "Salem",
    lat: "44.931109",
    long: "-123.029159"
  },
  {
    name: "Pennsylvania",
    capital: "Harrisburg",
    lat: "40.269789",
    long: "-76.875613"
  },
  {
    name: "Rhode Island",
    capital: "Providence",
    lat: "41.82355",
    long: "-71.422132"
  },
  {
    name: "South Carolina",
    capital: "Columbia",
    lat: "34.000",
    long: "-81.035"
  },
  {
    name: "South Dakota",
    capital: "Pierre",
    lat: "44.367966",
    long: "-100.336378"
  },
  {
    name: "Tennessee",
    capital: "Nashville",
    lat: "36.165",
    long: "-86.784"
  },
  {
    name: "Texas",
    capital: "Austin",
    lat: "30.266667",
    long: "-97.75"
  },
  {
    name: "Utah",
    capital: "Salt Lake City",
    lat: "40.7547",
    long: "-111.892622"
  },
  {
    name: "Vermont",
    capital: "Montpelier",
    lat: "44.26639",
    long: "-72.57194"
  },
  {
    name: "Virginia",
    capital: "Richmond",
    lat: "37.54",
    long: "-77.46"
  },
  {
    name: "Washington",
    capital: "Olympia",
    lat: "47.042418",
    long: "-122.893077"
  },
  {
    name: "West Virginia",
    capital: "Charleston",
    lat: "38.349497",
    long: "-81.633294"
  },
  {
    name: "Wisconsin",
    capital: "Madison",
    lat: "43.074722",
    long: "-89.384444"
  },
  {
    name: "Wyoming",
    capital: "Cheyenne",
    lat: "41.145548",
    long: "-104.802042"
  }
]  

// const allCaptialsA = states.filter((state) => {
//   return state.capital[0] === 'A'
// })
// console.log(allCaptialsA)

// const singleState = {
//   name: "Wyoming",
//   capital: "Cheyenne",
//   lat: "41.145548",
//   long: "-104.802042"
// }

// const nameIsTwoWords = (state) => {
//   return state.name.split(' ').length === 2
// }
// const allStatesTwoWords = states.filter(nameIsTwoWords)
// console.log(allStatesTwoWords) 



const nums = [25, 6, 100, 3]

// const add = (num1, num2) => num1 + num2
// const sum = nums.reduce(add)

// console.log(sum)

// const endResult = {
//   key_0: 25,
//   key_1: 6,
//   key_2: 100,
//   key_3: 3
// }

// { 
//   key_0: 25, 
//   key_1: 6, 
//   key_2: 100, 
//   key_3: 3 
// }

// const endResult = nums.reduce((acc, curr, i) => {
//   acc[`key_${i}`] = curr
//   return acc
// }, {})

// console.log(endResult)

// const votes = ['Yes', 'No', 'No', 'Yes', 'Yes']
// const tally = votes.reduce((acc, vote) => {
//   acc[vote] = acc[vote] ? acc[vote] + 1 : 1
//   return acc
// }, {})

// // console.log(tally)


// const someObject = {
//   Yes: 5
// }
// someObject['Yes'] = 1

// console.log(someObject)

const cities = [
  {name: "Tokyo", population: 37400068},
  {name: "Delhi", population: 28514000},
  {name: "Shanghai", population: 25582000},
  {name: "São Paulo", population: 21650000},
  {name: "Mexico City", population: 21581000},
  {name: "Cairo", population: 20076000},
  {name: "Mumbai", population: 19980000},
  {name: "Beijing", population: 19618000},
  {name: "Dhaka", population: 19578000},
  {name: "Osaka", population: 19281000},
  {name: "New York City", population: 18819000}
  ]


const totalPopulation = cities.reduce((acc, curr) => acc + curr.population, 0)


console.log(totalPopulation)