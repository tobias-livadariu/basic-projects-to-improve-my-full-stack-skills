export default function TaskAdder() {
  return (
    <div className="subblock task-adder">
      <h3 className="task-adder-header">Would you like to add a new task?</h3>
      <div className="task-add-form">
        <label>
          <span className="task-add-label">Task name:</span>
          <input type="text" />
        </label>
        <button className="task-add-button">
          Create new task!
        </button>
      </div>
    </div>
  )
}