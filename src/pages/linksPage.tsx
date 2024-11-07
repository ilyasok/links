import {
  AnimationRounded,
  Apple,
  ArchitectureRounded,
  AssistantRounded,
  BlockRounded,
  BusinessCenterRounded,
  CarRepairRounded,
  DevicesRounded,
  DomainOutlined,
  Download,
  FormatListBulletedOutlined,
  ForumRounded,
  Gif,
  HandymanRounded,
  MmsRounded,
  MovieFilterRounded,
  MovieRounded,
  PermMediaRounded,
  QuestionMarkRounded,
  SlowMotionVideoRounded,
  SmartToyRounded,
  SpellcheckRounded,
  SportsEsportsRounded,
  TerminalRounded,
  TextureRounded,
  VideoSettingsOutlined,
  ViewInArRounded,
  VolumeUpRounded,
  WebRounded,
  WhatshotRounded,
  WorkRounded,
} from "@mui/icons-material";
import {Divider} from "antd";
import {motion} from "framer-motion";
import React from "react";
import {Header} from "../components/Header";
import {LinkCard, LinkCardNoDescription, LinkInAppCard} from "../components/LinkCards";

import {AdditionDanger, AdditionWarning} from "../components/Additions";
import {Footer} from "../components/Footer";

const Links = () => {
  return (
    <div className="page">
      <Header title="links" />

      <motion.main
        className="main"
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 50, opacity: 0}}
        transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
      >
        <div
          style={{display: "none"}}
          className="logo-container"
        >
          <h1 className="logo-title">aechat@links</h1>
          <p className="logo-slogan">Собрали полезные ссылки для вас</p>
        </div>
        <div className="links">
          <Divider>Ответы на частые вопросы</Divider>
          <div className="links-grid">
            <LinkInAppCard
              href="/aefaq"
              icon={<QuestionMarkRounded />}
              name="aefaq"
              description="Преодолеваем трудности при работе с After Effects"
            />{" "}
            <LinkInAppCard
              href="/prfaq"
              icon={<QuestionMarkRounded />}
              name="prfaq"
              description="Поясняем за монтаж и шаблоны в Premiere Pro"
            />{" "}
            <LinkInAppCard
              href="/psfaq"
              icon={<QuestionMarkRounded />}
              name="psfaq"
              description="Базарим за цвета и обработку изображений в  Photoshop"
            />
            <LinkInAppCard
              href="/aeexpressions"
              icon={<TerminalRounded />}
              name="aeexpressions"
              description="Раздел с популярными выражениями в After Effects"
            />
          </div>
          <Divider>Наши каналы</Divider>
          <div className="links-grid">
            <LinkCard
              href="https://t.me/s/aetemp"
              icon={<PermMediaRounded />}
              name="AETemp"
              description="Шаблоны и плагины для After Effects со всего интернета"
            />
            <LinkCard
              href="https://t.me/s/premtemp"
              icon={<MovieFilterRounded />}
              name="PremTemp"
              description="Шаблоны для Premiere Pro"
            />
            <LinkCard
              href="https://t.me/s/designworld"
              icon={<MmsRounded />}
              name="Design World"
              description="Шаблоны для Photoshop, Illustrator и Figma"
            />
            <LinkCard
              href="https://teletype.in/@aetemp/Courses"
              icon={<SlowMotionVideoRounded />}
              name="Курсы от AETemp"
              description="Приватный канал с различными обучающими курсами"
            />
            <LinkCard
              href="https://t.me/HiStockBot?start=509060394"
              icon={<SmartToyRounded />}
              name="HiStockBot"
              description="Бот для покупки шаблонов с Envato Element и других сервисов"
            />
            <LinkCard
              href="https://t.me/+Qd9xu7A4TeIwNzY6"
              icon={<HandymanRounded />}
              name="склад стройматериалов"
              description="программы для творчества на windows"
            />
            <LinkCard
              href="https://t.me/+gSmpjWyhd5w3ZGFi"
              icon={<CarRepairRounded />}
              name="купить запчасти на форд фокус"
              description="невошедшее в основную идею склада стройматериалов"
            />
            <LinkCard
              href="https://t.me/+ZqiaMfQRFgM4YmEy"
              icon={<Apple />}
              name="Яблоневый сад"
              description="как склад стройматериалов, но для macOS"
            />
          </div>
          <Divider>Сервисы</Divider>
          {/* ezgif, скачивание шаттера, скачивание медиаинфо и аналогичное по списку */}
          <div className="links-grid">
            <LinkCard
              href="https://ezgif.com/"
              icon={<Gif />}
              name="Ezgif"
              description="Популярный онлайн-конвертер видеофайлов в GIF"
            />
            <LinkCard
              href="https://www.shutterencoder.com/"
              icon={<VideoSettingsOutlined />}
              name="Shutter Encoder"
              description="Оффлайн-конвертер видеофайлов в различные кодеки, в том числе монтажные"
            />
            <LinkCard
              href="https://mediaarea.net/MediaInfoOnline"
              icon={<FormatListBulletedOutlined />}
              name="MediaInfo Online"
              description="Онлайн-версия MediaInfo, позволяющая просматривать мета-информацию о файлах"
            />
            <LinkCard
              href="https://cobalt.tools/"
              icon={<Download />}
              name="кобальт"
              description="Сервис для скачивания видео с различных источников, в том числе YouTube"
            />
          </div>
          <Divider>Чаты в Telegram</Divider>
          <AdditionWarning>
            Перед вступлением в какой-либо чат - прочитайте его правила, чтобы избежать
            недоразумений или внезапных банов. Обычно правила чатов находятся в
            закреплённом сообщении или в описании чата.
          </AdditionWarning>
          <div className="links-grid">
            <LinkCard
              href="https://t.me/joinchat/F1DdXtG9LephYWUy"
              icon={<ForumRounded />}
              name="AEChat"
              description="Обсуждаем про After Effects и Premiere Pro"
            />
            <LinkCard
              href="https://t.me/+3LF_B_VK-Nw4YzYy"
              icon={<ForumRounded />}
              name="DWChat"
              description="Обсуждаем дизайн, Photoshop, Illustrator и Figma"
            />
            <LinkCard
              href="https://t.me/technicalchat"
              icon={<DevicesRounded />}
              name="Technical Chat"
              description="Обсуждаем компьютерные технологии и проблемы"
            />
            <LinkCard
              href="https://t.me/ru_montage"
              icon={<MovieRounded />}
              name="ru_montage"
              description="Обсуждаем монтаж в любой монтажной программе"
            />
            <LinkCard
              href="https://t.me/whatthefont"
              icon={<SpellcheckRounded />}
              name="Что за шрифт?"
              description="Угадываем шрифт по фото от других пользователей"
            />
            <LinkCard
              href="https://t.me/sound_tut"
              icon={<VolumeUpRounded />}
              name="Sound Chat"
              description="Обсуждаем саунд-дизайн, музыку и звук в целом"
            />
            <LinkCard
              href="https://t.me/upworktut"
              icon={<BusinessCenterRounded />}
              name="Work Chat"
              description="Публикуем вакансии и обсуждаем рабочую жизнь"
            />
            <LinkCard
              href="https://t.me/blender3dchat"
              icon={<ViewInArRounded />}
              name="Blender 3D Chat"
              description="Обсуждаем Blender и всё что с ним связано"
            />
            <LinkCard
              href="https://t.me/cinema4dchat"
              icon={<AnimationRounded />}
              name="Cinema 4D Chat"
              description="Обсуждаем Maxon Cinema 4D и всё что с ним связано"
            />
            <LinkCard
              href="https://t.me/+Utwk54hiRyjGorFJ"
              icon={<TextureRounded />}
              name="Substance Chat"
              description="Обсуждаем текстурирование в программах Substance"
            />
            <LinkCard
              href="https://t.me/chat3dsmax"
              icon={<DomainOutlined />}
              name="3DSMax (Визуализаторы)"
              description="Обсуждаем Autodesk 3DS Max и другие продукты компании"
            />
            <LinkCard
              href="https://t.me/ue_chat"
              icon={<SportsEsportsRounded />}
              name="Unreal Engine Chat"
              description="Обсуждаем игровой движок Unreal Engine"
            />
            <LinkCard
              href="https://t.me/houdinitut"
              icon={<WhatshotRounded />}
              name="Houdini Chat"
              description="Обсуждаем SideFX Houdini"
            />
            <LinkCard
              href="https://t.me/neuralnetworkstut"
              icon={<AssistantRounded />}
              name="Neural Networks Chat"
              description="Обсуждаем нейросети"
            />
            <LinkCard
              href="https://t.me/friendlyfrontendchat"
              icon={<WebRounded />}
              name="Friendly Frontend Chat"
              description="Обсуждаем фронтенд-разработку сайтов"
            />
            <LinkCard
              href="https://t.me/figmachat"
              icon={<ArchitectureRounded />}
              name="Фигма-чат"
              description="Обсуждаем работу в сервисе Figma"
            />
          </div>
          <Divider>Вакансии и работа</Divider>
          <AdditionDanger>
            Если вас просят перевести гарантийный взнос, деньги на &quot;площадку для
            фрилансеров&quot; или оформить банковскую карту для &quot;зарплаты&quot; -
            сразу прекращайте диалог. Остерегайтесь мошенников!{" "}
            <a
              href="https://www.sberbank.ru/ru/person/kibrary/articles/moshenniki-atakuyut-frilanserov-kak-ne-popast-v-lovushku"
              title={`Памятка от Сбербанка: "Как не попасться в ловушку мошенников на фрилансе"`}
            >
              Подробнее...
            </a>
          </AdditionDanger>
          <div className="links-grid">
            <LinkCardNoDescription
              href="https://t.me/ru_montage_pins"
              icon={<WorkRounded />}
              name="ru_montage_pins"
            />
            <LinkCardNoDescription
              href="https://t.me/prodjob"
              icon={<WorkRounded />}
              name="Работа видеопродакшн"
            />
            <LinkCardNoDescription
              href="https://t.me/kinopeople"
              icon={<WorkRounded />}
              name="Работники Кино Pro"
            />
            <LinkCardNoDescription
              href="https://t.me/video_academy"
              icon={<WorkRounded />}
              name="VA Видео для бизнеса"
            />
            <LinkCardNoDescription
              href="https://t.me/platform_film"
              icon={<WorkRounded />}
              name="ПЛОЩАДКА"
            />
            <LinkCardNoDescription
              href="https://t.me/tochnop"
              icon={<WorkRounded />}
              name="Точно продюсер"
            />
            <LinkCardNoDescription
              href="https://t.me/vdhl_good"
              icon={<WorkRounded />}
              name="ВДХЛ - Вакансии для хороших людей"
            />
            <LinkCardNoDescription
              href="https://t.me/KAADchanel"
              icon={<WorkRounded />}
              name="КААД"
            />
            <LinkCardNoDescription
              href="https://t.me/+3vHv2p2bRdRlOTMy"
              icon={<WorkRounded />}
              name="Design Career"
            />
            <LinkCardNoDescription
              href="https://t.me/s/motionhunter"
              icon={<WorkRounded />}
              name="Motion designer hunter"
            />
            <LinkCardNoDescription
              href="https://t.me/s/job_2dfa"
              icon={<WorkRounded />}
              name="Вакансии для 2D-аниматоров"
            />
            <LinkCardNoDescription
              href="https://t.me/s/fordesigner"
              icon={<WorkRounded />}
              name="Jobs for Designers"
            />
            <LinkCardNoDescription
              href="https://t.me/s/CGWorkHub"
              icon={<WorkRounded />}
              name="CGWorkHub"
            />
            <LinkCardNoDescription
              href="https://t.me/s/jobforjunior"
              icon={<WorkRounded />}
              name="Job for Junior"
            />
            <LinkCardNoDescription
              href="https://t.me/s/dprofilejob"
              icon={<WorkRounded />}
              name="Dprofile.Работа"
            />
            <LinkCardNoDescription
              href="https://t.me/s/artdesignjob"
              icon={<WorkRounded />}
              name="HSE CHANCE"
            />
            <LinkCardNoDescription
              href="https://t.me/s/freelancetaverna"
              icon={<WorkRounded />}
              name="Фриланс Таверна"
            />
            <LinkCardNoDescription
              href="https://t.me/s/workindesign"
              icon={<WorkRounded />}
              name="Work for Designers"
            />
            <LinkCardNoDescription
              href="https://t.me/s/designer_ru"
              icon={<WorkRounded />}
              name="ИЩУ_ДИЗАЙНЕРА"
            />
          </div>
          <Divider>Чёрные списки</Divider>
          <div className="links-grid">
            <LinkCardNoDescription
              href="https://t.me/cgblacklist"
              icon={<BlockRounded />}
              name="CG Blacklist"
            />
            <LinkCardNoDescription
              href="https://t.me/kinostop"
              icon={<BlockRounded />}
              name="Чёрный список кино индустрии"
            />
            <LinkCardNoDescription
              href="https://t.me/AEnedozakaz"
              icon={<BlockRounded />}
              name="AEНедозаказчики"
            />
            <LinkCardNoDescription
              href="https://t.me/Brickspacer_blacklist"
              icon={<BlockRounded />}
              name="Brickspacer Blacklist"
            />
            <LinkCardNoDescription
              href="https://t.me/moshenniki_frilans"
              icon={<BlockRounded />}
              name="Мошенники в фрилансе"
            />
          </div>
          <Footer
            title="aechat"
            initialYear={2024}
          />
        </div>
      </motion.main>
    </div>
  );
};
export default Links;
