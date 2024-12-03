// import { useRef, useState } from "react";
// import axios from "axios";

const { useEffect } = require("react")

// function Upload(){
//     const [file, setFile]=useState();
//     const [fileName, setFileName]=useState();
//     const fileInput=useRef();

//     const saveFile=()=>{
//         setFile(fileInput.current.files[0])
//        // setFileName(fileInput.current.files[0].name)
//     }

//     const uploadFile=async ()=>{
//         const formData=new FormData();
//         formData.append('file',file);
//         formData.append('fileName',fileName)

//         try{
//            const res=await axios.post('http://localhost:8000/upload',
//                 formData
//             )
//             console.log(res.data.message)
//             fileInput.current.value=''
//         }catch(error){
//             if(error.response != undefined){
//                 console.log(error.response.data.message)
//             }else{
//                 console.log("server error")
//             }

//         }
//     }
//     return (
//     <div className="mt-5">
//         <input type="file" ref={fileInput} onChange={saveFile}/>
//         <button onClick={uploadFile}>Upload</button>
//     </div>
//     )
      
// }
// export default Upload;

function Upload(){

    useEffect(()=>{
        fetch('/files')
          .then(response => response.json())
          .then(files => {
              const fileList = document.getElementById('fileList');
              files.forEach(file => {
                  const listItem = document.createElement('li');
                  const fileLink = document.createElement('a');
                  fileLink.href = `/files/${file._id}`;
                  fileLink.textContent = file.name;
                  listItem.appendChild(fileLink);
                  fileList.appendChild(listItem);
              });
          })
          .catch(error => {
              console.error('Error fetching file list:', error);
          });
    },[])

    return(
        <>
         <h1>Upload a PDF File</h1>
  <form action="http://127.0.0.1:3000/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="pdf" accept=".pdf" />
    <button type="submit">Upload</button>
  </form>



  <ul id="fileList"></ul>
        </>
    )
}
export default Upload;