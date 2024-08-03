import React from 'react';
import { Button, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Link from 'next/link'; // Use Next.js Link component

const PageHeader = ({
  title,
  showbutton = true,
  buttonText,
  buttonLink = '',
}) => {
  return (
    <div className="py-3 px-5">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div>
          <Typography
            className="!font-bold !mt-3 !text-sm md:!text-2xl"
            variant="h1"
          >
            {title}
          </Typography>
        </div>
        <div>
          {showbutton && (
            <Button
              variant="contained"
              type="button"
              className="items-center !font-[700]"
              color="secondary"
              sx={{ gap: 1, alignItems: 'center' }}
              startIcon={<AddBoxIcon />}
              component={Link}
              href={buttonLink}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
