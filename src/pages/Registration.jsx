import { ChevronLeft, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { languages } from "../component/languages";
import translations from "../component/Translation";

function Registration() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const t = translations[currentLang] || translations["en"];
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    promo: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Form submitted successfully!");
      console.log("Form Data:", formData);
    }
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setIsLanguageOpen(false);
  };

  const getCurrentLanguageName = () => {
    const allLangs = [...languages[0], ...languages[1]];
    const currentLangObj = allLangs.find((lang) => lang.code === currentLang);
    return currentLangObj ? currentLangObj.name : "English";
  };

  return (
    <>
      <Toaster />
      <div
        className="min-h-screen p-4"
        dir={currentLang === "ar" || currentLang === "fa" ? "rtl" : "ltr"}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8 max-w-xl mx-auto">
          <div className="flex items-center">
            <ChevronLeft className="w-6 h-6 mr-1 text-blue-400 stroke-2" />
            <span className="text-md border-b-2 border-blue-300">
              {t.toHome}
            </span>
          </div>
          <div className="relative">
            <button
              className="flex items-center text-sm text-gray-600 hover:text-gray-800"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <Globe className="w-4 h-4 mr-2" />
              {getCurrentLanguageName()}
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {isLanguageOpen && (
              <div className={`absolute ${currentLang === "ar" || currentLang === "fa" ? "left-0" : "right-0"} mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 grid grid-cols-2 min-w-lg p-2`}>
                <div className="py-2 px-4">
                  {languages[0].map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full text-left py-2 text-sm "
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
                <div className="py-2 px-4">
                  {languages[1].map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full text-left py-2 text-sm  "
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-xl mx-auto bg-white rounded-lg p-8 ">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="text-2xl text-gray-600 flex">
              <svg
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                className=" w-10 mt-1"
                clipRule="evenodd"
                viewBox="0 0 100 66"
              >
                <g transform="scale(0.56504 0.66298)">
                  <path fill="none" d="M0 0h410.59v99.55H0z"></path>
                  <g>
                    <path
                      fill="#002dda"
                      d="M71.006 4.544c18.717 6.815 31.528 21.323 31.528 38.07 0 16.756-12.815 31.264-31.532 38.072C52.29 73.878 39.47 59.37 39.47 42.615c0-16.752 12.82-31.26 31.536-38.07Z"
                    ></path>
                    <path
                      fill="#009cff"
                      d="M71.003 4.542C77.489 1.581 84.888 0 92.713 0c27.201 0 49.283 19.095 49.283 42.617 0 23.519-22.082 42.614-49.283 42.614-7.825 0-15.224-1.578-21.714-4.543 16.357-6.811 27.564-21.319 27.564-38.07 0-16.753-11.203-31.26-27.56-38.075Z"
                    ></path>
                    <path
                      fill="#004ee7"
                      d="M70.997 80.685c-6.49 2.965-13.893 4.546-21.715 4.546H20.197L7.106 96.551c-1.189 1.029-2.978 1.336-4.535.78C1.015 96.773 0 95.46 0 94.002V5.5C0 2.463 2.848 0 6.36 0h43.08C57.21.02 64.558 1.602 71 4.543c-16.361 6.812-27.568 21.32-27.568 38.07 0 16.756 11.207 31.264 27.565 38.072Z"
                    ></path>
                    <path
                      fill="#fff"
                      className="logo__letter-1"
                      d="M223.772 70.316h-7.362V46.441l.016.287c0-12.394 13.525-22.308 26.697-15.534l-3.255 5.518c-7.168-3.735-16.096-.354-16.096 8.81v24.794ZM341.537 65.425c-4.566 3.695-10.749 5.964-17.55 5.964-14.05 0-25.46-9.682-25.46-21.61 0-11.927 11.41-21.613 25.46-21.613 6.801 0 12.984 2.269 17.55 5.964V14.263h7.903v55.993h-7.903v-4.831Zm-17.55.328c-9.962 0-17.797-7.003-17.797-15.974 0-8.974 7.835-15.877 17.796-15.877 9.962 0 17.628 6.903 17.628 15.877 0 8.97-7.666 15.974-17.628 15.974ZM365.534 52.717c.645 3.841 2.674 6.936 6.084 9.289 3.462 2.39 7.761 3.59 12.905 3.59 6.004 0 10.884-1.657 14.645-4.96l4.273 4.258c-2.174 2.056-4.838 3.634-7.988 4.739-3.349 1.172-7.087 1.758-11.217 1.758-5.257 0-9.92-.918-13.99-2.758-4.046-1.83-7.175-4.387-9.385-7.677-2.215-3.298-3.32-7.023-3.32-11.172 0-4.098 1.075-7.798 3.228-11.096 2.149-3.29 5.104-5.85 8.87-7.68 3.776-1.834 8.033-2.75 12.775-2.75 4.74 0 8.965.914 12.674 2.747 3.703 1.83 6.595 4.39 8.68 7.677 2.091 3.302 3.134 7.085 3.134 11.347 0 .484-.044 1.094-.13 1.833h-41.356c.023.205.046.407.078.605.012.084.025.168.04.25Zm33.806-5.978-.004-.043c-.532-3.785-2.344-6.875-5.427-9.277-3.085-2.405-6.915-3.613-11.495-3.613-4.578 0-8.409 1.194-11.494 3.57-3.083 2.374-4.896 5.48-5.428 9.322l-.002.041h33.85Z"
                    ></path>
                    <path
                      fill="#fff"
                      className="logo__letter-1"
                      d="m223.573 29.33.198 8.144v32.843h-7.36l.087-40.986h7.075ZM282.626 64.54l-.81 1.275c-1.463 1.806-3.682 3.05-6.29 4.026-2.773 1.034-6.062 1.549-9.863 1.549-5.528 0-9.959-1.127-13.282-3.403-3.282-2.249-4.921-5.202-4.921-8.862s1.56-6.797 4.69-9.02c3.174-2.254 8.223-3.533 15.133-3.533h14.705c.266 0 .479-.183.479-.408v-1.172c0-3.492-1.427-6.532-3.804-8.39-2.362-1.846-5.834-2.788-10.426-2.788-3.04 0-6.014.428-8.925 1.283-2.706.793-4.909 2.373-6.835 3.667l-3.45-5.283c2.495-1.653 5.45-2.925 8.865-3.818 3.578-.937 7.375-1.404 11.393-1.404 6.846 0 12.095 1.415 15.735 4.28 3.631 2.855 5.421 7.118 5.421 12.777v25h-7.84l.025-5.775Zm-21.124-12.168c-3.98.998-5.944 3.163-5.944 6.429 0 2.304 1.052 4.118 3.148 5.444 2.04 1.29 4.865 1.948 8.481 1.948 3.593 0 6.693-.685 9.306-2.049 2.63-1.373 4.755-3.32 5.94-5.842a.348.348 0 0 0 .034-.152v-6.01a.367.367 0 0 0-.017-.109h-17.72c-1.827 0-2.414.207-3.228.34ZM180.65 13.423h7.741V70.28h-7.741z"
                    ></path>
                    <path
                      fill="#fff"
                      className="logo__letter-1"
                      d="M208.776 13.423v6.598h-48.51v-6.598z"
                    ></path>
                  </g>
                </g>
              </svg>
              Trade
            </div>
          </div>

          {/* Sign In Form */}
          <h1 className="text-3xl font-bold text-center mb-6">
            {t.registration}
          </h1>

          <div className="text-center mb-6 flex flex-col justify-center items-center gap-3 sm:flex-row">
            <span className="text-gray-600">{t.alreadyRegistered}?</span>
            <Link
              to="/login"
              className="w-fit block text-black/80 border-b border-light-blue pb-0.5 ml-2 "
            >
              {t.signIn}
            </Link>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <div className="relative z-0">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  {t.email}*
                </label>
              </div>
            </div>

            <div>
              <div className="relative z-0">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer ${currentLang === "ar" || currentLang === "fa" ? "left-2" : "right-2"}`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  {t.password} *
                </label>
                {/* Toggle Button */}
                <button
                  type="button"
                  className={`absolute top-4 text-gray-600 ${currentLang === "ar" || currentLang === "fa" ? "left-2" : "right-2"}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <>
                      {/* Open Eye Icon (Password Visible) */}
                      <svg viewBox="0 0 16 13" className="w-6">
                        <path
                          fill="#000"
                          d="M8 11.5c-1.56 0-3.07-.61-4.5-1.8c-1.17-.99-1.99-2.13-2.37-2.73a.87.87 0 0 1 0-.93c.38-.6 1.2-1.75 2.37-2.73c2.84-2.39 6.15-2.39 8.99 0c1.17.99 1.99 2.13 2.37 2.73c.18.29.18.64 0 .93c-.38.6-1.2 1.75-2.37 2.73c-1.42 1.2-2.93 1.8-4.5 1.8Zm-5.97-5c.37.57 1.1 1.57 2.12 2.43c2.47 2.08 5.23 2.08 7.7 0c1.02-.86 1.75-1.87 2.12-2.43c-.37-.57-1.1-1.57-2.12-2.43c-2.47-2.08-5.23-2.08-7.7 0c-1.02.86-1.75 1.87-2.12 2.43"
                        ></path>
                        <path
                          fill="#00"
                          d="M8 9a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m0-4c-.83 0-1.5.67-1.5 1.5S7.17 8 8 8s1.5-.67 1.5-1.5S8.83 5 8 5"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      {/* Closed Eye Icon (Password Hidden) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#000"
                          d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448m-176.34-64c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.1 239.1 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47m235.18-145.4c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.3 227.3 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.8 192.8 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.7 310.7 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.5 343.5 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78"
                        ></path>
                        <path
                          fill="#000"
                          d="M256 160a96 96 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160m-90.22 73.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38Z"
                        ></path>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
            <div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="promo"
                  value={formData.promo}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                />
                <label
                  htmlFor="Enter promo code (if you have one)"
                  className="absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Enter promo code (if you have one) *
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row items-center justify-between mb-10">
              <label className="flex items-start text-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mr-2 mt-1.5"
                />
                <span className="text-gray-600">
                  {" "}
                  {t.agreeToTerms}:{" "}
                  <span className="underline">{t.agreement}</span>
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-light-blue to-dark-blue text-white py-3 rounded-lg transition-colors max-w-[300px] mx-auto font-semibold"
              >
                {t.registerButton}
              </button>
            </div>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="text-center text-gray-600 mb-4">
              {t.orSignUpWith}
            </div>
            <div className="flex justify-center">
              <div className="flex max-w-[300px] mx-auto gap-4 justify-center sm:mx-20">
                <button className="px-3 md:px-6  flex items-center justify-center bg-[#0099fa]/80 py-1 p-1.5 text-white font-semibold rounded-lg  transition-colors">
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </button>
                <button className="px-3 md:px-6 flex items-center justify-center py-1 p-1.5 text-gray-600 font-semibold  bg-gray-300 rounded-lg transition-colors">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full md:max-w-md  mx-auto mt-8">
          <div className="flex flex-wrap items-center text-center justify-center gap-4 text-sm text-gray-600 mb-4">
            <span className="border-b border-gray-500 text-gray-400">
              {t.contacts}
            </span>
            <span className="border-b border-gray-500 text-gray-400">
              {t.amlPolicy}
            </span>
            <span className="border-b border-gray-500 text-gray-400">
              {t.paymentPolicy}
            </span>
            <span className="border-b border-gray-500 text-gray-400">
              {t.terms}
            </span>
            <span className="border-b border-gray-500 text-gray-400">
              {t.privacy}
            </span>
            <span className="border-b border-gray-500 text-gray-400">
              {t.infoDisclosure}
            </span>
          </div>

          <div className="flex justify-center items-center text-sm text-gray-500">
            <span>{t.copyright} PO TRADE</span>
            <div className="ml-2 flex items-center">
              <span className="text-xl">21+</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
