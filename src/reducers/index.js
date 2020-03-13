import {combineReducers} from 'redux'
const JobReducer= (listJobs=[],action)=>{
 if(action.type=="ADD_JOB"){
     return [...listJobs,action.payload]
 }
 if(action.type=="DELETE_JOB"){
    let Id = action.payload
    return listJobs==[]?[]:listJobs.filter((val)=>val.jobId!=Id)
}
return listJobs
}


export default combineReducers({
    listJobs:JobReducer
})