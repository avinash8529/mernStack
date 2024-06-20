
const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        // console.log(error);
        const status = 422;
        const extraDetails = err.errors[0].message;
        const message = "Fill the input properly";
        const error = {
            status,
            message,
            extraDetails
        }
        console.log(error);
        next(error);
    }
}

module.exports = validate;