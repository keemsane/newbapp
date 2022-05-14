import React from "react";
import axios from "axios";


class Home extends React.Component {
    state = {isLoading: true};

    render() {
        const {isLoading} = this.state;

        return (
            <section className="container">
{isLoading ? (
    <div className="loader">
        <span className="loader-text">Loading.....</span>
    </div>
) : (
    <div className="musics">
        <h1> NEW BEE APP </h1>
        <hr />
    </div>
)}

            </section>
        );
    }
}

export default Home;