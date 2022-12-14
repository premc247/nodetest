"use strict";
const {PostModel} = require('../models');
/**
 * Get all record
 * @param { req, res }
 * @returns JsonResponse
 */
const index = async (req, res, next) => {
  try {
    console.log(db.version);return false;
    // next() or
    var post = await PostModel.find();
    // return post;
    return res.status(200).json({
      success: true,
      message: "Data fetched successfully.",
      data:post
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "We are having some error while completing your request. Please try again after some time.",
      error: error
    });
  }
};
/**
 * Create a record
 * @param { req, res }
 * @returns JsonResponse
 */
const store = async (req, res, next) => {
  try {
    // next() or
    const {title, description, image, status} = req.body;
    var createPost = await PostModel.create({
      title,
      description,
      image,
      status,
    });
    return res.status(200).json({
      success: true,
      message: "Data saved successfully.",
      data: createPost
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "We are having some error while completing your request. Please try again after some time.",
      error: error
    });
  }
};

/**
 * Get only single record
 * @param { req, res }
 * @returns JsonResponse
 */
 const details = async(req, res, next) => {
   try{
    // next() or
    return res.status(200).json({
      success: true,
      message: "Details fatched successfully.",
      data: {}
    });
   }
   catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "We are having some error while completing your request. Please try again after some time.",
      error: error
    });
  }
 }

/**
 * update a record
 * @param { req, res }
 * @returns JsonResponse
 */
const update = async (req, res, next) => {
  try {
    // next() or
    return res.status(200).json({
      success: true,
      message: "Data updated successfully.",
      data: []
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "We are having some error while completing your request. Please try again after some time.",
      error: error
    });
  }
};
/**
 * Destroy a record
 * @param { req, res }
 * @returns JsonResponse
 */
const destroy = async (req, res, next) => {
  try {
    // next() or
    return res.status(200).json({
      success: true,
      message: "Data deleted successfully.",
      data: []
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "We are having some error while completing your request. Please try again after some time.",
      error: error
    });
  }
};



/**
 * Export as a single common js module
 */
module.exports = {
  index,
  store,
  details,
  update,
  destroy
};
