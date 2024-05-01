const Joi = require("joi");

const noteSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  createdAt: Joi.date().default(Date.now),
  lastUpdateAt: Joi.date().default(Date.now),
});

const noteUpdateSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
});

async function noteValidationMiddleWare(req, res, next) {
  const notePayload = req.body;

  try {
    await noteSchema.validateAsync(notePayload);
    next();
  } catch (error) {
    next({
      message: error.details[0].message,
      status: 400,
    });
  }
}

async function updateNoteValidationMiddleware(req, res, next) {
  const notePayload = req.body;

  try {
    await noteUpdateSchema.validateAsync(notePayload);
    next();
  } catch (error) {
    next({
      message: error.details[0].message,
      status: 400,
    });
  }
}

module.exports = {
  noteValidationMiddleWare,
  updateNoteValidationMiddleware,
};
