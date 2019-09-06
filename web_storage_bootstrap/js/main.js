"use strict";

function firstTimeUser() {
  let firstTimeUser = localStorage.getItem("firstTimeUser");
  console.log("firstTimeUser", firstTimeUser);
  if (firstTimeUser === null) {
    $("#first-time-user-modal").modal("show");
    localStorage.setItem("firstTimeUser", false);
  }
}

firstTimeUser();

function saveLocalStorage() {
  let email = document.querySelector("#local-storage-email").value;
  let name = document.querySelector("#local-storage-name").value;
    let last = document.querySelector("#local-storage-last").value;
  console.log(email);
  console.log(name);
  console.log(last);

    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("last", last);
  // call loadFromStorage to update displayed values

}




function saveSessionStorage() {
  let email = document.querySelector("#session-storage-email").value;
  console.log(email);

  // store value in session storage
  sessionStorage.setItem("email", email);
  // call loadFromStorage to update displayed values
  loadFromStorage();
}

function loadFromStorage() {
  // get data from local storage
  let localStorageEmail = localStorage.getItem("email");
  console.log("localStorageEmail", localStorageEmail);

  let localStorageName = localStorage.getItem("name");
  console.log("localStorageName", localStorageName);

  let localStorageLast = localStorage.getItem("last");
  console.log("localStorageLast", localStorageLast);
  // get data from session storage
  let sessionSavedEmail = sessionStorage.getItem("email");
  console.log("sessionSavedEmail", sessionSavedEmail);

  // set input field with email values from storage
  document.querySelector("#local-storage-email").value = localStorageEmail;
  document.querySelector("#session-storage-email").value = sessionSavedEmail;
  document.querySelector("#local-storage-name").value = localStorageName;
  document.querySelector("#local-storage-last").value = localStorageLast;
  // set span tags with email values from storage
  document.querySelector("#local-saved-email").innerHTML = localStorageEmail || "no data";

  document.querySelector("#session-saved-email").innerHTML = sessionSavedEmail || "no data";
    document.querySelector("#local-saved-name").innerHTML = localStorageName || "no data";
      document.querySelector("#local-saved-last").innerHTML = localStorageLast || "no data";
}


loadFromStorage();

function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
}
