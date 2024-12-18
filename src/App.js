import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import CardList from "./components/CardList";
import Loader from "./components/Loader";

const PAGE_NUMBER = 1;

const App = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(async () => {
            const response = await axios.get(
                `https://prod-be.1acre.in/lands/?division=24&page_size=10&page=${page}&ordering=-updated_at`
            );
            console.log(response.data.results, '....data', data)
            setData((prev) => {
                return [...prev, ...response.data.results];
            });
            setLoading(false);
        }, 1000);
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    return (
        <div className='app'>
            <h1>Lands</h1>
            <CardList data={data} />
            {loading && <Loader />}
        </div>
    );
};

export default App;
