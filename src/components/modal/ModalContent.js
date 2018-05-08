import React from "react";
import Button from "../button/Button";
import Box from "../direction/Box";

export default ({type, children}) => {

    return (
        <Box stretch classes="modal-content">
            <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam urna, vehicula eu lorem sed, lobortis iaculis nulla. Nullam nulla diam, cursus eu est et, rutrum dictum tortor.</div>
                <div>Phasellus sed interdum nisi, et hendrerit tellus. Quisque mattis lobortis tempor. Proin a nulla nec orci malesuada lacinia.</div>
                <Button stretch size="l" decoration="action">{["Quit exercise series"]}</Button>
                <Button stretch size="l" decoration="warning">{["Restart exercise series"]}</Button>
                <Button stretch size="l" decoration="view">{["Don\'t quit"]}</Button>
            </div>
        </Box>
    )
}