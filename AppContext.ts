import * as React from "react";

const context = {
    songId: null,
    setSongId: (id) => { }
}
export const AppContext = React.createContext(context);