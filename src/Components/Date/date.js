import React from 'react';

const Datee = (props) =>{
    const style={
        color: '#61DAFB',
        fontSize:'20px',
    }
    let today = new Date();
    let date = today.getDate()  + "/" + today.getMonth() + "/" + today.getFullYear();
    return(
        <p style={style}>
            { props.visible ? date : null}
        </p>
       
    );
}

export default Datee;