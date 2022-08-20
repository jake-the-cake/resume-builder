"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    birthDate: { type: String, require: true },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Users', UserSchema);
