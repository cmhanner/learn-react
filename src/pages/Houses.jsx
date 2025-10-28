import "./../css/Houses.css";
import House from "../components/House";

const Houses = () => {
    return (
        <div id = "Houses" className = "main-content">
            <h1>Houses</h1>
            <div class = "columns">
                <House name = "Farm House" num_bedrooms = "5"/>
                <House name = "Mansion" num_bedrooms = "10"/>
                <House name = "Family Home" num_bedrooms = "3"/>

            </div>
            
            
        </div>

    );
};

export default Houses;