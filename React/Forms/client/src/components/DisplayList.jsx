import { useState } from "react";

const DisplayList = (props) => {
    const { list, removeFromList, updateList } = props;
    const [name, setName] = useState("");
    return (
        <div className="container-sm bg-primary p-3 text-light">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Nose Color</th>
                        <th scope="col">Fur pattern</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, i) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.noseColor}</td>
                            <td>{item.fur}</td>
                            <td>
                                <form onSubmit={(e) => updateList(e, name, i)}>
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </form>
                                <button
                                    onClick={() => removeFromList(item.id)}
                                    className="btn btn-danger btn-outline-light"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayList;
