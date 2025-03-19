import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Snowfall from "react-snowfall";
import bgImage from "../../public/wallpaper1.png";

export default function Home() {
  const text = "pr_gram";
  const text2 = "Sk143 | Tu85  𝓣𝓾𝓬𝓶𝓬 66";

  return (
    <>
      <div className=" relative w-screen h-screen overflow-hidden    ">
        <div className=" absolute top-0 left-0 w-screen h-screen -z-99 overflow-hidden ">
          <div className=" absolute w-screen h-screen top-0 left-0 bg-black opacity-30 z-0"></div>
          <div className="w-screen h-screen absolute top-0 left-0 -z-10 sm:hidden">
            <Snowfall snowflakeCount={5} />
          </div>
          <div className="w-screen h-screen absolute top-0 left-0 -z-10 max-sm:hidden">
            <Snowfall snowflakeCount={20} />
          </div>
          <Image
            src={bgImage}
            alt="background"
            fill
            priority={true}
            className=" object-cover absolute -z-20"
            placeholder="blur"
            quality={100}
          />
        </div>
        <div className=" flex justify-center items-center h-[90%] sm:h-full relative z-[99]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.1,
            }}
            className=" w-[300px] sm:w-[500px] md:w-[700px]  sm:py-8 py-4 bg-white bg-opacity-30 rounded-2xl transition-all ease-linear duration-300"
          >
            <div className=" w-full flex justify-center">
              <div>
                <div className=" flex justify-center">
                  <Image
                    className=" object-cover aspect-square rounded-full"
                    src="/slyveon.jpg"
                    alt="profile"
                    width={100}
                    height={100}
                    quality={100}
                  ></Image>
                </div>
                <h1 className="overflow-hidden text-2xl font-bold leading-8 text-white text-center">
                  {text.match(/./gu)!.map((char, index) => (
                    <span
                      className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                      key={`${char}-${index}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
                <h1 className="overflow-hidden text-lg font-medium leading-8 text-white text-center">
                  {text2.match(/./gu)!.map((char, index) => (
                    <span
                      className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                      key={`${char}-${index}`}
                      style={{ animationDelay: `${index * 0}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
            <div className=" mx-4 my-2 ">
              <div className=" flex justify-center text-lg">
                <div className=" w-4/5">
                  <hr />
                  <motion.div
                    className="w-full text-center bg-white bg-opacity-100 rounded-lg my-3"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                  >
                    <Link
                      href="https://www.instagram.com/program_na/"
                      className="w-full block py-2"
                    >
                      Instagram
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full text-center bg-white bg-opacity-100 rounded-lg my-3"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                  >
                    <Link
                      href="https://open.spotify.com/playlist/4UM1jeGGaljaejbiIz2NDH?si=0f8d0527d5b64561"
                      className="w-full block py-2"
                    >
                      Spotify Playlist
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full text-center bg-white bg-opacity-100 rounded-lg my-3"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                  >
                    <Link href="https://www.youtube.com/@pr_gram" className="w-full block py-2">
                      Youtube
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full text-center bg-white bg-opacity-100 rounded-lg my-3"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                  >
                    <Link href="https://www.twitch.tv/pr_gram" className="w-full block py-2">
                      Twitch
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full text-center bg-white bg-opacity-100 rounded-lg my-3"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                  >
                    <Link href="https://discord.gg/M9DymhWa" className="w-full block py-2">
                      Discord
                    </Link>
                  </motion.div>
                  <motion.div
                    className="w-full text-center bg-white bg-opacity-100 rounded-lg my-3"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                  >
                    <Link href="https://github.com/pr1gram" className="w-full block py-2">
                      Github
                    </Link>
                  </motion.div>
                  <hr className="" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
