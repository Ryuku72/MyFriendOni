import React from 'react';
import Letter from "../Letter";
import "./style.css"

function Header() {

return (
<div className="block w-full" style={{height:"12.5vh"}}>
    <div className="w-full inline-flex h-full justify-center">
            <Letter value="M" color="#4a4e4d" />
            <Letter value="Y" color="#0e9aa7" />
            <Letter value="_" color="#f6cd61" />
            <Letter value="F" color="#fe8a71" />
            <Letter value="R" color="#58668b" />
            <Letter value="I" color="#f37736" />
            <Letter value="E" color="#0392cf" />
            <Letter value="N" color="#96ceb4" />
            <Letter value="D" color="#ff6f69" />
            <Letter value="_" color="#f6cd61" />
            <Letter value="'" color="#00aedb" />
            <Letter value="O" color="#58668b" />
            <Letter value="N" color="#5e5656" />
            <Letter value="I" color="#3d2352" />
            <Letter value="'" color="#0392cf" />
    </div>
</div>
)
}

export default Header