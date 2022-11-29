import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   tuit: String,
                                   likes: Number,
                                   liked: Boolean,
                                   dislikes: Number,
                                   disliked: Boolean,
                                   retuits: Number,
                                   replies: Number,
                                   topic: String,
                                   time: String,
                                   username: String,
                                   handle: String,
                                   image: String
                               }, {collection: 'tuits'});
export default schema;