import React from "react"
export default function useToggle () {
    const [open, setOpen] = React.useState(false)

    function toggle () {
        setOpen(!open)
    }

    return [open, {toggle}]
}