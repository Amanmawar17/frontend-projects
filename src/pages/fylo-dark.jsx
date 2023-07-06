import bgquotes from "/bg-quotes.png";
import intro from "/illustration-intro.png";
import profile1 from "/profile-1.jpg";
import profile2 from "/profile-2.jpg";
import profile3 from "/profile-3.jpg";
import productive from "/illustration-stay-productive.png";

const Fylo = () => {
  return (
    <>
      <div className="bg-[line] text-[#ffffff] font-['Open sans']">
        <nav className="flex justify-between bg-[#1c2431] font-['Raleway'] p-4">
          <svg width="176" height="52" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.015l29.754 13.591L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.564 8.564 0 0 0-2.285-5.892 7.675 7.675 0 0 0-2.473-1.768 7.259 7.259 0 0 0-3.015-.636 7.259 7.259 0 0 0-3.015.636 7.674 7.674 0 0 0-2.473 1.768 8.565 8.565 0 0 0-2.285 5.893 8.564 8.564 0 0 0 2.285 5.893 7.674 7.674 0 0 0 2.473 1.767 7.258 7.258 0 0 0 3.015.637 7.258 7.258 0 0 0 3.015-.637 7.675 7.675 0 0 0 2.473-1.767 8.563 8.563 0 0 0 2.285-5.893zm6.784 0c0 2.044-.377 3.937-1.13 5.681a13.849 13.849 0 0 1-3.11 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.659 14.659 0 0 1-4.617-3.04 14.116 14.116 0 0 1-3.11-4.55c-.753-1.744-1.13-3.622-1.13-5.633 0-1.98.385-3.842 1.154-5.586a14.718 14.718 0 0 1 3.133-4.573 14.457 14.457 0 0 1 4.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.32 1.272 2.356 2.789 3.11 4.549.753 1.76 1.13 3.645 1.13 5.657zm-31.422 13.483a9.087 9.087 0 0 1-1.814.613 9.217 9.217 0 0 1-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.347 6.347 0 0 1-2.426-1.297c-.69-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.54-.236 2.262-.707v5.562zM130.02 12.55l-12.249 32.386c-.91 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603a8.4 8.4 0 0 1-1.036-.071 7.784 7.784 0 0 1-1.083-.212l-2.262-6.317a8.974 8.974 0 0 0 1.65.59 6.61 6.61 0 0 0 1.6.211c1.069 0 2.042-.243 2.922-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z" />
            </g>
          </svg>
          <ol className="flex justify-betweens items-center">
            <li className="p-3 hover:underline">Features</li>
            <li className="p-3 hover:underline">Team</li>
            <li className="p-3 hover:underline">Sign in</li>
          </ol>
        </nav>
        <div className="flex justify-center items-center bg-[#1c2431]">
          <img className="h-2/3 p-2 m-2" src={intro} alt="intro image" />
        </div>
        <div className="home flex flex-col justify-center items-center text-center text-[#fff] bg-[#181f2a]">
          <h1 className="font-[Raleway] text-4xl p-2">
            All your files in one secure location, <br /> accessible anywhere.
          </h1>
          <p className="p-2 my-4">
            Fylo stores all your most important files in one secure location.{" "}
            <br /> Access them wherever you need, share and collaborate with{" "}
            <br /> friends family, and co-workers.
          </p>
          <button className="w-80 bg-[#339ecc] rounded-full p-3 text-lg font-[Open sans]">
            Get Started
          </button>
        </div>

        {/* Features Section */}
        <section className="features grid md:grid-cols-2 grid-cols-1 place-items-evenly gap-4 h-screen text-center bg-[#181f2a]">
          <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
            <svg width="83" height="78" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M2.476 53.466h71.117v-7.983H2.476v7.983zm49.237 11.977h3.943v3.529H20.413v-3.529h3.942c.656 0 1.185-.529 1.185-1.183v-8.427h24.988v8.427c0 .654.53 1.183 1.185 1.183zM2.476 43.116h71.117V2.95H2.476v40.165zM1.29.585C.635.585.105 1.114.105 1.768V54.65c0 .655.53 1.184 1.185 1.184h21.88v7.243h-3.943c-.655 0-1.185.532-1.185 1.184v5.895c0 .652.53 1.184 1.185 1.184h37.615c.654 0 1.185-.532 1.185-1.184V64.26c0-.652-.531-1.184-1.185-1.184h-3.944v-7.243h21.88c.655 0 1.186-.53 1.186-1.184V1.77c0-.655-.531-1.184-1.185-1.184H1.29z"
                  fill="#62E0D9"
                />
                <path
                  d="M36.412 47.92c-.654 0-1.185.53-1.185 1.184a1.185 1.185 0 0 0 2.37 0c0-.653-.531-1.184-1.185-1.184"
                  fill="#62E0D9"
                />
                <g transform="translate(55.377 23.07)" stroke="#62E0D9">
                  <rect
                    strokeWidth="1.641"
                    fill="#181F2B"
                    x=".821"
                    y=".821"
                    width="25.621"
                    height="52.795"
                    rx="2.462"
                  />
                  <path
                    strokeWidth="1.458"
                    fill="#FFF"
                    d="M.729 6.646h25.803v1H.729zM.729 44.515h25.803v1H.729z"
                  />
                  <ellipse
                    strokeWidth="1.01"
                    cx="13.038"
                    cy="48.519"
                    rx="1.185"
                    ry="1.183"
                  />
                </g>
                <g>
                  <path
                    d="M45.4 15.969h-.197l-5.235 2.07-5.927-2.07-5.531 1.874c-.198.098-.395.197-.395.493v14.89c0 .297.197.494.494.494h.197l5.235-2.071 5.927 2.07 5.531-1.873c.198-.099.395-.296.395-.493V16.462c0-.296-.197-.493-.494-.493zM39.968 30.76l-5.927-1.997V17.448l5.927 1.997v11.316z"
                    fill="#62E0D9"
                  />
                  <path
                    d="M30.485 15.969c-1.32 0-2.37.917-2.37 2.07 0 1.54 2.37 3.847 2.37 3.847s2.371-2.308 2.371-3.846c0-1.154-1.05-2.071-2.37-2.071zm0 2.958c-.51 0-.911-.361-.911-.821 0-.46.4-.822.911-.822s.912.361.912.822c0 .46-.401.821-.912.821z"
                    fill="#FFF"
                  />
                </g>
              </g>
            </svg>
            <h1 className="text-lg">Access your files, anywhere</h1>
            <p className="my-2">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
            <svg width="70" height="88" xmlns="http://www.w3.org/2000/svg">
              <g
                stroke="#62E0D9"
                strokeWidth="3.064"
                fill="none"
                fillRule="evenodd"
              >
                <path d="M43.703 35.501l-12.23 12.474-8.999-9.177-4.499 4.589 13.497 13.766L52.08 36.137l-4.5-4.589z" />
                <path d="M56.916 9.85c-5.342 0-10.653-1.136-15.482-3.484-2.313-1.113-4.679-2.533-6.724-4.302-2.045 1.769-4.411 3.189-6.725 4.302C23.157 8.714 17.847 9.85 12.504 9.85H1.914v40.59c0 7.11 2.817 13.945 7.827 18.893 7.356 7.25 24.97 16.674 24.97 16.674s17.612-9.424 24.968-16.674c5.01-4.948 7.827-11.784 7.827-18.893V9.85h-10.59z" />
                <path d="M58.94 24.532v26.249c0 4.742-1.903 9.34-5.219 12.615-4.612 4.547-15.127 10.77-19.01 13-3.886-2.233-14.41-8.463-19.017-13.004-3.314-3.272-5.214-7.869-5.214-12.611V18.927h2.024c6.707 0 13.334-1.499 19.167-4.333a44.31 44.31 0 0 0 3.04-1.61c.972.565 2 1.11 3.064 1.623 5.814 2.826 12.434 4.32 19.141 4.32h2.024v5.605z" />
              </g>
            </svg>
            <h1 className="text-lg">Security you can trust</h1>
            <p className="my-2">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>

          <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
            <svg width="86" height="71" xmlns="http://www.w3.org/2000/svg">
              <g
                stroke="#62E0D9"
                strokeWidth="1.3"
                fill="none"
                fillRule="evenodd"
                strokeLinejoin="round"
              >
                <path
                  d="M33.897 11.338v2.027-2.027zm0 40.551v2.028-2.028zm20.31-18.248h-2.031 2.031zm-40.62 0h-2.032 2.031zm19.294 8.11c-.78 0-1.56-.296-2.153-.89l-13.08-13.057 4.308-4.3L32.881 34.41 60.176 7.16l4.31 4.3-29.45 29.4a3.04 3.04 0 0 1-2.155.89zm23.154-30.417C50.283 5.104 42.039 1.2 32.88 1.2 15.495 1.2 1.4 15.271 1.4 32.627s14.095 31.428 31.481 31.428c17.386 0 31.481-14.072 31.481-31.428 0-6.018-1.694-11.64-4.63-16.417l-3.697-4.876zM51.7 15.616a25.346 25.346 0 0 0-18.82-8.333c-14.022 0-25.388 11.346-25.388 25.344 0 13.999 11.366 25.345 25.388 25.345 14.022 0 25.388-11.346 25.388-25.345 0-4.329-1.087-8.402-3.002-11.966l-3.566-5.045z"
                  strokeLinecap="round"
                />
                <path d="M55.368 40.484c0 2.48-2.015 4.49-4.498 4.49a4.494 4.494 0 0 1-4.497-4.49c0-2.48 2.015-4.49 4.497-4.49a4.494 4.494 0 0 1 4.498 4.49z" />
                <path
                  d="M50.87 44.974c-1.898 0-3.612.583-4.839 1.154a3.34 3.34 0 0 0-1.907 3.033v7.037a2.248 2.248 0 0 0 2.249 2.245v8.979a2.247 2.247 0 0 0 2.249 2.245h4.497a2.247 2.247 0 0 0 2.249-2.245v-8.98a2.248 2.248 0 0 0 2.248-2.244V49.16a3.34 3.34 0 0 0-1.907-3.033c-1.226-.57-2.94-1.154-4.839-1.154z"
                  strokeLinecap="round"
                />
                <path d="M68.86 40.484c0 2.48-2.014 4.49-4.498 4.49a4.493 4.493 0 0 1-4.497-4.49c0-2.48 2.014-4.49 4.497-4.49a4.493 4.493 0 0 1 4.497 4.49z" />
                <path
                  d="M64.362 44.974c-1.898 0-3.612.583-4.839 1.154a3.34 3.34 0 0 0-1.907 3.033v7.037a2.247 2.247 0 0 0 2.249 2.245v8.979a2.248 2.248 0 0 0 2.249 2.245h4.497a2.247 2.247 0 0 0 2.248-2.245v-8.98a2.247 2.247 0 0 0 2.25-2.244V49.16a3.34 3.34 0 0 0-1.908-3.033c-1.226-.57-2.941-1.154-4.839-1.154z"
                  strokeLinecap="round"
                />
                <path d="M82.351 40.484c0 2.48-2.013 4.49-4.497 4.49a4.493 4.493 0 0 1-4.497-4.49c0-2.48 2.013-4.49 4.497-4.49a4.493 4.493 0 0 1 4.497 4.49z" />
                <path
                  d="M77.854 44.974c-1.898 0-3.612.583-4.839 1.154a3.34 3.34 0 0 0-1.907 3.033v7.037a2.247 2.247 0 0 0 2.249 2.245v8.979a2.248 2.248 0 0 0 2.248 2.245h4.498a2.247 2.247 0 0 0 2.248-2.245v-8.98a2.247 2.247 0 0 0 2.249-2.244V49.16a3.34 3.34 0 0 0-1.907-3.033c-1.226-.57-2.941-1.154-4.839-1.154z"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <h1>Real-time collaboration</h1>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
            <svg width="91" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M85.588 59C88.025 59 90 57.144 90 54.853V9.236c0-1.526-1.318-2.764-2.941-2.764L85.589 59zM15 12.048v40.047C15 55.908 18.098 59 21.92 59h63.668a4.147 4.147 0 0 1-4.152-4.143V3.762A2.766 2.766 0 0 0 78.668 1h-16.61l-5.536 8.286H17.768A2.766 2.766 0 0 0 15 12.048z"
                  stroke="#62E0D9"
                  strokeWidth="1.405"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.28 27.561v3.201c0 1.061.841 1.92 1.88 1.92h3.13m2.505 0v-.219c0-.679-.264-1.33-.734-1.811l-4.794-4.902a2.48 2.48 0 0 0-1.772-.75h-13.99C26.12 25 25 26.147 25 27.561v26.89c0 1.414 1.121 2.56 2.505 2.56H46.29c1.383 0 2.505-1.146 2.505-2.56v-8.963"
                  fill="#62E0D9"
                />
                <path
                  d="M33.766 49.33v3.84h3.757l11.898-12.164-3.757-3.841-11.898 12.164zm15.655-8.324l1.328-1.358a1.951 1.951 0 0 0 0-2.717l-1.1-1.124a1.85 1.85 0 0 0-2.657 0l-1.328 1.358 3.757 3.841z"
                  stroke="#FFF"
                  strokeWidth=".803"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.01 37.805h12.523m-12.524 3.841h11.272m-11.272 3.842h7.514"
                  stroke="#FFF"
                  strokeWidth=".803"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g>
                  <path
                    d="M32.367 59.432c0 1.972-1.61 3.572-3.596 3.572H3.596c-1.985 0-3.596-1.6-3.596-3.572v-17.86C0 39.6 1.61 38 3.596 38h25.175c1.985 0 3.596 1.6 3.596 3.572v17.86zM10.789 44.55a2.987 2.987 0 0 1-2.997 2.976 2.987 2.987 0 0 1-2.997-2.976 2.987 2.987 0 0 1 2.997-2.977 2.987 2.987 0 0 1 2.997 2.977z"
                    fill="#62E0D9"
                  />
                  <path
                    stroke="#FFF"
                    strokeWidth=".65"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M26.786 58.656L19.737 51.2 16.8 54.307l-4.112-4.349-8.224 8.698"
                  />
                </g>
              </g>
            </svg>
            <h1>Store any type of file</h1>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </section>

        {/* Productive section  */}
        <section className="productive flex justify-evenly p-2 bg-[#181f2a]">
          <img className="w-1/3" src={productive} alt="Be Productive" />
          <div className="flex flex-col justify-start self-center">
            <h1 className="text-4xl font-['Raleway']">
              Stay productive,
              <br /> wherever you are
            </h1>
            <p className="my-2">
              Never let location be an issue when accessing your files. Fylo has
              you <br /> covered for all of your file storage needs.
            </p>
            <p className="my-2">
              Securely share files and folders with friends, family and
              colleagues for live <br /> collaboration. No email attachments
              required.
            </p>
            <div className="flex items-center">
              <span className="hover:text-[#65e2d9] hover:underline">
                See how Fylo works
              </span>
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xlinkxlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <circle id="b" cx="6" cy="6" r="6" />
                  <filter
                    x="-25%"
                    y="-25%"
                    width="150%"
                    height="150%"
                    filterUnits="objectBoundingBox"
                    id="a"
                  >
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(2 2)">
                    <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                    <use fill="#62E0D9" xlinkHref="#b" />
                  </g>
                  <path
                    d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                    fill="#1B2330"
                  />
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="flex relative h-screen bg-[#181f2a]">
          <img
            className="w-14 h-14 absolute top-[12rem] left-[7rem]"
            src={bgquotes}
            alt=""
          />
          <div className=" flex justify-center items-center m-auto w-4/5">
            <div className="card w-1/3 flex flex-col justify-start bg-[#202a3c] rounded-sm m-2 p-4">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="flex justify-start items-center py-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={profile1}
                  alt="profile-1"
                />
                <div className="flex flex-col mx-2">
                  <h1 className="text-lg">Satish Patel</h1>
                  <h3 className="text-md">Founder & CEO, Huddle</h3>
                </div>
              </div>
            </div>
            <div className="card w-1/3 flex flex-col justify-start bg-[#202a3c] rounded-sm m-2 p-4">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="flex justify-start items-center py-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={profile2}
                  alt="profile-2"
                />
                <div className="flex flex-col mx-2">
                  <h1 className="text-lg">Bruce McKenzie</h1>
                  <h3 className="text-md">Founder & CEO, Huddle</h3>
                </div>
              </div>
            </div>
            <div className="card w-1/3 flex flex-col justify-start bg-[#202a3c] rounded-sm m-2 p-4">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="flex  justify-start items-center py-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={profile3}
                  alt="profile-3"
                />
                <div className="flex flex-col mx-2">
                  <h1 className="text-lg">Iva Boyd</h1>
                  <h3 className="text-md">Founder & CEO, Huddle</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="early-access bg-[#181f2a]">
          <div className="card flex justify-center items-center m-auto w-2/3 p-8 rounded shadow-2xl">
            <div className=" flex-col text-center">
              <h1 className="text-4xl my-2">Get early access today</h1>
              <p className="my-2">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any
                <br />
                questions, our support team would be happy to help you.
              </p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col bg-[#0b1523]">
          <div className="flex justify-center items-center m-auto pb-6  bg-[#181f2a] rounded shadow-2xl w-2/3">
            <input
              className="w-96 rounded-xl text-[#339ecc] p-3"
              type="email"
              name=""
              id=""
              placeholder="email@example.com"
            />
            <button className="bg-[#65e2d9] w-56 rounded-xl p-3 mx-4">
              Get Started For Free
            </button>
          </div>
          <div className="p-4 m-2">
            <svg width="176" height="52" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.015l29.754 13.591L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.564 8.564 0 0 0-2.285-5.892 7.675 7.675 0 0 0-2.473-1.768 7.259 7.259 0 0 0-3.015-.636 7.259 7.259 0 0 0-3.015.636 7.674 7.674 0 0 0-2.473 1.768 8.565 8.565 0 0 0-2.285 5.893 8.564 8.564 0 0 0 2.285 5.893 7.674 7.674 0 0 0 2.473 1.767 7.258 7.258 0 0 0 3.015.637 7.258 7.258 0 0 0 3.015-.637 7.675 7.675 0 0 0 2.473-1.767 8.563 8.563 0 0 0 2.285-5.893zm6.784 0c0 2.044-.377 3.937-1.13 5.681a13.849 13.849 0 0 1-3.11 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.659 14.659 0 0 1-4.617-3.04 14.116 14.116 0 0 1-3.11-4.55c-.753-1.744-1.13-3.622-1.13-5.633 0-1.98.385-3.842 1.154-5.586a14.718 14.718 0 0 1 3.133-4.573 14.457 14.457 0 0 1 4.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.32 1.272 2.356 2.789 3.11 4.549.753 1.76 1.13 3.645 1.13 5.657zm-31.422 13.483a9.087 9.087 0 0 1-1.814.613 9.217 9.217 0 0 1-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.347 6.347 0 0 1-2.426-1.297c-.69-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.54-.236 2.262-.707v5.562zM130.02 12.55l-12.249 32.386c-.91 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603a8.4 8.4 0 0 1-1.036-.071 7.784 7.784 0 0 1-1.083-.212l-2.262-6.317a8.974 8.974 0 0 0 1.65.59 6.61 6.61 0 0 0 1.6.211c1.069 0 2.042-.243 2.922-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z" />
              </g>
            </svg>
          </div>

          <div className="flex justify-evenly items-center">
            <div className="flex p-2 my-2 w-2/3">
              <div className="flex w-3/5 items-center">
                <svg
                  className="overflow-visible"
                  width="13"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z"
                    fill="#FFF"
                    fillRule="evenodd"
                  />
                </svg>
                <p className="px-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="">
                <div className="flex items-center p-2 my-2">
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                  <h3 className="mx-2">+1-543-123-4567</h3>
                </div>
                <div className="flex items-center p-2 my-2">
                  <svg
                    width="20"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M-2-4h24v24H-2z" />
                      <path
                        d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
                        fill="#FFF"
                      />
                    </g>
                  </svg>
                  <h3 className="mx-2">example@fylo.com</h3>
                </div>
              </div>
            </div>
            <div className="flex-col m-4">
              <h1>About Us</h1>
              <h1>Jobs</h1>
              <h1>Press</h1>
              <h1>Blog</h1>
            </div>
            <div className="flex-col m-4">
              <h3>Contact Us</h3>
              <h3>Terms</h3>
              <h3>Privacy</h3>
            </div>
            <div className="social-icons flex m-4">
              <button className="w-8 h-8 rounded-full border text-[#ffffff] hover:text-[#65e2d9]">
                <svg
                  className="text-[#ffffff] m-auto w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full border hover:text-[#65e2d9] mx-3">
                <svg
                  className="text-[#ffffff] m-auto w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full border hover:text-[#65e2d9]">
                <svg
                  className="text-[#ffffff] m-auto w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Fylo;