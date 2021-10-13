import React, { CSSProperties } from "react";
import { useDropzone, FileWithPath, FileError } from "react-dropzone";
import { RejectedFileType } from "../types/types";

const baseStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "blue",
};

const acceptStyle = {
  borderColor: "green",
  backgroundColor: "#9ede9e",
  color: "white",
};

const rejectStyle = {
  borderColor: "red",
  backgroundColor: "#e69c9c",
  color: "white",
};

const MyDropzone: React.FC = () => {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "image/*", validator: nameValidator });

  // Styles //
  const style = React.useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  // Styles //

  const maxLength = 5;

  function nameValidator(file: FileWithPath) {
    if (file.name.length > maxLength) {
      return {
        code: "name-too-large",
        message: `Name exceeds over ${maxLength} characters.`,
      };
    }

    return null;
  }

  const files = acceptedFiles.map((file: FileWithPath) => {
    console.log("this file: ", file);
    return <li key={file.path}>{file.path}</li>;
  });

  const rejectedFiles = fileRejections.map(
    ({ file, errors }: RejectedFileType) => {
      console.log(file);
      return (
        <li key={file.path}>
          {file.path}
          <ul>
            {errors.map((e: FileError) => {
              return <li key={e.code}>{e.message}</li>;
            })}
          </ul>
        </li>
      );
    }
  );

  return (
    <>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>

      <aside style={{ marginLeft: "2rem" }}>
        <h4>Files:</h4>
        <ol style={{ fontSize: "15px" }}>{files}</ol>
        <h4>Rejected files:</h4>
        <ol style={{ fontSize: "15px" }}>{rejectedFiles}</ol>
      </aside>
    </>
  );
};

export default MyDropzone;
