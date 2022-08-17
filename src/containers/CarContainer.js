import { connect } from "react-redux";

import Cars from '../components/Car';

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps) (Cars)