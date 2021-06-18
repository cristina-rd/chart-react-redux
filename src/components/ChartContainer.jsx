import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import store from '../index';
import Chart from './Chart'

function ChartContainer(props) {
    let list = store ? store.getState().list : null;
    let created = store ? store.getState().created : false;
    const [data, setData] = useState([]);

    // uv es el .number (eje Y), name es el .id (eje X), amt es el .text (etiqueta)
    // cada objeto dentro del array data es un punto --> bucle que recorra state y añada data

    console.log('CHARTTTT', list, created)

/*     useEffect(()=>{}, [state])
 */
    if (list) {
        for (let i = 0; i < list.length; i++) {
            setData(data => [...data, { name: list[i].id, uv: list[i].number, atm: list[i].text }])
        }
        return (
            <div>
                {store.getState() ? <Chart data={data} /> : null}
            </div>
        )
    }

    return (
        <div>
            {created ? <Chart data={data} /> : null}
        </div>
    )
}

const mapStateToProps = state => {
    return { list: state.list, created: state.created }
}

const chart = connect(mapStateToProps)(ChartContainer)

export default chart