import { suma, multiplica } from "./controller.js";
import chalk from 'chalk';


const m = multiplica(suma(1,2), suma(4,5));
console.log(chalk.green(m));
