const Dropdown = (props) => {
    const onChangeHandler = (e) => {
        alert(`My favorite team is the ${e.target.value}`);
    };
    return (
        <select onChange={onChangeHandler} name="" id="">
            <option>Patriots</option>
            <option>Cowboys</option>
            <option>Bengals</option>
            <option>Rams</option>
            <option>Chargers</option>
            <option>Buccaneers</option>
            <option>Bears</option>
            <option>Falcons</option>
        </select>
    );
};

export default Dropdown;
