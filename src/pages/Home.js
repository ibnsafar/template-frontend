import {connect} from "react-redux";
import {useEffect, useState} from "react";

const Home = () => {

    const [init, setInit] = useState(null);
    useEffect(() => {

    }, [])

    return (
        <div>
            <h1>Home Page connection with Redux</h1>
        </div>
    )
}
export default connect((state) => {
    return {
        todoList: state
    }
}, {})(Home);