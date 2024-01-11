let API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    // Use production API domain
    API_BASE_URL = 'https://techmind-connect-server.vercel.app';
} else {
    // Use localhost API domain
    API_BASE_URL = 'https://techmind-connect-server.vercel.app'; // Adjust the port as needed
}

const API_CONFIG = {
    API_BASE_URL,
    // Other API-related configuration options can be added here
    TIMEOUT: 5000, // Example: API request timeout in milliseconds
};

export default API_CONFIG;