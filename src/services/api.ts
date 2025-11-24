const API_BASE_URL = import.meta.env.PROD
    ? "https://progress-tracker-backend-production.up.railway.app/api"
    : "/api";

export default API_BASE_URL;
