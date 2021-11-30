import React from 'react'

const DEFAULT = "font-semibold text-white rounded py-2 px-4 shadow"
const OVERRIDE = "font-semibold  rounded py-2 px-4 shadow "

//KEY: // E = Enabled // D = Disabled (No need for SAVE_D because it uses the same css as DEFAULT_D)

const Button = {

    DEFAULT_E: function(props) {
        return  <>
            <button className={`bg-indigo-400 hover:bg-indigo-700 ${DEFAULT}`}>
                {props.children}
            </button>
        </>
    },
    DEFAULT_D: function(props) {
        return  <>
            <button className={`bg-gray-400 cursor-not-allowed ${DEFAULT}`}>
                {props.children}
            </button>
        </>
    },

    OVERRIDE_E: function(props) {
        return  <>
            <button className={`bg-indigo-500 hover:bg-indigo-700 text-white ${OVERRIDE}`}>
                {props.children}
            </button>
        </>
    },

    
    OVERRIDE_D: function(props) {
        return  <>
            <button className={`text-gray-800 bg-white border border-gray-400 hover:bg-gray-100" ${OVERRIDE}`}>
                {props.children}
            </button>
        </>
    },
    SAVE: function(props) {
        return  <>
            <button className={`bg-blue-500 hover:bg-blue-700  ${DEFAULT}`}>
                {props.children}
            </button>
        </>
    },
    RESETALL: function(props) {
        return  <>
            <button className={`bg-red-500 rounded hover:bg-red-700   ${DEFAULT}`}>
                {props.children}
            </button>
        </>
    }
    
}


export default Button
