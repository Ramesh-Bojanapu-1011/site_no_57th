import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const team = [
  {
    nameKey: "about.team.0.name",
    roleKey: "about.team.0.role",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    nameKey: "about.team.1.name",
    roleKey: "about.team.1.role",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nameKey: "about.team.2.name",
    roleKey: "about.team.2.role",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    nameKey: "about.team.3.name",
    roleKey: "about.team.3.role",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const achievements = [
  {
    titleKey: "about.achievements.0.title",
    descKey: "about.achievements.0.desc",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="2" />
        <path d="M8 12h8" stroke="#38bdf8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    titleKey: "about.achievements.1.title",
    descKey: "about.achievements.1.desc",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          stroke="#f97316"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    titleKey: "about.achievements.2.title",
    descKey: "about.achievements.2.desc",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" stroke="#8b5cf6" strokeWidth="2" />
      </svg>
    ),
  },
];

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.metaDescription")} />
      </Head>
      <main className="bg-[#f7fafd] dark:bg-[#101624] text-gray-900 dark:text-white caret-transparent">
        <SiteHeader />
        {/* 1. Hero Section */}
        <section className="relative h-screen flex justify-center items-center flex-col bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white text-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 dark:opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/about-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold mb-4">
              {t("about.hero.title")}
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. Company Story - Timeline & Modern Card */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Timeline */}
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-extrabold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                {t("about.timeline.title")}
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-3 top-0 h-full w-1 bg-blue-200 dark:bg-blue-900 rounded-full"></div>
                {[
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                    bg: "bg-blue-500 dark:bg-blue-700",
                    titleKey: "about.timeline.0.title",
                    titleClass: "text-blue-700 dark:text-blue-300",
                    descKey: "about.timeline.0.desc",
                    mb: "mb-10",
                  },
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="12"
                          height="12"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                    bg: "bg-purple-500 dark:bg-purple-700",
                    titleKey: "about.timeline.1.title",
                    titleClass: "text-purple-700 dark:text-purple-300",
                    descKey: "about.timeline.1.desc",
                    mb: "mb-10",
                  },
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2v20M2 12h20"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                    bg: "bg-orange-500 dark:bg-orange-700",
                    titleKey: "about.timeline.2.title",
                    titleClass: "text-orange-600 dark:text-orange-400",
                    descKey: "about.timeline.2.desc",
                    mb: "mb-10",
                  },
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                    bg: "bg-green-500 dark:bg-green-700",
                    titleKey: "about.timeline.3.title",
                    titleClass: "text-green-700 dark:text-green-300",
                    descKey: "about.timeline.3.desc",
                    mb: "",
                  },
                ].map((item, idx) => (
                  <div className={`${item.mb} relative`} key={idx}>
                    <div
                      className={`absolute -left-5 top-0 w-8 h-8 ${item.bg} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <div className="ml-8">
                      <h3 className={`font-bold text-lg ${item.titleClass}`}>
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Modern Image Card */}
            <div className="flex justify-center">
              <div className="relative rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-100 dark:border-blue-900 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-900">
                <Image
                  src="https://i.pinimg.com/1200x/fb/bf/9d/fbbf9d982ffd71e75d4e3a79b5f83cce.jpg"
                  alt={t("about.story.imageAlt")}
                  width={300}
                  height={300}
                  className="object-cover opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-700/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t("about.story.cardTitle")}
                  </h3>
                  <p className="text-white/80 text-base">
                    {t("about.story.cardDesc")}
                  </p>
                </div>
                <span className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold shadow">
                  {t("about.story.since")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Values - Horizontal Stepper */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-10 text-purple-700 dark:text-purple-300 flex items-center justify-center gap-2">
              {t("about.mission.title")}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {[
                {
                  icon: (
                    <span className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2v20M2 12h20"
                          stroke="#38bdf8"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  ),
                  titleKey: "about.mission.steps.0.title",
                  titleClass: "text-blue-700 dark:text-blue-300",
                  descKey: "about.mission.steps.0.desc",
                  connector: "bg-blue-200 dark:bg-blue-900",
                },
                {
                  icon: (
                    <span className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          stroke="#a78bfa"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  ),
                  titleKey: "about.mission.steps.1.title",
                  titleClass: "text-purple-700 dark:text-purple-300",
                  descKey: "about.mission.steps.1.desc",
                  connector: "bg-purple-200 dark:bg-purple-900",
                },
                {
                  icon: (
                    <span className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2v20M2 12h20"
                          stroke="#fb923c"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  ),
                  titleKey: "about.mission.steps.2.title",
                  titleClass: "text-orange-600 dark:text-orange-400",
                  descKey: "about.mission.steps.2.desc",
                  connector: "",
                },
              ].map((step, idx, arr) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center relative md:w-1/3`}
                >
                  {step.icon}
                  <h3 className={`font-bold text-xl mb-2 ${step.titleClass}`}>
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(step.descKey)}
                  </p>
                  {idx < arr.length - 1 && (
                    <span
                      className={`hidden md:block absolute right-0 top-8 w-16 h-2 ${step.connector} rounded-full`}
                    ></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Meet the Team */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300 text-center">
              {t("about.team.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900 rounded-2xl shadow-lg p-6 flex flex-col items-center"
                >
                  <img
                    src={member.img}
                    alt={t(member.nameKey)}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200 dark:border-blue-900"
                  />
                  <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                    {t(member.nameKey)}
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    {t(member.roleKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Achievements */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-300">
              {t("about.achievements.title")}
            </h2>
            <div className="relative flex flex-col items-center mx-auto">
              <div className="absolute md:block hidden left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-orange-300 dark:from-blue-900 dark:via-purple-900 dark:to-orange-900 rounded-full z-0"></div>
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className={`relative z-10 flex flex-col items-center mb-12 last:mb-0 w-full ${idx % 2 === 0 ? " md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"}`}
                  style={{ maxWidth: "400px" }}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full shadow-lg mb-4 ${idx === 0 ? "bg-blue-100 dark:bg-blue-900" : idx === 1 ? "bg-orange-100 dark:bg-orange-900" : "bg-purple-100 dark:bg-purple-900"}`}
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      top: "-20px",
                    }}
                  >
                    {ach.icon}
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 flex flex-col items-center border border-blue-100 dark:border-blue-900">
                    <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-300">
                      {t(ach.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t(ach.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Contact/CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white dark:text-blue-300 tracking-tight">
              {t("about.cta.title")}
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              {t("about.cta.desc")}
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg"
            >
              {t("about.cta.button")}
            </a>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default AboutUs;
