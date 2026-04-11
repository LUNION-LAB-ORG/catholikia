'use client'
import React from 'react';
import {createContext, useContext, useEffect, useState} from "react"

type Consent = "accepted" | "declined" | null

type ConsentContextType = {
	consent: Consent
	accept: () => void
	decline: () => void
}

const ConsentContext = createContext<ConsentContextType | null>(null)

export const useConsent = () => {
	const ctx = useContext(ConsentContext)
	if(!ctx) throw new Error("useConsent must be used inside provider")
	return ctx
}

export const ConsentProvider = ({children}:{children:React.ReactNode}) => {

	const [consent,setConsent] = useState<Consent>(null)

	useEffect(()=>{
		const stored = localStorage.getItem("cookie-consent") as Consent
		if(stored) setConsent(stored)
	},[])

	const accept = ()=>{
		localStorage.setItem("cookie-consent","accepted")
		setConsent("accepted")
	}

	const decline = ()=>{
		localStorage.setItem("cookie-consent","declined")
		setConsent("declined")
	}

	return(
		<ConsentContext.Provider value={{consent,accept,decline}}>
			{children}
		</ConsentContext.Provider>
	)
}