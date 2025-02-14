"use client"

import { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface SatisfactionSurveyProps {
  form: UseFormReturn<any>
}

export function SatisfactionSurvey({ form }: SatisfactionSurveyProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="overallSatisfaction"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Overall, how satisfied are you with your education?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="verySatisfied" />
                  </FormControl>
                  <FormLabel className="font-normal">Very Satisfied</FormLabel>
                </FormItem>
                {/* Add more radio options */}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
