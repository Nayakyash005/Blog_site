import React from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Form from "./components/Form";

function Home(){
    return (
        <div>
            <Heading />
            <Form />
            <Footer />
        </div>
    );
}

export default Home;