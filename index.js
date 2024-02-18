"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("@sinclair/typebox");
// Define a TypeScript type using TypeBox
var User = t.Object({
    name: t.String(),
    age: t.Number(),
    email: t.String(),
});
// Example user data
var user = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
};
// Validate user data against the defined type
var validationResult = User.validate(user);
if (validationResult.errors.length === 0) {
    console.log('User data is valid!');
}
else {
    console.error('Validation errors:', validationResult.errors);
}
