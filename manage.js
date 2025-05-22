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
            <img src="./edit-3-svgrepo-com.svg" alt="" class="svg" />
            <img src="./delete-1487-svgrepo-com.svg" alt="" class="svg" />
          </td>
        </tr>`;
    });
  })
  .catch((v) => console.log(v));
function searchFunc(e) {
  const value = e.target.value;
  arr.filter((o) => {
    var intval = parseInt(o.id);
    // if()
    if (
      o.id.includes(value) ||
      o.name.includes(value) ||
      o.department.includes(value) ||
      o.gender.includes(value)
    ) {
      return true;
    }
    return false;
  });
}
