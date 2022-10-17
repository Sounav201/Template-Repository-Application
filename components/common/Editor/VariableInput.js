import React from 'react'

const VariableInput = ({ variable, handleTextInput }) => {

    const handleChange = (e) => {
        handleTextInput(variable, e.target.value);
    };


    return (
        <div >
            <label className='text-white my-1 p-1'>{variable.name}</label>
            <input type={"text"} 
            className='w-full border-2 my-1 border-gray-300 rounded-md p-1' 
            placeholder={`Enter ${variable.name}` } 
            value={variable.data}
            onChange={handleChange}
    
            />

        </div>
    )
}

export default VariableInput