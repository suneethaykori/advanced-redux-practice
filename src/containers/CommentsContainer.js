import { connect } from 'react-redux';
import Comments from "../components/Comments"

function mapStateToProps(state){
    return{
      comments:state.newComments
    }
}
 
   let connector = connect(mapStateToProps)
   const commentsContainer= connector(Comments);
   export default commentsContainer
   //container is a just a name that is connected to redux
