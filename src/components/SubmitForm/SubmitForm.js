import React from "react";
import './SubmitForm.css';

class SubmitForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {tasksCount: 0};

    this.addItem = this.addItem.bind(this);
  }

    // Ajouter un objet Tache
    addItem(e) {
      if (this._inputElement.value !== "") {
        // création de l'objet Tache avec sa valeur son id et sa clé
        var newItem = {
          text: this._inputElement.value,
          id: this.state.tasksCount,
          key: Date.now()
        };

        this.props.addTask(newItem);
        this.state.tasksCount++;
        this._inputElement.value = "";
      }
      e.preventDefault();
    }

  render(){
    return (
      <div className="form-container">
        <form onSubmit={this.addItem}>
          <input className="input" placeholder="Ajouter une tache" ref={(a) => this._inputElement = a}/>
          <button className="form-button" type="Submit">Ajouter</button>
        </form>
      </div>
    )
  }
}

export default SubmitForm;
