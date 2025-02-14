"use client"

import { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { GraduateSurveyFormData } from "@/types/form"

interface LibraryAndResourcesProps {
  form: UseFormReturn<GraduateSurveyFormData>
}

export function LibraryAndResources({ form }: LibraryAndResourcesProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="libraryResources"
        render={({ field }) => (
          <FormItem>
            <FormLabel>How would you rate the library and learning resources?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="excellent" />
                  </FormControl>
                  <FormLabel className="font-normal">Excellent</FormLabel>
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
