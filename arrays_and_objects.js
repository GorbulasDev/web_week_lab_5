/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// Extract the latitude value, and log it to the console.
const issLatitude = iss_location.iss_position.latitude
console.log('ISS Latitude is:', issLatitude)

// Extract the longitude value, and log it to the console.
const issLongitude = iss_location.iss_position.longitude
console.log('ISS Longitude is', issLongitude)

// Currency rates.
let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// Add a new property for Swiss Francs.
rates.CHF = 1.1787
console.log(rates)

// Get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
let Euros = 100
console.log('100 Euros is equivalent to', Euros * rates.AUD, 'Australian Dollars.')

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.


/* c. JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// Print Gary Oldman's cat's name.
console.log(cats_and_owners[1].cat)

// Add Taylor Swift's and their cat to the array.
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})
console.log(cats_and_owners)

// Print each owner and their details.
cats_and_owners.forEach(function(ownerDetails) {
  console.log(ownerDetails)
})

// List of Nobel Prize winners in 2017!
let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}

console.log('\nLiterature Nobel laureate names:\n')
// Print the name of the Literature Nobel laureate.
nobel_prize_winners_2017.prizes.forEach(function(lorList) {
  console.log(lorList.laureates[0].firstname, lorList.laureates[0].surname)
})

console.log('\nPhysics Nobel laureates IDs:\n')
// Print the ids of each of the Physics Nobel laureates.
nobel_prize_winners_2017.prizes.forEach(function(lorList) {
  console.log(lorList.laureates[0].id)
})

console.log('\nPrize categories:\n')
// Print the names of all of the prize categories.
nobel_prize_winners_2017.prizes.forEach(function(lorList) {
  console.log(lorList.category)
})

// Print the total number of prize categories.
let totalPrizes = 0
for (count in nobel_prize_winners_2017.prizes) {
  totalPrizes++
}
console.log(totalPrizes)

// Count the total number of laureates from 2017. 
let totalLaureates = 0
for (count in nobel_prize_winners_2017.prizes) {
  totalLaureates++
}
console.log(`There were ${totalLaureates} laureates in 2017.`)
