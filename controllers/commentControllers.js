import Comment from '../models/commentModel.js';
import asyncHandler from 'express-async-handler';

// @desc Get all the comments of a post
// @route GET /api/comments/:postid
// @access PRIVATE
const getComments = asyncHandler(async (req, res) => {
    try {
        const postId = req.params.postid;
        const comments = await Comment.find({ post: postId }).sort({
            createdAt: -1,
        });
        res.json(comments);
    } catch (error) {
        res.status(400);
        throw new Error('Error fetching comments');
    }
});

// @desc Create a new comment
// @route POST /api/comments
// @access PRIVATE
const createComment = asyncHandler(async (req, res) => {
    try {
        const { content, post } = req.body;
        const userId = req.user.id;
        const comment = await Comment.create({
            content,
            user: userId,
            post,
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(400);
        throw new Error('Error creating comment');
    }
});

export { getComments, createComment };