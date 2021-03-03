const objPersons = [
  {name: "Lucas Pedro da Hora", street: 'R. Alamoique', city: 'São Paulo', state: 'São Paulo', country: 'Brazil', telephone: '0000-00000' },
  {name: "Fábio dos Santos", street: 'R. dos italianos', city: 'São Paulo', state: 'São Paulo', country: 'Brazil', telephone: '0000-00000' },
  {name: "Rodolfo dos dolfo", street: 'R. da Cadeia Velha', city: 'Funchal', state: 'São Paulo', country: 'Portugal', telephone: '0000-00000' },
  {name: "Fábio dos Santos", street: 'R. dos italianos', city: 'São Paulo', state: 'São Paulo', country: 'Brazil', telephone: '0000-00000', }
]

renderContent(objPersons) 

const persons = document.querySelectorAll('.person')
// console.log(persons)

persons.forEach(person => person.addEventListener('click', openAndFold))

function openAndFold() {
  const person = this
  const personInfos = person.childNodes[1]

  persons.forEach(person => {
    person.classList.remove('active')
    person.childNodes[1].hidden = true

  })

  person.classList.toggle('active')

  if (personInfos.hidden) return personInfos.hidden = false
  return personInfos.hidden = true
}

function renderContent(persons) {
  const container = document.querySelector('#container')
  
  for ( let person of persons ) {
    const newPerson = document.createElement('div')
    newPerson.className = "person"

    const personName = document.createElement('h5')
    personName.className = 'name'
    personName.innerHTML = person.name
    
    const personInfos = document.createElement('div')
    personInfos.className = "infoPerson"
    personInfos.hidden = true

    newPerson.append(personName, personInfos)

    const personStreet = document.createElement('h5')
    personStreet.className = 'street'
    personStreet.innerHTML = person.street

    const personCity = document.createElement('h5')
    personCity.className = 'city'
    personCity.innerHTML = person.city

    const personState = document.createElement('h5')
    personState.className = 'state'
    personState.innerHTML = person.state

    const personCountry = document.createElement('h5')
    personCountry.className = 'country'
    personCountry.innerHTML = person.country

    const personTelephone = document.createElement('h5')
    personTelephone.className = 'telephone'
    personTelephone.innerHTML = person.telephone
    
    personInfos.append(personStreet, personCity, personState, personCountry, personTelephone)
    container.appendChild(newPerson)
  }

}