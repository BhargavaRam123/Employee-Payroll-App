console.log("hello world");
const val = fetch("http://localhost:3000/employees");
let arr = [];
console.log(val);
val
  .then((v) => v.json())
  .then((v) => {
    arr = v;
    v.map((o) => {
      console.log("hello world inside ", o);
      document.getElementsByClassName("tb")[0].innerHTML += `<tr>
            <td>${o.id}</td>
            <td>${o.name}</td>
            <td>${o.gender}</td>
            <td>${o.department}</td>
            <td>${o.salary}</td>
            <td>${o.startdate}</td>
            <td>
            <img src="./assets/edit-3-svgrepo-com.svg" alt="" class="svg" />
            <img src="./assets/delete-1487-svgrepo-com.svg" alt="" class="svg" />
          </td>
        </tr>`;
    });
  })
  .catch((v) => console.log(v));
function searchFunc(e) {
  const value = e.target.value;
  let m = arr.filter((o) => {
    if (
      o.id.includes(value) ||
      o.name.toLowerCase().includes(value) ||
      o.department.toLowerCase().includes(value) ||
      o.gender.toLowerCase().includes(value)
    ) {
      return true;
    }
    return false;
  });
  document.getElementsByClassName("tb")[0].innerHTML = `<table class="tb">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>DEPARTMENT</th>
          <th>SALARY</th>
          <th>SDATE</th>
        </tr>
      </table>`;
  m.map((o) => {
    document.getElementsByClassName("tb")[0].innerHTML += `<tr>
            <td>${o.id}</td>
            <td>${o.name}</td>
            <td>${o.gender}</td>
            <td>${o.department}</td>
            <td>${o.salary}</td>
            <td>${o.startdate}</td>
            <td>
            <img src="./assets/edit-3-svgrepo-com.svg" alt="" class="svg" />
            <img src="./assets/delete-1487-svgrepo-com.svg" alt="" class="svg" />
          </td>
        </tr>`;
  });
}

function togglemodel(e) {
  e.preventDefault();
  document.getElementsByClassName("model")[0].style.display = "none";
  document.getElementsByClassName("modelcontainer")[0].style.display = "none";
  console.log("value is");
}
function activatemodel(e) {
  document.getElementsByClassName("model")[0].style.display = "flex";
  document.getElementsByClassName("modelcontainer")[0].style.display = "flex";
}
