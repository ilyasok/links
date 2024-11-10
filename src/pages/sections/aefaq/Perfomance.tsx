import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";

export const AEPerfomance: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="perfomance"
    >
      <DetailsSummary title="Почему у меня, б%@#ь, лагает е&#!%й After Effects, с$%а?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как заставить программу использовать всю мощь компьютера?">
        {/* я заплатил за весь спидометр и я буду использовать весь спидометр */}
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Зачем люди переключают рендер на процессор, если есть видеокарта?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Предпросмотр идёт как-будто в slow-motion, что делать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='Часто появляется ошибка 23::40 или окно "Out of Memory", "After Effects has unexpectedly run out of memory and cannot complete this export" или "Low memory warning. RAM use has been extended for previews"'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="After Effects has encountered a failure related to GPU-enabled effects from this frame. This is likely because your GPU is out of memory.">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
