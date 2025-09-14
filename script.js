fetch("./src/header/header.html")
  .then(res => {
    if (!res.ok) throw new Error("HTTP error " + res.status);
    return res.text();
  })
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(err => console.error("Failed to load header:", err));



    