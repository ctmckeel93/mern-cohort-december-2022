const Display = (props) => {
    const { name, color, fur } = props;
    return (
        <div>
            <h1>{name}</h1>
            <h3>Nose Color: {color}</h3>
            <h3>Fur: {fur}</h3>
        </div>
    );
};

export default Display;
