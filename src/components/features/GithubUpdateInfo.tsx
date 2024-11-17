import React, {useEffect, useState} from "react";

const OWNER = "aechat";
const REPO = "links";
const BRANCH = "dev";

interface GithubUpdateInfoProps {
  filePath: string;
}

const GithubUpdateInfo: React.FC<GithubUpdateInfoProps> = ({filePath}) => {
  const [commitInfo, setCommitInfo] = useState<string>("Ищем информацию...");
  const [error, setError] = useState<string | null>(null);

  const getLastCommitDate = async () => {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits?path=${filePath}&sha=${BRANCH}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API GitHub вернул ${response.status}`);
      }

      const commits = await response.json();

      if (commits.length === 0) {
        setCommitInfo("Информация о свежести информации временно недоступна");
        return;
      }

      const lastCommitDate = new Date(commits[0].commit.author.date);
      const commitMessage = commits[0].commit.message;

      setCommitInfo(
        `Дата обновления: ${lastCommitDate.toLocaleString()}\nЧто нового: ${commitMessage}`
      );
    } catch (err) {
      setError(
        `API Github выдал какую-то ошибку, поэтому информация о свежести недоступна: ${err}`
      );
    }
  };

  useEffect(() => {
    getLastCommitDate();
  }, [filePath]);

  if (error) {
    return (
      <p
        style={{
          textAlign: "right",
          fontSize: "12px",
          color: "red",
          opacity: "0.75",
          whiteSpace: "pre-wrap",
        }}
      >
        {error}
      </p>
    );
  }

  return (
    <p
      style={{
        textAlign: "right",
        fontSize: "12px",
        whiteSpace: "pre-wrap",
        opacity: "0.5",
      }}
    >
      {commitInfo}
    </p>
  );
};

export default GithubUpdateInfo;
