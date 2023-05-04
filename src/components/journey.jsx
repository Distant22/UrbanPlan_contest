import { useState, useEffect } from "react";
import { getJourney } from "./getJourney";

export default function Journey({result}) {
  const [journeys, setJourneys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const journeyList = await getJourney(result);
      setJourneys(journeyList);
      setIsLoading(false);
    }
    fetchData();
  });


  return (
    <>
      {isLoading ? (
          <p className="text-lg p-8 font-bold text-gray-600">載入中...</p>
      ) : (
      <ul>
        {journeys.length === 0 && 
            <p class="p-8 font-bold text-gray-600">
              找不到結果QQ<br /><br />
              請確認以下內容是否設定正確：<br/>
              1. 將「台」替換為「臺」字。 Ex：臺南市 <br />
              2. 時間設定正確 <br />
              3. 網路狀態良好
            </p>
        }
        {journeys.map((journey) => (
          <div className="w-1/1 h-[10rem] rounded-3xl bg-gray-300 my-2 mx-4 p-4 font-bold">
              <li key={`${journey.Id}-${journey.Name}`}>
                  { journey.Picture1 !== "" &&
                  <>
                    <div className="flex">
                      <div className="flex">
                        <img alt="journey-pic" src={journey.Picture1} className="h-[8rem] w-[12rem] rounded-2xl"></img>
                      </div>
                      <div className="w-full ml-4">
                        <div className="text-lg">{journey.Name}</div>
                        <div className="text-sm text-gray-600">{journey.Add}</div>
                        <div className="line-clamp-2 mt-1">{journey.Toldescribe}</div>
                      </div>
                    </div>
                  </>
                  }
                  { journey.Picture1 === "" &&
                    <div className="flex">
                      <div className="h-[8rem] w-[12rem] rounded-2xl bg-gray-200 font-bold text-gray-600 text-sm flex justify-center items-center">
                        <p>未提供圖片</p>
                      </div>
                      <div className="w-full ml-4">
                        <div className="text-lg ">{journey.Name}</div>
                        <div className="text-sm text-gray-600">{journey.Add}</div>
                        <div className="line-clamp-2 mt-1">{journey.Toldescribe}</div>
                      </div>
                    </div>
                  }
              </li>
          </div>
        ))}
      </ul>
      )}
    </>
  );
}
