import React from "react";

export default function Header(){
    return (
        <header className="App-header  m-4 flex flex justify-center items-center">
            <h1 className="text-4xl font-bold align-middle">Your <span className="italic" style={{letterSpacing: '2px'}}>personal</span><br/> recommendations:</h1>
        </header>
    );
}