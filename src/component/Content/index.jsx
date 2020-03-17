import React from 'react';
import ListSurah from '../ListSurah/index';
import IsiSurah from '../IsiSurah';
import SearchBar from '../Searchbar';

const Content = (props) => {
    // console.log(props.dataSeluruhSurah, 'data props')
    return (
        // <div className="container bg-warning mt-4">
        //     <h5 className="text-light text-center" >List Surah</h5>
        //     <div className="container-fluid">
                // <div className="row bg-succes justify-content-center">
                //     {props.dataSeluruhSurah.map((item, index) =>
                //         <div className="col-md-3" key={index}>
                //             <div className="card p-3 m-2 text-center shadow">
                //                 <h5>{item.asma}</h5>
                //                 <p>{item.nama}</p>
                //                 <p>{item.arti}</p>
                //                 <button className="btn btn-default btn-success">Baca Surah</button>
                //             </div>
                //         </div>
                //     )}
                // </div>
        //     </div>
        // </div>
        <div className="container bg-warning mt-4 py-3">
            <div className="container-fluid">
                {
                    props.dataSeluruhSurah && !props.isiSurah 
                    ? <div>
                        <SearchBar
                            onHandleInput={props.onHandleInput}
                            searchValue={props.searchValue}
                        />
                        <h3 className="text-light p-5 text-center">
                            Daftar Surah
                        </h3>
                        <ListSurah
                            dataSeluruhSurah = {props.dataSeluruhSurah}
                            dataSeluruh = {props.dataSeluruh}
                            bacaSurah = {props.bacaSurah}
                            namaSurah = {props.namaSurah}
                            isiSurah = {props.isiSurah}
                        />
                    </div>
                    : props.isiSurah
                    ? <IsiSurah 
                        namaSurah = {props.namaSurah}
                        isiSurah = {props.isiSurah}
                        backHome = {props.backHome}
                    />
                    : null
                }
            </div>
        </div>
    )
}

export default Content