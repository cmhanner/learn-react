import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/House.css";
import House from "../components/House";
import AddHouse from "../components/AddHouse";

const HouseList = (props) => {
    const [houses, setHouses] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

   const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("I'm in the close method")
        setShowAddDialog(false);
    }

    // Give me a  house and add it to the array of houses
    const updateHouses = (house) => {
        //  give me a list, and add the new item to the array of items
        setHouses((houses)=>[...houses, house]);
    };

    //after page has loaded
    useEffect(()=>{
        const loadHouses = async() => { //http://localhost:3001/api/houses https://server-learn-react.onrender.com/api/houses
            const response = await axios.get("http://localhost:3001/api/houses");
            setHouses(response.data.splice(0,props.num));
        };

        loadHouses();
    },[]);

    return (
        <>
            <div className="add-house">
                <button id = "add-house" onClick = {openAddDialog}>+</button>

                {showAddDialog?(<AddHouse
                                    closeAddDialog = {closeAddDialog}
                                    updateHouses = {updateHouses}    
                                    
                                    />): ("")}


            </div>
            <div id="house-list" className="columns">
                    {houses.map((house) => (
                        <House key={house._id}
                            id={house._id}
                            name={house.name}
                            size={house.size}
                            bedrooms={house.bedrooms}
                            bathrooms={house.bathrooms}
                            main_image={house.main_image}
                            features={house.features} />
                    ))}
                </div>
        </>
    )
};

export default HouseList;