export default async function sendUsername(username) {
  return new Promise((resolve, reject) => {
      fetch(`http://localhost:50000/username/${username}`, {
          method: "PUT"
      })
          .then((response) => response.json())
          .then((data) => {
              if(data.success) {
                  resolve(true);
              }
          })
          .catch((err) => {
              console.error("Error: ", err);
              reject(err);
          })
  })
}
