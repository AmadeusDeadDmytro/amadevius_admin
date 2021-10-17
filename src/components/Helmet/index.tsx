import React from "react";
import { Helmet as RHelmet } from 'react-helmet'

export const Helmet: React.FC = ({ children }) => {
    return (
        <RHelmet>
            <title>Админ панель</title>
            <link href="//fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&amp;display=swap" rel="stylesheet" />
        </RHelmet>
    )
}

// TODO: finish this