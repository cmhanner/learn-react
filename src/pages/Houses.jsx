import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Houses.css";
import House from "../components/House";

const Houses = () => {
    const [houses, setHouses] = useState([]); //  set it empty at first

    //  after the page loads lets call this function
    useEffect(()=>{
        const loadHouses = async () => {
            const response = await axios.get("https://portiaportia.github.io/json/house-plans.json");
            setHouses(response.data); //  set the array from the data that come from the json file
        };

        loadHouses();
    },[]); 

    return (
        <div id = "Houses" className = "main-content">
            <h1>Houses</h1>
            <div id = "house-list" className = "columns">
                {/* Our way of iterating over a array */}
                {houses.map((house) => ( //  we loop through each one lableling each as house along the way
                    <House key = {house._id}
                            id = {house._id}
                            name = {house.name}
                            size = {house.size}
                            bedrooms = {house.bedrooms}
                            bathrooms = {house.bathrooms}
                            main_image = {house.main_image} />
                ))} 

                
                

            </div>
            
            
        </div>

    );
};

export default Houses;