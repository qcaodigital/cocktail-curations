const mailgun = require('mailgun-js');
export const config = {
  api: {
    externalResolver: true,
  },
}

export default (req, res) => {
    console.log(process.env.MAILGUN_API_KEY)
    const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN })
    const data = {
        from: 'Cocktail Curations <contactform@cocktailcurations.com>',
        to: 'qcao.digital@gmail.com',
        'h:Reply-To': req.body.personalInfo.email,
        'h:X-Mailgun-Variables': JSON.stringify(req.body),
        template: 'contact_form',
        subject: `Contact form message received from ${req.body.personalInfo.firstName} ${req.body.personalInfo.lastName}.`,
    }
    if(req.method === 'POST'){
        mg.messages().send(data, function(body, error){
            console.log(`Contact form received from ${req.body.personalInfo.firstName} ${req.body.personalInfo.lastName}.`)
            res.send(req.body)
        })
    } else {
        throw 'This api request should be a post request'
    }
}