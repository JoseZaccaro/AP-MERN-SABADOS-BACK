const validator = (schema) => {

    return (req, res, next) => {

        const validations = schema.validate(req.body, { abortEarly: false })
        const { error } = validations
        if (error) {
            console.log(error);
            return res.status(400).json({
                status: 400,
                message: 'Validation error',
                // error: error.details.map(error => error.message)
                error
            })
        }
        next()
    }
}

export default validator