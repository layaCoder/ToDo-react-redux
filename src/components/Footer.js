import React,{Component} from 'react';
import FilterLink from '../containers/FilterLink';


export default class extends Component{
	render(){
		
		return(
		<p>
		 Show:{" "}
		 <FilterLink filter="SHOW_ALL">
		  ALL
		 </FilterLink>
		 {" | "}
		 <FilterLink filter="SHOW_ACTIVE">
		 Active
		 </FilterLink>
		 {" | "}
		 <FilterLink filter="SHOW_COMPLETED">
		 Completed
		 </FilterLink>
		</p>
		)
	}
}