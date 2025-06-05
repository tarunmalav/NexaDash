import { useDropzone } from 'react-dropzone'; 

const DropFile = () => {
   const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
      noClick: true,
      noKeyboard: true
   });
   const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
        </li>
    ));
   return (
      <>
         <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div className="dlab-message"
               style={{
                  textAlign: "center",
                  margin: "5em 0"
               }}
            >
               <p type="button" onClick={open}>Drop file here to upload</p>
               <ul>{files}</ul>
            </div>
         </div>
      </>
   )
}

export default DropFile
