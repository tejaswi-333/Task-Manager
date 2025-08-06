import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.taskInput = React.createRef();
    this.state = {
      tasks: [],
      editingIndex: null,
      editingValue: ""
    };
  }

  addTask = () => {
    const taskText = this.taskInput.current.value.trim();
    if (taskText === "") {
      alert("⚠ Task cannot be empty!");
      return;
    }
    this.setState(prevState => ({
      tasks: [...prevState.tasks, taskText]
    }));
    this.taskInput.current.value = "";
  };

  deleteTask = (index) => {
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  };

  startEditing = (index, value) => {
    this.setState({
      editingIndex: index,
      editingValue: value
    });
  };

  handleEditChange = (e) => {
    this.setState({ editingValue: e.target.value });
  };

  saveEdit = () => {
    const { editingIndex, editingValue, tasks } = this.state;
    if (editingValue.trim() === "") {
      alert("⚠ Task cannot be empty!");
      return;
    }
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editingValue;
    this.setState({
      tasks: updatedTasks,
      editingIndex: null,
      editingValue: ""
    });
  };

  cancelEdit = () => {
    this.setState({ editingIndex: null, editingValue: "" });
  };

  

  render() {
    const { tasks, editingIndex, editingValue } = this.state;
    // User authentication logic
    const userEmail = localStorage.getItem('emailId');
    const isLoggedIn = !!userEmail;
    if (!isLoggedIn) {
      return (
        <div className="container mt-5 text-center">
          <div className="alert alert-danger shadow p-4 rounded-4" style={{ maxWidth: "500px", margin: "auto" }}>
            <h4>Please login first to access the Home page. 🔐</h4>
          </div>
        </div>
      );
    }
    return (
      <div className="container mt-5">
        <div className="card shadow p-4 rounded-4" style={{ maxWidth: "600px", margin: "auto" }}>
          <h2 
            style={{ 
              textAlign: 'center', 
              marginBottom: '2rem',
              color: '#333',
              fontSize: '2rem',
              fontWeight: '700'
            }}
          >
          📋 Task Manager
          </h2>
          <h2 className="text-center text-primary mb-4"></h2>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <input
              type="text"
              ref={this.taskInput}
              placeholder="Enter your task here"
              style={{
                flex: 1,
                padding: "8px",
                fontSize: "1rem",
                border: "1px solid #ccc",
                borderRadius: "6px"
              }}
            />
            <button
              onClick={this.addTask}
              style={{
                backgroundColor: "#28a745",
                color: "#fff",
                padding: "8px 16px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Add
            </button>
          </div>

          <h5 className="text-secondary">Your Tasks:</h5>
          <ul className="list-group">
            {tasks.length === 0 ? (
              <li className="list-group-item text-muted text-center">
                No tasks added yet. Start now!
              </li>
            ) : (
              tasks.map((task, index) => (
                <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                  {editingIndex === index ? (
                    <div className="w-100 d-flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        value={editingValue}
                        onChange={this.handleEditChange}
                      />
                      <button className="btn btn-sm btn-primary" onClick={this.saveEdit}>
                        Update
                      </button>
                      <button className="btn btn-sm btn-secondary" onClick={this.cancelEdit}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <span>{task}</span>
                      <div>
                        <button className="btn btn-sm btn-warning me-2" onClick={() => this.startEditing(index, task)}>
                          Edit
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => this.deleteTask(index)}>
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}
