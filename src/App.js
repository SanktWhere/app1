import React, { Component } from 'react';

import './slick.min.css';
import './slick-theme.css';
import './App.css';
import './index.css';

import SimpleSlider from './Slider';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        res.json().then((data) => {
          data.length = 10;
          this.setState({
            data: data
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    let {data} = this.state;

    return (
        <div className="sliderSet">
          <SimpleSlider data={data}/>
        </div>
    );
  }
}

export default App;
