const validator = (schema) => {

    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })
        const { error } = validation
        if (error) {
            return res.status(400).json({
                message: "Validation error",
                error: error.details
            })
        }
        next()
    }

}

export default validator