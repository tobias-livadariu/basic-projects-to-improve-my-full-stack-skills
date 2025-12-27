import Header from "./components/Header"
import TaskAdder from "./components/TaskAdder"
import TaskDisplayer from "./components/TaskDisplayer"
import TaskRemover from "./components/TaskRemover"

export default function App() {
  return (
    <div className="main-content">
      <Header />
      <TaskAdder />
      <TaskDisplayer />
      <TaskRemover />
    </div>
  )
}