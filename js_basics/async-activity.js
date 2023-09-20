// Creat a simple to-do list
// Objective is to practice OOP classes and callback, promises and asynic await

/*

Step 1 : Creat a class Taski and Task Manager

Step 2: Task Manager will have a properies of:
    id : number
    title: string
    description: string
    creatAt() : date, ex:new DAte()

Step 3: Task manager will responsaivle for adding, updateing and deleting a list.
    Also listing all the lists

    a. store all the list in an array
    b. Create a function to add a list to my array of lists
    c. Create a function to list(console) all my lists
    d. Create a function to update any list from my array (Use an id)
    e. Create a function to delete a ist from my array of lists.

*/

class Todo {
    constructor (id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createAt = new Date()
    }
}

class TodoManager {
    constructor() {
        this.AllTodos = []
    }
     createATodo(newTodo) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                this.AllTodos.push(newTodo);
                resolve('Succesfully added new todo');
            }, 2000);
        })

        
     }





}

const todoManager = new TodoManager();
todoManager.createATodo (new Todo(1, 'Watch TV', 'On weekend and this show'))
.then((message) => {
    console.log(message);
    console.log(todoManager);
})
.catch(err => console.log(err))


