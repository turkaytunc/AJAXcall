document.getElementById("button").addEventListener("click", getItems);

function getItems() {
  let xhr = new XMLHttpRequest();
  let users;
  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function() {
    if (this.status == 200) {
      users = JSON.parse(this.responseText);
      console.log(users);
    }
    let output = "";
    for (let i in users) {
      output += `<ul>

      <li><img height=50px src="${users[i].avatar_url}"></li>
      
                <li>ID: ${users[i].id}</li>

                <li>Name: ${users[i].login}</li>

                </ul>`;
    }
    document.getElementById("items").innerHTML = output;
  };
  xhr.send();
}
