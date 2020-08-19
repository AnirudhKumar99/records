import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div align='center'>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
      return <div align="center">Loading...</div>;
    } 
    else { var id=0
      return (
        <div align="center">
          <h2>JSON into Table</h2>
          <table align="center" cellPadding='6' cellSpacing='0'>
            <thead> 
              <td>Sl. No. &nbsp;</td>
              <td>Code</td>
              <td>Name</td>
              <td>City</td>
              <td>Country</td>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.code}>
                  <td>{++id}</td>
                  <td>{item.code}</td>
                  <td>{item.name?item.name:"Aditya Pranav Bhuvanapalli"}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default App;