"use client"

import { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface TeachingMethodsProps {
  form: UseFormReturn<any>
}

export function TeachingMethods({ form }: TeachingMethodsProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="teachingEffectiveness"
        render={({ field }) => (
          <FormItem>
            <FormLabel>How effective were the teaching methods used?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="veryEffective" />
                  </FormControl>
                  <FormLabel className="font-normal">Very Effective</FormLabel>
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
