import { useState } from "react";
import Display from "./Display";

const Form = ({ addToList, list }) => {
    const initialFormDate = {
        id: 1,
        name: "",
        noseColor: "",
        fur: "",
    };

    const [reindeer, setReindeer] = useState(initialFormDate);
    const [errors, setErrors] = useState([]);

    // const formDataHandler = (e) => {

    // }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const errorList = [];

        if (reindeer.name.length < 3) {
            errorList.push("Name must be at least 3 characters");
        }
        if (reindeer.noseColor.length < 3) {
            errorList.push("Nose color must be at least 3 characters");
        }
        if (reindeer.fur.length < 3) {
            errorList.push("Fur must be at least 3 characters");
        }

        if (errorList.length > 0) {
            setErrors(errorList);
        } else {
            addToList(reindeer);
            setReindeer(initialFormDate);
            setErrors([]);
        }
    };

    const onChangeHandler = (e) => {
        let increment = list[0] ? list[list.length - 1].id + 1 : 1;
        setReindeer({
            ...reindeer,
            id: increment,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <div className="container-md">
                <form
                    className="d-flex p-4 mx-auto flex-column col-5 bg-dark text-light text-start"
                    onSubmit={onSubmitHandler}
                >
                    {errors.map((err, i) => (
                        <p className="text-danger" key={i}>
                            {err}
                        </p>
                    ))}
                    <div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={reindeer.name}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                for="exampleInputPassword1"
                                class="form-label"
                            >
                                Nose Color
                            </label>
                            <input
                                name="noseColor"
                                type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                                value={reindeer.noseColor}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleCheck1">Fur Pattern</label>
                            <input
                                name="fur"
                                type="text"
                                class="form-control"
                                id="exampleCheck1"
                                value={reindeer.fur}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
                <Display
                    name={reindeer.name}
                    color={reindeer.noseColor}
                    fur={reindeer.fur}
                />
            </div>
        </>
    );
};

export default Form;
