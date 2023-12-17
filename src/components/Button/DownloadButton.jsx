import './style.css'

const DownloadButton = () => {
    const handleDownload = () => {
      const fileUrl = '../../public/Resume of Sharif Rayhan.pdf';
  
      const downloadLink = document.createElement("a");
      downloadLink.href = fileUrl;
      downloadLink.download = "Resume of Sharif Rayhan.pdf"; 
  
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
  
    return (
      <button className="button" onClick={handleDownload}>
        Download Resume
      </button>
    );
  };
  

export default DownloadButton;
