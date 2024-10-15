import data from "./data.js";

const form = document.querySelector("#form");
const contactName = document.querySelector("#name");
const contactNumber = document.querySelector("#number");
const addBtn = document.querySelector("#add");
const list = document.querySelector("#list");
const avatars = document.querySelectorAll(".avatar");
const avatarSelection = document.querySelector(".avatar-selection");

let contacts = [];
let selectedAvatar = null;

//Validate form and add contact
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = contactName.value.trim();
  const numberValue = contactNumber.value.trim();

  if (nameValue === "" || numberValue === "" || selectedAvatar === null) {
    alert("Alla fält måste fyllas i och en avatar måste väljas");
  } else {
    contacts.push({
      name: nameValue,
      number: numberValue,
      avatar: selectedAvatar,
    });
    renderContacts();
  }
});

function selectAvatar(e) {
  const avatarElement = e.currentTarget;

  const allAvatars = document.querySelectorAll(".avatar");

  allAvatars.forEach((avatar) => {
    avatar.setAttribute("aria-checked", "false");
    avatar.classList.remove("selected");
  });

  avatarElement.setAttribute("aria-checked", "true");
  avatarElement.classList.add("selected");
  selectedAvatar = avatarElement.getAttribute("data-value");
  console.log("Selected avatar:", selectedAvatar);
}

//Loop through all avatars and add event listener
avatars.forEach((avatar) => {
  avatar.addEventListener("click", selectAvatar);
});

function renderAvatars() {
  avatarSelection.innerHTML = "";

  data.forEach((avatar) => {
    const avatarHTML = `
      <div class="avatar" role="radio" tabindex="0" aria-checked="false" data-value="${avatar.value}">
      <img src="${avatar.imgSrc}" alt="${avatar.alt}" class="avatar-img">
      </div>
    `;

    avatarSelection.innerHTML += avatarHTML;
  });

  const allAvatars = document.querySelectorAll(".avatar");
  allAvatars.forEach((avatarElement) => {
    avatarElement.addEventListener("click", selectAvatar);
  });
}

renderAvatars();

//Render contacts
function renderContacts() {
  list.innerHTML = "";

  contacts.forEach((contact, i) => {
    const item = document.createElement("li");
    item.classList.add("item");

    item.innerHTML = `
    <img src="${contact.avatar}" alt="Avatar" class="contact-avatar">
    <div class="list-input-group">
      <input type="text" value="${contact.name}" disabled class="list-name-input"> 
      <input type="text" value="${contact.number}" disabled class="list-number-input"> 
      </div>
      <div class="list-buttons"> 
      <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button> 
      <button class="delete"><i class="fa-solid fa-delete-left"></i></button>
      </div>
    `;

    list.appendChild(item);

    contactName.value = "";
    contactNumber.value = "";

    const editButton = item.querySelector(".edit");
    const deleteButton = item.querySelector(".delete");
    const editIcon = editButton.querySelector("i");

    const nameInput = item.querySelector(".list-name-input");
    const numberInput = item.querySelector(".list-number-input");

    //Edit and delete event listeners
    editButton.addEventListener("click", () => {
      if (editIcon.classList.contains("fa-pen-to-square")) {
        nameInput.disabled = false;
        numberInput.disabled = false;
        editIcon.classList.remove("fa-pen-to-square");
        editIcon.classList.add("fa-floppy-disk");
        editButton.style.backgroundColor = "green";
      } else {
        const newName = nameInput.value.trim();
        const newNumber = numberInput.value.trim();

        if (newName === "" || newNumber === "") {
          alert("Vänligen fyll i alla fält");
          return;
        }

        contacts[i].name = newName;
        contacts[i].number = newNumber;

        nameInput.disabled = true;
        numberInput.disabled = true;

        editIcon.classList.remove("fa-floppy-disk");
        editIcon.classList.add("fa-pen-to-square");
        editButton.style.backgroundColor = "#bf8508";
      }
    });

    deleteButton.addEventListener("click", () => {
      deleteContact(i);
    });
  });
}

function deleteContact(i) {
  contacts.splice(i, 1);
  renderContacts();
}
