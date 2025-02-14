"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PersonalInfo } from "./form-steps/personal-info";
import { EducationInfo } from "./form-steps/education-info";
import { SatisfactionSurvey } from "./form-steps/satisfaction-survey";
import { TeachingMethods } from "./form-steps/teaching-methods";
import { LibraryAndResources } from "./form-steps/library-resources";
import { submitSurvey } from "@/app/actions";
import { toast } from "sonner";

const formSchema = z.object({
  role: z.string(),
  age: z.string(),
  gender: z.string(),
  educationLevel: z.string(),
  graduationYear: z.string(),
  department: z.string(),
  program: z.string(),
  overallSatisfaction: z.string(),
  satisfactionLevel: z.string(),
  teachingMethods: z.string(),
  teachingEffectiveness: z.string(),
  librarySatisfaction: z.string(),
  libraryResources: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export function GraduateSurveyForm() {
  const [step, setStep] = useState(1);
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await submitSurvey(data);
      toast.success("Survey submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit survey");
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && <PersonalInfo form={{ control: form.control }} />}
        {step === 2 && <EducationInfo form={form} />}
        {step === 3 && <SatisfactionSurvey form={form} />}
        {step === 4 && <TeachingMethods form={form} />}
        {step === 5 && <LibraryAndResources form={form} />}

        <div className="flex justify-between">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={prevStep}>
              Previous
            </Button>
          )}
          {step < 5 ? (
            <Button type="button" onClick={nextStep} className="ml-auto">
              Next
            </Button>
          ) : (
            <Button type="submit" className="ml-auto">
              Submit Survey
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
