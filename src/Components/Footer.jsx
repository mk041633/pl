import { React} from 'react'


function Footer() {
  
  return (
    <div>
      <div className="flex flex-col sm:text-xs lg:text-base justify-evenly sm:flex-row mt-7 px-10  md:px-8 lg:px-10 xl:px-12 2xl:px-28 py-4 sm:py-11 bg-blue-100 font-light">
        <div className="text-start sm:w-1/2">
          <ul>
            <li className="font-semibold  lg:pb-3 mt-5 md:mt-0 sm:mb-0 ">Контакты</li>
            <li>primetel@telecom.com</li>
            <li>+79253443882</li>
            <li>+79253443881</li>
          </ul>
        </div>
        <div className="text-start sm:w-1/2 sm:pl-6">
          <ul>
            <li className="font-semibold lg:pb-3 mt-5 md:mt-0 sm:mb-0">О компании</li>
            <li>Про нас</li>
            <li>
              <a href="/services">Сервисы</a>
            </li>
          </ul>
        </div>
        <div className="text-start sm:w-1/2 sm:pl-6">
          <ul>
            <li className="font-semibold lg:pb-3 mt-5 md:mt-0 sm:pb-0">Соглашения</li>
            <li>Условия и положения</li>
            <li>Возврат и отмена</li>
            <li>Основные ценности</li>
          </ul>
        </div>
        <div className="mt-5 md:mt-0 sm:w-1/2 sm:pr-6">
          <span className="flex items-center">
            <img src="images/businesslogo.png" alt="logo" className="h-6" />
            <div className="flex font-sans  my-1">
              <h4 className="text-2xl lg:text-3xl text-red-700 font-semibold ">PRIME</h4>
              <h4 className="text-2xl lg:text-3xl text-blue-900">TEL</h4>
            </div>
          </span>
          <p className="font-light text-start  lg:mt-5">
          Стремясь к совершенству, мы стремимся предоставлять наилучшие услуги в соответствии с вашими потребностями. Ознакомьтесь с нашим ассортиментом решений и ощутите разницу в работе с надежным партнером.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
