import PageHeader from '@components/common/PageHeader';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormLabel,
} from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { useApartment } from '@hooks/useApartment';
import RHFTextField from '@components/fields/RHFTextField';
import CurrencyTextField from '@components/fields/CurrencyTextField';

export default function AddApartment() {
  const { form, onSubmit } = useApartment();

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
                 
                    <CurrencyTextField
                      name="price"
                      currency="EGP"
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
}
