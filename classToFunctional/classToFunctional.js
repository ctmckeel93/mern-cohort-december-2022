// Class component
// import {Component} from 'react' --> we wont be inheriting from the Component class in React for functional

// class MyComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state={

//         }
//     }

//     componentDidMount() {

//     }

//     componentWillUnmount() {

//     }
//     render() {
//         const {} = this.props --> props are still created the same way
//         return <h1>Hello!</h1>
//     }
// }

// export default MyComponent;

// Functional component

const MyComponent = (props) => {
    const {} = props;
    return <h1>Hello</h1>;
};

export default MyComponent;
