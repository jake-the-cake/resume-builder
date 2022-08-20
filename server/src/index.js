"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const ResumeRouter_1 = require("./routes/ResumeRouter");
const dotenv_1 = __importDefault(require("dotenv"));
const AuthRouter_1 = require("./routes/AuthRouter");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.DATABASE_ACCESS).then(() => console.log('data is flowing')).catch(err => console.error(err.message));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use('/resume', ResumeRouter_1.ResumeRouter);
app.use('/auth', AuthRouter_1.AuthRouter);
app.listen(process.env.PORT || 5500, () => {
    console.log('connected at 5.5k');
});
