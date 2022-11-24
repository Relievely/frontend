//changes selected persona
const sb = document.querySelector('#persona')
sb.onclick = (event) => {
    event.preventDefault();
    let personaUrl = `../../assets/persona/${sb[sb.selectedIndex].text}Persona.png`
    document.querySelector('#personaImg').src = personaUrl
    console.log(personaUrl)
}

    //the API part
// async function getJournalInformation() {
//     fetch('http://127.0.0.1:50003/progress/')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//
// }
// getJournalInformation()


