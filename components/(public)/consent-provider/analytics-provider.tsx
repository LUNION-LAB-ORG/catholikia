'use client';
import React from 'react';
import {GoogleAnalytics} from "@next/third-parties/google"
import {useConsent} from "@/components/(public)/consent-provider/index";

function AnalyticsProvider() {
	const {consent} = useConsent()

	const gaId = process.env.NEXT_PUBLIC_GA_ID
	if(consent !== "accepted" || !gaId) return null

	return (
		<GoogleAnalytics gaId={gaId}/>
	);
}

export default AnalyticsProvider;