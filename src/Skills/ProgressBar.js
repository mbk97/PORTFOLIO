import React from 'react'

import './ProgressBar.css';

const ProgressBar = (props) => {

    const {bgColor, skill, completed, label} = props;

    const containerStyles ={
        height: 9,
        width: '70%',
        backgroundColor: "whiteSmoke",
        borderRadius: 50,
        margin: 5,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgColor,
        borderRadius: 'inherit',
        textAlign: 'right'
      }
      

    return (
        <div className='progress-container'  >

        <h4 className='skill'>{skill}<span className='label'>{label}</span></h4>
        <div className='progress-bar'   style={containerStyles}>
        <div className='progress-fill' style={fillerStyles}>
        </div>
        </div>

            
        </div>
    )
}

export default ProgressBar
