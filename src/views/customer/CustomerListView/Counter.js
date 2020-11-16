import Axios from 'axios';
import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import MUIDataTable from "mui-datatables";

const Counter = (props) => {
    const columns = [
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "username",
         label: "Username",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "email",
         label: "Email",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "website",
         label: "Website",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
          name: 'phone',
          label: "Phone",
          options: {
           filter: true,
           sort: false,
          }
         },
       ];
       const options = {
        filterType: 'checkbox',
      };

   
	return (
		
            <MUIDataTable title={"JSON PlaceHolder"} columns={columns} data={props.ctr} options={options}/>
		
	);
};

const mapStateToProps = (state) => {
	return {
		ctr: state.counter
	};
};



export default connect(mapStateToProps)(Counter);
