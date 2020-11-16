import React from 'react';
import { connect } from 'react-redux';

const DatatoRedux = () => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
		ctr: state.counter
	};
};

const mapDispatchToProps = (dispatch) => {
	

        let url = "https://jsonplaceholder.typicode.com/users";
        let result = fetch(url).then((data) =>{
            data.json().then((datajson) => {
                console.log("In Action", datajson)
                return dispatch({
                    type: "API",
                    payload: datajson
                    
                })
            })
        })
    return result;
};
export default connect(mapStateToProps,mapDispatchToProps)(DatatoRedux);
