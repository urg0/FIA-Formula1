/* import styles from "../components/Driver/DriverDetails.module.css"; */
import styles from "../components/Teams/TeamDetails.module.css";

export const biography =
  "‘Still I Rise’ – these are the words emblazoned across the back of Lewis Hamilton’s helmet and tattooed across his shoulders, and ever since annihilating expectations with one of the greatest rookie performances in F1 history in 2007, that’s literally all he’s done: risen to the top of the all-time pole positions list ahead of his hero Ayrton Senna, surged into first place in the wins column surpassing the inimitable Michael Schumacher, and then matched the legendary German’s seven world titles.Is he the G.O.A.T? Few would deny that he’s in the conversation – and what’s more he’s got there his way, twinning his relentless speed with a refusal to conform to stereotypes for how a racing driver should think, dress or behave.Respect is hard earned in F1, but Hamilton – now Sir Lewis Hamilton to be precise – has it from every one of his peers. Why? Because they know that whatever the track, whatever the conditions, whatever the situation, when his visor goes down and the lights go out, it’s Hammertime.";

export const DUMMY_NEWS = [
  {
    title: "Can Max Verstappen Win the 3rd World Title?",
    img:
      "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2022/09/12102243/max-verstappen-number-1-photographers-planetf1.jpg",
  },
  {
    title: "Alonso's Aston Martin Story",
    img:
      "https://cdn-1.motorsport.com/images/amp/6zQOVoLY/s6/fernando-alonso-aston-martin-a.jpg",
  },
  {
    title: "Details of amazing contract of Ricciardo.",
    img:
      "https://e0.365dm.com/18/02/2048x1152/skysports-f1-daniel-ricciardo-red-bull_4243128.jpg",
  },
  {
    title: "Redbull's secret:Adrian Newey",
    img:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/mwj5a0dhnotghqduavxu.jpg",
  },
  {
    title: "Sir Lewis Hamilton: 'It's hammer time.'",
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roa110120fea-hamilton-02-1602261061.jpg",
  },
  {
    title: "Seb 🐝 is coming back!",
    img: "https://www.racedepartment.com/attachments/bee_01-jpg.581376/",
  },
];

export const DUMMY_ADVICES = [
  {
    title: "Details of amazing contract of Ricciardo.",
    img:
      "https://e0.365dm.com/18/02/2048x1152/skysports-f1-daniel-ricciardo-red-bull_4243128.jpg",
  },
  {
    title: "Alonso's Aston Martin Story",
    img:
      "https://cdn-1.motorsport.com/images/amp/6zQOVoLY/s6/fernando-alonso-aston-martin-a.jpg",
  },
  {
    title: `Redbull Racing's secret: \nAdrian Newey`,
    img:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/mwj5a0dhnotghqduavxu.jpg",
  },

  {
    title: "Seb 🐝 is coming back!",
    img: "https://www.racedepartment.com/attachments/bee_01-jpg.581376/",
  },
];

export const driverDetails = (
  <ul className={styles.list}>
    <tr className={styles.info2}>
      <th className={styles.infoTitle}>World Championships </th>
      <td className={styles.info}>2</td>
    </tr>
    <tr className={styles.info2}>
      <th className={styles.infoTitle}>Race Wins </th>
      <td className={styles.info}>27</td>
    </tr>
    <tr className={styles.info2}>
      <th className={styles.infoTitle}>Podiums </th>
      <td className={styles.info}>54</td>
    </tr>
    <tr className={styles.info2}>
      <th className={styles.infoTitle}>Points </th>
      <td className={styles.info}>1950.5</td>
    </tr>
    <tr className={styles.info2}>
      <th className={styles.infoTitle}>Date of birth</th>
      <td className={styles.info}>02.04.1997</td>
    </tr>
  </ul>
);

export const constructorDetails = (
  <ul className={styles.list}>
    <tr>
      <th className={styles.infoTitle}>Full Team Name </th>
      <td className={styles.info}>Mercedes-AMG PETRONAS F1 Team</td>
    </tr>
    <tr>
      <th className={styles.infoTitle}>Base</th>
      <td className={styles.info}>Brackley, United Kingdom</td>
    </tr>
    <tr>
      <th className={styles.infoTitle}>Team Chief </th>
      <td className={styles.info}>Toto Wolff</td>
    </tr>
    <tr>
      <th className={styles.infoTitle}>Technical Chief </th>
      <td className={styles.info}>Mike Elliott</td>
    </tr>
    <tr>
      <th className={styles.infoTitle}>Chassis</th>
      <td className={styles.info}>W14</td>
    </tr>
  </ul>
);

export const DUMMY_SLIDES = [
  {
    image:
      "https://i.dailymail.co.uk/1s/2019/05/10/12/13337286-0-image-a-59_1557487394169.jpg",
    id: "childhood-1",
  },
  {
    image:
      "https://cdn-wp.thesportsrush.com/2021/11/6b19e5c4-personal-vlog-youtube-thumbnail-14.jpg",
    id: "childhood-2",
  },
  {
    image:
      "https://cdn-wp.thesportsrush.com/2022/05/99dce0d0-personal-vlog-youtube-thumbnail-2022-05-23t153625.781.jpg",
    id: "roscoe",
  },
  {
    image:
      "https://cdn.racingnews365.com/2020/Hamilton/_1125x633_crop_center-center_85_none/EmxwR0yXIAIwrEc.jpeg?v=1646228787",
    id: "in-car",
  },
  {
    image:
      "http://images.gmanews.tv/webpics/2020/11/2020-11-15T131439Z_799032415_UP1EGBF0YUUR6_RTRMADP_3_MOTOR-F1-TURKEY_2020_11_15_22_22_41.JPG",
    id: "7th-title",
  },
];

export const NATIONALITY_TO_CODE = {
  Dutch: "NED",
  Mexican: "MEX",
  Spanish: "ESP",
  British: "GBR",
  Monegasque: "MON",
  Finnish: "FIN",
  French: "FRA",
  Danish: "DEN",
  Thai: "THA",
  Japanese: "JPN",
  German: "GER",
  American: "USA",
  Chinese: "CHN",
  Australian: "AUS",
  Canadian: "CAN",
  Austrian: "AUT",
  Italian: "ITA",
  Swiss: "CHE",
};

export const FLAGS = {
  Dutch: "netherlands",
  Mexican: "mexico",
  Spanish: "spain",
  British: "uk",
  Monegasque: "monaco",
  Finnish: "finland",
  French: "france",
  Danish: "denmark",
  Thai: "thailand",
  Japanese: "japan",
  German: "germany",
  American: "usa",
  Chinese: "china",
  Australian: "australia",
  Canadian: "canada",
  Austrian: "austria",
  Italian: "italy",
  Swiss: "switzerland",
};

export const ascendingSortHandler = (a, b) => {
  if (a.permanentNumber * 1 < b.permanentNumber * 1) {
    return -1;
  }

  if (a.permanentNumber * 1 > b.permanentNumber * 1) {
    return 1;
  }
  return 0;
};

export const alphabeticSortHandler = (a, b) => {
  if (a.nationality < b.nationality) {
    return -1;
  }
  if (a.nationality > b.nationality) {
    return 1;
  }
  return 0;
};
