import React from "react";
import './Task.css';

class Task extends React.Component{
  constructor(props){
    super(props);

    this.removeTask = this.removeTask.bind(this)
    this.markAsDone = this.markAsDone.bind(this)
    this.state = { backgroundColor: ''}
  }

  // fonction de suppression de tâche
  removeTask(){
    this.props.removeTask(this.props.id);
  }

  // fonction de marquer une tâche comme faite, peut être utile
  markAsDone(){
    if (this.state.backgroundColor === ''){
      this.setState({
        backgroundColor: 'rgb(144,238,144, 0.5)'
      });
    } else {
      this.setState({backgroundColor: ''})
    }
  }

  render(){
    return (
      <div className="task-container">
        <div className="task-container-background" style={{backgroundColor: this.state.backgroundColor}}>
          <div className="task-term-container">
            <h2 className="task-term">{this.props.text}</h2>
          </div>
          <div className="buttons-container">
            <button className="done-button" onClick={this.markAsDone}>v</button>
            <button className="delete-button" onClick={this.removeTask}>x</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Task;
