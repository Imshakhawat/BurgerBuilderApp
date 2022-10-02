import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Home from "../components/Home";
import {  useLocation } from "react-router-dom";


function BurgerPage(props) {
  const data = useLocation().state.data
  

  return (
    <DndProvider backend={HTML5Backend}>
      <Home data={data} />
    </DndProvider>
  );
}

export default BurgerPage;
