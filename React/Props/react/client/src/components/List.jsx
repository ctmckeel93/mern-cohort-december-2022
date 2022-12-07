const List = (props) => {
    const { list, myName } = props;
    return (
        <>
            <h2 style={{ backgroundColor: "red" }}>{myName}</h2>

            <ul>{list && list.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </>
    );
};

export default List;
