import react from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { useSelector } from 'react-redux'
import '../styleSheets/AllProducts.css'

export default function AllProducts() {
    const navigate = useNavigate();
    const arrProducts = useSelector((state) => state.products);
    return (
        <div>
            <div className="all">
                {
                    arrProducts.map((x, index) =>
                        <div className="card" style={{ width: "18rem" }} key={index}>
                            <img className="card-img-top" src={`../../assets/${x.picture}`} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{x.name}</h5>
                                <p className="card-text">מחיר: {x.price}</p>
                                <p className="card-text">קוד מוצר: {x.id} </p>
                                <input type="button" className="btn btn-primary" onClick={() => navigate(`/item/${x.id}`)} value="לקנית כרטיס" />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}