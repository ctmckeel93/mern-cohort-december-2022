const List = (props) => {
  const { list, myName } = props;
  return (
    <>
      <h2 style={{ backgroundColor: "red" }}>{myName}</h2>
      <ul>
        <li>Blue Eyes White Dragon</li>
        <li>Dark Magician Girl</li>
        <li>Kuriboh</li>
        <li>Red Eyes Black Dragon</li>
        <li>Dark Magician</li>
        <li>Stardust Dragon</li>
        <li>Left Leg of the Forbidden One</li>
        <li>Slifer the Sky Dragon</li>
      </ul>

      <ul>{list && list.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </>
  );
};

export default List;
