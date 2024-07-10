import React, {useContext} from 'react';
import {AppContext} from '../../../AppContext'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Recent() {

    const { data } = useContext(AppContext);

    return(
            <div className="recent">
                <h2>Recent</h2>
                <h3 className='all'><Link to="/wholeList" className="link">Whole List:</Link></h3>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <Link to="/main" className="link">
                                <img src={item.picture} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Chapter: {item.chapter}</p>
                                    <p><i className="bi bi-alarm"></i> {item.time} minutes ago</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default Recent;
