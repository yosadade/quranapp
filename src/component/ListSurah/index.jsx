import React from 'react';

const ListSurah = (props) => {
    // console.log(props.dataSeluruh,'inidatabaru')
    return (
        <div className="row justify-content-center text-center">
            {
                (props.dataSeluruhSurah && !props.dataSeluruh)
                ? props.dataSeluruhSurah.map((item,index)=> (
                    <div className="col-md-4 col-6 col-lg-3 my-2" key={index}>
                        <div className="col-12 bg-white text-dark p-2 rounded shadow-lg" 
                        style={{minHeight: '200px'}}>
                            <h3>{item.asma}</h3>
                            <p>{item.nama}</p>
                            <p>{item.arti}</p>
                            <button 
                            className="btn btn-default btn-success"  
                            onClick= {() => props.bacaSurah(item.nomor, item.nama)}>
                                Baca Surah
                            </button>
                        </div>
                    </div>
                ))
                : props.dataSeluruh
                ? props.dataSeluruh.map((item, index) => (
                    <div className="col-md-4 col-6 col-lg-3 my-2" key={index}>
                        <div className="col-12 bg-white text-dark p-2 rounded shadow-lg" 
                        style={{minHeight: '200px'}}>
                            <h3>{item.asma}</h3>
                            <p>{item.nama}</p>
                            <p>{item.arti}</p>
                            <button 
                                className="btn btn-default btn-success"
                                onClick= {() => props.bacaSurah(item.nomor, item.nama)}
                            >
                                Baca Surah
                            </button>
                        </div>
                    </div>
                ))
                : null
            }
        </div>
    )
}

export default ListSurah