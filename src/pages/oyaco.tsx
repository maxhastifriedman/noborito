import { NextPage } from 'next';
import styles from '../styles/oyaco.module.css'; // Reuse the same styles for now

const Oyako: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">親子クラス</h1>
      <p className="text-gray-600">
        親子で楽しむ英語クラスです。このクラスでは、親子が一緒に英語を学び、楽しいアクティビティを通じて絆を深めます。
      </p>
    </div>
  );
};

export default Oyako;
