import { Link, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect ,useRef} from "react"
import Swal from "sweetalert2";
import { Context } from "./usecontext";
import logo from "./images/WhatsApp Image 2026-02-12 at 11.08.16 AM.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export const Header = () => {
    const [flag, setflag] = useState(false);
    const { id, setid, theme, setTheme } = useContext(Context)
     const[d,setd]=useState([])
     const[cat,setcat]=useState([])
    const searchRef = useRef(null);
    const [search,setsearch] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("data")
        if (token) {
            setflag(true);
        }
        else {
            setflag(false);
        }
        show()
    }, [id])

     useEffect(()=>{
        handleSearch();
    },[search])

    const handleSearch = async () => {
        const result = await fetch(`https://elcto-1.onrender.com/api/getproduct`, {
            method: "get"
        })
        if (result.ok) {
            const res= await result.json();
            if(res.statuscode===1){
                setd(res.data);
               
            }
        }
         if(searchRef.current){
            clearTimeout(searchRef.current);
        }
        searchRef.current = setTimeout(() => {
            setsearch("");
        }, 5000);
    }
    const filteredProducts = [...d].filter((product) =>
    product.ProductName.toLowerCase().includes(search.toLowerCase())
  );


    const logout = () => {
        localStorage.removeItem("data");
        setflag(false);
        setid("");
        Swal.fire("Logout Successfull", "", "success");
       
    }

    const cart=()=>{
        if(id){
            navigate("/cart")
        }
        else{
            navigate("/login")
        }
    }
    const wish=()=>{
        if(id){
            navigate("/wish")
        }
        else{
            navigate("/login")
        }
    }

    const show=async()=>{
        const result = await fetch("https://elcto-1.onrender.com/api/getcategory", {
          method: "get"
        })
        if (result.ok) {
          const res = await result.json()
          if (res.statuscode === 1) {
            setcat(res.data)
          }
          else {
            alert("rr")
          }
        }
      }
    return (
        <>


            <nav className={`navbar navbar-expand-lg shadow-sm sticky-top site-header ${theme === 'dark' ? 'site-header-dark' : 'site-header-light'}`}>
                <div className="container-fluid px-4">

                    {/* === MOBILE: Toggler + Logo + Theme icon === */}
                    <div className="d-flex align-items-center gap-3 d-lg-none w-100 justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <button
                                className="navbar-toggler border-0 p-1"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#mobileOffcanvas"
                                aria-controls="mobileOffcanvas"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link to="/" className="navbar-brand fw-bold fs-4 m-0">
                                <img src={logo} alt="logo" style={{ height: "40px" }} className="navbar-logo" />
                            </Link>
                        </div>
                        <button className="btn header-icon-btn p-1 border-0 fs-5" style={{ background: 'transparent' }} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                            {theme === 'dark' ? <i className="bi bi-sun-fill text-warning"></i> : <i className="bi bi-moon-fill"></i>}
                        </button>
                    </div>

                    {/* === DESKTOP: Full Navbar === */}
                    <div className="d-none d-lg-flex align-items-center w-100 flex-nowrap" style={{ gap: '8px' }}>

                        {/* Logo */}
                        <Link to="/" className="navbar-brand fw-bold fs-4 flex-shrink-0" style={{ marginRight: '12px' }}>
                            <img src={logo} alt="logo" style={{ height: "42px" }} className="navbar-logo" />
                        </Link>

                        {/* Nav Links */}
                        <ul className="navbar-nav flex-row gap-2 flex-shrink-0 mb-0">

                            <Link to="/" className="text-decoration-none">
                                <li className="nav-item">
                                    <span className="nav-link fw-semibold px-3 py-2 rounded-2 header-nav-link">Home</span>
                                </li>
                            </Link>

                            <Link to="/about" className="text-decoration-none">
                                <li className="nav-item">
                                    <span className="nav-link px-3 py-2 rounded-2 header-nav-link">About</span>
                                </li>
                            </Link>

                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle px-3 py-2 rounded-2 header-nav-link"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ cursor: 'pointer' }}
                                >
                                    Products
                                </span>
                                <ul className="dropdown-menu shadow-sm border-0 mt-1">
                                    {cat.map((a) =>
                                        <li key={a._id}>
                                            <Link to={`/related?id=${a._id}`} className="dropdown-item py-2">{a.Name}</Link>
                                        </li>
                                    )}
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle px-3 py-2 rounded-2 header-nav-link"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ cursor: 'pointer' }}
                                >
                                    Features
                                </span>
                                <ul className="dropdown-menu shadow-sm border-0 mt-1">
                                    <li><Link to="/about" className="dropdown-item py-2">About Us</Link></li>
                                    <li><Link to="/contact" className="dropdown-item py-2">Contact Us</Link></li>
                                    <li><Link to="/myorder" className="dropdown-item py-2">Order</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle px-3 py-2 rounded-2 header-nav-link"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ cursor: 'pointer' }}
                                >
                                    Account
                                </span>
                                <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-1">
                                    <li>
                                        {flag ? (
                                            <p onClick={logout} className="dropdown-item text-center mb-0 py-2" style={{ cursor: 'pointer' }}>Logout</p>
                                        ) : (
                                            <>
                                                <Link className="dropdown-item py-2 text-decoration-none" to="/login">Log In</Link>
                                                <Link className="dropdown-item py-2 text-decoration-none" to="/register">Sign Up</Link>
                                            </>
                                        )}
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        {/* Search Box — auto-grows, properly spaced */}
                        <div className="search-box position-relative flex-grow-1" style={{ maxWidth: '260px', minWidth: '160px', margin: '0 12px' }}>
                            <input
                                className="form-control rounded-pill"
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => { setsearch(e.target.value) }}
                                style={{ paddingLeft: '20px', paddingRight: '20px' }}
                            />
                            {search.length > 0 && (
                                <ul className="search-result">
                                    {filteredProducts.map((a) => (
                                        <Link key={a._id} to={`/detail?id=${a._id}&cid=${a.Category}`} className="text-decoration-none text-dark" onClick={() => setsearch("")}>
                                            <li>{a.ProductName}</li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Action Buttons — right side */}
                        <div className="d-flex align-items-center flex-shrink-0" style={{ gap: '6px', marginLeft: 'auto' }}>
                            {/* Theme Toggle — prominently placed before cart */}
                            <button
                                className="theme-toggle-btn"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            >
                                {theme === 'dark'
                                    ? <><i className="bi bi-sun-fill text-warning me-1"></i> Light</>
                                    : <><i className="bi bi-moon-fill me-1"></i> Dark</>
                                }
                            </button>
                            <button className="btn header-icon-btn border-0 fs-5 p-2" style={{ background: 'transparent' }} onClick={() => cart()} title="Cart">
                                <i className="bi bi-cart-fill"></i>
                            </button>
                            <button className="btn header-icon-btn border-0 fs-5 p-2" style={{ background: 'transparent' }} onClick={() => wish()} title="Wishlist">
                                <i className="bi bi-heart-fill"></i>
                            </button>
                            {flag ? (
                                <button className="btn rounded-pill px-4 py-2 fw-semibold ms-1" style={{ backgroundColor: '#111', color: '#fff', fontSize: '14px' }} onClick={logout}>Logout</button>
                            ) : (
                                <button className="btn rounded-pill px-4 py-2 fw-semibold ms-1" style={{ backgroundColor: '#111', color: '#fff', fontSize: '14px' }} onClick={() => { navigate("/login") }}>Log In</button>
                            )}
                        </div>

                    </div>
                </div>
            </nav>






            {/* moblie */}
            <div className={`offcanvas offcanvas-start d-lg-none ${theme === 'dark' ? 'site-header-dark' : 'site-header-light'}`} tabIndex="-1" id="mobileOffcanvas" aria-labelledby="mobileOffcanvasLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title fw-bold" id="mobileOffcanvasLabel">ElectoMart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link to="/" className="nav-link active fw-semibold py-3 text-start " >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item" data-bs-dismiss="offcanvas">
                            <Link to="/about" className="nav-link text-start ">
                                About
                            </Link>
                        </li>


                        <li className="nav-item" >
                            <a
                                className="nav-link py-3  d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse"
                                href="#productsCollapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="productsCollapse"
                            >
                                <span>
                                    Products
                                </span>
                                <i className="bi bi-chevron-down"></i>
                            </a>
                            <div className="collapse text-start" id="productsCollapse">
                                <div className="ps-4 py-2" data-bs-dismiss="offcanvas">
                                   <Link className="dropdown-item text-decoration-none" to={`/related?id=6970dd16300a757a6dcdb928`}>LED</Link>
                                    <Link className="dropdown-item text-decoration-none" to={`/related?id=6970dd60300a757a6dcdb92e`}>Laptops</Link>
                                    <Link className="dropdown-item text-decoration-none" to={`/related?id=6970dd2d300a757a6dcdb92a`}>Mobiles</Link>
                                    <Link className="dropdown-item text-decoration-none" to={`/related?id=69849f299a77c6ecd3c2839b`}>Airpods</Link>
                                    <Link className="dropdown-item text-decoration-none" to={`/related?id=69849fa89a77c6ecd3c283af`}>Cameras</Link>
                                </div>
                            </div>
                        </li>


                        <li className="nav-item">
                            <a
                                className="nav-link py-3  d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse"
                                href="#featuresCollapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="featuresCollapse"
                            >
                                <span>
                                    Features
                                </span>
                                <i className="bi bi-chevron-down"></i>
                            </a>
                            <div className="collapse text-start" id="featuresCollapse">
                                <div className="ps-4 py-2 " data-bs-dismiss="offcanvas">
                                    <Link to="/about" className="dropdown-item py-2">About Us</Link>
                                    <Link to="/contact" className="dropdown-item py-2" >Contact Us</Link>
                                    <Link to="/myorder" className="dropdown-item py-2">Order</Link>
                                </div>
                            </div>
                        </li>


                        <li className="nav-item">
                            <a
                                className="nav-link py-3  d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse"
                                href="#accountCollapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="accountCollapse"
                            >
                                <span>
                                    Account
                                </span>
                                <i className="bi bi-chevron-down"></i>
                            </a>
                            <div className="collapse text-start" id="accountCollapse">
                                <div className="ps-4 py-2" data-bs-dismiss="offcanvas">
                                    <Link to="/login" className="dropdown-item py-2">Login</Link>
                                    <Link to="/register" className="dropdown-item py-2" >Sign Up</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-4 pt-3 border-top">
                        <h6 className="fw-bold mb-3">Contact Info</h6>
                        <div className="mb-2">
                            <i className="bi bi-telephone me-2"></i>
                            <span>Contact Us: </span>
                            <strong>59434596</strong>
                        </div>
                        <div className="mb-2">
                            <i className="bi bi-envelope me-2"></i>
                            <span>E-Mail: </span>
                            <strong>electromart@gmail.com</strong>
                        </div>
                        <div className="mb-2">
                            <i className="bi bi-clock me-2"></i>
                            <span>Hours: </span>
                            <strong>9:00 AM - 8:00 PM</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="bottom-toolbar ">
                    <div className="btn text-white" onClick={() => { navigate("/") }}>
                        <i className=" bi bi-search"
                         data-bs-toggle="offcanvas"
                            data-bs-target="#searchOffcanvas"
                            aria-controls="searchOffcanvas"
                            aria-label="Toggle navigation"></i><br></br>
                        <span className=''>Search</span>
                    </div>
                    <div className="btn text-white" onClick={() => { navigate("/myorder") }}>
                        <i className="bi bi-bag-fill" ></i><br></br>
                        <span className='' >Order</span>
                    </div>
                    <div className="btn text-white" onClick={() => { wish() }}>
                        <i className="bi bi-heart-fill"></i><br></br>
                        <span className=''>Wishlist</span>
                    </div>
                    <div className="btn text-white" onClick={() => { cart() }}>
                    <i className="bi bi-cart-fill"></i><br></br>
                        <span className=''>Cart</span>
                    </div>
                   {
                    flag ? <div className="btn text-white" onClick={() => { logout() }}>
                    <i className="bi bi-box-arrow-right"></i><br></br>
                    <span className=''>Logout</span>
                </div> : <div className="btn text-white" onClick={() => { navigate("/login") }}>
                    <i className="bi bi-person-fill"></i><br></br>
                    <span className=''>Login</span>
                </div>
                   }

                </div>

            </div>
        <div className={`offcanvas offcanvas-start d-lg-none ${theme === 'dark' ? 'site-header-dark' : 'site-header-light'}`} id="searchOffcanvas" tabIndex="-1" aria-labelledby="searchOffcanvasLabel">
            <div className="offcanvas-header border-bottom">
                <h4 className="offcanvas-title" id="searchOffcanvasLabel">Search</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"  ></button>
            </div>
            <div className="offcanvas-body">
                 <div className="search-box">
  <input
    className="ms-3 form-control rounded-pill"
    type="text"
    placeholder="Search..."
    onChange={(e) => {setsearch(e.target.value)}}
  />
    
   {search.length > 0 && (
    <ul className="search-result">
      {filteredProducts.map((a) => (
        <Link key={a._id} to={`/detail?id=${a._id}&cid=${a.Category}`} className="text-decoration-none text-dark"   onClick={() => setsearch("")}>
          <li className="py-2" data-bs-dismiss="offcanvas">{a.ProductName}</li>
        </Link>
      ))}
    </ul>
  )}
</div>

            </div>
        </div>
        </>
    )
}
