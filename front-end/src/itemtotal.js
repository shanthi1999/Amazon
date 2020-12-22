import React from 'react';
import './itemtotal.css';
import CurrencyFormat from 'react-currency-format';

function Itemtotal({ item, Price }) {

    var total = 0;
    const rate = (Price) => {
        Price.map(e => {
            total = total + e.Price;
        })
    }

    var totalprice = rate(Price);
    return (
        <div className="Subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({item} items): <strong>${total}.00</strong>
                        </p>
                        <small className="Subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparators={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>

    );
}

export default Itemtotal;