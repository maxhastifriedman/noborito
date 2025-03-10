import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/classes.module.css';

const Oyako: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start`}>
        {/* Image Section */}
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/music.webp"
            alt="Parent-Child Class"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto"
          />
        </div>
        {/* Text Section */}
        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">親子クラス</h1>
          <p className="text-gray-700">
            親子で楽しむ英語クラスです。このクラスでは、親子が一緒に英語を学び、楽しいアクティビティを通じて絆を深めます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Oyako;
