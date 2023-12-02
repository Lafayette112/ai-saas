"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("82975018-9c71-418e-88ac-b89d135c6b1a");
    }, [])
    
    return null;
}