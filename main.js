// BMI calculator using inquirer
import inquirer from "inquirer";
const question = [
    { type: 'number',
        name: 'weight',
        message: 'weight(kg)',
    },
    { type: 'number',
        name: 'height',
        message: 'height(m)',
    },
];
const calculateBMI = (weight, height) => weight / (height * height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(question);
    console.log(`BMI:${calculateBMI(weight, height).toFixed(2)}`);
};
main();
