import { Router } from 'express';
import UserController from '../controllers/users';
import UserBulkActionController from '../controllers/users/bulkAction';

const userRouter: Router = Router();
userRouter.get('/profile/view/:id', new UserController().profileView);
userRouter.get('/list/view', new UserController().userList);
userRouter.post('/profile/create', new UserController().profileAddNew);
userRouter.post('/profile/edit/:id', new UserController().profileEdit);
userRouter.post('/profile/delete/:id', new UserController().userDelete);
userRouter.post('/profile/restore/:id', new UserController().userRestore);
userRouter.post('/profile/status/active/:id', new UserController().profileActivate);
userRouter.post('/profile/status/inactive/:id', new UserController().profileDeActivate);
userRouter.post('/bulk/logout', new UserController().bulkUserLogOut);
userRouter.post('/email/sendVerificationCode', new UserController().sendEmailVerificationCode);
userRouter.post('/email/verification', new UserController().emailVerification);
userRouter.post('/bulk/download', new UserBulkActionController().bulkDownload);
export default userRouter;
