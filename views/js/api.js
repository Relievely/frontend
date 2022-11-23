async function getJournalInformation() {
    fetch('http://127.0.0.1:50003/progress/')
    .then((response) => response.json())
    .then((data) => console.log(data));

}
getJournalInformation()