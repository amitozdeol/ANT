import './App.css';
import React from 'react';
import Ant from './Ant.js'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.getAnts = this.getAnts.bind(this);
        this.startRace = this.startRace.bind(this);

        this.state = { 
          ants: [],
          loading: false
        }
    }

    /**
     * get list of ants
     */
    async getAnts() {
      this.setState({loading: true});
      let response = await fetch('https://sg-ants-server.herokuapp.com/ants', { 
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data =  await response.json();
      this.setState({ants: data.ants, loading: false})
    }

    /**
     * Function to get the outcome of the race. See which ant will have more chance to win
     */
    generateAntWinLikelihoodCalculator() {
      const delay = 7000 + Math.random() * 7000;
      const likelihoodOfAntWinning = Math.random();
    
      return (callback) => {
        setTimeout(() => {
          callback(likelihoodOfAntWinning);
        }, delay);
      };
    }

    /**
     * Loop through all ants and change the state whenever there's a new progress
     */
    async startRace(){
      this.setState({racing: 0});
      for (let i = 0; i < this.state.ants.length; i++) {
        const callback = this.generateAntWinLikelihoodCalculator();
        let ant = this.state.ants[i];
        ant.running_state = 'in progress';
        this.state.ants.splice(i, 1, ant);
        this.setState({ants: this.state.ants});
        callback((result) => {
          ant.win_likelihood = result;
          ant.running_state = 'calculated';
          this.state.ants.splice(i, 1, ant);
          this.setState({
            racing: this.state.racing+1,
            ants: this.state.ants
          })
        });
      }
    }
    
    render() {
        return ( 
          <div className="container">
            <h1 className="title">Ant Race</h1>
            <h2 className="subtitle">Check which ant will be most likely to win the race.</h2>
            {
              this.state.racing < 5 && <progress className="progress is-small" max="100">15%</progress>
            }

            <div className="py-2">
              <button className={`button is-primary mr-2 ${this.state.loading ? 'is-loading' : ''}`} onClick={this.getAnts} disabled={this.state.ants.length}>Get Ants</button>
              <button className="button is-link" disabled={!this.state.ants.length || this.state.racing < 5} onClick={this.startRace}>Start race</button>
            </div>

            <div className="columns is-flex-wrap-wrap">
              {this.state.ants.map((a, index) => {
                  return <Ant className="column is-4-tablet is-mobile" key={index} ant={a}/>
              })}
            </div>
          </div>
        )
    }
}
