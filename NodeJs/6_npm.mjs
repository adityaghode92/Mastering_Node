import chalk from "chalk";
import validator from "validator";

console.log(chalk.green.inverse("success"));

const result = validator.isEmail("aditya@a.or");

console.log(result);