dfimport React, {useContext} from 'react';
import {AppContext} from '../../../../AppContext'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Top = () => {
    const { data } = useContext(AppContext);

    return(
            <div className='catalog'>
                <h2>Top 15</h2>
                <h3>Genres</h3>
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
    );
}

export default Top;
