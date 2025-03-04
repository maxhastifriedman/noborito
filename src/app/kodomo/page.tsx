import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/classes.module.css';

const Sotoasobi: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${styles.serviceItem} flex flex-col sm:flex-row items-center sm:items-start`}>
        {/* Image Section */}
        <div className="w-full sm:w-1/3 flex justify-center">
          <Image
            src="/images/sports.webp"
            alt="Outdoor Activity Class"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] h-auto"
          />
        </div>
        {/* Text Section */}
        <div className={`${styles.serviceDescription} w-full sm:w-2/3 sm:pl-6 text-center sm:text-left`}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">外遊びクラス</h1>
          <p className="text-gray-700">
            自然の中で英語を学ぶクラスです。外遊びを通じて、楽しく英語を学び、体を動かしながら実践的な英語スキルを身につけます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sotoasobi;
