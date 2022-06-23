import React from "react";
import {getByRole, render, screen} from "@testing-library/react";
import ListItem from "./ListItem";
//import {test, expect, jest} from "@jest/globals";

test("tests that ListItem renders", function (){
    render(<ListItem />)
    expect(screen.getByRole('listitem')).toBeInTheDocument();
})