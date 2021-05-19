
//для синхронных функций
const syncHandler = (fn) => (req, res, next) => {
    try {
        fn(req, res, next);
    } catch (error) {
        next(error);
    }
};

//для асинхронных функций
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
};

const errorHandler = (e, req, res, next) => {
    let code = 500
    if (typeof e?.code === 'number') {
        code = e.code;
    }
    res.status(code).json({
        message: e.message
    });
}
module.exports = {
    syncHandler,
    asyncHandler,
    errorHandler,
};