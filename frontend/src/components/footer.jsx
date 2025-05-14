export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white flex justify-between text-center pl-4 mt-8 h-25">
      <div className="inline">
        <p className="pt-5">&copy; LavCart</p>
      </div>
      <div className="bg-transparent h-auto mt-0 pt-0 w-60 inline py-8 flex justify-center items-center gap-4 flex-wrap">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-10 h-10 inline justify-items-center m-2 mt-5 flex items-center justify-center rounded-lg bg-white shadow-md group transition-all duration-300">
            <svg
              className="transition-all duration-300 group-hover:scale-110 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                fill="#337FFF"
              />
            </svg>
          </button>
        </a>
        
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="w-10 h-10 inline justify-items-center flex m-2 mt-5 items-center justify-center rounded-lg bg-white shadow-md group transition-all duration-300">
            <svg
              class="rounded-md transition-all duration-300 group-hover:scale-110 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z"
                fill="#006699"
              />
            </svg>
          </button>
        </a>
      </div>
    </footer>
  );
}
