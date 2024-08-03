"use client";
import React from "react";
import PageHeader from "@/components/PageHeader";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormLabel,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import RHFTextField from "@/components/RHFTextField";
import { addApartmentSchema } from "@/schemas/apartment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addApartment } from "@/services/api";
import { useRouter } from "next/navigation";

const AddApartment = () => {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(addApartmentSchema),
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    const payload = { ...data, price: +data.price };
    try {
      await addApartment(payload);
      router.push("/");
    } catch (error) {
      console.error("Failed to add apartment:", error);
    }
  };

  return (
    <article>
      <PageHeader title="Add Apartment" showbutton={false} />

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <FormProvider {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* Apartment Name */}
              <FormControl component="fieldset" fullWidth margin="normal">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <FormLabel
                    component="legend"
                    className="col-span-12 md:col-span-2"
                  >
                    Apartment Name
                  </FormLabel>
                  <div className="col-span-12 md:col-span-10">
                    <RHFTextField name="name" className="w-full" />
                  </div>
                </div>
              </FormControl>

              {/* Location */}
              <FormControl component="fieldset" fullWidth margin="normal">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <FormLabel
                    component="legend"
                    className="col-span-12 md:col-span-2"
                  >
                    Location
                  </FormLabel>
                  <div className="col-span-12 md:col-span-10">
                    <RHFTextField name="location" className="w-full" />
                  </div>
                </div>
              </FormControl>

              {/* Price */}
              <FormControl component="fieldset" fullWidth margin="normal">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <FormLabel
                    component="legend"
                    className="col-span-12 md:col-span-2"
                  >
                    Price
                  </FormLabel>
                  <div className="col-span-12 md:col-span-10">
                    <RHFTextField
                      type="number"
                      name="price"
                      className="w-full"
                    />
                  </div>
                </div>
              </FormControl>

              {/* Description */}
              <FormControl component="fieldset" fullWidth margin="normal">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <FormLabel
                    component="legend"
                    className="col-span-12 md:col-span-2"
                  >
                    Description
                  </FormLabel>
                  <div className="col-span-12 md:col-span-10">
                    <RHFTextField name="description" className="w-full" />
                  </div>
                </div>
              </FormControl>

              {/* Submit Button */}
              <Button
                className="self-end"
                type="submit"
                variant="contained"
                disabled={!form.formState.isValid}
                color="primary"
              >
                Submit
              </Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </article>
  );
};

export default AddApartment;
