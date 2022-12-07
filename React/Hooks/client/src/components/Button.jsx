const Button = (props) => {
    return (
        <button
            onClick={(event) => alert("You clicked me!")}
            className="btn btn-primary"
        >
            Click me!
        </button>
    );
};

export default Button;
