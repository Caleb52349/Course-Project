const {check, validationResult} = require('express-validator');

exports.signupValidator=[
    check('username').not().isEmpty().trim().withMessage('All Fields required'),
    check('email').isEmail().normalizeEmail().withMessage('Invalid Email'),
    check('password').isLength({min:4}).withMessage('Password must be atleast 4 characters long')
];

exports.validatorResult=(req,res,next)=>{
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();
    if(hasErrors){
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMessage: firstError,
        })
    }

    next()
}