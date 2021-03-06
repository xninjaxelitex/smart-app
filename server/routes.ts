import * as express from 'express';
import LoginCtrl from './login/login.controller';
import BahnhofCtrl from './bahnhof/bahnhof.controller';
import UserCtrl from './user/user.controller';

export default function setRoutes(app) {

  const router = express.Router();
  const loginCtrl = new LoginCtrl();
  const bahnhofCtrl = new BahnhofCtrl();
  const userCtrl = new UserCtrl();

  // Login
  router.route('/login').post(loginCtrl.login);

  // Bahnhofe
  router.route('/bahnhof/:id').get(bahnhofCtrl.findOne);

  // get User by id
  router.route('/user/:id').get(userCtrl.findUser);

  // new User
  router.route('/user').post(userCtrl.createUser);

  // update User
  router.route('/user').put(userCtrl.updateUser);

  // Get all users
  router.route('/users').get(userCtrl.findAllUsers);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
