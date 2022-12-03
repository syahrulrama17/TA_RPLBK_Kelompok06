import React, { useState, useContext } from "react";
import  {prediction}  from "../components/Indexa";


const PredictionContext = React.createContext(prediction.syahrul);
export default function About() {
    const [count, setCount] = useState(0);
    const [prediksi, setPrediksi] = useState(prediction.syahrul);
    const countUp = () => {
        setCount(count + 1);
        changePrediction();
    };  
    const countDown = () => {
        setCount(count - 1);
        changePrediction();
        
    };

    const changePrediction = () => {
        if (count %4 === 3 ){
            setPrediksi(prediction.ishaq);
            console.log("ishaq");
        }

        if (count %4 === 2 ){
            setPrediksi(prediction.seto);
            console.log("seto");
        }

        if (count %4 === 1 ){
            setPrediksi(prediction.farras);
            console.log("farras");
        }

        if (count %4 === 0 ){
            setPrediksi(prediction.syahrul);
            console.log("syahrul");
        }

    }

    return (
     
        <div className="Main">
            <h1>Kelompok 06</h1>
                <PredictionContext.Provider value={{ prediksi, changePrediction }}>
            <div>

            <p className="bold">Anggota Kelompok 06</p>
                
                <PredictedCard />

                

            </div>
        </PredictionContext.Provider>


            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Buttona" onClick={countUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Buttona" onClick={countDown}>
                        Down
                    </button>
                </div>
            </div>

            

        </div>
    );
}


function PredictedCard() {
    const { prediksi } = useContext(PredictionContext);
    return (
        <div className="card" style={{border: `2px solid ${prediksi.color}`}}>
          <img src={prediksi.image} alt="avatar" />
              <h3 style={{textAlign:"center", color: prediksi.color}}>{prediksi.lambang}</h3>
             <p className="nim">{prediksi.nim}</p>
        </div>

    )

}