import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import store from '../index';
import Chart from './Chart'

function ChartContainer(props) {
    let list = store ? store.getState().list : null;
    let created = store ? store.getState().created : false;
    const [data, setData] = useState([]);

    useEffect(()=>{
        if (list) {
            for (let i = 0; i < list.length; i++) {
                let obj = { name: list[list.length-1].id, uv: list[list.length-1].number, atm: list[list.length-1].text }
                setData([...data, obj])
            }
            return (
                <div>
                    {store.getState() ? <Chart data={data} /> : null}
                </div>
            )
        }
    }, [list])

    return (
        <div>
            {created ? <Chart data={data} label="ABDC" /> : null}
        </div>
    )
}

const mapStateToProps = state => {
    return { list: state.list, created: state.created }
}

const chart = connect(mapStateToProps)(ChartContainer)

export default chart