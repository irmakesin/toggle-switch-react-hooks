import React, {useState} from "react";

export function UseToggle(initValue = false) {
    const [on, setOn] = useState(initValue);
    function onToggle(){
        setOn(!on);
    }

    return [on, {onToggle}];
}