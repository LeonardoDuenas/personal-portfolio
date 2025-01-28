import downloadIcon from "../icons/download.svg";

function DownloadCV() {
  return (
    <a href="/CV_LEONARDO_DUENAS.pdf" download>
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
