import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';  // Ensure this path is correct
import Login from './Pages/Login/Login';      // Ensure this path and component name are correct
import Home from './Pages/Home/Home';         // Ensure this path is correct
import SellWithUs from './Pages/SellWithUs/SellWithUs'; // Ensure this path is correct
import Footer from './Pages/Footer/Footer';
//import Charity from './Pages/Charity/Charity';
import FilterSidebar from './Pages/Women/FilterSidebar';
import Slider from './Pages/Women/Slider';
import Men from './Pages/Men/Men';
import Aboutus from './Pages/Footer/Aboutus';
import Contactus from './Pages/Footer/Contactus';
import Faq from './Pages/Footer/Faq';
import Page from './Pages/Page/Page';
import Payment from './Pages/Payment/Payment';
import Women from './Pages/Women/Women';
import ProductDetail from './Pages/Products/ProductDetail';
import MenFilterSidebar from './Pages/Men/MenFilterSidebar';
import Mensli from './Pages/Men/Mensli';
import MenProductdetail from './Pages/MenProduct/MenProductdetail';
import TC from './Pages/Footer/TC';
import PrivacyPolicy from './Pages/Footer/PrivacyPolicy';
import Cart from './Pages/Cart/Cart';
import Rev from './Pages/Footer/Review/Rev';
import ReturnPolicy from './Pages/Footer/ReturnPolicy';
import Bridesmaid from './Pages/Bridesmaid/Bridesmaid';
import SliderBridesmaid from './Pages/Bridesmaid/SliderBridesmaid';
import ProductDetailBridesmaid from './Pages/Products/ProductDetailBridesmaid';
import Groomsmen from './Pages/Groomsmen/Groomsmen';
import SliderGroomsmen from './Pages/Groomsmen/SliderGroomsmen';
import ProductDetailGroomsmen from './Pages/Products/ProductDetailGroomsmen';
import Exclusives from './Pages/Exclusives/Exclusives';
import SliderExclusives from './Pages/Exclusives/SliderExclusives';
import ProductDetailExclusives from './Pages/Products/ProductDetailExclusives';


const AppContent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        category: [],
        price: [],
        color: [],
        size: [],
        occasion: []
    });
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [username,setUsername]=useState(null);
    const [cartItems, setCartItems] = useState([]);
    const location = useLocation();

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };
    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
    };
    const handleRemoveItem = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };


    useEffect(() => {
        if (location.state?.category) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                category: [location.state.category]
            }));
        }
        if(location.state?.searchTerm){
            setSearchTerm(location.state.searchTerm);
        }
        if(location.state?.username){
            setUsername(location.state.username);
        }
    }, [location.state]);

    const showNavbarAndFooter=!["/login"].includes(location.pathname);
    


    return (
        <>
            {showNavbarAndFooter && <Navbar onSearch={setSearchTerm} username={username}/>}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Login />} />
                <Route path="/men" element={
                    <>
                    <Mensli />
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                        <div className="filter-sidebar-container">
                            <button
                                className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
                                onClick={toggleFilter}
                            >
                                &#9776;
                            </button>
                            {isFilterOpen && (
                                <MenFilterSidebar
                                    filters={filters}
                                    onFilterChange={handleFilterChange}
                                    isOpen={isFilterOpen}
                                    onClose={toggleFilter}
                                />
                            )}
                        </div>
                        <div style={{ flex: 1, paddingLeft: '20px' }}>
                            <Men searchTerm={searchTerm} filters={filters} />
                        </div>
                    </div>
                </>
            } />
                <Route path="/women" element={
                    <>
                        <Slider />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div className="filter-sidebar-container">
                                <button
                                    className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
                                    onClick={toggleFilter}
                                >
                                    &#9776;
                                </button>
                                {isFilterOpen && (
                                    <FilterSidebar
                                        filters={filters}
                                        onFilterChange={handleFilterChange}
                                        isOpen={isFilterOpen}
                                        onClose={toggleFilter}
                                    />
                                )}
                            </div>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Women searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />
                <Route path="/bridesmaid" element={
                    <>
                        <SliderBridesmaid />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Bridesmaid searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />
                <Route path="/groomsmen" element={
                    <>
                        <SliderGroomsmen />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Groomsmen searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />
                <Route path="/exclusives" element={
                    <>
                        <SliderExclusives />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Exclusives searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />
                <Route path="/sell-with-us" element={<SellWithUs />} />
                {/* <Route path="/charity" element={<Charity />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/Aboutus" exact element={<Aboutus/>}></Route>
                <Route path="/Contactus" exact element={<Contactus/>}></Route>
                <Route path="/Faq" exact element={<Faq/>}></Route>
                <Route path="/TC" exact element={<TC/>}></Route>
                <Route path="/Rev" exact element={<Rev/>}></Route>
                <Route path="/bridesmaidproduct/:id" element={<ProductDetailBridesmaid onAddToCart={handleAddToCart} />} />
                <Route path="/groomsmenproduct/:id" element={<ProductDetailGroomsmen onAddToCart={handleAddToCart} />} />
                <Route path="/exclusivesproduct/:id" element={<ProductDetailExclusives onAddToCart={handleAddToCart} />} />

                <Route path="/PrivacyPolicy" exact element={<PrivacyPolicy/>}></Route>
                <Route path="/ReturnPolicy" exact element={<ReturnPolicy/>}></Route>

                <Route path="/Page" exact element={<Page/>}></Route>
                <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
                <Route path="/Menproducts/:id" element={<MenProductdetail onAddToCart={handleAddToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />} />
                <Route path="/payment" element={<Payment/>}/>


                

            </Routes>
            {showNavbarAndFooter && <Footer />}
        </>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;


//import React, { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
//import Navbar from './Pages/Navbar/Navbar';  
//import Login from './Pages/Login/Login';      
//import Home from './Pages/Home/Home';         
//import SellWithUs from './Pages/SellWithUs/SellWithUs'; 
//import Footer from './Pages/Footer/Footer';
////import Charity from './Pages/Charity/Charity';
//import FilterSidebarWomen from './Pages/Women/FilterSidebarWomen';
//import SliderWomen from './Pages/Women/SliderWomen';
//import Men from './Pages/Men/Men';
//import Women from './Pages/Women/Women';
//import ProductDetailWomen from './Pages/Products/ProductDetailWomen';
//import FilterSidebarMen from './Pages/Men/FilterSidebarMen';
//import SliderMen from './Pages/Men/SliderMen';
//import ProductDetailMen from './Pages/Products/ProductDetailMen';
//import Cart from './Pages/Cart/Cart';
//import Payment from './Pages/Payment/Payment';
//import TermsAndConditions from './Pages/Footer-Links/TermsAndConditions';
//import AboutUs from './Pages/Footer-Links/AboutUs';
//import ContactUs from './Pages/Footer-Links/ContactUs';
//import Faq from './Pages/Footer-Links/Faq';
//import Bridesmaid from './Pages/Bridesmaid/Bridesmaid';
//import SliderBridesmaid from './Pages/Bridesmaid/SliderBridesmaid';
//import ProductDetailBridesmaid from './Pages/Products/ProductDetailBridesmaid';
//import Groomsmen from './Pages/Groomsmen/Groomsmen';
//import SliderGroomsmen from './Pages/Groomsmen/SliderGroomsmen';
//import ProductDetailGroomsmen from './Pages/Products/ProductDetailGroomsmen';
//import Exclusives from './Pages/Exclusives/Exclusives';
//import SliderExclusives from './Pages/Exclusives/SliderExclusives';
//import ProductDetailExclusives from './Pages/Products/ProductDetailExclusives';
//
//
//const AppContent = () => {
//    const [searchTerm, setSearchTerm] = useState("");
//    const [filters, setFilters] = useState({
//        category: [],
//        price: [],
//        color: [],
//        size: [],
//        occasion: []
//    });
//    const [isFilterOpen, setIsFilterOpen] = useState(false);
//    const [cartItems, setCartItems] = useState([]);
//    const [username, setUsername] = useState(null);
//    const location = useLocation();
//
//    const handleFilterChange = (newFilters) => {
//        setFilters(newFilters);
//    };
//
//    const toggleFilter = () => {
//        setIsFilterOpen(!isFilterOpen);
//    };
//
//    const handleAddToCart = (item) => {
//        setCartItems([...cartItems, item]);
//    };
//
//    const handleRemoveItem = (index) => {
//        const newCartItems = cartItems.filter((_, i) => i !== index);
//        setCartItems(newCartItems);
//    };
//
//    useEffect(() => {
//        if (location.state?.category) {
//            setFilters((prevFilters) => ({
//                ...prevFilters,
//                category: [location.state.category]
//            }));
//        }
//        if (location.state?.username) {
//            setUsername(location.state.username);
//        }
//    }, [location.state]);
//
//    return (
//        <>
//            <Navbar onSearch={setSearchTerm} />
//            <Routes>
//                <Route path="/" element={<Home />} />
//                <Route path="/account" element={<Login />} />
//                <Route path="/men" element={
//                    <>
//                        <SliderMen />
//                        <div style={{ display: 'flex', marginTop: '20px' }}>
//                            <div className="filter-sidebar-container">
//                                <button
//                                    className={filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}}
//                                    onClick={toggleFilter}
//                                >
//                                    &#9776;
//                                </button>
//                                {isFilterOpen && (
//                                    <FilterSidebarMen
//                                        filters={filters}
//                                        onFilterChange={handleFilterChange}
//                                        isOpen={isFilterOpen}
//                                        onClose={toggleFilter}
//                                    />
//                                )}
//                            </div>
//                            <div style={{ flex: 1, paddingLeft: '20px' }}>
//                                <Men searchTerm={searchTerm} filters={filters} />
//                            </div>
//                        </div>
//                    </>
//                } />
//                <Route path="/women" element={
//                    <>
//                        <SliderWomen />
//                        <div style={{ display: 'flex', marginTop: '20px' }}>
//                            <div className="filter-sidebar-container">
//                                <button
//                                    className={filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}}
//                                    onClick={toggleFilter}
//                                >
//                                    &#9776;
//                                </button>
//                                {isFilterOpen && (
//                                    <FilterSidebarWomen
//                                        filters={filters}
//                                        onFilterChange={handleFilterChange}
//                                        isOpen={isFilterOpen}
//                                        onClose={toggleFilter}
//                                    />
//                                )}
//                            </div>
//                            <div style={{ flex: 1, paddingLeft: '20px' }}>
//                                <Women searchTerm={searchTerm} filters={filters} />
//                            </div>
//                        </div>
//                    </>
//                } />
//                <Route path="/bridesmaid" element={
//                    <>
//                        <SliderBridesmaid />
//                        <div style={{ display: 'flex', marginTop: '20px' }}>
//                            <div style={{ flex: 1, paddingLeft: '20px' }}>
//                                <Bridesmaid searchTerm={searchTerm} filters={filters} />
//                            </div>
//                        </div>
//                    </>
//                } />
//                <Route path="/groomsmen" element={
//                    <>
//                        <SliderGroomsmen />
//                        <div style={{ display: 'flex', marginTop: '20px' }}>
//                            <div style={{ flex: 1, paddingLeft: '20px' }}>
//                                <Groomsmen searchTerm={searchTerm} filters={filters} />
//                            </div>
//                        </div>
//                    </>
//                } />
//                <Route path="/exclusives" element={
//                    <>
//                        <SliderExclusives />
//                        <div style={{ display: 'flex', marginTop: '20px' }}>
//                            <div style={{ flex: 1, paddingLeft: '20px' }}>
//                                <Exclusives searchTerm={searchTerm} filters={filters} />
//                            </div>
//                        </div>
//                    </>
//                } />
//                <Route path="/sell-with-us" element={<SellWithUs />} />
//                {/* <Route path="/charity" element={<Charity />} /> */}
//                <Route path="/login" element={<Login />} />
//                <Route path="/womenproduct/:id" element={<ProductDetailWomen onAddToCart={handleAddToCart} />} />
//                <Route path="/menproduct/:id" element={<ProductDetailMen onAddToCart={handleAddToCart} />} />
//                <Route path="/bridesmaidproduct/:id" element={<ProductDetailBridesmaid onAddToCart={handleAddToCart} />} />
//                <Route path="/groomsmenproduct/:id" element={<ProductDetailGroomsmen onAddToCart={handleAddToCart} />} />
//                <Route path="/exclusivesproduct/:id" element={<ProductDetailExclusives onAddToCart={handleAddToCart} />} />
//                <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />} />
//                <Route path="/payment" element={<Payment/>}/>
//
//                <Route path="/T&C" element={<TermsAndConditions/>}/>
//                <Route path="/aboutus" element={<AboutUs/>}/>
//                <Route path="/contactus" element={<ContactUs/>}/>
//                <Route path="/faqs" element={<Faq/>}/>
//
//            </Routes>
//            <Footer />
//        </>
//    );
//};
//
//
//const App = () => {
//    return (
//        <Router>
//            <AppContent />
//        </Router>
//    );
//};
//
//export default App;