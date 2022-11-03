import React, { useRef, useState } from "react";
import Ticket from "../../components/ticket/Ticket";
import styles from "./TicketMain.module.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

const TicketMain = () => {
  const printRef = React.useRef();
  const [userValues, setUserValues] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pageWidth = pdf.internal.pageSize.getWidth();
    // const pageHeight = pdf.internal.pageSize.getHeight();

    // console.log(pdf.internal.pageSize.getHeight());

    // const widthRatio = pageWidth / canvas.width;
    // const heightRatio = pageHeight / canvas.height;
    // const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

    // const canvasWidth = canvas.width * ratio;
    // const canvasHeight = canvas.height * ratio;

    // const marginX = (pageWidth - canvasWidth) / 2;
    // const marginY = (pageHeight - canvasHeight) / 2;

    const pdfHeight = (imgProperties.height * pageWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pageWidth, pdfHeight);
    pdf.save(`DevFest Nagpur Ticket(${userValues.name.trim()}).pdf`);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="layout-content">
      <div className={styles["container"]}>
        <div ref={printRef} className={styles["ticket"]}>
          <Ticket></Ticket>
        </div>
        <div className={styles["button-container"]}>
          {user?.name === "" ? (
            <Link to={"/allaccesspass"}>GET YOUR ALL ACCESS PASS</Link>
          ) : (
            <button type="button" onClick={handleDownloadPdf}>
              Export as PDF
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketMain;
