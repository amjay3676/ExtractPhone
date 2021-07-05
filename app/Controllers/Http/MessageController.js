'use strict'

const { validate } = use('Validator')

class MessageController {
    async store( { request, response }){
        const rules = {
            msg: "regex:([+]923[0-9]{2}-(?!1234567)(?!1111111)(?!7654321)[0-9]{7})"
        }
        const message = {
            'msg.regex': 'Sending number is not allowed, Please keep your msg clean'
        }
        const validation = await validate(request.all(), rules, message)
        if (validation.fails()) {
            return validation.messages()
        }
        return response.json({msg:"Msg format is correct found no Phone numbers"})
    }
}
module.exports = MessageController
