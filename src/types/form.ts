export interface GraduateSurveyFormData {
  // Personal Info
  role: 'alumni' | 'student' | 'teacher' | 'parent' | 'industry'
  age: string
  gender: 'male' | 'female' | 'other'

  // Education Info
  graduationYear: string
  department: string
  program: 'bachelors' | 'masters' | 'phd' | 'diploma'

  // Satisfaction Survey
  overallSatisfaction: 'verySatisfied' | 'satisfied' | 'neutral' | 'dissatisfied' | 'veryDissatisfied'
  
  // Teaching Methods
  teachingEffectiveness: 'veryEffective' | 'effective' | 'neutral' | 'ineffective' | 'veryIneffective'
  
  // Library Resources
  libraryResources: 'excellent' | 'good' | 'average' | 'poor' | 'veryPoor'
}

export type FormStep = 
  | 'personal-info'
  | 'education-info'
  | 'satisfaction-survey'
  | 'teaching-methods'
  | 'library-resources'
