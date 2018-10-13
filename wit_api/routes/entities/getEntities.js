const Wit = require('node-wit').Wit
const witClient = new Wit({
    accessToken : 'H7PYAWSIQ2M6FMGPVHKJYO7H5FYWADAH'
    }
)

module.exports = (request, response) => {
    var message = request.body.userMessage //Lấy giá trị khi người gửi lên
    witClient.message(message, {}).then((returnData) => {//Truyền vô message đó
        var returnMessage = {
            isSuccess : true,
            message: 'Gọi Wit.ai thành công!',
            data: returnData
        }
        response.json(returnMessage) //Trả về kiểu json trong returnMessage có biến returnData của wit.ai
    }).catch((err) => {
        var returnMessage = {
            isSuccess: false,
            message: err
        }
        response.json(returnMessage)
    })
}