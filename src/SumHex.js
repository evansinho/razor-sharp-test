import React, { Fragment, useState } from 'react';

const SumHex = () => {
  const [ hexInput, setHexInput ] = useState({
    input1: '',
    input2: '',
  });

  const [ result, setResult ] = useState(0);

  const { input1, input2 } = hexInput;

  const onchange = (e) => setHexInput({...hexInput, [e.target.name]: e.target.value});

  const onSubmit = (e) => {
    e.preventDefault();
    if (input1.length !== input2.length) {
      alert("input lenght must be equal");
    } else {
      let addHex = (parseInt(input1, 16) + parseInt(input2, 16)).toString(16);
      setResult(addHex)
      setHexInput({
        input1: '',
        input2: '',
      })
    }
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Enter Hex Value" 
            name="input1" 
            value={input1} 
            onChange={e => onchange(e)} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Enter Hex Value" 
            name="input2" 
            value={input2} 
            onChange={e => onchange(e)} 
            required 
          />
        </div>
        <input type="submit" value="ADD" className="btn btn-primary my-1" />
      </form>
      <div className="result">
        <h2>{result}</h2>
      </div>
    </Fragment>
  )
}

export default SumHex;
