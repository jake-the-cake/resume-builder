"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const ResumeRouter_1 = require("./routes/ResumeRouter");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.DATABASE_ACCESS).then(() => console.log('data is flowing')).catch(err => console.error(err.message));
app.use('/resume', ResumeRouter_1.ResumeRouter);
app.listen(process.env.PORT || 5500, () => {
    console.log('connected at 5.5k');
});
