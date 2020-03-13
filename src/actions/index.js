export const addJob = (job)=>{
    return {
        type:"ADD_JOB",
        payload:job
    }
    
}

export const deleteJob = (jobId)=>{
    return{
        type:"DELETE_JOB",
        payload:jobId
    }

}

