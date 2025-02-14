"use server"

import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export async function submitSurvey(data: any) {
  try {
    await sql`
      INSERT INTO survey_responses (
        role,
        age_group,
        gender,
        education_level,
        satisfaction_level,
        teaching_methods,
        library_satisfaction,
        created_at
      ) VALUES (
        ${data.role},
        ${data.age},
        ${data.gender},
        ${data.educationLevel},
        ${data.satisfactionLevel},
        ${data.teachingMethods},
        ${data.librarySatisfaction},
        NOW()
      )
    `

    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Failed to submit survey:", error)
    throw new Error("Failed to submit survey")
  }
}

