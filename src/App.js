import React, { useState, useEffect, Suspense, lazy } from "react";
import { fetchCountries } from "./Util/Api";
import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import GlobalStyle from "./Styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/themeStyles";

const Main = lazy(() => import("./Pages/Main"));
const Country = lazy(() => import("./Pages/Country/Country"));

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [input, setInput] = useState("");
    const [currentCountry, setCurrentCountry] = useState([]);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        fetchCountries(setCountries, setFilterData);
    }, []);

    useEffect(() => {
        setFilterData(
            countries.filter((item) =>
                item.name.toLowerCase().includes(input.toLowerCase())
            )
        );
    }, [input, setInput]);

    return (
        <>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                <TopBar toggleTheme={toggleTheme} theme={theme} />
                <Router>
                    <Suspense fallback={<LinearProgress />}>
                        <Switch>
                            <Route path="/" exact>
                                <Main
                                    setFilterData={setFilterData}
                                    countries={countries}
                                    setInput={setInput}
                                    filterData={filterData}
                                    setCurrentCountry={setCurrentCountry}
                                />
                            </Route>
                            <Route path="/:item" exact>
                                <Country
                                    countries={countries}
                                    currentCountry={currentCountry}
                                    setCurrentCountry={setCurrentCountry}
                                    setInput={setInput}
                                    History={History}
                                />
                            </Route>
                        </Switch>
                    </Suspense>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
