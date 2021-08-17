import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";


function renderWithRouter(component) {
  const history = createMemoryHistory();
  const objectRender = render(
    <Router history={history}>
      {component}
    </Router>
    )
  return {...objectRender, history}
}

export default renderWithRouter;