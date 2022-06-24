import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Buy bananas",
      favorite: false,
    },
    {
      text: "Read a book",
      favorite: false,
    },
    {
      text: "Learn JavaScript",
      favorite: true,
    },
  ]);

  const [newText, setNewText] = useState("");

  const deleteTodo = (indexOfRemovingItem) => {
    const filtered = todos.filter((todo, index) => {
      if (index === indexOfRemovingItem) {
        return false;
      }
      return true;
    });
    setTodos(filtered);
  };

  const makeFavorite = (indexFav) => {
    const newFavTodos = todos.map((item, index) => {
      if (index === indexFav) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newFavTodos);
  };

  const addTodo = () => {
    if (newText === "") {
      alert("type something");
    } else if (todos.some((todo) => todo.text === newText)) {
      alert("the task already exists");
    } else {
      setTodos([
        {
          text: newText,
          favorite: false,
        },
        ...todos,
      ]);
    }
    setNewText("");
  };

  return (
    <div className="app">
      <Header />
      <Form newText={newText} setNewText={setNewText} addTodo={addTodo} />
      <Todos
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
