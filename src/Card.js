import React from 'react';


import axios from 'axios';

export default class Card extends React.Component {
	constructor() {
		super();
		this.state = {
  		media: []
 	}
}
  componentDidMount() {
    axios.get(`http://localhost:8080/tweets/details/INDvWI`)
      .then(res => {
        const media = res.data.data.twitter;
        console.log(media);
        this.setState({ media });
      })
  }

 /* let newData = media.map(function(item, index, array) {
  	return item;
  });*/


  render() {
  	
    return (
      <div>

        <table id="customers">
         <tr>
          <th>Screen Name</th>
          <th>Text</th>
          <th>Media</th>
         </tr>
         <tr>
          <td>{(this.state.media.length>0)?(JSON.stringify(this.state.media[0]['screenName'])):("no data")}</td>
          <td>{(this.state.media.length>0)?(JSON.stringify(this.state.media[0]['text'])):("no data")}</td>
          <td>{(this.state.media.length>0)?(JSON.stringify(this.state.media[0]['media'])):("no data")}</td>
         </tr>
       </table>
	
      </div>
    )
  }
}

