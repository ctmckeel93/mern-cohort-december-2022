const DisplayList = (props) => {
    const { list } = props;

    return list
        .filter(
            (deer) =>
                deer.noseColor.toLowerCase() === "purple" ||
                deer.noseColor === "pink"
        )
        .map((item, i) => (
            <p>
                {item.name} the {item.noseColor} nosed reindeer. Had a very
                {item.fur} fur coat
            </p>
        ));
};

export default DisplayList;
