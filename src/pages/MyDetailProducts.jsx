// import stato e effect
import { useState, useEffect } from "react";
// import di comp LInk da libreria router
import { Link } from "react-router-dom";
// import dell'hook per il parametro
import { useParams, useNavigate } from "react-router-dom";

const MyDetailProducts = () => {

    // recuperiamo il parametro dinamico (id)
    const { id } = useParams();
    // utilizzo il navigate
    const navigate = useNavigate();

    const [prodotto, setProducts] = useState();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProducts(res.data))
            .catch(() => { navigate('/prodotti') })
    }, [id])

    return (
        <div className="prodotti">
            {prodotto ? (
                <div className="prodotto-detail">
                        <Link className="link-prodotto" to={`/products`}>
                    <div className="img-prodotto">
                        <img src={prodotto.image} alt="foto prodotto" />
                    </div>
                    <div className="info-prodotto">
                        <p className="categoria-prodotto">{prodotto.category}</p>
                        <p className="nome-prodotto">{prodotto.title}</p>
                        <p className="descrizione-prodotto">{prodotto.description}</p>
                        <p className="prezzo-prodotto">{prodotto.price}€</p>
                        <p className="valutazione-prodotto">I nostri clienti lo hanno valutato con: {prodotto.rating.rate}/5</p>
                        {/* il link lo prendo direttamente dall'api */}
                            {/* Torna ai Prodotti */}
                    </div>
                        </Link>
                </div>
            )
                :
                (<p>Loading...</p>)}
        </div>)
}

export default MyDetailProducts