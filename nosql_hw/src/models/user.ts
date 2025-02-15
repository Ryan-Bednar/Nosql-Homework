import { Schema, Document, model, Types } from 'mongoose';
import type { ObjectId } from 'mongoose';

interface IFriend extends Document {
    friendId:Schema.Types.ObjectId
    username:string,
}

interface IUser extends Document {
    username: string;
    email: string;
    thoughts?: ObjectId[];
    friends?: IFriend[];
}

const friendSchema = new Schema<IFriend>({
    friendId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    username: {
        type: String
    }
})


const userSchema = new Schema<IUser>(
    {
        username: {
            type: String, 
            trim: true, 
            required: true, 
            unique: true},
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/,'Please fill in a valid email address']
        },
        thoughts: {
            type: [Schema.Types.ObjectId],
            ref: 'thought',
        },
        friends: {
            type: [friendSchema],
            ref: 'friends'
        }
    },
    {
        toJSON:{
            virtuals: true,
            getters: true
        },
    },
);

userSchema.virtual('friendCount').get(function () {
    return this.friends?.length;
});

const User = model('user', userSchema)

export default User