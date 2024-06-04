import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Herosection = () => {
  const backgroundImage = "url('img/herosection.jpeg')"; // Replace with your image URL

  return (
    <section
      className="w-full px-10 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-8xl mx-auto"
      style={{ backgroundImage , backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"}}
    >
      <div>
        <span className="block mb-4 text-xs md:text-sm text-blue font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-blue">
          Lets change it up a bit
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        Established in 2016, Ghavri Sports Foundation stands as a beacon of excellence in 
        cricket training in Indore. Our academy is dedicated to nurturing young talent and transforming them into skilled cricketers of tomorrow.

        </p>
      
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://www.shutterstock.com/shutterstock/photos/2341675921/display_1500/stock-photo-front-view-of-cricket-batsman-action-cricket-game-closeup-player-batting-ball-2341675921.jpg",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1589801258579-18e091f4ca26?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1595210382051-4d2c31fcc2f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    src: "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/252600/252600.jpg",
  },
  {
    id: 6,
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/esci/media/motion/2023/1216/dm_231216_INET_CRIC_INDvsENG_TESTREVIEW_GLOBAL/dm_231216_INET_CRIC_INDvsENG_TESTREVIEW_GLOBAL.jpg",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDjXnqiLKcohu0LuoTt7IS5Gh41xl3aOZ3g&s",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5Gv1OzjPhOUVkl9k9itNW5TsroiXD6s01Q&s",
  },
  {
    id: 11,
    src: "https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=",
  },
  {
    id: 12,
    src: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/Delhi_compress.jpg",
  },
  {
    id: 13,
    src: "https://images.livemint.com/img/2023/01/17/1140x641/Big_Story_cricket_1673964347978_1673964358491_1673964358491.jpg",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images1.dnaindia.com/images/DNA-EN/900x1600/2023/7/19/1689764851119_27291066526687303932714832112344277558020981n.jpg",
  },
  {
    id: 16,
    src: "https://y20india.in/wp-content/uploads/2024/04/TeamIndia.webp",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Herosection;
