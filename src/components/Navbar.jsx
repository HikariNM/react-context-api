import { NavLink } from "react-router-dom";
import { useBudget } from '../contexts/BudgetContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


function NavBar({ onSearch }) {
    // Receives onSearch as a prop

    const [budget, setBudget] = useBudget();

    function setBudgetMode() {
        setBudget(!budget)
    }

    return (
        <nav className="navbar navbar-expand-lg fw-bold bg-warning mb-4">
            <div className="container-fluid">
                <button type="button" className="btn btn-outline-dark" onClick={setBudgetMode}>{budget ? 'Disattiva Modalità Budget' : 'Attiva Modalità Budget'}</button>
                {/* <NavLink className="navbar-brand" to="/">Logo</NavLink> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" onChange={(e) => onSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;