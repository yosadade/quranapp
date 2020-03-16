import React from 'react';

const Content = (props) => {
    // console.log(props.dataSeluruhSurah, 'data props')
    return (
        <div className="container bg-warning mt-4">
            <h5 className="text-light text-center" >List Surah</h5>
            <div className="container-fluid">
                <div className="row bg-succes justify-content-center">
                    {props.dataSeluruhSurah.map((item, index) =>
                        <div className="col-md-3" key={index}>
                            <div className="card p-3 m-2 text-center shadow">
                                <h5>{item.asma}</h5>
                                <p>{item.nama}</p>
                                <p>{item.arti}</p>
                                <button className="btn btn-default btn-success">Baca Surah</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Content