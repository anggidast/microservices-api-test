const router = require('express').Router();
const userRouter = require('./userRoute');
const productRouter = require('./productRoute');
const orderRouter = require('./orderRoute');
const paymentRouter = require('./paymentRoute');

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/payments', paymentRouter);

module.exports = router;
