export default async function sendUsername(username) {
  if (username === "") {
    username = "Guest"
  }
  fetch(`http://localhost:30000/username/${username}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      fetch("http://localhost:30000/username", {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then(({ data }) => console.log(data));
    });
}
