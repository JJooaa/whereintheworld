import axios from "axios";

export const fetchCountries = (setCountries, setFilterData) => {
    axios
        .get("https://restcountries.com/v2/all")
        .then((response) => {
            setFilterData(response.data);
            setCountries(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
