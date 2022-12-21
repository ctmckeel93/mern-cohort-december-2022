import { useParams } from "react-router-dom";

const Hello = (props) => {
    const { name, age } = useParams();
    return (
        <>
            <h1>Hello {name}</h1>
            <h2>
                {name} is {age} years old
            </h2>
        </>
    );
};

export default Hello;
