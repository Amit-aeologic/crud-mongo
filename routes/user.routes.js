const CouponController = require('../controllers/user.controller.js');
const UserController = require('../controllers/user.controller.js');

 
module.exports = app => {
    
    app.post('/post-user-details', UserController.postUserDetail)
    app.post('/get-user-detail',UserController.getAllUserDetail)
    app.post('/update-user-detail',UserController.updateUserDetail)
    app.post('/delete-user-detail',UserController.deleteUserDetail)
    
};