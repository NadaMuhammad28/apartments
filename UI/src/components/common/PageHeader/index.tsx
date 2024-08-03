import { Button, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link as RouterLink } from "react-router-dom";


interface PageHeaderProps {
  title: string;
  showbutton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  showbutton=true,
  buttonText,
  buttonLink='',
}) => {
  return (
    <div className="py-3 px-5">
  
      <div className=" flex flex-wrap gap-4 items-center justify-between ">
        <div>
          <Typography
            className="!font-bold  !mt-3 !text-sm md:!text-2xl"
            variant="h1"
          >
            {title}
          </Typography>
        </div>
        <div>
        { showbutton && <Button
            variant="contained"
            type="button"
            className="items-center !font-[700]"
            color="secondary"
            sx={{ gap: 1, alignItems: "center" }}
            startIcon={<AddBoxIcon />}
            to={buttonLink}
            component={RouterLink}
          >
            {buttonText}
          </Button>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
