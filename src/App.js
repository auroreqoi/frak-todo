import React from 'react';
import './App.css';
import SubmitForm from './components/SubmitForm/SubmitForm';
import TasksList from './components/TaskList/TasksList';

/*
Division de la page en plusieurs composant pour plus de clarté
SubmitForm pour le formulaire d'ajout de tâche
Task pour les cartes de tâche
TasksList pour la liste des différentes Tâche
*/

class App extends React.Component{

  // constructor d'initialisation
  constructor(props){
    super(props);
    this.state = {tasks: []}
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  // ajouter une tache
  addTask(task){
    this.setState((prevState) =>{
      return {
        tasks: prevState.tasks.concat(task)
      };
    });
  }

  // supprimer une tache
  removeTask(id){
    const tasks = this.state.tasks.filter(e => (e.id !== id));
    this.setState({tasks: tasks});
  }

  render(){
    return (
      <div className='App'>
        <h1>Tasks List</h1>
        <SubmitForm addTask={this.addTask}/>
        <TasksList tasks={this.state.tasks} removeTask={this.removeTask}/>
      </div>
    )
  }
}

export default App;
