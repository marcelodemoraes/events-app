const Joi = require("@hapi/joi");

const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(4)
      .max(255)
      .required(),
    email: Joi.string()
      .max(255)
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required()
  });

  //   return Joi.assert(data, schema);
  return schema.validate(data);
};
module.exports.registerValidation = registerValidation;

const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .max(255)
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required()
  });

  return schema.validate(data);
};
module.exports.loginValidation = loginValidation;

const eventValidation = data => {
  const schema = Joi.object({
    text: Joi.string()
      .min(1)
      .required(),
    start: Joi.date().required(),
    end: Joi.date().required()
  });

  return schema.validate(data);
};
module.exports.eventValidation = eventValidation;
