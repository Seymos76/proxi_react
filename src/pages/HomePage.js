import React, {useState, useEffect} from "react"
import { Link, Redirect } from "react-router-dom";
import DuoDrawerLayout from "../layout/DuoDrawerLayout";
import Bowser from "bowser";
import axios from "axios";

function HomePage() {
    console.log('HomePage.jsx');

    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState(['Amsterdam']);
    const [citySearch, setCitySearch] = useState('');
    // const { engine } = Bowser.getParser(window.navigator.userAgent).getResult();
    // const browserEngine = engine.name;
    // const isFirefox = browserEngine !== "WebKit" && browserEngine !== "Blink" && browserEngine === "Gecko";

    const handleChange = ({ currentTarget }) => {
        setCitySearch(currentTarget.value);
    }

    const getMatchingCities = async () => {
        if (citySearchIsValid()) {
            return await axios.get(`http://localhost:8000/api/cities?search=${citySearch}`)
                .then(response => {
                    // console.log('response:',response);
                    return response.data;
                })
                .catch(error => {
                    // console.log('error:',error.message);
                })
                .finally(() => {
                    console.log('executes whatever');
                })
        } else {
        }
    }

    const citySearchIsValid = () => {
        if (citySearch !== "" && citySearch.length >= 3) {
            return true;
        } else {
            return false;
        }
    }

    const selectCity = ({ currentTarget }) => {
        setSelectedCity(currentTarget.dataset.id);
        var selectedElements = document.querySelectorAll(".city-select");
        selectedElements.forEach(element => {
            if (element.dataset.id === currentTarget.dataset.id) {
                element.classList.add('active');
            } else {
                return element.classList.contains('active') ? element.classList.remove('active') : false;
            }
        })
        localStorage.setItem('selectedCityName',currentTarget.dataset.name);
        localStorage.setItem('selectedCityId',currentTarget.dataset.id);
        localStorage.setItem('selectedCityZipCode',currentTarget.dataset.zip);
        return <Redirect to={`/commune/${currentTarget.dataset.slug}`}/>
    }

    const eraseSelectedCityFromLocalStorage = () => {
        if (localStorage.getItem('selectedCityName')) {
            localStorage.removeItem('selectedCityName')
        }
        if (localStorage.getItem('selectedCityId')) {
            localStorage.removeItem('selectedCityId')
        }
        if (localStorage.getItem('selectedCityZipCode')) {
            localStorage.removeItem('selectedCityZipCode')
        }
    }

    useEffect( () => {
        eraseSelectedCityFromLocalStorage();
        // console.log('used effect',cities);
        const fetchCities = async () => {
            const result = await getMatchingCities();
            // console.log('cities:',result);
            setCities(result);
        }
        fetchCities();
    }, [citySearch]);

    return (
        <DuoDrawerLayout isHome={true}>
            <div className="content mt-4 mb-0">
                {/*{alert.type !== '' && <Alert type={alert.type} message={alert.message} />}*/}
                <h1>Bienvenue sur la marketplace mobile du commerce de proximité</h1>
                <div className="search-box search-dark shadow-xl border-0 bg-theme bottom-0">
                    {/*<FontAwesomeIcon icon={faSearch}/>*/}
                    <input type="text" value={citySearch} onChange={handleChange} className="border-0 rounded-sm" placeholder="Recherchez votre ville" />
                </div>
                {
                    (!cities || !cities.length) && <div className="search-no-results disabled mt-4">
                        <h4>No Results</h4>
                        <p>
                            Your search brought up no results. Try using a different keyword. Or try typying all
                            to see all items in the demo. These can be linked to anything you want.
                        </p>
                        <div className="divider"></div>
                    </div>
                }
                {
                    cities && cities.length && <div className={`search-results`}>
                        <div className="list-group list-custom-large">
                            {(cities && cities.length) && cities.map(city => (
                                <Link to={`/commune/${city.slug}`} onClick={selectCity} data-id={city.id} data-slug={city.slug} data-name={city.name} data-zip={city.zipCode} key={city.id} className={"city-select"}>
                                    <i className="fab fa-apple color-gray-dark"></i>
                                    <span>{city.name}</span>
                                    <strong>{city.zipCode}</strong>
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            ))}
                        </div>
                    </div>
                }
            </div>
            {/*<button onClick={toggleCityForm} className="btn btn-primary">Chercher une ville</button>*/}
        </DuoDrawerLayout>
    )
}


export default HomePage