import React from "react";
import { Paper } from '@material-ui/core';
import NewWishForm from "./NewWishForm";
import WishesList from "./WishesList";
import Header from './Header';
import '../App.css';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      wishes: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount() {
    const resumeWishes = JSON.parse(localStorage.getItem('wishes'));
    if (resumeWishes) {
      this.setState({
        wishes: resumeWishes
      }, () => console.log(this.state))
    }
  }


  handleSubmit(ev) {
    ev.preventDefault();
    ev.persist();
    const { wishes } = this.state;
    const upperWishes = [];
    for (let wish of wishes) {
      upperWishes.push(wish.toUpperCase())
    }
    if (!upperWishes.includes(ev.target[0].value.toUpperCase()) && ev.target[0].value) {
      this.setState(
        {
          wishes: [...wishes.concat(ev.target[0].value)]
        }, () => localStorage.setItem('wishes', JSON.stringify(this.state.wishes)))
    }
  }

  handleDelete(ev) {
    ev.persist();
    const { wishes } = this.state;
    const deleteWishID = ev.currentTarget.id;
    const newWishes = wishes.filter(wish => {
      return deleteWishID.toUpperCase() !== wish.toUpperCase()
    })
    this.setState({
      wishes: newWishes,
    }, () => localStorage.setItem('wishes', JSON.stringify(this.state.wishes)))
  }


  render() {
    const { wishes } = this.state;
    return (
      <Paper className="App">
        <Header />
        <NewWishForm handleSubmit={this.handleSubmit} />
        {wishes.length === 0 ? (
          <div>
            <p>Wishes list is empty!</p>
            <p>Please add your first wish</p>
          </div>
        ) : (
            <WishesList wishes={wishes} handleDelete={this.handleDelete} />
          )}

      </Paper>

    );
  }
}

export default App;
