import "./../css/House.css";
import HousePic from "./../images/house.jpg";

const House = (props) => {
    return (
        <section className = "house">
            <h1>{props.name}</h1>
            <img src={HousePic} alt="House" />
        </section>
    );
};

export default House;