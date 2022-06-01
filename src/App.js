import React from 'react';
import './Component/Styles/download.css'
import TextEditor from './Component/TextEditor'
class App extends React.Component {

constructor(props) {
  super(props)

  this.state = {
    state:'welcome to knowledgator'
  }
}

  submit = (values) => {
    alert("Form values submitted");
    console.log(values);
  }
  
   onInputChange = (e) => {
    this.setFiles(e.target.files)
};


 onSubmit = (e) => {
  e.preventDefault();
};
 
  render() {
   
    
    return (
      <>
      <div className="container">
        <h2>Text Decoration</h2>
        <p> created with React,redux and Sass</p>
        <TextEditor onSubmit={this.submit}/>
       
      </div>
      <div>
      
      </div>
      </>
      
    )
  }
}

export default App;
