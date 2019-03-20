const Joi = require('joi');
const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    description: {
        type: String,
        minlength: 20,
        maxlength: 2048,
        required: true
    },
    location: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    publishDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    publisherID: {
        type: String,
        required: true
    },
    premium: Boolean
});

const Offer = mongoose.model('Offer', offerSchema);

function validate(offer) {
    return Joi.validate(offer, {
        title: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(20).max(2048).required(),
        location: Joi.string().min(3).max(50).required(),
        tags: Joi.array().items(Joi.string()),
        publisherID: Joi.string().required()
    })
};

module.exports.offerSchema = offerSchema;
module.exports.Offer = Offer;
module.exports.validateOffer = validate;