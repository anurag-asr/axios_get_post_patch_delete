export default function TodoItem({
  id,
  status,
  title,
  handleToggle,
  handleDelete
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        paddingLeft: "50px",
        justifyContent: "space-between"
      }}
    >
      <div>{id}</div>
      <div>{title}</div>
      <div>{status ? "Done" : "NotDone"}</div>
      <button onClick={() => handleToggle(id, !status)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
