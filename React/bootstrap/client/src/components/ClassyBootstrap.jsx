const ClassyBootstrap = (props) => {
    return (
        <div className="container">
            <form className="col-md-4 bg-dark text-light p-3">
                <div className="form-row">
                    <div className="form-group col-sm-3">
                        <label htmlFor="">First Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-sm-3">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <button className="btn btn-danger">Submit</button>
            </form>
        </div>
    );
};

export default ClassyBootstrap;
