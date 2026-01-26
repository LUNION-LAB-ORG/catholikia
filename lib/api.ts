import {Api} from "ak-api-http";
import {baseURL} from "@/config/api";

export const api = new Api({
	baseUrl: baseURL, // Base URL de l'API
	timeout: 10000, // Timeout de la requête
	headers: {
		"Content-Type": "application/json", // En-têtes par défaut
	},
	maxRetries: 3, // Nombre de tentatives de re tentative
	retryDelay: 5000, // Delais entre les tentatives
	debug: process.env.NODE_ENV != 'production', // Debug activé en mode développement
});