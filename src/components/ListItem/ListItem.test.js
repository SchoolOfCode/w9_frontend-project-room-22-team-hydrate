import React from "react";
import {getByRole, render, screen} from "@testing-library/react";
import ListItem from "./ListItem";
import {test, expect, jest} from "@jest/globals";

test("tests that ListItem renders", function () {
    //const addToList = jest.fn();  //not sure about this?
    //Arrange
    render(<ListItem />) //buttonText?
    //Act 
        //do we actually need this stage for checking it render
    //Assert 
    expect(screen.getByRole('listitem')).toBeInTheDocument();
})