import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import axios from 'axios'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let M = 0, F = 0;
class chart extends Component {

	componentDidUpdate() {
		M = 0; F = 0;
		axios.get('http://localhost:3000/users')
			.then(resp => {
				const data = resp.data;
				// console.log(data);
				data.forEach(e => {
					if (e.Gender === 'Male') {
						M++;
					} else {
						F++;
					}
				});
			})
			.catch(error => {
				console.log(error);
			});
	}


	render() {
		let val1 = M / (M + F) * 100;
		let val2 = F / (M + F) * 100;
		// console.log(val1, val2);
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Male Female Ratio"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: val1, label: "Male" },
					{ y: val2, label: "Female" }
				]
			}]
		}
		return (
			<div>
				<CanvasJSChart options={options}
				/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default chart;
