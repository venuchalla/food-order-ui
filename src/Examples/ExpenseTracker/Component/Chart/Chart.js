import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    const values = props.dataPoints.map(d => d.value);
    const mValue = Math.max(...values);
    return (<div className="chart">
        {props.dataPoints.map((d) => {
            return (<ChartBar key={d.label} label={d.label} maxValue={mValue} value={d.value}></ChartBar>)
        })}
    </div>)
}
export default Chart;