import React, { useState, useEffect } from 'react';


const About = () => {
    const  [hasError, setErrors] =  useState(false);
    const  [names, setNames] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/data.json");
            res
                .json()
                .then(res => setNames(res))
                .catch(err => setErrors(err));
        }

        fetchData();
    });
    
    return (
        <div>
            <h1>About</h1>
            <ul>
                {names.map((name) =>{
                    return (<li>{name}</li>)
                })}
            </ul>
        </div>
    );
};

export default About;
