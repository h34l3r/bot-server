//file xác thực đầu tiên
module.exports=(request,response)=>{
    const hubChallenge=request.query['hub.challenge']
    const hubMode=request.query['hub.mode']
    const verifyTokenMatches=(request.query['hub.verify_token']=='token_key')

    if(hubMode && verifyTokenMatches){
        response.status(200).send(hubChallenge)
    }else{
        response.status(403).end()
    } 
}