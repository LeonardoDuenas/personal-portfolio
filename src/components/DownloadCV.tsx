import downloadIcon from "../icons/download.svg";

function DownloadCV() {
  return (
    <a
      href="../assets/CV_-_LEONARDO_DUENAS.pdf"
      download="CV_-_LEONARDO_DUENAS.pdf"
    >
      <img
        src={downloadIcon}
        alt="download"
        width={40}
        height={40}
        style={{ paddingTop: "1rem" }}
      />
    </a>
  );
}

export default DownloadCV;
