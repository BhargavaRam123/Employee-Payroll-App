console.log("hello world");
const val = fetch("http://localhost:3000/employees");
let arr = [];
// console.log(val);
val
  .then((v) => v.json())
  .then((v) => {
    arr = v;
    v.map((o) => {
      // console.log("hello world inside ", o);
      document.getElementsByClassName("tb")[0].innerHTML += `<tr>
            <td>${o.id}</td>
            <td>${o.name}</td>
            <td>${o.gender}</td>
            <td>${o.department}</td>
            <td>${o.salary}</td>
            <td>${o.startdate}</td>
            <td>
            <img src="./assets/edit-3-svgrepo-com.svg" alt="" class="svg"  data-employee='${JSON.stringify(
              o
            )}'  onclick="editfunc(event)" />
            <img src="./assets/delete-1487-svgrepo-com.svg" alt="" class="svg" onclick="deluser(event,${
              o.id
            })"/>
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
            <img src="./assets/delete-1487-svgrepo-com.svg" alt="" class="svg" onclick="deluser(event)" />
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

function formsubmitfunc(e) {
  e.preventDefault();
  console.log("form submitted");
  const val = e.target;
  const formdata = new FormData(val);
  let obj = {};
  for (let [key, value] of formdata.entries()) {
    console.log("key", key, "value", value);
    obj[key] = value;
  }
  console.log("object value", obj);
  fetch("http://localhost:3000/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Move inside headers object
    },
    body: JSON.stringify(obj), // Add the actual data
  })
    .then((v) => console.log("post request successfull"))
    .catch((e) => console.log("error occured calling api", e));
}

function deluser(e, id) {
  console.log("del clicked", id);
  fetch(`http://localhost:3000/employees/${id}`, {
    method: "DELETE",
  })
    .then((v) => {
      console.log("deletion successfull", v);
    })
    .catch((e) => {
      console.log("error occured while deleting", e);
    });
}

function editfunc(e) {
  // e.preventDefault();
  const employeeData = e.target.getAttribute("data-employee");
  const o = JSON.parse(employeeData);
  console.log("object avlue", o);
  document.getElementsByClassName("emodel")[0].style.display = "flex";
  document.getElementsByClassName("emodelcontainer")[0].style.display = "flex";
  document.getElementsByClassName(
    "emodel"
  )[0].innerHTML = `<form onsubmit="editsubmitfunc(event)" id="eform">
          <div>
            <label for="id">Id</label>
            <input
              name="id"
              type="text"
              id="id"
              required
              minlength="3"
              maxlength="10"
              pattern="[A-Z0-9]+"
              title="Only uppercase letters and numbers allowed"
              value = "${o.id}"
            />
          </div>
          <div>
            <label for="name">Name</label>
            <input
              name="name"
              type="text"
              id="name"
              required
              minlength="2"
              maxlength="50"
              pattern="[A-Za-z\s]+"
              title="Only letters and spaces allowed"
              value = "${o.name}"

            />
          </div>
          <div>
            <label for="gender">Gender</label>
            <input
              name="gender"
              type="text"
              id="gender"
              required
              minlength="2"
              maxlength="50"
                            value = "${o.gender}"

            />
          </div>
          <div>
            <label for="dep">Department</label>
            <input
              name="department"
              type="text"
              id="dep"
              required
              pattern="HR|IT|Finance|Marketing|Sales|Operations|Legal"
              title="Must be one of: HR, IT, Finance, Marketing, Sales, Operations, Legal"
                            value = '${o.department}'

            />
          </div>
          <div>
            <label for="salary">Salary</label>
            <input
              name="salary"
              type="number"
              id="salary"
              required
              min="1000"
              max="1000000"
              title="Only salary less than 10 lakhs is allowed"
                            value = '${o.salary}'

            />
          </div>
          <div>
            <label for="sdate">Sdate</label>
            <input
              name="startdate"
              type="date"
              id="sdate"
              required
              min="2020-01-01"
              max="2025-05-01"
              title="Date should be less than this month"
                            value ='${o.startdate}'

            />
          </div>
          <div class="mbtn">
            <button type="button" onclick="togglemodele(event)">Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>`;
}
function togglemodele(e) {
  document.getElementsByClassName("emodel")[0].style.display = "none";
  document.getElementsByClassName("emodelcontainer")[0].style.display = "none";
}

function editsubmitfunc(e) {
  e.preventDefault();
  console.log("edit form submitted");
  const val = e.target;
  const formdata = new FormData(val);
  let obj = {};
  for (let [key, value] of formdata.entries()) {
    console.log("key", key, "value", value);
    obj[key] = value;
  }
  console.log("object value", obj);
  fetch(`http://localhost:3000/employees/${obj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Move inside headers object
    },
    body: JSON.stringify(obj), // Add the actual data
  })
    .then((v) => console.log("post request successfull"))
    .catch((e) => console.log("error occured calling api", e));
}

function sortfunc(e) {
  // console.log("target value ", );
  let value = e.target.value;
  console.log("sort value", value);
  if (value === "DSC") {
    console.log("hello world");
    let m = arr.sort((o1, o2) => {
      return Number(o2.salary) - Number(o1.salary);
    });
    console.log("mvalue", m);
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
            <img src="./assets/delete-1487-svgrepo-com.svg" alt="" class="svg" onclick="deluser(event)" />
          </td>
        </tr>`;
    });
  } else if (value === "ASC") {
    console.log("hello world");
    let m = arr.sort((o1, o2) => {
      return Number(o1.salary) - Number(o2.salary);
    });
    console.log("mvalue", m);
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
            <img src="./assets/delete-1487-svgrepo-com.svg" alt="" class="svg" onclick="deluser(event)" />
          </td>
        </tr>`;
    });
  } else {
  }
}
