#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let ToDoList = [];
let condition = true;
console.log(chalk.magentaBright.bold('\n \t WELCOME To CodeWithBhagwati - To Do List \n'));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.yellowBright.bold("select an option you want to do"),
                choices: ["Add Task", "Delete Task", "update Task", "View To-do list", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deletedTask();
        }
        else if (option.choice === "update Task") {
            await updateTask();
        }
        else if (option.choice === "View To-do list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
// create a function to add new task in To-Do list.
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellowBright.bold("Enter your new task :"),
        }
    ]);
    ToDoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in To-Do list`);
};
//creates a function to view all To-DO list .
let viewTask = () => {
    console.log(chalk.green("\n Your To-Do list \n"));
    ToDoList.forEach((task, index) => {
        console.log(`${index + 1}:${task}`);
    });
};
//creates a delete a task from list
let deletedTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.yellowBright.bold("Enter the 'index no.' of the task you want to delete:"),
        }
    ]);
    let deletedTask = ToDoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.green(`\n ${deletedTask}  this task has been delete from your To-Do list`));
};
//creates a function to update task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.yellowBright.bold("Enter the 'index no' of the task you want to update :"),
        },
        {
            name: "New_task",
            type: "input",
            message: chalk.yellowBright.bold("Now Enter new task name :"),
        }
    ]);
    ToDoList[update_task_index.index - 1] = update_task_index.New_task;
    console.log(chalk.green `\n task at index no.${update_task_index.index - 1} updated successfully[For updated list check option :"view To-Do list"]`);
};
main();
