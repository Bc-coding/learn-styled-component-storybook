import StyledComponents from "./components/styledComponents";
import Task from "./components/task/Task";

export default function App() {
  const task = {
    id: "1",
    title: "first task",
    state: "default",
  };
  return (
    <div className="App">
      <StyledComponents />
      <Task task={task} />
    </div>
  );
}
