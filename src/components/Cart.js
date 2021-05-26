import '../styles/Cart.css'
function Cart() {
    const title = "Panier"
    const pmontera = 8 
    const plierre = 10
    const pfleure = 15

    return <div className='lmg-cart'> 
        <h2> {title} </h2>

        <ul> 
                    <li>un monstera: {pmontera} $</li> 
                    <li> un lierre: {plierre} $</li> 
                    <li>un bouquet de fleurs: {pfleure} $</li> 
                 </ul>

                <br />
        <p> Total : {pmontera + plierre + pfleure} $</p>
           </div>
}

export default Cart