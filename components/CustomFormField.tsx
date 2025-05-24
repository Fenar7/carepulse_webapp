"use client";

import React from "react";
import Image from "next/image";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Form } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
}

export default function CustomFormField({
  control,
  fieldType,
  name,
  label,
  placeholder,
  iconSrc,
  iconAlt,
  disabled = false,
}: CustomProps) {
  // helper to render the right input based on fieldType
  const renderField = (field: any) => {
    switch (fieldType) {
      case FormFieldType.INPUT:
        return (
          <div className="flex rounded-md border border-dark-500 bg-dark-400">
            {iconSrc && (
              <Image
                src={iconSrc}
                height={24}
                width={24}
                alt={iconAlt || "icon"}
                className="ml-2"
              />
            )}
            <FormControl>
              <Input
                {...field}
                placeholder={placeholder}
                disabled={disabled}
                className="shad-input border-0"
              />
            </FormControl>
          </div>
        );

        case FormFieldType.PHONE_INPUT: 
        return (
            <FormControl>
                <PhoneInput
                defaultCountry="US"
                placeholder={placeholder}
                international
                withCountryCallingCode
                value={field.value as E164Number | undefined}
                onChange={field.onChange}
                className="input-phone"
                />
            </FormControl>
        )

      // add other fieldType cases here (TEXTAREA, CHECKBOX, etc.)...

      default:
        return null;
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          {renderField(field)}

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
}
