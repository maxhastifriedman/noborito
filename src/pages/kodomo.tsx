import { NextPage } from 'next';
import Image from 'next/image';

const Kodomo: NextPage = () => {
    return (
        <div className="service-item">
            <Image
                src="/images/kodomo-service1.jpg"
                alt="Service 1 Image"
                width={300}
                height={200}
            />
            <div className="service-description">
                <h2>子供向け英語プログラム 1</h2>
                <p>ここに子供向け英語プログラムの説明が入ります。</p>
            </div>
        </div>
    );
};

export default Kodomo;
