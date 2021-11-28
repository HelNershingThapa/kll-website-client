import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Typography } from "@material-ui/core";
import { uid } from "react-uid";
import clsx from "clsx";

const files = [
  {
    fileName: "SurveyData.xls",
    fileType: "excel",
  },
  {
    fileName: "Data.docx",
    fileType: "word",
  },
  {
    fileName: "Intro.pdf",
    fileType: "pdf",
  },
  {
    fileName: "FinalData.pdf",
    fileType: "pdf",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(3),
  },
  documentsCtr: {
    marginTop: theme.spacing(15),
  },
  documents: {
    marginTop: theme.spacing(2),
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(3),
    }
  },
  fileCard: {
    position: "relative",
    width: 148,
    height: 180,
    borderRadius: 12,
    background: theme.palette.grey[100],
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column-reverse",
    "&:hover": {
      cursor: "pointer",
    },
  },
  fileName: {
    lineHeight: 1,
    fontWeight: 500,
    color: theme.palette.grey[600],
  },
  icon: {
    position: "absolute",
    left: "50%",
    bottom: "50%",
    transform: "translate(-50%, 50%)",
  },
  downloadIcon: {
    fontSize: "16px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const extensionsMap = {
  pdf: "pdf",
  xls: "excel",
  xlsx: "excel",
}

const Documents = ({ documents }) => {
  const classes = useStyles();
  const {API_URL} = process.env

  const getFileExtension = (ext) => {
    if (extensionsMap[ext]) {
      return extensionsMap[ext]
    }
    else {
      return "defaultFileIcon"
    }
  }

  return (
    <div className={classes.documentsCtr}>
      <Typography
        variant="h5"
        className={classes.header}
        style={{ marginBottom: "20px" }}
      >
        {`Documents`}
      </Typography>
      <div className={classes.documents}>
        {documents.map((file) => (
          <div key={uid(file)} className={classes.fileCard} onClick={() => window.open(`${API_URL}${file.file.url}`)}>
            <div className={classes.icon}>
              <Image
                src={`/icons/${getFileExtension(file.file.ext.replace('.', ''))}.png`}
                width={48}
                height={48}
                alt="excel icon"
              />
            </div>
            <div className={classes.links}>
              <Typography
                variant="subtitle2"
                className={classes.fileName}
                align="left"
              >
                {file.file.name}
              </Typography>
              <i className={clsx("ri-download-line", classes.downloadIcon)} ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
