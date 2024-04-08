import { Button, ButtonGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { TodoList } from "./TodoList"

const TodoViewer = () => {
  const [view, setView] = useState("all")
  
  return (
    <Stack>
      <ButtonGroup>
        <Button
          variant={view === "all" ? "outline" : "solid"}
          onClick={() => setView("all")}
        >
          all
        </Button>
        <Button
          variant={view === "open" ? "outline" : "solid"}
          onClick={() => setView("open")}
        >
          open
        </Button>
        <Button
          variant={view === "completed" ? "outline" : "solid"}
          onClick={() => setView("completed")}
        >
          completed
        </Button>
      </ButtonGroup>

      <TodoList state={view} />
    </Stack>
  )
}

export { TodoViewer }
