export default function ProductCard(props) {
    const {prodotto} = props;

    return (
        <div className="prodotto">
            <div className="img-prodotto">
                <img src={prodotto.image} alt="foto prodotto" />
            </div>
            <div className="info-prodotto">
                <p className="nome-prodotto">{prodotto.title}</p>
                <p className="prezzo-prodotto">{prodotto.price}</p>
            </div>
        </div>
    )
}