const pageright = document.querySelector('.fa-chevron-right');
const pageleft = document.querySelector('.fa-chevron-left');
const pagenumber = document.querySelector('.buttons p');
var pagesnumber = 1;
var memberadd = document.querySelector('.newmemberadd');
var memberaddbutton = document.querySelector('.memberss');
var memberclose = document.querySelector('.fa-x');
var savemember = document.querySelector('.memberbutton');
var isim = document.querySelector('.isim');
var mail = document.querySelector('.mail');
var tel = document.querySelector('.telno');
var table = document.querySelector('.table');
fetch('/users')
  .then((response) => response.json())
  .then((data) => {
    const table = document.querySelector('.table');

    for (let index = 0; index < data.length; index++) {
      const row = document.createElement('tr');
      console.log(data[index].ad);
      const nameCell = document.createElement('td');
      nameCell.textContent = data[index].ad;
      row.appendChild(nameCell);
      const nameCell2 = document.createElement('td');
      nameCell2.textContent = data[index].telefon;
      row.appendChild(nameCell2);
      const nameCell3 = document.createElement('td');
      nameCell3.textContent = data[index].email;
      row.appendChild(nameCell3);
      const nameCell4 = document.createElement('td');
      nameCell4.innerHTML = ` <i class="fa-regular fa-pen-to-square"></i>
      <i class="fa-solid fa-trash"></i>`;
      row.appendChild(nameCell4);
      table.appendChild(row);
    }
  })
  .catch((error) => console.error(error));
pageright.onclick = function () {
  pagesnumber++;
  pagenumber.textContent = pagesnumber;
};
pageleft.onclick = function () {
  if (pagesnumber == 1) {
    return;
  }
  pagesnumber--;
  pagenumber.textContent = pagesnumber;
};
memberaddbutton.onclick = async function () {
  memberadd.style.opacity = await '1';
  memberadd.style.zIndex = '1';
};
memberclose.onclick = async function () {
  memberadd.style.opacity = await '0';
  memberadd.style.zIndex = '-1';
};
savemember.onclick = async function () {
  const response = await fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: isim.value,
      email: mail.value,
      phone: tel.value,
    }),
  });
  location.reload();
};
