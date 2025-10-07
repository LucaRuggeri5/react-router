// import di comp LInk da libreria router
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const { prodotto } = props;

    return (
        <div className="prodotto">
            <div className="img-prodotto">
                <img src={prodotto.image} alt="foto prodotto" />
            </div>
            <div className="info-prodotto">
                <p className="nome-prodotto">{prodotto.title}</p>
                <p className="prezzo-prodotto">{prodotto.price}€</p>
                <Link to={`/products/${prodotto.id}`}>
                    Dettaglio Prodotti
                </Link>
            </div>
        </div>
    )
}