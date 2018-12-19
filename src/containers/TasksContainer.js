import { connect } from 'react-redux';
import Tasks from "../components/Tasks"


function mapStateToProps(state){
    return{
        newTasks:state.newTasks
    }
}
 
   let connector = connect(mapStateToProps)
   const tasksContainer= connector(Tasks);
   export default tasksContainer
