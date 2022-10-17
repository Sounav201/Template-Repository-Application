import React from 'react'

const VariableInput = ({ variable, handleTextInput }) => {

    const handleChange = (e) => {
        handleTextInput(variable, e.target.value);
    };


    return (
        <div>
            <label className='text-white'>{variable.name}</label>
            <input type={"text"} 
            className='w-full border-2 border-gray-300 rounded-md p-2' 
            placeholder={`Enter ${variable.name}` } 
            value={variable.data}
            onChange={handleChange}
    
            />

        </div>
    )
}

export default VariableInput