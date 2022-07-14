import axios from "axios";

export function getTodo() {
  return axios.get("https://json-server-mocker-masai.herokuapp.com/tasks");
}

export function getToggle({ id, newStatus }) {
  return axios({
    url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
    method: "PATCH",
    data: {
      status: newStatus
    }
  });
}

// export function toggleTodoStatus({ id, newStatus }) {
//   return axios({
//     url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
//     method: "PATCH",

//     data: {
//       status: newStatus
//     }
//   });
// }

export function getDelete({ id }) {
  return axios({
    url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
    method: "DELETE"
  });
}

export function getAdd({ title, status }) {
  return axios({
    url: "https://json-server-mocker-masai.herokuapp.com/tasks/",
    method: "POST",
    data: {
      title,
      status
    }
  });
}
