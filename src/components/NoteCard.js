import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../css/card-notes.css';
import { Modal } from './Modal';



export const NoteCard = ({
    _id,
    department,
    title,
    body,
    level,
    url,
    handleClickModal
}) => {

    // const [showModal, setShowModal] = useState(false);

    var cardBg;

    switch (level) {
        case "bajo":
            cardBg = "card-level-low";
            break;

        case "medio":
            cardBg = "card-level-half";
            break;

        case "alto":
            cardBg = "card-level-hight";
            break;

        case "observacion":
            cardBg = "card-level-observacion";
            break;

        default:
            break;
    }


    // const handleClickModal = () => {
    //     setShowModal(true);
    // }


    return (
        <div className={cardBg} style={{ maxWidth: "10rem", alignItems: 'center' }}>
            <div className='card-header'>
                {department}
            </div>
            <div className="row g-0">

                <div>
                    {
                        url
                            ? <img src={url} className="card-img" alt="foto" />
                            : <img src="./images/missing.jpg" />
                    }
                </div>
                <div className="col-md-12 mx-auto">

                    <div className="card-body">
                        <h5 className="card-title"> {department} </h5>
                        <p className="card-text"> {title} </p>
                        {/* <p className="card-text"> {body} </p> */}
                        {/* <p className="card-text">
                            <small className="text-muted"> {first_appearance} </small>
                        </p> */}
                    </div>
                </div>

            </div>
            <button className="btn btn-primary" onClick={handleClickModal}>
                Abrir
            </button>
            <div className="card-footer text-muted">
                {level}
            </div>
        </div>
    );
}