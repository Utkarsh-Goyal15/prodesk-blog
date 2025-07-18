const asyncHandler = (requestHandler)=>async (req,res,next)=>{
    try {
       return await requestHandler(req,res,next);
    } catch (error) {
        res.status(error.code).json({
            success: false,
            message : error.message
        })
}}

export {asyncHandler}