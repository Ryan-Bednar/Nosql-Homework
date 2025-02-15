import { Router } from "express";
const router = Router();
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} from '../../controllers/userController.js';



router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).delete(deleteUser).put(updateUser);

router.route('/:userId/friends/:friendId').delete(deleteFriend).post(addFriend);

export { router as userRouter};