const Task = (props) => {
  const priorityColor =
    props.priority === "High" ? "red" :
    props.priority === "Medium" ? "orange" :
    "green"; // Low or default

  return (
    <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p>Description: {props.description}</p>
      <p>
        Priority: <span style={{ color: priorityColor }}>{props.priority}</span>
      </p>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    </div>
  );
}

export default Task;
