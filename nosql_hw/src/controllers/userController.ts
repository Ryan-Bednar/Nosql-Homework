import type { Request, Response } from "express";
import { User} from "../models/index.js"

export const getAllUsers = async(_req: Request, res:Response) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch(error:any){
        res.status(500).json({
            message:error.message
        });
    }
};

export const getUserById = async(req: Request, res:Response) => {
    const { userId } = req.params;
    try{
        const user = await User.findById(userId);
        if(user){
            res.json(user);
        }else {
            res.status(404).json({
                message: "User not found"
            });
        }
    } catch (error: any){
        res.status(500).json({
            message:error.message
        });
    }
};

export const createUser = async(req: Request, res:Response) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateUser = async(req: Request, res:Response) => {
    try{
        const user = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        );

        if(!user) {
            res.status(404).json({message: "No user with this ID found"})
        }

        res.json(user)
    } catch (error:any) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const deleteUser = async(req: Request, res:Response) => {
    try{
        const user = await User.findOneAndDelete({ _id:req.params.userId})

        if(!user) {
            res.status(404).json({
                message: "No user with that ID"
            });
        }else{
            await User.deleteMany({_id: {$in:user.thoughts}});
            res.json({message: 'User and thoughts deleted'})
        }
    } catch (error: any){
        res.status(500).json({
            message: error.message
        });
    }
};

export const addFriend = async(req: Request, res:Response): Promise<void> => {
    console.log('You are adding a friend');
    console.log(req.body);
    try{
        const user = await User.findOneAndUpdate(
            {_id: req.params.UserId},
            { $addToSet: {friends: { friendId : req.params.UserId } } },
            {runValidators:true, new: true}
        );
        
        if (!user) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        res.json(user);
        return;
    } catch (error) {
        res.status(500).json(error);
        return;
    }
};

export const deleteFriend = async(req: Request, res:Response):Promise<void> => {
    try{
        const user = await User.findOneAndUpdate(
            {_id: req.params.userId},
            { $pull: {friends: {friendId: req.params.userId}}},
            {runValidators: true, new:true}
        );

        if(!user){
            res.status(404).json({message: 'No friend found by that ID'});
            return;
        }

         res.json(user);
         return;
    } catch(error) {
        res.json(500).json(error);
        return;
    }
};