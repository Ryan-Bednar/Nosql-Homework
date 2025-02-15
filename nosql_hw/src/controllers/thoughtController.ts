import type { Request, Response } from "express";
import { Thought } from "../models/index.js";

export const getAllThoughts = async(_req:Request, res:Response) => {
    try{
        const thoughts = await Thought.find();
        res.json(thoughts);
    }catch(error:any){
        res.status(500).json({
            message: error.message
        });
    }
};

export const getThoughtById = async(req:Request, res:Response) => {
    const {thoughtId} = req.params;
    try{
        const thought = await Thought.findById(thoughtId);
        if(thought){
            res.json(thought);
        } else {
            res.status(404).json({
                message: 'Thought not found.'
            })
        }
    } catch (error: any){
        res.status(500).json({
            message: error.message
        });
    }
};

export const createThought = async(req: Request, res:Response) => {
    
    try{
        const thought = await Thought.create(req.body);
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateThought = async(req: Request, res:Response) => {
    try{
        const thought = await Thought.findOneAndUpdate(
            { _id:req.params.thoughtId},
            { $set: req.body },
            { runValidators: true, new: true}
        );

        if (!thought) {
            res.status(404).json({message: 'No thought with that id!'});
        }

        res.json(thought)
    } catch (error:any) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const deleteThought = async (req:Request, res:Response) => {
    try{
        const thought = await Thought.findOneAndDelete({_id:req.params.thoughtId});

        if(!thought){
            res.status(404).json({
                message: "No thought found."
            });
        }
    } catch (error:any){
        res.status(500).json({
            message: error.message
        });
    }
};

export const addReaction = async (req: Request, res:Response) => {
    console.log('Adding reaction:', req.body)
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        );

        if(!thought){
            return res
            .status(404)
            .json({message :'No thought found with that id'})
        }

        return res.json(thought)
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const deleteReaction = async (req: Request, res:Response) => {
    console.log('Adding reaction:', req.body)
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $pull: {reactions: { reactionId : req.params.reactionId} } },
            {runValidators: true, new: true}
        );

        if(!thought){
            return res
            .status(404)
            .json({message :'No thought found with that id'})
        }

        return res.json(thought)
    } catch (error) {
        return res.status(500).json(error);
    }
};