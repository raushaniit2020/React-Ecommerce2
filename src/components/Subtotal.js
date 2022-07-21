import React from 'react';
import './Subtotal.css';
// import CurrencyFormat from 'react-currency-format';
// import { useStateValue } from './StateProvider';
// import { getBasketTotal } from './Reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal({ num_items, total_cost }) {
    // const [{ basket }, dispatch] = useStateValue();
    // const value={total_cost}
    const navigate = useNavigate();
    return (
        <div className='subtotal'>
           
                        <p>
                            Subtotal ({num_items} items):<strong>{total_cost}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This contains a gift
                        </small>
            <button onClick={e => navigate('/proceedtocheckout', { replace: true })}>Proceed to CheckOut</button>
        </div>
    )
}

export default Subtotal