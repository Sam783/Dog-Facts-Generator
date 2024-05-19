// const URL = "https://cat-fact.herokuapp.com/facts";
const URL = "https://dog-api.kinduff.com/api/facts";
const fact = document.querySelector("#facts");
const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);

const getFacts = async () => {
  console.log("getting data..");
  let response = await fetch(URL); //fetch first promise
  // console.log(response);
  // console.log(response.status);
  let data = await response.json();
  console.log(data.facts[0]);
  fact.innerText = data.facts[0];
};
// getFacts();

btn.addEventListener("click", () => {
  getFacts();
});
