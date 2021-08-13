import React from "react";
import "./TopBar.css";

const TopBar = () => {
    return (
        <div
            className="topbar"
            style={{ maxWidth: "100%", background: "white", height: 100 }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 60,
                    paddingRight: 60,
                    maxWidth: 1430,
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "100%",
                }}
            >
                <h1>Where in the world?</h1>
                <div
                    style={{
                        display: "flex",
                        width: 110,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <img
                        style={{ width: 20, height: 20, background: "black" }}
                    />
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
