import React, {useState} from "react";
import {Modal, Upload, message} from "antd";
import {saveAs} from "file-saver";
import {inflate} from "pako";
import {motion} from "framer-motion";
import {UploadFileRounded} from "@mui/icons-material";

const TgsToJsonModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [jsonData, setJsonData] = useState<unknown>(null);

  const handleFileUpload = async (file: File) => {
    try {
      const fileData = await file.arrayBuffer();

      const decompressed = inflate(new Uint8Array(fileData));

      const json = JSON.parse(new TextDecoder().decode(decompressed));

      setJsonData(json);
      message.success("Файл успешно конвертирован!");
    } catch (error) {
      console.error("Ошибка при обработке файла:", error);
      message.error("Не удалось конвертировать файл!");
    }

    return false;
  };

  const downloadJson = () => {
    if (jsonData) {
      const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
        type: "application/json",
      });
      saveAs(blob, "Sticker.json");
    }
  };

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.075,
          transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
        }}
        whileTap={{scale: 0.9, opacity: 0.5}}
        className="modal-button"
        style={{marginInline: "auto"}}
        onClick={() => setIsModalOpen(true)}
      >
        Открыть конвертер из TGS в JSON
      </motion.button>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={700}
        closeIcon={null}
        centered
      >
        <div className="modal">
          <p className="modal-title">Конвертер .tgs в .json</p>
          <Upload.Dragger
            name="file"
            accept=".tgs"
            beforeUpload={handleFileUpload}
            showUploadList={false}
          >
            <div style={{display: "flex", gap: "10px"}}>
              <UploadFileRounded />
              Перетащите .tgs файл сюда или нажмите на поле для выбора
            </div>
          </Upload.Dragger>
          {jsonData ? (
            <motion.button
              whileHover={{
                scale: 0.975,
                transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
              }}
              whileTap={{scale: 0.9, opacity: 0.5}}
              className="modal-button"
              onClick={downloadJson}
            >
              Скачать переконвертированный JSON
            </motion.button>
          ) : null}
          <p
            style={{
              opacity: 0.5,
              textAlign: "left",
              fontSize: "13px",
              lineHeight: "1.2",
              textWrap: "balance",
            }}
          >
            Конвертация идёт локально на вашем устройстве. Результат и качество
            конвертации не гарантируется.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default TgsToJsonModal;
