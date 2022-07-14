import { useEffect, useState } from "react";
import { getAdd, getDelete, getTodo, getToggle, toggleTodoStatus } from "./api";
import TodoItem from "./TodoIten";

export default function Todo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setEror] = useState(false);
  // const []tex
  const [text, setText] = useState("");

  useEffect(() => {
    handlegetTodo();
  }, []);

  function handlegetTodo() {
    setLoading(true);
    setEror(false);
    getTodo()
      .then((res) => {
        //  console.log(res.data)
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert("Error");
        setEror(true);
      });
  }

  function handleAdd(title) {
    setLoading(true);
    getAdd({ title, status: false }).then(() => handlegetTodo());
  }

  function handleDelete(id) {
    setLoading(true);
    getDelete({ id }).then(() => handlegetTodo());
  }

  //  console.log(x)

  function handleToggle(id, newStatus) {
    setLoading(true);
    getToggle({ id, newStatus }).then(() => handlegetTodo());
  }

  console.log(data);
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="enter here something"
      />
      <button onClick={() => handleAdd(text)}>ADD</button>
      {loading && <div>....Loading...</div>}
      {error && <div>....Error</div>}
      {data.map((elem) => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          title={elem.title}
          status={elem.status}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
