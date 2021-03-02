import React, { useEffect } from 'react';
import { RadialChart } from 'react-vis'
import axios from 'axios';

let M = 0; let F = 0;
let myData = [{ angle: M, label: 'Male' }, { angle: F, label: 'Female' }];
function MFRatio(props) {

    useEffect(() => {
        M = 0; F = 0; myData = [{ angle: M, label: 'Male' }, { angle: F, label: 'Female' }];
        // Update the document title using the browser API
        axios.get('http://localhost:3000/users')
            .then(resp => {
                const data = resp.data;
                console.log(data);
                data.forEach(e => {
                    // console.log(e.Gender)
                    if (e.Gender === 'Male') {
                        M++;
                        // console.log(M);
                    } else {
                        F++;
                    }
                });
                console.log(M, F);
                myData = [{ angle: M, label: 'Male' }, { angle: F, label: 'Female' }]
            })
            .catch(error => {
                console.log(error);
            });
    });

    return (
            <RadialChart
                data={myData}
                width={300}
                height={300}
                showLabels={true} />
    );
}

export default MFRatio;