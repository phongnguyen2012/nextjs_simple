import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head>
      <title>Coder PhongNguyen | Home</title>
      <meta name="keywords" content="coders" />
    </Head>
      <div>
      <h1 className="styles.title">Home Page</h1>
            <p className="styles.text">
            Theo kế hoạch, giữa năm 2023 tuyến đường được giao 70% mặt bằng và toàn bộ sau đó 6 tháng. 
            Tuy nhiên, theo Chủ tịch UBND TP HCM, các quận huyện dự án đi qua cần phấn đấu hoàn thành sớm hơn kế hoạch trên, 
            với mục tiêu bàn giao toàn bộ mặt bằng cho dự án vào cuối quý 3 năm sau, tức vượt tiến độ ba tháng.
            </p>
            <p>
            Vành đai 3 dài hơn 76 km, đi qua TP HCM, Bình Dương, Đồng Nai và Long An. 
            Trong đó địa phận TP HCM, tuyến dài hơn 47 km, đi qua TP Thủ Đức và các huyện Củ Chi, Hóc Môn, Bình Chánh.
            </p>
            <Link href="/coders/" >
              <a className="btn" >See All Coder</a>
            </Link>
           
            <style jsx>
              {`
                .btn {
                  display: block;
                  width: 150px;
                  padding: 8px 0;
                  margin: 20px auto;
                  background: #ffbf49;
                  border-radius: 4px;
                  color: black;
                  text-align: center;
                  }

              `}
           
            </style>
        </div>     
    </>

  )
}
