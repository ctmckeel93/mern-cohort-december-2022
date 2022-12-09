import { useState } from "react";

const JeffForm = (props) => {
    const initialFormDate = {
        name: "",
        city: "",
        nemesis: "",
    };

    const [fieldValues, setFieldValues] = useState(initialFormDate);

    const changeHandler = (e) => {
        setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        alert(
            `I am ${fieldValues.name}, and I vow to protect ${fieldValues.city} from ${fieldValues.nemesis}`
        );
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={fieldValues.name}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>City: </label>
                    <input
                        type="text"
                        name="city"
                        value={fieldValues.city}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Nemesis: </label>
                    <input
                        type="text"
                        name="nemesis"
                        value={fieldValues.nemesis}
                        onChange={changeHandler}
                    />
                </div>
                <input type="submit" value="Avenge" />
            </form>
        </div>
    );
};

export default JeffForm;
