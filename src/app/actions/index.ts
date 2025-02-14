"use server"

import pool from '@/lib/db';
import { revalidatePath } from "next/cache"

// Define the interface for survey submission data
interface SurveyFormData {
  role: string;
  age: string;
  gender: string;
  educationLevel: string;
  programSatisfaction: string;
  industryAlignment: string;
  exchangeProgram: string;
  teachingMethods: string;
  languageLevel: string;
  librarySatisfaction: string;
  documentCirculation: string;
}

// Replace 'any' with the proper type
export async function submitSurvey(data: SurveyFormData) {
  try {
    const client = await pool.connect();
    try {
      await client.query(`
        INSERT INTO survey_responses (
          role, age_group, gender, education_level, program_satisfaction,
          industry_alignment, exchange_program, teaching_methods,
          language_level, library_satisfaction, document_circulation
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      `, [
        data.role, data.age, data.gender, data.educationLevel,
        data.programSatisfaction, data.industryAlignment, data.exchangeProgram,
        data.teachingMethods, data.languageLevel, data.librarySatisfaction,
        data.documentCirculation
      ]);
      
      revalidatePath("/")
      return { success: true }
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Failed to submit survey:", error)
    throw new Error("Failed to submit survey")
  }
}