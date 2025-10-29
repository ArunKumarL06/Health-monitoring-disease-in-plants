
export interface AnalysisResult {
    plant_name: string;
    is_healthy: boolean;
    disease_name: string;
    confidence_score: number;
    description: string;
    possible_causes: string[];
    recommended_actions: string[];
}

export interface SensorData {
    id: string;
    name: string;
    value: number;
    unit: string;
    idealRange: [number, number];
}

export interface User {
    id: string;
    email: string;
    role: 'user' | 'admin';
}

export interface HistoricalAnalysis {
    id: string;
    userEmail: string;
    analysis: AnalysisResult;
    timestamp: string;
    imageUrl: string;
}