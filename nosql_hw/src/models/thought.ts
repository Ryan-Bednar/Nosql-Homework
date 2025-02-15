import { Schema, model, Document, type ObjectId, Types } from 'mongoose';

interface IReaction extends Document{
    reactionId: ObjectId,
    reactionBody: string,
    username: string,
    createdAt: Date
}

interface IThought extends Document {
    thoughtText: string,
    createdAt: Date,
    username: string,
    reactions: ObjectId[]
}

const reactionSchema = new Schema<IReaction>(
    {
        reactionId: { 
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required:true
        },
        createdAt: {
            type:Date,
            default: Date.now,
            getter: (timestamp: Date) => timestamp.toLocaleString()
        }
    },
    {
        timestamps: true
    }
);

const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: true,
            text: {
                type: String,
                minLength: 1,
                maxLength: 280
            },   
        },
        createdAt: {
            type: Date,
            default: Date.now,
            getter: (timestamp: Date) => timestamp.toLocaleString()
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        timestamps: true,
        toJSON: {
            getters: true 
        }
    }
);

const Thought = model('thought', thoughtSchema);

export default Thought;