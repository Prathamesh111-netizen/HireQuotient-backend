import Comment from '../models/commentModel.js';
import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc Get all the comments of a post
// @route GET /api/comments/:postid
// @access PRIVATE
const getComments = asyncHandler(async (req, res) => {
    try {
        const postId = req.params.postid;
        const isPostPublic = await Post.findById(postId);
        if (!isPostPublic.isPublic) {
            res.status(401);
            res.json({
                message: 'Not authorized to view comments on this post',
            });
            return;
        }

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
        console.log({
            content,
            user: userId,
            post,
        });
        const isPostPublic = await Post.findById(post);
        if (!isPostPublic.isPublic && isPostPublic.user.toString() !== userId) {
            res.status(401);
            throw new Error('Not authorized to comment on this post');
        }
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