const arrOfPeople = [
    {
      id: 1,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 2,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 3,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 4,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 5,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 6,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 7,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      this.id = id;
      this.name = name;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall; 
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
    }
  }
  class BlueTeammate {
    constructor(teamColor, mascot){
      this.teamColor = teamColor;
      this.mascot = mascot;
    }
  }
  class RedTeammate {
    constructor(teamColor, mascot){
      this.teamColor = teamColor;
      this.mascot = mascot;
    }
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
     let person = arrOfPeople.find(function (player) {
     return player.id === id
    });
    console.log(person)
    // let index = arrOfPeople.indexOf(person);
    // arrOfPeople.splice(index, 0);
    const newPlayer = new Player (person.id, person.name)
    console.log(newPlayer)
    listOfPlayers.push(newPlayer)
    assignTeam();
  // console.log(`li ${id} was clicked!`)
}; 

const assignTeam = () => {
  const listElement = document.getElementById('players')
  listOfPlayers.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Red/Blue"
    button.addEventListener('click', function() {})
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name))
    listElement.append(li)
  })
};