import pool from '@/lib/db';

export const revalidate = 0

// Add interface for row type
interface SurveyResponse {
  id: number;
  role: string;
  age_group: string;
  gender: string;
  education_level: string;
  program_satisfaction: string;
  industry_alignment: string;
  exchange_program: string;
  teaching_methods: string;
  language_level: string;
  library_satisfaction: string;
  document_circulation: string;
}

export default async function ResultsPage() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM survey_responses');
    const rows = result.rows as SurveyResponse[];

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Survey Results</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Age Group</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Education Level</th>
                <th className="px-4 py-2">Program Satisfaction</th>
                <th className="px-4 py-2">Industry Alignment</th>
                <th className="px-4 py-2">Exchange Program</th>
                <th className="px-4 py-2">Teaching Methods</th>
                <th className="px-4 py-2">Language Level</th>
                <th className="px-4 py-2">Library Satisfaction</th>
                <th className="px-4 py-2">Document Circulation</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row: SurveyResponse) => (
                <tr key={row.id}>
                  <td className="border px-4 py-2">{row.id}</td>
                  <td className="border px-4 py-2">{row.role}</td>
                  <td className="border px-4 py-2">{row.age_group}</td>
                  <td className="border px-4 py-2">{row.gender}</td>
                  <td className="border px-4 py-2">{row.education_level}</td>
                  <td className="border px-4 py-2">{row.program_satisfaction}</td>
                  <td className="border px-4 py-2">{row.industry_alignment}</td>
                  <td className="border px-4 py-2">{row.exchange_program}</td>
                  <td className="border px-4 py-2">{row.teaching_methods}</td>
                  <td className="border px-4 py-2">{row.language_level}</td>
                  <td className="border px-4 py-2">{row.library_satisfaction}</td>
                  <td className="border px-4 py-2">{row.document_circulation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  } finally {
    client.release();
  }
}