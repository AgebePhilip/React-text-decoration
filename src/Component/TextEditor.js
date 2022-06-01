 
import React from 'react';
import '../Component/Styles/download.css'

import { Field, reduxForm } from 'redux-form';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import Download from './Download';


const validate = values => {
  const errors = {}
  if (values.comment && values.comment.length < 20) {
    errors.comment = 'Minimum be 20 characters or more';
  } else if (!values.comment) {
    errors.comment = 'Required';
  } else {
    errors.comment = false;
  }
  return errors
}

const renderRTEField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className='richtext'>
    <label className="control-label">{label}</label>
    <div className='text-editor'>
      <RichTextEditorComponent htmlAttributes={{ name: "comment" }} value={input.value}
        change={param => input.onChange(param.value)} focus={param => input.onFocus()} blur={param => input.onBlur()} id="defaultRTE">
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let TextEditor = props => {
  const { handleSubmit,onInputChange,handleChange} = props;
  return (
<>

    {/* see the simple form*/} 
    <form className='form' onSubmit={handleSubmit} method="post" action="#" id="#">
    <div className="form-grouping">
        <Field name="comment" component={renderRTEField} />
      </div>

      
      <div className="textarea">
                <input type="file" placeholder='upload'
                       onChange={onInputChange}
                       multiple/>
            
                        <div className='uploadButton'>
                        <button type="submit" 
                        onClick={handleChange} 
                        className="btn btn-primary" >
                          UploadFile</button>
                          <div className='download-btn'>
                            <Download/>
                            </div>
                          
                          </div>
                        </div>

                        </form>
    <div>
    
    </div>
    </>
  )
}
TextEditor = reduxForm({
  form: 'contact',
  validate,
})(TextEditor);

export default TextEditor;