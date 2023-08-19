import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import mainimg from '../images/pic.jpg';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Download = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  const [loader,setLoader] = useState(false);
 

// download pdf
  const downloadPDF = () =>{
    const capture = document.querySelector('.actual-reciept');
    setLoader(true);
    html2canvas(capture).then((canvas) =>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p','mm','a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData,'PNG',0,0,componentWidth,componentHeight);
      setLoader(false);
      doc.save('recipet.pdf');
    })
  }



  return (
    <>
    {/* actual-reciept */}
      <div className="p-4 box mt-3 text-center ">
        Hello Welcome <br />
        {user && user.email}
        <div className="actual-reciept d-flex flex-column justify-content-center " style={{}}>
          <div className="main-content" 
          style={{borderRadius:"1px solid black"}}>
            <p>shop name</p>
            <p>contact number:9052174956</p>
            <p>email:saivenkatpentakota@gmail.com</p>
            <p>Thank u for shopping</p>
            <img className="main-image" alt ="mainimg" src = {mainimg} 
            style={{width:"200px",height:"200px"}} />

          </div>
        </div>
      </div>
      {/* download button */}
      <div className="download-reciept">
        <div className="actions-right">
          <button className="reciept-modal-download-button p-2 m-2 btn btn-primary"
          onClick={downloadPDF}
          disabled = {!(loader === false)}
          
          >
            {loader?(<span>Downloading</span>):(<span>Download</span>)}
            </button>
        </div>
      </div>
      <div className="d-grid gap-2">
        <Button variant="danger" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Download;