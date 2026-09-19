let age = document.getElementById("age");
let nam = document.getElementById("name");
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (age.value.trim() === "" || nam.value.trim() === "") {
    alert("Please enter valid details.");
    return;
  }

  const ans = new Promise((resolve, reject) => {

    if (Number(age.value) >= 18) {
      setTimeout(() => {
        resolve(`Welcome ${nam.value}. You can vote`);
      }, 4000);
    } else {
      setTimeout(() => {
        reject(`Oh sorry ${nam.value}. You aren't old enough`);
      }, 4000);
    }

  });

  ans
    .then((data) => {
      alert(data);
    })
    .catch((err) => {
      alert(err);
    });

});